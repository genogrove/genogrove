/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_OUTPUT_FILE_HPP
#define GENOGROVE_CLI_OUTPUT_FILE_HPP

#include <cerrno>
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
    // differently, a symlink to it, or a hard link. Committing the output would
    // replace the input with the result. An output that does not exist yet
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

    // Writes a temporary sibling and moves it over the destination in commit(), so
    // a failed run leaves an existing output untouched. A symlink is resolved
    // first. A destination that is not a regular file (/dev/null, a FIFO) cannot
    // be replaced and is written directly. A replaced file keeps its permission
    // bits, but not its owner, ACLs or other hard links.
    class atomic_output_file {
    public:
        explicit atomic_output_file(const std::string& path, std::ios::openmode mode = std::ios::out)
            : direct(is_special(path)), target(direct ? path : resolve(path)),
              temp(direct ? std::string() : temp_name(target)), out(direct ? target : temp, mode) {
            if(!out) {
                throw std::runtime_error("Error: could not open output file: " + target + " (" +
                                         std::generic_category().message(errno) + ")");
            }
        }

        atomic_output_file(const atomic_output_file&) = delete;
        atomic_output_file& operator=(const atomic_output_file&) = delete;

        ~atomic_output_file() {
            if(!committed) {
                out.close();
                if(!direct) {
                    std::error_code ec;
                    std::filesystem::remove(temp, ec);
                }
            }
        }

        [[nodiscard]] std::ostream& stream() { return out; }

        // Close and move the file into place. Throws if a write, the close or
        // the move failed; a moved-over destination is untouched in that case.
        void commit() {
            out.close();
            if(out.fail()) {
                throw std::runtime_error("Error: failed to write output file: " + target);
            }
            if(!direct) {
                std::error_code ec;
                const auto old_status = std::filesystem::status(target, ec);
                if(!ec && std::filesystem::is_regular_file(old_status)) {
                    std::filesystem::permissions(temp, old_status.permissions(), ec);
                }
                ec.clear();
                std::filesystem::rename(temp, target, ec);
                if(ec) {
                    throw std::runtime_error(
                        "Error: could not replace output file " + target + ": " + ec.message());
                }
            }
            committed = true;
        }

    private:
        // Exists and is not a regular file (following symlinks).
        static bool is_special(const std::string& path) {
            std::error_code ec;
            const auto status = std::filesystem::status(path, ec);
            return !ec && std::filesystem::exists(status) &&
                   !std::filesystem::is_regular_file(status);
        }

        // The file a rename must replace: a symlink's target, else the path.
        static std::string resolve(const std::string& path) {
            std::error_code ec;
            if(std::filesystem::is_symlink(path, ec) && !ec) {
                const auto real = std::filesystem::canonical(path, ec);
                if(!ec) {
                    return real.string();
                }
            }
            return path;
        }

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

        bool direct;
        std::string target;
        std::string temp;
        std::ofstream out;
        bool committed = false;
    };

}

#endif //GENOGROVE_CLI_OUTPUT_FILE_HPP
