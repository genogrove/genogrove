#include <genogrove/io/gff_reader.hpp>
#include <genogrove/io/bgzf_utils.hpp>

// standard
#include <algorithm>
#include <cerrno>
#include <charconv>
#include <clocale>
#include <cstdlib>
#include <ranges>

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

        // Validate first data line
        int64_t start_pos = bgzf_tell(bgzf_file);
        size_t temp_line_num = 0;

        try {
            auto first_line = bgzf_next_data_line(bgzf_file, temp_line_num);
            if (!first_line) {
                throw std::runtime_error("No valid GFF data found in " + fpath.string());
            }

            std::string_view line_sv(*first_line);
            size_t fpos = 0;
            auto seqid_f = ggu::next_field(line_sv, fpos);
            auto source_f = ggu::next_field(line_sv, fpos);
            auto type_f = ggu::next_field(line_sv, fpos);
            auto start_f = ggu::next_field(line_sv, fpos);
            auto end_f = ggu::next_field(line_sv, fpos);
            auto score_f = ggu::next_field(line_sv, fpos);
            auto strand_f = ggu::next_field(line_sv, fpos);
            auto phase_f = ggu::next_field(line_sv, fpos);

            if (!seqid_f || !source_f || !type_f || !start_f || !end_f ||
                !score_f || !strand_f || !phase_f) {
                throw std::runtime_error("Invalid GFF header/format in " + fpath.string());
            }

            if (start_f->empty() || end_f->empty() ||
                !std::ranges::all_of(*start_f, ggu::is_digit) ||
                !std::ranges::all_of(*end_f, ggu::is_digit)) {
                throw std::runtime_error("Invalid GFF coordinates (non-integer) in " + fpath.string());
            }

            size_t start_num = 0;
            size_t end_num = 0;
            auto [p1, ec1] = std::from_chars(start_f->data(), start_f->data() + start_f->size(), start_num);
            auto [p2, ec2] = std::from_chars(end_f->data(), end_f->data() + end_f->size(), end_num);
            if (ec1 != std::errc{} || ec2 != std::errc{}) {
                throw std::runtime_error("Invalid GFF coordinates (out of range) in " + fpath.string());
            }
            start_num -= 1;  // Convert to 0-based

            if (start_num >= end_num) {
                throw std::runtime_error("Invalid GFF coordinates (start >= end) in " + fpath.string());
            }

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

                auto value_sv = trimmed.substr(space_pos + 1);

                // Remove quotes from value before materializing
                if (value_sv.size() >= 2 && value_sv.front() == '"' && value_sv.back() == '"') {
                    value_sv = value_sv.substr(1, value_sv.size() - 2);
                }

                attributes.insert_or_assign(std::string(trimmed.substr(0, space_pos)),
                                           std::string(value_sv));
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

                attributes.insert_or_assign(std::string(trimmed.substr(0, eq_pos)),
                                           std::string(trimmed.substr(eq_pos + 1)));
            }
            return gff_format::GFF3;
        }
    }

    bool gff_reader::parse_score(gff_entry& entry, std::string_view score_str) {
        if (score_str == ".") {
            entry.score = std::nullopt;
            return true;
        }

        std::string score_s(score_str);
        const char* begin = score_s.c_str();
        char* end_ptr = nullptr;
        errno = 0;
        static locale_t c_locale = newlocale(LC_ALL_MASK, "C", nullptr);
        double score_val = strtod_l(begin, &end_ptr, c_locale);
        if (errno == ERANGE) {
            error_message = "Score value out of range '" + score_s +
                            "' at line " + std::to_string(line_num);
            return false;
        }
        if (end_ptr == begin || end_ptr != begin + score_s.size()) {
            error_message = "Invalid score value '" + score_s +
                            "' at line " + std::to_string(line_num);
            return false;
        }
        entry.score = score_val;
        return true;
    }

    bool gff_reader::parse_strand(gff_entry& entry, std::string_view strand_str) {
        if (strand_str.size() == 1 && (strand_str[0] == '+' || strand_str[0] == '-' ||
                                        strand_str[0] == '.' || strand_str[0] == '?')) {
            entry.strand = strand_str[0];
            return true;
        }
        error_message = "Invalid strand value '" + std::string(strand_str) +
                        "' at line " + std::to_string(line_num) +
                        " (expected '+', '-', '.', or '?')";
        return false;
    }

    bool gff_reader::parse_phase(gff_entry& entry, std::string_view phase_str) {
        if (phase_str == ".") {
            entry.phase = std::nullopt;
            return true;
        }

        int phase = 0;
        auto [pp, ecp] = std::from_chars(phase_str.data(), phase_str.data() + phase_str.size(), phase);
        if (ecp != std::errc{} || pp != phase_str.data() + phase_str.size() ||
            phase < 0 || phase > 2) {
            error_message = "Invalid phase value '" + std::string(phase_str) +
                            "' at line " + std::to_string(line_num) +
                            " (expected 0, 1, 2, or '.')";
            return false;
        }
        entry.phase = phase;
        return true;
    }

    bool gff_reader::validate_gtf_attributes(const gff_entry& entry) {
        // GTF2 requires gene_id on all features
        if (!entry.attributes.contains("gene_id")) {
            error_message = "Missing mandatory GTF attribute 'gene_id' at line " +
                            std::to_string(line_num);
            return false;
        }

        // Transcript-level features require transcript_id
        static constexpr std::string_view transcript_types[] = {
            "exon", "CDS", "start_codon", "stop_codon", "UTR", "5UTR", "3UTR"
        };
        for (auto type : transcript_types) {
            if (entry.type == type) {
                if (!entry.attributes.contains("transcript_id")) {
                    error_message = "Missing mandatory GTF attribute 'transcript_id' for " +
                                    entry.type + " feature at line " + std::to_string(line_num);
                    return false;
                }
                break;
            }
        }
        return true;
    }

    bool gff_reader::read_next(gff_entry& entry) {
        while (true) {
            error_message.clear();
            auto line_opt = bgzf_next_data_line(bgzf_file, line_num);
            if (!line_opt) return false;  // EOF
            const std::string& line = *line_opt;

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

                // Parse score, strand, and phase
                if (!parse_score(entry, *score_f)) {
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }
                if (!parse_strand(entry, *strand_f)) {
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }
                if (!parse_phase(entry, *phase_f)) {
                    if (options_.skip_invalid_lines) continue;
                    throw std::runtime_error(error_message);
                }

                // Parse attributes and detect format
                if (!attributes_str.empty()) {
                    entry.format = parse_attributes(attributes_str, entry.attributes);
                } else {
                    entry.attributes.clear();
                    entry.format = gff_format::UNKNOWN;
                }

                // Validate mandatory GTF2 attributes if enabled
                if (options_.validate_gtf && entry.format == gff_format::GTF) {
                    if (!validate_gtf_attributes(entry)) {
                        if (options_.skip_invalid_lines) continue;
                        throw std::runtime_error(error_message);
                    }
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
        return bgzf_has_next(bgzf_file);
    }

    std::string gff_reader::get_error_message() const {
        return error_message;
    }

    size_t gff_reader::get_current_line() const {
        return line_num;
    }

}
