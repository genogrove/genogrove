#include <genogrove/io/bed_reader.hpp>

// standard
#include <sstream>
#include <algorithm>

// htslib
#include <htslib/kstring.h>

namespace gdt = genogrove::data_type;

bed_reader::bed_reader(const std::filesystem::path& fpath)
    : line_num(0), bgzf_file(nullptr) {
    // note this handles both raw and gzipped files
    bgzf_file = bgzf_open(fpath.c_str(), "r"); // open file
    if(!bgzf_file) {
        throw std::runtime_error("Failed to open file: " + fpath.string());
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
        size_t startNum = std::stoul(start);
        size_t endNum = std::stoul(end);
        if (startNum >= endNum) {
            error_message = "Start coordinate is greater than end coordinate at line " + std::to_string(line_num);
            return false;
        }
        entry.chrom = chrom;
        entry.interval = gdt::interval(startNum, endNum);

        // Parse optional BED fields (BED4+)
        std::string name_str, score_str, strand_str;
        std::string thick_start_str, thick_end_str, item_rgb_str;
        std::string block_count_str, block_sizes_str, block_starts_str;

        // BED4: name
        if (ss >> name_str) {
            entry.name = name_str;

            // BED5: score
            if (ss >> score_str) {
                if (std::all_of(score_str.begin(), score_str.end(), ::isdigit)) {
                    int score = std::stoi(score_str);
                    if (score >= 0 && score <= 1000) {
                        entry.score = score;
                    }
                }

                // BED6: strand
                if (ss >> strand_str) {
                    if (!strand_str.empty() && (strand_str[0] == '+' || strand_str[0] == '-' || strand_str[0] == '.')) {
                        entry.strand = strand_str[0];
                    }

                    // BED12: additional fields
                    if (ss >> thick_start_str >> thick_end_str >> item_rgb_str) {
                        if (std::all_of(thick_start_str.begin(), thick_start_str.end(), ::isdigit)) {
                            entry.thick_start = std::stoi(thick_start_str);
                        }
                        if (std::all_of(thick_end_str.begin(), thick_end_str.end(), ::isdigit)) {
                            entry.thick_end = std::stoi(thick_end_str);
                        }
                        entry.item_rgb = item_rgb_str;

                        if (ss >> block_count_str >> block_sizes_str >> block_starts_str) {
                            entry.block_count = block_count_str;
                            entry.block_sizes = block_sizes_str;
                            entry.block_starts = block_starts_str;
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
    bgzf_seek(bgzf_file, current_pos, SEEK_SET);

    // If we couldn't read anything, we're at EOF
    return peek_result > 0;
}

std::string bed_reader::get_error_message() {
    return error_message;
}

size_t bed_reader::get_current_line() {
    return line_num;
}
