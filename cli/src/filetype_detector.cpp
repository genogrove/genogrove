#include <filetype_detector.hpp>

static const std::unordered_map<std::string, filetype> extensions = {
    {"bed", filetype::BED},
    {"bedgraph", filetype::BEDGRAPH},
    {"gff", filetype::GFF},
    {"gtf", filetype::GTF},
    {"vcf", filetype::VCF}
};

std::tuple<filetype, bool> filetype_detector::detect_filetype(const std::filesystem::path& filepath) {
    std::ifstream file(filepath, std::ios::binary);
    if(!file) {
        throw std::runtime_error("Failed to open file: " + filepath.string());
    }

    // checks if the file is gzipped
    char buffer[2];
    file.read(buffer, 2);
    bool is_gzipped = (file.gcount() == 2 && buffer[0] == 0x1f && buffer[1] == 0x8b);

    // checks the file extension
    std::string extension = filepath.extension().string();
    if(is_gzipped == std::bitset<1>(1) && extension == ".gz") {
        extension = filepath.stem().extension().string();
    }

    // look up the file type
    auto it = extensions.find(extension);
    filetype ft = (it != extensions.end()) ? it->second : filetype::UNKNOWN;
    return std::make_tuple(ft, is_gzipped);
}