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
#include <deque>

// genogrove
#include "genogrove/utility/ranges.hpp"

#include <queue>
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/structure/grove/node.hpp>
#include <genogrove/structure/grove/graph_overlay.hpp>

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

template <typename key_type, typename data_type = void, typename edge_data_type = void>
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
     * @brief Get reference to the graph overlay
     * @return Reference to the single graph for this grove
     * @note The graph can store edges between keys from any index (chr1, chr2, etc.)
     */
    graph_overlay<key_type, data_type, edge_data_type>& graph() {
        return graph_data;
    }

    /*
     * @brief Get const reference to the graph overlay
     * @return Const reference to the graph overlay
     */
    const graph_overlay<key_type, data_type, edge_data_type>& graph() const {
        return graph_data;
    }

    /*
     * @brief Add edge between two keys (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param target Pointer to target key
     */
    void add_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target) {
        graph_data.add_edge(source, target);
    }

    /*
     * @brief Add edge with metadata (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @param metadata Edge metadata
     */
    template<typename M = edge_data_type>
    void add_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target,
                  M&& metadata)
        requires (!std::is_void_v<edge_data_type>) {
        graph_data.add_edge(source, target, std::forward<M>(metadata));
    }

    /*
     * @brief Get neighbors of a key (convenience forwarding to graph)
     * @param source Pointer to source key
     * @return Vector of neighbor keys
     */
    std::vector<gdt::key<key_type, data_type>*> get_neighbors(
        gdt::key<key_type, data_type>* source) const {
        return graph_data.get_neighbors(source);
    }

    /*
     * @brief Remove edge between two keys (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @return true if edge was removed, false otherwise
     */
    bool remove_edge(gdt::key<key_type, data_type>* source,
                     gdt::key<key_type, data_type>* target) {
        return graph_data.remove_edge(source, target);
    }

    /*
     * @brief Get edge metadata for all outgoing edges (convenience forwarding to graph)
     * @param source Pointer to source key
     * @return Vector of edge metadata
     */
    template<typename M = edge_data_type>
    std::vector<M> get_edges(gdt::key<key_type, data_type>* source) const
        requires (!std::is_void_v<edge_data_type>) {
        return graph_data.get_edges(source);
    }

    /*
     * @brief Get all outgoing edge structures (convenience forwarding to graph)
     * @param source Pointer to source key
     * @return Const reference to vector of edges
     */
    const std::vector<typename graph_overlay<key_type, data_type, edge_data_type>::edge>&
    get_edge_list(gdt::key<key_type, data_type>* source) const {
        return graph_data.get_edge_list(source);
    }

    /*
     * @brief Get neighbors filtered by predicate (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param predicate Function to filter edges by metadata
     * @return Vector of neighbor keys where predicate returns true
     */
    template<typename Predicate>
    std::vector<gdt::key<key_type, data_type>*> get_neighbors_if(
        gdt::key<key_type, data_type>* source,
        Predicate predicate) const
        requires (!std::is_void_v<edge_data_type>) {
        return graph_data.get_neighbors_if(source, predicate);
    }

    /*
     * @brief Check if edge exists (convenience forwarding to graph)
     * @param source Pointer to source key
     * @param target Pointer to target key
     * @return true if edge exists, false otherwise
     */
    bool has_edge(gdt::key<key_type, data_type>* source,
                  gdt::key<key_type, data_type>* target) const {
        return graph_data.has_edge(source, target);
    }

    /*
     * @brief Get number of outgoing edges from a key (convenience forwarding to graph)
     * @param source Pointer to source key
     * @return Number of outgoing edges
     */
    [[nodiscard]] size_t out_degree(gdt::key<key_type, data_type>* source) const {
        return graph_data.out_degree(source);
    }

    /*
     * @brief Get total number of edges in graph (convenience forwarding to graph)
     * @return Total edge count
     */
    [[nodiscard]] size_t edge_count() const {
        return graph_data.edge_count();
    }

    /*
     * @brief Get number of keys with outgoing edges (convenience forwarding to graph)
     * @return Number of source keys
     */
    [[nodiscard]] size_t vertex_count() const {
        return graph_data.vertex_count();
    }

    /*
     * @brief Clear all edges in the graph (convenience forwarding to graph)
     */
    void clear_graph() {
        graph_data.clear();
    }

    /*
     * @brief Check if graph is empty (convenience forwarding to graph)
     * @return true if no edges exist
     */
    [[nodiscard]] bool graph_empty() const {
        return graph_data.empty();
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
     * @return Pointer to the inserted key in the tree
     */
    gdt::key<key_type, data_type>* insert_data(std::string_view index, key_type key_value, data_type data_value,
                    unsorted_t)
        requires (!std::is_void_v<data_type>) {
            gdt::key<key_type, data_type> key(key_value, data_value);
            return insert(index, key);
    }

    /*
     * @brief inserts a sorted data point into the grove
     * @param The key associated with the data point
     * @param The type of the key to be inserted
     * @param The data point
     * @param Tag to dispatch to sorted insert
     * @note This assumes key_value is greater than all existing keys in the tree
     * @return Pointer to the inserted key in the tree
     */
    gdt::key<key_type, data_type>* insert_data(std::string_view index, key_type key_value, data_type data_value,
                    sorted_t)
        requires(!std::is_void_v<data_type>) {
        return insert_data_sorted(index, key_value, data_value);
    }

    /*
     * @brief inserts a data point into the grove (defaults to unsorted)
     * @param The key associated with the data point
     * @param The type of the key to be inserted
     * @param The data point
     * @return Pointer to the inserted key in the tree
     */
    gdt::key<key_type, data_type>* insert_data(std::string_view index, key_type key_value, data_type data_value)
        requires (!std::is_void_v<data_type>) {
            return insert_data(index, key_value, data_value, unsorted);
        }

    /*
     * @brief inserts a new key elements into the grove
     * @return Pointer to the inserted key in the tree
     */
    gdt::key<key_type, data_type>* insert(std::string_view index, gdt::key<key_type, data_type>& key) {
        // get the root node for the given chromosome (or create a new one if it doesn't exist)
        node<key_type, data_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = this->insert_root(index);
        }
        auto* key_ptr = insert_iter(root, key);
        if(key_ptr == nullptr) {
            // insertion failed
            throw std::runtime_error("Failed to insert key into tree");
            return nullptr;
        }
        if(root->get_keys().size() == this->order) {
            node<key_type, data_type>* new_root = new node<key_type, data_type>(this->order);
            new_root->add_child(root, 0);
            new_root->set_is_leaf(false);
            root->set_parent(new_root);
            split_node(new_root, 0);
            root = new_root;
            this->root_nodes[std::string(index)] = root; // update the root node in the map
        }
        return key_ptr;
    }

    /*
     * @brief inserts a new key into the grove
     * @return Pointer to the inserted key in the tree
     */
    gdt::key<key_type, data_type>* insert_iter(node<key_type, data_type>* node, gdt::key<key_type, data_type>& key) {
        if(!node) {
            throw std::runtime_error("Null node passed to insert_iter");
        }
        if(node->get_is_leaf()) {
            try {
                // Allocate key from grove's deque storage
                auto* key_ptr = allocate_key(key);
                node->insert_key_ptr(key_ptr);
                return key_ptr;

            } catch(const std::exception& e) {
                std::cerr << "Failed to insert key into leaf node: " << e.what() << std::endl;
                return nullptr;
            }
        } else {
            int child_index = 0;
            while(child_index < node->get_keys().size() &&
                  key.get_value() > node->get_keys()[child_index]->get_value()) {
                child_index++;
            }
            auto* key_ptr = insert_iter(node->get_child(child_index), key);
            if(node->get_child(child_index)->get_keys().size() == this->order) {
                split_node(node, child_index);
            }
            return key_ptr;
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
        // Allocate parent key from grove's deque storage
        auto* parent_key_ptr = allocate_key(parent_key);
        parent->get_keys().insert(parent->get_keys().begin() + index, parent_key_ptr);

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
     * @return Pointer to the inserted key in the tree
     */
    gdt::key<key_type, data_type>* insert_data_sorted(std::string_view index, key_type key_value, data_type data_value)
        requires (!std::is_void_v<data_type>) {
            gdt::key<key_type, data_type> key(key_value, data_value); // create the key object
            return insert_sorted(index, key);
    }

    gdt::key<key_type, data_type>* insert_sorted(std::string_view index, gdt::key<key_type, data_type>& key) {
        node<key_type, data_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = this->insert_root(index);
            // Allocate key from grove's deque storage
            auto* key_ptr = allocate_key(key);
            root->insert_key_ptr(key_ptr);
            return key_ptr;
        } else {
            // get rightmost node and insert
            node<key_type, data_type>* rightmost_node = this->get_rightmost_node(index);
            // Allocate key from grove's deque storage
            auto* key_ptr = allocate_key(key);
            rightmost_node->insert_key_ptr(key_ptr);

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
            return key_ptr;
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
                if(key_type::overlap(node->get_keys()[i]->get_value(), query)) {
                    last_match = i;
                    result.add_key(node->get_keys()[i]);
                }
            }
            // check if there is an overlap within the next node (if so we have to traverse it)
            if(node->get_next() != nullptr) {
                int last_key =
                    node->get_keys().size() - 1; // index of the last key in the current node
                if(key_type::overlap(node->get_keys()[last_key]->get_value(), query)) {
                    search_iter(node->get_next(), query, result);
                }
            }
        } else {
            // abort if left of key (not overlapping) - only neded for intervals
            if constexpr (requires { key_type::is_interval; }) {
                if(query < node->get_keys()[0]->get_value() &&
                   !key_type::overlap(node->get_keys()[0]->get_value(), query)) {
                    return;
                }
            }

            int i = 0;
            while(i < node->get_keys().size() && (query > node->get_keys()[i]->get_value()) &&
                  !key_type::overlap(node->get_keys()[i]->get_value(), query)) {
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
    void grove_to_sif(std::ostream& os, node<key_type, data_type>* root) {
        if(!root) { return; }
        std::queue<node<key_type, data_type>*> q;
        q.push(root);

        while(!q.empty()) {
            // extract the node and remove from queue
            node<key_type, data_type>* node = q.front();
            q.pop();
            if(!node->get_is_leaf()) {
                // if not leaf add connected
                for(auto child : node->get_children()) {
                    q.push(child);
                    os << "|";
                    node->print_keys(os, "|");
                    os << "\tnodelink\t|";
                    child->print_keys(os,"|");
                    os << "\n";
                }
            } else {
                // if leaf print keys and link to next (if not nullptr)
                if(node->get_next()) {
                    os << "|";
                    node->print_keys(os, "|");
                    os << "\tleaflink\t|";
                    node->get_next()->print_keys(os, "|");
                    os << "\n";
                }

                // also print links to other keys
                // for(auto key : node->get_keys()) {
                //     auto neighbors = this->get_neighbors(key);
                //     for(auto neighbor : neighbors) {
                //         os << key->to_string() << "\tkeylink\t" << neighbor->to_string() << "\n";
                //     }
                // }
            }
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
    /*
     * @brief Allocate a key in the grove's storage and return a pointer to it
     * @note Keys are stored in a deque for stable addresses and better cache locality
     */
    gdt::key<key_type, data_type>* allocate_key(const gdt::key<key_type, data_type>& key) {
        key_storage.push_back(key);
        return &key_storage.back();
    }

    int order;
    std::unordered_map<std::string, node<key_type, data_type>*> root_nodes;
    std::unordered_map<std::string, node<key_type, data_type>*> rightmost_nodes;
    std::deque<gdt::key<key_type, data_type>> key_storage; // Contiguous storage for keys

    // Single graph overlay for this grove
    graph_overlay<key_type, data_type, edge_data_type> graph_data;
};

} // namespace genogrove::structure

#endif // STRUCTURE_GROVE_HPP
