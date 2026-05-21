/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_DATA_TYPE_KEY_HPP
#define GENOGROVE_DATA_TYPE_KEY_HPP

// standard
#include <vector>
#include <istream>
#include <type_traits>
#include <variant>

// genogrove
#include <genogrove/data_type/key_type_base.hpp>
#include <genogrove/data_type/serialization_traits.hpp>

namespace genogrove::data_type {
    template<typename T>
    struct serialization_traits;

    /**
     * @brief Wrapper class combining a key value with optional associated data.
     *
     * This template class wraps a Key (e.g., interval, genomic_coordinate, numeric)
     * with an optional Data payload. It serves as the fundamental storage unit in
     * grove structures, enabling efficient indexing while maintaining arbitrary metadata.
     *
     * ## Template Parameters
     * - `Key`: The core key value type (must satisfy key_type_base concept)
     *   - Required operations: comparison operators (<, >, ==)
     *   - Required static methods: overlaps(), aggregate()
     *   - Required instance method: to_string()
     * - `Data`: Optional associated data (default: void for keys without data)
     *   - When void: key contains only the Key value (zero overhead)
     *   - When non-void: key contains both Key and Data
     *
     * ## Usage Patterns
     *
     * **Keys without data (Data = void):**
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
     * - Data-related methods only compile when `Data != void`
     * - Constructors are constrained based on type requirements
     * - Zero runtime overhead for disabled functionality
     *
     * ## Memory Optimization
     * Uses `[[no_unique_address]]` attribute with `std::conditional_t`:
     * - When Data is void: stores std::monostate (zero size)
     * - When Data is non-void: stores the actual Data
     * - Ensures zero overhead when data is not needed
     *
     * ## Serialization
     * Supports binary serialization/deserialization for persistence:
     * - Serializes Key value
     * - Serializes Data only when non-void
     * - Uses type-specific serialization_traits
     *
     * @tparam Key Type satisfying key_type_base concept (interval, genomic_coordinate, numeric, etc.)
     * @tparam Data Optional associated data type (default: void)
     *
     * @note The Key must satisfy the key_type_base concept requirements
     * @note When Data is void, all data-related methods are disabled at compile time
     * @see interval, genomic_coordinate, numeric for common Key examples
     * @see grove for the primary container using this key type
     * @see query_result for collections of key pointers
     */
    template<key_type_base Key, typename Data = void>
    class key {
        public:
            /**
             * @brief Default constructor initializing both value and data with defaults.
             *
             * Only available when both Key and Data are default-initializable.
             *
             * @note Constrained by requires clause - will not compile if types are not default-initializable
             */
            key() requires std::default_initializable<Key> &&
                std::default_initializable<Data> : value{}, data{} {}

            /**
             * @brief Construct a key with the specified key value.
             *
             * When Data is void: Creates a key with only the value.
             * When Data is non-void: Creates a key with value and default-constructed data.
             *
             * @param kvalue The key value (moved into the key)
             */
            explicit key(Key kvalue)
                : value(std::move(kvalue)), data{} {}

            /**
             * @brief Construct a key with both key value and associated data.
             *
             * Only available when Data is not void (enforced by requires clause).
             * Uses perfect forwarding to efficiently transfer the data value.
             *
             * @tparam D Data type (deduced, should match Data)
             * @param key_value The key value (moved into the key)
             * @param data_value The associated data (forwarded)
             *
             * @note This constructor only exists when Data != void
             */
            template<typename D = Data>
            key(Key key_value, D&& data_value) requires (!std::is_void_v<Data>) :
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
             * @return Const reference to the underlying Key value
             */
            [[nodiscard]] const Key& get_value() const noexcept {
                return value;
            }

            /**
             * @brief Set the key value.
             *
             * @param new_value The new key value (moved)
             */
            void set_value(Key new_value) {
                value = std::move(new_value);
            }

            /**
             * @brief Get the associated data (const reference).
             *
             * Only available when Data is not void (enforced by requires clause).
             * Provides read-only access to the associated data.
             *
             * @tparam D Data type (deduced, should match Data)
             * @return Const reference to the associated data
             *
             * @note This method only exists when Data != void
             * @note Returns by const reference for efficiency
             */
            template<typename D = Data>
            [[nodiscard]] const D& get_data() const noexcept requires (!std::is_void_v<D>) {
                    return data;
            }

            /**
             * @brief Get mutable reference to associated data.
             *
             * Only available when Data is not void (enforced by requires clause).
             * Allows in-place modification of the data without copying.
             *
             * @tparam D Data type (deduced, should match Data)
             * @return Mutable reference to the associated data
             *
             * @note This method only exists when Data != void
             * @note Useful for efficient in-place updates
             */
            template<typename D = Data>
            [[nodiscard]] D& get_data() noexcept requires (!std::is_void_v<D>) {
                return data;
            }

            /**
             * @brief Set the associated data.
             *
             * Only available when Data is not void (enforced by requires clause).
             *
             * @tparam D Data type (deduced, should match Data)
             * @param new_data The new data value (moved)
             *
             * @note This method only exists when Data != void
             */
            template<typename D = Data>
            void set_data(D new_data) requires (!std::is_void_v<D>) {
                    data = std::move(new_data);
            }

            /**
             * @brief Check if this key has associated data.
             *
             * Compile-time constant determined by template parameter.
             *
             * @return true if Data is not void, false otherwise
             */
            [[nodiscard]] constexpr bool has_data() const noexcept {
                return !std::is_void_v<Data>;
            }

            /**
             * @brief Convert key to string representation.
             *
             * Delegates to the Key's to_string() method.
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
             * - Always serializes the Key value
             * - Serializes Data only when non-void
             *
             * Uses type-specific serialization_traits for both key and data.
             *
             * @param os Output stream to write to
             *
             * @note Serialization format depends on serialization_traits specializations
             */
            void serialize(std::ostream& os) const {
                serializer<Key>::write(os, this->value);

                if constexpr(!std::is_void_v<Data>) {
                    serializer<Data>::write(os, this->data);
                }

                if (!os) {
                    throw std::runtime_error("Failed to serialize key: stream error");
                }
            }

            /**
             * @brief Deserialize a key from an input stream.
             *
             * Reads the key from binary format and reconstructs it:
             * - Always deserializes the Key value
             * - Deserializes Data only when non-void
             *
             * @param is Input stream to read from
             * @return Deserialized key object
             *
             * @note Must match the format written by serialize()
             * @note Static method - creates and returns a new key
             */
            [[nodiscard]] static key deserialize(std::istream& is) {
                Key key_value = serializer<Key>::read(is);

                if constexpr(std::is_void_v<Data>) {
                    return key{std::move(key_value)};
                } else {
                    auto data_value = serializer<Data>::read(is);
                    return key{std::move(key_value), std::move(data_value)};
                }
            }

            /**
             * @brief Comparison operators.
             *
             * Comparisons are delegated to the wrapped `Key` value;
             * `Data` is treated as decoration and ignored. This matches
             * the B+ tree's notion of identity (the tree orders by `value`)
             * and frees `Data` from needing any comparison operators of
             * its own. `<` and `>` are unconditionally available because the
             * `key_type_base` concept already requires them on `Key`.
             *
             * @param other Key to compare against
             */
            bool operator==(const key& other) const
                requires std::equality_comparable<Key> {
                    return value == other.value;
                }

            bool operator<(const key& other) const {
                return value < other.value;
            }

            bool operator>(const key& other) const {
                return value > other.value;
            }

        private:
            Key value;   ///< The core key value (interval, genomic_coordinate, numeric, etc.)

            /**
             * @brief Associated data storage (conditionally empty).
             *
             * Uses std::conditional_t to achieve zero-overhead when data is not needed:
             * - When Data is void: stores std::monostate (zero-size type)
             * - When Data is non-void: stores the actual Data
             *
             * The [[no_unique_address]] attribute allows the compiler to optimize away
             * the storage when std::monostate is used, ensuring truly zero overhead.
             */
            [[no_unique_address]]
            std::conditional_t<
                std::is_void_v<Data>,
                std::monostate,
                Data
            > data;
    };

}
#endif //GENOGROVE_DATA_TYPE_KEY_HPP