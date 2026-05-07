/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */

#include <gtest/gtest.h>

#include <genogrove/data_type/genomic_coordinate.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/numeric.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

// =============================================================================
// interval — basic predecessor/successor
// =============================================================================

TEST(GroveNearestTest, EmptyGroveReturnsNullPair) {
    gst::grove<gdt::interval, int> g(8);
    auto nn = g.nearest_neighbors(gdt::interval{100, 200}, "chr1");
    EXPECT_EQ(nn.get_predecessor(), nullptr);
    EXPECT_EQ(nn.get_successor(),   nullptr);
}

TEST(GroveNearestTest, MissingIndexReturnsNullPair) {
    gst::grove<gdt::interval, int> g(8);
    g.insert_data("chr1", gdt::interval{50, 60}, 1, gst::sorted);
    auto nn = g.nearest_neighbors(gdt::interval{100, 200}, "chr2");
    EXPECT_EQ(nn.get_predecessor(), nullptr);
    EXPECT_EQ(nn.get_successor(),   nullptr);
}

TEST(GroveNearestTest, QueryBeforeAllKeysHasOnlySuccessor) {
    gst::grove<gdt::interval, int> g(8);
    auto* k = g.insert_data("chr1", gdt::interval{500, 600}, 1, gst::sorted);
    auto nn = g.nearest_neighbors(gdt::interval{100, 200}, "chr1");
    EXPECT_EQ(nn.get_predecessor(), nullptr);
    EXPECT_EQ(nn.get_successor(),   k);
}

TEST(GroveNearestTest, QueryAfterAllKeysHasOnlyPredecessor) {
    gst::grove<gdt::interval, int> g(8);
    auto* k = g.insert_data("chr1", gdt::interval{100, 200}, 1, gst::sorted);
    auto nn = g.nearest_neighbors(gdt::interval{500, 600}, "chr1");
    EXPECT_EQ(nn.get_predecessor(), k);
    EXPECT_EQ(nn.get_successor(),   nullptr);
}

TEST(GroveNearestTest, QueryBracketedByTwoKeys) {
    gst::grove<gdt::interval, int> g(8);
    auto* lhs = g.insert_data("chr1", gdt::interval{100, 200}, 1, gst::sorted);
    auto* rhs = g.insert_data("chr1", gdt::interval{500, 600}, 2, gst::sorted);
    auto nn = g.nearest_neighbors(gdt::interval{300, 400}, "chr1");
    EXPECT_EQ(nn.get_predecessor(), lhs);
    EXPECT_EQ(nn.get_successor(),   rhs);
}

TEST(GroveNearestTest, OverlappingKeysAreSkipped) {
    gst::grove<gdt::interval, int> g(8);
    g.insert_data("chr1", gdt::interval{100, 350}, 1, gst::sorted);  // overlaps query
    auto* far_pred = g.insert_data("chr1", gdt::interval{50, 60}, 2, gst::sorted);
    auto* far_succ = g.insert_data("chr1", gdt::interval{500, 600}, 3, gst::sorted);
    auto nn = g.nearest_neighbors(gdt::interval{300, 400}, "chr1");
    EXPECT_EQ(nn.get_predecessor(), far_pred);
    EXPECT_EQ(nn.get_successor(),   far_succ);
}

TEST(GroveNearestTest, AbuttingKeysHaveZeroGapDistance) {
    // Closed-coordinate semantics: K.end == Q.start - 1 means abutting (gap = 0).
    gst::grove<gdt::interval, int> g(8);
    auto* lhs = g.insert_data("chr1", gdt::interval{50, 99}, 1, gst::sorted);   // ends at 99, abuts query start 100
    auto* rhs = g.insert_data("chr1", gdt::interval{201, 300}, 2, gst::sorted); // starts at 201, abuts query end 200
    auto nn = g.nearest_neighbors(gdt::interval{100, 200}, "chr1");
    EXPECT_EQ(nn.get_predecessor(), lhs);
    EXPECT_EQ(nn.get_successor(),   rhs);
    EXPECT_EQ(100u - lhs->get_value().get_end() - 1, 0u);
    EXPECT_EQ(rhs->get_value().get_start() - 200u - 1, 0u);
}

TEST(GroveNearestTest, ChoosesClosestPredecessorAmongMany) {
    gst::grove<gdt::interval, int> g(8);
    g.insert_data("chr1", gdt::interval{0, 10}, 1, gst::sorted);
    g.insert_data("chr1", gdt::interval{20, 30}, 2, gst::sorted);
    auto* closest = g.insert_data("chr1", gdt::interval{40, 50}, 3, gst::sorted);
    auto nn = g.nearest_neighbors(gdt::interval{100, 200}, "chr1");
    EXPECT_EQ(nn.get_predecessor(), closest);
    EXPECT_EQ(nn.get_successor(),   nullptr);
}

TEST(GroveNearestTest, MultiLeafTreePicksGlobalNearest) {
    // Order 4 forces splits with > 8 keys; verify pruning across multiple leaves.
    gst::grove<gdt::interval, int> g(4);
    for (size_t i = 0; i < 16; ++i) {
        g.insert_data("chr1", gdt::interval{i * 100, i * 100 + 20}, static_cast<int>(i), gst::sorted);
    }
    // Query in the gap between i=4 ([400,420]) and i=5 ([500,520]).
    auto nn = g.nearest_neighbors(gdt::interval{440, 460}, "chr1");
    ASSERT_NE(nn.get_predecessor(), nullptr);
    ASSERT_NE(nn.get_successor(),   nullptr);
    EXPECT_EQ(nn.get_predecessor()->get_value().get_end(),   420u);
    EXPECT_EQ(nn.get_successor()->get_value().get_start(), 500u);
}

// =============================================================================
// genomic_coordinate — predicate-based strand filtering
// =============================================================================

TEST(GroveNearestTest, GenomicCoordinateNoPredicateIgnoresStrand) {
    gst::grove<gdt::genomic_coordinate, int> g(8);
    auto* minus_close = g.insert_data("chr1", gdt::genomic_coordinate{'-', 50, 99},  1, gst::sorted);
    g.insert_data("chr1", gdt::genomic_coordinate{'+', 0,  10},  2, gst::sorted);
    auto nn = g.nearest_neighbors(gdt::genomic_coordinate{'+', 100, 200}, "chr1");
    // Without a predicate, strand is ignored: closest by coordinate wins.
    EXPECT_EQ(nn.get_predecessor(), minus_close);
}

TEST(GroveNearestTest, StrandPredicateFiltersOutWrongStrand) {
    gst::grove<gdt::genomic_coordinate, int> g(8);
    g.insert_data("chr1", gdt::genomic_coordinate{'-', 50, 99}, 1, gst::sorted);   // close, wrong strand
    auto* far_match = g.insert_data("chr1", gdt::genomic_coordinate{'+', 0, 10}, 2, gst::sorted); // far, right strand
    auto same_strand = [](const auto& cand, const auto& q) {
        return q.get_strand() == '*' || cand.get_strand() == '*'
            || cand.get_strand() == q.get_strand();
    };
    auto nn = g.nearest_neighbors(gdt::genomic_coordinate{'+', 100, 200}, "chr1", same_strand);
    EXPECT_EQ(nn.get_predecessor(), far_match);
    EXPECT_EQ(nn.get_successor(),   nullptr);
}

TEST(GroveNearestTest, WildcardQueryMatchesAnyStrand) {
    gst::grove<gdt::genomic_coordinate, int> g(8);
    auto* k = g.insert_data("chr1", gdt::genomic_coordinate{'-', 50, 99}, 1, gst::sorted);
    auto same_strand = [](const auto& cand, const auto& q) {
        return q.get_strand() == '*' || cand.get_strand() == '*'
            || cand.get_strand() == q.get_strand();
    };
    auto nn = g.nearest_neighbors(gdt::genomic_coordinate{'*', 100, 200}, "chr1", same_strand);
    EXPECT_EQ(nn.get_predecessor(), k);
}

// =============================================================================
// numeric — generic scalar predecessor/successor
// =============================================================================

TEST(GroveNearestTest, NumericPredecessorSuccessor) {
    gst::grove<gdt::numeric, int> g(8);
    auto* k1 = g.insert_data("idx", gdt::numeric{10}, 1, gst::sorted);
    g.insert_data("idx", gdt::numeric{20}, 2, gst::sorted);
    auto* k3 = g.insert_data("idx", gdt::numeric{30}, 3, gst::sorted);
    // Query value 20 overlaps (exact match) — should be excluded.
    auto nn = g.nearest_neighbors(gdt::numeric{20}, "idx");
    // overlaps(20, 20) is true (exact match), so the key with value 20 is skipped.
    // Predecessor: largest non-overlapping K < 20 = 10
    // Successor:   smallest non-overlapping K > 20 = 30
    EXPECT_EQ(nn.get_predecessor(), k1);
    EXPECT_EQ(nn.get_successor(),   k3);
}

TEST(GroveNearestTest, NumericQueryNotInTree) {
    gst::grove<gdt::numeric, int> g(8);
    auto* k1 = g.insert_data("idx", gdt::numeric{10}, 1, gst::sorted);
    auto* k2 = g.insert_data("idx", gdt::numeric{30}, 2, gst::sorted);
    auto nn = g.nearest_neighbors(gdt::numeric{20}, "idx");
    EXPECT_EQ(nn.get_predecessor(), k1);
    EXPECT_EQ(nn.get_successor(),   k2);
}