/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

/*
 * Tests for grove_view — the partial (random-access) reader over a serialized
 * format 0.2 grove. The contract: it returns exactly what the eager grove would
 * for the same query, while loading only the blocks the query walks.
 */

#include <gtest/gtest.h>

#include <algorithm>
#include <filesystem>
#include <fstream>
#include <set>
#include <stdexcept>
#include <string>
#include <vector>

#include <genogrove/data_type/genomic_coordinate.hpp>
#include <genogrove/data_type/numeric.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/grove_view.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;
namespace fs = std::filesystem;

namespace {

// Serialize a grove to a temp .gg and return the path (caller removes it).
template <typename Grove>
fs::path write_grove(const Grove& g, const std::string& name) {
    fs::path p = fs::temp_directory_path() / ("genogrove_view_" + name + ".gg");
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

TEST(GroveViewTest, MatchesEagerIntersectAcrossIndices) {
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

    auto view = gst::grove_view<gdt::interval, int>::open(path.string());

    const std::vector<gdt::interval> queries = {
        {0, 5}, {95, 130}, {200, 260}, {595, 595}, {1000, 2000}, {5000, 6000}};
    for (const char* idx : {"chr1", "chr2"}) {
        for (const auto& q : queries) {
            auto e = data_values(eager.intersect(q, idx));
            auto l = data_values(view.intersect(q, idx));
            EXPECT_EQ(e, l) << "mismatch on " << idx << " [" << q.get_start() << ","
                            << q.get_end() << "]";
        }
    }

    // Whole-grove (all indices) query.
    EXPECT_EQ(data_values(eager.intersect(gdt::interval{0, 60})),
              data_values(view.intersect(gdt::interval{0, 60})));

    // Read-side introspection parity with the eager grove.
    EXPECT_EQ(view.get_order(), eager.get_order());  // built with order 4
    EXPECT_EQ(view.get_order(), 4);

    // index_names() enumerates the same indices the eager grove holds, order-independent.
    std::vector<std::string> view_names = view.index_names();
    std::sort(view_names.begin(), view_names.end());
    EXPECT_EQ(view_names, (std::vector<std::string>{"chr1", "chr2"}));

    fs::remove(path);
}

TEST(GroveViewTest, PartialLoadTouchesSubsetOfBlocks) {
    // A narrow query on a large tree must page in only a handful of blocks, not
    // the whole file — that is the entire point of grove_view.
    using grove_t = gst::grove<gdt::interval, int>;
    fs::path path;
    {
        grove_t g(4);
        for (size_t i = 0; i < 500; ++i) {
            g.insert_data("chr1", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i), gst::sorted);
        }
        path = write_grove(g, "partial");
    }

    auto view = gst::grove_view<gdt::interval, int>::open(path.string());
    ASSERT_GT(view.block_count(), 20u) << "need a multi-block tree for this to be meaningful";

    auto r = view.intersect(gdt::interval{1000, 1005}, "chr1");  // one interval
    EXPECT_EQ(r.get_keys().size(), 1u);
    EXPECT_EQ(r.get_keys()[0]->get_data(), 100);

    EXPECT_GT(view.blocks_loaded(), 0u);
    EXPECT_LT(view.blocks_loaded(), view.block_count())
        << "loaded " << view.blocks_loaded() << " of " << view.block_count() << " blocks";

    fs::remove(path);
}

TEST(GroveViewTest, CrossChromosomeNeighbors) {
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

    auto view = gst::grove_view<gdt::interval, std::string>::open(path.string());

    auto ra = view.intersect(gdt::interval{100, 200}, "chr7");
    ASSERT_EQ(ra.get_keys().size(), 1u);
    auto na = view.get_neighbors(ra.get_keys()[0]);
    ASSERT_EQ(na.size(), 1u);
    EXPECT_EQ(na[0]->get_data(), "geneB");  // chr7 -> chr9, target block paged in on demand

    auto rb = view.intersect(gdt::interval{300, 400}, "chr9");
    ASSERT_EQ(rb.get_keys().size(), 1u);
    auto nb = view.get_neighbors(rb.get_keys()[0]);
    ASSERT_EQ(nb.size(), 1u);
    EXPECT_EQ(nb[0]->get_data(), "geneA");

    fs::remove(path);
}

TEST(GroveViewTest, EdgePayloadsSurfaceThroughView) {
    // Edge metadata is parsed and kept when a block is paged in, so get_edges /
    // get_neighbors_if work without a full deserialize.
    using grove_t = gst::grove<gdt::interval, std::string, std::string>;
    fs::path path;
    {
        grove_t g(4);
        auto* a = g.insert_data("chr7", gdt::interval{100, 200}, "geneA", gst::sorted);
        auto* b = g.insert_data("chr9", gdt::interval{300, 400}, "geneB", gst::sorted);
        auto* c = g.insert_data("chr9", gdt::interval{500, 600}, "geneC", gst::sorted);
        g.add_edge(a, b, std::string{"strong"});
        g.add_edge(a, c, std::string{"weak"});
        path = write_grove(g, "edgepayload");
    }

    auto view = gst::grove_view<gdt::interval, std::string, std::string>::open(path.string());

    auto ra = view.intersect(gdt::interval{100, 200}, "chr7");
    ASSERT_EQ(ra.get_keys().size(), 1u);
    const auto* src = ra.get_keys()[0];

    auto meta = view.get_edges(src);
    std::sort(meta.begin(), meta.end());
    EXPECT_EQ(meta, (std::vector<std::string>{"strong", "weak"}));

    auto strong = view.get_neighbors_if(
        src, [](const std::string& m) { return m == "strong"; });
    ASSERT_EQ(strong.size(), 1u);
    EXPECT_EQ(strong[0]->get_data(), "geneB");  // target block paged in on demand

    // A predicate that matches nothing returns empty (no target block touched).
    EXPECT_TRUE(view.get_neighbors_if(
                        src, [](const std::string& m) { return m == "nonexistent"; })
                    .empty());

    // get_edge_list pairs each resolved target with its metadata, in edge order
    // (insertion order: a->b "strong" then a->c "weak"); no sort — order is asserted.
    auto edge_list = view.get_edge_list(src);
    ASSERT_EQ(edge_list.size(), 2u);
    EXPECT_EQ(edge_list[0].first->get_data(), "geneB");  // "strong"
    EXPECT_EQ(edge_list[0].second, "strong");
    EXPECT_EQ(edge_list[1].first->get_data(), "geneC");  // "weak"
    EXPECT_EQ(edge_list[1].second, "weak");

    EXPECT_EQ(view.get_edges(nullptr).size(), 0u);
    EXPECT_THROW(view.get_neighbors_if(nullptr, [](const std::string&) { return true; }),
                 std::invalid_argument);
    EXPECT_THROW(view.get_edge_list(nullptr), std::invalid_argument);

    fs::remove(path);
}

TEST(GroveViewTest, NeighborResolvesIntoDistributedExternalBlock) {
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

    auto view = gst::grove_view<gdt::interval, int>::open(path.string());
    auto res = view.intersect(gdt::interval{1, 2}, "chr1");
    ASSERT_EQ(res.get_keys().size(), 1u);

    auto neighbors = view.get_neighbors(res.get_keys()[0]);
    ASSERT_EQ(neighbors.size(), 1u);
    EXPECT_EQ(neighbors[0]->get_data(), 1100);

    // Only a fraction of blocks paged in: the anchor's tree path + one external
    // chunk, never all three external blocks plus the whole tree.
    EXPECT_LT(view.blocks_loaded(), view.block_count());

    fs::remove(path);
}

TEST(GroveViewTest, AbsentIndexAndEmptyGrove) {
    using grove_t = gst::grove<gdt::interval, int>;

    fs::path populated;
    {
        grove_t g(3);
        g.insert_data("chr1", gdt::interval{10, 20}, 1, gst::sorted);
        populated = write_grove(g, "absent");
    }
    auto view = gst::grove_view<gdt::interval, int>::open(populated.string());
    EXPECT_EQ(view.intersect(gdt::interval{10, 20}, "nope").get_keys().size(), 0u);
    fs::remove(populated);

    fs::path empty;
    {
        grove_t g(3);
        empty = write_grove(g, "empty");
    }
    auto view_empty = gst::grove_view<gdt::interval, int>::open(empty.string());
    EXPECT_EQ(view_empty.block_count(), 0u);
    EXPECT_EQ(view_empty.intersect(gdt::interval{1, 2}, "chr1").get_keys().size(), 0u);
    EXPECT_EQ(view_empty.intersect(gdt::interval{1, 2}).get_keys().size(), 0u);
    fs::remove(empty);
}

namespace {

// Data value of a flanking side, or -1 when null — for order-independent
// eager-vs-view comparison. Assumes non-negative data in the fixtures.
template <typename FR>
std::pair<int, int> flank_pair(const FR& r) {
    return {r.get_predecessor() ? r.get_predecessor()->get_data() : -1,
            r.get_successor() ? r.get_successor()->get_data() : -1};
}

} // namespace

TEST(GroveViewTest, MatchesEagerFlanking) {
    using grove_t = gst::grove<gdt::interval, int>;
    fs::path path;
    {
        grove_t g(4);
        // A spread of non-overlapping intervals plus a nested pair so the
        // largest-end predecessor rule is exercised (data 998 is nested inside 999).
        for (size_t i = 0; i < 80; ++i) {
            g.insert_data("chr1", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i), gst::sorted);
        }
        g.insert_data("chr1", gdt::interval{300, 400}, 999, gst::sorted);  // wide
        g.insert_data("chr1", gdt::interval{320, 330}, 998, gst::sorted);  // nested inside 999
        path = write_grove(g, "flanking");
    }

    grove_t eager = [&] {
        std::ifstream ifs(path, std::ios::binary);
        return grove_t::deserialize(ifs);
    }();
    auto view = gst::grove_view<gdt::interval, int>::open(path.string());

    const std::vector<gdt::interval> queries = {
        {0, 5}, {96, 99}, {225, 235}, {335, 345}, {500, 510}, {795, 805}, {5000, 6000}};
    for (const auto& q : queries) {
        auto e = flank_pair(eager.flanking(q, "chr1"));
        auto l = flank_pair(view.flanking(q, "chr1"));
        EXPECT_EQ(e, l) << "flanking mismatch on [" << q.get_start() << "," << q.get_end() << "]";
    }

    // Absent index -> null pair.
    auto miss = view.flanking(gdt::interval{10, 20}, "nope");
    EXPECT_EQ(miss.get_predecessor(), nullptr);
    EXPECT_EQ(miss.get_successor(), nullptr);

    fs::remove(path);
}

TEST(GroveViewTest, FlankingPartialLoad) {
    using grove_t = gst::grove<gdt::interval, int>;
    fs::path path;
    {
        grove_t g(4);
        for (size_t i = 0; i < 500; ++i) {
            g.insert_data("chr1", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i), gst::sorted);
        }
        path = write_grove(g, "flanking_partial");
    }

    auto view = gst::grove_view<gdt::interval, int>::open(path.string());
    ASSERT_GT(view.block_count(), 20u);

    auto r = view.flanking(gdt::interval{1006, 1008}, "chr1");  // sits between data 100 and 101
    ASSERT_NE(r.get_predecessor(), nullptr);
    ASSERT_NE(r.get_successor(), nullptr);
    EXPECT_EQ(r.get_predecessor()->get_data(), 100);
    EXPECT_EQ(r.get_successor()->get_data(), 101);

    EXPECT_GT(view.blocks_loaded(), 0u);
    EXPECT_LT(view.blocks_loaded(), view.block_count())
        << "loaded " << view.blocks_loaded() << " of " << view.block_count() << " blocks";

    fs::remove(path);
}

TEST(GroveViewTest, FlankingPredicateOverloadMatchesEager) {
    using grove_t = gst::grove<gdt::genomic_coordinate, int>;
    fs::path path;
    {
        grove_t g(4);
        // Alternating strands so a same-strand predicate skips the nearer segment.
        for (size_t i = 0; i < 40; ++i) {
            char strand = (i % 2 == 0) ? '+' : '-';
            g.insert_data("chr1", gdt::genomic_coordinate{strand, i * 10, i * 10 + 5},
                          static_cast<int>(i), gst::sorted);
        }
        path = write_grove(g, "flanking_pred");
    }

    grove_t eager = [&] {
        std::ifstream ifs(path, std::ios::binary);
        return grove_t::deserialize(ifs);
    }();
    auto view = gst::grove_view<gdt::genomic_coordinate, int>::open(path.string());

    auto same_strand = [](const gdt::genomic_coordinate& c, const gdt::genomic_coordinate& q) {
        return q.get_strand() == '*' || c.get_strand() == '*' || c.get_strand() == q.get_strand();
    };
    for (size_t s = 100; s < 300; s += 37) {
        gdt::genomic_coordinate q{'+', s, s + 3};
        auto e = flank_pair(eager.flanking(q, "chr1", same_strand));
        auto l = flank_pair(view.flanking(q, "chr1", same_strand));
        EXPECT_EQ(e, l) << "strand-filtered flanking mismatch at start " << s;
    }

    fs::remove(path);
}

TEST(GroveViewTest, FlankingNumericMatchesEager) {
    using grove_t = gst::grove<gdt::numeric, int>;
    fs::path path;
    {
        grove_t g(4);
        for (size_t i = 0; i < 60; ++i) {
            g.insert_data("chr1", gdt::numeric{static_cast<int>(i * 5)}, static_cast<int>(i), gst::sorted);
        }
        path = write_grove(g, "flanking_numeric");
    }

    grove_t eager = [&] {
        std::ifstream ifs(path, std::ios::binary);
        return grove_t::deserialize(ifs);
    }();
    auto view = gst::grove_view<gdt::numeric, int>::open(path.string());

    for (int v : {0, 12, 51, 297, 1000}) {
        auto e = flank_pair(eager.flanking(gdt::numeric{v}, "chr1"));
        auto l = flank_pair(view.flanking(gdt::numeric{v}, "chr1"));
        EXPECT_EQ(e, l) << "numeric flanking mismatch at " << v;
    }

    fs::remove(path);
}