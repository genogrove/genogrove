/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <handlers/bed.hpp>

namespace handlers {
namespace bed {

void grove_insert(
    ggs::grove<gdt::interval, gio::bed_entry>& grove,
    const std::string& filepath,
    bool sorted
) {
    gio::bed_reader reader(filepath);

    for (const auto& entry : reader) {
        gdt::interval iv(entry.start, entry.end - 1);
        if (sorted) {
            grove.insert_data(entry.chrom, iv, entry, ggs::sorted);
        } else {
            grove.insert_data(entry.chrom, iv, entry);
        }
    }
}

void grove_intersect(
    ggs::grove<gdt::interval, gio::bed_entry>& grove,
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