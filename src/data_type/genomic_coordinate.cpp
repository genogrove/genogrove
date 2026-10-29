/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/data_type/genomic_coordinate.hpp>
#include <genogrove/utility/le_io.hpp>
#include <format>

namespace genogrove::data_type {

    std::string genomic_coordinate::to_string() const {
        return std::format("{}:{}-{}", strand, start, end);
    }

    void genomic_coordinate::serialize(std::ostream& os) const {
        genogrove::utility::write_le(os, this->strand);
        genogrove::utility::write_le(os, this->start);
        genogrove::utility::write_le(os, this->end);
        if (!os) {
            throw std::runtime_error("Failed to serialize genomic_coordinate: stream error");
        }
    }

    genomic_coordinate genomic_coordinate::deserialize(std::istream& is) {
        char strand;
        std::size_t start, end;
        genogrove::utility::read_le(is, strand);
        genogrove::utility::read_le(is, start);
        genogrove::utility::read_le(is, end);
        if(!is) {
            throw std::runtime_error("Failed to deserialize genomic coordinate: stream error");
        }
        return genomic_coordinate(strand, start, end);
    }
}