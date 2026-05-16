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

#include <genogrove/structure/grove/grove.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;
namespace fs = std::filesystem;

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

TEST(SerializationTest, FileStreamStateCleanWithTrailingData) {
    // Verify that trailing data after the grove is still readable,
    // confirming inflate_streambuf properly seeks back unconsumed bytes
    // and leaves the stream in a usable state.
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
