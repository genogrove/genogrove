/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_DATA_TYPE_QUERY_RESULT_HPP
#define GENOGROVE_DATA_TYPE_QUERY_RESULT_HPP

// Standard
#include <vector>
#include <memory>
#include <unordered_map>

// genogrove
#include <genogrove/data_type/any_type.hpp>
#include <genogrove/data_type/key.hpp>

namespace genogrove::data_type {
    /**
     * @brief Container for query results holding matching keys and the original query.
     *
     * This class stores the results of intersection/search operations performed on grove
     * structures. It maintains both the original query and a collection of pointers to
     * all keys that matched (overlapped with) the query.
     *
     * ## Usage Pattern
     * Query results are typically returned by grove intersection operations:
     * ```cpp
     * interval query(100, 200);
     * auto result = my_grove.intersect("chr1", query);
     * for (auto* key_ptr : result.get_keys()) {
     *     // Process each matching key
     * }
     * ```
     *
     * ## Memory Ownership
     * - Query: Stored by value (copied)
     * - Keys: Stores raw pointers (does NOT own the keys)
     * - The grove owns the actual key objects; this class only references them
     *
     * ## Template Parameters
     * - `key_type`: The type of the query and keys (e.g., interval, genomic_coordinate, numeric)
     *   Must satisfy the key_type_base concept (comparison, overlap, aggregate, to_string)
     * - `data_type`: Optional associated data type for keys (default: void for no data)
     *
     * @tparam key_type Type satisfying key_type_base concept
     * @tparam data_type Optional type for associated data (default: void)
     *
     * @note Keys are stored as raw pointers and remain valid as long as the grove exists
     * @note This class does not own the key objects; they are owned by the grove
     * @see grove::intersect() for the primary usage of query_result
     * @see key for the wrapper type storing key_type and optional data_type
     */
    template<typename key_type, typename data_type = void>
    class query_result {
        public:
            /**
             * @brief Construct a query result with the specified query.
             *
             * Initializes an empty result set for the given query. Keys are added
             * later via add_key() as the search traverses the grove structure.
             *
             * @param query The query used for intersection (stored by value)
             */
            query_result(key_type query) : query(query), keys{} {}

            /**
             * @brief Get the original query that produced this result.
             *
             * Returns a copy of the query that was used to search the grove.
             *
             * @return The query value
             */
            key_type get_query() const { return this->query; }

            /**
             * @brief Get all matching keys found by the query.
             *
             * Returns a vector of pointers to keys that overlapped with the query.
             * The pointers reference keys owned by the grove and remain valid as
             * long as the grove exists and the keys are not removed.
             *
             * @return Vector of pointers to matching keys (may be empty if no matches)
             *
             * @note Pointers remain valid as long as the grove is not modified
             * @note Keys are stored in the order they were found during tree traversal
             */
            std::vector<key<key_type, data_type>*> get_keys() const { return this->keys; }

            /**
             * @brief Add a matching key to the result set.
             *
             * Appends a pointer to a matching key to the internal collection.
             * This method is typically called internally by grove search operations
             * as they traverse the tree structure.
             *
             * @param key Pointer to a matching key (must not be nullptr)
             *
             * @note This is primarily an internal method used during grove traversal
             * @note No ownership is transferred; the pointer is stored as-is
             */
            void add_key(key<key_type, data_type>* key) { this->keys.push_back(key); }

        private:
            key_type query;                              ///< The original query (stored by value)
            std::vector<key<key_type, data_type>*> keys; ///< Pointers to matching keys (not owned)
    };
}

#endif //GENOGROVE_DATA_TYPE_QUERY_RESULT_HPP
