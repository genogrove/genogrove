/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef STRUCTURE_GROVE_HPP
#define STRUCTURE_GROVE_HPP

// standard
#include <string_view>
#include <unordered_map>
#include <array>
#include <cstdint>
#include <deque>
#include <algorithm>
#include <functional>
#include <limits>
#include <memory>
#include <optional>
#include <queue>
#include <sstream>
#include <utility>
#include <variant>
#include <vector>

// genogrove
#include "genogrove/utility/ranges.hpp"
#include <genogrove/data_type/flanking_query_result.hpp>
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/structure/grove/node.hpp>
#include <genogrove/structure/grove/graph_overlay.hpp>
#include <genogrove/structure/grove/pod_io.hpp>
#include <genogrove/structure/grove/query_engine.hpp>
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

namespace detail {

/// Result of distributing items as evenly as possible into groups.
struct even_distribution {
    std::size_t num_groups;      ///< Number of groups
    std::size_t base_per_group;  ///< Items every group holds before the remainder
    std::size_t extra_groups;    ///< The first `extra_groups` groups hold one extra

    /// Number of items in group `idx` (0-based).
    std::size_t count_for(std::size_t idx) const noexcept {
        return base_per_group + (idx < extra_groups ? 1 : 0);
    }
};

/// Distribute `total` (> 0) items into the fewest groups such that no group
/// exceeds `max_per_group` (> 0) items, spreading the remainder one per group
/// across the first `total % num_groups` groups. All arithmetic is size_t:
/// routing the ceiling through an int helper (as an earlier version did) narrowed
/// the size_t `total` and silently corrupted bulk builds above INT_MAX keys (#486).
inline even_distribution distribute_evenly(std::size_t total, std::size_t max_per_group) noexcept {
    // Overflow-safe ceiling: total/max + (remainder ? 1 : 0) never adds near
    // SIZE_MAX, unlike (total + max - 1) / max.
    const std::size_t num_groups =
        total / max_per_group + (total % max_per_group != 0 ? 1 : 0);
    return {num_groups, total / num_groups, total % num_groups};
}

} // namespace detail

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
     * @param order Determines the maximum number of order-1 keys and order children per node
     * @throws std::invalid_argument if order < 3
     *
     * Order must be at least 3. With order == 2, `split_internal_node` would
     * produce a right sibling with 0 keys and 1 child (a degenerate internal
     * node that breaks every path which dereferences `keys[0]` or calls
     * `calc_keys_aggregate`). Classical B+ trees require order >= 3 for
     * splits to produce balanced halves on both sides.
     */
    explicit grove(int order) : order(order) {
        if (order < 3) {
            throw std::invalid_argument("grove order must be >= 3");
        }
    }

    /**
     * @brief Construct a grove with default order of 3
     */
    grove() : order(3) {}

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
    [[nodiscard]] int get_order() const {
        return this->order;
    }


    /**
     * @brief Get map of all root nodes indexed by their string keys
     * @return Const reference to unordered map from index names (e.g., chromosome names) to root node pointers
     */
    [[nodiscard]] const std::unordered_map<std::string, node<key_type, data_type>*, string_hash, std::equal_to<>>& get_root_nodes() const {
        return this->root_nodes;
    }

    /**
     * @brief Get the rightmost leaf node for a given index
     * @param key The index name (e.g., chromosome name)
     * @return Pointer to rightmost leaf node, or nullptr if index doesn't exist
     * @note Used for optimized sorted insertion
     */
    [[nodiscard]] node<key_type, data_type>* get_rightmost_node(std::string_view key) const {
        return ggu::value_lookup(this->rightmost_nodes, key).value_or(nullptr);
    }

  private:
    // =========================================================================
    // Private tree management helpers
    // =========================================================================

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
    // Integer math helpers (explicit ceil/floor — no integer-division tricks)
    // =========================================================================

    /// Ceiling of a/b for positive integers (e.g. ceil_div(9, 2) == 5)
    static constexpr int ceil_div(int a, int b) noexcept {
        return (a + b - 1) / b;
    }

    /// Floor of a/b for positive integers (e.g. floor_div(9, 2) == 4)
    static constexpr int floor_div(int a, int b) noexcept {
        return a / b;
    }

    /// Minimum number of keys for a leaf node: ceil((order - 1) / 2)
    int leaf_min_keys() const noexcept {
        return ceil_div(this->order - 1, 2);
    }

    /// Minimum number of keys for an internal node: floor((order - 1) / 2)
    int internal_min_keys() const noexcept {
        return floor_div(this->order - 1, 2);
    }

    /// Split midpoint — a single value that satisfies both leaf and internal
    /// minimum occupancy constraints (grove enforces order >= 3 in its
    /// constructor, so `floor(order / 2) >= 1` and both halves are non-empty).
    int split_mid() const noexcept {
        return floor_div(this->order, 2);
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
    // Flanking-key query methods
    // =========================================================================
    #include "grove_flanking.ipp"

    // =========================================================================
    // Key removal methods
    // =========================================================================
    #include "grove_remove.ipp"

    // =========================================================================
    // Serialization & visualization methods
    // =========================================================================
    #include "grove_serialize.ipp"

    // =========================================================================
    // Member variables
    // =========================================================================

    /// Maximum number of keys per node (B+ tree order/capacity)
    int order;

    /// Map from index names (e.g., chromosome names) to their root nodes
    std::unordered_map<std::string, node<key_type, data_type>*, string_hash, std::equal_to<>> root_nodes;

    /// Cache of rightmost leaf nodes for each index (used for sorted insertion optimization)
    std::unordered_map<std::string, node<key_type, data_type>*, string_hash, std::equal_to<>> rightmost_nodes;

    /// Deque storage for all indexed keys; provides stable pointers and better cache locality than individual allocations
    std::deque<gdt::key<key_type, data_type>> key_storage;

    /// Deque storage for external (graph-only) keys that can participate in edges but are not indexed in the B+ tree
    std::deque<gdt::key<key_type, data_type>> external_key_storage;

    /// Count of leaf keys — excludes internal separator keys in key_storage
    size_t leaf_key_count = 0;

    /// Embedded graph overlay for managing directed edges and relationships between keys
    graph_overlay<key_type, data_type, edge_data_type> graph_data;
};

} // namespace genogrove::structure

#endif // STRUCTURE_GROVE_HPP