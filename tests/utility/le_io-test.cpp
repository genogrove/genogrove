/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <gtest/gtest.h>

#include <cstdint>
#include <limits>
#include <sstream>
#include <string>

#include <genogrove/utility/le_io.hpp>

namespace ggu = genogrove::utility;

namespace {

enum class small_enum : std::uint16_t { low = 1, high = 0xABCD };

template <typename T>
std::string written(T value) {
    std::ostringstream os(std::ios::binary);
    ggu::write_le(os, value);
    return os.str();
}

template <typename T>
T round_trip(T value) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    ggu::write_le(ss, value);
    T out{};
    ggu::read_le(ss, out);
    return out;
}

}  // namespace

// The bytes are fixed by the value alone, whatever the host's byte order.

TEST(le_io, uint32_is_little_endian) {
    EXPECT_EQ(written<std::uint32_t>(0x01020304u), std::string("\x04\x03\x02\x01", 4));
}

TEST(le_io, uint64_is_little_endian) {
    EXPECT_EQ(written<std::uint64_t>(0x0102030405060708ull),
              std::string("\x08\x07\x06\x05\x04\x03\x02\x01", 8));
}

TEST(le_io, negative_int_is_twos_complement) {
    EXPECT_EQ(written<std::int32_t>(-2), std::string("\xFE\xFF\xFF\xFF", 4));
}

TEST(le_io, single_byte_types_are_one_byte) {
    EXPECT_EQ(written<std::uint8_t>(0xAB), std::string("\xAB", 1));
    EXPECT_EQ(written<char>('+'), std::string("+", 1));
    EXPECT_EQ(written<bool>(true), std::string("\x01", 1));
}

TEST(le_io, enum_uses_its_underlying_width) {
    EXPECT_EQ(written(small_enum::high), std::string("\xCD\xAB", 2));
}

TEST(le_io, write_size_is_always_eight_bytes) {
    std::ostringstream os(std::ios::binary);
    ggu::write_size(os, 1);
    EXPECT_EQ(os.str(), std::string("\x01\0\0\0\0\0\0\0", 8));
}

TEST(le_io, write_size_round_trips_the_largest_value) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    ggu::write_size(ss, std::numeric_limits<std::size_t>::max());
    std::size_t out = 0;
    ggu::read_size(ss, out);
    EXPECT_EQ(out, std::numeric_limits<std::size_t>::max());
}

TEST(le_io, read_size_short_read_sets_failbit_and_zeroes_the_value) {
    std::stringstream ss(std::string("\x01\x02\x03", 3), std::ios::in | std::ios::binary);
    std::size_t out = 99;
    ggu::read_size(ss, out);
    EXPECT_FALSE(ss);
    EXPECT_EQ(out, 0u);
}

TEST(le_io, only_float_and_double_are_floating_point_scalars) {
    static_assert(ggu::wire_scalar<float>);
    static_assert(ggu::wire_scalar<double>);
    static_assert(!ggu::wire_scalar<long double>);
    SUCCEED();
}

TEST(le_io, floats_use_ieee754_bit_patterns) {
    EXPECT_EQ(written<double>(1.0), std::string("\0\0\0\0\0\0\xF0\x3F", 8));
    EXPECT_EQ(written<float>(1.0f), std::string("\0\0\x80\x3F", 4));
}

TEST(le_io, round_trips_extremes) {
    EXPECT_EQ(round_trip(std::numeric_limits<std::int32_t>::min()), std::numeric_limits<std::int32_t>::min());
    EXPECT_EQ(round_trip(std::numeric_limits<std::int64_t>::min()), std::numeric_limits<std::int64_t>::min());
    EXPECT_EQ(round_trip(std::numeric_limits<std::uint64_t>::max()), std::numeric_limits<std::uint64_t>::max());
    EXPECT_EQ(round_trip(small_enum::high), small_enum::high);
    EXPECT_EQ(round_trip(-0.5), -0.5);
    EXPECT_EQ(round_trip(true), true);
}

TEST(le_io, short_read_sets_failbit_and_zeroes_the_value) {
    std::stringstream ss(std::string("\x01\x02", 2), std::ios::in | std::ios::binary);
    std::uint32_t out = 99;
    ggu::read_le(ss, out);
    EXPECT_FALSE(ss);
    EXPECT_EQ(out, 0u);
}
