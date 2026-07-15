/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_QUERY_ENGINE_HPP
#define GENOGROVE_STRUCTURE_GROVE_QUERY_ENGINE_HPP

#include <concepts>
#include <cstddef>

#include "genogrove/data_type/flanking_query_result.hpp"
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

/**
 * @brief Full bounding range of the subtree rooted at `n`, reached through the
 *        resolver.
 *
 * Mirror of node::calc_subtree_range, but child links go through `res` so it
 * works on a paged view where the node's raw child pointers are null. An
 * internal node's own keys aggregate to children[0..k-1] only; the last child
 * (index keys.size()) has no separator here, so its range is descended
 * explicitly down the right spine — O(depth) block loads, same as the in-memory
 * calc_subtree_range walks the right spine in memory.
 *
 * calc_keys_aggregate() touches only the node's own keys, so it is
 * backend-agnostic.
 */
template<gdt::key_type_base key_type, typename data_type, typename Resolver>
    requires overlap_resolver<Resolver, key_type, data_type>
key_type subtree_range(Resolver& res, node<key_type, data_type>* n) {
    key_type agg = n->calc_keys_aggregate();
    if (!n->get_is_leaf()) {
        node<key_type, data_type>* last = res.child(n, n->get_keys().size());
        if (last != nullptr) {
            agg = key_type::aggregate(agg, subtree_range(res, last));
        }
    }
    return agg;
}

/**
 * @brief Decide whether a subtree with aggregate `agg` could improve the current
 *        predecessor or successor in `state`.
 *
 * Backend-agnostic: uses only key_type semantics and the best-so-far state, so
 * the same pruning drives the in-memory grove and the paged view. For
 * interval-like keys (those exposing `is_interval`), uses the [min_start,
 * max_end] structure of the aggregate for tight pruning; for scalar key types,
 * falls back to looser comparison-based pruning.
 */
template<gdt::key_type_base key_type, typename data_type>
bool flanking_could_descend(const key_type& agg, const key_type& query,
                            const gdt::flanking_query_result<key_type, data_type>& state) {
    if constexpr (requires { key_type::is_interval; }) {
        // Interval pruning. Aggregate has start = min(starts), end = max(ends).
        //
        // Predecessor improvement requires a key K in the subtree with
        //   K.end < query.start  AND  K.end > current_pred.end (if current_pred exists).
        // Necessary aggregate condition for the first: agg.start < query.start
        // (no key in subtree starts before query.start ⇒ no key ends before
        // query.start either, since end >= start). For the second: agg.end >
        // current_pred.end (subtree's max end must exceed the best-so-far end).
        bool could_pred = agg.get_start() < query.get_start();
        if (could_pred && state.get_predecessor() != nullptr) {
            could_pred = agg.get_end() > state.get_predecessor()->get_value().get_end();
        }

        // Successor improvement requires K with
        //   K.start > query.end  AND  K.start < current_succ.start.
        // Necessary: agg.end > query.end (no key ends past query.end ⇒ no key
        // starts past query.end either). And: agg.start < current_succ.start.
        bool could_succ = agg.get_end() > query.get_end();
        if (could_succ && state.get_successor() != nullptr) {
            could_succ = agg.get_start() < state.get_successor()->get_value().get_start();
        }

        return could_pred || could_succ;
    } else {
        // Scalar / generic pruning. Aggregate represents the "max" of the
        // subtree (per key_type::aggregate semantics for scalar types).
        //
        // Predecessor improvement: subtree must contain at least one key
        //   greater than the current best predecessor. Necessary: agg >
        //   current_pred (subtree's max exceeds the best-so-far value).
        bool could_pred = (state.get_predecessor() == nullptr)
            || (agg > state.get_predecessor()->get_value());

        // Successor improvement: subtree must contain at least one key > query.
        //   Necessary: agg > query. Without a "min" aggregate we cannot also
        //   bound on the successor side, so we descend whenever agg > query.
        bool could_succ = agg > query;

        return could_pred || could_succ;
    }
}

/**
 * @brief The single implementation of grove's flanking (nearest predecessor /
 *        successor) query.
 *
 * Reuses `overlap_resolver` (only child() is consulted — next() is unused here
 * but every resolver already provides it, so no separate concept is needed).
 *
 * - **Leaf.** Scan every key; skip incompatible and overlapping ones, then
 *   update the predecessor / successor candidates. The interval-nesting rule
 *   (predecessor is the largest-end, not the sort-order max) is why this cannot
 *   reuse the overlap engine.
 * - **Internal descent.** For each child, prune with `flanking_could_descend`.
 *   The separator for children[0..k-1] is the node's own key (no child load);
 *   the last child has no separator, so its range is computed via
 *   `subtree_range` (which pages in its right spine).
 *
 * @tparam Pred Callable `bool(const key_type& candidate, const key_type& query)`,
 *              applied at leaves only; internal pruning is purely structural.
 */
template<gdt::key_type_base key_type, typename data_type, typename Resolver, typename Pred>
    requires overlap_resolver<Resolver, key_type, data_type>
void search_flanking(Resolver& res, node<key_type, data_type>* current,
                     const key_type& query, const Pred& is_compatible,
                     gdt::flanking_query_result<key_type, data_type>& state) {
    if (current == nullptr) {
        return;
    }

    if (current->get_is_leaf()) {
        for (auto* k_ptr : current->get_keys()) {
            if (k_ptr == nullptr) continue;
            const auto& k = k_ptr->get_value();
            if (!is_compatible(k, query)) continue;
            if (key_type::overlaps(k, query)) continue;

            if (k < query) {
                auto* cur = state.get_predecessor();
                // For interval-like keys, the nearest predecessor is the one
                // with the maximum end (smallest gap to query.start), which
                // can differ from the sort-order maximum when intervals are
                // nested (e.g. [50,100] vs [80,90] — sort picks [80,90] but
                // [50,100] is closer). For scalar keys, sort-order maximum
                // equals nearest-by-value.
                bool better;
                if constexpr (requires { key_type::is_interval; }) {
                    better = (cur == nullptr) || (k.get_end() > cur->get_value().get_end());
                } else {
                    better = (cur == nullptr) || (k > cur->get_value());
                }
                if (better) {
                    state.set_predecessor(k_ptr);
                }
            } else if (k > query) {
                auto* cur = state.get_successor();
                // Successor: nearest is the smallest start (smallest gap to
                // query.end). For interval keys with non-overlapping
                // candidates this coincides with the sort-order minimum
                // (sort is start-first), so a single rule suffices.
                if (cur == nullptr || k < cur->get_value()) {
                    state.set_successor(k_ptr);
                }
            }
        }
        return;
    }

    // Internal node — descend into children whose subtree could improve state.
    // B+ tree invariant: an internal node with k separator keys has k+1 children.
    const auto& sep_keys = current->get_keys();
    const std::size_t num_children = sep_keys.size() + 1;
    for (std::size_t i = 0; i < num_children; ++i) {
        if (i < sep_keys.size()) {
            // sep_keys[i] is the aggregate of children[i]'s subtree — prune
            // before touching the child so a rejected subtree is never loaded.
            if (flanking_could_descend<key_type, data_type>(sep_keys[i]->get_value(), query, state)) {
                node<key_type, data_type>* child = res.child(current, i);
                if (child != nullptr) {
                    search_flanking(res, child, query, is_compatible, state);
                }
            }
        } else {
            // Last child has no separator in this node; load it to compute its
            // subtree range, then prune.
            node<key_type, data_type>* child = res.child(current, i);
            if (child == nullptr) continue;
            key_type agg = subtree_range(res, child);
            if (flanking_could_descend<key_type, data_type>(agg, query, state)) {
                search_flanking(res, child, query, is_compatible, state);
            }
        }
    }
}

} // namespace genogrove::structure::detail

#endif // GENOGROVE_STRUCTURE_GROVE_QUERY_ENGINE_HPP