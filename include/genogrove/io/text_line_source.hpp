/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_TEXT_LINE_SOURCE_HPP
#define GENOGROVE_IO_TEXT_LINE_SOURCE_HPP

#include <cstddef>
#include <filesystem>
#include <functional>
#include <memory>
#include <optional>
#include <string>
#include <string_view>

#include <htslib/bgzf.h>

#include <genogrove/io/bgzf_utils.hpp>
#include <genogrove/io/htslib_raii.hpp>

namespace genogrove::io {

    /**
     * @brief Data-line source shared by the text readers (BED, GFF).
     *
     * Yields data lines (comments and blank lines skipped) either from a
     * streaming BGZF/plain-text handle or, when a region is given, from a
     * tabix region iterator. Owns the handle, so a reader holding one is
     * movable without hand-written move operations.
     *
     * For the streaming source the first data line is read once at
     * construction so it can be validated; it is then handed back by the first
     * next_line() call instead of rewinding the file and reading it again.
     */
    class text_line_source {
    public:
        /// Throws std::runtime_error when the first data line is invalid.
        using first_line_validator = std::function<void(std::string_view line)>;

        /// Region mode (`region` non-empty): no streaming handle, no first-line
        /// validation; tabix_reader validates the index and region itself.
        /// Streaming mode: `validate_first` (may be empty) runs on the first
        /// data line; a file without data lines is valid and simply yields none.
        text_line_source(const std::filesystem::path& fpath, const std::string& region,
                         const first_line_validator& validate_first);

        /// Next data line, advancing line_num (physical lines consumed,
        /// comments and blanks included). nullopt at EOF / end of region.
        /// Throws std::runtime_error on an I/O error.
        [[nodiscard]] std::optional<std::string> next_line();

        /// True iff a following next_line() will return a line.
        [[nodiscard]] bool has_next();

        [[nodiscard]] size_t line_num() const { return line_num_; }

    private:
        hts_ptr<BGZF, bgzf_close> bgzf_file_;
        // Non-null only in region mode. See #456.
        std::unique_ptr<tabix_reader> region_reader_;
        // First data line read for validation, and the physical line it was on.
        // Streaming mode only; never set together with region_reader_.
        std::optional<std::string> pending_;
        size_t pending_line_num_ = 0;
        bool prefetched_ = false;  // the constructor's read has not been consumed yet
        size_t line_num_ = 0;
    };

}  // namespace genogrove::io

#endif  // GENOGROVE_IO_TEXT_LINE_SOURCE_HPP
