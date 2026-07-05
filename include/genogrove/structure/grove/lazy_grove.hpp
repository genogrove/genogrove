/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_LAZY_GROVE_HPP
#define GENOGROVE_STRUCTURE_GROVE_LAZY_GROVE_HPP

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
#include <unordered_map>
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
 * Where grove::deserialize eagerly loads every block, lazy_grove loads only the
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
class lazy_grove {
    using key_t = gdt::key<key_type, data_type>;
    using node_t = node<key_type, data_type>;

  public:
    /**
     * @brief Open a serialized grove for partial reading.
     * @param path Path to a `.gg` grove stream (format 0.2).
     * @throws std::runtime_error if the file cannot be opened, the magic is
     *         wrong, the stream is not seekable, or the directory is malformed.
     */
    [[nodiscard]] static lazy_grove open(const std::string& path) {
        auto file = std::make_unique<std::ifstream>(path, std::ios::binary);
        if (!file->is_open()) {
            throw std::runtime_error("lazy_grove::open: cannot open " + path);
        }
        return lazy_grove(std::move(file));
    }

    lazy_grove(const lazy_grove&) = delete;
    lazy_grove& operator=(const lazy_grove&) = delete;
    lazy_grove(lazy_grove&&) = default;
    lazy_grove& operator=(lazy_grove&&) = default;
    ~lazy_grove() = default;  // unique_ptr frees each loaded node; children are
                              // never linked in lazy mode, so no recursive delete.

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
        lazy_resolver res{this};
        detail::search_overlaps(res, load_node(it->second), query, result);
        return result;
    }

    /** @brief Overlap query across every index. */
    [[nodiscard]] gdt::query_result<key_type, data_type> intersect(const key_type& query) {
        gdt::query_result<key_type, data_type> result{query};
        lazy_resolver res{this};
        for (const auto& [name, root_id] : index_roots) {
            detail::search_overlaps(res, load_node(root_id), query, result);
        }
        return result;
    }

    /**
     * @brief Outgoing graph neighbors of a key returned by this lazy_grove.
     *
     * Loads each target's block on demand — the cross-chromosome hop. `source`
     * must be a key pointer this lazy_grove produced (via intersect or a prior
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

    /// Blocks paged in so far — for tests asserting a query is actually partial.
    [[nodiscard]] std::size_t blocks_loaded() const { return node_cache.size() + ext_cache.size(); }
    /// Total block count from the directory.
    [[nodiscard]] detail::block_id block_count() const { return num_blocks; }

  private:
    struct edge_ref {
        detail::block_id tb;
        std::uint32_t ts;
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

    explicit lazy_grove(std::unique_ptr<std::ifstream> f) : file(std::move(f)) {
        read_directory_and_scan();
    }

    // Read the plain directory, then walk the length-prefix chain once to record
    // each block's offset (reading only the 8-byte length, seeking past the data).
    void read_directory_and_scan() {
        std::istream& is = *file;
        std::array<char, 4> magic{};
        is.read(magic.data(), static_cast<std::streamsize>(magic.size()));
        if (is.gcount() != static_cast<std::streamsize>(magic.size()) ||
            magic != detail::grove_stream_magic) {
            throw std::runtime_error("lazy_grove: bad magic (not a format 0.2 grove stream)");
        }

        detail::read_pod(is, order);
        if (!is) {
            throw std::runtime_error("lazy_grove: stream error reading order");
        }
        if (order < 3) {
            throw std::runtime_error("lazy_grove: order must be >= 3");
        }

        std::uint32_t num_indices;
        detail::read_pod(is, num_indices);
        if (!is) {
            throw std::runtime_error("lazy_grove: stream error reading index count");
        }
        for (std::uint32_t i = 0; i < num_indices; ++i) {
            std::uint32_t name_len;
            detail::read_pod(is, name_len);
            if (!is) {
                throw std::runtime_error("lazy_grove: stream error reading index name length");
            }
            std::string name(name_len, '\0');
            is.read(name.data(), static_cast<std::streamsize>(name_len));
            if (!is) {
                throw std::runtime_error("lazy_grove: stream error reading index name");
            }
            detail::block_id root_id;
            detail::read_pod(is, root_id);
            if (!is) {
                throw std::runtime_error("lazy_grove: stream error reading root block id");
            }
            index_roots.emplace(std::move(name), root_id);
        }

        // leaf/external key counts are validation aids the eager reader uses;
        // the lazy reader parses on demand and ignores them.
        std::uint64_t leaf_count, ext_count;
        detail::read_pod(is, num_blocks);
        detail::read_pod(is, ext_block_begin);
        detail::read_pod(is, leaf_count);
        detail::read_pod(is, ext_count);
        (void)leaf_count;
        (void)ext_count;
        if (!is) {
            throw std::runtime_error("lazy_grove: stream error reading directory");
        }
        if (ext_block_begin > num_blocks) {
            throw std::runtime_error("lazy_grove: external-block-begin exceeds block count");
        }

        block_offsets.resize(num_blocks);
        for (detail::block_id b = 0; b < num_blocks; ++b) {
            std::streampos pos = is.tellg();
            if (pos == std::streampos(-1)) {
                throw std::runtime_error("lazy_grove: source is not seekable");
            }
            block_offsets[b] = static_cast<std::uint64_t>(pos);
            std::uint64_t clen;
            detail::read_pod(is, clen);
            if (!is) {
                throw std::runtime_error("lazy_grove: stream error scanning block length");
            }
            is.seekg(static_cast<std::streamoff>(clen), std::ios::cur);
            if (!is) {
                throw std::runtime_error("lazy_grove: truncated block during scan");
            }
        }
    }

    // Seek to block b, read its length prefix, and inflate it into raw_buf.
    void read_block_raw(detail::block_id b) {
        std::istream& is = *file;
        is.clear();
        is.seekg(static_cast<std::streamoff>(block_offsets[b]), std::ios::beg);
        if (!is) {
            throw std::runtime_error("lazy_grove: seek to block failed");
        }
        std::uint64_t clen;
        detail::read_pod(is, clen);
        if (!is) {
            throw std::runtime_error("lazy_grove: stream error reading block length");
        }
        if (clen > static_cast<std::uint64_t>(std::numeric_limits<std::streamsize>::max())) {
            throw std::runtime_error("lazy_grove: block length out of range");
        }
        comp_buf.resize(static_cast<std::size_t>(clen));
        is.read(comp_buf.data(), static_cast<std::streamsize>(clen));
        if (is.gcount() != static_cast<std::streamsize>(clen)) {
            throw std::runtime_error("lazy_grove: truncated block");
        }
        inflater.decompress(comp_buf.data(), static_cast<std::size_t>(clen), raw_buf);
    }

    // Load (or return cached) a node block and record its child/next references.
    node_t* load_node(detail::block_id b) {
        if (b >= ext_block_begin) {
            throw std::runtime_error("lazy_grove: node block id out of range");
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
            throw std::runtime_error("lazy_grove: stream error reading external block count");
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

    // Record a key's outgoing edges as (target_block, target_slot). Edge metadata
    // is consumed to stay aligned but discarded — get_neighbors needs only targets.
    void read_key_edges(std::istream& zis, const key_t* src) {
        std::uint32_t ecount;
        detail::read_pod(zis, ecount);
        if (!zis) {
            throw std::runtime_error("lazy_grove: stream error reading edge count");
        }
        std::vector<edge_ref>* bucket = nullptr;
        for (std::uint32_t i = 0; i < ecount; ++i) {
            detail::block_id tb;
            std::uint32_t ts;
            detail::read_pod(zis, tb);
            detail::read_pod(zis, ts);
            if (!zis) {
                throw std::runtime_error("lazy_grove: stream error reading edge");
            }
            if constexpr (!std::is_void_v<edge_data_type>) {
                (void)gdt::serializer<edge_data_type>::read(zis);
                if (!zis) {
                    throw std::runtime_error("lazy_grove: stream error reading edge metadata");
                }
            }
            if (bucket == nullptr) {
                bucket = &adjacency[src];
            }
            bucket->push_back(edge_ref{tb, ts});
        }
    }

    key_t* resolve_target(detail::block_id tb, std::uint32_t ts) {
        if (tb < ext_block_begin) {
            node_t* tn = load_node(tb);
            if (!tn->get_is_leaf() || ts >= tn->get_keys().size()) {
                throw std::runtime_error("lazy_grove: invalid edge target");
            }
            return tn->get_keys()[ts];
        }
        std::vector<key_t*>& ekeys = load_external(tb);
        if (ts >= ekeys.size()) {
            throw std::runtime_error("lazy_grove: invalid external edge target");
        }
        return ekeys[ts];
    }

    // Resolver plugged into the shared query engine: child/next go through the
    // block cache. child_ids/next_id come from the loaded_node the node was
    // paged in with (reverse-mapped via node_block).
    struct lazy_resolver {
        lazy_grove* g;
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
    friend struct lazy_resolver;
};

}  // namespace genogrove::structure

#endif  // GENOGROVE_STRUCTURE_GROVE_LAZY_GROVE_HPP