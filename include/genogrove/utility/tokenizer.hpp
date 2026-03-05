/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_UTILITY_TOKENIZER_HPP
#define GENOGROVE_UTILITY_TOKENIZER_HPP

#include <optional>
#include <string_view>

namespace genogrove::utility {

    /**
     * @brief Extract the next delimited field from a string as a string_view (zero-copy).
     * @param line The string to tokenize
     * @param pos In/out cursor position; advanced past the delimiter on return
     * @param delimiter Field separator character (default: tab)
     * @return The next field, or nullopt when pos >= line.size()
     */
    inline std::optional<std::string_view> next_field(
        std::string_view line, size_t& pos, char delimiter = '\t') {
        if (pos >= line.size()) return std::nullopt;

        size_t end = line.find(delimiter, pos);
        if (end == std::string_view::npos) {
            std::string_view field = line.substr(pos);
            pos = line.size();
            return field;
        }

        std::string_view field = line.substr(pos, end - pos);
        pos = end + 1;
        return field;
    }

} // namespace genogrove::utility

#endif // GENOGROVE_UTILITY_TOKENIZER_HPP