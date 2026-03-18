#include <genogrove/io/bed_reader.hpp>
#include <genogrove/io/kstring_guard.hpp>

// standard
#include <algorithm>
#include <ranges>
#include <charconv>
#include <cstdint>
#include <optional>
#include <vector>

// htslib
#include <htslib/kstring.h>

// genogrove
#include <genogrove/utility/char_utils.hpp>
#include <genogrove/utility/tokenizer.hpp>

namespace ggu = genogrove::utility;

namespace genogrove::io {

    // Helper function to parse comma-separated integers into a vector
    // Returns nullopt on parse error to distinguish from genuinely empty input
    static std::optional<std::vector<size_t>> parse_csv(const std::string& str) {
        std::vector<size_t> result;
        std::string_view sv(str);
        size_t pos = 0;

        while (auto field = ggu::next_field(sv, pos, ',')) {
            // trim leading/trailing whitespaces
            auto trimmed = *field;
            auto start = trimmed.find_first_not_of(" \t");
            if (start == std::string_view::npos) { return std::nullopt; }
            trimmed = trimmed.substr(start);
            auto end = trimmed.find_last_not_of(" \t");
            trimmed = trimmed.substr(0, end + 1);

            if(trimmed.empty()) { return std::nullopt; }
            if (!std::ranges::all_of(trimmed, ggu::is_digit)) {
                return std::nullopt;
            }
            size_t val = 0;
            auto [ptr, ec] = std::from_chars(trimmed.data(), trimmed.data() + trimmed.size(), val);
            if (ec != std::errc{}) { return std::nullopt; }
            result.push_back(val);
        }
        return result;
    }
    bed_reader::bed_reader(const std::filesystem::path& fpath)
        : bed_reader(fpath, bed_reader_options::defaults()) {}

    bed_reader::bed_reader(const std::filesystem::path& fpath, const bed_reader_options& options)
        : bgzf_file(nullptr), line_num(0), options_(options) {
        // note this handles both raw and gzipped files
        bgzf_file = bgzf_open(fpath.c_str(), "r"); // open file
        if(!bgzf_file) {
            throw std::runtime_error("Failed to open file: " + fpath.string());
        }

        /* Check for valid bed file
         * Note: This only checks first (data) line
         * Subsequent lines (if they are invalid are caught by read_next) */
        int64_t start_pos = bgzf_tell(bgzf_file);
        kstring_t str = {0, 0, nullptr};
        kstring_guard guard{str};

        try {
            int ret;
            bool found_data = false;

            // Iterate until we find a data line or EOF
            while ((ret = bgzf_getline(bgzf_file, '\n', &str)) >= 0) {
                std::string line(str.s);
                if (!line.empty() && line.back() == '\r') line.pop_back();

                // Skip empty or commented lines (matches read_next logic)
                if (line.empty() || line[0] == '#') {
                    continue;
                }

                // Attempt to parse the first data line found
                std::string_view line_sv(line);
                size_t fpos = 0;
                auto chrom_f = ggu::next_field(line_sv, fpos);
                auto start_f = ggu::next_field(line_sv, fpos);
                auto end_f = ggu::next_field(line_sv, fpos);

                // Check for minimal BED3 columns
                if (!chrom_f || !start_f || !end_f) {
                    throw std::runtime_error("Invalid BED header/format in " + fpath.string());
                }

                // Validate coordinates are integers
                if (start_f->empty() || end_f->empty() ||
                    !std::ranges::all_of(*start_f, ggu::is_digit) ||
                    !std::ranges::all_of(*end_f, ggu::is_digit)) {
                    throw std::runtime_error("Invalid BED coordinates (non-integer) in " + fpath.string());
                }
                // validate start < end
                size_t start_num = 0;
                size_t end_num = 0;
                std::from_chars(start_f->data(), start_f->data() + start_f->size(), start_num);
                std::from_chars(end_f->data(), end_f->data() + end_f->size(), end_num);
                if(start_num >= end_num) {
                    throw std::runtime_error("Invalid BED coordinates (start > end) in " + fpath.string());
                }
                found_data = true;
                break; // Valid line found, stop scanning
            }

            // ensure that we found at least one valid BED line
            if (!found_data) {
                throw std::runtime_error("No valid BED data found in " + fpath.string());
            }

            // reset file pointer to the beginning for standard reading
            if (bgzf_seek(bgzf_file, start_pos, SEEK_SET) < 0) {
                throw std::runtime_error("Failed to seek back to start of file: " + fpath.string());
            }
        } catch (...) {
            bgzf_close(bgzf_file);
            bgzf_file = nullptr;
            throw;
        }
    }

    bed_reader::~bed_reader() {
        if(bgzf_file) {
            bgzf_close(bgzf_file);
        }
    }

    bool bed_reader::parse_score(bed_entry& entry, const std::string& score_str) {
        if (!std::ranges::all_of(score_str, ggu::is_digit)) {
            error_message = "Invalid score format (non-integer) at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        int score;
        try {
            score = std::stoi(score_str);
        } catch (const std::exception&) {
            error_message = "Invalid score format (out of range) at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        if (score < 0 || score > 1000) {
            error_message = "Invalid score (must be 0-1000) at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        entry.score = score;
        return true;
    }

    bool bed_reader::parse_strand(bed_entry& entry, const std::string& strand_str) {
        if (strand_str.length() == 1
            && (strand_str[0] == '+' || strand_str[0] == '-' || strand_str[0] == '.')) {
            entry.strand = strand_str[0];
            return true;
        } else {
            error_message = "Invalid strand (must be exactly one character: +, -, or .) at line ";
            error_message += std::to_string(line_num);
            return false;
        }
    }

    bool bed_reader::parse_thickness(bed_entry& entry, const std::string& thick_start_str,
                                     const std::string& thick_end_str,
                                     size_t start_num, size_t end_num) {
        if (!std::ranges::all_of(thick_start_str, ggu::is_digit)) {
            error_message = "Invalid thickStart format (non-integer) at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        if (!std::ranges::all_of(thick_end_str, ggu::is_digit)) {
            error_message = "Invalid thickEnd format (non-integer) at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        uint64_t thick_start;
        uint64_t thick_end;
        try {
            thick_start = std::stoul(thick_start_str);
            thick_end = std::stoul(thick_end_str);
        } catch(std::exception&) {
            error_message = "Thickness coordinate out of range at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        if (thick_start > thick_end) {
            error_message = "Invalid thickness (thickStart > thickEnd) at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        if (thick_start < start_num || thick_end > end_num) {
            error_message = "Invalid thickness (outside interval bounds) at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        entry.thickness = thick_info(thick_start, thick_end);
        return true;
    }

    bool bed_reader::parse_rgb(bed_entry& entry, const std::string& item_rgb_str) {
        auto rgb_opt = parse_csv(item_rgb_str);
        if (!rgb_opt) {
            error_message = "Invalid RGB format (parse error) at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        const auto& rgb_values = *rgb_opt;

        if (rgb_values.size() == 1) {
            if (rgb_values[0] == 0) {
                // "0" means use default color - don't set item_rgb (leave as nullopt)
                return true;
            }
            error_message = "Only 0 (default) as single RGB value allowed";
            error_message += " - is " + std::to_string(rgb_values[0]) + " at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        if (rgb_values.size() == 3) {
            if (rgb_values[0] <= 255 && rgb_values[1] <= 255 && rgb_values[2] <= 255) {
                entry.item_rgb = rgb_color(rgb_values[0], rgb_values[1], rgb_values[2]);
                return true;
            }
            error_message = "Invalid RGB values (must be 0-255) at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        error_message = "Invalid RGB format (expected R,G,B) at line ";
        error_message += std::to_string(line_num);
        return false;
    }

    bool bed_reader::parse_blocks(bed_entry& entry, const std::string& block_count_str,
                                  const std::string& block_sizes_str, const std::string& block_starts_str,
                                  size_t start_num, size_t end_num) {
        if (!std::ranges::all_of(block_count_str, ggu::is_digit)) {
            error_message = "Invalid block count format (non-integer) at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        int block_count;
        try {
            block_count = std::stoi(block_count_str);
        } catch(const std::exception&) {
            error_message = "Block count out of range at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        if (block_count < 0) {
            error_message = "Invalid block count (negative) at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        auto block_sizes_opt = parse_csv(block_sizes_str);
        if (!block_sizes_opt) {
            error_message = "Invalid block sizes format at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        auto block_starts_opt = parse_csv(block_starts_str);
        if (!block_starts_opt) {
            error_message = "Invalid block starts format at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        const auto& block_sizes = *block_sizes_opt;
        const auto& block_starts = *block_starts_opt;

        if (block_count != static_cast<int>(block_sizes.size())) {
            error_message = "Block count mismatch with block sizes at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        if (block_count != static_cast<int>(block_starts.size())) {
            error_message = "Block count mismatch with block starts at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        size_t interval_length = end_num - start_num;
        for (size_t i = 0; i < block_starts.size(); ++i) {
            if (block_starts[i] >= interval_length) {
                error_message = "Block start position outside interval bounds at line ";
                error_message += std::to_string(line_num);
                return false;
            }
            if (block_starts[i] + block_sizes[i] > interval_length) {
                error_message = "Block end position outside interval bounds at line ";
                error_message += std::to_string(line_num);
                return false;
            }
        }

        entry.blocks = block_info(block_count, std::move(block_sizes), std::move(block_starts));
        return true;
    }

    bool bed_reader::parse_optional_fields(std::string_view line_sv, size_t& fpos,
                                           bed_entry& entry, size_t start_num, size_t end_num) {
        // BED4: name
        auto name_f = ggu::next_field(line_sv, fpos);
        if (!name_f) return true;  // BED3 — no optional fields
        entry.name = std::string(*name_f);

        // BED5: score
        auto score_f = ggu::next_field(line_sv, fpos);
        if (!score_f) return true;  // BED4
        if (!parse_score(entry, std::string(*score_f))) return false;

        // BED6: strand
        auto strand_f = ggu::next_field(line_sv, fpos);
        if (!strand_f) return true;  // BED5
        if (!parse_strand(entry, std::string(*strand_f))) return false;

        // BED9: thickStart, thickEnd, itemRgb (must appear as a complete group)
        auto thick_start_f = ggu::next_field(line_sv, fpos);
        auto thick_end_f = ggu::next_field(line_sv, fpos);
        auto item_rgb_f = ggu::next_field(line_sv, fpos);
        {
            int present = thick_start_f.has_value() + thick_end_f.has_value() + item_rgb_f.has_value();
            if (present == 0) return true;  // BED6
            if (present != 3) {
                error_message = "Incomplete BED9 fields (thickStart, thickEnd, itemRgb) at line ";
                error_message += std::to_string(line_num);
                return false;
            }
        }
        if (!parse_thickness(entry, std::string(*thick_start_f),
                             std::string(*thick_end_f), start_num, end_num)) return false;
        if (!parse_rgb(entry, std::string(*item_rgb_f))) return false;

        // BED12: blockCount, blockSizes, blockStarts (must appear as a complete group)
        auto block_count_f = ggu::next_field(line_sv, fpos);
        auto block_sizes_f = ggu::next_field(line_sv, fpos);
        auto block_starts_f = ggu::next_field(line_sv, fpos);
        {
            int present = block_count_f.has_value() + block_sizes_f.has_value() + block_starts_f.has_value();
            if (present == 0) return true;  // BED9
            if (present != 3) {
                error_message = "Incomplete BED12 fields (blockCount, blockSizes, blockStarts) at line ";
                error_message += std::to_string(line_num);
                return false;
            }
        }
        return parse_blocks(entry, std::string(*block_count_f),
                            std::string(*block_sizes_f),
                            std::string(*block_starts_f), start_num, end_num);
    }

    bool bed_reader::read_next(bed_entry& entry) {
        while (true) {
            error_message.clear();
            // Reset optional fields to avoid stale data from previous records
            entry.name.reset();
            entry.score.reset();
            entry.strand.reset();
            entry.thickness.reset();
            entry.item_rgb.reset();
            entry.blocks.reset();

            std::string line;
            {
                kstring_t str = {0, 0, nullptr};
                kstring_guard guard{str};
                int ret = bgzf_getline(bgzf_file, '\n', &str);
                if(ret < 0) {
                    if(ret < -1) {
                        throw std::runtime_error("I/O error reading file at line " + std::to_string(line_num + 1));
                    }
                    return false; // EOF
                }
                line = std::string(str.s);
            }
            if (!line.empty() && line.back() == '\r') line.pop_back();
            line_num++;

            // skip empty or commented lines
            while(line.empty() || line[0] == '#') {
                kstring_t str2 = {0, 0, nullptr};
                kstring_guard guard2{str2};
                int ret = bgzf_getline(bgzf_file, '\n', &str2);
                if(ret < 0) {
                    if(ret < -1) {
                        throw std::runtime_error("I/O error reading file at line " + std::to_string(line_num + 1));
                    }
                    return false; // EOF
                }
                line = std::string(str2.s);
                if (!line.empty() && line.back() == '\r') line.pop_back();
                line_num++;
            }

            // parse the line
            std::string_view line_sv(line);
            size_t fpos = 0;

            auto chrom_f = ggu::next_field(line_sv, fpos);
            auto start_f = ggu::next_field(line_sv, fpos);
            auto end_f = ggu::next_field(line_sv, fpos);

            try {
                if (!chrom_f || !start_f || !end_f) {
                    error_message = "Invalid line format at line " + std::to_string(line_num);
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }

                // validate integers
                if(start_f->empty() ||
                    end_f->empty() ||
                    !std::ranges::all_of(*start_f, ggu::is_digit) ||
                    !std::ranges::all_of(*end_f, ggu::is_digit)) {
                    error_message = "Invalid coordinate format at line " + std::to_string(line_num);
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }

                // validate and create interval object
                size_t start_num = 0;
                size_t end_num = 0;
                auto [p1, ec1] = std::from_chars(start_f->data(), start_f->data() + start_f->size(), start_num);
                auto [p2, ec2] = std::from_chars(end_f->data(), end_f->data() + end_f->size(), end_num);
                if (ec1 != std::errc{} || ec2 != std::errc{}) {
                    error_message = "Coordinate out of range at line " + std::to_string(line_num);
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }

                if (start_num >= end_num) {
                    error_message = "Start coordinate is greater than or equal to the end coordinate at line " + std::to_string(line_num);
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }
                entry.chrom = std::string(*chrom_f);
                entry.start = start_num;
                entry.end = end_num;

                // Parse optional BED fields (BED4 through BED12)
                if (!parse_optional_fields(line_sv, fpos, entry, start_num, end_num)) {
                    // error_message already set by parse_* helper
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }

                return true;
            } catch (std::runtime_error&) {
                throw; // re-throw our own exceptions
            } catch (std::exception &e) {
                error_message = "Failed to parse line at " + std::to_string(line_num) + ": " + line;
                if (options_.skip_invalid_lines) continue;
                throw std::runtime_error(error_message);
            }
        }
    }

    bool bed_reader::has_next() {
        if (!bgzf_file) return false;

        // Check if we're at EOF by peeking at the next character
        int64_t current_pos = bgzf_tell(bgzf_file);
        char peek_char;
        int peek_result = bgzf_read(bgzf_file, &peek_char, 1);

        // Restore position
        int64_t seek_result = bgzf_seek(bgzf_file, current_pos, SEEK_SET);
        if (seek_result < 0) {
            return false;  // Seek failed, assume EOF
        }

        // If we couldn't read anything, we're at EOF
        return peek_result > 0;
    }

    std::string bed_reader::get_error_message() const {
        return error_message;
    }

    size_t bed_reader::get_current_line() const {
        return line_num;
    }

}

