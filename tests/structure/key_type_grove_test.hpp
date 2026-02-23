/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_TESTS_DATA_TYPE_GROVE_TEST_HPP
#define GENOGROVE_TESTS_DATA_TYPE_GROVE_TEST_HPP

// Google Test
#include <gtest/gtest.h>

// genogrove
#include <genogrove/structure/grove/grove.hpp>

// standard
#include <vector>
#include <string>
#include <optional>
#include <random>
#include <sstream>
#include <unordered_map>

namespace gst = genogrove::structure;

/**
 * @brief Holds a query key along with expected matching indices from test data
 * @tparam key_type The key type being tested
 */
template <typename key_type>
struct query_overlap_expectation {
    key_type query;                      ///< The query key to search with
    std::vector<size_t> expected_indices; ///< Indices in test_data that should match

    query_overlap_expectation(key_type q, std::vector<size_t> indices)
        : query(std::move(q)), expected_indices(std::move(indices)) {}
};

// =============================================================================
// Traits Pattern: Define behavior for each key type ONCE
// =============================================================================

/**
 * @brief Traits class to define test data generation for different key types
 *
 * Specialize this template for each key type you want to test.
 * This eliminates the need to re-implement methods for each test fixture.
 *
 * Example specialization:
 * @code
 * template<>
 * struct grove_test_traits<gdt::interval> {
 *     static std::vector<std::pair<gdt::interval, int>> generate_test_data(size_t count) {
 *         std::vector<std::pair<gdt::interval, int>> data;
 *         for (size_t i = 0; i < count; ++i) {
 *             data.push_back({{i * 100, i * 100 + 50}, static_cast<int>(i)});
 *         }
 *         return data;
 *     }
 *
 *     static query_overlap_expectation<gdt::interval>
 *     create_overlapping_query(const std::vector<std::pair<gdt::interval, int>>& test_data) {
 *         // Return query that overlaps multiple intervals
 *         gdt::interval query{120, 320};
 *         std::vector<size_t> expected = {1, 2, 3};
 *         return {query, expected};
 *     }
 *
 *     static query_overlap_expectation<gdt::interval>
 *     create_non_overlapping_query(const std::vector<std::pair<gdt::interval, int>>& test_data) {
 *         gdt::interval query{60, 80}; // In a gap
 *         return {query, {}};
 *     }
 * };
 * @endcode
 */
template <typename key_type, typename data_type = int>
struct grove_test_traits {
    // Must implement these three methods in specializations:

    // static std::vector<std::pair<key_type, data_type>> generate_test_data(size_t count);
    // static query_overlap_expectation<key_type> create_overlapping_query(
    //     const std::vector<std::pair<key_type, data_type>>& test_data);
    // static query_overlap_expectation<key_type> create_non_overlapping_query(
    //     const std::vector<std::pair<key_type, data_type>>& test_data);
};

/**
 * @brief Base test fixture for grove functionality tests
 *
 * This fixture defines a common interface that all grove tests should implement
 * to ensure comprehensive and consistent testing across different key types
 * (interval, genomic_coordinate, etc.).
 *
 * Usage:
 * @code
 * class IntervalGroveTest : public GroveTestBase<gdt::interval, int> {
 * protected:
 *     std::vector<std::pair<gdt::interval, int>> generate_test_data(size_t count) override {
 *         std::vector<std::pair<gdt::interval, int>> data;
 *         for (size_t i = 0; i < count; ++i) {
 *             data.push_back({{i * 100, i * 100 + 50}, static_cast<int>(i)});
 *         }
 *         return data;
 *     }
 *     // ... implement other virtual methods
 * };
 * @endcode
 *
 * Required Tests (implement these in derived classes):
 *
 * Insertion Tests:
 * - TEST_F(YourGroveTest, RegularInsertWorks) - Test insert_data() without tags
 * - TEST_F(YourGroveTest, SortedInsertWorks) - Test insert_data(sorted)
 * - TEST_F(YourGroveTest, BulkInsertReturnsHandles) - Test insert_data(sorted, bulk)
 *
 * Query Tests:
 * - TEST_F(YourGroveTest, OverlappingQueryWorks) - Query that finds results
 * - TEST_F(YourGroveTest, NonOverlappingQueryWorks) - Query that finds nothing
 *
 * Graph Tests:
 * - TEST_F(YourGroveTest, EdgeCreationBasic) - Test add_edge()
 * - TEST_F(YourGroveTest, LinkIfBasic) - Test link_if() without metadata
 * - TEST_F(YourGroveTest, LinkIfWithMetadata) - Test link_if() with metadata (if EdgeDataType != void)
 * - TEST_F(YourGroveTest, CrossChromosomeEdges) - Test edges across indices
 *
 * @tparam key_type The key type (e.g., interval, genomic_coordinate)
 * @tparam data_type The associated data type (default: int)
 * @tparam edge_data_type The edge metadata type (default: void)
 */
template <typename key_type, typename data_type = int, typename edge_data_type = void>
class grove_test_base : public ::testing::Test {
protected:
    // Default grove with order 10
    gst::grove<key_type, data_type, edge_data_type> grove{10};

    /**
     * @brief Generate test data for insertion
     * @param count Number of key-data pairs to generate
     * @return Vector of (key, data) pairs in sorted order
     *
     * @note Implementation should generate non-overlapping, sorted keys
     *       suitable for insertion with the sorted tag or bulk insertion
     *
     * Example for interval: {{0, 50}, 0}, {{100, 150}, 1}, {{200, 250}, 2}, ...
     */
    virtual std::vector<std::pair<key_type, data_type>> generate_test_data(size_t count) = 0;

    /**
     * @brief Create a query key that WILL overlap with generated test data
     * @param test_data The test data to overlap with
     * @return A key that overlaps with at least one (preferably 2-3) entries in test_data
     *
     * Example for interval test data {{0, 50}, ...}, {{100, 150}, ...}, {{200, 250}, ...}:
     *   Return interval{80, 220} which overlaps with entries at indices 1 and 2
     */
    virtual query_overlap_expectation<key_type> create_overlapping_query(
        const std::vector<std::pair<key_type, data_type>>& test_data) = 0;

    /**
     * @brief Create a query key that will NOT overlap with any test data
     * @param test_data The test data to NOT overlap with
     * @return A key that does not overlap with any entry in test_data
     *
     * Example for interval test data {{0, 50}, ...}, {{100, 150}, ...}, {{200, 250}, ...}:
     *   Return interval{60, 80} which falls in a gap between entries
     */
    virtual query_overlap_expectation<key_type> create_non_overlapping_query(
        const std::vector<std::pair<key_type, data_type>>& test_data) = 0;

    /**
     * @brief Generate edge metadata for testing (only for EdgeDataType != void)
     * @param source Source key
     * @param target Target key
     * @return Edge metadata appropriate for these keys
     *
     * @note Only needs implementation if EdgeDataType is not void
     */
    virtual edge_data_type create_edge_metadata(
        const key_type& source,
        const key_type& target) {
        static_assert(std::is_void_v<edge_data_type>,
            "create_edge_metadata must be implemented for non-void edge data");
        // This should never be called for void EdgeDataType
        throw std::runtime_error("create_edge_metadata called for void EdgeDataType");
    }

    /**
     * @brief Create test data for multiple indices (chromosomes)
     * @param index_count Number of different indices
     * @param keys_per_index Number of keys per index
     * @return Map from index name to vector of (key, data) pairs
     */
    virtual std::unordered_map<std::string, std::vector<std::pair<key_type, data_type>>>
    generate_multi_index_data(size_t index_count, size_t keys_per_index) = 0;

    // =============================================================================
    // Helper Methods (optional to override, have default implementations)
    // =============================================================================

    /**
     * @brief Get expected index name for testing
     * @return Default index name (e.g., "chr1")
     */
    virtual std::string get_default_index() const {
        return "chr1";
    }

    /**
     * @brief Get alternative index name for cross-chromosome tests
     * @return Alternative index name (e.g., "chr2")
     */
    virtual std::string get_alternative_index() const {
        return "chr2";
    }

    /**
     * @brief Verify that returned key handles match expected data
     * @param keys Vector of key pointers returned from bulk insert
     * @param expected_data The original data used for insertion
     * @return true if all keys match expected data
     */
    virtual bool verify_key_handles(
        const std::vector<gdt::key<key_type, data_type>*>& keys,
        const std::vector<std::pair<key_type, data_type>>& expected_data) const {

        if (keys.size() != expected_data.size()) {
            return false;
        }

        for (size_t i = 0; i < keys.size(); ++i) {
            if (keys[i]->get_value() != expected_data[i].first ||
                keys[i]->get_data() != expected_data[i].second) {
                return false;
            }
        }
        return true;
    }

    /**
     * @brief Verify that query results contain exactly the expected items
     * @param results Query results from grove.intersect()
     * @param test_data The original test data
     * @param expected_indices Indices in test_data that should be in results
     * @return true if results match expected_indices exactly (ignoring order)
     */
    virtual bool verify_query_results(
        const gdt::query_result<key_type, data_type>& results,
        const std::vector<std::pair<key_type, data_type>>& test_data,
        const std::vector<size_t>& expected_indices) const {

        if (results.get_keys().size() != expected_indices.size()) {
            return false;
        }

        // Create vector of expected items
        std::vector<std::pair<key_type, data_type>> expected_items;
        for (size_t idx : expected_indices) {
            if (idx >= test_data.size()) {
                return false; // Invalid index
            }
            expected_items.push_back(test_data[idx]);
        }

        // Check that all returned keys are in the expected set
        auto result_keys = results.get_keys();
        for (auto* result_key : result_keys) {
            bool found = false;
            for (auto it = expected_items.begin(); it != expected_items.end(); ++it) {
                if (it->first == result_key->get_value() && it->second == result_key->get_data()) {
                    expected_items.erase(it);
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false; // Found unexpected key or data mismatch
            }
        }

        // If all expected items were found, the vector should now be empty
        return expected_items.empty();
    }

    /**
     * @brief Verify all keys are present in leaf nodes by traversing the B+ tree
     * @param index_name The index to check
     * @param inserted_keys Vector of key pointers that should be in the tree
     * @param expected_count Expected number of keys in the tree
     */
    void verify_keys_in_grove(
        const std::string& index_name,
        const std::vector<gdt::key<key_type, data_type>*>& inserted_keys,
        size_t expected_count) {

        // Get root node
        auto* root = grove.get_root(index_name);
        ASSERT_NE(root, nullptr) << "Root node should exist after insertion";

        // Find leftmost leaf node
        auto* current = root;
        while (!current->get_is_leaf()) {
            ASSERT_GT(current->get_children().size(), 0) << "Internal node should have children";
            current = current->get_children()[0];
        }

        // Traverse all leaf nodes and collect keys
        std::vector<gdt::key<key_type, data_type>*> collected_keys;
        while (current != nullptr) {
            EXPECT_TRUE(current->get_is_leaf()) << "Should only traverse leaf nodes";
            const auto& keys = current->get_keys();
            collected_keys.insert(collected_keys.end(), keys.begin(), keys.end());
            current = current->get_next();
        }

        // Verify we collected all expected keys
        ASSERT_EQ(collected_keys.size(), expected_count)
            << "Should find all " << expected_count << " keys in leaf nodes";

        // Verify each inserted key is present in collected keys
        for (auto* inserted_key : inserted_keys) {
            bool found = false;
            for (auto* collected_key : collected_keys) {
                if (collected_key == inserted_key) {
                    found = true;
                    break;
                }
            }
            EXPECT_TRUE(found) << "Each inserted key should be present in leaf nodes";
        }
    }

    // =============================================================================
    // Common Test Assertions (can be used by derived classes)
    // =============================================================================

    /**
     * @brief Assert that regular insert (non-sorted, non-bulk) works
     */
    void assert_regular_insert(size_t key_count) {
        auto data = generate_test_data(key_count);
        // check that data is sorted
        bool is_sorted = std::is_sorted(data.begin(), data.end(),
            [] (const auto& lhs, const auto& rhs) {
                return lhs.first < rhs.first;
            });
        ASSERT_TRUE(is_sorted) << "Generated data should be sorted";

        // Create query expectations from sorted data
        auto expect_ovlp = create_overlapping_query(data);
        auto expect_non_ovlp = create_non_overlapping_query(data);

        // Keep a copy of sorted data for verification
        auto sorted_data = data;

        // Shuffle with fixed seed for reproducibility
        std::shuffle(data.begin(), data.end(),
            std::mt19937{42});

        // Insert keys one by one without sorted/bulk tags
        std::vector<gdt::key<key_type, data_type>*> inserted_keys;
        for (const auto& [key, value] : data) {
            auto* key_ptr = grove.insert_data(get_default_index(), key, value);
            inserted_keys.push_back(key_ptr);
        }

        ASSERT_EQ(inserted_keys.size(), key_count)
            << "Should have inserted " << key_count << " keys";

        // Verify all keys are present in leaf nodes
        verify_keys_in_grove(get_default_index(), inserted_keys, key_count);

        // Verify keys are queryable (for overlapping data)
        auto results = grove.intersect(expect_ovlp.query, get_default_index());
        EXPECT_GT(results.get_keys().size(), 0)
            << "Should be able to query inserted keys";
        EXPECT_EQ(results.get_keys().size(), expect_ovlp.expected_indices.size())
            << "Overlapping query should return " << expect_ovlp.expected_indices.size() << " results";
        // verify the query results against sorted data (expected_indices refer to sorted data positions)
        EXPECT_TRUE(verify_query_results(results, sorted_data,
            expect_ovlp.expected_indices));

        // Also verify that non-overlapping keys cannot be found
        auto results_non_ovlp = grove.intersect(expect_non_ovlp.query,
            get_default_index());
        EXPECT_EQ(results_non_ovlp.get_keys().size(), 0)
            << "Non-overlapping query should return 0 results";
        EXPECT_EQ(expect_non_ovlp.expected_indices.size(), 0)
            << "Non-overlapping query expectation should have 0 expected indices";
    }

    /**
     * @brief Assert that sorted insert works
     */
    void assert_sorted_insert(size_t key_count) {
        auto data = generate_test_data(key_count);
        // check that data is sorted
        bool is_sorted = std::is_sorted(data.begin(), data.end(),
            [] (const auto& lhs, const auto& rhs) {
                return lhs.first < rhs.first;
            });
        ASSERT_TRUE(is_sorted) << "Generated data should be sorted";

        // Insert keys one by one with sorted tag
        std::vector<gdt::key<key_type, data_type>*> inserted_keys;
        for (const auto& [key, value] : data) {
            auto* key_ptr = grove.insert_data(get_default_index(), key, value, gst::sorted);
            inserted_keys.push_back(key_ptr);
        }

        ASSERT_EQ(inserted_keys.size(), key_count)
            << "Should have inserted " << key_count << " keys";

        // Verify all keys are present in leaf nodes
        verify_keys_in_grove(get_default_index(), inserted_keys, key_count);

        // Also verify keys are queryable
        auto expect_ovlp = create_overlapping_query(data);
        auto results = grove.intersect(expect_ovlp.query, get_default_index());
        EXPECT_GT(results.get_keys().size(), 0)
            << "Should be able to query inserted keys";
        EXPECT_EQ(results.get_keys().size(), expect_ovlp.expected_indices.size())
            << "Overlapping query should return " << expect_ovlp.expected_indices.size() << " results";
        // verify the query results
        EXPECT_TRUE(verify_query_results(results, data,
            expect_ovlp.expected_indices));

        // Also verify that non-overlapping keys cannot be found
        auto expect_non_ovlp = create_non_overlapping_query(data);
        auto results_non_ovlp = grove.intersect(expect_non_ovlp.query,
            get_default_index());
        EXPECT_EQ(results_non_ovlp.get_keys().size(), 0)
            << "Non-overlapping query should return 0 results";
        EXPECT_EQ(expect_non_ovlp.expected_indices.size(), 0)
            << "Non-overlapping query expectation should have 0 expected indices";
    }

    /**
     * @brief Assert that bulk insert works
     * @param key_count indicates how many data points to simulate
     */
    void assert_bulk_insert(size_t key_count) {
        auto data = generate_test_data(key_count);

        // check that data is sorted
        bool is_sorted = std::is_sorted(data.begin(), data.end(),
            [] (const auto& lhs, const auto& rhs) {
                return lhs.first < rhs.first;
            });
        ASSERT_TRUE(is_sorted) << "Generated data should be sorted";

        // insert data at once
        auto keys = grove.insert_data(get_default_index(),
            data, gst::sorted, gst::bulk);

        // we dont need to store inserted_keys as those are already in the handle
        // check if handles and the inserted key count match
        ASSERT_EQ(keys.size(), key_count)
            << "Should have inserted " << key_count << " keys";

        // Verify all keys are present in leaf nodes
        verify_keys_in_grove(get_default_index(), keys, key_count);

        // Also verify keys are queryable
        auto expect_ovlp = create_overlapping_query(data);
        auto results = grove.intersect(expect_ovlp.query,
            get_default_index());
        EXPECT_GT(results.get_keys().size(), 0)
            << "Overlapping query should find at least one result";
        EXPECT_EQ(results.get_keys().size(), expect_ovlp.expected_indices.size())
            << "Overlapping query should return " << expect_ovlp.expected_indices.size() << " results";
        // verify the query results
        EXPECT_TRUE(verify_query_results(results, data,
            expect_ovlp.expected_indices));

        // Also verify that non-overlapping keys cannot be found
        auto expect_non_ovlp = create_non_overlapping_query(data);
        auto results_non_ovlp = grove.intersect(expect_non_ovlp.query,
            get_default_index());
        EXPECT_EQ(results_non_ovlp.get_keys().size(), 0)
            << "Non-overlapping query should return 0 results";
        EXPECT_EQ(expect_non_ovlp.expected_indices.size(), 0)
            << "Non-overlapping query expectation should have 0 expected indices";
    }

    /**
     * @brief Assert that bulk insert returns correct number of handles
     */
    void assert_bulk_insert_returns_handles(size_t count) {
        auto data = generate_test_data(count);
        auto keys = grove.insert_data(get_default_index(), data,
            gst::sorted, gst::bulk);

        ASSERT_EQ(keys.size(), count)
            << "Bulk insert should return " << count << " key handles";
        EXPECT_TRUE(verify_key_handles(keys, data))
            << "Key handles should point to correct data";

        // Verify all keys are present in leaf nodes
        verify_keys_in_grove(get_default_index(), keys, count);
    }

    /**
     * @brief Assert that edges can be created between keys
     * @param key_count the number of keys to generate
     */
    void assert_edge_creation(size_t key_count) {
        auto data = generate_test_data(key_count);
        auto keys = grove.insert_data(get_default_index(), data,
            gst::sorted, gst::bulk);

        // Create chain of edges
        for (size_t i = 0; i + 1 < keys.size(); ++i) {
            grove.add_edge(keys[i], keys[i + 1]);
        }

        // Verify all edges exist
        for (size_t i = 0; i + 1 < keys.size(); ++i) {
            EXPECT_TRUE(grove.has_edge(keys[i], keys[i + 1]))
                << "Edge " << i << " -> " << (i + 1) << " should exist";
        }

        EXPECT_EQ(grove.edge_count(), key_count - 1)
            << "Should have " << (key_count - 1) << " edges in chain";
    }

    /**
     * @brief Assert that edges can be removed
     * @param key_count
     */
    void assert_edge_removal(size_t key_count) {
        auto data = generate_test_data(key_count);
        auto keys = grove.insert_data(get_default_index(), data,
            gst::sorted, gst::bulk);

        // double check that there are no edges
        EXPECT_EQ(grove.edge_count(), 0);

        grove.add_edge(keys[0], keys[1]);
        grove.remove_edge(keys[0], keys[2]);
        grove.add_edge(keys[1], keys[2]);

        // check that edges have been inserted
        EXPECT_EQ(grove.edge_count(), 3);

        // remove one edge
        grove.remove_edge(keys[0], keys[1]);
        EXPECT_EQ(grove.edge_count(), 2);
   }

    void assert_clear_graph(size_t key_count) {
        auto data = generate_test_data(key_count);
        auto keys = grove.insert_data(get_default_index(), data,
            gst::sorted, gst::bulk);

        // Create chain of edges: keys[0] -> keys[1] -> ... -> keys[key_count-1]
        // This creates key_count-1 edges, with key_count-1 vertices having outgoing edges
        // (last key has no outgoing edge)
        for (size_t i = 0; i + 1 < keys.size(); ++i) {
            grove.add_edge(keys[i], keys[i + 1]);
        }
        EXPECT_EQ(grove.vertex_count(), key_count);  // Total vertices (all keys)
        EXPECT_EQ(grove.vertex_count_with_edges(), key_count - 1);  // Vertices with outgoing edges
        EXPECT_EQ(grove.edge_count(), key_count - 1);

        EXPECT_EQ(grove.edge_count(), key_count - 1);
        grove.clear();
        EXPECT_EQ(grove.edge_count(), 0);
        EXPECT_EQ(grove.graph_empty(), true);
    }

    /**
     * @brief Assert that link_if creates correct edges
     */
    template<typename Predicate>
    void assert_link_if_works(size_t key_count, Predicate pred, size_t expected_edges) {
        auto data = generate_test_data(key_count);
        auto keys = grove.insert_data(get_default_index(), data,
            gst::sorted, gst::bulk);

        grove.link_if(keys, pred);

        EXPECT_EQ(grove.edge_count(), expected_edges)
            << "link_if should create " << expected_edges << " edges";
    }

    /**
     * @brief Assert that cross-chromosome edges work
     */
    void assert_cross_chromosome_edges() {
        auto data1 = generate_test_data(10);
        auto data2 = generate_test_data(10);

        auto keys1 = grove.insert_data(get_default_index(), data1,
            gst::sorted, gst::bulk);
        auto keys2 = grove.insert_data(get_alternative_index(), data2,
            gst::sorted, gst::bulk);

        // create cross-chromosome edge
        grove.add_edge(keys1[5], keys2[3]);

        EXPECT_TRUE(grove.has_edge(keys1[5], keys2[3]))
            << "Cross-chromosome edge should exist";
        EXPECT_EQ(grove.edge_count(), 1)
            << "Should have exactly 1 edge";

        // Verify neighbors
        auto neighbors = grove.get_neighbors(keys1[5]);
        ASSERT_EQ(neighbors.size(), 1);
        EXPECT_EQ(neighbors[0], keys2[3]);
    }
};

// =============================================================================
// Simplified Test Base Using Traits Pattern
// =============================================================================

/**
 * @brief Simplified test fixture that automatically uses grove_test_traits
 */
template <typename key_type, typename data_type = int, typename edge_data_type = void>
class simple_grove_test_base : public grove_test_base<key_type, data_type, edge_data_type> {
protected:
    using Traits = grove_test_traits<key_type, data_type>;

    // Automatically delegate to traits
    std::vector<std::pair<key_type, data_type>> generate_test_data(size_t count) override {
        return Traits::generate_test_data(count);
    }

    query_overlap_expectation<key_type> create_overlapping_query(
        const std::vector<std::pair<key_type, data_type>>& test_data) override {
        return Traits::create_overlapping_query(test_data);
    }

    query_overlap_expectation<key_type> create_non_overlapping_query(
        const std::vector<std::pair<key_type, data_type>>& test_data) override {
        return Traits::create_non_overlapping_query(test_data);
    }

    // Default implementation for multi-index data
    std::unordered_map<std::string, std::vector<std::pair<key_type, data_type>>>
    generate_multi_index_data(size_t index_count, size_t keys_per_index) override {
        std::unordered_map<std::string, std::vector<std::pair<key_type, data_type>>> result;
        for (size_t i = 0; i < index_count; ++i) {
            std::string index_name = "chr" + std::to_string(i + 1);
            result[index_name] = Traits::generate_test_data(keys_per_index);
        }
        return result;
    }
};

// =============================================================================
// Tree Invariant Validation Helpers
// =============================================================================

/**
 * @brief Recursively validate B+ tree invariants for a node and its subtree
 *
 * Checks:
 * - Internal nodes: children.size() == keys.size() + 1
 * - Leaf nodes: no children
 * - Parent pointers match actual parent
 * - All leaves at the same depth
 * - Key count does not exceed order-1
 */
template <typename key_type, typename data_type>
void validate_tree_invariants(
    gst::node<key_type, data_type>* n,
    gst::node<key_type, data_type>* expected_parent,
    int depth,
    int order,
    int& leaf_depth,
    size_t& leaf_count) {

    ASSERT_NE(n, nullptr) << "Node should not be null at depth " << depth;

    EXPECT_EQ(n->get_parent(), expected_parent)
        << "Parent pointer mismatch at depth " << depth;

    EXPECT_LE(n->get_keys().size(), static_cast<size_t>(order - 1))
        << "Node has too many keys at depth " << depth
        << " (has " << n->get_keys().size() << ", max " << (order - 1) << ")";

    if (n->get_is_leaf()) {
        EXPECT_TRUE(n->get_children().empty())
            << "Leaf node should have no children at depth " << depth;

        if (leaf_depth < 0) {
            leaf_depth = depth;
        } else {
            EXPECT_EQ(depth, leaf_depth)
                << "All leaves should be at the same depth";
        }

        leaf_count += n->get_keys().size();

        for (size_t i = 1; i < n->get_keys().size(); ++i) {
            EXPECT_FALSE(n->get_keys()[i]->get_value() < n->get_keys()[i-1]->get_value())
                << "Keys should be sorted within leaf at depth " << depth;
        }
    } else {
        EXPECT_EQ(n->get_children().size(), n->get_keys().size() + 1)
            << "Internal node invariant violated at depth " << depth
            << ": " << n->get_children().size() << " children but "
            << n->get_keys().size() << " keys";

        for (size_t i = 1; i < n->get_keys().size(); ++i) {
            EXPECT_FALSE(n->get_keys()[i]->get_value() < n->get_keys()[i-1]->get_value())
                << "Keys should be sorted within internal node at depth " << depth;
        }

        for (size_t i = 0; i < n->get_children().size(); ++i) {
            validate_tree_invariants(
                n->get_children()[i], n, depth + 1, order, leaf_depth, leaf_count);
        }
    }
}

// =============================================================================
// Typed Test Suite - Define tests ONCE, run for all types
// =============================================================================

/**
 * @brief Typed test fixture - uses SimpleGroveTestBase with type parameter
 */
template <typename T>
class grove_typed_test : public simple_grove_test_base<T> {};

/**
 * @brief Macro to define standard grove tests for all registered types
 *
 * Usage:
 * @code
 * // 1. Define traits for your type
 * template<>
 * struct grove_test_traits<gdt::interval, int> { ... };
 *
 * // 2. Register types to test
 * using TestTypes = ::testing::Types<gdt::interval, gdt::genomic_coordinate>;
 * INSTANTIATE_TYPED_TEST_SUITE_P(Grove, GroveTypedTest, TestTypes);
 * @endcode
 */
TYPED_TEST_SUITE_P(grove_typed_test);

// Define all standard tests ONCE - they run for ALL types
TYPED_TEST_P(grove_typed_test, regular_insert) {
    this->assert_regular_insert(25);
}

TYPED_TEST_P(grove_typed_test, sorted_insert) {
    this->assert_sorted_insert(25);
}

TYPED_TEST_P(grove_typed_test, bulk_insert) {
    this->assert_bulk_insert(25);
}

TYPED_TEST_P(grove_typed_test, bulk_insert_unsorted) {
    auto data = this->generate_test_data(10);

    // Shuffle to make unsorted
    std::vector<std::pair<TypeParam, int>> unsorted_data = data;
    std::reverse(unsorted_data.begin(), unsorted_data.end());

    // Bulk insert without sorted tag (should sort internally)
    auto keys = this->grove.insert_data(this->get_default_index(),
        unsorted_data, gst::bulk);

    ASSERT_EQ(keys.size(), 10) << "Should insert all keys";

    // Verify all data is queryable
    auto expectation = this->create_overlapping_query(data);
    auto results = this->grove.intersect(expectation.query,
        this->get_default_index());
    EXPECT_GT(results.get_keys().size(), 0) << "Should find overlapping keys";
}

TYPED_TEST_P(grove_typed_test, bulk_insert_empty) {
    std::vector<std::pair<TypeParam, int>> empty_data;

    // Bulk insert empty data
    auto keys = this->grove.insert_data(this->get_default_index(), empty_data, gst::bulk);

    EXPECT_TRUE(keys.empty()) << "Empty bulk insert should return empty vector";

    // Query should find nothing
    auto data = this->generate_test_data(5);
    auto expectation = this->create_overlapping_query(data);
    auto results = this->grove.intersect(expectation.query, this->get_default_index());
    EXPECT_EQ(results.get_keys().size(), 0) << "Query on empty grove should find nothing";
}

TYPED_TEST_P(grove_typed_test, bulk_insert_large_dataset) {
    auto data = this->generate_test_data(100);

    // Bulk insert large dataset
    auto keys = this->grove.insert_data(this->get_default_index(), data, gst::sorted, gst::bulk);

    ASSERT_EQ(keys.size(), 100) << "Should insert all 100 keys";

    // Verify all data is queryable
    auto expectation = this->create_overlapping_query(data);
    auto results = this->grove.intersect(expectation.query, this->get_default_index());
    EXPECT_GT(results.get_keys().size(), 0) << "Should find overlapping keys in large dataset";
}

TYPED_TEST_P(grove_typed_test, bulk_insert_append_mode) {
    auto batch1 = this->generate_test_data(10);
    auto batch2 = this->generate_test_data(10);

    // First bulk insert (empty grove - uses bottom-up construction)
    auto keys1 = this->grove.insert_data(this->get_default_index(), batch1, gst::sorted, gst::bulk);
    ASSERT_EQ(keys1.size(), 10) << "First batch should insert 10 keys";

    // Verify first batch
    auto expectation1 = this->create_overlapping_query(batch1);
    auto results1 = this->grove.intersect(expectation1.query, this->get_default_index());
    EXPECT_EQ(results1.get_keys().size(), expectation1.expected_indices.size())
        << "First batch query should find expected results";

    // Second bulk insert (grove has data - uses append mode)
    // Note: This should succeed because generate_test_data creates the same pattern,
    // so batch2 keys should overlap with batch1 keys, but we're testing append to same index
    auto combined = batch1;
    combined.insert(combined.end(), batch2.begin(), batch2.end());
    std::sort(combined.begin(), combined.end());

    // For append mode to work, we need strictly greater keys
    // Generate new data that's strictly greater than batch1
    std::vector<std::pair<TypeParam, int>> batch2_greater;
    for (size_t i = 10; i < 20; ++i) {
        auto temp_data = this->generate_test_data(i + 1);
        if (!temp_data.empty()) {
            batch2_greater.push_back(temp_data.back());
        }
    }

    if (!batch2_greater.empty()) {
        auto keys2 = this->grove.insert_data(this->get_default_index(), batch2_greater, gst::sorted, gst::bulk);
        EXPECT_GT(keys2.size(), 0) << "Second batch should insert keys";
    }
}

TYPED_TEST_P(grove_typed_test, bulk_insert_multiple_indices) {
    // Create data for first index (chr1)
    auto data1 = this->generate_test_data(5);

    // Create data for second index (chr2)
    auto data2 = this->generate_test_data(5);

    // Bulk insert to first index
    auto keys1 = this->grove.insert_data(this->get_default_index(), data1, gst::sorted, gst::bulk);
    ASSERT_EQ(keys1.size(), 5) << "Should insert 5 keys to first index";

    // Bulk insert to second index
    auto keys2 = this->grove.insert_data(this->get_alternative_index(), data2, gst::sorted, gst::bulk);
    ASSERT_EQ(keys2.size(), 5) << "Should insert 5 keys to second index";

    // Query first index
    auto expectation1 = this->create_overlapping_query(data1);
    auto results1 = this->grove.intersect(expectation1.query, this->get_default_index());
    EXPECT_TRUE(this->verify_query_results(results1, data1, expectation1.expected_indices))
        << "First index query should find expected results";

    // Query second index
    auto expectation2 = this->create_overlapping_query(data2);
    auto results2 = this->grove.intersect(expectation2.query, this->get_alternative_index());
    EXPECT_TRUE(this->verify_query_results(results2, data2, expectation2.expected_indices))
        << "Second index query should find expected results";
}

TYPED_TEST_P(grove_typed_test, bulk_insert_precondition_violation) {
    // Insert initial data to an index
    auto initial_data = this->generate_test_data(3);
    auto keys1 = this->grove.insert_data(this->get_default_index(),
        initial_data, gst::sorted, gst::bulk);
    ASSERT_EQ(keys1.size(), 3) << "Should insert initial 3 keys";

    // Try to insert data that violates the precondition (not strictly greater than existing max)
    // We'll use the first item from initial_data which is definitely not > max
    std::vector<std::pair<TypeParam, int>> invalid_data;
    invalid_data.push_back(initial_data[0]); // This is less than the max

    // Should throw runtime_error due to precondition violation
    EXPECT_THROW(
        this->grove.insert_data(this->get_default_index(), invalid_data, gst::sorted, gst::bulk),
        std::runtime_error
    ) << "Bulk insert with keys not strictly greater than existing max should throw";

    // Verify original data is still intact
    auto expectation = this->create_overlapping_query(initial_data);
    auto results = this->grove.intersect(expectation.query, this->get_default_index());
    EXPECT_TRUE(this->verify_query_results(results, initial_data, expectation.expected_indices))
        << "Original data should remain intact after failed bulk insert";
}

TYPED_TEST_P(grove_typed_test, serialization) {
    // Insert data into grove
    auto data = this->generate_test_data(25);
    auto keys = this->grove.insert_data(this->get_default_index(), data, gst::sorted, gst::bulk);
    ASSERT_EQ(keys.size(), 25) << "Should insert 25 keys";

    // Serialize grove to stream
    std::stringstream ss;
    this->grove.serialize(ss);

    // Deserialize into new grove
    auto restored_grove = gst::grove<TypeParam, int>::deserialize(ss);

    // Verify data is intact by querying
    auto expectation = this->create_overlapping_query(data);
    auto results = restored_grove.intersect(expectation.query, this->get_default_index());

    EXPECT_EQ(results.get_keys().size(), expectation.expected_indices.size())
        << "Deserialized grove should return same query results";

    // Verify non-overlapping query still returns empty
    auto non_overlap = this->create_non_overlapping_query(data);
    auto non_results = restored_grove.intersect(non_overlap.query, this->get_default_index());
    EXPECT_EQ(non_results.get_keys().size(), 0)
        << "Non-overlapping query should still return 0 results after deserialization";
}

TYPED_TEST_P(grove_typed_test, serialization_empty_grove) {
    // Serialize empty grove
    std::stringstream ss;
    this->grove.serialize(ss);

    // Deserialize into new grove
    auto restored_grove = gst::grove<TypeParam, int>::deserialize(ss);

    // Query should find nothing
    auto data = this->generate_test_data(5);
    auto expectation = this->create_overlapping_query(data);
    auto results = restored_grove.intersect(expectation.query, this->get_default_index());
    EXPECT_EQ(results.get_keys().size(), 0)
        << "Query on deserialized empty grove should find nothing";
}

TYPED_TEST_P(grove_typed_test, serialization_multiple_indices) {
    // Insert data into multiple indices
    auto data1 = this->generate_test_data(10);
    auto data2 = this->generate_test_data(10);

    this->grove.insert_data(this->get_default_index(), data1, gst::sorted, gst::bulk);
    this->grove.insert_data(this->get_alternative_index(), data2, gst::sorted, gst::bulk);

    // Serialize
    std::stringstream ss;
    this->grove.serialize(ss);

    // Deserialize
    auto restored_grove = gst::grove<TypeParam, int>::deserialize(ss);

    // Verify first index
    auto expectation1 = this->create_overlapping_query(data1);
    auto results1 = restored_grove.intersect(expectation1.query, this->get_default_index());
    EXPECT_EQ(results1.get_keys().size(), expectation1.expected_indices.size())
        << "First index should have correct data after deserialization";

    // Verify second index
    auto expectation2 = this->create_overlapping_query(data2);
    auto results2 = restored_grove.intersect(expectation2.query, this->get_alternative_index());
    EXPECT_EQ(results2.get_keys().size(), expectation2.expected_indices.size())
        << "Second index should have correct data after deserialization";
}

TYPED_TEST_P(grove_typed_test, internal_node_split_invariants) {
    // Order 3 forces internal node splits after ~6 keys (max 2 keys/node)
    gst::grove<TypeParam, int> small_grove(3);

    auto data = grove_test_traits<TypeParam, int>::generate_test_data(20);

    // Insert via sorted insertion to exercise insert_sorted -> split_node path
    std::vector<gdt::key<TypeParam, int>*> inserted_keys;
    for (const auto& [key_val, data_val] : data) {
        auto* key_ptr = small_grove.insert_data(
            this->get_default_index(), key_val, data_val, gst::sorted);
        inserted_keys.push_back(key_ptr);
    }
    ASSERT_EQ(inserted_keys.size(), 20u);

    // Validate full tree structure
    auto* root = small_grove.get_root(this->get_default_index());
    ASSERT_NE(root, nullptr);

    int leaf_depth = -1;
    size_t leaf_count = 0;
    validate_tree_invariants(root, static_cast<gst::node<TypeParam, int>*>(nullptr),
        0, 3, leaf_depth, leaf_count);

    EXPECT_EQ(leaf_count, 20u) << "All 20 keys should be in leaf nodes";

    // Validate leaf chain completeness
    auto* current = root;
    while (!current->get_is_leaf()) {
        ASSERT_GT(current->get_children().size(), 0u);
        current = current->get_children()[0];
    }
    size_t chain_count = 0;
    while (current != nullptr) {
        chain_count += current->get_keys().size();
        current = current->get_next();
    }
    EXPECT_EQ(chain_count, 20u) << "Leaf chain should contain all 20 keys";

    // Verify data is queryable
    auto expectation = grove_test_traits<TypeParam, int>::create_overlapping_query(data);
    auto results = small_grove.intersect(expectation.query, this->get_default_index());
    EXPECT_EQ(results.get_keys().size(), expectation.expected_indices.size());
}

TYPED_TEST_P(grove_typed_test, internal_node_split_regular_insert) {
    // Test with non-sorted insertion to exercise insert_iter -> split_node path
    gst::grove<TypeParam, int> small_grove(3);

    auto data = grove_test_traits<TypeParam, int>::generate_test_data(15);

    std::vector<gdt::key<TypeParam, int>*> inserted_keys;
    for (const auto& [key_val, data_val] : data) {
        auto* key_ptr = small_grove.insert_data(
            this->get_default_index(), key_val, data_val);
        inserted_keys.push_back(key_ptr);
    }
    ASSERT_EQ(inserted_keys.size(), 15u);

    // Validate tree structure
    auto* root = small_grove.get_root(this->get_default_index());
    ASSERT_NE(root, nullptr);

    int leaf_depth = -1;
    size_t leaf_count = 0;
    validate_tree_invariants(root, static_cast<gst::node<TypeParam, int>*>(nullptr),
        0, 3, leaf_depth, leaf_count);

    EXPECT_EQ(leaf_count, 15u) << "All 15 keys should be in leaf nodes";

    // Verify all data is queryable
    for (const auto& [key_val, data_val] : data) {
        auto query = key_val;
        auto results = small_grove.intersect(query, this->get_default_index());
        EXPECT_GE(results.get_keys().size(), 1u)
            << "Each inserted key should be queryable";
    }
}

// Register all the KEY_TYPE-DEPENDENT tests
REGISTER_TYPED_TEST_SUITE_P(grove_typed_test,
    regular_insert,
    sorted_insert,
    bulk_insert,
    bulk_insert_unsorted,
    bulk_insert_empty,
    bulk_insert_large_dataset,
    bulk_insert_append_mode,
    bulk_insert_multiple_indices,
    bulk_insert_precondition_violation,
    serialization,
    serialization_empty_grove,
    serialization_multiple_indices,
    internal_node_split_invariants,
    internal_node_split_regular_insert);

#endif // GENOGROVE_TESTS_DATA_TYPE_GROVE_TEST_HPP