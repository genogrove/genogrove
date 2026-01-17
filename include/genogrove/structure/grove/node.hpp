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
#include <istream>
#include <ostream>
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
    node(int order)
        : order(order), keys{}, children{}, parent{nullptr}, next{nullptr}, is_leaf{false} {
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
    int get_order() const {
        return this->order;
    }

    /**
     * @brief Set the B+ tree order of this node
     * @param k The new order value
     * @note Changing order after construction may lead to inconsistent tree state
     */
    void set_order(int k) {
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
    node* get_parent() const {
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
    node* get_next() const {
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
    bool get_is_leaf() const {
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
        int i = 0;
        while(i < this->keys.size() && key_ptr->get_value() > this->keys[i]->get_value()) {
            i++;
        }
        this->keys.insert(this->keys.begin() + i, key_ptr);
    }

    /**
     * @brief Insert a pre-allocated key pointer at specific index
     * @param key_ptr Pointer to key (already allocated by grove's deque)
     * @param index Position to insert at (0-based)
     *
     * Directly inserts the key at the specified index without checking sort order.
     * Caller is responsible for ensuring the insertion maintains sorted order.
     *
     * @note Key must be allocated by grove before calling this
     * @note No bounds checking - index must be valid (0 to keys.size())
     */
    void insert_key_ptr(gdt::key<key_type, data_type>* key_ptr, int index) {
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
        // create vector of reference intervals with reserved capacity
        std::vector<key_type> values;
        values.reserve(this->keys.size());
        for(int i = 0; i < this->keys.size(); i++) {
            values.push_back(this->keys[i]->get_value());
        }
        return key_type::aggregate(values);
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
     * @return Pointer to the newly created and populated node
     *
     * Reads serialized node data from the stream and reconstructs the node
     * structure, including keys and child relationships.
     */
    static node<key_type, data_type>* deserialize(std::istream& is, int order);

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
    void print_keys(std::ostream& os, std::string_view sep = "\t") {
        for(int i = 0; i < this->keys.size(); ++i) {
            os << this->keys[i]->get_value().to_string() << sep;
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
    // Write is_leaf flag
    os.write(reinterpret_cast<const char*>(&is_leaf), sizeof(is_leaf));

    // Write number of keys
    size_t num_keys = keys.size();
    os.write(reinterpret_cast<const char*>(&num_keys), sizeof(num_keys));

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
        size_t num_children = children.size();
        os.write(reinterpret_cast<const char*>(&num_children), sizeof(num_children));

        for (auto* child : children) {
            child->serialize(os);
        }
    }
}

template<typename key_type, typename data_type>
node<key_type, data_type>* node<key_type, data_type>::deserialize(std::istream& is, int order) {
    // Create new node
    auto* n = new node<key_type, data_type>(order);

    // Read is_leaf flag
    is.read(reinterpret_cast<char*>(&n->is_leaf), sizeof(n->is_leaf));

    // Read number of keys
    size_t num_keys;
    is.read(reinterpret_cast<char*>(&num_keys), sizeof(num_keys));

    // Read each key
    n->keys.reserve(num_keys);
    for (size_t i = 0; i < num_keys; ++i) {
        // Read key_type value (requires static deserialize method)
        key_type key_value = key_type::deserialize(is);

        // Create key (with or without data)
        gdt::key<key_type, data_type>* key_ptr;
        if constexpr (std::is_void_v<data_type>) {
            key_ptr = new gdt::key<key_type, data_type>(key_value);
        } else {
            data_type data_value = gdt::serializer<data_type>::read(is);
            key_ptr = new gdt::key<key_type, data_type>(key_value, data_value);
        }
        n->keys.push_back(key_ptr);
    }

    // If not leaf, deserialize children
    if (!n->is_leaf) {
        size_t num_children;
        is.read(reinterpret_cast<char*>(&num_children), sizeof(num_children));

        n->children.reserve(num_children);
        for (size_t i = 0; i < num_children; ++i) {
            auto* child = node<key_type, data_type>::deserialize(is, order);
            child->parent = n;
            n->children.push_back(child);
        }
    }

    return n;
}

} // namespace genogrove::structure

#endif // GENOGROVE_STRUCTURE_NODE_HPP
