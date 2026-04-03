/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <filesystem>

// genogrove
#include <genogrove/io/indexed_fasta.hpp>

namespace fs = std::filesystem;
namespace gio = genogrove::io;

// ==========================================
// Test Fixture
// ==========================================

class indexedFastaTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path fasta_path;

    void SetUp() override {
        test_data_dir = fs::current_path() / "io" / "data";
        fasta_path = test_data_dir / "test_indexed.fa";
    }

    void TearDown() override {
        // Clean up generated .fai index
        fs::path fai_path = fasta_path;
        fai_path += ".fai";
        if (fs::exists(fai_path)) {
            fs::remove(fai_path);
        }
    }
};

// ==========================================
// Index Query Tests
// ==========================================

TEST_F(indexedFastaTest, sequenceCount) {
    gio::indexed_fasta fasta(fasta_path);
    EXPECT_EQ(fasta.sequence_count(), 3);
}

TEST_F(indexedFastaTest, sequenceNames) {
    gio::indexed_fasta fasta(fasta_path);
    EXPECT_EQ(fasta.sequence_name(0), "chr1");
    EXPECT_EQ(fasta.sequence_name(1), "chr2");
    EXPECT_EQ(fasta.sequence_name(2), "chrM");
}

TEST_F(indexedFastaTest, sequenceLengths) {
    gio::indexed_fasta fasta(fasta_path);
    EXPECT_EQ(fasta.sequence_length("chr1"), 40);
    EXPECT_EQ(fasta.sequence_length("chr2"), 12);
    EXPECT_EQ(fasta.sequence_length("chrM"), 30);
}

TEST_F(indexedFastaTest, hasSequence) {
    gio::indexed_fasta fasta(fasta_path);
    EXPECT_TRUE(fasta.has_sequence("chr1"));
    EXPECT_TRUE(fasta.has_sequence("chr2"));
    EXPECT_TRUE(fasta.has_sequence("chrM"));
    EXPECT_FALSE(fasta.has_sequence("chrX"));
    EXPECT_FALSE(fasta.has_sequence(""));
}

// ==========================================
// Region Fetch Tests
// ==========================================

TEST_F(indexedFastaTest, fetchRegion) {
    gio::indexed_fasta fasta(fasta_path);

    // First 10 bases of chr1 (0-based half-open)
    std::string seq = fasta.fetch("chr1", 0, 10);
    EXPECT_EQ(seq, "ATCGATCGAT");
    EXPECT_EQ(seq.size(), 10);
}

TEST_F(indexedFastaTest, fetchAcrossLines) {
    gio::indexed_fasta fasta(fasta_path);

    // Fetch across the line boundary in chr1 (positions 18-22 span both lines)
    std::string seq = fasta.fetch("chr1", 18, 22);
    EXPECT_EQ(seq, "CGAT");
}

TEST_F(indexedFastaTest, fetchEntireSequence) {
    gio::indexed_fasta fasta(fasta_path);

    std::string seq = fasta.fetch("chr2");
    EXPECT_EQ(seq, "GCTAGCTAGCTA");
    EXPECT_EQ(seq.size(), 12);
}

TEST_F(indexedFastaTest, fetchEntireMultilineSequence) {
    gio::indexed_fasta fasta(fasta_path);

    std::string seq = fasta.fetch("chr1");
    EXPECT_EQ(seq.size(), 40);
    EXPECT_EQ(seq, "ATCGATCGATCGATCGATCGATCGATCGATCGATCGATCG");
}

TEST_F(indexedFastaTest, fetchSingleBase) {
    gio::indexed_fasta fasta(fasta_path);

    std::string seq = fasta.fetch("chr1", 0, 1);
    EXPECT_EQ(seq, "A");
}

TEST_F(indexedFastaTest, fetchLastBase) {
    gio::indexed_fasta fasta(fasta_path);

    std::string seq = fasta.fetch("chr2", 11, 12);
    EXPECT_EQ(seq, "A");
}

// ==========================================
// Error Handling Tests
// ==========================================

TEST_F(indexedFastaTest, nonExistentFileThrows) {
    EXPECT_THROW(
        { gio::indexed_fasta fasta{"/nonexistent/path/genome.fa"}; },
        std::runtime_error
    );
}

TEST_F(indexedFastaTest, fetchUnknownSequenceThrows) {
    gio::indexed_fasta fasta(fasta_path);
    EXPECT_THROW(fasta.fetch("chrX", 0, 10), std::out_of_range);
}

TEST_F(indexedFastaTest, fetchEntireUnknownSequenceThrows) {
    gio::indexed_fasta fasta(fasta_path);
    EXPECT_THROW(fasta.fetch("chrX"), std::out_of_range);
}

TEST_F(indexedFastaTest, fetchInvalidRegionThrows) {
    gio::indexed_fasta fasta(fasta_path);
    EXPECT_THROW(fasta.fetch("chr1", 10, 10), std::runtime_error);
    EXPECT_THROW(fasta.fetch("chr1", 20, 10), std::runtime_error);
}

TEST_F(indexedFastaTest, sequenceNameOutOfRangeThrows) {
    gio::indexed_fasta fasta(fasta_path);
    EXPECT_THROW(fasta.sequence_name(3), std::out_of_range);
    EXPECT_THROW(fasta.sequence_name(100), std::out_of_range);
}

TEST_F(indexedFastaTest, sequenceLengthUnknownNameThrows) {
    gio::indexed_fasta fasta(fasta_path);
    EXPECT_THROW(fasta.sequence_length("chrX"), std::out_of_range);
}

// ==========================================
// Move Semantics Tests
// ==========================================

TEST_F(indexedFastaTest, moveConstruction) {
    gio::indexed_fasta fasta1(fasta_path);
    EXPECT_EQ(fasta1.sequence_count(), 3);

    gio::indexed_fasta fasta2(std::move(fasta1));
    EXPECT_EQ(fasta2.sequence_count(), 3);
    EXPECT_EQ(fasta2.fetch("chr2"), "GCTAGCTAGCTA");
}

TEST_F(indexedFastaTest, moveAssignment) {
    gio::indexed_fasta fasta1(fasta_path);
    gio::indexed_fasta fasta2(fasta_path);

    fasta2 = std::move(fasta1);
    EXPECT_EQ(fasta2.sequence_count(), 3);
    EXPECT_EQ(fasta2.fetch("chr1", 0, 4), "ATCG");
}

// ==========================================
// Index Auto-Creation Test
// ==========================================

TEST_F(indexedFastaTest, createsIndexFile) {
    fs::path fai_path = fasta_path;
    fai_path += ".fai";

    // Ensure no pre-existing index
    if (fs::exists(fai_path)) {
        fs::remove(fai_path);
    }
    ASSERT_FALSE(fs::exists(fai_path));

    {
        gio::indexed_fasta fasta(fasta_path);
        EXPECT_EQ(fasta.sequence_count(), 3);
    }

    // fai_load should have created the index
    EXPECT_TRUE(fs::exists(fai_path));
}