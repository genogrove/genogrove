// Uses the installed package: the grove and grove_view headers, the generated
// version header, insertion, serialization and a paged read of the result.

#include <genogrove/config/version.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/grove_view.hpp>

#include <cstdio>
#include <filesystem>
#include <fstream>
#include <iostream>

namespace gdt = genogrove::data_type;
namespace gst = genogrove::structure;

namespace {
bool check(bool ok, const char* what) {
    if (!ok) {
        std::cerr << "FAILED: " << what << "\n";
    }
    return ok;
}
}  // namespace

int main() {
    using grove_t = gst::grove<gdt::interval, int>;

    grove_t grove(4);
    for (size_t i = 0; i < 20; ++i) {
        grove.insert_data("chr1", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i));
    }

    bool ok = true;
    ok &= check(grove.intersect(gdt::interval{12, 12}, "chr1").get_keys().size() == 1,
                "eager intersect");

    const auto path = std::filesystem::temp_directory_path() / "genogrove_consumer_test.gg";
    {
        std::ofstream out(path, std::ios::binary);
        grove.serialize(out);
        ok &= check(static_cast<bool>(out), "serialize");
    }

    {
        std::ifstream in(path, std::ios::binary);
        auto restored = grove_t::deserialize(in);
        ok &= check(restored.intersect(gdt::interval{12, 12}, "chr1").get_keys().size() == 1,
                    "deserialize");
    }

    {
        auto view = gst::grove_view<gdt::interval, int>::open(path.string());
        ok &= check(view.intersect(gdt::interval{12, 12}, "chr1").get_keys().size() == 1,
                    "grove_view intersect");
    }
    std::filesystem::remove(path);

    std::cout << "genogrove " << genogrove_VERSION_MAJOR << "." << genogrove_VERSION_MINOR << "."
              << genogrove_VERSION_PATCH << "\n";
    return ok ? 0 : 1;
}
