#include <genogrove/io/filetype_detector.hpp>

// standard
#include <unordered_map>
#include <fstream>
#include <stdexcept>


namespace genogrove::io {
    static const std::unordered_map<std::string, filetype> extensions = {
        {"bed", filetype::BED},
        {"bedgraph", filetype::BEDGRAPH},
        {"gff", filetype::GFF},
        {"gtf", filetype::GTF},
        {"vcf", filetype::VCF},
        {"sam", filetype::SAM},
        {"bam", filetype::BAM},
        {"gg", filetype::GG}
    };

    static const std::unordered_map<std::string, compression_type> compression_extensions = {
        {"gz", compression_type::GZIP},
        {"bz2", compression_type::BZIP2},
        {"xz", compression_type::XZ},
        {"zst", compression_type::ZSTD},
        {"lz4", compression_type::LZ4}
    };

    compression_type filetype_detector::detect_compression(const fs::path& filepath) {
        std::ifstream file(filepath, std::ios::binary);
        if(!file) {
            throw std::runtime_error("Failed to open file: " + filepath.string());
        }

        // Read enough bytes to detect all compression formats
        char buffer[6];
        file.read(buffer, 6);
        std::streamsize bytes_read = file.gcount();

        if(bytes_read < 2) {
            return compression_type::NONE;
        }

        static constexpr unsigned char GZIP_MAGIC[]  = {0x1f, 0x8b};
        static constexpr unsigned char BZIP2_MAGIC[] = {0x42, 0x5a};
        static constexpr unsigned char XZ_MAGIC[]    = {0xfd, 0x37, 0x7a, 0x58, 0x5a, 0x00};
        static constexpr unsigned char ZSTD_MAGIC[]  = {0x28, 0xb5, 0x2f, 0xfd};
        static constexpr unsigned char LZ4_MAGIC[]   = {0x04, 0x22, 0x4d, 0x18};

        unsigned char* ubuf = reinterpret_cast<unsigned char*>(buffer);

        if(bytes_read >= 2 && ubuf[0] == GZIP_MAGIC[0] && ubuf[1] == GZIP_MAGIC[1]) {
            return compression_type::GZIP;
        }

        if(bytes_read >= 2 && ubuf[0] == BZIP2_MAGIC[0] && ubuf[1] == BZIP2_MAGIC[1]) {
            return compression_type::BZIP2;
        }

        if(bytes_read >= 6 && ubuf[0] == XZ_MAGIC[0] && ubuf[1] == XZ_MAGIC[1] &&
           ubuf[2] == XZ_MAGIC[2] && ubuf[3] == XZ_MAGIC[3] &&
           ubuf[4] == XZ_MAGIC[4] && ubuf[5] == XZ_MAGIC[5]) {
            return compression_type::XZ;
        }

        if(bytes_read >= 4 && ubuf[0] == ZSTD_MAGIC[0] && ubuf[1] == ZSTD_MAGIC[1] &&
           ubuf[2] == ZSTD_MAGIC[2] && ubuf[3] == ZSTD_MAGIC[3]) {
            return compression_type::ZSTD;
        }

        if(bytes_read >= 4 && ubuf[0] == LZ4_MAGIC[0] && ubuf[1] == LZ4_MAGIC[1] &&
           ubuf[2] == LZ4_MAGIC[2] && ubuf[3] == LZ4_MAGIC[3]) {
            return compression_type::LZ4;
        }

        return compression_type::NONE;
    }

    std::tuple<filetype, compression_type> filetype_detector::detect_filetype(const fs::path& filepath) {
        // Detect compression type from file content
        compression_type comp = detect_compression(filepath);

        // Determine the actual file extension (stripping compression extension if present)
        std::string extension = filepath.extension().string();
        if(!extension.empty() && extension[0] == '.') {
            extension = extension.substr(1);
        }

        // If file has a compression extension, get the actual file type from the stem
        auto comp_it = compression_extensions.find(extension);
        if(comp_it != compression_extensions.end()) {
            extension = filepath.stem().extension().string();
            if(!extension.empty() && extension[0] == '.') {
                extension = extension.substr(1);
            }
        }

        // Look up the file type
        auto it = extensions.find(extension);
        filetype ft = (it != extensions.end()) ? it->second : filetype::UNKNOWN;

        return std::make_tuple(ft, comp);
    }

}
