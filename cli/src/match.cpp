/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <subcalls/match.hpp>
#include <output_file.hpp>
#include <handlers/gff.hpp>

#include <genogrove/io/bed_reader.hpp>
#include <genogrove/io/filetype_detector.hpp>
#include <genogrove/io/gg_format.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/grove_view.hpp>

#include <algorithm>
#include <cstddef>
#include <filesystem>
#include <fstream>
#include <ios>
#include <iostream>
#include <memory>
#include <optional>
#include <ostream>
#include <string>
#include <string_view>
#include <unordered_set>
#include <vector>

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

namespace {

const std::string& seqid_of(const gio::bed_entry& record) { return record.chrom; }
const std::string& seqid_of(const gio::gff_entry& record) { return record.seqid; }

// One line of the query file: an ordered chain of intervals.
struct query_chain {
    std::string id;
    std::string seqid;
    std::optional<char> strand;
    std::vector<gdt::interval> blocks; // ascending
};

// The blocks of a BED12 line; a line with no blocks is a chain of one interval.
[[nodiscard]] query_chain to_chain(const gio::bed_entry& entry) {
    query_chain chain{entry.name.value_or("."), entry.chrom, entry.strand, {}};
    if (!entry.blocks) {
        chain.blocks.push_back(entry.to_interval());
        return chain;
    }
    for (std::size_t i = 0; i < entry.blocks->sizes.size(); ++i) {
        const std::size_t start = entry.start + entry.blocks->starts[i];
        if (entry.blocks->sizes[i] > 0) {
            chain.blocks.emplace_back(start, start + entry.blocks->sizes[i] - 1);
        }
    }
    return chain;
}

// Every member of the chain, found from one of them: back over the `next`
// edges of the chain to its first member, then forward to its last. Returned
// in ascending order (a chain on the minus strand runs right to left). A loop
// in a links file ends the walk.
template <typename grove_t, typename key_ptr>
[[nodiscard]] std::vector<key_ptr> chain_members(grove_t& grove, key_ptr member,
                                                 std::string_view chain_id) {
    const auto continues = [chain_id](const std::string& text) {
        return handlers::gff::continues_chain(text, chain_id);
    };
    std::unordered_set<const void*> seen{member};
    std::vector<key_ptr> members;
    for (auto before = grove.get_in_neighbors_if(member, continues);
         !before.empty() && seen.insert(before.front()).second;
         before = grove.get_in_neighbors_if(before.front(), continues)) {
        members.push_back(before.front());
    }
    std::ranges::reverse(members);
    members.push_back(member);
    for (auto after = grove.get_neighbors_if(member, continues);
         !after.empty() && seen.insert(after.front()).second;
         after = grove.get_neighbors_if(after.front(), continues)) {
        members.push_back(after.front());
    }
    if (members.front()->get_value() > members.back()->get_value()) {
        std::ranges::reverse(members);
    }
    return members;
}

// The index of the member that the block matches: they overlap and have the
// same start and end. A free boundary is not compared.
template <typename key_ptr>
[[nodiscard]] std::optional<std::size_t> matching_member(const std::vector<key_ptr>& members,
                                                         const query_chain& query,
                                                         std::size_t block) {
    const gdt::interval& wanted = query.blocks[block];
    // The outer ends of the query are free: a read can start and end inside an exon.
    const bool free_start = block == 0;
    const bool free_end = block + 1 == query.blocks.size();
    for (std::size_t i = 0; i < members.size(); ++i) {
        const gdt::interval& member = members[i]->get_value();
        if (seqid_of(members[i]->get_data()) == query.seqid &&
            gdt::interval::overlaps(member, wanted) &&
            (free_start || member.get_start() == wanted.get_start()) &&
            (free_end || member.get_end() == wanted.get_end())) {
            return i;
        }
    }
    return std::nullopt;
}

// Print the row of one query chain and one target chain:
//   <query id> <TAB> <target id> <TAB> <class> <TAB> <matched>/<total>
// No row when no block matches, or when both have a strand and the two differ.
template <typename key_ptr>
void report(const query_chain& query, std::string_view chain_id,
            const std::vector<key_ptr>& members, std::ostream& out) {
    const auto stranded = [](std::optional<char> strand) { return strand == '+' || strand == '-'; };
    const std::optional<char> strand = members.front()->get_data().strand;
    if (stranded(query.strand) && stranded(strand) && query.strand != strand) {
        return;
    }
    std::size_t matched = 0;
    bool in_order = true; // each block matches the member after the one before it
    std::optional<std::size_t> previous;
    for (std::size_t block = 0; block < query.blocks.size(); ++block) {
        const auto member = matching_member(members, query, block);
        matched += member ? 1 : 0;
        in_order = in_order && member && (block == 0 || (previous && *member == *previous + 1));
        previous = member;
    }
    if (matched == 0) {
        return;
    }
    const std::string_view match_class = !in_order                                  ? "partial"
                                         : query.blocks.size() == members.size() ? "full"
                                                                                 : "contained";
    out << query.id << '\t' << chain_id << '\t' << match_class << '\t' << matched << '/'
        << query.blocks.size() << '\n';
}

// Compare one query chain with every stored chain that has a member under one
// of its blocks. Each chain is compared once.
template <typename grove_t>
void match_chain(grove_t& grove, const query_chain& query, std::ostream& out) {
    std::unordered_set<std::string> compared;
    for (const gdt::interval& block : query.blocks) {
        // Bound to a local: get_keys() returns a reference into the result.
        auto result = grove.intersect(block, query.seqid);
        for (auto* hit : result.get_keys()) {
            for (const std::string& text : grove.get_in_edges(hit)) {
                handlers::gff::for_each_chain_id(text, [&](std::string_view chain_id) {
                    if (compared.emplace(chain_id).second) {
                        report(query, chain_id, chain_members(grove, hit, chain_id), out);
                    }
                });
            }
        }
    }
}

template <typename grove_t>
void run_match(grove_t& grove, const std::string& queryfile, std::ostream& out) {
    gio::bed_reader reader(queryfile);
    for (const auto& entry : reader) {
        match_chain(grove, to_chain(entry), out);
    }
    if (const std::string error = reader.get_error_message(); !error.empty()) {
        throw std::runtime_error("Error: " + queryfile + ": " + error);
    }
}

template <typename payload_t>
void match_index(const std::string& index_path, std::ifstream& in, bool in_place,
                 const std::string& queryfile, std::ostream& out) {
    if (in_place) {
        auto grove = ggs::grove_view<gdt::interval, payload_t, std::string>::open(
            index_path, static_cast<std::streamoff>(gio::gg_header::SIZE));
        run_match(grove, queryfile, out);
    } else {
        auto grove = ggs::grove<gdt::interval, payload_t, std::string>::deserialize(in);
        run_match(grove, queryfile, out);
    }
}

} // namespace

namespace subcalls {

cxxopts::Options match::build_options() {
    cxxopts::Options options("match", "Compare chains of intervals with the chains in the index");
    options.add_options()
            ("q,queryfile", "The query chains: a BED12 file, one chain per line (its blocks)",
             cxxopts::value<std::string>())
            ("i,indexfile", "A prebuilt .gg index with chains (a GFF/GTF index, or an "
                            "index with 'first:<id>' / 'next:<id>' links)",
             cxxopts::value<std::string>())
            ("in-place", "Read only the blocks of the index that a query touches "
                         "instead of loading the whole file into memory")
            ("o,outputfile", "Write the result rows to the specified file",
             cxxopts::value<std::string>()->default_value("stdout"))
            ("h,help", "Print the help")
            ;
    options.parse_positional({"queryfile"});
    return options;
}

void match::validate(const cxxopts::ParseResult& args) {
    if(!args.count("queryfile")) {
        throw std::runtime_error("Error: queryfile is required");
    }
    if(!args.count("indexfile")) {
        throw std::runtime_error("Error: a prebuilt index (-i) is required");
    }
    const std::string queryfile = args["queryfile"].as<std::string>();
    const std::string indexfile = args["indexfile"].as<std::string>();
    for(const std::string& file : {queryfile, indexfile}) {
        if(!std::filesystem::exists(file)) {
            throw std::runtime_error("Error: file does not exist: " + file);
        }
    }
    if(std::get<0>(gio::filetype_detector::detect_filetype(queryfile)) != gio::filetype::BED) {
        throw std::runtime_error("Error: query file must be BED (BED12, one chain per line)");
    }
    const std::string outputfile = args["outputfile"].as<std::string>();
    if(outputfile != "stdout") {
        const auto parent = std::filesystem::path(outputfile).parent_path();
        if(!parent.empty() && !std::filesystem::exists(parent)) {
            throw std::runtime_error("Error: parent directory does not exist: " + parent.string());
        }
        // Committing the output would replace an input with the result.
        reject_output_alias(outputfile, queryfile, "query file");
        reject_output_alias(outputfile, indexfile, "index file");
    }
}

void match::execute(const cxxopts::ParseResult& args) {
    const std::string queryfile = args["queryfile"].as<std::string>();
    const std::string index_path = args["indexfile"].as<std::string>();
    const std::string outputfile = args["outputfile"].as<std::string>();
    const bool in_place = args["in-place"].as<bool>();

    // A file is written beside its destination and moved over it by commit(),
    // so a failure never leaves a half-written output.
    std::unique_ptr<atomic_output_file> output_file;
    std::ostream* out = &std::cout;
    if(outputfile != "stdout") {
        output_file = std::make_unique<atomic_output_file>(outputfile);
        out = &output_file->stream();
    }

    std::ifstream in(index_path, std::ios::binary);
    if(!in) {
        throw std::runtime_error("Error: could not open index file: " + index_path);
    }
    const auto header = gio::gg_header::read(in);
    if(header.payload_type == gio::gg_payload_type::BED) {
        match_index<gio::bed_entry>(index_path, in, in_place, queryfile, *out);
    } else { // GFF: gg_header::read() rejects any other value
        match_index<gio::gff_entry>(index_path, in, in_place, queryfile, *out);
    }

    if(output_file) {
        output_file->commit();
    }
}

}