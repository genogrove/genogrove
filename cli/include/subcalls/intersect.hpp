/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_INTERSECT_HPP
#define GENOGROVE_CLI_INTERSECT_HPP

// standard
#include <iostream>

// genogrove
#include <genogrove/structure/all.hpp>
#include <genogrove/io/filetype_detector.hpp>

// cli
#include "subcall.hpp"

// cxxopts
#include "cxxopts.hpp"

namespace subcalls {
    class intersect : public subcall {
    public:
        cxxopts::Options build_options() override;
        void execute(const cxxopts::ParseResult& args) override;
        void validate(const cxxopts::ParseResult& args) override;
    };
}


#endif //GENOGROVE_CLI_INTERSECT_HPP
