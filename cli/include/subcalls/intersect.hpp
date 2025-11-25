/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_INTERSECT_HPP
#define GENOGROVE_CLI_INTERSECT_HPP

// standard
#include <iostream>

// genogrove
#include <genogrove/structure/all.hpp>

// cli
#include "subcall.hpp"
#include "file_reader_factory.hpp"
#include "filetype_detector.hpp"

// cxxopts
#include "cxxopts.hpp"

namespace ggt = genogrove::data_type;
namespace ggs = genogrove::structure;

namespace subcalls {
    class intersect : public subcall {
    public:
        cxxopts::Options parse_args(int argc, char** argv) override;
        void execute(const cxxopts::ParseResult& args) override;
        void validate(const cxxopts::ParseResult& args) override;
    };
}


#endif //GENOGROVE_CLI_INTERSECT_HPP
