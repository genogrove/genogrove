#include <handlers/gff.hpp>
#include <iostream>

namespace handlers {
namespace gff {

void grove_insert(
    ggs::grove<gdt::interval, gff_entry>& grove,
    const std::string& filepath
) {
    gff_reader reader(filepath);

    // Use iterator-based approach - no need to initialize entry separately
    for (const auto& entry : reader) {
        // Insert using seqid (not chrom!) as index, interval as key, and gff_entry as data
        grove.insert_data(entry.seqid, entry.interval, entry);
    }
}

void grove_intersect(
    const ggs::grove<gdt::interval, gff_entry>& grove,
    const std::string& queryfile,
    std::ostream& output
) {
    gff_reader reader(queryfile);

    // Use iterator-based approach for cleaner code
    for (const auto& query_entry : reader) {
        // Intersect query with grove (using seqid, not chrom!)
        auto results = grove.intersect(query_entry.interval, query_entry.seqid);

        // Output all matching intervals
        for(auto* result : results.get_keys()) {
            output << result->get_data().seqid << "\t"
                   << result->get_data().interval.get_start() << "\t"
                   << result->get_data().interval.get_end() << "\n";
        }
    }
}

} // namespace gff
} // namespace handlers