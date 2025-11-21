/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#include <gtest/gtest.h>
#include <genogrove/utility/ranges.hpp>

TEST(ranges, empty)
{
    // create a range (unordered map)
    std::unordered_map<std::string, uint8_t> map = {{"a", 1}, {"b", 2},{"c", 3}};

    // test key lookup
    EXPECT_EQ(genogrove::utility::value_lookup(map, "a"), 1);
    EXPECT_EQ(genogrove::utility::value_lookup(map, "b"), 2);
    EXPECT_EQ(genogrove::utility::value_lookup(map, "c"), 3);

    // test value lookup
    EXPECT_EQ(genogrove::utility::key_lookup(map, uint8_t(1)), "a");
    EXPECT_EQ(genogrove::utility::key_lookup(map, uint8_t(2)), "b");
    EXPECT_EQ(genogrove::utility::key_lookup(map, uint8_t(3)), "c");
}
