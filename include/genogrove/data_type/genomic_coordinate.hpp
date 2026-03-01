/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef DATATYPE_GENOMICCOORDINATE_HPP
#define DATATYPE_GENOMICCOORDINATE_HPP

// Standard
#include <cstddef>
#include <iostream>
#include <string>
#include <vector>

namespace genogrove::data_type {
    /**
     * @brief Stranded genomic interval representing a region on a specific strand.
     *
     * This class represents genomic intervals with start/end positions and strand information,
     * satisfying the key_type_base concept for use in grove structures. It extends the basic
     * interval type with strand-awareness, enabling strand-specific queries and operations.
     *
     * ## Strand Representation
     * Supports four strand values:
     * - `'+'`: Forward/plus strand
     * - `'-'`: Reverse/minus strand
     * - `'.'`: No strand information (strand-agnostic)
     * - `'*'`: Wildcard (matches any strand, used for aggregated internal nodes)
     *
     * ## Sorting Semantics
     * Uses coordinate-first sorting for spatial locality:
     * 1. Primary: start position (ascending)
     * 2. Secondary: end position (ascending)
     * 3. Tertiary: strand with order: `* < . < + < -`
     *
     * This ordering keeps spatially-close intervals together regardless of strand,
     * improving cache locality while maintaining strand-specific query capability.
     *
     * ## Overlap Semantics
     * Overlap requires both coordinate overlap AND strand compatibility:
     * - Coordinates must overlap (standard interval intersection)
     * - Strand matching uses strict equality (e.g., '+' overlaps only with '+')
     * - Wildcard `'*'` matches any strand (used for internal node queries)
     * - Query strand determines matching behavior
     *
     * ## Aggregate Semantics
     * The aggregate function returns a bounding coordinate:
     * - Start: minimum start position across all coordinates
     * - End: maximum end position across all coordinates
     * - Strand: `'*'` (wildcard) if strands differ, otherwise the common strand
     *
     * This enables efficient tree traversal by representing the range covered by
     * a subtree while preserving strand information when possible.
     *
     * @note Satisfies the key_type_base concept requirements (operators, overlap, aggregate, to_string)
     * @note Uses 0-based half-open coordinate system: [start, end)
     * @see interval for non-stranded genomic intervals
     * @see numeric for simple point-based key type
     */
    class genomic_coordinate {
        public:
            /**
             * @brief Default constructor creating an invalid coordinate (strand='*', start=0, end=0).
             */
            genomic_coordinate();

            /**
             * @brief Construct a genomic coordinate with specified strand and position.
             *
             * @param strand Strand indicator ('+', '-', '.', or '*')
             * @param start Starting position (0-based, inclusive)
             * @param end Ending position (0-based, exclusive)
             *
             * @note No validation is performed on strand value or coordinate validity
             */
            genomic_coordinate(char strand, std::size_t start, std::size_t end);

            ~genomic_coordinate() = default;

            /**
             * @brief Less-than comparison using coordinate-first sorting.
             *
             * Comparison order: start → end → strand (with strand order: * < . < + < -)
             *
             * @param other Coordinate to compare against
             * @return true if this coordinate is less than other
             */
            bool operator<(const genomic_coordinate& other) const;

            /**
             * @brief Greater-than comparison using coordinate-first sorting.
             *
             * @param other Coordinate to compare against
             * @return true if this coordinate is greater than other
             */
            bool operator>(const genomic_coordinate& other) const;

            /**
             * @brief Equality comparison (all three components must match).
             *
             * @param other Coordinate to compare against
             * @return true if strand, start, and end are all equal
             */
            bool operator==(const genomic_coordinate& other) const;

            /**
             * @brief Indicates this is an interval type (enables interval-aware operations).
             */
            static constexpr bool is_interval = true;

            /**
             * @brief Determine if two genomic coordinates overlap.
             *
             * Overlap requires both spatial overlap AND strand compatibility:
             * - Coordinates overlap if: max(a.start, b.start) < min(a.end, b.end)
             * - Strands must match exactly, EXCEPT wildcard '*' matches any strand
             *
             * ## Examples
             * - `[100,200,'+')` overlaps `[150,250,'+')` → true (spatial + strand match)
             * - `[100,200,'+')` overlaps `[150,250,'-')` → false (strand mismatch)
             * - `[100,200,'+')` overlaps `[150,250,'*')` → true (wildcard matches)
             * - `[100,200,'+')` overlaps `[300,400,'+')` → false (no spatial overlap)
             *
             * @param a First coordinate
             * @param b Second coordinate
             * @return true if coordinates overlap spatially and strands are compatible
             *
             * @note Required by key_type_base concept
             */
            static bool is_overlapping(const genomic_coordinate& a, const genomic_coordinate& b);

            /**
             * @brief Aggregate multiple coordinates into a bounding coordinate.
             *
             * Returns a coordinate that represents the minimal bounding region:
             * - Start: minimum start position
             * - End: maximum end position
             * - Strand: '*' (wildcard) if strands differ, otherwise common strand
             *
             * Using wildcard for mixed strands enables efficient tree traversal while
             * preserving strand information when all coordinates share the same strand.
             *
             * @param coords Vector of coordinates to aggregate (must not be empty)
             * @return Bounding coordinate representing the aggregate range
             *
             * @note Required by key_type_base concept for internal node construction
             * @throws std::runtime_error if coords is empty (in debug builds)
             */
            [[nodiscard]] static genomic_coordinate aggregate(const std::vector<genomic_coordinate>& coords);

            /**
             * @brief Convert coordinate to string representation.
             *
             * Format: "[start,end,strand)" (e.g., "[100,200,+)")
             *
             * @return String representation of the coordinate
             *
             * @note Required by key_type_base concept for debugging/display
             */
            std::string to_string() const;

            /**
             * @brief Get the strand indicator.
             *
             * @return Strand character ('+', '-', '.', or '*')
             */
            char get_strand() const;

            /**
             * @brief Get the start position (0-based, inclusive).
             *
             * @return Start position
             */
            std::size_t get_start() const;

            /**
             * @brief Get the end position (0-based, exclusive).
             *
             * @return End position
             */
            std::size_t get_end() const;

            /**
             * @brief Set the strand indicator.
             *
             * @param strand Strand character ('+', '-', '.', or '*')
             *
             * @note No validation is performed
             */
            void set_strand(char strand);

            /**
             * @brief Set the start position.
             *
             * @param start Start position (0-based, inclusive)
             *
             * @note No validation is performed
             */
            void set_start(std::size_t start);

            /**
             * @brief Set the end position.
             *
             * @param end End position (0-based, exclusive)
             *
             * @note No validation is performed
             */
            void set_end(std::size_t end);

            /**
             * @brief Serialize the genomic coordinate to an output stream.
             *
             * Writes the coordinate in binary format for persistence.
             *
             * @param os Output stream to write to
             */
            void serialize(std::ostream& os) const;

            /**
             * @brief Deserialize a genomic coordinate from an input stream.
             *
             * Reads the coordinate from binary format and returns it.
             *
             * @param is Input stream to read from
             * @return Deserialized genomic coordinate
             */
            [[nodiscard]] static genomic_coordinate deserialize(std::istream& is);

        private:
            char strand;         ///< Strand indicator: '+', '-', '.', or '*'
            std::size_t start;   ///< Start position (0-based, inclusive)
            std::size_t end;     ///< End position (0-based, exclusive)
    };
}

#endif //DATATYPE_GENOMICCOORDINATE_HPP
