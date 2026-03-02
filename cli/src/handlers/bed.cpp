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

    try {
        for (const auto& entry : reader) {
            grove.insert_data(entry.chrom, entry.interval, entry);
        }
    } catch (const std::runtime_error& e) {
        std::cerr << "Error reading BED file: " << e.what() << std::endl;
        exit(1);
    }
}

void grove_intersect(
    ggs::grove<gdt::interval, gio::bed_entry>& grove,
    const std::string& queryfile,
    std::ostream& output
) {
    gio::bed_reader reader(queryfile);

    try {
        for (const auto& query_entry : reader) {
            auto query = query_entry.interval;
            auto results = grove.intersect(query, query_entry.chrom);

            for(auto* result : results.get_keys()) {
                output << result->get_data().chrom << "\t"
                       << result->get_data().interval.get_start() << "\t"
                       << result->get_data().interval.get_end() << "\n";
            }
        }
    } catch (const std::runtime_error& e) {
        std::cerr << "Error reading BED file: " << e.what() << std::endl;
        exit(1);
    }
}

} // namespace bed
} // namespace handlers