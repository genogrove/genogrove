/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef STRUCTURE_GROVE_HPP
#define STRUCTURE_GROVE_HPP

// standard
#include <string_view>
#include <unordered_map>
#include <variant>

// genogrove
#include "genogrove/utility/ranges.hpp"
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/structure/grove/node.hpp>

namespace ggu = genogrove::utility;
namespace gdt = genogrove::data_type;

namespace genogrove::structure {
    // tag types for insert dispatch
    struct unsorted_t {};
    struct sorted_t {};
    struct bulk_t {};

    inline static constexpr unsorted_t unsorted{};
    inline static constexpr sorted_t sorted{};
    inline static constexpr bulk_t bulk{};

template <typename key_type, typename data_type = void>
class grove {

  public:
    grove(int order) : order(order), root_nodes(), rightmost_nodes() {}
    grove() : order(3), root_nodes(), rightmost_nodes() {}
    ~grove() {
        // Delete all root nodes (which will recursively delete their children)
        for(auto& [key, root] : root_nodes) {
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
    std::unordered_map<std::string, node<key_type, data_type>*> get_root_nodes() const {
        return this->root_nodes;
    }

    /*
     * @brief sets the map with root nodes in the grove
     */
    void set_root_nodes(std::unordered_map<std::string, node<key_type, data_type>*> root_nodes) {
        // this->root_nodes = root_nodes;
        for(auto& [_, root] : root_nodes) {
            delete root;
        }
        this->root_nodes = std::move(root_nodes);
        this->rightmost_nodes.clear();
    }

    /*
     * @brief returns the rightmost node in the grove (for easy access)
     * @param The chromosome the grove is associated with
     */
    node<key_type, data_type>* get_rightmost_node(std::string_view key) {
        return ggu::value_lookup(this->rightmost_nodes, std::string(key)).value_or(nullptr);
    }

    /*
     * @brief sets the rightmode node in the grove (for easy access)
     * @param The key the grove is associated with
     * @param The rightmost node in the grove
     */
    void set_rightmost_node(std::string_view key, node<key_type, data_type>* node) {
        this->rightmost_nodes[std::string(key)] = node;
    }

    /*
     * @brief get the root node of the grove for a given key
     * @param The key associated with the root node (of the grove)
     */
    node<key_type, data_type>* get_root(std::string_view key) {
        return ggu::value_lookup(this->root_nodes, std::string(key)).value_or(nullptr);
    }

    /*
     * @brief inserts a new root node into the grove
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

    /*
     * @brief inserts a data point into the grove
     * @param The key associated with the data point
     * @param The type of the key to be inserted
     * @param The data point
     * @param Tag to dispatch the unsorted insert
     */
    void insert_data(std::string_view index, key_type key_value, data_type data_value,
                    unsorted_t)
        requires (!std::is_void_v<data_type>) {
            gdt::key<key_type, data_type> key(key_value, data_value);
            insert(index, key);
    }

    /*
     * @brief inserts a sorted data point into the grove
     * @param The key associated with the data point
     * @param The type of the key to be inserted
     * @param The data point
     * @param Tag to dispatch to sorted insert
     * @note This assumes key_value is greater than all existing keys in the tree
     */
    void insert_data(std::string_view index, key_type key_value, data_type data_value,
                    sorted_t)
        requires(!std::is_void_v<data_type>) {
        insert_data_sorted(index, key_value, data_value);
    }

    /*
     * @brief inserts a data point into the grove (defaults to unsorted)
     * @param The key associated with the data point
     * @param The type of the key to be inserted
     * @param The data point
     */
    void insert_data(std::string_view index, key_type key_value, data_type data_value)
        requires (!std::is_void_v<data_type>) {
            insert_data(index, key_value, data_value, unsorted);
        }

    /*
     * @brief inserts a new key elements into the grove
     */
    void insert(std::string_view index, gdt::key<key_type, data_type>& key) {
        // get the root node for the given chromosome (or create a new one if it doesn't exist)
        node<key_type, data_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = this->insert_root(index);
        }
        insert_iter(root, key);
        if(root->get_keys().size() == this->order) {
            node<key_type, data_type>* new_root = new node<key_type, data_type>(this->order);
            new_root->add_child(root, 0);
            new_root->set_is_leaf(false);
            root->set_parent(new_root);
            split_node(new_root, 0);
            root = new_root;
            this->root_nodes[std::string(index)] = root; // update the root node in the map
        }
    }

    /*
     * @brief inserts a new key into the grove
     */
    void insert_iter(node<key_type, data_type>* node, gdt::key<key_type, data_type>& key) {
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

    void split_node(node<key_type, data_type>* parent, int index) {
        node<key_type, data_type>* child = parent->get_child(index);
        node<key_type, data_type>* new_child = new node<key_type, data_type>(this->order);
        new_child->set_parent(parent);
        int mid = (this->order + 2 - 1) / 2;

        // move overflowing keys to the new child node (and resize the original node)
        new_child->set_is_leaf(child->get_is_leaf());

        new_child->get_keys().assign(child->get_keys().begin() + mid, child->get_keys().end());
        child->get_keys().resize(mid); // resize the original node

        // update the parent (aka new child node)
        parent->get_children().insert(parent->get_children().begin() + index + 1, new_child);
        gdt::key<key_type, data_type> parent_key{child->calc_parent_key()};
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
            child->get_children().resize(mid); // resize the original node
        }
    }

    /*
     * @brief inserts a sorted data point into the grove. This means that kval is greater than
     * the values of the keys in the tree
     * @param the index associated to the grove this should be inserted
     * @param the value of the key to be inserted
     * @param the value of the data to be inserted
     */
    void insert_data_sorted(std::string_view index, key_type key_value, data_type data_value)
        requires (!std::is_void_v<data_type>) {
            gdt::key<key_type, data_type> key(key_value, data_value); // create the key object
            insert_sorted(index, key);
    }

    void insert_sorted(std::string_view index, gdt::key<key_type, data_type>& key) {
        node<key_type, data_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = this->insert_root(index);
            root->insert_key(key);
            return;
        } else {
            // get rightmost node and insert
            node<key_type, data_type>* rightmost_node = this->get_rightmost_node(index);
            rightmost_node->insert_key(key);

            // handle key overflow in node
            if(rightmost_node->get_keys().size() == this->order) {
                // check if the rightmost node is the root
                if(rightmost_node->get_parent() == nullptr) {
                    node<key_type, data_type>* new_root = new node<key_type, data_type>(this->order);
                    new_root->add_child(rightmost_node, 0);
                    new_root->set_is_leaf(false);
                    rightmost_node->set_parent(new_root);
                    split_node(new_root, 0);
                    this->root_nodes[std::string(index)] = new_root;
                } else {
                    // regular split - rightmost child is at last index
                    int child_index = rightmost_node->get_parent()->get_children().size() - 1;
                    split_node(rightmost_node->get_parent(), child_index);
                }
            }
        }
    }

    gdt::query_result<key_type, data_type> intersect(key_type& query) {
        gdt::query_result<key_type, data_type> result{query};
        // if index is not specified, all root nodes need to be checked
        for(const auto& [index, root] : this->get_root_nodes()) {
            search_iter(root, query, result);
        }
        return result;
    }

    // template <typename query_type>
    gdt::query_result<key_type, data_type> intersect(key_type& query, const std::string& index) {
        gdt::query_result<key_type, data_type> result{query};
        node<key_type, data_type>* root = this->get_root(index);

        if(root == nullptr) {
            return result;
        }
        search_iter(root, query, result);
        return result;
    }

    void search_iter(node<key_type, data_type>* node, key_type& query,
        gdt::query_result<key_type, data_type>& result) {
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

    /*
     * @brief write the grove to a stream (for debugging purposes)
     */
    void grove_to_sif(std::ostream& os, node<key_type, data_type>* node) {
        std::vector<gdt::key<key_type, data_type>> keys = {};
        for(int i = 0; i < node->get_keys().size(); ++i ) {
            node->get_keys()[i].print_key(os);
        }
    }

    void serialize(std::ostream& os) {
        // write the order of the tree
        os.write(reinterpret_cast<const char*>(&this->order), sizeof(this->order));

        // write the root nodes
        size_t number_root_nodes = this->root_nodes.size();
        os.write(reinterpret_cast<const char*>(&number_root_nodes), sizeof(number_root_nodes));

        // serialize the root nodes
        for(auto& [key, root] : this->root_nodes) {
            size_t index_name_length = key.size();
            os.write(reinterpret_cast<const char*>(&index_name_length), sizeof(index_name_length));
            os.write(key.c_str(), index_name_length);
            root->serialize(os);
        }
        // note: we don't serialize rightmost node - and rather calculate them quickly when deserializing
    }

    grove deserialize(std::istream& is) {
        int order;
        is.read(reinterpret_cast<char*>(&order), sizeof(order));
        grove grove(order);

        size_t number_root_nodes;
        is.read(reinterpret_cast<char*>(&number_root_nodes), sizeof(number_root_nodes));

    }

  private:
    int order;
    std::unordered_map<std::string, node<key_type, data_type>*> root_nodes;
    std::unordered_map<std::string, node<key_type, data_type>*> rightmost_nodes;
};

} // namespace genogrove::structure

#endif // STRUCTURE_GROVE_HPP
