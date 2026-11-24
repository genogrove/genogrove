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
#include <sstream>
#include <string>
#include <utility>
#include <vector>
#ifndef _WIN32
#include <sys/wait.h>
#endif

namespace fs = std::filesystem;

#ifndef GENOGROVE_CLI_PATH
#error "GENOGROVE_CLI_PATH must be defined"
#endif

// In an anonymous namespace: the other e2e test files of this binary have
// helpers of the same names.
namespace {

struct CmdResult {
    std::string output;
    int exit_code;
};

CmdResult run_command(const std::string& cmd) {
    CmdResult result;
    const std::string full_cmd = cmd + " 2>&1";
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
    const int status = pclose(pipe);
#ifdef _WIN32
    result.exit_code = status;
#else
    result.exit_code = WIFEXITED(status) ? WEXITSTATUS(status) : -1;
#endif
    return result;
}

void write_file(const fs::path& path, const std::string& content) {
    std::ofstream(path) << content;
}

// One BED12 line; each block is {start, end}, 0-based half-open.
std::string bed12(const std::string& id, char strand,
                  const std::vector<std::pair<int, int>>& blocks) {
    const int start = blocks.front().first;
    const int end = blocks.back().second;
    std::ostringstream line, sizes, starts;
    for(const auto& [from, to] : blocks) {
        sizes << to - from << ',';
        starts << from - start << ',';
    }
    line << "chr1\t" << start << '\t' << end << '\t' << id << "\t0\t" << strand << '\t' << start
         << '\t' << end << "\t0\t" << blocks.size() << '\t' << sizes.str() << '\t' << starts.str()
         << '\n';
    return line.str();
}

std::string gtf_line(const std::string& type, int start, int end, char strand,
                     const std::string& attributes) {
    return "chr1\tt\t" + type + "\t" + std::to_string(start) + "\t" + std::to_string(end) +
           "\t.\t" + strand + "\t.\t" + attributes + "\n";
}

} // namespace

// T1 has the exons E1 (101-200), E2 (301-400), E3 (801-900). T2 has E1 and E2.
// T3, on the minus strand, has the exons 1101-1200 and 1301-1400.
// A BED block {100, 200} is the exon 101-200.
class CLIMatchE2ETest : public ::testing::Test {
protected:
    std::string cli_path = GENOGROVE_CLI_PATH;
    fs::path gtf = fs::temp_directory_path() / "genogrove_match_test.gtf";
    fs::path index = fs::temp_directory_path() / "genogrove_match_test.gg";
    fs::path query = fs::temp_directory_path() / "genogrove_match_query.bed";
    fs::path output = fs::temp_directory_path() / "genogrove_match_output.tsv";

    void SetUp() override {
        ASSERT_TRUE(fs::exists(cli_path)) << "CLI binary not found: " << cli_path;
        const std::string g1 = "gene_id \"G1\";", g2 = "gene_id \"G2\";";
        write_file(gtf,
            gtf_line("gene", 101, 900, '+', g1) +
            gtf_line("transcript", 101, 900, '+', g1 + " transcript_id \"T1\";") +
            gtf_line("exon", 101, 200, '+', g1 + " transcript_id \"T1\";") +
            gtf_line("exon", 301, 400, '+', g1 + " transcript_id \"T1\";") +
            gtf_line("exon", 801, 900, '+', g1 + " transcript_id \"T1\";") +
            gtf_line("transcript", 101, 400, '+', g1 + " transcript_id \"T2\";") +
            gtf_line("exon", 101, 200, '+', g1 + " transcript_id \"T2\";") +
            gtf_line("exon", 301, 400, '+', g1 + " transcript_id \"T2\";") +
            gtf_line("gene", 1101, 1400, '-', g2) +
            gtf_line("transcript", 1101, 1400, '-', g2 + " transcript_id \"T3\";") +
            gtf_line("exon", 1101, 1200, '-', g2 + " transcript_id \"T3\";") +
            gtf_line("exon", 1301, 1400, '-', g2 + " transcript_id \"T3\";"));
        auto idx = run_command(cli("idx \"" + gtf.string() + "\" -o \"" + index.string() + "\""));
        ASSERT_EQ(idx.exit_code, 0) << idx.output;
    }

    void TearDown() override {
        for(const fs::path& file : {gtf, index, query, output}) {
            fs::remove(file);
        }
    }

    std::string cli(const std::string& args) { return "\"" + cli_path + "\" " + args; }

    // The rows of `match` for the query lines; the same from both read modes.
    std::string match(const std::string& query_lines) {
        write_file(query, query_lines);
        const std::string command =
            cli("match \"" + query.string() + "\" -i \"" + index.string() + "\"");
        const auto eager = run_command(command);
        const auto in_place = run_command(command + " --in-place");
        EXPECT_EQ(eager.exit_code, 0) << eager.output;
        EXPECT_EQ(in_place.exit_code, 0) << in_place.output;
        EXPECT_EQ(eager.output, in_place.output);
        return eager.output;
    }
};

TEST_F(CLIMatchE2ETest, FullContainedAndPartial) {
    // All three exons of T1. T2 has only the first two.
    EXPECT_EQ(match(bed12("r", '+', {{100, 200}, {300, 400}, {800, 900}})),
              "r\tT1\tfull\t3/3\nr\tT2\tpartial\t2/3\n");
    // The first two exons: all of T2, a part of T1. One row per chain of the shared exons.
    EXPECT_EQ(match(bed12("r", '+', {{100, 200}, {300, 400}})),
              "r\tT1\tcontained\t2/2\nr\tT2\tfull\t2/2\n");
    // E1 and E3 with E2 skipped: both blocks match T1, but not in order.
    EXPECT_EQ(match(bed12("r", '+', {{100, 200}, {800, 900}})),
              "r\tT1\tpartial\t2/2\nr\tT2\tpartial\t1/2\n");
}

TEST_F(CLIMatchE2ETest, OuterEndsAreFreeAndInnerBoundariesAreExact) {
    // The query starts in E1 and ends in E2; the two boundaries at the intron agree.
    EXPECT_EQ(match(bed12("r", '+', {{150, 200}, {300, 350}})),
              "r\tT1\tcontained\t2/2\nr\tT2\tfull\t2/2\n");
    // The first block ends 10 bases before the end of E1.
    EXPECT_EQ(match(bed12("r", '+', {{150, 190}, {300, 350}})),
              "r\tT1\tpartial\t1/2\nr\tT2\tpartial\t1/2\n");
    // A middle block must agree at both ends.
    EXPECT_EQ(match(bed12("r", '+', {{100, 200}, {300, 390}, {800, 900}})),
              "r\tT1\tpartial\t2/3\nr\tT2\tpartial\t1/3\n");
}

TEST_F(CLIMatchE2ETest, StrandMustAgreeUnlessTheQueryHasNone) {
    const std::vector<std::pair<int, int>> t3 = {{1100, 1200}, {1300, 1400}};
    EXPECT_EQ(match(bed12("r", '-', t3)), "r\tT3\tfull\t2/2\n");
    EXPECT_EQ(match(bed12("r", '.', t3)), "r\tT3\tfull\t2/2\n");
    EXPECT_EQ(match(bed12("r", '+', t3)), "");
}

TEST_F(CLIMatchE2ETest, NoRowWithoutAMatch) {
    // In the intron between E2 and E3: the query overlaps T1 but no exon.
    EXPECT_EQ(match(bed12("r", '+', {{500, 600}})), "");
    // Over E1, but neither boundary at the intron agrees with a block boundary.
    EXPECT_EQ(match(bed12("r", '+', {{150, 180}, {320, 350}})), "");
}

TEST_F(CLIMatchE2ETest, ALineWithNoBlocksIsOneInterval) {
    // Both ends of a single interval are free, so an overlap is a match.
    EXPECT_EQ(match("chr1\t150\t160\tr\n"), "r\tT1\tcontained\t1/1\nr\tT2\tcontained\t1/1\n");
    EXPECT_EQ(match("chr1\t150\t160\n"), ".\tT1\tcontained\t1/1\n.\tT2\tcontained\t1/1\n");
}

TEST_F(CLIMatchE2ETest, AUserChainOnABedIndex) {
    // target_links.bed: geneA chr1:100-500, geneB chr1:600-900, geneC chr2:200-400.
    // geneC starts the chain c1: geneA, geneB.
    const fs::path data = fs::current_path() / "cli" / "data" / "target_links.bed";
    const fs::path links = fs::temp_directory_path() / "genogrove_match_links.tsv";
    write_file(links, "geneC\tgeneA\tfirst:c1\ngeneA\tgeneB\tnext:c1\n");
    auto idx = run_command(cli("idx \"" + data.string() + "\" --links \"" + links.string() +
                               "\" -o \"" + index.string() + "\""));
    ASSERT_EQ(idx.exit_code, 0) << idx.output;

    EXPECT_EQ(match(bed12("r", '.', {{100, 500}, {600, 900}})), "r\tc1\tfull\t2/2\n");
    EXPECT_EQ(match(bed12("r", '.', {{600, 900}})), "r\tc1\tcontained\t1/1\n");
    fs::remove(links);
}

TEST_F(CLIMatchE2ETest, WritesToAnOutputFile) {
    write_file(query, bed12("r", '+', {{100, 200}, {300, 400}, {800, 900}}));
    auto result = run_command(cli("match \"" + query.string() + "\" -i \"" + index.string() +
                                  "\" -o \"" + output.string() + "\""));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    EXPECT_EQ(result.output, "");
    std::stringstream written;
    written << std::ifstream(output).rdbuf();
    EXPECT_EQ(written.str(), "r\tT1\tfull\t3/3\nr\tT2\tpartial\t2/3\n");
}

TEST_F(CLIMatchE2ETest, InputErrors) {
    write_file(query, bed12("r", '+', {{100, 200}}));
    const std::string with_index = " -i \"" + index.string() + "\"";

    auto result = run_command(cli("match \"" + query.string() + "\""));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("index (-i) is required"), std::string::npos) << result.output;

    result = run_command(cli("match" + with_index));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("queryfile is required"), std::string::npos) << result.output;

    result = run_command(cli("match /no/such/file.bed" + with_index));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("does not exist"), std::string::npos) << result.output;

    // The query must be BED: a GTF file has no blocks.
    result = run_command(cli("match \"" + gtf.string() + "\"" + with_index));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("must be BED"), std::string::npos) << result.output;
}