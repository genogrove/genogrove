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
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/node.hpp>
#include <genogrove/utility/ranges.hpp>

namespace gdt = genogrove::data_type;
namespace gst = genogrove::structure;
namespace ggu = genogrove::utility;

TEST(interval_grove_test, interval_creation) {
    gst::grove<gdt::interval> grove(3);
    gdt::interval intvl1{5, 10};
    gdt::interval intvl2{15, 20};
    gdt::interval intvl3{25, 30};
    gdt::interval intvl4{35, 40};

    int val1 = 10;
    int val2 = 20;
    int val3 = 30;
    int val4 = 40;

    grove.insert_data<int>("index1", intvl1, val1);
    grove.insert_data<int>("index1", intvl2, val2);
    grove.insert_data<int>("index1", intvl3, val3);

    gdt::interval query_interval{17, 27};
    gdt::query_result<gdt::interval> result = grove.intersect(query_interval, "index1");

    std::cout << "number of overlapping intervals: " << result.get_keys().size() << "\n";
    for(const auto& key : result.get_keys()) {
        std::cout << key->get_value().toString() << "\n";
    }
}

