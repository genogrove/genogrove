/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

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
        // Read into locals and go through the checked constructor, so a
        // corrupted stream cannot produce an interval with start > end. The
        // comparison operators assume that invariant, and a key violating it
        // would silently misorder the tree instead of failing here.
        std::size_t start, end;
        is.read(reinterpret_cast<char*>(&start), sizeof(start));
        is.read(reinterpret_cast<char*>(&end), sizeof(end));
        if(!is) {
            throw std::runtime_error("Failed to deserialize interval: stream error");
        }
        return interval(start, end);
    }
}