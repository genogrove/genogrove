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

// Test base
#include "key_type_grove_test.hpp"

// genogrove
#include <genogrove/data_type/kmer.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

// =============================================================================
// Traits Specialization for gdt::kmer (define ONCE)
// =============================================================================

template<>
struct grove_test_traits<gdt::kmer, int> {
    static std::vector<std::pair<gdt::kmer, int>> generate_test_data(size_t count) {
        std::vector<std::pair<gdt::kmer, int>> data;

        // Generate distinct k-mers by incrementing the encoding
        // Using k=8 (8-mers) for reasonable diversity
        // Encoding space: 0 to 2^16-1 = 65535 for 8-mers
        for (size_t i = 0; i < count; ++i) {
            // Space out the encodings to leave gaps for non-overlapping queries
            uint64_t encoding = i * 100;
            gdt::kmer k(encoding, 8);
            data.push_back({k, static_cast<int>(i)});
        }

        return data;
    }

    static query_overlap_expectation<gdt::kmer>
    create_overlapping_query(const std::vector<std::pair<gdt::kmer, int>>& test_data) {
        if (test_data.empty()) {
            return {gdt::kmer(), {}};
        }

        // For k-mers, overlap only occurs when they are exactly equal
        // Query for the k-mer at a valid index (prefer index 2, fallback to last element)
        size_t target_idx = test_data.size() >= 3 ? 2 : test_data.size() - 1;
        gdt::kmer query = test_data[target_idx].first;

        return {query, {target_idx}};
    }

    static query_overlap_expectation<gdt::kmer>
    create_non_overlapping_query(const std::vector<std::pair<gdt::kmer, int>>& test_data) {
        if (test_data.empty()) {
            return {gdt::kmer(999999, 8), {}};
        }

        // Create query with encoding that doesn't exist (in the gap between values)
        // Since we generate encodings as i*100, encoding 50 doesn't exist
        return {gdt::kmer(50, 8), {}};
    }
};

// =============================================================================
// Instantiate Typed Tests for kmer
// =============================================================================

// Register gdt::kmer for typed testing - all standard tests run automatically!
using KmerTestTypes = ::testing::Types<gdt::kmer>;
INSTANTIATE_TYPED_TEST_SUITE_P(Kmer, grove_typed_test, KmerTestTypes);

// =============================================================================
// K-mer Specific Tests (behavior unique to k-mers)
// =============================================================================

class KmerGroveTest : public simple_grove_test_base<gdt::kmer, int> {};

// Test that k-mers with different k values are stored separately
TEST_F(KmerGroveTest, DifferentKValuesAreSeparate) {
    // Insert k-mers with different k values
    gdt::kmer k3("ACG");       // k=3
    gdt::kmer k4("ACGT");      // k=4
    gdt::kmer k5("ACGTA");     // k=5

    grove.insert_data("seq1", k3, 3);
    grove.insert_data("seq1", k4, 4);
    grove.insert_data("seq1", k5, 5);

    // Query for exact k=4 should only find k=4
    gdt::kmer query4("ACGT");
    auto results4 = grove.intersect(query4, "seq1");
    ASSERT_EQ(results4.get_keys().size(), 1);
    EXPECT_EQ(results4.get_keys()[0]->get_data(), 4);

    // Query for k=3 should only find k=3
    gdt::kmer query3("ACG");
    auto results3 = grove.intersect(query3, "seq1");
    ASSERT_EQ(results3.get_keys().size(), 1);
    EXPECT_EQ(results3.get_keys()[0]->get_data(), 3);

    // Query for k=5 should only find k=5
    gdt::kmer query5("ACGTA");
    auto results5 = grove.intersect(query5, "seq1");
    ASSERT_EQ(results5.get_keys().size(), 1);
    EXPECT_EQ(results5.get_keys()[0]->get_data(), 5);
}

// Test that querying with wrong k returns nothing
TEST_F(KmerGroveTest, WrongKReturnsNothing) {
    gdt::kmer k4("ACGT");  // k=4
    grove.insert_data("seq1", k4, 1);

    // Query with k=3 (prefix) should not match
    gdt::kmer query3("ACG");
    auto results3 = grove.intersect(query3, "seq1");
    EXPECT_EQ(results3.get_keys().size(), 0);

    // Query with k=5 (extended) should not match
    gdt::kmer query5("ACGTA");
    auto results5 = grove.intersect(query5, "seq1");
    EXPECT_EQ(results5.get_keys().size(), 0);
}

// Test multiple identical k-mers in different indices
TEST_F(KmerGroveTest, SameKmerDifferentIndices) {
    gdt::kmer k("ACGTACGT");

    grove.insert_data("chr1", k, 1);
    grove.insert_data("chr2", k, 2);
    grove.insert_data("chr3", k, 3);

    // Query each index separately
    auto results1 = grove.intersect(k, "chr1");
    ASSERT_EQ(results1.get_keys().size(), 1);
    EXPECT_EQ(results1.get_keys()[0]->get_data(), 1);

    auto results2 = grove.intersect(k, "chr2");
    ASSERT_EQ(results2.get_keys().size(), 1);
    EXPECT_EQ(results2.get_keys()[0]->get_data(), 2);

    auto results3 = grove.intersect(k, "chr3");
    ASSERT_EQ(results3.get_keys().size(), 1);
    EXPECT_EQ(results3.get_keys()[0]->get_data(), 3);
}

// Test k-mer sorting order (lexicographic via encoding)
TEST_F(KmerGroveTest, LexicographicOrder) {
    // Insert k-mers in non-sorted order
    gdt::kmer kT("TTTT");  // encoding = 255 (largest 4-mer)
    gdt::kmer kA("AAAA");  // encoding = 0 (smallest 4-mer)
    gdt::kmer kG("GGGG");  // encoding = 170
    gdt::kmer kC("CCCC");  // encoding = 85

    grove.insert_data("seq1", kT, 4);
    grove.insert_data("seq1", kA, 1);
    grove.insert_data("seq1", kG, 3);
    grove.insert_data("seq1", kC, 2);

    // Verify we can find all of them
    EXPECT_EQ(grove.intersect(kA, "seq1").get_keys().size(), 1);
    EXPECT_EQ(grove.intersect(kC, "seq1").get_keys().size(), 1);
    EXPECT_EQ(grove.intersect(kG, "seq1").get_keys().size(), 1);
    EXPECT_EQ(grove.intersect(kT, "seq1").get_keys().size(), 1);
}

// Test bulk insertion with k-mers
TEST_F(KmerGroveTest, BulkInsertKmers) {
    std::vector<std::pair<gdt::kmer, int>> kmers = {
        {gdt::kmer("AAAAAAAA"), 0},
        {gdt::kmer("ACGTACGT"), 1},
        {gdt::kmer("GCGCGCGC"), 2},
        {gdt::kmer("TTTTTTTT"), 3}
    };

    // Sort by k-mer (required for bulk insert)
    std::sort(kmers.begin(), kmers.end(),
        [](const auto& a, const auto& b) { return a.first < b.first; });

    auto keys = grove.insert_data("seq1", kmers, gst::sorted, gst::bulk);

    ASSERT_EQ(keys.size(), 4);

    // Verify all are queryable
    for (auto& [kmer, data] : kmers) {
        auto results = grove.intersect(kmer, "seq1");
        ASSERT_EQ(results.get_keys().size(), 1)
            << "Should find k-mer: " << kmer.to_string();
    }
}

// Test case insensitivity in k-mer creation and querying
TEST_F(KmerGroveTest, CaseInsensitiveQuery) {
    gdt::kmer inserted("ACGT");
    grove.insert_data("seq1", inserted, 1);

    // Query with lowercase should find the same k-mer
    gdt::kmer query_lower("acgt");
    auto results = grove.intersect(query_lower, "seq1");
    ASSERT_EQ(results.get_keys().size(), 1);
    EXPECT_EQ(results.get_keys()[0]->get_data(), 1);

    // Query with mixed case should also work
    gdt::kmer query_mixed("AcGt");
    auto results_mixed = grove.intersect(query_mixed, "seq1");
    ASSERT_EQ(results_mixed.get_keys().size(), 1);
}

// Test graph operations with k-mers (linking adjacent k-mers)
TEST_F(KmerGroveTest, GraphEdgesBetweenKmers) {
    // Simulate consecutive k-mers from a sequence "ACGTACGT"
    // k=4: ACGT, CGTA, GTAC, TACG
    std::vector<std::pair<gdt::kmer, int>> kmers = {
        {gdt::kmer("ACGT"), 0},
        {gdt::kmer("CGTA"), 1},
        {gdt::kmer("GTAC"), 2},
        {gdt::kmer("TACG"), 3}
    };

    // Sort for insertion
    std::sort(kmers.begin(), kmers.end(),
        [](const auto& a, const auto& b) { return a.first < b.first; });

    auto keys = grove.insert_data("seq1", kmers, gst::sorted, gst::bulk);

    // Create edges representing the original sequence order
    // We need to find the original order based on data values
    std::vector<gdt::key<gdt::kmer, int>*> ordered_keys(4);
    for (auto* key : keys) {
        ordered_keys[key->get_data()] = key;
    }

    // Link in sequence order
    for (size_t i = 0; i + 1 < ordered_keys.size(); ++i) {
        grove.add_edge(ordered_keys[i], ordered_keys[i + 1]);
    }

    EXPECT_EQ(grove.edge_count(), 3);

    // Verify the chain
    EXPECT_TRUE(grove.has_edge(ordered_keys[0], ordered_keys[1]));
    EXPECT_TRUE(grove.has_edge(ordered_keys[1], ordered_keys[2]));
    EXPECT_TRUE(grove.has_edge(ordered_keys[2], ordered_keys[3]));
}

// Test maximum k-mer length (k=32)
TEST_F(KmerGroveTest, MaxLengthKmer) {
    std::string seq32(32, 'A');
    gdt::kmer k32(seq32);

    grove.insert_data("seq1", k32, 1);

    auto results = grove.intersect(k32, "seq1");
    ASSERT_EQ(results.get_keys().size(), 1);
    EXPECT_EQ(results.get_keys()[0]->get_value().get_k(), 32);
}