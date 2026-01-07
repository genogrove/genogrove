/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef STRUCTURE_GROVE_HPP
#define STRUCTURE_GROVE_HPP

// standard
#include <string_view>
#include <unordered_map>
#include <deque>
#include <algorithm>

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
     * @brief Tag type for dispatching to unsorted insertion algorithm
     * @see grove::insert_data(std::string_view, key_type, data_type, unsorted_t)
     */
    struct unsorted_t {};

    /**
     * @brief Tag type for dispatching to sorted insertion algorithm
     * @note Use this when inserting data that is already sorted for optimal performance
     * @see grove::insert_data(std::string_view, key_type, data_type, sorted_t)
     */
    struct sorted_t {};

    /**
     * @brief Tag type for dispatching to bulk insertion algorithm
     * @note Currently not fully implemented
     */
    struct bulk_t {};

    /// Global constant for unsorted insertion dispatch
    inline static constexpr unsorted_t unsorted{};

    /// Global constant for sorted insertion dispatch
    inline static constexpr sorted_t sorted{};

    /// Global constant for bulk insertion dispatch
    inline static constexpr bulk_t bulk{};

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
     * @brief Get number of vertices with outgoing edges (convenience forwarding to graph)
     * @return Number of keys that have at least one outgoing edge
     */
    [[nodiscard]] size_t vertex_count() const {
        return graph_data.vertex_count();
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
     */
    std::unordered_map<std::string, node<key_type, data_type>*> get_root_nodes() const {
        return this->root_nodes;
    }

    /**
     * @brief Replace the grove's root nodes with a new set
     * @param root_nodes New map of root nodes to use
     * @note This deletes all existing root nodes and clears rightmost node cache
     */
    void set_root_nodes(std::unordered_map<std::string, node<key_type, data_type>*> root_nodes) {
        // this->root_nodes = root_nodes;
        for(auto& [_, root] : root_nodes) {
            delete root;
        }
        this->root_nodes = std::move(root_nodes);
        this->rightmost_nodes.clear();
    }

    /**
     * @brief Get the rightmost leaf node for a given index
     * @param key The index name (e.g., chromosome name)
     * @return Pointer to rightmost leaf node, or nullptr if index doesn't exist
     * @note Used for optimized sorted insertion
     */
    node<key_type, data_type>* get_rightmost_node(std::string_view key) {
        return ggu::value_lookup(this->rightmost_nodes, std::string(key)).value_or(nullptr);
    }

    /**
     * @brief Set the rightmost leaf node for a given index
     * @param key The index name (e.g., chromosome name)
     * @param node Pointer to the new rightmost leaf node
     * @note Updated automatically during node splits and insertions
     */
    void set_rightmost_node(std::string_view key, node<key_type, data_type>* node) {
        this->rightmost_nodes[std::string(key)] = node;
    }

    /**
     * @brief Get the root node for a specific index
     * @param key The index name (e.g., chromosome name) to look up
     * @return Pointer to root node, or nullptr if index doesn't exist
     */
    node<key_type, data_type>* get_root(std::string_view key) {
        return ggu::value_lookup(this->root_nodes, std::string(key)).value_or(nullptr);
    }

    /**
     * @brief Create and insert a new root node for a given index
     * @param key The index name (e.g., chromosome name) for the new root
     * @return Pointer to the newly created root node
     * @throws std::runtime_error if a root already exists for this key
     */
    node<key_type, data_type>* insert_root(std::string_view key) {
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
     * @brief Insert a data point into the grove using unsorted insertion
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @param Tag to dispatch to unsorted insertion algorithm
     * @return Pointer to the inserted key in the tree
     */
    gdt::key<key_type, data_type>* insert_data(
        std::string_view index,
        key_type key_value,
        data_type data_value,
        unsorted_t) requires (!std::is_void_v<data_type>) {
            gdt::key<key_type, data_type> key(key_value, data_value);
            return insert(index, key);
    }

    /**
     * @brief Insert a sorted data point into the grove using optimized sorted insertion
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @param Tag to dispatch to sorted insertion algorithm
     * @note This assumes key_value is greater than all existing keys in the specified index
     * @return Pointer to the inserted key in the tree
     */
    gdt::key<key_type, data_type>* insert_data(
        std::string_view index,
        key_type key_value,
        data_type data_value,
        sorted_t) requires(!std::is_void_v<data_type>) {
        return insert_data_sorted(index, key_value, data_value);
    }

    /**
     * @brief Insert a data point into the grove (defaults to unsorted insertion)
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @return Pointer to the inserted key in the tree
     */
    gdt::key<key_type, data_type>* insert_data(
        std::string_view index,
        key_type key_value,
        data_type data_value) requires (!std::is_void_v<data_type>) {
            return insert_data(index, key_value, data_value, unsorted);
        }

    /**
     * @brief Bulk insert pre-sorted data (fastest - no sorting or checking)
     * @tparam Container A container type holding pairs of (key_type, data_type)
     * @param index The index name (e.g., chromosome name) where data should be inserted
     * @param data Container of sorted (key, data) pairs
     * @param sorted_t Tag indicating data is already sorted
     * @param bulk_t Tag for bulk insertion
     *
     * @note CRITICAL PRECONDITION: Data must be sorted AND all keys must be strictly
     *       greater than any existing key in the index (rightmost-node insertion)
     * @note This is the fastest bulk insert - skips both sorting and sorted checking
     * @throws std::runtime_error if precondition is violated
     * @see insert_sorted() for single-key rightmost insertion behavior
     */
    template<typename Container>
    void insert_data(std::string_view index, const Container& data, sorted_t, bulk_t)
        requires (!std::is_void_v<data_type>) {
        if (data.empty()) return;

        // Perform sorted bulk insert using rightmost node (like insert_sorted)
        node<key_type, data_type>* current_node = this->get_rightmost_node(index);

        // If no root exists, create one
        if (current_node == nullptr) {
            auto* root = this->insert_root(index);
            current_node = root;
        } else {
            // Runtime guard: verify precondition that all new keys are greater than existing max
            if (!current_node->get_keys().empty()) {
                const auto& max_existing_key = current_node->get_keys().back()->get_value();
                const auto& min_new_key = data.begin()->first;

                if (!(min_new_key > max_existing_key)) {
                    throw std::runtime_error(
                        "Bulk insert precondition violated: all keys must be strictly greater "
                        "than existing keys in index '" + std::string(index) + "'. "
                        "Use individual insert() or insert_data() without bulk tag for unsorted insertion."
                    );
                }
            }
        }

        for (const auto& [key_value, data_value] : data) {
            gdt::key<key_type, data_type> key(key_value, data_value);
            auto* key_ptr = allocate_key(key);
            current_node->insert_key_ptr(key_ptr);

            // Handle overflow
            if (current_node->get_keys().size() == this->order) {
                if (current_node->get_parent() == nullptr) {
                    // Root node overflow
                    auto* new_root = new node<key_type, data_type>(this->order);
                    new_root->add_child(current_node, 0);
                    new_root->set_is_leaf(false);
                    current_node->set_parent(new_root);
                    split_node(new_root, 0);
                    this->root_nodes[std::string(index)] = new_root;
                    current_node = this->get_rightmost_node(index);
                } else {
                    // Issue #2: Find actual child index instead of assuming last position
                    auto* parent = current_node->get_parent();
                    int child_index = 0;
                    auto& children = parent->get_children();
                    for(; child_index < static_cast<int>(children.size()); ++child_index) {
                        if(children[child_index] == current_node) {
                            break;
                        }
                    }
                    split_node(parent, child_index);
                    
                    // Issue #1: Propagate overflow handling up the tree
                    // After splitting the leaf's parent, check if parent overflowed and handle recursively
                    node<key_type, data_type>* ancestor = parent;
                    while(ancestor != nullptr && ancestor->get_keys().size() == this->order) {
                        if(ancestor->get_parent() == nullptr) {
                            // ancestor is the root and needs to be split
                            auto* new_root = new node<key_type, data_type>(this->order);
                            new_root->add_child(ancestor, 0);
                            new_root->set_is_leaf(false);
                            ancestor->set_parent(new_root);
                            split_node(new_root, 0);
                            this->root_nodes[std::string(index)] = new_root;
                            break; // root split is terminal
                        } else {
                            // Find ancestor's index in its parent
                            auto* grandparent = ancestor->get_parent();
                            int ancestor_index = 0;
                            auto& grandparent_children = grandparent->get_children();
                            for(; ancestor_index < static_cast<int>(grandparent_children.size()); ++ancestor_index) {
                                if(grandparent_children[ancestor_index] == ancestor) {
                                    break;
                                }
                            }
                            split_node(grandparent, ancestor_index);
                            ancestor = grandparent; // move up to check grandparent
                        }
                    }
                    
                    current_node = this->get_rightmost_node(index);
                }
            }
        }
    }

    /**
     * @brief Bulk insert unsorted data (sorts internally)
     * @tparam Container A container type holding pairs of (key_type, data_type)
     * @param index The index name (e.g., chromosome name) where data should be inserted
     * @param data Container of unsorted (key, data) pairs
     * @param unsorted_t Tag indicating data needs sorting
     * @param bulk_t Tag for bulk insertion
     *
     * @note CRITICAL PRECONDITION: After sorting, all keys must be strictly greater
     *       than any existing key in the index (rightmost-node insertion)
     * @note Data is sorted in-place before insertion
     * @throws std::runtime_error if precondition is violated
     */
    template<typename Container>
    void insert_data(std::string_view index, Container data, unsorted_t, bulk_t)
        requires (!std::is_void_v<data_type>) {
        if (data.empty()) return;

        // Sort the data
        std::sort(data.begin(), data.end(),
            [](const auto& a, const auto& b) { return a.first < b.first; });

        // Use sorted bulk insert
        insert_data(index, data, sorted, bulk);
    }

    /**
     * @brief Bulk insert with automatic sorted detection (convenience)
     * @tparam Container A container type holding pairs of (key_type, data_type)
     * @param index The index name (e.g., chromosome name) where data should be inserted
     * @param data Container of (key, data) pairs
     * @param bulk_t Tag for bulk insertion
     *
     * @note CRITICAL PRECONDITION: All keys must be strictly greater than any existing
     *       key in the index (rightmost-node insertion)
     * @note Checks if data is sorted (O(n) overhead) and sorts if needed
     * @note For performance, prefer sorted or unsorted overloads when data state is known
     * @throws std::runtime_error if precondition is violated
     *
     * Example usage:
     * @code
     * // When you know data state - use explicit tags (faster):
     * grove.insert_data("chr1", sorted_data, sorted, bulk);    // No check, fastest
     * grove.insert_data("chr1", unsorted_data, unsorted, bulk); // Sorts
     *
     * // When unsure - use auto-detect (convenience):
     * grove.insert_data("chr1", data, bulk);  // Checks if sorted, then acts
     * @endcode
     */
    template<typename Container>
    void insert_data(std::string_view index, Container data, bulk_t)
        requires (!std::is_void_v<data_type>) {
        if (data.empty()) return;

        // Check if data is already sorted (O(n) overhead)
        bool data_is_sorted = std::is_sorted(data.begin(), data.end(),
            [](const auto& a, const auto& b) { return a.first < b.first; });

        if (data_is_sorted) {
            // Use sorted bulk insert (no sort needed)
            insert_data(index, data, sorted, bulk);
        } else {
            // Use unsorted bulk insert (will sort)
            insert_data(index, std::move(data), unsorted, bulk);
        }
    }

    /**
     * @brief Insert a key into the grove at the specified index
     * @param index The index name (e.g., chromosome name) where the key should be inserted
     * @param key The key object to insert
     * @return Pointer to the inserted key in the tree
     * @throws std::runtime_error if insertion fails
     * @note Creates a new root if index doesn't exist; handles node splits automatically
     */
    gdt::key<key_type, data_type>* insert(std::string_view index, gdt::key<key_type, data_type>& key) {
        // get the root node for the given chromosome (or create a new one if it doesn't exist)
        node<key_type, data_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = this->insert_root(index);
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
            this->root_nodes[std::string(index)] = root; // update the root node in the map
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
            child->set_next(new_child);

            // update the rightmost node if necessary
            for(auto& [key, rightmost_node] : this->rightmost_nodes) {
                if(rightmost_node == child) {
                    this->rightmost_nodes[key] = new_child;
                    break;
                }
            }
        } else {
            new_child->get_children().assign(child->get_children().begin() + mid,
                child->get_children().end());
            child->get_children().resize(mid); // resize the original node
            
            // Update parent pointers for moved children
            for(auto* moved_child : new_child->get_children()) {
                if(moved_child != nullptr) {
                    moved_child->set_parent(new_child);
                }
            }
        }
    }

    /**
     * @brief Insert a pre-sorted data point into the grove using optimized sorted insertion
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @return Pointer to the inserted key in the tree
     * @note Assumes key_value is greater than all existing keys in the specified index
     * @note This is a helper function called by insert_data(..., sorted_t)
     */
    gdt::key<key_type, data_type>* insert_data_sorted(std::string_view index, key_type key_value, data_type data_value)
        requires (!std::is_void_v<data_type>) {
            gdt::key<key_type, data_type> key(key_value, data_value); // create the key object
            return insert_sorted(index, key);
    }

    /**
     * @brief Insert a pre-sorted key directly to the rightmost leaf node for optimal performance
     * @param index The index name (e.g., chromosome name) where the key should be inserted
     * @param key The key object to insert
     * @return Pointer to the inserted key in the tree
     * @note Assumes key is greater than all existing keys in the index; bypasses tree traversal
     * @note Significantly faster than regular insert() for sorted data
     */
    gdt::key<key_type, data_type>* insert_sorted(std::string_view index, gdt::key<key_type, data_type>& key) {
        node<key_type, data_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = this->insert_root(index);
            // Allocate key from grove's deque storage
            auto* key_ptr = allocate_key(key);
            root->insert_key_ptr(key_ptr);
            return key_ptr;
        } else {
            // get rightmost node and insert
            node<key_type, data_type>* rightmost_node = this->get_rightmost_node(index);
            
            // Issue #3: Handle null rightmost_node (can happen if rightmost_nodes not initialized)
            if(rightmost_node == nullptr) {
                // Fallback to generic insertion when rightmost_node is not available
                return insert(index, key);
            }
            
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
                    this->root_nodes[std::string(index)] = new_root;
                } else {
                    // Issue #2: Find actual child index instead of assuming last position
                    auto* parent = rightmost_node->get_parent();
                    int child_index = 0;
                    auto& children = parent->get_children();
                    for(; child_index < static_cast<int>(children.size()); ++child_index) {
                        if(children[child_index] == rightmost_node) {
                            break;
                        }
                    }
                    split_node(parent, child_index);
                    
                    // Issue #1: Propagate overflow handling up the tree
                    // After splitting the leaf's parent, check if parent overflowed and handle recursively
                    node<key_type, data_type>* current = parent;
                    while(current != nullptr && current->get_keys().size() == this->order) {
                        if(current->get_parent() == nullptr) {
                            // current is the root and needs to be split
                            node<key_type, data_type>* new_root = new node<key_type, data_type>(this->order);
                            new_root->add_child(current, 0);
                            new_root->set_is_leaf(false);
                            current->set_parent(new_root);
                            split_node(new_root, 0);
                            this->root_nodes[std::string(index)] = new_root;
                            break; // root split is terminal
                        } else {
                            // Find current's index in its parent before splitting
                            auto* grandparent = current->get_parent();
                            int current_index = 0;
                            auto& grandparent_children = grandparent->get_children();
                            for(; current_index < static_cast<int>(grandparent_children.size()); ++current_index) {
                                if(grandparent_children[current_index] == current) {
                                    break;
                                }
                            }
                            split_node(grandparent, current_index);
                            current = grandparent; // move up to check grandparent for overflow
                        }
                    }
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
     */
    gdt::query_result<key_type, data_type> intersect(key_type& query) {
        gdt::query_result<key_type, data_type> result{query};
        // if index is not specified, all root nodes need to be checked
        for(const auto& [index, root] : this->get_root_nodes()) {
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
     */
    gdt::query_result<key_type, data_type> intersect(key_type& query, const std::string& index) {
        gdt::query_result<key_type, data_type> result{query};
        node<key_type, data_type>* root = this->get_root(index);

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
        // note: we don't serialize rightmost node - and rather calculate them quickly when deserializing
    }

    /**
     * @brief Deserialize a grove from a binary input stream
     * @param is Input stream to read binary data from
     * @return Deserialized grove object
     * @note Reads order and root nodes; recalculates rightmost nodes after loading
     * @warning Current implementation is incomplete (missing root node deserialization loop)
     */
    grove deserialize(std::istream& is) {
        int order;
        is.read(reinterpret_cast<char*>(&order), sizeof(order));
        grove grove(order);

        size_t number_root_nodes;
        is.read(reinterpret_cast<char*>(&number_root_nodes), sizeof(number_root_nodes));

    }

  private:
    /**
     * @brief Allocate a key in the grove's deque storage and return a stable pointer to it
     * @param key The key object to allocate and store
     * @return Pointer to the newly allocated key in the deque
     * @note Keys are stored in a deque for stable addresses (required by graph_overlay)
     * @note Deque storage provides better cache locality than individual heap allocations
     */
    gdt::key<key_type, data_type>* allocate_key(const gdt::key<key_type, data_type>& key) {
        key_storage.push_back(key);
        return &key_storage.back();
    }

    /// Maximum number of keys per node (B+ tree order/capacity)
    int order;

    /// Map from index names (e.g., chromosome names) to their root nodes
    std::unordered_map<std::string, node<key_type, data_type>*> root_nodes;

    /// Cache of rightmost leaf nodes for each index (used for sorted insertion optimization)
    std::unordered_map<std::string, node<key_type, data_type>*> rightmost_nodes;

    /// Deque storage for all keys; provides stable pointers and better cache locality than individual allocations
    std::deque<gdt::key<key_type, data_type>> key_storage;

    /// Embedded graph overlay for managing directed edges and relationships between keys
    graph_overlay<key_type, data_type, edge_data_type> graph_data;
};

} // namespace genogrove::structure

#endif // STRUCTURE_GROVE_HPP
