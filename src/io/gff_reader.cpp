#include <genogrove/io/gff_reader.hpp>

// standard
#include <sstream>
#include <algorithm>
#include <cctype>

// htslib
#include <htslib/kstring.h>

namespace gdt = genogrove::data_type;

gff_reader::gff_reader(const std::filesystem::path& fpath)
    : line_num(0), bgzf_file(nullptr) {
    // note this handles both raw and gzipped files
    bgzf_file = bgzf_open(fpath.c_str(), "r");
    if(!bgzf_file) {
        throw std::runtime_error("Failed to open file: " + fpath.string());
    }
}

gff_reader::~gff_reader() {
    if(bgzf_file) {
        bgzf_close(bgzf_file);
    }
}

void gff_reader::parse_attributes(const std::string& attr_string, std::map<std::string, std::string>& attributes) {
    attributes.clear();

    // Detect format: GFF3 uses '=' and ';', GTF uses ' "' and '";'
    bool is_gtf = attr_string.find(" \"") != std::string::npos;

    if (is_gtf) {
        // GTF format: key "value"; key "value";
        std::istringstream stream(attr_string);
        std::string token;

        while (std::getline(stream, token, ';')) {
            // Trim whitespace
            token.erase(0, token.find_first_not_of(" \t"));
            token.erase(token.find_last_not_of(" \t") + 1);

            if (token.empty()) continue;

            // Find first space to split key and value
            size_t space_pos = token.find(' ');
            if (space_pos == std::string::npos) continue;

            std::string key = token.substr(0, space_pos);
            std::string value = token.substr(space_pos + 1);

            // Remove quotes from value
            if (value.size() >= 2 && value.front() == '"' && value.back() == '"') {
                value = value.substr(1, value.size() - 2);
            }

            attributes[key] = value;
        }
    } else {
        // GFF3 format: key=value;key=value
        std::istringstream stream(attr_string);
        std::string token;

        while (std::getline(stream, token, ';')) {
            // Trim whitespace
            token.erase(0, token.find_first_not_of(" \t"));
            token.erase(token.find_last_not_of(" \t") + 1);

            if (token.empty()) continue;

            // Find '=' to split key and value
            size_t eq_pos = token.find('=');
            if (eq_pos == std::string::npos) continue;

            std::string key = token.substr(0, eq_pos);
            std::string value = token.substr(eq_pos + 1);

            attributes[key] = value;
        }
    }
}

bool gff_reader::read_next(gff_entry& entry) {
    kstring_t str = {0, 0, nullptr};
    int ret = bgzf_getline(bgzf_file, '\n', &str);
    if(ret < 0) {
        if(str.s) free(str.s);
        return false;
    }
    std::string line(str.s);
    free(str.s);
    line_num++;

    // skip empty lines, comments, and directives (lines starting with #)
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
    std::string seqid, source, type, start_str, end_str, score_str, strand_str, phase_str, attributes_str;

    try {
        if (!(ss >> seqid >> source >> type >> start_str >> end_str >> score_str >> strand_str >> phase_str)) {
            error_message = "Invalid GFF line format at line " + std::to_string(line_num);
            return false;
        }

        // Read the rest of the line as attributes
        std::getline(ss >> std::ws, attributes_str);

        // Validate start and end are integers
        if(start_str.empty() || end_str.empty() ||
           !std::all_of(start_str.begin(), start_str.end(), ::isdigit) ||
           !std::all_of(end_str.begin(), end_str.end(), ::isdigit)) {
            error_message = "Invalid coordinate format at line " + std::to_string(line_num);
            return false;
        }

        // Parse coordinates (GFF is 1-based inclusive, convert to 0-based half-open)
        size_t start = std::stoul(start_str) - 1;  // Convert to 0-based
        size_t end = std::stoul(end_str);          // End is already exclusive after -1 conversion

        if (start >= end) {
            error_message = "Start coordinate is greater than or equal to end coordinate at line " + std::to_string(line_num);
            return false;
        }

        entry.seqid = seqid;
        entry.source = source;
        entry.type = type;
        entry.interval = gdt::interval(start, end);

        // Parse score
        if (score_str != ".") {
            try {
                entry.score = std::stod(score_str);
            } catch (...) {
                entry.score = std::nullopt;
            }
        } else {
            entry.score = std::nullopt;
        }

        // Parse strand
        if (strand_str.size() == 1 && (strand_str[0] == '+' || strand_str[0] == '-' ||
                                        strand_str[0] == '.' || strand_str[0] == '?')) {
            entry.strand = strand_str[0];
        } else {
            entry.strand = std::nullopt;
        }

        // Parse phase
        if (phase_str != ".") {
            try {
                int phase = std::stoi(phase_str);
                if (phase >= 0 && phase <= 2) {
                    entry.phase = phase;
                } else {
                    entry.phase = std::nullopt;
                }
            } catch (...) {
                entry.phase = std::nullopt;
            }
        } else {
            entry.phase = std::nullopt;
        }

        // Parse attributes
        if (!attributes_str.empty()) {
            parse_attributes(attributes_str, entry.attributes);
        } else {
            entry.attributes.clear();
        }

        return true;
    } catch (std::exception &e) {
        error_message = "Failed to parse line at " + std::to_string(line_num) + ": " + line;
        return false;
    }
}

bool gff_reader::has_next() {
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

std::string gff_reader::get_error_message() {
    return error_message;
}

size_t gff_reader::get_current_line() {
    return line_num;
}