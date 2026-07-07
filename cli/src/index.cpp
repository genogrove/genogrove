/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <subcalls/index.hpp>
#include <handlers/bed.hpp>
#include <handlers/gff.hpp>
#include <handlers/links.hpp>

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
            ("inputfile", "The input file to be indexed",
                    cxxopts::value<std::string>())
            ("o,outputfile", "Write the index to the specified file",
                    cxxopts::value<std::string>())
            ("k,order", "The order of the tree",
                    cxxopts::value<int>()->default_value(std::string(DEFAULT_TREE_ORDER)))
            ("s,sorted", "Interval in the input file are sorted",
                    cxxopts::value<bool>()->default_value("false"))
            ("t,timed", "Measure the time taken for indexing",
                    cxxopts::value<bool>()->default_value("false"))
            ("l,links", "Optional TSV (nameA<TAB>nameB, # comments) of directed edges "
                        "to attach to the grove's graph overlay. Names match BED column 4, "
                        "or the --gff-name-tag attribute for GFF/GTF input, and must be unique.",
                    cxxopts::value<std::string>())
            ("gff-name-tag", "For GFF/GTF input with --links: the attribute whose value "
                             "identifies each record for link matching (e.g. ID, gene_id, "
                             "transcript_id). Every record must carry it and values must be "
                             "unique across the file. Ignored for BED input (which matches "
                             "on column 4).",
                    cxxopts::value<std::string>())
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

    if(args.count("links")) {
        const auto links_path = args["links"].as<std::string>();
        if(!std::filesystem::exists(links_path)) {
            throw std::runtime_error("Error: links file does not exist: " + links_path);
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

    // Dispatch on input file type — BED and GFF/GTF are supported. Validate
    // the type before any output side-effect so an unsupported input never
    // truncates an existing .gg at outputfile.
    auto [filetype, compression] = gio::filetype_detector().detect_filetype(inputfile);
    if(filetype != gio::filetype::BED &&
       filetype != gio::filetype::GFF &&
       filetype != gio::filetype::GTF) {
        throw std::runtime_error(
            "Error: unsupported input format (only BED, GFF, and GTF are supported)");
    }

    const bool has_links = args.count("links") != 0;
    const bool has_name_tag = args.count("gff-name-tag") != 0;
    // GFF/GTF links need an explicit identifying attribute — there is no
    // canonical name column. (--gff-name-tag on BED input is simply ignored;
    // BED links always match on column 4.)
    if(has_links && filetype != gio::filetype::BED && !has_name_tag) {
        throw std::runtime_error(
            "Error: --links on GFF/GTF input requires --gff-name-tag <ATTR> "
            "to select the identifying attribute (e.g. ID, gene_id, transcript_id)");
    }

    const auto start_time = std::chrono::steady_clock::now();

    // Build the grove in memory first, then open the output file and write
    // the header + serialised payload. This way a parse error or malformed
    // input row aborts before the output is opened, leaving any pre-existing
    // .gg at outputfile intact.
    if(filetype == gio::filetype::BED) {
        ggs::grove<gdt::interval, gio::bed_entry> grove(order);

        // Only build the name->key map when --links was requested. Without
        // --links the map is null and grove_insert pays no extra cost.
        handlers::bed::name_to_key_map name_map;
        handlers::bed::grove_insert(
            grove, inputfile, sorted, has_links ? &name_map : nullptr);

        if(has_links) {
            handlers::links::apply_to_grove(
                grove, args["links"].as<std::string>(), name_map);
        }

        std::ofstream output(outputfile, std::ios::binary);
        if(!output) {
            throw std::runtime_error("Error: could not open output file: " + outputfile);
        }
        gio::gg_header::current(gio::gg_payload_type::BED).write(output);
        grove.serialize(output);
        if(!output) {
            throw std::runtime_error("Error: failed to write index to: " + outputfile);
        }
    } else {  // GFF or GTF (validated above)
        ggs::grove<gdt::interval, gio::gff_entry> grove(order);

        // Only build the name->key map when --links was requested; without it
        // the map is null and grove_insert pays no extra cost (and reads no tag).
        handlers::gff::name_to_key_map name_map;
        const std::string name_tag = has_name_tag
            ? args["gff-name-tag"].as<std::string>()
            : std::string();
        handlers::gff::grove_insert(
            grove, inputfile, sorted, has_links ? &name_map : nullptr, name_tag);

        if(has_links) {
            handlers::links::apply_to_grove(
                grove, args["links"].as<std::string>(), name_map);
        }

        std::ofstream output(outputfile, std::ios::binary);
        if(!output) {
            throw std::runtime_error("Error: could not open output file: " + outputfile);
        }
        gio::gg_header::current(gio::gg_payload_type::GFF).write(output);
        grove.serialize(output);
        if(!output) {
            throw std::runtime_error("Error: failed to write index to: " + outputfile);
        }
    }

    if(timed) {
        const auto elapsed = std::chrono::steady_clock::now() - start_time;
        const auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(elapsed).count();
        std::cout << "Indexed in " << ms << " ms\n";
    }
    std::cout << "Index written to " << outputfile << "\n";
}

}
