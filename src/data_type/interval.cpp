#include <genogrove/data_type/interval.hpp>

namespace genogrove::data_type {
    interval::interval() : start(std::string::npos), end(std::string::npos) {}
    interval::interval(size_t start, size_t end) : start(start), end(end) {}

    bool interval::operator<(const interval& other) const {
        if(this->get_start() == other.get_start()) {
            return this->get_end() < other.get_end();
        } else {
            return this->get_start() < other.get_start();
        }
    }

    bool interval::operator>(const interval& other) const {
        if(this->get_start() == other.get_start()) {
            return this->get_end() > other.get_end();
        } else {
            return this->get_start() > other.get_start();
        }
    }

    bool interval::operator==(const interval& other) const {
        return this->get_start() == other.get_start() && this->get_end() == other.get_end();
    }

    // getter & setter
    size_t interval::get_start() const { return this->start; }
    void interval::set_start(size_t start) { this->start = start; }
    size_t interval::get_end() const { return this->end; }
    void interval::set_end(size_t end) { this->end = end; }

    bool interval::overlap(const interval& intvl1, const interval& intvl2) {
        interval intvl = {std::max(intvl1.get_start(), intvl2.get_start()),
                          std::min(intvl1.get_end(), intvl2.get_end())};

        // For closed intervals [start, end], use <=
        // Example: [0, 50] and [50, 100] DO overlap at position 50
        return intvl.get_start() <= intvl.get_end();
    }

    interval interval::aggregate(const std::vector<interval>& intervals) {
        if (intervals.empty()) {
            return interval{};
        }

        interval parent{std::string::npos, 0};
        for (auto& intvl : intervals) {
            if (intvl.get_start() < parent.get_start()) {
                parent.set_start(intvl.get_start());
            }
            if (intvl.get_end() > parent.get_end()) {
                parent.set_end(intvl.get_end());
            }
        }
        return parent;
    }


    std::string interval::to_string() const {
        return "[" + std::to_string(this->start) + "," + std::to_string(this->end) + "]";
    }

    void interval::serialize(std::ostream& os) const {
        os.write(reinterpret_cast<const char*>(&this->start), sizeof(this->start));
        os.write(reinterpret_cast<const char*>(&this->end), sizeof(this->end));
    }

    interval interval::deserialize(std::istream& is) {
        interval intvl;
        is.read(reinterpret_cast<char*>(&intvl.start), sizeof(intvl.start));
        is.read(reinterpret_cast<char*>(&intvl.end), sizeof(intvl.end));
        return intvl;
    }
}
