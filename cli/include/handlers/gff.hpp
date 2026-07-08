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
#include <handlers/queryable.hpp>

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

// Intersect a GFF/GTF query file against a populated grove and write hits.
// Constrained on interval_queryable so both the in-memory grove<> and the
// partial-read grove_view<> can be queried through one implementation.
template <interval_queryable grove_type>
void grove_intersect(
    grove_type& grove,
    const std::string& queryfile,
    std::ostream& output
) {
    gio::gff_reader reader(queryfile);

    for (const auto& query_entry : reader) {
        gdt::interval query(query_entry.start, query_entry.end);
        auto results = grove.intersect(query, query_entry.seqid);

        for(auto* result : results.get_keys()) {
            output << result->get_data().seqid << "\t"
                   << result->get_data().start << "\t"
                   << result->get_data().end << "\n";
        }
    }
}

} // namespace gff
} // namespace handlers

#endif //GENOGROVE_CLI_HANDLERS_GFF_HPP