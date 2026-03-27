/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer, Rendong Yang
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef UTILITY_RANGES_HPP
#define UTILITY_RANGES_HPP

#include <ranges>
#include <algorithm>
#include <optional>

namespace genogrove::utility {
    namespace ranges = std::ranges;
    namespace views = std::ranges::views;
    using ranges::find;
    using ranges::find_if;

    /*
     * @brief Lookup a key in an associative container by its value.
     * @param The associative container.
     * @param The value to lookup.
     * @return Type of std::optional<key_type> - key_type if the key is found, else std::nullopt
     */
    template<typename AssocContainer, typename Value>
        requires (std::ranges::input_range<AssocContainer>
            && requires { typename AssocContainer::key_type; typename AssocContainer::mapped_type; })
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
        requires (std::ranges::input_range<AssocContainer>
            && requires { typename AssocContainer::key_type; typename AssocContainer::mapped_type; })
    auto value_lookup(const AssocContainer& container, const Key& key)
    -> std::optional<typename AssocContainer::mapped_type> {
        auto do_find = [&]() {
            if constexpr (requires { container.find(key); }) {
                return container.find(key);
            } else {
                return container.find(typename AssocContainer::key_type(key));
            }
        };
        auto it = do_find();
        if (it != container.end()) {
            return it->second;
        }
        return std::nullopt;
    }
}
#endif
