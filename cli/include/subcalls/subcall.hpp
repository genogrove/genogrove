/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_SUBCALL_HPP
#define GENOGROVE_CLI_SUBCALL_HPP

#include <cxxopts.hpp>

namespace subcalls {
    class subcall {
    public:
        virtual cxxopts::Options build_options() = 0;
        virtual void execute(const cxxopts::ParseResult& args) = 0;
        virtual void validate(const cxxopts::ParseResult& args) = 0;
        virtual ~subcall() = default;
    };
}


#endif //GENOGROVE_CLI_SUBCALL_HPP
