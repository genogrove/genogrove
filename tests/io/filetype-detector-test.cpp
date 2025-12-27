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

namespace fs = std::filesystem;
namespace gio = genogrove::io;

// ==========================================
// Test Fixture for filetype_detector tests
// ==========================================

class filetypeDetectorTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path plain_bed;
    fs::path gzip_bed;
    fs::path bzip2_bed;
    fs::path xz_bed;
    fs::path zstd_bed;
    fs::path lz4_bed;

    void SetUp() override {
        test_data_dir = fs::current_path() / "io" / "data";
        plain_bed = test_data_dir / "test_compression.bed";
        gzip_bed = test_data_dir / "test_compression.bed.gz";
        bzip2_bed = test_data_dir / "test_compression.bed.bz2";
        xz_bed = test_data_dir / "test_compression.bed.xz";
        zstd_bed = test_data_dir / "test_compression.bed.zst";
        lz4_bed = test_data_dir / "test_compression.bed.lz4";
    }
};

// ==========================================
// Compression Detection Tests
// ==========================================

TEST_F(filetypeDetectorTest, detectNoCompression) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(plain_bed);

    EXPECT_EQ(ftype, gio::filetype::BED);
    EXPECT_EQ(comp, gio::compression_type::NONE);
}

TEST_F(filetypeDetectorTest, detectGzipCompression) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(gzip_bed);

    EXPECT_EQ(ftype, gio::filetype::BED);
    EXPECT_EQ(comp, gio::compression_type::GZIP);
}

TEST_F(filetypeDetectorTest, detectBzip2Compression) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(bzip2_bed);

    EXPECT_EQ(ftype, gio::filetype::BED);
    EXPECT_EQ(comp, gio::compression_type::BZIP2);
}

TEST_F(filetypeDetectorTest, detectXzCompression) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(xz_bed);

    EXPECT_EQ(ftype, gio::filetype::BED);
    EXPECT_EQ(comp, gio::compression_type::XZ);
}

TEST_F(filetypeDetectorTest, detectZstdCompression) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(zstd_bed);

    EXPECT_EQ(ftype, gio::filetype::BED);
    EXPECT_EQ(comp, gio::compression_type::ZSTD);
}

TEST_F(filetypeDetectorTest, detectLz4Compression) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(lz4_bed);

    EXPECT_EQ(ftype, gio::filetype::BED);
    EXPECT_EQ(comp, gio::compression_type::LZ4);
}

// ==========================================
// Extension and Magic Byte Interaction Tests
// ==========================================

TEST_F(filetypeDetectorTest, correctFileTypeFromDoubleExtension) {
    // Files like test.bed.gz should detect both BED and GZIP
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(gzip_bed);

    EXPECT_EQ(comp, gio::compression_type::GZIP);
    EXPECT_EQ(ftype, gio::filetype::BED);
}

TEST_F(filetypeDetectorTest, bzip2DoubleExtension) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(bzip2_bed);

    EXPECT_EQ(comp, gio::compression_type::BZIP2);
    EXPECT_EQ(ftype, gio::filetype::BED);
}

TEST_F(filetypeDetectorTest, xzDoubleExtension) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(xz_bed);

    EXPECT_EQ(comp, gio::compression_type::XZ);
    EXPECT_EQ(ftype, gio::filetype::BED);
}

TEST_F(filetypeDetectorTest, zstdDoubleExtension) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(zstd_bed);

    EXPECT_EQ(comp, gio::compression_type::ZSTD);
    EXPECT_EQ(ftype, gio::filetype::BED);
}

TEST_F(filetypeDetectorTest, lz4DoubleExtension) {
    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(lz4_bed);

    EXPECT_EQ(comp, gio::compression_type::LZ4);
    EXPECT_EQ(ftype, gio::filetype::BED);
}

// ==========================================
// Different File Types with Compression Tests
// ==========================================

TEST_F(filetypeDetectorTest, compressedGffFile) {
    fs::path gff_gz = test_data_dir / "test_gff3.gff.gz";

    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(gff_gz);

    EXPECT_EQ(ftype, gio::filetype::GFF);
    EXPECT_EQ(comp, gio::compression_type::GZIP);
}

TEST_F(filetypeDetectorTest, compressedGtfFile) {
    fs::path gtf_gz = test_data_dir / "test.gtf.gz";

    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(gtf_gz);

    EXPECT_EQ(ftype, gio::filetype::GTF);
    EXPECT_EQ(comp, gio::compression_type::GZIP);
}

// ==========================================
// Edge Cases
// ==========================================

TEST_F(filetypeDetectorTest, emptyFileShouldReturnNone) {
    fs::path empty_file = test_data_dir / "test_empty.bed";

    // Create an empty file
    std::ofstream(empty_file).close();

    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(empty_file);

    EXPECT_EQ(comp, gio::compression_type::NONE);

    // Clean up
    fs::remove(empty_file);
}

TEST_F(filetypeDetectorTest, singleByteFileShouldReturnNone) {
    fs::path single_byte_file = test_data_dir / "test_single_byte.bed";

    // Create a file with just one byte
    {
        std::ofstream file(single_byte_file, std::ios::binary);
        char byte = 0x42;
        file.write(&byte, 1);
    }

    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(single_byte_file);

    EXPECT_EQ(comp, gio::compression_type::NONE);

    // Clean up
    fs::remove(single_byte_file);
}

TEST_F(filetypeDetectorTest, fileWithWrongExtensionButCorrectMagicBytes) {
    // Create a gzipped file with .txt extension
    fs::path misnamed_file = test_data_dir / "test_misnamed.txt";

    // Copy the gzip file to a different extension
    std::ifstream src(gzip_bed, std::ios::binary);
    std::ofstream dst(misnamed_file, std::ios::binary);
    dst << src.rdbuf();
    src.close();
    dst.close();

    gio::filetype_detector detector;
    auto [ftype, comp] = detector.detect_filetype(misnamed_file);

    // Should detect GZIP from magic bytes, but filetype will be UNKNOWN
    EXPECT_EQ(comp, gio::compression_type::GZIP);

    // Clean up
    fs::remove(misnamed_file);
}