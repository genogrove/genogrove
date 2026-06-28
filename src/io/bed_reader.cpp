/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/bed_reader.hpp>
#include <genogrove/io/bgzf_utils.hpp>

// standard
#include <algorithm>
#include <ranges>
#include <charconv>
#include <cstdint>
#include <istream>
#include <optional>
#include <ostream>
#include <vector>

// genogrove
#include <genogrove/data_type/serialization_traits.hpp>
#include <genogrove/utility/char_utils.hpp>
#include <genogrove/utility/tokenizer.hpp>

namespace ggu = genogrove::utility;
namespace gdt = genogrove::data_type;

namespace genogrove::io {

    static constexpr int MAX_BED_SCORE = 1000;
    static constexpr size_t MAX_RGB_VALUE = 255;

    // Helper function to parse comma-separated integers into a vector
    // Returns nullopt on parse error to distinguish from genuinely empty input
    static std::optional<std::vector<size_t>> parse_csv(std::string_view str) {
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
        : bgzf_file(nullptr), line_num(0), options(options) {
        // note this handles both raw and gzipped files
        bgzf_file = bgzf_open(fpath.c_str(), "r"); // open file
        if(!bgzf_file) {
            throw std::runtime_error("Failed to open file: " + fpath.string());
        }

        // Validate first data line
        size_t temp_line_num = 0;

        try {
            auto first_line = bgzf_next_data_line(bgzf_file, temp_line_num);
            if (!first_line) {
                // Structurally valid file with zero data records (empty file,
                // comments-only file, or all blank lines). Treat as non-error:
                // rewind so the iterator reports end() immediately. Consumers
                // can detect zero records via reader.begin() == reader.end().
                bgzf_rewind_to_start(bgzf_file, fpath);
                return;
            }

            std::string_view line_sv(*first_line);
            size_t fpos = 0;
            auto chrom_f = ggu::next_field(line_sv, fpos);
            auto start_f = ggu::next_field(line_sv, fpos);
            auto end_f = ggu::next_field(line_sv, fpos);

            if (!chrom_f || !start_f || !end_f) {
                throw std::runtime_error("Invalid BED header/format in " + fpath.string());
            }

            if (start_f->empty() || end_f->empty() ||
                !std::ranges::all_of(*start_f, ggu::is_digit) ||
                !std::ranges::all_of(*end_f, ggu::is_digit)) {
                throw std::runtime_error("Invalid BED coordinates (non-integer) in " + fpath.string());
            }

            size_t start_num = 0;
            size_t end_num = 0;
            auto [p1, ec1] = std::from_chars(start_f->data(), start_f->data() + start_f->size(), start_num);
            auto [p2, ec2] = std::from_chars(end_f->data(), end_f->data() + end_f->size(), end_num);
            if (ec1 != std::errc{} || ec2 != std::errc{}) {
                throw std::runtime_error("Invalid BED coordinates (out of range) in " + fpath.string());
            }
            if (start_num >= end_num) {
                throw std::runtime_error("Invalid BED coordinates (start >= end) in " + fpath.string());
            }

            bgzf_rewind_to_start(bgzf_file, fpath);
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

    bool bed_reader::parse_score(bed_entry& entry, std::string_view score_str) {
        int score = 0;
        auto [ptr, ec] = std::from_chars(score_str.data(), score_str.data() + score_str.size(), score);
        if (ec != std::errc{} || ptr != score_str.data() + score_str.size()) {
            error_message = "Invalid score format at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        if (score < 0 || score > MAX_BED_SCORE) {
            error_message = "Invalid score (must be 0-1000) at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        entry.score = score;
        return true;
    }

    bool bed_reader::parse_strand(bed_entry& entry, std::string_view strand_str) {
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

    bool bed_reader::parse_thickness(bed_entry& entry, std::string_view thick_start_str,
                                     std::string_view thick_end_str,
                                     size_t start_num, size_t end_num) {
        uint64_t thick_start = 0;
        uint64_t thick_end = 0;
        auto [p1, ec1] = std::from_chars(thick_start_str.data(),
            thick_start_str.data() + thick_start_str.size(), thick_start);
        if (ec1 != std::errc{} || p1 != thick_start_str.data() + thick_start_str.size()) {
            error_message = "Invalid thickStart format at line ";
            error_message += std::to_string(line_num);
            return false;
        }
        auto [p2, ec2] = std::from_chars(thick_end_str.data(),
            thick_end_str.data() + thick_end_str.size(), thick_end);
        if (ec2 != std::errc{} || p2 != thick_end_str.data() + thick_end_str.size()) {
            error_message = "Invalid thickEnd format at line ";
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

    bool bed_reader::parse_rgb(bed_entry& entry, std::string_view item_rgb_str) {
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
            if (rgb_values[0] <= MAX_RGB_VALUE && rgb_values[1] <= MAX_RGB_VALUE && rgb_values[2] <= MAX_RGB_VALUE) {
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

    bool bed_reader::parse_blocks(bed_entry& entry, std::string_view block_count_str,
                                  std::string_view block_sizes_str, std::string_view block_starts_str,
                                  size_t start_num, size_t end_num) {
        if (!std::ranges::all_of(block_count_str, ggu::is_digit)) {
            error_message = "Invalid block count format (non-integer) at line ";
            error_message += std::to_string(line_num);
            return false;
        }

        int block_count = 0;
        auto [bc_ptr, bc_ec] = std::from_chars(block_count_str.data(),
            block_count_str.data() + block_count_str.size(), block_count);
        if (bc_ec != std::errc{} || bc_ptr != block_count_str.data() + block_count_str.size()) {
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
        if (!parse_score(entry, *score_f)) return false;

        // BED6: strand
        auto strand_f = ggu::next_field(line_sv, fpos);
        if (!strand_f) return true;  // BED5
        if (!parse_strand(entry, *strand_f)) return false;

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
        if (!parse_thickness(entry, *thick_start_f,
                             *thick_end_f, start_num, end_num)) return false;
        if (!parse_rgb(entry, *item_rgb_f)) return false;

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
        return parse_blocks(entry, *block_count_f,
                            *block_sizes_f,
                            *block_starts_f, start_num, end_num);
    }

    bool bed_reader::read_next(bed_entry& entry) {
        while (true) {
            error_message.clear();

            auto line_opt = bgzf_next_data_line(bgzf_file, line_num);
            if (!line_opt) return false;  // EOF

            if (parse_line(*line_opt, entry)) return true;
            // Invalid line: error_message already set by parse_line.
            if (options.skip_invalid_lines) continue;
            throw std::runtime_error(error_message);
        }
    }

    bool bed_reader::parse_line(const std::string& line, bed_entry& entry) {
        // Reset optional fields to avoid stale data from previous records
        entry.name.reset();
        entry.score.reset();
        entry.strand.reset();
        entry.thickness.reset();
        entry.item_rgb.reset();
        entry.blocks.reset();

        std::string_view line_sv(line);
        size_t fpos = 0;

        auto chrom_f = ggu::next_field(line_sv, fpos);
        auto start_f = ggu::next_field(line_sv, fpos);
        auto end_f = ggu::next_field(line_sv, fpos);

        try {
            if (!chrom_f || !start_f || !end_f) {
                error_message = "Invalid line format at line " + std::to_string(line_num);
                return false;
            }

            // validate integers
            if(start_f->empty() ||
                end_f->empty() ||
                !std::ranges::all_of(*start_f, ggu::is_digit) ||
                !std::ranges::all_of(*end_f, ggu::is_digit)) {
                error_message = "Invalid coordinate format at line " + std::to_string(line_num);
                return false;
            }

            // validate and create interval object
            size_t start_num = 0;
            size_t end_num = 0;
            auto [p1, ec1] = std::from_chars(start_f->data(), start_f->data() + start_f->size(), start_num);
            auto [p2, ec2] = std::from_chars(end_f->data(), end_f->data() + end_f->size(), end_num);
            if (ec1 != std::errc{} || ec2 != std::errc{}) {
                error_message = "Coordinate out of range at line " + std::to_string(line_num);
                return false;
            }

            if (start_num >= end_num) {
                error_message = "Start coordinate is greater than or equal to the end coordinate at line " + std::to_string(line_num);
                return false;
            }
            entry.chrom = std::string(*chrom_f);
            entry.start = start_num;
            entry.end = end_num;

            // Parse optional BED fields (BED4 through BED12)
            if (!parse_optional_fields(line_sv, fpos, entry, start_num, end_num)) {
                return false;  // error_message already set by parse_* helper
            }

            return true;
        } catch (const std::exception&) {
            error_message = "Failed to parse line at " + std::to_string(line_num) + ": " + line;
            return false;
        }
    }

    bool bed_reader::has_next() {
        return bgzf_has_next(bgzf_file);
    }

    std::string bed_reader::get_error_message() const {
        return error_message;
    }

    size_t bed_reader::get_current_line() const {
        return line_num;
    }

    // ---- serialization ----

    namespace {
        // An optional is written as a 1-byte presence flag followed by the
        // value (only when present).
        template<typename T>
        void write_optional(std::ostream& os, const std::optional<T>& opt) {
            const uint8_t present = opt.has_value() ? 1 : 0;
            os.write(reinterpret_cast<const char*>(&present), sizeof(present));
            if (opt.has_value()) {
                gdt::serializer<T>::write(os, *opt);
            }
            if (!os) {
                throw std::runtime_error("Failed to serialize bed_entry: stream error");
            }
        }

        template<typename T>
        std::optional<T> read_optional(std::istream& is) {
            uint8_t present = 0;
            is.read(reinterpret_cast<char*>(&present), sizeof(present));
            if (!is) {
                throw std::runtime_error("Failed to deserialize bed_entry: stream error reading optional flag");
            }
            if (present == 0) {
                return std::nullopt;
            }
            if (present != 1) {
                throw std::runtime_error("Failed to deserialize bed_entry: invalid optional presence flag");
            }
            return gdt::serializer<T>::read(is);
        }

        // A vector is written as a 4-byte length followed by the elements.
        void write_size_vector(std::ostream& os, const std::vector<size_t>& v) {
            const uint32_t n = static_cast<uint32_t>(v.size());
            os.write(reinterpret_cast<const char*>(&n), sizeof(n));
            if (n > 0) {
                os.write(reinterpret_cast<const char*>(v.data()),
                         static_cast<std::streamsize>(n * sizeof(size_t)));
            }
            if (!os) {
                throw std::runtime_error("Failed to serialize block_info: stream error");
            }
        }

        std::vector<size_t> read_size_vector(std::istream& is) {
            uint32_t n = 0;
            is.read(reinterpret_cast<char*>(&n), sizeof(n));
            if (!is) {
                throw std::runtime_error("Failed to deserialize block_info: stream error reading vector length");
            }
            std::vector<size_t> v(n);
            if (n > 0) {
                is.read(reinterpret_cast<char*>(v.data()),
                        static_cast<std::streamsize>(n * sizeof(size_t)));
                if (!is) {
                    throw std::runtime_error("Failed to deserialize block_info: stream error reading vector data");
                }
            }
            return v;
        }
    } // namespace

    void block_info::serialize(std::ostream& os) const {
        os.write(reinterpret_cast<const char*>(&count), sizeof(count));
        write_size_vector(os, sizes);
        write_size_vector(os, starts);
        if (!os) {
            throw std::runtime_error("Failed to serialize block_info: stream error");
        }
    }

    block_info block_info::deserialize(std::istream& is) {
        block_info bi;
        is.read(reinterpret_cast<char*>(&bi.count), sizeof(bi.count));
        if (!is) {
            throw std::runtime_error("Failed to deserialize block_info: stream error reading count");
        }
        bi.sizes = read_size_vector(is);
        bi.starts = read_size_vector(is);
        return bi;
    }

    void bed_entry::serialize(std::ostream& os) const {
        gdt::serializer<std::string>::write(os, chrom);
        os.write(reinterpret_cast<const char*>(&start), sizeof(start));
        os.write(reinterpret_cast<const char*>(&end), sizeof(end));
        write_optional(os, name);
        write_optional(os, score);
        write_optional(os, strand);
        write_optional(os, thickness);
        write_optional(os, item_rgb);
        write_optional(os, blocks);
        if (!os) {
            throw std::runtime_error("Failed to serialize bed_entry: stream error");
        }
    }

    bed_entry bed_entry::deserialize(std::istream& is) {
        bed_entry entry;
        entry.chrom = gdt::serializer<std::string>::read(is);
        is.read(reinterpret_cast<char*>(&entry.start), sizeof(entry.start));
        is.read(reinterpret_cast<char*>(&entry.end), sizeof(entry.end));
        if (!is) {
            throw std::runtime_error("Failed to deserialize bed_entry: stream error reading coordinates");
        }
        entry.name = read_optional<std::string>(is);
        entry.score = read_optional<int>(is);
        entry.strand = read_optional<char>(is);
        entry.thickness = read_optional<thick_info>(is);
        entry.item_rgb = read_optional<rgb_color>(is);
        entry.blocks = read_optional<block_info>(is);
        return entry;
    }

}

