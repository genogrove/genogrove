/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_CLI_FILE_READER_FACTORY_HPP
#define GENOGROVE_CLI_FILE_READER_FACTORY_HPP

// standard
#include <filesystem>
#include <memory>

// genogrove
#include "file_reader.hpp"
#include "bed_reader.hpp"
#include "filetype_detector.hpp"

using filepath = std::filesystem::path;

class file_reader_factory{
    public:
        static std::unique_ptr<file_reader> create(const filepath& fpath,
                filetype ftype, bool is_gzipped);

};

#endif //GENOGROVE_CLI_FILE_READER_FACTORY_HPP
