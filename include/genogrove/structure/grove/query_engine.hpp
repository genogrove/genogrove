/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_QUERY_ENGINE_HPP
#define GENOGROVE_STRUCTURE_GROVE_QUERY_ENGINE_HPP

#include <concepts>
#include <cstddef>

#include "genogrove/data_type/key.hpp"
#include "genogrove/data_type/key_type_base.hpp"
#include "genogrove/data_type/query_result.hpp"
#include "genogrove/structure/grove/node.hpp"

namespace genogrove::structure::detail {

/**
 * @brief Abstracts how a node's child / next-leaf references resolve to nodes.
 *
 * The overlap search is identical whether the tree lives fully in memory
 * (references are pointers) or is loaded on demand from a serialized `.gg`
 * (references are block ids resolved through a cache). A resolver hides that
 * difference so the algorithm is written once.
 */
template<typename R, typename key_type, typename data_type>
concept overlap_resolver = requires(R& r, node<key_type, data_type>* n, std::size_t i) {
    { r.child(n, i) } -> std::same_as<node<key_type, data_type>*>;
    { r.next(n) }     -> std::same_as<node<key_type, data_type>*>;
};

/**
 * @brief Eager resolver — child/next are the node's own pointers.
 *
 * Used by the in-memory grove, where every node is already materialized and
 * linked. child() forwards to node::get_child (which throws on an out-of-range
 * index; the search only ever asks for valid child slots on internal nodes).
 */
template<typename key_type, typename data_type>
struct eager_resolver {
    node<key_type, data_type>* child(node<key_type, data_type>* n, std::size_t i) const {
        return n->get_child(static_cast<int>(i));
    }
    node<key_type, data_type>* next(node<key_type, data_type>* n) const {
        return n->get_next();
    }
};

/**
 * @brief The single implementation of grove's interval-overlap query.
 *
 * Two phases, unchanged from the original in-memory search:
 * - **Internal descent (recursive).** At each internal node, pick the single
 *   first child whose separator may overlap and recurse — one child per level,
 *   O(log n) depth.
 * - **Leaf walk (iterative).** At a leaf, walk the sibling chain via next,
 *   pruning for interval keys when a leaf's `first_key.start > query.end`.
 *
 * Only child/next go through the resolver; the overlap test and interval
 * pruning are backend-agnostic. Correctness depends on the same invariants as
 * before: internal separators reflect `calc_subtree_range()`, and the leaf
 * chain is globally sorted by start.
 */
template<gdt::key_type_base key_type, typename data_type, typename Resolver>
    requires overlap_resolver<Resolver, key_type, data_type>
void search_overlaps(Resolver& res, node<key_type, data_type>* current,
                     const key_type& query, gdt::query_result<key_type, data_type>& result) {
    if (current == nullptr) {
        return;
    }
    if (current->get_is_leaf()) {
        // Walk the leaf chain iteratively to avoid stack overflow on long chains.
        node<key_type, data_type>* leaf = current;
        while (leaf != nullptr) {
            for (std::size_t i = 0; i < leaf->get_keys().size(); ++i) {
                if (key_type::overlaps(leaf->get_keys()[i]->get_value(), query)) {
                    result.add_key(leaf->get_keys()[i]);
                }
            }

            node<key_type, data_type>* next = res.next(leaf);
            if (next == nullptr || next->get_keys().empty()) {
                break;
            }

            auto& first_key_next = next->get_keys()[0]->get_value();
            if constexpr (requires { key_type::is_interval; }) {
                // Keys sorted by (start, end): once the next leaf's first start
                // exceeds query.end, no remaining key can overlap. Checking
                // first_key.end is NOT safe — later keys can start further right.
                if (first_key_next.get_start() > query.get_end()) {
                    break;
                }
            } else {
                if (!key_type::overlaps(first_key_next, query)) {
                    break;
                }
            }
            leaf = next;
        }
    } else {
        // Early-out: if the query ends before the first separator's subtree
        // starts, nothing here matches spatially. Pure spatial check keeps this
        // sound for strand-sensitive types (where !overlaps would also trip on
        // strand mismatch and wrongly abort a subtree with matching keys).
        if constexpr (requires { key_type::is_interval; }) {
            if (query.get_end() < current->get_keys()[0]->get_value().get_start()) {
                return;
            }
        }

        std::size_t i = 0;
        while (i < current->get_keys().size() && (query > current->get_keys()[i]->get_value()) &&
               !key_type::overlaps(current->get_keys()[i]->get_value(), query)) {
            i++;
        }
        node<key_type, data_type>* child = res.child(current, i);
        if (child != nullptr) {
            search_overlaps(res, child, query, result);
        }
    }
}

} // namespace genogrove::structure::detail

#endif // GENOGROVE_STRUCTURE_GROVE_QUERY_ENGINE_HPP