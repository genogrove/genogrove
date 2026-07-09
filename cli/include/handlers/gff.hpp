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

// Insert GFF/GTF file entries into a grove. When sorted is true, entries are
// inserted via the sorted-append fast path — the caller asserts the file is
// already ordered.
//
// When name_map is non-null, each entry's `name_tag` attribute value is
// recorded alongside the key pointer returned by `insert_data()`, for
// `idx --links` resolution. Unlike BED's optional column-4 name, the attribute
// is mandatory here: a record missing `name_tag` throws (the user picked that
// tag as the identifier), as does a duplicate value across two records —
// `--links` requires every name to resolve to exactly one interval.
void grove_insert(
    ggs::grove<gdt::interval, gio::gff_entry, std::string>& grove,
    const std::string& filepath,
    bool sorted = false,
    name_to_key_map* name_map = nullptr,
    std::string_view name_tag = {}
);

// Iterate a GFF/GTF query file, invoking cb(interval, seqid) for each record.
// The interval is converted to the CLI's canonical 0-based-inclusive space:
// GFF is 1-based inclusive, so [start, end] -> interval(start-1, end-1). This
// matches the BED conversion, so a GFF query and a BED query over the same
// physical region produce the same interval (see run_intersect). Split from
// result printing so a GFF query can run against a target of any payload type.
template <typename F>
void for_each_gff_query(const std::string& queryfile, F&& cb) {
    gio::gff_reader reader(queryfile);
    for (const auto& query_entry : reader) {
        cb(gdt::interval(query_entry.start - 1, query_entry.end - 1), query_entry.seqid);
    }
}

// Print one result row for a GFF-payload hit. The output format tracks the
// target payload type, independent of the query file type.
inline void print_gff_result(std::ostream& output, const gio::gff_entry& payload) {
    output << payload.seqid << "\t" << payload.start << "\t" << payload.end << "\n";
}

} // namespace gff
} // namespace handlers

#endif //GENOGROVE_CLI_HANDLERS_GFF_HPP