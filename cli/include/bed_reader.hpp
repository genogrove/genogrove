/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_CLI_BEDREADER_HPP
#define GENOGROVE_CLI_BEDREADER_HPP

// standard
#include <string>
#include <filesystem>
#include <optional>
#include <istream>
#include <fstream>
#include <algorithm>

// genogrove
#include <file_reader.hpp>
#include <genogrove/data_type/all.hpp>
// #include <genogrove/data_type/interval.hpp>

// zlib
#include <zlib.h>
#include <sstream>

// htslib
#include <htslib/hts.h>
#include <htslib/bgzf.h>
#include <htslib/kseq.h>
#include <htslib/kstring.h>

// namespace gdt = genogrove::data_type;
namespace ggt = genogrove::data_type;

struct bed_entry {
    std::string chrom;
    ggt::interval interval;

    // optional BED fields (for BED4+)
    std::optional<std::string> name; // name of the line in the BED
    std::optional<int> score; // score between 0 and 1000
    std::optional<char> strand; // DNA strand orientation (positive ["+"] or negative ["-"] or "." if no strand)
    std::optional<int> thick_start; // start of the "thick" part of the block (zero based, inclusive)
    std::optional<int> thick_end; // end of the "thick" part of the block (zero based, exclusive)
    std::optional<std::string> item_rgb; // RGB value of item (e.g. "255,0,0")
    std::optional<std::string> block_count; // Number of blocks (i.e. split items) in a multi-block feature
    std::optional<std::string> block_sizes; // Comma separated list of block lengths
    std::optional<std::string> block_starts; // Comma separated list of block starts

    // constructor
    bed_entry() = default;
    bed_entry(std::string chrom, ggt::interval interval) : chrom(chrom), interval(interval) {}
};

class bed_reader : public file_reader<bed_entry> {
public:
    bed_reader(const std::filesystem::path& path);
    bool read_next(bed_entry& entry) override;
    bool has_next() override;
    std::string get_error_message() override;
    size_t get_current_line() override;
    ~bed_reader();

private:
    BGZF* bgzf_file;
    size_t line_num;
    std::string error_message;
};


#endif //GENOGROVE_CLI_BEDREADER_HPP
