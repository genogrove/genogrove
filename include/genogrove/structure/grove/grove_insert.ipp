/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// grove_insert.ipp — Insertion methods for grove<>
// Included inside the grove class body. Do not include directly.

public:
    /**
     * @brief Insert a sorted data point into the grove using optimized sorted insertion
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @note The trailing sorted_t tag dispatches to the sorted insertion path
     * @note This assumes key_value is greater than all existing keys in the specified index
     * @return Pointer to the inserted key in the tree
     */
    template <typename D = data_type>
    gdt::key<key_type, data_type>* insert_data(
        std::string_view index,
        key_type key_value,
        D data_value,
        sorted_t) requires(!std::is_void_v<data_type>) {
        return insert_data_sorted(index, key_value, data_value);
    }

    /**
     * @brief Insert a data point into the grove using tree-based insertion
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @return Pointer to the inserted key in the tree
     * @note Uses standard tree traversal (O(log n)). For sorted data, use sorted tag for better performance.
     */
    template <typename D = data_type>
    gdt::key<key_type, data_type>* insert_data(
        std::string_view index,
        key_type key_value,
        D data_value) requires (!std::is_void_v<data_type>) {
            gdt::key<key_type, data_type> key(key_value, data_value);
            return insert(index, key);
        }

    /**
     * @brief Bulk insert pre-sorted data using hybrid bottom-up/append approach
     * @tparam Container A container type holding pairs of (key_type, data_type)
     * @param index The index name (e.g., chromosome name) where data should be inserted
     * @param data Container of sorted (key, data) pairs
     * @note The trailing sorted_t / bulk_t tags dispatch to the sorted bulk insertion path
     * @return Vector of pointers to all inserted keys (in insertion order)
     *
     * @note HYBRID APPROACH:
     *       - If index is empty: Uses fast bottom-up tree construction (O(n))
     *       - If index has data: Uses rightmost-node append (requires new keys > existing keys)
     *
     * @note CRITICAL PRECONDITION (append mode): All keys must be strictly greater
     *       than any existing key in the index
     * @note This is the fastest bulk insert - skips both sorting and sorted checking
     * @warning The append-mode precondition is the caller's responsibility and is
     *          NOT enforced: appending a key that is not strictly greater than the
     *          existing maximum silently corrupts B+ tree ordering, so later
     *          intersect() calls may return wrong results. It does not throw or
     *          segfault — the structure stays valid, only the ordering is wrong.
     * @see build_tree_bottom_up() for bottom-up construction
     * @see insert_sorted() for single-key rightmost insertion behavior
     */
    template<typename Container>
    std::vector<gdt::key<key_type, data_type>*> insert_data(std::string_view index,
        const Container& data, sorted_t, bulk_t)
        requires (!std::is_void_v<data_type> &&
                 std::ranges::forward_range<Container> && std::ranges::sized_range<Container>) {
        std::vector<gdt::key<key_type, data_type>*> inserted_keys;
        if (data.empty()) return inserted_keys;

        // Check if index is empty - use bottom-up construction for best performance
        node<key_type, data_type>* rightmost_node = this->get_rightmost_node(index);

        if (rightmost_node == nullptr || rightmost_node->get_keys().empty()) {
            // Index is empty - use fast bottom-up tree construction

            // RAII-guard the old root: erase from maps first so no dangling
            // pointers exist, then build. If build throws, the old root is
            // still cleaned up by unique_ptr and the maps are consistent.
            const std::string index_key(index);
            std::unique_ptr<node<key_type, data_type>> old_root;
            auto* existing_root = this->get_root(index);
            if (existing_root != nullptr) {
                old_root.reset(existing_root);
                this->root_nodes.erase(index_key);
                this->rightmost_nodes.erase(index_key);
            }

            auto [new_root, keys] = build_tree_bottom_up(index_key, data);
            if (new_root != nullptr) {
                this->root_nodes[index_key] = new_root;
            }
            return keys;
        }

        // Index has existing data - use rightmost-node append approach
        // Perform rightmost-node append
        node<key_type, data_type>* current_node = rightmost_node;
        inserted_keys.reserve(data.size());

        for (const auto& [key_value, data_value] : data) {
            gdt::key<key_type, data_type> key(key_value, data_value);
            auto* key_ptr = allocate_key(key);
            ++this->leaf_key_count;
            current_node->insert_key_ptr(key_ptr);
            inserted_keys.push_back(key_ptr);

            // Handle overflow — cascade upward so a parent that overflows as a
            // result of the leaf split is itself split (a single-level split here
            // left an internal node growing unbounded across appends, see #490).
            if (current_node->get_keys().size() == this->order) {
                cascade_split_sorted_append(current_node, index);
                current_node = this->get_rightmost_node(index);
            }
        }
        return inserted_keys;
    }

    /**
     * @brief Bulk insert data (sorts internally if needed)
     * @tparam Container A container type holding pairs of (key_type, data_type)
     * @param index The index name (e.g., chromosome name) where data should be inserted
     * @param data Container of (key, data) pairs
     * @note The trailing bulk_t tag dispatches to the bulk insertion path
     * @return Vector of pointers to all inserted keys (in insertion order)
     *
     * @note HYBRID APPROACH:
     *       - If index is empty: Uses fast bottom-up tree construction (O(n))
     *       - If index has data: Uses rightmost-node append (requires new keys > existing keys)
     *
     * @note CRITICAL PRECONDITION (append mode): After sorting, all keys must be strictly greater
     *       than any existing key in the index
     * @note Data is always sorted (O(n log n)) before insertion
     * @note For pre-sorted data, use the sorted tag variant to skip sorting: insert_data(index, data, sorted, bulk)
     * @warning The append-mode precondition is the caller's responsibility and is
     *          NOT enforced: if, after sorting, any key is not strictly greater than
     *          the existing maximum, B+ tree ordering is silently corrupted and later
     *          intersect() calls may return wrong results. It does not throw or
     *          segfault — the structure stays valid, only the ordering is wrong.
     *
     * Example usage:
     * @code
     * // When data is already sorted - use sorted tag (fastest, skips sort):
     * auto keys = grove.insert_data("chr1", sorted_data, sorted, bulk);
     *
     * // When data may or may not be sorted - just use bulk tag (always sorts):
     * auto keys = grove.insert_data("chr1", data, bulk);  // Sorts data (O(n log n)), then bulk inserts
     * @endcode
     */
    template<typename Container>
    std::vector<gdt::key<key_type, data_type>*> insert_data(std::string_view index, Container data, bulk_t)
        requires (!std::is_void_v<data_type> &&
                 std::ranges::random_access_range<Container> && std::ranges::sized_range<Container>) {
        if (data.empty()) return {};

        // Sort the data (O(n log n))
        std::sort(data.begin(), data.end(),
            [](const auto& a, const auto& b) { return a.first < b.first; });

        // Use sorted bulk insert
        return insert_data(index, data, sorted, bulk);
    }

    /**
     * @brief Insert a key into the grove at the specified index
     * @param index The index name (e.g., chromosome name) where the key should be inserted
     * @param key The key object to insert
     * @return Pointer to the inserted key in the tree
     * @throws std::runtime_error if insertion fails
     * @note Creates a new root if index doesn't exist; handles node splits automatically
     */
    gdt::key<key_type, data_type>* insert(std::string_view index, const gdt::key<key_type, data_type>& key) {
        // get the root node for the given chromosome (or create a new one if it doesn't exist)
        node<key_type, data_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = this->insert_root(index);
        }
        auto* key_ptr = insert_iter(root, key, index);
        if(key_ptr == nullptr) {
            throw std::runtime_error("Failed to insert key into tree");
        }
        if(root->get_keys().size() == this->order) {
            root = promote_new_root(root, index, /*sorted_append=*/false);
        }
        return key_ptr;
    }

private:
    /**
     * @brief Allocate a key in the grove's deque storage and return a stable pointer to it
     * @param key The key object to allocate and store
     * @return Pointer to the newly allocated key in the deque
     * @note Keys are stored in a deque for stable addresses (required by graph_overlay)
     * @note Deque storage provides better cache locality than individual heap allocations
     */
    gdt::key<key_type, data_type>* allocate_key(const gdt::key<key_type, data_type>& key) {
        key_storage.push_back(key);
        return &key_storage.back();
    }

    /**
     * @brief Recursively insert a key into the tree starting from a given node
     * @param node The node to start insertion from
     * @param key The key object to insert
     * @param index The index name, forwarded to split_node() for rightmost cache updates
     * @return Pointer to the inserted key in the tree, or nullptr on failure
     * @note This is a helper function for insert(); handles recursive traversal and leaf insertion
     */
    gdt::key<key_type, data_type>* insert_iter(node<key_type, data_type>* node, const gdt::key<key_type, data_type>& key,
                                               std::string_view index) {
        if(!node) {
            throw std::runtime_error("Null node passed to insert_iter");
        }
        if(node->get_is_leaf()) {
            auto* key_ptr = allocate_key(key);
            ++this->leaf_key_count;
            node->insert_key_ptr(key_ptr);
            return key_ptr;
        } else {
            int child_index = 0;
            while(child_index < node->get_keys().size() &&
                  key.get_value() > node->get_keys()[child_index]->get_value()) {
                child_index++;
            }
            auto* key_ptr = insert_iter(node->get_child(child_index), key, index);

            // Widen this child's separator (if it has one) to cover the newly
            // inserted key's range. The last child has no separator — its range
            // is implicit as the catch-all. Without this, a separator set at
            // split time can become stale when a later insert adds a key that
            // extends the child's subtree range, causing search_overlaps to skip
            // over the child during routing.
            if (child_index < static_cast<int>(node->get_keys().size())) {
                auto* sep = node->get_keys()[child_index];
                sep->set_value(key_type::aggregate(sep->get_value(), key.get_value()));
            }

            if(node->get_child(child_index)->get_keys().size() == this->order) {
                split_node(node, child_index, index, /*sorted_append=*/false);
            }
            return key_ptr;
        }
    }

    /**
     * @brief Split an overflowing child node by creating a new sibling and redistributing keys
     * @param parent The parent node whose child will be split
     * @param index The index of the child node to split within the parent
     * @param index_name The grove index name (e.g., chromosome) for O(1) rightmost cache update
     * @param sorted_append When true, a leaf child is split with an asymmetric
     *        midpoint (`mid = order - 1`) that biases the old leaf fully left
     *        and leaves the new right sibling with just the single just-appended
     *        key. Used by the sorted-insert hot path to halve the number of
     *        leaf splits. Ignored for internal children, which always use the
     *        symmetric `split_internal_node()` to avoid producing degenerate
     *        (0-key, 1-child) right siblings.
     */
    void split_node(node<key_type, data_type>* parent, int index,
                    std::string_view index_name, bool sorted_append) {
        node<key_type, data_type>* child = parent->get_child(index);
        auto new_child = std::make_unique<node<key_type, data_type>>(this->order);
        new_child->set_parent(parent);
        new_child->set_is_leaf(child->get_is_leaf());

        if (child->get_is_leaf()) {
            // Symmetric split_mid() for regular inserts; asymmetric `order - 1`
            // for sorted append so the old leaf stays full and the new right
            // sibling starts with just the single just-appended key. The sorted
            // midpoint halves the leaf-split rate on sorted append; the rightmost
            // leaf is exempt from min-occupancy while it refills (see the
            // shared test validator in tests/structure/tree_validator.hpp).
            const int mid = sorted_append ? this->order - 1 : this->split_mid();
            split_leaf_node(parent, child, std::move(new_child), index, index_name, mid);
        } else {
            split_internal_node(parent, child, std::move(new_child), index);
        }
    }

    /**
     * @brief Split a leaf node at a caller-chosen midpoint
     * @param parent The parent node to insert the separator key into
     * @param child The leaf node being split — keeps keys[0..mid-1] after the split
     * @param new_child The new sibling node — takes keys[mid..end] after the split
     * @param index Position in parent's children vector
     * @param index_name The grove index name for rightmost cache update
     * @param mid Number of keys retained in `child`
     *
     * Only called by split_node(). See split_node() for midpoint rationale.
     */
    void split_leaf_node(node<key_type, data_type>* parent, node<key_type, data_type>* child,
                         std::unique_ptr<node<key_type, data_type>> new_child,
                         int index, std::string_view index_name, int mid) {
        new_child->get_keys().assign(child->get_keys().begin() + mid, child->get_keys().end());
        child->get_keys().resize(mid);

        // Parent separator = aggregate of left leaf's keys
        gdt::key<key_type, data_type> parent_key{child->calc_keys_aggregate()};
        auto* parent_key_ptr = allocate_key(parent_key);
        parent->get_keys().insert(parent->get_keys().begin() + index, parent_key_ptr);
        parent->get_children().insert(parent->get_children().begin() + index + 1, new_child.get());
        auto* released = new_child.release();

        // Link leaf chain
        released->set_next(child->get_next());
        child->set_next(released);

        // Update rightmost node cache if the split leaf was the rightmost (O(1) lookup)
        if (auto it = this->rightmost_nodes.find(index_name);
            it != this->rightmost_nodes.end() && it->second == child) {
            it->second = released;
        }
    }

    /**
     * @brief Split an internal node: redistribute keys/children, promote separator, update parent pointers
     * @param parent The parent node to insert the separator key into
     * @param child The internal node being split (left half after split)
     * @param new_child The new sibling node (right half after split)
     * @param index Position in parent's children vector
     */
    void split_internal_node(node<key_type, data_type>* parent, node<key_type, data_type>* child,
                             std::unique_ptr<node<key_type, data_type>> new_child,
                             int index) {
        const int mid = this->split_mid();
        // B+ tree invariant: n keys -> n+1 children.
        // Promote key[mid]: left keeps [0..mid-1] keys and [0..mid] children,
        // right gets [mid+1..end] keys and [mid+1..end] children.

        // Compute parent separator covering the full left subtree (keys[0..mid])
        // BEFORE modifying the child, so child[mid]'s range is included
        key_type parent_separator = child->get_keys()[0]->get_value();
        for (size_t i = 1; i <= static_cast<size_t>(mid); ++i) {
            parent_separator = key_type::aggregate(parent_separator,
                child->get_keys()[i]->get_value());
        }
        // Promote key[mid] as the separator: reuse its existing key_storage
        // slot, overwriting only its value with the aggregate range. Allocating
        // a fresh key here would orphan key[mid]'s slot when resize(mid) drops
        // it from the child below.
        auto* parent_key_ptr = child->get_keys()[static_cast<size_t>(mid)];
        parent_key_ptr->set_value(std::move(parent_separator));

        // Keys: left [0..mid-1], promote key[mid], right [mid+1..end]
        new_child->get_keys().assign(child->get_keys().begin() + mid + 1, child->get_keys().end());
        child->get_keys().resize(mid);

        // Children: left [0..mid], right [mid+1..end]
        new_child->get_children().assign(child->get_children().begin() + mid + 1,
            child->get_children().end());
        child->get_children().resize(mid + 1);

        // Update parent pointers for moved children
        for (auto* moved_child : new_child->get_children()) {
            moved_child->set_parent(new_child.get());
        }

        // Insert separator and new child into parent
        parent->get_keys().insert(parent->get_keys().begin() + index, parent_key_ptr);
        parent->get_children().insert(parent->get_children().begin() + index + 1, new_child.get());
        new_child.release();
    }

    /**
     * @brief Grow the tree by one level: wrap an overflowing root in a fresh
     *        parent and split it, then publish the new root
     * @param old_root The current root that just overflowed (order keys)
     * @param index The grove index name, forwarded to split_node()
     * @param sorted_append Passed through to split_node() (asymmetric leaf
     *        midpoint on the sorted-append path, symmetric otherwise)
     * @return The newly created root
     * @note Shared by all three insert paths so the root-promotion step cannot
     *       diverge between them (see #490).
     */
    node<key_type, data_type>* promote_new_root(node<key_type, data_type>* old_root,
                                                std::string_view index, bool sorted_append) {
        auto* new_root = new node<key_type, data_type>(this->order);
        new_root->add_child(old_root, 0);
        new_root->set_is_leaf(false);
        old_root->set_parent(new_root);
        split_node(new_root, 0, index, sorted_append);
        this->root_nodes[std::string(index)] = new_root;
        return new_root;
    }

    /**
     * @brief Cascade rightmost-leaf overflow splits upward until no node overflows
     * @param overflow_node The rightmost node that just received a key and may be full
     * @param index The grove index name, forwarded to split_node() for cache updates
     * @note Sorted-append path only: always splits the rightmost child with the
     *       asymmetric leaf midpoint and promotes a new root when the overflow
     *       reaches the top. Shared by insert_sorted() and the bulk sorted-append
     *       loop so both cascade identically — a single-level `if` here would
     *       leave a parent overflowing after enough appends (see #490).
     */
    void cascade_split_sorted_append(node<key_type, data_type>* overflow_node, std::string_view index) {
        while (overflow_node->get_keys().size() == this->order) {
            if (overflow_node->get_parent() == nullptr) {
                // root overflow - grow the tree by one level
                promote_new_root(overflow_node, index, /*sorted_append=*/true);
                break;
            }
            auto* parent_node = overflow_node->get_parent();
            int child_index = static_cast<int>(parent_node->get_children().size()) - 1;
            split_node(parent_node, child_index, index, /*sorted_append=*/true);
            overflow_node = parent_node;
        }
    }

    /**
     * @brief Insert a pre-sorted data point into the grove using optimized sorted insertion
     * @param index The index name (e.g., chromosome name) where the data should be inserted
     * @param key_value The key value to insert (e.g., interval)
     * @param data_value The data associated with the key
     * @return Pointer to the inserted key in the tree
     * @note Assumes key_value is greater than all existing keys in the specified index
     * @note This is a helper function called by insert_data(..., sorted_t)
     */
    template <typename D = data_type>
    gdt::key<key_type, data_type>* insert_data_sorted(std::string_view index, key_type key_value, D data_value)
        requires (!std::is_void_v<data_type>) {
            gdt::key<key_type, data_type> key(key_value, data_value); // create the key object
            return insert_sorted(index, key);
    }

    /**
     * @brief Insert a pre-sorted key directly to the rightmost leaf node for optimal performance
     * @param index The index name (e.g., chromosome name) where the key should be inserted
     * @param key The key object to insert
     * @return Pointer to the inserted key in the tree
     * @note Assumes key is greater than all existing keys in the index; bypasses tree traversal
     * @note Significantly faster than regular insert() for sorted data
     */
    gdt::key<key_type, data_type>* insert_sorted(std::string_view index, const gdt::key<key_type, data_type>& key) {
        node<key_type, data_type>* root = this->get_root(index);
        if(root == nullptr) {
            root = this->insert_root(index);
            // Allocate key from grove's deque storage
            auto* key_ptr = allocate_key(key);
            ++this->leaf_key_count;
            root->insert_key_ptr(key_ptr);
            return key_ptr;
        } else {
            // get rightmost node and insert
            node<key_type, data_type>* rightmost_node = this->get_rightmost_node(index);
            // Allocate key from grove's deque storage
            auto* key_ptr = allocate_key(key);
            ++this->leaf_key_count;
            rightmost_node->insert_key_ptr(key_ptr);

            // handle key overflow - cascade splits upward until no overflow
            cascade_split_sorted_append(rightmost_node, index);
            return key_ptr;
        }
    }

    /**
     * @brief Build a B+ tree from bottom-up using pre-sorted data
     * @tparam Container A container type holding pairs of (key_type, data_type)
     * @param index The index name for which to build the tree
     * @param data Container of sorted (key, data) pairs
     * @return Pair of (root node pointer, vector of inserted key pointers)
     *
     * @note This is significantly faster than incremental insertion for large datasets
     * @note Builds leaf nodes with optimal fill factor, then constructs internal layers
     * @note Automatically links leaf nodes and sets parent/child relationships
     * @note Time complexity: O(n) with better constants than incremental insertion
     */
    template<typename Container>
    std::pair<node<key_type, data_type>*, std::vector<gdt::key<key_type, data_type>*>>
    build_tree_bottom_up(std::string_view index, const Container& data)
        requires (!std::is_void_v<data_type> &&
                 std::ranges::forward_range<Container> && std::ranges::sized_range<Container>) {

        std::vector<gdt::key<key_type, data_type>*> inserted_keys;
        if (data.empty()) {
            return {nullptr, inserted_keys};
        }

        // Step 1: Create leaf nodes from sorted data
        // RAII: unique_ptrs own nodes until the root is returned
        std::vector<std::unique_ptr<node<key_type, data_type>>> leaves;
        inserted_keys.reserve(data.size());

        // Spread the data evenly across leaves — a greedy (order-1)-per-leaf
        // packing could leave the final leaf underfull (below leaf_min_keys).
        const detail::even_distribution leaf_dist =
            detail::distribute_evenly(data.size(), static_cast<size_t>(this->order - 1));

        auto it = data.begin();
        for (size_t leaf_idx = 0; leaf_idx < leaf_dist.num_groups; ++leaf_idx) {
            auto leaf = std::make_unique<node<key_type, data_type>>(this->order);
            leaf->set_is_leaf(true);

            const size_t keys_in_this_leaf = leaf_dist.count_for(leaf_idx);
            for (size_t i = 0; i < keys_in_this_leaf; ++i) {
                gdt::key<key_type, data_type> key(it->first, it->second);
                auto* key_ptr = allocate_key(key);
                ++this->leaf_key_count;
                leaf->get_keys().push_back(key_ptr);
                inserted_keys.push_back(key_ptr);
                ++it;
            }

            leaves.push_back(std::move(leaf));
        }

        // Step 2: Link leaf nodes together for range queries
        for (size_t i = 0; i < leaves.size() - 1; ++i) {
            leaves[i]->set_next(leaves[i + 1].get());
        }

        // Remember rightmost leaf — will be published only after the build succeeds
        auto* rightmost_leaf = leaves.back().get();

        // Track the full subtree range of every node in the current layer so
        // we can set correct separators at higher levels. For leaves, the
        // range is exact (calc_keys_aggregate covers all leaf data). For
        // internal nodes at higher levels, we aggregate the children's
        // tracked ranges directly — calc_keys_aggregate() on an internal
        // node would miss its own last child's subtree (its catch-all), and
        // that would cascade up to cause lost keys during search.
        std::vector<key_type> current_ranges;
        current_ranges.reserve(leaves.size());
        for (const auto& leaf : leaves) {
            current_ranges.push_back(leaf->calc_keys_aggregate());
        }

        // Step 3: Build internal layers bottom-up
        // Transfer ownership: leaves become current_layer
        std::vector<std::unique_ptr<node<key_type, data_type>>> current_layer = std::move(leaves);

        while (current_layer.size() > 1) {
            std::vector<std::unique_ptr<node<key_type, data_type>>> parent_layer;
            std::vector<key_type> parent_ranges;

            // Spread the children evenly across parents — a greedy
            // order-per-parent packing could leave the final parent underfull
            // (below internal_min_keys).
            const detail::even_distribution parent_dist =
                detail::distribute_evenly(current_layer.size(), static_cast<size_t>(this->order));

            size_t child_idx = 0;
            for (size_t parent_idx = 0; parent_idx < parent_dist.num_groups; ++parent_idx) {
                auto parent = std::make_unique<node<key_type, data_type>>(this->order);
                parent->set_is_leaf(false);

                const size_t children_in_this_parent = parent_dist.count_for(parent_idx);
                const size_t first_child_idx = child_idx;

                for (size_t i = 0; i < children_in_this_parent; ++i) {
                    // Attach child to parent — push_back first, release after (exception-safe)
                    parent->get_children().push_back(current_layer[child_idx].get());
                    current_layer[child_idx].release();
                    auto* child = parent->get_children().back();
                    child->set_parent(parent.get());

                    // Add separator key for all children except the first.
                    // Use the previous child's TRACKED full subtree range
                    // rather than calc_keys_aggregate (which would miss the
                    // child's own last-child subtree).
                    if (i > 0) {
                        gdt::key<key_type, data_type> sep_key(current_ranges[child_idx - 1]);
                        auto* sep_key_ptr = allocate_key(sep_key);
                        parent->get_keys().push_back(sep_key_ptr);
                    }

                    ++child_idx;
                }

                // Compute this parent's full subtree range for the next layer
                key_type parent_range = current_ranges[first_child_idx];
                for (size_t i = first_child_idx + 1; i < child_idx; ++i) {
                    parent_range = key_type::aggregate(parent_range, current_ranges[i]);
                }
                parent_ranges.push_back(parent_range);

                parent_layer.push_back(std::move(parent));
            }

            current_layer = std::move(parent_layer);
            current_ranges = std::move(parent_ranges);
        }

        // Build succeeded — publish rightmost leaf and release root to caller
        this->rightmost_nodes[std::string(index)] = rightmost_leaf;
        return {current_layer[0].release(), std::move(inserted_keys)};
    }