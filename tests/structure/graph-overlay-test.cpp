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

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/graph_overlay.hpp>

// standard
#include <string>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

// =============================================================================
// Graph Overlay Tests
// =============================================================================

// Edge metadata for transcript paths
struct TranscriptEdge {
    std::string transcript_id;
    std::string junction_type;
    double confidence;
    int read_support;

    bool operator==(const TranscriptEdge& other) const {
        return transcript_id == other.transcript_id &&
               junction_type == other.junction_type &&
               confidence == other.confidence &&
               read_support == other.read_support;
    }
};

TEST(GraphOverlayTest, BasicEdgeAddition) {
    gst::grove<gdt::interval, std::string> grove(5);

    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);

    grove.add_edge(k1, k2);

    auto neighbors = grove.get_neighbors(k1);
    ASSERT_EQ(neighbors.size(), 1);
    EXPECT_EQ(neighbors[0], k2);
}

TEST(GraphOverlayTest, EdgeAdditionWithMetadata) {
    gst::grove<gdt::interval, std::string, TranscriptEdge> grove(5);

    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);

    TranscriptEdge edge{
        "transcript_1",
        "canonical",
        0.95,
        150};
    grove.add_edge(k1, k2, edge);

    auto neighbors = grove.get_neighbors(k1);
    ASSERT_EQ(neighbors.size(), 1);
    EXPECT_EQ(neighbors[0], k2);
    auto edges = grove.graph().get_edges(k1);
    ASSERT_EQ(edges.size(), 1);
    EXPECT_EQ(edges[0], edge);
}

TEST(GraphOverlayTest, OutDegree) {
    gst::grove<gdt::interval, std::string> grove(5);

    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);
    auto* k3 = grove.insert_data(
        "chr1",
        gdt::interval{40, 50},
        "exon3",
        gst::sorted);

    EXPECT_EQ(grove.graph().out_degree(k1), 0);

    grove.add_edge(k1, k2);
    EXPECT_EQ(grove.graph().out_degree(k1), 1);

    grove.add_edge(k1, k3);
    EXPECT_EQ(grove.graph().out_degree(k1), 2);

    EXPECT_EQ(grove.graph().out_degree(k2), 0);
}

TEST(GraphOverlayTest, EdgeCount) {
    gst::grove<gdt::interval, std::string> grove(5);

    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);
    auto* k3 = grove.insert_data(
        "chr1",
        gdt::interval{40, 50},
        "exon3",
        gst::sorted);

    EXPECT_EQ(grove.graph().edge_count(), 0);

    grove.add_edge(k1, k2);
    EXPECT_EQ(grove.graph().edge_count(), 1);

    grove.add_edge(k1, k3);
    EXPECT_EQ(grove.graph().edge_count(), 2);

    grove.add_edge(k2, k3);
    EXPECT_EQ(grove.graph().edge_count(), 3);
}

TEST(GraphOverlayTest, EdgeRemoval) {
    gst::grove<gdt::interval, std::string> grove(5);

    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);
    auto* k3 = grove.insert_data(
        "chr1",
        gdt::interval{40, 50},
        "exon3",
        gst::sorted);

    grove.add_edge(k1, k2);
    grove.add_edge(k1, k3);
    ASSERT_EQ(grove.graph().out_degree(k1), 2);

    grove.remove_edge(k1, k2);
    EXPECT_EQ(grove.graph().out_degree(k1), 1);

    auto neighbors = grove.get_neighbors(k1);
    ASSERT_EQ(neighbors.size(), 1);
    EXPECT_EQ(neighbors[0], k3);
}

TEST(GraphOverlayTest, ClearEdges) {
    gst::grove<gdt::interval, std::string> grove(5);

    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);

    grove.add_edge(k1, k2);
    ASSERT_EQ(grove.graph().edge_count(), 1);

    grove.graph().clear();
    EXPECT_EQ(grove.graph().edge_count(), 0);
    EXPECT_EQ(grove.graph().out_degree(k1), 0);
}

TEST(GraphOverlayTest, IsEmpty) {
    gst::grove<gdt::interval, std::string> grove(5);

    EXPECT_TRUE(grove.graph().empty());

    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);

    grove.add_edge(k1, k2);
    EXPECT_FALSE(grove.graph().empty());

    grove.graph().clear();
    EXPECT_TRUE(grove.graph().empty());
}

TEST(GraphOverlayTest, MultiplePathsWithMetadata) {
    gst::grove<gdt::interval, std::string, TranscriptEdge> grove(5);

    auto* exon1 = grove.insert_data(
        "chr1",
        gdt::interval{1000, 1500},
        "exon1",
        gst::sorted);
    auto* exon2 = grove.insert_data(
        "chr1",
        gdt::interval{2000, 2300},
        "exon2",
        gst::sorted);
    auto* exon3 = grove.insert_data(
        "chr1",
        gdt::interval{3000, 3400},
        "exon3",
        gst::sorted);
    auto* exon4 = grove.insert_data(
        "chr1",
        gdt::interval{2500, 2800},
        "exon4",
        gst::sorted);

    // Transcript 1: exon1 -> exon2 -> exon3
    grove.add_edge(
        exon1,
        exon2,
        TranscriptEdge{
            "transcript_1",
            "canonical",
            0.95,
            150});
    grove.add_edge(
        exon2,
        exon3,
        TranscriptEdge{
            "transcript_1",
            "canonical",
            0.92,
            140});

    // Transcript 2: exon1 -> exon4 -> exon3 (alternative path)
    grove.add_edge(
        exon1,
        exon4, TranscriptEdge{
            "transcript_2",
            "non-canonical",
            0.75, 45});
    grove.add_edge(
        exon4,
        exon3,
        TranscriptEdge{
            "transcript_2",
            "non-canonical",
            0.80,
            52});

    // Check exon1 has 2 outgoing edges
    EXPECT_EQ(grove.graph().out_degree(exon1), 2);

    // Get all neighbors
    auto all_neighbors = grove.get_neighbors(exon1);
    ASSERT_EQ(all_neighbors.size(), 2);
}

TEST(GraphOverlayTest, FilteredNeighborsByTranscriptId) {
    gst::grove<gdt::interval, std::string, TranscriptEdge> grove(5);

    auto* exon1 = grove.insert_data(
        "chr1",
        gdt::interval{1000, 1500},
        "exon1",
        gst::sorted);
    auto* exon2 = grove.insert_data(
        "chr1",
        gdt::interval{2000, 2300},
        "exon2",
        gst::sorted);
    auto* exon4 = grove.insert_data(
        "chr1",
        gdt::interval{2500, 2800},
        "exon4",
        gst::sorted);

    grove.add_edge(
        exon1,
        exon2,
        TranscriptEdge{
            "transcript_1",
            "canonical",
            0.95,
            150});
    grove.add_edge(
        exon1,
        exon4,
        TranscriptEdge{
            "transcript_2",
            "non-canonical",
            0.75,
            45});

    // Filter by transcript_id
    auto transcript1_neighbors = grove.graph().get_neighbors_if(exon1,
        [](const auto& edge) {
            return edge.transcript_id == "transcript_1";
        });

    ASSERT_EQ(transcript1_neighbors.size(), 1);
    EXPECT_EQ(transcript1_neighbors[0], exon2);

    auto transcript2_neighbors = grove.graph().get_neighbors_if(exon1,
        [](const auto& edge) {
            return edge.transcript_id == "transcript_2";
        });

    ASSERT_EQ(transcript2_neighbors.size(), 1);
    EXPECT_EQ(transcript2_neighbors[0], exon4);
}

TEST(GraphOverlayTest, FilteredNeighborsByConfidence) {
    gst::grove<gdt::interval, std::string, TranscriptEdge> grove(5);

    auto* exon1 = grove.insert_data(
        "chr1",
        gdt::interval{1000, 1500},
        "exon1",
        gst::sorted);
    auto* exon2 = grove.insert_data(
        "chr1",
        gdt::interval{2000, 2300},
        "exon2",
        gst::sorted);
    auto* exon4 = grove.insert_data(
        "chr1",
        gdt::interval{2500, 2800},
        "exon4",
        gst::sorted);

    grove.add_edge(
        exon1,
        exon2,
        TranscriptEdge{
            "transcript_1",
            "canonical",
            0.95,
            150});
    grove.add_edge(
        exon1,
        exon4,
        TranscriptEdge{
            "transcript_2",
            "non-canonical",
            0.75,
            45});

    // Filter by high confidence (> 0.90)
    auto high_conf_neighbors = grove.graph().get_neighbors_if(exon1,
        [](const auto& edge) {
            return edge.confidence > 0.90;
        });

    ASSERT_EQ(high_conf_neighbors.size(), 1);
    EXPECT_EQ(high_conf_neighbors[0], exon2);

    // Filter by low confidence (<= 0.80)
    auto low_conf_neighbors = grove.graph().get_neighbors_if(exon1,
        [](const auto& edge) {
            return edge.confidence <= 0.80;
        });

    ASSERT_EQ(low_conf_neighbors.size(), 1);
    EXPECT_EQ(low_conf_neighbors[0], exon4);
}

TEST(GraphOverlayTest, LinearPathTraversal) {
    gst::grove<gdt::interval, std::string> grove(5);

    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);
    auto* k3 = grove.insert_data(
        "chr1",
        gdt::interval{40, 50},
        "exon3",
        gst::sorted);

    grove.add_edge(k1, k2);
    grove.add_edge(k2, k3);

    // Traverse linear path: k1 -> k2 -> k3
    auto neighbors1 = grove.get_neighbors(k1);
    ASSERT_EQ(neighbors1.size(), 1);
    EXPECT_EQ(neighbors1[0], k2);

    auto neighbors2 = grove.get_neighbors(k2);
    ASSERT_EQ(neighbors2.size(), 1);
    EXPECT_EQ(neighbors2[0], k3);

    auto neighbors3 = grove.get_neighbors(k3);
    EXPECT_EQ(neighbors3.size(), 0);
}

TEST(GraphOverlayTest, BranchingPathTraversal) {
    gst::grove<gdt::interval, std::string> grove(5);

    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);
    auto* k3 = grove.insert_data(
        "chr1",
        gdt::interval{40, 50},
        "exon3",
        gst::sorted);
    auto* k4 = grove.insert_data(
        "chr1",
        gdt::interval{55, 65},
        "exon4",
        gst::sorted);

    // Create branching: k1 -> {k2, k3, k4}
    grove.add_edge(k1, k2);
    grove.add_edge(k1, k3);
    grove.add_edge(k1, k4);

    auto neighbors = grove.get_neighbors(k1);
    ASSERT_EQ(neighbors.size(), 3);

    // Check all three branches exist
    EXPECT_TRUE(std::find(neighbors.begin(), neighbors.end(), k2) != neighbors.end());
    EXPECT_TRUE(std::find(neighbors.begin(), neighbors.end(), k3) != neighbors.end());
    EXPECT_TRUE(std::find(neighbors.begin(), neighbors.end(), k4) != neighbors.end());
}

TEST(GraphOverlayTest, InsertReturnsValidPointers) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Test that insert_data returns valid pointers
    auto* k1 = grove.insert_data("chr1", gdt::interval{10, 20}, "exon1", gst::sorted);
    auto* k2 = grove.insert_data("chr1", gdt::interval{25, 35}, "exon2", gst::sorted);

    ASSERT_NE(k1, nullptr);
    ASSERT_NE(k2, nullptr);
    EXPECT_NE(k1, k2);

    // Verify the pointers point to the correct data
    EXPECT_EQ(k1->get_value().get_start(), 10);
    EXPECT_EQ(k1->get_value().get_end(), 20);
    EXPECT_EQ(k1->get_data(), "exon1");

    EXPECT_EQ(k2->get_value().get_start(), 25);
    EXPECT_EQ(k2->get_value().get_end(), 35);
    EXPECT_EQ(k2->get_data(), "exon2");
}

TEST(GraphOverlayTest, PointerStabilityAcrossSplits) {
    gst::grove<gdt::interval, std::string> grove(3); // Small order to force splits

    // Insert enough keys to cause node splits
    auto* k1 = grove.insert_data(
        "chr1",
        gdt::interval{10, 20},
        "exon1",
        gst::sorted);
    auto* k2 = grove.insert_data(
        "chr1",
        gdt::interval{25, 35},
        "exon2",
        gst::sorted);
    auto* k3 = grove.insert_data(
        "chr1",
        gdt::interval{40, 50},
        "exon3",
        gst::sorted);
    auto* k4 = grove.insert_data(
        "chr1",
        gdt::interval{55, 65},
        "exon4",
        gst::sorted);

    // Store original pointer values
    auto k1_addr = k1;
    auto k2_addr = k2;

    // Pointers should still be valid after splits
    EXPECT_EQ(k1, k1_addr);
    EXPECT_EQ(k2, k2_addr);

    // Data should still be accessible
    EXPECT_EQ(k1->get_value().get_start(), 10);
    EXPECT_EQ(k2->get_value().get_start(), 25);
}