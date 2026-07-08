/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_BED_HPP
#define GENOGROVE_CLI_HANDLERS_BED_HPP

#include <ostream>
#include <string>
#include <string_view>
#include <unordered_map>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>
#include <genogrove/io/bed_reader.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <handlers/name_map.hpp>
#include <handlers/queryable.hpp>

namespace handlers {
namespace bed {

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

// BED links match on column 4 (bed_entry::name). See handlers/name_map.hpp.
using name_to_key_map = handlers::name_to_key_map<gio::bed_entry>;

// Insert BED file entries into a grove. When sorted is true, entries are
// inserted via the sorted-append fast path — the caller asserts the file is
// already ordered.
//
// When name_map is non-null, each inserted entry's column-4 name is recorded
// alongside the key pointer returned by `insert_data()`. Records without a
// name are silently omitted from the map (no link can reference them). A
// duplicate name across two records throws `std::runtime_error`, since
// `--links` requires every reachable name to resolve to exactly one interval.
void grove_insert(
    ggs::grove<gdt::interval, gio::bed_entry, std::string>& grove,
    const std::string& filepath,
    bool sorted = false,
    name_to_key_map* name_map = nullptr
);

// Intersect a BED query file against a populated grove and write hits.
// Constrained on interval_queryable so both the in-memory grove<> and the
// partial-read grove_view<> can be queried through one implementation.
template <interval_queryable grove_type>
void grove_intersect(
    grove_type& grove,
    const std::string& queryfile,
    std::ostream& output
) {
    gio::bed_reader reader(queryfile);

    for (const auto& query_entry : reader) {
        gdt::interval query(query_entry.start, query_entry.end - 1);
        auto results = grove.intersect(query, query_entry.chrom);

        for(auto* result : results.get_keys()) {
            output << result->get_data().chrom << "\t"
                   << result->get_data().start << "\t"
                   << result->get_data().end << "\n";
        }
    }
}

} // namespace bed
} // namespace handlers

#endif //GENOGROVE_CLI_HANDLERS_BED_HPP
