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
#include <genogrove/data_type/type_registry.hpp>

namespace gdt = genogrove::data_type;

TEST(query_result_test, constructor_and_empty_query) {
    // Create a query result object with an interval query
    const gdt::interval query_interval(10, 20);
    gdt::query_result<gdt::interval> qres(query_interval);

    // Verify initial state
    EXPECT_EQ(qres.get_query(), query_interval);
    EXPECT_TRUE(qres.get_keys().empty());
}

TEST(query_result_test, add_keys_with_data) {
    const gdt::interval query_interval(10, 20);
    gdt::query_result<gdt::interval> qres(query_interval);

    // Create intervals for test keys
    const gdt::interval intvl0(15, 25);
    const gdt::interval intvl1(5, 12);
    const gdt::interval intvl2(30, 40);

    // Create keys with associated data
    // Note: Type registration happens automatically in key constructor (key.hpp:52)
    gdt::key<gdt::interval> key0(intvl0, 15);
    gdt::key<gdt::interval> key1(intvl1, 5);
    gdt::key<gdt::interval> key2(intvl2, 30);

    // Add keys to query result
    qres.add_key(&key0);
    qres.add_key(&key1);

    // Verify keys were added correctly
    const auto keys = qres.get_keys();
    ASSERT_EQ(keys.size(), 2);
    EXPECT_EQ(keys[0]->get_value(), intvl0);
    EXPECT_EQ(keys[1]->get_value(), intvl1);

    // Verify associated data can be retrieved
    ASSERT_NE(keys[0]->get_data(), nullptr);
    ASSERT_NE(keys[1]->get_data(), nullptr);

    const auto data0 = gdt::type_registry::cast<int>(keys[0]->get_data());
    const auto data1 = gdt::type_registry::cast<int>(keys[1]->get_data());
    EXPECT_EQ(data0, 15);
    EXPECT_EQ(data1, 5);
}