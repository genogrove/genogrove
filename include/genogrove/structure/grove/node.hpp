/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_NODE_HPP
#define GENOGROVE_STRUCTURE_NODE_HPP

// standard
#include <algorithm>
#include <cstdint>
#include <deque>
#include <istream>
#include <memory>
#include <ostream>
#include <ranges>
#include <stdexcept>
#include <string_view>
#include <unordered_map>
#include <vector>

// genogrove
#include "genogrove/data_type/interval.hpp"
#include "genogrove/data_type/key.hpp"
#include "genogrove/data_type/serialization_traits.hpp"
#include "genogrove/structure/grove/gg_block_format.hpp"
#include "genogrove/structure/grove/pod_io.hpp"

namespace gdt = genogrove::data_type;

namespace genogrove::structure {

/**
 * @class node
 * @brief B+ tree node representing internal or leaf nodes in the grove structure
 *
 * @tparam key_type The type of keys stored in this node (must satisfy key_type_base concept)
 * @tparam data_type Optional associated data type (default: void for no data)
 *
 * The node class is a fundamental building block of the grove B+ tree implementation:
 * - **Internal nodes**: Store keys for navigation and maintain children pointers
 * - **Leaf nodes**: Store actual data keys and are linked together for range queries
 * - **Memory ownership**: Nodes do NOT own keys (owned by grove's deque), but DO own child nodes
 * - **Parent-child relationships**: Each node maintains links to parent, children, and next sibling
 *
 * Key characteristics:
 * - Order parameter controls maximum capacity (order-1 keys, order children)
 * - Keys are stored as pointers to entries in grove's deque for stable addresses
 * - Leaf nodes are chained via next pointers for efficient sequential traversal
 * - Internal nodes aggregate child keys for navigation during tree traversal
 *
 * @note Keys are NOT deleted in destructor as they're owned by the grove's deque
 * @note Only internal nodes delete their children; leaf nodes have no children to delete
 * @note The order must be at least 2
 */
template <typename key_type, typename data_type = void>
class node {
  public:
    /**
     * @brief Construct a new node with specified order
     * @param order The B+ tree order (determines max keys = order-1, max children = order)
     *
     * Initializes a node with:
     * - Pre-allocated capacity for keys and children to avoid reallocations
     * - No parent or next sibling (set later during tree operations)
     * - Not marked as leaf (set explicitly when needed)
     */
    explicit node(int order)
        : order(order), keys{}, children{}, parent{nullptr}, next{nullptr}, is_leaf{false} {
        if (order < 2) {
            throw std::invalid_argument("B+ tree node order must be >= 2");
        }
        // Reserve capacity upfront to avoid reallocations
        keys.reserve(order-1);
        children.reserve(order);
    }

    /**
     * @brief Destroy the node and recursively delete child nodes
     *
     * Memory management rules:
     * - Keys are NOT deleted (owned by grove's deque)
     * - Child nodes ARE deleted recursively (owned by parent node)
     * - Leaf nodes have no children to delete
     */
    ~node() {
        // Keys are owned by grove's deque, not by node - don't delete them
        // Only delete children if this is an internal node
        // Leaf nodes don't own their children
        if (!is_leaf) {
            for (auto* child : children) {
                delete child;
            }
        }
    }

    // Non-copyable: children are owned raw pointers, shallow copy causes double-free
    node(const node&) = delete;
    node& operator=(const node&) = delete;

    // Movable: transfer ownership of children, leave source empty
    node(node&& other) noexcept
        : order(other.order), keys(std::move(other.keys)),
          children(std::move(other.children)), parent(other.parent),
          next(other.next), is_leaf(other.is_leaf) {
        other.parent = nullptr;
        other.next = nullptr;
    }

    node& operator=(node&& other) noexcept {
        if (this != &other) {
            // Delete existing children
            if (!is_leaf) {
                for (auto* child : children) {
                    delete child;
                }
            }
            order = other.order;
            keys = std::move(other.keys);
            children = std::move(other.children);
            parent = other.parent;
            next = other.next;
            is_leaf = other.is_leaf;
            other.parent = nullptr;
            other.next = nullptr;
        }
        return *this;
    }

    // =========================================================================
    // Accessors & Mutators
    // =========================================================================

    /**
     * @brief Get the B+ tree order of this node
     * @return The order value (max children = order, max keys = order-1)
     */
    int get_order() const noexcept {
        return this->order;
    }

    /**
     * @brief Get mutable reference to the keys vector
     * @return Reference to vector of key pointers
     * @note Keys are pointers to entries in grove's deque, not owned by node
     */
    std::vector<gdt::key<key_type, data_type>*>& get_keys() {
        return this->keys;
    }

    /**
     * @brief Get const reference to the keys vector
     * @return Const reference to vector of key pointers
     */
    const std::vector<gdt::key<key_type, data_type>*>& get_keys() const {
        return this->keys;
    }

    /**
     * @brief Get mutable reference to the children vector
     * @return Reference to vector of child node pointers
     * @note Children are owned by this node and will be deleted in destructor
     */
    std::vector<node<key_type, data_type>*>& get_children() {
        return this->children;
    }

    /**
     * @brief Get const reference to the children vector
     * @return Const reference to vector of child node pointers
     */
    const std::vector<node<key_type, data_type>*>& get_children() const {
        return this->children;
    }

    /**
     * @brief Get pointer to parent node
     * @return Pointer to parent node, or nullptr if this is root
     */
    node* get_parent() const noexcept {
        return this->parent;
    }

    /**
     * @brief Set the parent node pointer
     * @param parent Pointer to the parent node
     */
    void set_parent(node<key_type, data_type>* parent) {
        this->parent = parent;
    }

    /**
     * @brief Get pointer to next sibling node
     * @return Pointer to next leaf node, or nullptr if no next sibling
     * @note Only meaningful for leaf nodes that are chained together
     */
    node* get_next() const noexcept {
        return this->next;
    }

    /**
     * @brief Set the next sibling pointer (for leaf node chaining)
     * @param next Pointer to the next leaf node in sequence
     * @note Only used for leaf nodes to enable efficient range traversal
     */
    void set_next(node<key_type, data_type>* next) {
        this->next = next;
    }

    /**
     * @brief Check if this node is a leaf
     * @return True if this is a leaf node, false if internal node
     */
    bool get_is_leaf() const noexcept {
        return this->is_leaf;
    }

    /**
     * @brief Set whether this node is a leaf
     * @param is_leaf True if this is a leaf node, false if internal node
     */
    void set_is_leaf(bool is_leaf) {
        this->is_leaf = is_leaf;
    }

    // =========================================================================
    // Key Operations
    // =========================================================================

    /**
     * @brief Insert a pre-allocated key pointer into the node at sorted position
     * @param key_ptr Pointer to key (already allocated by grove's deque)
     *
     * Finds the correct sorted position by comparing key values and inserts
     * the key pointer at that position, maintaining sorted order.
     *
     * @note Key must be allocated by grove before calling this
     * @note This performs a linear search; consider using indexed insertion for bulk operations
     */
    void insert_key_ptr(gdt::key<key_type, data_type>* key_ptr) {
        if (key_ptr == nullptr) {
            throw std::invalid_argument("insert_key_ptr: key_ptr must not be nullptr");
        }
        auto it = std::ranges::lower_bound(this->keys, key_ptr->get_value(),
            std::less{}, [](const auto* k) -> const key_type& { return k->get_value(); });
        this->keys.insert(it, key_ptr);
    }

    /**
     * @brief Insert a pre-allocated key pointer at specific index
     * @param key_ptr Pointer to key (already allocated by grove's deque)
     * @param index Position to insert at (0-based, must be in [0, keys.size()])
     * @throws std::out_of_range if index is out of bounds
     *
     * Directly inserts the key at the specified index without checking sort order.
     * Caller is responsible for ensuring the insertion maintains sorted order.
     *
     * @note Key must be allocated by grove before calling this
     */
    void insert_key_ptr(gdt::key<key_type, data_type>* key_ptr, int index) {
        if (key_ptr == nullptr) {
            throw std::invalid_argument("insert_key_ptr: key_ptr must not be nullptr");
        }
        if (index < 0 || index > static_cast<int>(this->keys.size())) {
            throw std::out_of_range("key index out of range");
        }
        this->keys.insert(this->keys.begin() + index, key_ptr);
    }

    /**
     * @brief Aggregate this node's own keys
     * @return Aggregate key_type covering all keys stored directly in this node
     *
     * For leaf nodes, this is the bounding range of the leaf data. For internal
     * nodes, it covers children[0..n-2] (each separator covers its corresponding
     * child) but NOT the last child, which has no separator key in this node.
     * Use calc_subtree_range() to cover the full subtree including the last
     * child's catch-all chain.
     *
     * For example with intervals: returns the bounding interval (min start, max
     * end) of this node's keys.
     */
    [[nodiscard]] key_type calc_keys_aggregate() {
        if (this->keys.empty()) {
            throw std::runtime_error("calc_keys_aggregate called on node with no keys");
        }
        key_type result = this->keys[0]->get_value();
        for (size_t i = 1; i < this->keys.size(); ++i) {
            result = key_type::aggregate(result, this->keys[i]->get_value());
        }
        return result;
    }

    /**
     * @brief Compute the bounding range of the entire subtree rooted at this node
     * @return Aggregate key_type covering all leaf keys reachable from this node
     *
     * For leaf nodes, identical to calc_keys_aggregate(). For internal nodes,
     * calc_keys_aggregate() only covers children[0..n-2] (each separator key
     * covers its corresponding child), missing the last child which has no
     * separator in this node. This method descends the last-child chain at
     * every level to pick up the missing range.
     *
     * Used as a separator value when the parent needs an accurate upper bound
     * for this node's entire subtree — especially after rebalancing, where
     * calc_keys_aggregate() would leave the separator too narrow to reach
     * keys in the catch-all chain.
     */
    [[nodiscard]] key_type calc_subtree_range() {
        if (this->is_leaf || this->children.empty()) {
            return calc_keys_aggregate();
        }
        return key_type::aggregate(
            calc_keys_aggregate(),
            this->children.back()->calc_subtree_range()
        );
    }

    // =========================================================================
    // Child Operations
    // =========================================================================

    /**
     * @brief Add a child node at the specified index
     * @param child Pointer to the child node to add
     * @param index Position to insert the child (0-based)
     * @throws std::out_of_range if index is invalid
     *
     * Inserts a child node at the given position, shifting existing children
     * to the right. The index must be in range [0, children.size()].
     */
    void add_child(node<key_type, data_type>* child, int index) {
        if(index < 0 || index > static_cast<int>(this->children.size())) {
            throw std::out_of_range("child index out of range");
        }
        this->children.insert(this->children.begin() + index, child);
    }

    /**
     * @brief Get child node at the specified index
     * @param index Position of the child to retrieve (0-based)
     * @return Pointer to the child node
     * @throws std::out_of_range if index is invalid
     */
    node* get_child(int index) {
        if(index < 0 || static_cast<size_t>(index) >= this->children.size()) {
            throw std::out_of_range("child index out of range");
        }
        return this->children[index];
    }

    /**
     * @brief Get child node at the specified index (const version)
     * @param index Position of the child to retrieve (0-based)
     * @return Pointer to the child node
     * @throws std::out_of_range if index is invalid
     */
    node* get_child(int index) const {
        if(index < 0 || static_cast<size_t>(index) >= this->children.size()) {
            throw std::out_of_range("child index out of range");
        }
        return this->children[index];
    }

    // =========================================================================
    // Serialization
    // =========================================================================

    /**
     * @brief Serialize this node's own block (non-recursive)
     * @param os Output stream to write the block's structural bytes to
     * @param node_to_block Map from every node pointer to its assigned block_id
     *
     * Writes: a packed header (is_leaf flag + key count), then each key's value
     * (and data if data_type != void), then the block references — child
     * block_ids for an internal node, or the single next-leaf block_id (or
     * detail::no_block) for a leaf. Children are NOT recursed into; each node is
     * its own independently-addressable block (see grove::serialize).
     *
     * @note Per-key graph edges are NOT written here — they live in the grove's
     *       overlay, not the node. grove::serialize appends a leaf's edges to the
     *       leaf block after this structural part.
     * @throws std::runtime_error if a referenced child/next node is absent from
     *         node_to_block, or on stream error.
     */
    void serialize_block(std::ostream& os,
        const std::unordered_map<const node<key_type, data_type>*, detail::block_id>& node_to_block) const;

    /**
     * @brief Parse this node's own block written by serialize_block (non-recursive)
     * @param is Input stream positioned at the start of the block's structural bytes
     * @param order The B+ tree order to construct the node with
     * @param key_storage Deque to emplace keys into for stable pointer addresses
     * @param out_child_ids Filled with child block_ids for an internal node (empty for a leaf)
     * @param out_next_id Set to the next-leaf block_id for a leaf (detail::no_block otherwise)
     * @return Pointer to the newly created node with keys populated
     *
     * Reads only this node's own bytes. Child pointers and the leaf `next` pointer
     * are left null; the numeric block references are returned via the out-params
     * for the caller (grove::deserialize) to resolve once every block is parsed.
     * Keys are emplaced into key_storage (owned by the grove) rather than
     * heap-allocated, preserving pointer stability and single-owner semantics.
     */
    [[nodiscard]] static node<key_type, data_type>* deserialize_block(
        std::istream& is, int order,
        std::deque<gdt::key<key_type, data_type>>& key_storage,
        std::vector<detail::block_id>& out_child_ids,
        detail::block_id& out_next_id);

    // =========================================================================
    // Debugging & Utilities
    // =========================================================================

    /**
     * @brief Print all keys in this node to an output stream
     * @param os Output stream to write to
     * @param sep Separator string between keys (default: tab)
     *
     * Outputs the string representation of each key in the node, separated
     * by the specified separator. Useful for debugging and visualization.
     */
    void print_keys(std::ostream& os, std::string_view sep = "\t") const {
        for (size_t i = 0; i < this->keys.size(); ++i) {
            if (i > 0) os << sep;
            os << this->keys[i]->get_value().to_string();
        }
    }

  private:
    /// B+ tree order (max children = order, max keys = order-1)
    int order;

    /// Vector of pointers to keys (owned by grove's deque, not by node)
    std::vector<gdt::key<key_type, data_type>*> keys;

    /// Vector of pointers to child nodes (owned by this node)
    std::vector<node<key_type, data_type>*> children;

    /// Pointer to parent node (nullptr for root)
    node<key_type, data_type>* parent;

    /// Pointer to next sibling node (used for leaf node chaining)
    node<key_type, data_type>* next;

    /// Flag indicating whether this is a leaf node
    bool is_leaf;
};
} // namespace genogrove::structure

// =============================================================================
// Template Implementation
// =============================================================================

namespace genogrove::structure {

template<typename key_type, typename data_type>
void node<key_type, data_type>::serialize_block(std::ostream& os,
        const std::unordered_map<const node<key_type, data_type>*, detail::block_id>& node_to_block) const {
    // Pack is_leaf into high bit of key count (saves 5B per node vs separate bool + size_t)
    uint32_t packed = static_cast<uint32_t>(keys.size());
    if (is_leaf) packed |= 0x80000000u;
    detail::write_pod(os, packed);

    // Write each key: value (+ data if present). NOTE: per-key edges are written
    // by grove::serialize after this structural part, not here.
    for (const auto* key_ptr : keys) {
        key_ptr->get_value().serialize(os);
        if constexpr (!std::is_void_v<data_type>) {
            gdt::serializer<data_type>::write(os, key_ptr->get_data());
        }
    }

    if (is_leaf) {
        // A leaf references its successor by block_id (no_block if it is the last
        // leaf in this index's chain). Children are recursed into by the grove as
        // separate blocks, so nothing recursive happens here.
        detail::block_id next_id = detail::no_block;
        if (next != nullptr) {
            auto it = node_to_block.find(next);
            if (it == node_to_block.end()) {
                throw std::runtime_error("Failed to serialize node block: next leaf missing from block map");
            }
            next_id = it->second;
        }
        detail::write_pod(os, next_id);
    } else {
        uint32_t num_children = static_cast<uint32_t>(children.size());
        detail::write_pod(os, num_children);
        for (const auto* child : children) {
            auto it = node_to_block.find(child);
            if (it == node_to_block.end()) {
                throw std::runtime_error("Failed to serialize node block: child missing from block map");
            }
            detail::block_id child_id = it->second;
            detail::write_pod(os, child_id);
        }
    }

    if (!os) {
        throw std::runtime_error("Failed to serialize node block: stream error");
    }
}

template<typename key_type, typename data_type>
node<key_type, data_type>* node<key_type, data_type>::deserialize_block(
        std::istream& is, int order,
        std::deque<gdt::key<key_type, data_type>>& key_storage,
        std::vector<detail::block_id>& out_child_ids,
        detail::block_id& out_next_id) {
    auto n = std::make_unique<node<key_type, data_type>>(order);
    out_child_ids.clear();
    out_next_id = detail::no_block;

    // Unpack is_leaf from high bit + key count from low 31 bits
    uint32_t packed;
    detail::read_pod(is, packed);
    if (!is) {
        throw std::runtime_error("Failed to deserialize node block: stream error reading packed header");
    }
    n->is_leaf = (packed & 0x80000000u) != 0;
    uint32_t num_keys = packed & 0x7FFFFFFFu;
    if (num_keys >= static_cast<uint32_t>(order)) {
        throw std::runtime_error("Failed to deserialize node block: num_keys exceeds order");
    }

    // Read each key directly into grove's deque for stable pointer addresses
    n->keys.reserve(num_keys);
    for (uint32_t i = 0; i < num_keys; ++i) {
        key_type key_value = key_type::deserialize(is);

        if constexpr (std::is_void_v<data_type>) {
            key_storage.emplace_back(key_value);
        } else {
            data_type data_value = gdt::serializer<data_type>::read(is);
            key_storage.emplace_back(key_value, data_value);
        }
        n->keys.push_back(&key_storage.back());
    }

    // Read block references (numeric, unresolved). The caller links them once
    // every block has been parsed. Child pointers / next stay null here.
    if (n->is_leaf) {
        detail::read_pod(is, out_next_id);
        if (!is) {
            throw std::runtime_error("Failed to deserialize node block: stream error reading next id");
        }
    } else {
        uint32_t num_children;
        detail::read_pod(is, num_children);
        if (!is) {
            throw std::runtime_error("Failed to deserialize node block: stream error reading child count");
        }
        if (num_children > static_cast<uint32_t>(order)) {
            throw std::runtime_error("Failed to deserialize node block: num_children exceeds order");
        }
        // B+ tree invariant: an internal node with k separator keys has k+1
        // children (search_overlaps descends via get_child(i) for i up to keys.size()).
        if (num_children != num_keys + 1) {
            throw std::runtime_error("Failed to deserialize node block: child count does not match key count");
        }
        out_child_ids.reserve(num_children);
        for (uint32_t i = 0; i < num_children; ++i) {
            detail::block_id child_id;
            detail::read_pod(is, child_id);
            if (!is) {
                throw std::runtime_error("Failed to deserialize node block: stream error reading child id");
            }
            out_child_ids.push_back(child_id);
        }
    }

    return n.release();
}

} // namespace genogrove::structure

#endif // GENOGROVE_STRUCTURE_NODE_HPP
