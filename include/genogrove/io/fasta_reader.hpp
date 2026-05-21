/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_FASTA_READER_HPP
#define GENOGROVE_IO_FASTA_READER_HPP

// standard
#include <string>
#include <filesystem>
#include <optional>

// genogrove
#include <genogrove/io/file_reader.hpp>

// forward-declare opaque zlib type to keep kseq.h out of the header
typedef struct gzFile_s* gzFile;

namespace genogrove::io {

    /**
     * @brief Represents a single FASTA or FASTQ sequence record.
     *
     * For FASTA records the quality field is empty (nullopt).
     * For FASTQ records it contains the per-base quality string.
     */
    struct fasta_entry {
        std::string name;                       ///< Sequence name (text after > or @, up to first whitespace)
        std::string comment;                    ///< Optional description (rest of header line after name)
        std::string sequence;                   ///< Nucleotide sequence
        std::optional<std::string> quality;     ///< Per-base quality string (FASTQ only, nullopt for FASTA)

        fasta_entry() = default;
        fasta_entry(std::string name, std::string sequence)
            : name(std::move(name)), sequence(std::move(sequence)) {}
    };

    /**
     * @brief Configuration options for the sequence reader.
     *
     * Options can be set via C++20 designated initializers at construction:
     * ```cpp
     * fasta_reader reader(path, {.skip_empty_sequences = true});
     * ```
     */
    struct fasta_reader_options {
        bool skip_empty_sequences = false;      ///< Skip records with empty sequence strings

        [[nodiscard]] static fasta_reader_options defaults() { return {}; }
    };

    /**
     * @brief Reader for FASTA and FASTQ sequence files.
     *
     * Uses htslib's kseq parser to transparently handle both FASTA and FASTQ
     * formats, including gzip-compressed files.
     *
     * ## Usage
     *
     * ```cpp
     * fasta_reader reader(filepath);
     * for (const auto& entry : reader) {
     *     std::cout << entry.name << ": " << entry.sequence.size() << " bp\n";
     * }
     * if (!reader.get_error_message().empty()) {
     *     std::cerr << reader.get_error_message() << "\n";
     * }
     * ```
     *
     * ## File Format Support
     * - FASTA: .fa, .fasta, .fna (and .gz variants)
     * - FASTQ: .fq, .fastq, .fnq (and .gz variants)
     *
     * @note Format is auto-detected by kseq (works with any mix of > and @ headers).
     */
    class fasta_reader : public file_reader<fasta_entry> {
    public:
        explicit fasta_reader(const std::filesystem::path& path);
        fasta_reader(const std::filesystem::path& path, const fasta_reader_options& options);

        // Non-copyable (owns raw gzFile and kseq_t resources)
        fasta_reader(const fasta_reader&) = delete;
        fasta_reader& operator=(const fasta_reader&) = delete;

        // Movable
        fasta_reader(fasta_reader&& other) noexcept;
        fasta_reader& operator=(fasta_reader&& other) noexcept;

        bool read_next(fasta_entry& entry) override;
        bool has_next() override;
        std::string get_error_message() const override;
        size_t get_current_line() const override;
        ~fasta_reader() override;

    private:
        gzFile gz_file;
        void* kseq;                ///< Opaque pointer to kseq_t (macro-generated type)
        size_t record_num;
        std::string error_message;
        bool at_eof;
        fasta_reader_options options;

        void cleanup();
    };

} // namespace genogrove::io

#endif // GENOGROVE_IO_FASTA_READER_HPP
