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

        unsigned char* ubuf = reinterpret_cast<unsigned char*>(buffer);

        // gzip magic bytes: 0x1f 0x8b
        if(bytes_read >= 2 && ubuf[0] == 0x1f && ubuf[1] == 0x8b) {
            return compression_type::GZIP;
        }

        // bzip2 magic bytes: 0x42 0x5a ('BZ')
        if(bytes_read >= 2 && ubuf[0] == 0x42 && ubuf[1] == 0x5a) {
            return compression_type::BZIP2;
        }

        // xz magic bytes: 0xfd 0x37 0x7a 0x58 0x5a 0x00
        if(bytes_read >= 6 && ubuf[0] == 0xfd && ubuf[1] == 0x37 &&
           ubuf[2] == 0x7a && ubuf[3] == 0x58 && ubuf[4] == 0x5a && ubuf[5] == 0x00) {
            return compression_type::XZ;
        }

        // zstd magic bytes: 0x28 0xb5 0x2f 0xfd
        if(bytes_read >= 4 && ubuf[0] == 0x28 && ubuf[1] == 0xb5 &&
           ubuf[2] == 0x2f && ubuf[3] == 0xfd) {
            return compression_type::ZSTD;
        }

        // lz4 magic bytes: 0x04 0x22 0x4d 0x18
        if(bytes_read >= 4 && ubuf[0] == 0x04 && ubuf[1] == 0x22 &&
           ubuf[2] == 0x4d && ubuf[3] == 0x18) {
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
