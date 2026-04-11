// grove_remove.ipp — Key removal methods for grove<>
// Included inside the grove class body. Do not include directly.

public:
    /**
     * @brief Remove a key from the B+ tree and rebalance if necessary
     * @param index_name The index (e.g., chromosome) the key belongs to
     * @param key_to_remove Pointer to the key to remove (must be in this index's tree)
     * @return true if key was found and removed, false if not found
     *
     * @note Automatically removes all graph edges (both incoming and outgoing) involving
     *       the removed key to prevent dangling edge pointers.
     * @note The key object remains in the grove's deque (not deallocated); it is simply
     *       unlinked from the tree. The deque is cleaned up when the grove is destroyed.
     * @note Handles leaf underflow via redistribution (borrow from sibling) or merging,
     *       with cascading rebalance up to internal nodes and root collapse.
     */
    bool remove_key(std::string_view index_name, gdt::key<key_type, data_type>* key_to_remove) {
        if (key_to_remove == nullptr) return false;

        node<key_type, data_type>* root = this->get_root(index_name);
        if (root == nullptr) return false;

        // Find the leaf containing this key
        node<key_type, data_type>* leaf = find_leaf(root, key_to_remove);
        if (leaf == nullptr) return false;

        // Remove the key pointer from the leaf (by pointer identity)
        auto& keys = leaf->get_keys();
        auto it = std::ranges::find(keys, key_to_remove);
        if (it == keys.end()) return false;
        keys.erase(it);
        --this->leaf_key_count;

        // Clean up all graph edges involving this key
        this->graph_data.remove_all_edges(key_to_remove);

        // If leaf is root, handle the simple case
        if (leaf->get_parent() == nullptr) {
            if (keys.empty()) {
                // Tree for this index is now empty — clean up
                delete leaf;
                std::string key_str(index_name);
                this->root_nodes.erase(key_str);
                this->rightmost_nodes.erase(key_str);
            }
            return true;
        }

        // Update separator keys up the tree
        if (!keys.empty()) {
            update_separators_upward(leaf);
        }

        // Check for underflow
        if (keys.size() >= static_cast<size_t>(min_keys()) && !keys.empty()) {
            return true;
        }

        // Rebalance
        rebalance_node(leaf, index_name);
        return true;
    }

private:
    /**
     * @brief Minimum number of keys for a non-root node
     * @return ceil(order/2) - 1
     */
    int min_keys() const noexcept {
        return (this->order + 1) / 2 - 1;
    }

    /**
     * @brief Find the leaf node containing a specific key pointer
     * @param current Node to start searching from
     * @param key_to_find Key pointer to locate (matched by pointer identity)
     * @return Pointer to the leaf containing the key, or nullptr if not found
     *
     * Uses the same traversal logic as insert_iter to walk down the tree.
     */
    node<key_type, data_type>* find_leaf(node<key_type, data_type>* current,
                                          gdt::key<key_type, data_type>* key_to_find) {
        if (current == nullptr) return nullptr;

        if (current->get_is_leaf()) {
            auto& keys = current->get_keys();
            if (std::ranges::find(keys, key_to_find) != keys.end()) {
                return current;
            }
            return nullptr;
        }

        // Internal node: same traversal as insert_iter
        int child_index = 0;
        while (child_index < static_cast<int>(current->get_keys().size()) &&
               key_to_find->get_value() > current->get_keys()[child_index]->get_value()) {
            child_index++;
        }
        return find_leaf(current->get_child(child_index), key_to_find);
    }

    /**
     * @brief Walk from a node up to the root, recomputing separator keys
     * @param n The node whose ancestors' separators need updating
     */
    void update_separators_upward(node<key_type, data_type>* n) {
        auto* current = n;
        while (current->get_parent() != nullptr) {
            auto* parent = current->get_parent();
            auto& parent_children = parent->get_children();
            auto child_it = std::ranges::find(parent_children, current);
            int child_pos = static_cast<int>(child_it - parent_children.begin());

            if (child_pos < static_cast<int>(parent->get_keys().size()) &&
                !current->get_keys().empty()) {
                parent->get_keys()[child_pos]->set_value(current->calc_parent_key());
            }
            current = parent;
        }
    }

    /**
     * @brief Rebalance a node that has underflowed after key removal
     * @param n The underflowing node (leaf or internal)
     * @param index_name The grove index name for rightmost cache updates
     *
     * Tries to borrow from a sibling first (left preferred, then right).
     * If neither sibling can spare a key, merges with a sibling.
     * Cascades rebalancing upward if the merge causes the parent to underflow.
     */
    void rebalance_node(node<key_type, data_type>* n, std::string_view index_name) {
        auto* parent = n->get_parent();
        auto& parent_children = parent->get_children();
        auto child_it = std::ranges::find(parent_children, n);
        int child_pos = static_cast<int>(child_it - parent_children.begin());

        bool is_leaf = n->get_is_leaf();

        // --- Try borrow from left sibling ---
        if (child_pos > 0) {
            auto* left = parent_children[child_pos - 1];
            if (static_cast<int>(left->get_keys().size()) > min_keys()) {
                if (is_leaf) {
                    n->get_keys().insert(n->get_keys().begin(), left->get_keys().back());
                    left->get_keys().pop_back();
                } else {
                    n->get_keys().insert(n->get_keys().begin(), left->get_keys().back());
                    left->get_keys().pop_back();
                    auto* moved_child = left->get_children().back();
                    left->get_children().pop_back();
                    n->get_children().insert(n->get_children().begin(), moved_child);
                    moved_child->set_parent(n);
                }

                // Update separators for both siblings
                if (child_pos - 1 < static_cast<int>(parent->get_keys().size()) &&
                    !left->get_keys().empty()) {
                    parent->get_keys()[child_pos - 1]->set_value(left->calc_parent_key());
                }
                if (child_pos < static_cast<int>(parent->get_keys().size()) &&
                    !n->get_keys().empty()) {
                    parent->get_keys()[child_pos]->set_value(n->calc_parent_key());
                }
                update_separators_upward(parent);
                return;
            }
        }

        // --- Try borrow from right sibling ---
        if (child_pos < static_cast<int>(parent_children.size()) - 1) {
            auto* right = parent_children[child_pos + 1];
            if (static_cast<int>(right->get_keys().size()) > min_keys()) {
                if (is_leaf) {
                    n->get_keys().push_back(right->get_keys().front());
                    right->get_keys().erase(right->get_keys().begin());
                } else {
                    n->get_keys().push_back(right->get_keys().front());
                    right->get_keys().erase(right->get_keys().begin());
                    auto* moved_child = right->get_children().front();
                    right->get_children().erase(right->get_children().begin());
                    n->get_children().push_back(moved_child);
                    moved_child->set_parent(n);
                }

                // Update separators
                if (child_pos < static_cast<int>(parent->get_keys().size()) &&
                    !n->get_keys().empty()) {
                    parent->get_keys()[child_pos]->set_value(n->calc_parent_key());
                }
                if (child_pos + 1 < static_cast<int>(parent->get_keys().size()) &&
                    !right->get_keys().empty()) {
                    parent->get_keys()[child_pos + 1]->set_value(right->calc_parent_key());
                }
                update_separators_upward(parent);
                return;
            }
        }

        // --- Must merge: always merge right into left ---
        node<key_type, data_type>* left;
        node<key_type, data_type>* right;
        int right_pos;

        if (child_pos > 0) {
            left = parent_children[child_pos - 1];
            right = n;
            right_pos = child_pos;
        } else {
            left = n;
            right = parent_children[child_pos + 1];
            right_pos = child_pos + 1;
        }

        // Move all keys from right into left
        left->get_keys().insert(left->get_keys().end(),
            right->get_keys().begin(), right->get_keys().end());

        if (is_leaf) {
            // Fix leaf chain
            left->set_next(right->get_next());

            // Update rightmost cache
            std::string key_str(index_name);
            if (auto rm_it = this->rightmost_nodes.find(key_str);
                rm_it != this->rightmost_nodes.end() && rm_it->second == right) {
                rm_it->second = left;
            }
        } else {
            // Move children and update their parent pointers
            for (auto* child : right->get_children()) {
                child->set_parent(left);
            }
            left->get_children().insert(left->get_children().end(),
                right->get_children().begin(), right->get_children().end());
        }

        // Remove right child from parent
        parent_children.erase(parent_children.begin() + right_pos);

        // Remove the corresponding separator from parent
        if (right_pos < static_cast<int>(parent->get_keys().size())) {
            parent->get_keys().erase(parent->get_keys().begin() + right_pos);
        } else {
            parent->get_keys().erase(parent->get_keys().begin() + (right_pos - 1));
        }

        // Update left's separator if it still has one
        int left_pos = right_pos - 1;
        if (left_pos >= 0 && left_pos < static_cast<int>(parent->get_keys().size()) &&
            !left->get_keys().empty()) {
            parent->get_keys()[left_pos]->set_value(left->calc_parent_key());
        }

        // Clean up right node
        right->get_keys().clear();
        if (!is_leaf) {
            right->get_children().clear();
            right->set_is_leaf(true);  // prevent destructor from deleting moved children
        }
        delete right;

        // Check parent state
        auto* root = this->get_root(index_name);
        if (parent == root && parent->get_children().size() == 1) {
            // Collapse root: promote single child to root
            auto* new_root = parent->get_children()[0];
            new_root->set_parent(nullptr);
            parent->get_children().clear();
            parent->set_is_leaf(true);  // prevent child deletion
            delete parent;
            this->root_nodes[std::string(index_name)] = new_root;
        } else if (parent != root &&
                   static_cast<int>(parent->get_keys().size()) < min_keys()) {
            rebalance_node(parent, index_name);
        } else {
            update_separators_upward(parent);
        }
    }
