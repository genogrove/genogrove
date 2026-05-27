/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <subcalls/intersect.hpp>
#include <handlers/bed.hpp>
#include <handlers/gff.hpp>

#include <genogrove/io/filetype_detector.hpp>
#include <genogrove/io/gg_format.hpp>

#include <fstream>
#include <memory>
#include <string>
#include <string_view>

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

namespace {

bool is_gff_or_gtf(gio::filetype t) {
    return t == gio::filetype::GFF || t == gio::filetype::GTF;
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
    // When an index is given it takes precedence and the target is ignored,
    // so only the target actually in use is required to exist.
    if(has_target && !has_index) {
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
    const std::string queryfile = args["queryfile"].as<std::string>();
    const int k = args["k"].as<int>();

    // Output stream: either stdout (default) or a user-specified file.
    std::unique_ptr<std::ofstream> output_file;
    std::ostream* outputStream = &std::cout;
    if(args.count("outputfile")) {
        const std::string outputfile = args["outputfile"].as<std::string>();
        if(outputfile != "stdout") {
            output_file = std::make_unique<std::ofstream>(outputfile);
            if(!output_file->is_open()) {
                throw std::runtime_error("Error: could not open output file: " + outputfile);
            }
            outputStream = output_file.get();
        }
    }

    // The query file is parsed by the matching handler below; the choice of
    // handler depends on the index/target payload type, so the query type is
    // validated inside each branch.
    auto [query_filetype, query_compression] = gio::filetype_detector().detect_filetype(queryfile);

    // validate() guarantees at least one of -i / -t is present; when both are
    // given, the explicit index wins.
    if(args.count("indexfile")) {
        const std::string index_path = args["indexfile"].as<std::string>();
        std::ifstream in(index_path, std::ios::binary);
        if(!in) {
            throw std::runtime_error("Error: could not open index file: " + index_path);
        }
        const auto header = gio::gg_header::read(in);

        if(header.payload_type == gio::gg_payload_type::BED) {
            if(query_filetype != gio::filetype::BED) {
                throw std::runtime_error(
                    "Error: query file must be BED to query a BED index");
            }
            auto grove = ggs::grove<gdt::interval, gio::bed_entry>::deserialize(in);
            handlers::bed::grove_intersect(grove, queryfile, *outputStream);
        } else {  // GFF — gg_header::read() rejects any other value
            if(!is_gff_or_gtf(query_filetype)) {
                throw std::runtime_error(
                    "Error: query file must be GFF or GTF to query a GFF index");
            }
            auto grove = ggs::grove<gdt::interval, gio::gff_entry>::deserialize(in);
            handlers::gff::grove_intersect(grove, queryfile, *outputStream);
        }
    } else {
        const std::string targetfile = args["targetfile"].as<std::string>();
        auto [target_filetype, target_compression] =
            gio::filetype_detector().detect_filetype(targetfile);

        if(target_filetype == gio::filetype::BED) {
            if(query_filetype != gio::filetype::BED) {
                throw std::runtime_error(
                    "Error: query file must be BED for a BED target");
            }
            ggs::grove<gdt::interval, gio::bed_entry> grove(k);
            handlers::bed::grove_insert(grove, targetfile);
            handlers::bed::grove_intersect(grove, queryfile, *outputStream);
        } else if(is_gff_or_gtf(target_filetype)) {
            if(!is_gff_or_gtf(query_filetype)) {
                throw std::runtime_error(
                    "Error: query file must be GFF or GTF for a GFF target");
            }
            ggs::grove<gdt::interval, gio::gff_entry> grove(k);
            handlers::gff::grove_insert(grove, targetfile);
            handlers::gff::grove_intersect(grove, queryfile, *outputStream);
        } else {
            throw std::runtime_error(
                "Error: unsupported target format (only BED, GFF, and GTF are supported)");
        }
    }
}

}
