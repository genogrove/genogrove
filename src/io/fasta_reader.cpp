/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/fasta_reader.hpp>

// standard
#include <stdexcept>

// zlib + kseq
#include <zlib.h>
#include <htslib/kseq.h>
KSEQ_INIT(gzFile, gzread)

namespace genogrove::io {

    // Helper to cast opaque void* to the macro-generated kseq_t*
    static kseq_t* as_kseq(void* p) { return static_cast<kseq_t*>(p); }

    fasta_reader::fasta_reader(const std::filesystem::path& path)
        : fasta_reader(path, fasta_reader_options::defaults()) {}

    fasta_reader::fasta_reader(const std::filesystem::path& path,
                                     const fasta_reader_options& options)
        : gz_file(nullptr)
        , kseq(nullptr)
        , record_num(0)
        , at_eof(false)
        , options(options) {

        gz_file = gzopen(path.c_str(), "r");
        if (!gz_file) {
            throw std::runtime_error("Failed to open file: " + path.string());
        }

        kseq = static_cast<void*>(kseq_init(gz_file));
        if (!kseq) {
            gzclose(gz_file);
            gz_file = nullptr;
            throw std::runtime_error("Failed to initialize sequence parser for: " + path.string());
        }
    }

    fasta_reader::~fasta_reader() {
        cleanup();
    }

    void fasta_reader::cleanup() {
        if (kseq) {
            kseq_destroy(as_kseq(kseq));
            kseq = nullptr;
        }
        if (gz_file) {
            gzclose(gz_file);
            gz_file = nullptr;
        }
    }

    fasta_reader::fasta_reader(fasta_reader&& other) noexcept
        : file_reader<fasta_entry>(std::move(other))
        , gz_file(other.gz_file)
        , kseq(other.kseq)
        , record_num(other.record_num)
        , error_message(std::move(other.error_message))
        , at_eof(other.at_eof)
        , options(other.options) {
        other.gz_file = nullptr;
        other.kseq = nullptr;
    }

    fasta_reader& fasta_reader::operator=(fasta_reader&& other) noexcept {
        if (this != &other) {
            file_reader<fasta_entry>::operator=(std::move(other));
            cleanup();

            gz_file = other.gz_file;
            kseq = other.kseq;
            record_num = other.record_num;
            error_message = std::move(other.error_message);
            at_eof = other.at_eof;
            options = other.options;

            other.gz_file = nullptr;
            other.kseq = nullptr;
        }
        return *this;
    }

    bool fasta_reader::read_next(fasta_entry& entry) {
        if (!kseq || at_eof) {
            return false;
        }

        while (true) {
            error_message.clear();

            kseq_t* ks = as_kseq(kseq);
            int ret = kseq_read(ks);
            if (ret < 0) {
                if (ret == -1) {
                    // EOF
                    at_eof = true;
                    return false;
                } else if (ret == -2) {
                    error_message = "Truncated quality string at record " + std::to_string(record_num + 1);
                    throw std::runtime_error(error_message);
                } else {
                    error_message = "I/O error reading sequence record after record " + std::to_string(record_num);
                    throw std::runtime_error(error_message);
                }
            }

            record_num++;

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
            if (options.skip_empty_sequences && entry.sequence.empty()) {
                continue;
            }

            return true;
        }
    }

    bool fasta_reader::has_next() {
        return !at_eof && kseq != nullptr;
    }

    std::string fasta_reader::get_error_message() const {
        return error_message;
    }

    size_t fasta_reader::get_current_line() const {
        return record_num;
    }

} // namespace genogrove::io
