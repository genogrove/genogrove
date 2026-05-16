/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/bgzf_utils.hpp>
#include <genogrove/io/kstring_guard.hpp>

#include <stdexcept>
#include <string>

namespace genogrove::io {

    std::optional<std::string> bgzf_next_data_line(BGZF* file, size_t& line_num) {
        kstring_t str = {0, 0, nullptr};
        kstring_guard guard{str};

        while (true) {
            int ret = bgzf_getline(file, '\n', &str);
            if (ret < 0) {
                if (ret < -1) {
                    throw std::runtime_error("I/O error reading file at line " +
                                             std::to_string(line_num + 1));
                }
                return std::nullopt;  // EOF
            }

            // (ptr, count) ctor preserves embedded NULs; the (ptr) ctor would
            // truncate at the first NUL since kstring isn't NUL-terminated by
            // contract — it tracks length in `.l`.
            std::string line(str.s, str.l);
            if (!line.empty() && line.back() == '\r') line.pop_back();
            line_num++;

            // Skip empty lines and comments/directives
            if (line.empty() || line[0] == '#') continue;

            return line;
        }
    }

    bool bgzf_has_next(BGZF* file) {
        if (!file) return false;
        // bgzf_peek is stateless: returns the next unsigned byte (>= 0) or
        // a negative value on EOF/error. Works for both BGZF and plain gzip,
        // unlike the previous read+seek-back approach which silently broke
        // on plain gzip because bgzf_seek is unsupported there.
        return bgzf_peek(file) >= 0;
    }

    void bgzf_rewind_to_start(BGZF*& file, const std::filesystem::path& fpath) {
        if (!file) return;
        if (bgzf_seek(file, 0, SEEK_SET) >= 0) return;

        // bgzf_seek failed — likely a plain gzip stream. Reopen the file,
        // then replace the existing handle. Open-before-close so a failed
        // reopen leaves the original handle valid for the caller's catch
        // block to clean up properly (rather than leaving file == nullptr
        // and relying on bgzf_close(nullptr) being a no-op downstream).
        BGZF* reopened = bgzf_open(fpath.c_str(), "r");
        if (!reopened) {
            throw std::runtime_error("Failed to reopen file after rewind: " + fpath.string());
        }
        bgzf_close(file);
        file = reopened;
    }

}