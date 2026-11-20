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
    auto grove = ggs::grove<gdt::interval, gio::bed_entry, std::string>::deserialize(in);
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
// The output file never destroys an input
// ==========================================

namespace {
std::string read_all(const fs::path& path) {
    std::ifstream in(path, std::ios::binary);
    return std::string(std::istreambuf_iterator<char>(in), std::istreambuf_iterator<char>());
}
}  // namespace

TEST_F(CLIIndexE2ETest, OutputThatIsTheInputIsRejectedAndTheInputIsKept) {
    const fs::path dir = fs::temp_directory_path() / "genogrove_idx_alias";
    fs::remove_all(dir);
    fs::create_directories(dir);
    const fs::path input = dir / "target.bed";
    fs::copy_file(target_path, input);
    const std::string before = read_all(input);

    auto result = run_command(cli(
        "idx \"" + input.string() + "\" -o \"" + input.string() + "\""
    ));

    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("same file as the input file"), std::string::npos)
        << result.output;
    EXPECT_EQ(read_all(input), before);
    fs::remove_all(dir);
}

TEST_F(CLIIndexE2ETest, OutputThatIsTheLinksFileIsRejectedAndTheLinksFileIsKept) {
    const fs::path dir = fs::temp_directory_path() / "genogrove_idx_links_alias";
    fs::remove_all(dir);
    fs::create_directories(dir);
    const fs::path links = dir / "links.tsv";
    fs::copy_file(links_path, links);
    const std::string before = read_all(links);

    auto result = run_command(cli(
        "idx \"" + links_target_path.string() + "\" --links \"" + links.string() +
        "\" -o \"" + links.string() + "\""
    ));

    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("same file as the links file"), std::string::npos)
        << result.output;
    EXPECT_EQ(read_all(links), before);
    fs::remove_all(dir);
}

TEST_F(CLIIndexE2ETest, DefaultOutputThatIsTheLinksFileIsRejectedAndTheLinksFileIsKept) {
    // Without -o the index goes to <input>.gg, which here is also the links file.
    const fs::path dir = fs::temp_directory_path() / "genogrove_idx_default_alias";
    fs::remove_all(dir);
    fs::create_directories(dir);
    const fs::path input = dir / "t.bed";
    const fs::path links = dir / "t.bed.gg";
    fs::copy_file(links_target_path, input);
    fs::copy_file(links_path, links);
    const std::string before = read_all(links);

    auto result = run_command(cli(
        "idx \"" + input.string() + "\" --links \"" + links.string() + "\""
    ));

    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("same file as the links file"), std::string::npos)
        << result.output;
    EXPECT_EQ(read_all(links), before);
    fs::remove_all(dir);
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
    auto grove = ggs::grove<gdt::interval, gio::bed_entry, std::string>::deserialize(in);
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

    auto grove = ggs::grove<gdt::interval, gio::gff_entry, std::string>::deserialize(in);
    EXPECT_EQ(grove.indexed_vertex_count(), 3u);

    // chr1:101-500 (gene1) is stored as interval [100, 499]; a query at 200
    // must return it with the original GFF payload intact.
    auto hits = grove.intersect(gdt::interval(200, 200), "chr1");
    ASSERT_EQ(hits.get_keys().size(), 1u);
    EXPECT_EQ(hits.get_keys()[0]->get_data().seqid, "chr1");
    EXPECT_EQ(hits.get_keys()[0]->get_data().type, "gene");
    EXPECT_EQ(hits.get_keys()[0]->get_data().attributes.at("ID").front(), "gene1");
    EXPECT_EQ(hits.get_keys()[0]->get_data().format, gio::gff_format::GFF3);
}

// ==========================================
// idx builds the linked model from a GTF; isec queries it
// ==========================================

TEST_F(CLIIndexE2ETest, IndexGtfBuildsLinkedModelThatIsecQueries) {
    fs::path gtf_path = fs::temp_directory_path() / "genogrove_idx_linked.gtf";
    fs::path query_path = fs::temp_directory_path() / "genogrove_idx_linked_query.bed";
    {
        std::ofstream out(gtf_path);
        out << "chr1\ttest\tgene\t101\t400\t.\t+\t.\tgene_id \"G1\";\n"
            << "chr1\ttest\ttranscript\t101\t400\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\";\n"
            << "chr1\ttest\texon\t101\t200\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\";\n"
            << "chr1\ttest\texon\t301\t400\t.\t+\t.\tgene_id \"G1\"; transcript_id \"T1\";\n";
        std::ofstream query(query_path);
        query << "chr1\t249\t251\n"     // in the intron: overlaps the transcript, no exon
              << "chr1\t899\t901\n";    // outside the gene
    }

    auto result = run_command(cli(
        "idx \"" + gtf_path.string() + "\" -o \"" + tmp_gff_output.string() + "\""
    ));
    ASSERT_EQ(result.exit_code, 0) << result.output;

    {
        std::ifstream in(tmp_gff_output, std::ios::binary);
        ASSERT_TRUE(in.is_open());
        EXPECT_EQ(gio::gg_header::read(in).payload_type, gio::gg_payload_type::GFF);
        auto grove = ggs::grove<gdt::interval, gio::gff_entry, std::string>::deserialize(in);
        EXPECT_EQ(grove.indexed_vertex_count(), 2u);   // gene + transcript
        EXPECT_EQ(grove.external_vertex_count(), 2u);  // the two exons
        EXPECT_EQ(grove.edge_count(), 3u);             // gene>transcript, transcript>exon, exon>exon

        // The exon chain is still there after the write and the read: from
        // the transcript to its first exon, then to the next one.
        auto hits = grove.intersect(gdt::interval(250, 250), "chr1");
        std::size_t transcripts_checked = 0;
        for (auto* key : hits.get_keys()) {
            if (key->get_data().type != "transcript") continue;
            ++transcripts_checked;
            const auto first = grove.get_neighbors(key);
            ASSERT_EQ(first.size(), 1u);
            EXPECT_EQ(first.front()->get_data().start, 101u);
            const auto next = grove.get_neighbors(first.front());
            ASSERT_EQ(next.size(), 1u);
            EXPECT_EQ(next.front()->get_data().start, 301u);
            EXPECT_EQ(grove.get_edges(first.front()).front(), "next_exon:T1");
        }
        EXPECT_EQ(transcripts_checked, 1u);
    }

    // The intron position finds the gene and the transcript (both 101-400),
    // read eagerly and in place. Exons are not hit directly.
    for (const std::string mode : {"", " --in-place"}) {
        auto hits = run_command(cli(
            "isec -q \"" + query_path.string() + "\" -i \"" + tmp_gff_output.string() + "\"" + mode
        ));
        EXPECT_EQ(hits.exit_code, 0) << hits.output;
        EXPECT_EQ(hits.output,
                  "chr1\t101\t400\tgene\tG1\t+\nchr1\t101\t400\ttranscript\tT1\t+\n")
            << "mode:" << mode;
    }

    // --exons: a query in the first exon, one in the intron, one in the second
    // exon (reached over the exon-to-exon edge). The same rows from the index
    // (eager and in place) and from the file as a target.
    {
        std::ofstream query(query_path);
        query << "chr1\t149\t151\n" << "chr1\t249\t251\n" << "chr1\t349\t351\n";
    }
    const std::string expected =
        "chr1\t101\t400\tgene\tG1\t+\n"
        "chr1\t101\t400\ttranscript\tT1\t+\n"
        "chr1\t101\t200\texon\tchr1:101-200:+\t+\tT1\t1\n"
        "chr1\t101\t400\tgene\tG1\t+\n"
        "chr1\t101\t400\ttranscript\tT1\t+\tintron\n"
        "chr1\t101\t400\tgene\tG1\t+\n"
        "chr1\t101\t400\ttranscript\tT1\t+\n"
        "chr1\t301\t400\texon\tchr1:301-400:+\t+\tT1\t2\n";
    for (const std::string& source : {"-i \"" + tmp_gff_output.string() + "\"",
                                     "-i \"" + tmp_gff_output.string() + "\" --in-place",
                                     "-t \"" + gtf_path.string() + "\""}) {
        auto hits = run_command(cli("isec -q \"" + query_path.string() + "\" " + source + " --exons"));
        EXPECT_EQ(hits.exit_code, 0) << hits.output;
        EXPECT_EQ(hits.output, expected) << "source:" << source;
    }

    // A BED record has no exons: --exons on a BED target or a BED index is an error.
    ASSERT_EQ(run_command(cli("idx \"" + target_path.string() + "\" -o \"" +
                              tmp_output.string() + "\"")).exit_code, 0);
    for (const std::string& source : {"-t \"" + target_path.string() + "\"",
                                      "-i \"" + tmp_output.string() + "\""}) {
        auto refused = run_command(cli("isec -q \"" + query_path.string() + "\" " + source + " --exons"));
        EXPECT_NE(refused.exit_code, 0) << "source:" << source;
        EXPECT_NE(refused.output.find("--exons needs a GFF/GTF"), std::string::npos)
            << refused.output;
    }

    fs::remove(gtf_path);
    fs::remove(query_path);
}

TEST_F(CLIIndexE2ETest, IsecRejectsAFlatGffIndex) {
    // A flat GFF index (payload type 2) has the same stream types as the linked
    // model. isec must stop on the header instead of misreading it.
    auto result = run_command(cli(
        "idx \"" + gff_target_path.string() + "\" -o \"" + tmp_gff_output.string() + "\""
    ));
    ASSERT_EQ(result.exit_code, 0) << result.output;
    {
        std::fstream file(tmp_gff_output, std::ios::binary | std::ios::in | std::ios::out);
        ASSERT_TRUE(file.is_open());
        file.seekp(9);
        file.put(static_cast<char>(0x02));
    }

    auto hits = run_command(cli(
        "isec -q \"" + target_path.string() + "\" -i \"" + tmp_gff_output.string() + "\""
    ));
    EXPECT_NE(hits.exit_code, 0);
    EXPECT_NE(hits.output.find("re-create the index"), std::string::npos) << hits.output;
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
    // links.tsv has two rows, so --links reports two distinct edges.
    EXPECT_NE(result.output.find("Added 2 graph edges"), std::string::npos) << result.output;

    std::ifstream in(tmp_links_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    (void)gio::gg_header::read(in);
    auto grove = ggs::grove<gdt::interval, gio::bed_entry, std::string>::deserialize(in);

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

TEST_F(CLIIndexE2ETest, IndexWithLinksAttachesEdgeMetadata) {
    // An optional 3rd TSV column is stored as the edge's metadata and must
    // survive the serialize -> deserialize round-trip.
    fs::path meta_links = fs::temp_directory_path() / "genogrove_idx_meta_links.tsv";
    {
        std::ofstream out(meta_links);
        out << "geneA\tgeneB\tsupports_isoform=ENST1\n"  // edge with metadata
            << "geneB\tgeneC\n";                          // edge without
    }

    auto result = run_command(cli(
        "idx \"" + links_target_path.string() + "\" --links \"" + meta_links.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;

    std::ifstream in(tmp_links_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    (void)gio::gg_header::read(in);
    auto grove = ggs::grove<gdt::interval, gio::bed_entry, std::string>::deserialize(in);

    auto a_hits = grove.intersect(gdt::interval(300, 300), "chr1");
    auto b_hits = grove.intersect(gdt::interval(700, 700), "chr1");
    ASSERT_EQ(a_hits.get_keys().size(), 1u);
    ASSERT_EQ(b_hits.get_keys().size(), 1u);
    auto* geneA = a_hits.get_keys()[0];
    auto* geneB = b_hits.get_keys()[0];

    // geneA -> geneB carries the metadata; geneB -> geneC has default (empty).
    auto a_edges = grove.get_edges(geneA);
    ASSERT_EQ(a_edges.size(), 1u);
    EXPECT_EQ(a_edges[0], "supports_isoform=ENST1");
    auto b_edges = grove.get_edges(geneB);
    ASSERT_EQ(b_edges.size(), 1u);
    EXPECT_EQ(b_edges[0], "");

    fs::remove(meta_links);
}

TEST_F(CLIIndexE2ETest, IndexWithLinksSamePairDifferentMetadataKeepsBoth) {
    // The dedup key includes metadata, so one pair with two distinct metadata
    // values yields two parallel edges (not a collapsed duplicate).
    fs::path multi_links = fs::temp_directory_path() / "genogrove_idx_multi_meta.tsv";
    {
        std::ofstream out(multi_links);
        out << "geneA\tgeneB\tevidence=hic\n"
            << "geneA\tgeneB\tevidence=chia\n";
    }

    auto result = run_command(cli(
        "idx \"" + links_target_path.string() + "\" --links \"" + multi_links.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;

    std::ifstream in(tmp_links_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    (void)gio::gg_header::read(in);
    auto grove = ggs::grove<gdt::interval, gio::bed_entry, std::string>::deserialize(in);

    auto a_hits = grove.intersect(gdt::interval(300, 300), "chr1");
    ASSERT_EQ(a_hits.get_keys().size(), 1u);
    EXPECT_EQ(grove.out_degree(a_hits.get_keys()[0]), 2u);

    fs::remove(multi_links);
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
    auto grove = ggs::grove<gdt::interval, gio::bed_entry, std::string>::deserialize(in);

    auto a_hits = grove.intersect(gdt::interval(300, 300), "chr1");
    ASSERT_EQ(a_hits.get_keys().size(), 1u);
    auto* geneA = a_hits.get_keys()[0];
    EXPECT_EQ(grove.out_degree(geneA), 1u);  // not 2

    fs::remove(dup_edge_links);
}

TEST_F(CLIIndexE2ETest, IndexGffLinksAddsGraphEdges) {
    // target.gff records carry ID=gene1/gene2/gene3; link them by that tag.
    fs::path gff_links = fs::temp_directory_path() / "genogrove_idx_gff_links.tsv";
    {
        std::ofstream out(gff_links);
        out << "ID:ID\tgene1\tgene2\n"
            << "ID:ID\tgene2\tgene3\n";  // gene3 is on chr2 — cross-chromosome edge
    }

    auto result = run_command(cli(
        "idx \"" + gff_target_path.string() + "\" --links \"" + gff_links.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    ASSERT_TRUE(fs::exists(tmp_links_output));

    std::ifstream in(tmp_links_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    (void)gio::gg_header::read(in);
    auto grove = ggs::grove<gdt::interval, gio::gff_entry, std::string>::deserialize(in);

    // gene1: chr1 [101,500]; gene2: chr1 [601,900]; gene3: chr2 [201,400].
    auto g1 = grove.intersect(gdt::interval(300, 300), "chr1");
    auto g2 = grove.intersect(gdt::interval(700, 700), "chr1");
    auto g3 = grove.intersect(gdt::interval(300, 300), "chr2");
    ASSERT_EQ(g1.get_keys().size(), 1u);
    ASSERT_EQ(g2.get_keys().size(), 1u);
    ASSERT_EQ(g3.get_keys().size(), 1u);
    auto* gene1 = g1.get_keys()[0];
    auto* gene2 = g2.get_keys()[0];
    auto* gene3 = g3.get_keys()[0];

    EXPECT_TRUE(grove.has_edge(gene1, gene2));
    EXPECT_TRUE(grove.has_edge(gene2, gene3));
    EXPECT_FALSE(grove.has_edge(gene1, gene3));
    EXPECT_FALSE(grove.has_edge(gene2, gene1));  // directed

    fs::remove(gff_links);
}

TEST_F(CLIIndexE2ETest, IndexGffLinksWithoutTagColumnFails) {
    // links.tsv has BED rows (nameA, nameB): a GFF index needs the tag column.
    auto result = run_command(cli(
        "idx \"" + gff_target_path.string() + "\" --links \"" + links_path.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("needs the tag column"), std::string::npos) << result.output;
    EXPECT_FALSE(fs::exists(tmp_links_output));
}

TEST_F(CLIIndexE2ETest, IndexGffLinksUnknownOrAmbiguousNameFails) {
    // Two genes share Name=dup, so that value names no single record.
    fs::path dup_gff = fs::temp_directory_path() / "genogrove_idx_gff_dup.gff";
    {
        std::ofstream out(dup_gff);
        out << "##gff-version 3\n"
            << "chr1\tt\tgene\t101\t500\t.\t+\t.\tID=g1;Name=dup\n"
            << "chr1\tt\tgene\t601\t900\t.\t-\t.\tID=g2;Name=dup\n";
    }
    fs::path some_links = fs::temp_directory_path() / "genogrove_idx_gff_dup_links.tsv";
    const auto idx_with = [&](const std::string& rows) {
        {
            std::ofstream out(some_links);
            out << rows;
        }
        return run_command(cli("idx \"" + dup_gff.string() + "\" --links \"" +
                               some_links.string() + "\" -o \"" + tmp_links_output.string() + "\""));
    };

    auto result = idx_with("# a comment\nID:Name\tg1\tdup\n");
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("line 2: more than one record has Name 'dup'"),
              std::string::npos) << result.output;
    EXPECT_FALSE(fs::exists(tmp_links_output));

    result = idx_with("ID:ID\tg1\tg9\n");
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("line 1: no record has ID 'g9'"), std::string::npos)
        << result.output;
    EXPECT_FALSE(fs::exists(tmp_links_output));

    // The ambiguous value does not stop a file that does not name it.
    result = idx_with("ID:ID\tg1\tg2\n");
    EXPECT_EQ(result.exit_code, 0) << result.output;

    fs::remove(dup_gff);
    fs::remove(some_links);
}

TEST_F(CLIIndexE2ETest, IndexGffNameTagOptionIsGone) {
    // The tags are in the links file now.
    auto result = run_command(cli(
        "idx \"" + links_target_path.string() + "\" --links \"" + links_path.string() +
        "\" --gff-name-tag ID -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("gff-name-tag"), std::string::npos) << result.output;
}

// ==========================================
// Validation error: missing input file
// ==========================================

TEST_F(CLIIndexE2ETest, IndexMissingInputFails) {
    auto result = run_command(cli("idx /nonexistent/path.bed"));
    EXPECT_NE(result.exit_code, 0);
    EXPECT_NE(result.output.find("does not exist"), std::string::npos);
}

// ==========================================
// Top-level CLI: --version and clean arg-error handling (#485)
// ==========================================

TEST_F(CLIIndexE2ETest, VersionFlagPrintsVersionAndExitsZero) {
    auto result = run_command(cli("--version"));
    EXPECT_EQ(result.exit_code, 0) << result.output;
    // Prints "genogrove <major>.<minor>.<patch>".
    EXPECT_NE(result.output.find("genogrove "), std::string::npos) << result.output;
    EXPECT_NE(result.output.find('.'), std::string::npos) << result.output;
}

TEST_F(CLIIndexE2ETest, InvalidOptionValueFailsCleanly) {
    // Regression for #485: a non-integer -k used to throw an uncaught cxxopts
    // exception during subcommand parsing and abort via std::terminate (which
    // pclose reports as a non-normal exit, exit_code -1). It must now be caught
    // and reported as a clean exit 1.
    auto result = run_command(cli("idx \"" + target_path.string() + "\" -k notanumber"));
    EXPECT_EQ(result.exit_code, 1) << result.output;
}

TEST_F(CLIIndexE2ETest, IndexEmptyInputProducesDeserializableIndex) {
    // An empty (0-record) BED is a valid input: idx must succeed and write a
    // deserializable .gg. Proven by then querying it in place (isec -i), which
    // deserializes the index and returns no overlaps.
    fs::path empty_bed = fs::temp_directory_path() / "genogrove_idx_empty.bed";
    { std::ofstream out(empty_bed); }  // zero bytes

    auto idx_result = run_command(cli(
        "idx \"" + empty_bed.string() + "\" -o \"" + tmp_output.string() + "\""
    ));
    ASSERT_EQ(idx_result.exit_code, 0) << idx_result.output;  // fail fast; don't isec a stale index
    ASSERT_TRUE(fs::exists(tmp_output));

    auto isec_result = run_command(cli(
        "isec -q \"" + target_path.string() + "\" -i \"" + tmp_output.string() + "\""
    ));
    EXPECT_EQ(isec_result.exit_code, 0) << isec_result.output;  // deserializes cleanly, no overlaps

    fs::remove(empty_bed);
}

TEST_F(CLIIndexE2ETest, IndexWithLinksSkipsUnnamedBedRecords) {
    // BED records without column 4 are left out of the name map: they still
    // index, but no link row can name them. A named pair around an unnamed
    // record links fine; a row that tries to reach the unnamed record fails.
    fs::path mixed_bed = fs::temp_directory_path() / "genogrove_idx_mixed_names.bed";
    {
        std::ofstream out(mixed_bed);
        out << "chr1\t100\t500\tgeneA\t0\t+\n"
            << "chr1\t600\t900\n"                   // BED3: no name
            << "chr2\t200\t400\tgeneC\t0\t+\n";
    }
    fs::path ok_links = fs::temp_directory_path() / "genogrove_idx_mixed_ok.tsv";
    { std::ofstream out(ok_links); out << "geneA\tgeneC\n"; }

    auto result = run_command(cli(
        "idx \"" + mixed_bed.string() + "\" --links \"" + ok_links.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_EQ(result.exit_code, 0) << result.output;

    std::ifstream in(tmp_links_output, std::ios::binary);
    ASSERT_TRUE(in.is_open());
    (void)gio::gg_header::read(in);
    auto grove = ggs::grove<gdt::interval, gio::bed_entry, std::string>::deserialize(in);

    auto a_hits = grove.intersect(gdt::interval(300, 300), "chr1");
    auto unnamed_hits = grove.intersect(gdt::interval(700, 700), "chr1");
    auto c_hits = grove.intersect(gdt::interval(300, 300), "chr2");
    ASSERT_EQ(a_hits.get_keys().size(), 1u);
    ASSERT_EQ(unnamed_hits.get_keys().size(), 1u);  // indexed despite having no name
    ASSERT_EQ(c_hits.get_keys().size(), 1u);
    EXPECT_FALSE(unnamed_hits.get_keys()[0]->get_data().name.has_value());
    EXPECT_TRUE(grove.has_edge(a_hits.get_keys()[0], c_hits.get_keys()[0]));
    EXPECT_EQ(grove.out_degree(unnamed_hits.get_keys()[0]), 0u);
    EXPECT_EQ(grove.in_degree(unnamed_hits.get_keys()[0]), 0u);
    EXPECT_EQ(grove.edge_count(), 1u);

    // The unnamed record cannot be a link endpoint under any name.
    fs::path bad_links = fs::temp_directory_path() / "genogrove_idx_mixed_bad.tsv";
    { std::ofstream out(bad_links); out << "geneA\tgeneB\n"; }
    auto bad = run_command(cli(
        "idx \"" + mixed_bed.string() + "\" --links \"" + bad_links.string() +
        "\" -o \"" + tmp_links_output.string() + "\""
    ));
    EXPECT_NE(bad.exit_code, 0);
    EXPECT_NE(bad.output.find("'geneB' which is not present"), std::string::npos) << bad.output;

    fs::remove(mixed_bed);
    fs::remove(ok_links);
    fs::remove(bad_links);
}
