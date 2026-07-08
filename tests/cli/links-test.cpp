/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <sstream>
#include <stdexcept>
#include <string>

// genogrove cli
#include <handlers/links.hpp>

namespace {
    std::stringstream tsv(const std::string& content) {
        return std::stringstream(content, std::ios::in | std::ios::binary);
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