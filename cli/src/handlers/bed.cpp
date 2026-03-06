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
            grove.insert_data(entry.chrom, gdt::interval(entry.start, entry.end - 1), entry);
        }
    } catch (const std::exception& e) {
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
            gdt::interval query(query_entry.start, query_entry.end - 1);
            auto results = grove.intersect(query, query_entry.chrom);

            for(auto* result : results.get_keys()) {
                output << result->get_data().chrom << "\t"
                       << result->get_data().start << "\t"
                       << result->get_data().end << "\n";
            }
        }
    } catch (const std::exception& e) {
        std::cerr << "Error reading BED file: " << e.what() << std::endl;
        exit(1);
    }
}

} // namespace bed
} // namespace handlers