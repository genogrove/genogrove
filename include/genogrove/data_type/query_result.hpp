/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_DATA_TYPE_QUERY_RESULT_HPP
#define GENOGROVE_DATA_TYPE_QUERY_RESULT_HPP

// Standard
#include <vector>
#include <memory>
#include <unordered_map>

// genogrove
#include <genogrove/data_type/any_type.hpp>
#include <genogrove/data_type/key.hpp>

namespace genogrove::data_type {
    template<typename query_type>
    class query_result {
        public:
            query_result(query_type query) : query(query), keys{} {}
            query_type get_query() const { return this->query; }
            std::vector<key<query_type>*> get_keys() const { return this->keys; }

            void add_key(key<query_type>* key) { this->keys.push_back(key); }

        private:
            query_type query;
            std::vector<key<query_type>*> keys;
    };
}

#endif //GENOGROVE_DATA_TYPE_QUERY_RESULT_HPP
