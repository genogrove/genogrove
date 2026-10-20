/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_SUBCALL_HPP
#define GENOGROVE_CLI_SUBCALL_HPP

#include <stdexcept>
#include <string>

#include <cxxopts.hpp>

namespace subcalls {
    // A B+ tree needs at least three slots per node to split; every subcommand
    // that builds a grove shares this floor and defaults to it.
    constexpr int MIN_TREE_ORDER = 3;
    constexpr int DEFAULT_TREE_ORDER = MIN_TREE_ORDER;

    // Shared -k/--order check for the subcommands that take a tree order.
    inline void validate_tree_order(const cxxopts::ParseResult& args) {
        if(args.count("order") && args["order"].as<int>() < MIN_TREE_ORDER) {
            throw std::runtime_error(
                "Error: order must be at least " + std::to_string(MIN_TREE_ORDER));
        }
    }

    class subcall {
    public:
        virtual cxxopts::Options build_options() = 0;
        virtual void execute(const cxxopts::ParseResult& args) = 0;
        virtual void validate(const cxxopts::ParseResult& args) = 0;
        virtual ~subcall() = default;
    };
}


#endif //GENOGROVE_CLI_SUBCALL_HPP
