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
#include <genogrove/data_type/numeric.hpp>

// standard
#include <sstream>

namespace gdt = genogrove::data_type;

// ==========================================
// Test Fixture for common setup
// ==========================================

class NumericKeyTest : public ::testing::Test {
protected:
    gdt::numeric num1{10};
    gdt::numeric num2{20};
    gdt::numeric num3{-5};
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

TEST_F(NumericKeyTest, ConstructorWithoutData) {
    gdt::key<gdt::numeric> key(num1);

    EXPECT_EQ(num1, key.get_value());
    EXPECT_FALSE(key.has_data());
}

TEST_F(NumericKeyTest, SetValueWithoutData) {
    gdt::key<gdt::numeric> key(num1);
    key.set_value(num2);

    EXPECT_EQ(num2, key.get_value());
}

TEST_F(NumericKeyTest, ToStringWithoutData) {
    gdt::key<gdt::numeric> key(num1);

    EXPECT_EQ("10", key.to_string());
}

TEST_F(NumericKeyTest, ToStringNegative) {
    gdt::key<gdt::numeric> key(num3);

    EXPECT_EQ("-5", key.to_string());
}

// ==========================================
// Keys with POD data
// ==========================================

TEST_F(NumericKeyTest, ConstructorWithIntData) {
    gdt::key<gdt::numeric, int> key(num1, 42);

    EXPECT_EQ(key.get_value(), num1);
    EXPECT_TRUE(key.has_data());
    EXPECT_EQ(42, key.get_data());
}

TEST_F(NumericKeyTest, SetAndMutateIntData) {
    gdt::key<gdt::numeric, int> key(num1, 42);

    key.set_data(99);
    EXPECT_EQ(99, key.get_data());

    key.get_data() = 100;
    EXPECT_EQ(100, key.get_data());
}

TEST_F(NumericKeyTest, ConstructorWithDoubleData) {
    gdt::key<gdt::numeric, double> key(num1, 3.14159);

    EXPECT_EQ(key.get_value(), num1);
    EXPECT_DOUBLE_EQ(3.14159, key.get_data());
}

// ==========================================
// Keys with string data
// ==========================================

TEST_F(NumericKeyTest, ConstructorWithStringData) {
    gdt::key<gdt::numeric, std::string> key(num1, "hello world");

    EXPECT_EQ(key.get_value(), num1);
    EXPECT_EQ("hello world", key.get_data());
}

TEST_F(NumericKeyTest, StringDataModification) {
    gdt::key<gdt::numeric, std::string> key(num1, "original");

    key.set_data("modified");
    EXPECT_EQ("modified", key.get_data());
}

// ==========================================
// Keys with custom struct data
// ==========================================

TEST_F(NumericKeyTest, ConstructorWithCustomStruct) {
    custom_data data{42, 3.14};
    gdt::key<gdt::numeric, custom_data> key(num1, data);

    EXPECT_EQ(key.get_value(), num1);
    EXPECT_EQ(42, key.get_data().id);
    EXPECT_DOUBLE_EQ(3.14, key.get_data().score);
}

// ==========================================
// Copy and Move semantics
// ==========================================

TEST_F(NumericKeyTest, CopyConstructor) {
    gdt::key<gdt::numeric, int> key1(num1, 42);
    gdt::key<gdt::numeric, int> key2(key1);

    EXPECT_EQ(key2.get_value(), num1);
    EXPECT_EQ(42, key2.get_data());
}

TEST_F(NumericKeyTest, MoveConstructor) {
    gdt::key<gdt::numeric, std::string> key1(num1, "moveable");
    gdt::key<gdt::numeric, std::string> key2(std::move(key1));

    EXPECT_EQ(key2.get_value(), num1);
    EXPECT_EQ("moveable", key2.get_data());
}

TEST_F(NumericKeyTest, CopyAssignment) {
    gdt::key<gdt::numeric, int> key1(num1, 42);
    gdt::key<gdt::numeric, int> key2(num2, 99);

    key2 = key1;

    EXPECT_EQ(key2.get_value(), num1);
    EXPECT_EQ(42, key2.get_data());
}

TEST_F(NumericKeyTest, MoveAssignment) {
    gdt::key<gdt::numeric, std::string> key1(num1, "moveable");
    gdt::key<gdt::numeric, std::string> key2(num2, "original");

    key2 = std::move(key1);

    EXPECT_EQ(key2.get_value(), num1);
    EXPECT_EQ("moveable", key2.get_data());
}

// ==========================================
// Serialization tests (using helper)
// ==========================================

TEST_F(NumericKeyTest, SerializeWithoutData) {
    gdt::key<gdt::numeric> key(num1);
    test_serialization_roundtrip(key);
}

TEST_F(NumericKeyTest, SerializeWithInt) {
    gdt::key<gdt::numeric, int> key(num1, 42);
    test_serialization_roundtrip(key);
}

TEST_F(NumericKeyTest, SerializeWithDouble) {
    gdt::key<gdt::numeric, double> key(num3, 3.14159);
    test_serialization_roundtrip(key);
}

TEST_F(NumericKeyTest, SerializeWithString) {
    gdt::key<gdt::numeric, std::string> key(num1, "test string");
    test_serialization_roundtrip(key);
}

TEST_F(NumericKeyTest, SerializeWithCustomStruct) {
    custom_data data{42, 3.14};
    gdt::key<gdt::numeric, custom_data> key(num1, data);
    test_serialization_roundtrip(key);
}

// ==========================================
// Numeric-specific tests
// ==========================================

TEST_F(NumericKeyTest, NegativeValues) {
    gdt::key<gdt::numeric, int> key(num3, -10);

    EXPECT_EQ(key.get_value().get_value(), -5);
    EXPECT_EQ(key.get_data(), -10);
}

TEST_F(NumericKeyTest, ZeroValue) {
    gdt::numeric zero{0};
    gdt::key<gdt::numeric, std::string> key(zero, "zero");

    EXPECT_EQ(key.get_value().get_value(), 0);
    EXPECT_EQ(key.get_data(), "zero");
}

// =============================================================================
// Generic equality contract (#332) — instantiated from the shared typed-test
// =============================================================================

namespace key_equality_test_support {
template<>
struct key_equality_traits<gdt::numeric> {
    static gdt::numeric value_a()           { return gdt::numeric{42}; }
    static gdt::numeric value_b_different() { return gdt::numeric{99}; }
};
} // namespace key_equality_test_support

using NumericKeyEqualityTypes = ::testing::Types<gdt::numeric>;
INSTANTIATE_TYPED_TEST_SUITE_P(Numeric, key_equality_typed_test, NumericKeyEqualityTypes);