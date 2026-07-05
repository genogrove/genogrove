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
        detail::eager_resolver<key_type, data_type> res{};
        // if index is not specified, all root nodes need to be checked
        for(const auto& [index, root] : this->get_root_nodes()) {
            detail::search_overlaps(res, root, query, result);
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
        detail::eager_resolver<key_type, data_type> res{};
        detail::search_overlaps(res, root, query, result);
        return result;
    }