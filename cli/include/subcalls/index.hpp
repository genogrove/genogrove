/*
 * SPDX-License-Identifier: GPL-3.0-or-later
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


// CXXopts
#include <cxxopts.hpp>

namespace subcalls {
    class index : public subcall {
        public:
            cxxopts::Options parse_args(int argc, char** argv) override;
            void execute(const cxxopts::ParseResult& args) override;
            void validate(const cxxopts::ParseResult& args) override;
};

}


#endif //GENOGROVE_CLI_INDEX_HPP
