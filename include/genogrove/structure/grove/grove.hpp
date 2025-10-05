/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef STRUCTURE_GROVE_HPP
#define STRUCTURE_GROVE_HPP

// standard
#include <unordered_map>

// genogrove
#include "genogrove/utility/ranges.hpp"
#include "node.hpp"

#include <genogrove/data_type/query_result.hpp>

namespace ggu = genogrove::utility;
namespace gdt = genogrove::data_type;

namespace genogrove::structure {
template <typename key_type> class grove {
  public:
    grove(int order) : order(order), root_nodes(), rightmost_nodes() {}
    grove() : order(3), root_nodes(), rightmost_nodes() {}
    ~grove() {
        // Delete all root nodes (which will recursively delete their children)
        for (auto& [key, root] : root_nodes) {
            delete root;
        }
    }

    /*
     * @brief returns the order of the grove
     */
    int get_order() const {
        return this->order;
    }

    /*
     * @brief sets the order of the grove
     */
    void set_order(int order) {
        this->order = order;
    }

    /*
     * @brief return map with root nodes in the grove
     */
    std::unordered_map<std::string, node<key_type>*> get_root_nodes() const {
        return this->root_nodes;
    }

    /*
     * @brief sets the map with root nodes in the grove
     */
    void set_root_nodes(std::unordered_map<std::string, node<key_type>*> root_nodes) {
        this->root_nodes = root_nodes;
    }

    /*
     * @brief returns the rightmost node in the grove (for easy access)
     * @param The chromosome the grove is associated with
     */
    node<key_type>* get_rightmost_node(std::string key) {
        return this->rightmost_nodes[key];
    }

    /*
     * @brief sets the rightmode node in the grove (for easy access)
     * @param The key the grove is associated with
     * @param The rightmost node in the grove
     */
    void set_rightmost_node(std::string key, node<key_type>* node) {
        return this->rightmost_nodes[key] = node;
    }

    /*
     * @brief get the root node of the grove for a given key
     * @param The key associated with the root node (of the grove)
     */
    node<key_type>* get_root(std::string key) {
        return ggu::value_lookup(this->root_nodes, key).value_or(nullptr);
    }

    /*
     * @brief inserts a new root node into the grove
     */
    node<key_type>* insert_root(std::string key) {
        // check if the root node is already in the map (error)
        if(ggu::value_lookup(this->root_nodes, key)) {
            throw std::runtime_error("Root node already exists for key: " + key);
        }
        node<key_type>* root = new node<key_type>(this->order);
        this->root_nodes.insert({key, root});
        root->set_is_leaf(true);
        this->rightmost_nodes.insert({key, root});
        return root;
    }

    /*
     * @brief inserts a data point into the grove
     * @param The key associated with the data point
     * @param The type of the key to be inserted
     * @param The data point
     */
    template <typename data_type>
    void insert_data(std::string index, key_type ktype, data_type dtype) {
        gdt::key<key_type> key(ktype, dtype);
        insert(index, key);
    }

    /*
     * @brief inserts a new key elements into the grove
     */
    void insert(std::string index, gdt::key<key_type>& key) {
        // get the root node for the given chromosome (or create a new one if it doesn't exist)
        node<key_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = this->insert_root(index);
        }
        insert_iter(root, key);
        if(root->get_keys().size() == this->order) {
            node<key_type>* new_root = new node<key_type>(this->order);
            new_root->add_child(root, 0);
            new_root->set_is_leaf(false);
            split_node(new_root, 0);
            root = new_root;
            this->root_nodes[index] = root; // update the root node in the map
        }
    }

    /*
     * @brief inserts a new key into the grove
     */
    void insert_iter(node<key_type>* node, gdt::key<key_type>& key) {
        if(!node) {
            throw std::runtime_error("Null node passed to insert_iter");
        }
        if(node->get_is_leaf()) {
            try {
                node->insert_key(key);

            } catch(const std::exception& e) {
                std::cerr << "Failed to insert key into leaf node: " << e.what() << std::endl;
            }
        } else {
            int child_index = 0;
            while(child_index < node->get_keys().size() &&
                  key.get_value() > node->get_keys()[child_index].get_value()) {
                child_index++;
            }
            insert_iter(node->get_child(child_index), key);
            if(node->get_child(child_index)->get_keys().size() == this->order) {
                split_node(node, child_index);
            }
        }
    }

    void split_node(node<key_type>* parent, int index) {
        node<key_type>* child = parent->get_child(index);
        node<key_type>* new_child = new node<key_type>(this->order);
        int mid = ((this->order + 2 - 1) / 2);

        // move overflowing keys to the new child node (and resize the original node)
        new_child->set_is_leaf(child->get_is_leaf());

        new_child->get_keys().assign(child->get_keys().begin() + mid, child->get_keys().end());
        child->get_keys().resize(mid); // resize the original node

        // update the parent (aka new child node)
        parent->get_children().insert(parent->get_children().begin() + index + 1, new_child);
        gdt::key<key_type> parent_key{child->calc_parent_key()};
        parent->get_keys().insert(parent->get_keys().begin() + index, parent_key);

        if(child->get_is_leaf()) {
            new_child->set_next(child->get_next());
            child->set_next(new_child);

            // update the rightmost node if necessary
            for(auto& [key, rightmost_node] : this->rightmost_nodes) {
                if(rightmost_node == child) {
                    this->rightmost_nodes[key] = new_child;
                    break;
                }
            }
        } else {
            new_child->get_children().assign(child->get_children().begin() + mid,
                                             child->get_children().end());
            child->get_children().resize(mid + 1); // resize the original node
        }
    }

    void insert_sorted(gdt::key<key_type>* key, std::string index) {
        // get the root node for the given index (or create a new one if it doesn't exist)
        node<key_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = insert_root(index);
            insert_iter(root, index);
            return;
        }

        // get the rightmost node and check if the key is sorted (greater than the rightmost key)
        node<key_type>* rightmost = this->get_rightmost_node(index);
        if(!rightmost->get_keys().empty() &&
           key->get_value() <= rightmost->get_keys().back().get_value()) {
            throw std::runtime_error("Key is not sorted: " + key->get_value());
        }

        // insert the key into the grove
        rightmost_nodes->insert_key(key);
        if(rightmost->get_keys().size() == this->order) {
            split_node_sorted(rightmost, index);
        }
    }

    void split_node_sorted(node<key_type>* node1, const std::string& index) {
        if(node1 == root_nodes[index]) {
            node<key_type>* new_root = new node<key_type>(this->order);
            new_root->add_child(node1, 0);
            split_node(new_root, 0);
        }

        int child_index = 0;
        while(child_index < node1->get_parent()->get_children().size()) {
            if(node1->get_parent()->get_children(child_index) == node1) {
                break;
            }
            child_index++;
        }
        // split the node
        split_node(node1->get_parent(), child_index);
        if(node1->get_parent()->get_children().size() == this->order) {
            split_node_sorted(node1->get_parent(), index);
        }
    }

    template <typename query_type> gdt::query_result<key_type> intersect(query_type& query) {
        gdt::query_result<key_type> result{query};
        // if index is not specified, all root nodes need to be checked
        for(const auto& [index, root] : this->get_root_nodes()) {
            search_iter(root, query, result);
        }
        return result;
    }

    // template <typename query_type>
    gdt::query_result<key_type> intersect(key_type& query, const std::string& index) {
        gdt::query_result<key_type> result{query};
        node<key_type>* root = this->get_root(index);

        if(root == nullptr) {
            return result;
        }
        search_iter(root, query, result);
        return result;
    }

    void search_iter(node<key_type>* node, key_type& query, gdt::query_result<key_type>& result) {
        if(node == nullptr) {
            return;
        }
        if(node->get_is_leaf()) {
            int last_match = -1;
            for(int i = 0; i < node->get_keys().size(); ++i) {
                if(key_type::overlap(node->get_keys()[i].get_value(), query)) {
                    last_match = i;
                    result.add_key(&node->get_keys()[i]);
                }
            }
            // check if there is an overlap within the next node (if so we have to traverse it)
            if(node->get_next() != nullptr) {
                int last_key =
                    node->get_keys().size() - 1; // index of the last key in the current node
                if(key_type::overlap(node->get_keys()[last_key].get_value(), query)) {
                    search_iter(node->get_next(), query, result);
                }
            }
        } else {
            // abort if left of key (not overlapping) - only neded for intervals
            if constexpr(key_type::is_interval) {
                if(query < node->get_keys()[0].get_value() &&
                   !key_type::overlap(node->get_keys()[0].get_value(), query)) {
                    return;
                }
            }
            int i = 0;
            while(i < node->get_keys().size() && (query > node->get_keys()[i].get_value()) &&
                  !key_type::overlap(node->get_keys()[i].get_value(), query)) {
                i++;
            }
            if(node->get_children()[i] != nullptr) {
                search_iter(node->get_children()[i], query, result);
            }
        }
    }

  private:
    int order;
    std::unordered_map<std::string, node<key_type>*> root_nodes;
    std::unordered_map<std::string, node<key_type>*> rightmost_nodes;
};

} // namespace genogrove::structure

#endif // STRUCTURE_GROVE_HPP
