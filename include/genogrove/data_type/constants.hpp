/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef CORE_CONSTANTS_HPP
#define CORE_CONSTANTS_HPP

// Standard

namespace genogrove::core {
    namespace constants {
        static constexpr size_t MAX_CHRM_BITS = 6; // 2^5 - 64 chromosomes (should be enough for now...)
    }
}

#endif //CORE_CONSTANTS_HPP
