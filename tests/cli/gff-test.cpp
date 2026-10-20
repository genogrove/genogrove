/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Direct in-process tests for handlers::gff — the GFF/GTF counterpart of
// intersect-test.cpp's handlers::bed coverage. The e2e tests in
// index-e2e-test.cpp exercise the same paths through a subprocess; these give
// a direct assertion and stack trace instead of stdout string matching.

// gtest
#include <gtest/gtest.h>

// standard
#include <filesystem>
#include <fstream>
#include <sstream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/gff_reader.hpp>
#include <genogrove/structure/grove/grove.hpp>

// cli
#include <handlers/gff.hpp>
#include <handlers/links.hpp>

namespace fs = std::filesystem;
namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

namespace {
using gff_grove = ggs::grove<gdt::interval, gio::gff_entry, std::string>;

void write_file(const fs::path& p, const std::string& content) {
    std::ofstream out(p);
    out << content;
}
} // namespace

// ==========================================
// Test Fixture
// ==========================================

class CLIGffHandlerTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path target_path;  // target.gff: gene1 chr1 101-500, gene2 chr1 601-900, gene3 chr2 201-400
    fs::path tmp_gff;
    fs::path tmp_links;

    void SetUp() override {
        test_data_dir = fs::current_path() / "cli" / "data";
        target_path = test_data_dir / "target.gff";
        tmp_gff = fs::temp_directory_path() / "genogrove_cli_gff_test.gff";
        tmp_links = fs::temp_directory_path() / "genogrove_cli_gff_test_links.tsv";
        ASSERT_TRUE(fs::exists(target_path)) << target_path;
    }

    void TearDown() override {
        for (const auto& p : {tmp_gff, tmp_links}) {
            if (fs::exists(p)) {
                fs::remove(p);
            }
        }
    }
};

// ==========================================
// grove_insert: coordinate conversion
// ==========================================

TEST_F(CLIGffHandlerTest, GroveInsertConvertsOneBasedToZeroBasedInclusive) {
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, target_path.string());

    // gene1 is GFF [101, 500] (1-based inclusive) -> interval [100, 499].
    EXPECT_EQ(grove.intersect(gdt::interval(100, 100), "chr1").get_keys().size(), 1u);
    EXPECT_EQ(grove.intersect(gdt::interval(499, 499), "chr1").get_keys().size(), 1u);
    EXPECT_EQ(grove.intersect(gdt::interval(99, 99), "chr1").get_keys().size(), 0u);
    // [500, 500] lies between gene1 ([100,499]) and gene2 ([600,899]).
    EXPECT_EQ(grove.intersect(gdt::interval(500, 500), "chr1").get_keys().size(), 0u);

    // The stored payload keeps the raw 1-based GFF coordinates for printing.
    auto hits = grove.intersect(gdt::interval(100, 100), "chr1");
    ASSERT_EQ(hits.get_keys().size(), 1u);
    const auto& payload = hits.get_keys()[0]->get_data();
    EXPECT_EQ(payload.start, 101u);
    EXPECT_EQ(payload.end, 500u);
}

TEST_F(CLIGffHandlerTest, GroveInsertPerIndexCounts) {
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, target_path.string());

    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr1").get_keys().size(), 2u);
    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr2").get_keys().size(), 1u);
    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr3").get_keys().size(), 0u);
}

TEST_F(CLIGffHandlerTest, GroveInsertSortedPathMatchesUnsorted) {
    // target.gff is ordered, so the sorted-append fast path must yield the
    // same contents as the default insert.
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, target_path.string(), /*sorted=*/true);

    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr1").get_keys().size(), 2u);
    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr2").get_keys().size(), 1u);
}

// ==========================================
// grove_insert: name map (attribute-based name resolution)
// ==========================================

TEST_F(CLIGffHandlerTest, NameMapResolvesChosenAttribute) {
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    handlers::gff::grove_insert(grove, target_path.string(), false, &name_map, "ID");

    ASSERT_EQ(name_map.size(), 3u);
    // Heterogeneous lookup: a string_view probe without constructing a string.
    auto it = name_map.find(std::string_view("gene2"));
    ASSERT_NE(it, name_map.end());
    EXPECT_EQ(it->second->get_data().seqid, "chr1");
    EXPECT_EQ(it->second->get_data().start, 601u);
    EXPECT_EQ(it->second->get_data().end, 900u);

    // The mapped pointer is the key the grove returns for that interval.
    auto hits = grove.intersect(gdt::interval(700, 700), "chr1");
    ASSERT_EQ(hits.get_keys().size(), 1u);
    EXPECT_EQ(hits.get_keys()[0], it->second);
}

TEST_F(CLIGffHandlerTest, NameMapKeysPointIntoStoredPayload) {
    // The map's string_view must alias the grove-owned attribute value (stable
    // key_storage), not the reader's per-record buffer that is gone by now.
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    handlers::gff::grove_insert(grove, target_path.string(), false, &name_map, "ID");

    auto it = name_map.find(std::string_view("gene1"));
    ASSERT_NE(it, name_map.end());
    const std::string& stored = it->second->get_data().attributes.at("ID");
    EXPECT_EQ(it->first.data(), stored.data());
}

TEST_F(CLIGffHandlerTest, NameMapMissingTagThrows) {
    // target.gff records carry only ID; asking for Name must fail — the user
    // picked that tag as the identifier, so a record without it is an error.
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    EXPECT_THROW(
        handlers::gff::grove_insert(grove, target_path.string(), false, &name_map, "Name"),
        std::runtime_error);
}

TEST_F(CLIGffHandlerTest, NameMapDuplicateValueThrows) {
    write_file(tmp_gff,
               "##gff-version 3\n"
               "chr1\ttest\tgene\t101\t500\t.\t+\t.\tID=dup\n"
               "chr1\ttest\tgene\t601\t900\t.\t-\t.\tID=dup\n");
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    EXPECT_THROW(
        handlers::gff::grove_insert(grove, tmp_gff.string(), false, &name_map, "ID"),
        std::runtime_error);
}

TEST_F(CLIGffHandlerTest, NoNameMapIgnoresTag) {
    // Without a map the tag is never read, so a tag no record has is fine.
    gff_grove grove(3);
    EXPECT_NO_THROW(
        handlers::gff::grove_insert(grove, target_path.string(), false, nullptr, "Name"));
    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr1").get_keys().size(), 2u);
}

TEST_F(CLIGffHandlerTest, NameMapFeedsLinksApplier) {
    // End-to-end in process: resolve names through the GFF map and attach a
    // directed edge, the same way idx --links --gff-name-tag does.
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    handlers::gff::grove_insert(grove, target_path.string(), false, &name_map, "ID");
    write_file(tmp_links, "gene1\tgene3\n");

    EXPECT_EQ(handlers::links::apply_to_grove(grove, tmp_links.string(), name_map), 1u);
    auto* gene1 = name_map.at("gene1");
    auto* gene3 = name_map.at("gene3");
    EXPECT_TRUE(grove.has_edge(gene1, gene3));
    EXPECT_FALSE(grove.has_edge(gene3, gene1));
}

// ==========================================
// for_each_gff_query / print_gff_result
// ==========================================

TEST_F(CLIGffHandlerTest, ForEachGffQueryConvertsCoordinates) {
    write_file(tmp_gff,
               "##gff-version 3\n"
               "chr1\ttest\texon\t151\t250\t.\t+\t.\tID=q1\n"
               "chr2\ttest\texon\t1\t1\t.\t+\t.\tID=q2\n");
    std::vector<std::pair<std::string, gdt::interval>> seen;
    handlers::gff::for_each_gff_query(tmp_gff.string(),
        [&](gdt::interval iv, const std::string& index) { seen.emplace_back(index, iv); });

    ASSERT_EQ(seen.size(), 2u);
    EXPECT_EQ(seen[0].first, "chr1");
    EXPECT_EQ(seen[0].second, gdt::interval(150, 249));
    EXPECT_EQ(seen[1].first, "chr2");
    EXPECT_EQ(seen[1].second, gdt::interval(0, 0));  // 1-based [1,1] -> [0,0]
}

TEST_F(CLIGffHandlerTest, PrintGffResultWritesRawFieldsWithoutNewline) {
    gio::gff_entry entry;
    entry.seqid = "chr1";
    entry.start = 101;
    entry.end = 500;
    std::ostringstream out;
    handlers::gff::print_gff_result(out, entry);
    EXPECT_EQ(out.str(), "chr1\t101\t500");
}