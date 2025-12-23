#include <genogrove/io/gff_reader.hpp>

// standard
#include <sstream>
#include <algorithm>
#include <cctype>

// htslib
#include <htslib/kstring.h>

namespace gdt = genogrove::data_type;

// ==========================================
// gff_entry helper methods
// ==========================================

std::optional<std::string> gff_entry::get_gene_id() const {
    return get_attribute("gene_id");
}

std::optional<std::string> gff_entry::get_transcript_id() const {
    return get_attribute("transcript_id");
}

std::optional<int> gff_entry::get_exon_number() const {
    auto exon_num_str = get_attribute("exon_number");
    if (!exon_num_str) return std::nullopt;

    try {
        return std::stoi(*exon_num_str);
    } catch (...) {
        return std::nullopt;
    }
}

std::optional<std::string> gff_entry::get_gene_name() const {
    // Try both gene_name and Name (GFF3 standard)
    auto name = get_attribute("gene_name");
    if (name) return name;
    return get_attribute("Name");
}

std::optional<std::string> gff_entry::get_gene_biotype() const {
    // Try multiple common attribute names
    auto biotype = get_attribute("gene_biotype");
    if (biotype) return biotype;

    biotype = get_attribute("gene_type");
    if (biotype) return biotype;

    return get_attribute("biotype");
}

std::optional<std::string> gff_entry::get_attribute(const std::string& key) const {
    auto it = attributes.find(key);
    if (it != attributes.end()) {
        return it->second;
    }
    return std::nullopt;
}

// ==========================================
// gff_reader implementation
// ==========================================

gff_reader::gff_reader(const std::filesystem::path& fpath)
    : bgzf_file(nullptr), line_num(0) {
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

gff_format gff_reader::parse_attributes(const std::string& attr_string,
    std::map<std::string, std::string>& attributes) {
    attributes.clear();

    // Detect format: GFF3 uses '=' and ';', GTF uses ' "' and '";'
    if (attr_string.find(" \"") != std::string::npos) {
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
        return gff_format::GTF;
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
        return gff_format::GFF3;
    }
}

bool gff_reader::validate_gtf_attributes(const gff_entry& entry) {
    // GTF2 specification requires gene_id for all features
    // transcript_id is required for transcript-level and below (exon, CDS, etc.)
    // gene and transcript features may not have transcript_id

    if (!entry.get_gene_id().has_value()) {
        error_message = "GTF validation failed at line " + std::to_string(line_num) +
                       ": missing required 'gene_id' attribute";
        return false;
    }

    // Transcript-level features (exon, CDS, start_codon, stop_codon, UTR) require transcript_id
    if (entry.type == "exon" || entry.type == "CDS" ||
        entry.type == "start_codon" || entry.type == "stop_codon" ||
        entry.type == "UTR" || entry.type == "5UTR" || entry.type == "3UTR") {

        if (!entry.get_transcript_id().has_value()) {
            error_message = "GTF validation failed at line " + std::to_string(line_num) +
                           ": feature '" + entry.type + "' requires 'transcript_id' attribute";
            return false;
        }
    }

    return true;
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
    std::string seqid,source, type, start_str, end_str, score_str, strand_str, phase_str, attributes_str;

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

        // Parse attributes and detect format
        if (!attributes_str.empty()) {
            entry.format = parse_attributes(attributes_str, entry.attributes);
        } else {
            entry.attributes.clear();
            entry.format = gff_format::UNKNOWN;
        }

        return true;
    } catch (const std::exception&) {
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