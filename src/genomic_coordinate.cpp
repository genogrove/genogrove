#include <genogrove/data_type/genomic_coordinate.hpp>

namespace genogrove::data_type {
    genomic_coordinate::genomic_coordinate(std::string chrom, char strand,
                                           std::pair<std::size_t, std::size_t> range)
                                           : chrom(chrom), strand(strand), range(range) {}
}

