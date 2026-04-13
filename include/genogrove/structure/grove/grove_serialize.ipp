// grove_serialize.ipp — Serialization and visualization methods for grove<>
// Included inside the grove class body. Do not include directly.

public:
    /**
     * @brief Write the grove structure to a stream in SIF (Simple Interaction Format) for visualization
     * @param os Output stream to write to
     * @param root Root node of the tree to visualize
     * @note Used for debugging and visualization; outputs node links, leaf links, and key links in SIF format
     */
    void grove_to_sif(std::ostream& os, node<key_type, data_type>* root) const {
        if (!root) { return; }
        std::queue<node<key_type, data_type>*> q;
        q.push(root);

        while (!q.empty()) {
            auto* current = q.front();
            q.pop();
            if (!current->get_is_leaf()) {
                for (auto* child : current->get_children()) {
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

                for (auto* key : current->get_keys()) {
                    auto neighbors = graph_data.get_neighbors(key);
                    for (auto* neighbor : neighbors) {
                        os << key->get_value().to_string()
                           << "\tkeylink\t"
                           << neighbor->get_value().to_string() << "\n";
                    }
                }
            }
        }
    }

    /**
     * @brief Serialize the grove to a zlib-compressed binary output stream
     * @param os Output stream to write compressed data to
     * @note The output is always zlib-compressed
     */
    void serialize(std::ostream& os) {
        detail::deflate_streambuf zbuf(os);
        std::ostream zos(&zbuf);

        // write the order
        zos.write(reinterpret_cast<const char*>(&this->order), sizeof(this->order));

        // write the root nodes
        uint32_t number_root_nodes = static_cast<uint32_t>(this->root_nodes.size());
        zos.write(reinterpret_cast<const char*>(&number_root_nodes), sizeof(number_root_nodes));

        for(auto& [key, root] : this->root_nodes) {
            uint32_t index_name_length = static_cast<uint32_t>(key.size());
            zos.write(reinterpret_cast<const char*>(&index_name_length), sizeof(index_name_length));
            zos.write(key.c_str(), index_name_length);
            root->serialize(zos);
        }

        // Write external keys
        uint32_t external_count = static_cast<uint32_t>(external_key_storage.size());
        zos.write(reinterpret_cast<const char*>(&external_count), sizeof(external_count));
        for (const auto& key : external_key_storage) {
            key.serialize(zos);
        }

        // Write graph overlay edges as flat (source_index, target_index, [metadata]) list.
        // Key indices must match the order that deserialize() populates key_storage:
        // DFS pre-order traversal of tree nodes, then external keys.
        std::unordered_map<const gdt::key<key_type, data_type>*, uint32_t> key_index;
        {
            uint32_t idx = 0;
            std::function<void(const node<key_type, data_type>*)> index_dfs =
                [&](const node<key_type, data_type>* n) {
                    for (const auto* k : n->get_keys()) { key_index[k] = idx++; }
                    if (!n->get_is_leaf()) {
                        for (const auto* child : n->get_children()) { index_dfs(child); }
                    }
                };
            for (const auto& [name, root] : root_nodes) { index_dfs(root); }
            for (const auto& k : external_key_storage) { key_index[&k] = idx++; }
        }

        uint32_t total_edges = static_cast<uint32_t>(graph_data.edge_count());
        zos.write(reinterpret_cast<const char*>(&total_edges), sizeof(total_edges));

        auto write_edges_for = [&](const auto& storage) {
            for (const auto& k : storage) {
                auto* key_ptr = const_cast<gdt::key<key_type, data_type>*>(&k);
                const auto& edges = graph_data.get_edge_list(key_ptr);
                for (const auto& e : edges) {
                    uint32_t src = key_index.at(&k);
                    uint32_t tgt = key_index.at(e.target);
                    zos.write(reinterpret_cast<const char*>(&src), sizeof(src));
                    zos.write(reinterpret_cast<const char*>(&tgt), sizeof(tgt));
                    if constexpr (!std::is_void_v<edge_data_type>) {
                        gdt::serializer<edge_data_type>::write(zos, e.metadata);
                    }
                }
            }
        };
        write_edges_for(key_storage);
        write_edges_for(external_key_storage);

        if (!zos) {
            throw std::runtime_error("Failed to serialize grove: stream error");
        }

        zbuf.finish();
    }

    /**
     * @brief Deserialize a grove from a zlib-compressed binary input stream
     * @param is Input stream to read compressed data from
     * @return Deserialized grove object
     * @note The input must be zlib-compressed
     */
    [[nodiscard]] static grove deserialize(std::istream& is) {
        detail::inflate_streambuf zbuf(is);
        std::istream zis(&zbuf);

        int order;
        zis.read(reinterpret_cast<char*>(&order), sizeof(order));
        if (!zis) {
            throw std::runtime_error("Failed to deserialize grove: stream error reading order");
        }
        grove g(order);

        uint32_t number_root_nodes;
        zis.read(reinterpret_cast<char*>(&number_root_nodes), sizeof(number_root_nodes));
        if (!zis) {
            throw std::runtime_error("Failed to deserialize grove: stream error reading root node count");
        }

        // Deserialize each root node
        for (uint32_t i = 0; i < number_root_nodes; ++i) {
            uint32_t index_name_length;
            zis.read(reinterpret_cast<char*>(&index_name_length), sizeof(index_name_length));
            if (!zis) {
                throw std::runtime_error("Failed to deserialize grove: stream error reading index name length");
            }
            std::string index_name(index_name_length, '\0');
            zis.read(index_name.data(), static_cast<std::streamsize>(index_name_length));
            if (!zis) {
                throw std::runtime_error("Failed to deserialize grove: stream error reading index name");
            }

            node<key_type, data_type>* root = node<key_type, data_type>::deserialize(
                zis, order, g.key_storage);

            node<key_type, data_type>* rightmost = g.link_leaves_and_find_rightmost(root);

            g.root_nodes[index_name] = root;
            g.rightmost_nodes[index_name] = rightmost;
        }

        // Read external keys
        uint32_t external_count;
        zis.read(reinterpret_cast<char*>(&external_count), sizeof(external_count));
        if (!zis) {
            throw std::runtime_error("Failed to deserialize grove: stream error reading external key count");
        }
        for (uint32_t i = 0; i < external_count; ++i) {
            g.external_key_storage.push_back(gdt::key<key_type, data_type>::deserialize(zis));
        }

        // Read graph overlay edges.
        // Build index → pointer array matching serialization order.
        std::vector<gdt::key<key_type, data_type>*> key_by_index;
        key_by_index.reserve(g.key_storage.size() + g.external_key_storage.size());
        for (auto& k : g.key_storage) { key_by_index.push_back(&k); }
        for (auto& k : g.external_key_storage) { key_by_index.push_back(&k); }

        uint32_t total_edges;
        zis.read(reinterpret_cast<char*>(&total_edges), sizeof(total_edges));
        if (!zis) {
            throw std::runtime_error("Failed to deserialize grove: stream error reading edge count");
        }

        for (uint32_t i = 0; i < total_edges; ++i) {
            uint32_t src, tgt;
            zis.read(reinterpret_cast<char*>(&src), sizeof(src));
            zis.read(reinterpret_cast<char*>(&tgt), sizeof(tgt));
            if (!zis) {
                throw std::runtime_error("Failed to deserialize grove: stream error reading edge");
            }
            if (src >= key_by_index.size() || tgt >= key_by_index.size()) {
                throw std::runtime_error("Failed to deserialize grove: edge index out of range");
            }
            if constexpr (std::is_void_v<edge_data_type>) {
                g.graph_data.add_edge(key_by_index[src], key_by_index[tgt]);
            } else {
                auto metadata = gdt::serializer<edge_data_type>::read(zis);
                g.graph_data.add_edge(key_by_index[src], key_by_index[tgt], std::move(metadata));
            }
        }

        return g;
    }

private:
    /**
     * @brief Link leaf nodes together and find the rightmost leaf
     * @param root Root node of the tree
     * @return Pointer to the rightmost leaf node
     * @note Links leaf nodes via their next pointers for range traversal
     * @note Called during deserialization to restore leaf chain
     */
    node<key_type, data_type>* link_leaves_and_find_rightmost(node<key_type, data_type>* root) {
        if (root == nullptr) return nullptr;

        // Find all leaf nodes via DFS
        std::vector<node<key_type, data_type>*> leaves;
        std::function<void(node<key_type, data_type>*)> collect_leaves = [&](node<key_type, data_type>* n) {
            if (n == nullptr) return;
            if (n->get_is_leaf()) {
                leaves.push_back(n);
            } else {
                for (auto* child : n->get_children()) {
                    collect_leaves(child);
                }
            }
        };
        collect_leaves(root);

        // Link leaves together and count leaf keys
        for (size_t i = 0; i < leaves.size(); ++i) {
            this->leaf_key_count += leaves[i]->get_keys().size();
            if (i + 1 < leaves.size()) {
                leaves[i]->set_next(leaves[i + 1]);
            }
        }

        // Return rightmost leaf
        return leaves.empty() ? nullptr : leaves.back();
    }