/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <subcalls/index.hpp>
#include <handlers/bed.hpp>

#include <genogrove/io/filetype_detector.hpp>
#include <genogrove/io/gg_format.hpp>

#include <chrono>
#include <fstream>
#include <iostream>
#include <string>
#include <string_view>

namespace subcalls {

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

constexpr std::string_view DEFAULT_TREE_ORDER = "3";

cxxopts::Options index::parse_args(int argc, char** argv) {
    cxxopts::Options options("genogrove index", "index an interval file");
    options.add_options()
            ("inputfile", "The input file to be indexe                                                                                                                                                                                                                                                                                                                d",
                    cxxopts::value<std::string>())
            ("o,outputfile", "Write the index to the specified file",
                    cxxopts::value<std::string>())
            ("k,order", "The order of the tree",
                    cxxopts::value<int>()->default_value(std::string(DEFAULT_TREE_ORDER)))
            ("s,sorted", "Interval in the input file are sorted",
                    cxxopts::value<bool>()->default_value("false"))
            ("t,timed", "Measure the time taken for indexing",
                    cxxopts::value<bool>()->default_value("false"))
            ("h,help", "Print help")
            ;
    options.parse_positional({"inputfile"});
    options.positional_help("inputfile");

    return options;
}

void index::validate(const cxxopts::ParseResult& args) {
    if(!args.count("inputfile")) {
        throw std::runtime_error("Error: inputfile is required");
    }
    std::string inputfile = args["inputfile"].as<std::string>();
    if(!std::filesystem::exists(inputfile)) {
        throw std::runtime_error("Error: file does not exist: " + inputfile);
    }

    if(args.count("k")) {
        int order = args["k"].as<int>();
        if(order < 3) {
            throw std::runtime_error("Error: order must be at least 3");
        }
    }

    if(args.count("outputfile")) {
        std::filesystem::path outputfile_path(args["outputfile"].as<std::string>());
        auto parent = outputfile_path.parent_path();
        if(!parent.empty() && !std::filesystem::exists(parent)) {
            throw std::runtime_error("Error: parent directory does not exist: " + parent.string());
        }
    }
}

void index::execute(const cxxopts::ParseResult& args) {
    const std::string inputfile = args["inputfile"].as<std::string>();
    const int order = args["k"].as<int>();
    const bool sorted = args["sorted"].as<bool>();
    const bool timed = args["timed"].as<bool>();

    // Default the output path to <inputfile>.gg next to the source file.
    const std::string outputfile = args.count("outputfile")
        ? args["outputfile"].as<std::string>()
        : inputfile + ".gg";

    // Only BED input is supported for now.
    auto [filetype, compression] = gio::filetype_detector().detect_filetype(inputfile);
    if(filetype != gio::filetype::BED) {
        throw std::runtime_error("Error: only BED format is currently supported");
    }

    const auto start_time = std::chrono::steady_clock::now();

    ggs::grove<gdt::interval, gio::bed_entry> grove(order);
    handlers::bed::grove_insert(grove, inputfile, sorted);

    std::ofstream output(outputfile, std::ios::binary);
    if(!output) {
        throw std::runtime_error("Error: could not open output file: " + outputfile);
    }
    gio::gg_header::current(gio::gg_payload_type::BED).write(output);
    grove.serialize(output);
    if(!output) {
        throw std::runtime_error("Error: failed to write index to: " + outputfile);
    }

    if(timed) {
        const auto elapsed = std::chrono::steady_clock::now() - start_time;
        const auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(elapsed).count();
        std::cout << "Indexed in " << ms << " ms\n";
    }
    std::cout << "Index written to " << outputfile << "\n";
}

}
