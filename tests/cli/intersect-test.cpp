// gtest
#include <gtest/gtest.h>

// standard
#include <filesystem>
#include <fstream>
#include <sstream>

// genogrove
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/bed_reader.hpp>

// cli
#include <handlers/bed.hpp>
#include <subcalls/intersect.hpp>

namespace fs = std::filesystem;
namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

// ==========================================
// Test Fixture
// ==========================================

class CLIIntersectTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path target_path;
    fs::path query_path;
    fs::path tmp_output;

    void SetUp() override {
        test_data_dir = fs::current_path() / "cli" / "data";
        target_path = test_data_dir / "target.bed";
        query_path = test_data_dir / "query.bed";
        tmp_output = fs::temp_directory_path() / "genogrove_cli_test_output.bed";
    }

    void TearDown() override {
        if(fs::exists(tmp_output)) {
            fs::remove(tmp_output);
        }
    }

    // Helper to parse cxxopts arguments from a vector of strings
    cxxopts::ParseResult parse_intersect_args(std::vector<std::string> args_vec) {
        subcalls::intersect isec;
        // Build argc/argv from string vector
        std::vector<char*> argv;
        for(auto& s : args_vec) {
            argv.push_back(s.data());
        }
        int argc = static_cast<int>(argv.size());
        auto options = isec.parse_args(argc, argv.data());
        return options.parse(argc, argv.data());
    }
};

// ==========================================
// Handler Tests
// ==========================================

TEST_F(CLIIntersectTest, GroveInsert) {
    ggs::grove<gdt::interval, gio::bed_entry> grove(3);
    handlers::bed::grove_insert(grove, target_path.string());

    // Verify chr1 entries: query with a wide interval covering all of chr1
    gdt::interval query_chr1(0, 10000);
    auto results = grove.intersect(query_chr1, "chr1");
    EXPECT_EQ(results.get_keys().size(), 2); // chr1:100-500 and chr1:600-900

    // Verify chr2 entries
    gdt::interval query_chr2(0, 10000);
    auto results_chr2 = grove.intersect(query_chr2, "chr2");
    EXPECT_EQ(results_chr2.get_keys().size(), 1); // chr2:200-400
}

TEST_F(CLIIntersectTest, GroveIntersect) {
    ggs::grove<gdt::interval, gio::bed_entry> grove(3);
    handlers::bed::grove_insert(grove, target_path.string());

    std::ostringstream output;
    handlers::bed::grove_intersect(grove, query_path.string(), output);

    std::string result = output.str();

    // chr1:150-250 overlaps chr1:100-500
    EXPECT_NE(result.find("chr1\t100\t500"), std::string::npos);

    // chr1:850-950 overlaps chr1:600-900
    EXPECT_NE(result.find("chr1\t600\t900"), std::string::npos);

    // chr2:500-600 does NOT overlap chr2:200-400
    EXPECT_EQ(result.find("chr2"), std::string::npos);
}

TEST_F(CLIIntersectTest, GroveIntersectOutputFormat) {
    ggs::grove<gdt::interval, gio::bed_entry> grove(3);
    handlers::bed::grove_insert(grove, target_path.string());

    std::ostringstream output;
    handlers::bed::grove_intersect(grove, query_path.string(), output);

    // Each line should be tab-separated: chrom\tstart\tend\n
    std::istringstream iss(output.str());
    std::string line;
    while(std::getline(iss, line)) {
        if(line.empty()) continue;
        // Count tabs
        int tab_count = 0;
        for(char c : line) {
            if(c == '\t') tab_count++;
        }
        EXPECT_EQ(tab_count, 2) << "Line should have exactly 2 tabs: " << line;
    }
}

TEST_F(CLIIntersectTest, GroveIntersectNoOverlaps) {
    // Create a grove with entries that don't overlap the query
    ggs::grove<gdt::interval, gio::bed_entry> grove(3);

    // Insert an interval that won't overlap with any query entries
    gio::bed_entry entry;
    entry.chrom = "chr3";
    entry.interval = gdt::interval(10000, 20000);
    grove.insert_data(entry.chrom, entry.interval, entry);

    std::ostringstream output;
    handlers::bed::grove_intersect(grove, query_path.string(), output);

    EXPECT_TRUE(output.str().empty());
}

// ==========================================
// Argument Parsing Tests
// ==========================================

TEST_F(CLIIntersectTest, ParseArgsNamed) {
    auto args = parse_intersect_args({
        "intersect", "-q", query_path.string(), "-t", target_path.string()
    });

    EXPECT_EQ(args["queryfile"].as<std::string>(), query_path.string());
    EXPECT_EQ(args["targetfile"].as<std::string>(), target_path.string());
    EXPECT_EQ(args["outputfile"].as<std::string>(), "stdout");
    EXPECT_EQ(args["order"].as<int>(), 3);
}

TEST_F(CLIIntersectTest, ParseArgsPositional) {
    auto args = parse_intersect_args({
        "intersect", query_path.string(), target_path.string()
    });

    EXPECT_EQ(args["queryfile"].as<std::string>(), query_path.string());
    EXPECT_EQ(args["targetfile"].as<std::string>(), target_path.string());
}

TEST_F(CLIIntersectTest, ParseArgsWithOrder) {
    auto args = parse_intersect_args({
        "intersect", "-q", query_path.string(), "-t", target_path.string(), "-k", "5"
    });

    EXPECT_EQ(args["order"].as<int>(), 5);
}

TEST_F(CLIIntersectTest, ParseArgsWithOutputFile) {
    auto args = parse_intersect_args({
        "intersect", "-q", query_path.string(), "-t", target_path.string(),
        "-o", tmp_output.string()
    });

    EXPECT_EQ(args["outputfile"].as<std::string>(), tmp_output.string());
}

// ==========================================
// Validation Death Tests
// ==========================================

TEST_F(CLIIntersectTest, ValidateMissingQueryfile) {
    EXPECT_EXIT(
        {
            auto args = parse_intersect_args({"intersect", "-t", target_path.string()});
            subcalls::intersect isec;
            isec.validate(args);
        },
        ::testing::ExitedWithCode(1),
        "queryfile is required"
    );
}

TEST_F(CLIIntersectTest, ValidateMissingTargetfile) {
    EXPECT_EXIT(
        {
            auto args = parse_intersect_args({"intersect", "-q", query_path.string()});
            subcalls::intersect isec;
            isec.validate(args);
        },
        ::testing::ExitedWithCode(1),
        "targetfile is required"
    );
}

TEST_F(CLIIntersectTest, ValidateNonexistentQueryfile) {
    EXPECT_EXIT(
        {
            auto args = parse_intersect_args({
                "intersect", "-q", "/nonexistent/path.bed", "-t", target_path.string()
            });
            subcalls::intersect isec;
            isec.validate(args);
        },
        ::testing::ExitedWithCode(1),
        "File does not exist"
    );
}

TEST_F(CLIIntersectTest, ValidateNonexistentTargetfile) {
    EXPECT_EXIT(
        {
            auto args = parse_intersect_args({
                "intersect", "-q", query_path.string(), "-t", "/nonexistent/path.bed"
            });
            subcalls::intersect isec;
            isec.validate(args);
        },
        ::testing::ExitedWithCode(1),
        "File does not exist"
    );
}

TEST_F(CLIIntersectTest, ValidateInvalidOrder) {
    EXPECT_EXIT(
        {
            auto args = parse_intersect_args({
                "intersect", "-q", query_path.string(), "-t", target_path.string(), "-k", "1"
            });
            subcalls::intersect isec;
            isec.validate(args);
        },
        ::testing::ExitedWithCode(1),
        "Order must be at least 2"
    );
}

TEST_F(CLIIntersectTest, ValidateValidArgs) {
    auto args = parse_intersect_args({
        "intersect", "-q", query_path.string(), "-t", target_path.string()
    });
    subcalls::intersect isec;
    // Should not throw or exit
    EXPECT_NO_FATAL_FAILURE(isec.validate(args));
}

// ==========================================
// Output File Test
// ==========================================

TEST_F(CLIIntersectTest, OutputToFile) {
    // Build grove and intersect, writing to file
    ggs::grove<gdt::interval, gio::bed_entry> grove(3);
    handlers::bed::grove_insert(grove, target_path.string());

    {
        std::ofstream ofs(tmp_output);
        ASSERT_TRUE(ofs.is_open());
        handlers::bed::grove_intersect(grove, query_path.string(), ofs);
    }

    // Read back and verify
    ASSERT_TRUE(fs::exists(tmp_output));
    std::ifstream ifs(tmp_output);
    std::string content((std::istreambuf_iterator<char>(ifs)),
                         std::istreambuf_iterator<char>());

    EXPECT_NE(content.find("chr1\t100\t500"), std::string::npos);
    EXPECT_NE(content.find("chr1\t600\t900"), std::string::npos);
    EXPECT_EQ(content.find("chr2"), std::string::npos);
}
