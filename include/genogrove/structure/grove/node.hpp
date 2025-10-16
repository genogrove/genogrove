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
#include <string_view>
#include <vector>

// genogrove
#include "genogrove/data_type/interval.hpp"
#include "genogrove/data_type/key.hpp"

namespace gdt = genogrove::data_type;

namespace genogrove::structure {
template <typename key_type, typename data_type = void>
class node {
  public:
    node(int order)
        : order(order), keys{}, children{}, parent{nullptr}, next{nullptr}, is_leaf{false} {
        // Reserve capacity upfront to avoid reallocations
        keys.reserve(order-1);
        children.reserve(order);
    }
    ~node() {
        // Only delete children if this is an internal node
        // Leaf nodes don't own their children
        if (!is_leaf) {
            for (auto* child : children) {
                delete child;
            }
        }
    }

    // getter & setter
    int get_order() const {
        return this->order;
    }
    void set_order(int k) {
        this->order = k;
    }
    std::vector<gdt::key<key_type, data_type>>& get_keys() {
        return this->keys;
    }
    void set_keys(const std::vector<gdt::key<key_type, data_type>>& keys) {
        this->keys = keys;
    }
    std::vector<node<key_type, data_type>*>& get_children() {
        return this->children;
    }
    void set_children(const std::vector<node<key_type, data_type>*>& children) {
        this->children = children;
    }
    node<key_type, data_type>* get_parent() const {
        return this->parent;
    }
    void set_parent(node<key_type, data_type>* parent) {
        this->parent = parent;
    }
    void set_next(node<key_type, data_type>* next) {
        this->next = next;
    }
    node<key_type, data_type>* get_next() const {
        return this->next;
    }
    void set_is_leaf(bool is_leaf) {
        this->is_leaf = is_leaf;
    }
    bool get_is_leaf() const {
        return this->is_leaf;
    }

    void insert_key(gdt::key<key_type, data_type>& key1) {
        int i = 0;
        while(i < this->keys.size() && key1.get_value() > this->keys[i].get_value()) {
            i++;
        }
        this->keys.insert(this->keys.begin() + i, key1);
    }
    void insert_key(gdt::key<key_type, data_type>& key1, int index) {
        this->keys.insert(this->keys.begin() + index, key1);
    }

    key_type calc_parent_key() {
        // create vector of reference intervals with reserved capacity
        std::vector<key_type> values;
        values.reserve(this->keys.size());
        for(int i = 0; i < this->keys.size(); i++) {
            values.push_back(this->keys[i].get_value());
        }
        return key_type::aggregate(values);
    }

    void add_child(node<key_type, data_type>* child, int index) {
        this->children.insert(this->children.begin() + index, child);
    }
    node<key_type, data_type>* get_child(int index) {
        if(index < 0 || index >= this->children.size()) {
            throw std::out_of_range("child index out of range");
        }
        return this->children[index];
    }

    /*
     *
     */
    void serialize(std::ostream& os);
    static node<key_type, data_type>* deserialize(std::istream& is, int order);

    void print_keys(std::ostream& os, std::string_view sep = "\t") {
        for(int i = 0; i < this->keys.size(); ++i) {
            os << this->keys[i].get_value().toString() << sep;
        }
        os << std::endl;
    }

  private:
    int order;
    std::vector<gdt::key<key_type, data_type>> keys;
    std::vector<node<key_type, data_type>*> children;
    node<key_type, data_type>* parent;
    node<key_type, data_type>* next;
    bool is_leaf;
};
} // namespace genogrove::structure

#endif // GENOGROVE_STRUCTURE_NODE_HPP
