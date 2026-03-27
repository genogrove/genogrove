/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_CLI_SUBCALL_HPP
#define GENOGROVE_CLI_SUBCALL_HPP

#include <cxxopts.hpp>

namespace subcalls {
    class subcall {
    public:
        virtual cxxopts::Options parse_args(int argc, char** argv) = 0;
        virtual void execute(const cxxopts::ParseResult& args) = 0;
        virtual void validate(const cxxopts::ParseResult& args) = 0;
        virtual ~subcall() = default;
    };
}


#endif //GENOGROVE_CLI_SUBCALL_HPP
