/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_FILETYPE_DETECTOR_HPP
#define GENOGROVE_CLI_FILETYPE_DETECTOR_HPP

// standard
#include <filesystem>
#include <tuple>
#include <unordered_map>
#include <fstream>
#include <bitset>


enum class filetype {
    BED, BEDGRAPH, GFF, GTF, VCF, UNKNOWN
};

class filetype_detector {
public:
    std::tuple<filetype, bool> detect_filetype(const std::filesystem::path& filepath);
};

#endif //GENOGROVE_CLI_FILETYPE_DETECTOR_HPP
