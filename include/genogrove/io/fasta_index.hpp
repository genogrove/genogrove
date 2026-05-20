/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_FASTA_INDEX_HPP
#define GENOGROVE_IO_FASTA_INDEX_HPP

// standard
#include <string>
#include <filesystem>

// htslib
#include <htslib/faidx.h>

namespace genogrove::io {

    /**
     * @brief Indexed random-access reader for FASTA files.
     *
     * Wraps htslib's faidx API to provide efficient region-based sequence
     * retrieval from FASTA files. Automatically creates the `.fai` index
     * if it does not exist.
     *
     * Coordinates follow the 0-based half-open convention used by BED/BAM:
     * `fetch("chr1", 100, 200)` returns bases at positions 100..199.
     *
     * ## Usage
     *
     * ```cpp
     * fasta_index fasta("genome.fa");
     *
     * // Fetch a region (0-based half-open)
     * std::string seq = fasta.fetch("chr1", 1000, 2000);
     *
     * // Fetch entire sequence
     * std::string full = fasta.fetch("chrM");
     *
     * // Query index
     * for (size_t i = 0; i < fasta.sequence_count(); ++i) {
     *     std::cout << fasta.sequence_name(i) << ": "
     *               << fasta.sequence_length(fasta.sequence_name(i)) << " bp\n";
     * }
     * ```
     *
     * ## GTF + FASTA usage
     *
     * ```cpp
     * // GFF uses 1-based inclusive coordinates
     * std::string seq = fasta.fetch(gff_entry.seqid, gff_entry.start - 1, gff_entry.end);
     * ```
     *
     * @note Non-copyable, movable. The `.fai` index file is created on first
     *       use if missing (requires write permission to the FASTA directory).
     */
    class fasta_index {
    public:
        /**
         * @brief Open a FASTA file and load (or create) its index.
         *
         * @param path Path to the FASTA file (.fa, .fasta, .fna)
         * @throws std::runtime_error if file cannot be opened or indexed
         */
        explicit fasta_index(const std::filesystem::path& path);

        // Non-copyable
        fasta_index(const fasta_index&) = delete;
        fasta_index& operator=(const fasta_index&) = delete;

        // Movable
        fasta_index(fasta_index&& other) noexcept;
        fasta_index& operator=(fasta_index&& other) noexcept;

        ~fasta_index();

        /**
         * @brief Fetch a subsequence by region.
         *
         * @param name Sequence name (e.g., "chr1")
         * @param start 0-based start position (inclusive)
         * @param end 0-based end position (exclusive)
         * @return The nucleotide sequence for the region
         * @throws std::out_of_range if name is not in the index, or the region
         *         is invalid (start >= end, or exceeds htslib's coordinate limit)
         * @throws std::runtime_error on fetch failure
         */
        [[nodiscard]] std::string fetch(const std::string& name, size_t start, size_t end) const;

        /**
         * @brief Fetch an entire sequence by name.
         *
         * @param name Sequence name (e.g., "chr1")
         * @return The full nucleotide sequence
         * @throws std::out_of_range if name is not in the index
         * @throws std::runtime_error on fetch failure
         */
        [[nodiscard]] std::string fetch(const std::string& name) const;

        /**
         * @brief Get the number of sequences in the index.
         */
        [[nodiscard]] size_t sequence_count() const;

        /**
         * @brief Get the name of the i-th sequence (0-based).
         *
         * @param index 0-based sequence index
         * @throws std::out_of_range if index >= sequence_count()
         */
        [[nodiscard]] std::string sequence_name(size_t index) const;

        /**
         * @brief Get the length of a sequence by name.
         *
         * @param name Sequence name
         * @throws std::out_of_range if name is not in the index
         */
        [[nodiscard]] size_t sequence_length(const std::string& name) const;

        /**
         * @brief Check if a sequence name is in the index.
         */
        [[nodiscard]] bool has_sequence(const std::string& name) const;

    private:
        faidx_t* fai_;

        void cleanup();
    };

} // namespace genogrove::io

#endif // GENOGROVE_IO_FASTA_INDEX_HPP