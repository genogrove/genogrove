/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_CLI_FILE_ENTRY_HPP
#define GENOGROVE_CLI_FILE_ENTRY_HPP

// standard
#include <string>

// genogrove
#include <genogrove/data_type/all.hpp>

namespace ggt = genogrove::data_type;

// class
struct file_entry {
    std::string chrom;
    ggt::interval interval;
    char strand;

    file_entry() : chrom{""}, interval{0,0}, strand('.') {}
    file_entry(std::string chrom, ggt::interval interval, char strand) :
        chrom{chrom}, interval{interval}, strand{strand} {}
};

#endif //GENOGROVE_CLI_FILE_ENTRY_HPP
