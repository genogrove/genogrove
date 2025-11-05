/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_SERIALIZATION_TRAITS_H
#define GENOGROVE_SERIALIZATION_TRAITS_H

#include <type_traits>
#include <cassert>
#include <istream>
#include <concepts>

namespace genogrove::data_type {

// forward declaration
template<typename T>
struct serialization_traits;

/*
 * @brief Concept to check if type has an instance serialize() method
 */
template<typename T>
concept has_member_serialize = requires(std::ostream& os, const T& value) {
    { value.serialize(os) } -> std::same_as<void>;
};

/*
 * @brief Concept to check if type has a static deserialize() method
 */
template<typename T>
concept has_static_serialize = requires(std::ostream& os, const T& value) {
    { T::serialize(os, value) } -> std::same_as<void>;
};

/*
 * @brief Concept to check if type has a serialize method implemented (class or static)
 */
template<typename T>
concept has_serialize = has_member_serialize<T> || has_static_serialize<T>;

/*
 * @brief Concept to check if type has static deserialize() method
 */
template<typename T>
concept has_deserialize = requires(std::istream& is) {
    { T::deserialize(is) } -> std::same_as<T>;
};


/*
 * @brief Trait-based serialization dispatcher
 * @details Prefers member serialize(), then static serialize(),
 *     finally falls back to serialization_traits
 */
template<typename T>
struct serializer {
    static void write(std::ostream& os, const T& value) {
        if constexpr(has_member_serialize<T>) {
            value.serialize(os);
        } else if constexpr(has_static_serialize<T>) {
            T::serialize(os, value);
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
        size_t length = value.length();
        os.write(reinterpret_cast<const char*>(&length), sizeof(length));
        os.write(value.data(), length);
    }

    static std::string deserialize(std::istream& is) {
        size_t length;
        is.read(reinterpret_cast<char*>(&length), sizeof(length));
        std::string value(length, '\0');
        is.read(&value[0], length);
        return value;
    }
};


}

#endif //GENOGROVE_SERIALIZATION_TRAITS_H
