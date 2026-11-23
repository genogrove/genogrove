/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Direct in-process tests for handlers::gff — the GFF/GTF counterpart of
// intersect-test.cpp's handlers::bed coverage. The e2e tests in
// index-e2e-test.cpp exercise the same paths through a subprocess; these give
// a direct assertion and stack trace instead of stdout string matching.

// gtest
#include <gtest/gtest.h>

// standard
#include <filesystem>
#include <fstream>
#include <sstream>
#include <string>
#include <string_view>
#include <utility>
#include <vector>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/io/gff_reader.hpp>
#include <genogrove/structure/grove/grove.hpp>

// cli
#include <handlers/gff.hpp>
#include <handlers/links.hpp>

namespace fs = std::filesystem;
namespace gdt = genogrove::data_type;
namespace ggs = genogrove::structure;
namespace gio = genogrove::io;

namespace {
using gff_grove = ggs::grove<gdt::interval, gio::gff_entry, std::string>;

void write_file(const fs::path& p, const std::string& content) {
    std::ofstream out(p);
    out << content;
}
} // namespace

// ==========================================
// Test Fixture
// ==========================================

class CLIGffHandlerTest : public ::testing::Test {
protected:
    fs::path test_data_dir;
    fs::path target_path;  // target.gff: gene1 chr1 101-500, gene2 chr1 601-900, gene3 chr2 201-400
    fs::path tmp_gff;
    fs::path tmp_links;

    void SetUp() override {
        test_data_dir = fs::current_path() / "cli" / "data";
        target_path = test_data_dir / "target.gff";
        tmp_gff = fs::temp_directory_path() / "genogrove_cli_gff_test.gff";
        tmp_links = fs::temp_directory_path() / "genogrove_cli_gff_test_links.tsv";
        ASSERT_TRUE(fs::exists(target_path)) << target_path;
    }

    void TearDown() override {
        for (const auto& p : {tmp_gff, tmp_links}) {
            if (fs::exists(p)) {
                fs::remove(p);
            }
        }
    }
};

// ==========================================
// grove_insert: coordinate conversion
// ==========================================

TEST_F(CLIGffHandlerTest, GroveInsertConvertsOneBasedToZeroBasedInclusive) {
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, target_path.string());

    // gene1 is GFF [101, 500] (1-based inclusive) -> interval [100, 499].
    EXPECT_EQ(grove.intersect(gdt::interval(100, 100), "chr1").get_keys().size(), 1u);
    EXPECT_EQ(grove.intersect(gdt::interval(499, 499), "chr1").get_keys().size(), 1u);
    EXPECT_EQ(grove.intersect(gdt::interval(99, 99), "chr1").get_keys().size(), 0u);
    // [500, 500] lies between gene1 ([100,499]) and gene2 ([600,899]).
    EXPECT_EQ(grove.intersect(gdt::interval(500, 500), "chr1").get_keys().size(), 0u);

    // The stored payload keeps the raw 1-based GFF coordinates for printing.
    auto hits = grove.intersect(gdt::interval(100, 100), "chr1");
    ASSERT_EQ(hits.get_keys().size(), 1u);
    const auto& payload = hits.get_keys()[0]->get_data();
    EXPECT_EQ(payload.start, 101u);
    EXPECT_EQ(payload.end, 500u);
}

TEST_F(CLIGffHandlerTest, GroveInsertPerIndexCounts) {
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, target_path.string());

    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr1").get_keys().size(), 2u);
    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr2").get_keys().size(), 1u);
    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr3").get_keys().size(), 0u);
}

TEST_F(CLIGffHandlerTest, GroveInsertSortsUnorderedInput) {
    // The builder sorts the indexed keys itself, so a file that is not ordered
    // by position gives the same index as an ordered one.
    write_file(tmp_gff,
               "##gff-version 3\n"
               "chr1\ttest\tgene\t601\t900\t.\t-\t.\tID=gene2\n"
               "chr2\ttest\tgene\t201\t400\t.\t+\t.\tID=gene3\n"
               "chr1\ttest\tgene\t101\t500\t.\t+\t.\tID=gene1\n");
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr1").get_keys().size(), 2u);
    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr2").get_keys().size(), 1u);
    auto hits = grove.intersect(gdt::interval(100, 100), "chr1");
    ASSERT_EQ(hits.get_keys().size(), 1u);
    EXPECT_EQ(hits.get_keys()[0]->get_data().attributes.at("ID").front(), "gene1");
}

// ==========================================
// iterate_query / print_gff_result
// ==========================================

TEST_F(CLIGffHandlerTest, IterateQueryConvertsCoordinates) {
    write_file(tmp_gff,
               "##gff-version 3\n"
               "chr1\ttest\texon\t151\t250\t.\t+\t.\tID=q1\n"
               "chr2\ttest\texon\t1\t1\t.\t+\t.\tID=q2\n");
    std::vector<std::pair<std::string, gdt::interval>> seen;
    handlers::gff::iterate_query(tmp_gff.string(),
        [&](gdt::interval iv, const std::string& index) { seen.emplace_back(index, iv); });

    ASSERT_EQ(seen.size(), 2u);
    EXPECT_EQ(seen[0].first, "chr1");
    EXPECT_EQ(seen[0].second, gdt::interval(150, 249));
    EXPECT_EQ(seen[1].first, "chr2");
    EXPECT_EQ(seen[1].second, gdt::interval(0, 0));  // 1-based [1,1] -> [0,0]
}

TEST_F(CLIGffHandlerTest, PrintGffResultWritesRawFieldsWithoutNewline) {
    gio::gff_entry entry;
    entry.seqid = "chr1";
    entry.start = 101;
    entry.end = 500;
    entry.type = "gene";
    entry.strand = '-';
    entry.format = gio::gff_format::GTF;
    entry.attributes["gene_id"] = {"G1"};
    std::ostringstream out;
    handlers::gff::print_gff_result(out, entry);
    EXPECT_EQ(out.str(), "chr1\t101\t500\tgene\tG1\t-");

    // No id and no strand: a "." each.
    gio::gff_entry bare;
    bare.seqid = "chr1";
    bare.start = 1;
    bare.end = 2;
    bare.type = "region";
    std::ostringstream bare_out;
    handlers::gff::print_gff_result(bare_out, bare);
    EXPECT_EQ(bare_out.str(), "chr1\t1\t2\tregion\t.\t.");
}

TEST_F(CLIGffHandlerTest, RecordIdIsTheIdOfTheRecordItself) {
    gio::gff_entry entry;
    entry.format = gio::gff_format::GTF;
    entry.attributes["gene_id"] = {"G1"};
    entry.attributes["transcript_id"] = {"T1"};
    entry.type = "gene";
    EXPECT_EQ(handlers::gff::record_id(entry), "G1");
    entry.type = "transcript";
    EXPECT_EQ(handlers::gff::record_id(entry), "T1");
    // A GTF line of another type carries the id of its transcript, not its own.
    entry.type = "Selenocysteine";
    EXPECT_EQ(handlers::gff::record_id(entry), ".");

    // GFF3: the ID, whatever the type.
    entry.format = gio::gff_format::GFF3;
    entry.attributes["ID"] = {"sec1"};
    EXPECT_EQ(handlers::gff::record_id(entry), "sec1");

    entry.type = "exon";
    entry.attributes["exon_id"] = {"E1", "E9"};
    EXPECT_EQ(handlers::gff::record_id(entry), "E1,E9");
    entry.attributes["exon_id"] = {};
    EXPECT_EQ(handlers::gff::record_id(entry), ".");
}

// ==========================================
// grove_insert: the linked model
// ==========================================

namespace {

using key_ptr = gdt::key<gdt::interval, gio::gff_entry>*;

// One GTF line. `attributes` is the text of column 9.
std::string gtf(const std::string& type, int start, int end, char strand,
                const std::string& attributes, const std::string& phase = ".") {
    return "chr1\ttest\t" + type + "\t" + std::to_string(start) + "\t" + std::to_string(end) +
           "\t.\t" + std::string(1, strand) + "\t" + phase + "\t" + attributes + "\n";
}

std::string ids(const std::string& gene, const std::string& transcript = "",
                const std::string& exon = "") {
    std::string out = "gene_id \"" + gene + "\";";
    if (!transcript.empty()) out += " transcript_id \"" + transcript + "\";";
    if (!exon.empty()) out += " exon_id \"" + exon + "\";";
    return out;
}

// The one indexed key on chr1 of the given type whose `tag` attribute is `value`.
key_ptr find_key(gff_grove& grove, const std::string& type, const std::string& tag,
                 const std::string& value) {
    auto hits = grove.intersect(gdt::interval(0, 1000000), "chr1");
    for (auto* key : hits.get_keys()) {
        const auto& record = key->get_data();
        const auto it = record.attributes.find(tag);
        if (record.type == type && it != record.attributes.end() && it->second.front() == value) {
            return key;
        }
    }
    return nullptr;
}

// Follow one transcript from its first exon: at each exon take the edge whose
// list names the transcript. Returns the exon_id of every exon on the way.
std::vector<std::string> walk_exons(gff_grove& grove, key_ptr transcript, const std::string& id) {
    std::vector<std::string> path;
    key_ptr current = nullptr;
    {
        const auto targets = grove.get_neighbors(transcript);
        const auto labels = grove.get_edges(transcript);
        for (std::size_t i = 0; i < targets.size(); ++i) {
            if (labels[i] == std::string(handlers::gff::edge_first_prefix) + id) current = targets[i];
        }
    }
    while (current != nullptr) {
        if (path.size() > 100) {  // a chain that comes back to an exon would never end
            ADD_FAILURE() << "the exon chain of " << id << " does not end";
            break;
        }
        path.push_back(current->get_data().attributes.at("exon_id").front());
        const auto targets = grove.get_neighbors(current);
        const auto labels = grove.get_edges(current);
        current = nullptr;
        for (std::size_t i = 0; i < targets.size(); ++i) {
            if (handlers::gff::next_edge_lists(labels[i], id)) current = targets[i];
        }
    }
    return path;
}

// Gene G1 with T1 (exons E1, E2, E3) and T2 (exons E1, E3): E1 and E3 are shared.
std::string two_transcripts() {
    return gtf("gene", 101, 900, '+', ids("G1")) +
           gtf("transcript", 101, 900, '+', ids("G1", "T1")) +
           gtf("exon", 101, 200, '+', ids("G1", "T1", "E1") + " exon_number \"1\";") +
           gtf("exon", 301, 400, '+', ids("G1", "T1", "E2") + " exon_number \"2\";") +
           gtf("exon", 801, 900, '+', ids("G1", "T1", "E3") + " exon_number \"3\";") +
           gtf("transcript", 101, 900, '+', ids("G1", "T2")) +
           gtf("exon", 101, 200, '+', ids("G1", "T2", "E1") + " exon_number \"1\";") +
           gtf("exon", 801, 900, '+', ids("G1", "T2", "E3") + " exon_number \"2\";");
}

} // namespace

TEST_F(CLIGffHandlerTest, LinkedModelIndexesGenesAndTranscriptsAndSharesExons) {
    write_file(tmp_gff, two_transcripts());
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    EXPECT_EQ(grove.indexed_vertex_count(), 3u);   // G1, T1, T2
    EXPECT_EQ(grove.external_vertex_count(), 3u);  // E1, E2, E3: five exon lines

    // A position inside exon E2 finds the gene and both transcripts, not the exon.
    auto hits = grove.intersect(gdt::interval(350, 350), "chr1");
    EXPECT_EQ(hits.get_keys().size(), 3u);

    auto* gene = find_key(grove, "gene", "gene_id", "G1");
    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    auto* t2 = find_key(grove, "transcript", "transcript_id", "T2");
    ASSERT_NE(gene, nullptr);
    ASSERT_NE(t1, nullptr);
    ASSERT_NE(t2, nullptr);

    // gene -> transcript, one edge each.
    EXPECT_TRUE(grove.has_edge(gene, t1));
    EXPECT_TRUE(grove.has_edge(gene, t2));
    for (const auto& label : grove.get_edges(gene)) { EXPECT_EQ(label, handlers::gff::edge_transcript); }

    EXPECT_EQ(walk_exons(grove, t1, "T1"), (std::vector<std::string>{"E1", "E2", "E3"}));
    EXPECT_EQ(walk_exons(grove, t2, "T2"), (std::vector<std::string>{"E1", "E3"}));

    // 2 gene edges + 2 first-exon edges + junctions E1>E2, E2>E3 (T1) and E1>E3 (T2).
    EXPECT_EQ(grove.edge_count(), 7u);
}

TEST_F(CLIGffHandlerTest, LinkedModelSharedJunctionListsItsTranscripts) {
    // T3 has the same exons as T1, so each of T1's junctions is one edge for both.
    write_file(tmp_gff, two_transcripts() +
               gtf("transcript", 101, 900, '+', ids("G1", "T3")) +
               gtf("exon", 101, 200, '+', ids("G1", "T3", "E1")) +
               gtf("exon", 301, 400, '+', ids("G1", "T3", "E2")) +
               gtf("exon", 801, 900, '+', ids("G1", "T3", "E3")));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);
    const auto first = grove.get_neighbors(t1);
    ASSERT_EQ(first.size(), 1u);
    std::vector<std::string> labels = grove.get_edges(first.front());
    std::ranges::sort(labels);
    EXPECT_EQ(labels, (std::vector<std::string>{"next:T1,T3", "next:T2"}));
    EXPECT_EQ(grove.get_edges(t1), (std::vector<std::string>{"first:T1"}));
    EXPECT_EQ(grove.external_vertex_count(), 3u);
}

TEST_F(CLIGffHandlerTest, LinkedModelSharedExonRecordKeepsOnlyWhatItsLinesAgreeOn) {
    write_file(tmp_gff, two_transcripts());
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);
    const auto first = grove.get_neighbors(t1);
    ASSERT_EQ(first.size(), 1u);
    const auto& shared = first.front()->get_data();  // E1: exon 1 of T1 and of T2
    EXPECT_EQ(shared.attributes.at("exon_id").front(), "E1");
    EXPECT_EQ(shared.attributes.at("gene_id").front(), "G1");
    EXPECT_FALSE(shared.attributes.contains("transcript_id"));

    // E3 is exon 3 of T1 and exon 2 of T2: the lines disagree on exon_number.
    const auto last = grove.get_neighbors(first.front());
    for (auto* exon : last) {
        if (exon->get_data().attributes.at("exon_id").front() == "E3") {
            EXPECT_FALSE(exon->get_data().attributes.contains("exon_number"));
        }
        // An exon of one transcript drops transcript_id too: the link says it.
        EXPECT_FALSE(exon->get_data().attributes.contains("transcript_id"));
    }
}

TEST_F(CLIGffHandlerTest, LinkedModelChainRunsFivePrimeToThreePrimeOnTheMinusStrand) {
    write_file(tmp_gff,
               gtf("gene", 101, 900, '-', ids("G1")) +
               gtf("transcript", 101, 900, '-', ids("G1", "T1")) +
               gtf("exon", 101, 200, '-', ids("G1", "T1", "left")) +
               gtf("exon", 801, 900, '-', ids("G1", "T1", "right")) +
               gtf("exon", 301, 400, '-', ids("G1", "T1", "middle")));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);
    EXPECT_EQ(walk_exons(grove, t1, "T1"), (std::vector<std::string>{"right", "middle", "left"}));
}

TEST_F(CLIGffHandlerTest, LinkedModelExonWithNoExonIdIsNamedByItsPosition) {
    write_file(tmp_gff,
               gtf("gene", 101, 400, '+', ids("G1")) +
               gtf("transcript", 101, 400, '+', ids("G1", "T1")) +
               gtf("exon", 301, 400, '+', ids("G1", "T1")) +
               gtf("exon", 101, 200, '+', ids("G1", "T1") + " exon_id \"\";"));  // empty = none
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);
    EXPECT_EQ(walk_exons(grove, t1, "T1"),
              (std::vector<std::string>{"chr1:101-200:+", "chr1:301-400:+"}));
}

TEST_F(CLIGffHandlerTest, LinkedModelGtfThatStartsWithALineWithoutAttributes) {
    // The reader reports GFF3 for a column 9 of ".". The file is still a GTF.
    write_file(tmp_gff,
               gtf("region", 1, 50, '+', ".") +
               gtf("gene", 101, 200, '+', ids("G1")) +
               gtf("transcript", 101, 200, '+', ids("G1", "T1")) +
               gtf("exon", 101, 200, '+', ids("G1", "T1", "E1")));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);
    EXPECT_EQ(walk_exons(grove, t1, "T1"), (std::vector<std::string>{"E1"}));
    EXPECT_EQ(grove.indexed_vertex_count(), 3u);  // the region, the gene, the transcript
}

TEST_F(CLIGffHandlerTest, LinkedModelStoresCdsAndCodonLinesOnTheTranscript) {
    write_file(tmp_gff,
               gtf("gene", 101, 900, '+', ids("G1")) +
               gtf("transcript", 101, 900, '+', ids("G1", "T1")) +
               gtf("exon", 101, 200, '+', ids("G1", "T1", "E1")) +
               gtf("exon", 301, 400, '+', ids("G1", "T1", "E2")) +
               gtf("CDS", 151, 200, '+', ids("G1", "T1") + " protein_id \"P1\";", "0") +
               gtf("CDS", 301, 350, '+', ids("G1", "T1") + " protein_id \"P1\";", "1") +
               gtf("start_codon", 151, 153, '+', ids("G1", "T1")) +
               gtf("UTR", 101, 150, '+', ids("G1", "T1")));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    // The part lines are not keys: only the gene and the transcript are indexed.
    EXPECT_EQ(grove.indexed_vertex_count(), 2u);
    EXPECT_EQ(grove.external_vertex_count(), 2u);

    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);
    const auto& attributes = t1->get_data().attributes;
    EXPECT_EQ(attributes.at("CDS"), (std::vector<std::string>{"151-200:0", "301-350:1"}));
    EXPECT_EQ(attributes.at("start_codon"), (std::vector<std::string>{"151-153"}));
    EXPECT_EQ(attributes.at("UTR"), (std::vector<std::string>{"101-150"}));
    EXPECT_EQ(attributes.at("protein_id"), (std::vector<std::string>{"P1"}));
}

TEST_F(CLIGffHandlerTest, LinkedModelTranscriptWithOnlyCdsLinesHasNoChain) {
    write_file(tmp_gff,
               gtf("gene", 101, 400, '+', ids("G1")) +
               gtf("transcript", 101, 400, '+', ids("G1", "T1")) +
               gtf("CDS", 151, 200, '+', ids("G1", "T1"), "0") +
               gtf("CDS", 301, 350, '+', ids("G1", "T1"), "1"));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    EXPECT_EQ(grove.external_vertex_count(), 0u);  // no exon is invented

    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);
    EXPECT_EQ(t1->get_data().attributes.at("CDS").size(), 2u);
    EXPECT_TRUE(grove.get_neighbors(t1).empty());
}

TEST_F(CLIGffHandlerTest, LinkedModelDoesNotDependOnLineOrder) {
    // Exons first, then the transcript, then the gene.
    write_file(tmp_gff,
               gtf("exon", 801, 900, '+', ids("G1", "T1", "E3")) +
               gtf("exon", 101, 200, '+', ids("G1", "T1", "E1")) +
               gtf("transcript", 101, 900, '+', ids("G1", "T1") + " transcript_name \"kept\";") +
               gtf("gene", 101, 900, '+', ids("G1")));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    auto* gene = find_key(grove, "gene", "gene_id", "G1");
    ASSERT_NE(t1, nullptr);
    ASSERT_NE(gene, nullptr);
    EXPECT_EQ(t1->get_data().attributes.at("transcript_name").front(), "kept");
    EXPECT_TRUE(grove.has_edge(gene, t1));
    EXPECT_EQ(walk_exons(grove, t1, "T1"), (std::vector<std::string>{"E1", "E3"}));
}

TEST_F(CLIGffHandlerTest, LinkedModelOtherTypesArePlainIndexedKeys) {
    write_file(tmp_gff,
               gtf("gene", 101, 900, '+', ids("G1")) +
               gtf("Selenocysteine", 501, 503, '+', "note \"sec\";"));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    EXPECT_EQ(grove.indexed_vertex_count(), 2u);
    EXPECT_EQ(grove.edge_count(), 0u);
    auto hits = grove.intersect(gdt::interval(501, 501), "chr1");
    EXPECT_EQ(hits.get_keys().size(), 2u);
}

TEST_F(CLIGffHandlerTest, LinkedModelRejectsBrokenInput) {
    const auto build = [this](const std::string& content) {
        write_file(tmp_gff, content);
        gff_grove grove(3);
        handlers::gff::grove_insert(grove, tmp_gff.string());
    };
    const std::string gene = gtf("gene", 101, 900, '+', ids("G1"));
    const std::string transcript = gtf("transcript", 101, 900, '+', ids("G1", "T1"));
    const std::string exon = gtf("exon", 101, 200, '+', ids("G1", "T1"));
    EXPECT_NO_THROW(build(gene + transcript + exon));

    // A layout that is not supported: no transcript named, no transcript
    // line, no gene line.
    EXPECT_THROW(build(gene + transcript + gtf("exon", 101, 200, '+', ids("G1"))),
                 std::runtime_error);
    EXPECT_THROW(build(gene + transcript +
                       gtf("exon", 101, 200, '+', "gene_id \"G1\"; transcript_id \"\";")),
                 std::runtime_error);
    EXPECT_THROW(build(gene + exon), std::runtime_error);
    EXPECT_THROW(build(transcript + exon), std::runtime_error);
    // An exon that names two transcripts.
    EXPECT_THROW(build(gene + transcript + gtf("transcript", 101, 900, '+', ids("G1", "T2")) +
                       gtf("exon", 101, 200, '+', ids("G1", "T1") + " transcript_id \"T2\";")),
                 std::runtime_error);
    // One line in GFF3 syntax in a GTF file: its id would be read by the wrong rule.
    EXPECT_THROW(build(gene + "chr1\ttest\ttranscript\t101\t900\t.\t+\t.\t"
                              "transcript_id=T1;gene_id=G1\n" + exon),
                 std::runtime_error);
    // A gene or transcript line with no id: nothing could name it.
    EXPECT_THROW(build(gene + gtf("transcript", 101, 900, '+', ids("G1"))), std::runtime_error);
    EXPECT_THROW(build(gtf("gene", 101, 900, '+', "note \"x\";")), std::runtime_error);
    EXPECT_THROW(build("##gff-version 3\n"
                       "chr1\ttest\tgene\t101\t900\t.\t+\t.\tID=G1\n"
                       "chr1\ttest\ttranscript\t101\t900\t.\t+\t.\tParent=G1\n"),
                 std::runtime_error);
    // A transcript on another chromosome than its gene.
    EXPECT_THROW(build(gene + "chr2\ttest\ttranscript\t101\t900\t.\t+\t.\t" + ids("G1", "T1") +
                       "\n"),
                 std::runtime_error);
    // The same id on two gene lines, on two transcript lines.
    EXPECT_THROW(build(gene + gene), std::runtime_error);
    EXPECT_THROW(build(gene + transcript + transcript), std::runtime_error);
    // The exons of one transcript on both strands, on two chromosomes.
    EXPECT_THROW(build(gene + transcript + exon + gtf("exon", 301, 400, '-', ids("G1", "T1"))),
                 std::runtime_error);
    EXPECT_THROW(build(gene + transcript + exon +
                       "chr2\ttest\texon\t301\t400\t.\t+\t.\t" + ids("G1", "T1") + "\n"),
                 std::runtime_error);
    // The transcript line on another strand than its exons.
    EXPECT_THROW(build(gene + transcript + gtf("exon", 101, 200, '-', ids("G1", "T1"))),
                 std::runtime_error);
    // A transcript id with a comma: the comma separates the ids on an exon edge.
    EXPECT_THROW(build(gene + gtf("transcript", 101, 900, '+', ids("G1", "T1,T2"))),
                 std::runtime_error);
    // A transcript line that already has an attribute named like a part list.
    EXPECT_THROW(build(gene + gtf("transcript", 101, 400, '+', ids("G1", "T1") + " CDS \"x\";") +
                       gtf("CDS", 101, 200, '+', ids("G1", "T1"), "0")),
                 std::runtime_error);
}

TEST_F(CLIGffHandlerTest, LinkedModelReadsTheGff3LayoutOfGencode) {
    // As in a GENCODE GFF3: the ID of an exon line holds the transcript, so the
    // two lines of a shared exon have different IDs and the same exon_id. The
    // pieces of one CDS repeat their ID. The line with no attributes must not
    // change how the lines after it are read.
    write_file(tmp_gff,
               "##gff-version 3\n"
               "chr1\ttest\tgene\t101\t900\t.\t+\t.\tID=G1;gene_id=G1\n"
               "chr1\ttest\ttranscript\t101\t900\t.\t+\t.\tID=T1;Parent=G1\n"
               "chr1\ttest\tregion\t1\t50\t.\t+\t.\t.\n"
               "chr1\ttest\texon\t101\t200\t.\t+\t.\tID=exon:T1:1;Parent=T1;exon_id=E1\n"
               "chr1\ttest\texon\t801\t900\t.\t+\t.\tID=exon:T1:2;Parent=T1;exon_id=E3\n"
               "chr1\ttest\tCDS\t151\t200\t.\t+\t0\tID=CDS:T1;Parent=T1\n"
               "chr1\ttest\tCDS\t801\t850\t.\t+\t1\tID=CDS:T1;Parent=T1\n"
               "chr1\ttest\ttranscript\t101\t400\t.\t+\t.\tID=T2;Parent=G1\n"
               "chr1\ttest\texon\t101\t200\t.\t+\t.\tID=exon:T2:1;Parent=T2;exon_id=E1\n"
               "chr1\ttest\texon\t301\t400\t.\t+\t.\tID=exon:T2:2;Parent=T2;exon_id=E2\n");
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    EXPECT_EQ(grove.indexed_vertex_count(), 4u);   // G1, T1, T2 and the region
    EXPECT_EQ(grove.external_vertex_count(), 3u);  // E1 is shared
    auto* gene = find_key(grove, "gene", "ID", "G1");
    auto* t1 = find_key(grove, "transcript", "ID", "T1");
    auto* t2 = find_key(grove, "transcript", "ID", "T2");
    ASSERT_NE(gene, nullptr);
    ASSERT_NE(t1, nullptr);
    ASSERT_NE(t2, nullptr);
    EXPECT_TRUE(grove.has_edge(gene, t1));
    EXPECT_TRUE(grove.has_edge(gene, t2));
    EXPECT_EQ(walk_exons(grove, t1, "T1"), (std::vector<std::string>{"E1", "E3"}));
    EXPECT_EQ(walk_exons(grove, t2, "T2"), (std::vector<std::string>{"E1", "E2"}));
    EXPECT_EQ(t1->get_data().attributes.at("CDS"),
              (std::vector<std::string>{"151-200:0", "801-850:1"}));

    // The shared exon keeps exon_id and loses the ID its lines disagree on.
    const auto& shared = grove.get_neighbors(t1).front()->get_data();
    EXPECT_FALSE(shared.attributes.contains("ID"));
    EXPECT_FALSE(shared.attributes.contains("Parent"));
}

TEST_F(CLIGffHandlerTest, LinkedModelSharedExonKeepsEveryExonId) {
    // One position with two exon ids, as GENCODE has for 14% of its exons.
    write_file(tmp_gff,
               gtf("gene", 101, 200, '+', ids("G1")) +
               gtf("transcript", 101, 200, '+', ids("G1", "T1")) +
               gtf("exon", 101, 200, '+', ids("G1", "T1", "E1")) +
               gtf("transcript", 101, 200, '+', ids("G1", "T2")) +
               gtf("exon", 101, 200, '+', ids("G1", "T2", "E9")) +
               gtf("transcript", 101, 200, '+', ids("G1", "T3")) +
               gtf("exon", 101, 200, '+', ids("G1", "T3", "E1")));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    ASSERT_EQ(grove.external_vertex_count(), 1u);
    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);
    EXPECT_EQ(grove.get_neighbors(t1).front()->get_data().attributes.at("exon_id"),
              (std::vector<std::string>{"E1", "E9"}));
}

TEST_F(CLIGffHandlerTest, IsStructureEdgeMatchesWordsExactlyAndThePrefix) {
    EXPECT_TRUE(handlers::gff::is_structure_edge("transcript"));
    EXPECT_TRUE(handlers::gff::is_structure_edge("first:T1"));
    EXPECT_TRUE(handlers::gff::is_structure_edge("next:T1,T2"));
    EXPECT_FALSE(handlers::gff::is_structure_edge("transcription_factor"));
    EXPECT_FALSE(handlers::gff::is_structure_edge("next"));
    EXPECT_FALSE(handlers::gff::is_structure_edge("regulates"));
}

// ==========================================
// isec: the chain members of one hit under the query
// ==========================================

namespace {
// The ids of the chain members of one hit that overlap a query at one position.
std::vector<std::string> member_ids(gff_grove& grove, key_ptr hit, std::size_t position) {
    std::vector<std::string> found;
    for (auto* member :
         handlers::gff::overlapping_members(grove, hit, gdt::interval(position, position))) {
        found.push_back(handlers::gff::record_id(member->get_data()));
    }
    return found;
}
const std::vector<std::string> none;
} // namespace

TEST_F(CLIGffHandlerTest, MembersAreTheExonsOfTheTranscriptUnderTheQuery) {
    write_file(tmp_gff, two_transcripts());
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());
    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    auto* t2 = find_key(grove, "transcript", "transcript_id", "T2");
    ASSERT_NE(t1, nullptr);
    ASSERT_NE(t2, nullptr);

    // E3 (801-900) is an exon of both transcripts: each of them has it.
    EXPECT_EQ(member_ids(grove, t1, 850), (std::vector<std::string>{"E3"}));
    EXPECT_EQ(member_ids(grove, t2, 850), (std::vector<std::string>{"E3"}));
    // 350 is in E2 for T1; T2 has no exon there.
    EXPECT_EQ(member_ids(grove, t1, 350), (std::vector<std::string>{"E2"}));
    EXPECT_EQ(member_ids(grove, t2, 350), none);
    // A query over two exons gets both, in chain order.
    std::vector<std::string> both;
    for (auto* member : handlers::gff::overlapping_members(grove, t1, gdt::interval(150, 350))) {
        both.push_back(handlers::gff::record_id(member->get_data()));
    }
    EXPECT_EQ(both, (std::vector<std::string>{"E1", "E2"}));
}

TEST_F(CLIGffHandlerTest, MembersOnTheMinusStrand) {
    write_file(tmp_gff,
               gtf("gene", 101, 900, '-', ids("G1")) +
               gtf("transcript", 101, 900, '-', ids("G1", "T1")) +
               gtf("exon", 101, 200, '-', ids("G1", "T1", "left")) +
               gtf("exon", 301, 400, '-', ids("G1", "T1", "middle")) +
               gtf("exon", 801, 900, '-', ids("G1", "T1", "right")));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());
    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);

    // The chain runs right, middle, left: each position finds its exon, and
    // a position between two exons finds none.
    EXPECT_EQ(member_ids(grove, t1, 850), (std::vector<std::string>{"right"}));
    EXPECT_EQ(member_ids(grove, t1, 350), (std::vector<std::string>{"middle"}));
    EXPECT_EQ(member_ids(grove, t1, 150), (std::vector<std::string>{"left"}));
    EXPECT_EQ(member_ids(grove, t1, 600), none);
}

TEST_F(CLIGffHandlerTest, AGeneAndAnExonlessTranscriptHaveNoMembers) {
    write_file(tmp_gff,
               gtf("gene", 101, 400, '+', ids("G1")) +
               gtf("transcript", 101, 400, '+', ids("G1", "T1")) +
               gtf("CDS", 151, 200, '+', ids("G1", "T1"), "0"));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());
    auto* gene = find_key(grove, "gene", "gene_id", "G1");
    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(gene, nullptr);
    ASSERT_NE(t1, nullptr);

    EXPECT_EQ(member_ids(grove, gene, 160), none);
    EXPECT_EQ(member_ids(grove, t1, 160), none);
}

TEST_F(CLIGffHandlerTest, AMemberRowJoinsTheIdsOfASharedExon) {
    write_file(tmp_gff,
               gtf("gene", 101, 200, '+', ids("G1")) +
               gtf("transcript", 101, 200, '+', ids("G1", "T1")) +
               gtf("exon", 101, 200, '+', ids("G1", "T1", "E1")) +
               gtf("transcript", 101, 200, '+', ids("G1", "T2")) +
               gtf("exon", 101, 200, '+', ids("G1", "T2", "E9")));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());
    auto* t2 = find_key(grove, "transcript", "transcript_id", "T2");
    ASSERT_NE(t2, nullptr);

    EXPECT_EQ(member_ids(grove, t2, 150), (std::vector<std::string>{"E1,E9"}));
}

TEST_F(CLIGffHandlerTest, NextEdgeListsMatchesAWholeId) {
    EXPECT_TRUE(handlers::gff::next_edge_lists("next:T1,T10", "T1"));
    EXPECT_TRUE(handlers::gff::next_edge_lists("next:T1,T10", "T10"));
    EXPECT_FALSE(handlers::gff::next_edge_lists("next:T1,T10", "T"));
    EXPECT_FALSE(handlers::gff::next_edge_lists("next:T1,T10", "T100"));
    EXPECT_FALSE(handlers::gff::next_edge_lists("first:T1", "T1"));
}

// ==========================================
// apply_links: the links file of a GFF/GTF index
// ==========================================

class CLIGffLinksTest : public CLIGffHandlerTest {
protected:
    gff_grove grove{3};
    handlers::gff::gff_keys keys;

    // Gene G1 with T1 (E1, E2, E3) and T2 (E1, E3), and a second gene G2.
    void SetUp() override {
        CLIGffHandlerTest::SetUp();
        write_file(tmp_gff, two_transcripts() + gtf("gene", 2001, 2500, '+', ids("G2")));
        keys = handlers::gff::grove_insert(grove, tmp_gff.string());
    }

    std::size_t link(const std::string& rows) {
        write_file(tmp_links, rows);
        return handlers::gff::apply_links(grove, tmp_links.string(), keys);
    }

    // The message of the error that `rows` gives; empty when there is none.
    std::string link_error(const std::string& rows) {
        try {
            link(rows);
        } catch (const std::runtime_error& e) {
            return e.what();
        }
        return "";
    }

    key_ptr exon(const std::string& exon_id) {
        for (auto* key : keys.external) {
            if (key->get_data().attributes.at("exon_id").front() == exon_id) return key;
        }
        return nullptr;
    }
};

TEST_F(CLIGffLinksTest, EachTagFindsItsKindOfRecord) {
    auto* g1 = find_key(grove, "gene", "gene_id", "G1");
    auto* g2 = find_key(grove, "gene", "gene_id", "G2");
    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    auto* t2 = find_key(grove, "transcript", "transcript_id", "T2");
    ASSERT_NE(exon("E1"), nullptr);
    ASSERT_NE(exon("E3"), nullptr);
    const std::size_t structure_edges = grove.edge_count();

    // G1 is also the gene_id of T1, T2 and of the exons: the tag gene_id
    // looks at genes only, so the name is not ambiguous.
    EXPECT_EQ(link("gene_id:gene_id\tG1\tG2\tregulates\n"
                   "transcript_id:exon_id\tT1\tE3\n"
                   "exon_id:transcript_id\tE1\tT2\tbinds\n"),
              3u);
    EXPECT_EQ(grove.edge_count(), structure_edges + 3);
    EXPECT_TRUE(grove.has_edge(g1, g2));
    EXPECT_FALSE(grove.has_edge(g2, g1));  // directed
    EXPECT_TRUE(grove.has_edge(t1, exon("E3")));
    EXPECT_TRUE(grove.has_edge(exon("E1"), t2));

    std::vector<std::string> texts = grove.get_edges(g1);
    std::ranges::sort(texts);
    EXPECT_EQ(texts, (std::vector<std::string>{"regulates", "transcript", "transcript"}));
}

TEST_F(CLIGffLinksTest, TranscriptIdLooksAtTranscriptsOnlyAndARepeatedValueIsOneName) {
    // The Selenocysteine line carries the transcript_id of T1, and it has the
    // value "sec" twice in one attribute.
    write_file(tmp_gff,
               gtf("gene", 101, 900, '+', ids("G1")) +
               gtf("transcript", 101, 900, '+', ids("G1", "T1")) +
               gtf("Selenocysteine", 501, 503, '+',
                   ids("G1", "T1") + " label \"sec\"; label \"sec\";"));
    gff_grove with_site(3);
    const auto site_keys = handlers::gff::grove_insert(with_site, tmp_gff.string());
    write_file(tmp_links, "transcript_id:label\tT1\tsec\n");

    EXPECT_EQ(handlers::gff::apply_links(with_site, tmp_links.string(), site_keys), 1u);
    auto* t1 = find_key(with_site, "transcript", "transcript_id", "T1");
    auto* site = find_key(with_site, "Selenocysteine", "label", "sec");
    ASSERT_NE(t1, nullptr);
    ASSERT_NE(site, nullptr);
    EXPECT_TRUE(with_site.has_edge(t1, site));
}

TEST_F(CLIGffLinksTest, ARepeatedRowIsOneEdge) {
    EXPECT_EQ(link("gene_id:gene_id\tG1\tG2\n"
                   "gene_id:gene_id\tG1\tG2\n"
                   "gene_id:gene_id\tG1\tG2\tregulates\n"),  // another text: another edge
              2u);
}

TEST_F(CLIGffLinksTest, EveryIdOfASharedExonNamesIt) {
    // One exon position with two exon ids.
    write_file(tmp_gff,
               gtf("gene", 101, 200, '+', ids("G1")) +
               gtf("transcript", 101, 200, '+', ids("G1", "T1")) +
               gtf("exon", 101, 200, '+', ids("G1", "T1", "E1")) +
               gtf("transcript", 101, 200, '+', ids("G1", "T2")) +
               gtf("exon", 101, 200, '+', ids("G1", "T2", "E9")));
    gff_grove shared(3);
    const auto shared_keys = handlers::gff::grove_insert(shared, tmp_gff.string());
    ASSERT_EQ(shared_keys.external.size(), 1u);
    write_file(tmp_links, "exon_id:gene_id\tE1\tG1\n"
                          "exon_id:gene_id\tE9\tG1\n");  // the same exon: the same edge

    EXPECT_EQ(handlers::gff::apply_links(shared, tmp_links.string(), shared_keys), 1u);
    auto* gene = find_key(shared, "gene", "gene_id", "G1");
    EXPECT_TRUE(shared.has_edge(shared_keys.external.front(), gene));
}

TEST_F(CLIGffLinksTest, AnyOtherTagLooksAtEveryKey) {
    // GFF3: ID names a gene and a transcript; the exon is found by exon_id.
    write_file(tmp_gff,
               "##gff-version 3\n"
               "chr1\ttest\tgene\t101\t400\t.\t+\t.\tID=G1;Name=first\n"
               "chr1\ttest\ttranscript\t101\t400\t.\t+\t.\tID=T1;Parent=G1\n"
               "chr1\ttest\texon\t101\t200\t.\t+\t.\tID=exon:T1:1;Parent=T1;exon_id=E1\n"
               "chr1\ttest\tenhancer\t901\t950\t.\t+\t.\tID=enh1\n");
    gff_grove gff3(3);
    const auto gff3_keys = handlers::gff::grove_insert(gff3, tmp_gff.string());
    write_file(tmp_links, "ID:ID\tenh1\tG1\tenhances\n"
                          "Name:ID\tfirst\tT1\n"
                          "ID:exon_id\tenh1\tE1\n"
                          "ID:ID\tenh1\texon:T1:1\n");  // an exon of one transcript keeps its ID

    // The last two rows name the same exon by two tags: one edge.
    EXPECT_EQ(handlers::gff::apply_links(gff3, tmp_links.string(), gff3_keys), 3u);
    auto* enhancer = find_key(gff3, "enhancer", "ID", "enh1");
    auto* gene = find_key(gff3, "gene", "ID", "G1");
    EXPECT_TRUE(gff3.has_edge(enhancer, gene));
    EXPECT_TRUE(gff3.has_edge(enhancer, gff3_keys.external.front()));
}

TEST_F(CLIGffLinksTest, ANameMustBeOnExactlyOneRecord) {
    // No record has it. The message names the line of the links file.
    EXPECT_NE(link_error("# links\ngene_id:gene_id\tG1\tG9\n").find(
                  "line 2: no record has gene_id 'G9'"),
              std::string::npos);
    // T1 is a transcript_id; no gene has it as gene_id.
    EXPECT_NE(link_error("gene_id:gene_id\tG1\tT1\n").find("no record has gene_id 'T1'"),
              std::string::npos);
    // Two records have the value: it names no single one.
    write_file(tmp_gff, gtf("gene", 101, 200, '+', ids("G1") + " label \"x\";") +
                        gtf("gene", 301, 400, '+', ids("G2") + " label \"x\";"));
    gff_grove twice(3);
    const auto twice_keys = handlers::gff::grove_insert(twice, tmp_gff.string());
    write_file(tmp_links, "gene_id:label\tG1\tx\n");
    try {
        handlers::gff::apply_links(twice, tmp_links.string(), twice_keys);
        FAIL() << "a value on two records must not resolve";
    } catch (const std::runtime_error& e) {
        EXPECT_NE(std::string(e.what()).find("line 1: more than one record has label 'x'"),
                  std::string::npos) << e.what();
    }
    EXPECT_EQ(twice.edge_count(), 0u);
}

TEST_F(CLIGffLinksTest, MalformedRowsAndReservedTextAreErrors) {
    const std::size_t before = grove.edge_count();
    // No tag column (a BED-style row), and a tag column that is not tagA:tagB.
    EXPECT_NE(link_error("G1\tG2\n").find("needs the tag column"), std::string::npos);
    for (const char* tags : {"gene_id", ":gene_id", "gene_id:", "a:b:c"}) {
        EXPECT_NE(link_error(std::string(tags) + "\tG1\tG2\n").find("tagA:tagB"),
                  std::string::npos) << tags;
    }
    // A tag that no record has is not the same fault as an unknown name.
    EXPECT_NE(link_error("nosuchtag:gene_id\tx\tG1\n").find("no record has the attribute 'nosuchtag'"),
              std::string::npos);
    // A reserved text is reported before a name is looked up.
    EXPECT_NE(link_error("gene_id:gene_id\tG1\tG9\ttranscript\n").find("is reserved"),
              std::string::npos);
    // A text that marks a structure edge. "transcription" is a normal text.
    EXPECT_NE(link_error("gene_id:gene_id\tG1\tG2\ttranscript\n").find("is reserved"),
              std::string::npos);
    EXPECT_NE(link_error("gene_id:gene_id\tG1\tG2\tnext:T1\n").find("is reserved"),
              std::string::npos);
    EXPECT_EQ(grove.edge_count(), before);  // no refused row added an edge
    EXPECT_EQ(link("gene_id:gene_id\tG1\tG2\ttranscription\n"), 1u);
}
