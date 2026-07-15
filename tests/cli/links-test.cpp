/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <filesystem>
#include <fstream>
#include <sstream>
#include <stdexcept>
#include <string>

// genogrove cli
#include <handlers/links.hpp>

namespace fs = std::filesystem;
namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;

namespace {
    std::stringstream tsv(const std::string& content) {
        return std::stringstream(content, std::ios::in | std::ios::binary);
    }

    // Write a links TSV to a temp file (apply_to_grove takes a path, not a stream).
    fs::path write_tsv(const std::string& name, const std::string& content) {
        fs::path p = fs::temp_directory_path() / name;
        std::ofstream out(p);
        out << content;
        return p;
    }
}

// ==========================================
// parse_links_tsv
// ==========================================

TEST(LinksParser, parsesValidRows) {
    auto in = tsv("gene1\tgene2\ngene2\texon3\n");
    auto rows = handlers::links::parse_links_tsv(in);

    ASSERT_EQ(rows.size(), 2u);
    EXPECT_EQ(rows[0].source, "gene1");
    EXPECT_EQ(rows[0].target, "gene2");
    EXPECT_FALSE(rows[0].metadata.has_value());  // 2-column row -> no metadata
    EXPECT_EQ(rows[1].source, "gene2");
    EXPECT_EQ(rows[1].target, "exon3");
    EXPECT_FALSE(rows[1].metadata.has_value());
}

TEST(LinksParser, parsesThirdColumnAsMetadata) {
    auto in = tsv("gene1\texon3\tsupports_isoform=ENST1\ngene2\tenhancerA\n");
    auto rows = handlers::links::parse_links_tsv(in);

    ASSERT_EQ(rows.size(), 2u);
    ASSERT_TRUE(rows[0].metadata.has_value());
    EXPECT_EQ(*rows[0].metadata, "supports_isoform=ENST1");
    EXPECT_FALSE(rows[1].metadata.has_value());  // mixed 3- and 2-column rows
}

TEST(LinksParser, metadataMayContainSpacesAndEquals) {
    auto in = tsv("a\tb\thi_c score = 4.2\n");
    auto rows = handlers::links::parse_links_tsv(in);
    ASSERT_EQ(rows.size(), 1u);
    ASSERT_TRUE(rows[0].metadata.has_value());
    EXPECT_EQ(*rows[0].metadata, "hi_c score = 4.2");  // only tabs delimit
}

TEST(LinksParser, skipsCommentLines) {
    auto in = tsv("# header comment\ngene1\tgene2\n# trailing comment\n");
    auto rows = handlers::links::parse_links_tsv(in);

    ASSERT_EQ(rows.size(), 1u);
    EXPECT_EQ(rows[0].source, "gene1");
    EXPECT_EQ(rows[0].target, "gene2");
}

TEST(LinksParser, skipsBlankLines) {
    auto in = tsv("\ngene1\tgene2\n\n\ngene3\tgene4\n");
    auto rows = handlers::links::parse_links_tsv(in);

    ASSERT_EQ(rows.size(), 2u);
    EXPECT_EQ(rows[1].source, "gene3");
}

TEST(LinksParser, stripsTrailingCarriageReturn) {
    // CRLF-terminated rows must parse identically to LF.
    auto in = tsv("gene1\tgene2\r\ngene3\tgene4\r\n");
    auto rows = handlers::links::parse_links_tsv(in);

    ASSERT_EQ(rows.size(), 2u);
    EXPECT_EQ(rows[0].target, "gene2");   // not "gene2\r"
    EXPECT_EQ(rows[1].target, "gene4");
}

TEST(LinksParser, emptyInputYieldsNoRows) {
    auto in = tsv("");
    EXPECT_TRUE(handlers::links::parse_links_tsv(in).empty());
}

TEST(LinksParser, commentsAndBlanksOnlyYieldNoRows) {
    auto in = tsv("# only comments\n\n#  and blanks\n\n");
    EXPECT_TRUE(handlers::links::parse_links_tsv(in).empty());
}

TEST(LinksParser, rejectsSingleColumn) {
    auto in = tsv("gene1\ngene2\tgene3\n");
    EXPECT_THROW(handlers::links::parse_links_tsv(in), std::runtime_error);
}

TEST(LinksParser, rejectsFourColumns) {
    auto in = tsv("gene1\tgene2\tmeta\textra\n");
    EXPECT_THROW(handlers::links::parse_links_tsv(in), std::runtime_error);
}

TEST(LinksParser, rejectsEmptyColumn) {
    // A tab with an empty left or right field is malformed.
    auto in1 = tsv("gene1\t\n");
    EXPECT_THROW(handlers::links::parse_links_tsv(in1), std::runtime_error);

    auto in2 = tsv("\tgene2\n");
    EXPECT_THROW(handlers::links::parse_links_tsv(in2), std::runtime_error);
}

TEST(LinksParser, rejectsEmptyMetadataColumn) {
    // A present-but-empty 3rd column is ambiguous — reject rather than guess.
    auto in = tsv("gene1\tgene2\t\n");
    EXPECT_THROW(handlers::links::parse_links_tsv(in), std::runtime_error);
}

TEST(LinksParser, errorMessageNamesTheLineNumber) {
    auto in = tsv("gene1\tgene2\ngene3\tgene4\nbadrow\n");
    try {
        handlers::links::parse_links_tsv(in);
        FAIL() << "expected parse_links_tsv to throw";
    } catch(const std::runtime_error& e) {
        const std::string msg = e.what();
        EXPECT_NE(msg.find("line 3"), std::string::npos) << msg;
    }
}

// ==========================================
// apply_to_grove — direct unit coverage of edge creation
// (previously only exercised indirectly via subprocess e2e)
// ==========================================

namespace {
    // Build a small grove where each record's payload string is its name, plus a
    // name_map pointing each name (a view into the stable key_storage) at its key.
    using apply_grove = ggs::grove<gdt::interval, std::string, std::string>;

    gdt::key<gdt::interval, std::string>*
    add_named(apply_grove& g, handlers::name_to_key_map<std::string>& nm,
              const std::string& name, std::size_t start, std::size_t end) {
        auto* k = g.insert_data("chr1", gdt::interval{start, end}, name, ggs::sorted);
        nm.emplace(std::string_view(k->get_data()), k);  // view into stable deque storage
        return k;
    }
}

TEST(LinksApply, resolvesNamesDedupsAndCountsEdges) {
    apply_grove g(4);
    handlers::name_to_key_map<std::string> nm;
    add_named(g, nm, "geneA", 10, 20);
    add_named(g, nm, "geneB", 30, 40);
    add_named(g, nm, "geneC", 50, 60);

    // A->B appears twice (exact dup -> collapsed); A->C with two distinct
    // metadata values -> two parallel edges. Expected distinct edges: 3.
    fs::path tsv_path = write_tsv("gg_links_apply.tsv",
        "geneA\tgeneB\n"
        "geneA\tgeneB\n"          // exact duplicate row -> collapsed
        "geneA\tgeneC\tstrong\n"
        "geneA\tgeneC\tweak\n");  // same pair, different metadata -> kept

    std::size_t added = handlers::links::apply_to_grove(g, tsv_path.string(), nm);
    EXPECT_EQ(added, 3u);

    fs::remove(tsv_path);
}

TEST(LinksApply, throwsOnNameNotInMap) {
    apply_grove g(4);
    handlers::name_to_key_map<std::string> nm;
    add_named(g, nm, "geneA", 10, 20);

    fs::path tsv_path = write_tsv("gg_links_missing.tsv", "geneA\tnonexistent\n");

    try {
        handlers::links::apply_to_grove(g, tsv_path.string(), nm);
        FAIL() << "expected apply_to_grove to throw on an unresolved name";
    } catch (const std::runtime_error& e) {
        EXPECT_NE(std::string(e.what()).find("nonexistent"), std::string::npos) << e.what();
    }

    fs::remove(tsv_path);
}