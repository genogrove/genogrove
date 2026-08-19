/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GRAPH_OVERLAY_HPP
#define GENOGROVE_STRUCTURE_GRAPH_OVERLAY_HPP

#include <algorithm>
#include <concepts>
#include <list>
#include <stdexcept>
#include <type_traits>
#include <unordered_map>
#include <variant>
#include <vector>

#include <genogrove/data_type/key.hpp>

namespace gdt = genogrove::data_type;

namespace genogrove::structure {

/**
 * @brief Graph overlay for grove - decoupled graph structure
 * @details Provides graph capabilities on top of any grove by storing directed edges
 * between keys. The graph is completely separate from the tree structure, allowing
 * multiple graphs with different edge metadata types on the same grove.
 *
 * Every edge is stored once, in @ref edges_, and indexed under both of its endpoints
 * in @ref incident so it can be found from either the source side (forward traversal)
 * or the target side (reverse traversal) without scanning the whole graph.
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
    /**
     * @brief Edge structure representing a directed connection
     */
    struct edge {
        gdt::key<key_type, data_type>* source;
        gdt::key<key_type, data_type>* target;

        [[no_unique_address]]
        std::conditional_t<
            std::is_void_v<edge_data_type>,
            std::monostate,
            edge_data_type
        > metadata;

        edge(gdt::key<key_type, data_type>* src, gdt::key<key_type, data_type>* tgt)
            : source(src), target(tgt), metadata{} {}

        template<typename M = edge_data_type>
        edge(gdt::key<key_type, data_type>* src, gdt::key<key_type, data_type>* tgt, M&& meta)
            requires (!std::is_void_v<edge_data_type>)
            : source(src), target(tgt), metadata(std::forward<M>(meta)) {}
    };

    /**
     * @brief Default constructor
     */
    graph_overlay() = default;

    /**
     * @brief Add edge without metadata
     * @param source Pointer to source key
     * @param target Pointer to target key
     */
    void add_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target) {
        if (!source || !target) {
            throw std::invalid_argument("add_edge: source and target must not be null");
        }
        register_edge(edges_.emplace(edges_.end(), source, target));
    }

    /**
     * @brief Add edge with metadata
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @param metadata Edge metadata (e.g., transcript ID, confidence)
     */
    template<typename M = edge_data_type>
    void add_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target,
                  M&& metadata)
        requires (!std::is_void_v<edge_data_type>) {
        if (!source || !target) {
            throw std::invalid_argument("add_edge: source and target must not be null");
        }
        register_edge(edges_.emplace(edges_.end(), source, target, std::forward<M>(metadata)));
    }

    /**
     * @brief Remove a specific directed edge
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @return true if edge was found and removed, false otherwise
     */
    bool remove_edge(gdt::key<key_type, data_type>* source,
                     gdt::key<key_type, data_type>* target) {
        auto it = incident.find(source);
        if (it == incident.end()) {
            return false;
        }
        for (auto edge_it : it->second) {
            if (edge_it->source == source && edge_it->target == target) {
                erase_edge(edge_it);
                return true;
            }
        }
        return false;
    }

    /**
     * @brief Get all neighbor keys (targets of outgoing edges)
     * @param source Pointer to source key
     * @return Vector of pointers to neighbor keys
     */
    [[nodiscard]] std::vector<gdt::key<key_type, data_type>*> get_neighbors(
        const gdt::key<key_type, data_type>* source) const {
        if (!source) {
            throw std::invalid_argument("get_neighbors: source must not be null");
        }
        std::vector<gdt::key<key_type, data_type>*> neighbors;
        auto it = incident.find(source);
        if (it != incident.end()) {
            neighbors.reserve(it->second.size());
            for (const auto& edge_it : it->second) {
                if (edge_it->source == source) {
                    neighbors.push_back(edge_it->target);
                }
            }
        }
        return neighbors;
    }

    /**
     * @brief Get all source keys of incoming edges (reverse of get_neighbors)
     * @param target Pointer to target key
     * @return Vector of pointers to keys that have an edge pointing at target
     */
    [[nodiscard]] std::vector<gdt::key<key_type, data_type>*> get_in_neighbors(
        const gdt::key<key_type, data_type>* target) const {
        if (!target) {
            throw std::invalid_argument("get_in_neighbors: target must not be null");
        }
        std::vector<gdt::key<key_type, data_type>*> sources;
        auto it = incident.find(target);
        if (it != incident.end()) {
            sources.reserve(it->second.size());
            for (const auto& edge_it : it->second) {
                if (edge_it->target == target) {
                    sources.push_back(edge_it->source);
                }
            }
        }
        return sources;
    }

    /**
     * @brief Get edge metadata for all outgoing edges
     * @param source Pointer to source key
     * @return Vector of edge metadata (only available when edge_data_type != void)
     */
    template<typename M = edge_data_type>
    [[nodiscard]] std::vector<M> get_edges(const gdt::key<key_type, data_type>* source) const
        requires (!std::is_void_v<edge_data_type>) {
        std::vector<M> metadata_list;
        auto it = incident.find(source);
        if (it != incident.end()) {
            metadata_list.reserve(it->second.size());
            for (const auto& edge_it : it->second) {
                if (edge_it->source == source) {
                    metadata_list.push_back(edge_it->metadata);
                }
            }
        }
        return metadata_list;
    }

    /**
     * @brief Get edge metadata for all incoming edges (reverse of get_edges)
     * @param target Pointer to target key
     * @return Vector of edge metadata (only available when edge_data_type != void)
     */
    template<typename M = edge_data_type>
    [[nodiscard]] std::vector<M> get_in_edges(const gdt::key<key_type, data_type>* target) const
        requires (!std::is_void_v<edge_data_type>) {
        std::vector<M> metadata_list;
        auto it = incident.find(target);
        if (it != incident.end()) {
            metadata_list.reserve(it->second.size());
            for (const auto& edge_it : it->second) {
                if (edge_it->target == target) {
                    metadata_list.push_back(edge_it->metadata);
                }
            }
        }
        return metadata_list;
    }

    /**
     * @brief Get all outgoing edge structures (with source, target and metadata)
     * @param source Pointer to source key
     * @return Vector of edges (empty if no outgoing edges)
     */
    [[nodiscard]] std::vector<edge> get_edge_list(const gdt::key<key_type, data_type>* source) const {
        std::vector<edge> result;
        auto it = incident.find(source);
        if (it != incident.end()) {
            result.reserve(it->second.size());
            for (const auto& edge_it : it->second) {
                if (edge_it->source == source) {
                    result.push_back(*edge_it);
                }
            }
        }
        return result;
    }

    /**
     * @brief Get all incoming edge structures (reverse of get_edge_list)
     * @param target Pointer to target key
     * @return Vector of edges (empty if no incoming edges)
     */
    [[nodiscard]] std::vector<edge> get_in_edge_list(const gdt::key<key_type, data_type>* target) const {
        std::vector<edge> result;
        auto it = incident.find(target);
        if (it != incident.end()) {
            result.reserve(it->second.size());
            for (const auto& edge_it : it->second) {
                if (edge_it->target == target) {
                    result.push_back(*edge_it);
                }
            }
        }
        return result;
    }

    /**
     * @brief Get neighbors filtered by predicate on edge metadata
     * @param source Pointer to source key
     * @param predicate Function to filter edges by metadata
     * @return Vector of neighbor keys where predicate returns true
     */
    template<typename Predicate>
    [[nodiscard]] std::vector<gdt::key<key_type, data_type>*> get_neighbors_if(
        const gdt::key<key_type, data_type>* source,
        Predicate predicate) const
        requires (!std::is_void_v<edge_data_type> && std::predicate<Predicate, const edge_data_type&>) {
        std::vector<gdt::key<key_type, data_type>*> neighbors;
        auto it = incident.find(source);
        if (it != incident.end()) {
            neighbors.reserve(it->second.size());
            for (const auto& edge_it : it->second) {
                if (edge_it->source == source && predicate(edge_it->metadata)) {
                    neighbors.push_back(edge_it->target);
                }
            }
        }
        return neighbors;
    }

    /**
     * @brief Get in-neighbors filtered by predicate on edge metadata (reverse of get_neighbors_if)
     * @param target Pointer to target key
     * @param predicate Function to filter edges by metadata
     * @return Vector of source keys where predicate returns true
     */
    template<typename Predicate>
    [[nodiscard]] std::vector<gdt::key<key_type, data_type>*> get_in_neighbors_if(
        const gdt::key<key_type, data_type>* target,
        Predicate predicate) const
        requires (!std::is_void_v<edge_data_type> && std::predicate<Predicate, const edge_data_type&>) {
        std::vector<gdt::key<key_type, data_type>*> sources;
        auto it = incident.find(target);
        if (it != incident.end()) {
            sources.reserve(it->second.size());
            for (const auto& edge_it : it->second) {
                if (edge_it->target == target && predicate(edge_it->metadata)) {
                    sources.push_back(edge_it->source);
                }
            }
        }
        return sources;
    }

    /**
     * @brief Check if a directed edge exists
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @return true if edge exists, false otherwise
     */
    [[nodiscard]] bool has_edge(const gdt::key<key_type, data_type>* source,
                  const gdt::key<key_type, data_type>* target) const {
        auto it = incident.find(source);
        if (it == incident.end()) {
            return false;
        }
        return std::ranges::any_of(it->second, [source, target](const auto& edge_it) {
            return edge_it->source == source && edge_it->target == target;
        });
    }

    /**
     * @brief Get number of outgoing edges from a key
     * @param source Pointer to source key
     * @return Number of outgoing edges
     */
    [[nodiscard]] size_t out_degree(const gdt::key<key_type, data_type>* source) const {
        auto it = incident.find(source);
        if (it == incident.end()) return 0;
        return static_cast<size_t>(std::ranges::count_if(it->second, [source](const auto& edge_it) {
            return edge_it->source == source;
        }));
    }

    /**
     * @brief Get number of incoming edges to a key
     * @param target Pointer to target key
     * @return Number of incoming edges
     */
    [[nodiscard]] size_t in_degree(const gdt::key<key_type, data_type>* target) const {
        auto it = incident.find(target);
        if (it == incident.end()) return 0;
        return static_cast<size_t>(std::ranges::count_if(it->second, [target](const auto& edge_it) {
            return edge_it->target == target;
        }));
    }

    /**
     * @brief Get total number of edges in graph
     * @return Total edge count
     */
    [[nodiscard]] size_t edge_count() const {
        return edges_.size();
    }

    /**
     * @brief Get number of vertices (keys) with at least one outgoing edge
     * @return Number of keys that have outgoing edges
     */
    [[nodiscard]] size_t vertex_count_with_edges() const {
        size_t count = 0;
        for (const auto& [k, edge_its] : incident) {
            bool has_out = std::ranges::any_of(edge_its, [k](const auto& edge_it) {
                return edge_it->source == k;
            });
            if (has_out) ++count;
        }
        return count;
    }

    /**
     * @brief Remove all outgoing edges from a source key
     * @param source Pointer to source key
     * @return Number of edges removed
     */
    size_t remove_edges_from(gdt::key<key_type, data_type>* source) {
        auto it = incident.find(source);
        if (it == incident.end()) return 0;
        std::vector<edge_iterator> to_remove;
        for (const auto& edge_it : it->second) {
            if (edge_it->source == source) {
                to_remove.push_back(edge_it);
            }
        }
        for (auto edge_it : to_remove) {
            erase_edge(edge_it);
        }
        return to_remove.size();
    }

    /**
     * @brief Remove all incoming edges to a target key
     * @param target Pointer to target key
     * @return Number of edges removed
     * @note O(in-degree) — only touches edges incident to target
     */
    size_t remove_edges_to(gdt::key<key_type, data_type>* target) {
        auto it = incident.find(target);
        if (it == incident.end()) return 0;
        std::vector<edge_iterator> to_remove;
        for (const auto& edge_it : it->second) {
            if (edge_it->target == target) {
                to_remove.push_back(edge_it);
            }
        }
        for (auto edge_it : to_remove) {
            erase_edge(edge_it);
        }
        return to_remove.size();
    }

    /**
     * @brief Remove all edges (both incoming and outgoing) involving a key
     * @param key Pointer to the key
     * @return Total number of edges removed
     */
    size_t remove_all_edges(gdt::key<key_type, data_type>* key) {
        size_t count = remove_edges_from(key);
        count += remove_edges_to(key);
        return count;
    }

    /**
     * @brief Remove all edges matching a predicate
     * @param predicate Callable taking const edge& and returning bool
     * @return Number of edges removed
     */
    template<typename Predicate>
    size_t remove_edges_if(Predicate predicate)
        requires std::predicate<Predicate, const edge&> {
        size_t count = 0;
        for (auto it = edges_.begin(); it != edges_.end(); ) {
            if (predicate(*it)) {
                auto next = std::next(it);
                erase_edge(it);
                it = next;
                ++count;
            } else {
                ++it;
            }
        }
        return count;
    }

    /**
     * @brief Rewrite every source/target pointer using an old → new remap
     * @param remap Map from old key pointer to new key pointer
     *
     * Rewrites `edge.source`/`edge.target` for every edge that appears in `remap`,
     * then rebuilds the incidence index from scratch against the rewritten edge
     * list. Keys absent from the remap (e.g. external keys, which were not
     * migrated) are preserved unchanged. Intended for grove::compact() to migrate
     * the graph after rebuilding the indexed key storage.
     */
    void remap_keys(
        const std::unordered_map<const gdt::key<key_type, data_type>*,
                                 gdt::key<key_type, data_type>*>& remap) {
        if (remap.empty()) return;
        for (auto& e : edges_) {
            if (auto it = remap.find(e.source); it != remap.end()) e.source = it->second;
            if (auto it = remap.find(e.target); it != remap.end()) e.target = it->second;
        }
        incident.clear();
        incident.reserve(edges_.size() * 2); // each edge touches up to 2 distinct keys
        for (auto it = edges_.begin(); it != edges_.end(); ++it) {
            register_edge(it);
        }
    }

  public:
    using edge_iterator = std::list<edge>::iterator;

    /**
     * @brief Find the `occurrence`-th edge iterator for a specific directed edge.
     *
     * Parallel edges (multiple add_edge calls for the same source/target pair,
     * e.g. distinct transcript metadata between the same exon pair) file
     * multiple matches under `incident[source]`, in the order they were added.
     * `occurrence` (0-indexed) selects among them, so a caller resolving several
     * incoming refs that name the same source can walk 0, 1, 2, ... to get each
     * distinct edge instead of always the first.
     *
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @param occurrence 0-indexed match to return among parallel source→target edges
     * @return Iterator to the edge, or edge_end() if not found
     */
    [[nodiscard]] edge_iterator find_edge(
        const gdt::key<key_type, data_type>* source,
        const gdt::key<key_type, data_type>* target,
        std::size_t occurrence = 0) {
        auto it = incident.find(source);
        if (it == incident.end()) return edges_.end();
        for (auto eit : it->second) {
            if (eit->source == source && eit->target == target) {
                if (occurrence == 0) return eit;
                --occurrence;
            }
        }
        return edges_.end();
    }

    /// Past-the-end iterator for the edge list.
    [[nodiscard]] edge_iterator edge_end() { return edges_.end(); }

    /**
     * @brief Reorder the incoming side of incident[target] to match a given
     *        sequence of edge iterators, in place.
     *
     * Used by grove::deserialize() to restore the on-disk incoming-edge order
     * that add_edge() replay (in block-visitation order) does not preserve.
     *
     * Overwrites each target==target slot in incident[target], left to right,
     * with the corresponding entry from `ordered` — it never erases or
     * appends, so slots are never physically relocated. This matters for a
     * self-loop, which occupies one shared slot serving both directions
     * (register_edge files it once, not twice): erase-then-append would move
     * it to the end of the bucket, corrupting get_edge_list(target)'s
     * outgoing order for any key with both a self-loop and other outgoing
     * edges. In-place overwrite leaves every non-incoming slot — including a
     * self-loop's shared slot when `ordered` already agrees with its current
     * position — untouched.
     *
     * If `ordered` has fewer entries than there are incoming slots (only
     * possible when a source referenced in the on-disk incoming section
     * couldn't be resolved to an edge — a malformed/tampered file, since a
     * file this codebase's own writer produces always has consistent
     * outgoing/incoming sections), the remaining slots keep whatever
     * add_edge() replay left there rather than being dropped — a matching
     * edge stays reachable, just not necessarily in the right order.
     *
     * @param target Pointer to the target key whose incoming order to fix.
     * @param ordered_begin Beginning of an iterator range of edge_iterator values
     *        representing the desired incoming order for `target`.
     * @param ordered_end End of the iterator range.
     */
    void reorder_incoming(
        const gdt::key<key_type, data_type>* target,
        std::vector<edge_iterator>::const_iterator ordered_begin,
        std::vector<edge_iterator>::const_iterator ordered_end) {
        auto it = incident.find(target);
        if (it == incident.end()) return;
        auto oit = ordered_begin;
        for (auto& slot : it->second) {
            if (slot->target != target) continue;
            if (oit == ordered_end) break;
            slot = *oit;
            ++oit;
        }
    }

    /**
     * @brief Clear all edges
     */
    void clear() {
        edges_.clear();
        incident.clear();
    }

    /**
     * @brief Check if graph is empty
     * @return true if no edges exist
     */
    [[nodiscard]] bool empty() const {
        return edges_.empty();
    }

  private:
    using edge_list_t = std::list<edge>;

    // Files a newly-inserted edge under both of its endpoints in `incident`.
    // A self-loop (source == target) is filed once, not twice — filing it
    // twice would double-count degree for that key.
    void register_edge(edge_iterator it) {
        incident[it->source].push_back(it);
        if (it->target != it->source) {
            incident[it->target].push_back(it);
        }
    }

    // Order-preserving erase: the O(bucket-size) cost is already paid by the
    // find() above, so shifting (rather than swap-and-pop) costs nothing
    // extra while keeping accessor results in insertion order after removal.
    static void erase_iter_from(std::vector<edge_iterator>& v, edge_iterator it) {
        auto pos = std::ranges::find(v, it);
        if (pos != v.end()) {
            v.erase(pos);
        }
    }

    // Removes one edge from every structure that references it: both
    // incidence buckets, then the edge list itself. `it` is invalidated by
    // this call; no other iterator into `edges_` is affected, since erasing
    // from a std::list never moves other elements.
    void erase_edge(edge_iterator it) {
        auto src = it->source;
        auto tgt = it->target;
        if (auto mit = incident.find(src); mit != incident.end()) {
            erase_iter_from(mit->second, it);
            if (mit->second.empty()) incident.erase(mit);
        }
        if (tgt != src) {
            if (auto mit = incident.find(tgt); mit != incident.end()) {
                erase_iter_from(mit->second, it);
                if (mit->second.empty()) incident.erase(mit);
            }
        }
        edges_.erase(it);
    }

    // Single source of truth: every edge lives here exactly once. A
    // std::list is used (not std::vector) so that an iterator into it
    // remains valid until that specific edge is erased — no other edge's
    // iterator is ever invalidated as a side effect of removing one.
    edge_list_t edges_;

    // key -> iterators of edges touching that key, in either direction.
    // Map key is const-pointer so read-only accessors can take `const key*`
    // and `find()` it directly. Each edge appears under both its source and
    // its target (see register_edge); forward vs. reverse queries filter the
    // same bucket by comparing edge_it->source / edge_it->target against the
    // queried key.
    std::unordered_map<const gdt::key<key_type, data_type>*, std::vector<edge_iterator>> incident;
};

} // namespace genogrove::structure

#endif // GENOGROVE_STRUCTURE_GRAPH_OVERLAY_HPP