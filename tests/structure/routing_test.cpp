/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Routing tests for unsorted insert(): does a key land in the leaf it sorts
// into, rather than in a sibling?
//
// The generic form of this property — shuffled insert into a deep tree, leaf
// chain must come back sorted — lives in key_type_grove_test.hpp, where it runs
// for every key type. What cannot go there are the data shapes below: they are
// statements about interval semantics (a bounding box carries a subtree's
// maximum end, so a long interval inflates it far past the keys it contains),
// which scalar key types like numeric and kmer have no equivalent of.
//
// Each shape puts keys directly on a sibling boundary — equal to a child's
// maximum, sharing a start but not an end, nested inside a much longer
// interval, or past every separator so only the catch-all last child is left —
// and then checks the property that matters: the leaf chain read front to back
// is exactly the sorted key sequence, and every key is still findable by a
// query for its own coordinates (the symptom reported in #517).

// Google Test
#include <gtest/gtest.h>

// Test base
#include "key_type_grove_test.hpp"
#include "tree_validator.hpp"

// genogrove
#include <genogrove/data_type/genomic_coordinate.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>

// standard
#include <algorithm>
#include <random>
#include <string>
#include <utility>
#include <vector>

namespace {

using interval_data = std::vector<std::pair<gdt::interval, int>>;

// -----------------------------------------------------------------------------
// Data shapes
// -----------------------------------------------------------------------------

/// Evenly spaced, non-overlapping — the ordinary case.
interval_data disjoint(int count) {
    interval_data data;
    for (int i = 0; i < count; ++i) {
        data.push_back({gdt::interval(i * 100, i * 100 + 50), i});
    }
    return data;
}

/// Groups of three sharing a start, with very different ends. A bounding box
/// cannot order these: it carries the group's maximum end, not each key's own.
interval_data equal_starts(int count) {
    interval_data data;
    for (int i = 0; i < count; ++i) {
        const int start = (i / 3) * 100;
        data.push_back({gdt::interval(start, start + 10 + (i % 3) * 40), i});
    }
    return data;
}

/// Every third key is long enough to contain the two that follow it, so a
/// subtree's box reaches far past the keys actually stored there.
interval_data nested(int count) {
    interval_data data;
    for (int i = 0; i < count; ++i) {
        const int start = i * 100;
        const int end = (i % 3 == 0) ? start + 5000 : start + 40;
        data.push_back({gdt::interval(start, end), i});
    }
    return data;
}

/// Each key inserted twice — a key equal to a child's maximum must stay in that
/// child rather than being skipped past it.
interval_data duplicates(int count) {
    interval_data data;
    for (int i = 0; i < count / 2; ++i) {
        data.push_back({gdt::interval(i * 100, i * 100 + 50), i});
        data.push_back({gdt::interval(i * 100, i * 100 + 50), i});
    }
    return data;
}

/// Touching intervals — every key sits exactly on its neighbour's edge, so leaf
/// boundaries land between keys that differ by one position.
interval_data touching(int count) {
    interval_data data;
    for (int i = 0; i < count; ++i) {
        data.push_back({gdt::interval(i * 10, i * 10 + 9), i});
    }
    return data;
}

/// One interval spanning the whole index, plus many small ones inside it.
interval_data one_spanning(int count) {
    interval_data data = disjoint(count - 1);
    data.push_back({gdt::interval(0, count * 100), count});
    return data;
}

// -----------------------------------------------------------------------------
// Property check
// -----------------------------------------------------------------------------

void check_routing(const char* shape, int order, const interval_data& data, unsigned seed) {
    SCOPED_TRACE(::testing::Message() << "shape=" << shape << " order=" << order
                                      << " keys=" << data.size());

    gst::grove<gdt::interval, int> grove(order);

    interval_data shuffled = data;
    std::shuffle(shuffled.begin(), shuffled.end(), std::mt19937{seed});
    for (const auto& [key_value, value] : shuffled) {
        grove.insert_data("chr1", key_value, value);
    }

    // Structure, global leaf-chain order, separator exactness, cached subtree
    // maxima, and per-key reachability.
    validate_grove_index(grove, "chr1", order);

    // The leaf chain read front to back must equal the sorted key sequence.
    auto root_it = grove.get_root_nodes().find("chr1");
    ASSERT_NE(root_it, grove.get_root_nodes().end());
    auto* leftmost = root_it->second;
    while (!leftmost->get_is_leaf()) {
        ASSERT_FALSE(leftmost->get_children().empty());
        leftmost = leftmost->get_children().front();
    }

    std::vector<gdt::interval> chain;
    for (auto* leaf = leftmost; leaf != nullptr; leaf = leaf->get_next()) {
        for (const auto* key_ptr : leaf->get_keys()) {
            chain.push_back(key_ptr->get_value());
        }
    }

    std::vector<gdt::interval> expected;
    expected.reserve(data.size());
    for (const auto& [key_value, value] : data) {
        expected.push_back(key_value);
    }
    std::sort(expected.begin(), expected.end());

    ASSERT_EQ(chain.size(), expected.size()) << "leaf chain lost or duplicated keys";
    for (size_t i = 0; i < expected.size(); ++i) {
        ASSERT_TRUE(chain[i] == expected[i])
            << "leaf chain diverges from sorted order at position " << i
            << " (chain " << chain[i].to_string()
            << ", expected " << expected[i].to_string() << ")";
    }

    // Reported symptom of #517: a query for a key's own coordinates missed it.
    for (const auto& [key_value, value] : data) {
        const auto result = grove.intersect(key_value, "chr1");
        EXPECT_FALSE(result.get_keys().empty())
            << "point query missed " << key_value.to_string();
    }
}

} // namespace

TEST(grove_routing, unsorted_insert_lands_in_the_correct_sibling) {
    constexpr int count = 300;
    for (int order : {3, 4, 10, 100}) {
        check_routing("disjoint", order, disjoint(count), 1);
        check_routing("equal_starts", order, equal_starts(count), 2);
        check_routing("nested", order, nested(count), 3);
        check_routing("duplicates", order, duplicates(count), 4);
        check_routing("touching", order, touching(count), 5);
        check_routing("one_spanning", order, one_spanning(count), 6);
    }
}

// A key smaller than everything already present must reach the leftmost leaf,
// and one larger than everything must reach the catch-all last child — the two
// ends of the descent, neither of which has a separator on the far side.
TEST(grove_routing, extremes_reach_the_outer_leaves) {
    for (int order : {3, 10}) {
        SCOPED_TRACE(::testing::Message() << "order=" << order);
        gst::grove<gdt::interval, int> grove(order);

        for (int i = 1; i <= 200; ++i) {
            grove.insert_data("chr1", gdt::interval(i * 100, i * 100 + 50), i);
        }

        grove.insert_data("chr1", gdt::interval(0, 10), 0);            // below all
        grove.insert_data("chr1", gdt::interval(100000, 100010), 999); // above all

        validate_grove_index(grove, "chr1", order);

        const auto smallest = grove.intersect(gdt::interval(0, 10), "chr1");
        EXPECT_EQ(smallest.get_keys().size(), 1u) << "smallest key unreachable";
        const auto largest = grove.intersect(gdt::interval(100000, 100010), "chr1");
        EXPECT_EQ(largest.get_keys().size(), 1u) << "largest key unreachable";
    }
}

// The original report (genogrove/pygenogrove#68) used genomic_coordinate, whose
// operator< also compares strand — so keys that tie on start and end are still
// ordered, and routing has to respect that.
TEST(grove_routing, genomic_coordinate_with_mixed_strands) {
    constexpr char strands[] = {'+', '-', '.'};
    for (int order : {3, 10}) {
        SCOPED_TRACE(::testing::Message() << "order=" << order);
        gst::grove<gdt::genomic_coordinate, std::string> grove(order);

        std::vector<gdt::genomic_coordinate> data;
        for (int i = 0; i < 300; ++i) {
            // Every coordinate appears on all three strands, so start and end
            // tie and only the strand breaks the order.
            data.emplace_back(strands[i % 3], (i / 3) * 100, (i / 3) * 100 + 60);
        }

        auto shuffled = data;
        std::shuffle(shuffled.begin(), shuffled.end(), std::mt19937{7});
        for (const auto& coordinate : shuffled) {
            grove.insert_data("chr1", coordinate, coordinate.to_string());
        }

        validate_grove_index(grove, "chr1", order);

        for (const auto& coordinate : data) {
            const auto result = grove.intersect(coordinate, "chr1");
            EXPECT_FALSE(result.get_keys().empty())
                << "point query missed " << coordinate.to_string();
        }
    }
}
