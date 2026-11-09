/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/text_line_source.hpp>

#include <stdexcept>
#include <utility>

namespace genogrove::io {

    text_line_source::text_line_source(const std::filesystem::path& fpath,
                                       const std::string& region,
                                       const first_line_validator& validate_first) {
        // Region mode: read only the records overlapping the requested locus via
        // a tabix index. No streaming handle and no first-line validation —
        // tabix_reader validates the index/region and throws on failure.
        if (!region.empty()) {
            region_reader = std::make_unique<tabix_reader>(fpath, region);
            return;
        }

        // note this handles both raw and gzipped files
        bgzf_file.reset(bgzf_open(fpath.c_str(), "r"));
        if (!bgzf_file) {
            throw std::runtime_error("Failed to open file: " + fpath.string());
        }

        // A file with zero data records (empty, comments-only, or all blank
        // lines) is structurally valid: nothing is pending, so the first
        // next_line() reports EOF and has_next() is false.
        pending = bgzf_next_data_line(bgzf_file.get(), pending_line_num);
        prefetched = true;
        if (pending && validate_first) {
            validate_first(*pending);
        }
    }

    std::optional<std::string> text_line_source::next_line() {
        // Only set in streaming mode, so the region branch below never competes
        // with a buffered line.
        if (prefetched) {
            prefetched = false;
            // Also covers a file with no data lines: the prefetch consumed every
            // physical line, and current_line() (so the readers'
            // get_current_line()) must still report them.
            line_num = pending_line_num;
            if (pending) return std::exchange(pending, std::nullopt);
        }
        return region_reader ? region_reader->next_line(line_num)
                             : bgzf_next_data_line(bgzf_file.get(), line_num);
    }

    bool text_line_source::has_next() {
        if (pending) return true;
        if (region_reader) return region_reader->has_next();
        return bgzf_has_next(bgzf_file.get());
    }

}  // namespace genogrove::io
