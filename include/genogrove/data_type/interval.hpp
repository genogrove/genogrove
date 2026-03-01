/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef DATATYPE_INTERVAL_HPP
#define DATATYPE_INTERVAL_HPP

// Standard
#include <cstddef>
#include <iostream>
#include <string>
#include <vector>

namespace genogrove::data_type {
    /**
     * @brief Genomic interval representing a contiguous region with start and end positions.
     *
     * This class represents basic genomic intervals without strand information, satisfying
     * the key_type_base concept for use in grove structures. It provides simple range-based
     * semantics for interval storage, overlap detection, and aggregation.
     *
     * ## Coordinate System
     * Uses 0-based half-open coordinates: [start, end)
     * - Start position is inclusive
     * - End position is exclusive
     * - Length = end - start
     *
     * ## Overlap Semantics
     * Two intervals overlap if they share any positions:
     * - Overlap condition: max(a.start, b.start) < min(a.end, b.end)
     * - Adjacent intervals (e.g., [0,10) and [10,20)) do NOT overlap
     *
     * ## Aggregate Semantics
     * The aggregate function returns a bounding interval:
     * - Start: minimum start position across all intervals
     * - End: maximum end position across all intervals
     *
     * This represents the minimal interval that encompasses all input intervals,
     * enabling efficient B+ tree navigation by representing subtree ranges.
     *
     * ## Comparison Semantics
     * Intervals are ordered by start position, then by end position:
     * - Primary: start position (ascending)
     * - Secondary: end position (ascending)
     *
     * @note Satisfies the key_type_base concept requirements (operators, overlap, aggregate, to_string)
     * @note For strand-aware intervals, use genomic_coordinate instead
     * @see genomic_coordinate for stranded genomic intervals
     * @see numeric for simple point-based key type
     */
    class interval {
        public:
            /**
             * @brief Default constructor creating an empty interval [0, 0).
             */
            interval();

            /**
             * @brief Construct an interval with specified start and end positions.
             *
             * @param start Starting position (0-based, inclusive)
             * @param end Ending position (0-based, exclusive)
             *
             * @note No validation is performed on coordinate validity (start <= end)
             */
            interval(size_t start, size_t end);

            ~interval() = default;

            /**
             * @brief Less-than comparison based on start position, then end position.
             *
             * Intervals are ordered first by start position (ascending), then by end
             * position (ascending) if start positions are equal.
             *
             * @param other Interval to compare against
             * @return true if this interval is less than other
             */
            bool operator<(const interval& other) const;

            /**
             * @brief Greater-than comparison based on start position, then end position.
             *
             * @param other Interval to compare against
             * @return true if this interval is greater than other
             */
            bool operator>(const interval& other) const;

            /**
             * @brief Equality comparison (both start and end must match).
             *
             * @param other Interval to compare against
             * @return true if start and end positions are both equal
             */
            bool operator==(const interval& other) const;

            /**
             * @brief Indicates this is an interval type (enables interval-aware operations).
             */
            static constexpr bool is_interval = true;

            /**
             * @brief Determine if two intervals overlap.
             *
             * Two intervals overlap if they share any positions in their ranges.
             * Uses the standard range intersection test.
             *
             * ## Examples
             * - [100,200) overlaps [150,250) → true (shared region: [150,200))
             * - [100,200) overlaps [200,300) → false (adjacent but not overlapping)
             * - [100,300) overlaps [150,250) → true (second fully contained in first)
             *
             * @param a First interval
             * @param b Second interval
             * @return true if intervals overlap (max(a.start, b.start) < min(a.end, b.end))
             *
             * @note Required by key_type_base concept
             */
            [[nodiscard]] static bool is_overlapping(const interval& a, const interval& b);

            /**
             * @brief Aggregate multiple intervals into a bounding interval.
             *
             * Returns an interval that represents the minimal bounding region:
             * - Start: minimum start position across all intervals
             * - End: maximum end position across all intervals
             *
             * The resulting interval may span gaps between non-overlapping intervals,
             * as it represents the complete range covered by all inputs.
             *
             * @param intervals Vector of intervals to aggregate (must not be empty)
             * @return Bounding interval representing the aggregate range
             *
             * @note Required by key_type_base concept for internal node construction
             * @throws std::runtime_error if intervals is empty (in debug builds)
             */
            [[nodiscard]] static interval aggregate(const std::vector<interval>& intervals);

            /**
             * @brief Convert interval to string representation.
             *
             * Format: "[start,end)" (e.g., "[100,200)")
             *
             * @return String representation of the interval
             *
             * @note Required by key_type_base concept for debugging/display
             */
            std::string to_string() const;

            /**
             * @brief Get the start position (0-based, inclusive).
             *
             * @return Start position
             */
            size_t get_start() const;

            /**
             * @brief Set the start position.
             *
             * @param start Start position (0-based, inclusive)
             *
             * @note No validation is performed
             */
            void set_start(size_t start);

            /**
             * @brief Get the end position (0-based, exclusive).
             *
             * @return End position
             */
            size_t get_end() const;

            /**
             * @brief Set the end position.
             *
             * @param end End position (0-based, exclusive)
             *
             * @note No validation is performed
             */
            void set_end(size_t end);

            /**
             * @brief Serialize the interval to an output stream.
             *
             * Writes the interval in binary format for persistence.
             *
             * @param os Output stream to write to
             */
            void serialize(std::ostream& os) const;

            /**
             * @brief Deserialize an interval from an input stream.
             *
             * Reads the interval from binary format and returns it.
             *
             * @param is Input stream to read from
             * @return Deserialized interval
             */
            [[nodiscard]] static interval deserialize(std::istream& is);

        private:
            size_t start;   ///< Start position (0-based, inclusive)
            size_t end;     ///< End position (0-based, exclusive)
    };
}

#endif //DATATYPE_INTERVAL_HPP
