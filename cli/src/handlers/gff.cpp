/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <handlers/gff.hpp>

namespace handlers {
namespace gff {

void grove_insert(
    ggs::grove<gdt::interval, gio::gff_entry>& grove,
    const std::string& filepath,
    bool sorted
) {
    gio::gff_reader reader(filepath);

    for (const auto& entry : reader) {
        gdt::interval iv(entry.start, entry.end);
        if (sorted) {
            grove.insert_data(entry.seqid, iv, entry, ggs::sorted);
        } else {
            grove.insert_data(entry.seqid, iv, entry);
        }
    }
}

void grove_intersect(
    ggs::grove<gdt::interval, gio::gff_entry>& grove,
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