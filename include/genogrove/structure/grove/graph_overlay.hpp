/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_STRUCTURE_GRAPH_OVERLAY_HPP
#define GENOGROVE_STRUCTURE_GRAPH_OVERLAY_HPP

#include <unordered_map>
#include <vector>
#include <algorithm>
#include <type_traits>
#include <variant>
#include <mutex>

#include <genogrove/data_type/key.hpp>

namespace gdt = genogrove::data_type;

namespace genogrove::structure {

/*
 * @brief Graph overlay for grove - decoupled graph structure
 * @details Provides graph capabilities on top of any grove by storing directed edges
 * between keys. The graph is completely separate from the tree structure, allowing
 * multiple graphs with different edge metadata types on the same grove.
 *
 * @tparam key_type The key_type of the keys (e.g., interval)
 * @tparam data_type The data_type of the keys
 * @tparam edge_data_type Optional metadata for edges (void for no metadata)
 */
template<
    typename key_type,
    typename data_type = void,
    typename edge_data_type = void>
class graph_overlay {
  public:
    /*
     * @brief Edge structure representing a directed connection
     */
    struct edge {
        gdt::key<key_type, data_type>* target;

        [[no_unique_address]]
        std::conditional_t<
            std::is_void_v<edge_data_type>,
            std::monostate,
            edge_data_type
        > metadata;

        explicit edge(gdt::key<key_type, data_type>* tgt)
            : target(tgt), metadata{} {}

        template<typename M = edge_data_type>
        edge(gdt::key<key_type, data_type>* tgt, M&& meta)
            requires (!std::is_void_v<edge_data_type>)
            : target(tgt), metadata(std::forward<M>(meta)) {}
    };

    /*
     * @brief Default constructor
     */
    graph_overlay() = default;

    // Delete copy constructor and assignment (mutex is not copyable)
    graph_overlay(const graph_overlay&) = delete;
    graph_overlay& operator=(const graph_overlay&) = delete;

    // Move constructor - lock source to avoid races
    graph_overlay(graph_overlay&& other) noexcept {
        std::lock_guard<std::mutex> lock(other.graph_mutex);
        adjacency = std::move(other.adjacency);
    }

    // Move assignment - use scoped_lock to avoid deadlock
    graph_overlay& operator=(graph_overlay&& other) noexcept {
        if (this != &other) {
            std::scoped_lock lock(graph_mutex, other.graph_mutex);
            adjacency = std::move(other.adjacency);
        }
        return *this;
    }

    /*
     * @brief Add edge without metadata
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @note Thread-safe
     */
    void add_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target) {
        std::lock_guard<std::mutex> lock(graph_mutex);
        adjacency[source].emplace_back(target);
    }

    /*
     * @brief Add edge with metadata
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @param metadata Edge metadata (e.g., transcript ID, confidence)
     * @note Thread-safe
     */
    template<typename M = edge_data_type>
    void add_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target,
                  M&& metadata)
        requires (!std::is_void_v<edge_data_type>) {
        std::lock_guard<std::mutex> lock(graph_mutex);
        adjacency[source].emplace_back(target, std::forward<M>(metadata));
    }

    /*
     * @brief Remove a specific edge
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @return true if edge was found and removed, false otherwise
     * @note Thread-safe
     */
    bool remove_edge(gdt::key<key_type, data_type>* source,
                     gdt::key<key_type, data_type>* target) {
        std::lock_guard<std::mutex> lock(graph_mutex);
        auto it = adjacency.find(source);
        if (it == adjacency.end()) {
            return false;
        }

        auto& edges = it->second;
        auto edge_it = std::find_if(edges.begin(), edges.end(),
                                    [target](const edge& e) { return e.target == target; });

        if (edge_it != edges.end()) {
            edges.erase(edge_it);
            // Remove source entry if no more edges
            if (edges.empty()) {
                adjacency.erase(it);
            }
            return true;
        }
        return false;
    }

    /*
     * @brief Get all neighbor keys (targets of outgoing edges)
     * @param source Pointer to source key
     * @return Vector of pointers to neighbor keys
     * @note Thread-safe
     */
    std::vector<gdt::key<key_type, data_type>*> get_neighbors(
        gdt::key<key_type, data_type>* source) const {
        std::lock_guard<std::mutex> lock(graph_mutex);
        std::vector<gdt::key<key_type, data_type>*> neighbors;

        auto it = adjacency.find(source);
        if (it != adjacency.end()) {
            neighbors.reserve(it->second.size());
            for (const auto& e : it->second) {
                neighbors.push_back(e.target);
            }
        }
        return neighbors;
    }

    /*
     * @brief Get edge metadata for all outgoing edges
     * @param source Pointer to source key
     * @return Vector of edge metadata (only available when edge_data_type != void)
     * @note Thread-safe
     */
    template<typename M = edge_data_type>
    std::vector<M> get_edges(gdt::key<key_type, data_type>* source) const
        requires (!std::is_void_v<edge_data_type>) {
        std::lock_guard<std::mutex> lock(graph_mutex);
        std::vector<M> metadata_list;
        auto it = adjacency.find(source);
        if (it != adjacency.end()) {
            metadata_list.reserve(it->second.size());
            for (const auto& e : it->second) {
                metadata_list.push_back(e.metadata);
            }
        }
        return metadata_list;
    }

    /*
     * @brief Get all outgoing edge structures (with targets and metadata)
     * @param source Pointer to source key
     * @return Copy of vector of edges (empty if no edges)
     * @note Thread-safe; returns a copy instead of reference for thread safety
     */
    std::vector<edge> get_edge_list(gdt::key<key_type, data_type>* source) const {
        std::lock_guard<std::mutex> lock(graph_mutex);
        auto it = adjacency.find(source);
        return (it != adjacency.end()) ? it->second : std::vector<edge>{};
    }

    /*
     * @brief Get neighbors filtered by predicate on edge metadata
     * @param source Pointer to source key
     * @param predicate Function to filter edges by metadata
     * @return Vector of neighbor keys where predicate returns true
     * @note Thread-safe
     */
    template<typename Predicate>
    std::vector<gdt::key<key_type, data_type>*> get_neighbors_if(
        gdt::key<key_type, data_type>* source,
        Predicate predicate) const
        requires (!std::is_void_v<edge_data_type>) {
        std::lock_guard<std::mutex> lock(graph_mutex);
        std::vector<gdt::key<key_type, data_type>*> neighbors;

        auto it = adjacency.find(source);
        if (it != adjacency.end()) {
            for (const auto& e : it->second) {
                if (predicate(e.metadata)) {
                    neighbors.push_back(e.target);
                }
            }
        }
        return neighbors;
    }

    /*
     * @brief Check if edge exists
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @return true if edge exists, false otherwise
     * @note Thread-safe
     */
    bool has_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target) const {
        std::lock_guard<std::mutex> lock(graph_mutex);
        auto it = adjacency.find(source);
        if (it == adjacency.end()) {
            return false;
        }

        return std::any_of(it->second.begin(), it->second.end(),
                          [target](const edge& e) { return e.target == target; });
    }

    /*
     * @brief Get number of outgoing edges from a key
     * @param source Pointer to source key
     * @return Number of outgoing edges
     * @note Thread-safe
     */
    [[nodiscard]] size_t out_degree(gdt::key<key_type, data_type>* source) const {
        std::lock_guard<std::mutex> lock(graph_mutex);
        auto it = adjacency.find(source);
        return (it != adjacency.end()) ? it->second.size() : 0;
    }

    /*
     * @brief Get total number of edges in graph
     * @return Total edge count
     * @note Thread-safe
     */
    [[nodiscard]] size_t edge_count() const {
        std::lock_guard<std::mutex> lock(graph_mutex);
        size_t count = 0;
        for (const auto& [_, edges] : adjacency) {
            count += edges.size();
        }
        return count;
    }

    /*
     * @brief Get number of vertices (keys) with at least one outgoing edge
     * @return Number of keys that have outgoing edges
     * @note Thread-safe
     */
    [[nodiscard]] size_t vertex_count_with_edges() const {
        std::lock_guard<std::mutex> lock(graph_mutex);
        return adjacency.size();
    }

    /*
     * @brief Clear all edges
     * @note Thread-safe
     */
    void clear() {
        std::lock_guard<std::mutex> lock(graph_mutex);
        adjacency.clear();
    }

    /*
     * @brief Check if graph is empty
     * @return true if no edges exist
     * @note Thread-safe
     */
    [[nodiscard]] bool empty() const {
        std::lock_guard<std::mutex> lock(graph_mutex);
        return adjacency.empty();
    }

  private:
    // Adjacency list: source key → vector of edges
    std::unordered_map<gdt::key<key_type, data_type>*, std::vector<edge>> adjacency;

    // Thread safety
    mutable std::mutex graph_mutex;
};

} // namespace genogrove::structure

#endif // GENOGROVE_STRUCTURE_GRAPH_OVERLAY_HPP