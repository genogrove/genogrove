/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_BGZF_UTILS_HPP
#define GENOGROVE_IO_BGZF_UTILS_HPP

#include <filesystem>
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

    /// Rewind a BGZF stream to the start of the file.
    /// Tries `bgzf_seek` first (works for BGZF). On failure, falls back to
    /// close + reopen, which works for plain gzip and raw files (which lack
    /// a block index and cannot be seeked). The handle is replaced on
    /// reopen, hence the by-reference parameter.
    /// Throws std::runtime_error if reopen fails.
    void bgzf_rewind_to_start(BGZF*& file, const std::filesystem::path& fpath);

}

#endif //GENOGROVE_IO_BGZF_UTILS_HPP