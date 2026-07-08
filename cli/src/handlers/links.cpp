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

// Parse one non-comment line into a link_row. Accepts 2 columns
// (source<TAB>target) or 3 (source<TAB>target<TAB>metadata). Every column must
// be non-empty. Throws on 1 or 4+ columns, or any empty column, naming the
// line number.
link_row parse_row(const std::string& line, std::size_t line_num) {
    auto fail = [line_num]() {
        return std::runtime_error(
            "Error: malformed links TSV at line " + std::to_string(line_num) +
            ": expected 2 or 3 tab-separated non-empty columns "
            "(source, target, [metadata])");
    };

    const auto tab1 = line.find('\t');
    if (tab1 == std::string::npos) {
        throw fail();  // 1 column
    }
    const auto tab2 = line.find('\t', tab1 + 1);

    link_row row;
    row.source.assign(line, 0, tab1);

    if (tab2 == std::string::npos) {
        row.target.assign(line, tab1 + 1, std::string::npos);  // 2 columns
    } else {
        if (line.find('\t', tab2 + 1) != std::string::npos) {
            throw fail();  // 4+ columns
        }
        row.target.assign(line, tab1 + 1, tab2 - (tab1 + 1));
        row.metadata = line.substr(tab2 + 1);  // 3 columns
        if (row.metadata->empty()) {
            throw fail();  // empty metadata column is ambiguous — reject
        }
    }

    if (row.source.empty() || row.target.empty()) {
        throw fail();
    }
    return row;
}

} // namespace

std::vector<link_row> parse_links_tsv(std::istream& is) {
    std::vector<link_row> rows;
    std::string line;
    std::size_t line_num = 0;
    while (std::getline(is, line)) {
        ++line_num;
        strip_trailing_cr(line);
        if (line.empty() || line.front() == '#') {
            continue;
        }
        rows.push_back(parse_row(line, line_num));
    }
    return rows;
}

} // namespace links
} // namespace handlers
