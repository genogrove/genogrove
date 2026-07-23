/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// grove_serialize.ipp — Serialization and visualization methods for grove<>
// Included inside the grove class body. Do not include directly.

public:
    /**
     * @brief Write the grove structure to a stream in SIF (Simple Interaction Format) for visualization
     * @param os Output stream to write to
     * @param root Root node of the tree to visualize
     * @note Used for debugging and visualization; outputs node links, leaf links, and key links in SIF format
     */
    void grove_to_sif(std::ostream& os, const node<key_type, data_type>* root) const {
        if (!root) { return; }
        std::queue<const node<key_type, data_type>*> q;
        q.push(root);

        while (!q.empty()) {
            const auto* current = q.front();
            q.pop();
            if (!current->get_is_leaf()) {
                for (const auto* child : current->get_children()) {
                    q.push(child);
                    os << "|";
                    current->print_keys(os, "|");
                    os << "|\tnodelink\t|";
                    child->print_keys(os, "|");
                    os << "|\n";
                }
            } else {
                if (current->get_next()) {
                    os << "|";
                    current->print_keys(os, "|");
                    os << "|\tleaflink\t|";
                    current->get_next()->print_keys(os, "|");
                    os << "|\n";
                }

                for (const auto* key : current->get_keys()) {
                    auto neighbors = graph_data.get_neighbors(key);
                    for (const auto* neighbor : neighbors) {
                        os << key->get_value().to_string()
                           << "\tkeylink\t"
                           << neighbor->get_value().to_string() << "\n";
                    }
                }
            }
        }
    }

    /**
     * @brief Write the entire grove (all indexed trees) to a stream in SIF format.
     * @param os Output stream to write to
     * @note Node-less public entry point: walks the grove's own roots, so callers
     *       need no access to internal node pointers. Each index's tree is written
     *       in turn; an empty grove produces no output. Index iteration order follows
     *       the underlying hash map and is not guaranteed stable across runs.
     */
    void grove_to_sif(std::ostream& os) const {
        for (const auto& [index, root] : root_nodes) {
            grove_to_sif(os, root);
        }
    }

    /**
     * @brief Serialize the grove to a block-structured binary output stream
     * @param os Output stream to write to
     *
     * Format 0.2 (block-structured, random-access-capable):
     *   [magic "GGB\x01"]
     *   [directory, plain]: order; per-index (name, root block_id); block count;
     *       external-block-begin; leaf-key count; external-key count
     *   [blocks]: each a length-prefixed, independently zlib-compressed record
     *       - node blocks (id < external-begin), DFS pre-order per index:
     *           internal → keys + child block_ids;  leaf → keys + next block_id + edges
     *       - external blocks (id >= external-begin): packed external keys + edges
     *
     * Every key's global id is (block_id, slot); graph edges are stored co-located
     * with their source key as (target_block_id, target_slot[, metadata]). The
     * per-block compression makes the payload seekable for a future partial read
     * path; here the whole grove is written.
     *
     * @note Blocks are buffered (compressed) in memory to length-prefix them.
     *       ponytail: fine while groves fit in RAM; revisit with a streaming
     *       writer + footer index if buffering ever dominates at genome scale.
     */
    void serialize(std::ostream& os) const {
        using key_ptr = const gdt::key<key_type, data_type>*;

        // ---- Phase 1: assign block ids and key global ids ----
        std::unordered_map<const node<key_type, data_type>*, detail::block_id> node_to_block;
        std::vector<const node<key_type, data_type>*> node_blocks;   // block_id -> node
        std::unordered_map<key_ptr, std::pair<detail::block_id, uint32_t>> key_to_id;
        std::vector<std::pair<std::string, detail::block_id>> index_roots;
        uint64_t leaf_keys_total = 0;

        auto assign = [&](const node<key_type, data_type>* n, auto&& self) -> void {
            detail::block_id id = static_cast<detail::block_id>(node_blocks.size());
            node_to_block[n] = id;
            node_blocks.push_back(n);
            if (n->get_is_leaf()) {
                const auto& ks = n->get_keys();
                leaf_keys_total += ks.size();
                for (uint32_t i = 0; i < ks.size(); ++i) {
                    key_to_id[ks[i]] = {id, i};
                }
            } else {
                for (const auto* child : n->get_children()) {
                    self(child, self);
                }
            }
        };
        for (const auto& [name, root] : root_nodes) {
            index_roots.emplace_back(name, static_cast<detail::block_id>(node_blocks.size()));
            assign(root, assign);
        }
        const detail::block_id ext_block_begin = static_cast<detail::block_id>(node_blocks.size());

        // External keys are distributed into fixed-size blocks so a partial read
        // can page in one registry chunk at a time (never the whole registry).
        // ext_chunk is a compression-vs-granularity knob; deserialization caps the
        // per-block count at this same constant (see gg_block_format.hpp, #484).
        constexpr uint32_t ext_chunk = detail::max_external_keys_per_block;
        std::vector<std::pair<size_t, size_t>> ext_ranges;  // [begin,end) in external_key_storage
        for (size_t start = 0; start < external_key_storage.size(); start += ext_chunk) {
            size_t end = std::min(start + static_cast<size_t>(ext_chunk), external_key_storage.size());
            detail::block_id id = ext_block_begin + static_cast<detail::block_id>(ext_ranges.size());
            for (size_t j = start; j < end; ++j) {
                key_to_id[&external_key_storage[j]] = {id, static_cast<uint32_t>(j - start)};
            }
            ext_ranges.emplace_back(start, end);
        }
        const detail::block_id num_blocks =
            ext_block_begin + static_cast<detail::block_id>(ext_ranges.size());

        // ---- Phase 2: compress each block into an in-memory buffer ----
        // Per-key outgoing edges, written after a key list. Generic over the key
        // pointer iterator so leaf keys (key*) and external keys (const key*) share it.
        auto write_key_edges = [&](std::ostream& zos, auto first, auto last) {
            for (auto it = first; it != last; ++it) {
                key_ptr k = *it;
                const auto& edges = graph_data.get_edge_list(k);
                uint32_t ecount = static_cast<uint32_t>(edges.size());
                detail::write_pod(zos, ecount);
                for (const auto& e : edges) {
                    auto found = key_to_id.find(e.target);
                    if (found == key_to_id.end()) {
                        throw std::runtime_error("Failed to serialize grove: edge target not indexed");
                    }
                    detail::block_id tb = found->second.first;
                    uint32_t ts = found->second.second;
                    detail::write_pod(zos, tb);
                    detail::write_pod(zos, ts);
                    if constexpr (!std::is_void_v<edge_data_type>) {
                        gdt::serializer<edge_data_type>::write(zos, e.metadata);
                    }
                }
            }
        };

        // ---- Phase 2: write magic + directory ----
        os.write(detail::grove_stream_magic.data(),
                 static_cast<std::streamsize>(detail::grove_stream_magic.size()));

        detail::write_pod(os, this->order);
        uint32_t num_indices = static_cast<uint32_t>(index_roots.size());
        detail::write_pod(os, num_indices);
        for (const auto& [name, root_id] : index_roots) {
            uint32_t name_len = static_cast<uint32_t>(name.size());
            detail::write_pod(os, name_len);
            os.write(name.data(), static_cast<std::streamsize>(name_len));
            detail::block_id rid = root_id;
            detail::write_pod(os, rid);
        }
        detail::write_pod(os, num_blocks);
        detail::block_id ext_begin_field = ext_block_begin;
        detail::write_pod(os, ext_begin_field);
        uint64_t leaf_count_field = leaf_keys_total;
        detail::write_pod(os, leaf_count_field);
        uint64_t external_count_field = static_cast<uint64_t>(external_key_storage.size());
        detail::write_pod(os, external_count_field);

        // ---- Phase 3: compress each block and write it directly ----
        // One deflate state and one uncompressed-scratch stream reused across all
        // blocks (deflateReset per block, no per-block deflateInit or stream
        // construction), each block written length-prefixed as it is produced —
        // no whole-payload buffering.
        detail::block_deflater deflater;
        std::string comp;
        std::ostringstream raw(std::ios::binary);
        auto write_block = [&](auto&& write_fn) {
            raw.str(std::string());  // reset content + put pointer, reuse capacity
            raw.clear();             // clear any residual state flags
            write_fn(raw);
            if (!raw) {
                throw std::runtime_error("Failed to serialize grove: block stream error");
            }
            deflater.compress(raw.view(), comp);  // view(): compress without a copy
            uint64_t clen = static_cast<uint64_t>(comp.size());
            detail::write_pod(os, clen);
            os.write(comp.data(), static_cast<std::streamsize>(comp.size()));
        };

        for (detail::block_id b = 0; b < ext_block_begin; ++b) {
            const node<key_type, data_type>* n = node_blocks[b];
            write_block([&](std::ostream& zos) {
                n->serialize_block(zos, node_to_block);
                if (n->get_is_leaf()) {
                    write_key_edges(zos, n->get_keys().begin(), n->get_keys().end());
                }
            });
        }
        for (const auto& [start, end] : ext_ranges) {
            write_block([&](std::ostream& zos) {
                uint32_t cnt = static_cast<uint32_t>(end - start);
                detail::write_pod(zos, cnt);
                std::vector<key_ptr> keyptrs;
                keyptrs.reserve(cnt);
                for (size_t j = start; j < end; ++j) {
                    const auto& k = external_key_storage[j];
                    k.get_value().serialize(zos);
                    if constexpr (!std::is_void_v<data_type>) {
                        gdt::serializer<data_type>::write(zos, k.get_data());
                    }
                    keyptrs.push_back(&k);
                }
                write_key_edges(zos, keyptrs.begin(), keyptrs.end());
            });
        }

        if (!os) {
            throw std::runtime_error("Failed to serialize grove: stream error");
        }
    }

    /**
     * @brief Deserialize a grove from a block-structured binary input stream
     * @param is Input stream produced by serialize() (format 0.2)
     * @return Deserialized grove object
     *
     * Eager reader: reads the directory, then reads every length-prefixed block
     * (each independently inflated from an isolated buffer, so no cross-block
     * seeking is required — the eager path works on non-seekable sources too),
     * links child/next references and rebuilds the graph overlay from the
     * co-located edge records. A future partial-read path will use the same
     * blocks but load them on demand.
     */
    [[nodiscard]] static grove deserialize(std::istream& is) {
        // ---- magic + directory ----
        std::array<char, 4> magic{};
        is.read(magic.data(), static_cast<std::streamsize>(magic.size()));
        if (is.gcount() != static_cast<std::streamsize>(magic.size()) ||
            magic != detail::grove_stream_magic) {
            throw std::runtime_error(
                "Failed to deserialize grove: bad magic (not a format 0.2 grove stream)");
        }

        int order;
        detail::read_pod(is, order);
        if (!is) {
            throw std::runtime_error("Failed to deserialize grove: stream error reading order");
        }
        // Validate here (as std::runtime_error, like every other malformed-stream
        // path) rather than letting grove(order) throw std::invalid_argument.
        if (order < 3) {
            throw std::runtime_error("Failed to deserialize grove: order must be >= 3");
        }
        grove g(order);

        uint32_t num_indices;
        detail::read_pod(is, num_indices);
        if (!is) {
            throw std::runtime_error("Failed to deserialize grove: stream error reading index count");
        }
        // num_indices is file-controlled: reject a count the stream can't back
        // before reserving (each index entry is >= a name-length field + a root
        // block id on disk). Guards the reserve against a malicious OOM.
        detail::require_backing_bytes(is, num_indices,
                                      sizeof(uint32_t) + sizeof(detail::block_id), "index");
        std::vector<std::pair<std::string, detail::block_id>> index_roots;
        index_roots.reserve(num_indices);
        for (uint32_t i = 0; i < num_indices; ++i) {
            uint32_t name_len;
            detail::read_pod(is, name_len);
            if (!is) {
                throw std::runtime_error("Failed to deserialize grove: stream error reading index name length");
            }
            detail::require_backing_bytes(is, name_len, 1, "index name");
            std::string name(name_len, '\0');
            is.read(name.data(), static_cast<std::streamsize>(name_len));
            if (!is) {
                throw std::runtime_error("Failed to deserialize grove: stream error reading index name");
            }
            detail::block_id root_id;
            detail::read_pod(is, root_id);
            if (!is) {
                throw std::runtime_error("Failed to deserialize grove: stream error reading root block id");
            }
            index_roots.emplace_back(std::move(name), root_id);
        }

        detail::block_id num_blocks, ext_block_begin;
        uint64_t leaf_count_field, external_count_field;
        detail::read_pod(is, num_blocks);
        detail::read_pod(is, ext_block_begin);
        detail::read_pod(is, leaf_count_field);
        detail::read_pod(is, external_count_field);
        if (!is) {
            throw std::runtime_error("Failed to deserialize grove: stream error reading directory");
        }
        if (ext_block_begin > num_blocks) {
            throw std::runtime_error("Failed to deserialize grove: external-block-begin exceeds block count");
        }
        // num_blocks is file-controlled and sizes the per-block index vectors
        // below (all <= num_blocks entries). Each block is at least an 8-byte
        // length prefix on disk, so reject a count the stream can't back before
        // allocating — otherwise a tiny corrupt header forces a multi-GB resize.
        detail::require_backing_bytes(is, num_blocks, sizeof(uint64_t), "block");

        // Pending edge to resolve after every block is parsed (targets may live
        // in a block not yet read). Metadata is carried only when present.
        struct pending_edge {
            gdt::key<key_type, data_type>* src;
            detail::block_id tb;
            uint32_t ts;
            [[no_unique_address]] std::conditional_t<
                std::is_void_v<edge_data_type>, std::monostate, edge_data_type> meta;
        };

        std::vector<node<key_type, data_type>*> block_node(ext_block_begin, nullptr);
        std::vector<std::vector<detail::block_id>> child_ids(ext_block_begin);
        std::vector<detail::block_id> next_ids(ext_block_begin, detail::no_block);
        std::vector<std::vector<gdt::key<key_type, data_type>*>> ext_block_keys(
            num_blocks - ext_block_begin);
        std::vector<pending_edge> pending;

        auto read_key_edges = [&](std::istream& zis, gdt::key<key_type, data_type>* src) {
            uint32_t ecount;
            detail::read_pod(zis, ecount);
            if (!zis) {
                throw std::runtime_error("Failed to deserialize grove: stream error reading edge count");
            }
            for (uint32_t i = 0; i < ecount; ++i) {
                detail::block_id tb;
                uint32_t ts;
                detail::read_pod(zis, tb);
                detail::read_pod(zis, ts);
                if (!zis) {
                    throw std::runtime_error("Failed to deserialize grove: stream error reading edge");
                }
                if constexpr (std::is_void_v<edge_data_type>) {
                    pending.push_back(pending_edge{src, tb, ts, {}});
                } else {
                    auto meta = gdt::serializer<edge_data_type>::read(zis);
                    if (!zis) {
                        throw std::runtime_error("Failed to deserialize grove: stream error reading edge metadata");
                    }
                    pending.push_back(pending_edge{src, tb, ts, std::move(meta)});
                }
            }
        };

        // Node destructors recursively delete children, so on any failure we
        // free every parsed node whose parent is still null (roots free their
        // subtrees; non-root nodes are freed via their parent). g.root_nodes is
        // assigned only on success (below), so this cleanup never races grove's
        // own ownership. Counts are accumulated for directory validation.
        uint64_t actual_leaf_key_count = 0;
        decltype(g.root_nodes) local_roots;
        decltype(g.rightmost_nodes) local_rightmost;
        // One inflate state and two scratch buffers reused across all blocks
        // (inflateReset per block, no per-block inflateInit or buffer copy).
        detail::block_inflater inflater;
        std::string comp_buf;
        std::string raw_buf;
        try {
            // ---- read every block (length-prefixed, independently compressed) ----
            for (detail::block_id b = 0; b < num_blocks; ++b) {
                uint64_t clen;
                detail::read_pod(is, clen);
                if (!is) {
                    throw std::runtime_error("Failed to deserialize grove: stream error reading block length");
                }
                // clen is file-controlled: reject a value that would overflow the
                // signed streamsize cast (a negative read count is UB) before it
                // sizes the buffer.
                if (clen > static_cast<uint64_t>(std::numeric_limits<std::streamsize>::max())) {
                    throw std::runtime_error("Failed to deserialize grove: block length out of range");
                }
                // clen bytes must actually remain in the stream: reject a bogus
                // multi-GB length before resize allocates it (OOM guard) rather
                // than after the truncated read.
                detail::require_backing_bytes(is, clen, 1, "compressed block");
                comp_buf.resize(static_cast<size_t>(clen));
                is.read(comp_buf.data(), static_cast<std::streamsize>(clen));
                if (is.gcount() != static_cast<std::streamsize>(clen)) {
                    throw std::runtime_error("Failed to deserialize grove: truncated block");
                }
                inflater.decompress(comp_buf.data(), static_cast<size_t>(clen), raw_buf);
                detail::memory_streambuf mb(raw_buf.data(), raw_buf.size());
                std::istream zis(&mb);

                if (b < ext_block_begin) {
                    node<key_type, data_type>* n = node<key_type, data_type>::deserialize_block(
                        zis, order, g.key_storage, child_ids[b], next_ids[b]);
                    block_node[b] = n;
                    if (n->get_is_leaf()) {
                        actual_leaf_key_count += n->get_keys().size();
                        for (auto* k : n->get_keys()) {
                            read_key_edges(zis, k);
                        }
                    }
                } else {
                    uint32_t cnt;
                    detail::read_pod(zis, cnt);
                    if (!zis) {
                        throw std::runtime_error("Failed to deserialize grove: stream error reading external block count");
                    }
                    // cnt is file-controlled. Reject a count the writer could never
                    // have produced (it packs at most max_external_keys_per_block per
                    // block) before allocating or looping — otherwise a bogus cnt
                    // spins appending garbage into external storage until OOM.
                    if (cnt > detail::max_external_keys_per_block) {
                        throw std::runtime_error("Failed to deserialize grove: external block key count exceeds limit");
                    }
                    auto& ekeys = ext_block_keys[b - ext_block_begin];
                    ekeys.reserve(cnt);
                    for (uint32_t i = 0; i < cnt; ++i) {
                        key_type key_value = key_type::deserialize(zis);
                        if constexpr (std::is_void_v<data_type>) {
                            if (!zis) {
                                throw std::runtime_error("Failed to deserialize grove: stream error reading external key");
                            }
                            g.external_key_storage.emplace_back(key_value);
                        } else {
                            data_type data_value = gdt::serializer<data_type>::read(zis);
                            if (!zis) {
                                throw std::runtime_error("Failed to deserialize grove: stream error reading external key");
                            }
                            g.external_key_storage.emplace_back(key_value, data_value);
                        }
                        ekeys.push_back(&g.external_key_storage.back());
                    }
                    for (auto* k : ekeys) {
                        read_key_edges(zis, k);
                    }
                }
            }

            // ---- link child / next references ----
            for (detail::block_id b = 0; b < ext_block_begin; ++b) {
                node<key_type, data_type>* n = block_node[b];
                if (n == nullptr) {
                    throw std::runtime_error("Failed to deserialize grove: missing node block");
                }
                if (!n->get_is_leaf()) {
                    auto& kids = n->get_children();
                    kids.reserve(child_ids[b].size());
                    for (detail::block_id cid : child_ids[b]) {
                        if (cid >= ext_block_begin || block_node[cid] == nullptr) {
                            throw std::runtime_error("Failed to deserialize grove: invalid child block id");
                        }
                        // push before set_parent: if push_back throws, the child
                        // stays parent-less and is freed directly by the guard
                        // (never both directly and via this parent's subtree).
                        kids.push_back(block_node[cid]);
                        block_node[cid]->set_parent(n);
                    }
                } else {
                    detail::block_id nid = next_ids[b];
                    if (nid != detail::no_block) {
                        if (nid >= ext_block_begin || block_node[nid] == nullptr) {
                            throw std::runtime_error("Failed to deserialize grove: invalid next block id");
                        }
                        n->set_next(block_node[nid]);
                    }
                }
            }

            // ---- roots + rightmost leaves (staged; committed to g below) ----
            for (const auto& [name, root_id] : index_roots) {
                if (root_id >= ext_block_begin || block_node[root_id] == nullptr) {
                    throw std::runtime_error("Failed to deserialize grove: invalid root block id");
                }
                node<key_type, data_type>* root = block_node[root_id];
                local_roots[name] = root;
                node<key_type, data_type>* cur = root;
                while (!cur->get_is_leaf() && !cur->get_children().empty()) {
                    cur = cur->get_children().back();
                }
                local_rightmost[name] = cur;
            }

            // ---- resolve graph edges ----
            auto resolve_target = [&](detail::block_id tb, uint32_t ts) -> gdt::key<key_type, data_type>* {
                if (tb < ext_block_begin) {
                    node<key_type, data_type>* tn = block_node[tb];
                    if (tn == nullptr || !tn->get_is_leaf() || ts >= tn->get_keys().size()) {
                        throw std::runtime_error("Failed to deserialize grove: invalid edge target");
                    }
                    return tn->get_keys()[ts];
                }
                detail::block_id ei = tb - ext_block_begin;
                if (ei >= ext_block_keys.size() || ts >= ext_block_keys[ei].size()) {
                    throw std::runtime_error("Failed to deserialize grove: invalid external edge target");
                }
                return ext_block_keys[ei][ts];
            };
            for (auto& pe : pending) {
                gdt::key<key_type, data_type>* tgt = resolve_target(pe.tb, pe.ts);
                if constexpr (std::is_void_v<edge_data_type>) {
                    g.graph_data.add_edge(pe.src, tgt);
                } else {
                    g.graph_data.add_edge(pe.src, tgt, std::move(pe.meta));
                }
            }

            // ---- validate the directory counts against what was parsed ----
            if (actual_leaf_key_count != leaf_count_field) {
                throw std::runtime_error("Failed to deserialize grove: leaf key count mismatch");
            }
            if (static_cast<uint64_t>(g.external_key_storage.size()) != external_count_field) {
                throw std::runtime_error("Failed to deserialize grove: external key count mismatch");
            }
        } catch (...) {
            for (auto* n : block_node) {
                if (n != nullptr && n->get_parent() == nullptr) {
                    delete n;
                }
            }
            throw;
        }

        // ---- commit: grove takes ownership of the trees ----
        g.root_nodes = std::move(local_roots);
        g.rightmost_nodes = std::move(local_rightmost);
        g.leaf_key_count = static_cast<size_t>(leaf_count_field);

        return g;
    }

private: