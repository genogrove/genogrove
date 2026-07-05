/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

/*
 * Tests for lazy_grove — the partial (random-access) reader over a serialized
 * format 0.2 grove. The contract: it returns exactly what the eager grove would
 * for the same query, while loading only the blocks the query walks.
 */

#include <gtest/gtest.h>

#include <algorithm>
#include <filesystem>
#include <fstream>
#include <set>
#include <string>
#include <vector>

#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/lazy_grove.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;
namespace fs = std::filesystem;

namespace {

// Serialize a grove to a temp .gg and return the path (caller removes it).
template <typename Grove>
fs::path write_grove(const Grove& g, const std::string& name) {
    fs::path p = fs::temp_directory_path() / ("genogrove_lazy_" + name + ".gg");
    std::ofstream ofs(p, std::ios::binary);
    g.serialize(ofs);
    return p;
}

// Data values of a result set, sorted — order-independent comparison.
template <typename Result>
std::vector<int> data_values(const Result& r) {
    std::vector<int> v;
    for (auto* k : r.get_keys()) {
        v.push_back(k->get_data());
    }
    std::sort(v.begin(), v.end());
    return v;
}

} // namespace

TEST(LazyGroveTest, MatchesEagerIntersectAcrossIndices) {
    using grove_t = gst::grove<gdt::interval, int>;
    fs::path path;
    {
        grove_t g(4);
        for (size_t i = 0; i < 60; ++i) {
            g.insert_data("chr1", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i), gst::sorted);
        }
        for (size_t i = 0; i < 40; ++i) {
            g.insert_data("chr2", gdt::interval{i * 10, i * 10 + 5}, 1000 + static_cast<int>(i),
                          gst::sorted);
        }
        path = write_grove(g, "intersect");
    }

    // Eager reference.
    grove_t eager = [&] {
        std::ifstream ifs(path, std::ios::binary);
        return grove_t::deserialize(ifs);
    }();

    auto lazy = gst::lazy_grove<gdt::interval, int>::open(path.string());

    const std::vector<gdt::interval> queries = {
        {0, 5}, {95, 130}, {200, 260}, {595, 595}, {1000, 2000}, {5000, 6000}};
    for (const char* idx : {"chr1", "chr2"}) {
        for (const auto& q : queries) {
            auto e = data_values(eager.intersect(q, idx));
            auto l = data_values(lazy.intersect(q, idx));
            EXPECT_EQ(e, l) << "mismatch on " << idx << " [" << q.get_start() << ","
                            << q.get_end() << "]";
        }
    }

    // Whole-grove (all indices) query.
    EXPECT_EQ(data_values(eager.intersect(gdt::interval{0, 60})),
              data_values(lazy.intersect(gdt::interval{0, 60})));

    fs::remove(path);
}

TEST(LazyGroveTest, PartialLoadTouchesSubsetOfBlocks) {
    // A narrow query on a large tree must page in only a handful of blocks, not
    // the whole file — that is the entire point of lazy_grove.
    using grove_t = gst::grove<gdt::interval, int>;
    fs::path path;
    {
        grove_t g(4);
        for (size_t i = 0; i < 500; ++i) {
            g.insert_data("chr1", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i), gst::sorted);
        }
        path = write_grove(g, "partial");
    }

    auto lazy = gst::lazy_grove<gdt::interval, int>::open(path.string());
    ASSERT_GT(lazy.block_count(), 20u) << "need a multi-block tree for this to be meaningful";

    auto r = lazy.intersect(gdt::interval{1000, 1005}, "chr1");  // one interval
    EXPECT_EQ(r.get_keys().size(), 1u);
    EXPECT_EQ(r.get_keys()[0]->get_data(), 100);

    EXPECT_GT(lazy.blocks_loaded(), 0u);
    EXPECT_LT(lazy.blocks_loaded(), lazy.block_count())
        << "loaded " << lazy.blocks_loaded() << " of " << lazy.block_count() << " blocks";

    fs::remove(path);
}

TEST(LazyGroveTest, CrossChromosomeNeighbors) {
    using grove_t = gst::grove<gdt::interval, std::string>;
    fs::path path;
    {
        grove_t g(4);
        auto* a = g.insert_data("chr7", gdt::interval{100, 200}, "geneA", gst::sorted);
        auto* b = g.insert_data("chr9", gdt::interval{300, 400}, "geneB", gst::sorted);
        g.add_edge(a, b);
        g.add_edge(b, a);
        path = write_grove(g, "crosschrom");
    }

    auto lazy = gst::lazy_grove<gdt::interval, std::string>::open(path.string());

    auto ra = lazy.intersect(gdt::interval{100, 200}, "chr7");
    ASSERT_EQ(ra.get_keys().size(), 1u);
    auto na = lazy.get_neighbors(ra.get_keys()[0]);
    ASSERT_EQ(na.size(), 1u);
    EXPECT_EQ(na[0]->get_data(), "geneB");  // chr7 -> chr9, target block paged in on demand

    auto rb = lazy.intersect(gdt::interval{300, 400}, "chr9");
    ASSERT_EQ(rb.get_keys().size(), 1u);
    auto nb = lazy.get_neighbors(rb.get_keys()[0]);
    ASSERT_EQ(nb.size(), 1u);
    EXPECT_EQ(nb[0]->get_data(), "geneA");

    fs::remove(path);
}

TEST(LazyGroveTest, NeighborResolvesIntoDistributedExternalBlock) {
    // Edge target lives in the 3rd external chunk; get_neighbors must page in that
    // one external block (not all of them) and resolve (block_id, slot) correctly.
    using grove_t = gst::grove<gdt::interval, int>;
    using key_t = gdt::key<gdt::interval, int>;
    constexpr int N = 1200;  // > 2 * 512 -> 3 external blocks
    fs::path path;
    {
        grove_t g(4);
        key_t* anchor = g.insert_data("chr1", gdt::interval{1, 2}, -1, gst::sorted);
        key_t* ext1100 = nullptr;
        for (size_t i = 0; i < static_cast<size_t>(N); ++i) {
            key_t* p = g.add_external_key(gdt::interval{10 + i, 11 + i}, static_cast<int>(i));
            if (i == 1100) ext1100 = p;
        }
        g.add_edge(anchor, ext1100);
        path = write_grove(g, "extdist");
    }

    auto lazy = gst::lazy_grove<gdt::interval, int>::open(path.string());
    auto res = lazy.intersect(gdt::interval{1, 2}, "chr1");
    ASSERT_EQ(res.get_keys().size(), 1u);

    auto neighbors = lazy.get_neighbors(res.get_keys()[0]);
    ASSERT_EQ(neighbors.size(), 1u);
    EXPECT_EQ(neighbors[0]->get_data(), 1100);

    // Only a fraction of blocks paged in: the anchor's tree path + one external
    // chunk, never all three external blocks plus the whole tree.
    EXPECT_LT(lazy.blocks_loaded(), lazy.block_count());

    fs::remove(path);
}

TEST(LazyGroveTest, AbsentIndexAndEmptyGrove) {
    using grove_t = gst::grove<gdt::interval, int>;

    fs::path populated;
    {
        grove_t g(3);
        g.insert_data("chr1", gdt::interval{10, 20}, 1, gst::sorted);
        populated = write_grove(g, "absent");
    }
    auto lazy = gst::lazy_grove<gdt::interval, int>::open(populated.string());
    EXPECT_EQ(lazy.intersect(gdt::interval{10, 20}, "nope").get_keys().size(), 0u);
    fs::remove(populated);

    fs::path empty;
    {
        grove_t g(3);
        empty = write_grove(g, "empty");
    }
    auto lazy_empty = gst::lazy_grove<gdt::interval, int>::open(empty.string());
    EXPECT_EQ(lazy_empty.block_count(), 0u);
    EXPECT_EQ(lazy_empty.intersect(gdt::interval{1, 2}, "chr1").get_keys().size(), 0u);
    EXPECT_EQ(lazy_empty.intersect(gdt::interval{1, 2}).get_keys().size(), 0u);
    fs::remove(empty);
}