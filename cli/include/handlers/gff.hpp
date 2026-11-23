/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_GFF_HPP
#define GENOGROVE_CLI_HANDLERS_GFF_HPP

#include <cstddef>
#include <optional>
#include <string>
#include <string_view>
#include <ostream>
#include <utility>
#include <vector>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/gff_reader.hpp>

namespace handlers {
namespace gff {

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

using gff_key = gdt::key<gdt::interval, gio::gff_entry>;

// The keys of a built index: `idx --links` finds its names among them.
struct gff_keys {
    std::vector<gff_key*> indexed;   // keys in the tree
    std::vector<gff_key*> external;  // keys only in the graph
};

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

// True when the edge data marks a structure edge. A links file must not use
// such a text.
[[nodiscard]] bool is_structure_edge(std::string_view text);

// Build the linked model of a GFF/GTF file in an empty grove:
//   - genes, transcripts and other feature types: indexed keys;
//   - exons: external keys, one per distinct (seqid, start, end, strand);
//   - CDS, UTR and codon lines: list entries on their transcript record;
//   - edges gene -> transcript -> first exon -> next exon, 5' to 3'.
// The file must have a line for every gene and every transcript, and one
// transcript per exon, CDS, UTR or codon line (the layout of a GENCODE file).
// Lines may come in any order.
//
// Throws std::runtime_error for another layout and for records that contradict
// each other.
gff_keys grove_insert(
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
    const gff_keys& keys
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

// True when the text of a `next` edge lists the chain.
[[nodiscard]] bool next_edge_lists(std::string_view edge_text, std::string_view chain_id);

// Print the fields of one GFF-payload hit (no trailing newline, so the caller
// can embed it in a wider row — see the --hops output in run_intersect). The
// output format tracks the target payload type, independent of the query type.
inline void print_gff_result(std::ostream& output, const gio::gff_entry& payload) {
    output << payload.seqid << "\t" << payload.start << "\t" << payload.end << "\t"
           << payload.type << "\t" << record_id(payload) << "\t" << payload.strand.value_or('.');
}

// The members of the chain that starts at `hit` (the exons of a transcript)
// that overlap the query, in chain order. They are not in the tree, so the
// overlap search does not find them. Empty when no chain starts at `hit`.
template <typename grove_t>
std::vector<gff_key*> overlapping_members(grove_t& grove, const gff_key* hit,
                                          const gdt::interval& query) {
    // get_neighbors_if tests the edge text first, so the in-place view loads
    // only the block of the one target that matches.
    const auto follow = [&grove](const gff_key* source, auto matches) -> gff_key* {
        const auto targets = grove.get_neighbors_if(source, matches);
        return targets.empty() ? nullptr : targets.front();
    };

    std::string id;
    gff_key* member = follow(hit, [&id](const std::string& text) {
        if (!text.starts_with(edge_first_prefix)) {
            return false;
        }
        id = text.substr(edge_first_prefix.size());
        return true;
    });
    const bool descending = hit->get_data().strand == '-';  // the chain runs 5' to 3'
    std::vector<gff_key*> overlapping;
    while (member != nullptr) {
        const gdt::interval& span = member->get_value();
        if (descending ? span.get_end() < query.get_start()
                       : span.get_start() > query.get_end()) {
            break;  // every later member is further from the query
        }
        if (gdt::interval::overlaps(span, query)) {
            overlapping.push_back(member);
        }
        member = follow(member, [&id](const std::string& text) {
            return next_edge_lists(text, id);
        });
    }
    return overlapping;
}

} // namespace gff
} // namespace handlers

#endif //GENOGROVE_CLI_HANDLERS_GFF_HPP
