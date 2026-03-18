/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_IO_GFFREADER_HPP
#define GENOGROVE_IO_GFFREADER_HPP

// standard
#include <string>
#include <string_view>
#include <filesystem>
#include <optional>
#include <map>

// genogrove
#include <genogrove/io/file_reader.hpp>

// htslib
#include <htslib/bgzf.h>

namespace genogrove::io {

    // Format type detected during parsing
    enum class gff_format {
        GFF3,       // GFF3 format (key=value attributes)
        GTF,        // GTF/GTF2 format (key "value" attributes)
        UNKNOWN     // Format not yet determined
    };

    struct gff_entry {
        std::string seqid;              // chromosome/contig name
        std::string source;             // source of the feature
        std::string type;               // feature type (gene, exon, CDS, etc.)
        size_t start = 0;              // 0-based start position (converted from 1-based GFF)
        size_t end = 0;                // 0-based exclusive end position
        std::optional<double> score;    // score (if not '.')
        std::optional<char> strand;     // strand (+, -, ., or ?)
        std::optional<int> phase;       // phase for CDS features (0, 1, or 2)
        std::map<std::string, std::string, std::less<>> attributes;  // key-value pairs from column 9
        gff_format format;              // detected format (GFF3 or GTF)


        gff_entry() : format(gff_format::UNKNOWN) {}
        gff_entry(std::string seqid, size_t start, size_t end, std::string type)
            : seqid(std::move(seqid)), start(start), end(end), type(std::move(type)), format(gff_format::UNKNOWN) {}

        // GTF-specific helper methods
        // Returns the value of the gene_id attribute (GTF standard)
        std::optional<std::string> get_gene_id() const;

        // Returns the value of the transcript_id attribute (GTF standard)
        std::optional<std::string> get_transcript_id() const;

        // Returns the value of the exon_number attribute (GTF standard)
        std::optional<int> get_exon_number() const;

        // Returns the value of the gene_name attribute (GTF common)
        std::optional<std::string> get_gene_name() const;

        // Returns the value of the gene_biotype/gene_type attribute (GTF common)
        std::optional<std::string> get_gene_biotype() const;

        // Generic attribute getter with optional default value
        std::optional<std::string> get_attribute(std::string_view key) const;

        // Check if this entry is in GTF format
        bool is_gtf() const { return format == gff_format::GTF; }

        // Check if this entry is in GFF3 format
        bool is_gff3() const { return format == gff_format::GFF3; }
    };

    /**
     * @brief Configuration options for the GFF reader.
     */
    struct gff_reader_options {
        bool skip_invalid_lines = false;    ///< Skip invalid lines instead of throwing

        [[nodiscard]] static gff_reader_options defaults() { return {}; }
    };

    class gff_reader : public file_reader<gff_entry> {
    public:
        explicit gff_reader(const std::filesystem::path& path);
        gff_reader(const std::filesystem::path& path, const gff_reader_options& options);

        // Non-copyable (owns raw BGZF* resource)
        gff_reader(const gff_reader&) = delete;
        gff_reader& operator=(const gff_reader&) = delete;

        // Movable
        gff_reader(gff_reader&& other) noexcept
            : file_reader<gff_entry>(std::move(other)),
              bgzf_file(other.bgzf_file), line_num(other.line_num),
              error_message(std::move(other.error_message)),
              options_(other.options_) {
            other.bgzf_file = nullptr;
        }
        gff_reader& operator=(gff_reader&& other) noexcept {
            if (this != &other) {
                file_reader<gff_entry>::operator=(std::move(other));
                if (bgzf_file) bgzf_close(bgzf_file);
                bgzf_file = other.bgzf_file;
                line_num = other.line_num;
                error_message = std::move(other.error_message);
                options_ = other.options_;
                other.bgzf_file = nullptr;
            }
            return *this;
        }

        bool read_next(gff_entry& entry) override;
        bool has_next() override;
        std::string get_error_message() const override;
        size_t get_current_line() const override;
        ~gff_reader() override;

    private:
        BGZF* bgzf_file;
        size_t line_num;
        std::string error_message;
        gff_reader_options options_;

        // Helper to parse attributes (handles both GFF3 and GTF formats)
        // Returns the detected format
        gff_format parse_attributes(const std::string& attr_string, std::map<std::string, std::string, std::less<>>& attributes);

        // Helpers for parsing individual GFF fields
        bool parse_score(gff_entry& entry, std::string_view score_str);
        bool parse_strand(gff_entry& entry, std::string_view strand_str);
        bool parse_phase(gff_entry& entry, std::string_view phase_str);
    };

}


#endif //GENOGROVE_IO_GFFREADER_HPP