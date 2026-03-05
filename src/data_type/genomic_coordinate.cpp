#include <genogrove/data_type/genomic_coordinate.hpp>
#include <format>

namespace genogrove::data_type {

    std::string genomic_coordinate::to_string() const {
        return std::format("{}:{}-{}", strand, start, end);
    }

    void genomic_coordinate::serialize(std::ostream& os) const {
        os.write(reinterpret_cast<const char*>(&this->strand), sizeof(this->strand));
        os.write(reinterpret_cast<const char*>(&this->start), sizeof(this->start));
        os.write(reinterpret_cast<const char*>(&this->end), sizeof(this->end));
        if (!os) {
            throw std::runtime_error("Failed to serialize genomic_coordinate: stream error");
        }
    }

    genomic_coordinate genomic_coordinate::deserialize(std::istream& is) {
        char strand;
        std::size_t start, end;
        is.read(reinterpret_cast<char*>(&strand), sizeof(strand));
        is.read(reinterpret_cast<char*>(&start), sizeof(start));
        is.read(reinterpret_cast<char*>(&end), sizeof(end));
        if(!is) {
            throw std::runtime_error("Failed to deserialize genomic coordinate: stream error");
        }
        return genomic_coordinate(strand, start, end);
    }
}