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
#include <genogrove/data_type/genomic_coordinate.hpp>

// standard
#include <sstream>

namespace gdt = genogrove::data_type;

// ==========================================
// Test Fixture for common setup
// ==========================================

class GenomicCoordinateKeyTest : public ::testing::Test {
protected:
    gdt::genomic_coordinate coord1{'+', 10, 20};
    gdt::genomic_coordinate coord2{'-', 30, 40};
    gdt::genomic_coordinate coord3{'.', 15, 25};
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

TEST_F(GenomicCoordinateKeyTest, ConstructorWithoutData) {
    gdt::key<gdt::genomic_coordinate> key(coord1);

    EXPECT_EQ(coord1, key.get_value());
    EXPECT_FALSE(key.has_data());
}

TEST_F(GenomicCoordinateKeyTest, SetValueWithoutData) {
    gdt::key<gdt::genomic_coordinate> key(coord1);
    key.set_value(coord2);

    EXPECT_EQ(coord2, key.get_value());
}

TEST_F(GenomicCoordinateKeyTest, ToStringWithoutData) {
    gdt::key<gdt::genomic_coordinate> key(coord1);

    EXPECT_EQ("+:10-20", key.to_string());
}

TEST_F(GenomicCoordinateKeyTest, ToStringDifferentStrands) {
    gdt::key<gdt::genomic_coordinate> key_plus(coord1);
    gdt::key<gdt::genomic_coordinate> key_minus(coord2);
    gdt::key<gdt::genomic_coordinate> key_unstranded(coord3);

    EXPECT_EQ("+:10-20", key_plus.to_string());
    EXPECT_EQ("-:30-40", key_minus.to_string());
    EXPECT_EQ(".:15-25", key_unstranded.to_string());
}

// ==========================================
// Keys with POD data
// ==========================================

TEST_F(GenomicCoordinateKeyTest, ConstructorWithIntData) {
    gdt::key<gdt::genomic_coordinate, int> key(coord1, 42);

    EXPECT_EQ(key.get_value(), coord1);
    EXPECT_TRUE(key.has_data());
    EXPECT_EQ(42, key.get_data());
}

TEST_F(GenomicCoordinateKeyTest, SetAndMutateIntData) {
    gdt::key<gdt::genomic_coordinate, int> key(coord1, 42);

    key.set_data(99);
    EXPECT_EQ(99, key.get_data());

    key.get_data() = 100;
    EXPECT_EQ(100, key.get_data());
}

TEST_F(GenomicCoordinateKeyTest, ConstructorWithDoubleData) {
    gdt::key<gdt::genomic_coordinate, double> key(coord1, 3.14159);

    EXPECT_EQ(key.get_value(), coord1);
    EXPECT_DOUBLE_EQ(3.14159, key.get_data());
}

// ==========================================
// Keys with string data
// ==========================================

TEST_F(GenomicCoordinateKeyTest, ConstructorWithStringData) {
    gdt::key<gdt::genomic_coordinate, std::string> key(coord1, "exon1");

    EXPECT_EQ(key.get_value(), coord1);
    EXPECT_EQ("exon1", key.get_data());
}

TEST_F(GenomicCoordinateKeyTest, StringDataModification) {
    gdt::key<gdt::genomic_coordinate, std::string> key(coord1, "original");

    key.set_data("modified");
    EXPECT_EQ("modified", key.get_data());
}

// ==========================================
// Keys with custom struct data
// ==========================================

TEST_F(GenomicCoordinateKeyTest, ConstructorWithCustomStruct) {
    custom_data data{42, 3.14};
    gdt::key<gdt::genomic_coordinate, custom_data> key(coord1, data);

    EXPECT_EQ(key.get_value(), coord1);
    EXPECT_EQ(42, key.get_data().id);
    EXPECT_DOUBLE_EQ(3.14, key.get_data().score);
}

// ==========================================
// Copy and Move semantics
// ==========================================

TEST_F(GenomicCoordinateKeyTest, CopyConstructor) {
    gdt::key<gdt::genomic_coordinate, int> key1(coord1, 42);
    gdt::key<gdt::genomic_coordinate, int> key2(key1);

    EXPECT_EQ(key2.get_value(), coord1);
    EXPECT_EQ(42, key2.get_data());
}

TEST_F(GenomicCoordinateKeyTest, MoveConstructor) {
    gdt::key<gdt::genomic_coordinate, std::string> key1(coord1, "moveable");
    gdt::key<gdt::genomic_coordinate, std::string> key2(std::move(key1));

    EXPECT_EQ(key2.get_value(), coord1);
    EXPECT_EQ("moveable", key2.get_data());
}

TEST_F(GenomicCoordinateKeyTest, CopyAssignment) {
    gdt::key<gdt::genomic_coordinate, int> key1(coord1, 42);
    gdt::key<gdt::genomic_coordinate, int> key2(coord2, 99);

    key2 = key1;

    EXPECT_EQ(key2.get_value(), coord1);
    EXPECT_EQ(42, key2.get_data());
}

TEST_F(GenomicCoordinateKeyTest, MoveAssignment) {
    gdt::key<gdt::genomic_coordinate, std::string> key1(coord1, "moveable");
    gdt::key<gdt::genomic_coordinate, std::string> key2(coord2, "original");

    key2 = std::move(key1);

    EXPECT_EQ(key2.get_value(), coord1);
    EXPECT_EQ("moveable", key2.get_data());
}

// ==========================================
// Equality comparison
// ==========================================

TEST_F(GenomicCoordinateKeyTest, EqualityWithoutData) {
    gdt::key<gdt::genomic_coordinate> key1(coord1);
    gdt::key<gdt::genomic_coordinate> key2(gdt::genomic_coordinate{'+', 10, 20});
    gdt::key<gdt::genomic_coordinate> key3(coord2);

    EXPECT_EQ(key1, key2);
    EXPECT_NE(key1, key3);
}

TEST_F(GenomicCoordinateKeyTest, EqualityWithData) {
    gdt::key<gdt::genomic_coordinate, int> key1(coord1, 42);
    gdt::key<gdt::genomic_coordinate, int> key2(gdt::genomic_coordinate{'+', 10, 20}, 42);
    gdt::key<gdt::genomic_coordinate, int> key3(coord1, 99);

    EXPECT_EQ(key1, key2);  // Same coordinate and data
    EXPECT_NE(key1, key3);  // Same coordinate, different data
}

// ==========================================
// Serialization tests (using helper)
// ==========================================

TEST_F(GenomicCoordinateKeyTest, SerializeWithoutData) {
    gdt::key<gdt::genomic_coordinate> key(coord1);
    test_serialization_roundtrip(key);
}

TEST_F(GenomicCoordinateKeyTest, SerializeWithInt) {
    gdt::key<gdt::genomic_coordinate, int> key(coord1, 42);
    test_serialization_roundtrip(key);
}

TEST_F(GenomicCoordinateKeyTest, SerializeWithDouble) {
    gdt::key<gdt::genomic_coordinate, double> key(coord3, 3.14159);
    test_serialization_roundtrip(key);
}

TEST_F(GenomicCoordinateKeyTest, SerializeWithString) {
    gdt::key<gdt::genomic_coordinate, std::string> key(coord1, "test string");
    test_serialization_roundtrip(key);
}

TEST_F(GenomicCoordinateKeyTest, SerializeWithCustomStruct) {
    custom_data data{42, 3.14};
    gdt::key<gdt::genomic_coordinate, custom_data> key(coord1, data);
    test_serialization_roundtrip(key);
}

// ==========================================
// Strand-specific tests
// ==========================================

TEST_F(GenomicCoordinateKeyTest, DifferentStrandsSamePosition) {
    gdt::genomic_coordinate plus{'+', 10, 20};
    gdt::genomic_coordinate minus{'-', 10, 20};

    gdt::key<gdt::genomic_coordinate, std::string> key_plus(plus, "plus strand");
    gdt::key<gdt::genomic_coordinate, std::string> key_minus(minus, "minus strand");

    EXPECT_NE(key_plus, key_minus);  // Different strands
    EXPECT_EQ(key_plus.get_data(), "plus strand");
    EXPECT_EQ(key_minus.get_data(), "minus strand");
}

TEST_F(GenomicCoordinateKeyTest, UnstrandedCoordinate) {
    gdt::genomic_coordinate unstranded{'.', 50, 100};
    gdt::key<gdt::genomic_coordinate, int> key(unstranded, 123);

    EXPECT_EQ(key.get_value().get_strand(), '.');
    EXPECT_EQ(key.get_value().get_start(), 50);
    EXPECT_EQ(key.get_value().get_end(), 100);
    EXPECT_EQ(key.get_data(), 123);
}

TEST_F(GenomicCoordinateKeyTest, WildcardStrand) {
    gdt::genomic_coordinate wildcard{'*', 0, 1000};
    gdt::key<gdt::genomic_coordinate, std::string> key(wildcard, "all strands");

    EXPECT_EQ(key.get_value().get_strand(), '*');
    EXPECT_EQ(key.get_data(), "all strands");
}