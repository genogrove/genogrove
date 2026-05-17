/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Gtest
#include <gtest/gtest.h>

// Shared typed-test suite for the generic key<> equality contract (#332).
#include "key_equality_typed_test.hpp"

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

// =============================================================================
// Generic equality contract (#332) — instantiated from the shared typed-test
// =============================================================================

namespace key_equality_test_support {
template<>
struct key_equality_traits<gdt::interval> {
    static gdt::interval value_a()           { return gdt::interval{10, 20}; }
    static gdt::interval value_b_different() { return gdt::interval{30, 40}; }
};
} // namespace key_equality_test_support

using IntervalKeyEqualityTypes = ::testing::Types<gdt::interval>;
INSTANTIATE_TYPED_TEST_SUITE_P(Interval, key_equality_typed_test, IntervalKeyEqualityTypes);