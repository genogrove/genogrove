/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/bam_reader.hpp>

// standard
#include <stdexcept>
#include <cstring>

namespace gdt = genogrove::data_type;

namespace genogrove::io {

    bam_reader::bam_reader(const std::filesystem::path& path)
        : bam_reader(path, bam_reader_options::defaults()) {}

    bam_reader::bam_reader(const std::filesystem::path& path, const bam_reader_options& options)
        : sam_file_(nullptr)
        , header_(nullptr)
        , alignment_(nullptr)
        , options_(options)
        , record_num_(0)
        , at_eof_(false) {

        // Open the file with htslib (auto-detects SAM/BAM/CRAM)
        sam_file_ = sam_open(path.c_str(), "r");
        if (!sam_file_) {
            throw std::runtime_error("Failed to open file: " + path.string());
        }

        // Read the header
        header_ = sam_hdr_read(sam_file_);
        if (!header_) {
            hts_close(sam_file_);
            sam_file_ = nullptr;
            throw std::runtime_error("Failed to read header from: " + path.string());
        }

        // Cache header text
        if (header_->text) {
            header_text_ = std::string(header_->text, header_->l_text);
        }

        // Cache reference names
        ref_names_.reserve(header_->n_targets);
        for (int i = 0; i < header_->n_targets; ++i) {
            ref_names_.emplace_back(header_->target_name[i]);
        }

        // Allocate reusable alignment structure
        alignment_ = bam_init1();
        if (!alignment_) {
            bam_hdr_destroy(header_);
            hts_close(sam_file_);
            header_ = nullptr;
            sam_file_ = nullptr;
            throw std::runtime_error("Failed to allocate alignment structure");
        }
    }

    bam_reader::~bam_reader() {
        cleanup();
    }

    void bam_reader::cleanup() {
        if (alignment_) {
            bam_destroy1(alignment_);
            alignment_ = nullptr;
        }
        if (header_) {
            bam_hdr_destroy(header_);
            header_ = nullptr;
        }
        if (sam_file_) {
            hts_close(sam_file_);
            sam_file_ = nullptr;
        }
    }

    bam_reader::bam_reader(bam_reader&& other) noexcept
        : sam_file_(other.sam_file_)
        , header_(other.header_)
        , alignment_(other.alignment_)
        , options_(other.options_)
        , header_text_(std::move(other.header_text_))
        , ref_names_(std::move(other.ref_names_))
        , record_num_(other.record_num_)
        , error_message_(std::move(other.error_message_))
        , at_eof_(other.at_eof_) {
        // Null out source pointers
        other.sam_file_ = nullptr;
        other.header_ = nullptr;
        other.alignment_ = nullptr;
    }

    bam_reader& bam_reader::operator=(bam_reader&& other) noexcept {
        if (this != &other) {
            cleanup();

            sam_file_ = other.sam_file_;
            header_ = other.header_;
            alignment_ = other.alignment_;
            options_ = other.options_;
            header_text_ = std::move(other.header_text_);
            ref_names_ = std::move(other.ref_names_);
            record_num_ = other.record_num_;
            error_message_ = std::move(other.error_message_);
            at_eof_ = other.at_eof_;

            other.sam_file_ = nullptr;
            other.header_ = nullptr;
            other.alignment_ = nullptr;
        }
        return *this;
    }

    bool bam_reader::should_skip(const bam1_t* b) const {
        uint16_t flag = b->core.flag;

        if (options_.skip_unmapped && (flag & BAM_FUNMAP)) {
            return true;
        }
        if (options_.skip_secondary && (flag & BAM_FSECONDARY)) {
            return true;
        }
        if (options_.skip_supplementary && (flag & BAM_FSUPPLEMENTARY)) {
            return true;
        }
        if (options_.skip_qc_fail && (flag & BAM_FQCFAIL)) {
            return true;
        }
        if (options_.skip_duplicates && (flag & BAM_FDUP)) {
            return true;
        }
        if (options_.min_mapq > 0 && b->core.qual < options_.min_mapq) {
            return true;
        }

        return false;
    }

    bool bam_reader::read_next(sam_entry& entry) {
        if (!sam_file_ || at_eof_) {
            return false;
        }

        // Read records until we find one that passes filters
        int ret;
        while ((ret = sam_read1(sam_file_, header_, alignment_)) >= 0) {
            record_num_++;

            if (should_skip(alignment_)) {
                continue;
            }

            // Parse the alignment into sam_entry
            if (!parse_alignment(alignment_, entry)) {
                return false;
            }

            return true;
        }

        // Check for error vs EOF
        if (ret < -1) {
            error_message_ = "Error reading alignment record";
            return false;
        }

        at_eof_ = true;
        return false;
    }

    bool bam_reader::parse_alignment(const bam1_t* b, sam_entry& entry) {
        const bam1_core_t& c = b->core;

        // Query name (QNAME)
        entry.qname = bam_get_qname(b);

        // Reference name (RNAME)
        if (c.tid >= 0 && c.tid < header_->n_targets) {
            entry.chrom = header_->target_name[c.tid];
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
            // Unmapped read - set empty interval
            entry.interval = gdt::interval(0, 0);
        } else {
            entry.interval = compute_interval(c.pos, b);
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
        if (qual[0] != 0xFF) {  // 0xFF means quality not stored
            entry.quality.reserve(c.l_qseq);
            for (int i = 0; i < c.l_qseq; ++i) {
                entry.quality += static_cast<char>(qual[i] + 33);  // Convert to ASCII
            }
        }

        // Mate information for paired reads
        if (c.flag & BAM_FPAIRED) {
            mate_info mate;
            if (c.mtid >= 0 && c.mtid < header_->n_targets) {
                if (c.mtid == c.tid) {
                    mate.chrom = "=";  // Same reference as read
                } else {
                    mate.chrom = header_->target_name[c.mtid];
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
        entry.tags = parse_tags(b);

        return true;
    }

    gdt::interval bam_reader::compute_interval(int64_t pos, const bam1_t* b) const {
        // Calculate reference length consumed by CIGAR
        uint32_t* cigar = bam_get_cigar(b);
        uint32_t n_cigar = b->core.n_cigar;

        int64_t ref_len = 0;
        for (uint32_t i = 0; i < n_cigar; ++i) {
            int op = bam_cigar_op(cigar[i]);
            int len = bam_cigar_oplen(cigar[i]);

            // Operations that consume reference bases: M, D, N, =, X
            if (op == BAM_CMATCH || op == BAM_CDEL || op == BAM_CREF_SKIP ||
                op == BAM_CEQUAL || op == BAM_CDIFF) {
                ref_len += len;
            }
        }

        // Handle edge case of no reference-consuming operations
        if (ref_len == 0) {
            ref_len = 1;  // Minimum interval size
        }

        return gdt::interval(static_cast<size_t>(pos),
                            static_cast<size_t>(pos + ref_len));
    }

    cigar_string bam_reader::parse_cigar(const bam1_t* b) const {
        uint32_t* cigar = bam_get_cigar(b);
        uint32_t n_cigar = b->core.n_cigar;

        cigar_string result;
        result.reserve(n_cigar);

        for (uint32_t i = 0; i < n_cigar; ++i) {
            int op = bam_cigar_op(cigar[i]);
            uint32_t len = bam_cigar_oplen(cigar[i]);

            result.emplace_back(static_cast<cigar_op>(op), len);
        }

        return result;
    }

    sam_tags bam_reader::parse_tags(const bam1_t* b) const {
        sam_tags result;

        uint8_t* aux = bam_get_aux(b);
        uint8_t* aux_end = b->data + b->l_data;

        while (aux < aux_end) {
            // Tag name (2 chars)
            char tag[3];
            tag[0] = static_cast<char>(aux[0]);
            tag[1] = static_cast<char>(aux[1]);
            tag[2] = '\0';
            std::string key(tag);

            aux += 2;
            char type = static_cast<char>(*aux++);

            sam_tag_value value;

            switch (type) {
                case 'A':  // Printable character
                    value = static_cast<char>(*aux++);
                    break;

                case 'c':  // int8_t
                    value = static_cast<int64_t>(*reinterpret_cast<int8_t*>(aux));
                    aux += 1;
                    break;

                case 'C':  // uint8_t
                    value = static_cast<int64_t>(*aux++);
                    break;

                case 's':  // int16_t
                    value = static_cast<int64_t>(*reinterpret_cast<int16_t*>(aux));
                    aux += 2;
                    break;

                case 'S':  // uint16_t
                    value = static_cast<int64_t>(*reinterpret_cast<uint16_t*>(aux));
                    aux += 2;
                    break;

                case 'i':  // int32_t
                    value = static_cast<int64_t>(*reinterpret_cast<int32_t*>(aux));
                    aux += 4;
                    break;

                case 'I':  // uint32_t
                    value = static_cast<int64_t>(*reinterpret_cast<uint32_t*>(aux));
                    aux += 4;
                    break;

                case 'f':  // float
                    value = *reinterpret_cast<float*>(aux);
                    aux += 4;
                    break;

                case 'Z':  // Printable string
                case 'H':  // Hex string
                {
                    const char* str = reinterpret_cast<const char*>(aux);
                    value = std::string(str);
                    aux += std::strlen(str) + 1;
                    break;
                }

                case 'B':  // Array
                {
                    char array_type = static_cast<char>(*aux++);
                    uint32_t count = *reinterpret_cast<uint32_t*>(aux);
                    aux += 4;

                    switch (array_type) {
                        case 'c': {
                            std::vector<int8_t> arr(count);
                            std::memcpy(arr.data(), aux, count * sizeof(int8_t));
                            value = std::move(arr);
                            aux += count * sizeof(int8_t);
                            break;
                        }
                        case 'C': {
                            std::vector<uint8_t> arr(count);
                            std::memcpy(arr.data(), aux, count * sizeof(uint8_t));
                            value = std::move(arr);
                            aux += count * sizeof(uint8_t);
                            break;
                        }
                        case 's': {
                            std::vector<int16_t> arr(count);
                            std::memcpy(arr.data(), aux, count * sizeof(int16_t));
                            value = std::move(arr);
                            aux += count * sizeof(int16_t);
                            break;
                        }
                        case 'S': {
                            std::vector<uint16_t> arr(count);
                            std::memcpy(arr.data(), aux, count * sizeof(uint16_t));
                            value = std::move(arr);
                            aux += count * sizeof(uint16_t);
                            break;
                        }
                        case 'i': {
                            std::vector<int32_t> arr(count);
                            std::memcpy(arr.data(), aux, count * sizeof(int32_t));
                            value = std::move(arr);
                            aux += count * sizeof(int32_t);
                            break;
                        }
                        case 'I': {
                            std::vector<uint32_t> arr(count);
                            std::memcpy(arr.data(), aux, count * sizeof(uint32_t));
                            value = std::move(arr);
                            aux += count * sizeof(uint32_t);
                            break;
                        }
                        case 'f': {
                            std::vector<float> arr(count);
                            std::memcpy(arr.data(), aux, count * sizeof(float));
                            value = std::move(arr);
                            aux += count * sizeof(float);
                            break;
                        }
                        default:
                            // Unknown array type, skip to end
                            aux = aux_end;
                            continue;
                    }
                    break;
                }

                default:
                    // Unknown type, try to skip (dangerous but best effort)
                    aux = aux_end;
                    continue;
            }

            result[key] = std::move(value);
        }

        return result;
    }

    bool bam_reader::has_next() {
        return !at_eof_ && sam_file_ != nullptr;
    }

    std::string bam_reader::get_error_message() {
        return error_message_;
    }

    size_t bam_reader::get_current_line() {
        return record_num_;
    }

    const std::string& bam_reader::get_header() const {
        return header_text_;
    }

    const std::vector<std::string>& bam_reader::get_reference_names() const {
        return ref_names_;
    }

} // namespace genogrove::io
