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
     * This template class wraps a key_t (e.g., interval, genomic_coordinate, numeric)
     * with an optional data_t payload. It serves as the fundamental storage unit in
     * grove structures, enabling efficient indexing while maintaining arbitrary metadata.
     *
     * ## Template Parameters
     * - `key_t`: The core key value type (must satisfy key_type_base concept)
     *   - Required operations: comparison operators (<, >, ==)
     *   - Required static methods: overlaps(), aggregate()
     *   - Required instance method: to_string()
     * - `data_t`: Optional associated data (default: void for keys without data)
     *   - When void: key contains only the key_t value (zero overhead)
     *   - When non-void: key contains both key_t and data_t
     *
     * ## Usage Patterns
     *
     * **Keys without data (data_t = void):**
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
     * - data_t-related methods only compile when `data_t != void`
     * - Constructors are constrained based on type requirements
     * - Zero runtime overhead for disabled functionality
     *
     * ## Memory Optimization
     * Uses `[[no_unique_address]]` attribute with `std::conditional_t`:
     * - When data_t is void: stores std::monostate (zero size)
     * - When data_t is non-void: stores the actual data_t
     * - Ensures zero overhead when data is not needed
     *
     * ## Serialization
     * Supports binary serialization/deserialization for persistence:
     * - Serializes key_t value
     * - Serializes data_t only when non-void
     * - Uses type-specific serialization_traits
     *
     * @tparam key_t Type satisfying key_type_base concept (interval, genomic_coordinate, numeric, etc.)
     * @tparam data_t Optional associated data type (default: void)
     *
     * @note The key_t must satisfy the key_type_base concept requirements
     * @note When data_t is void, all data-related methods are disabled at compile time
     * @see interval, genomic_coordinate, numeric for common key_t examples
     * @see grove for the primary container using this key type
     * @see query_result for collections of key pointers
     */
    template<key_type_base key_t, typename data_t = void>
    class key {
        public:
            /**
             * @brief Default constructor initializing both value and data with defaults.
             *
             * Only available when both key_t and data_t are default-initializable.
             *
             * @note Constrained by requires clause - will not compile if types are not default-initializable
             */
            key() requires std::default_initializable<key_t> &&
                std::default_initializable<data_t> : value{}, data{} {}

            /**
             * @brief Construct a key with the specified key value.
             *
             * When data_t is void: Creates a key with only the value.
             * When data_t is non-void: Creates a key with value and default-constructed data.
             *
             * @param kvalue The key value (moved into the key)
             */
            explicit key(key_t kvalue)
                : value(std::move(kvalue)), data{} {}

            /**
             * @brief Construct a key with both key value and associated data.
             *
             * Only available when data_t is not void (enforced by requires clause).
             * Uses perfect forwarding to efficiently transfer the data value.
             *
             * @tparam D data_t type (deduced, should match data_t)
             * @param key_value The key value (moved into the key)
             * @param data_value The associated data (forwarded)
             *
             * @note This constructor only exists when data_t != void
             */
            template<typename D = data_t>
            key(key_t key_value, D&& data_value) requires (!std::is_void_v<data_t>) :
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
             * @return Const reference to the underlying key_t value
             */
            [[nodiscard]] const key_t& get_value() const noexcept {
                return value;
            }

            /**
             * @brief Set the key value.
             *
             * @param new_value The new key value (moved)
             */
            void set_value(key_t new_value) {
                value = std::move(new_value);
            }

            /**
             * @brief Get the associated data (const reference).
             *
             * Only available when data_t is not void (enforced by requires clause).
             * Provides read-only access to the associated data.
             *
             * @tparam D data_t type (deduced, should match data_t)
             * @return Const reference to the associated data
             *
             * @note This method only exists when data_t != void
             * @note Returns by const reference for efficiency
             */
            template<typename D = data_t>
            [[nodiscard]] const D& get_data() const noexcept requires (!std::is_void_v<D>) {
                    return data;
            }

            /**
             * @brief Get mutable reference to associated data.
             *
             * Only available when data_t is not void (enforced by requires clause).
             * Allows in-place modification of the data without copying.
             *
             * @tparam D data_t type (deduced, should match data_t)
             * @return Mutable reference to the associated data
             *
             * @note This method only exists when data_t != void
             * @note Useful for efficient in-place updates
             */
            template<typename D = data_t>
            [[nodiscard]] D& get_data() noexcept requires (!std::is_void_v<D>) {
                return data;
            }

            /**
             * @brief Set the associated data.
             *
             * Only available when data_t is not void (enforced by requires clause).
             *
             * @tparam D data_t type (deduced, should match data_t)
             * @param new_data The new data value (moved)
             *
             * @note This method only exists when data_t != void
             */
            template<typename D = data_t>
            void set_data(D new_data) requires (!std::is_void_v<D>) {
                    data = std::move(new_data);
            }

            /**
             * @brief Check if this key has associated data.
             *
             * Compile-time constant determined by template parameter.
             *
             * @return true if data_t is not void, false otherwise
             */
            [[nodiscard]] constexpr bool has_data() const noexcept {
                return !std::is_void_v<data_t>;
            }

            /**
             * @brief Convert key to string representation.
             *
             * Delegates to the key_t's to_string() method.
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
             * - Always serializes the key_t value
             * - Serializes data_t only when non-void
             *
             * Uses type-specific serialization_traits for both key and data.
             *
             * @param os Output stream to write to
             *
             * @note Serialization format depends on serialization_traits specializations
             */
            void serialize(std::ostream& os) const {
                serializer<key_t>::write(os, this->value);

                if constexpr(!std::is_void_v<data_t>) {
                    serializer<data_t>::write(os, this->data);
                }

                if (!os) {
                    throw std::runtime_error("Failed to serialize key: stream error");
                }
            }

            /**
             * @brief Deserialize a key from an input stream.
             *
             * Reads the key from binary format and reconstructs it:
             * - Always deserializes the key_t value
             * - Deserializes data_t only when non-void
             *
             * @param is Input stream to read from
             * @return Deserialized key object
             *
             * @note Must match the format written by serialize()
             * @note Static method - creates and returns a new key
             */
            [[nodiscard]] static key deserialize(std::istream& is) {
                key_t key_value = serializer<key_t>::read(is);

                if constexpr(std::is_void_v<data_t>) {
                    return key{std::move(key_value)};
                } else {
                    auto data_value = serializer<data_t>::read(is);
                    return key{std::move(key_value), std::move(data_value)};
                }
            }

            /**
             * @brief Comparison operators.
             *
             * Comparisons are delegated to the wrapped `key_t` value;
             * `data_t` is treated as decoration and ignored. This matches
             * the B+ tree's notion of identity (the tree orders by `value`)
             * and frees `data_t` from needing any comparison operators of
             * its own. `<` and `>` are unconditionally available because the
             * `key_type_base` concept already requires them on `key_t`.
             *
             * @param other key_t to compare against
             */
            bool operator==(const key& other) const
                requires std::equality_comparable<key_t> {
                    return value == other.value;
                }

            bool operator<(const key& other) const {
                return value < other.value;
            }

            bool operator>(const key& other) const {
                return value > other.value;
            }

        private:
            key_t value;   ///< The core key value (interval, genomic_coordinate, numeric, etc.)

            /**
             * @brief Associated data storage (conditionally empty).
             *
             * Uses std::conditional_t to achieve zero-overhead when data is not needed:
             * - When data_t is void: stores std::monostate (zero-size type)
             * - When data_t is non-void: stores the actual data_t
             *
             * The [[no_unique_address]] attribute allows the compiler to optimize away
             * the storage when std::monostate is used, ensuring truly zero overhead.
             */
            [[no_unique_address]]
            std::conditional_t<
                std::is_void_v<data_t>,
                std::monostate,
                data_t
            > data;
    };

}
#endif //GENOGROVE_DATA_TYPE_KEY_HPP