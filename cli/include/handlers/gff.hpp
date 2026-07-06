/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_GFF_HPP
#define GENOGROVE_CLI_HANDLERS_GFF_HPP

#include <string>
#include <ostream>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/gff_reader.hpp>

namespace handlers {
namespace gff {

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

// Insert GFF/GTF file entries into a grove. When sorted is true, entries are
// inserted via the sorted-append fast path — the caller asserts the file is
// already ordered.
void grove_insert(
    ggs::grove<gdt::interval, gio::gff_entry>& grove,
    const std::string& filepath,
    bool sorted = false
);

// Intersect a GFF/GTF query file against a populated grove and write hits.
// Templated on the grove type so both the in-memory grove<> and the
// partial-read grove_view<> — which share the same intersect()/get_keys()
// API — can be queried through one implementation.
template <typename grove_type>
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