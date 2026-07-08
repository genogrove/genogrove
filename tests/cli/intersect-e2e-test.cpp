/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <array>
#include <cstdio>
#include <cstdlib>
#include <filesystem>
#include <fstream>
#include <string>
#ifndef _WIN32
#include <sys/wait.h>
#endif

namespace fs = std::filesystem;

// GENOGROVE_CLI_PATH is passed as a compile definition from CMake
#ifndef GENOGROVE_CLI_PATH
#error "GENOGROVE_CLI_PATH must be defined"
#endif

// ==========================================
// Helper: run a command and capture stdout + exit code
// ==========================================

struct CmdResult {
    std::string output;
    int exit_code;
};

CmdResult run_command(const std::string& cmd) {
    CmdResult result;
    // Redirect stderr to stdout so we capture everything
    std::string full_cmd = cmd + " 2>&1";
    std::array<char, 4096> buffer;
    result.output.clear();

    // popen/pclose are POSIX, not ISO C++. This e2e test targets the
    // Linux/macOS CI matrix only; an MSVC build would need _popen/_pclose
    // (and the WIFEXITED decoding below is already guarded for _WIN32).
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

// ==========================================
// Test Fixture
// ==========================================

class CLIIntersectE2ETest : public ::testing::Test {
protected:
    std::string cli_path;
    fs::path test_data_dir;
    fs::path target_path;
    fs::path query_path;
    fs::path gff_target_path;
    fs::path gff_query_path;
    fs::path tmp_output;
    fs::path tmp_index;
    fs::path tmp_gff_index;

    void SetUp() override {
        cli_path = GENOGROVE_CLI_PATH;
        test_data_dir = fs::current_path() / "cli" / "data";
        target_path = test_data_dir / "target.bed";
        query_path = test_data_dir / "query.bed";
        gff_target_path = test_data_dir / "target.gff";
        gff_query_path = test_data_dir / "query.gff";
        tmp_output = fs::temp_directory_path() / "genogrove_e2e_test_output.bed";
        tmp_index = fs::temp_directory_path() / "genogrove_e2e_test_index.gg";
        tmp_gff_index = fs::temp_directory_path() / "genogrove_e2e_test_index_gff.gg";

        ASSERT_TRUE(fs::exists(cli_path)) << "CLI binary not found: " << cli_path;
        ASSERT_TRUE(fs::exists(target_path)) << "Target test data not found: " << target_path;
        ASSERT_TRUE(fs::exists(query_path)) << "Query test data not found: " << query_path;
        ASSERT_TRUE(fs::exists(gff_target_path)) << "GFF target test data not found: " << gff_target_path;
        ASSERT_TRUE(fs::exists(gff_query_path)) << "GFF query test data not found: " << gff_query_path;
    }

    void TearDown() override {
        if(fs::exists(tmp_output)) {
            fs::remove(tmp_output);
        }
        if(fs::exists(tmp_index)) {
            fs::remove(tmp_index);
        }
        if(fs::exists(tmp_gff_index)) {
            fs::remove(tmp_gff_index);
        }
    }

    std::string cli(const std::string& args) {
        return "\"" + cli_path + "\" " + args;
    }
};

// ==========================================
// No subcommand
// ==========================================

TEST_F(CLIIntersectE2ETest, NoSubcommandExitsWithError) {
    auto result = run_command(cli(""));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("No subcommand"), std::string::npos);
}

// ==========================================
// Intersect with named arguments
// ==========================================

TEST_F(CLIIntersectE2ETest, IntersectNamedArgs) {
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + target_path.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0);
    // chr1:150-250 overlaps chr1:100-500
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos);
    // chr1:850-950 overlaps chr1:600-900
    EXPECT_NE(result.output.find("chr1\t600\t900"), std::string::npos);
    // chr2:500-600 does NOT overlap chr2:200-400
    EXPECT_EQ(result.output.find("chr2"), std::string::npos);
}

// ==========================================
// Intersect with positional arguments
// ==========================================

TEST_F(CLIIntersectE2ETest, IntersectPositionalArgs) {
    auto result = run_command(cli(
        "isec \"" + query_path.string() + "\" \"" + target_path.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0);
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos);
    EXPECT_NE(result.output.find("chr1\t600\t900"), std::string::npos);
}

// ==========================================
// Output to file
// ==========================================

TEST_F(CLIIntersectE2ETest, IntersectOutputToFile) {
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + target_path.string() +
        "\" -o \"" + tmp_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0);

    ASSERT_TRUE(fs::exists(tmp_output));
    std::ifstream ifs(tmp_output);
    std::string content((std::istreambuf_iterator<char>(ifs)),
                         std::istreambuf_iterator<char>());

    EXPECT_NE(content.find("chr1\t100\t500"), std::string::npos);
    EXPECT_NE(content.find("chr1\t600\t900"), std::string::npos);
    EXPECT_EQ(content.find("chr2"), std::string::npos);
}

// ==========================================
// Validation errors
// ==========================================

TEST_F(CLIIntersectE2ETest, MissingQueryfile) {
    auto result = run_command(cli("isec -t \"" + target_path.string() + "\""));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("queryfile is required"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, MissingTargetAndIndex) {
    // With neither -t nor -i, intersect has nothing to search against.
    auto result = run_command(cli("isec -q \"" + query_path.string() + "\""));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("target file (-t) or a prebuilt index (-i)"),
              std::string::npos);
}

TEST_F(CLIIntersectE2ETest, NonexistentQueryfile) {
    auto result = run_command(cli(
        "isec -q /nonexistent/path.bed -t \"" + target_path.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("file does not exist"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, NonexistentTargetfile) {
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t /nonexistent/path.bed"
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("file does not exist"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, InvalidOrder) {
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + target_path.string() + "\" -k 1"
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("order must be at least 3"), std::string::npos);
}

// ==========================================
// Help
// ==========================================

TEST_F(CLIIntersectE2ETest, HelpFlag) {
    auto result = run_command(cli("isec --help"));
    EXPECT_EQ(result.exit_code, 0);
    EXPECT_FALSE(result.output.empty());
    // cxxopts shows positional params in usage line, named options in body
    EXPECT_NE(result.output.find("intersect"), std::string::npos);
    EXPECT_NE(result.output.find("--outputfile"), std::string::npos);
    EXPECT_NE(result.output.find("--order"), std::string::npos);
    EXPECT_NE(result.output.find("--in-place"), std::string::npos);
}

// ==========================================
// Prebuilt index (-i)
// ==========================================

TEST_F(CLIIntersectE2ETest, IntersectWithPrebuiltIndex) {
    // Build an index with `idx`, then search it via `intersect -i` with no -t,
    // which proves the prebuilt index — not a target file — was consumed.
    auto idx_result = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;
    ASSERT_TRUE(fs::exists(tmp_index));

    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -i \"" + tmp_index.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    // Same overlaps as the build-from-target path.
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos);
    EXPECT_NE(result.output.find("chr1\t600\t900"), std::string::npos);
    EXPECT_EQ(result.output.find("chr2"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, IntersectWithPrebuiltIndexInPlace) {
    // --in-place reads the .gg on disk via grove_view instead of loading it
    // whole; results must be identical to the eager -i path.
    auto idx_result = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;

    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -i \"" + tmp_index.string() +
        "\" --in-place"
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos);
    EXPECT_NE(result.output.find("chr1\t600\t900"), std::string::npos);
    EXPECT_EQ(result.output.find("chr2"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, InPlaceRequiresIndex) {
    // --in-place has nothing to read in place without a prebuilt index (-i);
    // a -t target is built in memory.
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + target_path.string() +
        "\" --in-place"
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("--in-place requires a prebuilt index"),
              std::string::npos);
}

TEST_F(CLIIntersectE2ETest, InPlaceQueriesIndexWithMetadataEdges) {
    // Build a --links index whose edges carry 3rd-column metadata, then query
    // it with --in-place. grove_view must parse the leaf blocks past the
    // per-edge metadata bytes without misaligning — correct overlaps prove the
    // block layout stayed aligned.
    const fs::path links_target = test_data_dir / "target_links.bed";
    ASSERT_TRUE(fs::exists(links_target)) << links_target;
    const fs::path meta_links = fs::temp_directory_path() / "genogrove_e2e_meta_links.tsv";
    {
        std::ofstream out(meta_links);
        out << "geneA\tgeneB\tscore=0.9\n"
            << "geneA\tgeneC\thi_c=4.2\n";  // cross-chromosome edge with metadata
    }

    auto idx = run_command(cli(
        "idx \"" + links_target.string() + "\" --links \"" + meta_links.string() +
        "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx.exit_code, 0) << idx.output;

    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -i \"" + tmp_index.string() +
        "\" --in-place"
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos) << result.output;
    EXPECT_NE(result.output.find("chr1\t600\t900"), std::string::npos) << result.output;
    EXPECT_EQ(result.output.find("chr2"), std::string::npos) << result.output;

    fs::remove(meta_links);
}

TEST_F(CLIIntersectE2ETest, IntersectIgnoresTargetWhenIndexGiven) {
    // -i takes precedence over -t: a nonexistent -t must not fail when a
    // valid index is supplied, since the target is ignored.
    auto idx_result = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;

    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t /nonexistent/path.bed -i \"" +
        tmp_index.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos);
}

// ==========================================
// GFF intersect (matched query/target types)
// ==========================================

TEST_F(CLIIntersectE2ETest, GffIntersectFromTarget) {
    // Build the grove on the fly from a GFF target and query with a GFF file.
    auto result = run_command(cli(
        "isec -q \"" + gff_query_path.string() +
        "\" -t \"" + gff_target_path.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    // chr1:151-250 overlaps gene1 at chr1:101-500
    EXPECT_NE(result.output.find("chr1\t101\t500"), std::string::npos);
    // chr1:851-950 overlaps gene2 at chr1:601-900
    EXPECT_NE(result.output.find("chr1\t601\t900"), std::string::npos);
    // chr2:501-600 does NOT overlap gene3 at chr2:201-400
    EXPECT_EQ(result.output.find("chr2"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, GffIntersectWithPrebuiltIndex) {
    // Build a GFF .gg, then intersect via -i — the .gg header tells intersect
    // it's a GFF payload so it dispatches to the GFF handler.
    auto idx_result = run_command(cli(
        "idx \"" + gff_target_path.string() + "\" -o \"" + tmp_gff_index.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;
    ASSERT_TRUE(fs::exists(tmp_gff_index));

    auto result = run_command(cli(
        "isec -q \"" + gff_query_path.string() + "\" -i \"" + tmp_gff_index.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t101\t500"), std::string::npos);
    EXPECT_NE(result.output.find("chr1\t601\t900"), std::string::npos);
    EXPECT_EQ(result.output.find("chr2"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, GffIntersectWithPrebuiltIndexInPlace) {
    // GFF payload read in place: same dispatch + results as the eager -i path.
    auto idx_result = run_command(cli(
        "idx \"" + gff_target_path.string() + "\" -o \"" + tmp_gff_index.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;

    auto result = run_command(cli(
        "isec -q \"" + gff_query_path.string() + "\" -i \"" + tmp_gff_index.string() +
        "\" --in-place"
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t101\t500"), std::string::npos);
    EXPECT_NE(result.output.find("chr1\t601\t900"), std::string::npos);
    EXPECT_EQ(result.output.find("chr2"), std::string::npos);
}

// ==========================================
// Cross-type queries (#439): query type and target/index type are independent.
// Output format follows the target payload; both readers map to a common
// 0-based coordinate space so overlaps line up across formats.
// ==========================================

TEST_F(CLIIntersectE2ETest, CrossTypeBedQueryAgainstGffTarget) {
    // BED query, GFF target -> GFF-format output rows. query.bed 150-250 and
    // 850-950 overlap gene1 (chr1 101-500) and gene2 (chr1 601-900); chr2
    // 500-600 misses gene3 (chr2 201-400).
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() +
        "\" -t \"" + gff_target_path.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t101\t500"), std::string::npos) << result.output;
    EXPECT_NE(result.output.find("chr1\t601\t900"), std::string::npos) << result.output;
    EXPECT_EQ(result.output.find("chr2"), std::string::npos) << result.output;
}

TEST_F(CLIIntersectE2ETest, CrossTypeGffQueryAgainstBedIndex) {
    // GFF query, prebuilt BED index -> BED-format output rows. query.gff
    // 151-250 and 851-950 overlap the BED targets at chr1 100-500 and 600-900.
    auto idx_result = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;

    auto result = run_command(cli(
        "isec -q \"" + gff_query_path.string() + "\" -i \"" + tmp_index.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos) << result.output;
    EXPECT_NE(result.output.find("chr1\t600\t900"), std::string::npos) << result.output;
    EXPECT_EQ(result.output.find("chr2"), std::string::npos) << result.output;
}
