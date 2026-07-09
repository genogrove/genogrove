/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_VCF_HPP
#define GENOGROVE_CLI_HANDLERS_VCF_HPP

#include <string>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/vcf_reader.hpp>

namespace handlers {
namespace vcf {

namespace gdt = genogrove::data_type;
namespace gio = genogrove::io;

// Iterate a VCF/BCF query file, invoking cb(interval, chrom) for each record.
// vcf_entry is 0-based half-open (end = pos + len(REF)), so [start, end) ->
// interval(start, end - 1), matching the BED conversion — a VCF query and a BED
// query over the same physical region produce the same interval. len(REF) >= 1
// guarantees end - 1 >= start (a SNP maps to a single-base interval, no
// size_t underflow). Query-only: VCF is never a target payload in the CLI.
template <typename F>
void for_each_vcf_query(const std::string& queryfile, F&& cb) {
    gio::vcf_reader reader(queryfile);
    for (const auto& query_entry : reader) {
        cb(gdt::interval(query_entry.start, query_entry.end - 1), query_entry.chrom);
    }
}

} // namespace vcf
} // namespace handlers

#endif // GENOGROVE_CLI_HANDLERS_VCF_HPP
