/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_TEST_TREE_VALIDATOR_HPP
#define GENOGROVE_TEST_TREE_VALIDATOR_HPP

#include <gtest/gtest.h>

#include <vector>

#include <genogrove/structure/grove/node.hpp>

namespace genogrove::test_support {

namespace gst = genogrove::structure;

/**
 * @brief Recursively validate structural B+ tree invariants for a node
 *
 * Checks per node:
 * - Parent pointer matches expected
 * - Key count does not exceed order-1
 * - Non-root leaf nodes have at least ceil((order-1)/2) keys, EXCEPT the
 *   rightmost leaf of the tree — the sorted-append split leaves it with as
 *   few as 1 key until the next order-1 appends fill it back up
 * - Non-root internal nodes have at least floor((order-1)/2) keys
 * - Leaf nodes have no children; internal nodes have keys.size()+1 children
 * - Keys within a node are sorted
 * - All leaves at the same depth
 * - Accumulates the ordered leaf sequence (via in-order traversal)
 */
template <typename key_type, typename data_type>
void validate_tree_invariants(
    gst::node<key_type, data_type>* n,
    gst::node<key_type, data_type>* expected_parent,
    int depth,
    int order,
    int& leaf_depth,
    std::vector<gst::node<key_type, data_type>*>& leaves_in_order,
    bool is_root,
    bool is_rightmost_spine) {

    ASSERT_NE(n, nullptr) << "Node should not be null at depth " << depth;

    EXPECT_EQ(n->get_parent(), expected_parent)
        << "Parent pointer mismatch at depth " << depth;

    // Leaf min: ceil((order-1)/2); internal min: floor((order-1)/2)
    const int min_keys = n->get_is_leaf()
        ? (order / 2)            // ceil((order-1)/2) for positive order
        : ((order - 1) / 2);     // floor((order-1)/2)
    EXPECT_LE(n->get_keys().size(), static_cast<size_t>(order - 1))
        << "Node has too many keys at depth " << depth
        << " (has " << n->get_keys().size() << ", max " << (order - 1) << ")";
    // Rightmost leaf is exempt from min-occupancy: the sorted-append split
    // biases the old leaf fully left and leaves the new rightmost leaf with a
    // single key, which will fill up again on the next order-1 appends.
    const bool is_rightmost_leaf = n->get_is_leaf() && is_rightmost_spine;
    if (!is_root && !is_rightmost_leaf) {
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
            EXPECT_EQ(depth, leaf_depth)
                << "All leaves should be at the same depth";
        }

        leaves_in_order.push_back(n);

        for (size_t i = 1; i < n->get_keys().size(); ++i) {
            EXPECT_FALSE(n->get_keys()[i]->get_value() < n->get_keys()[i-1]->get_value())
                << "Keys should be sorted within leaf at depth " << depth;
        }
    } else {
        EXPECT_EQ(n->get_children().size(), n->get_keys().size() + 1)
            << "Internal node invariant violated at depth " << depth
            << ": " << n->get_children().size() << " children but "
            << n->get_keys().size() << " keys";

        for (size_t i = 1; i < n->get_keys().size(); ++i) {
            EXPECT_FALSE(n->get_keys()[i]->get_value() < n->get_keys()[i-1]->get_value())
                << "Keys should be sorted within internal node at depth " << depth;
        }

        for (size_t i = 0; i < n->get_children().size(); ++i) {
            const bool child_is_rightmost_spine =
                is_rightmost_spine && (i + 1 == n->get_children().size());
            validate_tree_invariants(
                n->get_children()[i], n, depth + 1, order, leaf_depth, leaves_in_order,
                /*is_root=*/false, child_is_rightmost_spine);
        }
    }
}

/**
 * @brief Validate structural invariants and leaf chain continuity for a tree
 * @param root Root node of the tree (nullptr is a no-op)
 * @param order B+ tree order
 * @return Vector of leaves in in-order traversal, so the caller can perform
 *         additional per-leaf checks (e.g. reachability via intersect())
 */
template <typename key_type, typename data_type>
std::vector<gst::node<key_type, data_type>*> validate_tree_structure(
    gst::node<key_type, data_type>* root, int order) {
    std::vector<gst::node<key_type, data_type>*> leaves_in_order;
    if (root == nullptr) return leaves_in_order;

    int leaf_depth = -1;
    validate_tree_invariants(
        root, static_cast<gst::node<key_type, data_type>*>(nullptr),
        0, order, leaf_depth, leaves_in_order,
        /*is_root=*/true, /*is_rightmost_spine=*/true);

    for (size_t i = 0; i + 1 < leaves_in_order.size(); ++i) {
        EXPECT_EQ(leaves_in_order[i]->get_next(), leaves_in_order[i + 1])
            << "Leaf chain mismatch at leaf " << i;
    }
    if (!leaves_in_order.empty()) {
        EXPECT_EQ(leaves_in_order.back()->get_next(), nullptr)
            << "Last leaf's next pointer should be nullptr";
    }

    return leaves_in_order;
}

} // namespace genogrove::test_support

#endif // GENOGROVE_TEST_TREE_VALIDATOR_HPP