/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/fasta_index.hpp>

// standard
#include <stdexcept>
#include <cstdlib>
#include <limits>

namespace genogrove::io {

    fasta_index::fasta_index(const std::filesystem::path& path)
        : fai_(nullptr) {
        fai_ = fai_load(path.c_str());
        if (!fai_) {
            throw std::runtime_error("Failed to load FASTA index for: " + path.string());
        }
    }

    fasta_index::~fasta_index() {
        cleanup();
    }

    void fasta_index::cleanup() {
        if (fai_) {
            fai_destroy(fai_);
            fai_ = nullptr;
        }
    }

    fasta_index::fasta_index(fasta_index&& other) noexcept
        : fai_(other.fai_) {
        other.fai_ = nullptr;
    }

    fasta_index& fasta_index::operator=(fasta_index&& other) noexcept {
        if (this != &other) {
            cleanup();
            fai_ = other.fai_;
            other.fai_ = nullptr;
        }
        return *this;
    }

    std::string fasta_index::fetch(const std::string& name, size_t start, size_t end) const {
        if (!faidx_has_seq(fai_, name.c_str())) {
            throw std::out_of_range("Sequence not found in index: " + name);
        }

        if (start >= end) {
            throw std::runtime_error("Invalid region: start >= end for " + name);
        }

        // Guard against size_t→int narrowing (faidx_fetch_seq takes int)
        constexpr auto kIntMax = static_cast<size_t>(std::numeric_limits<int>::max());
        if (start > kIntMax || (end - 1) > kIntMax) {
            throw std::out_of_range("Region exceeds htslib coordinate limit for " + name);
        }

        // faidx_fetch_seq uses 0-based inclusive coordinates
        int len = 0;
        char* seq = faidx_fetch_seq(fai_, name.c_str(),
                                    static_cast<int>(start),
                                    static_cast<int>(end - 1),
                                    &len);
        if (!seq || len < 0) {
            std::free(seq);
            throw std::runtime_error("Failed to fetch region " + name +
                                     ":" + std::to_string(start) + "-" + std::to_string(end));
        }

        std::string result(seq, static_cast<size_t>(len));
        std::free(seq);
        return result;
    }

    std::string fasta_index::fetch(const std::string& name) const {
        size_t len = sequence_length(name);
        if (len == 0) {
            return {};
        }
        return fetch(name, 0, len);
    }

    size_t fasta_index::sequence_count() const {
        return static_cast<size_t>(faidx_nseq(fai_));
    }

    std::string fasta_index::sequence_name(size_t index) const {
        if (index >= sequence_count()) {
            throw std::out_of_range("Sequence index out of range: " + std::to_string(index));
        }
        const char* name = faidx_iseq(fai_, static_cast<int>(index));
        return std::string(name);
    }

    size_t fasta_index::sequence_length(const std::string& name) const {
        int len = faidx_seq_len(fai_, name.c_str());
        if (len < 0) {
            throw std::out_of_range("Sequence not found in index: " + name);
        }
        return static_cast<size_t>(len);
    }

    bool fasta_index::has_sequence(const std::string& name) const {
        return faidx_has_seq(fai_, name.c_str()) != 0;
    }

} // namespace genogrove::io