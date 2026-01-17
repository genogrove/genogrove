/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_SERIALIZATION_TRAITS_H
#define GENOGROVE_SERIALIZATION_TRAITS_H

#include <type_traits>
#include <cassert>
#include <istream>
#include <ostream>
#include <string>
#include <concepts>

namespace genogrove::data_type {

/**
 * @file serialization_traits.hpp
 * @brief Serialization infrastructure for genogrove types
 *
 * ## Serialization Design
 *
 * For custom types to support serialization, implement:
 *
 * - **serialize**: Member method (non-static)
 *   ```cpp
 *   void serialize(std::ostream& os) const;
 *   ```
 *
 * - **deserialize**: Static method with [[nodiscard]]
 *   ```cpp
 *   [[nodiscard]] static T deserialize(std::istream& is);
 *   ```
 *
 * The asymmetry is intentional:
 * - serialize: You have an object, serialize it → member method
 * - deserialize: You create an object from stream → static factory
 *
 * ## Alternatives for types you don't control
 *
 * 1. **Trivially copyable types** (int, etc.): Work automatically via raw memory copy
 * 2. **Specialize serialization_traits<T>**: For third-party types (e.g., std::string)
 *
 * ## Example
 *
 * ```cpp
 * class MyType {
 * public:
 *     void serialize(std::ostream& os) const {
 *         os.write(reinterpret_cast<const char*>(&value), sizeof(value));
 *     }
 *
 *     [[nodiscard]] static MyType deserialize(std::istream& is) {
 *         MyType obj;
 *         is.read(reinterpret_cast<char*>(&obj.value), sizeof(obj.value));
 *         return obj;
 *     }
 * private:
 *     int value;
 * };
 * ```
 */

// forward declaration
template<typename T>
struct serialization_traits;

/**
 * @brief Concept to check if type has a member serialize() method
 * @note serialize must be a const member method: void serialize(std::ostream& os) const
 * @note Static serialize is not allowed - use member method only
 */
template<typename T>
concept has_serialize = requires(std::ostream& os, const T& value) {
    { value.serialize(os) } -> std::same_as<void>;
};

/**
 * @brief Concept to check if type has static deserialize() method
 * @note deserialize must be static and should be marked [[nodiscard]]:
 *       [[nodiscard]] static T deserialize(std::istream& is)
 * @note Non-static deserialize is not allowed - use static method only
 */
template<typename T>
concept has_deserialize = requires(std::istream& is) {
    { T::deserialize(is) } -> std::same_as<T>;
};

/**
 * @brief Trait-based serialization dispatcher
 *
 * Dispatches serialization calls based on type capabilities:
 * 1. If type has member serialize()/static deserialize() → use those
 * 2. Otherwise → fall back to serialization_traits<T>
 *
 * @tparam T The type to serialize/deserialize
 */
template<typename T>
struct serializer {
    static void write(std::ostream& os, const T& value) {
        if constexpr(has_serialize<T>) {
            value.serialize(os);
        } else {
            serialization_traits<T>::serialize(os, value);
        }
    }

    static T read(std::istream& is) {
        if constexpr(has_deserialize<T>) {
            return T::deserialize(is);
        } else {
            return serialization_traits<T>::deserialize(is);
        }
    }
};


template<typename T>
struct serialization_traits {
    static_assert(std::is_trivially_copyable_v<T>,
        "Default serialization only works for trivially copyable types. "
        "Specialize serialization_traits for complex types.");

    static void serialize(std::ostream& os, const T& value) {
        os.write(reinterpret_cast<const char*>(&value), sizeof(T));
        if(!os) {
            throw std::runtime_error("Serialization failed!");
        }
    }

    static T deserialize(std::istream& is) {
        T value;
        is.read(reinterpret_cast<char*>(&value), sizeof(T));
        if(!is) {
            throw std::runtime_error("Deserialization failed!");
        }
        return value;
    }
};

// Specialization for std::string
template<>
struct serialization_traits<std::string> {
    static void serialize(std::ostream& os, const std::string& value) {
        uint64_t length = value.length();
        os.write(reinterpret_cast<const char*>(&length), sizeof(length));
        os.write(value.data(), length);
    }

    static std::string deserialize(std::istream& is) {
        uint64_t length;
        is.read(reinterpret_cast<char*>(&length), sizeof(length));
        std::string value(length, '\0');
        is.read(&value[0], length);
        return value;
    }
};


}

#endif //GENOGROVE_SERIALIZATION_TRAITS_H
