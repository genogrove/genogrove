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
// grove_insert: name map (attribute-based name resolution)
// ==========================================

TEST_F(CLIGffHandlerTest, NameMapResolvesChosenAttribute) {
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    handlers::gff::grove_insert(grove, target_path.string(), &name_map, "ID");

    ASSERT_EQ(name_map.size(), 3u);
    // Heterogeneous lookup: a string_view probe without constructing a string.
    auto it = name_map.find(std::string_view("gene2"));
    ASSERT_NE(it, name_map.end());
    EXPECT_EQ(it->second->get_data().seqid, "chr1");
    EXPECT_EQ(it->second->get_data().start, 601u);
    EXPECT_EQ(it->second->get_data().end, 900u);

    // The mapped pointer is the key the grove returns for that interval.
    auto hits = grove.intersect(gdt::interval(700, 700), "chr1");
    ASSERT_EQ(hits.get_keys().size(), 1u);
    EXPECT_EQ(hits.get_keys()[0], it->second);
}

TEST_F(CLIGffHandlerTest, NameMapKeysPointIntoStoredPayload) {
    // The map's string_view must alias the grove-owned attribute value (stable
    // key_storage), not the reader's per-record buffer that is gone by now.
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    handlers::gff::grove_insert(grove, target_path.string(), &name_map, "ID");

    auto it = name_map.find(std::string_view("gene1"));
    ASSERT_NE(it, name_map.end());
    const std::string& stored = it->second->get_data().attributes.at("ID").front();
    EXPECT_EQ(it->first.data(), stored.data());
}

TEST_F(CLIGffHandlerTest, NameMapUsesFirstValueOfRepeatedTag) {
    write_file(tmp_gff,
               "chr1\ttest\tgene\t101\t500\t.\t+\t.\tgene_id \"g1\"; tag \"a\"; tag \"b\";\n");
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    handlers::gff::grove_insert(grove, tmp_gff.string(), &name_map, "tag");

    EXPECT_EQ(name_map.size(), 1u);
    EXPECT_TRUE(name_map.contains(std::string_view("a")));
    EXPECT_FALSE(name_map.contains(std::string_view("b")));
}

TEST_F(CLIGffHandlerTest, NameMapMissingTagThrows) {
    // target.gff records carry only ID; asking for Name must fail — the user
    // picked that tag as the identifier, so a record without it is an error.
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    EXPECT_THROW(
        handlers::gff::grove_insert(grove, target_path.string(), &name_map, "Name"),
        std::runtime_error);
}

TEST_F(CLIGffHandlerTest, NameMapDuplicateValueThrows) {
    write_file(tmp_gff,
               "##gff-version 3\n"
               "chr1\ttest\tgene\t101\t500\t.\t+\t.\tID=g1;Name=dup\n"
               "chr1\ttest\tgene\t601\t900\t.\t-\t.\tID=g2;Name=dup\n");
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    EXPECT_THROW(
        handlers::gff::grove_insert(grove, tmp_gff.string(), &name_map, "Name"),
        std::runtime_error);
    // The file itself is valid: without the name map it builds.
    gff_grove without_map(3);
    EXPECT_NO_THROW(handlers::gff::grove_insert(without_map, tmp_gff.string()));
}

TEST_F(CLIGffHandlerTest, NoNameMapIgnoresTag) {
    // Without a map the tag is never read, so a tag no record has is fine.
    gff_grove grove(3);
    EXPECT_NO_THROW(
        handlers::gff::grove_insert(grove, target_path.string(), nullptr, "Name"));
    EXPECT_EQ(grove.intersect(gdt::interval(0, 10000), "chr1").get_keys().size(), 2u);
}

TEST_F(CLIGffHandlerTest, NameMapFeedsLinksApplier) {
    // End-to-end in process: resolve names through the GFF map and attach a
    // directed edge, the same way idx --links --gff-name-tag does.
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    handlers::gff::grove_insert(grove, target_path.string(), &name_map, "ID");
    write_file(tmp_links, "gene1\tgene3\n");

    EXPECT_EQ(handlers::links::apply_to_grove(grove, tmp_links.string(), name_map), 1u);
    auto* gene1 = name_map.at("gene1");
    auto* gene3 = name_map.at("gene3");
    EXPECT_TRUE(grove.has_edge(gene1, gene3));
    EXPECT_FALSE(grove.has_edge(gene3, gene1));
}

// ==========================================
// for_each_gff_query / print_gff_result
// ==========================================

TEST_F(CLIGffHandlerTest, ForEachGffQueryConvertsCoordinates) {
    write_file(tmp_gff,
               "##gff-version 3\n"
               "chr1\ttest\texon\t151\t250\t.\t+\t.\tID=q1\n"
               "chr2\ttest\texon\t1\t1\t.\t+\t.\tID=q2\n");
    std::vector<std::pair<std::string, gdt::interval>> seen;
    handlers::gff::for_each_gff_query(tmp_gff.string(),
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
    std::ostringstream out;
    handlers::gff::print_gff_result(out, entry);
    EXPECT_EQ(out.str(), "chr1\t101\t500");
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
            if (labels[i] == handlers::gff::edge_first_exon) current = targets[i];
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
            if (!labels[i].starts_with(handlers::gff::edge_next_exon_prefix)) continue;
            const std::string list =
                "," + labels[i].substr(handlers::gff::edge_next_exon_prefix.size()) + ",";
            if (list.find("," + id + ",") != std::string::npos) current = targets[i];
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
    EXPECT_EQ(labels, (std::vector<std::string>{"next_exon:T1,T3", "next_exon:T2"}));
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
               gtf("exon", 101, 200, '+', ids("G1", "T1")));
    gff_grove grove(3);
    handlers::gff::grove_insert(grove, tmp_gff.string());

    auto* t1 = find_key(grove, "transcript", "transcript_id", "T1");
    ASSERT_NE(t1, nullptr);
    EXPECT_EQ(walk_exons(grove, t1, "T1"),
              (std::vector<std::string>{"chr1:101-200:+", "chr1:301-400:+"}));
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

TEST_F(CLIGffHandlerTest, LinkedModelNameMapLeavesOutAnExonWithoutTheTag) {
    // --gff-name-tag transcript_id style: no exon record keeps transcript_id,
    // so the exons are not in the map and the build does not stop.
    write_file(tmp_gff,
               gtf("gene", 101, 900, '+', ids("G1") + " name \"g\";") +
               gtf("transcript", 101, 900, '+', ids("G1", "T1") + " name \"t\";") +
               gtf("exon", 101, 200, '+', ids("G1", "T1", "E1")));
    gff_grove grove(3);
    handlers::gff::name_to_key_map name_map;
    handlers::gff::grove_insert(grove, tmp_gff.string(), &name_map, "name");
    EXPECT_EQ(name_map.size(), 2u);
}

TEST_F(CLIGffHandlerTest, IsStructureEdgeMatchesWordsExactlyAndThePrefix) {
    EXPECT_TRUE(handlers::gff::is_structure_edge("transcript"));
    EXPECT_TRUE(handlers::gff::is_structure_edge("first_exon"));
    EXPECT_TRUE(handlers::gff::is_structure_edge("next_exon:T1,T2"));
    EXPECT_FALSE(handlers::gff::is_structure_edge("transcription_factor"));
    EXPECT_FALSE(handlers::gff::is_structure_edge("next_exons"));
    EXPECT_FALSE(handlers::gff::is_structure_edge("regulates"));
}
