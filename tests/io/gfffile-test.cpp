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
namespace gio = genogrove::io;

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
// File Type Detection Tests for GTF and GFF
// ==========================================

TEST_F(gfffileTest, detectFileType) {
    gio::filetype_detector detector;
    auto [detected_filetype, compression] = detector.detect_filetype(gff3_path);

    EXPECT_EQ(detected_filetype, gio::filetype::GFF);
    EXPECT_EQ(compression, gio::compression_type::NONE);

    auto [detected_filetype2, compression2] = detector.detect_filetype(gtf_path);
    EXPECT_EQ(detected_filetype2, gio::filetype::GTF);
    EXPECT_EQ(compression2, gio::compression_type::NONE);
}

// ==========================================
// GFF3 Format Tests
// ==========================================

TEST_F(gfffileTest, readGFF3Format) {
    gio::gff_reader reader(gff3_path);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 4);

    // First entry - gene
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_EQ(entries[0].source, "HAVANA");
    EXPECT_EQ(entries[0].type, "gene");
    EXPECT_EQ(entries[0].interval.get_start(), 999);  // 1000 in GFF is 999 in 0-based
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    EXPECT_FALSE(entries[0].score.has_value());
    ASSERT_TRUE(entries[0].strand.has_value());
    EXPECT_EQ(entries[0].strand.value(), '+');
    EXPECT_FALSE(entries[0].phase.has_value());
    EXPECT_EQ(entries[0].attributes.at("ID"), "gene1");
    EXPECT_EQ(entries[0].attributes.at("Name"), "TEST1");
    EXPECT_EQ(entries[0].attributes.at("biotype"), "protein_coding");

    // Second entry - exon
    EXPECT_EQ(entries[1].seqid, "chr1");
    EXPECT_EQ(entries[1].type, "exon");
    EXPECT_EQ(entries[1].interval.get_start(), 999);
    EXPECT_EQ(entries[1].interval.get_end(), 1500);
    EXPECT_EQ(entries[1].attributes.at("ID"), "exon1");
    EXPECT_EQ(entries[1].attributes.at("Parent"), "gene1");

    // Third entry - gene with score
    EXPECT_EQ(entries[2].seqid, "chr2");
    EXPECT_EQ(entries[2].type, "gene");
    ASSERT_TRUE(entries[2].score.has_value());
    EXPECT_EQ(entries[2].score.value(), 100);
    ASSERT_TRUE(entries[2].strand.has_value());
    EXPECT_EQ(entries[2].strand.value(), '-');

    // Fourth entry - CDS with phase
    EXPECT_EQ(entries[3].seqid, "chrX");
    EXPECT_EQ(entries[3].type, "CDS");
    ASSERT_TRUE(entries[3].phase.has_value());
    EXPECT_EQ(entries[3].phase.value(), 0);
}

// ==========================================
// GTF Format Tests
// ==========================================

TEST_F(gfffileTest, readGTFFormat) {
    gio::gff_reader reader(gtf_path);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 4);

    // First entry - gene in GTF format
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_EQ(entries[0].source, "HAVANA");
    EXPECT_EQ(entries[0].type, "gene");
    EXPECT_EQ(entries[0].interval.get_start(), 999);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    EXPECT_EQ(entries[0].attributes.at("gene_id"), "ENSG00000001");
    EXPECT_EQ(entries[0].attributes.at("gene_name"), "TEST1");
    EXPECT_EQ(entries[0].attributes.at("gene_biotype"), "protein_coding");

    // Verify format detection
    EXPECT_TRUE(entries[0].is_gtf());
    EXPECT_FALSE(entries[0].is_gff3());
    EXPECT_EQ(entries[0].format, gio::gff_format::GTF);

    // Test helper methods
    ASSERT_TRUE(entries[0].get_gene_id().has_value());
    EXPECT_EQ(entries[0].get_gene_id().value(), "ENSG00000001");
    ASSERT_TRUE(entries[0].get_gene_name().has_value());
    EXPECT_EQ(entries[0].get_gene_name().value(), "TEST1");
    ASSERT_TRUE(entries[0].get_gene_biotype().has_value());
    EXPECT_EQ(entries[0].get_gene_biotype().value(), "protein_coding");

    // Second entry - exon in GTF format
    EXPECT_EQ(entries[1].type, "exon");
    EXPECT_EQ(entries[1].attributes.at("gene_id"), "ENSG00000001");
    EXPECT_EQ(entries[1].attributes.at("transcript_id"), "ENST00000001");
    EXPECT_EQ(entries[1].attributes.at("exon_number"), "1");

    // Test transcript_id and exon_number helpers
    ASSERT_TRUE(entries[1].get_transcript_id().has_value());
    EXPECT_EQ(entries[1].get_transcript_id().value(), "ENST00000001");
    ASSERT_TRUE(entries[1].get_exon_number().has_value());
    EXPECT_EQ(entries[1].get_exon_number().value(), 1);

    // Third entry - gene with score
    EXPECT_EQ(entries[2].seqid, "chr2");
    ASSERT_TRUE(entries[2].score.has_value());
    EXPECT_EQ(entries[2].score.value(), 100);

    // Fourth entry - CDS
    EXPECT_EQ(entries[3].type, "CDS");
    ASSERT_TRUE(entries[3].phase.has_value());
    EXPECT_EQ(entries[3].phase.value(), 0);
}

// ==========================================
// Reader Functionality Tests
// ==========================================

TEST_F(gfffileTest, hasNextFunctionality) {
    gio::gff_reader reader(gff3_path);

    EXPECT_TRUE(reader.has_next());

    gio::gff_entry entry;
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
    gio::gff_reader reader(gff3_path);
    gio::gff_entry entry;

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
    gio::gff_reader reader(invalid_gff_path);
    gio::gff_entry entry;

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
        gio::gff_reader reader(nonexistent);
    }, std::runtime_error);
}

// ==========================================
// Constructor Validation Tests
// ==========================================

TEST_F(gfffileTest, validationInvalidFormat) {
    // Create a temporary file with invalid format (not enough columns)
    fs::path temp_file = test_data_dir / "temp_invalid_format.gff";
    std::ofstream out(temp_file);
    out << "# Comment line\n";
    out << "chr1\tHAVANA\tgene\n";  // Only 3 columns instead of 9
    out.close();

    // Constructor should throw because first data line is invalid
    EXPECT_THROW({
        gio::gff_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(gfffileTest, validationInvalidCoordinates) {
    // Create a temporary file with non-integer coordinates
    fs::path temp_file = test_data_dir / "temp_invalid_coords.gff";
    std::ofstream out(temp_file);
    out << "# Comment line\n";
    out << "chr1\tHAVANA\tgene\tINVALID\t2000\t.\t+\t.\tID=gene1\n";
    out.close();

    // Constructor should throw because coordinates are non-integer
    EXPECT_THROW({
        gio::gff_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(gfffileTest, validationInvalidCoordinateRange) {
    // Create a temporary file with start >= end
    fs::path temp_file = test_data_dir / "temp_invalid_range.gff";
    std::ofstream out(temp_file);
    out << "# Comment line\n";
    out << "chr1\tHAVANA\tgene\t2000\t1000\t.\t+\t.\tID=gene1\n";  // start > end
    out.close();

    // Constructor should throw because start >= end
    EXPECT_THROW({
        gio::gff_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(gfffileTest, validationEmptyFile) {
    // Create a temporary empty file
    fs::path temp_file = test_data_dir / "temp_empty.gff";
    std::ofstream out(temp_file);
    out.close();

    // Constructor should throw because no valid data found
    EXPECT_THROW({
        gio::gff_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(gfffileTest, validationOnlyComments) {
    // Create a temporary file with only comments
    fs::path temp_file = test_data_dir / "temp_only_comments.gff";
    std::ofstream out(temp_file);
    out << "# Comment 1\n";
    out << "# Comment 2\n";
    out << "## Directive\n";
    out.close();

    // Constructor should throw because no valid data found
    EXPECT_THROW({
        gio::gff_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(gfffileTest, validationValidFirstLineInvalidSecond) {
    // Test that validation passes when first line is valid
    // (even if subsequent lines are invalid - those are caught during read_next)
    // This is the existing test_invalid.gff file behavior
    EXPECT_NO_THROW({
        gio::gff_reader reader(invalid_gff_path);
    });
}

// ==========================================
// Interval Object Tests
// ==========================================

TEST_F(gfffileTest, intervalObjectCreation) {
    gio::gff_reader reader(gff3_path);
    gio::gff_entry entry;

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
    gio::filetype_detector detector;
    auto [detected_filetype, compression] = detector.detect_filetype(gff3_path_gz);

    EXPECT_EQ(detected_filetype, gio::filetype::GFF);
    EXPECT_EQ(compression, gio::compression_type::GZIP);
}

TEST_F(gfffileTest, readGzippedGFF3Format) {
    gio::gff_reader reader(gff3_path_gz);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 4);

    // First entry
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_EQ(entries[0].type, "gene");
    EXPECT_EQ(entries[0].interval.get_start(), 999);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    EXPECT_EQ(entries[0].attributes.at("ID"), "gene1");

    // Second entry
    EXPECT_EQ(entries[1].type, "exon");

    // Third entry
    EXPECT_EQ(entries[2].seqid, "chr2");

    // Fourth entry
    EXPECT_EQ(entries[3].seqid, "chrX");
}

TEST_F(gfffileTest, readGzippedGTFFormat) {
    gio::gff_reader reader(gtf_path_gz);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 4);

    // First entry - gene
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_EQ(entries[0].type, "gene");
    EXPECT_EQ(entries[0].attributes.at("gene_id"), "ENSG00000001");
    EXPECT_EQ(entries[0].attributes.at("gene_name"), "TEST1");

    // Remaining entries exist
    EXPECT_FALSE(entries[1].seqid.empty());
    EXPECT_FALSE(entries[2].seqid.empty());
    EXPECT_FALSE(entries[3].seqid.empty());
}

TEST_F(gfffileTest, gzippedHasNextFunctionality) {
    gio::gff_reader reader(gff3_path_gz);

    EXPECT_TRUE(reader.has_next());

    gio::gff_entry entry;
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

// ==========================================
// Format Detection Tests
// ==========================================

TEST_F(gfffileTest, gff3FormatDetection) {
    gio::gff_reader reader(gff3_path);
    gio::gff_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    // Verify GFF3 format is detected
    EXPECT_TRUE(entry.is_gff3());
    EXPECT_FALSE(entry.is_gtf());
    EXPECT_EQ(entry.format, gio::gff_format::GFF3);
}

TEST_F(gfffileTest, gtfFormatDetection) {
    gio::gff_reader reader(gtf_path);
    gio::gff_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    // Verify GTF format is detected
    EXPECT_TRUE(entry.is_gtf());
    EXPECT_FALSE(entry.is_gff3());
    EXPECT_EQ(entry.format, gio::gff_format::GTF);
}

// ==========================================
// GTF Helper Methods Tests
// ==========================================

TEST_F(gfffileTest, gtfHelperMethods) {
    gio::gff_reader reader(gtf_path);
    gio::gff_entry entry;

    // Read gene entry
    ASSERT_TRUE(reader.read_next(entry));

    // Test get_gene_id
    auto gene_id = entry.get_gene_id();
    ASSERT_TRUE(gene_id.has_value());
    EXPECT_EQ(gene_id.value(), "ENSG00000001");

    // Test get_gene_name
    auto gene_name = entry.get_gene_name();
    ASSERT_TRUE(gene_name.has_value());
    EXPECT_EQ(gene_name.value(), "TEST1");

    // Test get_gene_biotype
    auto biotype = entry.get_gene_biotype();
    ASSERT_TRUE(biotype.has_value());
    EXPECT_EQ(biotype.value(), "protein_coding");

    // Gene should not have transcript_id
    EXPECT_FALSE(entry.get_transcript_id().has_value());

    // Read exon entry
    ASSERT_TRUE(reader.read_next(entry));

    // Exon should have both gene_id and transcript_id
    ASSERT_TRUE(entry.get_gene_id().has_value());
    EXPECT_EQ(entry.get_gene_id().value(), "ENSG00000001");

    ASSERT_TRUE(entry.get_transcript_id().has_value());
    EXPECT_EQ(entry.get_transcript_id().value(), "ENST00000001");

    // Test get_exon_number
    auto exon_num = entry.get_exon_number();
    ASSERT_TRUE(exon_num.has_value());
    EXPECT_EQ(exon_num.value(), 1);
}

TEST_F(gfffileTest, gff3HelperMethods) {
    gio::gff_reader reader(gff3_path);
    gio::gff_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    // GFF3 uses different attribute names
    // get_gene_id looks for "gene_id" which doesn't exist in GFF3
    EXPECT_FALSE(entry.get_gene_id().has_value());

    // But get_gene_name should work with "Name" attribute
    auto name = entry.get_gene_name();
    ASSERT_TRUE(name.has_value());
    EXPECT_EQ(name.value(), "TEST1");

    // get_gene_biotype should work with "biotype" attribute
    auto biotype = entry.get_gene_biotype();
    ASSERT_TRUE(biotype.has_value());
    EXPECT_EQ(biotype.value(), "protein_coding");

    // Generic get_attribute should work
    auto id = entry.get_attribute("ID");
    ASSERT_TRUE(id.has_value());
    EXPECT_EQ(id.value(), "gene1");
}

TEST_F(gfffileTest, genericAttributeGetter) {
    gio::gff_reader reader(gtf_path);
    gio::gff_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    // Test generic get_attribute
    auto gene_id = entry.get_attribute("gene_id");
    ASSERT_TRUE(gene_id.has_value());
    EXPECT_EQ(gene_id.value(), "ENSG00000001");

    // Test non-existent attribute
    auto missing = entry.get_attribute("nonexistent");
    EXPECT_FALSE(missing.has_value());
}

// ==========================================
// Iterator Tests
// ==========================================

TEST_F(gfffileTest, iteratorBasicIteration) {
    gio::gff_reader reader(gff3_path);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 4);

    // Verify first entry (gene)
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_EQ(entries[0].type, "gene");
    EXPECT_TRUE(entries[0].is_gff3());

    // Verify second entry (exon)
    EXPECT_EQ(entries[1].seqid, "chr1");
    EXPECT_EQ(entries[1].type, "exon");

    // Verify third entry (exon)
    EXPECT_EQ(entries[2].seqid, "chr2");
    EXPECT_EQ(entries[2].type, "gene");

    // Verify fourth entry (CDS)
    EXPECT_EQ(entries[3].seqid, "chrX");
    EXPECT_EQ(entries[3].type, "CDS");
}

TEST_F(gfffileTest, iteratorGTFFormat) {
    gio::gff_reader reader(gtf_path);

    int count = 0;
    for (const auto& entry : reader) {
        EXPECT_TRUE(entry.is_gtf());
        EXPECT_FALSE(entry.seqid.empty());
        count++;

        // Check first entry has GTF-specific attributes
        if (count == 1) {
            auto gene_id = entry.get_gene_id();
            ASSERT_TRUE(gene_id.has_value());
            EXPECT_EQ(gene_id.value(), "ENSG00000001");
        }
    }

    EXPECT_EQ(count, 4);
}

TEST_F(gfffileTest, iteratorManualIncrement) {
    gio::gff_reader reader(gff3_path);

    auto it = reader.begin();
    auto end = reader.end();

    ASSERT_NE(it, end);
    EXPECT_EQ(it->type, "gene");

    ++it;
    ASSERT_NE(it, end);
    EXPECT_EQ(it->type, "exon");

    ++it;
    ASSERT_NE(it, end);
    EXPECT_EQ(it->type, "gene");

    ++it;
    ASSERT_NE(it, end);
    EXPECT_EQ(it->type, "CDS");

    ++it;
    EXPECT_EQ(it, end);
}

TEST_F(gfffileTest, iteratorPostIncrement) {
    gio::gff_reader reader(gtf_path);

    auto it = reader.begin();
    auto old_it = it++;

    EXPECT_EQ(old_it->type, "gene");
    EXPECT_EQ(it->type, "exon");
}

TEST_F(gfffileTest, iteratorGzippedFile) {
    gio::gff_reader reader(gff3_path_gz);

    std::vector<std::string> types;
    for (const auto& entry : reader) {
        types.push_back(entry.type);
    }

    ASSERT_EQ(types.size(), 4);
    EXPECT_EQ(types[0], "gene");
    EXPECT_EQ(types[1], "exon");
    EXPECT_EQ(types[2], "gene");
    EXPECT_EQ(types[3], "CDS");
}

TEST_F(gfffileTest, iteratorAccessAttributes) {
    gio::gff_reader reader(gff3_path);

    for (const auto& entry : reader) {
        // All entries should have attributes
        EXPECT_FALSE(entry.attributes.empty());

        // Use arrow operator to access members
        if (entry.type == "gene") {
            auto id = entry.get_attribute("ID");
            ASSERT_TRUE(id.has_value());
        }
    }
}