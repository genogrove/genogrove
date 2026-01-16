#include <genogrove/data_type/kmer.hpp>
#include <stdexcept>
#include <algorithm>
#include <cctype>

namespace genogrove::data_type {
kmer::kmer() : encoding(0), k(0) {}

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

    kmer::kmer(uint64_t encoding, uint8_t k) : encoding(encoding), k(k) {
        if (k > max_k) {
            throw std::invalid_argument("K-mer length exceeds maximum of 32");
        }
        // Mask encoding to only use the bits needed for k bases
        if (k < max_k) {
            uint64_t mask = (1ULL << (2 * k)) - 1;
            this->encoding = encoding & mask;
        }
    }

    bool kmer::operator<(const kmer& other) const {
        // Compare by k first to group same-length k-mers together,
        // then by encoding for lexicographic ordering within same k
        if (k != other.k) {
            return k < other.k;
        }
        return encoding < other.encoding;
    }

    bool kmer::operator>(const kmer& other) const {
        if (k != other.k) {
            return k > other.k;
        }
        return encoding > other.encoding;
    }

    bool kmer::operator==(const kmer& other) const {
        return k == other.k && encoding == other.encoding;
    }

    uint64_t kmer::get_encoding() const {
        return encoding;
    }

    uint8_t kmer::get_k() const {
        return k;
    }

    bool kmer::overlap(const kmer& a, const kmer& b) {
        // For k-mers, overlap is exact match only
        return a.k == b.k && a.encoding == b.encoding;
    }

    kmer kmer::aggregate(const std::vector<kmer>& kmers) {
        if (kmers.empty()) {
            return kmer{};
        }

        // Return the maximum k-mer for B+ tree navigation
        kmer max_kmer = kmers[0];
        for (size_t i = 1; i < kmers.size(); ++i) {
            if (kmers[i] > max_kmer) {
                max_kmer = kmers[i];
            }
        }
        return max_kmer;
    }

    std::string kmer::to_string() const {
        if (k == 0) {
            return "";
        }

        std::string result;
        result.reserve(k);

        // Extract bases from most significant to least significant
        for (int i = k - 1; i >= 0; --i) {
            uint8_t base_encoding = (encoding >> (2 * i)) & 0x03;
            result.push_back(decode_base(base_encoding));
        }

        return result;
    }

    void kmer::serialize(std::ostream& os) const {
        os.write(reinterpret_cast<const char*>(&encoding), sizeof(encoding));
        os.write(reinterpret_cast<const char*>(&k), sizeof(k));
    }

    kmer kmer::deserialize(std::istream& is) {
        uint64_t enc;
        uint8_t len;
        is.read(reinterpret_cast<char*>(&enc), sizeof(enc));
        is.read(reinterpret_cast<char*>(&len), sizeof(len));
        if(!is) {
            throw std::runtime_error("Failed to deserialize k-mer: stream error");
        }
        return kmer(enc, len);
    }

    uint8_t kmer::encode_base(char base) {
        switch (std::toupper(static_cast<unsigned char>(base))) {
            case 'A': return 0;
            case 'C': return 1;
            case 'G': return 2;
            case 'T': return 3;
            default:
                throw std::invalid_argument(std::string("Invalid nucleotide: ") + base);
        }
    }

    char kmer::decode_base(uint8_t encoding) {
        static const char bases[] = {'A', 'C', 'G', 'T'};
        return bases[encoding & 0x03];
    }

    bool kmer::is_valid(std::string_view sequence) {
        return std::all_of(sequence.begin(), sequence.end(), [](char c) {
            char upper = std::toupper(static_cast<unsigned char>(c));
            return upper == 'A' || upper == 'C' || upper == 'G' || upper == 'T';
        });
    }

}