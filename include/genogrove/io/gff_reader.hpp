/*
* SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_IO_GFFREADER_HPP
#define GENOGROVE_IO_GFFREADER_HPP

// standard
#include <string>
#include <filesystem>
#include <optional>
#include <map>

// genogrove
#include <genogrove/io/file_reader.hpp>
#include <genogrove/data_type/all.hpp>

// htslib
#include <htslib/bgzf.h>

namespace gdt = genogrove::data_type;

// Format type detected during parsing
enum class gff_format {
    GFF3,       // GFF3 format (key=value attributes)
    GTF,        // GTF/GTF2 format (key "value" attributes)
    UNKNOWN     // Format not yet determined
};

// Validation mode for attribute parsing
enum class validation_mode {
    RELAXED,    // Accept both GFF3 and GTF formats
    STRICT_GFF3,// Require GFF3 format (key=value)
    STRICT_GTF  // Require GTF format and mandatory fields
};

struct gff_entry {
    std::string seqid;              // chromosome/contig name
    std::string source;             // source of the feature
    std::string type;               // feature type (gene, exon, CDS, etc.)
    gdt::interval interval;         // start and end positions (converted to 0-based)
    std::optional<double> score;    // score (if not '.')
    std::optional<char> strand;     // strand (+, -, ., or ?)
    std::optional<int> phase;       // phase for CDS features (0, 1, or 2)
    std::map<std::string, std::string> attributes;  // key-value pairs from column 9
    gff_format format;              // detected format (GFF3 or GTF)

    gff_entry() : format(gff_format::UNKNOWN) {}
    gff_entry(std::string seqid, gdt::interval interval, std::string type)
        : seqid(seqid), interval(interval), type(type), format(gff_format::UNKNOWN) {}

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
    std::optional<std::string> get_attribute(const std::string& key) const;

    // Check if this entry is in GTF format
    bool is_gtf() const { return format == gff_format::GTF; }

    // Check if this entry is in GFF3 format
    bool is_gff3() const { return format == gff_format::GFF3; }
};

class gff_reader : public file_reader<gff_entry> {
public:
    // Constructor with optional validation mode (default: RELAXED)
    gff_reader(const std::filesystem::path& path, validation_mode mode = validation_mode::RELAXED);

    bool read_next(gff_entry& entry) override;
    bool has_next() override;
    std::string get_error_message() override;
    size_t get_current_line() override;
    ~gff_reader() override;

    // Get the validation mode being used
    validation_mode get_validation_mode() const { return validation_mode_; }

    // Set validation mode (can be changed during reading)
    void set_validation_mode(validation_mode mode) { validation_mode_ = mode; }

private:
    BGZF* bgzf_file;
    size_t line_num;
    std::string error_message;
    validation_mode validation_mode_;

    // Helper to parse attributes (handles both GFF3 and GTF formats)
    // Returns the detected format
    gff_format parse_attributes(const std::string& attr_string, std::map<std::string, std::string>& attributes);

    // Validate GTF-specific requirements (gene_id and transcript_id for most features)
    bool validate_gtf_attributes(const gff_entry& entry);
};

#endif //GENOGROVE_IO_GFFREADER_HPP