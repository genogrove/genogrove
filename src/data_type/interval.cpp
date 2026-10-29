/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/data_type/interval.hpp>
#include <genogrove/utility/le_io.hpp>

// standard
#include <stdexcept>
#include <string>

namespace genogrove::data_type {

    std::string interval::to_string() const {
        return "[" + std::to_string(this->start) + "," + std::to_string(this->end) + "]";
    }

    void interval::serialize(std::ostream& os) const {
        genogrove::utility::write_le(os, this->start);
        genogrove::utility::write_le(os, this->end);
        if (!os) {
            throw std::runtime_error("Failed to serialize interval: stream error");
        }
    }

    interval interval::deserialize(std::istream& is) {
        // Read into locals and go through the checked constructor, so a
        // corrupted stream cannot produce an interval with start > end. The
        // comparison operators assume that invariant, and a key violating it
        // would silently misorder the tree instead of failing here.
        std::size_t start, end;
        genogrove::utility::read_le(is, start);
        genogrove::utility::read_le(is, end);
        if(!is) {
            throw std::runtime_error("Failed to deserialize interval: stream error");
        }
        return interval(start, end);
    }
}