/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Genogrove
#include <genogrove/data_type/genomic_coordinate.hpp>
#include <genogrove/data_type/key_type_base.hpp>

namespace gdt = genogrove::data_type;

TEST(genomicCoordinateTest, keyTypeBaseConcept) {
    static_assert(gdt::key_type_base<gdt::genomic_coordinate>,
        "genomic_coordinate must satisfy key_type_base concept");
}

TEST(genomicCoordinateTest, defaultConstructor) {
    gdt::genomic_coordinate coord;
    EXPECT_EQ(coord.get_start(), 0);
    EXPECT_EQ(coord.get_end(), 0);
    EXPECT_EQ(coord.get_strand(), '.');
}

TEST(genomicCoordinateTest, parameterizedConstructor) {
    // Constructor signature: (strand, start, end)
    gdt::genomic_coordinate coord1('.', 100, 200);
    EXPECT_EQ(coord1.get_strand(), '.');
    EXPECT_EQ(coord1.get_start(), 100);
    EXPECT_EQ(coord1.get_end(), 200);

    gdt::genomic_coordinate coord2('+', 100, 200);
    EXPECT_EQ(coord2.get_strand(), '+');
    EXPECT_EQ(coord2.get_start(), 100);
    EXPECT_EQ(coord2.get_end(), 200);

    gdt::genomic_coordinate coord3('-', 100, 200);
    EXPECT_EQ(coord3.get_strand(), '-');
    EXPECT_EQ(coord3.get_start(), 100);
    EXPECT_EQ(coord3.get_end(), 200);
}

TEST(genomicCoordinateTest, equalityOperator) {
    gdt::genomic_coordinate coord1('+', 20, 30);
    gdt::genomic_coordinate coord2('+', 20, 30);

    // std::cout << coord1.to_string() << "\n";
    // std::cout << coord2.to_string() << "\n";

    // Test operator==
    EXPECT_TRUE(coord1 == coord2);

    // Different strand
    gdt::genomic_coordinate coord3('-', 20, 30);
    EXPECT_FALSE(coord1 == coord3);

    // Different start
    gdt::genomic_coordinate coord4('+', 21, 30);
    EXPECT_FALSE(coord1 == coord4);

    // Different end
    gdt::genomic_coordinate coord5('+', 20, 31);
    EXPECT_FALSE(coord1 == coord5);

    // Unstranded vs stranded
    gdt::genomic_coordinate coord6('.', 20, 30);
    EXPECT_FALSE(coord1 == coord6);
}

TEST(genomicCoordinateTest, comparisonOperatorsByStrand) {
    // When coordinates differ, position takes precedence
    gdt::genomic_coordinate coord1('.', 5, 30);
    gdt::genomic_coordinate coord2('+', 10, 20);
    gdt::genomic_coordinate coord3('-', 15, 25);

    // Test operator< - coordinate position comes first
    EXPECT_TRUE(coord1 < coord2);  // 5 < 10
    EXPECT_FALSE(coord1 > coord2);
    EXPECT_TRUE(coord2 < coord3);  // 10 < 15
    EXPECT_FALSE(coord2 > coord3);
    EXPECT_TRUE(coord1 < coord3);  // 5 < 15
    EXPECT_FALSE(coord1 > coord3);
}

TEST(genomicCoordinateTest, comparisonOperatorsByStart) {
    // Compare by start position
    gdt::genomic_coordinate coord1('+', 10, 20);
    gdt::genomic_coordinate coord2('+', 15, 20);
    gdt::genomic_coordinate coord3('+', 20, 20);

    EXPECT_TRUE(coord1 < coord2);
    EXPECT_FALSE(coord1 > coord2);
    EXPECT_TRUE(coord2 < coord3);
    EXPECT_FALSE(coord2 > coord3);
    EXPECT_TRUE(coord1 < coord3);
    EXPECT_FALSE(coord1 > coord3);
}

TEST(genomicCoordinateTest, comparisonOperatorsByEnd) {
    // When strand and start are equal, compare by end position
    gdt::genomic_coordinate coord1('+', 10, 20);
    gdt::genomic_coordinate coord2('+', 10, 25);
    gdt::genomic_coordinate coord3('+', 10, 30);

    EXPECT_TRUE(coord1 < coord2);
    EXPECT_FALSE(coord1 > coord2);
    EXPECT_TRUE(coord2 < coord3);
    EXPECT_FALSE(coord2 > coord3);
    EXPECT_TRUE(coord1 < coord3);
    EXPECT_FALSE(coord1 > coord3);
}

TEST(genomicCoordinateTest, comparisonOperatorsMixed) {
    // Test with different combinations
    gdt::genomic_coordinate coord1('+', 5, 15);
    gdt::genomic_coordinate coord2('-', 5, 15);
    gdt::genomic_coordinate coord3('+', 10, 15);
    gdt::genomic_coordinate coord4('+', 5, 20);

    // Same position, different strand - strand is tiebreaker (+ < -)
    EXPECT_TRUE(coord1 < coord2);
    EXPECT_FALSE(coord2 < coord1);

    // Different start position
    EXPECT_TRUE(coord1 < coord3);
    EXPECT_FALSE(coord3 < coord1);

    // Same start, different end
    EXPECT_TRUE(coord1 < coord4);
    EXPECT_FALSE(coord4 < coord1);
}

TEST(genomicCoordinateTest, overlapSameStrandOverlapping) {
    gdt::genomic_coordinate coord1('+', 10, 30);
    gdt::genomic_coordinate coord2('+', 20, 40);

    // Overlapping ranges on same strand
    EXPECT_TRUE(gdt::genomic_coordinate::overlap(coord1, coord2));
    EXPECT_TRUE(gdt::genomic_coordinate::overlap(coord2, coord1));
}

TEST(genomicCoordinateTest, overlapSameStrandAdjacent) {
    // Adjacent but touching ranges [10,20] and [20,30]
    gdt::genomic_coordinate coord1('+', 10, 20);
    gdt::genomic_coordinate coord2('+', 20, 30);

    EXPECT_TRUE(gdt::genomic_coordinate::overlap(coord1, coord2));
    EXPECT_TRUE(gdt::genomic_coordinate::overlap(coord2, coord1));
}

TEST(genomicCoordinateTest, overlapSameStrandDisjoint) {
    // Non-overlapping ranges [10,20] and [21,30]
    gdt::genomic_coordinate coord1('+', 10, 20);
    gdt::genomic_coordinate coord2('+', 21, 30);

    EXPECT_FALSE(gdt::genomic_coordinate::overlap(coord1, coord2));
    EXPECT_FALSE(gdt::genomic_coordinate::overlap(coord2, coord1));
}

TEST(genomicCoordinateTest, overlapDifferentStrands) {
    // Different strands should not overlap (+ and - are incompatible)
    gdt::genomic_coordinate coord1('+', 10, 30);
    gdt::genomic_coordinate coord2('-', 20, 40);

    EXPECT_FALSE(gdt::genomic_coordinate::overlap(coord1, coord2));
    EXPECT_FALSE(gdt::genomic_coordinate::overlap(coord2, coord1));
}

TEST(genomicCoordinateTest, overlapUnstrandedWithStranded) {
    // Unstranded '.' should match any strand
    gdt::genomic_coordinate unstranded('.', 10, 30);
    gdt::genomic_coordinate plus_strand('+', 20, 40);
    gdt::genomic_coordinate minus_strand('-', 20, 40);
    gdt::genomic_coordinate all_strands('*', 20, 40);

    // Unstranded matches plus strand
    EXPECT_FALSE(gdt::genomic_coordinate::overlap(unstranded, plus_strand));
    EXPECT_FALSE(gdt::genomic_coordinate::overlap(plus_strand, unstranded));

    EXPECT_FALSE(gdt::genomic_coordinate::overlap(unstranded, minus_strand));
    EXPECT_FALSE(gdt::genomic_coordinate::overlap(minus_strand, unstranded));

    EXPECT_TRUE(gdt::genomic_coordinate::overlap(unstranded, all_strands));
    EXPECT_TRUE(gdt::genomic_coordinate::overlap(all_strands, unstranded));
    EXPECT_TRUE(gdt::genomic_coordinate::overlap(all_strands, plus_strand));
    EXPECT_TRUE(gdt::genomic_coordinate::overlap(plus_strand, all_strands));
    EXPECT_TRUE(gdt::genomic_coordinate::overlap(all_strands, minus_strand));
    EXPECT_TRUE(gdt::genomic_coordinate::overlap(minus_strand, all_strands));

}

TEST(genomicCoordinateTest, overlapSameStrandContained) {
    // One range completely contains the other
    gdt::genomic_coordinate coord1('+', 10, 50);
    gdt::genomic_coordinate coord2('+', 20, 30);

    EXPECT_TRUE(gdt::genomic_coordinate::overlap(coord1, coord2));
    EXPECT_TRUE(gdt::genomic_coordinate::overlap(coord2, coord1));
}

TEST(genomicCoordinateTest, overlapSameStrandIdentical) {
    // Identical ranges
    gdt::genomic_coordinate coord1('+', 10, 30);
    gdt::genomic_coordinate coord2('+', 10, 30);

    EXPECT_TRUE(gdt::genomic_coordinate::overlap(coord1, coord2));
}

TEST(genomicCoordinateTest, aggregateSingle) {
    std::vector<gdt::genomic_coordinate> coords = {
        gdt::genomic_coordinate('+', 10, 20)
    };

    gdt::genomic_coordinate result = gdt::genomic_coordinate::aggregate(coords);
    EXPECT_EQ(result.get_strand(), '+');
    EXPECT_EQ(result.get_start(), 10);
    EXPECT_EQ(result.get_end(), 20);
}

TEST(genomicCoordinateTest, aggregateMultipleSameStrand) {
    std::vector<gdt::genomic_coordinate> coords = {
        gdt::genomic_coordinate('+', 10, 20),
        gdt::genomic_coordinate('+', 15, 30),
        gdt::genomic_coordinate('+', 5, 25)
    };

    gdt::genomic_coordinate result = gdt::genomic_coordinate::aggregate(coords);
    EXPECT_EQ(result.get_strand(), '+');
    EXPECT_EQ(result.get_start(), 5);
    EXPECT_EQ(result.get_end(), 30);
}

TEST(genomicCoordinateTest, aggregateMultipleMixedStrands) {
    std::vector<gdt::genomic_coordinate> coords = {
        gdt::genomic_coordinate('+', 10, 20),
        gdt::genomic_coordinate('-', 15, 30),
        gdt::genomic_coordinate('+', 5, 25)
    };

    gdt::genomic_coordinate result = gdt::genomic_coordinate::aggregate(coords);
    EXPECT_EQ(result.get_strand(), '*'); // Mixed strands result in '.'
    EXPECT_EQ(result.get_start(), 5);
    EXPECT_EQ(result.get_end(), 30);
}

TEST(genomicCoordinateTest, aggregateEmpty) {
    std::vector<gdt::genomic_coordinate> coords = {};

    gdt::genomic_coordinate result = gdt::genomic_coordinate::aggregate(coords);
    EXPECT_EQ(result.get_strand(), '.');
    EXPECT_EQ(result.get_start(), 0);
    EXPECT_EQ(result.get_end(), 0);
}


TEST(genomicCoordinateTest, toString) {
    gdt::genomic_coordinate coord_unstranded('.', 100, 200);
    gdt::genomic_coordinate coord_plus('+', 100, 200);
    gdt::genomic_coordinate coord_minus('-', 100, 200);

    std::string str_unstranded = coord_unstranded.to_string();
    std::string str_plus = coord_plus.to_string();
    std::string str_minus = coord_minus.to_string();

    EXPECT_EQ(str_unstranded, ".:100-200");
    EXPECT_EQ(str_plus, "+:100-200");
    EXPECT_EQ(str_minus, "-:100-200");
}

TEST(genomicCoordinateTest, gettersAndSetters) {
    gdt::genomic_coordinate coord;

    // Test setters
    coord.set_strand('+');
    coord.set_start(50);
    coord.set_end(100);

    // Test getters
    EXPECT_EQ(coord.get_strand(), '+');
    EXPECT_EQ(coord.get_start(), 50);
    EXPECT_EQ(coord.get_end(), 100);

    // Test modification
    coord.set_strand('-');
    EXPECT_EQ(coord.get_strand(), '-');

    coord.set_start(60);
    EXPECT_EQ(coord.get_start(), 60);

    coord.set_end(110);
    EXPECT_EQ(coord.get_end(), 110);
}

TEST(genomicCoordinateTest, sortingByStrand) {
    // Test that sorting by strand works: . < + < -
    std::vector<gdt::genomic_coordinate> coords = {
        gdt::genomic_coordinate('.', 10, 20),
        gdt::genomic_coordinate('-', 10, 20),
        gdt::genomic_coordinate('+', 10, 20)
    };

    std::sort(coords.begin(), coords.end());

    // Same position, sorted by strand: . < + < -
    EXPECT_EQ(coords[0].get_strand(), '.');
    EXPECT_EQ(coords[1].get_strand(), '+');
    EXPECT_EQ(coords[2].get_strand(), '-');
}

TEST(genomicCoordinateTest, sortingMixed) {
    // Test sorting with mixed strands and positions
    // Coordinates comes first - then sort by strand: * < . < + < -
    std::vector<gdt::genomic_coordinate> coords = {
        gdt::genomic_coordinate('-', 20, 30),
        gdt::genomic_coordinate('+', 15, 25),
        gdt::genomic_coordinate('+', 10, 20),
        gdt::genomic_coordinate('.', 5, 15),
        gdt::genomic_coordinate('-', 10, 20)
    };

    std::sort(coords.begin(), coords.end());

    // Expected order: sorted by start position first, then end, then strand (. < + < -)
    // start=5
    EXPECT_EQ(coords[0].get_strand(), '.');
    EXPECT_EQ(coords[0].get_start(), 5);

    // start=10, strand=+
    EXPECT_EQ(coords[1].get_strand(), '+');
    EXPECT_EQ(coords[1].get_start(), 10);

    // start=10, strand=-
    EXPECT_EQ(coords[2].get_strand(), '-');
    EXPECT_EQ(coords[2].get_start(), 10);

    // start=15
    EXPECT_EQ(coords[3].get_strand(), '+');
    EXPECT_EQ(coords[3].get_start(), 15);

    // start=20
    EXPECT_EQ(coords[4].get_strand(), '-');
    EXPECT_EQ(coords[4].get_start(), 20);
}