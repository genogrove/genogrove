#include <handlers/bed.hpp>
#include <iostream>

namespace handlers {
namespace bed {

void grove_insert(
    ggs::grove<gdt::interval, bed_entry>& grove,
    const std::string& filepath
) {
    bed_reader reader(filepath);
    bed_entry entry;

    while(reader.has_next()) {
        if(!reader.read_next(entry)) {
            if(reader.get_error_message().empty()) {
                break; // EOF
            }
            std::cerr << "Error reading BED file at line " << reader.get_current_line()
                      << ": " << reader.get_error_message() << std::endl;
            continue;
        }

        // Insert using chrom as index, interval as key, and bed_entry as data
        grove.insert_data(entry.chrom, entry.interval, entry);
    }
}

void grove_intersect(
    const ggs::grove<gdt::interval, bed_entry>& grove,
    const std::string& queryfile,
    std::ostream& output
) {
    bed_reader reader(queryfile);
    bed_entry query_entry;

    while(reader.has_next()) {
        if(!reader.read_next(query_entry)) {
            if(reader.get_error_message().empty()) {
                break; // EOF
            }
            std::cerr << "Error reading BED query file at line " << reader.get_current_line()
                      << ": " << reader.get_error_message() << std::endl;
            continue;
        }

        // Intersect query with grove
        auto results = grove.intersect(query_entry.interval, query_entry.chrom);

        // Output all matching intervals
        for(auto* result : results.get_keys()) {
            output << result->get_data().chrom << "\t"
                   << result->get_data().interval.get_start() << "\t"
                   << result->get_data().interval.get_end() << "\n";
        }
    }
}

} // namespace bed
} // namespace handlers