// Uses the installed package: the grove and grove_view headers, the generated
// version header, insertion, serialization and a paged read of the result.

#include <genogrove/config/version.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/grove_view.hpp>

#include <filesystem>
#include <fstream>
#include <iostream>

namespace gdt = genogrove::data_type;
namespace gst = genogrove::structure;

int main() {
    using grove_t = gst::grove<gdt::interval, int>;
    // Number of keys overlapping position 12: exactly one in every copy below.
    const auto hits = [](auto& g) {
        return g.intersect(gdt::interval{12, 12}, "chr1").get_keys().size();
    };

    grove_t grove(4);
    for (size_t i = 0; i < 20; ++i) {
        grove.insert_data("chr1", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i));
    }
    if (hits(grove) != 1) {
        std::cerr << "FAILED: eager intersect\n";
        return 1;
    }

    // Relative path: the test runs this in its own scratch directory.
    const std::filesystem::path path = "consumer_test.gg";
    {
        std::ofstream out(path, std::ios::binary);
        grove.serialize(out);
        if (!out) {
            std::cerr << "FAILED: serialize\n";
            return 1;
        }
    }
    {
        std::ifstream in(path, std::ios::binary);
        auto restored = grove_t::deserialize(in);
        if (hits(restored) != 1) {
            std::cerr << "FAILED: deserialize\n";
            return 1;
        }
    }
    {
        auto view = gst::grove_view<gdt::interval, int>::open(path.string());
        if (hits(view) != 1) {
            std::cerr << "FAILED: grove_view intersect\n";
            return 1;
        }
    }

    std::cout << "genogrove " << genogrove_VERSION_MAJOR << "." << genogrove_VERSION_MINOR << "."
              << genogrove_VERSION_PATCH << "\n";
    return 0;
}
