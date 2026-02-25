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
    fs::path tmp_output;

    void SetUp() override {
        cli_path = GENOGROVE_CLI_PATH;
        test_data_dir = fs::current_path() / "cli" / "data";
        target_path = test_data_dir / "target.bed";
        query_path = test_data_dir / "query.bed";
        tmp_output = fs::temp_directory_path() / "genogrove_e2e_test_output.bed";

        ASSERT_TRUE(fs::exists(cli_path)) << "CLI binary not found: " << cli_path;
        ASSERT_TRUE(fs::exists(target_path)) << "Target test data not found: " << target_path;
        ASSERT_TRUE(fs::exists(query_path)) << "Query test data not found: " << query_path;
    }

    void TearDown() override {
        if(fs::exists(tmp_output)) {
            fs::remove(tmp_output);
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

TEST_F(CLIIntersectE2ETest, MissingTargetfile) {
    auto result = run_command(cli("isec -q \"" + query_path.string() + "\""));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("targetfile is required"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, NonexistentQueryfile) {
    auto result = run_command(cli(
        "isec -q /nonexistent/path.bed -t \"" + target_path.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("File does not exist"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, NonexistentTargetfile) {
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t /nonexistent/path.bed"
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("File does not exist"), std::string::npos);
}

TEST_F(CLIIntersectE2ETest, InvalidOrder) {
    auto result = run_command(cli(
        "isec -q \"" + query_path.string() + "\" -t \"" + target_path.string() + "\" -k 1"
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("Order must be at least 2"), std::string::npos);
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
}