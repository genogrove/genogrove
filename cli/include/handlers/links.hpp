/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_LINKS_HPP
#define GENOGROVE_CLI_HANDLERS_LINKS_HPP

#include <cstddef>
#include <iosfwd>
#include <string>
#include <utility>
#include <vector>
#include <handlers/bed.hpp>

namespace handlers {
namespace links {

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

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
// names up in name_map and call `grove.add_edge(keyA, keyB)`. Returns the
// number of edges added.
//
// Throws std::runtime_error on:
//   - file open failure
//   - parser errors (delegated to parse_links_tsv)
//   - a name that is not present in name_map — the message names the
//     missing name so the user can fix the input
size_t apply_to_grove(
    ggs::grove<gdt::interval, gio::bed_entry>& grove,
    const std::string& links_path,
    const handlers::bed::name_to_key_map& name_map
);

} // namespace links
} // namespace handlers

#endif // GENOGROVE_CLI_HANDLERS_LINKS_HPP