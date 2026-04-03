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
#include <vector>

// genogrove
#include <genogrove/io/filetype_detector.hpp>
#include <genogrove/io/sequence_reader.hpp>

namespace fs = std::filesystem;
namespace gio = genogrove::io;

// ==========================================
// Test Fixture
// ==========================================

class sequencefileTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path fasta_path;
    fs::path fastq_path;
    fs::path fasta_gz_path;
    fs::path fastq_gz_path;
    fs::path empty_seq_path;

    void SetUp() override {
        test_data_dir = fs::current_path() / "io" / "data";
        fasta_path = test_data_dir / "test.fa";
        fastq_path = test_data_dir / "test.fq";
        fasta_gz_path = test_data_dir / "test.fa.gz";
        fastq_gz_path = test_data_dir / "test.fq.gz";
        empty_seq_path = test_data_dir / "test_empty_seq.fa";
    }
};

// ==========================================
// File Type Detection Tests
// ==========================================

TEST_F(sequencefileTest, detectFastaFileType) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(fasta_path);

    EXPECT_EQ(ftype, gio::filetype::FASTA);
    EXPECT_EQ(comp, gio::compression_type::NONE);
}

TEST_F(sequencefileTest, detectFastqFileType) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(fastq_path);

    EXPECT_EQ(ftype, gio::filetype::FASTQ);
    EXPECT_EQ(comp, gio::compression_type::NONE);
}

TEST_F(sequencefileTest, detectGzippedFastaFileType) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(fasta_gz_path);

    EXPECT_EQ(ftype, gio::filetype::FASTA);
    EXPECT_EQ(comp, gio::compression_type::GZIP);
}

TEST_F(sequencefileTest, detectGzippedFastqFileType) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(fastq_gz_path);

    EXPECT_EQ(ftype, gio::filetype::FASTQ);
    EXPECT_EQ(comp, gio::compression_type::GZIP);
}

// ==========================================
// FASTA Reading Tests
// ==========================================

TEST_F(sequencefileTest, readFastaBasic) {
    gio::sequence_reader reader(fasta_path);
    std::vector<gio::sequence_entry> entries;

    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty());

    ASSERT_EQ(entries.size(), 3);

    EXPECT_EQ(entries[0].name, "seq1");
    EXPECT_EQ(entries[0].comment, "first sequence");
    EXPECT_EQ(entries[0].sequence, "ATCGATCGATCG");
    EXPECT_FALSE(entries[0].quality.has_value());

    EXPECT_EQ(entries[1].name, "seq2");
    EXPECT_EQ(entries[1].comment, "second sequence");
    EXPECT_EQ(entries[1].sequence, "GCTAGCTAGCTAGCTAGCTAGCTA");
    EXPECT_FALSE(entries[1].quality.has_value());

    EXPECT_EQ(entries[2].name, "seq3");
    EXPECT_EQ(entries[2].comment, "");
    EXPECT_EQ(entries[2].sequence, "NNNNNNNNNN");
    EXPECT_FALSE(entries[2].quality.has_value());
}

TEST_F(sequencefileTest, readFastaGzipped) {
    gio::sequence_reader reader(fasta_gz_path);
    std::vector<gio::sequence_entry> entries;

    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty());
    ASSERT_EQ(entries.size(), 3);

    EXPECT_EQ(entries[0].name, "seq1");
    EXPECT_EQ(entries[0].sequence, "ATCGATCGATCG");
}

// ==========================================
// FASTQ Reading Tests
// ==========================================

TEST_F(sequencefileTest, readFastqBasic) {
    gio::sequence_reader reader(fastq_path);
    std::vector<gio::sequence_entry> entries;

    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty());

    ASSERT_EQ(entries.size(), 3);

    EXPECT_EQ(entries[0].name, "read1");
    EXPECT_EQ(entries[0].comment, "instrument:run:flowcell");
    EXPECT_EQ(entries[0].sequence, "ATCGATCGATCG");
    ASSERT_TRUE(entries[0].quality.has_value());
    EXPECT_EQ(*entries[0].quality, "IIIIIIIIIIII");

    EXPECT_EQ(entries[1].name, "read2");
    EXPECT_EQ(entries[1].comment, "instrument:run:flowcell");
    EXPECT_EQ(entries[1].sequence, "GCTAGCTAGCTA");
    ASSERT_TRUE(entries[1].quality.has_value());
    EXPECT_EQ(*entries[1].quality, "HHHHHHHHHHHH");

    EXPECT_EQ(entries[2].name, "read3");
    EXPECT_EQ(entries[2].comment, "");
    EXPECT_EQ(entries[2].sequence, "NNNNNNNNNN");
    ASSERT_TRUE(entries[2].quality.has_value());
    EXPECT_EQ(*entries[2].quality, "##########");
}

TEST_F(sequencefileTest, readFastqGzipped) {
    gio::sequence_reader reader(fastq_gz_path);
    std::vector<gio::sequence_entry> entries;

    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty());
    ASSERT_EQ(entries.size(), 3);

    EXPECT_EQ(entries[0].name, "read1");
    ASSERT_TRUE(entries[0].quality.has_value());
    EXPECT_EQ(*entries[0].quality, "IIIIIIIIIIII");
}

// ==========================================
// Direct read_next() Tests
// ==========================================

TEST_F(sequencefileTest, readNextDirect) {
    gio::sequence_reader reader(fasta_path);
    gio::sequence_entry entry;

    EXPECT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.name, "seq1");
    EXPECT_EQ(entry.sequence, "ATCGATCGATCG");

    EXPECT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.name, "seq2");

    EXPECT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.name, "seq3");

    EXPECT_FALSE(reader.read_next(entry));
    EXPECT_TRUE(reader.get_error_message().empty());
}

// ==========================================
// Options Tests
// ==========================================

TEST_F(sequencefileTest, skipEmptySequences) {
    gio::sequence_reader reader(empty_seq_path, {.skip_empty_sequences = true});
    std::vector<gio::sequence_entry> entries;

    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty());

    ASSERT_EQ(entries.size(), 2);
    EXPECT_EQ(entries[0].name, "seq1");
    EXPECT_EQ(entries[1].name, "seq3");
}

TEST_F(sequencefileTest, includeEmptySequencesByDefault) {
    gio::sequence_reader reader(empty_seq_path);
    std::vector<gio::sequence_entry> entries;

    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty());
    ASSERT_EQ(entries.size(), 3);
}

// ==========================================
// Error Handling Tests
// ==========================================

TEST_F(sequencefileTest, nonExistentFileThrows) {
    EXPECT_THROW(
        gio::sequence_reader reader("/nonexistent/path/file.fa"),
        std::runtime_error
    );
}

// ==========================================
// Record Count Tests
// ==========================================

TEST_F(sequencefileTest, getCurrentLine) {
    gio::sequence_reader reader(fasta_path);
    EXPECT_EQ(reader.get_current_line(), 0);

    gio::sequence_entry entry;
    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 1);

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 2);

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 3);
}

// ==========================================
// Move Semantics Tests
// ==========================================

TEST_F(sequencefileTest, moveConstruction) {
    gio::sequence_reader reader1(fasta_path);
    gio::sequence_entry entry;
    reader1.read_next(entry);
    EXPECT_EQ(entry.name, "seq1");

    gio::sequence_reader reader2(std::move(reader1));
    reader2.read_next(entry);
    EXPECT_EQ(entry.name, "seq2");
}

TEST_F(sequencefileTest, moveAssignment) {
    gio::sequence_reader reader1(fasta_path);
    gio::sequence_reader reader2(fastq_path);

    gio::sequence_entry entry;
    reader1.read_next(entry);
    EXPECT_EQ(entry.name, "seq1");

    reader2 = std::move(reader1);
    reader2.read_next(entry);
    EXPECT_EQ(entry.name, "seq2");
}

// ==========================================
// has_next() Tests
// ==========================================

TEST_F(sequencefileTest, hasNext) {
    gio::sequence_reader reader(fasta_path);
    EXPECT_TRUE(reader.has_next());

    gio::sequence_entry entry;
    while (reader.read_next(entry)) {}

    EXPECT_FALSE(reader.has_next());
}

// ==========================================
// Multi-line Sequence Tests
// ==========================================

TEST_F(sequencefileTest, multiLineSequence) {
    gio::sequence_reader reader(fasta_path);
    std::vector<gio::sequence_entry> entries;

    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // seq2 has two lines of sequence that should be concatenated
    EXPECT_EQ(entries[1].sequence, "GCTAGCTAGCTAGCTAGCTAGCTA");
    EXPECT_EQ(entries[1].sequence.size(), 24);
}
