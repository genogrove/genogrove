/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <gtest/gtest.h>
#include <genogrove/utility/tokenizer.hpp>

namespace ggu = genogrove::utility;

TEST(tokenizer, three_tab_fields) {
    std::string_view line = "chr1\t100\t200";
    size_t pos = 0;

    auto f1 = ggu::next_field(line, pos);
    auto f2 = ggu::next_field(line, pos);
    auto f3 = ggu::next_field(line, pos);
    auto f4 = ggu::next_field(line, pos);

    ASSERT_TRUE(f1.has_value());
    ASSERT_TRUE(f2.has_value());
    ASSERT_TRUE(f3.has_value());
    EXPECT_FALSE(f4.has_value());

    EXPECT_EQ(*f1, "chr1");
    EXPECT_EQ(*f2, "100");
    EXPECT_EQ(*f3, "200");
}

TEST(tokenizer, single_field_no_delimiter) {
    std::string_view line = "hello";
    size_t pos = 0;

    auto f1 = ggu::next_field(line, pos);
    auto f2 = ggu::next_field(line, pos);

    ASSERT_TRUE(f1.has_value());
    EXPECT_EQ(*f1, "hello");
    EXPECT_FALSE(f2.has_value());
}

TEST(tokenizer, empty_string) {
    std::string_view line = "";
    size_t pos = 0;

    EXPECT_FALSE(ggu::next_field(line, pos).has_value());
}

TEST(tokenizer, empty_fields_consecutive_delimiters) {
    std::string_view line = "a\t\tb";
    size_t pos = 0;

    auto f1 = ggu::next_field(line, pos);
    auto f2 = ggu::next_field(line, pos);
    auto f3 = ggu::next_field(line, pos);

    ASSERT_TRUE(f1.has_value());
    ASSERT_TRUE(f2.has_value());
    ASSERT_TRUE(f3.has_value());

    EXPECT_EQ(*f1, "a");
    EXPECT_EQ(*f2, "");
    EXPECT_EQ(*f3, "b");
}

TEST(tokenizer, trailing_delimiter) {
    // Trailing delimiter does NOT produce an extra empty field —
    // matches std::getline behavior and avoids breaking parse_csv
    // for BED12 block fields with trailing commas (e.g. "100,200,")
    std::string_view line = "a\tb\t";
    size_t pos = 0;

    auto f1 = ggu::next_field(line, pos);
    auto f2 = ggu::next_field(line, pos);
    auto f3 = ggu::next_field(line, pos);

    ASSERT_TRUE(f1.has_value());
    ASSERT_TRUE(f2.has_value());
    EXPECT_FALSE(f3.has_value());

    EXPECT_EQ(*f1, "a");
    EXPECT_EQ(*f2, "b");
}

TEST(tokenizer, custom_delimiter_comma) {
    std::string_view line = "255,128,0";
    size_t pos = 0;

    auto f1 = ggu::next_field(line, pos, ',');
    auto f2 = ggu::next_field(line, pos, ',');
    auto f3 = ggu::next_field(line, pos, ',');
    auto f4 = ggu::next_field(line, pos, ',');

    ASSERT_TRUE(f1.has_value());
    ASSERT_TRUE(f2.has_value());
    ASSERT_TRUE(f3.has_value());
    EXPECT_FALSE(f4.has_value());

    EXPECT_EQ(*f1, "255");
    EXPECT_EQ(*f2, "128");
    EXPECT_EQ(*f3, "0");
}

TEST(tokenizer, custom_delimiter_semicolon) {
    std::string_view line = "gene_id \"ABC\"; transcript_id \"XYZ\"";
    size_t pos = 0;

    auto f1 = ggu::next_field(line, pos, ';');
    auto f2 = ggu::next_field(line, pos, ';');
    auto f3 = ggu::next_field(line, pos, ';');

    ASSERT_TRUE(f1.has_value());
    ASSERT_TRUE(f2.has_value());
    EXPECT_FALSE(f3.has_value());

    EXPECT_EQ(*f1, "gene_id \"ABC\"");
    EXPECT_EQ(*f2, " transcript_id \"XYZ\"");
}

TEST(tokenizer, gtf_field_simple_key_value) {
    std::string_view line = "gene_id \"ABC\"; transcript_id \"XYZ\"";
    size_t pos = 0;

    auto f1 = ggu::next_gtf_field(line, pos);
    auto f2 = ggu::next_gtf_field(line, pos);
    auto f3 = ggu::next_gtf_field(line, pos);

    ASSERT_TRUE(f1.has_value());
    ASSERT_TRUE(f2.has_value());
    EXPECT_FALSE(f3.has_value());

    EXPECT_EQ(*f1, "gene_id \"ABC\"");
    EXPECT_EQ(*f2, " transcript_id \"XYZ\"");
}

TEST(tokenizer, gtf_field_quoted_semicolons) {
    // Semicolons inside double-quoted values must not split the field.
    std::string_view line = "gene_id \"A;B;C\"; transcript_id \"X\"";
    size_t pos = 0;

    auto f1 = ggu::next_gtf_field(line, pos);
    auto f2 = ggu::next_gtf_field(line, pos);
    auto f3 = ggu::next_gtf_field(line, pos);

    ASSERT_TRUE(f1.has_value());
    ASSERT_TRUE(f2.has_value());
    EXPECT_FALSE(f3.has_value());

    EXPECT_EQ(*f1, "gene_id \"A;B;C\"");
    EXPECT_EQ(*f2, " transcript_id \"X\"");
}

TEST(tokenizer, gtf_field_unbalanced_quote) {
    // An unterminated quote leaves the tokenizer "in quotes" to end-of-line,
    // so the whole remainder is returned as a single field (no crash).
    std::string_view line = "gene_id \"unterminated";
    size_t pos = 0;

    auto f1 = ggu::next_gtf_field(line, pos);
    auto f2 = ggu::next_gtf_field(line, pos);

    ASSERT_TRUE(f1.has_value());
    EXPECT_FALSE(f2.has_value());

    EXPECT_EQ(*f1, "gene_id \"unterminated");
}

TEST(tokenizer, gtf_field_empty_string) {
    std::string_view line = "";
    size_t pos = 0;

    EXPECT_FALSE(ggu::next_gtf_field(line, pos).has_value());
}

TEST(tokenizer, gtf_field_trailing_semicolon) {
    // GTF attribute lines end with a trailing ';' — it must not yield an
    // extra empty field.
    std::string_view line = "gene_id \"ABC\";";
    size_t pos = 0;

    auto f1 = ggu::next_gtf_field(line, pos);
    auto f2 = ggu::next_gtf_field(line, pos);

    ASSERT_TRUE(f1.has_value());
    EXPECT_FALSE(f2.has_value());

    EXPECT_EQ(*f1, "gene_id \"ABC\"");
}
