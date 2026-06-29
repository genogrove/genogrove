/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_VCFREADER_HPP
#define GENOGROVE_IO_VCFREADER_HPP

// standard
#include <cstdint>
#include <filesystem>
#include <optional>
#include <string>
#include <unordered_map>
#include <utility>
#include <variant>
#include <vector>

// genogrove
#include <genogrove/io/file_reader.hpp>

// htslib
#include <htslib/vcf.h>

namespace genogrove::io {

    /**
     * @brief Value of a single INFO field.
     *
     * VCF INFO fields are typed in the header (Flag / Integer / Float /
     * String / Character). The variant mirrors those types:
     * - `bool` for Flag fields (always `true` when present)
     * - `std::vector<int32_t>` for Integer (Number>1 yields multiple values)
     * - `std::vector<float>` for Float
     * - `std::string` for String / Character (htslib comma-joins multi-valued
     *   strings; split on ',' if you need the individual values)
     */
    using vcf_info_value = std::variant<
        bool,                   // Flag
        std::vector<int32_t>,   // Integer
        std::vector<float>,     // Float
        std::string             // String / Character
    >;

    /// Map of INFO field name -> value.
    using vcf_info = std::unordered_map<std::string, vcf_info_value>;

    /**
     * @brief Value of a single per-sample FORMAT field (excluding GT).
     *
     * GT is decoded separately into sample_genotype::gt_alleles. All other
     * FORMAT fields are typed in the header and stored here per sample.
     */
    using vcf_format_value = std::variant<
        std::vector<int32_t>,   // Integer
        std::vector<float>,     // Float
        std::string             // String / Character
    >;

    /**
     * @brief Genotype and FORMAT data for one sample at one record.
     */
    struct sample_genotype {
        /// Decoded GT allele indices: 0 = REF, 1.. = ALT index, -1 = missing ('.').
        /// Empty when the record has no GT field.
        std::vector<int32_t> gt_alleles;
        /// Whether the genotype is phased (the '|' separator). Only meaningful
        /// when gt_alleles has more than one allele.
        bool phased = false;
        /// True if a GT field was present for this sample.
        bool has_gt = false;
        /// All other FORMAT fields keyed by tag (e.g. "DP", "GQ"). Excludes GT.
        std::unordered_map<std::string, vcf_format_value> fields;

        /// Render GT as a VCF-style string ("0/1", "0|1", "./.", "" if no GT).
        [[nodiscard]] std::string gt_string() const {
            if (!has_gt) return {};
            std::string result;
            const char sep = phased ? '|' : '/';
            for (size_t i = 0; i < gt_alleles.size(); ++i) {
                if (i > 0) result += sep;
                result += (gt_alleles[i] < 0) ? std::string(".")
                                              : std::to_string(gt_alleles[i]);
            }
            return result;
        }

        /// True if every called allele is the reference (all zero). A missing
        /// genotype ('.') is not homozygous reference.
        [[nodiscard]] bool is_hom_ref() const {
            if (!has_gt || gt_alleles.empty()) return false;
            for (int32_t a : gt_alleles) {
                if (a != 0) return false;
            }
            return true;
        }
    };

    /**
     * @brief A single VCF/BCF record.
     *
     * Coordinates follow the same convention as the other genogrove readers:
     * `start`/`end` are 0-based half-open, decoupled from `gdt::interval`.
     * VCF POS is 1-based in the file; htslib exposes it as a 0-based position,
     * so `start = POS - 1` and `end = start + len(REF)` (htslib `rlen`).
     * Convert to grove's closed interval via `gdt::interval(start, end - 1)`.
     */
    struct vcf_entry {
        std::string chrom;                  ///< CHROM (contig name)
        size_t start = 0;                   ///< 0-based start (htslib pos)
        size_t end = 0;                     ///< 0-based exclusive end (pos + len(REF))
        std::string id;                     ///< ID, empty when "."
        std::string ref;                    ///< REF allele
        std::vector<std::string> alt;       ///< ALT alleles. Empty for monomorphic records (ALT "."), which htslib collapses to REF only. Symbolic alleles (`<*>`, `<NON_REF>`, `*`) are kept verbatim; is_snp()/is_indel() ignore them.
        float qual = 0.0f;                  ///< QUAL score (valid only if !qual_missing)
        bool qual_missing = true;           ///< True when QUAL is "." (missing)
        std::vector<std::string> filter;    ///< FILTER entries; ["PASS"] when passed, empty when "."
        vcf_info info;                      ///< INFO fields (populated when options.parse_info)
        std::vector<std::string> format;    ///< FORMAT keys in column order (incl. "GT"); empty unless parse_samples
        std::vector<sample_genotype> samples; ///< Per-sample data, indexed parallel to get_sample_names()

        vcf_entry() = default;

        /// True if FILTER is PASS or unset (".").
        [[nodiscard]] bool passed_filter() const {
            return filter.empty() ||
                   (filter.size() == 1 && filter.front() == "PASS");
        }

        /// True for VCF symbolic / non-sequence ALT alleles — angle-bracket
        /// symbolic (`<DEL>`, `<*>`, `<NON_REF>`), the `*` spanning-deletion
        /// marker, the `.` missing marker, or breakend notation (`[` / `]`).
        /// These are not comparable as plain sequences, so the SNP/indel
        /// predicates below ignore them.
        [[nodiscard]] static bool is_symbolic_allele(const std::string& a) {
            if (a.empty()) return true;
            const char c = a.front();
            if (c == '<' || c == '*' || c == '.') return true;
            return a.find('[') != std::string::npos || a.find(']') != std::string::npos;
        }

        /// True if this is a simple biallelic SNP (single-base sequence REF and ALT).
        [[nodiscard]] bool is_snp() const {
            return ref.size() == 1 && alt.size() == 1 &&
                   alt.front().size() == 1 && !is_symbolic_allele(alt.front());
        }

        /// True if any sequence ALT allele differs in length from REF
        /// (insertion/deletion). Symbolic alleles are ignored.
        [[nodiscard]] bool is_indel() const {
            for (const auto& a : alt) {
                if (!is_symbolic_allele(a) && a.size() != ref.size()) return true;
            }
            return false;
        }
    };

    /**
     * @brief Configuration options for the VCF reader.
     *
     * Set via C++20 designated initializers at construction:
     * ```cpp
     * vcf_reader reader(path, {.parse_samples = false, .skip_filtered = true});
     * ```
     */
    struct vcf_reader_options {
        bool parse_info = true;       ///< Parse INFO fields into vcf_entry::info
        bool parse_samples = true;    ///< Parse FORMAT / per-sample genotype columns
        bool skip_filtered = false;   ///< Skip records whose FILTER is not PASS/"."
        std::string region;           ///< htslib region string ("chr:start-end", 1-based inclusive); empty = read the whole file. Requires a CSI/TBI-indexed bgzip VCF or a BCF.

        /// Factory method for default options.
        [[nodiscard]] static vcf_reader_options defaults() {
            return vcf_reader_options{};
        }

        /// Factory method that parses sites only (no per-sample genotype data).
        [[nodiscard]] static vcf_reader_options sites_only() {
            vcf_reader_options opts;
            opts.parse_samples = false;
            return opts;
        }
    };

    /**
     * @brief Reader for VCF and BCF variant files.
     *
     * Iterates over records in VCF/BCF files using htslib. Plain, bgzip-ed,
     * and binary BCF inputs are all auto-detected by htslib.
     *
     * ## Usage
     * ```cpp
     * vcf_reader reader(filepath);
     * for (const auto& entry : reader) {
     *     grove.insert_data(entry.chrom, gdt::interval(entry.start, entry.end - 1), entry);
     * }
     * // Always check after the loop — the iterator stops on both EOF and error.
     * if (!reader.get_error_message().empty()) { ... }
     * ```
     *
     * @note Not thread-safe (owns raw htslib handles). Movable, non-copyable.
     */
    class vcf_reader : public file_reader<vcf_entry> {
    public:
        /**
         * @brief Construct a VCF reader with default options.
         * @param path Path to the VCF/BCF file
         * @throws std::runtime_error if the file or its header cannot be read
         */
        explicit vcf_reader(const std::filesystem::path& path);

        /**
         * @brief Construct a VCF reader with custom options.
         * @param path Path to the VCF/BCF file
         * @param options Reader configuration options
         * @throws std::runtime_error if the file or its header cannot be read
         */
        vcf_reader(const std::filesystem::path& path, const vcf_reader_options& options);

        /**
         * @brief Read the next variant record.
         *
         * Returns false only at EOF. Throws on a critical htslib read error.
         * When read_next() returns true the entry is fully populated and
         * get_error_message() reads empty.
         *
         * @param entry Output parameter for the record
         * @return true if a record was read, false at EOF
         * @throws std::runtime_error on a critical read error
         */
        bool read_next(vcf_entry& entry) override;

        [[nodiscard]] bool has_next() override;
        [[nodiscard]] std::string get_error_message() const override;

        /**
         * @brief Get the 1-based index of the most recently consumed record.
         *
         * Counts every record read from the file, including records dropped by
         * `skip_filtered`. Zero before the first read_next().
         */
        [[nodiscard]] size_t get_current_line() const override;

        /// Full VCF header text (all `##` meta lines and the `#CHROM` column line).
        [[nodiscard]] const std::string& get_header() const;

        /// Sample names from the header, in column order (empty for sites-only VCFs).
        [[nodiscard]] const std::vector<std::string>& get_sample_names() const;

        /// Contig names declared in the header.
        [[nodiscard]] const std::vector<std::string>& get_contigs() const;

        /// Move constructor
        vcf_reader(vcf_reader&& other) noexcept;
        /// Move assignment operator
        vcf_reader& operator=(vcf_reader&& other) noexcept;

        // Disable copy
        vcf_reader(const vcf_reader&) = delete;
        vcf_reader& operator=(const vcf_reader&) = delete;

        ~vcf_reader() override;

    private:
        htsFile* vcf_file;                  ///< htslib file handle
        bcf_hdr_t* header;                  ///< VCF/BCF header
        bcf1_t* record;                     ///< Reusable record
        hts_idx_t* idx;                     ///< Region index (.csi/.tbi); null in streaming mode (#458)
        hts_itr_t* region_itr;              ///< Region iterator; null in streaming mode (#458)
        vcf_reader_options options;         ///< Reader options
        std::string header_text;            ///< Cached header text
        std::vector<std::string> sample_names; ///< Sample names from the header
        std::vector<std::string> contigs;   ///< Contig names from the header
        size_t record_num;                  ///< Current record number (1-based)
        std::string error_message;          ///< Last error message
        bool at_eof;                        ///< EOF flag

        // Reusable scratch buffers for htslib's bcf_get_* extraction helpers.
        // Held as members so repeated reads reuse one allocation per type.
        int32_t* int_buf;
        int n_int_buf;
        float* float_buf;
        int n_float_buf;
        char* str_buf;
        int n_str_buf;
        int32_t* gt_buf;
        int n_gt_buf;

        /// True if the record's FILTER is not PASS/"." (used by skip_filtered).
        bool is_filtered(bcf1_t* rec) const;

        /// Parse a fully-unpacked bcf1_t into a vcf_entry.
        void parse_record(bcf1_t* rec, vcf_entry& entry);

        /// Parse the INFO column into entry.info.
        void parse_info_fields(bcf1_t* rec, vcf_entry& entry);

        /// Parse FORMAT / per-sample columns (including GT) into entry.samples.
        void parse_samples_fields(bcf1_t* rec, vcf_entry& entry);

        /// Release htslib resources and scratch buffers.
        void cleanup();
    };

} // namespace genogrove::io

#endif // GENOGROVE_IO_VCFREADER_HPP