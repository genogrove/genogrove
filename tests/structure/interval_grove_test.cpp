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
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/node.hpp>
#include <genogrove/utility/ranges.hpp>

// standard
#include <random>
#include <variant>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;
namespace ggu = genogrove::utility;

// =============================================================================
// Traits Specialization for gdt::interval (define ONCE)
// =============================================================================

template<>
struct grove_test_traits<gdt::interval, int> {
    static std::vector<std::pair<gdt::interval, int>> generate_test_data(size_t count) {
        std::vector<std::pair<gdt::interval, int>> data;
        // Generate non-overlapping intervals with 50bp gap between them
        for (size_t i = 0; i < count; ++i) {
            size_t start = i * 100;
            size_t end = start + 50;
            data.push_back({{start, end}, static_cast<int>(i)});
        }
        return data;
    }

    static query_overlap_expectation<gdt::interval>
    create_overlapping_query(const std::vector<std::pair<gdt::interval, int>>& test_data) {
        if (test_data.size() < 2) {
            gdt::interval query{test_data[0].first.get_start() + 10,
                               test_data[0].first.get_end() - 10};
            return {query, {0}};
        }

        // Create query that overlaps with multiple intervals (indices 1, 2, 3)
        size_t start_idx = 1;
        size_t end_idx = std::min(size_t(3), test_data.size() - 1);

        size_t query_start = test_data[start_idx].first.get_start() + 20;
        size_t query_end = test_data[end_idx].first.get_start() + 20;

        // Collect all expected overlapping indices
        std::vector<size_t> expected_indices;
        gdt::interval query{query_start, query_end};
        for (size_t i = 0; i < test_data.size(); ++i) {
            if (gdt::interval::is_overlapping(test_data[i].first, query)) {
                expected_indices.push_back(i);
            }
        }

        return {query, expected_indices};
    }

    static query_overlap_expectation<gdt::interval>
    create_non_overlapping_query(const std::vector<std::pair<gdt::interval, int>>& test_data) {
        if (test_data.empty()) {
            return {gdt::interval{0, 10}, {}};
        }

        // Create query in the gap between test_data[0] and test_data[1]
        size_t start = test_data[0].first.get_end() + 10;
        size_t end = test_data.size() > 1
            ? test_data[1].first.get_start() - 10
            : start + 20;

        return {gdt::interval{start, end}, {}};
    }
};

// =============================================================================
// Instantiate Typed Tests for interval
// =============================================================================

// Register gdt::interval for typed testing - all standard tests run automatically!
using IntervalTestTypes = ::testing::Types<gdt::interval>;
INSTANTIATE_TYPED_TEST_SUITE_P(Interval, grove_typed_test, IntervalTestTypes);

// =============================================================================
// Example: How to add a new data type in the future (SUPER EASY!)
// =============================================================================

/*
// To add testing for a new key type like gdt::genomic_coordinate:

// Step 1: Specialize grove_test_traits ONCE (3 static methods - ~30 lines):
template<>
struct grove_test_traits<gdt::genomic_coordinate, int> {
    static std::vector<std::pair<gdt::genomic_coordinate, int>> generate_test_data(size_t count) {
        std::vector<std::pair<gdt::genomic_coordinate, int>> data;
        for (size_t i = 0; i < count; ++i) {
            size_t start = i * 100;
            size_t end = start + 50;
            data.push_back({{start, end, '+'}, static_cast<int>(i)});
        }
        return data;
    }

    static query_overlap_expectation<gdt::genomic_coordinate>
    create_overlapping_query(const std::vector<std::pair<gdt::genomic_coordinate, int>>& test_data) {
        gdt::genomic_coordinate query{120, 320, '+'};
        std::vector<size_t> expected = {1, 2, 3};
        return {query, expected};
    }

    static query_overlap_expectation<gdt::genomic_coordinate>
    create_non_overlapping_query(const std::vector<std::pair<gdt::genomic_coordinate, int>>& test_data) {
        gdt::genomic_coordinate query{60, 80, '+'};
        return {query, {}};
    }
};

// Step 2: Register the type for typed testing (2 lines!):
using GenomicCoordinateTestTypes = ::testing::Types<gdt::genomic_coordinate>;
INSTANTIATE_TYPED_TEST_SUITE_P(GenomicCoordinate, GroveTypedTest, GenomicCoordinateTestTypes);

// That's it! ALL 9 standard tests automatically run for the new type:
// - RegularInsertWorks
// - SortedInsertWorks
// - BulkInsertReturnsHandles
// - OverlappingQueryWorks (with tracked expected indices!)
// - NonOverlappingQueryWorks
// - EdgeCreationBasic
// - LinkIfBasic
// - LinkIfConditional
// - CrossChromosomeEdges

// Total: ~32 lines to add complete testing for a new type. Zero redundancy!
*/
