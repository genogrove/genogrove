/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/data_type/kmer.hpp>
#include <genogrove/utility/le_io.hpp>
#include <stdexcept>

namespace genogrove::data_type {

    kmer::kmer(std::string_view sequence) : encoding(0), k(0) {
        if (sequence.length() > 32) {
            throw std::invalid_argument("K-mer length exceeds maximum of 32");
        }
        if (sequence.empty()) {
            return;
        }
        if (!is_valid(sequence)) {
            throw std::invalid_argument("Sequence contains invalid characters (only A, C, G, T allowed)");
        }

        k = static_cast<uint8_t>(sequence.length());
        for (char c : sequence) {
            encoding = (encoding << 2) | encode_base(c);
        }
    }

    std::string kmer::to_string() const {
        if (k == 0) {
            return "";
        }

        std::string result;
        result.reserve(k);

        // Extract bases from most significant to least significant
        for (int i = k - 1; i >= 0; --i) {
            uint8_t base_encoding = (encoding >> (2 * i)) & BASE_MASK;
            result.push_back(decode_base(base_encoding));
        }

        return result;
    }

    void kmer::serialize(std::ostream& os) const {
        genogrove::utility::write_le(os, encoding);
        genogrove::utility::write_le(os, k);
        if (!os) {
            throw std::runtime_error("Failed to serialize kmer: stream error");
        }
    }

    kmer kmer::deserialize(std::istream& is) {
        uint64_t enc;
        uint8_t len;
        genogrove::utility::read_le(is, enc);
        genogrove::utility::read_le(is, len);
        if(!is) {
            throw std::runtime_error("Failed to deserialize k-mer: stream error");
        }
        return kmer(enc, len);
    }

}