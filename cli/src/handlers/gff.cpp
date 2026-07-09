/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <handlers/gff.hpp>

#include <stdexcept>
#include <string>

namespace handlers {
namespace gff {

void grove_insert(
    ggs::grove<gdt::interval, gio::gff_entry, std::string>& grove,
    const std::string& filepath,
    bool sorted,
    name_to_key_map* name_map,
    std::string_view name_tag
) {
    gio::gff_reader reader(filepath);

    for (const auto& entry : reader) {
        // Canonical 0-based-inclusive space: GFF is 1-based inclusive, so
        // [start, end] -> [start-1, end-1]. Matches the BED conversion so
        // cross-type queries (BED query vs GFF index, and vice versa) overlap
        // in a common coordinate space. Output still prints raw entry coords.
        gdt::interval iv(entry.start - 1, entry.end - 1);
        gdt::key<gdt::interval, gio::gff_entry>* key_ptr = sorted
            ? grove.insert_data(entry.seqid, iv, entry, ggs::sorted)
            : grove.insert_data(entry.seqid, iv, entry);

        if (!name_map) {
            continue;
        }
        // Resolve the chosen attribute from the stored entry so the map's
        // string_view points into the grove's stable key_storage, not the
        // reader's per-record buffer. Heterogeneous find (std::less<>) lets a
        // string_view probe the std::string-keyed attribute map without a copy.
        const auto& attrs = key_ptr->get_data().attributes;
        const auto attr_it = attrs.find(name_tag);
        if (attr_it == attrs.end()) {
            throw std::runtime_error(
                "Error: GFF/GTF record '" + entry.seqid + ":" +
                std::to_string(entry.start) + "-" + std::to_string(entry.end) +
                "' has no '" + std::string(name_tag) +
                "' attribute (required by --gff-name-tag for --links)");
        }
        const std::string& value = attr_it->second;
        std::string_view value_view(value.data(), value.size());
        auto [it, inserted] = name_map->emplace(value_view, key_ptr);
        if (!inserted) {
            throw std::runtime_error(
                "Error: duplicate GFF/GTF name '" + std::string(value_view) +
                "' for attribute '" + std::string(name_tag) +
                "' (names must be unique to use --links)");
        }
    }
}

} // namespace gff
} // namespace handlers