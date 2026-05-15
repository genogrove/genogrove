/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <gtest/gtest.h>
#include <vector>
#include <algorithm>
#include <numeric>
#include <random>

#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/data_type/interval.hpp>

#include "tree_validator.hpp"

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

// =============================================================================
// Helpers
// =============================================================================

/**
 * @brief Full tree validation: structural invariants + leaf chain continuity
 *
 * Thin wrapper around the shared validator in tree_validator.hpp so existing
 * call sites in this file can keep the name they used.
 */
template <typename key_type, typename data_type>
void validate_grove_index(gst::node<key_type, data_type>* root, int order) {
    genogrove::test_support::validate_tree_structure(root, order);
}

/**
 * @brief Collect all leaf keys via the leaf chain
 */
template <typename key_type, typename data_type>
std::vector<gdt::key<key_type, data_type>*> collect_leaf_keys(
    gst::node<key_type, data_type>* root) {
    std::vector<gdt::key<key_type, data_type>*> result;
    if (root == nullptr) return result;

    // Walk to leftmost leaf
    auto* current = root;
    while (!current->get_is_leaf()) {
        current = current->get_child(0);
    }

    // Walk leaf chain
    while (current != nullptr) {
        for (auto* key : current->get_keys()) {
            result.push_back(key);
        }
        current = current->get_next();
    }
    return result;
}

/**
 * @brief Insert N non-overlapping intervals and return their key pointers
 */
std::vector<gdt::key<gdt::interval, int>*> insert_intervals(
    gst::grove<gdt::interval, int>& grove,
    const std::string& index,
    int count,
    int gap = 10) {
    std::vector<gdt::key<gdt::interval, int>*> keys;
    keys.reserve(count);
    for (int i = 0; i < count; ++i) {
        size_t start = static_cast<size_t>(i * gap);
        auto* k = grove.insert_data(index, gdt::interval{start, start + 5}, i, gst::sorted);
        keys.push_back(k);
    }
    return keys;
}

// =============================================================================
// Basic Removal Tests
// =============================================================================

TEST(GroveRemoveTest, RemoveSingleKeyFromRootLeaf) {
    gst::grove<gdt::interval, int> grove(4);
    auto* k = grove.insert_data("chr1", gdt::interval{10, 20}, 1, gst::sorted);

    EXPECT_TRUE(grove.remove_key("chr1", k));
    EXPECT_EQ(grove.get_root_nodes().count("chr1"), 0);
    EXPECT_EQ(grove.indexed_vertex_count(), 0);
}

TEST(GroveRemoveTest, RemoveNonExistentKey) {
    gst::grove<gdt::interval, int> grove(4);
    auto* k1 = grove.insert_data("chr1", gdt::interval{10, 20}, 1, gst::sorted);

    // Create a key pointer not in the tree
    gdt::key<gdt::interval, int> fake_key(gdt::interval{99, 99}, 0);
    EXPECT_FALSE(grove.remove_key("chr1", &fake_key));

    // Key count unchanged
    EXPECT_EQ(grove.indexed_vertex_count(), 1);
}

TEST(GroveRemoveTest, RemoveFromNonExistentIndex) {
    gst::grove<gdt::interval, int> grove(4);
    auto* k = grove.insert_data("chr1", gdt::interval{10, 20}, 1, gst::sorted);

    EXPECT_FALSE(grove.remove_key("chr2", k));
    EXPECT_EQ(grove.indexed_vertex_count(), 1);
}

TEST(GroveRemoveTest, RemoveNullKey) {
    gst::grove<gdt::interval, int> grove(4);
    EXPECT_FALSE(grove.remove_key("chr1", nullptr));
}

TEST(GroveRemoveTest, RemoveAllKeysFromRootLeaf) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys = insert_intervals(grove, "chr1", 3);

    for (auto* k : keys) {
        EXPECT_TRUE(grove.remove_key("chr1", k));
    }
    EXPECT_EQ(grove.get_root_nodes().count("chr1"), 0);
    EXPECT_EQ(grove.indexed_vertex_count(), 0);
}

TEST(GroveRemoveTest, RemoveWithoutUnderflow) {
    // Order 5: max 4 keys per node, min_keys = 2
    gst::grove<gdt::interval, int> grove(5);
    auto keys = insert_intervals(grove, "chr1", 4);
    // Root is a leaf with 4 keys — removing one leaves 3, no underflow
    EXPECT_TRUE(grove.remove_key("chr1", keys[1]));
    EXPECT_EQ(grove.indexed_vertex_count(), 3);

    auto* root = grove.get_root_nodes().at("chr1");
    EXPECT_EQ(root->get_keys().size(), 3);
}

TEST(GroveRemoveTest, RemoveSameKeyTwice) {
    // Second removal must return false (key no longer in tree) and not corrupt
    // the tree.
    gst::grove<gdt::interval, int> grove(4);
    auto keys = insert_intervals(grove, "chr1", 5);

    EXPECT_TRUE(grove.remove_key("chr1", keys[2]));
    EXPECT_FALSE(grove.remove_key("chr1", keys[2]));
    EXPECT_EQ(grove.indexed_vertex_count(), 4);
    validate_grove_index(grove.get_root_nodes().at("chr1"), 4);
}

TEST(GroveRemoveTest, RemoveLastChildLeaf) {
    // Regression test for the empty-leaf bug: removing a key that leaves the
    // PARENT'S LAST CHILD (catch-all position) empty previously caused
    // update_separators_upward to walk calc_subtree_range into the empty
    // leaf and throw.
    gst::grove<gdt::interval, int> grove(3);
    auto keys = insert_intervals(grove, "chr1", 5);

    // Find the rightmost leaf by walking the leaf chain
    auto* root = grove.get_root_nodes().at("chr1");
    auto* leaf = root;
    while (!leaf->get_is_leaf()) leaf = leaf->get_child(0);
    while (leaf->get_next() != nullptr) leaf = leaf->get_next();

    // The rightmost leaf's keys are the last child (catch-all) of its parent.
    // Remove them all — triggers the "empty last child" path.
    auto leaf_keys = leaf->get_keys();  // copy since we mutate
    for (auto* k : leaf_keys) {
        EXPECT_TRUE(grove.remove_key("chr1", k));
        if (auto root_it = grove.get_root_nodes().find("chr1");
            root_it != grove.get_root_nodes().end()) {
            validate_grove_index(root_it->second, 3);
        }
    }
}

// =============================================================================
// Rebalancing Tests — use order=3 (max 2 keys/node, min_keys=1)
// =============================================================================

TEST(GroveRemoveTest, BorrowFromLeftSibling) {
    // Order 3: max 2 keys, min 1 key
    gst::grove<gdt::interval, int> grove(3);
    auto keys = insert_intervals(grove, "chr1", 4);
    // Tree shape with order=3 after inserting 4 keys:
    // Root has 2+ children, various leaves

    auto* root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 3);

    size_t before = grove.indexed_vertex_count();

    // Remove a key from the rightmost leaf to trigger borrow/merge
    EXPECT_TRUE(grove.remove_key("chr1", keys[3]));
    EXPECT_EQ(grove.indexed_vertex_count(), before - 1);

    root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 3);

    // Verify remaining keys are still findable
    for (int i = 0; i < 3; ++i) {
        auto result = grove.intersect(keys[i]->get_value(), "chr1");
        EXPECT_GE(result.get_keys().size(), 1)
            << "Key " << i << " should still be findable";
    }
}

TEST(GroveRemoveTest, BorrowFromRightSibling) {
    gst::grove<gdt::interval, int> grove(3);
    auto keys = insert_intervals(grove, "chr1", 4);

    auto* root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 3);

    // Remove from the leftmost leaf
    EXPECT_TRUE(grove.remove_key("chr1", keys[0]));

    root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 3);

    // Verify remaining keys
    for (int i = 1; i < 4; ++i) {
        auto result = grove.intersect(keys[i]->get_value(), "chr1");
        EXPECT_GE(result.get_keys().size(), 1)
            << "Key " << i << " should still be findable";
    }
}

TEST(GroveRemoveTest, MergeLeaves) {
    // Order 4: max 3 keys, leaf min 2. Inserting 4 keys via the regular
    // (unsorted) insert path produces a balanced 2/2 leaf split. Both
    // leaves are exactly at min_keys — removing any single key underflows
    // that leaf AND its sibling cannot lend (still at min_keys), forcing
    // a merge.
    //
    // Note: this test deliberately does NOT use sorted insertion. The
    // sorted-append path uses an asymmetric split (mid = order - 1) which
    // produces a 3/1 layout, so a single removal does not underflow the
    // over-full left leaf.
    gst::grove<gdt::interval, int> grove(4);
    std::vector<gdt::key<gdt::interval, int>*> keys;
    keys.reserve(4);
    for (int i = 0; i < 4; ++i) {
        const size_t start = static_cast<size_t>(i) * 10;
        keys.push_back(grove.insert_data("chr1", gdt::interval{start, start + 5}, i));
    }

    auto* root = grove.get_root_nodes().at("chr1");
    ASSERT_FALSE(root->get_is_leaf()) << "Root should be internal before merge";
    validate_grove_index(root, 4);

    // Remove one key → underflow → merge → root collapses to a leaf
    EXPECT_TRUE(grove.remove_key("chr1", keys[0]));
    root = grove.get_root_nodes().at("chr1");
    EXPECT_TRUE(root->get_is_leaf()) << "Root should have collapsed to a leaf";
    EXPECT_EQ(root->get_keys().size(), 3);
    validate_grove_index(root, 4);

    for (int i = 1; i < 4; ++i) {
        auto result = grove.intersect(keys[i]->get_value(), "chr1");
        EXPECT_GE(result.get_keys().size(), 1) << "Key " << i << " should be findable";
    }
}

TEST(GroveRemoveTest, RootCollapse) {
    gst::grove<gdt::interval, int> grove(3);
    auto keys = insert_intervals(grove, "chr1", 3);

    auto* root = grove.get_root_nodes().at("chr1");
    ASSERT_FALSE(root->get_is_leaf()) << "Root should be internal before collapse";

    // Remove enough keys to collapse the root back to a single leaf
    EXPECT_TRUE(grove.remove_key("chr1", keys[2]));
    EXPECT_TRUE(grove.remove_key("chr1", keys[1]));

    root = grove.get_root_nodes().at("chr1");
    EXPECT_TRUE(root->get_is_leaf()) << "Root should have collapsed to a leaf";
    EXPECT_EQ(root->get_keys().size(), 1);
    validate_grove_index(root, 3);
}

TEST(GroveRemoveTest, RemoveAllWithRebalancing) {
    gst::grove<gdt::interval, int> grove(3);
    auto keys = insert_intervals(grove, "chr1", 10);

    int removal_count = 0;
    for (auto* k : keys) {
        EXPECT_TRUE(grove.remove_key("chr1", k))
            << "removal iteration " << removal_count;
        if (auto root_it = grove.get_root_nodes().find("chr1");
            root_it != grove.get_root_nodes().end()) {
            validate_grove_index(root_it->second, 3);
        }
        ++removal_count;
    }
    EXPECT_EQ(grove.get_root_nodes().count("chr1"), 0);
    EXPECT_EQ(grove.indexed_vertex_count(), 0);
}

TEST(GroveRemoveTest, CascadingRebalance) {
    // Order 3 with enough keys to create a 3-level tree
    gst::grove<gdt::interval, int> grove(3);
    auto keys = insert_intervals(grove, "chr1", 20);

    auto* root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 3);

    // Remove every other key — forces cascading rebalances
    for (int i = 0; i < 20; i += 2) {
        EXPECT_TRUE(grove.remove_key("chr1", keys[i])) << "removing key " << i;
        if (auto root_it = grove.get_root_nodes().find("chr1");
            root_it != grove.get_root_nodes().end()) {
            validate_grove_index(root_it->second, 3);
        }
    }

    // Verify remaining keys
    for (int i = 1; i < 20; i += 2) {
        auto result = grove.intersect(keys[i]->get_value(), "chr1");
        EXPECT_GE(result.get_keys().size(), 1)
            << "Key " << i << " should still be findable after cascading rebalance";
    }
}

TEST(GroveRemoveTest, LargerOrder) {
    gst::grove<gdt::interval, int> grove(10);
    auto keys = insert_intervals(grove, "chr1", 100);

    auto* root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 10);

    // Remove half the keys
    for (int i = 0; i < 100; i += 2) {
        EXPECT_TRUE(grove.remove_key("chr1", keys[i]))
            << "remove iteration i=" << i;
    }

    root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 10);
    EXPECT_EQ(grove.indexed_vertex_count(), 50);

    // Verify remaining keys are all findable
    for (int i = 1; i < 100; i += 2) {
        auto result = grove.intersect(keys[i]->get_value(), "chr1");
        EXPECT_GE(result.get_keys().size(), 1)
            << "Key " << i << " should still be findable";
    }

    // Verify removed keys are NOT findable (by checking they're not in the leaf chain)
    auto remaining = collect_leaf_keys(root);
    for (int i = 0; i < 100; i += 2) {
        EXPECT_TRUE(std::ranges::find(remaining, keys[i]) == remaining.end())
            << "Removed key " << i << " should not be in the tree";
    }
}

// =============================================================================
// Multi-Index Tests
// =============================================================================

TEST(GroveRemoveTest, MultiIndexIndependence) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys_chr1 = insert_intervals(grove, "chr1", 5);
    auto keys_chr2 = insert_intervals(grove, "chr2", 5);

    // Remove from chr1 only
    EXPECT_TRUE(grove.remove_key("chr1", keys_chr1[2]));

    // chr2 should be untouched
    auto* root_chr2 = grove.get_root_nodes().at("chr2");
    validate_grove_index(root_chr2, 4);
    auto remaining_chr2 = collect_leaf_keys(root_chr2);
    EXPECT_EQ(remaining_chr2.size(), 5);
}

// =============================================================================
// Rightmost Cache Tests
// =============================================================================

TEST(GroveRemoveTest, RightmostCacheAfterRemoval) {
    gst::grove<gdt::interval, int> grove(3);
    auto keys = insert_intervals(grove, "chr1", 6);

    // Remove the rightmost key
    EXPECT_TRUE(grove.remove_key("chr1", keys[5]));

    auto* root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 3);

    // Sorted insertion should still work (uses rightmost cache)
    auto* new_key = grove.insert_data("chr1", gdt::interval{100, 105}, 100, gst::sorted);
    EXPECT_NE(new_key, nullptr);

    root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 3);

    auto result = grove.intersect(gdt::interval{100, 105}, "chr1");
    EXPECT_GE(result.get_keys().size(), 1);
}

// =============================================================================
// Graph Edge Cleanup Tests
// =============================================================================

TEST(GroveRemoveTest, RemoveKeyRemovesEdges) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys = insert_intervals(grove, "chr1", 5);

    // Create edges: k0 -> k1 -> k2, k3 -> k2
    grove.add_edge(keys[0], keys[1]);
    grove.add_edge(keys[1], keys[2]);
    grove.add_edge(keys[3], keys[2]);
    EXPECT_EQ(grove.edge_count(), 3);

    // Remove k2 — should remove edges k1->k2 and k3->k2
    EXPECT_TRUE(grove.remove_key("chr1", keys[2]));
    EXPECT_EQ(grove.edge_count(), 1);  // only k0->k1 remains
    EXPECT_TRUE(grove.has_edge(keys[0], keys[1]));
    EXPECT_FALSE(grove.has_edge(keys[1], keys[2]));
    EXPECT_FALSE(grove.has_edge(keys[3], keys[2]));
}

TEST(GroveRemoveTest, RemoveKeyRemovesOutgoingEdges) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys = insert_intervals(grove, "chr1", 3);

    grove.add_edge(keys[0], keys[1]);
    grove.add_edge(keys[0], keys[2]);
    EXPECT_EQ(grove.edge_count(), 2);

    // Remove k0 — should remove both outgoing edges
    EXPECT_TRUE(grove.remove_key("chr1", keys[0]));
    EXPECT_EQ(grove.edge_count(), 0);
}

// =============================================================================
// Graph Overlay Method Tests
// =============================================================================

TEST(GroveRemoveTest, RemoveEdgesFrom) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys = insert_intervals(grove, "chr1", 4);

    grove.add_edge(keys[0], keys[1]);
    grove.add_edge(keys[0], keys[2]);
    grove.add_edge(keys[1], keys[3]);

    EXPECT_EQ(grove.remove_edges_from(keys[0]), 2);
    EXPECT_EQ(grove.edge_count(), 1);
    EXPECT_TRUE(grove.has_edge(keys[1], keys[3]));
}

TEST(GroveRemoveTest, RemoveEdgesTo) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys = insert_intervals(grove, "chr1", 4);

    grove.add_edge(keys[0], keys[2]);
    grove.add_edge(keys[1], keys[2]);
    grove.add_edge(keys[1], keys[3]);

    EXPECT_EQ(grove.remove_edges_to(keys[2]), 2);
    EXPECT_EQ(grove.edge_count(), 1);
    EXPECT_TRUE(grove.has_edge(keys[1], keys[3]));
}

TEST(GroveRemoveTest, RemoveAllEdges) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys = insert_intervals(grove, "chr1", 4);

    grove.add_edge(keys[0], keys[1]);
    grove.add_edge(keys[2], keys[1]);
    grove.add_edge(keys[1], keys[3]);

    // Remove all edges involving k1 (2 incoming + 1 outgoing)
    EXPECT_EQ(grove.remove_all_edges(keys[1]), 3);
    EXPECT_EQ(grove.edge_count(), 0);
}

TEST(GroveRemoveTest, RemoveEdgesIf) {
    gst::grove<gdt::interval, int, int> grove(4);
    auto* k0 = grove.insert_data("chr1", gdt::interval{0, 5}, 0, gst::sorted);
    auto* k1 = grove.insert_data("chr1", gdt::interval{10, 15}, 1, gst::sorted);
    auto* k2 = grove.insert_data("chr1", gdt::interval{20, 25}, 2, gst::sorted);

    grove.add_edge(k0, k1, 42);
    grove.add_edge(k0, k2, 99);
    grove.add_edge(k1, k2, 42);

    // Remove edges with metadata == 42
    using edge_t = typename gst::graph_overlay<gdt::interval, int, int>::edge;
    size_t removed = grove.remove_edges_if([](const edge_t& e) {
        return e.metadata == 42;
    });

    EXPECT_EQ(removed, 2);
    EXPECT_EQ(grove.edge_count(), 1);
    EXPECT_TRUE(grove.has_edge(k0, k2));
}

// =============================================================================
// Query Correctness After Removal
// =============================================================================

TEST(GroveRemoveTest, IntersectAfterRemoval) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys = insert_intervals(grove, "chr1", 10, /*gap=*/10);

    // Remove keys at indices 2, 5, 8
    EXPECT_TRUE(grove.remove_key("chr1", keys[2]));
    EXPECT_TRUE(grove.remove_key("chr1", keys[5]));
    EXPECT_TRUE(grove.remove_key("chr1", keys[8]));

    auto* root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 4);

    // Remaining keys should be findable
    std::vector<int> remaining = {0, 1, 3, 4, 6, 7, 9};
    for (int i : remaining) {
        auto result = grove.intersect(keys[i]->get_value(), "chr1");
        EXPECT_GE(result.get_keys().size(), 1)
            << "Key " << i << " should be findable after removal";
    }

    // Removed keys should NOT be found by their intervals
    std::vector<int> removed = {2, 5, 8};
    for (int i : removed) {
        auto result = grove.intersect(keys[i]->get_value(), "chr1");
        // Check that none of the returned keys are the removed ones
        for (const auto* k : result.get_keys()) {
            EXPECT_NE(k, keys[i])
                << "Removed key " << i << " should not appear in query results";
        }
    }
}

TEST(GroveRemoveTest, IntersectAllIndicesAfterRemoval) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys_chr1 = insert_intervals(grove, "chr1", 5);
    auto keys_chr2 = insert_intervals(grove, "chr2", 5);

    grove.remove_key("chr1", keys_chr1[2]);

    // Query across all indices
    auto result = grove.intersect(gdt::interval{20, 25});
    // Should find the key in chr2 but not the removed one in chr1
    bool found_chr2 = false;
    for (const auto* k : result.get_keys()) {
        EXPECT_NE(k, keys_chr1[2]);
        if (k == keys_chr2[2]) found_chr2 = true;
    }
    EXPECT_TRUE(found_chr2);
}

// =============================================================================
// Stress Test
// =============================================================================

TEST(GroveRemoveTest, StressRemoveInReverseOrder) {
    gst::grove<gdt::interval, int> grove(5);
    auto keys = insert_intervals(grove, "chr1", 50);

    // Remove all keys in reverse order
    for (int i = 49; i >= 0; --i) {
        EXPECT_TRUE(grove.remove_key("chr1", keys[i]));
        auto root_it = grove.get_root_nodes().find("chr1");
        if (root_it != grove.get_root_nodes().end()) {
            validate_grove_index(root_it->second, 5);
        }
    }
    EXPECT_EQ(grove.get_root_nodes().count("chr1"), 0);
}

TEST(GroveRemoveTest, StressRemoveInForwardOrder) {
    gst::grove<gdt::interval, int> grove(5);
    auto keys = insert_intervals(grove, "chr1", 50);

    for (int i = 0; i < 50; ++i) {
        EXPECT_TRUE(grove.remove_key("chr1", keys[i]));
        auto root_it = grove.get_root_nodes().find("chr1");
        if (root_it != grove.get_root_nodes().end()) {
            validate_grove_index(root_it->second, 5);
        }
    }
    EXPECT_EQ(grove.get_root_nodes().count("chr1"), 0);
}

TEST(GroveRemoveTest, StressRemoveRandom) {
    gst::grove<gdt::interval, int> grove(4);
    auto keys = insert_intervals(grove, "chr1", 100);

    // Create a shuffled removal order (deterministic seed)
    std::vector<int> indices(100);
    std::iota(indices.begin(), indices.end(), 0);
    std::mt19937 rng(42);
    std::ranges::shuffle(indices, rng);

    int removal_count = 0;
    for (int idx : indices) {
        EXPECT_TRUE(grove.remove_key("chr1", keys[idx]))
            << "removal " << removal_count << " (key idx=" << idx << ")";
        if (auto root_it = grove.get_root_nodes().find("chr1");
            root_it != grove.get_root_nodes().end()) {
            validate_grove_index(root_it->second, 4);
        }
        ++removal_count;
    }
    EXPECT_EQ(grove.get_root_nodes().count("chr1"), 0);
}

// =============================================================================
// Mixed Insert + Remove
// =============================================================================

TEST(GroveRemoveTest, MixedInsertAndRemove) {
    // Interleave inserts and removes: the tree must remain fully functional
    // after removals (rightmost cache, separators) so that further inserts work.
    gst::grove<gdt::interval, int> grove(4);

    // Initial batch
    auto initial = insert_intervals(grove, "chr1", 20);
    validate_grove_index(grove.get_root_nodes().at("chr1"), 4);

    // Remove every other key
    for (int i = 0; i < 20; i += 2) {
        EXPECT_TRUE(grove.remove_key("chr1", initial[i]));
    }
    validate_grove_index(grove.get_root_nodes().at("chr1"), 4);
    EXPECT_EQ(grove.indexed_vertex_count(), 10);

    // Append 10 more keys (strictly greater) via sorted insert —
    // exercises the rightmost-cache path after removals.
    std::vector<gdt::key<gdt::interval, int>*> appended;
    for (int i = 20; i < 30; ++i) {
        appended.push_back(grove.insert_data("chr1",
            gdt::interval{static_cast<size_t>(i * 10), static_cast<size_t>(i * 10 + 5)},
            i, gst::sorted));
    }
    validate_grove_index(grove.get_root_nodes().at("chr1"), 4);
    EXPECT_EQ(grove.indexed_vertex_count(), 20);

    // All appended keys must be findable
    for (auto* k : appended) {
        auto result = grove.intersect(k->get_value(), "chr1");
        EXPECT_GE(result.get_keys().size(), 1);
    }
}

// =============================================================================
// Range Query After Removal
// =============================================================================

TEST(GroveRemoveTest, RangeQueryAfterRemoval) {
    // Verify that a range query covering many keys returns the correct
    // remaining set after removals (not just single-key lookups).
    gst::grove<gdt::interval, int> grove(5);
    auto keys = insert_intervals(grove, "chr1", 30, /*gap=*/10);
    // Intervals: [0,5], [10,15], ..., [290,295]

    // Remove indices 5, 10, 15, 20, 25
    std::vector<int> to_remove = {5, 10, 15, 20, 25};
    for (int i : to_remove) {
        EXPECT_TRUE(grove.remove_key("chr1", keys[i]));
    }
    validate_grove_index(grove.get_root_nodes().at("chr1"), 5);

    // Range query covering the full inserted range
    auto result = grove.intersect(gdt::interval{0, 295}, "chr1");

    // Should return 30 - 5 = 25 keys
    EXPECT_EQ(result.get_keys().size(), 25);

    // None of the removed keys should appear in the results
    for (int i : to_remove) {
        for (const auto* k : result.get_keys()) {
            EXPECT_NE(k, keys[i]) << "Removed key " << i << " appeared in range query";
        }
    }
}

// =============================================================================
// Internal Rebalance (borrow/merge at internal level via cascade)
// =============================================================================

TEST(GroveRemoveTest, InternalBorrowAndMerge) {
    // Build a 3-level tree, then remove enough keys to force the leaf
    // rebalance to cascade into an internal-level borrow/merge.
    gst::grove<gdt::interval, int> grove(3);
    auto keys = insert_intervals(grove, "chr1", 30);

    auto* root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 3);

    // Remove a cluster of keys to trigger cascaded rebalancing
    for (int i = 0; i < 15; ++i) {
        EXPECT_TRUE(grove.remove_key("chr1", keys[i]));
        if (auto root_it = grove.get_root_nodes().find("chr1");
            root_it != grove.get_root_nodes().end()) {
            validate_grove_index(root_it->second, 3);
        }
    }
    EXPECT_EQ(grove.indexed_vertex_count(), 15);

    // Remaining keys must all still be reachable
    for (int i = 15; i < 30; ++i) {
        auto result = grove.intersect(keys[i]->get_value(), "chr1");
        bool found = false;
        for (const auto* k : result.get_keys()) {
            if (k == keys[i]) { found = true; break; }
        }
        EXPECT_TRUE(found) << "Key " << i << " not findable after cascade";
    }
}