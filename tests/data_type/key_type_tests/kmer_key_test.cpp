/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Gtest
#include <gtest/gtest.h>

// Shared typed-test suite for the generic key<> comparison contract (#332).
#include "key_comparison_typed_test.hpp"

// genogrove
#include <genogrove/data_type/key.hpp>
#include <genogrove/data_type/kmer.hpp>

// standard
#include <sstream>
#include <string>

namespace gdt = genogrove::data_type;

namespace {

struct kmer_payload {
    int id;
    double score;

    bool operator==(const kmer_payload& other) const {
        return id == other.id && score == other.score;
    }
};

template <typename KeyType>
void expect_serialization_roundtrip(const KeyType& original) {
    std::ostringstream oss;
    original.serialize(oss);

    std::istringstream iss(oss.str());
    auto restored = KeyType::deserialize(iss);

    EXPECT_EQ(restored.get_value(), original.get_value());
    if constexpr (restored.has_data()) {
        EXPECT_EQ(restored.get_data(), original.get_data());
    }
}

} // namespace

// Brace initialization: parentheses break inside gtest macros (most vexing parse).
class KmerKeyTest : public ::testing::Test {
protected:
    gdt::kmer acgt{"ACGT"};
    gdt::kmer ttta{"TTTA"};
};

// ==========================================
// Keys without data
// ==========================================

TEST_F(KmerKeyTest, ConstructorWithoutData) {
    gdt::key<gdt::kmer> key(acgt);

    EXPECT_EQ(acgt, key.get_value());
    EXPECT_FALSE(key.has_data());
}

TEST_F(KmerKeyTest, SetValueWithoutData) {
    gdt::key<gdt::kmer> key(acgt);
    key.set_value(ttta);

    EXPECT_EQ(ttta, key.get_value());
}

TEST_F(KmerKeyTest, ToStringDelegatesToKmer) {
    gdt::key<gdt::kmer> key(acgt);

    EXPECT_EQ("ACGT", key.to_string());
}

// ==========================================
// Keys with data
// ==========================================

TEST_F(KmerKeyTest, ConstructorWithIntData) {
    gdt::key<gdt::kmer, int> key(acgt, 42);

    EXPECT_EQ(acgt, key.get_value());
    EXPECT_TRUE(key.has_data());
    EXPECT_EQ(42, key.get_data());
}

TEST_F(KmerKeyTest, ConstructorWithStringData) {
    gdt::key<gdt::kmer, std::string> key(acgt, "hello world");

    EXPECT_EQ("hello world", key.get_data());
}

TEST_F(KmerKeyTest, ConstructorWithCustomStruct) {
    gdt::key<gdt::kmer, kmer_payload> key(acgt, kmer_payload{42, 3.14});

    EXPECT_EQ(42, key.get_data().id);
    EXPECT_DOUBLE_EQ(3.14, key.get_data().score);
}

// ==========================================
// Copy and Move semantics
// ==========================================

TEST_F(KmerKeyTest, CopyConstructor) {
    gdt::key<gdt::kmer, int> key1(acgt, 42);
    gdt::key<gdt::kmer, int> key2(key1);

    EXPECT_EQ(acgt, key2.get_value());
    EXPECT_EQ(42, key2.get_data());
}

TEST_F(KmerKeyTest, MoveConstructor) {
    gdt::key<gdt::kmer, std::string> key1(acgt, "moveable");
    gdt::key<gdt::kmer, std::string> key2(std::move(key1));

    EXPECT_EQ(acgt, key2.get_value());
    EXPECT_EQ("moveable", key2.get_data());
}

TEST_F(KmerKeyTest, CopyAssignment) {
    gdt::key<gdt::kmer, int> key1(acgt, 42);
    gdt::key<gdt::kmer, int> key2(ttta, 99);

    key2 = key1;

    EXPECT_EQ(acgt, key2.get_value());
    EXPECT_EQ(42, key2.get_data());
}

TEST_F(KmerKeyTest, MoveAssignment) {
    gdt::key<gdt::kmer, std::string> key1(acgt, "moveable");
    gdt::key<gdt::kmer, std::string> key2(ttta, "original");

    key2 = std::move(key1);

    EXPECT_EQ(acgt, key2.get_value());
    EXPECT_EQ("moveable", key2.get_data());
}

// ==========================================
// Serialization round-trips through the key<> wrapper
// ==========================================

TEST_F(KmerKeyTest, SerializeWithoutData) {
    expect_serialization_roundtrip(gdt::key<gdt::kmer>(acgt));
}

TEST_F(KmerKeyTest, SerializeWithInt) {
    expect_serialization_roundtrip(gdt::key<gdt::kmer, int>(acgt, 42));
}

TEST_F(KmerKeyTest, SerializeWithString) {
    expect_serialization_roundtrip(gdt::key<gdt::kmer, std::string>(ttta, "test string"));
}

TEST_F(KmerKeyTest, SerializeWithCustomStruct) {
    expect_serialization_roundtrip(gdt::key<gdt::kmer, kmer_payload>(acgt, kmer_payload{42, 3.14}));
}

TEST_F(KmerKeyTest, SerializeKeepsKmerLength) {
    // The k of the kmer must survive the round-trip, not only its encoding.
    gdt::key<gdt::kmer> key(gdt::kmer{"ACG"});
    std::ostringstream oss;
    key.serialize(oss);

    std::istringstream iss(oss.str());
    auto restored = gdt::key<gdt::kmer>::deserialize(iss);

    EXPECT_EQ(3, restored.get_value().get_k());
    EXPECT_EQ("ACG", restored.to_string());
}

// =============================================================================
// Generic comparison contract (#332) — instantiated from the shared typed-test
// =============================================================================

namespace key_comparison_test_support {
template <>
struct key_comparison_traits<gdt::kmer> {
    static gdt::kmer value_a() { return gdt::kmer{"ACGT"}; }
    static gdt::kmer value_b_different() { return gdt::kmer{"TTTA"}; }
};
} // namespace key_comparison_test_support

using KmerKeyComparisonTypes = ::testing::Types<gdt::kmer>;
INSTANTIATE_TYPED_TEST_SUITE_P(Kmer, key_comparison_typed_test, KmerKeyComparisonTypes);