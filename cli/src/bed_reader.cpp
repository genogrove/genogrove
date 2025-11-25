#include "bed_reader.hpp"

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

bool bed_reader::read_next(file_entry& entry) {
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
        entry.interval = ggt::interval(startNum, endNum);
        entry.strand = '.';
        return true;
    } catch (std::exception &e) {
        error_message = "Failed to parse line at " + std::to_string(line_num) + ": " + line;
        return false;
    }
}

bool bed_reader::has_next() {
    return bgzf_file && !bgzf_check_EOF(bgzf_file);
}

std::string bed_reader::get_error_message() {
    return error_message;
}

size_t bed_reader::get_current_line() {
    return line_num;
}
