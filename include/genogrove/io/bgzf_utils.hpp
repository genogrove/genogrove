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
#include <htslib/hts.h>
#include <htslib/tbx.h>
#include <htslib/kstring.h>

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

    /// RAII wrapper for tabix region iteration over a bgzip-compressed,
    /// tabix-indexed (`.tbi`/`.csi`) file. Construction opens the file, loads
    /// the index, and seeks to `region` (an htslib region string such as
    /// "chr7:55000000-55300000"); next_line() then yields the data lines
    /// overlapping that region, decoupled from the streaming bgzf path so the
    /// readers' shared parse_line() can consume either source.
    /// Held by the readers via std::unique_ptr — non-copyable, non-movable.
    class tabix_reader {
    public:
        /// @throws std::runtime_error if the file cannot be opened, is not
        /// tabix-indexed, or the region is invalid / its sequence is unknown.
        tabix_reader(const std::filesystem::path& fpath, const std::string& region);
        ~tabix_reader();
        tabix_reader(const tabix_reader&) = delete;
        tabix_reader& operator=(const tabix_reader&) = delete;
        tabix_reader(tabix_reader&&) = delete;
        tabix_reader& operator=(tabix_reader&&) = delete;

        /// Next data line overlapping the region (newline stripped, trailing CR
        /// removed), or std::nullopt once the region is exhausted. Increments
        /// line_num per record. Throws std::runtime_error on I/O error.
        std::optional<std::string> next_line(size_t& line_num);

        /// Precise "more records remain in the region" check: prefetches one
        /// record if needed (held until the next next_line() consumes it), so
        /// it matches the peek-based streaming has_next() — true iff a
        /// subsequent next_line() will return a line. Throws on I/O error.
        [[nodiscard]] bool has_next();

    private:
        /// Pull the next region line straight from the iterator (no lookahead),
        /// setting exhausted_ at end-of-region. Throws std::runtime_error on I/O error.
        std::optional<std::string> fetch_raw();

        htsFile* fp = nullptr;
        tbx_t* tbx = nullptr;
        hts_itr_t* itr = nullptr;
        kstring_t buf = {0, 0, nullptr};
        bool exhausted_ = false;
        std::optional<std::string> lookahead_;  // one-record prefetch for has_next()
    };

}

#endif //GENOGROVE_IO_BGZF_UTILS_HPP