/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/bam_reader.hpp>

// standard
#include <stdexcept>
#include <cstring>

namespace genogrove::io {

    bam_reader::bam_reader(const std::filesystem::path& path)
        : bam_reader(path, bam_reader_options::defaults()) {}

    bam_reader::bam_reader(const std::filesystem::path& path, const bam_reader_options& options)
        : sam_file(nullptr)
        , header(nullptr)
        , alignment(nullptr)
        , options(options)
        , record_num(0)
        , at_eof(false) {

        // Open the file with htslib (auto-detects SAM/BAM/CRAM)
        sam_file = sam_open(path.c_str(), "r");
        if (!sam_file) {
            throw std::runtime_error("Failed to open file: " + path.string());
        }

        // Read the header
        header = sam_hdr_read(sam_file);
        if (!header) {
            hts_close(sam_file);
            sam_file = nullptr;
            throw std::runtime_error("Failed to read header from: " + path.string());
        }

        // Wrap in try/catch: if std::string/vector operations throw (e.g. bad_alloc),
        // the constructor hasn't completed so the destructor won't run — clean up manually.
        try {
            // Cache header text
            if (header->text) {
                header_text = std::string(header->text, header->l_text);
            }

            // Cache reference names
            ref_names.reserve(header->n_targets);
            for (int i = 0; i < header->n_targets; ++i) {
                ref_names.emplace_back(header->target_name[i]);
            }

            // Allocate reusable alignment structure
            alignment = bam_init1();
            if (!alignment) {
                throw std::runtime_error("Failed to allocate alignment structure");
            }
        } catch (...) {
            cleanup();
            throw;
        }
    }

    bam_reader::~bam_reader() {
        cleanup();
    }

    void bam_reader::cleanup() {
        if (alignment) {
            bam_destroy1(alignment);
            alignment = nullptr;
        }
        if (header) {
            bam_hdr_destroy(header);
            header = nullptr;
        }
        if (sam_file) {
            hts_close(sam_file);
            sam_file = nullptr;
        }
    }

    bam_reader::bam_reader(bam_reader&& other) noexcept
        : file_reader<sam_entry>(std::move(other))
        , sam_file(other.sam_file)
        , header(other.header)
        , alignment(other.alignment)
        , options(other.options)
        , header_text(std::move(other.header_text))
        , ref_names(std::move(other.ref_names))
        , record_num(other.record_num)
        , error_message(std::move(other.error_message))
        , at_eof(other.at_eof) {
        // Null out source pointers
        other.sam_file = nullptr;
        other.header = nullptr;
        other.alignment = nullptr;
    }

    bam_reader& bam_reader::operator=(bam_reader&& other) noexcept {
        if (this != &other) {
            file_reader<sam_entry>::operator=(std::move(other));
            cleanup();

            sam_file = other.sam_file;
            header = other.header;
            alignment = other.alignment;
            options = other.options;
            header_text = std::move(other.header_text);
            ref_names = std::move(other.ref_names);
            record_num = other.record_num;
            error_message = std::move(other.error_message);
            at_eof = other.at_eof;

            other.sam_file = nullptr;
            other.header = nullptr;
            other.alignment = nullptr;
        }
        return *this;
    }

    bool bam_reader::should_skip(const bam1_t* b) const {
        uint16_t flag = b->core.flag;

        if (options.skip_unmapped && (flag & BAM_FUNMAP)) {
            return true;
        }
        if (options.skip_secondary && (flag & BAM_FSECONDARY)) {
            return true;
        }
        if (options.skip_supplementary && (flag & BAM_FSUPPLEMENTARY)) {
            return true;
        }
        if (options.skip_qc_fail && (flag & BAM_FQCFAIL)) {
            return true;
        }
        if (options.skip_duplicates && (flag & BAM_FDUP)) {
            return true;
        }
        if (options.min_mapq > 0 && b->core.qual < options.min_mapq) {
            return true;
        }

        return false;
    }

    bool bam_reader::read_next(sam_entry& entry) {
        // Unconditional clear honors the file_reader_base contract: any path
        // that sets error_message must either throw or return false. After a
        // successful read or a clean EOF, get_error_message() reads empty.
        error_message.clear();

        if (!sam_file || at_eof) {
            return false;
        }

        // Read records until we find one that passes filters
        int ret;
        while ((ret = sam_read1(sam_file, header, alignment)) >= 0) {
            record_num++;

            if (should_skip(alignment)) {
                continue;
            }

            parse_alignment(alignment, entry);
            return true;
        }

        // Check for error vs EOF
        if (ret < -1) {
            error_message = "I/O error reading alignment record after record " + std::to_string(record_num);
            throw std::runtime_error(error_message);
        }

        at_eof = true;
        return false;
    }

    void bam_reader::parse_alignment(const bam1_t* b, sam_entry& entry) {
        const bam1_core_t& c = b->core;

        // Query name (QNAME)
        entry.qname = bam_get_qname(b);

        // Reference name (RNAME)
        if (c.tid >= 0 && c.tid < header->n_targets) {
            entry.chrom = header->target_name[c.tid];
        } else {
            entry.chrom = "*";
        }

        // FLAGS
        entry.flags = alignment_flags(c.flag);

        // Mapping quality
        entry.mapq = c.qual;

        // CIGAR
        entry.cigar = parse_cigar(b);

        // Compute interval from position and CIGAR
        if (c.flag & BAM_FUNMAP) {
            // Unmapped read - set empty coordinates
            entry.start = 0;
            entry.end = 0;
        } else {
            auto [iv_start, iv_end] = compute_interval(c.pos, entry.cigar);
            entry.start = iv_start;
            entry.end = iv_end;
        }

        // Sequence (SEQ)
        uint8_t* seq = bam_get_seq(b);
        entry.sequence.clear();
        entry.sequence.reserve(c.l_qseq);
        for (int i = 0; i < c.l_qseq; ++i) {
            entry.sequence += seq_nt16_str[bam_seqi(seq, i)];
        }

        // Quality scores (QUAL)
        uint8_t* qual = bam_get_qual(b);
        entry.quality.clear();
        if (c.l_qseq > 0 && qual[0] != 0xFF) {  // 0xFF means quality not stored
            entry.quality.reserve(c.l_qseq);
            for (int i = 0; i < c.l_qseq; ++i) {
                entry.quality += static_cast<char>(qual[i] + 33);  // Convert to ASCII
            }
        }

        // Mate information for paired reads
        if (c.flag & BAM_FPAIRED) {
            mate_info mate;
            if (c.mtid >= 0 && c.mtid < header->n_targets) {
                if (c.mtid == c.tid) {
                    mate.chrom = "=";  // Same reference as read
                } else {
                    mate.chrom = header->target_name[c.mtid];
                }
            } else {
                mate.chrom = "*";
            }
            mate.position = (c.mpos >= 0) ? c.mpos : -1;
            mate.insert_size = c.isize;
            entry.mate = mate;
        } else {
            entry.mate.reset();
        }

        // Auxiliary tags
        bool aux_truncated = false;
        std::string last_aux_tag;
        entry.tags = parse_tags(b, aux_truncated, last_aux_tag);
        if (aux_truncated) {
            error_message = "Truncated auxiliary data at record " + std::to_string(record_num);
            if (!last_aux_tag.empty()) {
                error_message += ", last tag: " + last_aux_tag;
            }
            throw std::runtime_error(error_message);
        }
    }

    std::pair<size_t, size_t> bam_reader::compute_interval(int64_t pos, const cigar_string& cigar) const {
        // Calculate reference length consumed by CIGAR.
        // Pure soft-clip (e.g. "100S") and hard-clip-only secondary records
        // consume zero reference bases and return a zero-length half-open
        // interval `[pos, pos)`. Callers can detect this via
        // `sam_entry::consumes_reference()` and filter as appropriate;
        // converting to a closed `gdt::interval(start, end - 1)` is only
        // valid when `start < end`.
        int64_t ref_len = 0;
        for (const auto& e : cigar) {
            if (e.consumes_reference()) {
                ref_len += e.length;
            }
        }

        return {static_cast<size_t>(pos),
                static_cast<size_t>(pos + ref_len)};
    }

    cigar_string bam_reader::parse_cigar(const bam1_t* b) const {
        uint32_t* cigar = bam_get_cigar(b);
        uint32_t n_cigar = b->core.n_cigar;

        cigar_string result;
        result.reserve(n_cigar);

        for (uint32_t i = 0; i < n_cigar; ++i) {
            int op = bam_cigar_op(cigar[i]);
            uint32_t len = bam_cigar_oplen(cigar[i]);

            if (op > 8) continue;  // skip invalid CIGAR ops
            result.emplace_back(static_cast<cigar_op>(op), len);
        }

        return result;
    }

    // Template helper to parse a typed array from aux data
    template<typename T>
    static bool read_typed_array(const uint8_t*& aux, const uint8_t* aux_end,
                                 uint32_t count, sam_tag_value& value) {
        if (count > SIZE_MAX / sizeof(T)) return false;
        size_t bytes_needed = static_cast<size_t>(count) * sizeof(T);
        size_t remaining = static_cast<size_t>(aux_end - aux);
        if (remaining < bytes_needed) return false;
        std::vector<T> arr(count);
        std::memcpy(arr.data(), aux, bytes_needed);
        value = std::move(arr);
        aux += bytes_needed;
        return true;
    }

    bool bam_reader::parse_tag_array(const uint8_t*& aux, const uint8_t* aux_end,
                                     sam_tag_value& value) {
        // Need 1 byte (array_type) + 4 bytes (count)
        size_t available = static_cast<size_t>(aux_end - aux);
        if (available < sizeof(char) + sizeof(uint32_t)) return false;
        char array_type = static_cast<char>(*aux++);
        uint32_t count;
        std::memcpy(&count, aux, sizeof(count));
        aux += sizeof(count);

        switch (array_type) {
            case 'c': return read_typed_array<int8_t>(aux, aux_end, count, value);
            case 'C': return read_typed_array<uint8_t>(aux, aux_end, count, value);
            case 's': return read_typed_array<int16_t>(aux, aux_end, count, value);
            case 'S': return read_typed_array<uint16_t>(aux, aux_end, count, value);
            case 'i': return read_typed_array<int32_t>(aux, aux_end, count, value);
            case 'I': return read_typed_array<uint32_t>(aux, aux_end, count, value);
            case 'f': return read_typed_array<float>(aux, aux_end, count, value);
            default:
                // Unknown array type, skip to end
                aux = aux_end;
                return false;
        }
    }

    sam_tags bam_reader::parse_tags(const bam1_t* b, bool& truncated, std::string& last_tag) const {
        sam_tags result;
        truncated = false;
        last_tag.clear();

        const uint8_t* aux = bam_get_aux(b);
        const uint8_t* aux_end = b->data + b->l_data;

        while (aux < aux_end) {
            // Reset per tag: a truncation reached before the tag name is read
            // is between tags, so last_tag must not carry over a prior tag.
            last_tag.clear();

            // Each tag needs at least 3 bytes: 2-char name + 1-byte type
            if (aux + 3 > aux_end) {
                truncated = true;
                break;
            }

            // Tag name (2 chars)
            std::string key(reinterpret_cast<const char*>(aux), 2);
            last_tag = key;  // reported if a later step in this tag truncates

            aux += 2;
            char type = static_cast<char>(*aux++);

            sam_tag_value value;

            switch (type) {
                case 'A':  // Printable character
                    if (aux >= aux_end) { truncated = true; return result; }
                    value = static_cast<char>(*aux++);
                    break;

                case 'c':  // int8_t
                    if (aux >= aux_end) { truncated = true; return result; }
                    value = static_cast<int64_t>(*reinterpret_cast<const int8_t*>(aux));
                    aux += 1;
                    break;

                case 'C':  // uint8_t
                    if (aux >= aux_end) { truncated = true; return result; }
                    value = static_cast<int64_t>(*aux++);
                    break;

                case 's': {  // int16_t
                    int16_t val;
                    size_t available = static_cast<size_t>(aux_end - aux);
                    if (available < sizeof(val)) { truncated = true; return result; }
                    std::memcpy(&val, aux, sizeof(val));
                    value = static_cast<int64_t>(val);
                    aux += sizeof(val);
                    break;
                }

                case 'S': {  // uint16_t
                    uint16_t val;
                    size_t available = static_cast<size_t>(aux_end - aux);
                    if (available < sizeof(val)) { truncated = true; return result; }
                    std::memcpy(&val, aux, sizeof(val));
                    value = static_cast<int64_t>(val);
                    aux += sizeof(val);
                    break;
                }

                case 'i': {  // int32_t
                    int32_t val;
                    size_t available = static_cast<size_t>(aux_end - aux);
                    if (available < sizeof(val)) { truncated = true; return result; }
                    std::memcpy(&val, aux, sizeof(val));
                    value = static_cast<int64_t>(val);
                    aux += sizeof(val);
                    break;
                }

                case 'I': {  // uint32_t
                    uint32_t val;
                    size_t available = static_cast<size_t>(aux_end - aux);
                    if (available < sizeof(val)) { truncated = true; return result; }
                    std::memcpy(&val, aux, sizeof(val));
                    value = static_cast<int64_t>(val);
                    aux += sizeof(val);
                    break;
                }

                case 'f': {  // float
                    float val;
                    size_t available = static_cast<size_t>(aux_end - aux);
                    if (available < sizeof(val)) { truncated = true; return result; }
                    std::memcpy(&val, aux, sizeof(val));
                    value = val;
                    aux += sizeof(val);
                    break;
                }

                case 'Z':  // Printable string
                case 'H':  // Hex string
                {
                    const char* str = reinterpret_cast<const char*>(aux);
                    size_t remaining = static_cast<size_t>(aux_end - aux);
                    const void* nul = std::memchr(str, '\0', remaining);
                    if (!nul) { truncated = true; return result; }
                    size_t len = static_cast<size_t>(
                        reinterpret_cast<const char*>(nul) - str);
                    value = std::string(str, len);
                    aux += len + 1;
                    break;
                }

                case 'B':  // Array
                {
                    if (!parse_tag_array(aux, aux_end, value)) { truncated = true; return result; }
                    break;
                }

                default:
                    // Unknown type, try to skip (dangerous but best effort)
                    truncated = true;
                    aux = aux_end;
                    continue;
            }

            result[key] = std::move(value);
        }

        return result;
    }

    bool bam_reader::has_next() {
        return !at_eof && sam_file != nullptr;
    }

    std::string bam_reader::get_error_message() const {
        return error_message;
    }

    size_t bam_reader::get_current_line() const {
        return record_num;
    }

    const std::string& bam_reader::get_header() const {
        return header_text;
    }

    const std::vector<std::string>& bam_reader::get_reference_names() const {
        return ref_names;
    }

} // namespace genogrove::io
