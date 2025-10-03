/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef CHROMOSOME_REGISTRY_HPP
#define CHROMOSOME_REGISTRY_HPP

// Standard
#include <bitset>
#include <cstdint>
#include <unordered_map>
#include <stdexcept>
#include <optional>
#include <iostream>

// Class
#include <genogrove/utility/ranges.hpp>

namespace ggu = genogrove::utility;

namespace genogrove::data_type {
    /*
     * @brief Registry class that keeps track of the chromosomes that are used in the data
     */
    class index_registry {
        public:
            /*
             * Singleton to make sure that only one instance of the registry is created
             */
            static index_registry& instance();
            /*
             * @brief registers a string as an index - does nothing if the
             */
            uint8_t register_key(const std::string& key);

            /*
             * @brief checks if given key has already been registered
             */
            bool is_registered(const std::string& key);

            /*
             * @brief retrieves the key for a given index (if present)
             * @return std::nullopt if the index is not in the registry
             */
            std::optional<std::string> key_lookup(uint8_t value);

            /*
             * @brief retrieves the index for a given key (if present)
             * @return std::nullopt if the key is not in the registry
             */
            std::optional<uint8_t> value_lookup(const std::string& key);

        private:
            std::unordered_map<std::string, uint8_t> registry;
            uint8_t next_index;
    };
}

#endif // CHROMOSOME_REGISTRY_HPP

