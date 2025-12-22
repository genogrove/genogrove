#ifndef GENOGROVE_FILE_READER_FACTORY_HPP
#define GENOGROVE_FILE_READER_FACTORY_HPP

// standard
#include <filesystem>
#include <memory>
#include <variant>

// genogrove
#include "bed_reader.hpp"
#include "gff_reader.hpp"
#include "filetype_detector.hpp"

using filepath = std::filesystem::path;

// Variant type for different reader types
using FileReaderVariant = std::variant<
    std::unique_ptr<bed_reader>,
    std::unique_ptr<gff_reader>
>;

// Factory for creating file readers
class file_reader_factory {
public:
    // Create BED reader
    static std::unique_ptr<bed_reader> create_bed_reader(const filepath& fpath) {
        return std::make_unique<bed_reader>(fpath);
    }

    // Create GFF/GTF reader
    static std::unique_ptr<gff_reader> create_gff_reader(const filepath& fpath) {
        return std::make_unique<gff_reader>(fpath);
    }

    // Create appropriate reader based on filetype (returns variant)
    static FileReaderVariant create(const filepath& fpath, filetype ftype, bool is_gzipped) {
        switch(ftype) {
            case filetype::BED:
                return std::make_unique<bed_reader>(fpath);
            case filetype::GFF:
            case filetype::GTF:
                return std::make_unique<gff_reader>(fpath);
            default:
                throw std::runtime_error("Unsupported file type: " + std::to_string(static_cast<int>(ftype)));
        }
    }

    // Convenience method: auto-detect filetype and create reader
    static FileReaderVariant create_auto(const filepath& fpath) {
        filetype_detector detector;
        auto [ftype, is_gzipped] = detector.detect_filetype(fpath);
        return create(fpath, ftype, is_gzipped);
    }
};

#endif //GENOGROVE_FILE_READER_FACTORY_HPP
