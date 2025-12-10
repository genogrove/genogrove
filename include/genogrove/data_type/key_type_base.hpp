/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_DATA_TYPE_KEY_TYPE_BASE_HPP
#define GENOGROVE_DATA_TYPE_KEY_TYPE_BASE_HPP

#include <cstddef>
#include <vector>
#include <concepts>

// #if __cplusplus >= 202002L
// // C++20 with concepts

namespace genogrove::data_type {
    template<typename T>
    concept key_type_base = requires (T a, T b) {
        { a < b } -> std::convertible_to<bool>;
        { a > b } -> std::convertible_to<bool>;
        { a == b } -> std::convertible_to<bool>;
        { T::overlap(a,b) } -> std::convertible_to<bool>;
        { T::aggregate(std::vector<T>{}) } -> std::convertible_to<T>;
        { a.to_string() } -> std::convertible_to<std::string>;
    };

    // helper function for c++20 (with concept constraints)
    template<key_type_base key_type>
    constexpr bool is_key_type_base() {
        return true;
    }
}

#endif //GENOGROVE_DATA_TYPE_KEY_TYPE_BASE_HPP


