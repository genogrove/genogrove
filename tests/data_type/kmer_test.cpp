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
#include <algorithm>

// Genogrove
#include <genogrove/data_type/kmer.hpp>
#include <genogrove/data_type/key_type_base.hpp>

namespace gdt = genogrove::data_type;

TEST(kmerTest, keyTypeBaseConcept) {
    static_assert(gdt::key_type_base<gdt::kmer>,
        "kmer must satisfy key_type_base concept");
}

TEST(kmerTest, defaultConstructor) {
    gdt::kmer k;
    EXPECT_EQ(k.get_k(), 0);
    EXPECT_EQ(k.get_encoding(), 0);
    EXPECT_EQ(k.to_string(), "");
}

TEST(kmerTest, stringConstructor) {
    gdt::kmer k1("ACGT");
    EXPECT_EQ(k1.get_k(), 4);
    EXPECT_EQ(k1.to_string(), "ACGT");

    gdt::kmer k2("A");
    EXPECT_EQ(k2.get_k(), 1);
    EXPECT_EQ(k2.to_string(), "A");

    gdt::kmer k3("TTTT");
    EXPECT_EQ(k3.get_k(), 4);
    EXPECT_EQ(k3.to_string(), "TTTT");
}

TEST(kmerTest, stringConstructorCaseInsensitive) {
    gdt::kmer k1("acgt");
    EXPECT_EQ(k1.to_string(), "ACGT");

    gdt::kmer k2("AcGt");
    EXPECT_EQ(k2.to_string(), "ACGT");

    EXPECT_EQ(k1, k2);
}

TEST(kmerTest, stringConstructorEmpty) {
    gdt::kmer k("");
    EXPECT_EQ(k.get_k(), 0);
    EXPECT_EQ(k.get_encoding(), 0);
}

TEST(kmerTest, stringConstructorInvalidCharacter) {
    EXPECT_THROW(gdt::kmer("ACGN"), std::invalid_argument);
    EXPECT_THROW(gdt::kmer("ACGX"), std::invalid_argument);
    EXPECT_THROW(gdt::kmer("ACG1"), std::invalid_argument);
}

TEST(kmerTest, stringConstructorTooLong) {
    // 33 bases should throw
    std::string too_long(33, 'A');
    EXPECT_THROW(gdt::kmer(too_long), std::invalid_argument);

    // 32 bases should be fine
    std::string max_length(32, 'A');
    EXPECT_NO_THROW(gdt::kmer(max_length));
}

TEST(kmerTest, encodingConstructor) {
    // ACGT = 00 01 10 11 = 0b00011011 = 27
    gdt::kmer k1(27, 4);
    EXPECT_EQ(k1.get_k(), 4);
    EXPECT_EQ(k1.get_encoding(), 27);
    EXPECT_EQ(k1.to_string(), "ACGT");

    // A = 00 = 0
    gdt::kmer k2(0, 1);
    EXPECT_EQ(k2.to_string(), "A");

    // T = 11 = 3
    gdt::kmer k3(3, 1);
    EXPECT_EQ(k3.to_string(), "T");
}

TEST(kmerTest, encodingConstructorMasking) {
    // Extra bits should be masked off
    // For k=2, only 4 bits are used, so 0xFF should become 0x0F
    gdt::kmer k(0xFF, 2);
    EXPECT_EQ(k.get_encoding(), 0x0F);  // TT = 11 11 = 15
    EXPECT_EQ(k.to_string(), "TT");
}

TEST(kmerTest, encodingValues) {
    // Test specific encoding values
    // A=00, C=01, G=10, T=11

    gdt::kmer kA("A");
    EXPECT_EQ(kA.get_encoding(), 0);

    gdt::kmer kC("C");
    EXPECT_EQ(kC.get_encoding(), 1);

    gdt::kmer kG("G");
    EXPECT_EQ(kG.get_encoding(), 2);

    gdt::kmer kT("T");
    EXPECT_EQ(kT.get_encoding(), 3);

    // AA = 00 00 = 0
    gdt::kmer kAA("AA");
    EXPECT_EQ(kAA.get_encoding(), 0);

    // AC = 00 01 = 1
    gdt::kmer kAC("AC");
    EXPECT_EQ(kAC.get_encoding(), 1);

    // CA = 01 00 = 4
    gdt::kmer kCA("CA");
    EXPECT_EQ(kCA.get_encoding(), 4);

    // TT = 11 11 = 15
    gdt::kmer kTT("TT");
    EXPECT_EQ(kTT.get_encoding(), 15);
}

TEST(kmerTest, equalityOperator) {
    gdt::kmer k1("ACGT");
    gdt::kmer k2("ACGT");
    gdt::kmer k3("ACGA");

    EXPECT_TRUE(k1 == k2);
    EXPECT_FALSE(k1 == k3);
}

TEST(kmerTest, equalityDifferentK) {
    // Same prefix but different k should not be equal
    gdt::kmer k1("ACG");
    gdt::kmer k2("ACGT");

    EXPECT_FALSE(k1 == k2);
}

TEST(kmerTest, comparisonOperatorsSameK) {
    gdt::kmer k1("AAAA");  // encoding 0
    gdt::kmer k2("ACGT");  // encoding 27
    gdt::kmer k3("TTTT");  // encoding 255

    // Test operator<
    EXPECT_TRUE(k1 < k2);
    EXPECT_TRUE(k2 < k3);
    EXPECT_TRUE(k1 < k3);
    EXPECT_FALSE(k3 < k1);
    EXPECT_FALSE(k2 < k1);

    // Test operator>
    EXPECT_TRUE(k3 > k2);
    EXPECT_TRUE(k2 > k1);
    EXPECT_TRUE(k3 > k1);
    EXPECT_FALSE(k1 > k3);
    EXPECT_FALSE(k1 > k2);
}

TEST(kmerTest, comparisonOperatorsDifferentK) {
    // Different k values - shorter k comes first
    gdt::kmer k1("AAA");   // k=3
    gdt::kmer k2("AAAA");  // k=4
    gdt::kmer k3("TTTTT"); // k=5

    EXPECT_TRUE(k1 < k2);
    EXPECT_TRUE(k2 < k3);
    EXPECT_TRUE(k1 < k3);

    EXPECT_TRUE(k3 > k2);
    EXPECT_TRUE(k2 > k1);
    EXPECT_TRUE(k3 > k1);
}

TEST(kmerTest, overlapEqual) {
    gdt::kmer k1("ACGT");
    gdt::kmer k2("ACGT");
    gdt::kmer k3("ACGA");

    // Overlap only when exactly equal
    EXPECT_TRUE(gdt::kmer::overlap(k1, k2));
    EXPECT_FALSE(gdt::kmer::overlap(k1, k3));
}

TEST(kmerTest, overlapDifferentK) {
    gdt::kmer k1("ACG");
    gdt::kmer k2("ACGT");

    // Different k means no overlap
    EXPECT_FALSE(gdt::kmer::overlap(k1, k2));
}

TEST(kmerTest, aggregateSingle) {
    std::vector<gdt::kmer> kmers = {gdt::kmer("ACGT")};

    gdt::kmer result = gdt::kmer::aggregate(kmers);
    EXPECT_EQ(result.to_string(), "ACGT");
}

TEST(kmerTest, aggregateMultiple) {
    std::vector<gdt::kmer> kmers = {
        gdt::kmer("AAAA"),
        gdt::kmer("TTTT"),
        gdt::kmer("ACGT")
    };

    // Aggregate returns maximum k-mer
    gdt::kmer result = gdt::kmer::aggregate(kmers);
    EXPECT_EQ(result.to_string(), "TTTT");
}

TEST(kmerTest, aggregateEmpty) {
    std::vector<gdt::kmer> kmers = {};

    gdt::kmer result = gdt::kmer::aggregate(kmers);
    EXPECT_EQ(result.get_k(), 0);
}

TEST(kmerTest, toString) {
    gdt::kmer k1("ACGT");
    EXPECT_EQ(k1.to_string(), "ACGT");

    gdt::kmer k2("GGGG");
    EXPECT_EQ(k2.to_string(), "GGGG");

    gdt::kmer k3("ATCGATCG");
    EXPECT_EQ(k3.to_string(), "ATCGATCG");
}

TEST(kmerTest, isValid) {
    EXPECT_TRUE(gdt::kmer::is_valid("ACGT"));
    EXPECT_TRUE(gdt::kmer::is_valid("acgt"));
    EXPECT_TRUE(gdt::kmer::is_valid("AcGt"));
    EXPECT_TRUE(gdt::kmer::is_valid("AAAA"));
    EXPECT_TRUE(gdt::kmer::is_valid(""));

    EXPECT_FALSE(gdt::kmer::is_valid("ACGN"));
    EXPECT_FALSE(gdt::kmer::is_valid("ACGX"));
    EXPECT_FALSE(gdt::kmer::is_valid("ACG1"));
    EXPECT_FALSE(gdt::kmer::is_valid("ACG "));
}

TEST(kmerTest, encodeBase) {
    EXPECT_EQ(gdt::kmer::encode_base('A'), 0);
    EXPECT_EQ(gdt::kmer::encode_base('a'), 0);
    EXPECT_EQ(gdt::kmer::encode_base('C'), 1);
    EXPECT_EQ(gdt::kmer::encode_base('c'), 1);
    EXPECT_EQ(gdt::kmer::encode_base('G'), 2);
    EXPECT_EQ(gdt::kmer::encode_base('g'), 2);
    EXPECT_EQ(gdt::kmer::encode_base('T'), 3);
    EXPECT_EQ(gdt::kmer::encode_base('t'), 3);

    EXPECT_THROW(gdt::kmer::encode_base('N'), std::invalid_argument);
    EXPECT_THROW(gdt::kmer::encode_base('X'), std::invalid_argument);
}

TEST(kmerTest, decodeBase) {
    EXPECT_EQ(gdt::kmer::decode_base(0), 'A');
    EXPECT_EQ(gdt::kmer::decode_base(1), 'C');
    EXPECT_EQ(gdt::kmer::decode_base(2), 'G');
    EXPECT_EQ(gdt::kmer::decode_base(3), 'T');
}

TEST(kmerTest, serialization) {
    gdt::kmer original("ACGTACGT");

    std::stringstream ss;
    original.serialize(ss);

    gdt::kmer restored = gdt::kmer::deserialize(ss);

    EXPECT_EQ(original, restored);
    EXPECT_EQ(restored.to_string(), "ACGTACGT");
}

TEST(kmerTest, serializationEmpty) {
    gdt::kmer original;

    std::stringstream ss;
    original.serialize(ss);

    gdt::kmer restored = gdt::kmer::deserialize(ss);

    EXPECT_EQ(original, restored);
    EXPECT_EQ(restored.get_k(), 0);
}

TEST(kmerTest, sorting) {
    std::vector<gdt::kmer> kmers = {
        gdt::kmer("TTTT"),
        gdt::kmer("AAAA"),
        gdt::kmer("GGGG"),
        gdt::kmer("CCCC"),
        gdt::kmer("ACGT")
    };

    std::sort(kmers.begin(), kmers.end());

    // Expected order: AAAA (0) < ACGT (27) < CCCC (85) < GGGG (170) < TTTT (255)
    EXPECT_EQ(kmers[0].to_string(), "AAAA");
    EXPECT_EQ(kmers[1].to_string(), "ACGT");
    EXPECT_EQ(kmers[2].to_string(), "CCCC");
    EXPECT_EQ(kmers[3].to_string(), "GGGG");
    EXPECT_EQ(kmers[4].to_string(), "TTTT");
}

TEST(kmerTest, maxK) {
    EXPECT_EQ(gdt::kmer::max_k, 32);

    // Create a 32-mer
    std::string seq32(32, 'A');
    gdt::kmer k32(seq32);
    EXPECT_EQ(k32.get_k(), 32);
}

TEST(kmerTest, isKmerConstexpr) {
    static_assert(gdt::kmer::is_kmer, "kmer::is_kmer should be true");
}

TEST(kmerTest, roundTripAllBases) {
    // Test round-trip for all single bases
    for (char base : {'A', 'C', 'G', 'T'}) {
        std::string seq(1, base);
        gdt::kmer k(seq);
        EXPECT_EQ(k.to_string(), seq);
    }
}

TEST(kmerTest, roundTripLongerSequences) {
    std::vector<std::string> sequences = {
        "ACGT",
        "AAAA",
        "TTTT",
        "GCGC",
        "ATATATAT",
        "GCGCGCGC",
        "ACGTACGTACGTACGT"
    };

    for (const auto& seq : sequences) {
        gdt::kmer k(seq);
        EXPECT_EQ(k.to_string(), seq) << "Failed for sequence: " << seq;
    }
}