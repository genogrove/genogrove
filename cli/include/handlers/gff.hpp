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

// Edge data of the structure edges. A user link (`idx --links`) carries the
// user's text or none, so these words tell the two apart.
inline constexpr std::string_view edge_transcript = "transcript";   // gene -> transcript
inline constexpr std::string_view edge_first_exon = "first_exon";   // transcript -> its 5' exon
inline constexpr std::string_view edge_next_exon_prefix = "next_exon:";  // exon -> next exon, then "T1,T2"
inline constexpr std::string_view edge_child = "child";             // a parent -> a plain key that names it

// Source (column 2) of a gene or transcript record the file has no line for.
inline constexpr std::string_view made_source = "genogrove";

// What grove_insert had to make itself, for the `idx` end report.
struct build_report {
    std::size_t genes_made = 0;
    std::size_t transcripts_made = 0;
    std::size_t transcripts_made_without_exons = 0;  // span is the CDS/codon/UTR lines only
};

// Build the linked model of a GFF/GTF file in an empty grove:
//   - genes, transcripts and every other feature type: indexed keys;
//   - exons: external keys, one per distinct (seqid, start, end, strand);
//   - CDS, UTR and codon lines: list entries on their transcript record
//     ("start-end", CDS as "start-end:phase", file coordinates);
//   - edges gene -> transcript -> first exon -> next exon in 5' to 3' order,
//     with one exon -> exon edge per pair shared by its transcripts;
//   - an edge parent -> key for every other indexed key that names a parent
//     (GFF3 Parent; in a GTF its transcript, else its gene).
// A gene or transcript that only child lines name is made from them (source =
// made_source), one made gene per chromosome. A CDS, UTR or codon line with no
// transcript is a plain indexed key. Lines may come in any order: the indexed
// keys are collected, sorted and bulk-inserted after the file is read.
//
// Throws std::runtime_error for a GTF exon with no transcript_id, a repeated
// gene_id / transcript_id on the lines that define them, a repeated GFF3 ID,
// and a transcript whose lines are on different chromosomes or strands.
//
// When name_map is non-null, every key's `name_tag` attribute value is
// recorded with its key pointer for `idx --links` resolution. A key missing
// `name_tag` throws, as does a value shared by two keys.
build_report grove_insert(
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
