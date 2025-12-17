/*
* SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <filesystem>
#include <fstream>

// genogrove
#include <genogrove/io/filetype_detector.hpp>
#include <genogrove/io/gff_reader.hpp>
#include <genogrove/data_type/interval.hpp>

namespace fs = std::filesystem;
namespace gdt = genogrove::data_type;

// ==========================================
// Test Fixture for GFF file tests
// ==========================================

class gfffileTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path gff3_path;
    fs::path gtf_path;
    fs::path invalid_gff_path;
    fs::path gff3_path_gz;
    fs::path gtf_path_gz;

    void SetUp() override {
        test_data_dir = fs::current_path() / "io" / "data";
        gff3_path = test_data_dir / "test_gff3.gff";
        gtf_path = test_data_dir / "test.gtf";
        invalid_gff_path = test_data_dir / "test_invalid.gff";
        gff3_path_gz = test_data_dir / "test_gff3.gff.gz";
        gtf_path_gz = test_data_dir / "test.gtf.gz";
    }
};

// ==========================================
// File Type Detection Tests
// ==========================================

TEST_F(gfffileTest, detectGFFFileType) {
    filetype_detector detector;
    auto [detected_filetype, is_gzipped] = detector.detect_filetype(gff3_path);

    EXPECT_EQ(detected_filetype, filetype::GFF);
    EXPECT_FALSE(is_gzipped);
}

TEST_F(gfffileTest, detectGTFFileType) {
    filetype_detector detector;
    auto [detected_filetype, is_gzipped] = detector.detect_filetype(gtf_path);

    EXPECT_EQ(detected_filetype, filetype::GTF);
    EXPECT_FALSE(is_gzipped);
}

// ==========================================
// GFF3 Format Tests
// ==========================================

TEST_F(gfffileTest, readGFF3Format) {
    gff_reader reader(gff3_path);
    gff_entry entry;

    // First entry - gene
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr1");
    EXPECT_EQ(entry.source, "HAVANA");
    EXPECT_EQ(entry.type, "gene");
    EXPECT_EQ(entry.interval.get_start(), 999);  // 1000 in GFF is 999 in 0-based
    EXPECT_EQ(entry.interval.get_end(), 2000);
    EXPECT_FALSE(entry.score.has_value());
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(entry.strand.value(), '+');
    EXPECT_FALSE(entry.phase.has_value());
    EXPECT_EQ(entry.attributes["ID"], "gene1");
    EXPECT_EQ(entry.attributes["Name"], "TEST1");
    EXPECT_EQ(entry.attributes["biotype"], "protein_coding");

    // Second entry - exon
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr1");
    EXPECT_EQ(entry.type, "exon");
    EXPECT_EQ(entry.interval.get_start(), 999);
    EXPECT_EQ(entry.interval.get_end(), 1500);
    EXPECT_EQ(entry.attributes["ID"], "exon1");
    EXPECT_EQ(entry.attributes["Parent"], "gene1");

    // Third entry - gene with score
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr2");
    EXPECT_EQ(entry.type, "gene");
    ASSERT_TRUE(entry.score.has_value());
    EXPECT_EQ(entry.score.value(), 100);
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(entry.strand.value(), '-');

    // Fourth entry - CDS with phase
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chrX");
    EXPECT_EQ(entry.type, "CDS");
    ASSERT_TRUE(entry.phase.has_value());
    EXPECT_EQ(entry.phase.value(), 0);

    // No more entries
    EXPECT_FALSE(reader.read_next(entry));
}

// ==========================================
// GTF Format Tests
// ==========================================

TEST_F(gfffileTest, readGTFFormat) {
    gff_reader reader(gtf_path);
    gff_entry entry;

    // First entry - gene in GTF format
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr1");
    EXPECT_EQ(entry.source, "HAVANA");
    EXPECT_EQ(entry.type, "gene");
    EXPECT_EQ(entry.interval.get_start(), 999);
    EXPECT_EQ(entry.interval.get_end(), 2000);
    EXPECT_EQ(entry.attributes["gene_id"], "ENSG00000001");
    EXPECT_EQ(entry.attributes["gene_name"], "TEST1");
    EXPECT_EQ(entry.attributes["gene_biotype"], "protein_coding");

    // Second entry - exon in GTF format
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.type, "exon");
    EXPECT_EQ(entry.attributes["gene_id"], "ENSG00000001");
    EXPECT_EQ(entry.attributes["transcript_id"], "ENST00000001");
    EXPECT_EQ(entry.attributes["exon_number"], "1");

    // Third entry - gene with score
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr2");
    ASSERT_TRUE(entry.score.has_value());
    EXPECT_EQ(entry.score.value(), 100);

    // Fourth entry - CDS
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.type, "CDS");
    ASSERT_TRUE(entry.phase.has_value());
    EXPECT_EQ(entry.phase.value(), 0);

    // No more entries
    EXPECT_FALSE(reader.read_next(entry));
}

// ==========================================
// Reader Functionality Tests
// ==========================================

TEST_F(gfffileTest, hasNextFunctionality) {
    gff_reader reader(gff3_path);

    EXPECT_TRUE(reader.has_next());

    gff_entry entry;
    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    // After reading all 4 entries, has_next should return false
    EXPECT_FALSE(reader.has_next());
}

TEST_F(gfffileTest, lineCounter) {
    gff_reader reader(gff3_path);
    gff_entry entry;

    EXPECT_EQ(reader.get_current_line(), 0);

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 2);  // Line 1 is header comment

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 3);

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 4);
}

// ==========================================
// Error Handling Tests
// ==========================================

TEST_F(gfffileTest, invalidCoordinateHandling) {
    gff_reader reader(invalid_gff_path);
    gff_entry entry;

    // First line should succeed
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr1");

    // Second line has invalid coordinate (non-numeric)
    EXPECT_FALSE(reader.read_next(entry));
    EXPECT_FALSE(reader.get_error_message().empty());

    // Error message should indicate the problem
    std::string error = reader.get_error_message();
    EXPECT_TRUE(error.find("Invalid coordinate format") != std::string::npos ||
                error.find("line") != std::string::npos);
}

TEST_F(gfffileTest, fileNotFound) {
    fs::path nonexistent = test_data_dir / "nonexistent.gff";

    EXPECT_THROW({
        gff_reader reader(nonexistent);
    }, std::runtime_error);
}

// ==========================================
// Interval Object Tests
// ==========================================

TEST_F(gfffileTest, intervalObjectCreation) {
    gff_reader reader(gff3_path);
    gff_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    // Verify interval object is properly created
    // GFF uses 1-based inclusive coordinates, converted to 0-based half-open
    gdt::interval& intvl = entry.interval;
    EXPECT_EQ(intvl.get_start(), 999);   // 1000 - 1
    EXPECT_EQ(intvl.get_end(), 2000);    // 2000 stays the same
    EXPECT_EQ(intvl.get_end() - intvl.get_start(), 1001);
}

// ==========================================
// Gzipped File Tests
// ==========================================

TEST_F(gfffileTest, detectGzippedGFFFileType) {
    filetype_detector detector;
    auto [detected_filetype, is_gzipped] = detector.detect_filetype(gff3_path_gz);

    EXPECT_EQ(detected_filetype, filetype::GFF);
    EXPECT_TRUE(is_gzipped);
}

TEST_F(gfffileTest, readGzippedGFF3Format) {
    gff_reader reader(gff3_path_gz);
    gff_entry entry;

    // First entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr1");
    EXPECT_EQ(entry.type, "gene");
    EXPECT_EQ(entry.interval.get_start(), 999);
    EXPECT_EQ(entry.interval.get_end(), 2000);
    EXPECT_EQ(entry.attributes["ID"], "gene1");

    // Second entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.type, "exon");

    // Third entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr2");

    // Fourth entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chrX");

    // No more entries
    EXPECT_FALSE(reader.read_next(entry));
}

TEST_F(gfffileTest, readGzippedGTFFormat) {
    gff_reader reader(gtf_path_gz);
    gff_entry entry;

    // First entry - gene
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr1");
    EXPECT_EQ(entry.type, "gene");
    EXPECT_EQ(entry.attributes["gene_id"], "ENSG00000001");
    EXPECT_EQ(entry.attributes["gene_name"], "TEST1");

    // Read remaining entries
    ASSERT_TRUE(reader.read_next(entry));
    ASSERT_TRUE(reader.read_next(entry));
    ASSERT_TRUE(reader.read_next(entry));

    // No more entries
    EXPECT_FALSE(reader.read_next(entry));
}

TEST_F(gfffileTest, gzippedHasNextFunctionality) {
    gff_reader reader(gff3_path_gz);

    EXPECT_TRUE(reader.has_next());

    gff_entry entry;
    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    // After reading all 4 entries, has_next should return false
    EXPECT_FALSE(reader.has_next());
}