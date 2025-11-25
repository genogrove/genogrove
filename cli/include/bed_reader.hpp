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

class bed_reader : public file_reader {
public:
    bed_reader(const std::filesystem::path& path);
    bool read_next(file_entry& entry) override;
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
