/*
* SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
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

    auto [detected_filetype_gz, compression_gz] = detector.detect_filetype(bed3_path_gz);

    EXPECT_EQ(detected_filetype_gz, gio::filetype::BED);
    EXPECT_EQ(compression_gz, gio::compression_type::GZIP);
}

// ==========================================
// BED3 Format Tests
// ==========================================

TEST_F(bedfileTest, readBED3Format) {
    gio::bed_reader reader(bed3_path);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 3);

    // First entry
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].interval.get_start(), 1000);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    EXPECT_FALSE(entries[0].name.has_value());
    EXPECT_FALSE(entries[0].score.has_value());
    EXPECT_FALSE(entries[0].strand.has_value());

    // Second entry
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[1].interval.get_start(), 5000);
    EXPECT_EQ(entries[1].interval.get_end(), 6000);

    // Third entry
    EXPECT_EQ(entries[2].chrom, "chrX");
    EXPECT_EQ(entries[2].interval.get_start(), 100);
    EXPECT_EQ(entries[2].interval.get_end(), 500);
}

// ==========================================
// BED6 Format Tests
// ==========================================

TEST_F(bedfileTest, readBED6Format) {
    gio::bed_reader reader(bed6_path);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 3);

    // First entry with optional fields
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].interval.get_start(), 1000);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    ASSERT_TRUE(entries[0].name.has_value());
    EXPECT_EQ(entries[0].name.value(), "feature1");
    ASSERT_TRUE(entries[0].score.has_value());
    EXPECT_EQ(entries[0].score.value(), 500);
    ASSERT_TRUE(entries[0].strand.has_value());
    EXPECT_EQ(entries[0].strand.value(), '+');

    // Second entry
    EXPECT_EQ(entries[1].chrom, "chr2");
    ASSERT_TRUE(entries[1].name.has_value());
    EXPECT_EQ(entries[1].name.value(), "feature2");
    ASSERT_TRUE(entries[1].strand.has_value());
    EXPECT_EQ(entries[1].strand.value(), '-');

    // Third entry with '.' strand
    EXPECT_EQ(entries[2].chrom, "chrX");
    ASSERT_TRUE(entries[2].strand.has_value());
    EXPECT_EQ(entries[2].strand.value(), '.');
}

// ==========================================
// BED12 Format Tests
// ==========================================

TEST_F(bedfileTest, readBED12Format) {
    gio::bed_reader reader(bed12_path);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 3);

    // First entry - full BED12
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].interval.get_start(), 1000);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    ASSERT_TRUE(entries[0].name.has_value());
    EXPECT_EQ(entries[0].name.value(), "item1");
    ASSERT_TRUE(entries[0].score.has_value());
    EXPECT_EQ(entries[0].score.value(), 100);
    ASSERT_TRUE(entries[0].strand.has_value());
    EXPECT_EQ(entries[0].strand.value(), '+');
    ASSERT_TRUE(entries[0].thickness.has_value());
    EXPECT_EQ(entries[0].thickness.value().start, 1200);
    EXPECT_EQ(entries[0].thickness.value().end, 1800);
    ASSERT_TRUE(entries[0].item_rgb.has_value());
    EXPECT_EQ(entries[0].item_rgb.value().red, 255);
    EXPECT_EQ(entries[0].item_rgb.value().green, 0);
    EXPECT_EQ(entries[0].item_rgb.value().blue, 0);
    ASSERT_TRUE(entries[0].blocks.has_value());
    EXPECT_EQ(entries[0].blocks.value().count, 2);
    EXPECT_EQ(entries[0].blocks.value().sizes.size(), 2);
    EXPECT_EQ(entries[0].blocks.value().sizes[0], 400);
    EXPECT_EQ(entries[0].blocks.value().sizes[1], 400);
    EXPECT_EQ(entries[0].blocks.value().starts.size(), 2);
    EXPECT_EQ(entries[0].blocks.value().starts[0], 0);
    EXPECT_EQ(entries[0].blocks.value().starts[1], 600);

    // Second entry - with 3 blocks
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[1].interval.get_start(), 5000);
    EXPECT_EQ(entries[1].interval.get_end(), 8000);
    ASSERT_TRUE(entries[1].blocks.has_value());
    EXPECT_EQ(entries[1].blocks.value().count, 3);

    // Third entry - single block
    EXPECT_EQ(entries[2].chrom, "chrX");
    ASSERT_TRUE(entries[2].blocks.has_value());
    EXPECT_EQ(entries[2].blocks.value().count, 1);
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

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 3);

    // First entry
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].interval.get_start(), 1000);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    EXPECT_FALSE(entries[0].name.has_value());
    EXPECT_FALSE(entries[0].score.has_value());
    EXPECT_FALSE(entries[0].strand.has_value());

    // Second entry
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[1].interval.get_start(), 5000);
    EXPECT_EQ(entries[1].interval.get_end(), 6000);

    // Third entry
    EXPECT_EQ(entries[2].chrom, "chrX");
    EXPECT_EQ(entries[2].interval.get_start(), 100);
    EXPECT_EQ(entries[2].interval.get_end(), 500);
}

TEST_F(bedfileTest, readGzippedBED6Format) {
    gio::bed_reader reader(bed6_path_gz);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 3);

    // First entry with optional fields
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].interval.get_start(), 1000);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    ASSERT_TRUE(entries[0].name.has_value());
    EXPECT_EQ(entries[0].name.value(), "feature1");
    ASSERT_TRUE(entries[0].score.has_value());
    EXPECT_EQ(entries[0].score.value(), 500);
    ASSERT_TRUE(entries[0].strand.has_value());
    EXPECT_EQ(entries[0].strand.value(), '+');

    // Second entry
    EXPECT_EQ(entries[1].chrom, "chr2");
    ASSERT_TRUE(entries[1].name.has_value());
    EXPECT_EQ(entries[1].name.value(), "feature2");
    ASSERT_TRUE(entries[1].strand.has_value());
    EXPECT_EQ(entries[1].strand.value(), '-');

    // Third entry with '.' strand
    EXPECT_EQ(entries[2].chrom, "chrX");
    ASSERT_TRUE(entries[2].strand.has_value());
    EXPECT_EQ(entries[2].strand.value(), '.');
}

TEST_F(bedfileTest, readGzippedBED12Format) {
    gio::bed_reader reader(bed12_path_gz);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 3);

    // First entry - full BED12 from gzipped file
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].interval.get_start(), 1000);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    ASSERT_TRUE(entries[0].name.has_value());
    EXPECT_EQ(entries[0].name.value(), "item1");
    ASSERT_TRUE(entries[0].thickness.has_value());
    EXPECT_EQ(entries[0].thickness.value().start, 1200);
    EXPECT_EQ(entries[0].thickness.value().end, 1800);
    ASSERT_TRUE(entries[0].item_rgb.has_value());
    EXPECT_EQ(entries[0].item_rgb.value().red, 255);
    EXPECT_EQ(entries[0].item_rgb.value().green, 0);
    EXPECT_EQ(entries[0].item_rgb.value().blue, 0);
    ASSERT_TRUE(entries[0].blocks.has_value());
    EXPECT_EQ(entries[0].blocks.value().count, 2);

    // Remaining entries
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[2].chrom, "chrX");
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

// ==========================================
// Iterator Tests
// ==========================================

TEST_F(bedfileTest, iteratorBasicIteration) {
    gio::bed_reader reader(bed3_path);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 3);

    // Verify first entry
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].interval.get_start(), 1000);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);

    // Verify second entry
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[1].interval.get_start(), 5000);
    EXPECT_EQ(entries[1].interval.get_end(), 6000);

    // Verify third entry
    EXPECT_EQ(entries[2].chrom, "chrX");
    EXPECT_EQ(entries[2].interval.get_start(), 100);
    EXPECT_EQ(entries[2].interval.get_end(), 500);
}

TEST_F(bedfileTest, iteratorWithOptionalFields) {
    gio::bed_reader reader(bed6_path);

    int count = 0;
    for (const auto& entry : reader) {
        EXPECT_FALSE(entry.chrom.empty());
        count++;

        // Check that optional fields are present
        if (count == 1) {
            ASSERT_TRUE(entry.name.has_value());
            EXPECT_EQ(entry.name.value(), "feature1");
            ASSERT_TRUE(entry.score.has_value());
            EXPECT_EQ(entry.score.value(), 500);
            ASSERT_TRUE(entry.strand.has_value());
            EXPECT_EQ(entry.strand.value(), '+');
        }
    }

    EXPECT_EQ(count, 3);
}

TEST_F(bedfileTest, iteratorEmptyFile) {
    // Create temporary file with only a comment (no valid data)
    fs::path empty_bed = test_data_dir / "temp_iter_empty.bed";
    std::ofstream out(empty_bed);
    out << "# Just a comment\n";
    out.close();

    // Constructor should throw because no valid data found
    EXPECT_THROW({
        gio::bed_reader reader(empty_bed);
    }, std::runtime_error);

    // Cleanup
    fs::remove(empty_bed);
}

TEST_F(bedfileTest, iteratorManualIncrement) {
    gio::bed_reader reader(bed3_path);

    auto it = reader.begin();
    auto end = reader.end();

    ASSERT_NE(it, end);
    EXPECT_EQ(it->chrom, "chr1");

    ++it;
    ASSERT_NE(it, end);
    EXPECT_EQ(it->chrom, "chr2");

    ++it;
    ASSERT_NE(it, end);
    EXPECT_EQ(it->chrom, "chrX");

    ++it;
    EXPECT_EQ(it, end);
}

TEST_F(bedfileTest, iteratorPostIncrement) {
    gio::bed_reader reader(bed3_path);

    auto it = reader.begin();
    auto old_it = it++;

    EXPECT_EQ(old_it->chrom, "chr1");
    EXPECT_EQ(it->chrom, "chr2");
}

// ==========================================
// Mixed BED Format Tests (stale optional regression)
// ==========================================

TEST_F(bedfileTest, mixedBedFormatsNoStaleOptionals) {
    // BED12 followed by BED3 followed by BED6
    // Verifies that optional fields from a previous record don't leak into the next
    fs::path mixed_path = test_data_dir / "test_mixed_bed.bed";
    gio::bed_reader reader(mixed_path);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    ASSERT_EQ(entries.size(), 3);

    // First entry: BED12 — all optional fields present
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].interval.get_start(), 1000);
    EXPECT_EQ(entries[0].interval.get_end(), 2000);
    ASSERT_TRUE(entries[0].name.has_value());
    EXPECT_EQ(entries[0].name.value(), "item1");
    ASSERT_TRUE(entries[0].score.has_value());
    EXPECT_EQ(entries[0].score.value(), 100);
    ASSERT_TRUE(entries[0].strand.has_value());
    EXPECT_EQ(entries[0].strand.value(), '+');
    ASSERT_TRUE(entries[0].thickness.has_value());
    ASSERT_TRUE(entries[0].item_rgb.has_value());
    ASSERT_TRUE(entries[0].blocks.has_value());

    // Second entry: BED3 — ALL optional fields must be empty (not stale from BED12)
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[1].interval.get_start(), 5000);
    EXPECT_EQ(entries[1].interval.get_end(), 6000);
    EXPECT_FALSE(entries[1].name.has_value()) << "name should be reset for BED3 record";
    EXPECT_FALSE(entries[1].score.has_value()) << "score should be reset for BED3 record";
    EXPECT_FALSE(entries[1].strand.has_value()) << "strand should be reset for BED3 record";
    EXPECT_FALSE(entries[1].thickness.has_value()) << "thickness should be reset for BED3 record";
    EXPECT_FALSE(entries[1].item_rgb.has_value()) << "item_rgb should be reset for BED3 record";
    EXPECT_FALSE(entries[1].blocks.has_value()) << "blocks should be reset for BED3 record";

    // Third entry: BED6 — only name/score/strand present, rest must be empty
    EXPECT_EQ(entries[2].chrom, "chr3");
    EXPECT_EQ(entries[2].interval.get_start(), 3000);
    EXPECT_EQ(entries[2].interval.get_end(), 4000);
    ASSERT_TRUE(entries[2].name.has_value());
    EXPECT_EQ(entries[2].name.value(), "feature3");
    ASSERT_TRUE(entries[2].score.has_value());
    EXPECT_EQ(entries[2].score.value(), 500);
    ASSERT_TRUE(entries[2].strand.has_value());
    EXPECT_EQ(entries[2].strand.value(), '-');
    EXPECT_FALSE(entries[2].thickness.has_value()) << "thickness should be reset for BED6 record";
    EXPECT_FALSE(entries[2].item_rgb.has_value()) << "item_rgb should be reset for BED6 record";
    EXPECT_FALSE(entries[2].blocks.has_value()) << "blocks should be reset for BED6 record";
}

TEST_F(bedfileTest, iteratorGzippedFile) {
    gio::bed_reader reader(bed3_path_gz);

    std::vector<std::string> chroms;
    for (const auto& entry : reader) {
        chroms.push_back(entry.chrom);
    }

    ASSERT_EQ(chroms.size(), 3);
    EXPECT_EQ(chroms[0], "chr1");
    EXPECT_EQ(chroms[1], "chr2");
    EXPECT_EQ(chroms[2], "chrX");
}