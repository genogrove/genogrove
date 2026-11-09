/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <filesystem>
#include <fstream>
#include <ios>
#include <iterator>
#include <stdexcept>
#include <string>

// cli
#include <output_file.hpp>

namespace fs = std::filesystem;

namespace {
std::string slurp(const fs::path& path) {
    std::ifstream in(path, std::ios::binary);
    return std::string(std::istreambuf_iterator<char>(in), std::istreambuf_iterator<char>());
}

void spit(const fs::path& path, const std::string& content) {
    std::ofstream out(path, std::ios::binary);
    out << content;
}

// Number of directory entries: the destination plus any leftover temporary file.
size_t entries_in(const fs::path& dir) {
    return static_cast<size_t>(
        std::distance(fs::directory_iterator(dir), fs::directory_iterator()));
}
}  // namespace

class CLIOutputFileTest : public ::testing::Test {
protected:
    fs::path dir;

    void SetUp() override {
        dir = fs::temp_directory_path() / "genogrove_output_file_test";
        fs::remove_all(dir);
        fs::create_directories(dir);
    }

    void TearDown() override { fs::remove_all(dir); }
};

// ==========================================
// atomic_output_file
// ==========================================

TEST_F(CLIOutputFileTest, CommitReplacesExistingFile) {
    const fs::path target = dir / "out.txt";
    spit(target, "old");

    {
        subcalls::atomic_output_file file(target.string());
        file.stream() << "new";
        // The destination keeps its old contents until commit().
        EXPECT_EQ(slurp(target), "old");
        file.commit();
    }

    EXPECT_EQ(slurp(target), "new");
    EXPECT_EQ(entries_in(dir), 1u) << "no temporary file may be left behind";
}

TEST_F(CLIOutputFileTest, CommitCreatesMissingFile) {
    const fs::path target = dir / "fresh.txt";

    {
        subcalls::atomic_output_file file(target.string());
        file.stream() << "content";
        EXPECT_FALSE(fs::exists(target)) << "the destination appears only at commit()";
        file.commit();
    }

    EXPECT_EQ(slurp(target), "content");
    EXPECT_EQ(entries_in(dir), 1u);
}

TEST_F(CLIOutputFileTest, DroppingWithoutCommitKeepsExistingFileAndRemovesTemp) {
    const fs::path target = dir / "out.txt";
    spit(target, "old");

    {
        subcalls::atomic_output_file file(target.string());
        file.stream() << "half written";
    }  // no commit()

    EXPECT_EQ(slurp(target), "old");
    EXPECT_EQ(entries_in(dir), 1u);
}

TEST_F(CLIOutputFileTest, ExceptionBeforeCommitKeepsExistingFile) {
    const fs::path target = dir / "out.txt";
    spit(target, "old");

    EXPECT_THROW(
        {
            subcalls::atomic_output_file file(target.string());
            file.stream() << "partial";
            throw std::runtime_error("failure while writing");
        },
        std::runtime_error);

    EXPECT_EQ(slurp(target), "old");
    EXPECT_EQ(entries_in(dir), 1u);
}

TEST_F(CLIOutputFileTest, CommitThrowsWhenTheStreamFailedAndKeepsExistingFile) {
    const fs::path target = dir / "out.txt";
    spit(target, "old");

    {
        subcalls::atomic_output_file file(target.string());
        file.stream() << "data";
        file.stream().setstate(std::ios::badbit);  // as after a failed write
        EXPECT_THROW(file.commit(), std::runtime_error);
    }

    EXPECT_EQ(slurp(target), "old");
    EXPECT_EQ(entries_in(dir), 1u);
}

TEST_F(CLIOutputFileTest, OpeningInAMissingDirectoryThrows) {
    EXPECT_THROW(subcalls::atomic_output_file((dir / "missing" / "out.txt").string()),
                 std::runtime_error);
}

TEST_F(CLIOutputFileTest, BinaryModeKeepsEveryByte) {
    const fs::path target = dir / "out.bin";
    const std::string bytes("\x00\x01\n\r\xff", 5);

    {
        subcalls::atomic_output_file file(target.string(), std::ios::binary);
        file.stream().write(bytes.data(), static_cast<std::streamsize>(bytes.size()));
        file.commit();
    }

    EXPECT_EQ(slurp(target), bytes);
}

// ==========================================
// reject_output_alias
// ==========================================

TEST_F(CLIOutputFileTest, AliasRejectsTheSamePathSpelledDifferently) {
    const fs::path input = dir / "in.bed";
    spit(input, "x");
    const fs::path other_spelling = dir / "." / "in.bed";

    EXPECT_THROW(subcalls::reject_output_alias(other_spelling.string(), input.string(), "query file"),
                 std::runtime_error);
}

TEST_F(CLIOutputFileTest, AliasRejectsASymlinkToTheInput) {
    const fs::path input = dir / "in.bed";
    const fs::path link = dir / "link.bed";
    spit(input, "x");
    fs::create_symlink(input, link);

    EXPECT_THROW(subcalls::reject_output_alias(link.string(), input.string(), "target file"),
                 std::runtime_error);
}

TEST_F(CLIOutputFileTest, AliasRejectsAHardLinkToTheInput) {
    const fs::path input = dir / "in.bed";
    const fs::path link = dir / "hardlink.bed";
    spit(input, "x");
    fs::create_hard_link(input, link);

    EXPECT_THROW(subcalls::reject_output_alias(link.string(), input.string(), "index file"),
                 std::runtime_error);
}

TEST_F(CLIOutputFileTest, AliasNamesTheInputInTheMessage) {
    const fs::path input = dir / "in.bed";
    spit(input, "x");

    try {
        subcalls::reject_output_alias(input.string(), input.string(), "query file");
        FAIL() << "expected std::runtime_error";
    } catch (const std::runtime_error& e) {
        const std::string message = e.what();
        EXPECT_NE(message.find("same file as the query file"), std::string::npos) << message;
        EXPECT_NE(message.find(input.string()), std::string::npos) << message;
    }
}

TEST_F(CLIOutputFileTest, AliasAcceptsADifferentFile) {
    const fs::path input = dir / "in.bed";
    const fs::path output = dir / "out.bed";
    spit(input, "x");
    spit(output, "y");

    EXPECT_NO_THROW(subcalls::reject_output_alias(output.string(), input.string(), "query file"));
}

TEST_F(CLIOutputFileTest, AliasAcceptsAnOutputThatDoesNotExistYet) {
    const fs::path input = dir / "in.bed";
    spit(input, "x");

    EXPECT_NO_THROW(subcalls::reject_output_alias((dir / "new.bed").string(), input.string(),
                                                  "query file"));
}
