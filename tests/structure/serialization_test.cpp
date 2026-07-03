/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

/*
 * Tests for grove serialization that are not key-type-dependent.
 * Key-type-specific roundtrip tests live in key_type_grove_test.hpp.
 */

#include <gtest/gtest.h>
#include <filesystem>
#include <fstream>
#include <sstream>
#include <streambuf>
#include <string>

#include <genogrove/structure/grove/grove.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;
namespace fs = std::filesystem;

namespace {

// Streambuf that serves bytes via underflow but inherits the base class's
// default seekoff (returns pos_type(off_type(-1)) → "not seekable"). Used by
// the #323 regression test to simulate pipe/socket-like sources.
class non_seekable_streambuf : public std::streambuf {
public:
    explicit non_seekable_streambuf(std::string data)
        : data_(std::move(data)) {
        setg(data_.data(), data_.data(), data_.data() + data_.size());
    }
private:
    std::string data_;
};

} // namespace

TEST(SerializationTest, FileStreamStateCleanAfterDeserialize) {
    // Regression test for #301: inflate_streambuf left failbit set on the
    // underlying ifstream when the last source_.read() returned fewer bytes
    // than requested (partial read at EOF sets eofbit + failbit).
    auto tmp_path = fs::temp_directory_path() / "genogrove_stream_state_test.bin";

    {
        std::ofstream ofs(tmp_path, std::ios::binary);
        ASSERT_TRUE(ofs.is_open());

        gst::grove<gdt::interval, std::string> grove(3);
        grove.insert_data("chr1", gdt::interval{100, 200}, "a", gst::sorted);
        grove.insert_data("chr1", gdt::interval{300, 400}, "b", gst::sorted);
        grove.insert_data("chr1", gdt::interval{500, 600}, "c", gst::sorted);
        grove.serialize(ofs);
        ASSERT_TRUE(ofs.good());
    }

    {
        std::ifstream ifs(tmp_path, std::ios::binary);
        ASSERT_TRUE(ifs.is_open());

        auto restored = gst::grove<gdt::interval, std::string>::deserialize(ifs);
        EXPECT_FALSE(ifs.fail())
            << "failbit should not be set after successful deserialization";

        auto result = restored.intersect(gdt::interval{100, 600}, "chr1");
        EXPECT_EQ(result.get_keys().size(), 3);
    }

    fs::remove(tmp_path);
}

TEST(SerializationTest, NonSeekableSourceWithTrailingDataRoundTrips) {
    // Format 1.0 (block-structured) reads each block from an isolated buffer of
    // exactly its length-prefixed size, so the eager deserialize path only ever
    // reads the source stream sequentially — it never seeks it. That makes the
    // eager path work on non-seekable sources (pipes, sockets), and leaves
    // trailing bytes intact for the caller to read next. This supersedes the
    // #323 behaviour, where the whole-file zlib stream forced a seek-back on the
    // source and threw on a non-seekable one.
    //
    // Type alias avoids the EXPECT_* macro splitting on the comma in
    // `grove<gdt::interval, int>`.
    using grove_t = gst::grove<gdt::interval, int>;

    std::stringstream payload(std::ios::in | std::ios::out | std::ios::binary);
    {
        grove_t g(3);
        g.insert_data("idx", gdt::interval{10, 20}, 1, gst::sorted);
        g.serialize(payload);
        payload.write("TEST", 4);   // trailing bytes after the grove
        ASSERT_TRUE(payload.good());
    }
    std::string bytes = payload.str();

    non_seekable_streambuf nsb(bytes);
    std::istream is(&nsb);

    grove_t restored = grove_t::deserialize(is);
    EXPECT_EQ(restored.intersect(gdt::interval{10, 20}, "idx").get_keys().size(), 1u);

    // Trailing bytes remain readable — deserialize consumed only the grove.
    std::array<char, 4> sentinel{};
    is.read(sentinel.data(), sentinel.size());
    EXPECT_EQ(is.gcount(), 4);
    EXPECT_EQ(std::string(sentinel.data(), 4), "TEST");
}

TEST(SerializationTest, FileStreamStateCleanWithTrailingData) {
    // Verify that trailing data after the grove is still readable. Format 0.2
    // reads exactly each block's length-prefixed bytes, so deserialize consumes
    // only the grove and leaves the stream positioned at the trailing bytes.
    auto tmp_path = fs::temp_directory_path() / "genogrove_trailing_data_test.bin";
    const std::array<char, 4> sentinel = {'T', 'E', 'S', 'T'};

    {
        std::ofstream ofs(tmp_path, std::ios::binary);
        ASSERT_TRUE(ofs.is_open());

        gst::grove<gdt::interval, int> grove(3);
        grove.insert_data("idx", gdt::interval{10, 20}, 1, gst::sorted);
        grove.insert_data("idx", gdt::interval{30, 40}, 2, gst::sorted);
        grove.insert_data("idx", gdt::interval{50, 60}, 3, gst::sorted);
        grove.serialize(ofs);
        ofs.write(sentinel.data(), sentinel.size());
        ASSERT_TRUE(ofs.good());
    }

    {
        std::ifstream ifs(tmp_path, std::ios::binary);
        ASSERT_TRUE(ifs.is_open());

        auto restored = gst::grove<gdt::interval, int>::deserialize(ifs);
        EXPECT_FALSE(ifs.fail())
            << "failbit should not be set after deserialization";

        std::array<char, 4> read_sentinel{};
        ifs.read(read_sentinel.data(), read_sentinel.size());
        EXPECT_TRUE(ifs.good())
            << "Trailing data should be readable after grove deserialization";
        EXPECT_EQ(read_sentinel, sentinel);
    }

    fs::remove(tmp_path);
}

// ==========================================
// Format 0.2 block-layout coverage
// ==========================================

TEST(SerializationTest, DistributedExternalBlocksRoundTrip) {
    // External keys are chunked into fixed-size blocks (512 keys/block), so a
    // large registry spans several external blocks. Exercise >2 chunks plus
    // edges whose targets live in a later chunk, to verify (block_id, slot)
    // resolution across distributed external blocks.
    using grove_t = gst::grove<gdt::interval, int>;
    using key_t = gdt::key<gdt::interval, int>;
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);

    constexpr int N = 1200;  // > 2 * 512 -> 3 external blocks
    {
        grove_t g(4);
        key_t* anchor = g.insert_data("chr1", gdt::interval{1, 2}, -1, gst::sorted);
        key_t* ext5 = nullptr;
        key_t* ext1029 = nullptr;
        key_t* ext1100 = nullptr;
        for (int i = 0; i < N; ++i) {
            key_t* p = g.add_external_key(gdt::interval{10 + i, 11 + i}, i);
            if (i == 5) ext5 = p;
            if (i == 1029) ext1029 = p;
            if (i == 1100) ext1100 = p;
        }
        g.add_edge(anchor, ext1100);   // indexed -> external in the 3rd chunk
        g.add_edge(ext5, ext1029);     // external -> external across chunks
        EXPECT_EQ(g.external_vertex_count(), static_cast<size_t>(N));
        EXPECT_EQ(g.edge_count(), 2u);
        g.serialize(ss);
    }
    {
        ss.seekg(0);
        auto r = grove_t::deserialize(ss);
        // All external blocks must be read back to recover the full count.
        EXPECT_EQ(r.external_vertex_count(), static_cast<size_t>(N));
        EXPECT_EQ(r.edge_count(), 2u);

        auto res = r.intersect(gdt::interval{1, 2}, "chr1");
        ASSERT_EQ(res.get_keys().size(), 1u);
        auto neighbors = r.get_neighbors(res.get_keys()[0]);
        ASSERT_EQ(neighbors.size(), 1u);
        EXPECT_EQ(neighbors[0]->get_data(), 1100);  // resolved into the 3rd external block
    }
}

TEST(SerializationTest, CrossChromosomeEdgeRoundTrip) {
    // A directed edge between keys on different indices (chromosomes) — the
    // fusion / trans-regulatory case. Targets resolve into a different index's
    // node-block range, in both directions.
    using grove_t = gst::grove<gdt::interval, std::string>;
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    {
        grove_t g(4);
        auto* a = g.insert_data("chr7", gdt::interval{100, 200}, "geneA", gst::sorted);
        auto* b = g.insert_data("chr9", gdt::interval{300, 400}, "geneB", gst::sorted);
        g.add_edge(a, b);
        g.add_edge(b, a);
        g.serialize(ss);
    }
    {
        ss.seekg(0);
        auto r = grove_t::deserialize(ss);
        EXPECT_EQ(r.edge_count(), 2u);

        auto ra = r.intersect(gdt::interval{100, 200}, "chr7");
        auto rb = r.intersect(gdt::interval{300, 400}, "chr9");
        ASSERT_EQ(ra.get_keys().size(), 1u);
        ASSERT_EQ(rb.get_keys().size(), 1u);

        auto na = r.get_neighbors(ra.get_keys()[0]);
        ASSERT_EQ(na.size(), 1u);
        EXPECT_EQ(na[0]->get_data(), "geneB");  // chr7 -> chr9

        auto nb = r.get_neighbors(rb.get_keys()[0]);
        ASSERT_EQ(nb.size(), 1u);
        EXPECT_EQ(nb[0]->get_data(), "geneA");  // chr9 -> chr7
    }
}

TEST(SerializationTest, ExternalOnlyGroveRoundTrip) {
    // No indexed keys at all -> external-block-begin == 0. The reader must
    // handle a grove made only of external blocks (no tree, no roots).
    using grove_t = gst::grove<gdt::interval, int>;
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    {
        grove_t g(3);
        auto* x = g.add_external_key(gdt::interval{1, 2}, 10);
        auto* y = g.add_external_key(gdt::interval{3, 4}, 20);
        g.add_edge(x, y);
        g.serialize(ss);
    }
    {
        ss.seekg(0);
        auto r = grove_t::deserialize(ss);
        EXPECT_EQ(r.external_vertex_count(), 2u);
        EXPECT_EQ(r.indexed_vertex_count(), 0u);
        EXPECT_EQ(r.edge_count(), 1u);
        EXPECT_TRUE(r.get_root_nodes().empty());
    }
}

TEST(SerializationTest, EmptyGroveRoundTrip) {
    // No indices and no external keys -> zero blocks. Directory-only stream.
    using grove_t = gst::grove<gdt::interval, int>;
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    {
        grove_t g(3);
        g.serialize(ss);
    }
    {
        ss.seekg(0);
        auto r = grove_t::deserialize(ss);
        EXPECT_EQ(r.vertex_count(), 0u);
        EXPECT_EQ(r.edge_count(), 0u);
        EXPECT_TRUE(r.get_root_nodes().empty());
        EXPECT_EQ(r.intersect(gdt::interval{1, 2}, "absent").get_keys().size(), 0u);
    }
}
