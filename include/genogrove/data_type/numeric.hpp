/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_DATA_TYPE_NUMERIC_HPP
#define GENOGROVE_DATA_TYPE_NUMERIC_HPP

#include <cstddef>
#include <iostream>
#include <string>
#include <vector>

namespace genogrove::data_type {
    /**
     * @brief Simple numeric (integer) key type for basic B+ tree operations.
     *
     * This class wraps an integer value and satisfies the key_type_base concept,
     * enabling use in grove structures as a simple ordered key without range semantics.
     * Unlike interval types that represent ranges, numeric represents a single point value.
     */
    class numeric {
        public:
            numeric();
            explicit numeric(int value);
            ~numeric() = default;

            /**
             * @brief Standard comparison operators for ordering
             */
            bool operator<(const numeric& other) const;
            bool operator>(const numeric& other) const;
            bool operator==(const numeric& other) const;

            /**
             * @brief Indicates this is a numeric type
             */
            static constexpr bool is_numeric = true;

            /**
             * @brief Determine if two numeric values overlap.
             * For point values, overlap occurs only when they are equal.
             */
            static bool overlap(const numeric& a, const numeric& b);

            /**
             * @brief Aggregate multiple numeric values.
             * Returns the minimum value to represent the smallest enclosing point.
             */
            static numeric aggregate(const std::vector<numeric>& values);

            /**
             * @brief Convert the numeric value to a string representation
             */
            std::string to_string() const;

            // Getters & Setters
            /**
             * @brief Get the numeric value
             */
            int get_value() const;

            /**
             * @brief Set the numeric value
             */
            void set_value(int value);

            /**
             * @brief Serialize the numeric to a stream
             */
            void serialize(std::ostream& os) const;

            /**
             * @brief Deserialize the numeric from a stream
             */
            numeric deserialize(std::istream& is);

        private:
            int value;
    };
}

#endif // GENOGROVE_DATA_TYPE_NUMERIC_HPP