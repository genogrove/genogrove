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

// Standard
#include <string>

// genogrove
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/data_type/interval.hpp>

namespace gdt = genogrove::data_type;

TEST(query_result_test, constructor_and_empty_query) {
    // Create a query result object with an interval query
    const gdt::interval query_interval(10, 20);
    gdt::query_result<gdt::interval, int> qres(query_interval);

    // Verify initial state
    EXPECT_EQ(qres.get_query(), query_interval);
    EXPECT_TRUE(qres.get_keys().empty());
}

TEST(query_result_test, add_keys_with_data) {
    const gdt::interval query_interval(10, 20);
    gdt::query_result<gdt::interval, int> qres(query_interval);

    // Create intervals for test keys
    const gdt::interval intvl0(15, 25);
    const gdt::interval intvl1(5, 12);
    const gdt::interval intvl2(30, 40);

    // Create keys with associated data (using modern template-based API)
    gdt::key<gdt::interval, int> key0(intvl0, 15);
    gdt::key<gdt::interval, int> key1(intvl1, 5);
    gdt::key<gdt::interval, int> key2(intvl2, 30);

    // Add keys to query result
    qres.add_key(&key0);
    qres.add_key(&key1);

    // Verify keys were added correctly
    const auto keys = qres.get_keys();
    ASSERT_EQ(keys.size(), 2);
    EXPECT_EQ(keys[0]->get_value(), intvl0);
    EXPECT_EQ(keys[1]->get_value(), intvl1);

    // Verify associated data can be retrieved with new API
    EXPECT_TRUE(keys[0]->has_data());
    EXPECT_TRUE(keys[1]->has_data());

    // Direct access to data - no type erasure needed
    EXPECT_EQ(keys[0]->get_data(), 15);
    EXPECT_EQ(keys[1]->get_data(), 5);
}