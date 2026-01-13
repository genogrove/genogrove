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
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key_type_base.hpp>

// Standard
#include <algorithm>

namespace gdt = genogrove::data_type;

TEST(intervalTest, keyTypeBaseConcept) {
    static_assert(gdt::key_type_base<gdt::interval>,
        "interval must satisfy key_type_base concept");
}

TEST(intervalTest, defaultConstructor) {
    gdt::interval intvl;
    EXPECT_EQ(intvl.get_start(), std::string::npos);
    EXPECT_EQ(intvl.get_end(), std::string::npos);
}

TEST(intervalTest, parameterizedConstructor) {
    gdt::interval intvl1(100, 200);
    EXPECT_EQ(intvl1.get_start(), 100);
    EXPECT_EQ(intvl1.get_end(), 200);

    gdt::interval intvl2(0, 50);
    EXPECT_EQ(intvl2.get_start(), 0);
    EXPECT_EQ(intvl2.get_end(), 50);

    gdt::interval intvl3(1000, 2000);
    EXPECT_EQ(intvl3.get_start(), 1000);
    EXPECT_EQ(intvl3.get_end(), 2000);
}

TEST(intervalTest, equalityOperator) {
    gdt::interval intvl1(20, 30);
    gdt::interval intvl2(20, 30);
    gdt::interval intvl3(20, 40);
    gdt::interval intvl4(10, 30);

    // Test operator==
    EXPECT_TRUE(intvl1 == intvl2);
    EXPECT_FALSE(intvl1 == intvl3);  // Different end
    EXPECT_FALSE(intvl1 == intvl4);  // Different start
}

TEST(intervalTest, comparisonOperatorsByStart) {
    // Compare intervals with different start positions
    gdt::interval intvl1(10, 20);
    gdt::interval intvl2(20, 30);
    gdt::interval intvl3(30, 40);

    // Test operator<
    EXPECT_TRUE(intvl1 < intvl2);
    EXPECT_TRUE(intvl2 < intvl3);
    EXPECT_TRUE(intvl1 < intvl3);
    EXPECT_FALSE(intvl2 < intvl1);

    // Test operator>
    EXPECT_TRUE(intvl2 > intvl1);
    EXPECT_TRUE(intvl3 > intvl2);
    EXPECT_TRUE(intvl3 > intvl1);
    EXPECT_FALSE(intvl1 > intvl2);
}

TEST(intervalTest, comparisonOperatorsByEnd) {
    // When start positions are equal, compare by end position
    gdt::interval intvl1(10, 20);
    gdt::interval intvl2(10, 25);
    gdt::interval intvl3(10, 30);

    EXPECT_TRUE(intvl1 < intvl2);
    EXPECT_TRUE(intvl2 < intvl3);
    EXPECT_TRUE(intvl1 < intvl3);
    EXPECT_FALSE(intvl2 < intvl1);

    EXPECT_TRUE(intvl2 > intvl1);
    EXPECT_TRUE(intvl3 > intvl2);
    EXPECT_TRUE(intvl3 > intvl1);
    EXPECT_FALSE(intvl1 > intvl2);
}

TEST(intervalTest, comparisonOperatorsMixed) {
    // Test with different combinations
    gdt::interval intvl1(10, 20);
    gdt::interval intvl2(10, 25);
    gdt::interval intvl3(15, 30);
    gdt::interval intvl4(20, 40);

    // Same start, different end
    EXPECT_TRUE(intvl1 < intvl2);
    EXPECT_FALSE(intvl2 < intvl1);

    // Different start
    EXPECT_TRUE(intvl1 < intvl3);
    EXPECT_FALSE(intvl3 < intvl1);

    // Different start
    EXPECT_TRUE(intvl1 < intvl4);
    EXPECT_FALSE(intvl4 < intvl1);
}

TEST(intervalTest, overlapOverlapping) {
    // Overlapping intervals
    gdt::interval intvl1(10, 30);
    gdt::interval intvl2(20, 40);

    EXPECT_TRUE(gdt::interval::overlap(intvl1, intvl2));
    EXPECT_TRUE(gdt::interval::overlap(intvl2, intvl1));
}

TEST(intervalTest, overlapAdjacent) {
    // Adjacent intervals that touch at boundary [10,20] and [20,30]
    gdt::interval intvl1(10, 20);
    gdt::interval intvl2(20, 30);

    // For closed intervals, touching intervals overlap
    EXPECT_TRUE(gdt::interval::overlap(intvl1, intvl2));
    EXPECT_TRUE(gdt::interval::overlap(intvl2, intvl1));
}

TEST(intervalTest, overlapDisjoint) {
    // Non-overlapping intervals [10,20] and [21,30]
    gdt::interval intvl1(10, 20);
    gdt::interval intvl2(21, 30);

    EXPECT_FALSE(gdt::interval::overlap(intvl1, intvl2));
    EXPECT_FALSE(gdt::interval::overlap(intvl2, intvl1));
}

TEST(intervalTest, overlapContained) {
    // One interval completely contains the other
    gdt::interval intvl1(10, 50);
    gdt::interval intvl2(20, 30);

    EXPECT_TRUE(gdt::interval::overlap(intvl1, intvl2));
    EXPECT_TRUE(gdt::interval::overlap(intvl2, intvl1));
}

TEST(intervalTest, overlapIdentical) {
    // Identical intervals
    gdt::interval intvl1(10, 30);
    gdt::interval intvl2(10, 30);

    EXPECT_TRUE(gdt::interval::overlap(intvl1, intvl2));
}

TEST(intervalTest, overlapPartialOverlap) {
    // Partial overlap scenarios
    gdt::interval intvl1(10, 25);
    gdt::interval intvl2(15, 35);
    gdt::interval intvl3(20, 40);
    gdt::interval intvl4(30, 50);

    EXPECT_TRUE(gdt::interval::overlap(intvl1, intvl2));  // [10,25] overlaps [15,35]
    EXPECT_TRUE(gdt::interval::overlap(intvl2, intvl3));  // [15,35] overlaps [20,40]
    EXPECT_TRUE(gdt::interval::overlap(intvl1, intvl3));  // [10,25] overlaps [20,40] at [20,25]
    EXPECT_FALSE(gdt::interval::overlap(intvl1, intvl4)); // [10,25] does not overlap [30,50]
}

TEST(intervalTest, aggregateSingle) {
    std::vector<gdt::interval> intervals = {
        gdt::interval{10, 20}
    };

    gdt::interval result = gdt::interval::aggregate(intervals);
    EXPECT_EQ(result.get_start(), 10);
    EXPECT_EQ(result.get_end(), 20);
}

TEST(intervalTest, aggregateMultiple) {
    std::vector<gdt::interval> intervals = {
        gdt::interval{10, 20},
        gdt::interval{30, 40},
        gdt::interval{50, 60}
    };

    // Aggregate returns bounding interval
    gdt::interval result = gdt::interval::aggregate(intervals);
    EXPECT_EQ(result.get_start(), 10);  // Minimum start
    EXPECT_EQ(result.get_end(), 60);    // Maximum end
}

TEST(intervalTest, aggregateOverlapping) {
    std::vector<gdt::interval> intervals = {
        gdt::interval{10, 30},
        gdt::interval{20, 40},
        gdt::interval{35, 50}
    };

    gdt::interval result = gdt::interval::aggregate(intervals);
    EXPECT_EQ(result.get_start(), 10);
    EXPECT_EQ(result.get_end(), 50);
}

TEST(intervalTest, aggregateUnsorted) {
    std::vector<gdt::interval> intervals = {
        gdt::interval{50, 60},
        gdt::interval{10, 20},
        gdt::interval{30, 40}
    };

    // Aggregate should work regardless of order
    gdt::interval result = gdt::interval::aggregate(intervals);
    EXPECT_EQ(result.get_start(), 10);
    EXPECT_EQ(result.get_end(), 60);
}

TEST(intervalTest, aggregateEmpty) {
    std::vector<gdt::interval> intervals = {};

    gdt::interval result = gdt::interval::aggregate(intervals);
    // Empty aggregate returns default interval
    EXPECT_EQ(result.get_start(), std::string::npos);
    EXPECT_EQ(result.get_end(), std::string::npos);
}

TEST(intervalTest, toString) {
    gdt::interval intvl1(100, 200);
    gdt::interval intvl2(0, 50);
    gdt::interval intvl3(1000, 2000);

    EXPECT_EQ(intvl1.to_string(), "[100,200]");
    EXPECT_EQ(intvl2.to_string(), "[0,50]");
    EXPECT_EQ(intvl3.to_string(), "[1000,2000]");
}

TEST(intervalTest, gettersAndSetters) {
    gdt::interval intvl;

    // Test setters
    intvl.set_start(50);
    intvl.set_end(100);

    // Test getters
    EXPECT_EQ(intvl.get_start(), 50);
    EXPECT_EQ(intvl.get_end(), 100);

    // Test modification
    intvl.set_start(60);
    EXPECT_EQ(intvl.get_start(), 60);

    intvl.set_end(110);
    EXPECT_EQ(intvl.get_end(), 110);
}

TEST(intervalTest, sorting) {
    std::vector<gdt::interval> intervals = {
        gdt::interval{30, 40},
        gdt::interval{10, 20},
        gdt::interval{10, 15},
        gdt::interval{50, 60},
        gdt::interval{10, 25}
    };

    std::sort(intervals.begin(), intervals.end());

    // Should be sorted by start, then by end
    EXPECT_EQ(intervals[0].get_start(), 10);
    EXPECT_EQ(intervals[0].get_end(), 15);

    EXPECT_EQ(intervals[1].get_start(), 10);
    EXPECT_EQ(intervals[1].get_end(), 20);

    EXPECT_EQ(intervals[2].get_start(), 10);
    EXPECT_EQ(intervals[2].get_end(), 25);

    EXPECT_EQ(intervals[3].get_start(), 30);
    EXPECT_EQ(intervals[3].get_end(), 40);

    EXPECT_EQ(intervals[4].get_start(), 50);
    EXPECT_EQ(intervals[4].get_end(), 60);
}

TEST(intervalTest, sortingByStartPrimary) {
    std::vector<gdt::interval> intervals = {
        gdt::interval{50, 60},
        gdt::interval{20, 30},
        gdt::interval{10, 40},
        gdt::interval{30, 35}
    };

    std::sort(intervals.begin(), intervals.end());

    // Verify sorted by start position
    EXPECT_EQ(intervals[0].get_start(), 10);
    EXPECT_EQ(intervals[1].get_start(), 20);
    EXPECT_EQ(intervals[2].get_start(), 30);
    EXPECT_EQ(intervals[3].get_start(), 50);
}

TEST(intervalTest, sortingByEndSecondary) {
    std::vector<gdt::interval> intervals = {
        gdt::interval{10, 40},
        gdt::interval{10, 20},
        gdt::interval{10, 30},
        gdt::interval{10, 15}
    };

    std::sort(intervals.begin(), intervals.end());

    // All have same start, sorted by end
    EXPECT_EQ(intervals[0].get_end(), 15);
    EXPECT_EQ(intervals[1].get_end(), 20);
    EXPECT_EQ(intervals[2].get_end(), 30);
    EXPECT_EQ(intervals[3].get_end(), 40);
}
