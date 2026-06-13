/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <filesystem>
#include <fstream>
#include <vector>

// genogrove
#include <genogrove/io/vcf_reader.hpp>
#include <genogrove/io/filetype_detector.hpp>

namespace fs = std::filesystem;
namespace gio = genogrove::io;

// ==========================================
// Test Fixture for VCF file tests
// ==========================================

class VcfReaderTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path vcf_path;
    fs::path rich_path;
    fs::path gz_path;
    fs::path edge_path;

    void SetUp() override {
        test_data_dir = fs::current_path() / "io" / "data";
        vcf_path = test_data_dir / "test.vcf";
        rich_path = test_data_dir / "test_rich.vcf";
        gz_path = test_data_dir / "test.vcf.gz";
        edge_path = test_data_dir / "test_edge.vcf";
    }
};

// ==========================================
// File Type Detection
// ==========================================

TEST_F(VcfReaderTest, DetectVcfFileType) {
    gio::filetype_detector detector;
    auto [detected_filetype, compression] = detector.detect_filetype(vcf_path);

    EXPECT_EQ(detected_filetype, gio::filetype::VCF);
    EXPECT_EQ(compression, gio::compression_type::NONE);
}

// ==========================================
// Header metadata
// ==========================================

TEST_F(VcfReaderTest, HeaderSamplesAndContigs) {
    gio::vcf_reader reader(vcf_path);

    ASSERT_EQ(reader.get_sample_names().size(), 2u);
    EXPECT_EQ(reader.get_sample_names()[0], "sample1");
    EXPECT_EQ(reader.get_sample_names()[1], "sample2");

    const auto& contigs = reader.get_contigs();
    ASSERT_EQ(contigs.size(), 2u);
    EXPECT_EQ(contigs[0], "chr1");
    EXPECT_EQ(contigs[1], "chr2");

    EXPECT_FALSE(reader.get_header().empty());
}

// ==========================================
// Basic reading / coordinates
// ==========================================

TEST_F(VcfReaderTest, ReadAllRecords) {
    gio::vcf_reader reader(vcf_path);

    std::vector<gio::vcf_entry> entries;
    for (const auto& entry : reader) {
        entries.push_back(entry);
    }

    EXPECT_TRUE(reader.get_error_message().empty());
    ASSERT_EQ(entries.size(), 3u);

    // First record: chr1:100 A>G (VCF POS is 1-based; start is 0-based)
    const auto& r0 = entries[0];
    EXPECT_EQ(r0.chrom, "chr1");
    EXPECT_EQ(r0.start, 99u);          // POS 100 -> 0-based 99
    EXPECT_EQ(r0.end, 100u);           // start + len(REF "A")
    EXPECT_EQ(r0.id, "rs1");
    EXPECT_EQ(r0.ref, "A");
    ASSERT_EQ(r0.alt.size(), 1u);
    EXPECT_EQ(r0.alt[0], "G");
    EXPECT_FALSE(r0.qual_missing);
    EXPECT_FLOAT_EQ(r0.qual, 50.5f);
    EXPECT_TRUE(r0.passed_filter());
    EXPECT_TRUE(r0.is_snp());
}

TEST_F(VcfReaderTest, MissingIdAndFilter) {
    gio::vcf_reader reader(vcf_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());

    // Second record has ID "." and FILTER q10.
    const auto& r1 = entries[1];
    EXPECT_TRUE(r1.id.empty());
    ASSERT_EQ(r1.filter.size(), 1u);
    EXPECT_EQ(r1.filter[0], "q10");
    EXPECT_FALSE(r1.passed_filter());

    // Third record is a deletion AT>A.
    const auto& r2 = entries[2];
    EXPECT_EQ(r2.ref, "AT");
    EXPECT_EQ(r2.end, r2.start + 2u);  // REF length 2
    EXPECT_TRUE(r2.is_indel());
    EXPECT_FALSE(r2.is_snp());
}

// ==========================================
// INFO parsing
// ==========================================

TEST_F(VcfReaderTest, ParseInfoFields) {
    gio::vcf_reader reader(vcf_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());

    const auto& info = entries[0].info;

    ASSERT_TRUE(info.count("DP"));
    const auto& dp = std::get<std::vector<int32_t>>(info.at("DP"));
    ASSERT_EQ(dp.size(), 1u);
    EXPECT_EQ(dp[0], 30);

    ASSERT_TRUE(info.count("AF"));
    const auto& af = std::get<std::vector<float>>(info.at("AF"));
    ASSERT_EQ(af.size(), 1u);
    EXPECT_FLOAT_EQ(af[0], 0.25f);

    // Flag is present on record 0 only.
    ASSERT_TRUE(info.count("DB"));
    EXPECT_TRUE(std::get<bool>(info.at("DB")));
    EXPECT_FALSE(entries[1].info.count("DB"));
}

// ==========================================
// Genotypes / FORMAT
// ==========================================

TEST_F(VcfReaderTest, ParseGenotypes) {
    gio::vcf_reader reader(vcf_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());

    const auto& r0 = entries[0];
    ASSERT_EQ(r0.samples.size(), 2u);

    // sample1: 0/1 (unphased het)
    EXPECT_TRUE(r0.samples[0].has_gt);
    EXPECT_FALSE(r0.samples[0].phased);
    EXPECT_EQ(r0.samples[0].gt_string(), "0/1");
    EXPECT_FALSE(r0.samples[0].is_hom_ref());

    // sample2: 1|1 (phased hom alt)
    EXPECT_TRUE(r0.samples[1].phased);
    EXPECT_EQ(r0.samples[1].gt_string(), "1|1");

    // FORMAT DP / GQ are stored per sample.
    const auto& dp = std::get<std::vector<int32_t>>(r0.samples[0].fields.at("DP"));
    ASSERT_EQ(dp.size(), 1u);
    EXPECT_EQ(dp[0], 15);
}

TEST_F(VcfReaderTest, MissingGenotype) {
    gio::vcf_reader reader(vcf_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());

    // record 1, sample2 is ./.
    const auto& sg = entries[1].samples[1];
    EXPECT_EQ(sg.gt_string(), "./.");
    EXPECT_FALSE(sg.is_hom_ref());
}

TEST_F(VcfReaderTest, HomRefDetection) {
    gio::vcf_reader reader(vcf_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());

    // record 1, sample1 is 0/0
    EXPECT_TRUE(entries[1].samples[0].is_hom_ref());
}

// ==========================================
// Options
// ==========================================

TEST_F(VcfReaderTest, SitesOnlySkipsSamples) {
    gio::vcf_reader reader(vcf_path, gio::vcf_reader_options::sites_only());
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());

    ASSERT_EQ(entries.size(), 3u);
    for (const auto& e : entries) {
        EXPECT_TRUE(e.samples.empty());
        EXPECT_TRUE(e.format.empty());
    }
}

TEST_F(VcfReaderTest, SkipFilteredDropsNonPass) {
    gio::vcf_reader reader(vcf_path, {.parse_info = true,
                                      .parse_samples = true,
                                      .skip_filtered = true});
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());

    // Drops the q10 record; the two PASS records remain.
    ASSERT_EQ(entries.size(), 2u);
    EXPECT_EQ(entries[0].start, 99u);
    EXPECT_EQ(entries[1].chrom, "chr2");
}

// ==========================================
// Rich record: multi-allelic, missing QUAL,
// String INFO, multi-valued INFO/FORMAT,
// Float/String FORMAT fields
// ==========================================

TEST_F(VcfReaderTest, MultiAllelicAndMissingQual) {
    gio::vcf_reader reader(rich_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());

    ASSERT_EQ(entries.size(), 1u);
    const auto& e = entries[0];

    EXPECT_EQ(e.start, 49u);            // POS 50 -> 0-based
    EXPECT_TRUE(e.qual_missing);        // QUAL is "."
    ASSERT_EQ(e.alt.size(), 2u);        // multi-allelic A>G,T
    EXPECT_EQ(e.alt[0], "G");
    EXPECT_EQ(e.alt[1], "T");
    EXPECT_FALSE(e.is_snp());           // is_snp requires a single ALT
}

TEST_F(VcfReaderTest, InfoStringAndMultiValuedFloat) {
    gio::vcf_reader reader(rich_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());
    const auto& info = entries[0].info;

    // String INFO field
    ASSERT_TRUE(info.count("GENE"));
    EXPECT_EQ(std::get<std::string>(info.at("GENE")), "BRCA1");

    // Multi-valued (Number=A) Float INFO field -> one value per ALT
    ASSERT_TRUE(info.count("AF"));
    const auto& af = std::get<std::vector<float>>(info.at("AF"));
    ASSERT_EQ(af.size(), 2u);
    EXPECT_FLOAT_EQ(af[0], 0.3f);
    EXPECT_FLOAT_EQ(af[1], 0.1f);
}

TEST_F(VcfReaderTest, FormatFloatStringAndMultiValuedInt) {
    gio::vcf_reader reader(rich_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());
    ASSERT_EQ(entries[0].samples.size(), 1u);
    const auto& s = entries[0].samples[0];

    EXPECT_EQ(s.gt_string(), "1/2");

    // Number=R Integer FORMAT field -> REF + ALT depths
    const auto& ad = std::get<std::vector<int32_t>>(s.fields.at("AD"));
    ASSERT_EQ(ad.size(), 3u);
    EXPECT_EQ(ad[0], 5);
    EXPECT_EQ(ad[1], 8);
    EXPECT_EQ(ad[2], 7);

    // Float FORMAT field
    const auto& vaf = std::get<std::vector<float>>(s.fields.at("VAF"));
    ASSERT_EQ(vaf.size(), 1u);
    EXPECT_FLOAT_EQ(vaf[0], 0.45f);

    // String FORMAT field
    EXPECT_EQ(std::get<std::string>(s.fields.at("BC")), "foo");
}

// ==========================================
// htslib sentinel padding / symbolic alleles
// ==========================================

TEST_F(VcfReaderTest, RaggedFormatTrimsVectorEndPadding) {
    // The haploid "hap" sample carries one AD value; htslib right-pads it to
    // the diploid sample's width with bcf_int32_vector_end. That sentinel must
    // not surface as a real value.
    gio::vcf_reader reader(edge_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());
    ASSERT_FALSE(entries.empty());

    const auto& hap = std::get<std::vector<int32_t>>(entries[0].samples[0].fields.at("AD"));
    ASSERT_EQ(hap.size(), 1u);          // padding trimmed, not [7, -2147483647]
    EXPECT_EQ(hap[0], 7);

    const auto& dip = std::get<std::vector<int32_t>>(entries[0].samples[1].fields.at("AD"));
    ASSERT_EQ(dip.size(), 2u);
    EXPECT_EQ(dip[0], 3);
    EXPECT_EQ(dip[1], 4);
}

TEST_F(VcfReaderTest, SymbolicAlleleNotClassifiedAsIndel) {
    gio::vcf_reader reader(edge_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());
    ASSERT_EQ(entries.size(), 2u);

    const auto& e = entries[1];
    ASSERT_EQ(e.alt.size(), 1u);
    EXPECT_EQ(e.alt[0], "<NON_REF>");   // symbolic allele kept verbatim
    EXPECT_FALSE(e.is_indel());         // not a length-comparable indel
    EXPECT_FALSE(e.is_snp());
    EXPECT_TRUE(gio::vcf_entry::is_symbolic_allele("<NON_REF>"));
    EXPECT_TRUE(gio::vcf_entry::is_symbolic_allele("*"));
    EXPECT_FALSE(gio::vcf_entry::is_symbolic_allele("ACGT"));
}

TEST_F(VcfReaderTest, MonomorphicAltYieldsEmptyAlt) {
    // ALT "." is collapsed by htslib to REF only -> no ALT alleles.
    fs::path mono = test_data_dir / "test_monomorphic.vcf";
    {
        std::ofstream out(mono);
        out << "##fileformat=VCFv4.2\n";
        out << "##contig=<ID=chr1,length=1000000>\n";
        out << "#CHROM\tPOS\tID\tREF\tALT\tQUAL\tFILTER\tINFO\n";
        out << "chr1\t5\t.\tA\t.\t.\t.\t.\n";
    }

    gio::vcf_reader reader(mono);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());
    ASSERT_EQ(entries.size(), 1u);
    EXPECT_TRUE(entries[0].alt.empty());
    EXPECT_FALSE(entries[0].is_snp());
    EXPECT_FALSE(entries[0].is_indel());

    fs::remove(mono);
}

// ==========================================
// Compression (bgzip)
// ==========================================

TEST_F(VcfReaderTest, DetectGzippedVcfFileType) {
    gio::filetype_detector detector;
    auto [detected_filetype, compression] = detector.detect_filetype(gz_path);

    EXPECT_EQ(detected_filetype, gio::filetype::VCF);
    EXPECT_EQ(compression, gio::compression_type::GZIP);
}

TEST_F(VcfReaderTest, ReadGzippedVcf) {
    gio::vcf_reader reader(gz_path);
    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());

    EXPECT_TRUE(reader.get_error_message().empty());
    ASSERT_EQ(entries.size(), 3u);
    EXPECT_EQ(entries[0].chrom, "chr1");
    EXPECT_EQ(entries[0].start, 99u);
    EXPECT_EQ(entries[2].chrom, "chr2");
}

// ==========================================
// Edge cases and error handling
// ==========================================

TEST_F(VcfReaderTest, FileNotFound) {
    fs::path nonexistent = test_data_dir / "nonexistent.vcf";
    EXPECT_THROW({ gio::vcf_reader reader(nonexistent); }, std::runtime_error);
}

TEST_F(VcfReaderTest, EmptyVcfHeaderOnly) {
    // A header-only VCF (no records) must construct and iterate to zero entries.
    fs::path empty_vcf = test_data_dir / "test_empty_records.vcf";
    {
        std::ofstream out(empty_vcf);
        out << "##fileformat=VCFv4.2\n";
        out << "##contig=<ID=chr1,length=1000000>\n";
        out << "#CHROM\tPOS\tID\tREF\tALT\tQUAL\tFILTER\tINFO\n";
    }

    gio::vcf_reader reader(empty_vcf);
    gio::vcf_entry entry;
    EXPECT_FALSE(reader.read_next(entry));
    EXPECT_FALSE(reader.has_next());

    std::vector<gio::vcf_entry> entries(reader.begin(), reader.end());
    EXPECT_TRUE(entries.empty());
    EXPECT_TRUE(reader.get_error_message().empty());

    fs::remove(empty_vcf);
}

TEST_F(VcfReaderTest, LineCounter) {
    gio::vcf_reader reader(vcf_path);
    EXPECT_EQ(reader.get_current_line(), 0u);  // before first read

    gio::vcf_entry entry;
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(reader.get_current_line(), 1u);
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_EQ(reader.get_current_line(), 2u);
}

TEST_F(VcfReaderTest, HasNextFunctionality) {
    gio::vcf_reader reader(vcf_path);
    EXPECT_TRUE(reader.has_next());

    gio::vcf_entry entry;
    while (reader.read_next(entry)) {}
    EXPECT_FALSE(reader.has_next());
}

TEST_F(VcfReaderTest, IteratorManualIncrement) {
    gio::vcf_reader reader(vcf_path);
    auto it = reader.begin();
    ASSERT_NE(it, reader.end());
    EXPECT_EQ(it->chrom, "chr1");

    ++it;
    ASSERT_NE(it, reader.end());
    EXPECT_EQ(it->start, 199u);

    ++it;
    ASSERT_NE(it, reader.end());
    EXPECT_EQ(it->chrom, "chr2");

    ++it;
    EXPECT_EQ(it, reader.end());
}

TEST_F(VcfReaderTest, ErrorMessageEmptyAfterSuccessfulRead) {
    gio::vcf_reader reader(vcf_path);
    gio::vcf_entry entry;
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_TRUE(reader.get_error_message().empty());
}

TEST_F(VcfReaderTest, GetHeaderContent) {
    gio::vcf_reader reader(vcf_path);
    const std::string& header = reader.get_header();
    EXPECT_NE(header.find("##fileformat=VCF"), std::string::npos);
    EXPECT_NE(header.find("#CHROM"), std::string::npos);
}

TEST_F(VcfReaderTest, MoveConstructor) {
    gio::vcf_reader reader(vcf_path);
    gio::vcf_entry entry;
    ASSERT_TRUE(reader.read_next(entry));  // consume one record

    gio::vcf_reader moved(std::move(reader));
    EXPECT_EQ(moved.get_sample_names().size(), 2u);

    // The moved-to reader continues where the source left off.
    ASSERT_TRUE(moved.read_next(entry));
    EXPECT_EQ(entry.start, 199u);
}

TEST_F(VcfReaderTest, MoveAssignment) {
    gio::vcf_reader reader(vcf_path);
    gio::vcf_reader target(rich_path);
    target = std::move(reader);

    EXPECT_EQ(target.get_sample_names().size(), 2u);
    std::vector<gio::vcf_entry> entries(target.begin(), target.end());
    EXPECT_EQ(entries.size(), 3u);
}