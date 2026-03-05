#include <genogrove/data_type/interval.hpp>

// standard
#include <stdexcept>
#include <string>

namespace genogrove::data_type {

    std::string interval::to_string() const {
        return "[" + std::to_string(this->start) + "," + std::to_string(this->end) + "]";
    }

    void interval::serialize(std::ostream& os) const {
        os.write(reinterpret_cast<const char*>(&this->start), sizeof(this->start));
        os.write(reinterpret_cast<const char*>(&this->end), sizeof(this->end));
        if (!os) {
            throw std::runtime_error("Failed to serialize interval: stream error");
        }
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