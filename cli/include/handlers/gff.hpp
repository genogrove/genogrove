/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_GFF_HPP
#define GENOGROVE_CLI_HANDLERS_GFF_HPP

#include <algorithm>
#include <cstddef>
#include <string>
#include <string_view>
#include <ostream>
#include <unordered_map>
#include <vector>
#include <genogrove/utility/tokenizer.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/gff_reader.hpp>

namespace handlers {
namespace gff {

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

using gff_key = gdt::key<gdt::interval, gio::gff_entry>;

// A structure edge is an edge that `idx` adds by itself to store the gene
// model; every other edge is a user link (`idx --links`). The two kinds differ
// only in their edge data. For a gene G1 whose transcripts T1 and T2 both
// have the exons E1, E2:
//   G1 -> T1   "transcript"        (and G1 -> T2)
//   T1 -> E1   "first:T1"     (the 5' exon; and T2 -> E1 "first:T2")
//   E1 -> E2   "next:T1,T2"   (one edge, lists every transcript that uses it)
// The exons of a transcript are a chain: a `first` edge starts it and names
// it, the `next` edges that list that name continue it.
inline constexpr std::string_view edge_transcript = "transcript";
inline constexpr std::string_view edge_first_prefix = "first:";
inline constexpr std::string_view edge_next_prefix = "next:";

// Calls f(id) for each chain that the edge text puts the target of the edge
// in: the id of a `first` edge, each id of a `next` edge.
template <typename F>
void for_each_chain_id(std::string_view text, F&& f) {
    if (text.starts_with(edge_first_prefix)) {
        f(text.substr(edge_first_prefix.size()));
    } else if (text.starts_with(edge_next_prefix)) {
        std::size_t pos = edge_next_prefix.size();
        while (const auto id = genogrove::utility::next_field(text, pos, ',')) {
            f(*id);
        }
    }
}

// True when the text is a `next` edge of the chain.
[[nodiscard]] inline bool continues_chain(std::string_view text, std::string_view chain_id) {
    bool listed = false;
    if (text.starts_with(edge_next_prefix)) {
        for_each_chain_id(text, [&](std::string_view id) { listed = listed || id == chain_id; });
    }
    return listed;
}

// True when the edge data marks a structure edge. A links file must not use
// such a text.
[[nodiscard]] bool is_structure_edge(std::string_view text);

// Build the linked model of a GFF/GTF file in an empty grove. Every key is in
// the tree:
//   - genes, transcripts and other feature types: one key per line;
//   - exons: one key per distinct (seqid, start, end, strand), shared by the
//     transcripts that use it;
//   - CDS, UTR and codon lines: list entries on their transcript record;
//   - edges gene -> transcript -> first exon -> next exon, 5' to 3'.
// The file must have a line for every gene and every transcript, and one
// transcript per exon, CDS, UTR or codon line (the layout of a GENCODE file).
// Lines may come in any order.
//
// Returns the keys: `idx --links` finds its names among them.
//
// Throws std::runtime_error for another layout and for records that contradict
// each other.
std::vector<gff_key*> grove_insert(
    ggs::grove<gdt::interval, gio::gff_entry, std::string>& grove,
    const std::string& filepath
);

// Add the links of a TSV file as edges. Each row is
//   tagA:tagB <TAB> nameA <TAB> nameB [<TAB> text]
// A name is the value of its tag on exactly one key. `gene_id` looks at genes
// only, `transcript_id` at transcripts only, `exon_id` at exons only (every id
// of a shared exon); any other tag looks at every key. Returns the number of
// edges added; a repeated row adds one edge.
//
// Throws std::runtime_error, with the line of the links file, for a malformed
// row, a tag no record has, a name that no key or more than one key has, and a
// text that marks a structure edge.
std::size_t apply_links(
    ggs::grove<gdt::interval, gio::gff_entry, std::string>& grove,
    const std::string& links_path,
    const std::vector<gff_key*>& keys
);

// Iterate a GFF/GTF query file, invoking cb(interval, seqid) for each record.
// The interval is in the CLI's canonical 0-based-inclusive space
// (gff_entry::to_interval). Split from result printing so a GFF query can run
// against a target of any payload type (see run_intersect).
template <typename F>
void iterate_query(const std::string& queryfile, F&& cb) {
    gio::gff_reader reader(queryfile);
    for (const auto& query_entry : reader) {
        cb(query_entry.to_interval(), query_entry.seqid);
    }
}

// The id of a record, as a result row shows it. An exon, in both formats:
// every exon_id, joined with ",". Any other record: the ID in GFF3; in GTF
// the gene_id of a gene, the transcript_id of a transcript, and "." for the
// rest.
[[nodiscard]] std::string record_id(const gio::gff_entry& payload);

// Print the fields of one GFF-payload hit (no trailing newline, so the caller
// can embed it in a wider row — see the --hops output in run_intersect). The
// output format tracks the target payload type, independent of the query type.
inline void print_gff_result(std::ostream& output, const gio::gff_entry& payload) {
    output << payload.seqid << "\t" << payload.start << "\t" << payload.end << "\t"
           << payload.type << "\t" << record_id(payload) << "\t" << payload.strand.value_or('.');
}

// The hits of one query in output order: a hit that is a member of a chain
// (an exon) comes after each hit that owns such a chain (its transcripts), in
// chain order, and not at its own place. Only the edge texts of the hits are
// read; no chain is walked. The hits must be in ascending order, as
// intersect() returns them: the chain order comes from it.
template <typename grove_t>
[[nodiscard]] std::vector<gff_key*> group_by_chain(grove_t& grove, const std::vector<gff_key*>& hits) {
    // chain id -> its members among the hits, as indexes, by position
    std::unordered_map<std::string, std::vector<std::size_t>> members;
    std::vector<bool> is_member(hits.size());
    for (std::size_t i = 0; i < hits.size(); ++i) {
        // Each chain of a member reaches it over one incoming edge.
        for (const std::string& text : grove.get_in_edges(hits[i])) {
            for_each_chain_id(text, [&](std::string_view id) {
                is_member[i] = true;
                members[std::string(id)].push_back(i);
            });
        }
    }
    if (members.empty()) {
        return hits;
    }

    std::vector<gff_key*> rows;
    std::vector<bool> placed(hits.size());
    for (std::size_t i = 0; i < hits.size(); ++i) {
        if (is_member[i]) {
            continue;
        }
        rows.push_back(hits[i]);
        for (const std::string& text : grove.get_edges(hits[i])) {
            if (!text.starts_with(edge_first_prefix)) {
                continue;
            }
            const auto chain = members.find(text.substr(edge_first_prefix.size()));
            if (chain == members.end()) {
                continue;
            }
            const std::size_t first = rows.size();
            for (const std::size_t member : chain->second) {
                rows.push_back(hits[member]);
                placed[member] = true;
            }
            if (hits[i]->get_data().strand == '-') {  // the chain runs 5' to 3'
                std::reverse(rows.begin() + static_cast<std::ptrdiff_t>(first), rows.end());
            }
        }
    }
    // A member whose chain owner does not overlap the query keeps a row.
    for (std::size_t i = 0; i < hits.size(); ++i) {
        if (is_member[i] && !placed[i]) {
            rows.push_back(hits[i]);
        }
    }
    return rows;
}

} // namespace gff
} // namespace handlers

#endif //GENOGROVE_CLI_HANDLERS_GFF_HPP
