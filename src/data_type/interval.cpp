#include <genogrove/data_type/interval.hpp>

// standard
#include <stdexcept>
#include <string>

namespace genogrove::data_type {

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
        if(!is) {
            throw std::runtime_error("Failed to deserialize interval: stream error");
        }
        return intvl;
    }
}