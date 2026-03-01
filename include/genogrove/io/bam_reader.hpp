/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_BAMREADER_HPP
#define GENOGROVE_IO_BAMREADER_HPP

// standard
#include <string>
#include <filesystem>
#include <optional>
#include <vector>
#include <variant>
#include <unordered_map>
#include <cstdint>

// genogrove
#include <genogrove/io/file_reader.hpp>
#include <genogrove/data_type/all.hpp>

// htslib
#include <htslib/sam.h>
#include <htslib/hts.h>

namespace gdt = genogrove::data_type;

namespace genogrove::io {

    /**
     * @brief SAM/BAM flag bit values.
     *
     * These constants represent the individual flag bits in the SAM FLAG field.
     * Use these with alignment_flags::has_flag() for custom flag checks.
     */
    struct sam_flags {
        static constexpr uint16_t PAIRED = 0x1;              ///< Template has multiple segments
        static constexpr uint16_t PROPER_PAIR = 0x2;         ///< Each segment properly aligned
        static constexpr uint16_t UNMAPPED = 0x4;            ///< Segment unmapped
        static constexpr uint16_t MATE_UNMAPPED = 0x8;       ///< Next segment unmapped
        static constexpr uint16_t REVERSE = 0x10;            ///< SEQ on reverse strand
        static constexpr uint16_t MATE_REVERSE = 0x20;       ///< SEQ of next segment reversed
        static constexpr uint16_t READ1 = 0x40;              ///< First segment in template
        static constexpr uint16_t READ2 = 0x80;              ///< Last segment in template
        static constexpr uint16_t SECONDARY = 0x100;         ///< Secondary alignment
        static constexpr uint16_t QCFAIL = 0x200;            ///< Not passing filters
        static constexpr uint16_t DUPLICATE = 0x400;         ///< PCR or optical duplicate
        static constexpr uint16_t SUPPLEMENTARY = 0x800;     ///< Supplementary alignment
    };

    /**
     * @brief Wrapper class for SAM/BAM alignment flags.
     *
     * Provides convenient methods to query individual flag bits.
     */
    class alignment_flags {
    public:
        alignment_flags() : flags_(0) {}
        explicit alignment_flags(uint16_t flags) : flags_(flags) {}

        /// Get the raw flag value
        [[nodiscard]] uint16_t value() const { return flags_; }

        /// Check if a specific flag bit is set
        [[nodiscard]] bool has_flag(uint16_t flag) const { return (flags_ & flag) != 0; }

        // Convenience methods for common flag checks
        [[nodiscard]] bool is_paired() const { return has_flag(sam_flags::PAIRED); }
        [[nodiscard]] bool is_proper_pair() const { return has_flag(sam_flags::PROPER_PAIR); }
        [[nodiscard]] bool is_unmapped() const { return has_flag(sam_flags::UNMAPPED); }
        [[nodiscard]] bool is_mate_unmapped() const { return has_flag(sam_flags::MATE_UNMAPPED); }
        [[nodiscard]] bool is_reverse() const { return has_flag(sam_flags::REVERSE); }
        [[nodiscard]] bool is_mate_reverse() const { return has_flag(sam_flags::MATE_REVERSE); }
        [[nodiscard]] bool is_read1() const { return has_flag(sam_flags::READ1); }
        [[nodiscard]] bool is_read2() const { return has_flag(sam_flags::READ2); }
        [[nodiscard]] bool is_secondary() const { return has_flag(sam_flags::SECONDARY); }
        [[nodiscard]] bool is_qc_fail() const { return has_flag(sam_flags::QCFAIL); }
        [[nodiscard]] bool is_duplicate() const { return has_flag(sam_flags::DUPLICATE); }
        [[nodiscard]] bool is_supplementary() const { return has_flag(sam_flags::SUPPLEMENTARY); }

    private:
        uint16_t flags_;
    };

    /**
     * @brief CIGAR operation codes.
     *
     * These correspond to the BAM_CMATCH, BAM_CINS, etc. constants from htslib.
     */
    enum class cigar_op : uint8_t {
        MATCH = 0,      ///< M - Alignment match (can be sequence match or mismatch)
        INS = 1,        ///< I - Insertion to the reference
        DEL = 2,        ///< D - Deletion from the reference
        REF_SKIP = 3,   ///< N - Skipped region from the reference (e.g., intron)
        SOFT_CLIP = 4,  ///< S - Soft clipping (clipped sequences present in SEQ)
        HARD_CLIP = 5,  ///< H - Hard clipping (clipped sequences NOT present in SEQ)
        PAD = 6,        ///< P - Padding (silent deletion from padded reference)
        SEQ_MATCH = 7,  ///< = - Sequence match
        SEQ_MISMATCH = 8 ///< X - Sequence mismatch
    };

    /**
     * @brief A single CIGAR operation with its operation type and length.
     */
    struct cigar_element {
        cigar_op op;        ///< CIGAR operation type
        uint32_t length;    ///< Number of bases for this operation

        cigar_element() : op(cigar_op::MATCH), length(0) {}
        cigar_element(cigar_op op, uint32_t length) : op(op), length(length) {}

        /// Check if this operation consumes reference bases
        [[nodiscard]] bool consumes_reference() const {
            return op == cigar_op::MATCH || op == cigar_op::DEL ||
                   op == cigar_op::REF_SKIP || op == cigar_op::SEQ_MATCH ||
                   op == cigar_op::SEQ_MISMATCH;
        }

        /// Check if this operation consumes query (read) bases
        [[nodiscard]] bool consumes_query() const {
            return op == cigar_op::MATCH || op == cigar_op::INS ||
                   op == cigar_op::SOFT_CLIP || op == cigar_op::SEQ_MATCH ||
                   op == cigar_op::SEQ_MISMATCH;
        }

        /// Convert operation to character representation
        [[nodiscard]] char to_char() const {
            static constexpr char ops[] = "MIDNSHP=X";
            return ops[static_cast<uint8_t>(op)];
        }
    };

    /// Type alias for a CIGAR string (vector of cigar_element)
    using cigar_string = std::vector<cigar_element>;

    /**
     * @brief Information about the mate read in a paired-end alignment.
     */
    struct mate_info {
        std::string chrom;      ///< Reference name of the mate (RNEXT), empty if "*"
        int64_t position;       ///< 0-based position of mate (PNEXT), -1 if unavailable
        int64_t insert_size;    ///< Observed template length (TLEN)

        mate_info() : position(-1), insert_size(0) {}
        mate_info(std::string chrom, int64_t pos, int64_t isize)
            : chrom(std::move(chrom)), position(pos), insert_size(isize) {}
    };

    /// Variant type for SAM tag values
    using sam_tag_value = std::variant<
        char,               // 'A' - printable character
        int64_t,            // 'i' - signed integer (various sizes)
        float,              // 'f' - single-precision float
        std::string,        // 'Z' - printable string, 'H' - hex string
        std::vector<int8_t>,    // 'B:c' - array of int8
        std::vector<uint8_t>,   // 'B:C' - array of uint8
        std::vector<int16_t>,   // 'B:s' - array of int16
        std::vector<uint16_t>,  // 'B:S' - array of uint16
        std::vector<int32_t>,   // 'B:i' - array of int32
        std::vector<uint32_t>,  // 'B:I' - array of uint32
        std::vector<float>      // 'B:f' - array of float
    >;

    /**
     * @brief A single SAM auxiliary tag.
     */
    struct sam_tag {
        std::string key;        ///< Two-character tag name (e.g., "NH", "RG")
        sam_tag_value value;    ///< Tag value

        sam_tag() = default;
        sam_tag(std::string key, sam_tag_value value)
            : key(std::move(key)), value(std::move(value)) {}
    };

    /// Type alias for SAM tag map
    using sam_tags = std::unordered_map<std::string, sam_tag_value>;

    /**
     * @brief Configuration options for the BAM reader.
     */
    struct bam_reader_options {
        bool skip_unmapped = true;          ///< Skip unmapped reads (default: true)
        bool skip_secondary = false;        ///< Skip secondary alignments
        bool skip_supplementary = false;    ///< Skip supplementary alignments
        bool skip_qc_fail = false;          ///< Skip QC-failed reads
        bool skip_duplicates = false;       ///< Skip duplicate reads
        uint8_t min_mapq = 0;               ///< Minimum mapping quality (0 = no filter)

        /// Factory method for default options (skip unmapped only)
        [[nodiscard]] static bam_reader_options defaults() {
            return bam_reader_options{};
        }

        /// Factory method to include all reads
        [[nodiscard]] static bam_reader_options include_all() {
            bam_reader_options opts;
            opts.skip_unmapped = false;
            return opts;
        }

        /// Factory method for primary alignments only
        [[nodiscard]] static bam_reader_options primary_only() {
            bam_reader_options opts;
            opts.skip_secondary = true;
            opts.skip_supplementary = true;
            return opts;
        }

        /// Factory method for high-quality primary alignments
        [[nodiscard]] static bam_reader_options high_quality(uint8_t min_mapq = 20) {
            bam_reader_options opts;
            opts.skip_secondary = true;
            opts.skip_supplementary = true;
            opts.skip_qc_fail = true;
            opts.skip_duplicates = true;
            opts.min_mapq = min_mapq;
            return opts;
        }
    };

    /**
     * @brief Represents a single SAM/BAM alignment record.
     *
     * This struct encapsulates all fields from a SAM/BAM alignment record,
     * including the read name, reference sequence, alignment coordinates,
     * CIGAR string, sequence, quality scores, and auxiliary tags.
     */
    struct sam_entry {
        std::string qname;              ///< Query template NAME (read name)
        std::string chrom;              ///< Reference sequence name (RNAME)
        gdt::interval interval;         ///< Genomic interval computed from POS + CIGAR
        alignment_flags flags;          ///< Bitwise FLAG
        uint8_t mapq;                   ///< Mapping quality (0-255)
        cigar_string cigar;             ///< CIGAR string (alignment operations)
        std::string sequence;           ///< Read sequence (SEQ)
        std::string quality;            ///< ASCII quality scores (QUAL)
        std::optional<mate_info> mate;  ///< Mate information for paired reads
        sam_tags tags;                  ///< Auxiliary tags

        sam_entry() : mapq(0) {}

        /// Get strand character based on FLAG
        [[nodiscard]] char get_strand() const {
            if (flags.is_unmapped()) return '.';
            return flags.is_reverse() ? '-' : '+';
        }

        /// Check if this is a primary alignment
        [[nodiscard]] bool is_primary() const {
            return !flags.is_secondary() && !flags.is_supplementary();
        }

        /// Check if this read is mapped
        [[nodiscard]] bool is_mapped() const {
            return !flags.is_unmapped();
        }

        /// Convert CIGAR to string representation
        [[nodiscard]] std::string cigar_string_repr() const {
            std::string result;
            for (const auto& elem : cigar) {
                result += std::to_string(elem.length) + elem.to_char();
            }
            return result.empty() ? "*" : result;
        }
    };

    /**
     * @brief Reader for SAM and BAM alignment files.
     *
     * This class provides iteration over alignments in SAM and BAM files using htslib.
     * It transparently handles both formats and supports filtering options.
     *
     * ## Usage
     *
     * **Modern approach (recommended)**:
     * ```cpp
     * bam_reader reader(filepath);
     * for (const auto& entry : reader) {
     *     grove.insert_data(entry.chrom, entry.interval, entry);
     * }
     * ```
     *
     * **With filtering options**:
     * ```cpp
     * bam_reader reader(filepath, bam_reader_options::primary_only());
     * for (const auto& entry : reader) {
     *     // Only primary alignments
     * }
     * ```
     *
     * **Traditional approach**:
     * ```cpp
     * bam_reader reader(filepath);
     * sam_entry entry;
     * while (reader.read_next(entry)) {
     *     grove.insert_data(entry.chrom, entry.interval, entry);
     * }
     * ```
     *
     * ## File Format Support
     * - SAM: Text format (.sam)
     * - BAM: Binary format (.bam)
     * - CRAM: Reference-compressed format (.cram) - requires reference
     *
     * @note File format is auto-detected by htslib
     */
    class bam_reader : public file_reader<sam_entry> {
    public:
        /**
         * @brief Construct a BAM reader with default options.
         *
         * Default options skip unmapped reads. The file format (SAM/BAM/CRAM)
         * is automatically detected.
         *
         * @param path Path to the SAM/BAM file
         * @throws std::runtime_error if file cannot be opened or is invalid
         */
        explicit bam_reader(const std::filesystem::path& path);

        /**
         * @brief Construct a BAM reader with custom options.
         *
         * @param path Path to the SAM/BAM file
         * @param options Reader configuration options
         * @throws std::runtime_error if file cannot be opened or is invalid
         */
        bam_reader(const std::filesystem::path& path, const bam_reader_options& options);

        /**
         * @brief Read the next alignment record.
         *
         * Reads the next alignment from the file, applying configured filters.
         * Skipped records (based on options) are automatically bypassed.
         *
         * @param entry Output parameter for the alignment record
         * @return true if a record was successfully read, false at EOF or error
         */
        bool read_next(sam_entry& entry) override;

        /**
         * @brief Check if more records are available.
         *
         * @return true if more records may be available
         * @note This is a best-effort check; read_next() is authoritative
         */
        bool has_next() override;

        /**
         * @brief Get the last error message.
         *
         * @return Error message string, empty if no error
         */
        std::string get_error_message() override;

        /**
         * @brief Get the current record number (1-based).
         *
         * @return Number of records read so far
         */
        size_t get_current_line() override;

        /**
         * @brief Get the SAM header text.
         *
         * @return Full header text including all @HD, @SQ, @RG, @PG lines
         */
        [[nodiscard]] const std::string& get_header() const;

        /**
         * @brief Get the list of reference sequence names.
         *
         * @return Vector of reference names from the header
         */
        [[nodiscard]] const std::vector<std::string>& get_reference_names() const;

        /// Move constructor
        bam_reader(bam_reader&& other) noexcept;

        /// Move assignment operator
        bam_reader& operator=(bam_reader&& other) noexcept;

        // Disable copy
        bam_reader(const bam_reader&) = delete;
        bam_reader& operator=(const bam_reader&) = delete;

        ~bam_reader() override;

    private:
        samFile* sam_file_;             ///< htslib file handle
        bam_hdr_t* header_;             ///< SAM header
        bam1_t* alignment_;             ///< Reusable alignment record
        bam_reader_options options_;    ///< Reader options
        std::string header_text_;       ///< Cached header text
        std::vector<std::string> ref_names_; ///< Reference sequence names
        size_t record_num_;             ///< Current record number
        std::string error_message_;     ///< Last error message
        bool at_eof_;                   ///< EOF flag

        /// Apply filters and check if record should be skipped
        bool should_skip(const bam1_t* b) const;

        /// Parse alignment record into sam_entry
        bool parse_alignment(const bam1_t* b, sam_entry& entry);

        /// Compute reference interval from position and CIGAR
        gdt::interval compute_interval(int64_t pos, const bam1_t* b) const;

        /// Parse CIGAR string from bam1_t
        cigar_string parse_cigar(const bam1_t* b) const;

        /// Parse auxiliary tags from bam1_t
        sam_tags parse_tags(const bam1_t* b) const;

        /// Clean up htslib resources
        void cleanup();
    };

} // namespace genogrove::io

#endif // GENOGROVE_IO_BAMREADER_HPP
