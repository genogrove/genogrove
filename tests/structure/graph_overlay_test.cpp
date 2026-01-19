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
    gst::grove<gdt::interval, std::string> grove(3);
    EXPECT_EQ(grove.edge_count(), 0); // there should no edges

    // add data
    auto* k1 = grove.insert_data("chr1",
        gdt::interval{10, 20}, "exon1", gst::sorted);
    auto* k2 = grove.insert_data("chr1",
        gdt::interval{25, 35}, "exon2", gst::sorted);
    auto* k3 = grove.insert_data("chr1",
        gdt::interval{40, 50},"exon3", gst::sorted);
    auto* k4 = grove.insert_data("chr1",
        gdt::interval{55, 65}, "exon4", gst::sorted);

    // add edges
    grove.add_edge(k1, k2);
    grove.add_edge(k2, k3);
    grove.add_edge(k1, k4);

    EXPECT_EQ(grove.edge_count(), 3);
    // check the edges
    EXPECT_TRUE(grove.has_edge(k1, k2));
    EXPECT_TRUE(grove.has_edge(k2, k3));
    EXPECT_TRUE(grove.has_edge(k1, k4));
    EXPECT_FALSE(grove.has_edge(k3, k4));
    EXPECT_EQ(grove.graph().out_degree(k1), 2);
    EXPECT_EQ(grove.graph().out_degree(k2), 1);
}

TEST(GraphOverlayTest, EdgeAdditionWithMetadata) {
    gst::grove<gdt::interval, std::string, TranscriptEdge> grove(3);
    EXPECT_EQ(grove.edge_count(), 0); // there should be no edges

    // add data
    auto* k1 = grove.insert_data("chr1",
        gdt::interval{10, 20}, "exon1", gst::sorted);
    auto* k2 = grove.insert_data("chr1",
        gdt::interval{25, 35}, "exon2", gst::sorted);
    auto* k3 = grove.insert_data("chr1",
        gdt::interval{40, 50},"exon3", gst::sorted);
    auto* k4 = grove.insert_data("chr1",
        gdt::interval{55, 65}, "exon4", gst::sorted);

    TranscriptEdge edge1{"transcript_1", "canonical",
        0.95, 150};
    TranscriptEdge edge2{"transcript_2", "non-canonical",
        0.75, 45};
    grove.add_edge(k1, k2, edge1);
    grove.add_edge(k2, k3, edge2);

    EXPECT_EQ(grove.edge_count(), 2);
    EXPECT_TRUE(grove.has_edge(k1, k2));
    EXPECT_TRUE(grove.has_edge(k2, k3));
    auto neighbors1 = grove.get_neighbors(k1);
    ASSERT_EQ(neighbors1.size(), 1);
    EXPECT_EQ(neighbors1[0], k2);
    auto neighbors2 = grove.get_neighbors(k2);
    ASSERT_EQ(neighbors2.size(), 1);
    EXPECT_EQ(neighbors2[0], k3);
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

TEST(GraphOverlayTest, CrossChromosomeEdges) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Insert exons into chr1
    auto* chr1_exon1 = grove.insert_data(
        "chr1",
        gdt::interval{1000, 1200},
        "chr1_exon1",
        gst::sorted);
    auto* chr1_exon2 = grove.insert_data(
        "chr1",
        gdt::interval{1500, 1700},
        "chr1_exon2",
        gst::sorted);
    auto* chr1_exon3 = grove.insert_data(
        "chr1",
        gdt::interval{2000, 2200},
        "chr1_exon3",
        gst::sorted);

    // Insert exons into chr22 (simulating BCR-ABL fusion)
    auto* chr22_exon1 = grove.insert_data(
        "chr22",
        gdt::interval{500, 700},
        "chr22_exon1",
        gst::sorted);
    auto* chr22_exon2 = grove.insert_data(
        "chr22",
        gdt::interval{1000, 1200},
        "chr22_exon2",
        gst::sorted);

    // Create within-chromosome edges (normal transcript paths)
    grove.add_edge(chr1_exon1, chr1_exon2);
    grove.add_edge(chr22_exon1, chr22_exon2);

    // Create cross-chromosome edge (fusion junction)
    grove.add_edge(chr22_exon2, chr1_exon2);

    // Verify total edge count
    EXPECT_EQ(grove.edge_count(), 3);

    // Verify within-chromosome edges exist
    EXPECT_TRUE(grove.has_edge(chr1_exon1, chr1_exon2));
    EXPECT_TRUE(grove.has_edge(chr22_exon1, chr22_exon2));

    // Verify cross-chromosome edge exists
    EXPECT_TRUE(grove.has_edge(chr22_exon2, chr1_exon2));

    // Verify neighbors across chromosomes
    auto chr22_exon2_neighbors = grove.get_neighbors(chr22_exon2);
    ASSERT_EQ(chr22_exon2_neighbors.size(), 1);
    EXPECT_EQ(chr22_exon2_neighbors[0], chr1_exon2);

    // Verify out-degrees
    EXPECT_EQ(grove.out_degree(chr1_exon1), 1);
    EXPECT_EQ(grove.out_degree(chr22_exon2), 1);
    EXPECT_EQ(grove.out_degree(chr1_exon2), 0); // Terminal node
}

TEST(GraphOverlayTest, CrossChromosomeEdgesWithMetadata) {
    gst::grove<gdt::interval, std::string, TranscriptEdge> grove(5);

    // Insert exons from chr9 (BCR gene)
    auto* bcr_exon1 = grove.insert_data(
        "chr9",
        gdt::interval{1000, 1200},
        "BCR_exon1",
        gst::sorted);
    auto* bcr_exon2 = grove.insert_data(
        "chr9",
        gdt::interval{1500, 1700},
        "BCR_exon2",
        gst::sorted);

    // Insert exons from chr22 (ABL1 gene)
    auto* abl_exon1 = grove.insert_data(
        "chr22",
        gdt::interval{500, 700},
        "ABL1_exon1",
        gst::sorted);
    auto* abl_exon2 = grove.insert_data(
        "chr22",
        gdt::interval{1000, 1200},
        "ABL1_exon2",
        gst::sorted);

    // Normal transcript paths with high confidence
    grove.add_edge(
        bcr_exon1,
        bcr_exon2,
        TranscriptEdge{"BCR_normal", "canonical", 0.98, 250});
    grove.add_edge(
        abl_exon1,
        abl_exon2,
        TranscriptEdge{"ABL1_normal", "canonical", 0.97, 200});

    // Fusion transcript (BCR-ABL) with lower confidence
    grove.add_edge(
        bcr_exon1,
        abl_exon2,
        TranscriptEdge{"BCR-ABL_fusion", "translocation", 0.85, 45});

    // Verify edge counts
    EXPECT_EQ(grove.edge_count(), 3);

    // Verify cross-chromosome fusion edge
    EXPECT_TRUE(grove.has_edge(bcr_exon1, abl_exon2));

    // Get edge list and verify fusion metadata
    auto bcr_exon1_edges = grove.get_edge_list(bcr_exon1);
    ASSERT_EQ(bcr_exon1_edges.size(), 2); // Normal + fusion

    // Find the fusion edge
    bool found_fusion = false;
    for (const auto& edge_info : bcr_exon1_edges) {
        if (edge_info.target == abl_exon2) {
            found_fusion = true;
            EXPECT_EQ(edge_info.metadata.transcript_id, "BCR-ABL_fusion");
            EXPECT_EQ(edge_info.metadata.junction_type, "translocation");
            EXPECT_EQ(edge_info.metadata.confidence, 0.85);
            EXPECT_EQ(edge_info.metadata.read_support, 45);
        }
    }
    EXPECT_TRUE(found_fusion) << "Should find fusion edge in edge list";

    // Filter by translocation junction type
    auto translocation_neighbors = grove.graph().get_neighbors_if(bcr_exon1,
        [](const auto& edge) {
            return edge.junction_type == "translocation";
        });

    ASSERT_EQ(translocation_neighbors.size(), 1);
    EXPECT_EQ(translocation_neighbors[0], abl_exon2);

    // Filter by high confidence (only normal transcripts)
    auto high_conf_neighbors = grove.graph().get_neighbors_if(bcr_exon1,
        [](const auto& edge) {
            return edge.confidence > 0.90;
        });

    ASSERT_EQ(high_conf_neighbors.size(), 1);
    EXPECT_EQ(high_conf_neighbors[0], bcr_exon2);
}

TEST(GraphOverlayTest, MultipleChromosomesComplexGraph) {
    gst::grove<gdt::interval, std::string, TranscriptEdge> grove(5);

    // Create a complex graph spanning 3 chromosomes
    // Simulating chimeric transcripts in cancer

    // Chromosome 1 exons
    auto* chr1_e1 = grove.insert_data("chr1", gdt::interval{100, 200}, "chr1_e1", gst::sorted);
    auto* chr1_e2 = grove.insert_data("chr1", gdt::interval{300, 400}, "chr1_e2", gst::sorted);
    auto* chr1_e3 = grove.insert_data("chr1", gdt::interval{500, 600}, "chr1_e3", gst::sorted);

    // Chromosome 2 exons
    auto* chr2_e1 = grove.insert_data("chr2", gdt::interval{100, 200}, "chr2_e1", gst::sorted);
    auto* chr2_e2 = grove.insert_data("chr2", gdt::interval{300, 400}, "chr2_e2", gst::sorted);

    // Chromosome 3 exons
    auto* chr3_e1 = grove.insert_data("chr3", gdt::interval{100, 200}, "chr3_e1", gst::sorted);

    // Normal within-chromosome paths
    grove.add_edge(chr1_e1, chr1_e2, TranscriptEdge{"T1_normal", "canonical", 0.95, 150});
    grove.add_edge(chr1_e2, chr1_e3, TranscriptEdge{"T1_normal", "canonical", 0.94, 145});
    grove.add_edge(chr2_e1, chr2_e2, TranscriptEdge{"T2_normal", "canonical", 0.96, 160});

    // Chimeric transcript: chr1 -> chr2 -> chr3
    grove.add_edge(chr1_e2, chr2_e1, TranscriptEdge{"Chimeric1", "fusion", 0.70, 35});
    grove.add_edge(chr2_e2, chr3_e1, TranscriptEdge{"Chimeric1", "fusion", 0.68, 30});

    // Another chimeric: chr1 -> chr3
    grove.add_edge(chr1_e1, chr3_e1, TranscriptEdge{"Chimeric2", "translocation", 0.65, 25});

    // Verify total edges
    EXPECT_EQ(grove.edge_count(), 6);

    // Verify chr1_e2 has outgoing edges to both chr1_e3 and chr2_e1
    EXPECT_EQ(grove.out_degree(chr1_e2), 2);

    // Filter to get only chimeric paths (fusion or translocation)
    auto chimeric_from_chr1_e1 = grove.graph().get_neighbors_if(chr1_e1,
        [](const auto& edge) {
            return edge.junction_type == "fusion" || edge.junction_type == "translocation";
        });

    ASSERT_EQ(chimeric_from_chr1_e1.size(), 1);
    EXPECT_EQ(chimeric_from_chr1_e1[0], chr3_e1);

    // Verify we can traverse the chimeric path: chr1 -> chr2 -> chr3
    auto chr1_e2_chimeric = grove.graph().get_neighbors_if(chr1_e2,
        [](const auto& edge) {
            return edge.junction_type == "fusion";
        });

    ASSERT_EQ(chr1_e2_chimeric.size(), 1);
    EXPECT_EQ(chr1_e2_chimeric[0], chr2_e1);

    auto chr2_e2_chimeric = grove.graph().get_neighbors_if(chr2_e2,
        [](const auto& edge) {
            return edge.junction_type == "fusion";
        });

    ASSERT_EQ(chr2_e2_chimeric.size(), 1);
    EXPECT_EQ(chr2_e2_chimeric[0], chr3_e1);

    // Verify vertex count with edges (only counts vertices with outgoing edges)
    // chr1_e1, chr1_e2, chr2_e1, chr2_e2 have outgoing edges (4 vertices)
    // chr1_e3 and chr3_e1 only have incoming edges, so they're not counted
    EXPECT_EQ(grove.vertex_count_with_edges(), 4);

    // Verify total vertex count (all keys)
    EXPECT_EQ(grove.vertex_count(), 6);  // All 6 keys inserted
}

// =============================================================================
// External Key Tests
// =============================================================================

TEST(ExternalKeyTest, BasicExternalKeyCreation) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Create external key
    auto* ext = grove.add_external_key(gdt::interval{5000, 5500}, "enhancer_1");

    ASSERT_NE(ext, nullptr);
    EXPECT_EQ(ext->get_value().get_start(), 5000);
    EXPECT_EQ(ext->get_value().get_end(), 5500);
    EXPECT_EQ(ext->get_data(), "enhancer_1");

    // External keys contribute to total vertex count
    EXPECT_EQ(grove.vertex_count(), 1);
    EXPECT_EQ(grove.external_vertex_count(), 1);
    EXPECT_EQ(grove.indexed_vertex_count(), 0);
}

TEST(ExternalKeyTest, VertexCountingSeparation) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Insert indexed keys
    grove.insert_data("chr1", gdt::interval{100, 200}, "exon1", gst::sorted);
    grove.insert_data("chr1", gdt::interval{300, 400}, "exon2", gst::sorted);
    grove.insert_data("chr1", gdt::interval{500, 600}, "exon3", gst::sorted);

    // Add external keys
    grove.add_external_key(gdt::interval{5000, 5500}, "enhancer_1");
    grove.add_external_key(gdt::interval{6000, 6500}, "enhancer_2");

    // Verify counts
    EXPECT_EQ(grove.indexed_vertex_count(), 3);
    EXPECT_EQ(grove.external_vertex_count(), 2);
    EXPECT_EQ(grove.vertex_count(), 5);  // Total = indexed + external
}

TEST(ExternalKeyTest, EdgeBetweenIndexedAndExternal) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Create indexed key
    auto* exon = grove.insert_data("chr1", gdt::interval{1000, 1200}, "exon1", gst::sorted);

    // Create external key
    auto* enhancer = grove.add_external_key(gdt::interval{5000, 5500}, "enhancer_1");

    // Create edge from indexed to external
    grove.add_edge(exon, enhancer);

    EXPECT_EQ(grove.edge_count(), 1);
    EXPECT_TRUE(grove.has_edge(exon, enhancer));
    EXPECT_EQ(grove.out_degree(exon), 1);

    auto neighbors = grove.get_neighbors(exon);
    ASSERT_EQ(neighbors.size(), 1);
    EXPECT_EQ(neighbors[0], enhancer);
}

TEST(ExternalKeyTest, EdgeBetweenExternalAndIndexed) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Create external key
    auto* enhancer = grove.add_external_key(gdt::interval{5000, 5500}, "enhancer_1");

    // Create indexed key
    auto* exon = grove.insert_data("chr1", gdt::interval{1000, 1200}, "exon1", gst::sorted);

    // Create edge from external to indexed
    grove.add_edge(enhancer, exon);

    EXPECT_EQ(grove.edge_count(), 1);
    EXPECT_TRUE(grove.has_edge(enhancer, exon));
    EXPECT_EQ(grove.out_degree(enhancer), 1);

    auto neighbors = grove.get_neighbors(enhancer);
    ASSERT_EQ(neighbors.size(), 1);
    EXPECT_EQ(neighbors[0], exon);
}

TEST(ExternalKeyTest, EdgeBetweenTwoExternalKeys) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Create two external keys
    auto* ext1 = grove.add_external_key(gdt::interval{5000, 5500}, "enhancer_1");
    auto* ext2 = grove.add_external_key(gdt::interval{6000, 6500}, "enhancer_2");

    // Create edge between them
    grove.add_edge(ext1, ext2);

    EXPECT_EQ(grove.edge_count(), 1);
    EXPECT_TRUE(grove.has_edge(ext1, ext2));
    EXPECT_EQ(grove.out_degree(ext1), 1);
    EXPECT_EQ(grove.out_degree(ext2), 0);

    // Verify vertex counts
    EXPECT_EQ(grove.indexed_vertex_count(), 0);
    EXPECT_EQ(grove.external_vertex_count(), 2);
    EXPECT_EQ(grove.vertex_count(), 2);
}

TEST(ExternalKeyTest, ExternalKeysNotInSpatialQueries) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Create indexed key
    grove.insert_data("chr1", gdt::interval{1000, 1200}, "exon1", gst::sorted);

    // Create external key that overlaps the query range
    grove.add_external_key(gdt::interval{1100, 1300}, "enhancer_1");

    // Query should only return indexed key, not external
    gdt::interval query{1050, 1250};
    auto result = grove.intersect(query, "chr1");

    // Only the indexed key should be found
    auto keys = result.get_keys();
    EXPECT_EQ(keys.size(), 1);
    EXPECT_EQ(keys[0]->get_data(), "exon1");
}

TEST(ExternalKeyTest, MultipleExternalKeysWithEdges) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Create indexed exons
    auto* exon1 = grove.insert_data("chr1", gdt::interval{1000, 1200}, "exon1", gst::sorted);
    auto* exon2 = grove.insert_data("chr1", gdt::interval{2000, 2200}, "exon2", gst::sorted);

    // Create external regulatory elements
    auto* enhancer = grove.add_external_key(gdt::interval{5000, 5500}, "enhancer");
    auto* promoter = grove.add_external_key(gdt::interval{500, 600}, "promoter");
    auto* silencer = grove.add_external_key(gdt::interval{8000, 8500}, "silencer");

    // Create complex edge relationships
    grove.add_edge(enhancer, exon1);  // enhancer regulates exon1
    grove.add_edge(enhancer, exon2);  // enhancer regulates exon2
    grove.add_edge(promoter, exon1);  // promoter activates exon1
    grove.add_edge(silencer, exon2);  // silencer represses exon2

    // Verify edge counts
    EXPECT_EQ(grove.edge_count(), 4);
    EXPECT_EQ(grove.out_degree(enhancer), 2);
    EXPECT_EQ(grove.out_degree(promoter), 1);
    EXPECT_EQ(grove.out_degree(silencer), 1);

    // Verify counts
    EXPECT_EQ(grove.indexed_vertex_count(), 2);
    EXPECT_EQ(grove.external_vertex_count(), 3);
    EXPECT_EQ(grove.vertex_count(), 5);
}

TEST(ExternalKeyTest, ExternalKeyWithEdgeMetadata) {
    gst::grove<gdt::interval, std::string, TranscriptEdge> grove(5);

    // Create indexed exon
    auto* exon = grove.insert_data("chr1", gdt::interval{1000, 1200}, "exon1", gst::sorted);

    // Create external enhancer
    auto* enhancer = grove.add_external_key(gdt::interval{5000, 5500}, "enhancer");

    // Create edge with metadata
    TranscriptEdge edge_meta{"regulatory", "enhancer_link", 0.85, 50};
    grove.add_edge(enhancer, exon, edge_meta);

    EXPECT_EQ(grove.edge_count(), 1);
    EXPECT_TRUE(grove.has_edge(enhancer, exon));

    // Verify edge metadata
    auto edges = grove.get_edge_list(enhancer);
    ASSERT_EQ(edges.size(), 1);
    EXPECT_EQ(edges[0].metadata.transcript_id, "regulatory");
    EXPECT_EQ(edges[0].metadata.junction_type, "enhancer_link");
    EXPECT_EQ(edges[0].metadata.confidence, 0.85);
    EXPECT_EQ(edges[0].metadata.read_support, 50);
}

TEST(ExternalKeyTest, SerializationDeserialization) {
    std::stringstream ss;

    // Create grove with indexed and external keys
    {
        gst::grove<gdt::interval, std::string> grove(5);

        // Indexed keys
        grove.insert_data("chr1", gdt::interval{1000, 1200}, "exon1", gst::sorted);
        grove.insert_data("chr1", gdt::interval{2000, 2200}, "exon2", gst::sorted);

        // External keys
        grove.add_external_key(gdt::interval{5000, 5500}, "enhancer_1");
        grove.add_external_key(gdt::interval{6000, 6500}, "enhancer_2");
        grove.add_external_key(gdt::interval{7000, 7500}, "enhancer_3");

        // Verify counts before serialization
        EXPECT_EQ(grove.indexed_vertex_count(), 2);
        EXPECT_EQ(grove.external_vertex_count(), 3);
        EXPECT_EQ(grove.vertex_count(), 5);

        grove.serialize(ss);
    }

    // Deserialize and verify
    {
        ss.seekg(0);
        auto restored = gst::grove<gdt::interval, std::string>::deserialize(ss);

        // Verify counts after deserialization
        EXPECT_EQ(restored.indexed_vertex_count(), 2);
        EXPECT_EQ(restored.external_vertex_count(), 3);
        EXPECT_EQ(restored.vertex_count(), 5);

        // Verify indexed keys are queryable
        gdt::interval query{1050, 1150};
        auto result = restored.intersect(query, "chr1");
        auto keys = result.get_keys();
        EXPECT_EQ(keys.size(), 1);
        EXPECT_EQ(keys[0]->get_data(), "exon1");
    }
}

TEST(ExternalKeyTest, PointerStabilityForExternalKeys) {
    gst::grove<gdt::interval, std::string> grove(3);  // Small order to force possible reallocations

    // Create many external keys to test pointer stability
    std::vector<gdt::key<gdt::interval, std::string>*> ext_keys;
    for (int i = 0; i < 100; ++i) {
        size_t start = i * 1000;
        size_t end = start + 500;
        auto* ext = grove.add_external_key(
            gdt::interval{start, end},
            "ext_" + std::to_string(i));
        ext_keys.push_back(ext);
    }

    // All pointers should still be valid
    for (int i = 0; i < 100; ++i) {
        EXPECT_EQ(ext_keys[i]->get_value().get_start(), i * 1000);
        EXPECT_EQ(ext_keys[i]->get_data(), "ext_" + std::to_string(i));
    }

    // Create edges using stored pointers
    for (int i = 0; i < 99; ++i) {
        grove.add_edge(ext_keys[i], ext_keys[i + 1]);
    }

    EXPECT_EQ(grove.edge_count(), 99);
}

TEST(ExternalKeyTest, MixedGraphWithExternalKeys) {
    gst::grove<gdt::interval, std::string> grove(5);

    // Create a complex graph mixing indexed and external keys
    // Simulating gene regulation network

    // Indexed genes/exons
    auto* gene1_exon1 = grove.insert_data("chr1", gdt::interval{1000, 1500}, "gene1_exon1", gst::sorted);
    auto* gene1_exon2 = grove.insert_data("chr1", gdt::interval{2000, 2500}, "gene1_exon2", gst::sorted);
    auto* gene2_exon1 = grove.insert_data("chr2", gdt::interval{1000, 1500}, "gene2_exon1", gst::sorted);

    // External regulatory elements (not queryable by position)
    auto* tf1 = grove.add_external_key(gdt::interval{0, 0}, "transcription_factor_1");
    auto* tf2 = grove.add_external_key(gdt::interval{0, 0}, "transcription_factor_2");
    auto* enhancer = grove.add_external_key(gdt::interval{50000, 50500}, "enhancer_region");

    // Indexed to indexed edges (normal splice graph)
    grove.add_edge(gene1_exon1, gene1_exon2);

    // External to indexed edges (TF binds to gene)
    grove.add_edge(tf1, gene1_exon1);
    grove.add_edge(tf2, gene1_exon1);
    grove.add_edge(tf1, gene2_exon1);

    // External to external edges (regulatory network)
    grove.add_edge(enhancer, tf1);
    grove.add_edge(enhancer, tf2);

    // Verify total edge count
    EXPECT_EQ(grove.edge_count(), 6);

    // Verify vertex counts
    EXPECT_EQ(grove.indexed_vertex_count(), 3);
    EXPECT_EQ(grove.external_vertex_count(), 3);
    EXPECT_EQ(grove.vertex_count(), 6);

    // Verify we can traverse from enhancer through TF to genes
    auto enhancer_neighbors = grove.get_neighbors(enhancer);
    EXPECT_EQ(enhancer_neighbors.size(), 2);  // tf1 and tf2

    auto tf1_neighbors = grove.get_neighbors(tf1);
    EXPECT_EQ(tf1_neighbors.size(), 2);  // gene1_exon1 and gene2_exon1
}

