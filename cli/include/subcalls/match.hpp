/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_MATCH_HPP
#define GENOGROVE_CLI_MATCH_HPP

#include <subcalls/subcall.hpp>

#include <cxxopts.hpp>

namespace subcalls {
    class match : public subcall {
    public:
        cxxopts::Options build_options() override;
        void execute(const cxxopts::ParseResult& args) override;
        void validate(const cxxopts::ParseResult& args) override;
    };
}

#endif //GENOGROVE_CLI_MATCH_HPP
