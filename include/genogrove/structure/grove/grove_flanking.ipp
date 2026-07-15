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
        // Shared descent (see query_engine.hpp) — same engine grove_view drives
        // with its block resolver. The in-memory grove uses the eager resolver.
        detail::eager_resolver<key_type, data_type> res{};
        detail::search_flanking(res, root, query, is_compatible, result);
        return result;
    }
