/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Genogrove
#include <genogrove/data_type/numeric.hpp>
#include <genogrove/data_type/key_type_base.hpp>

namespace gdt = genogrove::data_type;

TEST(numericTest, keyTypeBaseConcept) {
    static_assert(gdt::key_type_base<gdt::numeric>,
        "numeric must satisfy key_type_base concept");
}

TEST(numericTest, defaultConstructor) {
    gdt::numeric n;
    EXPECT_EQ(n.get_value(), std::numeric_limits<int>::min());
}

TEST(numericTest, parameterizedConstructor) {
    gdt::numeric n1(42);
    EXPECT_EQ(n1.get_value(), 42);

    gdt::numeric n2(-100);
    EXPECT_EQ(n2.get_value(), -100);

    gdt::numeric n3(0);
    EXPECT_EQ(n3.get_value(), 0);
}

TEST(numericTest, equalityOperator) {
    gdt::numeric n1(10);
    gdt::numeric n2(10);
    gdt::numeric n3(20);

    // Test operator==
    EXPECT_TRUE(n1 == n2);
    EXPECT_FALSE(n1 == n3);
}

TEST(numericTest, comparisonOperators) {
    gdt::numeric n1(10);
    gdt::numeric n2(20);
    gdt::numeric n3(10);

    // Test operator<
    EXPECT_TRUE(n1 < n2);
    EXPECT_FALSE(n2 < n1);
    EXPECT_FALSE(n1 < n3);

    // Test operator>
    EXPECT_TRUE(n2 > n1);
    EXPECT_FALSE(n1 > n2);
    EXPECT_FALSE(n1 > n3);
}

TEST(numericTest, comparisonWithNegative) {
    gdt::numeric n1(-10);
    gdt::numeric n2(10);
    gdt::numeric n3(-5);

    EXPECT_TRUE(n1 < n3);
    EXPECT_TRUE(n3 < n2);
    EXPECT_TRUE(n1 < n2);

    EXPECT_TRUE(n2 > n3);
    EXPECT_TRUE(n3 > n1);
    EXPECT_TRUE(n2 > n1);
}

TEST(numericTest, overlapEqual) {
    // For numeric, overlap only occurs when values are exactly equal
    gdt::numeric n1(10);
    gdt::numeric n2(10);
    gdt::numeric n3(20);

    EXPECT_TRUE(gdt::numeric::overlap(n1, n2));
    EXPECT_FALSE(gdt::numeric::overlap(n1, n3));
    EXPECT_FALSE(gdt::numeric::overlap(n2, n3));
}

TEST(numericTest, overlapDifferent) {
    // Even adjacent values don't overlap
    gdt::numeric n1(10);
    gdt::numeric n2(11);

    EXPECT_FALSE(gdt::numeric::overlap(n1, n2));
}

TEST(numericTest, aggregateSingle) {
    std::vector<gdt::numeric> values = {gdt::numeric{42}};

    gdt::numeric result = gdt::numeric::aggregate(values);
    EXPECT_EQ(result.get_value(), 42);
}

TEST(numericTest, aggregateMultiple) {
    std::vector<gdt::numeric> values = {
        gdt::numeric{30},
        gdt::numeric{10},
        gdt::numeric{20}
    };

    // Aggregate returns maximum value for B+ tree navigation
    gdt::numeric result = gdt::numeric::aggregate(values);
    EXPECT_EQ(result.get_value(), 30);
}

TEST(numericTest, aggregateWithNegative) {
    std::vector<gdt::numeric> values = {
        gdt::numeric{10},
        gdt::numeric{-5},
        gdt::numeric{20},
        gdt::numeric{-10}
    };

    // Aggregate returns maximum value for B+ tree navigation
    gdt::numeric result = gdt::numeric::aggregate(values);
    EXPECT_EQ(result.get_value(), 20);
}

TEST(numericTest, aggregateEmpty) {
    std::vector<gdt::numeric> values = {};

    gdt::numeric result = gdt::numeric::aggregate(values);
    EXPECT_EQ(result.get_value(), std::numeric_limits<int>::min());
}

TEST(numericTest, toString) {
    gdt::numeric n1(42);
    gdt::numeric n2(-100);
    gdt::numeric n3(0);

    EXPECT_EQ(n1.to_string(), "42");
    EXPECT_EQ(n2.to_string(), "-100");
    EXPECT_EQ(n3.to_string(), "0");
}

TEST(numericTest, gettersAndSetters) {
    gdt::numeric n;

    // Test setter
    n.set_value(123);
    EXPECT_EQ(n.get_value(), 123);

    // Test modification
    n.set_value(-456);
    EXPECT_EQ(n.get_value(), -456);
}

TEST(numericTest, sorting) {
    std::vector<gdt::numeric> values = {
        gdt::numeric{30},
        gdt::numeric{10},
        gdt::numeric{-5},
        gdt::numeric{20},
        gdt::numeric{0}
    };

    std::sort(values.begin(), values.end());

    EXPECT_EQ(values[0].get_value(), -5);
    EXPECT_EQ(values[1].get_value(), 0);
    EXPECT_EQ(values[2].get_value(), 10);
    EXPECT_EQ(values[3].get_value(), 20);
    EXPECT_EQ(values[4].get_value(), 30);
}