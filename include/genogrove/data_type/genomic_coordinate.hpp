/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef DATATYPE_GENOMICCOORDINATE_HPP
#define DATATYPE_GENOMICCOORDINATE_HPP

// Standard
#include <cstddef>
#include <string>
#include <vector>

namespace genogrove::data_type {
    class genomic_coordinate {
        public:
            // Constructors
            genomic_coordinate();
            genomic_coordinate(char strand, std::size_t start, std::size_t end);
            ~genomic_coordinate() = default;

            // Comparison operators (required by key_type_base concept)
            bool operator<(const genomic_coordinate& other) const;
            bool operator>(const genomic_coordinate& other) const;
            bool operator==(const genomic_coordinate& other) const;

            // @brief indicates that this is an interval type (constexpr C++20)
            static constexpr bool is_interval = true;

            // Static methods (required by key_type_base concept)
            static bool overlap(const genomic_coordinate& a, const genomic_coordinate& b);
            static genomic_coordinate aggregate(const std::vector<genomic_coordinate>& coords);

            // String conversion (required by key_type_base concept)
            std::string to_string() const;

            // Getters
            char get_strand() const;
            std::size_t get_start() const;
            std::size_t get_end() const;

            // Setters
            void set_strand(char strand);
            void set_start(std::size_t start);
            void set_end(std::size_t end);

        private:
            char strand;
            std::size_t start;
            std::size_t end;
    };
}

#endif //DATATYPE_GENOMICCOORDINATE_HPP
