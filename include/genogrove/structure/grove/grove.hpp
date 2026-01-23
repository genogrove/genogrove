/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef STRUCTURE_GROVE_HPP
#define STRUCTURE_GROVE_HPP

// standard
#include <string_view>
#include <unordered_map>
#include <deque>
#include <algorithm>
#include <functional>
#include <optional>
#include <mutex>
#include <shared_mutex>

// genogrove
#include "genogrove/utility/ranges.hpp"

#include <queue>
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/structure/grove/node.hpp>
#include <genogrove/structure/grove/graph_overlay.hpp>

namespace ggu = genogrove::utility;
namespace gdt = genogrove::data_type;

namespace genogrove::structure {
    /**
     * @brief Tag type for dispatching to sorted insertion algorithm
     * @note Use this when inserting data that is already sorted for optimal performance
     * @see grove::insert_data(std::string_view, key_type, data_type, sorted_t)
     */
    struct sorted_t {};

    /**
     * @brief Tag type for dispatching to bulk insertion algorithm
     */
    struct bulk_t {};

    /// Global constant for sorted insertion dispatch
    inline static constexpr sorted_t sorted{};

    /// Global constant for bulk insertion dispatch
    inline static constexpr bulk_t bulk{};

    namespace detail {
        // Type trait to detect if a type is std::optional
        template<typename T>
        struct is_optional : std::false_type {};

        template<typename T>
        struct is_optional<std::optional<T>> : std::true_type {};

        template<typename T>
        inline constexpr bool is_optional_v = is_optional<T>::value;
    }

/**
 * @class grove
 * @brief Template-based B+ tree container for efficient genomic interval storage and querying
 *
 * @tparam key_type The type of keys stored in the tree (must satisfy key_type_base concept)
 * @tparam data_type Optional associated data type (default: void for no data)
 * @tparam edge_data_type Optional edge metadata type for graph overlay (default: void)
 *
 * The grove is a specialized B+ tree implementation designed for genomic data with:
 * - Multi-index support: Separate trees for different indices (e.g., chromosomes)
 * - Optimized sorted insertion: Direct rightmost leaf insertion for pre-sorted data
 * - Graph overlay: Optional directed graph structure on top of the tree
 * - Deque-based key storage: Stable memory addresses with improved cache locality
 * - Linked leaf nodes: Efficient range traversal through leaf chaining
 *
 * Key features:
 * - Insert operations return pointers to inserted keys for immediate use
 * - Automatic node splitting when capacity (order) is exceeded
 * - Efficient overlap-based queries for genomic intervals
 * - Embedded graph_overlay for relationship management between keys
 *
 * @note The order parameter controls the maximum number of keys per node (B+ tree capacity)
 * @note Keys are stored in a std::deque owned by the grove for stable addresses
 * @note The graph overlay is embedded within the grove and shares its lifetime
 *
 * Example usage:
 * @code
 * grove<interval, bed_entry> g(100);  // Create grove with order 100
 * auto* key_ptr = g.insert_data("chr1", interval{100, 200}, data, sorted);
 * auto results = g.intersect(query_interval, "chr1");
 * g.add_edge(key_ptr, another_key);  // Build graph relationships
 * @endcode
 */
template <typename key_type, typename data_type = void, typename edge_data_type = void>
class grove {

  public:
    /**
     * @brief Construct a grove with specified order
     * @param order Determines the maximum number of k-1 keys and k children per node
     */
    grove(int order) : order(order), root_nodes(), rightmost_nodes() {}

    /**
     * @brief Construct a grove with default order of 3
     */
    grove() : order(3), root_nodes(), rightmost_nodes() {}

    // Delete copy constructor and assignment (mutex is not copyable)
    grove(const grove&) = delete;
    grove& operator=(const grove&) = delete;

    /**
     * @brief Move constructor
     * @note Moves all data from other grove; other grove is left in valid but unspecified state
     * @note Locks source mutexes to avoid races during move
     */
    grove(grove&& other) noexcept
        : order(other.order) {
        // Lock all source mutexes before moving
        std::scoped_lock lock(other.grove_mutex, other.key_storage_mutex, other.external_key_mutex);
        root_nodes = std::move(other.root_nodes);
        rightmost_nodes = std::move(other.rightmost_nodes);
        key_storage = std::move(other.key_storage);
        external_key_storage = std::move(other.external_key_storage);
        graph_data = std::move(other.graph_data);
    }

    /**
     * @brief Move assignment operator
     * @note Moves all data from other grove; other grove is left in valid but unspecified state
     * @note Locks both source and destination mutexes to avoid races
     */
    grove& operator=(grove&& other) noexcept {
        if (this != &other) {
            // Lock all mutexes from both source and destination (scoped_lock avoids deadlock)
            std::scoped_lock lock(grove_mutex, key_storage_mutex, external_key_mutex,
                                  other.grove_mutex, other.key_storage_mutex, other.external_key_mutex);
            // Clean up existing data
            for (auto& [key, root] : root_nodes) {
                delete root;
            }
            // Move data
            order = other.order;
            root_nodes = std::move(other.root_nodes);
            rightmost_nodes = std::move(other.rightmost_nodes);
            key_storage = std::move(other.key_storage);
            external_key_storage = std::move(other.external_key_storage);
            graph_data = std::move(other.graph_data);
        }
        return *this;
    }

    /**
     * @brief Destructor that cleans up all tree nodes
     * @note Recursively deletes all root nodes and their children; keys in deque are automatically freed
     */
    ~grove() {
        // Delete all root nodes (which will recursively delete their children)
        for(auto& [key, root] : root_nodes) {
            delete root;
        }
    }

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
    std::vector<gdt::key<key_type, data_type>*> get_neighbors(
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
    std::vector<M> get_edges(gdt::key<key_type, data_type>* source) const
        requires (!std::is_void_v<edge_data_type>) {
        return graph_data.get_edges(source);
    }

    /**
     * @brief Get all outgoing edge structures (convenience forwarding to graph)
     * @param source Pointer to source key
     * @return Copy of vector of edge structures containing target and metadata
     * @note Thread-safe; returns a copy for thread safety
     */
    std::vector<typename graph_overlay<key_type, data_type, edge_data_type>::edge>
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
    std::vector<gdt::key<key_type, data_type>*> get_neighbors_if(
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
    bool has_edge(gdt::key<key_type, data_type>* source,
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
     * @note Thread-safe
     */
    [[nodiscard]] size_t vertex_count() const {
        std::lock_guard<std::mutex> lock1(key_storage_mutex);
        std::lock_guard<std::mutex> lock2(external_key_mutex);
        return key_storage.size() + external_key_storage.size();
    }

    /**
     * @brief Get number of indexed data keys (leaf keys in B+ tree)
     * @return Number of data keys that can be found via spatial queries (intersect)
     * @note Excludes internal B+ tree separator keys used for navigation
     * @note Thread-safe; traverses linked leaves on each call (O(leaves))
     */
    [[nodiscard]] size_t indexed_vertex_count() const {
        std::lock_guard<std::mutex> lock(grove_mutex);
        size_t count = 0;
        for (const auto& [idx, root] : root_nodes) {
            // Find leftmost leaf
            auto* n = root;
            while (n && !n->get_is_leaf()) {
                n = n->get_child(0);
            }
            // Traverse linked leaves
            while (n) {
                count += n->get_keys().size();
                n = n->get_next();
            }
        }
        return count;
    }

    /**
     * @brief Get total number of keys in storage (including internal B+ tree keys)
     * @return Total keys including data keys, internal separator keys, and external keys
     * @note Internal separator keys are created during node splits for tree navigation
     * @note Thread-safe
     */
    [[nodiscard]] size_t total_key_count() const {
        std::lock_guard<std::mutex> lock1(key_storage_mutex);
        std::lock_guard<std::mutex> lock2(external_key_mutex);
        return key_storage.size() + external_key_storage.size();
    }

    /**
     * @brief Get number of external (graph-only) keys
     * @return Number of keys that can participate in graph edges but are not indexed
     * @note These keys cannot be found via spatial queries
     * @note Thread-safe
     */
    [[nodiscard]] size_t external_vertex_count() const {
        std::lock_guard<std::mutex> lock(external_key_mutex);
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
     * @note Thread-safe
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
        std::lock_guard<std::mutex> lock(external_key_mutex);
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
     * @note Thread-safe
     */
    gdt::key<key_type, data_type>* add_external_key(key_type key_value)
        requires (std::is_void_v<data_type>) {
        std::lock_guard<std::mutex> lock(external_key_mutex);
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
    void link_if(const std::vector<gdt::key<key_type, data_type>*>& keys, Predicate predicate) {
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

    /**
     * @brief Get the order (maximum capacity) of the grove
     * @return The order of the B+ tree (maximum number of keys per node)
     */
    int get_order() const {
        return this->order;
    }

    /**
     * @brief Set the order (maximum capacity) of the grove
     * @param order The new order value for the B+ tree
     * @warning Changing order on an existing grove with data may cause undefined behavior
     */
    void set_order(int order) {
        this->order = order;
    }

    /**
     * @brief Get map of all root nodes indexed by their string keys
     * @return Unordered map from index names (e.g., chromosome names) to root node pointers
     * @note Thread-safe; returns a copy
     */
    std::unordered_map<std::string, node<key_type, data_type>*> get_root_nodes() const {
        std::lock_guard<std::mutex> lock(grove_mutex);
        return this->root_nodes;
    }

    /**
     * @brief Replace the grove's root nodes with a new set
     * @param new_root_nodes New map of root nodes to use
     * @note This deletes all existing root nodes and clears rightmost node cache
     * @warning REQUIRES EXCLUSIVE ACCESS: No concurrent operations (insert, intersect, etc.)
     *          may be in progress when calling this method. Typically used during
     *          initialization or deserialization when no other threads access the grove.
     *          Leftover index_mutexes for removed indices are harmless and not cleared
     *          to avoid invalidating references held by concurrent callers.
     */
    void set_root_nodes(std::unordered_map<std::string, node<key_type, data_type>*> new_root_nodes) {
        std::lock_guard<std::mutex> lock(grove_mutex);
        // Delete existing root nodes
        for(auto& [_, root] : this->root_nodes) {
            delete root;
        }
        this->root_nodes = std::move(new_root_nodes);
        this->rightmost_nodes.clear();
        // Note: index_mutexes intentionally NOT cleared to avoid dangling references
        // Leftover mutexes for removed indices are harmless
    }

    /**
     * @brief Get the rightmost leaf node for a given index
     * @param key The index name (e.g., chromosome name)
     * @return Pointer to rightmost leaf node, or nullptr if index doesn't exist
     * @note Used for optimized sorted insertion
     * @note Thread-safe
     */
    node<key_type, data_type>* get_rightmost_node(std::string_view key) {
        std::string idx(key);
        std::shared_lock lock(get_index_mutex(idx));
        return get_rightmost_node_impl(key);
    }

    /**
     * @brief Get the rightmost leaf node for a given index (implementation)
     * @param key The index name (e.g., chromosome name)
     * @return Pointer to rightmost leaf node, or nullptr if index doesn't exist
     * @note Internal helper - caller must hold index lock
     * @note Acquires grove_mutex internally to protect rightmost_nodes map access
     */
    node<key_type, data_type>* get_rightmost_node_impl(std::string_view key) {
        std::lock_guard<std::mutex> lock(grove_mutex);
        return ggu::value_lookup(this->rightmost_nodes, std::string(key)).value_or(nullptr);
    }

    /**
     * @brief Set the rightmost leaf node for a given index
     * @param key The index name (e.g., chromosome name)
     * @param nd Pointer to the new rightmost leaf node
     * @note Updated automatically during node splits and insertions
     * @note Thread-safe
     */
    void set_rightmost_node(std::string_view key, node<key_type, data_type>* nd) {
        std::string idx(key);
        std::unique_lock index_lock(get_index_mutex(idx));
        std::lock_guard<std::mutex> map_lock(grove_mutex);
        this->rightmost_nodes[std::string(key)] = nd;
    }

    /**
     * @brief Get the root node for a specific index
     * @param key The index name (e.g., chromosome name) to look up
     * @return Pointer to root node, or nullptr if index doesn't exist
     * @note Thread-safe
     */
    node<key_type, data_type>* get_root(std::string_view key) {
        std::string idx(key);
        std::shared_lock lock(get_index_mutex(idx));
        return get_root_impl(key);
    }

    /**
     * @brief Get the root node for a specific index (implementation)
     * @param key The index name (e.g., chromosome name) to look up
     * @return Pointer to root node, or nullptr if index doesn't exist
     * @note Internal helper - caller must hold index lock
     * @note Acquires grove_mutex internally to protect root_nodes map access
     */
    node<key_type, data_type>* get_root_impl(std::string_view key) {
        std::lock_guard<std::mutex> lock(grove_mutex);
        return ggu::value_lookup(this->root_nodes, std::string(key)).value_or(nullptr);
    }

    /**
     * @brief Create and insert a new root node for a given index
     * @param key The index name (e.g., chromosome name) for the new root
     * @return Pointer to the newly created root node
     * @throws std::runtime_error if a root already exists for this key
     * @note Thread-safe
     */
    node<key_type, data_type>* insert_root(std::string_view key) {
        std::string idx(key);
        std::unique_lock lock(get_index_mutex(idx));
        return insert_root_impl(key);
    }

    /**
     * @brief Create and insert a new root node for a given index (implementation)
     * @param key The index name (e.g., chromosome name) for the new root
     * @return Pointer to the newly created root node
     * @throws std::runtime_error if a root already exists for this key
     * @note Internal helper - caller must hold index lock
     * @note Acquires grove_mutex internally to protect root_nodes/rightmost_nodes map access
     */
    node<key_type, data_type>* insert_root_impl(std::string_view key) {
        std::lock_guard<std::mutex> lock(grove_mutex);
        // check if the root node is already in the map (error)
        std::string key_str(key);
        if(ggu::value_lookup(this->root_nodes, key_str)) {
            throw std::runtime_error("Root node already exists for key: " + key_str);
        }
        node<key_type, data_type>* root = new node<key_type, data_type>(this->order);
        this->root_nodes.insert({key_str, root});
        root->set_is_leaf(true);
        this->rightmost_nodes.insert({key_str, root});
        return root;
    }

    /**
     * @brief Insert a sorted data point into the grove using optimized sorted insertion
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @param Tag to dispatch to sorted insertion algorithm
     * @note This assumes key_value is greater than all existing keys in the specified index
     * @return Pointer to the inserted key in the tree
     * @note Thread-safe
     */
    gdt::key<key_type, data_type>* insert_data(
        std::string_view index,
        key_type key_value,
        data_type data_value,
        sorted_t) requires(!std::is_void_v<data_type>) {
        std::string idx(index);
        std::unique_lock lock(get_index_mutex(idx));
        return insert_data_sorted_impl(index, key_value, data_value);
    }

    /**
     * @brief Insert a data point into the grove using tree-based insertion
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @return Pointer to the inserted key in the tree
     * @note Uses standard tree traversal (O(log n)). For sorted data, use sorted tag for better performance.
     * @note Thread-safe
     */
    gdt::key<key_type, data_type>* insert_data(
        std::string_view index,
        key_type key_value,
        data_type data_value) requires (!std::is_void_v<data_type>) {
            std::string idx(index);
            std::unique_lock lock(get_index_mutex(idx));
            gdt::key<key_type, data_type> key(key_value, data_value);
            return insert_impl(index, key);
        }

    /**
     * @brief Bulk insert pre-sorted data using hybrid bottom-up/append approach
     * @tparam Container A container type holding pairs of (key_type, data_type)
     * @param index The index name (e.g., chromosome name) where data should be inserted
     * @param data Container of sorted (key, data) pairs
     * @param sorted_t Tag indicating data is already sorted
     * @param bulk_t Tag for bulk insertion
     * @return Vector of pointers to all inserted keys (in insertion order)
     *
     * @note HYBRID APPROACH:
     *       - If index is empty: Uses fast bottom-up tree construction (O(n))
     *       - If index has data: Uses rightmost-node append (requires new keys > existing keys)
     *
     * @note CRITICAL PRECONDITION (append mode): All keys must be strictly greater
     *       than any existing key in the index
     * @note This is the fastest bulk insert - skips both sorting and sorted checking
     * @throws std::runtime_error if precondition is violated in append mode
     * @see build_tree_bottom_up() for bottom-up construction
     * @see insert_sorted() for single-key rightmost insertion behavior
     * @note Thread-safe
     */
    template<typename Container>
    std::vector<gdt::key<key_type, data_type>*> insert_data(std::string_view index,
        const Container& data, sorted_t, bulk_t)
        requires (!std::is_void_v<data_type>) {
        std::string idx(index);
        std::unique_lock lock(get_index_mutex(idx));

        std::vector<gdt::key<key_type, data_type>*> inserted_keys;
        if (data.empty()) return inserted_keys;

        // Check if index is empty - use bottom-up construction for best performance
        node<key_type, data_type>* rightmost_node = this->get_rightmost_node_impl(index);

        if (rightmost_node == nullptr || rightmost_node->get_keys().empty()) {
            // Index is empty - use fast bottom-up tree construction

            // Delete existing empty root node to avoid memory leak
            auto* existing_root = this->get_root_impl(index);
            if (existing_root != nullptr) {
                delete existing_root;
                // rightmost_nodes will be updated by build_tree_bottom_up
            }

            auto [new_root, keys] = build_tree_bottom_up(index, data);
            if (new_root != nullptr) {
                std::lock_guard<std::mutex> map_lock(grove_mutex);
                this->root_nodes[std::string(index)] = new_root;
            }
            return keys;
        }

        // Index has existing data - use rightmost-node append approach
        // Runtime guard: verify precondition that all new keys are greater than existing max
        const auto& max_existing_key = rightmost_node->get_keys().back()->get_value();
        const auto& min_new_key = data.begin()->first;

        if (!(min_new_key > max_existing_key)) {
            throw std::runtime_error(
                "Bulk insert precondition violated: all keys must be strictly greater "
                "than existing keys in index '" + std::string(index) + "'. "
                "Use individual insert() or insert_data() without bulk tag for unsorted insertion."
            );
        }

        // Perform rightmost-node append
        node<key_type, data_type>* current_node = rightmost_node;
        inserted_keys.reserve(data.size());

        for (const auto& [key_value, data_value] : data) {
            gdt::key<key_type, data_type> key(key_value, data_value);
            auto* key_ptr = allocate_key(key);
            current_node->insert_key_ptr(key_ptr);
            inserted_keys.push_back(key_ptr);

            // Handle overflow
            if (current_node->get_keys().size() == this->order) {
                if (current_node->get_parent() == nullptr) {
                    // Root node overflow
                    auto* new_root = new node<key_type, data_type>(this->order);
                    new_root->add_child(current_node, 0);
                    new_root->set_is_leaf(false);
                    current_node->set_parent(new_root);
                    split_node(new_root, 0);
                    {
                        std::lock_guard<std::mutex> map_lock(grove_mutex);
                        this->root_nodes[std::string(index)] = new_root;
                    }
                    current_node = this->get_rightmost_node_impl(index);
                } else {
                    // Internal node overflow
                    int child_index = current_node->get_parent()->get_children().size() - 1;
                    split_node(current_node->get_parent(), child_index);
                    current_node = this->get_rightmost_node_impl(index);
                }
            }
        }
        return inserted_keys;
    }

    /**
     * @brief Bulk insert data (sorts internally if needed)
     * @tparam Container A container type holding pairs of (key_type, data_type)
     * @param index The index name (e.g., chromosome name) where data should be inserted
     * @param data Container of (key, data) pairs
     * @param bulk_t Tag for bulk insertion
     * @return Vector of pointers to all inserted keys (in insertion order)
     *
     * @note HYBRID APPROACH:
     *       - If index is empty: Uses fast bottom-up tree construction (O(n))
     *       - If index has data: Uses rightmost-node append (requires new keys > existing keys)
     *
     * @note CRITICAL PRECONDITION (append mode): After sorting, all keys must be strictly greater
     *       than any existing key in the index
     * @note Data is always sorted (O(n log n)) before insertion
     * @note For pre-sorted data, use the sorted tag variant to skip sorting: insert_data(index, data, sorted, bulk)
     * @throws std::runtime_error if precondition is violated in append mode
     * @note Thread-safe
     *
     * Example usage:
     * @code
     * // When data is already sorted - use sorted tag (fastest, skips sort):
     * auto keys = grove.insert_data("chr1", sorted_data, sorted, bulk);
     *
     * // When data may or may not be sorted - just use bulk tag (always sorts):
     * auto keys = grove.insert_data("chr1", data, bulk);  // Sorts data (O(n log n)), then bulk inserts
     * @endcode
     */
    template<typename Container>
    std::vector<gdt::key<key_type, data_type>*> insert_data(std::string_view index, Container data, bulk_t)
        requires (!std::is_void_v<data_type>) {
        if (data.empty()) return {};

        // Sort the data (O(n log n)) - done outside of lock
        std::sort(data.begin(), data.end(),
            [](const auto& a, const auto& b) { return a.first < b.first; });

        // Use sorted bulk insert (which will acquire the lock)
        return insert_data(index, data, sorted, bulk);
    }

    /**
     * @brief Insert a key into the grove at the specified index
     * @param index The index name (e.g., chromosome name) where the key should be inserted
     * @param key The key object to insert
     * @return Pointer to the inserted key in the tree
     * @throws std::runtime_error if insertion fails
     * @note Creates a new root if index doesn't exist; handles node splits automatically
     * @note Thread-safe
     */
    gdt::key<key_type, data_type>* insert(std::string_view index, gdt::key<key_type, data_type>& key) {
        std::string idx(index);
        std::unique_lock lock(get_index_mutex(idx));
        return insert_impl(index, key);
    }

    /**
     * @brief Insert a key into the grove at the specified index (implementation)
     * @param index The index name (e.g., chromosome name) where the key should be inserted
     * @param key The key object to insert
     * @return Pointer to the inserted key in the tree
     * @throws std::runtime_error if insertion fails
     * @note Internal helper - caller must hold index lock
     */
    gdt::key<key_type, data_type>* insert_impl(std::string_view index, gdt::key<key_type, data_type>& key) {
        // get the root node for the given chromosome (or create a new one if it doesn't exist)
        node<key_type, data_type>* root = this->get_root_impl(index);
        if(root == nullptr) {
            root = this->insert_root_impl(index);
        }
        auto* key_ptr = insert_iter(root, key);
        if(key_ptr == nullptr) {
            // insertion failed
            throw std::runtime_error("Failed to insert key into tree");
            return nullptr;
        }
        if(root->get_keys().size() == this->order) {
            node<key_type, data_type>* new_root = new node<key_type, data_type>(this->order);
            new_root->add_child(root, 0);
            new_root->set_is_leaf(false);
            root->set_parent(new_root);
            split_node(new_root, 0);
            root = new_root;
            {
                std::lock_guard<std::mutex> map_lock(grove_mutex);
                this->root_nodes[std::string(index)] = root; // update the root node in the map
            }
        }
        return key_ptr;
    }

    /**
     * @brief Recursively insert a key into the tree starting from a given node
     * @param node The node to start insertion from
     * @param key The key object to insert
     * @return Pointer to the inserted key in the tree, or nullptr on failure
     * @note This is a helper function for insert(); handles recursive traversal and leaf insertion
     */
    gdt::key<key_type, data_type>* insert_iter(node<key_type, data_type>* node, gdt::key<key_type, data_type>& key) {
        if(!node) {
            throw std::runtime_error("Null node passed to insert_iter");
        }
        if(node->get_is_leaf()) {
            try {
                // Allocate key from grove's deque storage
                auto* key_ptr = allocate_key(key);
                node->insert_key_ptr(key_ptr);
                return key_ptr;

            } catch(const std::exception& e) {
                std::cerr << "Failed to insert key into leaf node: " << e.what() << std::endl;
                return nullptr;
            }
        } else {
            int child_index = 0;
            while(child_index < node->get_keys().size() &&
                  key.get_value() > node->get_keys()[child_index]->get_value()) {
                child_index++;
            }
            auto* key_ptr = insert_iter(node->get_child(child_index), key);
            if(node->get_child(child_index)->get_keys().size() == this->order) {
                split_node(node, child_index);
            }
            return key_ptr;
        }
    }

    /**
     * @brief Split an overflowing node by creating a new sibling and redistributing keys
     * @param parent The parent node whose child will be split
     * @param index The index of the child node to split within the parent
     * @note Splits keys at midpoint, promotes separator to parent, links leaf nodes if applicable
     * @note Automatically updates rightmost_nodes cache when splitting leaf nodes
     */
    void split_node(node<key_type, data_type>* parent, int index) {
        node<key_type, data_type>* child = parent->get_child(index);
        node<key_type, data_type>* new_child = new node<key_type, data_type>(this->order);
        new_child->set_parent(parent);
        int mid = (this->order + 2 - 1) / 2;

        // move overflowing keys to the new child node (and resize the original node)
        new_child->set_is_leaf(child->get_is_leaf());

        new_child->get_keys().assign(child->get_keys().begin() + mid, child->get_keys().end());
        child->get_keys().resize(mid); // resize the original node

        // update the parent (aka new child node)
        parent->get_children().insert(parent->get_children().begin() + index + 1, new_child);
        gdt::key<key_type, data_type> parent_key{child->calc_parent_key()};
        // Allocate parent key from grove's deque storage
        auto* parent_key_ptr = allocate_key(parent_key);
        parent->get_keys().insert(parent->get_keys().begin() + index, parent_key_ptr);

        if(child->get_is_leaf()) {
            new_child->set_next(child->get_next());
            new_child->set_next(child->get_next());
            child->set_next(new_child);

            // update the rightmost node if necessary
            {
                std::lock_guard<std::mutex> map_lock(grove_mutex);
                for(auto& [key, rightmost_node] : this->rightmost_nodes) {
                    if(rightmost_node == child) {
                        this->rightmost_nodes[key] = new_child;
                        break;
                    }
                }
            }
        } else {
            new_child->get_children().assign(child->get_children().begin() + mid,
                child->get_children().end());
            child->get_children().resize(mid); // resize the original node
        }
    }

    /**
     * @brief Insert a pre-sorted data point into the grove using optimized sorted insertion (implementation)
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @return Pointer to the inserted key in the tree
     * @note Assumes key_value is greater than all existing keys in the specified index
     * @note Internal helper - caller must hold index lock
     */
    gdt::key<key_type, data_type>* insert_data_sorted_impl(std::string_view index, key_type key_value, data_type data_value)
        requires (!std::is_void_v<data_type>) {
            gdt::key<key_type, data_type> key(key_value, data_value); // create the key object
            return insert_sorted_impl(index, key);
    }

    /**
     * @brief Insert a pre-sorted key directly to the rightmost leaf node for optimal performance
     * @param index The index name (e.g., chromosome name) where the key should be inserted
     * @param key The key object to insert
     * @return Pointer to the inserted key in the tree
     * @note Assumes key is greater than all existing keys in the index; bypasses tree traversal
     * @note Significantly faster than regular insert() for sorted data
     * @note Thread-safe
     */
    gdt::key<key_type, data_type>* insert_sorted(std::string_view index, gdt::key<key_type, data_type>& key) {
        std::string idx(index);
        std::unique_lock lock(get_index_mutex(idx));
        return insert_sorted_impl(index, key);
    }

    /**
     * @brief Insert a pre-sorted key directly to the rightmost leaf node (implementation)
     * @param index The index name (e.g., chromosome name) where the key should be inserted
     * @param key The key object to insert
     * @return Pointer to the inserted key in the tree
     * @note Internal helper - caller must hold index lock
     */
    gdt::key<key_type, data_type>* insert_sorted_impl(std::string_view index, gdt::key<key_type, data_type>& key) {
        node<key_type, data_type>* root = this->get_root_impl(index);
        if(root == nullptr) {
            root = this->insert_root_impl(index);
            // Allocate key from grove's deque storage
            auto* key_ptr = allocate_key(key);
            root->insert_key_ptr(key_ptr);
            return key_ptr;
        } else {
            // get rightmost node and insert
            node<key_type, data_type>* rightmost_node = this->get_rightmost_node_impl(index);
            // Allocate key from grove's deque storage
            auto* key_ptr = allocate_key(key);
            rightmost_node->insert_key_ptr(key_ptr);

            // handle key overflow in node
            if(rightmost_node->get_keys().size() == this->order) {
                // check if the rightmost node is the root
                if(rightmost_node->get_parent() == nullptr) {
                    node<key_type, data_type>* new_root = new node<key_type, data_type>(this->order);
                    new_root->add_child(rightmost_node, 0);
                    new_root->set_is_leaf(false);
                    rightmost_node->set_parent(new_root);
                    split_node(new_root, 0);
                    {
                        std::lock_guard<std::mutex> map_lock(grove_mutex);
                        this->root_nodes[std::string(index)] = new_root;
                    }
                } else {
                    // regular split - rightmost child is at last index
                    int child_index = rightmost_node->get_parent()->get_children().size() - 1;
                    split_node(rightmost_node->get_parent(), child_index);
                }
            }
            return key_ptr;
        }
    }

    /**
     * @brief Find all keys that overlap with the query across all indices
     * @param query The query key to search for (e.g., genomic interval)
     * @return query_result containing all overlapping keys from all indices
     * @note Searches all root nodes (all chromosomes/indices) in the grove
     * @note Thread-safe (acquires shared locks on all indices)
     */
    gdt::query_result<key_type, data_type> intersect(key_type& query) {
        gdt::query_result<key_type, data_type> result{query};

        // Get a snapshot of root nodes while holding grove_mutex
        std::unordered_map<std::string, node<key_type, data_type>*> roots_snapshot;
        {
            std::lock_guard<std::mutex> lock(grove_mutex);
            roots_snapshot = this->root_nodes;
        }

        // Search each index with its own shared lock
        for(const auto& [index, root] : roots_snapshot) {
            std::shared_lock lock(get_index_mutex(index));
            search_iter(root, query, result);
        }
        return result;
    }

    /**
     * @brief Find all keys that overlap with the query in a specific index
     * @param query The query key to search for (e.g., genomic interval)
     * @param index The index name (e.g., chromosome name) to search within
     * @return query_result containing all overlapping keys from the specified index
     * @note Returns empty result if index doesn't exist
     * @note Thread-safe
     */
    gdt::query_result<key_type, data_type> intersect(key_type& query, const std::string& index) {
        std::shared_lock lock(get_index_mutex(index));
        gdt::query_result<key_type, data_type> result{query};
        node<key_type, data_type>* root = this->get_root_impl(index);

        if(root == nullptr) {
            return result;
        }
        search_iter(root, query, result);
        return result;
    }

    /**
     * @brief Recursively search the tree for keys that overlap with the query
     * @param node The current node being searched
     * @param query The query key to search for
     * @param result Reference to query_result where matching keys are accumulated
     * @note Uses overlap detection to prune search space and traverse linked leaf nodes
     * @note Optimized for interval types with early termination when no overlap is possible
     */
    void search_iter(node<key_type, data_type>* node, key_type& query,
        gdt::query_result<key_type, data_type>& result) {
        if(node == nullptr) {
            return;
        }
        if(node->get_is_leaf()) {
            int last_match = -1;
            for(int i = 0; i < node->get_keys().size(); ++i) {
                if(key_type::overlap(node->get_keys()[i]->get_value(), query)) {
                    last_match = i;
                    result.add_key(node->get_keys()[i]);
                }
            }
            // check if there is an overlap within the next node (if so we have to traverse it)
            // Check first key of next node to avoid unnecessary traversal
            if(node->get_next() != nullptr && node->get_next()->get_keys().size() > 0) {
                auto& first_key_next = node->get_next()->get_keys()[0]->get_value();

                // For interval types: check coordinate overlap only
                if constexpr (requires { key_type::is_interval; }) {
                    if (!(first_key_next.get_start() > query.get_end() ||
                          query.get_start() > first_key_next.get_end())) {
                        search_iter(node->get_next(), query, result);
                    }
                } else {
                    // For non-interval types, use regular overlap
                    if(key_type::overlap(first_key_next, query)) {
                        search_iter(node->get_next(), query, result);
                    }
                }
            }
        } else {
            // abort if left of key (not overlapping) - only neded for intervals
            if constexpr (requires { key_type::is_interval; }) {
                if(query < node->get_keys()[0]->get_value() &&
                   !key_type::overlap(node->get_keys()[0]->get_value(), query)) {
                    return;
                }
            }

            int i = 0;
            while(i < node->get_keys().size() && (query > node->get_keys()[i]->get_value()) &&
                  !key_type::overlap(node->get_keys()[i]->get_value(), query)) {
                i++;
            }
            if(node->get_children()[i] != nullptr) {
                search_iter(node->get_children()[i], query, result);
            }
        }
    }

    /**
     * @brief Write the grove structure to a stream in SIF (Simple Interaction Format) for visualization
     * @param os Output stream to write to
     * @param root Root node of the tree to visualize
     * @note Used for debugging and visualization; outputs node and leaf links in SIF format
     */
    void grove_to_sif(std::ostream& os, node<key_type, data_type>* root) {
        if(!root) { return; }
        std::queue<node<key_type, data_type>*> q;
        q.push(root);

        while(!q.empty()) {
            // extract the node and remove from queue
            node<key_type, data_type>* node = q.front();
            q.pop();
            if(!node->get_is_leaf()) {
                // if not leaf add connected
                for(auto child : node->get_children()) {
                    q.push(child);
                    os << "|";
                    node->print_keys(os, "|");
                    os << "\tnodelink\t|";
                    child->print_keys(os,"|");
                    os << "\n";
                }
            } else {
                // if leaf print keys and link to next (if not nullptr)
                if(node->get_next()) {
                    os << "|";
                    node->print_keys(os, "|");
                    os << "\tleaflink\t|";
                    node->get_next()->print_keys(os, "|");
                    os << "\n";
                }

                // also print links to other keys
                // for(auto key : node->get_keys()) {
                //     auto neighbors = this->get_neighbors(key);
                //     for(auto neighbor : neighbors) {
                //         os << key->to_string() << "\tkeylink\t" << neighbor->to_string() << "\n";
                //     }
                // }
            }
        }
    }

    /**
     * @brief Serialize the grove to a binary output stream
     * @param os Output stream to write binary data to
     * @note Writes order, number of root nodes, then each root (index name + tree structure)
     * @note Also writes external (graph-only) keys
     * @note Rightmost nodes are NOT serialized; they are recalculated during deserialization
     */
    void serialize(std::ostream& os) {
        // write the order of the tree
        os.write(reinterpret_cast<const char*>(&this->order), sizeof(this->order));

        // write the root nodes
        size_t number_root_nodes = this->root_nodes.size();
        os.write(reinterpret_cast<const char*>(&number_root_nodes), sizeof(number_root_nodes));

        // serialize the root nodes
        for(auto& [key, root] : this->root_nodes) {
            size_t index_name_length = key.size();
            os.write(reinterpret_cast<const char*>(&index_name_length), sizeof(index_name_length));
            os.write(key.c_str(), index_name_length);
            root->serialize(os);
        }
        // note: we don't serialize rightmost nodes - and rather calculate them quickly when deserializing

        // Write external keys count
        size_t external_count = external_key_storage.size();
        os.write(reinterpret_cast<const char*>(&external_count), sizeof(external_count));

        // Write each external key
        for (const auto& key : external_key_storage) {
            key.serialize(os);
        }
    }

    /**
     * @brief Deserialize a grove from a binary input stream
     * @param is Input stream to read binary data from
     * @return Deserialized grove object
     * @note Reads order and root nodes; recalculates rightmost nodes and leaf links after loading
     * @note Also reads external (graph-only) keys
     */
    [[nodiscard]] static grove deserialize(std::istream& is) {
        int order;
        is.read(reinterpret_cast<char*>(&order), sizeof(order));
        grove g(order);

        size_t number_root_nodes;
        is.read(reinterpret_cast<char*>(&number_root_nodes), sizeof(number_root_nodes));

        // Deserialize each root node
        for (size_t i = 0; i < number_root_nodes; ++i) {
            // Read index name
            size_t index_name_length;
            is.read(reinterpret_cast<char*>(&index_name_length), sizeof(index_name_length));
            std::string index_name(index_name_length, '\0');
            is.read(index_name.data(), static_cast<std::streamsize>(index_name_length));

            // Deserialize the tree for this index
            node<key_type, data_type>* root = node<key_type, data_type>::deserialize(is, order);

            // Move heap-allocated keys to grove's deque and fix pointers
            g.rehome_keys(root);

            // Link leaf nodes and find rightmost
            node<key_type, data_type>* rightmost = g.link_leaves_and_find_rightmost(root);

            // Store root and rightmost
            g.root_nodes[index_name] = root;
            g.rightmost_nodes[index_name] = rightmost;
        }

        // Read external keys count
        size_t external_count;
        is.read(reinterpret_cast<char*>(&external_count), sizeof(external_count));

        // Read each external key - directly into external_key_storage
        for (size_t i = 0; i < external_count; ++i) {
            g.external_key_storage.push_back(gdt::key<key_type, data_type>::deserialize(is));
        }

        return g;
    }

  private:
    // ========== Thread Safety Infrastructure ==========

    /**
     * @brief Get or create a mutex for a specific index
     * @param index The index name (e.g., chromosome name)
     * @return Reference to the shared_mutex for this index
     * @note Protected by grove_mutex when creating new entries
     */
    std::shared_mutex& get_index_mutex(const std::string& index) {
        std::lock_guard<std::mutex> lock(grove_mutex);
        return index_mutexes[index];
    }

    // ========== Key Allocation ==========

    /**
     * @brief Allocate a key in the grove's deque storage and return a stable pointer to it
     * @param key The key object to allocate and store
     * @return Pointer to the newly allocated key in the deque
     * @note Keys are stored in a deque for stable addresses (required by graph_overlay)
     * @note Deque storage provides better cache locality than individual heap allocations
     * @note Thread-safe via key_storage_mutex
     */
    gdt::key<key_type, data_type>* allocate_key(const gdt::key<key_type, data_type>& key) {
        std::lock_guard<std::mutex> lock(key_storage_mutex);
        key_storage.push_back(key);
        return &key_storage.back();
    }

    /**
     * @brief Build a B+ tree from bottom-up using pre-sorted data
     * @tparam Container A container type holding pairs of (key_type, data_type)
     * @param index The index name for which to build the tree
     * @param data Container of sorted (key, data) pairs
     * @return Pair of (root node pointer, vector of inserted key pointers)
     *
     * @note This is significantly faster than incremental insertion for large datasets
     * @note Builds leaf nodes with optimal fill factor, then constructs internal layers
     * @note Automatically links leaf nodes and sets parent/child relationships
     * @note Time complexity: O(n) with better constants than incremental insertion
     */
    template<typename Container>
    std::pair<node<key_type, data_type>*, std::vector<gdt::key<key_type, data_type>*>>
    build_tree_bottom_up(std::string_view index, const Container& data)
        requires (!std::is_void_v<data_type>) {

        std::vector<gdt::key<key_type, data_type>*> inserted_keys;
        if (data.empty()) {
            return {nullptr, inserted_keys};
        }

        // Step 1: Create leaf nodes from sorted data
        std::vector<node<key_type, data_type>*> leaves;
        inserted_keys.reserve(data.size());

        // Fill factor: use (order - 1) keys per node for optimal space utilization
        // This gives us fuller nodes than the ~50% from split-based insertion
        const int keys_per_leaf = this->order - 1;

        size_t data_idx = 0;
        while (data_idx < data.size()) {
            auto* leaf = new node<key_type, data_type>(this->order);
            leaf->set_is_leaf(true);

            // Fill this leaf node with up to keys_per_leaf keys
            size_t keys_in_this_leaf = 0;
            auto it = data.begin();
            std::advance(it, data_idx);

            while (keys_in_this_leaf < keys_per_leaf && data_idx < data.size()) {
                gdt::key<key_type, data_type> key(it->first, it->second);
                auto* key_ptr = allocate_key(key);
                leaf->get_keys().push_back(key_ptr);
                inserted_keys.push_back(key_ptr);

                ++keys_in_this_leaf;
                ++data_idx;
                if (data_idx < data.size()) {
                    ++it;
                }
            }

            leaves.push_back(leaf);
        }

        // Step 2: Link leaf nodes together for range queries
        for (size_t i = 0; i < leaves.size() - 1; ++i) {
            leaves[i]->set_next(leaves[i + 1]);
        }

        // Set rightmost leaf for this index
        if (!leaves.empty()) {
            std::lock_guard<std::mutex> map_lock(grove_mutex);
            this->rightmost_nodes[std::string(index)] = leaves.back();
        }

        // Step 3: Build internal layers bottom-up
        std::vector<node<key_type, data_type>*> current_layer = leaves;

        while (current_layer.size() > 1) {
            std::vector<node<key_type, data_type>*> parent_layer;

            // Each internal node can have up to 'order' children
            const int children_per_node = this->order;

            size_t child_idx = 0;
            while (child_idx < current_layer.size()) {
                auto* parent = new node<key_type, data_type>(this->order);
                parent->set_is_leaf(false);

                // Add up to 'order' children to this parent
                size_t children_in_this_parent = 0;
                while (children_in_this_parent < children_per_node && child_idx < current_layer.size()) {
                    auto* child = current_layer[child_idx];
                    parent->get_children().push_back(child);
                    child->set_parent(parent);

                    // Add separator key for all children except the last
                    if (children_in_this_parent > 0) {
                        // The separator key is the aggregate of the previous child
                        key_type separator = current_layer[child_idx - 1]->calc_parent_key();
                        gdt::key<key_type, data_type> sep_key(separator);
                        auto* sep_key_ptr = allocate_key(sep_key);
                        parent->get_keys().push_back(sep_key_ptr);
                    }

                    ++children_in_this_parent;
                    ++child_idx;
                }

                parent_layer.push_back(parent);
            }

            current_layer = parent_layer;
        }

        // The last remaining node is the root
        return {current_layer[0], inserted_keys};
    }

    /**
     * @brief Move heap-allocated keys from deserialized nodes to grove's deque storage
     * @param n Root node of the tree to process
     * @note Recursively walks the tree and moves all keys to key_storage for stable pointers
     * @note Called during deserialization to transfer ownership to the grove
     */
    void rehome_keys(node<key_type, data_type>* n) {
        if (n == nullptr) return;

        // Process keys in this node - move from heap to deque
        auto& keys = n->get_keys();
        for (size_t i = 0; i < keys.size(); ++i) {
            // Copy key to deque
            key_storage.push_back(*keys[i]);
            // Delete heap-allocated key
            delete keys[i];
            // Update pointer to point to deque entry
            keys[i] = &key_storage.back();
        }

        // Recursively process children (only for internal nodes)
        if (!n->get_is_leaf()) {
            for (auto* child : n->get_children()) {
                rehome_keys(child);
            }
        }
    }

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

        // Link leaves together
        for (size_t i = 0; i + 1 < leaves.size(); ++i) {
            leaves[i]->set_next(leaves[i + 1]);
        }

        // Return rightmost leaf
        return leaves.empty() ? nullptr : leaves.back();
    }

    /// Maximum number of keys per node (B+ tree order/capacity)
    int order;

    /// Map from index names (e.g., chromosome names) to their root nodes
    std::unordered_map<std::string, node<key_type, data_type>*> root_nodes;

    /// Cache of rightmost leaf nodes for each index (used for sorted insertion optimization)
    std::unordered_map<std::string, node<key_type, data_type>*> rightmost_nodes;

    /// Deque storage for all indexed keys; provides stable pointers and better cache locality than individual allocations
    std::deque<gdt::key<key_type, data_type>> key_storage;

    /// Deque storage for external (graph-only) keys that can participate in edges but are not indexed in the B+ tree
    std::deque<gdt::key<key_type, data_type>> external_key_storage;

    /// Embedded graph overlay for managing directed edges and relationships between keys
    graph_overlay<key_type, data_type, edge_data_type> graph_data;

    // ========== Thread Safety Mutexes ==========

    /// Protects root_nodes and rightmost_nodes map modifications and index_mutexes creation
    mutable std::mutex grove_mutex;

    /// Protects key_storage deque modifications
    mutable std::mutex key_storage_mutex;

    /// Protects external_key_storage deque modifications
    mutable std::mutex external_key_mutex;

    /// Per-index mutexes for tree operations (allows concurrent access to different indices)
    mutable std::unordered_map<std::string, std::shared_mutex> index_mutexes;
};

} // namespace genogrove::structure

#endif // STRUCTURE_GROVE_HPP
