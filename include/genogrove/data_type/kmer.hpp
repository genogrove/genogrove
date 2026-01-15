/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_DATA_TYPE_KMER_HPP
#define GENOGROVE_DATA_TYPE_KMER_HPP

#include <cstddef>
#include <cstdint>
#include <iostream>
#include <string>
#include <string_view>
#include <vector>

namespace genogrove::data_type {
    /**
     * @brief K-mer key type for sequence-based B+ tree operations.
     *
     * This class represents a k-mer (substring of length k from a DNA sequence) using
     * a compact 2-bit encoding. It satisfies the key_type_base concept, enabling use
     * in grove structures for k-mer indexing and membership queries.
     *
     * ## Encoding Scheme
     * Each nucleotide is encoded using 2 bits:
     * - A = 00 (0)
     * - C = 01 (1)
     * - G = 10 (2)
     * - T = 11 (3)
     *
     * K-mers are stored as a 64-bit integer, supporting k values up to 32.
     * The first nucleotide occupies the most significant bits.
     *
     * ## Point Semantics
     * Like numeric types, k-mers represent discrete values rather than ranges:
     * - Each k-mer is a specific sequence
     * - No inherent "width" or "span" like intervals
     * - Useful for k-mer counting, membership queries, and sequence indexing
     *
     * ## Overlap Semantics
     * Overlap occurs only when k-mers are exactly equal:
     * - `kmer("ACGT")` overlaps `kmer("ACGT")` -> true
     * - `kmer("ACGT")` overlaps `kmer("ACGA")` -> false
     *
     * This enables the grove to function as a k-mer dictionary for membership lookups.
     *
     * ## Aggregate Semantics
     * The aggregate function returns the maximum k-mer (by encoding value):
     * - Aggregating {"AAAA", "TTTT", "ACGT"} -> kmer("TTTT")
     *
     * Using the maximum enables proper B+ tree navigation: internal nodes store the
     * maximum k-mer in their subtree.
     *
     * ## Comparison Semantics
     * K-mers are ordered lexicographically via their encoding:
     * - A < C < G < T for individual bases
     * - Comparison proceeds from first to last position
     *
     * @note Satisfies the key_type_base concept requirements (operators, overlap, aggregate, to_string)
     * @note Maximum k value is 32 (64 bits / 2 bits per base)
     * @note Only supports canonical bases (A, C, G, T) - N is not supported
     * @see numeric for simple integer-based key type
     * @see interval for range-based genomic intervals
     */
    class kmer {
        public:
            /**
             * @brief Default constructor creating an empty k-mer (k=0).
             */
            kmer();

            /**
             * @brief Construct a k-mer from a DNA sequence string.
             *
             * Converts the sequence to 2-bit encoding. Only A, C, G, T (case-insensitive)
             * are valid characters.
             *
             * @param sequence DNA sequence (must contain only A, C, G, T)
             * @throws std::invalid_argument if sequence contains invalid characters
             * @throws std::invalid_argument if sequence length exceeds 32
             */
            explicit kmer(std::string_view sequence);

            /**
             * @brief Construct a k-mer from a pre-computed encoding.
             *
             * @param encoding 2-bit encoded k-mer value
             * @param k Length of the k-mer (1-32)
             */
            kmer(uint64_t encoding, uint8_t k);

            ~kmer() = default;

            /**
             * @brief Less-than comparison based on encoding value.
             *
             * K-mers are compared by their encoding, which gives lexicographic ordering.
             * K-mers of different lengths are compared by encoding first, then by length.
             *
             * @param other K-mer to compare against
             * @return true if this k-mer is less than other
             */
            bool operator<(const kmer& other) const;

            /**
             * @brief Greater-than comparison based on encoding value.
             *
             * @param other K-mer to compare against
             * @return true if this k-mer is greater than other
             */
            bool operator>(const kmer& other) const;

            /**
             * @brief Equality comparison (encoding and k must both match).
             *
             * @param other K-mer to compare against
             * @return true if both encoding and k are equal
             */
            bool operator==(const kmer& other) const;

            /**
             * @brief Indicates this is a k-mer type (enables type-specific operations).
             */
            static constexpr bool is_kmer = true;

            /**
             * @brief Maximum supported k-mer length (32 for uint64_t storage).
             */
            static constexpr uint8_t max_k = 32;

            /**
             * @brief Determine if two k-mers overlap.
             *
             * For k-mers, overlap occurs only when they are exactly equal
             * (same encoding and same k value).
             *
             * ## Examples
             * - kmer("ACGT") overlaps kmer("ACGT") -> true
             * - kmer("ACGT") overlaps kmer("ACGA") -> false
             * - kmer("ACG") overlaps kmer("ACGT") -> false (different k)
             *
             * @param a First k-mer
             * @param b Second k-mer
             * @return true if k-mers are identical
             *
             * @note Required by key_type_base concept
             */
            static bool overlap(const kmer& a, const kmer& b);

            /**
             * @brief Aggregate multiple k-mers.
             *
             * Returns the maximum k-mer (by encoding) to enable proper B+ tree navigation.
             * All k-mers in the vector should have the same k value.
             *
             * @param kmers Vector of k-mers to aggregate (must not be empty)
             * @return K-mer with the maximum encoding value
             *
             * @note Required by key_type_base concept for internal node construction
             */
            static kmer aggregate(const std::vector<kmer>& kmers);

            /**
             * @brief Convert the k-mer to its DNA sequence string.
             *
             * Decodes the 2-bit encoding back to A, C, G, T characters.
             *
             * @return DNA sequence string of length k
             *
             * @note Required by key_type_base concept for debugging/display
             */
            std::string to_string() const;

            /**
             * @brief Get the 2-bit encoding value.
             *
             * @return The encoded k-mer as a 64-bit integer
             */
            uint64_t get_encoding() const;

            /**
             * @brief Get the k-mer length.
             *
             * @return The value of k (1-32)
             */
            uint8_t get_k() const;

            /**
             * @brief Serialize the k-mer to an output stream.
             *
             * Writes encoding and k in binary format for persistence.
             *
             * @param os Output stream to write to
             */
            void serialize(std::ostream& os) const;

            /**
             * @brief Deserialize a k-mer from an input stream.
             *
             * Reads encoding and k from binary format.
             *
             * @param is Input stream to read from
             * @return Deserialized k-mer
             */
            static kmer deserialize(std::istream& is);

            /**
             * @brief Encode a single nucleotide to its 2-bit representation.
             *
             * @param base Nucleotide character (A, C, G, T - case insensitive)
             * @return 2-bit encoding (0-3)
             * @throws std::invalid_argument if base is not A, C, G, or T
             */
            static uint8_t encode_base(char base);

            /**
             * @brief Decode a 2-bit value to its nucleotide character.
             *
             * @param encoding 2-bit encoding (0-3)
             * @return Nucleotide character (A, C, G, or T)
             */
            static char decode_base(uint8_t encoding);

            /**
             * @brief Check if a sequence contains only valid nucleotides.
             *
             * @param sequence DNA sequence to validate
             * @return true if sequence contains only A, C, G, T (case insensitive)
             */
            static bool is_valid(std::string_view sequence);

        private:
            uint64_t encoding;  ///< 2-bit encoded k-mer (A=00, C=01, G=10, T=11)
            uint8_t k;          ///< Length of the k-mer (1-32)
    };
}

#endif // GENOGROVE_DATA_TYPE_KMER_HPP