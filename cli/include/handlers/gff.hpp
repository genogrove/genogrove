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
// only in their edge data. For a gene G1 with transcript T1 and exons E1, E2:
//   G1 -> T1   "transcript"
//   T1 -> E1   "first_exon"        (the 5' exon)
//   E1 -> E2   "next_exon:T1"      (lists every transcript that uses the edge)
inline constexpr std::string_view edge_transcript = "transcript";
inline constexpr std::string_view edge_first_exon = "first_exon";
inline constexpr std::string_view edge_next_exon_prefix = "next_exon:";

// True when the edge data marks a structure edge. `isec --hops` does not
// follow such an edge, and a links file must not use these texts.
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
// (gff_entry::to_interval). This matches the BED conversion, so a GFF query and
// a BED query over the same physical region produce the same interval (see
// run_intersect). Split from result printing so a GFF query can run against a
// target of any payload type.
template <typename F>
void iterate_query(const std::string& queryfile, F&& cb) {
    gio::gff_reader reader(queryfile);
    for (const auto& query_entry : reader) {
        cb(query_entry.to_interval(), query_entry.seqid);
    }
}

// The id of a record, as a result row shows it ("." for none). GFF3: the ID.
// GTF: gene_id of a gene, transcript_id of a transcript. An exon: every
// exon_id, joined with ",". For a transcript, also the id that the next_exon
// edges list.
[[nodiscard]] std::string record_id(const gio::gff_entry& payload);

// True when the text of a next_exon edge lists the transcript.
[[nodiscard]] bool edge_names_transcript(std::string_view edge_text,
                                         std::string_view transcript_id);

// Print the fields of one GFF-payload hit (no trailing newline, so the caller
// can embed it in a wider row — see the --hops output in run_intersect). The
// output format tracks the target payload type, independent of the query type.
inline void print_gff_result(std::ostream& output, const gio::gff_entry& payload) {
    output << payload.seqid << "\t" << payload.start << "\t" << payload.end << "\t"
           << payload.type << "\t" << record_id(payload) << "\t" << payload.strand.value_or('.');
}

// The exons of a transcript's chain that overlap the query, each with its rank
// in the chain (1 = 5' exon). No value when `hit` is not a transcript or has
// no exon lines.
template <typename grove_t>
std::optional<std::vector<std::pair<gff_key*, std::size_t>>> overlapping_exons(
    grove_t& grove, const gff_key* hit, const gdt::interval& query) {
    // get_neighbors_if tests the edge text first, so the in-place view loads
    // only the block of the one target that matches.
    const auto follow = [&grove](const gff_key* source, auto matches) -> gff_key* {
        const auto targets = grove.get_neighbors_if(source, matches);
        return targets.empty() ? nullptr : targets.front();
    };

    const gio::gff_entry& record = hit->get_data();
    gff_key* exon = nullptr;
    if (record.type == "transcript") {
        exon = follow(hit, [](const std::string& text) { return text == edge_first_exon; });
    }
    if (exon == nullptr) {
        return std::nullopt;
    }

    const std::string id = record_id(record);
    const bool descending = record.strand == '-';  // the chain runs 5' to 3'
    std::vector<std::pair<gff_key*, std::size_t>> overlapping;
    for (std::size_t rank = 1; exon != nullptr; ++rank) {
        const gdt::interval& span = exon->get_value();
        if (descending ? span.get_end() < query.get_start()
                       : span.get_start() > query.get_end()) {
            break;  // every later exon is further from the query
        }
        if (gdt::interval::overlaps(span, query)) {
            overlapping.emplace_back(exon, rank);
        }
        exon = follow(exon, [&id](const std::string& text) {
            return edge_names_transcript(text, id);
        });
    }
    return overlapping;
}

// One hit of `isec --exons`, with its newline(s). A transcript is followed by
// one row per exon of its chain that overlaps the query:
//   <exon row> <TAB> <transcript id> <TAB> <rank>
// A transcript whose chain has no such exon gets "<TAB>intron" on its own row.
template <typename grove_t>
void print_gff_hit_with_exons(std::ostream& output, grove_t& grove, const gff_key* hit,
                              const gdt::interval& query) {
    print_gff_result(output, hit->get_data());
    const auto exons = overlapping_exons(grove, hit, query);
    if (!exons) {
        output << '\n';
        return;
    }
    output << (exons->empty() ? "\tintron\n" : "\n");
    const std::string id = record_id(hit->get_data());
    for (const auto& [key, rank] : *exons) {
        print_gff_result(output, key->get_data());
        output << '\t' << id << '\t' << rank << '\n';
    }
}

} // namespace gff
} // namespace handlers

#endif //GENOGROVE_CLI_HANDLERS_GFF_HPP
