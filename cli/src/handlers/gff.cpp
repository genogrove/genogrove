#include <handlers/gff.hpp>
#include <iostream>

namespace handlers {
namespace gff {

void grove_insert(
    ggs::grove<gdt::interval, gff_entry>& grove,
    const std::string& filepath
) {
    gff_reader reader(filepath);
    gff_entry entry;

    while(reader.has_next()) {
        if(!reader.read_next(entry)) {
            if(reader.get_error_message().empty()) {
                break; // EOF
            }
            std::cerr << "Error reading GFF file at line " << reader.get_current_line()
                      << ": " << reader.get_error_message() << std::endl;
            continue;
        }

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
    gff_entry query_entry;

    while(reader.has_next()) {
        if(!reader.read_next(query_entry)) {
            if(reader.get_error_message().empty()) {
                break; // EOF
            }
            std::cerr << "Error reading GFF query file at line " << reader.get_current_line()
                      << ": " << reader.get_error_message() << std::endl;
            continue;
        }

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