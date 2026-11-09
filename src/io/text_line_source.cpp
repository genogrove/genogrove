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
            region_reader_ = std::make_unique<tabix_reader>(fpath, region);
            return;
        }

        // note this handles both raw and gzipped files
        bgzf_file_.reset(bgzf_open(fpath.c_str(), "r"));
        if (!bgzf_file_) {
            throw std::runtime_error("Failed to open file: " + fpath.string());
        }

        // A file with zero data records (empty, comments-only, or all blank
        // lines) is structurally valid: nothing is pending, so the first
        // next_line() reports EOF and has_next() is false.
        pending_ = bgzf_next_data_line(bgzf_file_.get(), pending_line_num_);
        if (pending_ && validate_first) {
            validate_first(*pending_);
        }
    }

    std::optional<std::string> text_line_source::next_line() {
        if (pending_) {
            line_num_ = pending_line_num_;
            return std::exchange(pending_, std::nullopt);
        }
        return region_reader_ ? region_reader_->next_line(line_num_)
                              : bgzf_next_data_line(bgzf_file_.get(), line_num_);
    }

    bool text_line_source::has_next() {
        if (pending_) return true;
        if (region_reader_) return region_reader_->has_next();
        return bgzf_has_next(bgzf_file_.get());
    }

}  // namespace genogrove::io
