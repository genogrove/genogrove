/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// standard
#include <iostream>
#include <string_view>
#include "cxxopts.hpp"

// genogrove
#include <genogrove/config/version.hpp>
#include <genogrove/structure/all.hpp>

// cli
#include <subcalls/subcall.hpp>
#include <subcalls/index.hpp>
#include <subcalls/intersect.hpp>

constexpr std::string_view CMD_INDEX = "idx";
constexpr std::string_view CMD_INTERSECT = "isec";

std::unique_ptr<subcalls::subcall> create_subcall(std::string_view subcall) {
    if(subcall == CMD_INDEX) {
        return std::make_unique<subcalls::index>();
    } else if(subcall == CMD_INTERSECT) {
        return std::make_unique<subcalls::intersect>();
    } else {
        return nullptr;
    }
}

void print_general_help(const cxxopts::Options& options) {
    std::cout << options.help() << "\n";
    std::cout << "Available subcommands: \n";
    std::cout << "\t" << CMD_INDEX << ":\t\tIndex an Interval File\n";
    std::cout << "\t" << CMD_INTERSECT << ":\tSearch for interval overlaps in the index\n";
    std::cout << "For more details on a subcommand, use the --help option with the subcommand.\n";
}

int main(int argc, char** argv) {
    // One guard around all parsing and dispatch: cxxopts throws
    // cxxopts::exceptions::* (derived from std::exception) on a bad flag,
    // non-integer value, or missing option argument, and the subcommands do not
    // allow_unrecognised_options — so an uncaught throw here would std::terminate
    // on the most common user-error path. Domain errors from validate/execute
    // already carry an "Error: " prefix in their messages; cxxopts messages are
    // self-describing, so a bare e.what() reads cleanly for both.
    try {
        cxxopts::Options options("genogrove", "Index and query genomic intervals using grove B+ trees.");
        options.add_options()
            ("subcall", "The subcommand to run", cxxopts::value<std::string>())
            ("h,help", "Print help")
            ("v,version", "Print version")
            ;
        options.parse_positional({"subcall"});
        options.allow_unrecognised_options();

        // parse the commandline arguments
        auto args = options.parse(argc, argv);

        if(args.count("version")) {
            std::cout << "genogrove " << genogrove_VERSION_MAJOR << "."
                      << genogrove_VERSION_MINOR << "." << genogrove_VERSION_PATCH << "\n";
            return 0;
        }

        // check if the help option was selected (on the main level)
        if(args.count("help")) {
            if(!args.count("subcall")) {
                print_general_help(options);
                return 0;
            }
        }

        if(!args.count("subcall")) {
            std::cerr << "Error: No subcommand specified.\n";
            std::cerr << options.help() << std::endl;
            return 1;
        }


        std::string subcall = args["subcall"].as<std::string>();
        std::unique_ptr<subcalls::subcall> command = create_subcall(subcall);

        if(!command) {
            std::cerr << "Error: Unknown subcommand '" << subcall << "'.\n";
            std::cerr << options.help() << std::endl;
            return 1;
        }

        // parse additional options for the subcommand
        cxxopts::Options subcallOptions = command->parse_args(argc -1, argv + 1);
        cxxopts::ParseResult subcallArgs = subcallOptions.parse(argc -1, argv + 1);

        if(subcallArgs.count("help")) {
            std::cout << subcallOptions.help() << "\n";
            return 0;
        }

        command->validate(subcallArgs);
        command->execute(subcallArgs);
        return 0;
    } catch (const std::exception& e) {
        std::cerr << e.what() << "\n";
        return 1;
    }
}