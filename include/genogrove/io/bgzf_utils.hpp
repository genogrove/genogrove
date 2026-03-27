/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_BGZF_UTILS_HPP
#define GENOGROVE_IO_BGZF_UTILS_HPP

#include <optional>
#include <string>
#include <cstddef>

#include <htslib/bgzf.h>

namespace genogrove::io {

    /// Read the next non-empty, non-comment line from a BGZF stream.
    /// Skips lines that are empty or start with '#'. Strips trailing CR.
    /// Increments line_num for each line consumed.
    /// Returns the line content, or std::nullopt on EOF.
    /// Throws std::runtime_error on I/O error.
    std::optional<std::string> bgzf_next_data_line(BGZF* file, size_t& line_num);

    /// Check whether more data is available in a BGZF stream (peek-based).
    bool bgzf_has_next(BGZF* file);

}

#endif //GENOGROVE_IO_BGZF_UTILS_HPP