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
#include <genogrove/data_type/type_registry.hpp>

namespace gdt = genogrove::data_type;

TEST(query_result_test, constructor) {
    // Create a query result object, lets assume the query in an interval
    gdt::interval intvl(10, 20);
    gdt::query_result<gdt::interval> qres(intvl); // initialize with query (aka interval)

    // constructor
    EXPECT_EQ(qres.get_query(), intvl); // check if query is set correctly
    EXPECT_TRUE(qres.get_keys().empty()); // check if keys are empty

    // add int to type registry
    gdt::type_registry::register_type<int>();

    // Add some element (ideally that would be keys - but lets use intervals here)
    gdt::interval intvl0(15, 25);
    gdt::interval intvl1(5, 12);
    gdt::interval intvl2(30, 40);

    gdt::key<gdt::interval> key0(intvl0, 15);
    gdt::key<gdt::interval> key1(intvl1, 5);
    gdt::key<gdt::interval> key2(intvl2, 30);

    qres.add_key(&key0);
    qres.add_key(&key1);

    // check if keys are added correctly
    auto keys = qres.get_keys();
    ASSERT_EQ(keys.size(), 2);
    EXPECT_EQ(keys[0]->get_value(), intvl0);
    EXPECT_EQ(keys[1]->get_value(), intvl1);
}