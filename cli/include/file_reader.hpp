/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_FILEREADER_HPP
#define GENOGROVE_CLI_FILEREADER_HPP

// genogrove
// #include <genogrove/data_type/interval.hpp>

// cli
#include "file_entry.hpp"

class file_reader {
    public:
        virtual bool read_next(file_entry& entry) = 0;
        virtual bool has_next() = 0;
        virtual std::string get_error_message() = 0;
        virtual size_t get_current_line() = 0;
        virtual ~file_reader() = default;
};


#endif //GENOGROVE_CLI_FILEREADER_HPP