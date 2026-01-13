/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_DATA_TYPE_KEY_HPP
#define GENOGROVE_DATA_TYPE_KEY_HPP

// standard
#include <vector>
#include <istream>
#include <typeindex>
#include <type_traits>
#include <variant>

// genogrove
#include <genogrove/data_type/any_type.hpp>
#include <genogrove/data_type/type_registry.hpp>
#include <genogrove/data_type/key_type_base.hpp>
#include <genogrove/data_type/serialization_traits.hpp>

namespace genogrove::data_type {
    template<typename T>
    struct serialization_traits;

    /**
     * @brief Wrapper class combining a key value with optional associated data.
     *
     * This template class wraps a key_type (e.g., interval, genomic_coordinate, numeric)
     * with an optional data_type payload. It serves as the fundamental storage unit in
     * grove structures, enabling efficient indexing while maintaining arbitrary metadata.
     *
     * ## Template Parameters
     * - `key_type`: The core key value type (must satisfy key_type_base concept)
     *   - Required operations: comparison operators (<, >, ==)
     *   - Required static methods: overlap(), aggregate()
     *   - Required instance method: to_string()
     * - `data_type`: Optional associated data (default: void for keys without data)
     *   - When void: key contains only the key_type value (zero overhead)
     *   - When non-void: key contains both key_type and data_type
     *
     * ## Usage Patterns
     *
     * **Keys without data (data_type = void):**
     * ```cpp
     * key<interval> k1(interval(100, 200));  // Just the interval
     * ```
     *
     * **Keys with data:**
     * ```cpp
     * struct gene_info { std::string name; double score; };
     * key<interval, gene_info> k2(interval(100, 200), gene_info{"BRCA1", 0.95});
     * ```
     *
     * ## SFINAE and Concepts
     * Uses C++20 `requires` clauses for compile-time type safety:
     * - Data-related methods only compile when `data_type != void`
     * - Constructors are constrained based on type requirements
     * - Zero runtime overhead for disabled functionality
     *
     * ## Memory Optimization
     * Uses `[[no_unique_address]]` attribute with `std::conditional_t`:
     * - When data_type is void: stores std::monostate (zero size)
     * - When data_type is non-void: stores the actual data_type
     * - Ensures zero overhead when data is not needed
     *
     * ## Serialization
     * Supports binary serialization/deserialization for persistence:
     * - Serializes key_type value
     * - Serializes data_type only when non-void
     * - Uses type-specific serialization_traits
     *
     * @tparam key_type Type satisfying key_type_base concept (interval, genomic_coordinate, numeric, etc.)
     * @tparam data_type Optional associated data type (default: void)
     *
     * @note The key_type must satisfy the key_type_base concept requirements
     * @note When data_type is void, all data-related methods are disabled at compile time
     * @see interval, genomic_coordinate, numeric for common key_type examples
     * @see grove for the primary container using this key type
     * @see query_result for collections of key pointers
     */
    template<key_type_base key_type, typename data_type = void>
    class key {
        public:
            /**
             * @brief Default constructor initializing both value and data with defaults.
             *
             * Only available when both key_type and data_type are default-initializable.
             *
             * @note Constrained by requires clause - will not compile if types are not default-initializable
             */
            key() requires std::default_initializable<key_type> &&
                std::default_initializable<data_type> : value{}, data{} {}

            /**
             * @brief Construct a key with the specified key value.
             *
             * When data_type is void: Creates a key with only the value.
             * When data_type is non-void: Creates a key with value and default-constructed data.
             *
             * @param kvalue The key value (moved into the key)
             */
            explicit key(key_type kvalue)
                : value(std::move(kvalue)), data{} {}

            /**
             * @brief Construct a key with both key value and associated data.
             *
             * Only available when data_type is not void (enforced by requires clause).
             * Uses perfect forwarding to efficiently transfer the data value.
             *
             * @tparam D Data type (deduced, should match data_type)
             * @param key_value The key value (moved into the key)
             * @param data_value The associated data (forwarded)
             *
             * @note This constructor only exists when data_type != void
             */
            template<typename D = data_type>
            key(key_type key_value, D&& data_value) requires (!std::is_void_v<data_type>) :
                value(std::move(key_value)), data(std::forward<D>(data_value)) {}

            /**
             * @brief Copy constructor (defaulted).
             */
            key(const key&) = default;

            /**
             * @brief Move constructor (defaulted, noexcept).
             */
            key(key&&) noexcept = default;

            /**
             * @brief Copy assignment operator (defaulted).
             *
             * @return Reference to this key
             */
            key& operator=(const key&) = default;

            /**
             * @brief Move assignment operator (defaulted, noexcept).
             *
             * @return Reference to this key
             */
            key& operator=(key&&) noexcept = default;

            /**
             * @brief Destructor (defaulted).
             */
            ~key() = default;

            /**
             * @brief Get the key value (const reference).
             *
             * @return Const reference to the underlying key_type value
             */
            [[nodiscard]] const key_type& get_value() const {
                return value;
            }

            /**
             * @brief Set the key value.
             *
             * @param new_value The new key value (moved)
             */
            void set_value(key_type new_value) {
                value = std::move(new_value);
            }

            /**
             * @brief Get the associated data (const reference).
             *
             * Only available when data_type is not void (enforced by requires clause).
             * Provides read-only access to the associated data.
             *
             * @tparam D Data type (deduced, should match data_type)
             * @return Const reference to the associated data
             *
             * @note This method only exists when data_type != void
             * @note Returns by const reference for efficiency
             */
            template<typename D = data_type>
            [[nodiscard]] const D& get_data() const noexcept requires (!std::is_void_v<D>) {
                    return data;
            }

            /**
             * @brief Get mutable reference to associated data.
             *
             * Only available when data_type is not void (enforced by requires clause).
             * Allows in-place modification of the data without copying.
             *
             * @tparam D Data type (deduced, should match data_type)
             * @return Mutable reference to the associated data
             *
             * @note This method only exists when data_type != void
             * @note Useful for efficient in-place updates
             */
            template<typename D = data_type>
            [[nodiscard]] D& get_data() noexcept requires (!std::is_void_v<D>) {
                return data;
            }

            /**
             * @brief Set the associated data.
             *
             * Only available when data_type is not void (enforced by requires clause).
             *
             * @tparam D Data type (deduced, should match data_type)
             * @param new_data The new data value (moved)
             *
             * @note This method only exists when data_type != void
             */
            template<typename D = data_type>
            void set_data(D new_data) requires (!std::is_void_v<D>) {
                    data = std::move(new_data);
            }

            /**
             * @brief Check if this key has associated data.
             *
             * Compile-time constant determined by template parameter.
             *
             * @return true if data_type is not void, false otherwise
             */
            [[nodiscard]] constexpr bool has_data() const noexcept {
                return !std::is_void_v<data_type>;
            }

            /**
             * @brief Convert key to string representation.
             *
             * Delegates to the key_type's to_string() method.
             * Does not include data in the string representation.
             *
             * @return String representation of the key value
             */
            std::string to_string() const {
                return value.to_string();
            }

            /**
             * @brief Serialize the key to an output stream.
             *
             * Writes the key in binary format for persistence:
             * - Always serializes the key_type value
             * - Serializes data_type only when non-void
             *
             * Uses type-specific serialization_traits for both key and data.
             *
             * @param os Output stream to write to
             *
             * @note Serialization format depends on serialization_traits specializations
             */
            void serialize(std::ostream& os) const {
                serializer<key_type>::write(os, this->value);

                if constexpr(!std::is_void_v<data_type>) {
                    serializer<data_type>::write(os, this->data);
                }
            }

            /**
             * @brief Deserialize a key from an input stream.
             *
             * Reads the key from binary format and reconstructs it:
             * - Always deserializes the key_type value
             * - Deserializes data_type only when non-void
             *
             * @param is Input stream to read from
             * @return Deserialized key object
             *
             * @note Must match the format written by serialize()
             * @note Static method - creates and returns a new key
             */
            static key deserialize(std::istream& is) {
                key_type key_value = serializer<key_type>::read(is);

                if constexpr(std::is_void_v<data_type>) {
                    return key{std::move(key_value)};
                } else {
                    auto data_value = serializer<data_type>::read(is);
                    return key{std::move(key_value), std::move(data_value)};
                }
            }

            /**
             * @brief Equality comparison operator.
             *
             * Compares keys based on their content:
             * - When data_type is void: Compares only key values
             * - When data_type is non-void: Compares both key values and data
             *
             * @param other Key to compare against
             * @return true if keys are equal
             *
             * @note Only available when key_type is equality-comparable
             */
            bool operator==(const key& other) const
                requires std::equality_comparable<key_type> {
                    if constexpr (std::is_void_v<data_type>) {
                        return value == other.value;
                    } else {
                        return value == other.value && data == other.data;
                    }
                }

            /**
             * @brief Inequality comparison operator.
             *
             * @param other Key to compare against
             * @return true if keys are not equal
             *
             * @note Only available when key_type is equality-comparable
             */
            bool operator!=(const key& other) const
                requires std::equality_comparable<key_type> {
                    return !(*this == other);
                }

        private:
            key_type value;   ///< The core key value (interval, genomic_coordinate, numeric, etc.)

            /**
             * @brief Associated data storage (conditionally empty).
             *
             * Uses std::conditional_t to achieve zero-overhead when data is not needed:
             * - When data_type is void: stores std::monostate (zero-size type)
             * - When data_type is non-void: stores the actual data_type
             *
             * The [[no_unique_address]] attribute allows the compiler to optimize away
             * the storage when std::monostate is used, ensuring truly zero overhead.
             */
            [[no_unique_address]]
            std::conditional_t<
                std::is_void_v<data_type>,
                std::monostate,
                data_type
            > data;
    };

}
#endif //GENOGROVE_DATA_TYPE_KEY_HPP