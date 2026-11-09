/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_OUTPUT_FILE_HPP
#define GENOGROVE_CLI_OUTPUT_FILE_HPP

#include <filesystem>
#include <fstream>
#include <ios>
#include <ostream>
#include <random>
#include <stdexcept>
#include <string>
#include <system_error>
#include <utility>

namespace subcalls {

    // Throws if `output` and `input` are the same file: the same path spelled
    // differently, a symlink to it, or a hard link. Opening the output would
    // truncate the input before it is read. An output that does not exist yet
    // cannot alias anything, so that case passes.
    inline void reject_output_alias(const std::string& output, const std::string& input,
                                    const std::string& input_label) {
        std::error_code ec;
        if(std::filesystem::equivalent(output, input, ec) && !ec) {
            throw std::runtime_error(
                "Error: output file " + output + " is the same file as the " + input_label +
                " (" + input + "); choose a different output path");
        }
    }

    // A file written next to its destination and moved over it by commit(). An
    // existing file at the destination is never truncated: if anything fails
    // before commit() (an exception, a write error, a full disk) the temporary
    // file is removed and the destination keeps its old contents.
    class atomic_output_file {
    public:
        explicit atomic_output_file(std::string target, std::ios::openmode mode = std::ios::out)
            : target(std::move(target)), temp(temp_name(this->target)), out(temp, mode) {
            if(!out) {
                throw std::runtime_error("Error: could not open output file: " + this->target);
            }
        }

        atomic_output_file(const atomic_output_file&) = delete;
        atomic_output_file& operator=(const atomic_output_file&) = delete;

        ~atomic_output_file() {
            if(!committed) {
                out.close();
                std::error_code ec;
                std::filesystem::remove(temp, ec);
            }
        }

        [[nodiscard]] std::ostream& stream() { return out; }

        // Flush and close the file, then move it over the destination. Throws if
        // any write or the close failed, or the move failed; the destination is
        // untouched in that case. Replacing the file creates a new one, so the
        // destination's permissions are those of a freshly created file.
        void commit() {
            out.close();
            if(out.fail()) {
                throw std::runtime_error("Error: failed to write output file: " + target);
            }
            std::error_code ec;
            std::filesystem::rename(temp, target, ec);
            if(ec) {
                throw std::runtime_error(
                    "Error: could not replace output file " + target + ": " + ec.message());
            }
            committed = true;
        }

    private:
        // A sibling of the destination, so the final rename stays on one
        // filesystem and is atomic.
        static std::string temp_name(const std::string& target) {
            static constexpr char digits[] = "0123456789abcdef";
            std::random_device rd;
            std::string suffix = ".tmp-";
            for(int i = 0; i < 8; ++i) {
                suffix += digits[rd() % 16];
            }
            return target + suffix;
        }

        std::string target;
        std::string temp;
        std::ofstream out;
        bool committed = false;
    };

}

#endif //GENOGROVE_CLI_OUTPUT_FILE_HPP
