/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer, Rendong Yang
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef UTILITY_RANGES_HPP
#define UTILITY_RANGES_HPP

#if __cplusplus >= 202002L
    #include <ranges>
    #include <algorithm>
    namespace genogrove::utility {
        namespace ranges = std::ranges;
        namespace views = std::ranges::views;
        using ranges::find;
        using ranges::find_if;
    }
#else // C++17
    #include <range/v3/all.hpp>
    namespace genogrove::utility {
        namespace ranges = ::ranges;
        namespace views = ::ranges::views;
        using ranges::find;
        using ranges::find_if;
    }
#endif

namespace genogrove::utility {
    /*
     * @brief Lookup a key in an associative container by its value.
     * @param The associative container.
     * @param The value to lookup.
     * @return Type of std::optional<key_type> - key_type if the key is found, else std::nullopt
     */
    template<typename AssocContainer, typename Value>
    auto key_lookup(const AssocContainer& container, const Value& value)
    -> std::optional<typename AssocContainer::key_type> {
        auto it = genogrove::utility::ranges::find_if(container, [&](const auto &p) {
            return p.second == value;
        });
        if (it != genogrove::utility::ranges::end(container)) {
            return it->first;
        }
        return std::nullopt;
    }

    /*
     * @brief Lookup a value in an associative container by its key
     * @param The associative container.
     * @param The key to lookup.
     * @return Type of std::optional<mapped_type> - mapped_type if the key is found, else std::nullopt
     */
    template<typename AssocContainer, typename Key>
    auto value_lookup(const AssocContainer& container, const Key& key)
    -> std::optional<typename AssocContainer::mapped_type> {
        auto it = genogrove::utility::ranges::find(container, key, [](const auto &p) {
            return p.first;
        });
        if (it != genogrove::utility::ranges::end(container)) {
            return it->second;
        }
        return std::nullopt;
    }
}

#endif //UTILITY_RANGES_HPP
