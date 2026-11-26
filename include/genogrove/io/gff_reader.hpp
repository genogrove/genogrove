/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_GFFREADER_HPP
#define GENOGROVE_IO_GFFREADER_HPP

// standard
#include <cstddef>
#include <iosfwd>
#include <string>
#include <string_view>
#include <filesystem>
#include <optional>
#include <utility>
#include <vector>

// genogrove
#include <genogrove/data_type/genomic_coordinate.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/file_reader.hpp>
#include <genogrove/io/text_line_source.hpp>

namespace genogrove::io {

    // Format type detected during parsing
    enum class gff_format {
        GFF3,       // GFF3 format (key=value attributes)
        GTF,        // GTF/GTF2 format (key "value" attributes)
        UNKNOWN     // Format not yet determined
    };

    // The attributes of column 9: names, each with one or more values.
    //
    // All text is in one string, "name\0value\0name\0value\0...", sorted by
    // name. A name with several values repeats, its values in the order they
    // were added. A record costs one allocation, and a record from an index is
    // one string read. A lookup stops at the first larger name. Names and
    // values must not contain '\0'.
    class gff_attributes {
    public:
        [[nodiscard]] bool empty() const { return text.empty(); }
        // Number of names; a name with several values counts once
        [[nodiscard]] std::size_t size() const;
        [[nodiscard]] bool contains(std::string_view name) const { return first(name).has_value(); }
        // First value of the name. The view is valid until the attributes change.
        [[nodiscard]] std::optional<std::string_view> first(std::string_view name) const;
        // Every value of the name in the order added; empty when the name is absent
        [[nodiscard]] std::vector<std::string> values(std::string_view name) const;
        // As values(), but throws std::out_of_range when the name is absent
        [[nodiscard]] std::vector<std::string> at(std::string_view name) const;

        // Adds one value after the values the name already has. Throws
        // std::runtime_error if the name or the value contains '\0'.
        void add(std::string_view name, std::string_view value);
        // Replaces the values of the name; an empty list removes the name
        void set(std::string_view name, const std::vector<std::string>& values);
        void erase(std::string_view name);
        void clear() { text.clear(); }

        // Calls fn(name, value) for each value, sorted by name. The views are
        // valid until the attributes change.
        template <typename fn_t>
        void for_each(fn_t&& fn) const {
            scan([&fn](std::string_view name, std::string_view value) {
                fn(name, value);
                return true;
            });
        }

        [[nodiscard]] bool operator==(const gff_attributes&) const = default;

        void serialize(std::ostream& os) const;
        [[nodiscard]] static gff_attributes deserialize(std::istream& is);

    private:
        // Name of the last pair; empty when there is none
        [[nodiscard]] std::string_view last_name() const;

        // Calls fn(name, value) for each value until fn returns false. A tail
        // with no closing '\0' (only in a damaged index) is ignored.
        template <typename fn_t>
        void scan(fn_t&& fn) const {
            const std::string_view all(text);
            for (std::size_t pos = 0; pos < all.size();) {
                const std::size_t name_end = all.find('\0', pos);
                if (name_end == std::string_view::npos) return;
                const std::size_t value_end = all.find('\0', name_end + 1);
                if (value_end == std::string_view::npos) return;
                if (!fn(all.substr(pos, name_end - pos),
                        all.substr(name_end + 1, value_end - name_end - 1))) {
                    return;
                }
                pos = value_end + 1;
            }
        }

        std::string text;
    };

    struct gff_entry {
        std::string seqid;              // chromosome/contig name
        std::string source;             // source of the feature
        std::string type;               // feature type (gene, exon, CDS, etc.)
        size_t start = 0;              // 1-based inclusive start position (native GFF)
        size_t end = 0;                // 1-based inclusive end position (native GFF)
        std::optional<double> score;    // score (if not '.')
        std::optional<char> strand;     // strand (+, -, ., or ?)
        std::optional<int> phase;       // phase for CDS features (0, 1, or 2)
        // key-value pairs from column 9; a key repeated on one line (GTF `tag`) keeps all values in order
        gff_attributes attributes;
        gff_format format;              // detected format (GFF3 or GTF)


        gff_entry() : format(gff_format::UNKNOWN) {}
        gff_entry(std::string seqid, size_t start, size_t end, std::string type)
            : seqid(std::move(seqid)), type(std::move(type)), start(start), end(end), format(gff_format::UNKNOWN) {}

        // Returns the IDs listed in the GFF3 Parent attribute (comma-separated); empty when absent
        [[nodiscard]] std::vector<std::string> get_parent_ids() const;

        // Returns gene_id (GTF). In GFF3: the ID of a gene feature, or the Parent of a
        // transcript-level feature (mRNA, transcript, lnc_RNA, ncRNA, rRNA, tRNA)
        [[nodiscard]] std::optional<std::string> get_gene_id() const;

        // Returns transcript_id (GTF). In GFF3: the single Parent of an exon, CDS or UTR
        // feature. nullopt when there are several parents; use get_parent_ids() then.
        [[nodiscard]] std::optional<std::string> get_transcript_id() const;

        // Returns the value of the exon_number attribute (GTF standard)
        [[nodiscard]] std::optional<int> get_exon_number() const;

        // Returns the value of the gene_name attribute (GTF common)
        [[nodiscard]] std::optional<std::string> get_gene_name() const;

        // Returns the value of the gene_biotype/gene_type attribute (GTF common)
        [[nodiscard]] std::optional<std::string> get_gene_biotype() const;

        // Every value of the key in file order; empty when absent
        [[nodiscard]] std::vector<std::string> get_attributes(std::string_view key) const;

        // Grove key for this record: GFF is 1-based closed, so [start - 1, end - 1] (0-based closed).
        // Precondition: start >= 1 and end >= 1, which parsed records satisfy; a hand-built entry
        // with a zero coordinate underflows.
        [[nodiscard]] genogrove::data_type::interval to_interval() const {
            return genogrove::data_type::interval(start - 1, end - 1);
        }

        // Stranded grove key; strand is column 7, with '?' (unknown) and unset mapped to '.'
        [[nodiscard]] genogrove::data_type::genomic_coordinate to_coordinate() const {
            const char s = strand.value_or('.');
            return genogrove::data_type::genomic_coordinate(s == '?' ? '.' : s, start - 1, end - 1);
        }

        // Check if this entry is in GTF format
        [[nodiscard]] bool is_gtf() const { return format == gff_format::GTF; }

        // Check if this entry is in GFF3 format
        [[nodiscard]] bool is_gff3() const { return format == gff_format::GFF3; }

        // Serialize this entry to a binary output stream. Used by
        // grove<gdt::interval, gff_entry>::serialize().
        void serialize(std::ostream& os) const;

        // Deserialize an entry from a binary input stream produced by serialize().
        [[nodiscard]] static gff_entry deserialize(std::istream& is);
    };

    /**
     * @brief Configuration options for the GFF reader.
     *
     * Options can be set via C++20 designated initializers at construction:
     * ```cpp
     * gff_reader reader(path, {.skip_invalid_lines = true, .validate_gtf = true});
     * ```
     *
     * Or by constructing and assigning individual fields:
     * ```cpp
     * gff_reader_options opts;
     * opts.skip_invalid_lines = true;
     * opts.validate_gtf = true;
     * gff_reader reader(path, opts);
     * ```
     */
    struct gff_reader_options {
        bool skip_invalid_lines = false;    ///< Skip invalid lines instead of throwing
        bool validate_gtf = false;          ///< Validate mandatory GTF2 attributes (gene_id, transcript_id)
        std::string region{};               ///< htslib/tabix region string ("chr:start-end"), in tabix query coordinates (1-based, inclusive). Empty = stream the whole file. Requires a bgzip+tabix-indexed input.

        [[nodiscard]] static gff_reader_options defaults() { return {}; }
    };

    class gff_reader : public file_reader<gff_entry> {
    public:
        explicit gff_reader(const std::filesystem::path& path);
        gff_reader(const std::filesystem::path& path, const gff_reader_options& options);

        // Non-copyable, movable (the line source owns the file handle)
        gff_reader(const gff_reader&) = delete;
        gff_reader& operator=(const gff_reader&) = delete;
        gff_reader(gff_reader&&) noexcept = default;
        gff_reader& operator=(gff_reader&&) noexcept = default;

        bool read_next(gff_entry& entry) override;
        [[nodiscard]] bool has_next() override;
        [[nodiscard]] std::string get_error_message() const override;
        [[nodiscard]] size_t get_current_line() const override;
        ~gff_reader() override = default;

    private:
        text_line_source line_source;
        size_t line_num;
        std::string error_message;
        gff_reader_options options;
        // The pairs of the line in work, sorted by name; reused for each line
        std::vector<std::pair<std::string_view, std::string_view>> attribute_pairs;

        // Helper to parse attributes (handles both GFF3 and GTF formats)
        // Returns the detected format
        gff_format parse_attributes(std::string_view attr_string, gff_attributes& attributes);

        // Helpers for parsing individual GFF fields
        bool parse_score(gff_entry& entry, std::string_view score_str);
        bool parse_strand(gff_entry& entry, std::string_view strand_str);
        bool parse_phase(gff_entry& entry, std::string_view phase_str);

        // Validate mandatory GTF2 attributes (gene_id, transcript_id)
        bool validate_gtf_attributes(const gff_entry& entry);

        // Parse a single data line into an entry. Returns false and sets
        // error_message on an invalid line (the caller decides skip vs throw).
        bool parse_line(const std::string& line, gff_entry& entry);
    };

}


#endif //GENOGROVE_IO_GFFREADER_HPP
