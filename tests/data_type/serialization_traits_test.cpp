/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <sstream>
#include <cstdint>
#include <limits>

// Genogrove
#include <genogrove/data_type/serialization_traits.hpp>

namespace gdt = genogrove::data_type;

// ==========================================
// Trivially copyable type round-trips
// ==========================================

TEST(serialization_traits_test, int_roundtrip) {
    int original = 42;
    std::stringstream ss;
    gdt::serialization_traits<int>::serialize(ss, original);
    int result = gdt::serialization_traits<int>::deserialize(ss);
    EXPECT_EQ(original, result);
}

TEST(serialization_traits_test, double_roundtrip) {
    double original = 3.14159265358979;
    std::stringstream ss;
    gdt::serialization_traits<double>::serialize(ss, original);
    double result = gdt::serialization_traits<double>::deserialize(ss);
    EXPECT_DOUBLE_EQ(original, result);
}

TEST(serialization_traits_test, size_t_roundtrip) {
    size_t original = std::numeric_limits<size_t>::max();
    std::stringstream ss;
    gdt::serialization_traits<size_t>::serialize(ss, original);
    size_t result = gdt::serialization_traits<size_t>::deserialize(ss);
    EXPECT_EQ(original, result);
}

TEST(serialization_traits_test, uint32_t_roundtrip) {
    uint32_t original = 0xDEADBEEF;
    std::stringstream ss;
    gdt::serialization_traits<uint32_t>::serialize(ss, original);
    uint32_t result = gdt::serialization_traits<uint32_t>::deserialize(ss);
    EXPECT_EQ(original, result);
}

// ==========================================
// std::string specialization
// ==========================================

TEST(serialization_traits_test, string_roundtrip) {
    std::string original = "hello world";
    std::stringstream ss;
    gdt::serialization_traits<std::string>::serialize(ss, original);
    std::string result = gdt::serialization_traits<std::string>::deserialize(ss);
    EXPECT_EQ(original, result);
}

TEST(serialization_traits_test, string_empty) {
    std::string original;
    std::stringstream ss;
    gdt::serialization_traits<std::string>::serialize(ss, original);
    std::string result = gdt::serialization_traits<std::string>::deserialize(ss);
    EXPECT_EQ(original, result);
    EXPECT_TRUE(result.empty());
}

TEST(serialization_traits_test, string_with_nulls) {
    std::string original("hello\0world", 11);
    std::stringstream ss;
    gdt::serialization_traits<std::string>::serialize(ss, original);
    std::string result = gdt::serialization_traits<std::string>::deserialize(ss);
    EXPECT_EQ(original, result);
    EXPECT_EQ(result.size(), 11u);
}

// ==========================================
// Stream error handling
// ==========================================

TEST(serialization_traits_test, serialize_to_bad_stream) {
    std::ostringstream os;
    os.setstate(std::ios::badbit);
    EXPECT_THROW(gdt::serialization_traits<int>::serialize(os, 42), std::runtime_error);
}

TEST(serialization_traits_test, deserialize_from_empty_stream) {
    std::istringstream is;
    EXPECT_THROW(gdt::serialization_traits<int>::deserialize(is), std::runtime_error);
}

TEST(serialization_traits_test, deserialize_from_truncated_stream) {
    // Write only 2 bytes, then try to read a 4-byte int
    std::stringstream ss;
    char buf[2] = {0x01, 0x02};
    ss.write(buf, 2);
    EXPECT_THROW(gdt::serialization_traits<int>::deserialize(ss), std::runtime_error);
}

TEST(serialization_traits_test, string_deserialize_truncated_content) {
    // Write a length header claiming 100 bytes, but provide none
    std::stringstream ss;
    uint32_t fake_length = 100;
    ss.write(reinterpret_cast<const char*>(&fake_length), sizeof(fake_length));
    EXPECT_THROW(gdt::serialization_traits<std::string>::deserialize(ss), std::runtime_error);
}

TEST(serialization_traits_test, string_deserialize_truncated_header) {
    // Write only 2 bytes of a 4-byte length header
    std::stringstream ss;
    char buf[2] = {0x05, 0x00};
    ss.write(buf, 2);
    EXPECT_THROW(gdt::serialization_traits<std::string>::deserialize(ss), std::runtime_error);
}

// ==========================================
// serializer<T> dispatch
// ==========================================

// Custom type with member serialize/static deserialize
struct custom_serializable {
    int value;

    void serialize(std::ostream& os) const {
        os.write(reinterpret_cast<const char*>(&value), sizeof(value));
    }

    [[nodiscard]] static custom_serializable deserialize(std::istream& is) {
        custom_serializable obj{};
        is.read(reinterpret_cast<char*>(&obj.value), sizeof(obj.value));
        return obj;
    }
};

TEST(serialization_traits_test, serializer_dispatches_to_member_methods) {
    custom_serializable original{99};
    std::stringstream ss;
    gdt::serializer<custom_serializable>::write(ss, original);
    auto result = gdt::serializer<custom_serializable>::read(ss);
    EXPECT_EQ(original.value, result.value);
}

TEST(serialization_traits_test, serializer_dispatches_to_traits_for_trivial) {
    int original = 123;
    std::stringstream ss;
    gdt::serializer<int>::write(ss, original);
    int result = gdt::serializer<int>::read(ss);
    EXPECT_EQ(original, result);
}

TEST(serialization_traits_test, serializer_dispatches_to_string_traits) {
    std::string original = "dispatch test";
    std::stringstream ss;
    gdt::serializer<std::string>::write(ss, original);
    std::string result = gdt::serializer<std::string>::read(ss);
    EXPECT_EQ(original, result);
}

// ==========================================
// Multiple values in sequence
// ==========================================

TEST(serialization_traits_test, multiple_values_roundtrip) {
    std::stringstream ss;
    gdt::serializer<int>::write(ss, 1);
    gdt::serializer<std::string>::write(ss, "hello");
    gdt::serializer<double>::write(ss, 2.718);
    gdt::serializer<std::string>::write(ss, "");

    EXPECT_EQ(gdt::serializer<int>::read(ss), 1);
    EXPECT_EQ(gdt::serializer<std::string>::read(ss), "hello");
    EXPECT_DOUBLE_EQ(gdt::serializer<double>::read(ss), 2.718);
    EXPECT_EQ(gdt::serializer<std::string>::read(ss), "");
}