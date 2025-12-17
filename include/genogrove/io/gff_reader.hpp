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

struct gff_entry {
    std::string seqid;              // chromosome/contig name
    std::string source;             // source of the feature
    std::string type;               // feature type (gene, exon, CDS, etc.)
    gdt::interval interval;         // start and end positions (converted to 0-based)
    std::optional<double> score;    // score (if not '.')
    std::optional<char> strand;     // strand (+, -, ., or ?)
    std::optional<int> phase;       // phase for CDS features (0, 1, or 2)
    std::map<std::string, std::string> attributes;  // key-value pairs from column 9

    gff_entry() = default;
    gff_entry(std::string seqid, gdt::interval interval, std::string type)
        : seqid(seqid), interval(interval), type(type) {}
};

class gff_reader : public file_reader<gff_entry> {
public:
    gff_reader(const std::filesystem::path& path);
    bool read_next(gff_entry& entry) override;
    bool has_next() override;
    std::string get_error_message() override;
    size_t get_current_line() override;
    ~gff_reader() override;

private:
    BGZF* bgzf_file;
    size_t line_num;
    std::string error_message;

    // Helper to parse attributes (handles both GFF3 and GTF formats)
    void parse_attributes(const std::string& attr_string, std::map<std::string, std::string>& attributes);
};

#endif //GENOGROVE_IO_GFFREADER_HPP