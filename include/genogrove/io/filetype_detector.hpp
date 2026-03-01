/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_FILETYPE_DETECTOR_HPP
#define GENOGROVE_FILETYPE_DETECTOR_HPP

// standard
#include <filesystem>
#include <tuple>

namespace fs = std::filesystem;

namespace genogrove::io {
    enum class filetype {
        BED,
        BEDGRAPH,
        GFF,
        GTF,
        VCF,
        SAM,
        BAM,
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
        [[nodiscard]] std::tuple<filetype, compression_type> detect_filetype(const fs::path& filepath);
    private:
        compression_type detect_compression(const fs::path& filepath);
        bool validate_extension(const fs::path& filepath, std::string& extension,
            compression_type& compression);

    };
}
#endif //GENOGROVE_FILETYPE_DETECTOR_HPP
