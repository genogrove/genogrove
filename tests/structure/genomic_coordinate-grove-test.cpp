/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// genogrove
#include <genogrove/data_type/genomic_coordinate.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/node.hpp>
#include <genogrove/utility/ranges.hpp>

// standard
#include <variant>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;
namespace ggu = genogrove::utility;

// =============================================================================
// Basic Genomic Coordinate Grove Tests
// =============================================================================

TEST(GenomicCoordinateGroveTest, creationAndQueryUnsorted) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Create coordinates with different strands
    gdt::genomic_coordinate coord1('+', 5, 10);
    gdt::genomic_coordinate coord2('+', 15, 20);
    gdt::genomic_coordinate coord3('+', 25, 30);
    gdt::genomic_coordinate coord4('-', 35, 40);

    int val1 = 10;
    int val2 = 20;
    int val3 = 30;
    int val4 = 40;

    grove.insert_data("chr1", coord1, val1);
    grove.insert_data("chr1", coord2, val2);
    grove.insert_data("chr1", coord3, val3);
    grove.insert_data("chr1", coord4, val4);

    // Query with plus strand coordinate
    gdt::genomic_coordinate query('+', 17, 27);
    gdt::query_result<gdt::genomic_coordinate, int> result = grove.intersect(query, "chr1");

    // Should find two overlapping intervals on plus strand: coord2 and coord3
    // coord4 is on minus strand, so it won't overlap
    ASSERT_EQ(result.get_keys().size(), 2);

    auto keys = result.get_keys();

    // Verify first overlapping coordinate (coord2)
    EXPECT_EQ(keys[0]->get_value().get_strand(), '+');
    EXPECT_EQ(keys[0]->get_value().get_start(), 15);
    EXPECT_EQ(keys[0]->get_value().get_end(), 20);
    EXPECT_EQ(keys[0]->get_data(), 20);

    // Verify second overlapping coordinate (coord3)
    EXPECT_EQ(keys[1]->get_value().get_strand(), '+');
    EXPECT_EQ(keys[1]->get_value().get_start(), 25);
    EXPECT_EQ(keys[1]->get_value().get_end(), 30);
    EXPECT_EQ(keys[1]->get_data(), 30);
}

TEST(GenomicCoordinateGroveTest, creationAndQuerySorted) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Insert sorted coordinates on plus strand
    gdt::genomic_coordinate coord1('+', 5, 10);
    gdt::genomic_coordinate coord2('+', 10, 15);
    gdt::genomic_coordinate coord3('+', 20, 30);
    gdt::genomic_coordinate coord4('+', 40, 50);

    int val1 = 10;
    int val2 = 20;
    int val3 = 30;
    int val4 = 40;

    grove.insert_data("chr1", coord1, val1, gst::sorted);
    grove.insert_data("chr1", coord2, val2, gst::sorted);
    grove.insert_data("chr1", coord3, val3, gst::sorted);
    grove.insert_data("chr1", coord4, val4, gst::sorted);

    // Query
    gdt::genomic_coordinate query('+', 18, 42);
    gdt::query_result<gdt::genomic_coordinate, int> result = grove.intersect(query, "chr1");

    // Should find two overlapping coordinates (coord3 and coord4)
    ASSERT_EQ(result.get_keys().size(), 2);

    auto keys = result.get_keys();

    // Verify first overlapping coordinate
    EXPECT_EQ(keys[0]->get_value().get_strand(), '+');
    EXPECT_EQ(keys[0]->get_value().get_start(), 20);
    EXPECT_EQ(keys[0]->get_value().get_end(), 30);
    EXPECT_EQ(keys[0]->get_data(), 30);

    // Verify second overlapping coordinate
    EXPECT_EQ(keys[1]->get_value().get_strand(), '+');
    EXPECT_EQ(keys[1]->get_value().get_start(), 40);
    EXPECT_EQ(keys[1]->get_value().get_end(), 50);
    EXPECT_EQ(keys[1]->get_data(), 40);
}

TEST(GenomicCoordinateGroveTest, strandSpecificQuery) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Insert coordinates on both strands at overlapping positions
    gdt::genomic_coordinate plus1('+', 10, 20);
    gdt::genomic_coordinate plus2('+', 25, 35);
    gdt::genomic_coordinate minus1('-', 15, 25);
    gdt::genomic_coordinate minus2('-', 30, 40);

    grove.insert_data("chr1", plus1, 10);
    grove.insert_data("chr1", plus2, 20);
    grove.insert_data("chr1", minus1, 30);
    grove.insert_data("chr1", minus2, 40);

    // gst::node<gdt::genomic_coordinate, int>* root = grove.get_root("chr1");
    // grove.grove_to_sif(std::cout, root);

    // Query with plus strand - should find only plus strand coordinates
    gdt::genomic_coordinate query_plus('+', 5, 40);
    auto result_plus = grove.intersect(query_plus, "chr1");

    ASSERT_EQ(result_plus.get_keys().size(), 2);
    for (auto* key : result_plus.get_keys()) {
        EXPECT_EQ(key->get_value().get_strand(), '+');
    }

    // Query with minus strand - should find only minus strand coordinates
    gdt::genomic_coordinate query_minus('-', 5, 40);
    auto result_minus = grove.intersect(query_minus, "chr1");

    ASSERT_EQ(result_minus.get_keys().size(), 2);
    for (auto* key : result_minus.get_keys()) {
        EXPECT_EQ(key->get_value().get_strand(), '-');
    }
}

TEST(GenomicCoordinateGroveTest, mixedStrandsStrandGrouping) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Insert coordinates at same position with different strands
    // With strand-first sorting (. < + < -), these are grouped by strand
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 10, 20), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 20), 20);
    grove.insert_data("chr1", gdt::genomic_coordinate('.', 10, 20), 30);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 5, 15), 40);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 5, 15), 50);

    // Query with unstranded coordinate - strict matching finds only unstranded
    gdt::genomic_coordinate query('.', 8, 18);
    auto result = grove.intersect(query, "chr1");

    // Unstranded query finds only unstranded coordinate
    ASSERT_EQ(result.get_keys().size(), 1);
    EXPECT_EQ(result.get_keys()[0]->get_data(), 30);  // ., 10-20
}

TEST(GenomicCoordinateGroveTest, multipleIndicesWithStrands) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Insert coordinates on different chromosomes with different strands
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 20), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 10, 20), 20);
    grove.insert_data("chr2", gdt::genomic_coordinate('+', 10, 20), 30);
    grove.insert_data("chr2", gdt::genomic_coordinate('-', 10, 20), 40);

    // Query chr1 with plus strand
    gdt::genomic_coordinate query_chr1('+', 12, 18);
    auto result_chr1 = grove.intersect(query_chr1, "chr1");

    ASSERT_EQ(result_chr1.get_keys().size(), 1);
    EXPECT_EQ(result_chr1.get_keys()[0]->get_value().get_strand(), '+');
    EXPECT_EQ(result_chr1.get_keys()[0]->get_data(), 10);

    // Query chr2 with minus strand
    gdt::genomic_coordinate query_chr2('-', 12, 18);
    auto result_chr2 = grove.intersect(query_chr2, "chr2");

    ASSERT_EQ(result_chr2.get_keys().size(), 1);
    EXPECT_EQ(result_chr2.get_keys()[0]->get_value().get_strand(), '-');
    EXPECT_EQ(result_chr2.get_keys()[0]->get_data(), 40);
}

TEST(GenomicCoordinateGroveTest, adjacentCoordinatesSameStrand) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Insert adjacent coordinates on same strand (they should overlap at boundary)
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 20), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 20, 30), 20);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 30, 40), 30);

    // Query at boundary - should find coordinates that touch at 20
    gdt::genomic_coordinate query('+', 20, 20);
    auto result = grove.intersect(query, "chr1");

    // Boundary coordinates overlap
    EXPECT_GE(result.get_keys().size(), 2);
}

TEST(GenomicCoordinateGroveTest, noOverlapDifferentStrands) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Insert coordinates at same position but different strands
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 20), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 10, 20), 20);

    // Query with plus strand
    gdt::genomic_coordinate query('+', 10, 20);
    auto result = grove.intersect(query, "chr1");

    // Should only find plus strand coordinate
    ASSERT_EQ(result.get_keys().size(), 1);
    EXPECT_EQ(result.get_keys()[0]->get_value().get_strand(), '+');
    EXPECT_EQ(result.get_keys()[0]->get_data(), 10);
}

// =============================================================================
// Heterogeneous Grove Tests with Genomic Coordinates
// =============================================================================

using TestVariant = std::variant<std::monostate, int, double, std::string>;

TEST(GenomicCoordinateGroveTest, variantInsertionAndQuery) {
    gst::grove<gdt::genomic_coordinate, TestVariant> grove(3);

    // Insert different types with different strands
    gdt::genomic_coordinate coord1('+', 10, 20);
    gdt::genomic_coordinate coord2('-', 30, 40);
    gdt::genomic_coordinate coord3('+', 50, 60);

    grove.insert_data("chr1", coord1, 42);                    // int
    grove.insert_data("chr1", coord2, 3.14);                  // double
    grove.insert_data("chr1", coord3, std::string("exon"));   // string

    // Query plus strand with wider range to ensure finding both coordinates
    gdt::genomic_coordinate query('+', 5, 65);
    auto results = grove.intersect(query, "chr1");

    // Should find two plus strand coordinates
    ASSERT_EQ(results.get_keys().size(), 2);

    auto keys = results.get_keys();

    // First key should have int
    EXPECT_EQ(keys[0]->get_value().get_strand(), '+');
    EXPECT_TRUE(std::holds_alternative<int>(keys[0]->get_data()));
    EXPECT_EQ(std::get<int>(keys[0]->get_data()), 42);

    // Second key should have string
    EXPECT_EQ(keys[1]->get_value().get_strand(), '+');
    EXPECT_TRUE(std::holds_alternative<std::string>(keys[1]->get_data()));
    EXPECT_EQ(std::get<std::string>(keys[1]->get_data()), "exon");
}

// Custom struct for gene annotation testing
struct gene_annotation {
    std::string name;
    int score;

    bool operator==(const gene_annotation& other) const {
        return name == other.name && score == other.score;
    }
};

// Specialization for gene_annotation serialization
namespace genogrove::data_type {
template<>
struct serialization_traits<gene_annotation> {
    static void serialize(std::ostream& os, const gene_annotation& data) {
        size_t len = data.name.size();
        os.write(reinterpret_cast<const char*>(&len), sizeof(len));
        os.write(data.name.c_str(), len);
        os.write(reinterpret_cast<const char*>(&data.score), sizeof(data.score));
    }

    static gene_annotation deserialize(std::istream& is) {
        gene_annotation data;
        size_t len;
        is.read(reinterpret_cast<char*>(&len), sizeof(len));
        data.name.resize(len);
        is.read(&data.name[0], len);
        is.read(reinterpret_cast<char*>(&data.score), sizeof(data.score));
        return data;
    }
};
}

TEST(GenomicCoordinateGroveTest, customStructWithStrand) {
    gst::grove<gdt::genomic_coordinate, gene_annotation> grove(3);

    // Insert gene annotations on both strands
    gene_annotation gene1{"BRCA1", 95};
    gene_annotation gene2{"TP53", 87};

    grove.insert_data("chr17", gdt::genomic_coordinate('+', 43044295, 43125483), gene1);
    grove.insert_data("chr17", gdt::genomic_coordinate('-', 7661779, 7687550), gene2);

    // Query plus strand
    gdt::genomic_coordinate query_plus('+', 43050000, 43100000);
    auto result_plus = grove.intersect(query_plus, "chr17");

    ASSERT_EQ(result_plus.get_keys().size(), 1);
    auto retrieved = result_plus.get_keys()[0]->get_data();
    EXPECT_EQ(retrieved.name, "BRCA1");
    EXPECT_EQ(retrieved.score, 95);
    EXPECT_EQ(result_plus.get_keys()[0]->get_value().get_strand(), '+');

    // Query minus strand
    gdt::genomic_coordinate query_minus('-', 7670000, 7680000);
    auto result_minus = grove.intersect(query_minus, "chr17");

    ASSERT_EQ(result_minus.get_keys().size(), 1);
    auto retrieved_minus = result_minus.get_keys()[0]->get_data();
    EXPECT_EQ(retrieved_minus.name, "TP53");
    EXPECT_EQ(retrieved_minus.score, 87);
    EXPECT_EQ(result_minus.get_keys()[0]->get_value().get_strand(), '-');
}

TEST(GenomicCoordinateGroveTest, emptyQuery) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 20), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 30, 40), 20);

    // Query region with no overlaps
    gdt::genomic_coordinate query('+', 50, 60);
    auto result = grove.intersect(query, "chr1");

    EXPECT_EQ(result.get_keys().size(), 0);
}

TEST(GenomicCoordinateGroveTest, singleCoordinateQuery) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    grove.insert_data("chr1", gdt::genomic_coordinate('+', 100, 200), 42);

    // Query exactly at that coordinate
    gdt::genomic_coordinate query('+', 100, 200);
    auto result = grove.intersect(query, "chr1");

    ASSERT_EQ(result.get_keys().size(), 1);
    EXPECT_EQ(result.get_keys()[0]->get_data(), 42);
}

TEST(GenomicCoordinateGroveTest, unstrandedQueryFindsOnlyUnstranded) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Insert coordinates on different strands at overlapping positions
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 30), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 20, 40), 20);
    grove.insert_data("chr1", gdt::genomic_coordinate('.', 25, 45), 30);

    // Strict matching: unstranded query finds only unstranded coordinates
    gdt::genomic_coordinate unstranded_query('.', 25, 45);
    auto result = grove.intersect(unstranded_query, "chr1");

    // Should find only the unstranded coordinate
    ASSERT_EQ(result.get_keys().size(), 1);
    EXPECT_EQ(result.get_keys()[0]->get_value().get_strand(), '.');
    EXPECT_EQ(result.get_keys()[0]->get_data(), 30);
}

TEST(GenomicCoordinateGroveTest, strandedQueryFindsOnlyMatchingStrand) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Insert coordinates: plus strand, minus strand, and unstranded
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 30), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 40, 60), 70);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 80, 100), 90);

    grove.insert_data("chr1", gdt::genomic_coordinate('-', 10, 30), 20);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 50, 90), 50);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 100, 120), 70);

    grove.insert_data("chr1", gdt::genomic_coordinate('.', 10, 30), 30);
    grove.insert_data("chr1", gdt::genomic_coordinate('.', 25, 85), 40);

    // std::cout << "Grove contents:" << std::endl;
    // gst::node<gdt::genomic_coordinate, int>* root = grove.get_root("chr1");
    // grove.grove_to_sif(std::cout, root);

    // Stranded query finds ONLY matching strand (strict matching)
    gdt::genomic_coordinate plus_query('+', 15, 85);
    auto result_plus = grove.intersect(plus_query, "chr1");

    ASSERT_EQ(result_plus.get_keys().size(), 3);
    EXPECT_EQ(result_plus.get_keys()[0]->get_value().get_strand(), '+');
    EXPECT_EQ(result_plus.get_keys()[0]->get_data(), 10);
    EXPECT_EQ(result_plus.get_keys()[1]->get_value().get_strand(), '+');
    EXPECT_EQ(result_plus.get_keys()[1]->get_data(), 70);
    EXPECT_EQ(result_plus.get_keys()[2]->get_value().get_strand(), '+');
    EXPECT_EQ(result_plus.get_keys()[2]->get_data(), 90);

    // Stranded query finds ONLY matching strand (strict matching)
    gdt::genomic_coordinate minus_query('-', 15, 55);
    auto result_minus = grove.intersect(minus_query, "chr1");

    ASSERT_EQ(result_minus.get_keys().size(), 2);
    EXPECT_EQ(result_minus.get_keys()[0]->get_value().get_strand(), '-');
    EXPECT_EQ(result_minus.get_keys()[0]->get_data(), 20);
    EXPECT_EQ(result_minus.get_keys()[1]->get_value().get_strand(), '-');
    EXPECT_EQ(result_minus.get_keys()[1]->get_data(), 50);

    // Unstranded query finds unstranded
    gdt::genomic_coordinate unstranded_query('.', 15, 55);
    auto result_unstranded = grove.intersect(unstranded_query, "chr1");

    ASSERT_EQ(result_unstranded.get_keys().size(), 2);
    EXPECT_EQ(result_unstranded.get_keys()[0]->get_value().get_strand(), '.');
    EXPECT_EQ(result_unstranded.get_keys()[0]->get_data(), 30);
    EXPECT_EQ(result_unstranded.get_keys()[1]->get_value().get_strand(), '.');
    EXPECT_EQ(result_unstranded.get_keys()[1]->get_data(), 40);
}

TEST(GenomicCoordinateGroveTest, wildcardQueryFindsAllStrands) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    // Insert coordinates on different strands at overlapping positions
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 30), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 40, 60), 40);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 20, 50), 20);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 55, 75), 55);
    grove.insert_data("chr1", gdt::genomic_coordinate('.', 15, 45), 15);

    // Wildcard query (*) should find all overlapping coordinates regardless of strand
    gdt::genomic_coordinate wildcard_query('*', 25, 65);
    auto result = grove.intersect(wildcard_query, "chr1");

    // Should find all coordinates that overlap with query range
    ASSERT_EQ(result.get_keys().size(), 5);

    // Verify all strands are included
    bool found_plus = false, found_minus = false, found_dot = false;
    for (auto* key : result.get_keys()) {
        if (key->get_value().get_strand() == '+') found_plus = true;
        if (key->get_value().get_strand() == '-') found_minus = true;
        if (key->get_value().get_strand() == '.') found_dot = true;
    }
    EXPECT_TRUE(found_plus);
    EXPECT_TRUE(found_minus);
    EXPECT_TRUE(found_dot);
}
