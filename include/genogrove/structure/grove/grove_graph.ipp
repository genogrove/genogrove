// grove_graph.ipp — Graph overlay forwarding methods for grove<>
// Included inside the grove class body. Do not include directly.

public:
    /**
     * @brief Get reference to the graph overlay
     * @return Reference to the single graph for this grove
     * @note The graph can store edges between keys from any index (chr1, chr2, etc.)
     */
    graph_overlay<key_type, data_type, edge_data_type>& graph() {
        return graph_data;
    }

    /**
     * @brief Get const reference to the graph overlay
     * @return Const reference to the graph overlay
     */
    const graph_overlay<key_type, data_type, edge_data_type>& graph() const {
        return graph_data;
    }

    /**
     * @brief Add edge between two keys (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param target Pointer to target key
     */
    void add_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target) {
        graph_data.add_edge(source, target);
    }

    /**
     * @brief Add edge with metadata (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @param metadata Edge metadata
     */
    template<typename M = edge_data_type>
    void add_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target,
                  M&& metadata)
        requires (!std::is_void_v<edge_data_type>) {
        graph_data.add_edge(source, target, std::forward<M>(metadata));
    }

    /**
     * @brief Get all neighbors of a key (convenience forwarding to graph)
     * @param source Pointer to source key
     * @return Vector of pointers to neighbor keys (targets of outgoing edges)
     */
    [[nodiscard]] std::vector<gdt::key<key_type, data_type>*> get_neighbors(
        gdt::key<key_type, data_type>* source) const {
        return graph_data.get_neighbors(source);
    }

    /**
     * @brief Remove edge between two keys (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @return true if edge was removed, false if edge did not exist
     */
    bool remove_edge(gdt::key<key_type, data_type>* source,
                     gdt::key<key_type, data_type>* target) {
        return graph_data.remove_edge(source, target);
    }

    /**
     * @brief Get edge metadata for all outgoing edges (convenience forwarding to graph)
     * @param source Pointer to source key
     * @return Vector of edge metadata for all outgoing edges from source
     */
    template<typename M = edge_data_type>
    [[nodiscard]] std::vector<M> get_edges(gdt::key<key_type, data_type>* source) const
        requires (!std::is_void_v<edge_data_type>) {
        return graph_data.get_edges(source);
    }

    /**
     * @brief Get all outgoing edge structures (convenience forwarding to graph)
     * @param source Pointer to source key
     * @return Const reference to vector of edge structures containing target and metadata
     */
    const std::vector<typename graph_overlay<key_type, data_type, edge_data_type>::edge>&
    get_edge_list(gdt::key<key_type, data_type>* source) const {
        return graph_data.get_edge_list(source);
    }

    /**
     * @brief Get neighbors filtered by predicate (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param predicate Function to filter edges by metadata
     * @return Vector of neighbor keys where predicate returns true
     */
    template<typename Predicate>
    [[nodiscard]] std::vector<gdt::key<key_type, data_type>*> get_neighbors_if(
        gdt::key<key_type, data_type>* source,
        Predicate predicate) const
        requires (!std::is_void_v<edge_data_type>) {
        return graph_data.get_neighbors_if(source, predicate);
    }

    /**
     * @brief Check if edge exists between two keys (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @return true if edge exists, false otherwise
     */
    [[nodiscard]] bool has_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target) const {
        return graph_data.has_edge(source, target);
    }

    /**
     * @brief Get number of outgoing edges from a key (convenience forwarding to graph)
     * @param source Pointer to source key
     * @return Number of outgoing edges from source key
     */
    [[nodiscard]] size_t out_degree(gdt::key<key_type, data_type>* source) const {
        return graph_data.out_degree(source);
    }

    /**
     * @brief Get total number of edges in graph (convenience forwarding to graph)
     * @return Total edge count across all vertices in the graph
     */
    [[nodiscard]] size_t edge_count() const {
        return graph_data.edge_count();
    }

    /**
     * @brief Get total number of vertices (keys) in the grove (indexed + external)
     * @return Total number of keys in the grove (including isolated vertices with no edges)
     * @note This counts all keys regardless of whether they have edges
     */
    [[nodiscard]] size_t vertex_count() const {
        return key_storage.size() + external_key_storage.size();
    }

    /**
     * @brief Get number of indexed keys (stored in B+ tree)
     * @return Number of keys indexed in the B+ tree
     * @note These keys can be found via spatial queries (intersect)
     */
    [[nodiscard]] size_t indexed_vertex_count() const {
        return key_storage.size();
    }

    /**
     * @brief Get number of external (graph-only) keys
     * @return Number of keys that can participate in graph edges but are not indexed
     * @note These keys cannot be found via spatial queries
     */
    [[nodiscard]] size_t external_vertex_count() const {
        return external_key_storage.size();
    }

    /**
     * @brief Add an external (graph-only) key with associated data
     * @param key_value The key value (e.g., interval)
     * @param data_value The data associated with the key
     * @return Pointer to the newly created external key
     * @note External keys are owned by the grove and participate in graph edges
     * @note External keys are NOT indexed in any B+ tree (no spatial queries)
     * @note External keys are serialized/deserialized with the grove
     *
     * Example usage:
     * @code
     * // Create external key for a regulatory element not needed for spatial queries
     * auto* enhancer = grove.add_external_key(interval{5000, 5500}, "enhancer_1");
     *
     * // Link indexed exon to external enhancer
     * auto* exon = grove.insert_data("chr1", interval{1000, 1200}, "exon1", sorted);
     * grove.add_edge(exon, enhancer);
     * @endcode
     */
    gdt::key<key_type, data_type>* add_external_key(key_type key_value, data_type data_value)
        requires (!std::is_void_v<data_type>) {
        external_key_storage.emplace_back(std::move(key_value), std::move(data_value));
        return &external_key_storage.back();
    }

    /**
     * @brief Add an external (graph-only) key without associated data
     * @param key_value The key value (e.g., interval)
     * @return Pointer to the newly created external key
     * @note External keys are owned by the grove and participate in graph edges
     * @note External keys are NOT indexed in any B+ tree (no spatial queries)
     * @note External keys are serialized/deserialized with the grove
     */
    gdt::key<key_type, data_type>* add_external_key(key_type key_value)
        requires (std::is_void_v<data_type>) {
        external_key_storage.emplace_back(std::move(key_value));
        return &external_key_storage.back();
    }

    /**
     * @brief Get number of vertices with outgoing edges (convenience forwarding to graph)
     * @return Number of keys that have at least one outgoing edge
     * @note This only counts keys that appear as sources in the graph adjacency
     */
    [[nodiscard]] size_t vertex_count_with_edges() const {
        return graph_data.vertex_count_with_edges();
    }

    /**
     * @brief Clear all edges in the graph (convenience forwarding to graph)
     * @note This does not delete the keys themselves, only the edge relationships
     */
    void clear_graph() {
        graph_data.clear();
    }

    /**
     * @brief Check if graph has no edges (convenience forwarding to graph)
     * @return true if no edges exist in the graph, false otherwise
     */
    [[nodiscard]] bool graph_empty() const {
        return graph_data.empty();
    }

    /**
     * @brief Create edges between adjacent keys based on a predicate
     * @tparam Predicate A callable type that takes two adjacent key pointers
     * @param keys Vector of key pointers (typically returned from bulk insert)
     * @param predicate Function that determines if/how edges should be created
     *
     * @note Iterates through consecutive pairs of keys (keys[i], keys[i+1])
     * @note Supports two predicate types:
     *       - `bool(key*, key*)`: Returns true to create simple edge, false to skip
     *       - `std::optional<edge_data_type>(key*, key*)`: Returns metadata to create edge with data, std::nullopt to skip
     *
     * @note MULTIPLE EDGE METADATA TYPES: Use std::variant as edge_data_type to support different metadata types.
     *       The optional-returning predicate can return any type implicitly convertible to edge_data_type,
     *       allowing different link_if calls to attach different metadata variants to edges.
     *
     * Example usage (boolean predicate):
     * @code
     * auto exon_keys = grove.insert_data("chr1", exons, sorted, bulk);
     * // Link exons from the same transcript
     * grove.link_if(exon_keys,
     *     [](auto* k1, auto* k2) {
     *         return k1->get_data().transcript_id == k2->get_data().transcript_id;
     *     });
     * @endcode
     *
     * Example usage (optional-returning predicate with metadata):
     * @code
     * auto exon_keys = grove.insert_data("chr1", exons, sorted, bulk);
     * // Link exons from same transcript with intron metadata
     * grove.link_if(exon_keys,
     *     [](auto* k1, auto* k2) -> std::optional<IntronMetadata> {
     *         if (k1->get_data().transcript_id == k2->get_data().transcript_id) {
     *             return IntronMetadata{length: k2->get_value().get_start() - k1->get_value().get_end()};
     *         }
     *         return std::nullopt;
     *     });
     * @endcode
     *
     * Example usage (variant edge metadata for multiple types):
     * @code
     * // Grove with variant edge metadata supporting multiple types
     * using EdgeMetadata = std::variant<IntronMetadata, ExonMetadata, UTRMetadata>;
     * grove<interval, bed_entry, EdgeMetadata> g;
     *
     * auto exon_keys = g.insert_data("chr1", exons, sorted, bulk);
     *
     * // First pass: link with intron metadata (implicitly converts to variant)
     * g.link_if(exon_keys,
     *     [](auto* k1, auto* k2) -> std::optional<IntronMetadata> {
     *         if (same_transcript(k1, k2)) {
     *             return IntronMetadata{compute_length(k1, k2)};
     *         }
     *         return std::nullopt;
     *     });
     *
     * // Second pass: link with different metadata type
     * g.link_if(exon_keys,
     *     [](auto* k1, auto* k2) -> std::optional<ExonMetadata> {
     *         if (same_reading_frame(k1, k2)) {
     *             return ExonMetadata{get_frame(k1)};
     *         }
     *         return std::nullopt;
     *     });
     * @endcode
     */
    template<typename Predicate>
    void link_if(const std::vector<gdt::key<key_type, data_type>*>& keys, Predicate predicate)
        requires std::invocable<Predicate, gdt::key<key_type, data_type>*, gdt::key<key_type, data_type>*> {
        using key_ptr = gdt::key<key_type, data_type>*;
        using result_type = std::invoke_result_t<Predicate, key_ptr, key_ptr>;

        for (size_t i = 0; i + 1 < keys.size(); ++i) {
            if constexpr (std::is_same_v<result_type, bool>) {
                // Predicate returns bool - simple edge creation
                if (predicate(keys[i], keys[i + 1])) {
                    add_edge(keys[i], keys[i + 1]);
                }
            } else if constexpr (detail::is_optional_v<result_type>) {
                // Predicate returns optional - edge with metadata
                static_assert(!std::is_void_v<edge_data_type>,
                    "link_if with optional-returning predicate requires edge_data_type != void");
                auto metadata_opt = predicate(keys[i], keys[i + 1]);
                if (metadata_opt.has_value()) {
                    add_edge(keys[i], keys[i + 1], std::move(*metadata_opt));
                }
            } else {
                static_assert(std::is_same_v<result_type, bool> || detail::is_optional_v<result_type>,
                    "Predicate must return bool or std::optional<edge_data_type>");
            }
        }
    }