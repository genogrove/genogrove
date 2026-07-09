/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <filesystem>
#include <fstream>
#include <sstream>
#include <stdexcept>
#include <string>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/filetype_detector.hpp>
#include <genogrove/io/gff_reader.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace fs = std::filesystem;
namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
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
    fs::path invalid_score_path;
    fs::path invalid_strand_path;
    fs::path invalid_phase_path;
    fs::path gff3_path_gz;
    fs::path gtf_path_gz;
    fs::path missing_gene_id_path;
    fs::path missing_transcript_id_path;

    void SetUp() override {
        test_data_dir = fs::current_path() / "io" / "data";
        gff3_path = test_data_dir / "test_gff3.gff";
        gtf_path = test_data_dir / "test.gtf";
        invalid_gff_path = test_data_dir / "test_invalid.gff";
        invalid_score_path = test_data_dir / "test_invalid_score.gff";
        invalid_strand_path = test_data_dir / "test_invalid_strand.gff";
        invalid_phase_path = test_data_dir / "test_invalid_phase.gff";
        gff3_path_gz = test_data_dir / "test_gff3.gff.gz";
        gtf_path_gz = test_data_dir / "test.gtf.gz";
        missing_gene_id_path = test_data_dir / "test_missing_gene_id.gtf";
        missing_transcript_id_path = test_data_dir / "test_missing_transcript_id.gtf";
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 4);

    // First entry - gene
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_EQ(entries[0].source, "HAVANA");
    EXPECT_EQ(entries[0].type, "gene");
    EXPECT_EQ(entries[0].start, 1000);  // native GFF 1-based inclusive
    EXPECT_EQ(entries[0].end, 2000);
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
    EXPECT_EQ(entries[1].start, 1000);
    EXPECT_EQ(entries[1].end, 1500);
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 4);

    // First entry - gene in GTF format
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_EQ(entries[0].source, "HAVANA");
    EXPECT_EQ(entries[0].type, "gene");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);
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
    // get_current_line() reports the 1-based physical line number, counting
    // comment and blank lines even though they are not yielded as records.
    // test_gff3.gff line 1 is the "##gff-version 3" directive, so the first
    // data record reports line 2.
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

    // Second line has invalid coordinate — throws by default
    EXPECT_THROW(reader.read_next(entry), std::runtime_error);
}

TEST_F(gfffileTest, skipInvalidLines) {
    gio::gff_reader reader(invalid_gff_path, {.skip_invalid_lines = true});

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Only the first valid line should be returned; invalid line skipped
    EXPECT_EQ(entries.size(), 1);
    EXPECT_EQ(entries[0].seqid, "chr1");
    // After iteration, error_message reflects the last read (EOF), not skipped lines
    EXPECT_TRUE(reader.get_error_message().empty());
}

TEST_F(gfffileTest, invalidScoreThrows) {
    gio::gff_reader reader(invalid_score_path);
    gio::gff_entry entry;

    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr1");

    EXPECT_THROW(reader.read_next(entry), std::runtime_error);
}

TEST_F(gfffileTest, invalidScoreSkipped) {
    gio::gff_reader reader(invalid_score_path, {.skip_invalid_lines = true});

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    EXPECT_EQ(entries.size(), 1);
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_TRUE(reader.get_error_message().empty());
}

TEST_F(gfffileTest, invalidStrandThrows) {
    gio::gff_reader reader(invalid_strand_path);
    gio::gff_entry entry;

    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr1");

    EXPECT_THROW(reader.read_next(entry), std::runtime_error);
}

TEST_F(gfffileTest, invalidStrandSkipped) {
    gio::gff_reader reader(invalid_strand_path, {.skip_invalid_lines = true});

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    EXPECT_EQ(entries.size(), 1);
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_TRUE(reader.get_error_message().empty());
}

TEST_F(gfffileTest, invalidPhaseThrows) {
    gio::gff_reader reader(invalid_phase_path);
    gio::gff_entry entry;

    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.seqid, "chr1");

    EXPECT_THROW(reader.read_next(entry), std::runtime_error);
}

TEST_F(gfffileTest, invalidPhaseSkipped) {
    gio::gff_reader reader(invalid_phase_path, {.skip_invalid_lines = true});

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    EXPECT_EQ(entries.size(), 1);
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_TRUE(reader.get_error_message().empty());
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
    // Create a temporary file with start > end
    fs::path temp_file = test_data_dir / "temp_invalid_range.gff";
    std::ofstream out(temp_file);
    out << "# Comment line\n";
    out << "chr1\tHAVANA\tgene\t2000\t1000\t.\t+\t.\tID=gene1\n";  // start > end
    out.close();

    // Constructor should throw because start > end
    EXPECT_THROW({
        gio::gff_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(gfffileTest, validationRejectsZeroStart) {
    // GFF is 1-based, so start == 0 is malformed; it must be rejected rather
    // than flow into a 0-based conversion and underflow (genogrove#474).
    fs::path temp_file = test_data_dir / "temp_zero_start.gff";
    std::ofstream out(temp_file);
    out << "chr1\tHAVANA\tgene\t0\t500\t.\t+\t.\tID=gene1\n";  // start == 0
    out.close();

    // Constructor validates the first record and throws.
    EXPECT_THROW({
        gio::gff_reader reader(temp_file);
    }, std::runtime_error);

    fs::remove(temp_file);
}

TEST_F(gfffileTest, readNextRejectsZeroStart) {
    // Per-record parse path (parse_line) must also reject start == 0: a valid
    // first record followed by a zero-start record throws by default.
    fs::path temp_file = test_data_dir / "temp_zero_start_second.gff";
    std::ofstream out(temp_file);
    out << "chr1\tHAVANA\tgene\t100\t500\t.\t+\t.\tID=gene1\n";  // valid
    out << "chr1\tHAVANA\tgene\t0\t400\t.\t+\t.\tID=gene2\n";    // start == 0
    out.close();

    gio::gff_reader reader(temp_file);
    gio::gff_entry entry;
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.start, 100u);
    EXPECT_THROW(reader.read_next(entry), std::runtime_error);

    fs::remove(temp_file);
}

TEST_F(gfffileTest, validationEmptyFile) {
    // Empty file: structurally valid but zero records. Constructor must not
    // throw; iterator must immediately equal end(). See #310.
    fs::path temp_file = test_data_dir / "temp_empty.gff";
    std::ofstream out(temp_file);
    out.close();

    EXPECT_NO_THROW({
        gio::gff_reader reader(temp_file);
        // Iterating yields zero entries; this also exercises the
        // begin() == end() contract for an empty input. (Don't call
        // reader.begin() explicitly before the loop — it constructs an
        // iterator that calls advance(), which on a non-empty file
        // would consume the first record before the loop sees it.)
        std::vector<gio::gff_entry> entries;
        for (const auto& entry : reader) {
            entries.push_back(entry);
        }
        EXPECT_EQ(entries.size(), 0u);
    });

    fs::remove(temp_file);
}

TEST_F(gfffileTest, validationOnlyComments) {
    // Comments-only file: structurally valid but zero records. Same contract
    // as the empty case — constructor must not throw, iterator yields zero
    // entries. See #310.
    fs::path temp_file = test_data_dir / "temp_only_comments.gff";
    std::ofstream out(temp_file);
    out << "# Comment 1\n";
    out << "# Comment 2\n";
    out << "## Directive\n";
    out.close();

    EXPECT_NO_THROW({
        gio::gff_reader reader(temp_file);
        std::vector<gio::gff_entry> entries;
        for (const auto& entry : reader) {
            entries.push_back(entry);
        }
        EXPECT_EQ(entries.size(), 0u);
        EXPECT_TRUE(reader.get_error_message().empty());
    });

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

    // Coordinates stored as native GFF (1-based inclusive)
    EXPECT_EQ(entry.start, 1000);
    EXPECT_EQ(entry.end, 2000);
    EXPECT_EQ(entry.end - entry.start + 1, 1001);  // inclusive length
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 4);

    // First entry
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_EQ(entries[0].type, "gene");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();
}

// ==========================================
// GTF Attribute Validation Tests
// ==========================================

TEST_F(gfffileTest, validateGtfPassesOnValidFile) {
    gio::gff_reader_options opts{.skip_invalid_lines = false, .validate_gtf = true};
    gio::gff_reader reader(gtf_path, opts);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();
    EXPECT_EQ(entries.size(), 4);
}

TEST_F(gfffileTest, validateGtfThrowsOnMissingGeneId) {
    gio::gff_reader_options opts{.skip_invalid_lines = false, .validate_gtf = true};
    gio::gff_reader reader(missing_gene_id_path, opts);

    gio::gff_entry entry;
    EXPECT_THROW(reader.read_next(entry), std::runtime_error);
}

TEST_F(gfffileTest, validateGtfThrowsOnMissingTranscriptId) {
    gio::gff_reader_options opts{.skip_invalid_lines = false, .validate_gtf = true};
    gio::gff_reader reader(missing_transcript_id_path, opts);

    gio::gff_entry entry;
    // First entry (gene) should pass — gene_id present, transcript_id not required
    EXPECT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.type, "gene");

    // Second entry (exon) should fail — missing transcript_id
    EXPECT_THROW(reader.read_next(entry), std::runtime_error);
}

TEST_F(gfffileTest, validateGtfSkipsInvalidWithOption) {
    gio::gff_reader_options opts{.skip_invalid_lines = true, .validate_gtf = true};
    gio::gff_reader reader(missing_gene_id_path, opts);

    gio::gff_entry entry;
    // Should skip the invalid line and return false (EOF)
    EXPECT_FALSE(reader.read_next(entry));
}

TEST_F(gfffileTest, validateGtfOffByDefault) {
    // Default options — validation disabled, missing gene_id should not throw
    gio::gff_reader reader(missing_gene_id_path);

    gio::gff_entry entry;
    EXPECT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.type, "gene");
}

TEST_F(gfffileTest, validateGtfSkipsGff3Files) {
    // validate_gtf should not affect GFF3 files (different format)
    gio::gff_reader_options opts{.skip_invalid_lines = false, .validate_gtf = true};
    gio::gff_reader reader(gff3_path, opts);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();
    EXPECT_FALSE(entries.empty());
}

// ==========================================
// Coordinate Boundary Tests
// ==========================================

TEST_F(gfffileTest, gffStartOneBoundary) {
    // GFF start=1 is the minimum valid 1-based coordinate
    fs::path boundary_gff = test_data_dir / "test_boundary_coords.gff";
    gio::gff_reader reader(boundary_gff);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 2);

    // start=1 stored as native 1-based
    EXPECT_EQ(entries[0].start, 1);
    EXPECT_EQ(entries[0].end, 100);
    EXPECT_EQ(entries[0].attributes.at("ID"), "gene_at_start");
}

TEST_F(gfffileTest, gffSingleBaseFeature) {
    // GFF allows start == end for single-base features
    fs::path boundary_gff = test_data_dir / "test_boundary_coords.gff";
    gio::gff_reader reader(boundary_gff);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 2);

    // Single-base feature: start == end
    EXPECT_EQ(entries[1].start, 50);
    EXPECT_EQ(entries[1].end, 50);
    EXPECT_EQ(entries[1].attributes.at("ID"), "single_base");
}

// ==========================================
// Quoted Semicolons in Attributes
// ==========================================

TEST_F(gfffileTest, gff3AttributeWithSemicolonInValue) {
    // GFF3 uses key=value;key=value — semicolons in values are not quoted
    // URL-encoding (%3B) is the GFF3 standard for literal semicolons
    fs::path temp_file = test_data_dir / "temp_gff3_semi.gff";
    std::ofstream out(temp_file);
    out << "##gff-version 3\n";
    out << "chr1\ttest\tgene\t1\t100\t.\t+\t.\tID=gene1;Note=first%3Bsecond\n";
    out.close();

    gio::gff_reader reader(temp_file);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 1);
    EXPECT_EQ(entries[0].attributes.at("ID"), "gene1");
    // URL-encoded semicolon is stored as-is (reader doesn't decode %3B)
    EXPECT_EQ(entries[0].attributes.at("Note"), "first%3Bsecond");

    fs::remove(temp_file);
}

// ==========================================
// GTF Quoted Semicolons in Attribute Values
// ==========================================

TEST_F(gfffileTest, gtfAttributeWithQuotedSemicolon) {
    // GTF values are double-quoted; semicolons inside quotes are literal
    fs::path path = test_data_dir / "test_quoted_semicolon.gtf";
    gio::gff_reader reader(path);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 2);

    // First entry: gene_name contains a semicolon
    EXPECT_EQ(entries[0].attributes.at("gene_id"), "ENSG00000001");
    EXPECT_EQ(entries[0].attributes.at("gene_name"), "test;name");
    EXPECT_EQ(entries[0].attributes.at("gene_biotype"), "protein_coding");

    // Second entry: note contains multiple semicolons
    EXPECT_EQ(entries[1].attributes.at("gene_id"), "ENSG00000002");
    EXPECT_EQ(entries[1].attributes.at("gene_name"), "normal");
    EXPECT_EQ(entries[1].attributes.at("note"), "a;b;c");
}

// ==========================================
// Plain-gzip support (regression: #303)
// ==========================================
// Mirrors bedfile-test's plain-gzip coverage: ENCODE-style GTFs are
// distributed as plain gzip (not BGZF). The reader's rewind-after-validation
// step now falls back to close+reopen when bgzf_seek fails, and has_next()
// uses bgzf_peek instead of read+seek-back, so plain-gzip inputs iterate
// end-to-end without the previous "Failed to seek back to start of file"
// failure.

TEST_F(gfffileTest, readPlainGzipFile) {
    // test_plain_gzip.gtf.gz is plain gzip (re-compressed from test.gtf
    // with Python's gzip.compress, mtime=0). Same 4 records as test.gtf:
    // chr1/gene, chr1/exon, chr2/gene, chrX/CDS.
    fs::path plain_gz = test_data_dir / "test_plain_gzip.gtf.gz";
    gio::gff_reader reader(plain_gz);

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 4);
    EXPECT_EQ(entries[0].seqid, "chr1");
    EXPECT_EQ(entries[1].seqid, "chr1");
    EXPECT_EQ(entries[2].seqid, "chr2");
    EXPECT_EQ(entries[3].seqid, "chrX");
}

TEST_F(gfffileTest, hasNextOnPlainGzipFile) {
    // Verifies has_next() works mid-iteration on plain gzip — the prior
    // implementation used bgzf_seek to roll back its peek, which silently
    // returned false on plain gzip and broke iteration.
    fs::path plain_gz = test_data_dir / "test_plain_gzip.gtf.gz";
    gio::gff_reader reader(plain_gz);

    gio::gff_entry entry;
    for (int i = 0; i < 4; ++i) {
        EXPECT_TRUE(reader.has_next()) << "has_next false before reading record " << i;
        reader.read_next(entry);
    }
    // After reading all 4 records, has_next should return false.
    EXPECT_FALSE(reader.has_next());
}

// ==========================================
// gff_entry serialization round-trip
// ==========================================

namespace {
    gio::gff_entry gff_roundtrip(const gio::gff_entry& in) {
        std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
        in.serialize(ss);
        return gio::gff_entry::deserialize(ss);
    }
}

TEST(gffEntrySerialization, minimalRoundTrip) {
    // No optionals set; empty attributes; UNKNOWN format. Every presence flag
    // must round-trip as absent and the format byte must come back unchanged.
    gio::gff_entry in("chr1", 100, 200, "gene");
    auto out = gff_roundtrip(in);

    EXPECT_EQ(out.seqid, "chr1");
    EXPECT_EQ(out.start, 100u);
    EXPECT_EQ(out.end, 200u);
    EXPECT_EQ(out.type, "gene");
    EXPECT_EQ(out.source, "");
    EXPECT_FALSE(out.score.has_value());
    EXPECT_FALSE(out.strand.has_value());
    EXPECT_FALSE(out.phase.has_value());
    EXPECT_TRUE(out.attributes.empty());
    EXPECT_EQ(out.format, gio::gff_format::UNKNOWN);
}

TEST(gffEntrySerialization, gff3FullRoundTrip) {
    gio::gff_entry in("chrX", 1000, 2000, "exon");
    in.source = "ENSEMBL";
    in.score = 42.5;
    in.strand = '-';
    in.phase = 1;
    in.format = gio::gff_format::GFF3;
    in.attributes["ID"] = "exon:ENSE00001";
    in.attributes["Parent"] = "transcript:ENST00001";
    in.attributes["gene_id"] = "ENSG00001";
    auto out = gff_roundtrip(in);

    EXPECT_EQ(out.source, "ENSEMBL");
    ASSERT_TRUE(out.score.has_value());
    EXPECT_DOUBLE_EQ(*out.score, 42.5);
    ASSERT_TRUE(out.strand.has_value());
    EXPECT_EQ(*out.strand, '-');
    ASSERT_TRUE(out.phase.has_value());
    EXPECT_EQ(*out.phase, 1);
    EXPECT_EQ(out.format, gio::gff_format::GFF3);
    EXPECT_EQ(out.attributes.size(), 3u);
    EXPECT_EQ(out.attributes.at("ID"), "exon:ENSE00001");
    EXPECT_EQ(out.attributes.at("Parent"), "transcript:ENST00001");
    EXPECT_EQ(out.attributes.at("gene_id"), "ENSG00001");
}

TEST(gffEntrySerialization, gtfRoundTrip) {
    gio::gff_entry in("chr2", 500, 600, "CDS");
    in.format = gio::gff_format::GTF;
    in.phase = 0;
    in.attributes["gene_id"] = "G1";
    in.attributes["transcript_id"] = "T1";
    auto out = gff_roundtrip(in);

    EXPECT_EQ(out.format, gio::gff_format::GTF);
    EXPECT_TRUE(out.is_gtf());
    EXPECT_FALSE(out.is_gff3());
    EXPECT_EQ(out.attributes.at("gene_id"), "G1");
    EXPECT_EQ(out.attributes.at("transcript_id"), "T1");
}

TEST(gffEntrySerialization, emptyAttributesMap) {
    // Explicit zero-entry attributes — the 4-byte count is written as 0 and
    // the map round-trips empty.
    gio::gff_entry in("chr1", 1, 10, "region");
    in.format = gio::gff_format::GFF3;
    auto out = gff_roundtrip(in);

    EXPECT_TRUE(out.attributes.empty());
    EXPECT_EQ(out.format, gio::gff_format::GFF3);
}

TEST(gffEntrySerialization, preservesEmbeddedNulInAttributes) {
    // Attribute values go through the length-prefixed string serializer, so
    // embedded NULs must survive the round-trip in both key and value.
    gio::gff_entry in("chr1", 5, 10, "feature");
    in.attributes[std::string("k\0ey", 4)] = std::string("va\0lue", 6);
    auto out = gff_roundtrip(in);

    ASSERT_EQ(out.attributes.size(), 1u);
    const auto it = out.attributes.find(std::string("k\0ey", 4));
    ASSERT_NE(it, out.attributes.end());
    EXPECT_EQ(it->second.size(), 6u);
    EXPECT_EQ(it->second[2], '\0');
}

TEST(gffEntrySerialization, rejectsUnknownFormatValue) {
    // Serialise a valid entry, then corrupt the trailing format byte with a
    // value outside the gff_format enum range. deserialise must throw.
    gio::gff_entry in("chr1", 1, 2, "gene");
    in.format = gio::gff_format::GFF3;

    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    in.serialize(ss);
    auto bytes = ss.str();
    ASSERT_FALSE(bytes.empty());
    bytes.back() = static_cast<char>(0x7F);  // any value > UNKNOWN (=2)

    std::stringstream corrupt(bytes, std::ios::in | std::ios::out | std::ios::binary);
    EXPECT_THROW(gio::gff_entry::deserialize(corrupt), std::runtime_error);
}

TEST(gffEntrySerialization, groveRoundTrip) {
    // End-to-end: a grove keyed on intervals with gff_entry payloads must
    // serialize and deserialize with the payloads intact.
    ggs::grove<gdt::interval, gio::gff_entry> grove(4);

    gio::gff_entry e1("chr1", 100, 200, "gene");
    e1.format = gio::gff_format::GFF3;
    e1.attributes["ID"] = "gene1";
    e1.strand = '+';

    gio::gff_entry e2("chr1", 300, 400, "exon");
    e2.format = gio::gff_format::GFF3;
    e2.attributes["Parent"] = "gene1";

    grove.insert_data("chr1", gdt::interval(100, 200), e1);
    grove.insert_data("chr1", gdt::interval(300, 400), e2);

    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    grove.serialize(ss);
    auto restored = ggs::grove<gdt::interval, gio::gff_entry>::deserialize(ss);

    auto r1 = restored.intersect(gdt::interval(150, 150), "chr1");
    ASSERT_EQ(r1.get_keys().size(), 1u);
    EXPECT_EQ(r1.get_keys()[0]->get_data().type, "gene");
    EXPECT_EQ(r1.get_keys()[0]->get_data().attributes.at("ID"), "gene1");
    ASSERT_TRUE(r1.get_keys()[0]->get_data().strand.has_value());
    EXPECT_EQ(*r1.get_keys()[0]->get_data().strand, '+');

    auto r2 = restored.intersect(gdt::interval(350, 350), "chr1");
    ASSERT_EQ(r2.get_keys().size(), 1u);
    EXPECT_EQ(r2.get_keys()[0]->get_data().type, "exon");
    EXPECT_EQ(r2.get_keys()[0]->get_data().attributes.at("Parent"), "gene1");
}

// ==========================================
// Region access (tabix) — #456
// ==========================================

TEST_F(gfffileTest, regionReturnsOnlyOverlappingRecords) {
    // test_region.gff.gz is bgzip+tabix-indexed; chr1 has gene 101-200,
    // exon 151-250, gene 5001-6000. chr1:140-160 overlaps the first two.
    fs::path region_gz = test_data_dir / "test_region.gff.gz";
    gio::gff_reader reader(region_gz, {.region = "chr1:140-160"});

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) entries.push_back(entry);
    EXPECT_TRUE(reader.get_error_message().empty()) << reader.get_error_message();

    ASSERT_EQ(entries.size(), 2u);
    EXPECT_EQ(entries[0].type, "gene");
    EXPECT_EQ(entries[1].type, "exon");
}

TEST_F(gfffileTest, regionOnDifferentChromIsIsolated) {
    fs::path region_gz = test_data_dir / "test_region.gff.gz";
    gio::gff_reader reader(region_gz, {.region = "chr2"});

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) entries.push_back(entry);

    ASSERT_EQ(entries.size(), 2u);
    EXPECT_EQ(entries[0].seqid, "chr2");
    EXPECT_EQ(entries[1].seqid, "chr2");
}

TEST_F(gfffileTest, regionWithNoOverlapYieldsNoRecords) {
    fs::path region_gz = test_data_dir / "test_region.gff.gz";
    gio::gff_reader reader(region_gz, {.region = "chr1:300-400"});

    // has_next() prefetches, so it is precise even before the first read.
    EXPECT_FALSE(reader.has_next());

    std::vector<gio::gff_entry> entries;
    for (const auto& entry : reader) entries.push_back(entry);
    EXPECT_TRUE(reader.get_error_message().empty()) << reader.get_error_message();
    EXPECT_TRUE(entries.empty());
}

TEST_F(gfffileTest, regionHasNextIsPreciseMidIteration) {
    // chr1:140-160 overlaps exactly two records; has_next() must flip to false
    // right after the second read, not one record later (matches streaming).
    fs::path region_gz = test_data_dir / "test_region.gff.gz";
    gio::gff_reader reader(region_gz, {.region = "chr1:140-160"});

    gio::gff_entry entry;
    EXPECT_TRUE(reader.has_next());
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_TRUE(reader.has_next());
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_FALSE(reader.has_next());
    EXPECT_FALSE(reader.read_next(entry));
}

TEST_F(gfffileTest, regionOnNonIndexedFileThrows) {
    fs::path plain = test_data_dir / "test_gff3.gff";
    EXPECT_THROW(gio::gff_reader(plain, {.region = "chr1:1-1000"}), std::runtime_error);
}
