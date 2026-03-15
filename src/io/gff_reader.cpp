#include <genogrove/io/gff_reader.hpp>
#include <genogrove/io/kstring_guard.hpp>

// standard
#include <algorithm>
#include <cerrno>
#include <charconv>
#include <clocale>
#include <cstdlib>
#include <ranges>

// htslib
#include <htslib/kstring.h>

// genogrove
#include <genogrove/utility/char_utils.hpp>
#include <genogrove/utility/tokenizer.hpp>

namespace ggu = genogrove::utility;

namespace genogrove::io {

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

        int value = 0;
        auto [ptr, ec] = std::from_chars(exon_num_str->data(),
                                         exon_num_str->data() + exon_num_str->size(), value);
        if (ec != std::errc{} || ptr != exon_num_str->data() + exon_num_str->size()) {
            return std::nullopt;
        }
        return value;
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

    std::optional<std::string> gff_entry::get_attribute(std::string_view key) const {
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
        : gff_reader(fpath, gff_reader_options::defaults()) {}

    gff_reader::gff_reader(const std::filesystem::path& fpath, const gff_reader_options& options)
        : bgzf_file(nullptr), line_num(0), options_(options) {
        // note this handles both raw and gzipped files
        bgzf_file = bgzf_open(fpath.c_str(), "r");
        if(!bgzf_file) {
            throw std::runtime_error("Failed to open file: " + fpath.string());
        }

        // Validate GFF file format
        // Store start position
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

                // Skip empty lines and comments/directives (matches read_next logic)
                if (line.empty() || line[0] == '#') {
                    continue;
                }

                // Attempt to parse the first data line found
                std::string_view line_sv(line);
                size_t fpos = 0;
                auto seqid_f = ggu::next_field(line_sv, fpos);
                auto source_f = ggu::next_field(line_sv, fpos);
                auto type_f = ggu::next_field(line_sv, fpos);
                auto start_f = ggu::next_field(line_sv, fpos);
                auto end_f = ggu::next_field(line_sv, fpos);
                auto score_f = ggu::next_field(line_sv, fpos);
                auto strand_f = ggu::next_field(line_sv, fpos);
                auto phase_f = ggu::next_field(line_sv, fpos);

                // Check for minimal GFF columns (8 required + attributes)
                if (!seqid_f || !source_f || !type_f || !start_f || !end_f ||
                    !score_f || !strand_f || !phase_f) {
                    throw std::runtime_error("Invalid GFF header/format in " + fpath.string());
                }

                // Validate coordinates are integers
                if (start_f->empty() || end_f->empty() ||
                    !std::ranges::all_of(*start_f, ggu::is_digit) ||
                    !std::ranges::all_of(*end_f, ggu::is_digit)) {
                    throw std::runtime_error("Invalid GFF coordinates (non-integer) in " + fpath.string());
                }

                // Validate start < end (GFF is 1-based inclusive, so convert to 0-based)
                size_t start_num = 0;
                size_t end_num = 0;
                auto [p1, ec1] = std::from_chars(start_f->data(), start_f->data() + start_f->size(), start_num);
                auto [p2, ec2] = std::from_chars(end_f->data(), end_f->data() + end_f->size(), end_num);
                if (ec1 != std::errc{} || ec2 != std::errc{}) {
                    throw std::runtime_error("Invalid GFF coordinates (out of range) in " + fpath.string());
                }
                start_num -= 1;  // Convert to 0-based
                // End becomes exclusive (no change needed)

                if (start_num >= end_num) {
                    throw std::runtime_error("Invalid GFF coordinates (start >= end) in " + fpath.string());
                }

                found_data = true;
                break; // Valid line found, stop scanning
            }

            // Ensure that we found at least one valid GFF line
            if (!found_data) {
                throw std::runtime_error("No valid GFF data found in " + fpath.string());
            }

            // Reset file pointer to the beginning for standard reading
            if (bgzf_seek(bgzf_file, start_pos, SEEK_SET) < 0) {
                throw std::runtime_error("Failed to seek back to start of file: " + fpath.string());
            }
        } catch (...) {
            bgzf_close(bgzf_file);
            bgzf_file = nullptr;
            throw;
        }
    }

    gff_reader::~gff_reader() {
        if(bgzf_file) {
            bgzf_close(bgzf_file);
        }
    }

    gff_format gff_reader::parse_attributes(const std::string& attr_string,
        std::map<std::string, std::string, std::less<>>& attributes) {
        attributes.clear();

        std::string_view sv(attr_string);
        size_t pos = 0;

        // Detect format: GFF3 uses '=' and ';', GTF uses ' "' and '";'
        if (attr_string.find(" \"") != std::string::npos) {
            // GTF format: key "value"; key "value";
            while (auto token_sv = ggu::next_field(sv, pos, ';')) {
                // Trim whitespace
                auto trimmed = *token_sv;
                if (auto p = trimmed.find_first_not_of(" \t"); p != std::string_view::npos) {
                    trimmed = trimmed.substr(p);
                } else {
                    continue;
                }
                if (auto p = trimmed.find_last_not_of(" \t"); p != std::string_view::npos) {
                    trimmed = trimmed.substr(0, p + 1);
                }
                if (trimmed.empty()) continue;

                // Find first space to split key and value
                size_t space_pos = trimmed.find(' ');
                if (space_pos == std::string_view::npos) continue;

                std::string key(trimmed.substr(0, space_pos));
                std::string value(trimmed.substr(space_pos + 1));

                // Remove quotes from value
                if (value.size() >= 2 && value.front() == '"' && value.back() == '"') {
                    value = value.substr(1, value.size() - 2);
                }

                attributes[std::move(key)] = std::move(value);
            }
            return gff_format::GTF;
        } else {
            // GFF3 format: key=value;key=value
            while (auto token_sv = ggu::next_field(sv, pos, ';')) {
                // Trim whitespace
                auto trimmed = *token_sv;
                if (auto p = trimmed.find_first_not_of(" \t"); p != std::string_view::npos) {
                    trimmed = trimmed.substr(p);
                } else {
                    continue;
                }
                if (auto p = trimmed.find_last_not_of(" \t"); p != std::string_view::npos) {
                    trimmed = trimmed.substr(0, p + 1);
                }
                if (trimmed.empty()) continue;

                // Find '=' to split key and value
                size_t eq_pos = trimmed.find('=');
                if (eq_pos == std::string_view::npos) continue;

                std::string key(trimmed.substr(0, eq_pos));
                std::string value(trimmed.substr(eq_pos + 1));

                attributes[std::move(key)] = std::move(value);
            }
            return gff_format::GFF3;
        }
    }

    bool gff_reader::read_next(gff_entry& entry) {
        error_message.clear();
        while (true) {
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

            // skip empty lines, comments, and directives (lines starting with #)
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

            auto seqid_f = ggu::next_field(line_sv, fpos);
            auto source_f = ggu::next_field(line_sv, fpos);
            auto type_f = ggu::next_field(line_sv, fpos);
            auto start_f = ggu::next_field(line_sv, fpos);
            auto end_f = ggu::next_field(line_sv, fpos);
            auto score_f = ggu::next_field(line_sv, fpos);
            auto strand_f = ggu::next_field(line_sv, fpos);
            auto phase_f = ggu::next_field(line_sv, fpos);

            try {
                if (!seqid_f || !source_f || !type_f || !start_f || !end_f ||
                    !score_f || !strand_f || !phase_f) {
                    error_message = "Invalid GFF line format at line " + std::to_string(line_num);
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }

                // Read the rest of the line as attributes
                std::string attributes_str;
                if (fpos < line_sv.size()) {
                    auto attr_sv = line_sv.substr(fpos);
                    if (auto p = attr_sv.find_first_not_of(" \t"); p != std::string_view::npos) {
                        attributes_str = std::string(attr_sv.substr(p));
                    }
                }

                // Validate start and end are integers
                if(start_f->empty() || end_f->empty() ||
                   !std::ranges::all_of(*start_f, ggu::is_digit) ||
                   !std::ranges::all_of(*end_f, ggu::is_digit)) {
                    error_message = "Invalid coordinate format at line " + std::to_string(line_num);
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }

                // Parse coordinates (GFF is 1-based inclusive, convert to 0-based half-open)
                size_t start = 0;
                size_t end = 0;
                auto [p1, ec1] = std::from_chars(start_f->data(), start_f->data() + start_f->size(), start);
                auto [p2, ec2] = std::from_chars(end_f->data(), end_f->data() + end_f->size(), end);
                if (ec1 != std::errc{} || ec2 != std::errc{}) {
                    error_message = "Coordinate out of range at line " + std::to_string(line_num);
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }
                start -= 1;  // Convert to 0-based

                if (start >= end) {
                    error_message = "Start coordinate is greater than or equal to end coordinate at line " + std::to_string(line_num);
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }

                entry.seqid = std::string(*seqid_f);
                entry.source = std::string(*source_f);
                entry.type = std::string(*type_f);
                entry.start = start;
                entry.end = end;

                // Parse score (locale-independent via strtod_l)
                if (*score_f != ".") {
                    std::string score_str(*score_f);
                    const char* begin = score_str.c_str();
                    char* end_ptr = nullptr;
                    errno = 0;
                    static locale_t c_locale = newlocale(LC_ALL_MASK, "C", nullptr);
                    double score_val = strtod_l(begin, &end_ptr, c_locale);
                    if (errno == ERANGE) {
                        error_message = "Score value out of range '" + score_str +
                                        "' at line " + std::to_string(line_num);
                        if (options_.skip_invalid_lines) continue;
                        throw std::runtime_error(error_message);
                    }
                    if (end_ptr == begin || end_ptr != begin + score_str.size()) {
                        error_message = "Invalid score value '" + score_str +
                                        "' at line " + std::to_string(line_num);
                        if (options_.skip_invalid_lines) continue;
                        throw std::runtime_error(error_message);
                    }
                    entry.score = score_val;
                } else {
                    entry.score = std::nullopt;
                }

                // Parse strand
                if (strand_f->size() == 1 && ((*strand_f)[0] == '+' || (*strand_f)[0] == '-' ||
                                                (*strand_f)[0] == '.' || (*strand_f)[0] == '?')) {
                    entry.strand = (*strand_f)[0];
                } else {
                    error_message = "Invalid strand value '" + std::string(*strand_f) +
                                    "' at line " + std::to_string(line_num) +
                                    " (expected '+', '-', '.', or '?')";
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }

                // Parse phase
                if (*phase_f != ".") {
                    int phase = 0;
                    auto [pp, ecp] = std::from_chars(phase_f->data(), phase_f->data() + phase_f->size(), phase);
                    if (ecp != std::errc{} || pp != phase_f->data() + phase_f->size() ||
                        phase < 0 || phase > 2) {
                        error_message = "Invalid phase value '" + std::string(*phase_f) +
                                        "' at line " + std::to_string(line_num) +
                                        " (expected 0, 1, 2, or '.')";
                        if (options_.skip_invalid_lines) continue;
                        throw std::runtime_error(error_message);
                    }
                    entry.phase = phase;
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
            } catch (std::runtime_error&) {
                throw; // re-throw our own exceptions
            } catch (const std::exception&) {
                error_message = "Failed to parse line at " + std::to_string(line_num) + ": " + line;
                if (options_.skip_invalid_lines) continue;
                throw std::runtime_error(error_message);
            }
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

    std::string gff_reader::get_error_message() const {
        return error_message;
    }

    size_t gff_reader::get_current_line() const {
        return line_num;
    }

}
