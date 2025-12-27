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
#include <genogrove/io/bed_reader.hpp>
#include <genogrove/data_type/interval.hpp>

namespace fs = std::filesystem;
namespace gdt = genogrove::data_type;
namespace gio = genogrove::io;

// ==========================================
// Test Fixture for BED file tests
// ==========================================

class bedfileTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path bed3_path;
    fs::path bed6_path;
    fs::path bed12_path;
    fs::path invalid_bed_path;
    fs::path bed3_path_gz;
    fs::path bed6_path_gz;
    fs::path bed12_path_gz;

    void SetUp() override {
        test_data_dir = fs::current_path() / "io" / "data";
        bed3_path = test_data_dir / "test_bed3.bed";
        bed6_path = test_data_dir / "test_bed6.bed";
        bed12_path = test_data_dir / "test_bed12.bed";
        invalid_bed_path = test_data_dir / "test_invalid.bed";
        bed3_path_gz = test_data_dir / "test_bed3.bed.gz";
        bed6_path_gz = test_data_dir / "test_bed6.bed.gz";
        bed12_path_gz = test_data_dir / "test_bed12.bed.gz";
    }
};

// ==========================================
// File Type Detection Tests
// ==========================================

TEST_F(bedfileTest, detectFileType) {
    gio::filetype_detector detector;
    auto [detected_filetype, compression] = detector.detect_filetype(bed3_path);

    EXPECT_EQ(detected_filetype, gio::filetype::BED);
    EXPECT_EQ(compression, gio::compression_type::NONE);
}

// ==========================================
// BED3 Format Tests
// ==========================================

TEST_F(bedfileTest, readBED3Format) {
    gio::bed_reader reader(bed3_path);
    gio::bed_entry entry;

    // First entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr1");
    EXPECT_EQ(entry.interval.get_start(), 1000);
    EXPECT_EQ(entry.interval.get_end(), 2000);
    EXPECT_FALSE(entry.name.has_value());
    EXPECT_FALSE(entry.score.has_value());
    EXPECT_FALSE(entry.strand.has_value());

    // Second entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr2");
    EXPECT_EQ(entry.interval.get_start(), 5000);
    EXPECT_EQ(entry.interval.get_end(), 6000);

    // Third entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chrX");
    EXPECT_EQ(entry.interval.get_start(), 100);
    EXPECT_EQ(entry.interval.get_end(), 500);

    // No more entries
    EXPECT_FALSE(reader.read_next(entry));
}

// ==========================================
// BED6 Format Tests
// ==========================================

TEST_F(bedfileTest, readBED6Format) {
    gio::bed_reader reader(bed6_path);
    gio::bed_entry entry;

    // First entry with optional fields
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr1");
    EXPECT_EQ(entry.interval.get_start(), 1000);
    EXPECT_EQ(entry.interval.get_end(), 2000);
    ASSERT_TRUE(entry.name.has_value());
    EXPECT_EQ(entry.name.value(), "feature1");
    ASSERT_TRUE(entry.score.has_value());
    EXPECT_EQ(entry.score.value(), 500);
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(entry.strand.value(), '+');

    // Second entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr2");
    ASSERT_TRUE(entry.name.has_value());
    EXPECT_EQ(entry.name.value(), "feature2");
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(entry.strand.value(), '-');

    // Third entry with '.' strand
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chrX");
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(entry.strand.value(), '.');
}

// ==========================================
// BED12 Format Tests
// ==========================================

TEST_F(bedfileTest, readBED12Format) {
    gio::bed_reader reader(bed12_path);
    gio::bed_entry entry;

    // First entry - full BED12
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr1");
    EXPECT_EQ(entry.interval.get_start(), 1000);
    EXPECT_EQ(entry.interval.get_end(), 2000);
    ASSERT_TRUE(entry.name.has_value());
    EXPECT_EQ(entry.name.value(), "item1");
    ASSERT_TRUE(entry.score.has_value());
    EXPECT_EQ(entry.score.value(), 100);
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(entry.strand.value(), '+');
    ASSERT_TRUE(entry.thick_start.has_value());
    EXPECT_EQ(entry.thick_start.value(), 1200);
    ASSERT_TRUE(entry.thick_end.has_value());
    EXPECT_EQ(entry.thick_end.value(), 1800);
    ASSERT_TRUE(entry.item_rgb.has_value());
    EXPECT_EQ(entry.item_rgb.value(), "255,0,0");
    ASSERT_TRUE(entry.block_count.has_value());
    EXPECT_EQ(entry.block_count.value(), "2");
    ASSERT_TRUE(entry.block_sizes.has_value());
    EXPECT_EQ(entry.block_sizes.value(), "400,400");
    ASSERT_TRUE(entry.block_starts.has_value());
    EXPECT_EQ(entry.block_starts.value(), "0,600");

    // Second entry - with 3 blocks
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr2");
    EXPECT_EQ(entry.interval.get_start(), 5000);
    EXPECT_EQ(entry.interval.get_end(), 8000);
    ASSERT_TRUE(entry.block_count.has_value());
    EXPECT_EQ(entry.block_count.value(), "3");

    // Third entry - single block
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chrX");
    ASSERT_TRUE(entry.block_count.has_value());
    EXPECT_EQ(entry.block_count.value(), "1");

    // No more entries
    EXPECT_FALSE(reader.read_next(entry));
}

// ==========================================
// Reader Functionality Tests
// ==========================================

TEST_F(bedfileTest, hasNextFunctionality) {
    gio::bed_reader reader(bed3_path);

    EXPECT_TRUE(reader.has_next());

    gio::bed_entry entry;
    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    // After reading all 3 entries, has_next should return false
    EXPECT_FALSE(reader.has_next());
}

TEST_F(bedfileTest, lineCounter) {
    gio::bed_reader reader(bed3_path);
    gio::bed_entry entry;

    EXPECT_EQ(reader.get_current_line(), 0);

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 1);

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 2);

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 3);
}

// ==========================================
// Error Handling Tests
// ==========================================

TEST_F(bedfileTest, invalidCoordinateHandling) {
    gio::bed_reader reader(invalid_bed_path);
    gio::bed_entry entry;

    // First line should succeed
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr1");

    // Second line has invalid coordinate (non-numeric)
    EXPECT_FALSE(reader.read_next(entry));
    EXPECT_FALSE(reader.get_error_message().empty());

    // Error message should indicate the problem
    std::string error = reader.get_error_message();
    EXPECT_TRUE(error.find("Invalid coordinate format") != std::string::npos ||
                error.find("line") != std::string::npos);
}

TEST_F(bedfileTest, fileNotFound) {
    fs::path nonexistent = test_data_dir / "nonexistent.bed";

    EXPECT_THROW({
        gio::bed_reader reader(nonexistent);
    }, std::runtime_error);
}

// ==========================================
// Constructor Validation Tests
// ==========================================

TEST_F(bedfileTest, validationInvalidFormat) {
    // Create a temporary file with invalid format (not enough columns)
    fs::path temp_file = test_data_dir / "temp_invalid_format.bed";
    std::ofstream out(temp_file);
    out << "# Comment line\n";
    out << "chr1\t1000\n";  // Only 2 columns instead of 3
    out.close();

    // Constructor should throw because first data line is invalid
    EXPECT_THROW({
        gio::bed_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(bedfileTest, validationInvalidCoordinates) {
    // Create a temporary file with non-integer coordinates
    fs::path temp_file = test_data_dir / "temp_invalid_coords.bed";
    std::ofstream out(temp_file);
    out << "# Comment line\n";
    out << "chr1\tINVALID\t2000\n";
    out.close();

    // Constructor should throw because coordinates are non-integer
    EXPECT_THROW({
        gio::bed_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(bedfileTest, validationInvalidCoordinateRange) {
    // Create a temporary file with start >= end
    fs::path temp_file = test_data_dir / "temp_invalid_range.bed";
    std::ofstream out(temp_file);
    out << "# Comment line\n";
    out << "chr1\t2000\t1000\n";  // start > end
    out.close();

    // Constructor should throw because start >= end
    EXPECT_THROW({
        gio::bed_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(bedfileTest, validationEmptyFile) {
    // Create a temporary empty file
    fs::path temp_file = test_data_dir / "temp_empty.bed";
    std::ofstream out(temp_file);
    out.close();

    // Constructor should throw because no valid data found
    EXPECT_THROW({
        gio::bed_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(bedfileTest, validationOnlyComments) {
    // Create a temporary file with only comments
    fs::path temp_file = test_data_dir / "temp_only_comments.bed";
    std::ofstream out(temp_file);
    out << "# Comment 1\n";
    out << "# Comment 2\n";
    out << "# Comment 3\n";
    out.close();

    // Constructor should throw because no valid data found
    EXPECT_THROW({
        gio::bed_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(bedfileTest, validationValidFirstLineInvalidSecond) {
    // Test that validation passes when first line is valid
    // (even if subsequent lines are invalid - those are caught during read_next)
    // This is the existing test_invalid.bed file behavior
    EXPECT_NO_THROW({
        gio::bed_reader reader(invalid_bed_path);
    });
}

// ==========================================
// Interval Object Tests
// ==========================================

TEST_F(bedfileTest, intervalObjectCreation) {
    gio::bed_reader reader(bed3_path);
    gio::bed_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    // Verify interval object is properly created
    gdt::interval& intvl = entry.interval;
    EXPECT_EQ(intvl.get_start(), 1000);
    EXPECT_EQ(intvl.get_end(), 2000);
    EXPECT_EQ(intvl.get_end() - intvl.get_start(), 1000);
}

// ==========================================
// Gzipped File Tests
// ==========================================

TEST_F(bedfileTest, detectGzippedFileType) {
    gio::filetype_detector detector;
    auto [detected_filetype, compression] = detector.detect_filetype(bed3_path_gz);

    EXPECT_EQ(detected_filetype, gio::filetype::BED);
    EXPECT_EQ(compression, gio::compression_type::GZIP);
}

TEST_F(bedfileTest, readGzippedBED3Format) {
    gio::bed_reader reader(bed3_path_gz);
    gio::bed_entry entry;

    // First entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr1");
    EXPECT_EQ(entry.interval.get_start(), 1000);
    EXPECT_EQ(entry.interval.get_end(), 2000);
    EXPECT_FALSE(entry.name.has_value());
    EXPECT_FALSE(entry.score.has_value());
    EXPECT_FALSE(entry.strand.has_value());

    // Second entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr2");
    EXPECT_EQ(entry.interval.get_start(), 5000);
    EXPECT_EQ(entry.interval.get_end(), 6000);

    // Third entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chrX");
    EXPECT_EQ(entry.interval.get_start(), 100);
    EXPECT_EQ(entry.interval.get_end(), 500);

    // No more entries
    EXPECT_FALSE(reader.read_next(entry));
}

TEST_F(bedfileTest, readGzippedBED6Format) {
    gio::bed_reader reader(bed6_path_gz);
    gio::bed_entry entry;

    // First entry with optional fields
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr1");
    EXPECT_EQ(entry.interval.get_start(), 1000);
    EXPECT_EQ(entry.interval.get_end(), 2000);
    ASSERT_TRUE(entry.name.has_value());
    EXPECT_EQ(entry.name.value(), "feature1");
    ASSERT_TRUE(entry.score.has_value());
    EXPECT_EQ(entry.score.value(), 500);
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(entry.strand.value(), '+');

    // Second entry
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr2");
    ASSERT_TRUE(entry.name.has_value());
    EXPECT_EQ(entry.name.value(), "feature2");
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(entry.strand.value(), '-');

    // Third entry with '.' strand
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chrX");
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(entry.strand.value(), '.');
}

TEST_F(bedfileTest, readGzippedBED12Format) {
    gio::bed_reader reader(bed12_path_gz);
    gio::bed_entry entry;

    // First entry - full BED12 from gzipped file
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr1");
    EXPECT_EQ(entry.interval.get_start(), 1000);
    EXPECT_EQ(entry.interval.get_end(), 2000);
    ASSERT_TRUE(entry.name.has_value());
    EXPECT_EQ(entry.name.value(), "item1");
    ASSERT_TRUE(entry.thick_start.has_value());
    EXPECT_EQ(entry.thick_start.value(), 1200);
    ASSERT_TRUE(entry.thick_end.has_value());
    EXPECT_EQ(entry.thick_end.value(), 1800);
    ASSERT_TRUE(entry.item_rgb.has_value());
    EXPECT_EQ(entry.item_rgb.value(), "255,0,0");
    ASSERT_TRUE(entry.block_count.has_value());
    EXPECT_EQ(entry.block_count.value(), "2");

    // Read remaining entries
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chr2");

    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.chrom, "chrX");

    // No more entries
    EXPECT_FALSE(reader.read_next(entry));
}

TEST_F(bedfileTest, gzippedHasNextFunctionality) {
    gio::bed_reader reader(bed3_path_gz);

    EXPECT_TRUE(reader.has_next());

    gio::bed_entry entry;
    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    // After reading all 3 entries, has_next should return false
    EXPECT_FALSE(reader.has_next());
}