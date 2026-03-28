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
     * @brief Recursively search the tree for keys that overlap with the query
     * @param node The current node being searched
     * @param query The query key to search for
     * @param result Reference to query_result where matching keys are accumulated
     * @note Uses overlap detection to prune search space and traverse linked leaf nodes
     * @note Optimized for interval types with early termination when no overlap is possible
     */
    void search_iter(node<key_type, data_type>* node, const key_type& query,
        gdt::query_result<key_type, data_type>& result) {
        if(node == nullptr) {
            return;
        }
        if(node->get_is_leaf()) {
            std::optional<size_t> last_match;
            for(size_t i = 0; i < node->get_keys().size(); ++i) {
                if(key_type::overlaps(node->get_keys()[i]->get_value(), query)) {
                    last_match = i;
                    result.add_key(node->get_keys()[i]);
                }
            }
            // check if there is an overlap within the next node (if so we have to traverse it)
            // Check first key of next node to avoid unnecessary traversal
            if(node->get_next() != nullptr && node->get_next()->get_keys().size() > 0) {
                auto& first_key_next = node->get_next()->get_keys()[0]->get_value();

                // For interval types: check coordinate overlap only
                if constexpr (requires { key_type::is_interval; }) {
                    if (!(first_key_next.get_start() > query.get_end() ||
                          query.get_start() > first_key_next.get_end())) {
                        search_iter(node->get_next(), query, result);
                    }
                } else {
                    // For non-interval types, use regular overlap
                    if(key_type::overlaps(first_key_next, query)) {
                        search_iter(node->get_next(), query, result);
                    }
                }
            }
        } else {
            // abort if left of key (not overlapping) - only needed for intervals
            if constexpr (requires { key_type::is_interval; }) {
                if(query < node->get_keys()[0]->get_value() &&
                   !key_type::overlaps(node->get_keys()[0]->get_value(), query)) {
                    return;
                }
            }

            size_t i = 0;
            while(i < node->get_keys().size() && (query > node->get_keys()[i]->get_value()) &&
                  !key_type::overlaps(node->get_keys()[i]->get_value(), query)) {
                i++;
            }
            if(node->get_child(i) != nullptr) {
                search_iter(node->get_child(i), query, result);
            }
        }
    }