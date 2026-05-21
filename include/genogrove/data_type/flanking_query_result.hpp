/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_DATA_TYPE_FLANKING_QUERY_RESULT_HPP
#define GENOGROVE_DATA_TYPE_FLANKING_QUERY_RESULT_HPP

#include <genogrove/data_type/key.hpp>
#include <genogrove/data_type/key_type_base.hpp>

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
     * @tparam Key The key type (must satisfy key_type_base concept)
     * @tparam Data Optional associated data type (default: void)
     *
     * @note Stored as `const`-pointers; callers cannot mutate the predecessor /
     *       successor and corrupt B+ tree ordering. Code that needs a mutating
     *       `key*` should re-acquire it via the pointer returned by
     *       `insert_data()`.
     * @see grove::flanking()
     * @see query_result for the overlap-query result container
     */
    template <key_type_base Key, typename Data = void>
    class flanking_query_result {
        public:
            /**
             * @brief Default-construct with both flanking keys null.
             */
            flanking_query_result() = default;

            /**
             * @brief Get the predecessor: largest non-overlapping key less than the query.
             *
             * @return Const-pointer to the predecessor key, or nullptr if none exists
             */
            const key<Key, Data>* get_predecessor() const noexcept {
                return this->predecessor;
            }

            /**
             * @brief Get the successor: smallest non-overlapping key greater than the query.
             *
             * @return Const-pointer to the successor key, or nullptr if none exists
             */
            const key<Key, Data>* get_successor() const noexcept {
                return this->successor;
            }

            /**
             * @brief Set the predecessor pointer.
             *
             * Used internally during traversal as candidates are discovered and improved.
             * Accepts a non-const `key*` for caller convenience; stored as const.
             *
             * @param k Pointer to a key, or nullptr
             */
            void set_predecessor(const key<Key, Data>* k) noexcept {
                this->predecessor = k;
            }

            /**
             * @brief Set the successor pointer.
             *
             * Accepts a non-const `key*` for caller convenience; stored as const.
             *
             * @param k Pointer to a key, or nullptr
             */
            void set_successor(const key<Key, Data>* k) noexcept {
                this->successor = k;
            }

        private:
            const key<Key, Data>* predecessor = nullptr;
            const key<Key, Data>* successor   = nullptr;
    };

}

#endif //GENOGROVE_DATA_TYPE_FLANKING_QUERY_RESULT_HPP
