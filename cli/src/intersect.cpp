/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <subcalls/intersect.hpp>
#include <handlers/bed.hpp>
#include <handlers/gff.hpp>
#include <handlers/vcf.hpp>

#include <genogrove/io/filetype_detector.hpp>
#include <genogrove/io/gg_format.hpp>
#include <genogrove/structure/grove/grove_view.hpp>
#include <handlers/queryable.hpp>

#include <fstream>
#include <ios>
#include <memory>
#include <ostream>
#include <string>
#include <string_view>

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

namespace {

bool is_gff_or_gtf(gio::filetype t) {
    return t == gio::filetype::GFF || t == gio::filetype::GTF;
}

// Run a query file against a populated grove/grove_view and print each hit.
// Query iteration is chosen by the query file type; the printer is chosen by
// the target's payload type. Decoupling the two is what makes cross-type
// queries (e.g. a BED query against a GFF index) work — grove::intersect only
// consumes (interval, index), and both readers emit intervals in the same
// canonical 0-based-inclusive space (see for_each_*_query).
template <handlers::interval_queryable grove_t, typename print_fn>
void run_intersect(grove_t& grove, const std::string& queryfile,
                   gio::filetype query_type, std::ostream& out, print_fn print) {
    auto handle = [&](gdt::interval iv, const std::string& index) {
        // Bind the query_result to a local: get_keys() returns a reference into
        // it, so iterating grove.intersect(...).get_keys() directly would dangle
        // once the temporary is destroyed at the end of the range expression.
        auto results = grove.intersect(iv, index);
        for (auto* result : results.get_keys()) {
            print(out, result->get_data());
        }
    };
    if (query_type == gio::filetype::BED) {
        handlers::bed::for_each_bed_query(queryfile, handle);
    } else if (query_type == gio::filetype::VCF) {
        handlers::vcf::for_each_vcf_query(queryfile, handle);
    } else {  // GFF / GTF (validated before dispatch)
        handlers::gff::for_each_gff_query(queryfile, handle);
    }
}

} // namespace

namespace subcalls {

constexpr std::string_view DEFAULT_TREE_ORDER = "3";

cxxopts::Options intersect::parse_args(int argc, char** argv) {
    cxxopts::Options options("intersect", "Search for interval overlaps in the index");
    options.add_options()
            ("q,queryfile", "The query file to search for overlaps (BED, GFF/GTF, or VCF)",
             cxxopts::value<std::string>())
            ("t,targetfile", "The target file to build the grove from (BED or GFF/GTF)",
                    cxxopts::value<std::string>())
            ("i,indexfile", "A prebuilt .gg index to search against",
                    cxxopts::value<std::string>())
            ("in-place", "Query the prebuilt index (-i) in place: read only the "
                         "blocks each query touches instead of loading the whole "
                         "file into memory (requires -i)")
            ("o,outputfile", "Write the intersection results to the specified file",
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

    // --in-place reads a prebuilt index on demand; a target (-t) is built in
    // memory, so it has no on-disk index to read in place.
    if(args.count("in-place") && !has_index) {
        throw std::runtime_error(
            "Error: --in-place requires a prebuilt index (-i)");
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

    // The query type only selects how query records are iterated; the output
    // format follows the target/index payload type. So query and target types
    // are independent — a BED query may run against a GFF index and vice versa.
    // The query must still be a supported interval format.
    auto [query_filetype, _] = gio::filetype_detector().detect_filetype(queryfile);
    if(query_filetype != gio::filetype::BED && query_filetype != gio::filetype::VCF
       && !is_gff_or_gtf(query_filetype)) {
        throw std::runtime_error(
            "Error: query file must be BED, GFF, GTF, or VCF");
    }

    // validate() guarantees at least one of -i / -t is present; when both are
    // given, the explicit index wins.
    if(args.count("indexfile")) {
        const std::string index_path = args["indexfile"].as<std::string>();
        std::ifstream in(index_path, std::ios::binary);
        if(!in) {
            throw std::runtime_error("Error: could not open index file: " + index_path);
        }
        const auto header = gio::gg_header::read(in);
        // --in-place queries the file on disk via grove_view instead of loading
        // it all; the grove stream begins right after the gg_header.
        const bool in_place = args.count("in-place") != 0;
        const auto data_offset = static_cast<std::streamoff>(gio::gg_header::SIZE);

        if(header.payload_type == gio::gg_payload_type::BED) {
            if(in_place) {
                auto grove = ggs::grove_view<gdt::interval, gio::bed_entry, std::string>::open(
                    index_path, data_offset);
                run_intersect(grove, queryfile, query_filetype, *outputStream,
                              handlers::bed::print_bed_result);
            } else {
                auto grove = ggs::grove<gdt::interval, gio::bed_entry, std::string>::deserialize(in);
                run_intersect(grove, queryfile, query_filetype, *outputStream,
                              handlers::bed::print_bed_result);
            }
        } else {  // GFF — gg_header::read() rejects any other value
            if(in_place) {
                auto grove = ggs::grove_view<gdt::interval, gio::gff_entry, std::string>::open(
                    index_path, data_offset);
                run_intersect(grove, queryfile, query_filetype, *outputStream,
                              handlers::gff::print_gff_result);
            } else {
                auto grove = ggs::grove<gdt::interval, gio::gff_entry, std::string>::deserialize(in);
                run_intersect(grove, queryfile, query_filetype, *outputStream,
                              handlers::gff::print_gff_result);
            }
        }
    } else {
        const std::string targetfile = args["targetfile"].as<std::string>();
        auto [target_filetype, _] =
            gio::filetype_detector().detect_filetype(targetfile);

        if(target_filetype == gio::filetype::BED) {
            ggs::grove<gdt::interval, gio::bed_entry, std::string> grove(k);
            handlers::bed::grove_insert(grove, targetfile);
            run_intersect(grove, queryfile, query_filetype, *outputStream,
                          handlers::bed::print_bed_result);
        } else if(is_gff_or_gtf(target_filetype)) {
            ggs::grove<gdt::interval, gio::gff_entry, std::string> grove(k);
            handlers::gff::grove_insert(grove, targetfile);
            run_intersect(grove, queryfile, query_filetype, *outputStream,
                          handlers::gff::print_gff_result);
        } else {
            throw std::runtime_error(
                "Error: unsupported target format (only BED, GFF, and GTF are supported)");
        }
    }
}

}
