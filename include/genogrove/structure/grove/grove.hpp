/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
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
#include <memory>
#include <optional>
#include <queue>

// genogrove
#include "genogrove/utility/ranges.hpp"
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/structure/grove/node.hpp>
#include <genogrove/structure/grove/graph_overlay.hpp>
#include <genogrove/structure/grove/zlib_streambuf.hpp>

namespace ggu = genogrove::utility;
namespace gdt = genogrove::data_type;

namespace genogrove::structure {
    /**
     * @brief Transparent hash for std::string keys, enabling lookup with std::string_view
     *        without allocating a temporary std::string.
     */
    struct string_hash {
        using is_transparent = void;
        size_t operator()(std::string_view sv) const noexcept {
            return std::hash<std::string_view>{}(sv);
        }
    };

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
    inline constexpr sorted_t sorted{};

    /// Global constant for bulk insertion dispatch
    inline constexpr bulk_t bulk{};

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
    explicit grove(int order, float fill_factor = 1.0f)
        : order(order), fill_factor(fill_factor) {
        if (order < 2) {
            throw std::invalid_argument("grove order must be >= 2");
        }
        if (fill_factor < 0.5f || fill_factor > 1.0f) {
            throw std::invalid_argument("grove fill_factor must be in [0.5, 1.0]");
        }
    }

    /**
     * @brief Construct a grove with default order of 3
     */
    grove() : order(3), fill_factor(1.0f) {}

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

    // Non-copyable: root_nodes are owned raw pointers, shallow copy causes double-free
    grove(const grove&) = delete;
    grove& operator=(const grove&) = delete;

    // Movable: container moves leave source empty, so source destructor deletes nothing
    grove(grove&&) noexcept = default;
    grove& operator=(grove&&) noexcept = default;

    // =========================================================================
    // Graph overlay forwarding methods
    // =========================================================================
    #include "grove_graph.ipp"

    // =========================================================================
    // Configuration & Introspection
    // =========================================================================

    /**
     * @brief Get the order (maximum capacity) of the grove
     * @return The order of the B+ tree (maximum number of keys per node)
     */
    int get_order() const {
        return this->order;
    }

    /**
     * @brief Get the fill factor for sorted insertion splits
     * @return Fill factor in [0.5, 1.0]
     */
    float get_fill_factor() const noexcept {
        return this->fill_factor;
    }

    /**
     * @brief Set the fill factor for sorted insertion splits
     * @param fill_factor Value in [0.5, 1.0]; 1.0 packs nodes fully, 0.5 is classic mid-split
     */
    void set_fill_factor(float fill_factor) {
        if (fill_factor < 0.5f || fill_factor > 1.0f) {
            throw std::invalid_argument("grove fill_factor must be in [0.5, 1.0]");
        }
        this->fill_factor = fill_factor;
    }

    /**
     * @brief Get map of all root nodes indexed by their string keys
     * @return Const reference to unordered map from index names (e.g., chromosome names) to root node pointers
     */
    const std::unordered_map<std::string, node<key_type, data_type>*, string_hash, std::equal_to<>>& get_root_nodes() const {
        return this->root_nodes;
    }

    /**
     * @brief Get the rightmost leaf node for a given index
     * @param key The index name (e.g., chromosome name)
     * @return Pointer to rightmost leaf node, or nullptr if index doesn't exist
     * @note Used for optimized sorted insertion
     */
    node<key_type, data_type>* get_rightmost_node(std::string_view key) const {
        return ggu::value_lookup(this->rightmost_nodes, key).value_or(nullptr);
    }

  private:
    // =========================================================================
    // Private tree management helpers
    // =========================================================================

    /**
     * @brief Replace the grove's root nodes with a new set
     * @param root_nodes New map of root nodes to use
     * @note Deletes all existing tree nodes, clears key storage, graph overlay,
     *       and rightmost node cache to prevent dangling pointers and memory leaks
     */
    void set_root_nodes(std::unordered_map<std::string, node<key_type, data_type>*, string_hash, std::equal_to<>> root_nodes) {
        for(auto& [_, root] : this->root_nodes) {
            delete root;
        }
        this->root_nodes = std::move(root_nodes);
        this->rightmost_nodes.clear();
        this->key_storage.clear();
        this->external_key_storage.clear();
        this->graph_data = graph_overlay<key_type, data_type, edge_data_type>{};
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
    node<key_type, data_type>* get_root(std::string_view key) const {
        return ggu::value_lookup(this->root_nodes, key).value_or(nullptr);
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

    // =========================================================================
    // Insertion methods
    // =========================================================================
    #include "grove_insert.ipp"

    // =========================================================================
    // Query methods
    // =========================================================================
    #include "grove_query.ipp"

    // =========================================================================
    // Serialization & visualization methods
    // =========================================================================
    #include "grove_serialize.ipp"

    // =========================================================================
    // Member variables
    // =========================================================================

    /// Maximum number of keys per node (B+ tree order/capacity)
    int order;

    /// Fill factor for sorted insertion splits (0.5–1.0); controls how full the left node is after a split
    float fill_factor;

    /// Map from index names (e.g., chromosome names) to their root nodes
    std::unordered_map<std::string, node<key_type, data_type>*, string_hash, std::equal_to<>> root_nodes;

    /// Cache of rightmost leaf nodes for each index (used for sorted insertion optimization)
    std::unordered_map<std::string, node<key_type, data_type>*, string_hash, std::equal_to<>> rightmost_nodes;

    /// Deque storage for all indexed keys; provides stable pointers and better cache locality than individual allocations
    std::deque<gdt::key<key_type, data_type>> key_storage;

    /// Deque storage for external (graph-only) keys that can participate in edges but are not indexed in the B+ tree
    std::deque<gdt::key<key_type, data_type>> external_key_storage;

    /// Embedded graph overlay for managing directed edges and relationships between keys
    graph_overlay<key_type, data_type, edge_data_type> graph_data;
};

} // namespace genogrove::structure

#endif // STRUCTURE_GROVE_HPP