/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <algorithm>
#include <array>
#include <cstddef>
#include <fstream>
#include <genogrove/utility/tokenizer.hpp>
#include <handlers/gff.hpp>
#include <handlers/links.hpp>
#include <iterator>
#include <map>
#include <optional>
#include <set>
#include <stdexcept>
#include <string>
#include <string_view>
#include <tuple>
#include <unordered_map>
#include <utility>
#include <vector>

namespace handlers {
namespace gff {

namespace {

using grove_t = ggs::grove<gdt::interval, gio::gff_entry, std::string>;
using key_ptr = gdt::key<gdt::interval, gio::gff_entry>*;
using attribute_map = decltype(gio::gff_entry::attributes);
using index_pair = std::pair<std::size_t, std::size_t>;

struct transcript_state {
    std::optional<std::size_t> line; // its record in gff_model::features
    bool placed = false;             // a child line set seqid and strand
    std::string seqid;
    std::optional<char> strand;
    std::optional<std::string> protein_id;
    std::vector<std::size_t> exons; // indexes into gff_model::exon_keys, each once
    std::map<std::string, std::vector<std::string>> parts; // column-3 type -> entries
};

// What the file says, collected line by line before anything is indexed.
struct gff_model {
    bool gff3 = false;
    std::vector<gio::gff_entry> features;                  // the indexed keys to be
    std::map<std::string, std::size_t, std::less<>> genes; // gene id -> index into features
    std::map<std::string, transcript_state, std::less<>> transcripts;
    std::vector<key_ptr> exon_keys; // one external key per distinct exon
    std::map<std::tuple<std::string, std::size_t, std::size_t, char>, std::size_t> exon_index;
};

// The spellings differ by source: GTF 2.2 (5UTR), GENCODE GTF (UTR), Ensembl
// GTF (five_prime_utr) and GFF3 (five_prime_UTR).
bool is_transcript_part(std::string_view type) {
    static constexpr std::array<std::string_view, 10> parts = {"CDS",
                                                               "start_codon",
                                                               "stop_codon",
                                                               "UTR",
                                                               "5UTR",
                                                               "3UTR",
                                                               "five_prime_UTR",
                                                               "three_prime_UTR",
                                                               "five_prime_utr",
                                                               "three_prime_utr"};
    return std::ranges::find(parts, type) != parts.end();
}

// GTF 2.2 writes an empty value for "none", so empty counts as absent.
std::optional<std::string> first_value(const gio::gff_entry& entry, std::string_view tag) {
    const auto it = entry.attributes.find(tag);
    if(it == entry.attributes.end() || it->second.empty() || it->second.front().empty()) {
        return std::nullopt;
    }
    return it->second.front();
}

std::string place(const gio::gff_entry& entry) {
    return entry.seqid + ":" + std::to_string(entry.start) + "-" + std::to_string(entry.end);
}

[[noreturn]] void unsupported(const std::string& what) {
    throw std::runtime_error("Error: " + what +
                             ". For now idx reads only GFF/GTF files with a line for every gene "
                             "and every transcript (the layout of a GENCODE file)");
}

// The one record a line belongs to: its only GFF3 Parent, or the only value of
// the GTF tag. The gff_entry accessors decide the format line by line, which
// is wrong for a line with no attributes, so they are not used here.
std::optional<std::string> owner_of(bool gff3, const gio::gff_entry& entry,
                                    std::string_view gtf_tag) {
    std::vector<std::string> ids;
    if(gff3) {
        ids = entry.get_parent_ids();
    } else if(const auto it = entry.attributes.find(gtf_tag); it != entry.attributes.end()) {
        ids = it->second;
    }
    std::erase(ids, std::string());
    if(ids.empty() || std::ranges::count(ids, ids.front()) != std::ssize(ids)) {
        return std::nullopt;
    }
    return std::move(ids.front());
}

// The attribute that holds the id of a record; empty when the record has none
// of its own (a GTF line that is not a gene or a transcript).
std::string_view id_tag(bool gff3, std::string_view type) {
    if(gff3) {
        return "ID";
    }
    if(type == "gene") {
        return "gene_id";
    }
    return type == "transcript" ? "transcript_id" : std::string_view();
}

// A gene, a transcript or any type that is not an exon or a transcript part.
void add_feature(gff_model& model, const gio::gff_entry& entry) {
    const std::size_t index = model.features.size();
    model.features.push_back(entry);
    const bool is_gene = entry.type == "gene";
    if(!is_gene && entry.type != "transcript") {
        return;
    }
    const std::string_view tag = id_tag(model.gff3, entry.type);
    const auto id = first_value(entry, tag);
    if(!id) {
        unsupported(entry.type + " line at " + place(entry) + " has no " + std::string(tag));
    }
    bool fresh = false;
    if(is_gene) {
        fresh = model.genes.emplace(*id, index).second;
    } else {
        auto& transcript = model.transcripts[*id];
        fresh = !transcript.line;
        transcript.line = index;
    }
    if(!fresh) {
        throw std::runtime_error("Error: the id '" + *id + "' is on a second " + entry.type +
                                 " line at " + place(entry));
    }
}

// Returns the index of the exon in model.exon_keys. The first line at a
// position makes the key; a later line reduces its record to what both agree on.
std::size_t add_exon(grove_t& grove, gff_model& model, const gio::gff_entry& entry) {
    gio::gff_entry stored = entry;
    stored.attributes.erase("transcript_id"); // the edge from the transcript says it
    stored.attributes.erase("Parent");
    const auto [it, fresh] = model.exon_index.try_emplace(
        {entry.seqid, entry.start, entry.end, entry.strand.value_or('.')}, model.exon_keys.size());
    if(fresh) {
        model.exon_keys.push_back(grove.add_external_key(entry.to_interval(), std::move(stored)));
        return it->second;
    }

    attribute_map& kept = model.exon_keys[it->second]->get_data().attributes;
    // exon_id addresses an exon, and one position can have several ids (the
    // same exon in another reading frame or gene), so every id is kept.
    std::vector<std::string> exon_ids;
    for(const attribute_map* from : {&kept, &stored.attributes}) {
        const auto ids = from->find("exon_id");
        if(ids == from->end()) {
            continue;
        }
        for(const auto& id : ids->second) {
            if(std::ranges::find(exon_ids, id) == exon_ids.end()) {
                exon_ids.push_back(id);
            }
        }
    }
    std::ranges::sort(exon_ids); // the record must not depend on the line order
    std::erase_if(kept, [&stored](const auto& attribute) {
        const auto other = stored.attributes.find(attribute.first);
        return other == stored.attributes.end() || other->second != attribute.second;
    });
    if(!exon_ids.empty()) {
        kept["exon_id"] = std::move(exon_ids);
    }
    return it->second;
}

// An exon, CDS, UTR or codon line: file it under its transcript.
void add_transcript_child(grove_t& grove, gff_model& model, const gio::gff_entry& entry) {
    const auto owner = owner_of(model.gff3, entry, "transcript_id");
    if(!owner) {
        unsupported(entry.type + " line at " + place(entry) +
                    " does not name exactly one transcript");
    }
    auto& transcript = model.transcripts[*owner];
    if(!transcript.placed) {
        transcript.placed = true;
        transcript.seqid = entry.seqid;
        transcript.strand = entry.strand;
    } else if(transcript.seqid != entry.seqid || transcript.strand != entry.strand) {
        throw std::runtime_error("Error: transcript '" + *owner +
                                 "' has lines on different chromosomes or strands (" + entry.type +
                                 " at " + place(entry) + ")");
    }

    if(entry.type == "exon") {
        const std::size_t exon = add_exon(grove, model, entry);
        if(std::ranges::find(transcript.exons, exon) == transcript.exons.end()) {
            transcript.exons.push_back(exon);
        }
        return;
    }
    std::string item = std::to_string(entry.start) + "-" + std::to_string(entry.end);
    if(entry.type == "CDS") {
        if(entry.phase) {
            item += ":" + std::to_string(*entry.phase);
        }
        if(!transcript.protein_id) {
            transcript.protein_id = first_value(entry, "protein_id");
        }
    }
    transcript.parts[entry.type].push_back(std::move(item));
}

gff_model read_file(grove_t& grove, const std::string& filepath) {
    gio::gff_reader reader(filepath);
    gff_model model;
    bool format_known = false;
    for(const auto& entry : reader) {
        // The reader reports GFF3 for a column 9 of ".", so only a line that
        // has attributes can say what the file is. Every later line must have
        // the same syntax: its ids are read by the rule of the file.
        if(!entry.attributes.empty()) {
            if(!format_known) {
                model.gff3 = entry.is_gff3();
                format_known = true;
            } else if(entry.is_gff3() != model.gff3) {
                throw std::runtime_error("Error: " + entry.type + " line at " + place(entry) +
                                         " is not in the " + (model.gff3 ? "GFF3" : "GTF") +
                                         " syntax of the lines before it");
            }
        }
        if(entry.type == "exon" || is_transcript_part(entry.type)) {
            add_transcript_child(grove, model, entry);
        } else {
            add_feature(model, entry);
        }
    }
    return model;
}

// Checks each transcript against its own line and its gene, and moves its part
// lists onto its record. Returns the (gene, transcript) pairs in model.features.
std::vector<index_pair> complete_transcripts(gff_model& model) {
    std::vector<index_pair> gene_edges;
    for(auto& [id, transcript] : model.transcripts) {
        if(id.find(',') != std::string::npos) {
            throw std::runtime_error("Error: transcript id '" + id +
                                     "' contains a comma, which separates the "
                                     "transcript ids on an exon-to-exon edge");
        }
        if(!transcript.line) {
            unsupported("transcript '" + id + "' on " + transcript.seqid +
                        " has exon, CDS, UTR or codon lines but no transcript line");
        }
        gio::gff_entry& record = model.features[*transcript.line];
        if(transcript.placed &&
           (record.seqid != transcript.seqid || record.strand != transcript.strand)) {
            throw std::runtime_error("Error: transcript '" + id + "' at " + place(record) +
                                     " is on another chromosome or strand than its "
                                     "exon, CDS, UTR or codon lines");
        }
        for(auto& [type, items] : transcript.parts) {
            if(record.attributes.contains(type)) {
                throw std::runtime_error("Error: transcript '" + id +
                                         "' already has an attribute named '" + type +
                                         "', the name of the list for its " + type + " lines");
            }
            record.attributes[type] = std::move(items);
        }
        if(transcript.protein_id) {
            record.attributes.try_emplace("protein_id",
                                          std::vector<std::string>{*transcript.protein_id});
        }

        const auto gene_id = owner_of(model.gff3, record, "gene_id");
        const auto gene = gene_id ? model.genes.find(*gene_id) : model.genes.end();
        if(gene == model.genes.end()) {
            unsupported("transcript '" + id + "' at " + place(record) + " has no gene line");
        }
        if(model.features[gene->second].seqid != record.seqid) {
            throw std::runtime_error("Error: transcript '" + id + "' at " + place(record) +
                                     " is on another chromosome than its gene '" + *gene_id + "'");
        }
        gene_edges.emplace_back(gene->second, *transcript.line);
    }
    return gene_edges;
}

// Sorts the features and bulk-inserts them, one build per chromosome. Returns
// the key of each feature, in the order of model.features (which is moved from).
std::vector<key_ptr> insert_features(grove_t& grove, gff_model& model) {
    std::vector<gdt::interval> intervals;
    intervals.reserve(model.features.size());
    std::map<std::string, std::vector<std::size_t>> by_seqid;
    for(std::size_t i = 0; i < model.features.size(); ++i) {
        intervals.push_back(model.features[i].to_interval());
        by_seqid[model.features[i].seqid].push_back(i);
    }
    std::vector<key_ptr> feature_keys(model.features.size());
    for(auto& [seqid, members] : by_seqid) {
        // Stable, so records with equal intervals keep their file order.
        std::ranges::stable_sort(members, [&intervals](std::size_t a, std::size_t b) {
            return intervals[a] < intervals[b];
        });
        std::vector<std::pair<gdt::interval, gio::gff_entry>> batch;
        batch.reserve(members.size());
        for(const std::size_t i : members) {
            batch.emplace_back(intervals[i], std::move(model.features[i]));
        }
        const auto inserted = grove.insert_data(seqid, batch, ggs::sorted, ggs::bulk);
        for(std::size_t k = 0; k < members.size(); ++k) {
            feature_keys[members[k]] = inserted[k];
        }
    }
    return feature_keys;
}

// gene -> transcript -> first exon -> next exon, in 5' to 3' order.
void add_structure_edges(grove_t& grove, gff_model& model, const std::vector<key_ptr>& feature_keys,
                         const std::vector<index_pair>& gene_edges) {
    for(const auto& [gene, transcript] : gene_edges) {
        grove.add_edge(feature_keys[gene], feature_keys[transcript], std::string(edge_transcript));
    }
    const auto& exon_keys = model.exon_keys;
    // One edge per pair of consecutive exons, shared by the transcripts that use it.
    std::map<index_pair, std::string> junctions;
    for(auto& [id, transcript] : model.transcripts) {
        if(transcript.exons.empty()) {
            continue;
        }
        std::ranges::sort(transcript.exons, [&exon_keys](std::size_t a, std::size_t b) {
            return exon_keys[a]->get_value() < exon_keys[b]->get_value();
        });
        if(transcript.strand == '-') {
            std::ranges::reverse(transcript.exons);
        }
        grove.add_edge(feature_keys[*transcript.line], exon_keys[transcript.exons.front()],
                       std::string(edge_first_exon));
        for(std::size_t i = 0; i + 1 < transcript.exons.size(); ++i) {
            std::string& users = junctions[{transcript.exons[i], transcript.exons[i + 1]}];
            users += users.empty() ? std::string(edge_next_exon_prefix) : ",";
            users += id;
        }
    }
    for(const auto& [pair, users] : junctions) {
        grove.add_edge(exon_keys[pair.first], exon_keys[pair.second], users);
    }
}

// An exon with no exon_id in the file gets one from its position.
void name_exons(const std::vector<key_ptr>& exon_keys) {
    for(const key_ptr exon : exon_keys) {
        gio::gff_entry& record = exon->get_data();
        std::vector<std::string>& ids = record.attributes["exon_id"];
        std::erase(ids, std::string());
        if(ids.empty()) {
            ids.push_back(place(record) + ':' + record.strand.value_or('.'));
        }
    }
}

// The keys one tag looks at, by their value of that attribute. A value that
// more than one key has maps to null: it names no single key. The views point
// into the stored records, which live as long as the grove.
using name_table = std::unordered_map<std::string_view, key_ptr>;

name_table table_for(std::string_view tag, const gff_keys& keys) {
    name_table table;
    const auto add = [&](key_ptr key) {
        const attribute_map& attributes = key->get_data().attributes;
        const auto values = attributes.find(tag);
        if(values == attributes.end()) {
            return;
        }
        for(const auto& value : values->second) {
            const auto [slot, fresh] = table.try_emplace(value, key);
            if(!fresh && slot->second != key) {
                slot->second = nullptr;
            }
        }
    };
    // A transcript line also carries its gene_id, and an exon line both ids,
    // so each of these tags looks at one kind of record only. The record type
    // decides, not the list a key is in.
    const std::string_view only = tag == "gene_id"         ? "gene"
                                  : tag == "transcript_id" ? "transcript"
                                  : tag == "exon_id"       ? "exon"
                                                           : "";
    for(const auto* list : {&keys.indexed, &keys.external}) {
        for(const key_ptr key : *list) {
            if(only.empty() || key->get_data().type == only) {
                add(key);
            }
        }
    }
    return table;
}

} // namespace

gff_keys grove_insert(grove_t& grove, const std::string& filepath) {
    gff_model model = read_file(grove, filepath);
    const auto gene_edges = complete_transcripts(model);
    auto feature_keys = insert_features(grove, model);
    add_structure_edges(grove, model, feature_keys, gene_edges);
    name_exons(model.exon_keys);
    return {.indexed = std::move(feature_keys), .external = std::move(model.exon_keys)};
}

std::size_t apply_links(grove_t& grove, const std::string& links_path, const gff_keys& keys) {
    std::ifstream in(links_path);
    if(!in) {
        throw std::runtime_error("Error: could not open links file: " + links_path);
    }
    const auto at = [](const links::link_row& row) {
        return "Error: links file line " + std::to_string(row.line) + ": ";
    };
    // One table per tag the file uses, built at its first use.
    std::map<std::string, name_table, std::less<>> tables;
    const auto resolve = [&](std::string_view tag, const std::string& name,
                             const links::link_row& row) {
        auto table = tables.find(tag);
        if(table == tables.end()) {
            table = tables.emplace(std::string(tag), table_for(tag, keys)).first;
        }
        if(table->second.empty()) {
            throw std::runtime_error(at(row) + "no record has the attribute '" + std::string(tag) +
                                     "'");
        }
        const auto found = table->second.find(name);
        if(found == table->second.end()) {
            throw std::runtime_error(at(row) + "no record has " + std::string(tag) + " '" + name +
                                     "'");
        }
        if(found->second == nullptr) {
            throw std::runtime_error(at(row) + "more than one record has " + std::string(tag) +
                                     " '" + name +
                                     "' (transcript and exon lines repeat the tags of their gene)");
        }
        return found->second;
    };

    std::set<std::tuple<key_ptr, key_ptr, std::optional<std::string>>> seen;
    std::size_t added = 0;
    for(const auto& row : links::parse_links_tsv(in, true)) {
        // Before the names: a name table costs a pass over all keys.
        if(row.metadata && is_structure_edge(*row.metadata)) {
            throw std::runtime_error(at(row) + "the text '" + *row.metadata +
                                     "' is reserved: it marks an edge of the index structure");
        }
        const key_ptr source = resolve(row.source_tag, row.source, row);
        const key_ptr target = resolve(row.target_tag, row.target, row);
        if(!seen.emplace(source, target, row.metadata).second) {
            continue; // a repeated row is one edge
        }
        if(row.metadata) {
            grove.add_edge(source, target, *row.metadata);
        } else {
            grove.add_edge(source, target);
        }
        ++added;
    }
    return added;
}

bool is_structure_edge(std::string_view text) {
    return text == edge_transcript || text == edge_first_exon ||
           text.starts_with(edge_next_exon_prefix);
}

std::string record_id(const gio::gff_entry& payload) {
    const auto& attributes = payload.attributes;
    if(const auto ids = attributes.find("exon_id");
       payload.type == "exon" && ids != attributes.end()) {
        std::string joined;
        for(const auto& id : ids->second) {
            joined += (joined.empty() ? "" : ",") + id;
        }
        return joined.empty() ? "." : joined;
    }
    return first_value(payload, id_tag(payload.is_gff3(), payload.type)).value_or(".");
}

bool edge_names_transcript(std::string_view edge_text, std::string_view transcript_id) {
    if(!edge_text.starts_with(edge_next_exon_prefix)) {
        return false;
    }
    std::size_t pos = edge_next_exon_prefix.size();
    while(const auto id = genogrove::utility::next_field(edge_text, pos, ',')) {
        if(*id == transcript_id) {
            return true;
        }
    }
    return false;
}

} // namespace gff
} // namespace handlers