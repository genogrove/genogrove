/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <algorithm>
#include <array>
#include <cstddef>
#include <handlers/gff.hpp>
#include <limits>
#include <map>
#include <optional>
#include <set>
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

std::optional<std::string> first_value(const gio::gff_entry& entry, std::string_view tag) {
    const auto it = entry.attributes.find(tag);
    if(it == entry.attributes.end() || it->second.empty()) {
        return std::nullopt;
    }
    return it->second.front();
}

std::string place(const gio::gff_entry& entry) {
    return entry.seqid + ":" + std::to_string(entry.start) + "-" + std::to_string(entry.end);
}

// Everything the file says about one transcript, collected while reading.
struct transcript_state {
    std::optional<std::size_t> line; // its own record in `features`, when the file has one
    bool placed = false;             // a child line set seqid/strand/span
    std::string seqid;
    std::optional<char> strand;
    std::size_t start = std::numeric_limits<std::size_t>::max();
    std::size_t end = 0;
    std::optional<std::string> gene_id;                    // from the child lines (GTF)
    std::optional<std::string> protein_id;                 // from the first CDS line that has one
    std::vector<std::size_t> exons;                        // indexes into `exons`, each once
    std::map<std::string, std::vector<std::string>> parts; // column-3 type -> entries
};

// A gene the file names but has no line for, on one chromosome.
struct gene_span {
    std::size_t start = std::numeric_limits<std::size_t>::max();
    std::size_t end = 0;
    std::optional<char> strand;           // '.' once its transcripts are on both strands
    std::vector<std::size_t> transcripts; // indexes into `features`
};

} // namespace

build_report grove_insert(grove_t& grove, const std::string& filepath, name_to_key_map* name_map,
                          std::string_view name_tag) {
    gio::gff_reader reader(filepath);

    // Records that become indexed keys: genes, transcripts and every type that
    // is neither an exon nor a transcript part. Inserted after the whole file
    // is read, so the lines can come in any order.
    std::vector<gio::gff_entry> features;
    // GTF: gene lines by gene_id. GFF3: every feature by ID, because any
    // feature can be named as a Parent.
    std::map<std::string, std::size_t, std::less<>> lines_by_id;
    std::map<std::string, transcript_state, std::less<>> transcripts;
    // One external key per distinct exon (seqid, start, end, strand).
    std::vector<key_ptr> exons;
    std::map<std::tuple<std::string, std::size_t, std::size_t, char>, std::size_t> exon_index;
    bool gff3 = false;

    for(const auto& entry : reader) {
        gff3 = entry.is_gff3();
        const bool is_exon = entry.type == "exon";

        if(!is_exon && !is_transcript_part(entry.type)) {
            const std::size_t index = features.size();
            features.push_back(entry);
            if(gff3) {
                if(const auto id = first_value(entry, "ID");
                   id && !lines_by_id.emplace(*id, index).second) {
                    throw std::runtime_error("Error: duplicate GFF3 ID '" + *id + "' at " +
                                             place(entry) + " (an ID must be unique)");
                }
            } else if(entry.type == "gene") {
                if(const auto id = first_value(entry, "gene_id");
                   id && !lines_by_id.emplace(*id, index).second) {
                    throw std::runtime_error("Error: duplicate gene_id '" + *id +
                                             "' on a second gene line at " + place(entry));
                }
            } else if(entry.type == "transcript") {
                if(const auto id = first_value(entry, "transcript_id")) {
                    auto& transcript = transcripts[*id];
                    if(transcript.line) {
                        throw std::runtime_error("Error: duplicate transcript_id '" + *id +
                                                 "' on a second transcript line at " +
                                                 place(entry));
                    }
                    transcript.line = index;
                }
            }
            continue;
        }

        // An exon or a transcript part: find the transcript(s) it belongs to.
        std::vector<std::string> owners;
        if(gff3) {
            owners = entry.get_parent_ids();
            if(owners.empty()) {
                features.push_back(entry); // no Parent: a plain indexed key
                continue;
            }
        } else if(auto id = first_value(entry, "transcript_id")) {
            owners.push_back(std::move(*id));
        } else if(is_exon) {
            throw std::runtime_error("Error: exon line at " + place(entry) +
                                     " has no transcript_id (required by GTF)");
        } else {
            features.push_back(entry); // a part with no transcript: a plain indexed key
            continue;
        }

        std::optional<std::size_t> exon;
        if(is_exon) {
            // The transcript is known from the link, so the record does not
            // repeat it; what else the lines of a shared exon disagree on
            // (exon_number, ...) is dropped below.
            gio::gff_entry stored = entry;
            stored.attributes.erase("transcript_id");
            stored.attributes.erase("Parent");
            const auto [it, fresh] = exon_index.try_emplace(
                {entry.seqid, entry.start, entry.end, entry.strand.value_or('.')}, exons.size());
            if(fresh) {
                exons.push_back(grove.add_external_key(entry.to_interval(), std::move(stored)));
            } else {
                attribute_map& kept = exons[it->second]->get_data().attributes;
                std::erase_if(kept, [&stored](const auto& attribute) {
                    const auto other = stored.attributes.find(attribute.first);
                    return other == stored.attributes.end() || other->second != attribute.second;
                });
            }
            exon = it->second;
        }

        for(const auto& owner : owners) {
            auto& transcript = transcripts[owner];
            if(!transcript.placed) {
                transcript.placed = true;
                transcript.seqid = entry.seqid;
                transcript.strand = entry.strand;
            } else if(transcript.seqid != entry.seqid || transcript.strand != entry.strand) {
                throw std::runtime_error("Error: transcript '" + owner +
                                         "' has lines on different chromosomes or "
                                         "strands (" +
                                         entry.type + " at " + place(entry) + ")");
            }
            transcript.start = std::min(transcript.start, entry.start);
            transcript.end = std::max(transcript.end, entry.end);
            if(!transcript.gene_id) {
                transcript.gene_id = first_value(entry, "gene_id");
            }

            if(exon) {
                if(std::ranges::find(transcript.exons, *exon) == transcript.exons.end()) {
                    transcript.exons.push_back(*exon);
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
    }

    // ---- The file is read: complete the transcripts and find their genes ----

    build_report report;
    const std::size_t file_features = features.size(); // the made records come after these
    std::set<std::size_t> transcript_lines;            // indexes into `features`
    // The record a Parent (GFF3) or gene_id (GTF) names, if the file has one.
    const auto line_of = [&](const std::string& id) -> std::optional<std::size_t> {
        const auto it = lines_by_id.find(id);
        return it == lines_by_id.end() ? std::nullopt : std::optional<std::size_t>(it->second);
    };
    std::vector<std::pair<std::size_t, std::size_t>> gene_edges; // (gene, transcript) in `features`
    std::map<std::pair<std::string, std::string>, gene_span> missing_genes; // (gene id, seqid)
    std::map<std::pair<std::string, std::string>, std::size_t> made_gene_lines;

    for(auto& [id, transcript] : transcripts) {
        if(id.find(',') != std::string::npos) {
            throw std::runtime_error("Error: transcript id '" + id +
                                     "' contains a comma, which separates the "
                                     "transcript ids on an exon-to-exon edge");
        }
        if(!transcript.line && gff3) {
            transcript.line = line_of(id);
        }
        if(!transcript.line) {
            // No line of its own: a state without one always has child lines.
            gio::gff_entry made(transcript.seqid, transcript.start, transcript.end, "transcript");
            made.source = made_source;
            made.strand = transcript.strand;
            made.format = gff3 ? gio::gff_format::GFF3 : gio::gff_format::GTF;
            made.attributes[gff3 ? "ID" : "transcript_id"] = {id};
            if(!gff3 && transcript.gene_id) {
                made.attributes["gene_id"] = {*transcript.gene_id};
            }
            transcript.line = features.size();
            features.push_back(std::move(made));
            ++report.transcripts_made;
            if(transcript.exons.empty()) {
                ++report.transcripts_made_without_exons;
            }
        }

        transcript_lines.insert(*transcript.line);
        gio::gff_entry& record = features[*transcript.line];
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

        std::vector<std::string> gene_ids;
        if(gff3) {
            gene_ids = record.get_parent_ids();
        } else if(auto gene_id = first_value(record, "gene_id")) {
            gene_ids.push_back(std::move(*gene_id));
        }
        for(const auto& gene_id : gene_ids) {
            if(const auto gene = line_of(gene_id)) {
                gene_edges.emplace_back(*gene, *transcript.line);
                continue;
            }
            auto& span = missing_genes[{gene_id, record.seqid}];
            if(span.transcripts.empty()) {
                span.strand = record.strand;
            } else if(span.strand != record.strand) {
                span.strand = '.';
            }
            span.start = std::min(span.start, record.start);
            span.end = std::max(span.end, record.end);
            span.transcripts.push_back(*transcript.line);
        }
    }

    for(const auto& [where, span] : missing_genes) {
        const auto& [gene_id, seqid] = where;
        gio::gff_entry made(seqid, span.start, span.end, "gene");
        made.source = made_source;
        made.strand = span.strand;
        made.format = gff3 ? gio::gff_format::GFF3 : gio::gff_format::GTF;
        made.attributes[gff3 ? "ID" : "gene_id"] = {gene_id};
        for(const std::size_t transcript : span.transcripts) {
            gene_edges.emplace_back(features.size(), transcript);
        }
        made_gene_lines.emplace(where, features.size());
        features.push_back(std::move(made));
        ++report.genes_made;
    }

    // A plain key that names a parent gets an edge from it: a GFF3 Parent, or
    // in a GTF its transcript, else its gene. A parent the index does not have
    // is not made for it.
    std::vector<std::pair<std::size_t, std::size_t>> child_edges; // (parent, child) in `features`
    for(std::size_t i = 0; i < file_features; ++i) {
        if(transcript_lines.contains(i)) {
            continue; // a transcript has its gene edge
        }
        const gio::gff_entry& record = features[i];
        if(gff3) {
            for(const auto& parent : record.get_parent_ids()) {
                if(const auto line = line_of(parent); line && *line != i) {
                    child_edges.emplace_back(*line, i);
                }
            }
            continue;
        }
        if(record.type == "gene") {
            continue;
        }
        const auto transcript_id = first_value(record, "transcript_id");
        const auto gene_id = first_value(record, "gene_id");
        if(const auto owner = transcript_id ? transcripts.find(*transcript_id) : transcripts.end();
           owner != transcripts.end()) {
            child_edges.emplace_back(*owner->second.line, i);
        } else if(!gene_id) {
            continue;
        } else if(const auto line = line_of(*gene_id)) {
            child_edges.emplace_back(*line, i);
        } else if(const auto made = made_gene_lines.find({*gene_id, record.seqid});
                  made != made_gene_lines.end()) {
            child_edges.emplace_back(made->second, i);
        }
    }

    // ---- Insert the indexed keys, sorted, one bulk build per chromosome ----

    std::vector<gdt::interval> intervals;
    intervals.reserve(features.size());
    std::map<std::string, std::vector<std::size_t>> by_seqid;
    for(std::size_t i = 0; i < features.size(); ++i) {
        intervals.push_back(features[i].to_interval());
        by_seqid[features[i].seqid].push_back(i);
    }
    std::vector<key_ptr> keys(features.size());
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
            keys[members[k]] = inserted[k];
        }
    }

    // ---- Edges: gene -> transcript -> first exon -> next exon (5' to 3') ----

    for(const auto& [parent, child] : child_edges) {
        grove.add_edge(keys[parent], keys[child], std::string(edge_child));
    }
    for(const auto& [gene, transcript] : gene_edges) {
        grove.add_edge(keys[gene], keys[transcript], std::string(edge_transcript));
    }
    // One edge per pair of consecutive exons, shared by the transcripts that use it.
    std::map<std::pair<std::size_t, std::size_t>, std::string> junctions;
    for(auto& [id, transcript] : transcripts) {
        if(transcript.exons.empty()) {
            continue;
        }
        std::ranges::sort(transcript.exons, [&exons](std::size_t a, std::size_t b) {
            return exons[a]->get_value() < exons[b]->get_value();
        });
        if(transcript.strand == '-') {
            std::ranges::reverse(transcript.exons);
        }
        grove.add_edge(keys[*transcript.line], exons[transcript.exons.front()],
                       std::string(edge_first_exon));
        for(std::size_t i = 0; i + 1 < transcript.exons.size(); ++i) {
            std::string& users = junctions[{transcript.exons[i], transcript.exons[i + 1]}];
            users += users.empty() ? std::string(edge_next_exon_prefix) : ",";
            users += id;
        }
    }
    for(const auto& [pair, users] : junctions) {
        grove.add_edge(exons[pair.first], exons[pair.second], users);
    }

    // An exon with no exon_id of its own (or whose lines disagree on it) is
    // named by its position, so every exon can be printed and linked by id.
    for(const key_ptr exon : exons) {
        gio::gff_entry& record = exon->get_data();
        if(!record.attributes.contains("exon_id")) {
            record.attributes["exon_id"] = {place(record) + ":" +
                                            std::string(1, record.strand.value_or('.'))};
        }
    }

    if(name_map) {
        const auto record_name = [&](key_ptr key) {
            // Resolved from the stored record, so the map's string_view points
            // into the grove's storage and not into a temporary.
            const gio::gff_entry& record = key->get_data();
            const auto it = record.attributes.find(name_tag);
            if(it == record.attributes.end() || it->second.empty()) {
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
        std::ranges::for_each(keys, record_name);
        std::ranges::for_each(exons, record_name);
    }

    return report;
}

} // namespace gff
} // namespace handlers