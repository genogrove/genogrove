/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_GFF_HPP
#define GENOGROVE_CLI_HANDLERS_GFF_HPP

#include <string>
#include <string_view>
#include <ostream>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/gff_reader.hpp>
#include <handlers/name_map.hpp>

namespace handlers {
namespace gff {

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

// GFF/GTF links match on a chosen attribute value. See handlers/name_map.hpp.
using name_to_key_map = handlers::name_to_key_map<gio::gff_entry>;

// Edge data of the structure edges.
inline constexpr std::string_view edge_transcript = "transcript";        // gene -> transcript
inline constexpr std::string_view edge_first_exon = "first_exon";        // transcript -> 5' exon
inline constexpr std::string_view edge_next_exon_prefix = "next_exon:";  // exon -> exon, + "T1,T2"

// True for the edge data of a structure edge. A user link must not carry it.
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
// each other. With a name_map, each key's `name_tag` value is recorded for
// `idx --links`; an indexed record without the tag, or a repeated value, throws.
void grove_insert(
    ggs::grove<gdt::interval, gio::gff_entry, std::string>& grove,
    const std::string& filepath,
    name_to_key_map* name_map = nullptr,
    std::string_view name_tag = {}
);

// Iterate a GFF/GTF query file, invoking cb(interval, seqid) for each record.
// The interval is in the CLI's canonical 0-based-inclusive space
// (gff_entry::to_interval). This matches the BED conversion, so a GFF query and
// a BED query over the same physical region produce the same interval (see
// run_intersect). Split from result printing so a GFF query can run against a
// target of any payload type.
template <typename F>
void for_each_gff_query(const std::string& queryfile, F&& cb) {
    gio::gff_reader reader(queryfile);
    for (const auto& query_entry : reader) {
        cb(query_entry.to_interval(), query_entry.seqid);
    }
}

// Print the fields of one GFF-payload hit (no trailing newline, so the caller
// can embed it in a wider row — see the --hops output in run_intersect). The
// output format tracks the target payload type, independent of the query type.
inline void print_gff_result(std::ostream& output, const gio::gff_entry& payload) {
    output << payload.seqid << "\t" << payload.start << "\t" << payload.end;
}

} // namespace gff
} // namespace handlers

#endif //GENOGROVE_CLI_HANDLERS_GFF_HPP
