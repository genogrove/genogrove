/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// grove_query.ipp — Query methods for grove<>
// Included inside the grove class body. Do not include directly.

public:
    /**
     * @brief Find all keys that overlap with the query across all indices
     * @param query The query key to search for (e.g., genomic interval)
     * @return query_result containing all overlapping keys from all indices
     * @note Searches all root nodes (all chromosomes/indices) in the grove
     */
    [[nodiscard]] gdt::query_result<key_type, data_type> intersect(const key_type& query) {
        gdt::query_result<key_type, data_type> result{query};
        // if index is not specified, all root nodes need to be checked
        for(const auto& [index, root] : this->get_root_nodes()) {
            search_iter(root, query, result);
        }
        return result;
    }

    /**
     * @brief Find all keys that overlap with the query in a specific index
     * @param query The query key to search for (e.g., genomic interval)
     * @param index The index name (e.g., chromosome name) to search within
     * @return query_result containing all overlapping keys from the specified index
     * @note Returns empty result if index doesn't exist
     */
    [[nodiscard]] gdt::query_result<key_type, data_type> intersect(const key_type& query, std::string_view index) {
        gdt::query_result<key_type, data_type> result{query};
        node<key_type, data_type>* root = this->get_root(index);

        if(root == nullptr) {
            return result;
        }
        search_iter(root, query, result);
        return result;
    }

private:
    /**
     * @brief Search the tree for keys that overlap with the query
     * @param current The node to start searching from
     * @param query The query key to search for
     * @param result Reference to query_result where matching keys are accumulated
     *
     * Two phases:
     * - **Internal descent (recursive).** At each internal node, picks the
     *   single first child whose separator may overlap and recurses into it —
     *   one child per level, so the recursion depth is the tree height
     *   O(log n). It does NOT fan out across multiple children.
     * - **Leaf walk (iterative).** Once at a leaf, walks the leaf sibling
     *   chain via next pointers in a loop (unbounded length, so iterative to
     *   avoid stack overflow), pruning for interval keys only when a leaf's
     *   `first_key.start > query.end`.
     *
     * @note Correctness depends on two invariants: internal separators must
     *       reflect `calc_subtree_range()` (so the single-child descent never
     *       skips a subtree that contains a match), and the leaf chain must be
     *       globally sorted by start (so the `first_key.start` prune is sound).
     *       Both must hold after every split / rebalance.
     */
    void search_iter(node<key_type, data_type>* current, const key_type& query,
        gdt::query_result<key_type, data_type>& result) {
        if(current == nullptr) {
            return;
        }
        if(current->get_is_leaf()) {
            // Walk the leaf chain iteratively to avoid stack overflow on long chains
            auto* leaf = current;
            while (leaf != nullptr) {
                for(size_t i = 0; i < leaf->get_keys().size(); ++i) {
                    if(key_type::overlaps(leaf->get_keys()[i]->get_value(), query)) {
                        result.add_key(leaf->get_keys()[i]);
                    }
                }

                // Check if the next sibling could overlap
                auto* next = leaf->get_next();
                if (next == nullptr || next->get_keys().empty()) {
                    break;
                }

                auto& first_key_next = next->get_keys()[0]->get_value();
                if constexpr (requires { key_type::is_interval; }) {
                    // Keys are sorted by (start, end). If the first key's start exceeds
                    // the query's end, all remaining keys also start past query.end
                    // and cannot overlap. Checking first_key.end is NOT safe — later
                    // keys can have larger starts that do overlap.
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
            // Early-out: if the query ends before the first separator's
            // subtree starts, nothing in this subtree can match spatially,
            // regardless of any strand or other type-specific dimensions.
            // Using a pure spatial check keeps this sound for strand-sensitive
            // types (where `!overlaps` would also trip on strand mismatch and
            // incorrectly abort subtrees that still contain matching keys).
            if constexpr (requires { key_type::is_interval; }) {
                if (query.get_end() < current->get_keys()[0]->get_value().get_start()) {
                    return;
                }
            }

            size_t i = 0;
            while(i < current->get_keys().size() && (query > current->get_keys()[i]->get_value()) &&
                  !key_type::overlaps(current->get_keys()[i]->get_value(), query)) {
                i++;
            }
            if(current->get_child(i) != nullptr) {
                search_iter(current->get_child(i), query, result);
            }
        }
    }