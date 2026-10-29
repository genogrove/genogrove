/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/data_type/numeric.hpp>
#include <genogrove/utility/le_io.hpp>

// standard
#include <stdexcept>

namespace genogrove::data_type {

    std::string numeric::to_string() const {
        return std::to_string(this->value);
    }

    void numeric::serialize(std::ostream& os) const {
        genogrove::utility::write_le(os, this->value);
        if (!os) {
            throw std::runtime_error("Failed to serialize numeric: stream error");
        }
    }

    numeric numeric::deserialize(std::istream& is) {
        numeric n;
        genogrove::utility::read_le(is, n.value);
        if(!is) {
            throw std::runtime_error("Failed to deserialize numeric: stream error");
        }
        return n;
    }
}