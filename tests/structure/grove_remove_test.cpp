/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */

#include <gtest/gtest.h>
#include <vector>
#include <algorithm>
#include <numeric>
#include <random>

#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/data_type/interval.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

// =============================================================================
// Helpers
// =============================================================================

/**
 * @brief Validate B+ tree invariants recursively (adapted from key_type_grove_test.hpp)
 *
 * Checks: parent pointers, children/keys count, sorted keys, uniform leaf depth,
 * leaf chain continuity, and separator correctness.
 */
template <typename key_type, typename data_type>
void validate_tree(
    gst::node<key_type, data_type>* n,
    gst::node<key_type, data_type>* expected_parent,
    int depth,
    int order,
    int min_keys,
    bool is_root,
    int& leaf_depth,
    std::vector<gst::node<key_type, data_type>*>& leaves) {

    ASSERT_NE(n, nullptr) << "Node should not be null at depth " << depth;

    EXPECT_EQ(n->get_parent(), expected_parent)
        << "Parent pointer mismatch at depth " << depth;

    EXPECT_LE(n->get_keys().size(), static_cast<size_t>(order - 1))
        << "Node has too many keys at depth " << depth;

    if (!is_root) {
        EXPECT_GE(static_cast<int>(n->get_keys().size()), min_keys)
            << "Node has too few keys at depth " << depth
            << " (has " << n->get_keys().size() << ", min " << min_keys << ")";
    }

    if (n->get_is_leaf()) {
        EXPECT_TRUE(n->get_children().empty())
            << "Leaf node should have no children at depth " << depth;

        if (leaf_depth < 0) {
            leaf_depth = depth;
        } else {
            EXPECT_EQ(depth, leaf_depth) << "All leaves should be at the same depth";
        }

        // Check sorted keys
        for (size_t i = 1; i < n->get_keys().size(); ++i) {
            EXPECT_FALSE(n->get_keys()[i]->get_value() < n->get_keys()[i-1]->get_value())
                << "Keys should be sorted within leaf at depth " << depth;
        }

        leaves.push_back(n);
    } else {
        EXPECT_EQ(n->get_children().size(), n->get_keys().size() + 1)
            << "Internal node invariant violated at depth " << depth
            << ": " << n->get_children().size() << " children but "
            << n->get_keys().size() << " keys";

        // Check separator correctness: keys[i] should be aggregate of children[i]
        for (size_t i = 0; i < n->get_keys().size(); ++i) {
            auto expected = n->get_children()[i]->calc_parent_key();
            EXPECT_EQ(n->get_keys()[i]->get_value(), expected)
                << "Separator key[" << i << "] should be aggregate of child[" << i << "]"
                << " at depth " << depth;
        }

        for (size_t i = 0; i < n->get_children().size(); ++i) {
            validate_tree(n->get_children()[i], n, depth + 1, order, min_keys, false,
                          leaf_depth, leaves);
        }
    }
}

/**
 * @brief Full tree validation including leaf chain continuity
 */
template <typename key_type, typename data_type>
void validate_grove_index(gst::node<key_type, data_type>* root, int order) {
    if (root == nullptr) return;

    int min_keys = (order + 1) / 2 - 1;
    int leaf_depth = -1;
    std::vector<gst::node<key_type, data_type>*> leaves;

    validate_tree(root, static_cast<gst::node<key_type, data_type>*>(nullptr),
                  0, order, min_keys, true, leaf_depth, leaves);

    // Verify leaf chain
    for (size_t i = 0; i + 1 < leaves.size(); ++i) {
        EXPECT_EQ(leaves[i]->get_next(), leaves[i + 1])
            << "Leaf chain broken between leaf " << i << " and " << (i + 1);
    }
    if (!leaves.empty()) {
        EXPECT_EQ(leaves.back()->get_next(), nullptr)
            << "Last leaf should have null next pointer";
    }
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
    // Order 4: max 3 keys, min 1. Use regular (unsorted) insert to get a
    // balanced split where both siblings end up at min_keys after one removal,
    // forcing a real merge of two non-empty leaves.
    gst::grove<gdt::interval, int> grove(4);
    // Insert 4 keys — after splits with default_mid()=(4+1)/2=2:
    // root (internal) with 2 leaves, each with 2 keys.
    auto keys = insert_intervals(grove, "chr1", 4);

    auto* root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 4);

    // Remove one key from the left leaf → left has 1 key (= min_keys)
    EXPECT_TRUE(grove.remove_key("chr1", keys[0]));
    root = grove.get_root_nodes().at("chr1");
    validate_grove_index(root, 4);

    // Now remove from left again → left has 0 keys, both siblings were at
    // min_keys so borrow was not possible → merge two leaves
    EXPECT_TRUE(grove.remove_key("chr1", keys[1]));
    root = grove.get_root_nodes().at("chr1");
    // Root should have collapsed to a leaf with the 2 remaining keys
    EXPECT_TRUE(root->get_is_leaf());
    EXPECT_EQ(root->get_keys().size(), 2);
    validate_grove_index(root, 4);

    // Verify remaining keys
    auto result2 = grove.intersect(keys[2]->get_value(), "chr1");
    EXPECT_GE(result2.get_keys().size(), 1);
    auto result3 = grove.intersect(keys[3]->get_value(), "chr1");
    EXPECT_GE(result3.get_keys().size(), 1);
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

    for (auto* k : keys) {
        EXPECT_TRUE(grove.remove_key("chr1", k));
        // Validate after each removal (if tree still exists)
        auto root_it = grove.get_root_nodes().find("chr1");
        if (root_it != grove.get_root_nodes().end()) {
            validate_grove_index(root_it->second, 3);
        }
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
        EXPECT_TRUE(grove.remove_key("chr1", keys[i]));
        auto root_it = grove.get_root_nodes().find("chr1");
        if (root_it != grove.get_root_nodes().end()) {
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
        EXPECT_TRUE(grove.remove_key("chr1", keys[i]));
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

    for (int idx : indices) {
        EXPECT_TRUE(grove.remove_key("chr1", keys[idx]));
        auto root_it = grove.get_root_nodes().find("chr1");
        if (root_it != grove.get_root_nodes().end()) {
            validate_grove_index(root_it->second, 4);
        }
    }
    EXPECT_EQ(grove.get_root_nodes().count("chr1"), 0);
}