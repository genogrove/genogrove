/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/sequence_reader.hpp>

// standard
#include <stdexcept>

// zlib + kseq
#include <zlib.h>
#include <htslib/kseq.h>
KSEQ_INIT(gzFile, gzread)

namespace genogrove::io {

    // Helper to cast opaque void* to the macro-generated kseq_t*
    static kseq_t* as_kseq(void* p) { return static_cast<kseq_t*>(p); }

    sequence_reader::sequence_reader(const std::filesystem::path& path)
        : sequence_reader(path, sequence_reader_options::defaults()) {}

    sequence_reader::sequence_reader(const std::filesystem::path& path,
                                     const sequence_reader_options& options)
        : gz_file_(nullptr)
        , kseq_(nullptr)
        , record_num_(0)
        , at_eof_(false)
        , options_(options) {

        gz_file_ = gzopen(path.c_str(), "r");
        if (!gz_file_) {
            throw std::runtime_error("Failed to open file: " + path.string());
        }

        kseq_ = static_cast<void*>(kseq_init(gz_file_));
        if (!kseq_) {
            gzclose(gz_file_);
            gz_file_ = nullptr;
            throw std::runtime_error("Failed to initialize sequence parser for: " + path.string());
        }
    }

    sequence_reader::~sequence_reader() {
        cleanup();
    }

    void sequence_reader::cleanup() {
        if (kseq_) {
            kseq_destroy(as_kseq(kseq_));
            kseq_ = nullptr;
        }
        if (gz_file_) {
            gzclose(gz_file_);
            gz_file_ = nullptr;
        }
    }

    sequence_reader::sequence_reader(sequence_reader&& other) noexcept
        : file_reader<sequence_entry>(std::move(other))
        , gz_file_(other.gz_file_)
        , kseq_(other.kseq_)
        , record_num_(other.record_num_)
        , error_message_(std::move(other.error_message_))
        , at_eof_(other.at_eof_)
        , options_(other.options_) {
        other.gz_file_ = nullptr;
        other.kseq_ = nullptr;
    }

    sequence_reader& sequence_reader::operator=(sequence_reader&& other) noexcept {
        if (this != &other) {
            file_reader<sequence_entry>::operator=(std::move(other));
            cleanup();

            gz_file_ = other.gz_file_;
            kseq_ = other.kseq_;
            record_num_ = other.record_num_;
            error_message_ = std::move(other.error_message_);
            at_eof_ = other.at_eof_;
            options_ = other.options_;

            other.gz_file_ = nullptr;
            other.kseq_ = nullptr;
        }
        return *this;
    }

    bool sequence_reader::read_next(sequence_entry& entry) {
        if (!kseq_ || at_eof_) {
            return false;
        }

        while (true) {
            error_message_.clear();

            kseq_t* ks = as_kseq(kseq_);
            int ret = kseq_read(ks);
            if (ret < 0) {
                if (ret == -1) {
                    // EOF
                    at_eof_ = true;
                    return false;
                } else if (ret == -2) {
                    error_message_ = "Truncated quality string at record " + std::to_string(record_num_ + 1);
                    throw std::runtime_error(error_message_);
                } else {
                    error_message_ = "I/O error reading sequence record after record " + std::to_string(record_num_);
                    throw std::runtime_error(error_message_);
                }
            }

            record_num_++;

            // Extract fields from kseq
            entry.name = std::string(ks->name.s, ks->name.l);
            entry.comment = (ks->comment.l > 0) ? std::string(ks->comment.s, ks->comment.l) : "";
            entry.sequence = std::string(ks->seq.s, ks->seq.l);

            if (ks->qual.l > 0) {
                entry.quality = std::string(ks->qual.s, ks->qual.l);
            } else {
                entry.quality.reset();
            }

            // Apply filters
            if (options_.skip_empty_sequences && entry.sequence.empty()) {
                continue;
            }

            return true;
        }
    }

    bool sequence_reader::has_next() {
        return !at_eof_ && kseq_ != nullptr;
    }

    std::string sequence_reader::get_error_message() const {
        return error_message_;
    }

    size_t sequence_reader::get_current_line() const {
        return record_num_;
    }

} // namespace genogrove::io
