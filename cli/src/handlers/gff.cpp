#include <handlers/gff.hpp>

namespace handlers {
namespace gff {

void grove_insert(
    ggs::grove<gdt::interval, gio::gff_entry>& grove,
    const std::string& filepath
) {
    gio::gff_reader reader(filepath);

    for (const auto& entry : reader) {
        grove.insert_data(entry.seqid, gdt::interval(entry.start, entry.end), entry);
    }
}

void grove_intersect(
    ggs::grove<gdt::interval, gio::gff_entry>& grove,
    const std::string& queryfile,
    std::ostream& output
) {
    gio::gff_reader reader(queryfile);

    for (const auto& query_entry : reader) {
        gdt::interval query(query_entry.start, query_entry.end);
        auto results = grove.intersect(query, query_entry.seqid);

        for(auto* result : results.get_keys()) {
            output << result->get_data().seqid << "\t"
                   << result->get_data().start << "\t"
                   << result->get_data().end << "\n";
        }
    }
}

} // namespace gff
} // namespace handlers