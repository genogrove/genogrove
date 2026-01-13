/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Gtest
#include <gtest/gtest.h>

// genogrove
#include <genogrove/data_type/key.hpp>
#include <genogrove/data_type/interval.hpp>

namespace gdt = genogrove::data_type;

// ==========================================
// Test Fixture for common setup
// ==========================================

class IntervalKeyTest : public ::testing::Test {
protected:
    gdt::interval intvl1{10, 20};
    gdt::interval intvl2{30, 40};
    gdt::interval intvl3{15, 25};
};

// ==========================================
// Custom test data struct
// ==========================================

struct custom_data {
    int id;
    double score;

    bool operator==(const custom_data& other) const {
        return id == other.id && score == other.score;
    }
};

// ==========================================================
// Helper for serialization/deserialization round-trip tests
// ==========================================================

template<typename KeyType>
void test_serialization_roundtrip(const KeyType& original) {
    std::ostringstream oss;
    original.serialize(oss);

    std::istringstream iss(oss.str());
    auto restored = KeyType::deserialize(iss);

    EXPECT_EQ(restored.get_value(), original.get_value());
    if constexpr (restored.has_data()) {
        EXPECT_EQ(restored.get_data(), original.get_data());
    }
}

// ==========================================
// Keys without data
// ==========================================

TEST_F(IntervalKeyTest, ConstructorWithoutData) {
    gdt::key<gdt::interval> key(intvl1);

    EXPECT_EQ(intvl1, key.get_value());
    EXPECT_FALSE(key.has_data());
}

TEST_F(IntervalKeyTest, SetValueWithoutData) {
    gdt::key<gdt::interval> key(intvl1);
    key.set_value(intvl2);

    EXPECT_EQ(intvl2, key.get_value());
}

TEST_F(IntervalKeyTest, ToStringWithoutData) {
    gdt::key<gdt::interval> key(intvl1);

    EXPECT_EQ("[10,20]", key.to_string());
}

// ==========================================
// Keys with POD data
// ==========================================

TEST_F(IntervalKeyTest, ConstructorWithIntData) {
    gdt::key<gdt::interval, int> key(intvl1, 42);

    EXPECT_EQ(key.get_value(), intvl1);
    EXPECT_TRUE(key.has_data());
    EXPECT_EQ(42, key.get_data());
}

TEST_F(IntervalKeyTest, SetAndMutateIntData) {
    gdt::key<gdt::interval, int> key(intvl1, 42);

    key.set_data(99);
    EXPECT_EQ(99, key.get_data());

    key.get_data() = 100;
    EXPECT_EQ(100, key.get_data());
}

TEST_F(IntervalKeyTest, ConstructorWithDoubleData) {
    gdt::key<gdt::interval, double> key(intvl1, 3.14159);

    EXPECT_EQ(key.get_value(), intvl1);
    EXPECT_DOUBLE_EQ(3.14159, key.get_data());
}

// ==========================================
// Keys with string data
// ==========================================

TEST_F(IntervalKeyTest, ConstructorWithStringData) {
    gdt::key<gdt::interval, std::string> key(intvl1, "hello world");

    EXPECT_EQ(key.get_value(), intvl1);
    EXPECT_EQ("hello world", key.get_data());
}

TEST_F(IntervalKeyTest, StringDataModification) {
    gdt::key<gdt::interval, std::string> key(intvl1, "original");

    key.set_data("modified");
    EXPECT_EQ("modified", key.get_data());
}

// ==========================================
// Keys with custom struct data
// ==========================================

TEST_F(IntervalKeyTest, ConstructorWithCustomStruct) {
    custom_data data{42, 3.14};
    gdt::key<gdt::interval, custom_data> key(intvl1, data);

    EXPECT_EQ(key.get_value(), intvl1);
    EXPECT_EQ(42, key.get_data().id);
    EXPECT_DOUBLE_EQ(3.14, key.get_data().score);
}

// ==========================================
// Copy and Move semantics
// ==========================================

TEST_F(IntervalKeyTest, CopyConstructor) {
    gdt::key<gdt::interval, int> key1(intvl1, 42);
    gdt::key<gdt::interval, int> key2(key1);

    EXPECT_EQ(key2.get_value(), intvl1);
    EXPECT_EQ(42, key2.get_data());
}

TEST_F(IntervalKeyTest, MoveConstructor) {
    gdt::key<gdt::interval, std::string> key1(intvl1, "moveable");
    gdt::key<gdt::interval, std::string> key2(std::move(key1));

    EXPECT_EQ(key2.get_value(), intvl1);
    EXPECT_EQ("moveable", key2.get_data());
}

TEST_F(IntervalKeyTest, CopyAssignment) {
    gdt::key<gdt::interval, int> key1(intvl1, 42);
    gdt::key<gdt::interval, int> key2(intvl2, 99);

    key2 = key1;

    EXPECT_EQ(key2.get_value(), intvl1);
    EXPECT_EQ(42, key2.get_data());
}

TEST_F(IntervalKeyTest, MoveAssignment) {
    gdt::key<gdt::interval, std::string> key1(intvl1, "moveable");
    gdt::key<gdt::interval, std::string> key2(intvl2, "original");

    key2 = std::move(key1);

    EXPECT_EQ(key2.get_value(), intvl1);
    EXPECT_EQ("moveable", key2.get_data());
}

// ==========================================
// Equality comparison
// ==========================================

TEST_F(IntervalKeyTest, EqualityWithoutData) {
    gdt::key<gdt::interval> key1(intvl1);
    gdt::key<gdt::interval> key2(gdt::interval{10, 20});
    gdt::key<gdt::interval> key3(intvl2);

    EXPECT_EQ(key1, key2);
    EXPECT_NE(key1, key3);
}

TEST_F(IntervalKeyTest, EqualityWithData) {
    gdt::key<gdt::interval, int> key1(intvl1, 42);
    gdt::key<gdt::interval, int> key2(gdt::interval{10, 20}, 42);
    gdt::key<gdt::interval, int> key3(intvl1, 99);

    EXPECT_EQ(key1, key2);  // Same interval and data
    EXPECT_NE(key1, key3);  // Same interval, different data
}

// ==========================================
// Serialization tests (using helper)
// ==========================================

TEST_F(IntervalKeyTest, SerializeWithoutData) {
    gdt::key<gdt::interval> key(intvl1);
    test_serialization_roundtrip(key);
}

TEST_F(IntervalKeyTest, SerializeWithInt) {
    gdt::key<gdt::interval, int> key(intvl1, 42);
    test_serialization_roundtrip(key);
}

TEST_F(IntervalKeyTest, SerializeWithDouble) {
    gdt::key<gdt::interval, double> key(intvl3, 3.14159);
    test_serialization_roundtrip(key);
}

TEST_F(IntervalKeyTest, SerializeWithString) {
    gdt::key<gdt::interval, std::string> key(intvl1, "test string");
    test_serialization_roundtrip(key);
}

TEST_F(IntervalKeyTest, SerializeWithCustomStruct) {
    custom_data data{42, 3.14};
    gdt::key<gdt::interval, custom_data> key(intvl1, data);
    test_serialization_roundtrip(key);
}