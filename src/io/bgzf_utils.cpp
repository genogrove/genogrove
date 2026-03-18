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

            std::string line(str.s);
            if (!line.empty() && line.back() == '\r') line.pop_back();
            line_num++;

            // Skip empty lines and comments/directives
            if (line.empty() || line[0] == '#') continue;

            return line;
        }
    }

    bool bgzf_has_next(BGZF* file) {
        if (!file) return false;

        int64_t current_pos = bgzf_tell(file);
        char peek_char;
        int peek_result = bgzf_read(file, &peek_char, 1);

        int64_t seek_result = bgzf_seek(file, current_pos, SEEK_SET);
        if (seek_result < 0) {
            return false;
        }

        return peek_result > 0;
    }

}