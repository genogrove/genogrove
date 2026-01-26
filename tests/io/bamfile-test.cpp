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
#include <algorithm>

// genogrove
#include <genogrove/io/bam_reader.hpp>
#include <genogrove/io/filetype_detector.hpp>
#include <genogrove/data_type/interval.hpp>

namespace fs = std::filesystem;
namespace gdt = genogrove::data_type;
namespace gio = genogrove::io;

// ==========================================
// Test Fixture for BAM/SAM file tests
// ==========================================

class BamReaderTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path sam_path;
    fs::path bam_path;

    void SetUp() override {
        test_data_dir = fs::current_path() / "io" / "data";
        sam_path = test_data_dir / "test.sam";
        bam_path = test_data_dir / "test.bam";
    }
};

// ==========================================
// File Type Detection Tests
// ==========================================

TEST_F(BamReaderTest, DetectSamFileType) {
    gio::filetype_detector detector;
    auto [detected_filetype, compression] = detector.detect_filetype(sam_path);

    EXPECT_EQ(detected_filetype, gio::filetype::SAM);
    EXPECT_EQ(compression, gio::compression_type::NONE);
}

// ==========================================
// Basic SAM Reading Tests
// ==========================================

TEST_F(BamReaderTest, ReadSamFile) {
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // We have 9 records in test.sam, but default options skip unmapped (read004)
    ASSERT_EQ(entries.size(), 8);
}

TEST_F(BamReaderTest, ReadSamFileIncludeAll) {
    gio::bam_reader reader(sam_path, gio::bam_reader_options::include_all());

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // All 9 records including unmapped
    ASSERT_EQ(entries.size(), 9);
}

TEST_F(BamReaderTest, VerifyFirstAlignment) {
    gio::bam_reader reader(sam_path);
    gio::sam_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    EXPECT_EQ(entry.qname, "read001");
    EXPECT_EQ(entry.chrom, "chr1");
    EXPECT_EQ(entry.interval.get_start(), 999);  // 0-based (SAM POS is 1-based)
    EXPECT_EQ(entry.interval.get_end(), 1049);   // 50M CIGAR
    EXPECT_EQ(entry.mapq, 60);
    EXPECT_FALSE(entry.flags.is_reverse());
    EXPECT_TRUE(entry.flags.is_paired());
    EXPECT_TRUE(entry.flags.is_proper_pair());
    EXPECT_EQ(entry.get_strand(), '+');
}

TEST_F(BamReaderTest, VerifyReverseStrandAlignment) {
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find the reverse strand read (read003)
    auto it = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read003"; });

    ASSERT_NE(it, entries.end());
    EXPECT_TRUE(it->flags.is_reverse());
    EXPECT_EQ(it->get_strand(), '-');
    EXPECT_EQ(it->chrom, "chr2");
}

// ==========================================
// CIGAR Parsing Tests
// ==========================================

TEST_F(BamReaderTest, ParseSimpleCigar) {
    gio::bam_reader reader(sam_path);
    gio::sam_entry entry;

    // First read has 50M CIGAR
    ASSERT_TRUE(reader.read_next(entry));

    ASSERT_EQ(entry.cigar.size(), 1);
    EXPECT_EQ(entry.cigar[0].op, gio::cigar_op::MATCH);
    EXPECT_EQ(entry.cigar[0].length, 50);
    EXPECT_EQ(entry.cigar_string_repr(), "50M");
}

TEST_F(BamReaderTest, ParseComplexCigar) {
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find read002 with 30M10I10M CIGAR
    auto it = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read002"; });

    ASSERT_NE(it, entries.end());
    ASSERT_EQ(it->cigar.size(), 3);

    EXPECT_EQ(it->cigar[0].op, gio::cigar_op::MATCH);
    EXPECT_EQ(it->cigar[0].length, 30);

    EXPECT_EQ(it->cigar[1].op, gio::cigar_op::INS);
    EXPECT_EQ(it->cigar[1].length, 10);

    EXPECT_EQ(it->cigar[2].op, gio::cigar_op::MATCH);
    EXPECT_EQ(it->cigar[2].length, 10);

    EXPECT_EQ(it->cigar_string_repr(), "30M10I10M");

    // Interval should be computed from reference-consuming operations only
    // 30M + 10M = 40 reference bases (insertion doesn't consume reference)
    EXPECT_EQ(it->interval.get_end() - it->interval.get_start(), 40);
}

TEST_F(BamReaderTest, ParseCigarWithDeletion) {
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find read003 with 25M5D25M CIGAR
    auto it = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read003"; });

    ASSERT_NE(it, entries.end());
    ASSERT_EQ(it->cigar.size(), 3);

    EXPECT_EQ(it->cigar[0].op, gio::cigar_op::MATCH);
    EXPECT_EQ(it->cigar[0].length, 25);

    EXPECT_EQ(it->cigar[1].op, gio::cigar_op::DEL);
    EXPECT_EQ(it->cigar[1].length, 5);

    EXPECT_EQ(it->cigar[2].op, gio::cigar_op::MATCH);
    EXPECT_EQ(it->cigar[2].length, 25);

    // Interval: 25M + 5D + 25M = 55 reference bases
    EXPECT_EQ(it->interval.get_end() - it->interval.get_start(), 55);
}

TEST_F(BamReaderTest, ParseCigarWithSkip) {
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find read007 with 20M100N30M CIGAR (spliced alignment)
    auto it = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read007"; });

    ASSERT_NE(it, entries.end());
    ASSERT_EQ(it->cigar.size(), 3);

    EXPECT_EQ(it->cigar[0].op, gio::cigar_op::MATCH);
    EXPECT_EQ(it->cigar[1].op, gio::cigar_op::REF_SKIP);
    EXPECT_EQ(it->cigar[2].op, gio::cigar_op::MATCH);

    // Interval: 20M + 100N + 30M = 150 reference bases
    EXPECT_EQ(it->interval.get_end() - it->interval.get_start(), 150);
}

TEST_F(BamReaderTest, ParseCigarWithSoftClipping) {
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find read006 with 10S30M10S CIGAR
    auto it = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read006"; });

    ASSERT_NE(it, entries.end());
    ASSERT_EQ(it->cigar.size(), 3);

    EXPECT_EQ(it->cigar[0].op, gio::cigar_op::SOFT_CLIP);
    EXPECT_EQ(it->cigar[1].op, gio::cigar_op::MATCH);
    EXPECT_EQ(it->cigar[2].op, gio::cigar_op::SOFT_CLIP);

    // Interval: only 30M consumes reference
    EXPECT_EQ(it->interval.get_end() - it->interval.get_start(), 30);
}

// ==========================================
// Interval Computation Tests
// ==========================================

TEST_F(BamReaderTest, IntervalStartIsZeroBased) {
    gio::bam_reader reader(sam_path);
    gio::sam_entry entry;

    // First read: POS=1000 in SAM (1-based) -> 999 in 0-based
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(entry.interval.get_start(), 999);
}

// ==========================================
// Tag Parsing Tests
// ==========================================

TEST_F(BamReaderTest, ParseIntegerTag) {
    gio::bam_reader reader(sam_path);
    gio::sam_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    auto it = entry.tags.find("NH");
    ASSERT_NE(it, entry.tags.end());
    EXPECT_EQ(std::get<int64_t>(it->second), 1);
}

TEST_F(BamReaderTest, ParseStringTag) {
    gio::bam_reader reader(sam_path);
    gio::sam_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    auto it = entry.tags.find("RG");
    ASSERT_NE(it, entry.tags.end());
    EXPECT_EQ(std::get<std::string>(it->second), "sample1");
}

TEST_F(BamReaderTest, ParseCharacterTag) {
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find read003 which has XS:A:+ tag
    auto it = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read003"; });

    ASSERT_NE(it, entries.end());

    auto tag_it = it->tags.find("XS");
    ASSERT_NE(tag_it, it->tags.end());
    EXPECT_EQ(std::get<char>(tag_it->second), '+');
}

TEST_F(BamReaderTest, MultipleTags) {
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find read008 which has many tags
    auto it = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read008"; });

    ASSERT_NE(it, entries.end());

    // Check multiple tags exist
    EXPECT_NE(it->tags.find("NH"), it->tags.end());
    EXPECT_NE(it->tags.find("NM"), it->tags.end());
    EXPECT_NE(it->tags.find("MD"), it->tags.end());
    EXPECT_NE(it->tags.find("AS"), it->tags.end());
    EXPECT_NE(it->tags.find("BC"), it->tags.end());
}

// ==========================================
// Mate Information Tests
// ==========================================

TEST_F(BamReaderTest, MateInfoForPairedRead) {
    gio::bam_reader reader(sam_path);
    gio::sam_entry entry;

    // First read is paired
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_TRUE(entry.flags.is_paired());
    ASSERT_TRUE(entry.mate.has_value());

    EXPECT_EQ(entry.mate->chrom, "=");  // Same reference
    EXPECT_EQ(entry.mate->position, 1199);  // 0-based (1200 in SAM)
    EXPECT_EQ(entry.mate->insert_size, 250);
}

TEST_F(BamReaderTest, NoMateInfoForUnpairedRead) {
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find read002 which is unpaired
    auto it = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read002"; });

    ASSERT_NE(it, entries.end());
    EXPECT_FALSE(it->flags.is_paired());
    EXPECT_FALSE(it->mate.has_value());
}

// ==========================================
// Flag Tests
// ==========================================

TEST_F(BamReaderTest, FlagMethods) {
    gio::bam_reader reader(sam_path, gio::bam_reader_options::include_all());

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find unmapped read (read004)
    auto unmapped = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read004"; });
    ASSERT_NE(unmapped, entries.end());
    EXPECT_TRUE(unmapped->flags.is_unmapped());
    EXPECT_FALSE(unmapped->is_mapped());

    // Find secondary alignment (read005)
    auto secondary = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read005"; });
    ASSERT_NE(secondary, entries.end());
    EXPECT_TRUE(secondary->flags.is_secondary());
    EXPECT_FALSE(secondary->is_primary());

    // Find supplementary alignment (read006)
    auto supplementary = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read006"; });
    ASSERT_NE(supplementary, entries.end());
    EXPECT_TRUE(supplementary->flags.is_supplementary());
    EXPECT_FALSE(supplementary->is_primary());
}

// ==========================================
// Filtering Tests
// ==========================================

TEST_F(BamReaderTest, FilterUnmappedReads) {
    // Default options skip unmapped
    gio::bam_reader reader(sam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // All entries should be mapped
    for (const auto& entry : entries) {
        EXPECT_FALSE(entry.flags.is_unmapped());
    }
}

TEST_F(BamReaderTest, PrimaryOnlyFilter) {
    gio::bam_reader reader(sam_path, gio::bam_reader_options::primary_only());

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // All entries should be primary
    for (const auto& entry : entries) {
        EXPECT_TRUE(entry.is_primary()) << "Read " << entry.qname << " is not primary";
    }

    // Should have filtered out secondary (read005) and supplementary (read006)
    auto secondary = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read005"; });
    EXPECT_EQ(secondary, entries.end());

    auto supplementary = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read006"; });
    EXPECT_EQ(supplementary, entries.end());
}

TEST_F(BamReaderTest, MapqFilter) {
    gio::bam_reader_options opts;
    opts.skip_unmapped = true;
    opts.min_mapq = 30;

    gio::bam_reader reader(sam_path, opts);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // All entries should have MAPQ >= 30
    for (const auto& entry : entries) {
        EXPECT_GE(entry.mapq, 30) << "Read " << entry.qname << " has MAPQ " << (int)entry.mapq;
    }

    // read005 has MAPQ 20, read008 has MAPQ 15 - both should be filtered
    auto low_mapq1 = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read005"; });
    EXPECT_EQ(low_mapq1, entries.end());

    auto low_mapq2 = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read008"; });
    EXPECT_EQ(low_mapq2, entries.end());
}

// ==========================================
// Sequence and Quality Tests
// ==========================================

TEST_F(BamReaderTest, SequenceExtraction) {
    gio::bam_reader reader(sam_path);
    gio::sam_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    EXPECT_EQ(entry.sequence.size(), 50);
    EXPECT_EQ(entry.sequence, "ACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTACGTAC");
}

TEST_F(BamReaderTest, QualityExtraction) {
    gio::bam_reader reader(sam_path);
    gio::sam_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    EXPECT_EQ(entry.quality.size(), 50);
    // All I's in quality string (ASCII 73, Phred+33 = 40)
    for (char c : entry.quality) {
        EXPECT_EQ(c, 'I');
    }
}

// ==========================================
// Header Tests
// ==========================================

TEST_F(BamReaderTest, GetHeader) {
    gio::bam_reader reader(sam_path);

    const std::string& header = reader.get_header();
    EXPECT_FALSE(header.empty());
    EXPECT_NE(header.find("@HD"), std::string::npos);
    EXPECT_NE(header.find("@SQ"), std::string::npos);
}

TEST_F(BamReaderTest, GetReferenceNames) {
    gio::bam_reader reader(sam_path);

    const auto& refs = reader.get_reference_names();
    ASSERT_EQ(refs.size(), 3);
    EXPECT_EQ(refs[0], "chr1");
    EXPECT_EQ(refs[1], "chr2");
    EXPECT_EQ(refs[2], "chrX");
}

// ==========================================
// Iterator Tests
// ==========================================

TEST_F(BamReaderTest, IteratorBasicIteration) {
    gio::bam_reader reader(sam_path);

    std::vector<std::string> read_names;
    for (const auto& entry : reader) {
        read_names.push_back(entry.qname);
    }

    EXPECT_EQ(read_names.size(), 8);
    EXPECT_EQ(read_names[0], "read001");
}

TEST_F(BamReaderTest, IteratorManualIncrement) {
    gio::bam_reader reader(sam_path);

    auto it = reader.begin();
    auto end = reader.end();

    ASSERT_NE(it, end);
    EXPECT_EQ(it->qname, "read001");

    ++it;
    ASSERT_NE(it, end);
    EXPECT_EQ(it->qname, "read001");  // Second read001 (mate)

    ++it;
    ASSERT_NE(it, end);
    EXPECT_EQ(it->qname, "read002");
}

// ==========================================
// Reader State Tests
// ==========================================

TEST_F(BamReaderTest, HasNextFunctionality) {
    gio::bam_reader reader(sam_path);

    EXPECT_TRUE(reader.has_next());

    gio::sam_entry entry;
    int count = 0;
    while (reader.read_next(entry)) {
        count++;
    }

    EXPECT_EQ(count, 8);
    EXPECT_FALSE(reader.has_next());
}

TEST_F(BamReaderTest, LineCounter) {
    gio::bam_reader reader(sam_path);
    gio::sam_entry entry;

    EXPECT_EQ(reader.get_current_line(), 0);

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 1);

    reader.read_next(entry);
    EXPECT_EQ(reader.get_current_line(), 2);
}

// ==========================================
// Error Handling Tests
// ==========================================

TEST_F(BamReaderTest, FileNotFound) {
    fs::path nonexistent = test_data_dir / "nonexistent.sam";

    EXPECT_THROW({
        gio::bam_reader reader(nonexistent);
    }, std::runtime_error);
}

// ==========================================
// Move Semantics Tests
// ==========================================

TEST_F(BamReaderTest, MoveConstructor) {
    gio::bam_reader reader1(sam_path);
    gio::sam_entry entry;

    // Read one entry from reader1
    ASSERT_TRUE(reader1.read_next(entry));
    EXPECT_EQ(entry.qname, "read001");

    // Move to reader2
    gio::bam_reader reader2(std::move(reader1));

    // Continue reading from reader2
    ASSERT_TRUE(reader2.read_next(entry));
    EXPECT_EQ(entry.qname, "read001");  // Second read001 (mate)
}

TEST_F(BamReaderTest, MoveAssignment) {
    gio::bam_reader reader1(sam_path);
    gio::bam_reader reader2(sam_path);

    gio::sam_entry entry;

    // Read one entry from reader1
    ASSERT_TRUE(reader1.read_next(entry));
    EXPECT_EQ(entry.qname, "read001");

    // Move assign
    reader2 = std::move(reader1);

    // Continue reading from reader2 (now holds reader1's state)
    ASSERT_TRUE(reader2.read_next(entry));
    EXPECT_EQ(entry.qname, "read001");  // Second read001 (mate)
}

// ==========================================
// CIGAR Element Helper Tests
// ==========================================

TEST_F(BamReaderTest, CigarElementConsumesReference) {
    gio::cigar_element match(gio::cigar_op::MATCH, 10);
    gio::cigar_element ins(gio::cigar_op::INS, 5);
    gio::cigar_element del(gio::cigar_op::DEL, 3);
    gio::cigar_element soft_clip(gio::cigar_op::SOFT_CLIP, 10);
    gio::cigar_element ref_skip(gio::cigar_op::REF_SKIP, 100);

    EXPECT_TRUE(match.consumes_reference());
    EXPECT_FALSE(ins.consumes_reference());
    EXPECT_TRUE(del.consumes_reference());
    EXPECT_FALSE(soft_clip.consumes_reference());
    EXPECT_TRUE(ref_skip.consumes_reference());
}

TEST_F(BamReaderTest, CigarElementConsumesQuery) {
    gio::cigar_element match(gio::cigar_op::MATCH, 10);
    gio::cigar_element ins(gio::cigar_op::INS, 5);
    gio::cigar_element del(gio::cigar_op::DEL, 3);
    gio::cigar_element soft_clip(gio::cigar_op::SOFT_CLIP, 10);
    gio::cigar_element ref_skip(gio::cigar_op::REF_SKIP, 100);

    EXPECT_TRUE(match.consumes_query());
    EXPECT_TRUE(ins.consumes_query());
    EXPECT_FALSE(del.consumes_query());
    EXPECT_TRUE(soft_clip.consumes_query());
    EXPECT_FALSE(ref_skip.consumes_query());
}

TEST_F(BamReaderTest, CigarElementToChar) {
    EXPECT_EQ(gio::cigar_element(gio::cigar_op::MATCH, 1).to_char(), 'M');
    EXPECT_EQ(gio::cigar_element(gio::cigar_op::INS, 1).to_char(), 'I');
    EXPECT_EQ(gio::cigar_element(gio::cigar_op::DEL, 1).to_char(), 'D');
    EXPECT_EQ(gio::cigar_element(gio::cigar_op::REF_SKIP, 1).to_char(), 'N');
    EXPECT_EQ(gio::cigar_element(gio::cigar_op::SOFT_CLIP, 1).to_char(), 'S');
    EXPECT_EQ(gio::cigar_element(gio::cigar_op::HARD_CLIP, 1).to_char(), 'H');
    EXPECT_EQ(gio::cigar_element(gio::cigar_op::PAD, 1).to_char(), 'P');
    EXPECT_EQ(gio::cigar_element(gio::cigar_op::SEQ_MATCH, 1).to_char(), '=');
    EXPECT_EQ(gio::cigar_element(gio::cigar_op::SEQ_MISMATCH, 1).to_char(), 'X');
}

// ==========================================
// Alignment Flags Tests
// ==========================================

TEST_F(BamReaderTest, AlignmentFlagsHasFlag) {
    gio::alignment_flags flags(gio::sam_flags::PAIRED | gio::sam_flags::PROPER_PAIR);

    EXPECT_TRUE(flags.has_flag(gio::sam_flags::PAIRED));
    EXPECT_TRUE(flags.has_flag(gio::sam_flags::PROPER_PAIR));
    EXPECT_FALSE(flags.has_flag(gio::sam_flags::UNMAPPED));
    EXPECT_FALSE(flags.has_flag(gio::sam_flags::SECONDARY));
}

TEST_F(BamReaderTest, AlignmentFlagsValue) {
    uint16_t raw_flags = 99;  // 0x63 = PAIRED | PROPER_PAIR | MATE_REVERSE | READ1
    gio::alignment_flags flags(raw_flags);

    EXPECT_EQ(flags.value(), raw_flags);
    EXPECT_TRUE(flags.is_paired());
    EXPECT_TRUE(flags.is_proper_pair());
    EXPECT_TRUE(flags.is_mate_reverse());
    EXPECT_TRUE(flags.is_read1());
    EXPECT_FALSE(flags.is_unmapped());
}

// ==========================================
// BAM File Tests
// ==========================================

TEST_F(BamReaderTest, DetectBamFileType) {
    gio::filetype_detector detector;
    auto [detected_filetype, compression] = detector.detect_filetype(bam_path);

    EXPECT_EQ(detected_filetype, gio::filetype::BAM);
    // BAM files use BGZF compression which is detected as GZIP
    EXPECT_EQ(compression, gio::compression_type::GZIP);
}

TEST_F(BamReaderTest, ReadBamFile) {
    gio::bam_reader reader(bam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Same as SAM: 9 records, default options skip unmapped (read004)
    ASSERT_EQ(entries.size(), 8);
}

TEST_F(BamReaderTest, BamFileContentMatchesSam) {
    // Read all entries from SAM
    gio::bam_reader sam_reader(sam_path);
    std::vector<gio::sam_entry> sam_entries;
    for (const auto& entry : sam_reader) {
        sam_entries.push_back(entry);
    }

    // Read all entries from BAM
    gio::bam_reader bam_reader(bam_path);
    std::vector<gio::sam_entry> bam_entries;
    for (const auto& entry : bam_reader) {
        bam_entries.push_back(entry);
    }

    // Should have same number of entries
    ASSERT_EQ(sam_entries.size(), bam_entries.size());

    // Compare each entry
    for (size_t i = 0; i < sam_entries.size(); ++i) {
        EXPECT_EQ(sam_entries[i].qname, bam_entries[i].qname)
            << "Mismatch at index " << i;
        EXPECT_EQ(sam_entries[i].chrom, bam_entries[i].chrom)
            << "Mismatch at index " << i;
        EXPECT_EQ(sam_entries[i].interval.get_start(), bam_entries[i].interval.get_start())
            << "Mismatch at index " << i;
        EXPECT_EQ(sam_entries[i].interval.get_end(), bam_entries[i].interval.get_end())
            << "Mismatch at index " << i;
        EXPECT_EQ(sam_entries[i].flags.value(), bam_entries[i].flags.value())
            << "Mismatch at index " << i;
        EXPECT_EQ(sam_entries[i].mapq, bam_entries[i].mapq)
            << "Mismatch at index " << i;
        EXPECT_EQ(sam_entries[i].sequence, bam_entries[i].sequence)
            << "Mismatch at index " << i;
        EXPECT_EQ(sam_entries[i].quality, bam_entries[i].quality)
            << "Mismatch at index " << i;
        EXPECT_EQ(sam_entries[i].cigar.size(), bam_entries[i].cigar.size())
            << "Mismatch at index " << i;
    }
}

TEST_F(BamReaderTest, BamFileVerifyFirstAlignment) {
    gio::bam_reader reader(bam_path);
    gio::sam_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    EXPECT_EQ(entry.qname, "read001");
    EXPECT_EQ(entry.chrom, "chr1");
    EXPECT_EQ(entry.interval.get_start(), 999);  // 0-based
    EXPECT_EQ(entry.interval.get_end(), 1049);   // 50M CIGAR
    EXPECT_EQ(entry.mapq, 60);
}

TEST_F(BamReaderTest, BamFileIncludeAll) {
    gio::bam_reader reader(bam_path, gio::bam_reader_options::include_all());

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // All 9 records including unmapped
    ASSERT_EQ(entries.size(), 9);
}

TEST_F(BamReaderTest, BamFilePrimaryOnly) {
    gio::bam_reader reader(bam_path, gio::bam_reader_options::primary_only());

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // All entries should be primary
    for (const auto& entry : entries) {
        EXPECT_TRUE(entry.is_primary()) << "Read " << entry.qname << " is not primary";
    }
}

TEST_F(BamReaderTest, BamFileGetHeader) {
    gio::bam_reader reader(bam_path);

    const std::string& header = reader.get_header();
    EXPECT_FALSE(header.empty());
    EXPECT_NE(header.find("@HD"), std::string::npos);
    EXPECT_NE(header.find("@SQ"), std::string::npos);
}

TEST_F(BamReaderTest, BamFileGetReferenceNames) {
    gio::bam_reader reader(bam_path);

    const auto& refs = reader.get_reference_names();
    ASSERT_EQ(refs.size(), 3);
    EXPECT_EQ(refs[0], "chr1");
    EXPECT_EQ(refs[1], "chr2");
    EXPECT_EQ(refs[2], "chrX");
}

TEST_F(BamReaderTest, BamFileCigarParsing) {
    gio::bam_reader reader(bam_path);

    std::vector<gio::sam_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    // Find read002 with 30M10I10M CIGAR
    auto it = std::find_if(entries.begin(), entries.end(),
        [](const gio::sam_entry& e) { return e.qname == "read002"; });

    ASSERT_NE(it, entries.end());
    ASSERT_EQ(it->cigar.size(), 3);
    EXPECT_EQ(it->cigar_string_repr(), "30M10I10M");
}

TEST_F(BamReaderTest, BamFileTagParsing) {
    gio::bam_reader reader(bam_path);
    gio::sam_entry entry;

    ASSERT_TRUE(reader.read_next(entry));

    // Check NH tag
    auto nh_it = entry.tags.find("NH");
    ASSERT_NE(nh_it, entry.tags.end());
    EXPECT_EQ(std::get<int64_t>(nh_it->second), 1);

    // Check RG tag
    auto rg_it = entry.tags.find("RG");
    ASSERT_NE(rg_it, entry.tags.end());
    EXPECT_EQ(std::get<std::string>(rg_it->second), "sample1");
}

TEST_F(BamReaderTest, BamFileIterator) {
    gio::bam_reader reader(bam_path);

    auto it = reader.begin();
    auto end = reader.end();

    ASSERT_NE(it, end);
    EXPECT_EQ(it->qname, "read001");

    ++it;
    ASSERT_NE(it, end);
    EXPECT_EQ(it->qname, "read001");  // Second read001 (mate)

    ++it;
    ASSERT_NE(it, end);
    EXPECT_EQ(it->qname, "read002");
}
