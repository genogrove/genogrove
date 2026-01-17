#include <genogrove/data_type/genomic_coordinate.hpp>
#include <algorithm>
#include <limits>
#include <sstream>

namespace genogrove::data_type {
    // Constructors
    genomic_coordinate::genomic_coordinate()
        : strand('.'), start(0), end(0) {}

    genomic_coordinate::genomic_coordinate(char strand, std::size_t start, std::size_t end)
        : strand(strand), start(start), end(end) {}

    // Comparison operators
    bool genomic_coordinate::operator<(const genomic_coordinate& other) const {
        // sort by coordinates first
        if (start != other.start) {
            return start < other.start;
        } else {
            if (end != other.end) {
                return end < other.end;
            } else {
                // then sort by strand: * < . < + < -
                // '*' is wildcard for aggregated nodes with mixed strands
                if (strand != other.strand) {
                    if (strand == '*') return true;
                    if (other.strand == '*') return false;
                    if (strand == '.') return true;
                    if (other.strand == '.') return false;
                    if (strand == '+') return true;
                    if (other.strand == '+') return false;
                    // If we get here, one must be '-' (or invalid char)
                    // Since * < . < + < -, if strand is '-', it's largest, so return false
                    return false;
                } else {
                    return false;
                }
            }
        }
    }

    bool genomic_coordinate::operator>(const genomic_coordinate& other) const {
        return other < *this;
    }

    bool genomic_coordinate::operator==(const genomic_coordinate& other) const {
        return strand == other.strand && start == other.start && end == other.end;
    }

    // Static overlap method
    bool genomic_coordinate::overlap(const genomic_coordinate& a, const genomic_coordinate& b) {
        // Check if coordinates overlap (including touching
        // Ranges [a.start, a.end] and [b.start, b.end] overlap if
        // a.start <= b.end AND b.start <= a.end
        if (a.start > b.end || b.start > a.end) {
            return false;
        }
        // strand matching with wildcard support:
        // - '*' is a wildcard used for aggregated nodes and matches any strand (for tree traversal)
        // - Otherwise: strict matching (+ matches only +, - matches only -, . matches only .)
        if (a.strand == '*' || b.strand == '*') {
            return true;
        }
        return (a.strand == b.strand);
    }

    // Static aggregate method
    genomic_coordinate genomic_coordinate::aggregate(const std::vector<genomic_coordinate>& coords) {
        if (coords.empty()) {
            return genomic_coordinate(); // Default: '.', 0, 0
        }

        if (coords.size() == 1) {
            return coords[0];
        }

        // Find min start and max end
        std::size_t min_start = std::numeric_limits<std::size_t>::max();
        std::size_t max_end = 0;
        char result_strand = coords[0].strand;
        bool mixed_strands = false;

        for (const auto& coord : coords) {
            min_start = std::min(min_start, coord.start);
            max_end = std::max(max_end, coord.end);

            // Check if all strands are the same
            if (coord.strand != result_strand) {
                mixed_strands = true;
            }
        }

        // If strands are mixed, use '*' as wildcard for tree traversal
        if (mixed_strands) {
            result_strand = '*';
        }

        return genomic_coordinate(result_strand, min_start, max_end);
    }

    // String conversion
    std::string genomic_coordinate::to_string() const {
        std::ostringstream oss;
        oss << strand << ":" << start << "-" << end;
        return oss.str();
    }

    // Getters
    char genomic_coordinate::get_strand() const {
        return strand;
    }

    std::size_t genomic_coordinate::get_start() const {
        return start;
    }

    std::size_t genomic_coordinate::get_end() const {
        return end;
    }

    // Setters
    void genomic_coordinate::set_strand(char strand) {
        this->strand = strand;
    }

    void genomic_coordinate::set_start(std::size_t start) {
        this->start = start;
    }

    void genomic_coordinate::set_end(std::size_t end) {
        this->end = end;
    }

    void genomic_coordinate::serialize(std::ostream& os) const {
        os.write(reinterpret_cast<const char*>(&this->strand), sizeof(this->strand));
        os.write(reinterpret_cast<const char*>(&this->start), sizeof(this->start));
        os.write(reinterpret_cast<const char*>(&this->end), sizeof(this->end));
    }

    genomic_coordinate genomic_coordinate::deserialize(std::istream& is) {
        char strand;
        std::size_t start, end;
        is.read(reinterpret_cast<char*>(&strand), sizeof(strand));
        is.read(reinterpret_cast<char*>(&start), sizeof(start));
        is.read(reinterpret_cast<char*>(&end), sizeof(end));
        return genomic_coordinate(strand, start, end);
    }
}