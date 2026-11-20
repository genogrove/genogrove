/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_LINKS_HPP
#define GENOGROVE_CLI_HANDLERS_LINKS_HPP

#include <cstddef>
#include <fstream>
#include <istream>
#include <optional>
#include <set>
#include <stdexcept>
#include <string>
#include <string_view>
#include <tuple>
#include <vector>

#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <handlers/name_map.hpp>

namespace handlers {
namespace links {

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;

// One parsed link row: a directed edge source -> target, with optional
// per-edge metadata (the TSV's 3rd column). `metadata == std::nullopt` is a
// 2-column row (plain edge); a present-but-empty metadata string never occurs
// (the parser rejects an empty 3rd column).
struct link_row {
    std::string source;
    std::string target;
    std::optional<std::string> metadata;
    std::string tags;      // the first column of a GFF/GTF links file, else empty
    std::size_t line = 0;  // in the links file, for error messages
};

// Parse a TSV of link rows: (nameA<TAB>nameB) or (nameA<TAB>nameB<TAB>metadata).
// With `tag_column` (a GFF/GTF index) each row has one more column in front,
// kept in link_row::tags.
// Skips lines that are blank or begin with '#'. Trailing '\r' is stripped.
// Throws std::runtime_error, naming the line number, on any row with another
// number of tab-separated columns, or with an empty column.
//
// Pure parser — no grove involvement, so the same function backs both the
// CLI applier and the unit tests against std::stringstream.
[[nodiscard]] std::vector<link_row> parse_links_tsv(std::istream& is, bool tag_column = false);

// Read a TSV from the given path and, for each row, look both names up in
// name_map and add the directed edge — with the row's 3rd-column metadata when
// present. Repeated rows for the same (source, target, metadata) triple are
// collapsed — `graph_overlay` does not deduplicate, so this avoids silently
// doubling an edge from a duplicated line; a repeated pair carrying *different*
// metadata is kept as two parallel edges. Returns the number of distinct edges
// added.
//
// The grove's edge_data_type is std::string (the CLI attaches metadata as a
// raw string). Used for a BED index; a GFF/GTF index resolves its names by
// tag, see handlers::gff::apply_links.
//
// Throws std::runtime_error on:
//   - file open failure
//   - parser errors (delegated to parse_links_tsv)
//   - a name that is not present in name_map — the message names the
//     missing name so the user can fix the input
template <typename payload_t>
std::size_t apply_to_grove(
    ggs::grove<gdt::interval, payload_t, std::string>& grove,
    const std::string& links_path,
    const handlers::name_to_key_map<payload_t>& name_map
) {
    std::ifstream in(links_path);
    if (!in) {
        throw std::runtime_error("Error: could not open links file: " + links_path);
    }
    const auto rows = parse_links_tsv(in);

    // Collapse identical rows so each distinct edge is added at most once.
    // Names are still resolved on every row, so a typo on a duplicate line is
    // still reported. The metadata is part of the key: the same pair with two
    // different metadata values is two distinct edges, not a duplicate.
    using key_ptr = gdt::key<gdt::interval, payload_t>*;
    std::set<std::tuple<key_ptr, key_ptr, std::optional<std::string>>> seen;

    std::size_t edges_added = 0;
    for (const auto& row : rows) {
        const auto it_a = name_map.find(std::string_view(row.source));
        if (it_a == name_map.end()) {
            throw std::runtime_error(
                "Error: links file references name '" + row.source +
                "' which is not present as an indexed record name");
        }
        const auto it_b = name_map.find(std::string_view(row.target));
        if (it_b == name_map.end()) {
            throw std::runtime_error(
                "Error: links file references name '" + row.target +
                "' which is not present as an indexed record name");
        }
        if (seen.emplace(it_a->second, it_b->second, row.metadata).second) {
            if (row.metadata) {
                grove.add_edge(it_a->second, it_b->second, *row.metadata);
            } else {
                grove.add_edge(it_a->second, it_b->second);
            }
            ++edges_added;
        }
    }
    return edges_added;
}

} // namespace links
} // namespace handlers

#endif // GENOGROVE_CLI_HANDLERS_LINKS_HPP
