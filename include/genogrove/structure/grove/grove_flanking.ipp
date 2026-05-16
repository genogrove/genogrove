/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// grove_flanking.ipp — Flanking-key query methods for grove<>
// Included inside the grove class body. Do not include directly.

public:
    /**
     * @brief Find the predecessor and successor of a query in the grove's sort order,
     *        restricted to keys that do not overlap the query.
     *
     * The result's predecessor is the largest key K satisfying `K < query` and
     * `!key_type::overlaps(K, query)`. The successor is the smallest such K with
     * `K > query`. Either may be null if no such key exists.
     *
     * For interval-like keys, picks the key with the smallest gap distance on each
     * side (max end for predecessor, min start for successor) — which can differ
     * from the sort-order extremum when intervals are nested. For scalar keys, sort-
     * order extremum coincides with nearest-by-value.
     *
     * Distance is type-specific and computed by the caller from the returned values.
     *
     * @param query The query key
     * @param index The index name (e.g., chromosome) to search within
     * @return flanking_query_result with predecessor and successor pointers
     *         (either or both may be nullptr)
     *
     * @note Returns both fields nullptr if the index does not exist or the
     *       corresponding tree is empty.
     */
    [[nodiscard]] gdt::flanking_query_result<key_type, data_type>
    flanking(const key_type& query, std::string_view index) const {
        return this->flanking(query, index,
            [](const key_type&, const key_type&) constexpr noexcept { return true; });
    }

    /**
     * @brief Find predecessor and successor with a caller-supplied compatibility filter.
     *
     * The predicate is applied at every leaf candidate before the overlap and
     * comparison checks; only candidates satisfying `is_compatible(candidate, query)`
     * may end up in the result. This lets callers filter by domain-specific criteria
     * not encoded in `key_type::overlaps()`. For example, atroplex passes a strand-
     * matching predicate to find the flanking same-strand segment:
     *
     * @code
     * auto r = grove.flanking(q, "chr1",
     *     [](const auto& candidate, const auto& q) {
     *         return q.get_strand() == '*' || candidate.get_strand() == '*'
     *             || candidate.get_strand() == q.get_strand();
     *     });
     * @endcode
     *
     * @tparam Pred Callable: `bool(const key_type& candidate, const key_type& query)`
     * @param query The query key
     * @param index The index name (e.g., chromosome)
     * @param is_compatible Predicate filtering candidate keys
     * @return flanking_query_result with predecessor and successor pointers
     *
     * @note The predicate is invoked only at leaf nodes; internal-node pruning is
     *       always purely structural (aggregate ranges) and does not consult the
     *       predicate. Subtrees that contain only incompatible keys are still
     *       traversed; the predicate filters them out at the leaf level.
     */
    template <typename Pred>
    [[nodiscard]] gdt::flanking_query_result<key_type, data_type>
    flanking(const key_type& query, std::string_view index,
             Pred is_compatible) const {
        gdt::flanking_query_result<key_type, data_type> result{};
        node<key_type, data_type>* root = this->get_root(index);
        if (root == nullptr) {
            return result;
        }
        this->flanking_descend(root, query, is_compatible, result);
        return result;
    }

private:
    /**
     * @brief Recursive descent for flanking-key search.
     *
     * At leaf nodes, scans every key and updates predecessor/successor candidates
     * in `state`. At internal nodes, prunes subtrees whose aggregate range cannot
     * possibly improve the current best on either side.
     */
    template <typename Pred>
    void flanking_descend(node<key_type, data_type>* current, const key_type& query,
                          const Pred& is_compatible,
                          gdt::flanking_query_result<key_type, data_type>& state) const {
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
        const auto& children = current->get_children();
        const auto& sep_keys = current->get_keys();
        for (size_t i = 0; i < children.size(); ++i) {
            auto* child = children[i];
            if (child == nullptr) continue;

            // sep_keys[i] is the aggregate of children[i]'s subtree for i < sep_keys.size().
            // The last child has no separator key in this node, so we compute its
            // subtree range explicitly.
            key_type agg = (i < sep_keys.size())
                ? sep_keys[i]->get_value()
                : child->calc_subtree_range();

            if (this->flanking_could_descend(agg, query, state)) {
                this->flanking_descend(child, query, is_compatible, state);
            }
        }
    }

    /**
     * @brief Decide whether a subtree with the given aggregate could improve
     *        the current predecessor or successor.
     *
     * For interval-like keys (those exposing `is_interval`), uses the [min_start,
     * max_end] structure of the aggregate for tight pruning. For scalar key types,
     * falls back to looser comparison-based pruning.
     */
    bool flanking_could_descend(const key_type& agg, const key_type& query,
                                const gdt::flanking_query_result<key_type, data_type>& state) const {
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
