/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <algorithm>
#include <array>
#include <cstdio>
#include <cstdlib>
#include <filesystem>
#include <fstream>
#include <sstream>
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
    fs::path vcf_query_path;
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
        vcf_query_path = test_data_dir / "query.vcf";
        tmp_output = fs::temp_directory_path() / "genogrove_e2e_test_output.bed";
        tmp_index = fs::temp_directory_path() / "genogrove_e2e_test_index.gg";
        tmp_gff_index = fs::temp_directory_path() / "genogrove_e2e_test_index_gff.gg";

        ASSERT_TRUE(fs::exists(cli_path)) << "CLI binary not found: " << cli_path;
        ASSERT_TRUE(fs::exists(target_path)) << "Target test data not found: " << target_path;
        ASSERT_TRUE(fs::exists(query_path)) << "Query test data not found: " << query_path;
        ASSERT_TRUE(fs::exists(gff_target_path)) << "GFF target test data not found: " << gff_target_path;
        ASSERT_TRUE(fs::exists(gff_query_path)) << "GFF query test data not found: " << gff_query_path;
        ASSERT_TRUE(fs::exists(vcf_query_path)) << "VCF query test data not found: " << vcf_query_path;
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
// The output file never destroys an input or an earlier result
// ==========================================

namespace {
std::string read_all(const fs::path& path) {
    std::ifstream in(path, std::ios::binary);
    return std::string(std::istreambuf_iterator<char>(in), std::istreambuf_iterator<char>());
}

// A fresh scratch directory for one test.
fs::path fresh_dir(const std::string& name) {
    const fs::path dir = fs::temp_directory_path() / name;
    fs::remove_all(dir);
    fs::create_directories(dir);
    return dir;
}

// True if any entry in `dir` looks like a leftover temporary output file.
bool has_temporary_file(const fs::path& dir) {
    for(const auto& entry : fs::directory_iterator(dir)) {
        if(entry.path().filename().string().find(".tmp-") != std::string::npos) {
            return true;
        }
    }
    return false;
}
}  // namespace

TEST_F(CLIIntersectE2ETest, OutputThatIsTheQueryIsRejectedAndTheQueryIsKept) {
    const fs::path dir = fresh_dir("genogrove_e2e_alias");
    const fs::path query = dir / "query.bed";
    const fs::path target = dir / "target.bed";
    fs::copy_file(query_path, query);
    fs::copy_file(target_path, target);
    const std::string before = read_all(query);

    auto result = run_command(cli(
        "isec -q \"" + query.string() + "\" -t \"" + target.string() +
        "\" -o \"" + query.string() + "\""
    ));

    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("same file as the query file"), std::string::npos)
        << result.output;
    EXPECT_EQ(read_all(query), before);
    fs::remove_all(dir);
}

TEST_F(CLIIntersectE2ETest, FailedRunKeepsTheExistingOutputAndLeavesNoTemporaryFile) {
    const fs::path dir = fresh_dir("genogrove_e2e_failed_run");
    const fs::path bad_target = dir / "bad_target.bed";
    const fs::path output = dir / "out.bed";
    {
        std::ofstream(bad_target) << "chr1\tabc\tdef\n";  // coordinates are not integers
        std::ofstream(output) << "KEEP\n";
    }

    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + bad_target.string() +
        "\" -o \"" + output.string() + "\""
    ));

    EXPECT_NE(result.exit_code, 0);
    EXPECT_EQ(read_all(output), "KEEP\n");
    EXPECT_FALSE(has_temporary_file(dir));
    fs::remove_all(dir);
}

TEST_F(CLIIntersectE2ETest, SuccessfulRunLeavesOnlyTheOutputFile) {
    const fs::path dir = fresh_dir("genogrove_e2e_success");
    const fs::path output = dir / "out.bed";

    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + target_path.string() +
        "\" -o \"" + output.string() + "\""
    ));

    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(read_all(output).find("chr1\t100\t500"), std::string::npos);
    EXPECT_FALSE(has_temporary_file(dir));
    fs::remove_all(dir);
}

TEST_F(CLIIntersectE2ETest, OutputToDevNullSucceedsAndLeavesTheDeviceAlone) {
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + target_path.string() +
        "\" -o /dev/null"
    ));

    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_TRUE(fs::is_character_file("/dev/null"));
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

TEST_F(CLIIntersectE2ETest, UnsupportedQueryFormatRejected) {
    // The query must be BED/GFF/GTF/VCF; a FASTA query is rejected cleanly.
    fs::path fa = fs::temp_directory_path() / "genogrove_e2e_query.fasta";
    {
        std::ofstream out(fa);
        out << ">seq1\nACGTACGT\n";
    }
    auto result = run_command(cli(
        "isec -q \"" + fa.string() + "\" -t \"" + target_path.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("must be BED"), std::string::npos) << result.output;
    fs::remove(fa);
}

TEST_F(CLIIntersectE2ETest, CorruptIndexFileRejected) {
    // A non-.gg file passed to -i must fail the header magic check cleanly
    // (exit != 0, no crash), not be mis-parsed.
    fs::path bogus = fs::temp_directory_path() / "genogrove_e2e_bogus.gg";
    {
        std::ofstream out(bogus, std::ios::binary);
        out << "this is definitely not a gg index file\n";
    }
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -i \"" + bogus.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("magic mismatch"), std::string::npos) << result.output;
    fs::remove(bogus);
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

TEST_F(CLIIntersectE2ETest, OrderRejectedWithPrebuiltIndex) {
    // -k only shapes a tree built from -t; a prebuilt index keeps its own
    // order, so passing both must fail loudly instead of silently ignoring -k.
    auto idx_result = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;

    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -i \"" + tmp_index.string() +
        "\" -k 7"
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("-k/--order only applies when building from a target"),
              std::string::npos);
}

TEST_F(CLIIntersectE2ETest, TargetRejectedWithPrebuiltIndex) {
    // -t and -i name two different sources; the index used to win silently,
    // leaving the user believing the target was searched. The target here
    // does not even exist, which the old code never checked once -i was set.
    auto idx_result = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;

    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" +
        (test_data_dir / "missing.bed").string() + "\" -i \"" +
        tmp_index.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("-t and -i are mutually exclusive"),
              std::string::npos);
}

TEST_F(CLIIntersectE2ETest, OrderAcceptedWithTarget) {
    // The same -k on the build-from-target path must keep working, so the new
    // rejection is scoped to -i and nothing else.
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + target_path.string() +
        "\" -k 7"
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos);
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

// ==========================================
// VCF query (role 1): VCF is a valid query format, never a target payload.
// vcf_entry maps to the same 0-based space as BED, so a VCF query lines up
// with BED/GFF targets. query.vcf: chr1 POS 200 (SNP) and POS 850 hit the
// chr1 targets; POS 301 REF=ATGC (multi-base) also hits chr1 100-500; chr2
// POS 550 misses chr2 200-400.
// ==========================================

TEST_F(CLIIntersectE2ETest, VcfQueryAgainstBedTarget) {
    auto result = run_command(cli(
        "isec -q \"" + vcf_query_path.string() +
        "\" -t \"" + target_path.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos) << result.output;
    EXPECT_NE(result.output.find("chr1\t600\t900"), std::string::npos) << result.output;
    EXPECT_EQ(result.output.find("chr2"), std::string::npos) << result.output;
}

TEST_F(CLIIntersectE2ETest, VcfQueryAgainstGffTarget) {
    // VCF query, GFF target -> GFF-format output rows. Same overlaps land on
    // gene1 (chr1 101-500) and gene2 (chr1 601-900); chr2 misses gene3.
    auto result = run_command(cli(
        "isec -q \"" + vcf_query_path.string() +
        "\" -t \"" + gff_target_path.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t101\t500"), std::string::npos) << result.output;
    EXPECT_NE(result.output.find("chr1\t601\t900"), std::string::npos) << result.output;
    EXPECT_EQ(result.output.find("chr2"), std::string::npos) << result.output;
}

TEST_F(CLIIntersectE2ETest, VcfQueryAgainstPrebuiltIndexInPlace) {
    // A VCF query touches only the query side, so --in-place partial-read of a
    // BED index works unchanged — proves query/payload independence end to end.
    auto idx_result = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;

    auto result = run_command(cli(
        "isec -q \"" + vcf_query_path.string() + "\" -i \"" + tmp_index.string() +
        "\" --in-place"
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("chr1\t100\t500"), std::string::npos) << result.output;
    EXPECT_NE(result.output.find("chr1\t600\t900"), std::string::npos) << result.output;
    EXPECT_EQ(result.output.find("chr2"), std::string::npos) << result.output;
}

// ==========================================
// --hops: follow graph edges from each overlap
// ==========================================
//
// target_links.bed: geneA chr1:100-500, geneB chr1:600-900, geneC chr2:200-400
// links.tsv:        geneA -> geneB, geneB -> geneC
//
// Reached rows are: <query chrom start end> <seed row> <reached row> <hops>.

namespace {
void write_file(const fs::path& p, const std::string& content) {
    std::ofstream out(p);
    out << content;
}
} // namespace

class CLIIntersectHopsE2ETest : public CLIIntersectE2ETest {
protected:
    fs::path hops_query;

    void SetUp() override {
        CLIIntersectE2ETest::SetUp();
        hops_query = fs::temp_directory_path() / "genogrove_e2e_hops_query.bed";
        auto idx = run_command(cli(
            "idx \"" + (test_data_dir / "target_links.bed").string() +
            "\" --links \"" + (test_data_dir / "links.tsv").string() +
            "\" -o \"" + tmp_index.string() + "\""
        ));
        ASSERT_EQ(idx.exit_code, 0) << idx.output;
    }

    void TearDown() override {
        if(fs::exists(hops_query)) {
            fs::remove(hops_query);
        }
        CLIIntersectE2ETest::TearDown();
    }

    std::string isec_hops(const std::string& extra) {
        return cli("isec -q \"" + hops_query.string() + "\" -i \"" + tmp_index.string() +
                   "\" " + extra);
    }
};

TEST_F(CLIIntersectHopsE2ETest, OneHopOutReportsDirectTargetOnly) {
    // Two queries: geneA, then geneC, which has no outgoing edge.
    write_file(hops_query, "chr1\t150\t250\nchr2\t250\t300\n");
    auto result = run_command(isec_hops("--hops 1 --direction out"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_EQ(result.output,
              "chr1\t100\t500\n"
              "chr1\t150\t250\tchr1\t100\t500\tchr1\t600\t900\t1\n"
              "chr2\t200\t400\n");
}

TEST_F(CLIIntersectHopsE2ETest, HopsAllReachesWholeComponentWithMinHops) {
    write_file(hops_query, "chr1\t150\t250\n");  // hits geneA
    auto result = run_command(isec_hops("--hops all"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_EQ(result.output,
              "chr1\t100\t500\n"
              "chr1\t150\t250\tchr1\t100\t500\tchr1\t600\t900\t1\n"
              "chr1\t150\t250\tchr1\t100\t500\tchr2\t200\t400\t2\n");
}

TEST_F(CLIIntersectHopsE2ETest, DirectionInFollowsOnlyIncomingEdges) {
    write_file(hops_query, "chr2\t250\t300\n");  // hits geneC, which only has an in-edge
    auto result = run_command(isec_hops("--hops all --direction in"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_EQ(result.output,
              "chr2\t200\t400\n"
              "chr2\t250\t300\tchr2\t200\t400\tchr1\t600\t900\t1\n"
              "chr2\t250\t300\tchr2\t200\t400\tchr1\t100\t500\t2\n");

    // geneA has no incoming edge, so the same walk from it reaches nothing.
    write_file(hops_query, "chr1\t150\t250\n");
    result = run_command(isec_hops("--hops all --direction in"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_EQ(result.output, "chr1\t100\t500\n");
}

TEST_F(CLIIntersectHopsE2ETest, HopsZeroKeepsPlainOverlapOutput) {
    write_file(hops_query, "chr1\t150\t250\n");
    auto result = run_command(isec_hops("--hops 0"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_EQ(result.output, "chr1\t100\t500\n");
}

TEST_F(CLIIntersectHopsE2ETest, ReachedIntervalPrintedOnceUnderNearestSeedInPlace) {
    // The query overlaps geneA and geneB (two seeds). geneC is 2 hops from A
    // and 1 from B: it must appear once, under B, with hops=1. Seeds are never
    // reported as reached from each other. Also exercises grove_view paging in
    // the cross-chromosome target block on demand.
    write_file(hops_query, "chr1\t150\t700\n");
    auto result = run_command(isec_hops("--hops 2 --in-place"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    // run_command merges stderr, which carries the --in-place cannot-verify
    // note, so match the rows as a suffix rather than the whole output.
    EXPECT_TRUE(result.output.ends_with(
                    "chr1\t100\t500\n"
                    "chr1\t600\t900\n"
                    "chr1\t150\t700\tchr1\t600\t900\tchr2\t200\t400\t1\n"))
        << result.output;
}

TEST_F(CLIIntersectHopsE2ETest, InPlaceHopsOnIndexWithoutLinksWarnsAndReachesNothing) {
    // grove_view cannot tell a link-less index apart without paging every
    // block, so the in-place path warns on stderr and walks an empty graph
    // instead of erroring like the eager path does.
    auto idx = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx.exit_code, 0) << idx.output;
    write_file(hops_query, "chr1\t150\t250\n");
    auto result = run_command(isec_hops("--hops all --in-place"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_NE(result.output.find("Warning: --in-place cannot verify"), std::string::npos)
        << result.output;
    EXPECT_TRUE(result.output.ends_with("chr1\t100\t500\n")) << result.output;
}

TEST_F(CLIIntersectHopsE2ETest, UniquePrintsEachQueryWithAHitOneTime) {
    // Two hits (geneA and geneB), no hit, one hit (geneC).
    write_file(hops_query, "chr1\t450\t650\nchr1\t550\t560\nchr2\t250\t260\n");
    const std::string expected = "chr1\t450\t650\nchr2\t250\t260\n";

    for (const std::string mode : {"", "--in-place"}) {
        auto result = run_command(isec_hops("-u " + mode));
        EXPECT_EQ(result.exit_code, 0) << result.output;
        EXPECT_EQ(result.output, expected) << "mode: " << mode;
    }
    auto from_target = run_command(cli(
        "isec --unique -q \"" + hops_query.string() + "\" -t \"" +
        (test_data_dir / "target_links.bed").string() + "\""
    ));
    EXPECT_EQ(from_target.exit_code, 0) << from_target.output;
    EXPECT_EQ(from_target.output, expected);
}

TEST_F(CLIIntersectHopsE2ETest, UniqueOnAGffTargetPrintsOnlyTheQueryColumns) {
    auto plain = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + gff_target_path.string() + "\""
    ));
    auto unique = run_command(cli(
        "isec -u -q \"" + query_path.string() + "\" -t \"" + gff_target_path.string() + "\""
    ));
    ASSERT_EQ(unique.exit_code, 0) << unique.output;
    ASSERT_FALSE(plain.output.empty());
    ASSERT_FALSE(unique.output.empty());

    std::istringstream lines(unique.output);
    std::string line;
    std::size_t count = 0;
    while (std::getline(lines, line)) {
        EXPECT_EQ(std::ranges::count(line, '\t'), 2) << line;
        EXPECT_NE(line.find("chr"), std::string::npos) << line;
        ++count;
    }
    EXPECT_LE(count, 3u);  // query.bed has three intervals
}

TEST_F(CLIIntersectHopsE2ETest, UniqueIsRejectedWithHopsAndWithChain) {
    write_file(hops_query, "chr1\t450\t650\n");
    for (const std::string other : {"--hops 1", "--chain"}) {
        auto result = run_command(isec_hops("--unique " + other));
        EXPECT_NE(result.exit_code, 0) << other;
        EXPECT_NE(result.output.find("--unique is not allowed with --hops or --chain"),
                  std::string::npos)
            << result.output;
    }
}

TEST_F(CLIIntersectHopsE2ETest, HopsRequiresIndex) {
    write_file(hops_query, "chr1\t150\t250\n");
    auto result = run_command(cli(
        "isec -q \"" + hops_query.string() + "\" -t \"" + target_path.string() +
        "\" --hops 1"
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("--hops requires a prebuilt index"), std::string::npos)
        << result.output;
}

TEST_F(CLIIntersectHopsE2ETest, HopsRejectsIndexBuiltWithoutLinks) {
    auto idx = run_command(cli(
        "idx \"" + target_path.string() + "\" -o \"" + tmp_index.string() + "\""
    ));
    ASSERT_EQ(idx.exit_code, 0) << idx.output;
    write_file(hops_query, "chr1\t150\t250\n");
    auto result = run_command(isec_hops("--hops 1"));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("idx --links"), std::string::npos) << result.output;
}

TEST_F(CLIIntersectHopsE2ETest, HopsOnAGffIndexFollowsModelEdgesAndUserLinks) {
    // Two genes, each with a transcript and exons. User links: gene g1 -> gene
    // g2, and the first exon of T1 (e1) -> transcript t2. The index also has
    // the edges of the gene model: gene -> transcript -> exon -> exon.
    fs::path gtf = fs::temp_directory_path() / "genogrove_e2e_hops.gtf";
    fs::path links = fs::temp_directory_path() / "genogrove_e2e_hops_links.tsv";
    const std::string lines =
        "chr1\tt\tgene\t101\t400\t.\t+\t.\tgene_id \"G1\"; name \"g1\";\n"
        "chr1\tt\ttranscript\t101\t400\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\"; name \"t1\";\n"
        "chr1\tt\texon\t101\t200\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\"; name \"e1\";\n"
        "chr1\tt\texon\t301\t400\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\";\n"
        "chr1\tt\tgene\t1001\t1400\t.\t+\t.\tgene_id \"G2\"; name \"g2\";\n"
        "chr1\tt\ttranscript\t1001\t1400\t.\t+\t.\tgene_id \"G2\"; transcript_id \"T2\"; name \"t2\";\n"
        "chr1\tt\texon\t1001\t1100\t.\t+\t.\tgene_id \"G2\"; transcript_id \"T2\";\n";
    write_file(gtf, lines);
    write_file(links, "name:name\tg1\tg2\tregulates\nname:name\te1\tt2\tbinds\n");
    const std::string build = "idx \"" + gtf.string() + "\" -o \"" + tmp_index.string() + "\"";
    auto idx = run_command(cli(build + " --links \"" + links.string() + "\""));
    EXPECT_EQ(idx.exit_code, 0) << idx.output;

    const std::string g1 = "chr1\t101\t400\tgene\tG1\t+";
    const std::string t1 = "chr1\t101\t400\ttranscript\tT1\t+";
    const std::string e1 = "chr1\t101\t200\texon\tchr1:101-200:+\t+";
    const std::string e2 = "chr1\t301\t400\texon\tchr1:301-400:+\t+";
    const std::string e3 = "chr1\t1001\t1100\texon\tchr1:1001-1100:+\t+";
    const std::string g2 = "chr1\t1001\t1400\tgene\tG2\t+";
    const std::string t2 = "chr1\t1001\t1400\ttranscript\tT2\t+";
    const std::string q1 = "chr1\t149\t151\t";
    const std::string q2 = "chr1\t1049\t1051\t";

    for (const std::string& mode : {std::string(), std::string(" --in-place")}) {
        // A query in exon e1 has the overlap rows G1, T1 and e1; an overlap
        // row is never a reached row. From G1: the user link to G2. From T1:
        // nothing new. From e1: the model edge to e2 and the user link to T2,
        // then the model edge T2 -> e3.
        write_file(hops_query, "chr1\t149\t151\n");
        const std::string from_g1 = q1 + g1 + "\t" + g2 + "\t1\n";
        const std::string from_e1 = q1 + e1 + "\t" + e2 + "\t1\n" + q1 + e1 + "\t" + t2 + "\t1\n" +
                                    q1 + e1 + "\t" + e3 + "\t2\n";
        const std::string all = g1 + "\n" + from_g1 + t1 + "\n" + e1 + "\n" + from_e1;
        auto result = run_command(isec_hops("--hops 2 --direction out" + mode));
        EXPECT_EQ(result.exit_code, 0) << result.output;
        EXPECT_EQ(result.output, all) << "mode:" << mode;

        // The whole component, in the default direction (both), is the same.
        result = run_command(isec_hops("--hops all" + mode));
        EXPECT_EQ(result.output, all) << "mode:" << mode;

        // Against the direction of the edges, from the second gene: a user
        // link into G2; a user link from e1 into T2, then the model edge
        // T1 -> e1. Nothing new from the exon of T2.
        write_file(hops_query, "chr1\t1049\t1051\n");
        result = run_command(isec_hops("--hops 2 --direction in" + mode));
        EXPECT_EQ(result.output,
                  g2 + "\n" + q2 + g2 + "\t" + g1 + "\t1\n" +
                  t2 + "\n" + q2 + t2 + "\t" + e1 + "\t1\n" + q2 + t2 + "\t" + t1 + "\t2\n" +
                  e3 + "\n")
            << "mode:" << mode;
    }

    // The same file with no user links: the model edges alone are followed,
    // and no note says that an index without links is a mistake.
    EXPECT_EQ(run_command(cli(build)).exit_code, 0);
    write_file(hops_query, "chr1\t149\t151\n");
    for (const std::string& mode : {std::string(), std::string(" --in-place")}) {
        auto result = run_command(isec_hops("--hops 1 --direction out" + mode));
        EXPECT_EQ(result.exit_code, 0) << result.output;
        EXPECT_EQ(result.output,
                  g1 + "\n" + t1 + "\n" + e1 + "\n" + q1 + e1 + "\t" + e2 + "\t1\n")
            << "mode:" << mode;
    }

    fs::remove(gtf);
    fs::remove(links);
}

TEST_F(CLIIntersectHopsE2ETest, HopsLeavesTheChainOfATranscriptAtASharedExon) {
    // T1 (exons a, b) and T3 (exons a, c) share exon a. The query lies in b,
    // so its overlap rows are G1, T1 and b, but not T3. The walk does not
    // read the transcript list of an exon -> exon edge: from a it reaches
    // also c, which is not an exon of T1. Each key is one row.
    fs::path gtf = fs::temp_directory_path() / "genogrove_e2e_hops_shared.gtf";
    write_file(gtf,
        "chr1\tt\tgene\t101\t400\t.\t+\t.\tgene_id \"G1\";\n"
        "chr1\tt\ttranscript\t101\t400\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\";\n"
        "chr1\tt\texon\t101\t200\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\";\n"
        "chr1\tt\texon\t301\t400\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\";\n"
        "chr1\tt\ttranscript\t101\t280\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T3\";\n"
        "chr1\tt\texon\t101\t200\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T3\";\n"
        "chr1\tt\texon\t251\t280\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T3\";\n");
    auto idx = run_command(cli("idx \"" + gtf.string() + "\" -o \"" + tmp_index.string() + "\""));
    EXPECT_EQ(idx.exit_code, 0) << idx.output;

    const std::string q = "chr1\t349\t351\t";
    const std::string g1 = "chr1\t101\t400\tgene\tG1\t+";
    const std::string t1 = "chr1\t101\t400\ttranscript\tT1\t+";
    const std::string t3 = "chr1\t101\t280\ttranscript\tT3\t+";
    const std::string a = "chr1\t101\t200\texon\tchr1:101-200:+\t+";
    const std::string b = "chr1\t301\t400\texon\tchr1:301-400:+\t+";
    const std::string c = "chr1\t251\t280\texon\tchr1:251-280:+\t+";
    write_file(hops_query, "chr1\t349\t351\n");
    for (const std::string& mode : {std::string(), std::string(" --in-place")}) {
        auto result = run_command(isec_hops("--hops all" + mode));
        EXPECT_EQ(result.exit_code, 0) << result.output;
        EXPECT_EQ(result.output,
                  g1 + "\n" + q + g1 + "\t" + t3 + "\t1\n" +
                  t1 + "\n" + q + t1 + "\t" + a + "\t1\n" + q + t1 + "\t" + c + "\t2\n" +
                  b + "\n")
            << "mode:" << mode;
    }

    // A query in the shared exon a: the exon row comes after each transcript
    // that uses it, so it is there twice.
    write_file(hops_query, "chr1\t149\t151\n");
    for (const std::string& mode : {std::string(), std::string(" --in-place")}) {
        auto result = run_command(isec_hops(mode));
        EXPECT_EQ(result.exit_code, 0) << result.output;
        EXPECT_EQ(result.output, t3 + "\n" + a + "\n" + g1 + "\n" + t1 + "\n" + a + "\n")
            << "mode:" << mode;

        // With --hops, each reached row is printed once: after the first row
        // of the exon. Its second row has nothing after it.
        const std::string qa = "chr1\t149\t151\t";
        result = run_command(isec_hops("--hops 1 --direction out" + mode));
        EXPECT_EQ(result.output,
                  t3 + "\n" + a + "\n" + qa + a + "\t" + b + "\t1\n" + qa + a + "\t" + c + "\t1\n" +
                  g1 + "\n" + t1 + "\n" + a + "\n")
            << "mode:" << mode;
    }
    fs::remove(gtf);
}

TEST_F(CLIIntersectHopsE2ETest, HopsOnAGffIndexWithNoEdges) {
    // No gene or transcript line and no links: the index has no graph edge.
    // The eager path counts the edges and stops; the in-place path cannot
    // count them, so it prints the overlap row only.
    fs::path gtf = fs::temp_directory_path() / "genogrove_e2e_hops_noedge.gtf";
    write_file(gtf, "chr1\tt\tenhancer\t101\t400\t.\t+\t.\tname \"x\";\n");
    auto idx = run_command(cli("idx \"" + gtf.string() + "\" -o \"" + tmp_index.string() + "\""));
    EXPECT_EQ(idx.exit_code, 0) << idx.output;
    write_file(hops_query, "chr1\t149\t151\n");

    auto result = run_command(isec_hops("--hops 1"));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("--hops has no edge to follow"), std::string::npos)
        << result.output;

    result = run_command(isec_hops("--hops 1 --in-place"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_EQ(result.output, "chr1\t101\t400\tenhancer\t.\t+\n");
    fs::remove(gtf);
}

TEST_F(CLIIntersectHopsE2ETest, ChainListsEveryMemberOfATranscript) {
    // T1 has the exons E1, E2, E3. T2 has E1 (shared) and E4.
    // On chr2, minus strand: T3 has the exons left and right.
    fs::path gtf = fs::temp_directory_path() / "genogrove_e2e_chain.gtf";
    write_file(gtf,
        "chr1\tt\tgene\t101\t900\t.\t+\t.\tgene_id \"G1\";\n"
        "chr1\tt\ttranscript\t101\t900\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\";\n"
        "chr1\tt\texon\t101\t200\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\"; exon_id \"E1\";\n"
        "chr1\tt\texon\t301\t400\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\"; exon_id \"E2\";\n"
        "chr1\tt\texon\t801\t900\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\"; exon_id \"E3\";\n"
        "chr1\tt\ttranscript\t101\t400\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T2\";\n"
        "chr1\tt\texon\t101\t200\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T2\"; exon_id \"E1\";\n"
        "chr1\tt\texon\t381\t400\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T2\"; exon_id \"E4\";\n"
        "chr2\tt\tgene\t101\t400\t.\t-\t.\tgene_id \"G2\";\n"
        "chr2\tt\ttranscript\t101\t400\t.\t-\t.\tgene_id \"G2\"; transcript_id \"T3\";\n"
        "chr2\tt\texon\t101\t200\t.\t-\t.\tgene_id \"G2\"; transcript_id \"T3\"; exon_id \"left\";\n"
        "chr2\tt\texon\t301\t400\t.\t-\t.\tgene_id \"G2\"; transcript_id \"T3\"; exon_id \"right\";\n");
    auto idx = run_command(cli("idx \"" + gtf.string() + "\" -o \"" + tmp_index.string() + "\""));
    ASSERT_EQ(idx.exit_code, 0) << idx.output;

    // The full chain of each transcript hit. E1 is a member of both chains.
    const std::string chr1_rows =
        "chr1\t101\t400\ttranscript\tT2\t+\n"
        "chr1\t101\t200\texon\tE1\t+\tT2\t1\n"
        "chr1\t381\t400\texon\tE4\t+\tT2\t2\n"
        "chr1\t101\t900\tgene\tG1\t+\n"
        "chr1\t101\t900\ttranscript\tT1\t+\n"
        "chr1\t101\t200\texon\tE1\t+\tT1\t1\n"
        "chr1\t301\t400\texon\tE2\t+\tT1\t2\n"
        "chr1\t801\t900\texon\tE3\t+\tT1\t3\n";
    // Minus strand: number 1 is the 5' exon, the rightmost.
    const std::string chr2_rows =
        "chr2\t101\t400\tgene\tG2\t-\n"
        "chr2\t101\t400\ttranscript\tT3\t-\n"
        "chr2\t301\t400\texon\tright\t-\tT3\t1\n"
        "chr2\t101\t200\texon\tleft\t-\tT3\t2\n";
    const std::string from_target =
        cli("isec -q \"" + hops_query.string() + "\" -t \"" + gtf.string() + "\" --chain");
    const std::vector<std::pair<std::string, std::string>> cases = {
        {"chr1\t349\t351\n", chr1_rows},  // in exon E2: no row of its own, it is in the chain
        {"chr1\t249\t251\n", chr1_rows},  // between two exons: the same rows
        {"chr2\t149\t151\n", chr2_rows},
    };
    for (const std::string& command :
         {isec_hops("--chain"), isec_hops("--chain --in-place"), from_target}) {
        for (const auto& [query, expected] : cases) {
            write_file(hops_query, query);
            auto result = run_command(command);
            EXPECT_EQ(result.exit_code, 0) << result.output;
            EXPECT_EQ(result.output, expected) << command << " query:" << query;
        }
    }
    fs::remove(gtf);
}

TEST_F(CLIIntersectHopsE2ETest, ChainFromALinksFileOnABedIndex) {
    // geneA starts the chain c1: geneB, then geneC. The edge geneA -> geneC
    // is no part of it.
    fs::path links = fs::temp_directory_path() / "genogrove_e2e_chain_links.tsv";
    write_file(links, "geneA\tgeneB\tfirst:c1\ngeneB\tgeneC\tnext:c1\ngeneA\tgeneC\tnear\n");
    auto idx = run_command(cli("idx \"" + (test_data_dir / "target_links.bed").string() +
                               "\" --links \"" + links.string() + "\" -o \"" +
                               tmp_index.string() + "\""));
    ASSERT_EQ(idx.exit_code, 0) << idx.output;

    write_file(hops_query, "chr1\t150\t250\n");  // hits geneA
    for (const std::string& mode : {std::string(), std::string(" --in-place")}) {
        auto result = run_command(isec_hops("--chain" + mode));
        EXPECT_EQ(result.exit_code, 0) << result.output;
        EXPECT_EQ(result.output,
                  "chr1\t100\t500\n"
                  "chr1\t600\t900\tc1\t1\n"
                  "chr2\t200\t400\tc1\t2\n")
            << "mode:" << mode;
    }
    // A hit that starts no chain is a plain row.
    write_file(hops_query, "chr2\t250\t300\n");  // hits geneC
    EXPECT_EQ(run_command(isec_hops("--chain")).output, "chr2\t200\t400\n");
    // Two queries in one run: the rows of the first, then the rows of the second.
    write_file(hops_query, "chr1\t150\t250\nchr2\t250\t300\n");
    EXPECT_EQ(run_command(isec_hops("--chain")).output,
              "chr1\t100\t500\n"
              "chr1\t600\t900\tc1\t1\n"
              "chr2\t200\t400\tc1\t2\n"
              "chr2\t200\t400\n");
    fs::remove(links);
}

TEST_F(CLIIntersectHopsE2ETest, ChainRulesForAUserChain) {
    fs::path links = fs::temp_directory_path() / "genogrove_e2e_chain_rules.tsv";
    const std::string a = "chr1\t100\t500", b = "chr1\t600\t900", c = "chr2\t200\t400";
    const auto build = [&](const std::string& rows) {
        write_file(links, rows);
        auto idx = run_command(cli("idx \"" + (test_data_dir / "target_links.bed").string() +
                                   "\" --links \"" + links.string() + "\" -o \"" +
                                   tmp_index.string() + "\""));
        ASSERT_EQ(idx.exit_code, 0) << idx.output;
    };

    // geneA starts two chains. c1: geneB, and not on over the `next:c10` edge.
    // c10: geneC, geneB, then geneC again, where the walk stops.
    build("geneA\tgeneB\tfirst:c1\ngeneB\tgeneC\tnext:c10\n"
          "geneA\tgeneC\tfirst:c10\ngeneC\tgeneB\tnext:c10\n");
    const std::string two_chains =
        a + "\n" + b + "\tc1\t1\n" + c + "\tc10\t1\n" + b + "\tc10\t2\n";
    for (const std::string& mode : {std::string(), std::string(" --in-place")}) {
        write_file(hops_query, "chr1\t150\t250\n");  // hits geneA
        auto result = run_command(isec_hops("--chain" + mode));
        EXPECT_EQ(result.exit_code, 0) << result.output;
        EXPECT_EQ(result.output, two_chains) << "mode:" << mode;

        // geneB is a hit too: it is in a printed chain, so it has no row of its own.
        write_file(hops_query, "chr1\t150\t700\n");
        EXPECT_EQ(run_command(isec_hops("--chain" + mode)).output, two_chains) << "mode:" << mode;
    }

    // A member that starts a chain itself keeps its row, in front of its chain.
    build("geneA\tgeneB\tfirst:outer\ngeneB\tgeneC\tfirst:inner\n");
    write_file(hops_query, "chr1\t150\t700\n");  // hits geneA and geneB
    EXPECT_EQ(run_command(isec_hops("--chain")).output,
              a + "\n" + b + "\touter\t1\n" + b + "\n" + c + "\tinner\t1\n");
    fs::remove(links);
}

TEST_F(CLIIntersectHopsE2ETest, ChainWithHopsIsRejected) {
    write_file(hops_query, "chr1\t150\t250\n");
    auto result = run_command(isec_hops("--chain --hops 1"));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("--chain and --hops"), std::string::npos) << result.output;

    // An explicit false is "no --chain": the hops run as usual.
    result = run_command(isec_hops("--chain=false --hops 1 --direction out"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_EQ(result.output,
              "chr1\t100\t500\n"
              "chr1\t150\t250\tchr1\t100\t500\tchr1\t600\t900\t1\n");
}

TEST_F(CLIIntersectHopsE2ETest, InvalidHopsAndDirectionRejected) {
    write_file(hops_query, "chr1\t150\t250\n");
    auto result = run_command(isec_hops("--hops two"));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("--hops must be"), std::string::npos) << result.output;

    result = run_command(isec_hops("--hops 1 --direction sideways"));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("--direction must be"), std::string::npos) << result.output;
}
