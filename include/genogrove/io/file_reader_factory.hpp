#ifndef GENOGROVE_FILE_READER_FACTORY_HPP
#define GENOGROVE_FILE_READER_FACTORY_HPP

// standard
#include <filesystem>
#include <memory>

// genogrove
#include "file_reader.hpp"
#include "bed_reader.hpp"
#include "filetype_detector.hpp"

using filepath = std::filesystem::path;

// Non-templated factory - returns specific concrete types
class file_reader_factory {
public:
    // Create BED reader directly (no redundant type specification)
    static std::unique_ptr<bed_reader> create_bed_reader(const filepath& fpath) {
        return std::make_unique<bed_reader>(fpath);
    }

    // Auto-detect and create appropriate reader
    static std::unique_ptr<bed_reader> create(const filepath& fpath, filetype ftype, bool is_gzipped) {
        switch(ftype) {
            case filetype::BED:
                return std::make_unique<bed_reader>(fpath);
            default:
                throw std::runtime_error("Unsupported file type");
        }
    }
};

#endif //GENOGROVE_FILE_READER_FACTORY_HPP
