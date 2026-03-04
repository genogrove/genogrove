/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the
 * GNU General Public License v3.0 or later.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_UTILITY_CHAR_UTILS_HPP
#define GENOGROVE_UTILITY_CHAR_UTILS_HPP

namespace genogrove::utility {

    /// Locale-independent digit check, used by bed_reader and gff_reader
    /// for coordinate validation.
    constexpr bool is_digit(unsigned char c) {
        return c >= '0' && c <= '9';
    }

} // namespace genogrove::utility

#endif // GENOGROVE_UTILITY_CHAR_UTILS_HPP
