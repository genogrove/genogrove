/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <subcalls/intersect.hpp>
#include <handlers/bed.hpp>

#include <genogrove/io/filetype_detector.hpp>

#include <fstream>
#include <memory>
#include <string>
#include <string_view>

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

namespace {

// Deserialize a grove from a prebuilt .gg index file.
ggs::grove<gdt::interval, gio::bed_entry> load_index(const std::string& index_path) {
    std::ifstream in(index_path, std::ios::binary);
    if(!in) {
        throw std::runtime_error("Error: could not open index file: " + index_path);
    }
    return ggs::grove<gdt::interval, gio::bed_entry>::deserialize(in);
}

// Build a grove from a target BED file. Only BED is supported for now.
ggs::grove<gdt::interval, gio::bed_entry> build_from_target(
        const std::string& targetfile, int order) {
    auto [target_filetype, target_compression] =
        gio::filetype_detector().detect_filetype(targetfile);
    if(target_filetype != gio::filetype::BED) {
        throw std::runtime_error(
            "Error: only BED format is currently supported for target files");
    }
    ggs::grove<gdt::interval, gio::bed_entry> grove(order);
    handlers::bed::grove_insert(grove, targetfile);
    return grove;
}

} // namespace

namespace subcalls {

constexpr std::string_view DEFAULT_TREE_ORDER = "3";

cxxopts::Options intersect::parse_args(int argc, char** argv) {
    cxxopts::Options options("intersect", "Search for interval overlaps in the index");
    options.add_options()
            ("q,queryfile", "The query file to be indexed",
             cxxopts::value<std::string>())
            ("t,targetfile", "The target BED file to build the grove from",
                    cxxopts::value<std::string>())
            ("i,indexfile", "A prebuilt .gg index to search against",
                    cxxopts::value<std::string>())
            ("o,outputfile", "Write the index to the specified file",
             cxxopts::value<std::string>()->default_value("stdout"))
            ("k,order", "The order of the tree",
             cxxopts::value<int>()->default_value(std::string(DEFAULT_TREE_ORDER)))
            ("h,help", "Print the help")
            ;
    options.parse_positional({"queryfile", "targetfile"});
    return options;
}

void intersect::validate(const cxxopts::ParseResult& args) {
    if(!args.count("queryfile")) {
        throw std::runtime_error("Error: queryfile is required");
    }
    auto queryfile = args["queryfile"].as<std::string>();
    if(!std::filesystem::exists(queryfile)) {
        throw std::runtime_error("Error: file does not exist: " + queryfile);
    }

    const bool has_target = args.count("targetfile") != 0;
    const bool has_index = args.count("indexfile") != 0;
    if(!has_target && !has_index) {
        throw std::runtime_error(
            "Error: a target file (-t) or a prebuilt index (-i) is required");
    }
    if(has_target) {
        auto targetfile = args["targetfile"].as<std::string>();
        if(!std::filesystem::exists(targetfile)) {
            throw std::runtime_error("Error: file does not exist: " + targetfile);
        }
    }
    if(has_index) {
        auto indexfile = args["indexfile"].as<std::string>();
        if(!std::filesystem::exists(indexfile)) {
            throw std::runtime_error("Error: file does not exist: " + indexfile);
        }
    }

    if(args.count("outputfile")) {
        std::string outputfile = args["outputfile"].as<std::string>();
        if(outputfile != "stdout") {
            std::filesystem::path outputfile_path(outputfile);
            auto parent = outputfile_path.parent_path();
            if(!parent.empty() && !std::filesystem::exists(parent)) {
                throw std::runtime_error("Error: parent directory does not exist: " + parent.string());
            }
        }
    }

    if(args.count("k")) {
        int k = args["k"].as<int>();
        if(k < 3) {
            throw std::runtime_error("Error: order must be at least 3");
        }
    }
}

void intersect::execute(const cxxopts::ParseResult& args) {
    // get parameters
    std::string queryfile = args["queryfile"].as<std::string>();
    int k = args["k"].as<int>();

    // stream for output (either to stdout or to file)
    std::unique_ptr<std::ofstream> output_file;
    std::ostream* outputStream = &std::cout;
    if(args.count("outputfile")) {
        std::string outputfile = args["outputfile"].as<std::string>();
        if(outputfile != "stdout") {
            output_file = std::make_unique<std::ofstream>(outputfile);
            if(!output_file->is_open()) {
                throw std::runtime_error("Error: could not open output file: " + outputfile);
            }
            outputStream = output_file.get();
        }
    }

    // The query file is always parsed — only BED is supported.
    auto [query_filetype, query_compression] = gio::filetype_detector().detect_filetype(queryfile);
    if(query_filetype != gio::filetype::BED) {
        throw std::runtime_error("Error: only BED format is currently supported for query files");
    }

    // Use the prebuilt index when given (-i); otherwise build the grove from
    // the target BED file (-t). validate() guarantees at least one is present;
    // when both are given, the explicit index wins.
    auto grove = args.count("indexfile")
        ? load_index(args["indexfile"].as<std::string>())
        : build_from_target(args["targetfile"].as<std::string>(), k);

    // Intersect query file with the target grove
    handlers::bed::grove_intersect(grove, queryfile, *outputStream);
}

}
