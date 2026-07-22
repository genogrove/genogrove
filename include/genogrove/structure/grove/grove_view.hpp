/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_GROVE_VIEW_HPP
#define GENOGROVE_STRUCTURE_GROVE_GROVE_VIEW_HPP

#include <concepts>
#include <cstddef>
#include <cstdint>
#include <deque>
#include <fstream>
#include <ios>
#include <istream>
#include <limits>
#include <memory>
#include <stdexcept>
#include <string>
#include <string_view>
#include <type_traits>
#include <unordered_map>
#include <variant>
#include <vector>

#include "genogrove/data_type/key.hpp"
#include "genogrove/data_type/key_type_base.hpp"
#include "genogrove/data_type/query_result.hpp"
#include "genogrove/data_type/serialization_traits.hpp"
#include "genogrove/structure/grove/gg_block_format.hpp"
#include "genogrove/structure/grove/node.hpp"
#include "genogrove/structure/grove/pod_io.hpp"
#include "genogrove/structure/grove/query_engine.hpp"
#include "genogrove/structure/grove/zlib_streambuf.hpp"

namespace genogrove::structure {

/**
 * @brief Read-only, partial reader over a serialized (format 0.2) grove.
 *
 * Where grove::deserialize eagerly loads every block, grove_view loads only the
 * blocks a query walks. It reads the directory and builds a block_id -> file
 * offset index at open, then pages in individual blocks on demand and caches
 * them for its lifetime (no eviction — you keep what you touch). intersect() and
 * get_neighbors() share the same query engine as the in-memory grove; only how a
 * child / next-leaf / edge-target reference resolves differs.
 *
 * Random access needs a seekable source, so open() takes a file path and owns
 * the ifstream. Not thread-safe. Non-copyable (owns the file + heap nodes).
 *
 * ponytail: cache never evicts and the offset index is a flat per-block table
 * read whole at open — fine until genome-scale block counts; add LRU eviction /
 * a hierarchical directory only when benchmarks show either dominates.
 */
template <gdt::key_type_base key_type, typename data_type = void, typename edge_data_type = void>
class grove_view {
    using key_t = gdt::key<key_type, data_type>;
    using node_t = node<key_type, data_type>;

  public:
    /**
     * @brief Open a serialized grove for partial reading.
     * @param path Path to a file containing a `.gg` grove stream (format 0.2).
     * @param data_offset Byte offset where the grove stream starts. Defaults to
     *        0 (a bare grove stream); pass the size of any leading wrapper (e.g.
     *        the CLI's `gg_header`) when the grove is embedded after a header.
     * @throws std::runtime_error if the file cannot be opened, the magic is
     *         wrong, the stream is not seekable, or the directory is malformed.
     */
    [[nodiscard]] static grove_view open(const std::string& path, std::streamoff data_offset = 0) {
        auto file = std::make_unique<std::ifstream>(path, std::ios::binary);
        if (!file->is_open()) {
            throw std::runtime_error("grove_view::open: cannot open " + path);
        }
        return grove_view(std::move(file), data_offset);
    }

    grove_view(const grove_view&) = delete;
    grove_view& operator=(const grove_view&) = delete;
    // Non-movable: block_inflater owns a z_stream and is move-deleted. open()
    // returns by value via guaranteed copy elision, so no move is ever needed.
    grove_view(grove_view&&) = delete;
    grove_view& operator=(grove_view&&) = delete;
    ~grove_view() = default;  // unique_ptr frees each loaded node; children are
                              // never linked in view mode, so no recursive delete.

    /**
     * @brief Overlap query within a single index (chromosome), loading only the
     *        blocks on the descent path and any overlapping leaves.
     */
    [[nodiscard]] gdt::query_result<key_type, data_type> intersect(const key_type& query,
                                                                   std::string_view index) {
        gdt::query_result<key_type, data_type> result{query};
        auto it = index_roots.find(std::string(index));
        if (it == index_roots.end()) {
            return result;
        }
        block_resolver res{this};
        detail::search_overlaps(res, load_node(it->second), query, result);
        return result;
    }

    /** @brief Overlap query across every index. */
    [[nodiscard]] gdt::query_result<key_type, data_type> intersect(const key_type& query) {
        gdt::query_result<key_type, data_type> result{query};
        block_resolver res{this};
        for (const auto& [name, root_id] : index_roots) {
            detail::search_overlaps(res, load_node(root_id), query, result);
        }
        return result;
    }

    /**
     * @brief Nearest non-overlapping predecessor and successor of a query within
     *        a single index, loading only the blocks the descent walks.
     *
     * Returns exactly what the eager grove's flanking() would — same
     * predecessor/successor rules (interval-nesting largest-end for the
     * predecessor, smallest-start for the successor) — while paging in only the
     * blocks on the descent path (plus the last-child right spine each internal
     * node needs to bound its catch-all subtree). Both fields are nullptr if the
     * index does not exist.
     */
    [[nodiscard]] gdt::flanking_query_result<key_type, data_type>
    flanking(const key_type& query, std::string_view index) {
        return flanking(query, index,
            [](const key_type&, const key_type&) constexpr noexcept { return true; });
    }

    /**
     * @brief Flanking query with a caller-supplied compatibility filter.
     *
     * The predicate is applied at every leaf candidate before the overlap and
     * comparison checks, exactly as in grove::flanking — internal-node pruning
     * stays purely structural.
     *
     * @tparam Pred Callable `bool(const key_type& candidate, const key_type& query)`.
     */
    template <typename Pred>
        requires detail::flanking_predicate<Pred, key_type>
    [[nodiscard]] gdt::flanking_query_result<key_type, data_type>
    flanking(const key_type& query, std::string_view index, Pred is_compatible) {
        gdt::flanking_query_result<key_type, data_type> result{};
        auto it = index_roots.find(std::string(index));
        if (it == index_roots.end()) {
            return result;
        }
        block_resolver res{this};
        detail::search_flanking(res, load_node(it->second), query, is_compatible, result);
        return result;
    }

    /**
     * @brief Outgoing graph neighbors of a key returned by this grove_view.
     *
     * Loads each target's block on demand — the cross-chromosome hop. `source`
     * must be a key pointer this grove_view produced (via intersect or a prior
     * get_neighbors); edges are recorded when its block was paged in.
     */
    [[nodiscard]] std::vector<key_t*> get_neighbors(const key_t* source) {
        if (source == nullptr) {
            throw std::invalid_argument("get_neighbors: source must not be null");
        }
        std::vector<key_t*> out;
        auto it = adjacency.find(source);
        if (it == adjacency.end()) {
            return out;
        }
        out.reserve(it->second.size());
        for (const auto& e : it->second) {
            out.push_back(resolve_target(e.tb, e.ts));
        }
        return out;
    }

    /**
     * @brief Metadata of every outgoing edge of `source`, in edge order.
     *
     * Only available when edge_data_type is non-void. Reads nothing extra: the
     * metadata was parsed and kept when `source`'s block was paged in. Returns
     * an empty vector if `source` is null or has no recorded edges (unlike the
     * target-resolving get_neighbors / get_neighbors_if, which throw on null).
     */
    template <typename M = edge_data_type>
    [[nodiscard]] std::vector<M> get_edges(const key_t* source) const
        requires(!std::is_void_v<edge_data_type>) {
        std::vector<M> out;
        auto it = adjacency.find(source);
        if (it != adjacency.end()) {
            out.reserve(it->second.size());
            for (const auto& e : it->second) {
                out.push_back(e.meta);
            }
        }
        return out;
    }

    /**
     * @brief Outgoing neighbors of `source` whose edge metadata satisfies `pred`.
     *
     * Only available when edge_data_type is non-void. Resolves the surviving
     * targets' blocks on demand, exactly like get_neighbors.
     */
    template <typename Predicate>
    [[nodiscard]] std::vector<key_t*> get_neighbors_if(const key_t* source, Predicate pred)
        requires(!std::is_void_v<edge_data_type> &&
                 std::predicate<Predicate, const edge_data_type&>) {
        if (source == nullptr) {
            throw std::invalid_argument("get_neighbors_if: source must not be null");
        }
        std::vector<key_t*> out;
        auto it = adjacency.find(source);
        if (it == adjacency.end()) {
            return out;
        }
        for (const auto& e : it->second) {
            if (pred(e.meta)) {
                out.push_back(resolve_target(e.tb, e.ts));
            }
        }
        return out;
    }

    /**
     * @brief Each outgoing target of `source` paired with its edge metadata, in edge order.
     *
     * Only available when edge_data_type is non-void. Resolves targets on demand
     * exactly like get_neighbors, so it throws std::invalid_argument on a null
     * source (unlike the metadata-only get_edges, which returns empty). Parity
     * with graph_overlay::get_edge_list. Empty vector for a source with no edges.
     */
    template <typename M = edge_data_type>
    [[nodiscard]] std::vector<std::pair<key_t*, M>> get_edge_list(const key_t* source)
        requires(!std::is_void_v<edge_data_type>) {
        if (source == nullptr) {
            throw std::invalid_argument("get_edge_list: source must not be null");
        }
        std::vector<std::pair<key_t*, M>> out;
        auto it = adjacency.find(source);
        if (it == adjacency.end()) {
            return out;
        }
        out.reserve(it->second.size());
        for (const auto& e : it->second) {
            out.emplace_back(resolve_target(e.tb, e.ts), e.meta);
        }
        return out;
    }

    /// The B+ tree order the `.gg` was built with. Mirrors grove::get_order().
    [[nodiscard]] int get_order() const { return order; }

    /// Names of every index (e.g. chromosome) in the `.gg`, in unspecified order
    /// (like grove's unordered root map). The view-appropriate analogue of
    /// grove::get_root_nodes() — lets a caller discover what intersect(query) /
    /// flanking can run against. Reads nothing extra: the directory is already
    /// in memory from open().
    [[nodiscard]] std::vector<std::string> index_names() const {
        std::vector<std::string> names;
        names.reserve(index_roots.size());
        for (const auto& [name, root_id] : index_roots) {
            names.push_back(name);
        }
        return names;
    }

    /// Blocks paged in so far — for tests asserting a query is actually partial.
    [[nodiscard]] std::size_t blocks_loaded() const { return node_cache.size() + ext_cache.size(); }
    /// Total block count from the directory.
    [[nodiscard]] detail::block_id block_count() const { return num_blocks; }

  private:
    struct edge_ref {
        detail::block_id tb;
        std::uint32_t ts;
        [[no_unique_address]]
        std::conditional_t<std::is_void_v<edge_data_type>, std::monostate, edge_data_type> meta;
    };
    struct loaded_node {
        std::unique_ptr<node_t> n;
        std::vector<detail::block_id> child_ids;
        detail::block_id next_id;
    };

    std::unique_ptr<std::ifstream> file;  // seekable source, owned
    int order = 0;
    detail::block_id num_blocks = 0;
    detail::block_id ext_block_begin = 0;
    std::vector<std::uint64_t> block_offsets;  // block_id -> offset of [clen][bytes]
    std::unordered_map<std::string, detail::block_id> index_roots;

    std::deque<key_t> key_storage;  // stable addresses for loaded keys
    std::unordered_map<detail::block_id, loaded_node> node_cache;
    std::unordered_map<const node_t*, detail::block_id> node_block;  // reverse map for the resolver
    std::unordered_map<detail::block_id, std::vector<key_t*>> ext_cache;
    std::unordered_map<const key_t*, std::vector<edge_ref>> adjacency;

    detail::block_inflater inflater;
    std::string comp_buf;
    std::string raw_buf;

    explicit grove_view(std::unique_ptr<std::ifstream> f, std::streamoff data_offset)
        : file(std::move(f)) {
        read_directory_and_scan(data_offset);
    }

    // Read the plain directory, then walk the length-prefix chain once to record
    // each block's offset (reading only the 8-byte length, seeking past the data).
    void read_directory_and_scan(std::streamoff data_offset) {
        std::istream& is = *file;
        is.seekg(data_offset, std::ios::beg);
        if (!is) {
            throw std::runtime_error("grove_view: seek to grove stream start failed");
        }
        std::array<char, 4> magic{};
        is.read(magic.data(), static_cast<std::streamsize>(magic.size()));
        if (is.gcount() != static_cast<std::streamsize>(magic.size()) ||
            magic != detail::grove_stream_magic) {
            throw std::runtime_error("grove_view: bad magic (not a format 0.2 grove stream)");
        }

        detail::read_pod(is, order);
        if (!is) {
            throw std::runtime_error("grove_view: stream error reading order");
        }
        if (order < 3) {
            throw std::runtime_error("grove_view: order must be >= 3");
        }

        std::uint32_t num_indices;
        detail::read_pod(is, num_indices);
        if (!is) {
            throw std::runtime_error("grove_view: stream error reading index count");
        }
        for (std::uint32_t i = 0; i < num_indices; ++i) {
            std::uint32_t name_len;
            detail::read_pod(is, name_len);
            if (!is) {
                throw std::runtime_error("grove_view: stream error reading index name length");
            }
            std::string name(name_len, '\0');
            is.read(name.data(), static_cast<std::streamsize>(name_len));
            if (!is) {
                throw std::runtime_error("grove_view: stream error reading index name");
            }
            detail::block_id root_id;
            detail::read_pod(is, root_id);
            if (!is) {
                throw std::runtime_error("grove_view: stream error reading root block id");
            }
            index_roots.emplace(std::move(name), root_id);
        }

        // leaf/external key counts are validation aids the eager reader uses;
        // the view reader parses on demand and ignores them.
        std::uint64_t leaf_count, ext_count;
        detail::read_pod(is, num_blocks);
        detail::read_pod(is, ext_block_begin);
        detail::read_pod(is, leaf_count);
        detail::read_pod(is, ext_count);
        (void)leaf_count;
        (void)ext_count;
        if (!is) {
            throw std::runtime_error("grove_view: stream error reading directory");
        }
        if (ext_block_begin > num_blocks) {
            throw std::runtime_error("grove_view: external-block-begin exceeds block count");
        }

        block_offsets.resize(num_blocks);
        for (detail::block_id b = 0; b < num_blocks; ++b) {
            std::streampos pos = is.tellg();
            if (pos == std::streampos(-1)) {
                throw std::runtime_error("grove_view: source is not seekable");
            }
            block_offsets[b] = static_cast<std::uint64_t>(pos);
            std::uint64_t clen;
            detail::read_pod(is, clen);
            if (!is) {
                throw std::runtime_error("grove_view: stream error scanning block length");
            }
            is.seekg(static_cast<std::streamoff>(clen), std::ios::cur);
            if (!is) {
                throw std::runtime_error("grove_view: truncated block during scan");
            }
        }
    }

    // Seek to block b, read its length prefix, and inflate it into raw_buf.
    void read_block_raw(detail::block_id b) {
        // Choke point for every block load. A malformed edge target can reach
        // load_external with an id past the block count, so bound-check here
        // before indexing block_offsets (load_node is already guarded separately).
        if (b >= num_blocks) {
            throw std::runtime_error("grove_view: block id out of range");
        }
        std::istream& is = *file;
        is.clear();
        is.seekg(static_cast<std::streamoff>(block_offsets[b]), std::ios::beg);
        if (!is) {
            throw std::runtime_error("grove_view: seek to block failed");
        }
        std::uint64_t clen;
        detail::read_pod(is, clen);
        if (!is) {
            throw std::runtime_error("grove_view: stream error reading block length");
        }
        if (clen > static_cast<std::uint64_t>(std::numeric_limits<std::streamsize>::max())) {
            throw std::runtime_error("grove_view: block length out of range");
        }
        comp_buf.resize(static_cast<std::size_t>(clen));
        is.read(comp_buf.data(), static_cast<std::streamsize>(clen));
        if (is.gcount() != static_cast<std::streamsize>(clen)) {
            throw std::runtime_error("grove_view: truncated block");
        }
        inflater.decompress(comp_buf.data(), static_cast<std::size_t>(clen), raw_buf);
    }

    // Load (or return cached) a node block and record its child/next references.
    node_t* load_node(detail::block_id b) {
        if (b >= ext_block_begin) {
            throw std::runtime_error("grove_view: node block id out of range");
        }
        auto cached = node_cache.find(b);
        if (cached != node_cache.end()) {
            return cached->second.n.get();
        }
        read_block_raw(b);
        detail::memory_streambuf mb(raw_buf.data(), raw_buf.size());
        std::istream zis(&mb);
        std::vector<detail::block_id> child_ids;
        detail::block_id next_id = detail::no_block;
        std::unique_ptr<node_t> owner(
            node_t::deserialize_block(zis, order, key_storage, child_ids, next_id));
        node_t* n = owner.get();
        if (n->get_is_leaf()) {
            for (auto* k : n->get_keys()) {
                read_key_edges(zis, k);
            }
        }
        node_block[n] = b;
        auto [ins, _] = node_cache.emplace(
            b, loaded_node{std::move(owner), std::move(child_ids), next_id});
        return ins->second.n.get();
    }

    // Load (or return cached) an external key block.
    std::vector<key_t*>& load_external(detail::block_id b) {
        auto cached = ext_cache.find(b);
        if (cached != ext_cache.end()) {
            return cached->second;
        }
        read_block_raw(b);
        detail::memory_streambuf mb(raw_buf.data(), raw_buf.size());
        std::istream zis(&mb);
        std::uint32_t cnt;
        detail::read_pod(zis, cnt);
        if (!zis) {
            throw std::runtime_error("grove_view: stream error reading external block count");
        }
        std::vector<key_t*> keys;
        keys.reserve(cnt);
        for (std::uint32_t i = 0; i < cnt; ++i) {
            key_type key_value = key_type::deserialize(zis);
            if constexpr (std::is_void_v<data_type>) {
                key_storage.emplace_back(key_value);
            } else {
                data_type data_value = gdt::serializer<data_type>::read(zis);
                key_storage.emplace_back(key_value, data_value);
            }
            keys.push_back(&key_storage.back());
        }
        for (auto* k : keys) {
            read_key_edges(zis, k);
        }
        auto [ins, _] = ext_cache.emplace(b, std::move(keys));
        return ins->second;
    }

    // Record a key's outgoing edges as (target_block, target_slot[, metadata]).
    // Metadata is kept when edge_data_type is non-void so get_edges /
    // get_neighbors_if can surface it without a full deserialize.
    void read_key_edges(std::istream& zis, const key_t* src) {
        std::uint32_t ecount;
        detail::read_pod(zis, ecount);
        if (!zis) {
            throw std::runtime_error("grove_view: stream error reading edge count");
        }
        std::vector<edge_ref>* bucket = nullptr;
        for (std::uint32_t i = 0; i < ecount; ++i) {
            detail::block_id tb;
            std::uint32_t ts;
            detail::read_pod(zis, tb);
            detail::read_pod(zis, ts);
            if (!zis) {
                throw std::runtime_error("grove_view: stream error reading edge");
            }
            if (bucket == nullptr) {
                bucket = &adjacency[src];
            }
            if constexpr (std::is_void_v<edge_data_type>) {
                bucket->push_back(edge_ref{tb, ts, {}});
            } else {
                edge_data_type meta = gdt::serializer<edge_data_type>::read(zis);
                if (!zis) {
                    throw std::runtime_error("grove_view: stream error reading edge metadata");
                }
                bucket->push_back(edge_ref{tb, ts, std::move(meta)});
            }
        }
    }

    key_t* resolve_target(detail::block_id tb, std::uint32_t ts) {
        if (tb < ext_block_begin) {
            node_t* tn = load_node(tb);
            if (!tn->get_is_leaf() || ts >= tn->get_keys().size()) {
                throw std::runtime_error("grove_view: invalid edge target");
            }
            return tn->get_keys()[ts];
        }
        std::vector<key_t*>& ekeys = load_external(tb);
        if (ts >= ekeys.size()) {
            throw std::runtime_error("grove_view: invalid external edge target");
        }
        return ekeys[ts];
    }

    // Resolver plugged into the shared query engine: child/next go through the
    // block cache. child_ids/next_id come from the loaded_node the node was
    // paged in with (reverse-mapped via node_block).
    struct block_resolver {
        grove_view* g;
        node_t* child(node_t* n, std::size_t i) {
            loaded_node& lb = g->node_cache.at(g->node_block.at(n));
            if (i >= lb.child_ids.size()) {
                return nullptr;
            }
            detail::block_id cid = lb.child_ids[i];
            return g->load_node(cid);
        }
        node_t* next(node_t* n) {
            loaded_node& lb = g->node_cache.at(g->node_block.at(n));
            detail::block_id nid = lb.next_id;
            if (nid == detail::no_block) {
                return nullptr;
            }
            return g->load_node(nid);
        }
    };
};

}  // namespace genogrove::structure

#endif  // GENOGROVE_STRUCTURE_GROVE_GROVE_VIEW_HPP