/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <sstream>
#include <string>

// genogrove
#include <genogrove/data_type/key.hpp>
#include <genogrove/data_type/interval.hpp>

namespace gdt = genogrove::data_type;

// ============================================================================
// Test: Key without data (void specialization)
// ============================================================================

TEST(key_test_modern, constructor_without_data) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval> key(intvl);

    EXPECT_EQ(key.get_value(), intvl);
    EXPECT_FALSE(key.has_data());
}

TEST(key_test_modern, set_value_without_data) {
    gdt::interval intvl1(10, 20);
    gdt::key<gdt::interval> key(intvl1);

    gdt::interval intvl2(30, 40);
    key.set_value(intvl2);

    EXPECT_EQ(key.get_value(), intvl2);
}

TEST(key_test_modern, to_string_without_data) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval> key(intvl);

    std::string str = key.to_string();
    EXPECT_EQ(str, "[10,20]");
}

// ============================================================================
// Test: Key with data (int)
// ============================================================================

TEST(key_test_modern, constructor_with_int_data) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, int> key(intvl, 42);

    EXPECT_EQ(key.get_value(), intvl);
    EXPECT_TRUE(key.has_data());
    EXPECT_EQ(key.get_data(), 42);
}

TEST(key_test_modern, set_data_int) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, int> key(intvl, 42);

    key.set_data(99);
    EXPECT_EQ(key.get_data(), 99);
}

TEST(key_test_modern, mutable_data_access) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, int> key(intvl, 42);

    // Modify through mutable reference
    key.get_data() = 100;
    EXPECT_EQ(key.get_data(), 100);
}

// ============================================================================
// Test: Key with data (double)
// ============================================================================

TEST(key_test_modern, constructor_with_double_data) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, double> key(intvl, 3.14159);

    EXPECT_EQ(key.get_value(), intvl);
    EXPECT_DOUBLE_EQ(key.get_data(), 3.14159);
}

// ============================================================================
// Test: Key with data (std::string)
// ============================================================================

TEST(key_test_modern, constructor_with_string_data) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, std::string> key(intvl, "hello world");

    EXPECT_EQ(key.get_value(), intvl);
    EXPECT_EQ(key.get_data(), "hello world");
}

TEST(key_test_modern, string_data_modification) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, std::string> key(intvl, "original");

    key.set_data("modified");
    EXPECT_EQ(key.get_data(), "modified");
}

// ============================================================================
// Test: Custom struct as data
// ============================================================================

struct CustomData {
    int id;
    double score;

    bool operator==(const CustomData& other) const {
        return id == other.id && score == other.score;
    }
};

TEST(key_test_modern, constructor_with_custom_struct) {
    gdt::interval intvl(10, 20);
    CustomData data{42, 3.14};
    gdt::key<gdt::interval, CustomData> key(intvl, data);

    EXPECT_EQ(key.get_value(), intvl);
    EXPECT_EQ(key.get_data().id, 42);
    EXPECT_DOUBLE_EQ(key.get_data().score, 3.14);
}

// ============================================================================
// Test: Copy and Move semantics
// ============================================================================

TEST(key_test_modern, copy_constructor) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, int> key1(intvl, 42);
    gdt::key<gdt::interval, int> key2(key1);

    EXPECT_EQ(key2.get_value(), intvl);
    EXPECT_EQ(key2.get_data(), 42);
}

TEST(key_test_modern, move_constructor) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, std::string> key1(intvl, "moveable");
    gdt::key<gdt::interval, std::string> key2(std::move(key1));

    EXPECT_EQ(key2.get_value(), intvl);
    EXPECT_EQ(key2.get_data(), "moveable");
}

TEST(key_test_modern, copy_assignment) {
    gdt::interval intvl1(10, 20);
    gdt::interval intvl2(30, 40);
    gdt::key<gdt::interval, int> key1(intvl1, 42);
    gdt::key<gdt::interval, int> key2(intvl2, 99);

    key2 = key1;
    EXPECT_EQ(key2.get_value(), intvl1);
    EXPECT_EQ(key2.get_data(), 42);
}

TEST(key_test_modern, move_assignment) {
    gdt::interval intvl1(10, 20);
    gdt::interval intvl2(30, 40);
    gdt::key<gdt::interval, std::string> key1(intvl1, "moveable");
    gdt::key<gdt::interval, std::string> key2(intvl2, "original");

    key2 = std::move(key1);
    EXPECT_EQ(key2.get_value(), intvl1);
    EXPECT_EQ(key2.get_data(), "moveable");
}

// ============================================================================
// Test: Equality comparison
// ============================================================================

TEST(key_test_modern, equality_without_data) {
    gdt::interval intvl1(10, 20);
    gdt::interval intvl2(10, 20);
    gdt::interval intvl3(30, 40);

    gdt::key<gdt::interval> key1(intvl1);
    gdt::key<gdt::interval> key2(intvl2);
    gdt::key<gdt::interval> key3(intvl3);

    EXPECT_EQ(key1, key2);
    EXPECT_NE(key1, key3);
}

TEST(key_test_modern, equality_with_data) {
    gdt::interval intvl1(10, 20);
    gdt::interval intvl2(10, 20);

    gdt::key<gdt::interval, int> key1(intvl1, 42);
    gdt::key<gdt::interval, int> key2(intvl2, 42);
    gdt::key<gdt::interval, int> key3(intvl1, 99);

    EXPECT_EQ(key1, key2);  // Same interval and data
    EXPECT_NE(key1, key3);  // Same interval, different data
}

// ============================================================================
// Test: Serialization (POD types)
// ============================================================================

TEST(key_test_modern, serialize_deserialize_without_data) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval> key_original(intvl);

    // Serialize
    std::ostringstream oss;
    key_original.serialize(oss);

    // Deserialize
    std::istringstream iss(oss.str());
    auto key_restored = gdt::key<gdt::interval>::deserialize(iss);

    EXPECT_EQ(key_restored.get_value(), key_original.get_value());
}

TEST(key_test_modern, serialize_deserialize_with_int) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, int> key_original(intvl, 42);

    // Serialize
    std::ostringstream oss;
    key_original.serialize(oss);

    // Deserialize
    std::istringstream iss(oss.str());
    auto key_restored = gdt::key<gdt::interval, int>::deserialize(iss);

    EXPECT_EQ(key_restored.get_value(), key_original.get_value());
    EXPECT_EQ(key_restored.get_data(), key_original.get_data());
}

TEST(key_test_modern, serialize_deserialize_with_double) {
    gdt::interval intvl(15, 25);
    gdt::key<gdt::interval, double> key_original(intvl, 3.14159);

    // Serialize
    std::ostringstream oss;
    key_original.serialize(oss);

    // Deserialize
    std::istringstream iss(oss.str());
    auto key_restored = gdt::key<gdt::interval, double>::deserialize(iss);

    EXPECT_EQ(key_restored.get_value(), key_original.get_value());
    EXPECT_DOUBLE_EQ(key_restored.get_data(), key_original.get_data());
}

TEST(key_test_modern, serialize_deserialize_with_string) {
    gdt::interval intvl(10, 20);
    gdt::key<gdt::interval, std::string> key_original(intvl, "test string");

    // Serialize
    std::ostringstream oss;
    key_original.serialize(oss);

    // Deserialize
    std::istringstream iss(oss.str());
    auto key_restored = gdt::key<gdt::interval, std::string>::deserialize(iss);

    EXPECT_EQ(key_restored.get_value(), key_original.get_value());
    EXPECT_EQ(key_restored.get_data(), key_original.get_data());
}

TEST(key_test_modern, serialize_deserialize_custom_struct) {
    gdt::interval intvl(10, 20);
    CustomData data{42, 3.14};
    gdt::key<gdt::interval, CustomData> key_original(intvl, data);

    // Serialize
    std::ostringstream oss;
    key_original.serialize(oss);

    // Deserialize
    std::istringstream iss(oss.str());
    auto key_restored = gdt::key<gdt::interval, CustomData>::deserialize(iss);

    EXPECT_EQ(key_restored.get_value(), key_original.get_value());
    EXPECT_EQ(key_restored.get_data(), key_original.get_data());
}

// ============================================================================
// Test: Type Aliases
// ============================================================================

TEST(key_test_modern, type_alias_without_data) {
    gdt::interval intvl(10, 20);
    gdt::key_without_data<gdt::interval> key(intvl);

    EXPECT_EQ(key.get_value(), intvl);
    EXPECT_FALSE(key.has_data());
}

TEST(key_test_modern, type_alias_with_data) {
    gdt::interval intvl(10, 20);
    gdt::key_with_data<gdt::interval, int> key(intvl, 42);

    EXPECT_EQ(key.get_value(), intvl);
    EXPECT_TRUE(key.has_data());
    EXPECT_EQ(key.get_data(), 42);
}

// ============================================================================
// Test: Multiple keys in containers
// ============================================================================

TEST(key_test_modern, vector_of_keys) {
    std::vector<gdt::key<gdt::interval, int>> keys;

    keys.emplace_back(gdt::interval(10, 20), 1);
    keys.emplace_back(gdt::interval(30, 40), 2);
    keys.emplace_back(gdt::interval(50, 60), 3);

    ASSERT_EQ(keys.size(), 3);
    EXPECT_EQ(keys[0].get_data(), 1);
    EXPECT_EQ(keys[1].get_data(), 2);
    EXPECT_EQ(keys[2].get_data(), 3);
}

// ============================================================================
// Test: Compile-time properties
// ============================================================================

TEST(key_test_modern, compile_time_has_data) {
    using KeyWithoutData = gdt::key<gdt::interval>;
    using KeyWithData = gdt::key<gdt::interval, int>;

    EXPECT_FALSE(KeyWithoutData::has_data());
    EXPECT_TRUE(KeyWithData::has_data());
}
