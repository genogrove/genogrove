#include <handlers/bed.hpp>
#include <cstdlib>
#include <iostream>

namespace handlers {
namespace bed {

void grove_insert(
    ggs::grove<gdt::interval, gio::bed_entry>& grove,
    const std::string& filepath
) {
    gio::bed_reader reader(filepath);

    // Use iterator-based approach - no need to initialize entry separately
    for (const auto& entry : reader) {
        // Insert using chrom as index, interval as key, and bed_entry as data
        grove.insert_data(entry.chrom, entry.interval, entry);
    }
    if (!reader.get_error_message().empty()) {
        std::cerr << "Error reading BED file: " << reader.get_error_message() << std::endl;
        exit(1);
    }
}

void grove_intersect(
    ggs::grove<gdt::interval, gio::bed_entry>& grove,
    const std::string& queryfile,
    std::ostream& output
) {
    gio::bed_reader reader(queryfile);

    // Use iterator-based approach for cleaner code
    for (const auto& query_entry : reader) {
        // Copy interval since intersect() takes non-const reference
        auto query = query_entry.interval;
        auto results = grove.intersect(query, query_entry.chrom);

        // Output all matching intervals
        for(auto* result : results.get_keys()) {
            output << result->get_data().chrom << "\t"
                   << result->get_data().interval.get_start() << "\t"
                   << result->get_data().interval.get_end() << "\n";
        }
    }
    if (!reader.get_error_message().empty()) {
        std::cerr << "Error reading BED file: " << reader.get_error_message() << std::endl;
        exit(1);
    }
}

} // namespace bed
} // namespace handlers