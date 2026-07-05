/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// grove_remove.ipp — Key removal methods for grove<>
// Included inside the grove class body. Do not include directly.

public:
    /**
     * @brief Remove a key from the B+ tree and rebalance if necessary
     * @param index_name The index (e.g., chromosome) the key belongs to
     * @param key_to_remove Pointer to the key to remove (must be in this index's tree)
     * @return true if key was found and removed, false if not found
     *
     * @note Automatically removes all graph edges (both incoming and outgoing)
     *       involving the removed key to prevent dangling edge pointers.
     * @note The key object remains in the grove's deque (not deallocated); it is
     *       simply unlinked from the tree. Across many insert/remove cycles the
     *       deque grows unboundedly. Call `compact()` to reclaim those slots.
     * @note Handles leaf underflow via redistribution (borrow from sibling) or
     *       merging, cascading up to internal nodes and root collapse.
     */
    bool remove_key(std::string_view index_name, gdt::key<key_type, data_type>* key_to_remove) {
        if (key_to_remove == nullptr) return false;

        auto* root = this->get_root(index_name);
        if (root == nullptr) return false;

        auto* leaf = find_leaf(root, key_to_remove);
        if (leaf == nullptr) return false;

        auto& keys = leaf->get_keys();
        auto it = std::ranges::find(keys, key_to_remove);
        if (it == keys.end()) return false;
        keys.erase(it);
        --this->leaf_key_count;

        this->graph_data.remove_all_edges(key_to_remove);

        // Leaf was the root — handle directly, no rebalance needed
        if (leaf->get_parent() == nullptr) {
            if (keys.empty()) {
                delete leaf;
                std::string key_str(index_name);
                this->root_nodes.erase(key_str);
                this->rightmost_nodes.erase(key_str);
            }
            return true;
        }

        // If the leaf is underflowing (possibly empty), rebalance handles the
        // separator updates internally. Otherwise just walk up to refresh
        // separators for the still-populated leaf.
        if (is_underflowing(leaf)) {
            rebalance_node(leaf, index_name);
        } else {
            update_separators_upward(leaf);
        }
        return true;
    }

    /**
     * @brief Reclaim memory from keys unlinked by remove_key()
     *
     * Walks every B+ tree, copies all live keys (leaf data keys + internal
     * separator keys) into a fresh internal storage deque, and rewrites every
     * node and every graph edge to point at the new locations. The deque
     * shrinks to exactly the number of live keys.
     *
     * @warning Invalidates every key pointer previously returned by
     *          `insert_data()` or held externally for indexed keys. After
     *          calling `compact()`, callers must rediscover keys via queries.
     * @note External keys (`add_external_key`) are unaffected; their pointers
     *       remain valid and any graph edges referring to them stay intact.
     * @note O(N + E) — single tree traversal to migrate keys + a single pass
     *       over graph adjacency to remap pointers.
     */
    void compact() {
        std::deque<gdt::key<key_type, data_type>> new_storage;
        std::unordered_map<const gdt::key<key_type, data_type>*,
                           gdt::key<key_type, data_type>*> remap;
        remap.reserve(this->key_storage.size());

        for (auto& [_, root] : this->root_nodes) {
            migrate_keys(root, new_storage, remap);
        }
        this->graph_data.remap_keys(remap);
        this->key_storage = std::move(new_storage);
    }

private:
    /// Minimum number of keys a non-root node of the same type as `n` must have
    int min_keys_for(node<key_type, data_type>* n) const noexcept {
        return n->get_is_leaf() ? leaf_min_keys() : internal_min_keys();
    }

    /// A non-root node is underflowing if it has fewer than its min_keys
    bool is_underflowing(node<key_type, data_type>* n) const noexcept {
        return static_cast<int>(n->get_keys().size()) < min_keys_for(n);
    }

    /// Find a node's position in its parent's children vector
    int find_child_pos(node<key_type, data_type>* n) const {
        auto& siblings = n->get_parent()->get_children();
        auto it = std::ranges::find(siblings, n);
        if (it == siblings.end()) {
            // Broken tree invariant: a node's parent must list it as a child.
            // Returning end() - begin() here would hand back an out-of-range
            // index and corrupt the caller silently.
            throw std::runtime_error("find_child_pos: node is not among its parent's children");
        }
        return static_cast<int>(it - siblings.begin());
    }

    /**
     * @brief Find the leaf node containing a specific key pointer
     *
     * Uses search_overlaps-style routing with overlap check to navigate to the
     * correct subtree, then walks the leaf chain to find the exact leaf by
     * pointer identity.
     */
    node<key_type, data_type>* find_leaf(node<key_type, data_type>* current,
                                          gdt::key<key_type, data_type>* key_to_find) {
        if (current == nullptr) return nullptr;

        if (current->get_is_leaf()) {
            auto* leaf = current;
            while (leaf != nullptr) {
                if (std::ranges::find(leaf->get_keys(), key_to_find) != leaf->get_keys().end()) {
                    return leaf;
                }
                auto* next = leaf->get_next();
                if (next == nullptr || next->get_keys().empty()) break;
                if (next->get_keys()[0]->get_value() > key_to_find->get_value()) break;
                leaf = next;
            }
            return nullptr;
        }

        size_t i = 0;
        while (i < current->get_keys().size() &&
               (key_to_find->get_value() > current->get_keys()[i]->get_value()) &&
               !key_type::overlaps(current->get_keys()[i]->get_value(),
                                   key_to_find->get_value())) {
            i++;
        }
        return find_leaf(current->get_child(i), key_to_find);
    }

    /**
     * @brief Update the parent's separator for a child (if the child has one)
     *
     * Uses calc_subtree_range() rather than calc_keys_aggregate() so the
     * separator covers the child's entire subtree, including its catch-all
     * last-child chain. For leaves the two are equivalent.
     */
    void set_parent_separator(node<key_type, data_type>* parent, int child_pos,
                              node<key_type, data_type>* child) {
        if (child_pos >= 0 &&
            child_pos < static_cast<int>(parent->get_keys().size()) &&
            !child->get_keys().empty()) {
            parent->get_keys()[child_pos]->set_value(child->calc_subtree_range());
        }
    }

    /**
     * @brief Walk from a node up to the root, refreshing separator keys
     */
    void update_separators_upward(node<key_type, data_type>* n) {
        auto* current = n;
        while (current->get_parent() != nullptr) {
            auto* parent = current->get_parent();
            set_parent_separator(parent, find_child_pos(current), current);
            current = parent;
        }
    }

    /**
     * @brief Rebalance an underflowing node via borrow or merge
     *
     * Tries borrow from left, then from right, then falls through to merge.
     * Cascades rebalancing upward if the merge causes the parent to underflow.
     */
    void rebalance_node(node<key_type, data_type>* n, std::string_view index_name) {
        int child_pos = find_child_pos(n);

        if (try_borrow_from_left(n, child_pos) ||
            try_borrow_from_right(n, child_pos)) {
            update_separators_upward(n->get_parent());
            return;
        }

        merge_with_sibling(n, child_pos, index_name);
    }

    /**
     * @brief Try to borrow the last key/child from the left sibling
     * @return true if the borrow succeeded, false if no left sibling or it's at min_keys
     */
    bool try_borrow_from_left(node<key_type, data_type>* n, int child_pos) {
        if (child_pos == 0) return false;
        auto* parent = n->get_parent();
        auto* left = parent->get_children()[child_pos - 1];
        if (static_cast<int>(left->get_keys().size()) <= min_keys_for(n)) return false;

        if (n->get_is_leaf()) {
            n->get_keys().insert(n->get_keys().begin(), left->get_keys().back());
            left->get_keys().pop_back();
        } else {
            // Move left's last child to n's front. The moved child was left's
            // catch-all (no separator); its new slot in n needs one covering
            // its full subtree range.
            auto* moved_child = left->get_children().back();
            auto moved_range = moved_child->calc_subtree_range();
            auto* moved_key = left->get_keys().back();
            left->get_keys().pop_back();
            left->get_children().pop_back();
            moved_key->set_value(moved_range);
            n->get_keys().insert(n->get_keys().begin(), moved_key);
            n->get_children().insert(n->get_children().begin(), moved_child);
            moved_child->set_parent(n);
        }

        set_parent_separator(parent, child_pos - 1, left);
        set_parent_separator(parent, child_pos, n);
        return true;
    }

    /**
     * @brief Try to borrow the first key/child from the right sibling
     * @return true if the borrow succeeded, false if no right sibling or it's at min_keys
     */
    bool try_borrow_from_right(node<key_type, data_type>* n, int child_pos) {
        auto* parent = n->get_parent();
        if (child_pos >= static_cast<int>(parent->get_children().size()) - 1) return false;
        auto* right = parent->get_children()[child_pos + 1];
        if (static_cast<int>(right->get_keys().size()) <= min_keys_for(n)) return false;

        if (n->get_is_leaf()) {
            n->get_keys().push_back(right->get_keys().front());
            right->get_keys().erase(right->get_keys().begin());
        } else {
            // Move right's first child to n's tail (becomes n's new last child).
            // n's OLD last child was catch-all; it now becomes interior and needs
            // a separator covering its full subtree range.
            auto old_last_range = n->get_children().back()->calc_subtree_range();
            auto* moved_key = right->get_keys().front();
            right->get_keys().erase(right->get_keys().begin());
            auto* moved_child = right->get_children().front();
            right->get_children().erase(right->get_children().begin());
            moved_key->set_value(old_last_range);
            n->get_keys().push_back(moved_key);
            n->get_children().push_back(moved_child);
            moved_child->set_parent(n);
        }

        set_parent_separator(parent, child_pos, n);
        set_parent_separator(parent, child_pos + 1, right);
        return true;
    }

    /**
     * @brief Merge n with a sibling (prefer merging into left sibling)
     *
     * Performs the merge, removes the extra child and separator from the parent,
     * deletes the now-empty right node, and recursively handles the parent state
     * (root collapse or cascading rebalance).
     */
    void merge_with_sibling(node<key_type, data_type>* n, int child_pos,
                            std::string_view index_name) {
        auto* parent = n->get_parent();

        // Always merge "right into left" — pick sides based on which sibling exists
        node<key_type, data_type>* left;
        node<key_type, data_type>* right;
        int right_pos;
        if (child_pos > 0) {
            left = parent->get_children()[child_pos - 1];
            right = n;
            right_pos = child_pos;
        } else {
            left = n;
            right = parent->get_children()[child_pos + 1];
            right_pos = child_pos + 1;
        }

        if (left->get_is_leaf()) {
            // Leaf merge: concatenate keys, fix chain, update rightmost cache
            left->get_keys().insert(left->get_keys().end(),
                right->get_keys().begin(), right->get_keys().end());
            left->set_next(right->get_next());

            if (auto rm_it = this->rightmost_nodes.find(index_name);
                rm_it != this->rightmost_nodes.end() && rm_it->second == right) {
                rm_it->second = left;
            }
        } else {
            // Internal merge: left's old last child was catch-all; it becomes
            // interior and needs a bridge separator covering its full range.
            if (!left->get_children().empty()) {
                gdt::key<key_type, data_type> bridge_key{
                    left->get_children().back()->calc_subtree_range()
                };
                left->get_keys().push_back(allocate_key(bridge_key));
            }
            left->get_keys().insert(left->get_keys().end(),
                right->get_keys().begin(), right->get_keys().end());
            for (auto* child : right->get_children()) {
                child->set_parent(left);
            }
            left->get_children().insert(left->get_children().end(),
                right->get_children().begin(), right->get_children().end());
        }

        // Detach right from parent: drop its child slot, then drop one key.
        // If right had its own separator (wasn't the last child), remove that
        // separator. Otherwise right was the catch-all and had no separator,
        // so remove the one belonging to left — left inherits right's
        // catch-all role and no longer needs its own separator.
        parent->get_children().erase(parent->get_children().begin() + right_pos);
        const int sep_to_remove = (right_pos < static_cast<int>(parent->get_keys().size()))
            ? right_pos
            : right_pos - 1;
        parent->get_keys().erase(parent->get_keys().begin() + sep_to_remove);
        set_parent_separator(parent, right_pos - 1, left);

        // Clean up right node. Keys are owned by the grove's deque (not the
        // node), so just clear the vector. For internal right nodes, we also
        // clear children before delete — otherwise ~node() would cascade-delete
        // the children we just transferred to left.
        right->get_keys().clear();
        if (!right->get_is_leaf()) {
            right->get_children().clear();
            right->set_is_leaf(true);
        }
        delete right;

        // Handle parent state: collapse root, cascade rebalance, or just update
        auto* root = this->get_root(index_name);
        if (parent == root && parent->get_children().size() == 1) {
            collapse_root(parent, index_name);
        } else if (parent != root && is_underflowing(parent)) {
            rebalance_node(parent, index_name);
        } else {
            update_separators_upward(parent);
        }
    }

    /**
     * @brief Collapse a root that has only a single remaining child
     */
    void collapse_root(node<key_type, data_type>* old_root, std::string_view index_name) {
        auto* new_root = old_root->get_children()[0];
        new_root->set_parent(nullptr);
        old_root->get_children().clear();
        old_root->set_is_leaf(true);  // prevent cascade delete of new_root
        delete old_root;
        this->root_nodes[std::string(index_name)] = new_root;
    }

    /**
     * @brief Copy every key in the subtree into new_storage and rewrite the
     *        node's key pointers to the new addresses in one pass. Each key
     *        lives in exactly one node, so a single pre-order walk suffices.
     */
    void migrate_keys(node<key_type, data_type>* n,
                      std::deque<gdt::key<key_type, data_type>>& new_storage,
                      std::unordered_map<const gdt::key<key_type, data_type>*,
                                         gdt::key<key_type, data_type>*>& remap) {
        if (n == nullptr) return;
        for (auto*& k : n->get_keys()) {
            new_storage.push_back(*k);
            auto* new_k = &new_storage.back();
            remap.emplace(k, new_k);
            k = new_k;
        }
        if (!n->get_is_leaf()) {
            for (auto* child : n->get_children()) {
                migrate_keys(child, new_storage, remap);
            }
        }
    }