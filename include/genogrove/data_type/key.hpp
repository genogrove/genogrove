/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_DATA_TYPE_KEY_HPP
#define GENOGROVE_DATA_TYPE_KEY_HPP

// Standard
#include <concepts>
#include <type_traits>
#include <utility>
#include <optional>
#include <ostream>
#include <istream>
#include <cstring>

// genogrove
#include <genogrove/data_type/key_type_base.hpp>

namespace genogrove::data_type {

// Forward declarations for serialization traits
template<typename T>
struct serialization_traits;

/*
 * @brief Template-based key with zero-overhead abstraction
 * @details Modern C++20 implementation with compile-time type safety
 *
 * @tparam key_type The type of the key value (e.g., interval, genomic_coordinate)
 * @tparam data_type The type of associated data (default: void for no data)
 *
 * Features:
 * - Zero runtime overhead (no virtual functions, no type erasure)
 * - Compile-time type safety
 * - No global state
 * - [[no_unique_address]] optimization when data_type = void
 * - Perfect forwarding for efficient data storage
 * - Type-safe serialization/deserialization
 */
template<key_type_base key_type, typename data_type = void>
class key {
public:
    /*
     * @brief Default constructor - initializes key with default values
     */
    key() requires std::default_initializable<key_type> && std::default_initializable<data_type>
        : value{}, data{} {}

    /*
     * @brief Constructor with key value only
     * When data_type is void, creates a key without data
     * When data_type is not void, creates a key with default-constructed data
     */
    explicit key(key_type kvalue)
        : value(std::move(kvalue)), data{} {}

    /*
     * @brief Constructor with key value and data
     */
    template<typename D = data_type>
    key(key_type kvalue, D&& dvalue) requires (!std::is_void_v<data_type>)
        : value(std::move(kvalue)), data(std::forward<D>(dvalue)) {}

    /*
     * @brief Copy constructor
     */
    key(const key&) = default;

    /*
     * @brief Move constructor
     */
    key(key&&) noexcept = default;

    /*
     * @brief Copy assignment
     */
    key& operator=(const key&) = default;

    /*
     * @brief Move assignment
     */
    key& operator=(key&&) noexcept = default;

    /*
     * @brief Destructor
     */
    ~key() = default;

    /*
     * @brief Get the key value
     * @return Const reference to the key value
     */
    [[nodiscard]] const key_type& get_value() const noexcept {
        return value;
    }

    /*
     * @brief Set the key value
     * @param new_value The new key value
     */
    void set_value(key_type new_value) {
        value = std::move(new_value);
    }

    /*
     * @brief Get the associated data (only available when data_type != void)
     * @return Const reference to the associated data
     */
    template<typename D = data_type>
    [[nodiscard]] const D& get_data() const noexcept requires (!std::is_void_v<D>) {
        return data;
    }

    /*
     * @brief Get mutable reference to associated data (only available when data_type != void)
     * @return Mutable reference to the associated data
     */
    template<typename D = data_type>
    [[nodiscard]] D& get_data() noexcept requires (!std::is_void_v<D>) {
        return data;
    }

    /*
     * @brief Set the associated data (only available when data_type != void)
     * @param new_data The new data value
     */
    template<typename D = data_type>
    void set_data(D new_data) requires (!std::is_void_v<D>) {
        data = std::move(new_data);
    }

    /*
     * @brief Check if this key has associated data
     * @return true if data_type is not void, false otherwise
     */
    [[nodiscard]] static constexpr bool has_data() noexcept {
        return !std::is_void_v<data_type>;
    }

    /*
     * @brief Convert key to string representation
     * @return String representation of the key value
     */
    [[nodiscard]] std::string to_string() const {
        return value.toString();
    }

    /*
     * @brief Serialize the key to an output stream
     * @param os Output stream to write to
     */
    void serialize(std::ostream& os) const {
        // Serialize the key value
        value.serialize(os);

        // Serialize the data if present
        if constexpr (!std::is_void_v<data_type>) {
            serialization_traits<data_type>::serialize(os, data);
        }
    }

    /*
     * @brief Deserialize a key from an input stream
     * @param is Input stream to read from
     * @return Deserialized key
     */
    static key deserialize(std::istream& is) {
        // Deserialize the key value
        // Note: Some types have static deserialize, others have instance methods
        // We need to use a helper function to handle both cases
        key_type kvalue;
        if constexpr (requires { key_type::deserialize(is); }) {
            // Static deserialize method
            kvalue = key_type::deserialize(is);
        } else if constexpr (requires { key_type{}.deserialize(is); }) {
            // Instance deserialize method
            kvalue = key_type{}.deserialize(is);
        } else {
            // Fallback to default deserialization
            static_assert(std::is_trivially_copyable_v<key_type>,
                         "key_type must have a deserialize method or be trivially copyable");
            is.read(reinterpret_cast<char*>(&kvalue), sizeof(key_type));
        }

        if constexpr (std::is_void_v<data_type>) {
            return key(std::move(kvalue));
        } else {
            // Deserialize the data
            data_type dvalue = serialization_traits<data_type>::deserialize(is);
            return key(std::move(kvalue), std::move(dvalue));
        }
    }

    /*
     * @brief Equality comparison
     */
    bool operator==(const key& other) const
        requires std::equality_comparable<key_type> {
        if constexpr (std::is_void_v<data_type>) {
            return value == other.value;
        } else {
            return value == other.value && data == other.data;
        }
    }

    /*
     * @brief Inequality comparison
     */
    bool operator!=(const key& other) const
        requires std::equality_comparable<key_type> {
        return !(*this == other);
    }

private:
    key_type value;

    // Use [[no_unique_address]] to ensure zero overhead when data_type is empty
    // When data_type is void, this is optimized away completely
    [[no_unique_address]]
    std::conditional_t<
        std::is_void_v<data_type>,
        std::monostate,  // Empty placeholder for void case
        data_type
    > data;
};

// ============================================================================
// Serialization Traits - Specialize these for custom types
// ============================================================================

/*
 * @brief Default serialization traits for POD types
 * @details Uses raw memory copy - only safe for trivially copyable types
 */
template<typename T>
struct serialization_traits {
    static_assert(std::is_trivially_copyable_v<T>,
                  "Default serialization only works for trivially copyable types. "
                  "Specialize serialization_traits for complex types.");

    static void serialize(std::ostream& os, const T& value) {
        os.write(reinterpret_cast<const char*>(&value), sizeof(T));
    }

    static T deserialize(std::istream& is) {
        T value;
        is.read(reinterpret_cast<char*>(&value), sizeof(T));
        return value;
    }
};

// Specialization for std::string
template<>
struct serialization_traits<std::string> {
    static void serialize(std::ostream& os, const std::string& value) {
        size_t length = value.size();
        os.write(reinterpret_cast<const char*>(&length), sizeof(length));
        os.write(value.data(), length);
    }

    static std::string deserialize(std::istream& is) {
        size_t length;
        is.read(reinterpret_cast<char*>(&length), sizeof(length));
        std::string value(length, '\0');
        is.read(value.data(), length);
        return value;
    }
};

// ============================================================================
// Type Aliases for Convenience
// ============================================================================

/*
 * @brief Alias for keys without associated data
 */
template<key_type_base key_type>
using key_without_data = key<key_type, void>;

/*
 * @brief Alias for keys with associated data
 */
template<key_type_base key_type, typename data_type>
using key_with_data = key<key_type, data_type>;

} // namespace genogrove::data_type

#endif // GENOGROVE_DATA_TYPE_KEY_HPP
