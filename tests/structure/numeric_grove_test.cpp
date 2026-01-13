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
#include <genogrove/data_type/numeric.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;
namespace ggu = genogrove::utility;

// =============================================================================
// Traits Specialization for gdt::numeric (define ONCE)
// =============================================================================

template<>
struct grove_test_traits<gdt::numeric, int> {
    static std::vector<std::pair<gdt::numeric, int>> generate_test_data(size_t count) {
        std::vector<std::pair<gdt::numeric, int>> data;
        // Generate distinct integer values with gaps between them
        for (size_t i = 0; i < count; ++i) {
            int value = static_cast<int>(i * 10); // 0, 10, 20, 30, ...
            data.push_back({gdt::numeric{value}, static_cast<int>(i)});
        }
        return data;
    }

    static query_overlap_expectation<gdt::numeric>
    create_overlapping_query(const std::vector<std::pair<gdt::numeric, int>>& test_data) {
        if (test_data.empty()) {
            return {gdt::numeric{0}, {}};
        }

        // For numeric, overlap only occurs when values are exactly equal
        // Query for the value at a valid index (prefer index 2, fallback to last element)
        size_t target_idx = test_data.size() >= 3 ? 2 : test_data.size() - 1;
        gdt::numeric query = test_data[target_idx].first;

        return {query, {target_idx}};
    }

    static query_overlap_expectation<gdt::numeric>
    create_non_overlapping_query(const std::vector<std::pair<gdt::numeric, int>>& test_data) {
        if (test_data.empty()) {
            return {gdt::numeric{999}, {}};
        }

        // Create query with value that doesn't exist (in the gap between values)
        // Since we generate values as i*10, value 5 doesn't exist
        return {gdt::numeric{5}, {}};
    }
};

// =============================================================================
// Instantiate Typed Tests for numeric
// =============================================================================

// Register gdt::numeric for typed testing - all standard tests run automatically!
using NumericTestTypes = ::testing::Types<gdt::numeric>;
INSTANTIATE_TYPED_TEST_SUITE_P(Numeric, grove_typed_test, NumericTestTypes);