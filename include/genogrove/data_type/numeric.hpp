/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
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
     *
     * ## Point Semantics
     * Numeric types represent discrete point values rather than ranges:
     * - Each value is a single integer (not a range)
     * - No inherent "width" or "span" like intervals
     * - Useful for non-genomic B+ tree applications (e.g., indexing IDs, timestamps)
     *
     * ## Overlap Semantics
     * Overlap occurs only when values are exactly equal:
     * - `numeric(5)` overlaps `numeric(5)` → true
     * - `numeric(5)` overlaps `numeric(6)` → false
     *
     * This is fundamentally different from interval types where overlap is range-based.
     * The equality-based overlap enables the grove to function as a standard B+ tree
     * for point lookups.
     *
     * ## Aggregate Semantics
     * The aggregate function returns the maximum value:
     * - Aggregating {3, 7, 5} → numeric(7)
     *
     * Using the maximum enables proper B+ tree navigation: internal nodes store the
     * maximum value in their subtree, allowing search operations to correctly traverse
     * to the appropriate child node.
     *
     * ## Comparison Semantics
     * Standard integer comparison:
     * - `a < b` if a.value < b.value
     * - `a > b` if a.value > b.value
     * - `a == b` if a.value == b.value
     *
     * @note Satisfies the key_type_base concept requirements (operators, overlap, aggregate, to_string)
     * @note Demonstrates grove usage beyond genomic intervals
     * @see interval for range-based genomic intervals
     * @see genomic_coordinate for stranded genomic intervals
     */
    class numeric {
        public:
            /**
             * @brief Default constructor creating a numeric with value 0.
             */
            numeric();

            /**
             * @brief Construct a numeric with the specified integer value.
             *
             * @param value Integer value to wrap
             */
            explicit numeric(int value);

            ~numeric() = default;

            /**
             * @brief Less-than comparison based on integer value.
             *
             * @param other Numeric to compare against
             * @return true if this value is less than other's value
             */
            bool operator<(const numeric& other) const;

            /**
             * @brief Greater-than comparison based on integer value.
             *
             * @param other Numeric to compare against
             * @return true if this value is greater than other's value
             */
            bool operator>(const numeric& other) const;

            /**
             * @brief Equality comparison based on integer value.
             *
             * @param other Numeric to compare against
             * @return true if values are equal
             */
            bool operator==(const numeric& other) const;

            /**
             * @brief Indicates this is a numeric type (enables type-specific operations).
             */
            static constexpr bool is_numeric = true;

            /**
             * @brief Determine if two numeric values overlap.
             *
             * For point values, overlap occurs only when they are exactly equal.
             * This differs from interval overlap which uses range intersection.
             *
             * ## Examples
             * - numeric(5) overlaps numeric(5) → true
             * - numeric(5) overlaps numeric(6) → false
             *
             * @param a First numeric
             * @param b Second numeric
             * @return true if values are equal
             *
             * @note Required by key_type_base concept
             */
            static bool overlap(const numeric& a, const numeric& b);

            /**
             * @brief Aggregate multiple numeric values.
             *
             * Returns the maximum value to enable proper B+ tree navigation.
             * Internal nodes store the maximum value in their subtree, allowing
             * search operations to correctly traverse to child nodes.
             *
             * @param values Vector of numeric values to aggregate (must not be empty)
             * @return Numeric containing the maximum value
             *
             * @note Required by key_type_base concept for internal node construction
             * @throws std::runtime_error if values is empty (in debug builds)
             */
            static numeric aggregate(const std::vector<numeric>& values);

            /**
             * @brief Convert the numeric value to string representation.
             *
             * Format: Simple integer string (e.g., "42", "-7")
             *
             * @return String representation of the value
             *
             * @note Required by key_type_base concept for debugging/display
             */
            std::string to_string() const;

            /**
             * @brief Get the integer value.
             *
             * @return The wrapped integer value
             */
            int get_value() const;

            /**
             * @brief Set the integer value.
             *
             * @param value New integer value
             */
            void set_value(int value);

            /**
             * @brief Serialize the numeric to an output stream.
             *
             * Writes the value in binary format for persistence.
             *
             * @param os Output stream to write to
             */
            void serialize(std::ostream& os) const;

            /**
             * @brief Deserialize a numeric from an input stream.
             *
             * Reads the value from binary format and returns it.
             *
             * @param is Input stream to read from
             * @return Deserialized numeric
             */
            numeric deserialize(std::istream& is);

        private:
            int value;   ///< The wrapped integer value
    };
}

#endif // GENOGROVE_DATA_TYPE_NUMERIC_HPP