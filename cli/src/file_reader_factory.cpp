#include <file_reader_factory.hpp>

std::unique_ptr<file_reader> file_reader_factory::create(const std::filesystem::path& fpath,
    filetype ftype, bool is_gzipped) {
    switch(ftype) {
        case filetype::BED:
            return std::make_unique<bed_reader>(fpath);
        default:
            return nullptr;
    }
}