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

// Iterate a BED query file, invoking cb(interval, chrom) for each record. The
// interval is in the CLI's canonical 0-based-inclusive space (BED is natively
// 0-based half-open, hence end-1). Split from result printing so a BED query
// can run against a target of any payload type (see run_intersect).
template <typename F>
void for_each_bed_query(const std::string& queryfile, F&& cb) {
    gio::bed_reader reader(queryfile);
    for (const auto& query_entry : reader) {
        cb(gdt::interval(query_entry.start, query_entry.end - 1), query_entry.chrom);
    }
}

// Print one result row for a BED-payload hit. The output format tracks the
// target payload type, independent of the query file type.
inline void print_bed_result(std::ostream& output, const gio::bed_entry& payload) {
    output << payload.chrom << "\t" << payload.start << "\t" << payload.end << "\n";
}

} // namespace bed
} // namespace handlers

#endif //GENOGROVE_CLI_HANDLERS_BED_HPP
