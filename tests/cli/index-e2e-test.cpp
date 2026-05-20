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
    fs::path tmp_output;

    void SetUp() override {
        cli_path = GENOGROVE_CLI_PATH;
        test_data_dir = fs::current_path() / "cli" / "data";
        target_path = test_data_dir / "target.bed";
        tmp_output = fs::temp_directory_path() / "genogrove_idx_test.gg";

        ASSERT_TRUE(fs::exists(cli_path)) << "CLI binary not found: " << cli_path;
        ASSERT_TRUE(fs::exists(target_path)) << "Test data not found: " << target_path;
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
    auto grove = ggs::grove<gdt::interval, gio::bed_entry>::deserialize(in);
    EXPECT_EQ(grove.indexed_vertex_count(), 3u);
}

// ==========================================
// Validation error: missing input file
// ==========================================

TEST_F(CLIIndexE2ETest, IndexMissingInputFails) {
    auto result = run_command(cli("idx /nonexistent/path.bed"));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("does not exist"), std::string::npos);
}