/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/gff_reader.hpp>

// standard
#include <algorithm>
#include <array>
#include <cerrno>
#include <charconv>
#include <clocale>
#include <cstdint>
#include <cstdlib>
#include <functional>
#include <ranges>
#include <stdexcept>

// genogrove
#include <genogrove/data_type/serialization_traits.hpp>
#include <genogrove/utility/char_utils.hpp>
#include <genogrove/utility/le_io.hpp>
#include <genogrove/utility/tokenizer.hpp>

namespace gdt = genogrove::data_type;
namespace ggu = genogrove::utility;

namespace genogrove::io {

    static constexpr int MAX_GFF_PHASE = 2;

    // ==========================================
    // gff_attributes
    // ==========================================

    std::size_t gff_attributes::size() const {
        std::size_t names = 0;
        std::string_view last;
        scan([&](std::string_view name, std::string_view) {
            if (names == 0 || name != last) {
                ++names;
                last = name;
            }
            return true;
        });
        return names;
    }

    std::optional<std::string_view> gff_attributes::first(std::string_view name) const {
        std::optional<std::string_view> found;
        scan([&](std::string_view current, std::string_view value) {
            if (current != name) return current < name;  // sorted: not after a larger name
            found = value;
            return false;
        });
        return found;
    }

    std::vector<std::string> gff_attributes::values(std::string_view name) const {
        std::vector<std::string> out;
        for_each(name, [&](std::string_view value) { out.emplace_back(value); });
        return out;
    }

    std::vector<std::string> gff_attributes::at(std::string_view name) const {
        auto out = values(name);
        if (out.empty()) {
            throw std::out_of_range("gff_attributes::at: no attribute '" + std::string(name) + "'");
        }
        return out;
    }

    // In "...\0name\0value\0" the last name ends at the second-last '\0'.
    std::string_view gff_attributes::last_name() const {
        if (text.size() < 2) return {};
        const std::size_t name_end = text.rfind('\0', text.size() - 2);
        if (name_end == std::string::npos) return {};
        const std::size_t begin = name_end == 0 ? 0 : text.rfind('\0', name_end - 1) + 1;
        return std::string_view(text).substr(begin, name_end - begin);
    }

    // The end of the text when the last name is not larger, which needs no scan.
    std::size_t gff_attributes::end_of(std::string_view name) const {
        std::size_t at = text.size();
        if (last_name() > name) {
            scan([&](std::string_view current, std::string_view) {
                if (current <= name) return true;
                at = static_cast<std::size_t>(current.data() - text.data());
                return false;
            });
        }
        return at;
    }

    namespace {
        void reject_nul(std::string_view name, std::string_view value) {
            if (name.find('\0') != std::string_view::npos || value.find('\0') != std::string_view::npos) {
                throw std::runtime_error("gff_attributes: a name or a value contains a NUL character");
            }
        }
    } // namespace

    void gff_attributes::add(std::string_view name, std::string_view value) {
        reject_nul(name, value);
        // A view into this text moves with the insert, so it is copied first.
        const auto in_text = [this](std::string_view view) {
            return std::less_equal<>()(text.data(), view.data()) &&
                   std::less<>()(view.data(), text.data() + text.size());
        };
        if (in_text(name) || in_text(value)) {
            return add(std::string(name), std::string(value));
        }
        const std::size_t at = end_of(name);
        text.insert(at, name.size() + value.size() + 2, '\0');
        name.copy(text.data() + at, name.size());
        value.copy(text.data() + at + name.size() + 1, value.size());
    }

    void gff_attributes::set(std::string_view name, const std::vector<std::string>& values) {
        // Encoded before the first change: a '\0' then leaves the old values in
        // place, and the name can be a view into this text.
        std::string encoded;
        for (const auto& value : values) {
            reject_nul(name, value);
            encoded.append(name).push_back('\0');
            encoded.append(value).push_back('\0');
        }
        const std::size_t name_size = name.size();
        erase(name);
        if (!encoded.empty()) {
            text.insert(end_of(std::string_view(encoded).substr(0, name_size)), encoded);
        }
    }

    void gff_attributes::erase(std::string_view name) {
        // The values of a name are one range, because the text is sorted by name.
        std::size_t begin = std::string::npos;
        std::size_t end = 0;
        scan([&](std::string_view current, std::string_view value) {
            if (current != name) return begin == std::string::npos && current < name;
            if (begin == std::string::npos) begin = static_cast<std::size_t>(current.data() - text.data());
            end = static_cast<std::size_t>(value.data() - text.data()) + value.size() + 1;
            return true;
        });
        if (begin != std::string::npos) text.erase(begin, end - begin);
    }

    void gff_attributes::serialize(std::ostream& os) const {
        gdt::serializer<std::string>::write(os, text);
    }

    gff_attributes gff_attributes::deserialize(std::istream& is) {
        gff_attributes attributes;
        attributes.text = gdt::serializer<std::string>::read(is);
        return attributes;
    }

    // ==========================================
    // gff_entry helper methods
    // ==========================================

    namespace {
        // First value of a key; the single-valued helpers below (gene_id, exon_number, ...) use it.
        std::optional<std::string> first_attribute(const gff_entry& e, std::string_view key) {
            if (const auto value = e.attributes.first(key)) return std::string(*value);
            return std::nullopt;
        }
    } // namespace

    std::vector<std::string> gff_entry::get_parent_ids() const {
        std::vector<std::string> ids;
        for (const auto& parent : get_attributes("Parent")) {
            for (auto id : std::views::split(parent, ',')) {
                if (!id.empty()) ids.emplace_back(id.begin(), id.end());
            }
        }
        return ids;
    }

    std::optional<std::string> gff_entry::get_gene_id() const {
        if (auto id = first_attribute(*this, "gene_id")) return id;
        if (!is_gff3()) return std::nullopt;
        if (type == "gene") return first_attribute(*this, "ID");
        // A transcript's gene is its own Parent
        static constexpr std::array<std::string_view, 6> transcript_types = {
            "mRNA", "transcript", "lnc_RNA", "ncRNA", "rRNA", "tRNA"};
        if (std::ranges::find(transcript_types, type) == transcript_types.end()) return std::nullopt;
        auto parents = get_parent_ids();
        if (parents.size() != 1) return std::nullopt;
        return parents.front();
    }

    std::optional<std::string> gff_entry::get_transcript_id() const {
        if (auto id = first_attribute(*this, "transcript_id")) return id;
        if (!is_gff3()) return std::nullopt;
        static constexpr std::array<std::string_view, 5> child_types = {
            "exon", "CDS", "five_prime_UTR", "three_prime_UTR", "UTR"};
        if (std::ranges::find(child_types, type) == child_types.end()) return std::nullopt;
        auto parents = get_parent_ids();
        if (parents.size() != 1) return std::nullopt;
        return parents.front();
    }

    std::optional<int> gff_entry::get_exon_number() const {
        auto exon_num_str = first_attribute(*this, "exon_number");
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
        auto name = first_attribute(*this, "gene_name");
        if (name) return name;
        return first_attribute(*this, "Name");
    }

    std::optional<std::string> gff_entry::get_gene_biotype() const {
        // Try multiple common attribute names
        auto biotype = first_attribute(*this, "gene_biotype");
        if (biotype) return biotype;

        biotype = first_attribute(*this, "gene_type");
        if (biotype) return biotype;

        return first_attribute(*this, "biotype");
    }

    std::vector<std::string> gff_entry::get_attributes(std::string_view key) const {
        return attributes.values(key);
    }

    // ==========================================
    // gff_reader implementation
    // ==========================================

    gff_reader::gff_reader(const std::filesystem::path& fpath)
        : gff_reader(fpath, gff_reader_options::defaults()) {}

    // Constructor-time check of the first data line (streaming mode only).
    static void validate_first_gff_line(std::string_view line_sv,
                                        const std::filesystem::path& fpath) {
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
        const auto start_res = std::from_chars(start_f->data(), start_f->data() + start_f->size(), start_num);
        const auto end_res = std::from_chars(end_f->data(), end_f->data() + end_f->size(), end_num);
        if (start_res.ec != std::errc{} || end_res.ec != std::errc{}) {
            throw std::runtime_error("Invalid GFF coordinates (out of range) in " + fpath.string());
        }
        if (start_num < 1) {
            throw std::runtime_error("Invalid GFF coordinates (start must be >= 1, GFF is 1-based) in " + fpath.string());
        }
        if (start_num > end_num) {
            throw std::runtime_error("Invalid GFF coordinates (start > end) in " + fpath.string());
        }
    }

    // With skip_invalid_lines the caller opts into tolerating malformed records,
    // including the first. No validator is passed then, so construction never
    // throws on a bad record; read_next()/parse_line() skips it like any other.
    gff_reader::gff_reader(const std::filesystem::path& fpath, const gff_reader_options& options)
        : line_source(fpath, options.region,
                 options.skip_invalid_lines
                     ? text_line_source::first_line_validator{}
                     : [&fpath](std::string_view line) { validate_first_gff_line(line, fpath); }),
          line_num(0), options(options) {}

    gff_format gff_reader::parse_attributes(std::string_view attr_string,
                                            gff_attributes& attributes) {
        attributes.clear();
        attribute_pairs.clear();
        // Sorted by name first, so that each add() appends at the end. Stable:
        // the values of a repeated name keep the order of the line.
        const auto store = [&] {
            std::ranges::stable_sort(attribute_pairs, {},
                                     &std::pair<std::string_view, std::string_view>::first);
            for (const auto& [name, value] : attribute_pairs) attributes.add(name, value);
        };

        std::string_view sv(attr_string);
        size_t pos = 0;

        // Detect format: GFF3 uses '=' and ';', GTF uses ' "' and '";'
        if (attr_string.find(" \"") != std::string_view::npos) {
            // GTF format: key "value"; key "value";
            while (auto token_sv = ggu::next_gtf_field(sv, pos)) {
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

                attribute_pairs.emplace_back(trimmed.substr(0, space_pos), value_sv);
            }
            store();
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

                attribute_pairs.emplace_back(trimmed.substr(0, eq_pos), trimmed.substr(eq_pos + 1));
            }
            store();
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
        // Initialized once on first use (thread-safe per C++11 static-init rules)
        // and intentionally never freed: the locale must outlive every parse_score
        // call, so it lives for the program's lifetime. freelocale() is deliberately
        // omitted — this is a one-off allocation, not a leak that grows.
        static locale_t c_locale = []() {
            locale_t loc = newlocale(LC_ALL_MASK, "C", nullptr);
            if (!loc) throw std::runtime_error("newlocale failed");
            return loc;
        }();
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
            phase < 0 || phase > MAX_GFF_PHASE) {
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
            // A BGZF/tabix I/O error throws from the fetch; record it in
            // error_message before it propagates so a caller that catches the
            // exception and calls get_error_message() sees it (matching bam/vcf).
            // line_num is synced on that path too, so it reports the lines
            // consumed before the error.
            std::optional<std::string> line_opt;
            try {
                line_opt = line_source.next_line();
            } catch (const std::exception& e) {
                error_message = e.what();
                line_num = line_source.current_line();
                throw;
            }
            line_num = line_source.current_line();
            if (!line_opt) return false;  // EOF / end of region

            if (parse_line(*line_opt, entry)) return true;
            // Invalid line: error_message already set by parse_line.
            if (options.skip_invalid_lines) continue;
            throw std::runtime_error(error_message);
        }
    }

    bool gff_reader::parse_line(const std::string& line, gff_entry& entry) {
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
                return false;
            }

            // Read the rest of the line as attributes (view into line, no copy)
            std::string_view attributes_sv;
            if (fpos < line_sv.size()) {
                auto attr_sv = line_sv.substr(fpos);
                if (auto p = attr_sv.find_first_not_of(" \t"); p != std::string_view::npos) {
                    attributes_sv = attr_sv.substr(p);
                }
            }

            // Validate start and end are integers
            if(start_f->empty() || end_f->empty() ||
               !std::ranges::all_of(*start_f, ggu::is_digit) ||
               !std::ranges::all_of(*end_f, ggu::is_digit)) {
                error_message = "Invalid coordinate format at line " + std::to_string(line_num);
                return false;
            }

            // Parse coordinates (stored as 1-based inclusive, native GFF format)
            size_t start = 0;
            size_t end = 0;
            auto [p1, ec1] = std::from_chars(start_f->data(), start_f->data() + start_f->size(), start);
            auto [p2, ec2] = std::from_chars(end_f->data(), end_f->data() + end_f->size(), end);
            if (ec1 != std::errc{} || ec2 != std::errc{}) {
                error_message = "Coordinate out of range at line " + std::to_string(line_num);
                return false;
            }

            // GFF columns 4/5 are 1-based, so start must be >= 1. Reject 0 here
            // rather than let a downstream 0-based conversion (start - 1)
            // underflow (see genogrove#474).
            if (start < 1) {
                error_message = "Start coordinate must be >= 1 (GFF is 1-based) at line " + std::to_string(line_num);
                return false;
            }

            if (start > end) {
                error_message = "Start coordinate is greater than end coordinate at line " + std::to_string(line_num);
                return false;
            }

            entry.seqid = std::string(*seqid_f);
            entry.source = std::string(*source_f);
            entry.type = std::string(*type_f);
            entry.start = start;
            entry.end = end;

            // Parse score, strand, and phase
            if (!parse_score(entry, *score_f)) return false;
            if (!parse_strand(entry, *strand_f)) return false;
            if (!parse_phase(entry, *phase_f)) return false;

            // '\0' separates names and values in gff_attributes
            if (attributes_sv.find('\0') != std::string_view::npos) {
                error_message = "NUL character in the attributes at line " + std::to_string(line_num);
                return false;
            }

            // Parse attributes and detect format
            if (!attributes_sv.empty()) {
                entry.format = parse_attributes(attributes_sv, entry.attributes);
            } else {
                entry.attributes.clear();
                entry.format = gff_format::UNKNOWN;
            }

            // Validate mandatory GTF2 attributes if enabled
            if (options.validate_gtf && entry.format == gff_format::GTF) {
                if (!validate_gtf_attributes(entry)) return false;
            }

            return true;
        } catch (const std::runtime_error&) {
            throw;  // propagate infrastructure errors (e.g. newlocale failure), as before
        } catch (const std::exception&) {
            error_message = "Failed to parse line at " + std::to_string(line_num) + ": " + line;
            return false;
        }
    }

    bool gff_reader::has_next() {
        return line_source.has_next();
    }

    std::string gff_reader::get_error_message() const {
        return error_message;
    }

    size_t gff_reader::get_current_line() const {
        return line_num;
    }

    // ==========================================
    // gff_entry serialization
    // ==========================================

    namespace {
        // An optional is written as a 1-byte presence flag followed by the
        // value (only when present). Mirrors the bed_entry encoding.
        template<typename T>
        void write_optional(std::ostream& os, const std::optional<T>& opt) {
            const uint8_t present = opt.has_value() ? 1 : 0;
            os.write(reinterpret_cast<const char*>(&present), sizeof(present));
            if (opt.has_value()) {
                gdt::serializer<T>::write(os, *opt);
            }
            if (!os) {
                throw std::runtime_error("Failed to serialize gff_entry: stream error");
            }
        }

        template<typename T>
        std::optional<T> read_optional(std::istream& is) {
            uint8_t present = 0;
            is.read(reinterpret_cast<char*>(&present), sizeof(present));
            if (!is) {
                throw std::runtime_error("Failed to deserialize gff_entry: stream error reading optional flag");
            }
            if (present == 0) {
                return std::nullopt;
            }
            if (present != 1) {
                throw std::runtime_error("Failed to deserialize gff_entry: invalid optional presence flag");
            }
            return gdt::serializer<T>::read(is);
        }
    } // namespace

    void gff_entry::serialize(std::ostream& os) const {
        gdt::serializer<std::string>::write(os, seqid);
        gdt::serializer<std::string>::write(os, source);
        gdt::serializer<std::string>::write(os, type);
        ggu::write_size(os, start);
        ggu::write_size(os, end);
        write_optional(os, score);
        write_optional(os, strand);
        write_optional(os, phase);
        attributes.serialize(os);
        const uint8_t fmt = static_cast<uint8_t>(format);
        os.write(reinterpret_cast<const char*>(&fmt), sizeof(fmt));
        if (!os) {
            throw std::runtime_error("Failed to serialize gff_entry: stream error");
        }
    }

    gff_entry gff_entry::deserialize(std::istream& is) {
        gff_entry entry;
        entry.seqid = gdt::serializer<std::string>::read(is);
        entry.source = gdt::serializer<std::string>::read(is);
        entry.type = gdt::serializer<std::string>::read(is);
        ggu::read_size(is, entry.start);
        ggu::read_size(is, entry.end);
        if (!is) {
            throw std::runtime_error("Failed to deserialize gff_entry: stream error reading coordinates");
        }
        entry.score = read_optional<double>(is);
        entry.strand = read_optional<char>(is);
        entry.phase = read_optional<int>(is);
        entry.attributes = gff_attributes::deserialize(is);
        uint8_t fmt = 0;
        is.read(reinterpret_cast<char*>(&fmt), sizeof(fmt));
        if (!is) {
            throw std::runtime_error("Failed to deserialize gff_entry: stream error reading format");
        }
        if (fmt > static_cast<uint8_t>(gff_format::UNKNOWN)) {
            throw std::runtime_error("Failed to deserialize gff_entry: unknown gff_format value");
        }
        entry.format = static_cast<gff_format>(fmt);
        return entry;
    }

}
