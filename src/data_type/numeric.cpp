#include <genogrove/data_type/numeric.hpp>

// standard
#include <stdexcept>

namespace genogrove::data_type {

    std::string numeric::to_string() const {
        return std::to_string(this->value);
    }

    void numeric::serialize(std::ostream& os) const {
        os.write(reinterpret_cast<const char*>(&this->value), sizeof(this->value));
        if (!os) {
            throw std::runtime_error("Failed to serialize numeric: stream error");
        }
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