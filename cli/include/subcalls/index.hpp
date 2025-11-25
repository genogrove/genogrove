/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_CLI_INDEX_HPP
#define GENOGROVE_CLI_INDEX_HPP

// standard
#include <cstdlib>
#include <filesystem>
#include <iostream>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>

// genogrove-cli
#include <subcalls/subcall.hpp>
#include "file_reader.hpp"
#include "file_reader_factory.hpp"
#include "utility.hpp"


// CXXopts
#include <cxxopts.hpp>

namespace ggs = genogrove::structure;

namespace subcalls {
    class index : public subcall {
        public:
            cxxopts::Options parse_args(int argc, char** argv) override;
            void execute(const cxxopts::ParseResult& args) override;
            void validate(const cxxopts::ParseResult& args) override;
};

}


#endif //GENOGROVE_CLI_INDEX_HPP
