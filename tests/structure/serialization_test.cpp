/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

/*
 * Tests for grove serialization that are not key-type-dependent.
 * Key-type-specific roundtrip tests live in key_type_grove_test.hpp.
 */

#include <gtest/gtest.h>
#include <cstdint>
#include <chrono>
#include <cstring>
#include <filesystem>
#include <fstream>
#include <sstream>
#include <streambuf>
#include <string>
#include <type_traits>
#include <vector>

#include <genogrove/data_type/serialization_traits.hpp>
#include <genogrove/structure/grove/gg_block_format.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/grove_view.hpp>
#include <genogrove/structure/grove/zlib_streambuf.hpp>

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

// Append a POD's raw bytes to a byte buffer (little-endian on the test host,
// matching how the grove format writes counts).
template <typename T>
void put_pod(std::string& s, const T& v) {
    static_assert(std::is_trivially_copyable_v<T>, "put_pod needs a POD");
    const char* p = reinterpret_cast<const char*>(&v);
    s.append(p, sizeof(T));
}

// Start a grove stream (typed for grove<interval, int>): magic + type tag + order + num_indices. Callers append index
// entries / directory fields to craft a corrupt header for the DoS bounds.
std::string start_stream(std::uint32_t num_indices, int order = 3) {
    std::string s;
    s.append(gst::detail::grove_stream_magic.data(), gst::detail::grove_stream_magic.size());
    put_pod(s, gst::detail::make_stream_type_tag<gdt::interval, int, void>());
    put_pod<int>(s, order);
    put_pod<std::uint32_t>(s, num_indices);
    return s;
}

} // namespace

TEST(SerializationTest, FileStreamStateCleanAfterDeserialize) {
    // Regression test for #301: deserialize must leave the underlying ifstream
    // clean (no failbit). The original culprit was the whole-stream inflate
    // leaving eofbit+failbit set after a partial read at EOF; format 0.2 reads
    // each block from a length-prefixed buffer, but the clean-stream invariant
    // still holds and is pinned here.
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
    // Format 0.2 (block-structured) reads each block from an isolated buffer of
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
        for (size_t i = 0; i < static_cast<size_t>(N); ++i) {
            key_t* p = g.add_external_key(gdt::interval{10 + i, 11 + i}, static_cast<int>(i));
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

        // Reverse lookup must also survive the round trip — add_edge replay
        // on deserialize must rebuild the incidence index, not just the
        // forward edge list.
        auto in_neighbors = r.graph().get_in_neighbors(neighbors[0]);
        ASSERT_EQ(in_neighbors.size(), 1u);
        EXPECT_EQ(in_neighbors[0], res.get_keys()[0]);
        EXPECT_EQ(r.graph().in_degree(neighbors[0]), 1u);
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

        // Reverse lookups must resolve too — verifies the incidence index
        // (not just the forward edge list) survives serialize/deserialize.
        auto in_a = r.graph().get_in_neighbors(ra.get_keys()[0]);
        ASSERT_EQ(in_a.size(), 1u);
        EXPECT_EQ(in_a[0]->get_data(), "geneB");  // b -> a, seen from a's side

        auto in_b = r.graph().get_in_neighbors(rb.get_keys()[0]);
        ASSERT_EQ(in_b.size(), 1u);
        EXPECT_EQ(in_b[0]->get_data(), "geneA");  // a -> b, seen from b's side
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

// ===========================================================================
// #484 — file-controlled allocation counts must be bounded against the stream
// so a corrupt/malicious .gg throws runtime_error instead of OOMing. Each test
// crafts a tiny header whose count field is enormous; a correct reader rejects
// it near-instantly. (Pre-fix these forced multi-GB allocations.)
// ===========================================================================

TEST(SerializationDoSTest, HugeBlockCountRejected) {
    using grove_t = gst::grove<gdt::interval, int>;
    std::string bytes = start_stream(/*num_indices=*/0);
    put_pod<gst::detail::block_id>(bytes, 0xFFFFFFFFu);  // num_blocks
    put_pod<gst::detail::block_id>(bytes, 0u);           // ext_block_begin
    put_pod<std::uint64_t>(bytes, 0u);                   // leaf key count
    put_pod<std::uint64_t>(bytes, 0u);                   // external key count
    // No block data follows: 4 billion blocks cannot be backed by 0 bytes.
    std::stringstream ss(bytes, std::ios::in | std::ios::binary);
    EXPECT_THROW((void)grove_t::deserialize(ss), std::runtime_error);
}

TEST(SerializationDoSTest, HugeIndexCountRejected) {
    using grove_t = gst::grove<gdt::interval, int>;
    std::string bytes = start_stream(/*num_indices=*/0xFFFFFFFFu);
    // Nothing after the count: 4 billion index entries cannot be backed.
    std::stringstream ss(bytes, std::ios::in | std::ios::binary);
    EXPECT_THROW((void)grove_t::deserialize(ss), std::runtime_error);
}

TEST(SerializationDoSTest, HugeIndexNameLengthRejected) {
    using grove_t = gst::grove<gdt::interval, int>;
    std::string bytes = start_stream(/*num_indices=*/1);
    put_pod<std::uint32_t>(bytes, 0xFFFFFFFFu);  // name_len for the one index
    bytes.append(8, '\0');                       // padding so the index-count bound passes
    std::stringstream ss(bytes, std::ios::in | std::ios::binary);
    EXPECT_THROW((void)grove_t::deserialize(ss), std::runtime_error);
}

TEST(SerializationDoSTest, HugeStringLengthRejected) {
    // The std::string trait must not allocate a length-sized buffer before the
    // content is present. Seekable source → the bound applies.
    std::string bytes;
    put_pod<std::uint32_t>(bytes, 0xFFFFFFFFu);  // claimed string length
    bytes.append(4, 'x');                        // only 4 bytes of content
    std::stringstream ss(bytes, std::ios::in | std::ios::binary);
    EXPECT_THROW((void)gdt::serialization_traits<std::string>::deserialize(ss), std::runtime_error);
}

TEST(SerializationDoSTest, HugeCompressedBlockLengthRejected) {
    // A block's compressed length is file-controlled; a multi-GB clen with no
    // backing bytes must be rejected before comp_buf.resize allocates it.
    using grove_t = gst::grove<gdt::interval, int>;
    std::string bytes = start_stream(/*num_indices=*/0);
    put_pod<gst::detail::block_id>(bytes, 1u);           // num_blocks
    put_pod<gst::detail::block_id>(bytes, 1u);           // ext_block_begin (block 0 is a node)
    put_pod<std::uint64_t>(bytes, 0u);                   // leaf key count
    put_pod<std::uint64_t>(bytes, 0u);                   // external key count
    put_pod<std::uint64_t>(bytes, std::uint64_t{1} << 40);  // clen = 1 TiB, no data follows
    std::stringstream ss(bytes, std::ios::in | std::ios::binary);
    EXPECT_THROW((void)grove_t::deserialize(ss), std::runtime_error);
}

TEST(SerializationDoSTest, HugeExternalKeyCountRejected) {
    // An external block's key count is read from the (decompressed) block; a
    // count above the writer's per-block chunk cap is rejected before parsing.
    // The count is checked first, so the block body is just the count field.
    using grove_t = gst::grove<gdt::interval, int>;
    std::string payload;
    put_pod<std::uint32_t>(payload, gst::detail::max_external_keys_per_block + 1);
    std::string comp;
    gst::detail::block_deflater{}.compress(payload, comp);

    std::string bytes = start_stream(/*num_indices=*/0);
    put_pod<gst::detail::block_id>(bytes, 1u);           // num_blocks
    put_pod<gst::detail::block_id>(bytes, 0u);           // ext_block_begin = 0 -> block 0 is external
    put_pod<std::uint64_t>(bytes, 0u);                   // leaf key count
    put_pod<std::uint64_t>(bytes, 0u);                   // external key count
    put_pod<std::uint64_t>(bytes, static_cast<std::uint64_t>(comp.size()));  // clen
    bytes += comp;
    std::stringstream ss(bytes, std::ios::in | std::ios::binary);
    EXPECT_THROW((void)grove_t::deserialize(ss), std::runtime_error);
}

TEST(SerializationDoSTest, InflaterEnforcesOutputCap) {
    // A small compressed block that inflates far past the cap must throw rather
    // than materialize the full output (decompression-bomb guard).
    std::string payload(200000, 'A');  // highly compressible → tiny compressed size
    std::string compressed;
    gst::detail::block_deflater{}.compress(payload, compressed);
    ASSERT_LT(compressed.size(), payload.size());

    gst::detail::block_inflater inflater;
    std::string out;
    EXPECT_THROW(inflater.decompress(compressed.data(), compressed.size(), out, /*max_output=*/1024),
                 std::runtime_error);
    // With a sufficient cap it round-trips exactly.
    inflater.decompress(compressed.data(), compressed.size(), out, payload.size());
    EXPECT_EQ(out, payload);
}

TEST(SerializationTest, IncomingEdgeOrderPreservedAcrossRoundTrip) {
    // A target whose sources live in non-sequential block order: the on-disk
    // incoming section records the original insertion order, but add_edge()
    // replay in block-visitation order would scramble it without the reorder
    // step (#540).  Build a grove where insertion order ≠ block-id order, then
    // verify that both the eager grove and grove_view preserve the original
    // incoming-edge list order.
    using grove_t = gst::grove<gdt::interval, int>;
    using key_t = gdt::key<gdt::interval, int>;

    key_t* src_early = nullptr;
    key_t* src_late = nullptr;
    key_t* target = nullptr;
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    {
        grove_t g(4);
        // Insert sources so that early (inserted first) has a higher spatial
        // position than late (inserted second).  Both are on chr1 so they
        // share a single index tree; their leaf positions are determined by
        // interval start.
        src_late  = g.insert_data("chr1", gdt::interval{10, 20}, 1, gst::sorted);   // spatially first
        src_early = g.insert_data("chr1", gdt::interval{500, 600}, 2, gst::sorted); // spatially last
        target    = g.insert_data("chr1", gdt::interval{1000, 1100}, 3, gst::sorted);
        // Add edges in chronological order: early→target first, late→target second.
        g.add_edge(src_early, target);
        g.add_edge(src_late, target);

        // Pre-serialize: original insertion order.
        auto original_in = g.graph().get_in_edge_list(target);
        ASSERT_EQ(original_in.size(), 2u);
        EXPECT_EQ(original_in[0].source, src_early);
        EXPECT_EQ(original_in[1].source, src_late);

        g.serialize(ss);
    }

    // Eager deserialize — must preserve the original incoming order.
    {
        ss.seekg(0);
        auto r = grove_t::deserialize(ss);
        auto ra = r.intersect(gdt::interval{1000, 1100}, "chr1");
        ASSERT_EQ(ra.get_keys().size(), 1u);
        auto* tgt = ra.get_keys()[0];

        auto in = r.graph().get_in_edge_list(tgt);
        ASSERT_EQ(in.size(), 2u);
        EXPECT_EQ(in[0].source->get_data(), 2);  // src_early
        EXPECT_EQ(in[1].source->get_data(), 1);  // src_late
    }

    // grove_view — must also match.
    {
        fs::path path = fs::temp_directory_path() / "genogrove_inorder_test.gg";
        {
            ss.seekg(0);
            std::ofstream ofs(path, std::ios::binary);
            ofs << ss.rdbuf();
        }
        auto view = gst::grove_view<gdt::interval, int>::open(path.string());
        auto rv = view.intersect(gdt::interval{1000, 1100}, "chr1");
        ASSERT_EQ(rv.get_keys().size(), 1u);
        auto* tgt = rv.get_keys()[0];

        auto in = view.get_in_neighbors(tgt);
        ASSERT_EQ(in.size(), 2u);
        EXPECT_EQ(in[0]->get_data(), 2);  // src_early
        EXPECT_EQ(in[1]->get_data(), 1);  // src_late

        fs::remove(path);
    }
}

TEST(SerializationTest, ParallelEdgesPreserveDistinctMetadataAfterReorder) {
    // Two edges sharing both endpoints (parallel edges — e.g. distinct
    // transcript metadata linking the same exon pair, see link_if's own docs)
    // exercise find_edge()'s occurrence parameter: naive first-match-only
    // resolution would collapse both incoming refs onto the same edge,
    // duplicating one metadata value and silently dropping the other from the
    // target's incoming view (source's outgoing view stays correct either way,
    // since it's built directly from replay, not from reorder_incoming).
    using grove_t = gst::grove<gdt::interval, int, std::string>;
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    {
        grove_t g(4);
        auto* a = g.insert_data("chr1", gdt::interval{100, 200}, 1, gst::sorted);
        auto* t = g.insert_data("chr1", gdt::interval{300, 400}, 2, gst::sorted);
        g.add_edge(a, t, std::string{"first"});
        g.add_edge(a, t, std::string{"second"});
        g.serialize(ss);
    }

    ss.seekg(0);
    auto r = grove_t::deserialize(ss);
    auto ra = r.intersect(gdt::interval{100, 200}, "chr1");
    auto rt = r.intersect(gdt::interval{300, 400}, "chr1");
    ASSERT_EQ(ra.get_keys().size(), 1u);
    ASSERT_EQ(rt.get_keys().size(), 1u);

    // Target's incoming view: both edges present, distinct metadata, in order.
    auto in = r.graph().get_in_edge_list(rt.get_keys()[0]);
    ASSERT_EQ(in.size(), 2u);
    EXPECT_EQ(in[0].metadata, "first");
    EXPECT_EQ(in[1].metadata, "second");

    // Source's outgoing view: unaffected by the reorder step either way.
    auto out = r.graph().get_edge_list(ra.get_keys()[0]);
    ASSERT_EQ(out.size(), 2u);
    EXPECT_EQ(out[0].metadata, "first");
    EXPECT_EQ(out[1].metadata, "second");
}

TEST(SerializationTest, SelfLoopDoesNotDisturbOutgoingOrderAfterReorder) {
    // A self-loop occupies one shared incident slot (register_edge files it
    // once, under source==target==self) — it is simultaneously an outgoing
    // and an incoming entry for the same key. reorder_incoming's original
    // erase-then-append implementation always moved the incoming entries it
    // touched to the end of the bucket, which physically relocated a
    // self-loop relative to any *other* outgoing edge of the same key,
    // corrupting get_edge_list(target)'s outgoing order (caught in #545
    // review). The fix overwrites incoming slots in place instead.
    using grove_t = gst::grove<gdt::interval, int>;
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    {
        grove_t g(4);
        auto* t = g.insert_data("chr1", gdt::interval{100, 200}, 1, gst::sorted);
        auto* other = g.insert_data("chr1", gdt::interval{300, 400}, 2, gst::sorted);
        // Self-loop first, then an outgoing edge to another key — this
        // relative order is what get_edge_list(t) must reproduce.
        g.add_edge(t, t);
        g.add_edge(t, other);

        auto original_out = g.graph().get_edge_list(t);
        ASSERT_EQ(original_out.size(), 2u);
        EXPECT_EQ(original_out[0].target, t);      // self-loop first
        EXPECT_EQ(original_out[1].target, other);  // then t->other

        g.serialize(ss);
    }

    ss.seekg(0);
    auto r = grove_t::deserialize(ss);
    auto rt = r.intersect(gdt::interval{100, 200}, "chr1");
    ASSERT_EQ(rt.get_keys().size(), 1u);
    auto* tgt = rt.get_keys()[0];

    auto out = r.graph().get_edge_list(tgt);
    ASSERT_EQ(out.size(), 2u);
    EXPECT_EQ(out[0].target->get_data(), 1);  // self-loop (t itself) first
    EXPECT_EQ(out[1].target->get_data(), 2);  // then t->other

    // Incoming side (self-loop only) must also survive.
    auto in = r.graph().get_in_edge_list(tgt);
    ASSERT_EQ(in.size(), 1u);
    EXPECT_EQ(in[0].source->get_data(), 1);
}

TEST(SerializationTest, SelfLoopInterleavedWithAnotherSourceRoundTrips) {
    // A self-loop interleaved with another source targeting the same key: a
    // self-loop's shared incident slot can't satisfy an outgoing-order
    // constraint and an incoming-order constraint via positional overwrite
    // alone when the two don't already coincide (#546). Repro from the
    // issue: a->target, then target->target (self-loop), then
    // target->other, with `target` spatially first (block visited before
    // `a`'s block during replay) so the bug's precondition — block-visitation
    // order diverging from chronological order — actually holds.
    using grove_t = gst::grove<gdt::interval, int>;
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    {
        grove_t g(4);
        auto* target = g.insert_data("chr1", gdt::interval{10, 20}, 1, gst::sorted);    // spatially first
        auto* a      = g.insert_data("chr1", gdt::interval{500, 600}, 2, gst::sorted);  // spatially last
        auto* other  = g.insert_data("chr1", gdt::interval{1000, 1100}, 3, gst::sorted);
        g.add_edge(a, target);
        g.add_edge(target, target);  // self-loop
        g.add_edge(target, other);

        auto original_out = g.graph().get_edge_list(target);
        ASSERT_EQ(original_out.size(), 2u);
        EXPECT_EQ(original_out[0].target, target);  // self-loop first
        EXPECT_EQ(original_out[1].target, other);   // then target->other

        auto original_in = g.graph().get_in_edge_list(target);
        ASSERT_EQ(original_in.size(), 2u);
        EXPECT_EQ(original_in[0].source, a);        // a->target first
        EXPECT_EQ(original_in[1].source, target);   // then the self-loop

        g.serialize(ss);
    }

    ss.seekg(0);
    auto r = grove_t::deserialize(ss);
    auto rt = r.intersect(gdt::interval{10, 20}, "chr1");
    ASSERT_EQ(rt.get_keys().size(), 1u);
    auto* tgt = rt.get_keys()[0];

    auto out = r.graph().get_edge_list(tgt);
    ASSERT_EQ(out.size(), 2u);
    EXPECT_EQ(out[0].target->get_data(), 1);  // self-loop (target itself) first
    EXPECT_EQ(out[1].target->get_data(), 3);  // then target->other

    auto in = r.graph().get_in_edge_list(tgt);
    ASSERT_EQ(in.size(), 2u);
    EXPECT_EQ(in[0].source->get_data(), 2);  // a->target first
    EXPECT_EQ(in[1].source->get_data(), 1);  // then the self-loop
}

// ---- Type tag (#593) -------------------------------------------------------

namespace {

std::string write_interval_int_grove() {
    gst::grove<gdt::interval, int> g(3);
    g.insert_data("chr1", gdt::interval{1, 2}, 7, gst::sorted);
    std::stringstream ss;
    g.serialize(ss);
    return ss.str();
}

} // namespace

TEST(SerializationTest, TypeTagMismatchedKeyTypeThrowsNamingBoth) {
    std::stringstream ss(write_interval_int_grove());
    try {
        (void)gst::grove<gdt::genomic_coordinate, int>::deserialize(ss);
        FAIL() << "expected std::runtime_error";
    } catch (const std::runtime_error& e) {
        std::string msg = e.what();
        EXPECT_NE(msg.find("key type interval"), std::string::npos) << msg;
        EXPECT_NE(msg.find("key type genomic_coordinate"), std::string::npos) << msg;
    }
}

TEST(SerializationTest, TypeTagMismatchedDataPresenceThrows) {
    std::stringstream ss(write_interval_int_grove());
    EXPECT_THROW((void)gst::grove<gdt::interval>::deserialize(ss), std::runtime_error);
}

TEST(SerializationTest, TypeTagMismatchedEdgeDataPresenceThrows) {
    // CLI case: written with string edge metadata, read by a void-edge reader.
    std::stringstream ss(write_interval_int_grove());
    EXPECT_THROW((void)(gst::grove<gdt::interval, int, std::string>::deserialize(ss)),
                 std::runtime_error);
}

TEST(SerializationTest, TypeTagMismatchedViewOpenThrows) {
    auto path = fs::temp_directory_path() / "genogrove_type_tag_view_test.bin";
    {
        std::ofstream ofs(path, std::ios::binary);
        ofs << write_interval_int_grove();
    }
    EXPECT_THROW((void)(gst::grove_view<gdt::genomic_coordinate, int>::open(path.string())),
                 std::runtime_error);
    EXPECT_NO_THROW((void)(gst::grove_view<gdt::interval, int>::open(path.string())));
    fs::remove(path);
}

// ---- Structural validation of untrusted streams (#553, #555) ---------------

namespace {

// A grove stream split into its plain directory and inflated blocks, so a test
// can patch one block (or a directory field) and re-emit a stream.
struct split_stream {
    std::string dir;                      // magic .. directory counts, as written
    std::vector<std::string> blocks;      // inflated block payloads
    std::vector<std::size_t> root_id_at;  // byte offset of each index's root id in dir
    std::uint32_t num_blocks = 0;
    std::uint32_t ext_block_begin = 0;
};

template <typename T>
T get_pod(const std::string& s, std::size_t at) {
    T v;
    std::memcpy(&v, s.data() + at, sizeof(T));
    return v;
}

template <typename T>
void set_pod(std::string& s, std::size_t at, T v) {
    std::memcpy(s.data() + at, &v, sizeof(T));
}

split_stream split(const std::string& bytes) {
    split_stream out;
    std::size_t off = gst::detail::grove_stream_magic.size() + sizeof(gst::detail::stream_type_tag);
    off += sizeof(int);  // order
    const auto num_indices = get_pod<std::uint32_t>(bytes, off);
    off += sizeof(std::uint32_t);
    for (std::uint32_t i = 0; i < num_indices; ++i) {
        const auto name_len = get_pod<std::uint32_t>(bytes, off);
        off += sizeof(std::uint32_t) + name_len;
        out.root_id_at.push_back(off);
        off += sizeof(gst::detail::block_id);
    }
    out.num_blocks = get_pod<std::uint32_t>(bytes, off);
    out.ext_block_begin = get_pod<std::uint32_t>(bytes, off + sizeof(gst::detail::block_id));
    off += 2 * sizeof(gst::detail::block_id) + 2 * sizeof(std::uint64_t);
    out.dir = bytes.substr(0, off);

    gst::detail::block_inflater inflater;
    for (std::uint32_t b = 0; b < out.num_blocks; ++b) {
        const auto clen = get_pod<std::uint64_t>(bytes, off);
        off += sizeof(std::uint64_t);
        std::string raw;
        inflater.decompress(bytes.data() + off, static_cast<std::size_t>(clen), raw);
        out.blocks.push_back(std::move(raw));
        off += static_cast<std::size_t>(clen);
    }
    return out;
}

std::string join(const split_stream& s) {
    std::string out = s.dir;
    gst::detail::block_deflater deflater;
    std::string comp;
    for (const auto& raw : s.blocks) {
        deflater.compress(raw, comp);
        const std::uint64_t clen = comp.size();
        put_pod(out, clen);
        out += comp;
    }
    return out;
}

bool is_leaf_block(const std::string& blk) {
    return (get_pod<std::uint32_t>(blk, 0) & 0x80000000u) != 0;
}

std::uint32_t key_count(const std::string& blk) {
    return get_pod<std::uint32_t>(blk, 0) & 0x7FFFFFFFu;
}

// Serialized size of one key of grove<interval, int> (value + data).
std::size_t key_bytes() {
    std::ostringstream o;
    gdt::interval{1, 2}.serialize(o);
    gdt::serializer<int>::write(o, 0);
    return o.str().size();
}

// Internal block: packed, keys, child count, child ids (nothing after them).
std::uint32_t child_count(const std::string& blk) {
    return static_cast<std::uint32_t>((blk.size() - 2 * sizeof(std::uint32_t) - key_count(blk) * key_bytes()) /
                                      sizeof(gst::detail::block_id));
}

std::size_t child_id_at(const std::string& blk, std::uint32_t i) {
    return blk.size() - sizeof(gst::detail::block_id) * (child_count(blk) - i);
}

// Leaf block: packed, keys, next id, then edge lists.
std::size_t next_id_at(const std::string& blk) {
    return sizeof(std::uint32_t) + key_count(blk) * key_bytes();
}

// Order-3 tree with several levels so internal blocks have >= 2 children.
std::string write_multilevel_grove(bool two_indices = false) {
    gst::grove<gdt::interval, int> g(3);
    for (std::size_t i = 0; i < 40; ++i) {
        g.insert_data("chr1", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i), gst::sorted);
        if (two_indices) {
            g.insert_data("chr2", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i), gst::sorted);
        }
    }
    std::stringstream ss;
    g.serialize(ss);
    return ss.str();
}

// First internal block with at least two children; ASSERTs the layout the
// patch helpers rely on.
std::uint32_t find_internal(const split_stream& s) {
    for (std::uint32_t b = 0; b < s.ext_block_begin; ++b) {
        if (!is_leaf_block(s.blocks[b]) && child_count(s.blocks[b]) >= 2) {
            const auto first = get_pod<std::uint32_t>(s.blocks[b], child_id_at(s.blocks[b], 0));
            EXPECT_GT(first, b) << "layout assumption: child ids follow the parent";
            EXPECT_LT(first, s.num_blocks);
            return b;
        }
    }
    ADD_FAILURE() << "no internal block with two children";
    return 0;
}

// First leaf block; ADD_FAILUREs if the stream has none.
std::uint32_t find_first_leaf(const split_stream& s) {
    for (std::uint32_t b = 0; b < s.ext_block_begin; ++b) {
        if (is_leaf_block(s.blocks[b])) {
            return b;
        }
    }
    ADD_FAILURE() << "no leaf block";
    return 0;
}

using grove_ii = gst::grove<gdt::interval, int>;

void expect_rejected(const split_stream& s) {
    std::stringstream ss(join(s));
    EXPECT_THROW((void)grove_ii::deserialize(ss), std::runtime_error);
}

}  // namespace

TEST(SerializationStructureTest, UntamperedRebuildRoundTrips) {
    // Guards the split/join helpers: an unpatched stream must still load.
    std::stringstream ss(join(split(write_multilevel_grove())));
    auto g = grove_ii::deserialize(ss);
    EXPECT_EQ(g.intersect(gdt::interval{0, 5}, "chr1").get_keys().size(), 1u);
}

TEST(SerializationStructureTest, SharedChildBlockRejected) {
    auto s = split(write_multilevel_grove());
    const auto b = find_internal(s);
    auto& blk = s.blocks[b];
    set_pod(blk, child_id_at(blk, 1), get_pod<std::uint32_t>(blk, child_id_at(blk, 0)));
    expect_rejected(s);
}

TEST(SerializationStructureTest, SelfReferencingChildRejected) {
    auto s = split(write_multilevel_grove());
    const auto b = find_internal(s);
    set_pod(s.blocks[b], child_id_at(s.blocks[b], 0), b);
    expect_rejected(s);
}

TEST(SerializationStructureTest, ChildPointingBackToRootRejected) {
    auto s = split(write_multilevel_grove());
    const auto b = find_internal(s);
    auto& blk = s.blocks[b];
    set_pod(blk, child_id_at(blk, child_count(blk) - 1), std::uint32_t{0});
    expect_rejected(s);
}

TEST(SerializationStructureTest, LeafNextPointingAtInternalNodeRejected) {
    auto s = split(write_multilevel_grove());
    const auto leaf = find_first_leaf(s);
    set_pod(s.blocks[leaf], next_id_at(s.blocks[leaf]), std::uint32_t{0});  // block 0 is the internal root
    expect_rejected(s);
}

TEST(SerializationStructureTest, LeafNextPointingBackwardRejected) {
    auto s = split(write_multilevel_grove());
    const auto leaf = find_first_leaf(s);
    set_pod(s.blocks[leaf], next_id_at(s.blocks[leaf]), leaf);  // a leaf that is its own successor
    expect_rejected(s);
}

TEST(SerializationStructureTest, GroveAfterManyRemovalsStillRoundTrips) {
    // Merges and borrows rewire the leaf chain and parents; the structural checks
    // must still accept everything serialize() writes.
    grove_ii g(3);
    std::vector<gdt::key<gdt::interval, int>*> keys;
    for (std::size_t i = 0; i < 60; ++i) {
        keys.push_back(g.insert_data("chr1", gdt::interval{i * 10, i * 10 + 5}, static_cast<int>(i), gst::sorted));
    }
    for (std::size_t i = 0; i < keys.size(); ++i) {
        if (i % 4 != 0) {
            ASSERT_TRUE(g.remove_key("chr1", keys[i]));
        }
    }
    std::stringstream ss;
    g.serialize(ss);
    auto r = grove_ii::deserialize(ss);
    EXPECT_EQ(r.intersect(gdt::interval{0, 1000}, "chr1").get_keys().size(), 15u);
}

TEST(SerializationStructureTest, DuplicateIndexRootRejected) {
    auto s = split(write_multilevel_grove(/*two_indices=*/true));
    ASSERT_EQ(s.root_id_at.size(), 2u);
    set_pod(s.dir, s.root_id_at[1], get_pod<std::uint32_t>(s.dir, s.root_id_at[0]));
    expect_rejected(s);
}

TEST(SerializationStructureTest, RootInsideAnotherTreeRejected) {
    auto s = split(write_multilevel_grove());
    const auto root_child = get_pod<std::uint32_t>(s.blocks[0], child_id_at(s.blocks[0], 0));
    set_pod(s.dir, s.root_id_at[0], root_child);
    expect_rejected(s);
}

// ---- grove_view::open() on corrupt input (#555) ----------------------------

namespace {

struct view_file {
    // unique per instance so overlapping test processes cannot collide
    fs::path path = fs::temp_directory_path() /
                    ("genogrove_view_corrupt_" +
                     std::to_string(std::chrono::steady_clock::now().time_since_epoch().count()) + ".gg");
    explicit view_file(const std::string& bytes) {
        std::ofstream ofs(path, std::ios::binary);
        ofs << bytes;
    }
    ~view_file() { std::error_code ec; fs::remove(path, ec); }
};

using view_ii = gst::grove_view<gdt::interval, int>;

// open() plus a query: some corruption (a damaged zlib stream) only surfaces
// when the block is loaded, not while open() scans the block lengths.
void open_and_query(const std::string& bytes) {
    view_file f(bytes);
    auto v = view_ii::open(f.path.string());
    (void)v.intersect(gdt::interval{0, 1000}, "chr1");
}

}  // namespace

TEST(GroveViewCorruptTest, BadMagicRejected) {
    auto bytes = write_multilevel_grove();
    bytes[0] ^= 0x7F;
    view_file f(bytes);
    EXPECT_THROW((void)view_ii::open(f.path.string()), std::runtime_error);
}

TEST(GroveViewCorruptTest, EveryTruncationOfTheDirectoryRejected) {
    const auto bytes = write_multilevel_grove();
    const auto dir_len = split(bytes).dir.size();
    for (std::size_t len = 0; len < dir_len; ++len) {
        view_file f(bytes.substr(0, len));
        EXPECT_THROW((void)view_ii::open(f.path.string()), std::runtime_error) << "prefix length " << len;
    }
}

TEST(GroveViewCorruptTest, ExternalBlockBeginPastBlockCountRejected) {
    auto bytes = write_multilevel_grove();
    const auto dir_len = split(bytes).dir.size();
    // directory tail: num_blocks, ext_block_begin, leaf count (8), external count (8)
    set_pod(bytes, dir_len - 2 * sizeof(std::uint64_t) - sizeof(std::uint32_t), std::uint32_t{0xFFFFFFFFu});
    view_file f(bytes);
    EXPECT_THROW((void)view_ii::open(f.path.string()), std::runtime_error);
}

TEST(GroveViewCorruptTest, HugeBlockCountRejected) {
    auto bytes = write_multilevel_grove();
    const auto dir_len = split(bytes).dir.size();
    set_pod(bytes, dir_len - 2 * sizeof(std::uint64_t) - 2 * sizeof(std::uint32_t), std::uint32_t{0xFFFFFFF0u});
    view_file f(bytes);
    EXPECT_THROW((void)view_ii::open(f.path.string()), std::runtime_error);
}

TEST(GroveViewCorruptTest, OversizedBlockLengthRejected) {
    auto bytes = write_multilevel_grove();
    const auto dir_len = split(bytes).dir.size();
    // The first block's length prefix now runs past the file, so open() fails
    // while scanning the (wrongly placed) next length prefix.
    set_pod(bytes, dir_len, std::uint64_t{0x00FFFFFFFFFFFFFFull});
    EXPECT_THROW(open_and_query(bytes), std::runtime_error);
}

TEST(GroveViewCorruptTest, CorruptBlockPayloadRejected) {
    auto bytes = write_multilevel_grove();
    const auto dir_len = split(bytes).dir.size();
    for (std::size_t i = dir_len + sizeof(std::uint64_t); i < dir_len + sizeof(std::uint64_t) + 8; ++i) {
        bytes[i] ^= 0x5A;  // damage the first block's zlib stream
    }
    EXPECT_THROW(open_and_query(bytes), std::runtime_error);
}

// ---- grove_view on cyclic or misordered block ids --------------------------

TEST(GroveViewCorruptTest, SelfReferencingChildRejected) {
    auto s = split(write_multilevel_grove());
    const auto b = find_internal(s);
    set_pod(s.blocks[b], child_id_at(s.blocks[b], 0), b);
    EXPECT_THROW(open_and_query(join(s)), std::runtime_error);
}

TEST(GroveViewCorruptTest, RepeatedChildBlockRejected) {
    auto s = split(write_multilevel_grove());
    const auto b = find_internal(s);
    auto& blk = s.blocks[b];
    set_pod(blk, child_id_at(blk, 1), get_pod<std::uint32_t>(blk, child_id_at(blk, 0)));
    EXPECT_THROW(open_and_query(join(s)), std::runtime_error);
}

TEST(GroveViewCorruptTest, DescendingChildBlocksRejected) {
    auto s = split(write_multilevel_grove());
    const auto b = find_internal(s);
    auto& blk = s.blocks[b];
    const auto first = get_pod<std::uint32_t>(blk, child_id_at(blk, 0));
    const auto second = get_pod<std::uint32_t>(blk, child_id_at(blk, 1));
    set_pod(blk, child_id_at(blk, 0), second);  // both still follow the parent, only their order is wrong
    set_pod(blk, child_id_at(blk, 1), first);
    EXPECT_THROW(open_and_query(join(s)), std::runtime_error);
}

TEST(GroveViewCorruptTest, ChildPointingBackToRootRejected) {
    auto s = split(write_multilevel_grove());
    const auto b = find_internal(s);
    auto& blk = s.blocks[b];
    set_pod(blk, child_id_at(blk, child_count(blk) - 1), std::uint32_t{0});
    EXPECT_THROW(open_and_query(join(s)), std::runtime_error);
}

TEST(GroveViewCorruptTest, LeafNextPointingBackwardRejected) {
    auto s = split(write_multilevel_grove());
    const auto leaf = find_first_leaf(s);
    set_pod(s.blocks[leaf], next_id_at(s.blocks[leaf]), leaf);  // a leaf that is its own successor
    EXPECT_THROW(open_and_query(join(s)), std::runtime_error);
}

TEST(GroveViewCorruptTest, LeafNextPointingAtInternalNodeRejected) {
    auto s = split(write_multilevel_grove());
    const auto first_leaf = find_first_leaf(s);
    // an internal block after the leaf, so only the leaf check can reject it
    std::uint32_t later_internal = s.ext_block_begin;
    for (std::uint32_t b = first_leaf + 1; b < s.ext_block_begin; ++b) {
        if (!is_leaf_block(s.blocks[b])) {
            later_internal = b;
            break;
        }
    }
    ASSERT_LT(later_internal, s.ext_block_begin);
    set_pod(s.blocks[first_leaf], next_id_at(s.blocks[first_leaf]), later_internal);
    EXPECT_THROW(open_and_query(join(s)), std::runtime_error);
}

TEST(GroveViewCorruptTest, UntamperedStreamStillQueries) {
    // Guards the block-id checks against rejecting what serialize() writes.
    view_file f(join(split(write_multilevel_grove())));
    auto v = view_ii::open(f.path.string());
    EXPECT_EQ(v.intersect(gdt::interval{0, 1000}, "chr1").get_keys().size(), 40u);
}
