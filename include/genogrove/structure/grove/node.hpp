/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_STRUCTURE_NODE_HPP
#define GENOGROVE_STRUCTURE_NODE_HPP

// standard
#include <algorithm>
#include <deque>
#include <istream>
#include <ostream>
#include <ranges>
#include <stdexcept>
#include <string_view>
#include <vector>

// genogrove
#include "genogrove/data_type/interval.hpp"
#include "genogrove/data_type/key.hpp"
#include "genogrove/data_type/serialization_traits.hpp"

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
 * @note The order must be at least 3 for proper B+ tree behavior
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
     * @brief Set the B+ tree order of this node
     * @param k The new order value (must be >= 2)
     * @throws std::invalid_argument if k < 2
     * @note Changing order after construction may lead to inconsistent tree state
     */
    void set_order(int k) {
        if (k < 2) {
            throw std::invalid_argument("B+ tree node order must be >= 2");
        }
        this->order = k;
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
     * @brief Set the keys vector
     * @param keys New vector of key pointers to assign
     * @note Keys are owned by grove's deque, not by node - no deletion occurs
     */
    void set_keys(const std::vector<gdt::key<key_type, data_type>*>& keys) {
        // Keys are owned by grove's deque, not by node - don't delete them
        this->keys = keys;
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
     * @brief Set the children vector
     * @param children New vector of child node pointers to assign
     * @note Previous children are not deleted - caller must manage memory
     */
    void set_children(const std::vector<node<key_type, data_type>*>& children) {
        this->children = children;
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
     * @brief Set the next sibling pointer (for leaf node chaining)
     * @param next Pointer to the next leaf node in sequence
     * @note Only used for leaf nodes to enable efficient range traversal
     */
    void set_next(node<key_type, data_type>* next) {
        this->next = next;
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
     * @brief Set whether this node is a leaf
     * @param is_leaf True if this is a leaf node, false if internal node
     */
    void set_is_leaf(bool is_leaf) {
        this->is_leaf = is_leaf;
    }

    /**
     * @brief Check if this node is a leaf
     * @return True if this is a leaf node, false if internal node
     */
    bool get_is_leaf() const noexcept {
        return this->is_leaf;
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
        if (index < 0 || index > static_cast<int>(this->keys.size())) {
            throw std::out_of_range("key index out of range");
        }
        this->keys.insert(this->keys.begin() + index, key_ptr);
    }

    /**
     * @brief Calculate the aggregated parent key for this node
     * @return Aggregated key_type representing the bounding value for all keys in this node
     *
     * Used to compute the representative key value for internal nodes during tree
     * construction and maintenance. The aggregate function combines all key values
     * to create a single value that encompasses the entire subtree.
     *
     * For example:
     * - interval: Returns bounding interval (min start, max end)
     * - numeric: Returns maximum value
     * - genomic_coordinate: Returns bounding coordinate with wildcard strand
     */
    key_type calc_parent_key() {
        key_type result = this->keys[0]->get_value();
        for (size_t i = 1; i < this->keys.size(); ++i) {
            result = key_type::aggregate(result, this->keys[i]->get_value());
        }
        return result;
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
        if(index < 0 || index >= this->children.size()) {
            throw std::out_of_range("child index out of range");
        }
        return this->children[index];
    }

    // =========================================================================
    // Serialization
    // =========================================================================

    /**
     * @brief Serialize this node to an output stream
     * @param os Output stream to write serialized data to
     *
     * Writes the node's structure and content to the stream in binary format,
     * allowing the node to be persisted and later restored.
     */
    void serialize(std::ostream& os);

    /**
     * @brief Deserialize a node from an input stream
     * @param is Input stream to read serialized data from
     * @param order The B+ tree order to use for the deserialized node
     * @param key_storage Deque to allocate keys into for stable pointer addresses
     * @return Pointer to the newly created and populated node
     *
     * Reads serialized node data from the stream and reconstructs the node
     * structure, including keys and child relationships. Keys are placed directly
     * into the provided deque (owned by the grove) rather than heap-allocated,
     * ensuring pointer stability and single-owner semantics.
     */
    [[nodiscard]] static node<key_type, data_type>* deserialize(
        std::istream& is, int order,
        std::deque<gdt::key<key_type, data_type>>& key_storage);

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
void node<key_type, data_type>::serialize(std::ostream& os) {
    // Pack is_leaf into high bit of key count (saves 5B per node vs separate bool + size_t)
    uint32_t packed = static_cast<uint32_t>(keys.size());
    if (is_leaf) packed |= 0x80000000u;
    os.write(reinterpret_cast<const char*>(&packed), sizeof(packed));

    // Write each key
    for (const auto* key_ptr : keys) {
        // Serialize key_type value (requires member serialize method)
        key_ptr->get_value().serialize(os);

        // Serialize data_type if not void (uses serialization_traits)
        if constexpr (!std::is_void_v<data_type>) {
            gdt::serializer<data_type>::write(os, key_ptr->get_data());
        }
    }

    // If not leaf, serialize children
    if (!is_leaf) {
        uint32_t num_children = static_cast<uint32_t>(children.size());
        os.write(reinterpret_cast<const char*>(&num_children), sizeof(num_children));

        for (auto* child : children) {
            child->serialize(os);
        }
    }

    if (!os) {
        throw std::runtime_error("Failed to serialize node: stream error");
    }
}

template<typename key_type, typename data_type>
node<key_type, data_type>* node<key_type, data_type>::deserialize(
        std::istream& is, int order,
        std::deque<gdt::key<key_type, data_type>>& key_storage) {
    // Create new node
    auto* n = new node<key_type, data_type>(order);

    // Unpack is_leaf from high bit + key count from low 31 bits
    uint32_t packed;
    is.read(reinterpret_cast<char*>(&packed), sizeof(packed));
    if (!is) {
        delete n;
        throw std::runtime_error("Failed to deserialize node: stream error reading packed header");
    }
    n->is_leaf = (packed & 0x80000000u) != 0;
    uint32_t num_keys = packed & 0x7FFFFFFFu;
    if (num_keys >= static_cast<uint32_t>(order)) {
        delete n;
        throw std::runtime_error("Failed to deserialize node: num_keys exceeds order");
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

    // If not leaf, deserialize children
    if (!n->is_leaf) {
        uint32_t num_children;
        is.read(reinterpret_cast<char*>(&num_children), sizeof(num_children));
        if (!is) {
            delete n;
            throw std::runtime_error("Failed to deserialize node: stream error reading num_children");
        }
        if (num_children > static_cast<uint32_t>(order)) {
            delete n;
            throw std::runtime_error("Failed to deserialize node: num_children exceeds order");
        }

        n->children.reserve(num_children);
        for (uint32_t i = 0; i < num_children; ++i) {
            auto* child = node<key_type, data_type>::deserialize(is, order, key_storage);
            child->parent = n;
            n->children.push_back(child);
        }
    }

    return n;
}

} // namespace genogrove::structure

#endif // GENOGROVE_STRUCTURE_NODE_HPP
