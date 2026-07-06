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

} // namespace gff
} // namespace handlers