/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <handlers/links.hpp>

#include <istream>
#include <stdexcept>
#include <string>
#include <utility>

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

} // namespace links
} // namespace handlers
