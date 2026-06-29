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
#include <vector>

// genogrove
#include <genogrove/io/filetype_detector.hpp>
#include <genogrove/io/bed_reader.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace fs = std::filesystem;
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 3);

    // First entry
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);
    EXPECT_FALSE(entries[0].name.has_value());
    EXPECT_FALSE(entries[0].score.has_value());
    EXPECT_FALSE(entries[0].strand.has_value());

    // Second entry
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[1].start, 5000);
    EXPECT_EQ(entries[1].end, 6000);

    // Third entry
    EXPECT_EQ(entries[2].chrom, "chrX");
    EXPECT_EQ(entries[2].start, 100);
    EXPECT_EQ(entries[2].end, 500);
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 3);

    // First entry with optional fields
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 3);

    // First entry - full BED12
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);
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
    EXPECT_EQ(entries[1].start, 5000);
    EXPECT_EQ(entries[1].end, 8000);
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
    // get_current_line() reports the 1-based physical line number, counting
    // comment and blank lines. test_bed3.bed has neither, so here the line
    // number coincides with the record index. The comment-counting case is
    // covered by gfffileTest.lineCounter.
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

    // Second line has invalid coordinate — throws by default
    EXPECT_THROW(reader.read_next(entry), std::runtime_error);
}

TEST_F(bedfileTest, skipInvalidLines) {
    gio::bed_reader reader(invalid_bed_path, {.skip_invalid_lines = true});

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Only the first valid line should be returned; invalid line skipped
    EXPECT_EQ(entries.size(), 1);
    EXPECT_EQ(entries[0].chrom, "chr1");
    // After iteration, error_message reflects the last read (EOF), not skipped lines
    EXPECT_TRUE(reader.get_error_message().empty());
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

TEST_F(bedfileTest, validationOverflowCoordinates) {
    // Create a temporary file with a coordinate that overflows size_t
    fs::path temp_file = test_data_dir / "temp_overflow_coords.bed";
    std::ofstream out(temp_file);
    out << "chr1\t99999999999999999999\t100\n";
    out.close();

    // Constructor should throw because coordinate overflows size_t
    EXPECT_THROW({
        gio::bed_reader reader(temp_file);
    }, std::runtime_error);

    // Clean up
    fs::remove(temp_file);
}

TEST_F(bedfileTest, partialBED9Throws) {
    // 8 columns: thickStart and thickEnd present but itemRgb missing
    fs::path temp_file = test_data_dir / "temp_partial_bed9.bed";
    std::ofstream out(temp_file);
    out << "chr1\t1000\t2000\tname1\t500\t+\t1200\t1800\n";
    out.close();

    gio::bed_reader reader(temp_file);
    gio::bed_entry entry;
    EXPECT_THROW(reader.read_next(entry), std::runtime_error);

    fs::remove(temp_file);
}

TEST_F(bedfileTest, partialBED9SkipInvalid) {
    // 7 columns: only thickStart present, thickEnd and itemRgb missing
    fs::path temp_file = test_data_dir / "temp_partial_bed9_skip.bed";
    std::ofstream out(temp_file);
    out << "chr1\t1000\t2000\tname1\t500\t+\t1200\n";
    out << "chr2\t3000\t4000\n";
    out.close();

    gio::bed_reader reader(temp_file, {.skip_invalid_lines = true});
    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Only the valid BED3 line should be returned
    ASSERT_EQ(entries.size(), 1);
    EXPECT_EQ(entries[0].chrom, "chr2");

    fs::remove(temp_file);
}

TEST_F(bedfileTest, partialBED12Throws) {
    // 10 columns: blockCount present but blockSizes and blockStarts missing
    fs::path temp_file = test_data_dir / "temp_partial_bed12.bed";
    std::ofstream out(temp_file);
    out << "chr1\t1000\t2000\tname1\t500\t+\t1200\t1800\t255,0,0\t2\n";
    out.close();

    gio::bed_reader reader(temp_file);
    gio::bed_entry entry;
    EXPECT_THROW(reader.read_next(entry), std::runtime_error);

    fs::remove(temp_file);
}

TEST_F(bedfileTest, partialBED12SkipInvalid) {
    // 11 columns: blockCount and blockSizes present but blockStarts missing
    fs::path temp_file = test_data_dir / "temp_partial_bed12_skip.bed";
    std::ofstream out(temp_file);
    out << "chr1\t1000\t2000\tname1\t500\t+\t1200\t1800\t255,0,0\t2\t400,400\n";
    out << "chr2\t3000\t4000\n";
    out.close();

    gio::bed_reader reader(temp_file, {.skip_invalid_lines = true});
    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Only the valid BED3 line should be returned
    ASSERT_EQ(entries.size(), 1);
    EXPECT_EQ(entries[0].chrom, "chr2");

    fs::remove(temp_file);
}

TEST_F(bedfileTest, validationEmptyFile) {
    // Empty file: structurally valid but zero records. Constructor must not
    // throw; iterator must immediately equal end(). See #310.
    fs::path temp_file = test_data_dir / "temp_empty.bed";
    std::ofstream out(temp_file);
    out.close();

    EXPECT_NO_THROW({
        gio::bed_reader reader(temp_file);
        // Iterating yields zero entries; this also exercises the
        // begin() == end() contract for an empty input. (Don't call
        // reader.begin() explicitly before the loop — it constructs an
        // iterator that calls advance(), which on a non-empty file
        // would consume the first record before the loop sees it.)
        std::vector<gio::bed_entry> entries;
        for (const auto& entry : reader) {
            entries.push_back(entry);
        }
        EXPECT_EQ(entries.size(), 0u);
    });

    fs::remove(temp_file);
}

TEST_F(bedfileTest, validationOnlyComments) {
    // Comments-only file: structurally valid but zero records. Same contract
    // as the empty case — constructor must not throw, iterator yields zero
    // entries. See #310.
    fs::path temp_file = test_data_dir / "temp_only_comments.bed";
    std::ofstream out(temp_file);
    out << "# Comment 1\n";
    out << "# Comment 2\n";
    out << "# Comment 3\n";
    out.close();

    EXPECT_NO_THROW({
        gio::bed_reader reader(temp_file);
        std::vector<gio::bed_entry> entries;
        for (const auto& entry : reader) {
            entries.push_back(entry);
        }
        EXPECT_EQ(entries.size(), 0u);
        EXPECT_TRUE(reader.get_error_message().empty());
    });

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

    // Verify interval fields are properly set
    EXPECT_EQ(entry.start, 1000);
    EXPECT_EQ(entry.end, 2000);
    EXPECT_EQ(entry.end - entry.start, 1000);
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 3);

    // First entry
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);
    EXPECT_FALSE(entries[0].name.has_value());
    EXPECT_FALSE(entries[0].score.has_value());
    EXPECT_FALSE(entries[0].strand.has_value());

    // Second entry
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[1].start, 5000);
    EXPECT_EQ(entries[1].end, 6000);

    // Third entry
    EXPECT_EQ(entries[2].chrom, "chrX");
    EXPECT_EQ(entries[2].start, 100);
    EXPECT_EQ(entries[2].end, 500);
}

TEST_F(bedfileTest, readGzippedBED6Format) {
    gio::bed_reader reader(bed6_path_gz);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 3);

    // First entry with optional fields
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 3);

    // First entry - full BED12 from gzipped file
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 3);

    // Verify first entry
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);

    // Verify second entry
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[1].start, 5000);
    EXPECT_EQ(entries[1].end, 6000);

    // Verify third entry
    EXPECT_EQ(entries[2].chrom, "chrX");
    EXPECT_EQ(entries[2].start, 100);
    EXPECT_EQ(entries[2].end, 500);
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    EXPECT_EQ(count, 3);
}

TEST_F(bedfileTest, iteratorEmptyFile) {
    // Comments-only file: range-based for loop must produce zero iterations.
    // See #310.
    fs::path empty_bed = test_data_dir / "temp_iter_empty.bed";
    std::ofstream out(empty_bed);
    out << "# Just a comment\n";
    out.close();

    gio::bed_reader reader(empty_bed);
    int count = 0;
    for ([[maybe_unused]] const auto& entry : reader) {
        ++count;
    }
    EXPECT_EQ(count, 0);

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
// Iterator equality (#325)
// ==========================================

TEST_F(bedfileTest, iteratorEqualToSelf) {
    gio::bed_reader reader(bed3_path);
    auto it = reader.begin();
    EXPECT_TRUE(it == it);
}

TEST_F(bedfileTest, iteratorCopyEqualToOriginalBeforeAdvance) {
    gio::bed_reader reader(bed3_path);
    auto a = reader.begin();
    auto b = a;
    EXPECT_TRUE(a == b);
    EXPECT_FALSE(a != b);
}

TEST_F(bedfileTest, iteratorCopyUnequalAfterOriginalAdvances) {
    // Pre-#325 fix: this returned TRUE because operator== only checked
    // at_end_ + reader_ identity. Post-fix the monotonic pos_ counter
    // distinguishes the two iterators.
    gio::bed_reader reader(bed3_path);
    auto a = reader.begin();   // a → entry 1
    auto b = a;                // b → entry 1 (copy)
    ++a;                       // a consumes entry 2 from reader; a is now at pos 2, b at pos 1
    EXPECT_FALSE(a == b);
    EXPECT_TRUE(a != b);
    EXPECT_EQ(a->chrom, "chr2");
    EXPECT_EQ(b->chrom, "chr1");
}

TEST_F(bedfileTest, iteratorBeginUnequalToEnd) {
    // begin() consumes a record, so call it only once (project convention,
    // see feedback_iterator_single_pass.md). End is default-constructed and
    // consumes nothing.
    gio::bed_reader reader(bed3_path);
    auto it = reader.begin();
    EXPECT_FALSE(it == reader.end());
    EXPECT_TRUE(it != reader.end());
}

TEST_F(bedfileTest, iteratorEndEqualsEnd) {
    gio::bed_reader reader(bed3_path);
    EXPECT_TRUE(reader.end() == reader.end());
}

TEST_F(bedfileTest, iteratorDrainedEqualsEnd) {
    gio::bed_reader reader(bed3_path);
    auto it = reader.begin();
    ++it;
    ++it;
    ++it;   // past the last (3rd) entry — must transition to end
    EXPECT_TRUE(it == reader.end());
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 3);

    // First entry: BED12 — all optional fields present
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].start, 1000);
    EXPECT_EQ(entries[0].end, 2000);
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
    EXPECT_EQ(entries[1].start, 5000);
    EXPECT_EQ(entries[1].end, 6000);
    EXPECT_FALSE(entries[1].name.has_value()) << "name should be reset for BED3 record";
    EXPECT_FALSE(entries[1].score.has_value()) << "score should be reset for BED3 record";
    EXPECT_FALSE(entries[1].strand.has_value()) << "strand should be reset for BED3 record";
    EXPECT_FALSE(entries[1].thickness.has_value()) << "thickness should be reset for BED3 record";
    EXPECT_FALSE(entries[1].item_rgb.has_value()) << "item_rgb should be reset for BED3 record";
    EXPECT_FALSE(entries[1].blocks.has_value()) << "blocks should be reset for BED3 record";

    // Third entry: BED6 — only name/score/strand present, rest must be empty
    EXPECT_EQ(entries[2].chrom, "chr3");
    EXPECT_EQ(entries[2].start, 3000);
    EXPECT_EQ(entries[2].end, 4000);
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
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(chroms.size(), 3);
    EXPECT_EQ(chroms[0], "chr1");
    EXPECT_EQ(chroms[1], "chr2");
    EXPECT_EQ(chroms[2], "chrX");
}

// ==========================================
// BED12 Invalid Block Coordinate Tests
// ==========================================

TEST_F(bedfileTest, bed12BlockCountMismatchThrows) {
    // blockCount=3 but only 2 blockSizes — should throw
    fs::path invalid_blocks = test_data_dir / "test_invalid_blocks.bed";

    gio::bed_reader reader(invalid_blocks);

    std::vector<gio::bed_entry> entries;
    EXPECT_THROW({
        for (const auto& entry : reader) {
            entries.push_back(entry);
        }
    }, std::runtime_error);
}

TEST_F(bedfileTest, bed12BlockCountMismatchSkipsWhenLenient) {
    fs::path invalid_blocks = test_data_dir / "test_invalid_blocks.bed";

    gio::bed_reader_options opts{.skip_invalid_lines = true};
    gio::bed_reader reader(invalid_blocks, opts);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Invalid record skipped, no valid records in file
    EXPECT_EQ(entries.size(), 0);
}

TEST_F(bedfileTest, bed12BlockStartOutsideIntervalThrows) {
    // blockStarts=[0,1500] with interval length=1000 — blockStart outside bounds
    fs::path invalid_bounds = test_data_dir / "test_invalid_block_bounds.bed";

    gio::bed_reader reader(invalid_bounds);

    std::vector<gio::bed_entry> entries;
    EXPECT_THROW({
        for (const auto& entry : reader) {
            entries.push_back(entry);
        }
    }, std::runtime_error);
}

// ==========================================
// Plain-gzip support (regression: #303)
// ==========================================
// `bgzf_open` reads both BGZF and plain gzip transparently, but `bgzf_seek`
// only works on BGZF. The reader's first-line validation rewinds via the
// helper which falls back to close+reopen when seek fails, so plain-gzip
// inputs (e.g. ENCODE-style `gzip` outputs, not `bgzip`) can be iterated
// end-to-end. `bgzf_has_next` likewise uses `bgzf_peek` rather than
// read-then-seek-back so iteration's `has_next()` is reliable mid-stream.

TEST_F(bedfileTest, readPlainGzipFile) {
    // test_compression.bed.gz is plain gzip (not BGZF); contains 3 BED3 rows.
    fs::path plain_gz = test_data_dir / "test_compression.bed.gz";
    gio::bed_reader reader(plain_gz);

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }
    EXPECT_TRUE(reader.get_error_message().empty()) << "Unexpected error: " << reader.get_error_message();

    ASSERT_EQ(entries.size(), 3);
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[1].chrom, "chr2");
    EXPECT_EQ(entries[2].chrom, "chrX");
}

TEST_F(bedfileTest, hasNextOnPlainGzipFile) {
    // Verifies that has_next() works mid-iteration on plain gzip — the prior
    // implementation used bgzf_seek to roll back its peek, which silently
    // returned false on plain gzip and broke iteration.
    fs::path plain_gz = test_data_dir / "test_compression.bed.gz";
    gio::bed_reader reader(plain_gz);

    EXPECT_TRUE(reader.has_next());

    gio::bed_entry entry;
    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    EXPECT_TRUE(reader.has_next());

    reader.read_next(entry);
    EXPECT_FALSE(reader.has_next());
}

TEST_F(bedfileTest, embeddedNulInFieldPreserved) {
    // Pins the bgzf_next_data_line fix (#346): line construction must use the
    // length-counted ctor so embedded NULs survive into the parsed entry.
    // The pre-fix `std::string(str.s)` would truncate the line at the first
    // \0, silently dropping the trailing fields.
    fs::path nul_bed = test_data_dir / "test_embedded_nul.bed";
    {
        std::ofstream out(nul_bed, std::ios::binary);
        // BED6 with a NUL embedded in the name column. Layout:
        //   chr1\t100\t200\tna<NUL>me\t0\t+\n
        // Pre-fix the line truncates at the NUL, leaving only 4 fields;
        // the bed_reader either fails or silently drops score+strand.
        out << "chr1\t100\t200\tna";
        out.put('\0');
        out << "me\t0\t+\n";
    }

    gio::bed_reader reader(nul_bed);
    gio::bed_entry entry;
    ASSERT_TRUE(reader.read_next(entry));

    // The name field should carry the embedded NUL — total length 5 bytes:
    //   'n', 'a', '\0', 'm', 'e'
    ASSERT_TRUE(entry.name.has_value());
    EXPECT_EQ(entry.name->size(), 5u);
    EXPECT_EQ((*entry.name)[2], '\0');

    // Trailing fields must still parse — confirms the line wasn't truncated
    // at the NUL (otherwise score / strand would be absent).
    ASSERT_TRUE(entry.score.has_value());
    EXPECT_EQ(*entry.score, 0);
    ASSERT_TRUE(entry.strand.has_value());
    EXPECT_EQ(*entry.strand, '+');

    fs::remove(nul_bed);
}

// ==========================================
// bed_entry serialization round-trip
// ==========================================

namespace {
    gio::bed_entry roundtrip(const gio::bed_entry& in) {
        std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
        in.serialize(ss);
        return gio::bed_entry::deserialize(ss);
    }
}

TEST(bedEntrySerialization, bed3RoundTrip) {
    // No optional fields set — every presence flag must round-trip as absent.
    gio::bed_entry in("chr1", 100, 200);
    auto out = roundtrip(in);

    EXPECT_EQ(out.chrom, "chr1");
    EXPECT_EQ(out.start, 100u);
    EXPECT_EQ(out.end, 200u);
    EXPECT_FALSE(out.name.has_value());
    EXPECT_FALSE(out.score.has_value());
    EXPECT_FALSE(out.strand.has_value());
    EXPECT_FALSE(out.thickness.has_value());
    EXPECT_FALSE(out.item_rgb.has_value());
    EXPECT_FALSE(out.blocks.has_value());
}

TEST(bedEntrySerialization, bed6RoundTrip) {
    gio::bed_entry in("chr2", 1000, 2000);
    in.name = "feature_A";
    in.score = 500;
    in.strand = '-';
    auto out = roundtrip(in);

    EXPECT_EQ(out.chrom, "chr2");
    EXPECT_EQ(out.start, 1000u);
    EXPECT_EQ(out.end, 2000u);
    ASSERT_TRUE(out.name.has_value());
    EXPECT_EQ(*out.name, "feature_A");
    ASSERT_TRUE(out.score.has_value());
    EXPECT_EQ(*out.score, 500);
    ASSERT_TRUE(out.strand.has_value());
    EXPECT_EQ(*out.strand, '-');
    EXPECT_FALSE(out.thickness.has_value());
}

TEST(bedEntrySerialization, bed12RoundTrip) {
    gio::bed_entry in("chrX", 0, 5000);
    in.name = "tx1";
    in.score = 0;
    in.strand = '+';
    in.thickness = gio::thick_info(10, 4990);
    in.item_rgb = gio::rgb_color(255, 128, 0);
    in.blocks = gio::block_info(3, {100, 200, 300}, {0, 1000, 4700});
    auto out = roundtrip(in);

    ASSERT_TRUE(out.thickness.has_value());
    EXPECT_EQ(out.thickness->start, 10u);
    EXPECT_EQ(out.thickness->end, 4990u);
    ASSERT_TRUE(out.item_rgb.has_value());
    EXPECT_EQ(out.item_rgb->red, 255);
    EXPECT_EQ(out.item_rgb->green, 128);
    EXPECT_EQ(out.item_rgb->blue, 0);
    ASSERT_TRUE(out.blocks.has_value());
    EXPECT_EQ(out.blocks->count, 3);
    EXPECT_EQ(out.blocks->sizes, (std::vector<size_t>{100, 200, 300}));
    EXPECT_EQ(out.blocks->starts, (std::vector<size_t>{0, 1000, 4700}));
}

TEST(bedEntrySerialization, preservesEmbeddedNulInName) {
    // The string serializer is length-prefixed, so an embedded NUL in the
    // name column must survive the round-trip.
    gio::bed_entry in("chr1", 5, 10);
    in.name = std::string("na\0me", 5);
    auto out = roundtrip(in);

    ASSERT_TRUE(out.name.has_value());
    EXPECT_EQ(out.name->size(), 5u);
    EXPECT_EQ((*out.name)[2], '\0');
}

TEST(bedEntrySerialization, groveRoundTrip) {
    // End-to-end: a grove keyed on intervals with bed_entry payloads must
    // serialize and deserialize with the payloads intact.
    namespace ggs = genogrove::structure;
    namespace gdt = genogrove::data_type;

    ggs::grove<gdt::interval, gio::bed_entry> grove(4);
    gio::bed_entry e1("chr1", 100, 200);
    e1.name = "a";
    e1.score = 10;
    e1.strand = '+';
    gio::bed_entry e2("chr1", 300, 400);
    e2.blocks = gio::block_info(2, {5, 5}, {0, 50});
    grove.insert_data("chr1", gdt::interval(100, 199), e1);
    grove.insert_data("chr1", gdt::interval(300, 399), e2);

    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    grove.serialize(ss);
    auto restored = ggs::grove<gdt::interval, gio::bed_entry>::deserialize(ss);

    auto r1 = restored.intersect(gdt::interval(150, 150), "chr1");
    ASSERT_EQ(r1.get_keys().size(), 1u);
    EXPECT_EQ(r1.get_keys()[0]->get_data().name.value_or(""), "a");
    EXPECT_EQ(r1.get_keys()[0]->get_data().strand.value_or(' '), '+');

    auto r2 = restored.intersect(gdt::interval(350, 350), "chr1");
    ASSERT_EQ(r2.get_keys().size(), 1u);
    ASSERT_TRUE(r2.get_keys()[0]->get_data().blocks.has_value());
    EXPECT_EQ(r2.get_keys()[0]->get_data().blocks->count, 2);
    EXPECT_EQ(r2.get_keys()[0]->get_data().blocks->sizes, (std::vector<size_t>{5, 5}));
}

// ==========================================
// Region access (tabix) — #456
// ==========================================

TEST_F(bedfileTest, regionReturnsOnlyOverlappingRecords) {
    // test_region.bed.gz is bgzip+tabix-indexed; chr1 has [100,200), [150,250),
    // [5000,6000). The region chr1:140-160 overlaps the first two only.
    fs::path region_gz = test_data_dir / "test_region.bed.gz";
    gio::bed_reader reader(region_gz, {.region = "chr1:140-160"});

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) entries.push_back(entry);
    EXPECT_TRUE(reader.get_error_message().empty()) << reader.get_error_message();

    ASSERT_EQ(entries.size(), 2u);
    EXPECT_EQ(entries[0].name.value_or(""), "a");
    EXPECT_EQ(entries[1].name.value_or(""), "b");
}

TEST_F(bedfileTest, regionOnDifferentChromIsIsolated) {
    fs::path region_gz = test_data_dir / "test_region.bed.gz";
    gio::bed_reader reader(region_gz, {.region = "chr2"});

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) entries.push_back(entry);

    ASSERT_EQ(entries.size(), 2u);
    EXPECT_EQ(entries[0].chrom, "chr2");
    EXPECT_EQ(entries[1].chrom, "chr2");
}

TEST_F(bedfileTest, regionWithNoOverlapYieldsNoRecords) {
    // chr1:300-400 falls in the gap between [150,250) and [5000,6000).
    fs::path region_gz = test_data_dir / "test_region.bed.gz";
    gio::bed_reader reader(region_gz, {.region = "chr1:300-400"});

    // has_next() prefetches, so it is precise even before the first read.
    EXPECT_FALSE(reader.has_next());

    std::vector<gio::bed_entry> entries;
    for (const auto& entry : reader) entries.push_back(entry);
    EXPECT_TRUE(reader.get_error_message().empty()) << reader.get_error_message();
    EXPECT_TRUE(entries.empty());
}

TEST_F(bedfileTest, regionHasNextIsPreciseMidIteration) {
    // chr1:140-160 overlaps exactly two records; has_next() must flip to false
    // right after the second read, not one record later (matches streaming).
    fs::path region_gz = test_data_dir / "test_region.bed.gz";
    gio::bed_reader reader(region_gz, {.region = "chr1:140-160"});

    gio::bed_entry entry;
    EXPECT_TRUE(reader.has_next());
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_TRUE(reader.has_next());
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_FALSE(reader.has_next());
    EXPECT_FALSE(reader.read_next(entry));
}

TEST_F(bedfileTest, regionOnNonIndexedFileThrows) {
    // Plain (uncompressed, unindexed) BED cannot be seeked by region.
    fs::path plain = test_data_dir / "test_bed3.bed";
    EXPECT_THROW(gio::bed_reader(plain, {.region = "chr1:1-1000"}), std::runtime_error);
}
