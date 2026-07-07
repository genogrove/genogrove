/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_LINKS_HPP
#define GENOGROVE_CLI_HANDLERS_LINKS_HPP

#include <cstddef>
#include <fstream>
#include <istream>
#include <set>
#include <stdexcept>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <handlers/name_map.hpp>

namespace handlers {
namespace links {

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;

// Parse a 2-column TSV of (nameA<TAB>nameB) link rows.
// Skips lines that are blank or begin with '#'. Trailing '\r' is stripped.
// Throws std::runtime_error on any row with a column count other than two —
// the message names the line number for easier debugging.
//
// Pure parser — no grove involvement, so the same function backs both the
// CLI applier and the unit tests against std::stringstream.
[[nodiscard]] std::vector<std::pair<std::string, std::string>>
parse_links_tsv(std::istream& is);

// Read a TSV from the given path and, for each (nameA, nameB) row, look both
// names up in name_map and call `grove.add_edge(keyA, keyB)`. Repeated rows
// for the same (source, target) pair are collapsed — `graph_overlay` does not
// deduplicate, so this avoids silently doubling an edge from a duplicated
// line. Returns the number of distinct edges added.
//
// Templated on the payload so it serves both BED (`bed_entry`) and GFF/GTF
// (`gff_entry`) groves — only the name-map key differs, the resolution logic
// is identical.
//
// Throws std::runtime_error on:
//   - file open failure
//   - parser errors (delegated to parse_links_tsv)
//   - a name that is not present in name_map — the message names the
//     missing name so the user can fix the input
template <typename payload_t>
std::size_t apply_to_grove(
    ggs::grove<gdt::interval, payload_t>& grove,
    const std::string& links_path,
    const handlers::name_to_key_map<payload_t>& name_map
) {
    std::ifstream in(links_path);
    if (!in) {
        throw std::runtime_error("Error: could not open links file: " + links_path);
    }
    const auto rows = parse_links_tsv(in);

    // graph_overlay::add_edge does not deduplicate — calling it twice with the
    // same (source, target) appends a parallel edge. A links file is a
    // user-authored list, so a repeated row is almost certainly a mistake;
    // collapse repeats here so each distinct edge is added at most once.
    // Names are still resolved on every row, so a typo on a duplicate line is
    // still reported.
    using key_ptr = gdt::key<gdt::interval, payload_t>*;
    std::set<std::pair<key_ptr, key_ptr>> seen;

    std::size_t edges_added = 0;
    for (const auto& [name_a, name_b] : rows) {
        const auto it_a = name_map.find(std::string_view(name_a));
        if (it_a == name_map.end()) {
            throw std::runtime_error(
                "Error: links file references name '" + name_a +
                "' which is not present as an indexed record name");
        }
        const auto it_b = name_map.find(std::string_view(name_b));
        if (it_b == name_map.end()) {
            throw std::runtime_error(
                "Error: links file references name '" + name_b +
                "' which is not present as an indexed record name");
        }
        if (seen.emplace(it_a->second, it_b->second).second) {
            grove.add_edge(it_a->second, it_b->second);
            ++edges_added;
        }
    }
    return edges_added;
}

} // namespace links
} // namespace handlers

#endif // GENOGROVE_CLI_HANDLERS_LINKS_HPP