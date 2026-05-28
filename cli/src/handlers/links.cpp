/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <handlers/links.hpp>

#include <fstream>
#include <istream>
#include <sstream>
#include <stdexcept>
#include <string>
#include <string_view>

namespace handlers {
namespace links {

namespace {

// Strip a single trailing CR so CRLF-terminated lines parse identically to LF.
void strip_trailing_cr(std::string& s) {
    if (!s.empty() && s.back() == '\r') {
        s.pop_back();
    }
}

// Split `line` on the first tab character. Returns (left, right) if exactly
// one tab was found; otherwise std::nullopt-ish behaviour via the bool flag.
bool split_two_columns(const std::string& line,
                       std::string& out_a,
                       std::string& out_b) {
    const auto first_tab = line.find('\t');
    if (first_tab == std::string::npos) {
        return false;  // 1 column
    }
    if (line.find('\t', first_tab + 1) != std::string::npos) {
        return false;  // 3+ columns
    }
    out_a.assign(line, 0, first_tab);
    out_b.assign(line, first_tab + 1, std::string::npos);
    return !out_a.empty() && !out_b.empty();
}

} // namespace

std::vector<std::pair<std::string, std::string>>
parse_links_tsv(std::istream& is) {
    std::vector<std::pair<std::string, std::string>> rows;
    std::string line;
    std::size_t line_num = 0;
    while (std::getline(is, line)) {
        ++line_num;
        strip_trailing_cr(line);
        if (line.empty() || line.front() == '#') {
            continue;
        }
        std::string a, b;
        if (!split_two_columns(line, a, b)) {
            throw std::runtime_error(
                "Error: malformed links TSV at line " + std::to_string(line_num) +
                ": expected 2 tab-separated non-empty columns");
        }
        rows.emplace_back(std::move(a), std::move(b));
    }
    return rows;
}

size_t apply_to_grove(
    ggs::grove<gdt::interval, gio::bed_entry>& grove,
    const std::string& links_path,
    const handlers::bed::name_to_key_map& name_map
) {
    std::ifstream in(links_path);
    if (!in) {
        throw std::runtime_error("Error: could not open links file: " + links_path);
    }
    const auto rows = parse_links_tsv(in);

    size_t edges_added = 0;
    for (const auto& [name_a, name_b] : rows) {
        const auto it_a = name_map.find(std::string_view(name_a));
        if (it_a == name_map.end()) {
            throw std::runtime_error(
                "Error: links file references name '" + name_a +
                "' which is not present as a BED record name");
        }
        const auto it_b = name_map.find(std::string_view(name_b));
        if (it_b == name_map.end()) {
            throw std::runtime_error(
                "Error: links file references name '" + name_b +
                "' which is not present as a BED record name");
        }
        grove.add_edge(it_a->second, it_b->second);
        ++edges_added;
    }
    return edges_added;
}

} // namespace links
} // namespace handlers