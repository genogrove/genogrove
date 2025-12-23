/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_FILETYPE_DETECTOR_HPP
#define GENOGROVE_FILETYPE_DETECTOR_HPP

// standard
#include <filesystem>
#include <tuple>

namespace fs = std::filesystem;

enum class filetype {
    BED,
    BEDGRAPH,
    GFF,
    GTF,
    VCF,
    GG,
    UNKNOWN
};

enum class compression_type {
    NONE,
    GZIP,      // .gz (including bgzf)
    BZIP2,     // .bz2
    XZ,        // .xz (LZMA)
    ZSTD,      // .zst (Zstandard)
    LZ4,       // .lz4
    UNKNOWN
};

class filetype_detector {
    public:
        std::tuple<filetype, compression_type> detect_filetype(const fs::path& filepath);
    private:
        compression_type detect_compression(const fs::path& filepath);
};

#endif //GENOGROVE_FILETYPE_DETECTOR_HPP
