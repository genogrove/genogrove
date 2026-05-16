/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <sstream>
#include <type_traits>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/node.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

// =============================================================================
// Grove preconditions
// =============================================================================

TEST(grovePreconditionTest, constructorRejectsOrderBelowThree) {
    // Order must be at least 3. With order == 2, split_internal_node would
    // produce a degenerate right sibling with 0 keys and 1 child.
    EXPECT_THROW((gst::grove<gdt::interval, int>(2)), std::invalid_argument);
    EXPECT_THROW((gst::grove<gdt::interval, int>(1)), std::invalid_argument);
    EXPECT_THROW((gst::grove<gdt::interval, int>(0)), std::invalid_argument);
    EXPECT_THROW((gst::grove<gdt::interval, int>(-1)), std::invalid_argument);
}

TEST(grovePreconditionTest, constructorAcceptsOrderThree) {
    EXPECT_NO_THROW((gst::grove<gdt::interval, int>(3)));
}


// =============================================================================
// Node preconditions
// =============================================================================

TEST(nodePreconditionTest, constructorRejectsOrderBelowTwo) {
    EXPECT_THROW((gst::node<gdt::interval, int>(1)), std::invalid_argument);
    EXPECT_THROW((gst::node<gdt::interval, int>(0)), std::invalid_argument);
}

TEST(nodePreconditionTest, constructorAcceptsOrderTwo) {
    EXPECT_NO_THROW((gst::node<gdt::interval, int>(2)));
}

TEST(nodePreconditionTest, insertKeyPtrRejectsOutOfBounds) {
    gst::node<gdt::interval, int> n(10);
    gdt::key<gdt::interval, int> k(gdt::interval{10, 20}, 1);
    EXPECT_THROW(n.insert_key_ptr(&k, -1), std::out_of_range);
    EXPECT_THROW(n.insert_key_ptr(&k, 1), std::out_of_range);
}

TEST(nodePreconditionTest, insertKeyPtrRejectsNull) {
    gst::node<gdt::interval, int> n(10);
    EXPECT_THROW(n.insert_key_ptr(nullptr), std::invalid_argument);
    EXPECT_THROW(n.insert_key_ptr(nullptr, 0), std::invalid_argument);
}

// =============================================================================
// Node child operations
// =============================================================================

TEST(nodePreconditionTest, addChildRejectsOutOfRange) {
    gst::node<gdt::interval, int> parent(10);
    gst::node<gdt::interval, int> child(10);
    EXPECT_THROW(parent.add_child(&child, -1), std::out_of_range);
    EXPECT_THROW(parent.add_child(&child, 1), std::out_of_range);
}

TEST(nodePreconditionTest, addChildAcceptsValidIndex) {
    gst::node<gdt::interval, int> parent(10);
    auto* child = new gst::node<gdt::interval, int>(10);
    EXPECT_NO_THROW(parent.add_child(child, 0));
    // parent's destructor will delete child (is_leaf defaults to false)
}

TEST(nodePreconditionTest, getChildRejectsOutOfRange) {
    gst::node<gdt::interval, int> n(10);
    EXPECT_THROW(n.get_child(0), std::out_of_range);
    EXPECT_THROW(n.get_child(-1), std::out_of_range);
}

TEST(nodePreconditionTest, getChildReturnsValidChild) {
    gst::node<gdt::interval, int> parent(10);
    auto* child = new gst::node<gdt::interval, int>(10);
    parent.add_child(child, 0);
    EXPECT_EQ(parent.get_child(0), child);
    // parent's destructor will delete child
}

// =============================================================================
// Grove intersect with non-existent index
// =============================================================================

TEST(grovePreconditionTest, intersectNonExistentIndexReturnsEmpty) {
    gst::grove<gdt::interval, int> g(10);
    g.insert_data("chr1", gdt::interval{10, 20}, 1);

    auto result = g.intersect(gdt::interval{10, 20}, "chrX");
    EXPECT_EQ(result.get_keys().size(), 0);
}

// =============================================================================
// query_result preconditions
// =============================================================================

// =============================================================================
// Rule of Five: node and grove are non-copyable, movable
// =============================================================================

TEST(ruleOfFiveTest, nodeIsNotCopyable) {
    static_assert(!std::is_copy_constructible_v<gst::node<gdt::interval, int>>);
    static_assert(!std::is_copy_assignable_v<gst::node<gdt::interval, int>>);
}

TEST(ruleOfFiveTest, nodeIsMoveConstructible) {
    static_assert(std::is_nothrow_move_constructible_v<gst::node<gdt::interval, int>>);
}

TEST(ruleOfFiveTest, nodeIsMoveAssignable) {
    static_assert(std::is_nothrow_move_assignable_v<gst::node<gdt::interval, int>>);
}

TEST(ruleOfFiveTest, groveIsNotCopyable) {
    static_assert(!std::is_copy_constructible_v<gst::grove<gdt::interval, int>>);
    static_assert(!std::is_copy_assignable_v<gst::grove<gdt::interval, int>>);
}

TEST(ruleOfFiveTest, groveIsMoveConstructible) {
    static_assert(std::is_nothrow_move_constructible_v<gst::grove<gdt::interval, int>>);
}

TEST(ruleOfFiveTest, groveIsMoveAssignable) {
    static_assert(std::is_nothrow_move_assignable_v<gst::grove<gdt::interval, int>>);
}

TEST(ruleOfFiveTest, groveMoveTransfersOwnership) {
    gst::grove<gdt::interval, int> g1(10);
    g1.insert_data("chr1", gdt::interval{10, 20}, 1);

    gst::grove<gdt::interval, int> g2(std::move(g1));

    // g2 should have the data
    auto result = g2.intersect(gdt::interval{10, 20}, "chr1");
    EXPECT_EQ(result.get_keys().size(), 1);

    // g1 should be empty (moved-from)
    EXPECT_EQ(g1.get_root_nodes().size(), 0);
}

// =============================================================================
// query_result preconditions
// =============================================================================

TEST(queryResultPreconditionTest, addKeyRejectsNull) {
    gdt::query_result<gdt::interval, int> qr(gdt::interval{10, 20});
    EXPECT_THROW(qr.add_key(nullptr), std::invalid_argument);
}

// =============================================================================
// Grove edge cases
// =============================================================================

TEST(groveEdgeCaseTest, singleElementInsertAndQuery) {
    gst::grove<gdt::interval, int> g(10);
    g.insert_data("chr1", gdt::interval{10, 20}, 42);

    auto result = g.intersect(gdt::interval{15, 15}, "chr1");
    ASSERT_EQ(result.get_keys().size(), 1);
    EXPECT_EQ(result.get_keys()[0]->get_data(), 42);
}

TEST(groveEdgeCaseTest, singleElementNoOverlap) {
    gst::grove<gdt::interval, int> g(10);
    g.insert_data("chr1", gdt::interval{10, 20}, 1);

    auto result = g.intersect(gdt::interval{30, 40}, "chr1");
    EXPECT_EQ(result.get_keys().size(), 0);
}

TEST(groveEdgeCaseTest, duplicateKeyInsertion) {
    gst::grove<gdt::interval, int> g(10);
    g.insert_data("chr1", gdt::interval{10, 20}, 1);
    g.insert_data("chr1", gdt::interval{10, 20}, 2);

    auto result = g.intersect(gdt::interval{10, 20}, "chr1");
    EXPECT_EQ(result.get_keys().size(), 2);
}

TEST(groveEdgeCaseTest, keysEqualToOrder) {
    // Insert exactly (order - 1) keys — fills one leaf exactly without splitting
    gst::grove<gdt::interval, int> g(5);

    for (int i = 0; i < 4; ++i) {
        size_t start = i * 100;
        g.insert_data("chr1", gdt::interval{start, start + 50}, i);
    }

    auto result = g.intersect(gdt::interval{0, 350}, "chr1");
    EXPECT_EQ(result.get_keys().size(), 4);
}

// =============================================================================
// Const surface — pins that read-only operations can be invoked through a
// `const grove&` (no const_cast required by callers).
// =============================================================================

TEST(groveConstCorrectnessTest, serializeAndGraphAccessorsCallableThroughConstRef) {
    gst::grove<gdt::interval, int> g(5);
    auto* k0 = g.insert_data("chr1", gdt::interval{10, 20}, 1);
    auto* k1 = g.insert_data("chr1", gdt::interval{30, 40}, 2);
    g.add_edge(k0, k1);

    // Acquire the read-only view a downstream consumer would hold.
    const auto& cg = g;

    // serialize must be callable through a const reference.
    std::stringstream payload;
    EXPECT_NO_THROW(cg.serialize(payload));

    // Round-trip: deserialize what const-serialize produced.
    payload.seekg(0);
    auto restored = gst::grove<gdt::interval, int>::deserialize(payload);
    EXPECT_EQ(restored.indexed_vertex_count(), 2u);
    EXPECT_EQ(restored.edge_count(), 1u);

    // grove_to_sif must be callable through a const reference, taking a
    // const node pointer.
    std::stringstream sif;
    const auto* root = cg.get_root_nodes().at("chr1");
    EXPECT_NO_THROW(cg.grove_to_sif(sif, root));

    // Read-only graph accessors must accept const key pointers.
    const gdt::key<gdt::interval, int>* ck0 = k0;
    const gdt::key<gdt::interval, int>* ck1 = k1;
    EXPECT_TRUE(cg.has_edge(ck0, ck1));
    EXPECT_EQ(cg.out_degree(ck0), 1u);
    EXPECT_EQ(cg.get_neighbors(ck0).size(), 1u);
    EXPECT_EQ(cg.get_edge_list(ck0).size(), 1u);
}
