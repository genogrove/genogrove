/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_BED_HPP
#define GENOGROVE_CLI_HANDLERS_BED_HPP

#include <string>
#include <ostream>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/bed_reader.hpp>

namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;

namespace handlers {
namespace bed {

// Insert BED file entries into a grove
void grove_insert(
    ggs::grove<gdt::interval, bed_entry>& grove,
    const std::string& filepath
);

// Intersect BED query file against a populated grove
void grove_intersect(
    const ggs::grove<gdt::interval, bed_entry>& grove,
    const std::string& queryfile,
    std::ostream& output
);

} // namespace bed
} // namespace handlers

#endif //GENOGROVE_CLI_HANDLERS_BED_HPP
