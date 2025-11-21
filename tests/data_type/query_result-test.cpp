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

// Standard
#include <string>

// genogrove
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/data_type/interval.hpp>

namespace gdt = genogrove::data_type;

TEST(query_result_test, constructor) {
    // Create a query result object, lets assume the query in an interval
    const gdt::interval query_interval(10, 20);
    const gdt::query_result<gdt::interval, int> query(query_interval); // initialize with query (aka interval)

    // verify initial state
    EXPECT_EQ(query_interval, query.get_query());
    EXPECT_TRUE(query.get_keys().empty());
}

TEST(query_result_test, add_keys_with_data) {
    gdt::interval query_interval(10, 20);
    gdt::query_result<gdt::interval, int> results(query_interval);

    // create test intervals
    const gdt::interval intvl0(5,15);
    const gdt::interval intvl1(12,22);
    const gdt::interval intvl2(18,25);
    const gdt::interval intvl3(30, 40);

    // create 'overlapping' keys (as query results)
    gdt::key<gdt::interval, int> key0(intvl0, 5);
    gdt::key<gdt::interval, int> key1(intvl1, 15);
    gdt::key<gdt::interval, int> key2(intvl2, 18);

    // add keys to query_results
    results.add_key(&key0);
    results.add_key(&key1);
    results.add_key(&key2);

    // verify that keys were added correctly
    const auto keys = results.get_keys();

    // verify associated data
    EXPECT_EQ(keys.size(), 3);
    EXPECT_TRUE(keys[0]->has_data());
    EXPECT_TRUE(keys[1]->has_data());
    EXPECT_TRUE(keys[2]->has_data());

    // retrieve associated data
    EXPECT_EQ(keys[0]->get_data(), 5);
    EXPECT_EQ(keys[1]->get_data(), 15);
    EXPECT_EQ(keys[2]->get_data(), 18);
}