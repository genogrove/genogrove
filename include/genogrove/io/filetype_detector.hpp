/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_FILETYPE_DETECTOR_HPP
#define GENOGROVE_FILETYPE_DETECTOR_HPP

// standard
#include <filesystem>
#include <tuple>

namespace genogrove::io {
    namespace fs = std::filesystem;

    enum class filetype {
        BED,
        BEDGRAPH,
        GFF,
        GTF,
        VCF,
        SAM,
        BAM,
        FASTA,
        FASTQ,
        GG,
        UNKNOWN
    };

    enum class compression_type {
        NONE,
        GZIP,      // gzip OR BGZF — BGZF reuses the gzip 1f 8b magic, so BAM/BCF
                   // and bgzipped .vcf.gz all report GZIP (see detect_filetype)
        BZIP2,     // .bz2
        XZ,        // .xz (LZMA)
        ZSTD,      // .zst (Zstandard)
        LZ4,       // .lz4
        UNKNOWN
    };

    class filetype_detector {
    public:
        /**
         * @brief Detect (filetype, compression) from a path's extension and magic bytes.
         *
         * The compression component describes the outer container only. BGZF-framed
         * formats — BAM, BCF, and bgzipped .vcf.gz — share gzip's 1f 8b magic and so
         * report compression_type::GZIP; the htslib-backed readers unwrap that framing
         * themselves, so callers must not treat GZIP here as "run it through gzip" and
         * double-decompress.
         */
        [[nodiscard]] std::tuple<filetype, compression_type> detect_filetype(const fs::path& filepath);
    private:
        compression_type detect_compression(const fs::path& filepath);
    };
}
#endif //GENOGROVE_FILETYPE_DETECTOR_HPP
