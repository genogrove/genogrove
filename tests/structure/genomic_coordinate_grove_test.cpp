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

// Test base
#include "key_type_grove_test.hpp"

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
// Traits Specialization for gdt::genomic_coordinate (define ONCE)
// =============================================================================

template<>
struct grove_test_traits<gdt::genomic_coordinate, int> {
    static std::vector<std::pair<gdt::genomic_coordinate, int>> generate_test_data(size_t count) {
        std::vector<std::pair<gdt::genomic_coordinate, int>> data;
        for (size_t i = 0; i < count; ++i) {
            size_t start = i * 100;
            size_t end = start + 50;
            data.push_back({{'+', start, end}, static_cast<int>(i)});
        }
        return data;
    }

    static query_overlap_expectation<gdt::genomic_coordinate>
    create_overlapping_query(const std::vector<std::pair<gdt::genomic_coordinate, int>>& test_data) {
        if (test_data.size() < 2) {
            gdt::genomic_coordinate query{'+', test_data[0].first.get_start() + 10,
                                          test_data[0].first.get_end() + 10};
            return {query, {0}};
        }

        // Query overlapping entries at indices 1 and 2
        size_t start = test_data[1].first.get_start() + 10;
        size_t end = test_data.size() > 2
            ? test_data[2].first.get_end() - 10
            : test_data[1].first.get_end() + 10;

        gdt::genomic_coordinate query{'+', start, end};

        std::vector<size_t> expected_indices;
        for (size_t i = 0; i < test_data.size(); ++i) {
            if (gdt::genomic_coordinate::overlaps(test_data[i].first, query)) {
                expected_indices.push_back(i);
            }
        }

        return {query, expected_indices};
    }

    static query_overlap_expectation<gdt::genomic_coordinate>
    create_non_overlapping_query(const std::vector<std::pair<gdt::genomic_coordinate, int>>& test_data) {
        if (test_data.empty()) {
            return {gdt::genomic_coordinate{'+', 0, 10}, {}};
        }

        // Query in the gap between test_data[0] and test_data[1]
        size_t start = test_data[0].first.get_end() + 10;
        size_t end = test_data.size() > 1
            ? test_data[1].first.get_start() - 10
            : start + 20;

        return {gdt::genomic_coordinate{'+', start, end}, {}};
    }
};

// =============================================================================
// Instantiate Typed Tests for genomic_coordinate
// =============================================================================

using GenomicCoordinateTestTypes = ::testing::Types<gdt::genomic_coordinate>;
INSTANTIATE_TYPED_TEST_SUITE_P(GenomicCoordinate, grove_typed_test, GenomicCoordinateTestTypes);

// =============================================================================
// Genomic Coordinate-Specific Tests (strand behavior)
// =============================================================================

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

TEST(GenomicCoordinateGroveTest, unstrandedQueryFindsOnlyUnstranded) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 30), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 20, 40), 20);
    grove.insert_data("chr1", gdt::genomic_coordinate('.', 25, 45), 30);

    // Strict matching: unstranded query finds only unstranded coordinates
    gdt::genomic_coordinate unstranded_query('.', 25, 45);
    auto result = grove.intersect(unstranded_query, "chr1");

    ASSERT_EQ(result.get_keys().size(), 1);
    EXPECT_EQ(result.get_keys()[0]->get_value().get_strand(), '.');
    EXPECT_EQ(result.get_keys()[0]->get_data(), 30);
}

TEST(GenomicCoordinateGroveTest, strandedQueryFindsOnlyMatchingStrand) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 30), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 40, 60), 70);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 80, 100), 90);

    grove.insert_data("chr1", gdt::genomic_coordinate('-', 10, 30), 20);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 50, 90), 50);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 100, 120), 70);

    grove.insert_data("chr1", gdt::genomic_coordinate('.', 10, 30), 30);
    grove.insert_data("chr1", gdt::genomic_coordinate('.', 25, 85), 40);

    // Plus strand query
    gdt::genomic_coordinate plus_query('+', 15, 85);
    auto result_plus = grove.intersect(plus_query, "chr1");

    ASSERT_EQ(result_plus.get_keys().size(), 3);
    EXPECT_EQ(result_plus.get_keys()[0]->get_data(), 10);
    EXPECT_EQ(result_plus.get_keys()[1]->get_data(), 70);
    EXPECT_EQ(result_plus.get_keys()[2]->get_data(), 90);

    // Minus strand query
    gdt::genomic_coordinate minus_query('-', 15, 55);
    auto result_minus = grove.intersect(minus_query, "chr1");

    ASSERT_EQ(result_minus.get_keys().size(), 2);
    EXPECT_EQ(result_minus.get_keys()[0]->get_data(), 20);
    EXPECT_EQ(result_minus.get_keys()[1]->get_data(), 50);

    // Unstranded query
    gdt::genomic_coordinate unstranded_query('.', 15, 55);
    auto result_unstranded = grove.intersect(unstranded_query, "chr1");

    ASSERT_EQ(result_unstranded.get_keys().size(), 2);
    EXPECT_EQ(result_unstranded.get_keys()[0]->get_data(), 30);
    EXPECT_EQ(result_unstranded.get_keys()[1]->get_data(), 40);
}

TEST(GenomicCoordinateGroveTest, wildcardQueryFindsAllStrands) {
    gst::grove<gdt::genomic_coordinate, int> grove(3);

    grove.insert_data("chr1", gdt::genomic_coordinate('+', 10, 30), 10);
    grove.insert_data("chr1", gdt::genomic_coordinate('+', 40, 60), 40);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 20, 50), 20);
    grove.insert_data("chr1", gdt::genomic_coordinate('-', 55, 75), 55);
    grove.insert_data("chr1", gdt::genomic_coordinate('.', 15, 45), 15);

    // Wildcard query (*) should find all overlapping coordinates regardless of strand
    gdt::genomic_coordinate wildcard_query('*', 25, 65);
    auto result = grove.intersect(wildcard_query, "chr1");

    ASSERT_EQ(result.get_keys().size(), 5);

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

TEST(GenomicCoordinateGroveTest, BulkInsertStrandSorting) {
    gst::grove<gdt::genomic_coordinate, int> grove(5);

    // Strand sorting order: * < . < + < -
    std::vector<std::pair<gdt::genomic_coordinate, int>> data = {
        {gdt::genomic_coordinate('*', 10, 20), 10},
        {gdt::genomic_coordinate('.', 10, 20), 20},
        {gdt::genomic_coordinate('+', 10, 20), 30},
        {gdt::genomic_coordinate('-', 10, 20), 40}
    };

    grove.insert_data("chr1", data, gst::sorted, gst::bulk);

    gdt::genomic_coordinate query('*', 10, 20);
    auto results = grove.intersect(query, "chr1");

    ASSERT_EQ(results.get_keys().size(), 4);

    EXPECT_EQ(results.get_keys()[0]->get_value().get_strand(), '*');
    EXPECT_EQ(results.get_keys()[1]->get_value().get_strand(), '.');
    EXPECT_EQ(results.get_keys()[2]->get_value().get_strand(), '+');
    EXPECT_EQ(results.get_keys()[3]->get_value().get_strand(), '-');
}

// =============================================================================
// Heterogeneous Grove Tests with Genomic Coordinates
// =============================================================================

using TestVariant = std::variant<std::monostate, int, double, std::string>;

TEST(GenomicCoordinateGroveTest, variantInsertionAndQuery) {
    gst::grove<gdt::genomic_coordinate, TestVariant> grove(3);

    gdt::genomic_coordinate coord1('+', 10, 20);
    gdt::genomic_coordinate coord2('-', 30, 40);
    gdt::genomic_coordinate coord3('+', 50, 60);

    grove.insert_data("chr1", coord1, 42);
    grove.insert_data("chr1", coord2, 3.14);
    grove.insert_data("chr1", coord3, std::string("exon"));

    // Query plus strand
    gdt::genomic_coordinate query('+', 5, 65);
    auto results = grove.intersect(query, "chr1");

    ASSERT_EQ(results.get_keys().size(), 2);

    auto keys = results.get_keys();

    EXPECT_EQ(keys[0]->get_value().get_strand(), '+');
    EXPECT_TRUE(std::holds_alternative<int>(keys[0]->get_data()));
    EXPECT_EQ(std::get<int>(keys[0]->get_data()), 42);

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