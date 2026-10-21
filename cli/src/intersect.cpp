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

#include <algorithm>
#include <charconv>
#include <cstddef>
#include <deque>
#include <filesystem>
#include <fstream>
#include <ios>
#include <iostream>
#include <limits>
#include <memory>
#include <ostream>
#include <string>
#include <string_view>
#include <unordered_set>
#include <vector>

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

namespace {

bool is_gff_or_gtf(gio::filetype t) {
    return t == gio::filetype::GFF || t == gio::filetype::GTF;
}

// Which graph edges --hops follows from each overlapping interval.
enum class direction { out, in, both };

// --hops value: 0 = off (default), N = follow up to N edges, "all" = whole
// connected component.
constexpr std::size_t HOPS_ALL = std::numeric_limits<std::size_t>::max();

[[nodiscard]] std::size_t parse_hops(const std::string& s) {
    if (s == "all") {
        return HOPS_ALL;
    }
    std::size_t v = 0;
    const auto* end = s.data() + s.size();
    auto [p, ec] = std::from_chars(s.data(), end, v);
    if (ec != std::errc{} || p != end) {
        throw std::runtime_error(
            "Error: --hops must be a non-negative integer or 'all', got '" + s + "'");
    }
    return v;
}

[[nodiscard]] direction parse_direction(const std::string& s) {
    if (s == "out") return direction::out;
    if (s == "in") return direction::in;
    if (s == "both") return direction::both;
    throw std::runtime_error(
        "Error: --direction must be one of out, in, both, got '" + s + "'");
}

// One interval reached by following edges from a seed (an overlap hit).
template <typename key_ptr>
struct reached_key {
    std::size_t seed;  // index into the seeds vector it was first reached from
    key_ptr key;
    std::size_t hops;
};

// Multi-source BFS from all seeds of one query. FIFO order means the first time
// a key is seen is also its minimum hop count, and among equal distances the
// earlier seed wins — so each key is reported once, with min hops, under one
// seed. Seeds themselves are hop 0 and never reported as reached.
template <handlers::interval_queryable grove_t, typename key_ptr>
[[nodiscard]] std::vector<reached_key<key_ptr>> walk_links(
    grove_t& grove, const std::vector<key_ptr>& seeds, std::size_t max_hops,
    direction dir) {
    struct item { key_ptr key; std::size_t seed; std::size_t hops; };
    std::unordered_set<const void*> seen(seeds.begin(), seeds.end());
    std::deque<item> frontier;
    for (std::size_t i = 0; i < seeds.size(); ++i) {
        frontier.push_back({seeds[i], i, 0});
    }
    std::vector<reached_key<key_ptr>> out;
    while (!frontier.empty()) {
        const item cur = frontier.front();
        frontier.pop_front();
        if (cur.hops == max_hops) {
            continue;
        }
        auto visit = [&](key_ptr next) {
            if (seen.insert(next).second) {
                out.push_back({cur.seed, next, cur.hops + 1});
                frontier.push_back({next, cur.seed, cur.hops + 1});
            }
        };
        if (dir != direction::in) {
            for (auto* n : grove.get_neighbors(cur.key)) visit(n);
        }
        if (dir != direction::out) {
            for (auto* n : grove.get_in_neighbors(cur.key)) visit(n);
        }
    }
    // Group by seed so each seed's reached rows follow its own overlap row;
    // stable keeps the hop order within a seed.
    std::stable_sort(out.begin(), out.end(),
                     [](const auto& a, const auto& b) { return a.seed < b.seed; });
    return out;
}

// Run a query file against a populated grove/grove_view and print each hit.
// Query iteration is chosen by the query file type; the printer is chosen by
// the target's payload type. Decoupling the two is what makes cross-type
// queries (e.g. a BED query against a GFF index) work — grove::intersect only
// consumes (interval, index), and both readers emit intervals in the same
// canonical 0-based-inclusive space (see for_each_*_query).
//
// With max_hops > 0, each overlap row is followed by one row per interval
// reached over the grove's graph edges:
//   <query chrom> <start> <end> <TAB> <seed row> <TAB> <reached row> <TAB> <hops>
// The query columns are 0-based half-open like the BED-style payload rows.
template <handlers::interval_queryable grove_t, typename print_fn>
void run_intersect(grove_t& grove, const std::string& queryfile,
                   gio::filetype query_type, std::ostream& out, print_fn print,
                   std::size_t max_hops = 0, direction dir = direction::both) {
    auto handle = [&](gdt::interval iv, const std::string& index) {
        // Bind the query_result to a local: get_keys() returns a reference into
        // it, so iterating grove.intersect(...).get_keys() directly would dangle
        // once the temporary is destroyed at the end of the range expression.
        auto results = grove.intersect(iv, index);
        const auto& seeds = results.get_keys();
        if (max_hops == 0) {
            for (auto* result : seeds) {
                print(out, result->get_data());
                out << '\n';
            }
            return;
        }
        const auto reached = walk_links(grove, seeds, max_hops, dir);
        auto r = reached.begin();
        for (std::size_t i = 0; i < seeds.size(); ++i) {
            print(out, seeds[i]->get_data());
            out << '\n';
            for (; r != reached.end() && r->seed == i; ++r) {
                out << index << '\t' << iv.get_start() << '\t' << iv.get_end() + 1 << '\t';
                print(out, seeds[i]->get_data());
                out << '\t';
                print(out, r->key->get_data());
                out << '\t' << r->hops << '\n';
            }
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

// Query a prebuilt .gg index of payload type `payload_t`, choosing between an
// in-place grove_view (read only the blocks each query touches) and a fully
// deserialized in-memory grove. Written once here so the eager/in-place split
// is not duplicated per payload type at the call site.
template <typename payload_t, typename print_fn>
void query_index(const std::string& index_path, std::ifstream& in, bool in_place,
                 std::streamoff data_offset, const std::string& queryfile,
                 gio::filetype query_filetype, std::ostream& out, print_fn print,
                 std::size_t max_hops, direction dir) {
    if(in_place) {
        // grove_view only knows the edges of blocks it has paged in, and the
        // .gg directory carries no edge total, so an index built without
        // --links cannot be detected here without reading every block. It
        // walks an empty graph instead of failing up front like the eager
        // path; say so once on stderr so empty traversals are not a surprise.
        if(max_hops > 0) {
            std::cerr << "Warning: --in-place cannot verify that " << index_path
                      << " was built with 'idx --links'; a link-less index yields "
                         "no reached rows\n";
        }
        auto grove = ggs::grove_view<gdt::interval, payload_t, std::string>::open(
            index_path, data_offset);
        run_intersect(grove, queryfile, query_filetype, out, print, max_hops, dir);
    } else {
        auto grove = ggs::grove<gdt::interval, payload_t, std::string>::deserialize(in);
        if(max_hops > 0 && grove.edge_count() == 0) {
            throw std::runtime_error(
                "Error: --hops requires an index built with 'idx --links' "
                "(no edges in " + index_path + ")");
        }
        run_intersect(grove, queryfile, query_filetype, out, print, max_hops, dir);
    }
}

} // namespace

namespace subcalls {

cxxopts::Options intersect::build_options() {
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
            ("k,order", "The order of the tree built from -t (not allowed with -i)",
             cxxopts::value<int>()->default_value(std::to_string(DEFAULT_TREE_ORDER)))
            ("hops", "Follow the index's graph edges (idx --links) from each "
                     "overlapping interval up to N hops, or 'all' for the whole "
                     "connected component, and report each reached interval once "
                     "with its minimum hop count (requires -i; 0 = off)",
             cxxopts::value<std::string>()->default_value("0"))
            ("direction", "Which edges --hops follows: out, in, or both",
             cxxopts::value<std::string>()->default_value("both"))
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

    validate_tree_order(args);
    // The order is only consumed when a target (-t) is built in memory. A
    // prebuilt index carries its own order, so -k with -i would be silently
    // ignored; reject it rather than let a user believe it took effect.
    // count() only sees flags given on the command line, not the default.
    if(args.count("order") && has_index) {
        throw std::runtime_error(
            "Error: -k/--order only applies when building from a target (-t); "
            "a prebuilt index (-i) keeps the order it was built with");
    }

    // A target (-t) is built in memory without links, so there is no graph to
    // walk; edges only exist in an index written by `idx --links`.
    if(parse_hops(args["hops"].as<std::string>()) > 0 && !has_index) {
        throw std::runtime_error(
            "Error: --hops requires a prebuilt index (-i) built with 'idx --links'");
    }
    // Called for its throw on an invalid value; execute() parses it again.
    static_cast<void>(parse_direction(args["direction"].as<std::string>()));
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
    auto query_filetype = std::get<0>(gio::filetype_detector().detect_filetype(queryfile));
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
        const auto max_hops = parse_hops(args["hops"].as<std::string>());
        const auto dir = parse_direction(args["direction"].as<std::string>());

        if(header.payload_type == gio::gg_payload_type::BED) {
            query_index<gio::bed_entry>(index_path, in, in_place, data_offset,
                                        queryfile, query_filetype, *outputStream,
                                        handlers::bed::print_bed_result, max_hops, dir);
        } else {  // GFF — gg_header::read() rejects any other value
            query_index<gio::gff_entry>(index_path, in, in_place, data_offset,
                                        queryfile, query_filetype, *outputStream,
                                        handlers::gff::print_gff_result, max_hops, dir);
        }
    } else {
        const std::string targetfile = args["targetfile"].as<std::string>();
        auto target_filetype =
            std::get<0>(gio::filetype_detector().detect_filetype(targetfile));

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
