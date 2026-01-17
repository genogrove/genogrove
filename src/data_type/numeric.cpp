#include <genogrove/data_type/numeric.hpp>

// standard
#include <limits>
#include <algorithm>
#include <stdexcept>

namespace genogrove::data_type {
    numeric::numeric() : value(std::numeric_limits<int>::min()) {}
    numeric::numeric(int value) : value(value) {}

    bool numeric::operator<(const numeric& other) const {
        return this->value < other.value;
    }

    bool numeric::operator>(const numeric& other) const {
        return this->value > other.value;
    }

    bool numeric::operator==(const numeric& other) const {
        return this->value == other.value;
    }

    // Getters & Setters
    int numeric::get_value() const {
        return this->value;
    }

    void numeric::set_value(int value) {
        this->value = value;
    }

    bool numeric::overlap(const numeric& a, const numeric& b) {
        // For point values, they only overlap if they're equal
        return a.value == b.value;
    }

    numeric numeric::aggregate(const std::vector<numeric>& values) {
        if (values.empty()) {
            return numeric{};
        }

        // Return the maximum value as the aggregate for B+ tree navigation
        // Internal nodes use max value to guide search queries
        int max_val = std::numeric_limits<int>::min();
        for (const auto& n : values) {
            max_val = std::max(max_val, n.value);
        }
        return numeric{max_val};
    }

    std::string numeric::to_string() const {
        return std::to_string(this->value);
    }

    void numeric::serialize(std::ostream& os) const {
        os.write(reinterpret_cast<const char*>(&this->value), sizeof(this->value));
    }

    numeric numeric::deserialize(std::istream& is) {
        numeric n;
        is.read(reinterpret_cast<char*>(&n.value), sizeof(n.value));
        if(!is) {
            throw std::runtime_error("Failed to deserialize numeric: stream error");
        }
        return n;
    }
}