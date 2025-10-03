#include <genogrove/data_type/interval.hpp>

namespace genogrove::data_type {
    interval::interval() : start(std::string::npos), end(std::string::npos) {}
    interval::interval(size_t start, size_t end) : start(start), end(end) {}

    bool interval::operator<(const interval& other) const {
        if(this->getStart() == other.getStart()) {
            return this->getEnd() < other.getEnd();
        } else {
            return this->getStart() < other.getStart();
        }
    }

    bool interval::operator>(const interval& other) const {
        if(this->getStart() == other.getStart()) {
            return this->getEnd() > other.getEnd();
        } else {
            return this->getStart() > other.getStart();
        }
    }

    bool interval::operator==(const interval& other) const {
        return this->getStart() == other.getStart() && this->getEnd() == other.getEnd();
    }

    // getter & setter
    size_t interval::getStart() const { return this->start; }
    void interval::setStart(size_t start) { this->start = start; }
    size_t interval::getEnd() const { return this->end; }
    void interval::setEnd(size_t end) { this->end = end; }

    bool interval::overlap(const interval& intvl1, const interval& intvl2) {
        interval intvl = {std::max(intvl1.getStart(), intvl2.getStart()),
                          std::min(intvl1.getEnd(), intvl2.getEnd())};

        return intvl.getStart() <= intvl.getEnd();
    }

    interval interval::aggregate(const std::vector<interval>& intervals) {
        if (intervals.empty()) {
            return interval{};
        }

        interval parent{std::string::npos, 0};
        for (auto& intvl : intervals) {
            if (intvl.getStart() < parent.getStart()) {
                parent.setStart(intvl.getStart());
            }
            if (intvl.getEnd() > parent.getEnd()) {
                parent.setEnd(intvl.getEnd());
            }
        }
        return parent;
    }


    std::string interval::toString() const {
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
