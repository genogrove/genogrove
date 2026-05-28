/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <array>
#include <cstdio>
#include <filesystem>
#include <fstream>
#include <string>
#ifndef _WIN32
#include <sys/wait.h>
#endif

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/bed_reader.hpp>
#include <genogrove/io/gff_reader.hpp>
#include <genogrove/io/gg_format.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace fs = std::filesystem;
namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

// GENOGROVE_CLI_PATH is passed as a compile definition from CMake
#ifndef GENOGROVE_CLI_PATH
#error "GENOGROVE_CLI_PATH must be defined"
#endif

// ==========================================
// Helper: run a command and capture stdout + exit code
//
// Wrapped in an anonymous namespace: the CLI test binary also compiles
// intersect-e2e-test.cpp, which declares a `run_command` of its own — internal
// linkage here keeps the two from colliding at link time.
// ==========================================

namespace {

struct CmdResult {
    std::string output;
    int exit_code;
};

CmdResult run_command(const std::string& cmd) {
    CmdResult result;
    // Redirect stderr to stdout so we capture everything.
    std::string full_cmd = cmd + " 2>&1";
    std::array<char, 4096> buffer;

    // popen/pclose are POSIX; this e2e test targets the Linux/macOS CI matrix.
    FILE* pipe = popen(full_cmd.c_str(), "r");
    if(!pipe) {
        result.exit_code = -1;
        return result;
    }
    while(fgets(buffer.data(), buffer.size(), pipe) != nullptr) {
        result.output += buffer.data();
    }
    int status = pclose(pipe);
#ifdef _WIN32
    result.exit_code = status;
#else
    result.exit_code = WIFEXITED(status) ? WEXITSTATUS(status) : -1;
#endif
    return result;
}

} // namespace

// ==========================================
// Test Fixture
// ==========================================

class CLIIndexE2ETest : public ::testing::Test {
protected:
    std::string cli_path;
    fs::path test_data_dir;
    fs::path target_path;
    fs::path gff_target_path;
    fs::path links_target_path;
    fs::path links_path;
    fs::path tmp_output;
    fs::path tmp_gff_output;
    fs::path tmp_links_output;

    void SetUp() override {
        cli_path = GENOGROVE_CLI_PATH;
        test_data_dir = fs::current_path() / "cli" / "data";
        target_path = test_data_dir / "target.bed";
        gff_target_path = test_data_dir / "target.gff";
        links_target_path = test_data_dir / "target_links.bed";
        links_path = test_data_dir / "links.tsv";
        tmp_output = fs::temp_directory_path() / "genogrove_idx_test.gg";
        tmp_gff_output = fs::temp_directory_path() / "genogrove_idx_test_gff.gg";
        tmp_links_output = fs::temp_directory_path() / "genogrove_idx_test_links.gg";

        ASSERT_TRUE(fs::exists(cli_path)) << "CLI binary not found: " << cli_path;
        ASSERT_TRUE(fs::exists(target_path)) << "Test data not found: " << target_path;
        ASSERT_TRUE(fs::exists(gff_target_path)) << "GFF test data not found: " << gff_target_path;
        ASSERT_TRUE(fs::exists(links_target_path)) << "Links BED test data not found: " << links_target_path;
        ASSERT_TRUE(fs::exists(links_path)) << "Links TSV test data not found: " << links_path;
    }

    void TearDown() override {
        if(fs::exists(tmp_output)) {
            fs::remove(tmp_output);
        }
        if(fs::exists(tmp_gff_output)) {
            fs::remove(tmp_gff_output);
        }
        if(fs::exists(tmp_links_output)) {
            fs::remove(tmp_links_output);
        }
    }

    std::string cli(const std::string& args) {
        return "\"" + cli_path + "\" " + args;
    }
};

// ==========================================
// idx produces a deserializable .gg index
// ==========================================

TEST_F(CLIIndexE2ETest, IndexProducesDeserializableGrove) {
    auto result = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    ASSERT_TRUE(fs::exists(tmp_output)) << "Index file was not created";
    EXPECT_GT(fs::file_size(tmp_output), 0u);

    // The .gg must deserialize back into a grove holding target.bed's 3 records.
    std::ifstream in(tmp_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    const auto header = gio::gg_header::read(in);
    EXPECT_EQ(header.payload_type, gio::gg_payload_type::BED);
    auto grove = ggs::grove<gdt::interval, gio::bed_entry>::deserialize(in);
    EXPECT_EQ(grove.indexed_vertex_count(), 3u);

    // chr1 100-500 is stored as the closed interval [100, 499]; a query at 150
    // must return it with the original BED payload intact.
    auto hits = grove.intersect(gdt::interval(150, 150), "chr1");
    ASSERT_EQ(hits.get_keys().size(), 1u);
    EXPECT_EQ(hits.get_keys()[0]->get_data().chrom, "chr1");
    EXPECT_EQ(hits.get_keys()[0]->get_data().start, 100u);
    EXPECT_EQ(hits.get_keys()[0]->get_data().end, 500u);
}

// ==========================================
// idx without -o defaults the output to <input>.gg
// ==========================================

TEST_F(CLIIndexE2ETest, IndexDefaultsOutputPathToInputPlusGg) {
    fs::path tmp_bed = fs::temp_directory_path() / "genogrove_idx_default.bed";
    fs::copy_file(target_path, tmp_bed, fs::copy_options::overwrite_existing);
    fs::path expected_gg = tmp_bed.string() + ".gg";
    fs::remove(expected_gg);

    auto result = run_command(cli("idx \"" + tmp_bed.string() + "\""));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_TRUE(fs::exists(expected_gg)) << "Expected default index at " << expected_gg;

    fs::remove(tmp_bed);
    fs::remove(expected_gg);
}

// ==========================================
// idx -s (sorted input) yields an equivalent index
// ==========================================

TEST_F(CLIIndexE2ETest, IndexSortedFlagProducesSameRecordCount) {
    // target.bed is already coordinate-sorted within each chromosome, so the
    // sorted-append path must produce the same record set.
    auto result = run_command(cli(
        "idx \"" + target_path.string() + "\" -s -o \"" + tmp_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    ASSERT_TRUE(fs::exists(tmp_output));

    std::ifstream in(tmp_output, std::ios::binary);
    (void)gio::gg_header::read(in);
    auto grove = ggs::grove<gdt::interval, gio::bed_entry>::deserialize(in);
    EXPECT_EQ(grove.indexed_vertex_count(), 3u);
}

// ==========================================
// idx writes the .gg header magic so produced files are identifiable
// ==========================================

TEST_F(CLIIndexE2ETest, IndexFileStartsWithGROVMagic) {
    auto result = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_output.string() + "\""
    ));
    ASSERT_EQ(result.exit_code, 0) << result.output;
    ASSERT_TRUE(fs::exists(tmp_output));

    std::ifstream in(tmp_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    std::array<char, 4> magic{};
    in.read(magic.data(), magic.size());
    EXPECT_EQ(magic[0], 'G');
    EXPECT_EQ(magic[1], 'R');
    EXPECT_EQ(magic[2], 'O');
    EXPECT_EQ(magic[3], 'V');
}

// ==========================================
// idx accepts a GFF input and stamps gg_payload_type::GFF in the header
// ==========================================

TEST_F(CLIIndexE2ETest, IndexProducesDeserializableGffGrove) {
    auto result = run_command(cli(
        "idx \"" + gff_target_path.string() + "\" -o \"" + tmp_gff_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    ASSERT_TRUE(fs::exists(tmp_gff_output));

    std::ifstream in(tmp_gff_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    const auto header = gio::gg_header::read(in);
    EXPECT_EQ(header.payload_type, gio::gg_payload_type::GFF);

    auto grove = ggs::grove<gdt::interval, gio::gff_entry>::deserialize(in);
    EXPECT_EQ(grove.indexed_vertex_count(), 3u);

    // chr1:101-500 (gene1) is stored as interval [101, 500]; a query at 200
    // must return it with the original GFF payload intact.
    auto hits = grove.intersect(gdt::interval(200, 200), "chr1");
    ASSERT_EQ(hits.get_keys().size(), 1u);
    EXPECT_EQ(hits.get_keys()[0]->get_data().seqid, "chr1");
    EXPECT_EQ(hits.get_keys()[0]->get_data().type, "gene");
    EXPECT_EQ(hits.get_keys()[0]->get_data().attributes.at("ID"), "gene1");
    EXPECT_EQ(hits.get_keys()[0]->get_data().format, gio::gff_format::GFF3);
}

// ==========================================
// idx rejects formats other than BED / GFF / GTF
// ==========================================

TEST_F(CLIIndexE2ETest, IndexRejectsUnsupportedFormat) {
    fs::path fake_path = fs::temp_directory_path() / "genogrove_idx_unsupported.txt";
    {
        std::ofstream out(fake_path);
        out << "hello world\n";
    }

    auto result = run_command(cli(
        "idx \"" + fake_path.string() + "\" -o \"" + tmp_output.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("unsupported input format"), std::string::npos);

    fs::remove(fake_path);
}

// ==========================================
// idx --links attaches graph-overlay edges from a name TSV
// ==========================================

TEST_F(CLIIndexE2ETest, IndexWithLinksAddsGraphEdges) {
    auto result = run_command(cli(
        "idx \"" + links_target_path.string() + "\" --links \"" + links_path.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    ASSERT_TRUE(fs::exists(tmp_links_output));

    std::ifstream in(tmp_links_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    (void)gio::gg_header::read(in);
    auto grove = ggs::grove<gdt::interval, gio::bed_entry>::deserialize(in);

    // Resolve the three named records by querying their intervals.
    // geneA: chr1 100-500 -> [100,499]; geneB: chr1 600-900 -> [600,899];
    // geneC: chr2 200-400 -> [200,399].
    auto a_hits = grove.intersect(gdt::interval(300, 300), "chr1");
    auto b_hits = grove.intersect(gdt::interval(700, 700), "chr1");
    auto c_hits = grove.intersect(gdt::interval(300, 300), "chr2");
    ASSERT_EQ(a_hits.get_keys().size(), 1u);
    ASSERT_EQ(b_hits.get_keys().size(), 1u);
    ASSERT_EQ(c_hits.get_keys().size(), 1u);
    auto* geneA = a_hits.get_keys()[0];
    auto* geneB = b_hits.get_keys()[0];
    auto* geneC = c_hits.get_keys()[0];

    // links.tsv: geneA -> geneB, geneB -> geneC (directed).
    EXPECT_TRUE(grove.has_edge(geneA, geneB));
    EXPECT_TRUE(grove.has_edge(geneB, geneC));
    // No edge geneA -> geneC, and edges are directed so the reverses are absent.
    EXPECT_FALSE(grove.has_edge(geneA, geneC));
    EXPECT_FALSE(grove.has_edge(geneB, geneA));
    EXPECT_FALSE(grove.has_edge(geneC, geneB));
}

TEST_F(CLIIndexE2ETest, IndexWithLinksUnresolvedNameFails) {
    fs::path bad_links = fs::temp_directory_path() / "genogrove_idx_bad_links.tsv";
    {
        std::ofstream out(bad_links);
        out << "geneA\tgeneMISSING\n";
    }

    auto result = run_command(cli(
        "idx \"" + links_target_path.string() + "\" --links \"" + bad_links.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("geneMISSING"), std::string::npos) << result.output;

    fs::remove(bad_links);
}

TEST_F(CLIIndexE2ETest, IndexWithLinksDuplicateBedNameFails) {
    // Two records sharing column-4 name 'dup' make the name ambiguous.
    fs::path dup_bed = fs::temp_directory_path() / "genogrove_idx_dup_names.bed";
    {
        std::ofstream out(dup_bed);
        out << "chr1\t100\t200\tdup\t0\t+\n"
            << "chr1\t300\t400\tdup\t0\t-\n";
    }
    fs::path some_links = fs::temp_directory_path() / "genogrove_idx_dup_links.tsv";
    {
        std::ofstream out(some_links);
        out << "dup\tdup\n";
    }

    auto result = run_command(cli(
        "idx \"" + dup_bed.string() + "\" --links \"" + some_links.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("duplicate BED name"), std::string::npos) << result.output;

    fs::remove(dup_bed);
    fs::remove(some_links);
}

TEST_F(CLIIndexE2ETest, IndexWithLinksDeduplicatesRepeatedEdges) {
    // graph_overlay::add_edge appends unconditionally, so a duplicated TSV row
    // would otherwise produce a parallel edge. apply_to_grove collapses
    // repeats — the same (source, target) pair must yield out_degree 1.
    fs::path dup_edge_links = fs::temp_directory_path() / "genogrove_idx_dup_edge_links.tsv";
    {
        std::ofstream out(dup_edge_links);
        out << "geneA\tgeneB\n"
            << "geneA\tgeneB\n";  // same edge twice
    }

    auto result = run_command(cli(
        "idx \"" + links_target_path.string() + "\" --links \"" + dup_edge_links.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;

    std::ifstream in(tmp_links_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    (void)gio::gg_header::read(in);
    auto grove = ggs::grove<gdt::interval, gio::bed_entry>::deserialize(in);

    auto a_hits = grove.intersect(gdt::interval(300, 300), "chr1");
    ASSERT_EQ(a_hits.get_keys().size(), 1u);
    auto* geneA = a_hits.get_keys()[0];
    EXPECT_EQ(grove.out_degree(geneA), 1u);  // not 2

    fs::remove(dup_edge_links);
}

TEST_F(CLIIndexE2ETest, IndexLinksRejectsGffInput) {
    auto result = run_command(cli(
        "idx \"" + gff_target_path.string() + "\" --links \"" + links_path.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("--links is currently only supported for BED"),
              std::string::npos) << result.output;
}

// ==========================================
// Validation error: missing input file
// ==========================================

TEST_F(CLIIndexE2ETest, IndexMissingInputFails) {
    auto result = run_command(cli("idx /nonexistent/path.bed"));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("does not exist"), std::string::npos);
}