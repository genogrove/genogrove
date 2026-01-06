#include <genogrove/io/bed_reader.hpp>

// standard
#include <sstream>
#include <algorithm>
#include <vector>

// htslib
#include <htslib/kstring.h>

namespace gdt = genogrove::data_type;

#include <cstdint>

namespace genogrove::io {
    // Helper function to parse comma-separated integers into a vector
    static std::vector<size_t> parse_csv(const std::string& str) {
        std::vector<size_t> result;
        std::stringstream ss(str);
        std::string token;

        while (std::getline(ss, token, ',')) {
            if (!token.empty() && std::all_of(token.begin(), token.end(), ::isdigit)) {
                result.push_back(std::stoul(token));
            }
        }

        return result;
    }
    bed_reader::bed_reader(const std::filesystem::path& fpath)
        : line_num(0), bgzf_file(nullptr) {
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
        int ret;
        bool found_data = false;

        // 2. Iterate until we find a data line or EOF
        while ((ret = bgzf_getline(bgzf_file, '\n', &str)) >= 0) {
            std::string line(str.s);

            // Skip empty or commented lines (matches read_next logic)
            if (line.empty() || line[0] == '#') {
                continue;
            }

            // 3. Attempt to parse the first data line found
            std::stringstream ss(line);
            std::string chrom, start, end;

            // Check for minimal BED3 columns
            if (!(ss >> chrom >> start >> end)) {
                if (str.s) free(str.s);
                bgzf_close(bgzf_file); // Clean up before throw
                throw std::runtime_error("Invalid BED header/format in " + fpath.string());
            }

            // Validate coordinates are integers
            if (start.empty() || end.empty() ||
                !std::all_of(start.begin(), start.end(), ::isdigit) ||
                !std::all_of(end.begin(), end.end(), ::isdigit)) {
                    if(str.s) free(str.s);
                    bgzf_close(bgzf_file);
                    throw std::runtime_error("Invalid BED coordinates (non-integer) in " + fpath.string());
            }
            // validate start < end
            size_t start_num = std::stoul(start);
            size_t end_num = std::stoul(end);
            if(start_num >= end_num) {
                if(str.s) free(str.s);
                bgzf_close(bgzf_file);
                throw std::runtime_error("Invalid BED coordinates (start > end) in " + fpath.string());
            }
            found_data = true;
            break; // Valid line found, stop scanning
        }

        if (str.s) free(str.s);

        // ensure that we found at least one valid BED line
        if (!found_data) {
            bgzf_close(bgzf_file);
            throw std::runtime_error("No valid BED data found in " + fpath.string());
        }

        // reset file pointer to the beginning for standard reading
        if (bgzf_seek(bgzf_file, start_pos, SEEK_SET) < 0) {
            bgzf_close(bgzf_file);
            throw std::runtime_error("Failed to seek back to start of file: " + fpath.string());
        }
    }

    bed_reader::~bed_reader() {
        if(bgzf_file) {
            bgzf_close(bgzf_file);
        }
    }

    bool bed_reader::read_next(bed_entry& entry) {
        kstring_t str = {0, 0, nullptr};
        int ret = bgzf_getline(bgzf_file, '\n', &str);
        if(ret < 0) {
            if(str.s) free(str.s);
            return false;
        }
        std::string line(str.s);
        free(str.s); // free the memory allocated by bgzf_getline
        line_num++;

        // skip empty or commented lines
        while(line.empty() || line[0] == '#') {
            kstring_t str2 = {0, 0, nullptr};
            ret = bgzf_getline(bgzf_file, '\n', &str2);
            if(ret < 0) {
                if (str2.s) free(str2.s);
                return false;
            }
            line = std::string(str2.s);
            free(str2.s);
            line_num++;
        }

        // parse the line
        std::stringstream ss(line);
        std::string chrom, start, end;
        try {
            if (!(ss >> chrom >> start >> end)) {
                error_message = "Invalid line format at line " + std::to_string(line_num);
                return false;
            }

            // validate integers
            if(start.empty() ||
                end.empty() ||
                !std::all_of(start.begin(), start.end(), ::isdigit) ||
                !std::all_of(end.begin(), end.end(), ::isdigit)) {
                error_message = "Invalid coordinate format at line " + std::to_string(line_num);
                return false;
            }

            // validate and create interval object
            size_t start_num = std::stoul(start);
            size_t end_num = std::stoul(end);
            if (start_num >= end_num) {
                error_message = "Start coordinate is greater than end coordinate at line ";
                error_message += std::to_string(line_num);
                return false;
            }
            entry.chrom = chrom;
            entry.interval = gdt::interval(start_num, end_num);

            // Parse optional BED fields (BED4+)
            std::string name_str, score_str, strand_str;
            std::string thick_start_str, thick_end_str, item_rgb_str;
            std::string block_count_str, block_sizes_str, block_starts_str;

            // BED4: name
            if (ss >> name_str) {
                entry.name = name_str;

                // BED5: score
                if (ss >> score_str) {
                    if (!std::all_of(score_str.begin(), score_str.end(), ::isdigit)) {
                        error_message = "Invalid score format (non-integer) at line ";
                        error_message += std::to_string(line_num);
                        return false;
                    }
                    int score = std::stoi(score_str);
                    if (score < 0 || score > 1000) {
                        error_message = "Invalid score (must be 0-1000) at line ";
                        error_message += std::to_string(line_num);
                        return false;
                    }
                    entry.score = score;

                    // BED6: strand
                    if (ss >> strand_str) {
                        if (strand_str.length() == 1
                            && (strand_str[0] == '+'
                            || strand_str[0] == '-'
                            || strand_str[0] == '.')) {
                            entry.strand = strand_str[0];
                        } else if (!strand_str.empty()) {
                            error_message = "Invalid strand (must be exactly one character: +, -, or .) at line ";
                            error_message += std::to_string(line_num);
                            return false;
                        }

                        // BED12: additional fields
                        if (ss >> thick_start_str >> thick_end_str >> item_rgb_str) {
                            if (std::all_of(thick_start_str.begin(), thick_start_str.end(), ::isdigit)
                                && std::all_of(thick_end_str.begin(), thick_end_str.end(), ::isdigit)) {
                                uint64_t thick_start = std::stoul(thick_start_str);
                                uint64_t thick_end = std::stoul(thick_end_str);

                                // Validate thickness coordinates
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
                            } else {
                                error_message = "Invalid thickness format (non-integer) at line ";
                                error_message += std::to_string(line_num);
                                return false;
                            }

                            // Parse RGB values (format: "R,G,B")
                            std::vector<size_t> rgb_values = parse_csv(item_rgb_str);
                            if(rgb_values.size() == 1) {
                                if(rgb_values[0] == 0) {
                                    entry.item_rgb = rgb_color(0,0,0);
                                } else {
                                    error_message = "Only 0 (default) as single RGB value allowed";
                                    error_message += " - is " + std::to_string(rgb_values[0]) + " at line";
                                    error_message += std::to_string(line_num);
                                    return false;
                                }
                            } else {
                                if (rgb_values.size() == 3) {
                                    // Validate RGB values are in valid range (0-255)
                                    if (rgb_values[0] <= 255
                                        && rgb_values[1] <= 255 &&
                                        rgb_values[2] <= 255) {
                                        entry.item_rgb = rgb_color(rgb_values[0],
                                            rgb_values[1],
                                            rgb_values[2]);
                                    } else {
                                        error_message = "Invalid RGB values (must be 0-255) at line ";
                                        error_message += std::to_string(line_num);
                                        return false;
                                    }
                                } else {
                                    error_message = "Invalid RGB format (expected R,G,B) at line ";
                                    error_message += std::to_string(line_num);
                                    return false;
                                }
                            }

                            if (ss >> block_count_str >> block_sizes_str >> block_starts_str) {
                                // Parse block_count as integer
                                if (!std::all_of(block_count_str.begin(), block_count_str.end(), ::isdigit)) {
                                    error_message = "Invalid block count format (non-integer) at line ";
                                    error_message += std::to_string(line_num);
                                    return false;
                                }

                                int block_count = std::stoi(block_count_str);
                                if (block_count < 0) {
                                    error_message = "Invalid block count (negative) at line ";
                                    error_message += std::to_string(line_num);
                                    return false;
                                }

                                // Parse comma-separated block sizes and starts
                                std::vector<size_t> block_sizes = parse_csv(block_sizes_str);
                                std::vector<size_t> block_starts = parse_csv(block_starts_str);

                                // Validate consistency: count should match vector sizes
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

                                // Validate block starts are within interval bounds
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

                                entry.blocks = block_info(block_count,
                                    std::move(block_sizes),
                                    std::move(block_starts));
                            }
                        }
                    }
                }
            }

            return true;
        } catch (std::exception &e) {
            error_message = "Failed to parse line at " + std::to_string(line_num) + ": " + line;
            return false;
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

    std::string bed_reader::get_error_message() {
        return error_message;
    }

    size_t bed_reader::get_current_line() {
        return line_num;
    }

}

