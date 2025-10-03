/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef DATATYPE_GENOMICCOORDINATE_HPP
#define DATATYPE_GENOMICCOORDINATE_HPP

// Class
#include <genogrove/data_type/index.hpp>

namespace genogrove::data_type {
    class genomic_coordinate {
        public:
            genomic_coordinate(std::string chrom, char strand, std::pair<std::size_t, std::size_t> range);

        private:
            index chrom;
            char strand;
            std::pair<std::size_t, std::size_t> range;
        };
}

#endif //DATATYPE_GENOMICCOORDINATE_HPP
