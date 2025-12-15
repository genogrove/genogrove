#include "genogrove/io/filetype_detector.hpp"

// standard
#include <unordered_map>
#include <fstream>
#include <stdexcept>

static const std::unordered_map<std::string, filetype> extensions = {
    {"bed", filetype::BED},
    {"bedgraph", filetype::BEDGRAPH},
    {"gff", filetype::GFF},
    {"gtf", filetype::GTF},
    {"vcf", filetype::VCF}
};

std::tuple<filetype, bool> filetype_detector::detect_filetype(const fs::path& filepath) {
    std::ifstream file(filepath, std::ios::binary);
    if(!file) {
        throw std::runtime_error("Failed to open file: " + filepath.string());
    }

    // checks if the file is gzipped
    char buffer[2];
    file.read(buffer, 2);
    bool is_gzipped = (file.gcount() == 2 &&
        static_cast<unsigned char>(buffer[0]) == 0x1f &&
        static_cast<unsigned char>(buffer[1]) == 0x8b);

    // checks the file extension
    std::string extension = filepath.extension().string();
    if(!extension.empty() && extension[0] == '.') {
        extension = extension.substr(1);
    }
    if(is_gzipped && extension == "gz") {
        extension = filepath.stem().extension().string();
        if(!extension.empty() && extension[0] == '.') {
            extension = extension.substr(1);
        }
    }

    // look up the file type
    auto it = extensions.find(extension);
    filetype ft = (it != extensions.end()) ? it->second : filetype::UNKNOWN;
    return std::make_tuple(ft, is_gzipped);
}