/*
* SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_IO_BEDREADER_HPP
#define GENOGROVE_IO_BEDREADER_HPP

// standard
#include <string>
#include <filesystem>
#include <optional>

// genogrove
#include <genogrove/io/file_reader.hpp>
#include <genogrove/data_type/all.hpp>

// htslib
#include <htslib/bgzf.h>

namespace gdt = genogrove::data_type;

struct bed_entry {
    std::string chrom;
    gdt::interval interval;

    // optional BED fields (for BED4+)
    std::optional<std::string> name;
    std::optional<int> score;
    std::optional<char> strand;
    std::optional<int> thick_start;
    std::optional<int> thick_end;
    std::optional<std::string> item_rgb;
    std::optional<std::string> block_count;
    std::optional<std::string> block_sizes;
    std::optional<std::string> block_starts;

    bed_entry() = default;
    bed_entry(std::string chrom, gdt::interval interval) : chrom(chrom), interval(interval) {}
};

class bed_reader : public file_reader<bed_entry> {
public:
    bed_reader(const std::filesystem::path& path);
    bool read_next(bed_entry& entry) override;
    bool has_next() override;
    std::string get_error_message() override;
    size_t get_current_line() override;
    ~bed_reader() override;

private:
    BGZF* bgzf_file;
    size_t line_num;
    std::string error_message;
};

#endif //GENOGROVE_IO_BEDREADER_HPP
