#include <handlers/gff.hpp>
#include <cstdlib>
#include <iostream>

namespace handlers {
namespace gff {

void grove_insert(
    ggs::grove<gdt::interval, gio::gff_entry>& grove,
    const std::string& filepath
) {
    gio::gff_reader reader(filepath);

    try {
        for (const auto& entry : reader) {
            grove.insert_data(entry.seqid, entry.interval, entry);
        }
    } catch (const std::runtime_error& e) {
        std::cerr << "Error reading GFF file: " << e.what() << std::endl;
        exit(1);
    }
}

void grove_intersect(
    ggs::grove<gdt::interval, gio::gff_entry>& grove,
    const std::string& queryfile,
    std::ostream& output
) {
    gio::gff_reader reader(queryfile);

    try {
        for (const auto& query_entry : reader) {
            auto query = query_entry.interval;
            auto results = grove.intersect(query, query_entry.seqid);

            for(auto* result : results.get_keys()) {
                output << result->get_data().seqid << "\t"
                       << result->get_data().interval.get_start() << "\t"
                       << result->get_data().interval.get_end() << "\n";
            }
        }
    } catch (const std::runtime_error& e) {
        std::cerr << "Error reading GFF file: " << e.what() << std::endl;
        exit(1);
    }
}

} // namespace gff
} // namespace handlers