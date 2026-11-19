/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <algorithm>
#include <array>
#include <cstddef>
#include <handlers/gff.hpp>
#include <iterator>
#include <map>
#include <optional>
#include <stdexcept>
#include <string>
#include <string_view>
#include <tuple>
#include <utility>
#include <vector>

namespace handlers {
namespace gff {

namespace {

using grove_t = ggs::grove<gdt::interval, gio::gff_entry, std::string>;
using key_ptr = gdt::key<gdt::interval, gio::gff_entry>*;
using attribute_map = decltype(gio::gff_entry::attributes);

// Column-3 types that are stored as list entries on their transcript. The
// spellings differ by source: GTF 2.2 (5UTR), GENCODE GTF (UTR), Ensembl GTF
// (five_prime_utr) and GFF3 (five_prime_UTR).
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

// An empty value counts as absent: GTF 2.2 writes `transcript_id ""` for a
// line that is not part of a transcript.
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

// A layout the builder does not read stops here, so that no record is guessed.
[[noreturn]] void unsupported(const std::string& what) {
    throw std::runtime_error("Error: " + what +
                             ". For now idx reads only GFF/GTF files with a line for every gene "
                             "and every transcript (the layout of a GENCODE file)");
}

// Everything the file says about one transcript, collected while reading.
struct transcript_state {
    std::optional<std::size_t> line; // its own record in `features`
    bool placed = false;             // a child line set seqid and strand
    std::string seqid;
    std::optional<char> strand;
    std::optional<std::string> protein_id;                 // from the first CDS line that has one
    std::vector<std::size_t> exons;                        // indexes into `exon_keys`, each once
    std::map<std::string, std::vector<std::string>> parts; // column-3 type -> entries
};

} // namespace

void grove_insert(grove_t& grove, const std::string& filepath, name_to_key_map* name_map,
                  std::string_view name_tag) {
    gio::gff_reader reader(filepath);

    // Records that become indexed keys: genes, transcripts and every type that
    // is neither an exon nor a transcript part. Inserted after the whole file
    // is read, so the lines can come in any order.
    std::vector<gio::gff_entry> features;
    std::map<std::string, std::size_t, std::less<>> genes; // gene id -> index into `features`
    std::map<std::string, transcript_state, std::less<>> transcripts;
    // One external key per distinct exon (seqid, start, end, strand).
    std::vector<key_ptr> exon_keys;
    std::map<std::tuple<std::string, std::size_t, std::size_t, char>, std::size_t> exon_index;
    // The format of the file: that of its first line with attributes. A line
    // with no attributes (column 9 empty or ".") has no format of its own; the
    // reader reports GFF3 for a ".", so the attributes decide, not the line.
    bool gff3 = false;
    bool format_known = false;
    // The one record a line belongs to: its only GFF3 Parent, or the only
    // value of the GTF tag. A line that names none, or two, has no owner. The
    // gff_entry accessors are not used: they decide the format line by line.
    const auto owner_of = [&gff3](const gio::gff_entry& entry,
                                  std::string_view gtf_tag) -> std::optional<std::string> {
        std::vector<std::string> ids;
        if(gff3) {
            ids = entry.get_parent_ids();
        } else if(const auto it = entry.attributes.find(gtf_tag); it != entry.attributes.end()) {
            ids = it->second;
        }
        std::erase(ids, std::string()); // GTF 2.2 writes "" for "none"
        if(ids.empty() || std::ranges::count(ids, ids.front()) != std::ssize(ids)) {
            return std::nullopt;
        }
        return std::move(ids.front());
    };

    for(const auto& entry : reader) {
        if(!format_known && !entry.attributes.empty()) {
            gff3 = entry.is_gff3();
            format_known = true;
        }
        const bool is_exon = entry.type == "exon";

        if(!is_exon && !is_transcript_part(entry.type)) {
            const std::size_t index = features.size();
            features.push_back(entry);
            const bool is_gene = entry.type == "gene";
            if(!is_gene && entry.type != "transcript") {
                continue; // any other type: a plain indexed key
            }
            const std::string_view id_tag = gff3 ? "ID" : (is_gene ? "gene_id" : "transcript_id");
            const auto id = first_value(entry, id_tag);
            if(!id) {
                // Without an id no line can name it, so it would stay unlinked.
                unsupported(entry.type + " line at " + place(entry) + " has no " +
                            std::string(id_tag));
            }
            bool fresh = false;
            if(is_gene) {
                fresh = genes.emplace(*id, index).second;
            } else {
                auto& transcript = transcripts[*id];
                fresh = !transcript.line;
                transcript.line = index;
            }
            if(!fresh) {
                throw std::runtime_error("Error: the id '" + *id + "' is on a second " +
                                         entry.type + " line at " + place(entry));
            }
            continue;
        }

        // An exon or a transcript part: find the transcript it belongs to.
        const auto owner = owner_of(entry, "transcript_id");
        if(!owner) {
            unsupported(entry.type + " line at " + place(entry) +
                        " does not name exactly one transcript");
        }
        auto& transcript = transcripts[*owner];
        if(!transcript.placed) {
            transcript.placed = true;
            transcript.seqid = entry.seqid;
            transcript.strand = entry.strand;
        } else if(transcript.seqid != entry.seqid || transcript.strand != entry.strand) {
            throw std::runtime_error("Error: transcript '" + *owner +
                                     "' has lines on different chromosomes or strands (" +
                                     entry.type + " at " + place(entry) + ")");
        }

        if(is_exon) {
            // The transcript is known from the link, so the record does not
            // repeat it; what else the lines of a shared exon disagree on
            // (exon_number, a GFF3 ID, ...) is dropped below.
            gio::gff_entry stored = entry;
            stored.attributes.erase("transcript_id");
            stored.attributes.erase("Parent");
            const auto [it, fresh] = exon_index.try_emplace(
                {entry.seqid, entry.start, entry.end, entry.strand.value_or('.')},
                exon_keys.size());
            if(fresh) {
                exon_keys.push_back(grove.add_external_key(entry.to_interval(), std::move(stored)));
            } else {
                attribute_map& kept = exon_keys[it->second]->get_data().attributes;
                // exon_id is the tag that addresses an exon, and annotations
                // give one position several ids (the same exon in another
                // reading frame or gene): the record keeps every one of them,
                // sorted, so the record does not depend on the line order.
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
                std::ranges::sort(exon_ids);
                std::erase_if(kept, [&stored](const auto& attribute) {
                    const auto other = stored.attributes.find(attribute.first);
                    return other == stored.attributes.end() || other->second != attribute.second;
                });
                if(!exon_ids.empty()) {
                    kept["exon_id"] = std::move(exon_ids);
                }
            }
            if(std::ranges::find(transcript.exons, it->second) == transcript.exons.end()) {
                transcript.exons.push_back(it->second);
            }
            continue;
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

    // ---- The file is read: complete the transcripts and find their genes ----

    std::vector<std::pair<std::size_t, std::size_t>> gene_edges; // (gene, transcript) in `features`
    for(auto& [id, transcript] : transcripts) {
        if(id.find(',') != std::string::npos) {
            throw std::runtime_error("Error: transcript id '" + id +
                                     "' contains a comma, which separates the "
                                     "transcript ids on an exon-to-exon edge");
        }
        if(!transcript.line) {
            unsupported("transcript '" + id + "' on " + transcript.seqid +
                        " has exon, CDS, UTR or codon lines but no transcript line");
        }
        gio::gff_entry& record = features[*transcript.line];
        // The child lines agree with each other; they must agree with the
        // transcript line too, or the chain would run on another strand.
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

        const auto gene_id = owner_of(record, "gene_id");
        const auto gene = gene_id ? genes.find(*gene_id) : genes.end();
        if(gene == genes.end()) {
            unsupported("transcript '" + id + "' at " + place(record) + " has no gene line");
        }
        if(features[gene->second].seqid != record.seqid) {
            throw std::runtime_error("Error: transcript '" + id + "' at " + place(record) +
                                     " is on another chromosome than its gene '" + *gene_id + "'");
        }
        gene_edges.emplace_back(gene->second, *transcript.line);
    }

    // ---- Insert the indexed keys, sorted, one bulk build per chromosome ----

    std::vector<gdt::interval> intervals;
    intervals.reserve(features.size());
    std::map<std::string, std::vector<std::size_t>> by_seqid;
    for(std::size_t i = 0; i < features.size(); ++i) {
        intervals.push_back(features[i].to_interval());
        by_seqid[features[i].seqid].push_back(i);
    }
    std::vector<key_ptr> feature_keys(features.size());
    for(auto& [seqid, members] : by_seqid) {
        // Stable, so records with equal intervals keep their file order.
        std::ranges::stable_sort(members, [&intervals](std::size_t a, std::size_t b) {
            return intervals[a] < intervals[b];
        });
        std::vector<std::pair<gdt::interval, gio::gff_entry>> batch;
        batch.reserve(members.size());
        for(const std::size_t i : members) {
            batch.emplace_back(intervals[i], std::move(features[i]));
        }
        const auto inserted = grove.insert_data(seqid, batch, ggs::sorted, ggs::bulk);
        for(std::size_t k = 0; k < members.size(); ++k) {
            feature_keys[members[k]] = inserted[k];
        }
    }

    // ---- Edges: gene -> transcript -> first exon -> next exon (5' to 3') ----

    for(const auto& [gene, transcript] : gene_edges) {
        grove.add_edge(feature_keys[gene], feature_keys[transcript], std::string(edge_transcript));
    }
    // One edge per pair of consecutive exons, shared by the transcripts that use it.
    std::map<std::pair<std::size_t, std::size_t>, std::string> junctions;
    for(auto& [id, transcript] : transcripts) {
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

    // An exon with no exon_id in the file (or only an empty one) is named by
    // its position, so every exon has an id to print.
    for(const key_ptr exon : exon_keys) {
        gio::gff_entry& record = exon->get_data();
        std::vector<std::string>& ids = record.attributes["exon_id"];
        std::erase(ids, std::string());
        if(ids.empty()) {
            ids.push_back(place(record) + ':' + record.strand.value_or('.'));
        }
    }

    if(name_map) {
        // An indexed record must have the tag. A shared exon can lose it (its
        // lines disagree, as with the GFF3 ID of a GENCODE exon), so an exon
        // without it is left out: a links row that names it is an unknown name.
        const auto record_name = [&](key_ptr key, bool required) {
            // Resolved from the stored record, so the map's string_view points
            // into the grove's storage and not into a temporary.
            const gio::gff_entry& record = key->get_data();
            const auto it = record.attributes.find(name_tag);
            if(it == record.attributes.end() || it->second.empty()) {
                if(!required) {
                    return;
                }
                throw std::runtime_error("Error: GFF/GTF record '" + place(record) + "' has no '" +
                                         std::string(name_tag) +
                                         "' attribute (required by --gff-name-tag for --links)");
            }
            const std::string_view value(it->second.front());
            if(!name_map->emplace(value, key).second) {
                throw std::runtime_error("Error: duplicate GFF/GTF name '" + std::string(value) +
                                         "' for attribute '" + std::string(name_tag) +
                                         "' (names must be unique to use --links)");
            }
        };
        for(const key_ptr key : feature_keys) {
            record_name(key, true);
        }
        for(const key_ptr exon : exon_keys) {
            record_name(exon, false);
        }
    }
}

bool is_structure_edge(std::string_view text) {
    return text == edge_transcript || text == edge_first_exon ||
           text.starts_with(edge_next_exon_prefix);
}

} // namespace gff
} // namespace handlers
