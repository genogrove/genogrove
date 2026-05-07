/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_DATA_TYPE_FLANKING_QUERY_RESULT_HPP
#define GENOGROVE_DATA_TYPE_FLANKING_QUERY_RESULT_HPP

#include <genogrove/data_type/key.hpp>

namespace genogrove::data_type {

    /**
     * @brief Result of a flanking-key query — the predecessor and successor of a
     *        query in the grove's sort order, restricted to keys that do not
     *        overlap the query.
     *
     * Returned by grove::flanking(). Either field may be null:
     * - `predecessor == nullptr` if no key K satisfies `K < query AND !overlaps(K, query)`
     * - `successor   == nullptr` if no key K satisfies `K > query AND !overlaps(K, query)`
     *
     * For interval-like keys (interval, genomic_coordinate), this corresponds to the
     * key with the smallest gap distance to the query on each side. For scalar key
     * types (numeric, kmer), it is the closest key by sort order on either side,
     * excluding any key that satisfies overlaps() with the query.
     *
     * Distance to a returned key is type-specific and computed by the caller from
     * the key values (e.g., `query.start - predecessor.end - 1` for closed-coord
     * intervals; `query.value - predecessor.value` for numeric).
     *
     * ## Memory Ownership
     * Pointers reference keys owned by the grove. They remain valid as long as the
     * grove exists and the referenced keys are not removed.
     *
     * @tparam key_type The key type (must satisfy key_type_base concept)
     * @tparam data_type Optional associated data type (default: void)
     *
     * @see grove::flanking()
     * @see query_result for the overlap-query result container
     */
    template <typename key_type, typename data_type = void>
    class flanking_query_result {
        public:
            /**
             * @brief Default-construct with both flanking keys null.
             */
            flanking_query_result() = default;

            /**
             * @brief Get the predecessor: largest non-overlapping key less than the query.
             *
             * @return Pointer to the predecessor key, or nullptr if none exists
             */
            key<key_type, data_type>* get_predecessor() const noexcept {
                return this->predecessor;
            }

            /**
             * @brief Get the successor: smallest non-overlapping key greater than the query.
             *
             * @return Pointer to the successor key, or nullptr if none exists
             */
            key<key_type, data_type>* get_successor() const noexcept {
                return this->successor;
            }

            /**
             * @brief Set the predecessor pointer.
             *
             * Used internally during traversal as candidates are discovered and improved.
             *
             * @param k Pointer to a key, or nullptr
             */
            void set_predecessor(key<key_type, data_type>* k) noexcept {
                this->predecessor = k;
            }

            /**
             * @brief Set the successor pointer.
             *
             * @param k Pointer to a key, or nullptr
             */
            void set_successor(key<key_type, data_type>* k) noexcept {
                this->successor = k;
            }

        private:
            key<key_type, data_type>* predecessor = nullptr;
            key<key_type, data_type>* successor   = nullptr;
    };

}

#endif //GENOGROVE_DATA_TYPE_FLANKING_QUERY_RESULT_HPP