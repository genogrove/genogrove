/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/node.hpp>
#include <genogrove/utility/ranges.hpp>

// standard
#include <variant>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;
namespace ggu = genogrove::utility;

// =============================================================================
// Basic Interval Grove Tests
// =============================================================================

TEST(IntervalGroveTest, CreationAndQueryUnsorted) {
    gst::grove<gdt::interval, int> grove(3);
    gdt::interval intvl1{5, 10};
    gdt::interval intvl2{15, 20};
    gdt::interval intvl3{25, 30};
    gdt::interval intvl4{35, 40};

    int val1 = 10;
    int val2 = 20;
    int val3 = 30;
    int val4 = 40;

    grove.insert_data("index1", intvl1, val1);
    grove.insert_data("index1", intvl2, val2);
    grove.insert_data("index1", intvl3, val3);

    gdt::interval query_interval{17, 27};
    gdt::query_result<gdt::interval, int> result = grove.intersect(query_interval, "index1");

    // Should find two overlapping intervals: intvl2 [15,20] and intvl3 [25,30]
    ASSERT_EQ(result.get_keys().size(), 2);

    auto keys = result.get_keys();

    // Verify first overlapping interval (intvl2)
    EXPECT_EQ(keys[0]->get_value().get_start(), 15);
    EXPECT_EQ(keys[0]->get_value().get_end(), 20);
    EXPECT_EQ(keys[0]->get_data(), 20);

    // Verify second overlapping interval (intvl3)
    EXPECT_EQ(keys[1]->get_value().get_start(), 25);
    EXPECT_EQ(keys[1]->get_value().get_end(), 30);
    EXPECT_EQ(keys[1]->get_data(), 30);
}

TEST(IntervalGroveTest, CreationAndQuerySorted) {
    gst::grove<gdt::interval, int> grove(3);
    gdt::interval intvl1{5, 10};
    gdt::interval intvl2{10,15};
    gdt::interval intvl3{20,30};
    gdt::interval intvl4{40,50};

    int val1 = 10;
    int val2 = 20;
    int val3 = 30;
    int val4 = 40;

    grove.insert_data("index1", intvl1, val1, gst::sorted);
    grove.insert_data("index1", intvl2, val2, gst::sorted);
    grove.insert_data("index1", intvl3, val3, gst::sorted);
    grove.insert_data("index1", intvl4, val4, gst::sorted);

    gdt::interval query_interval{18, 42};
    gdt::query_result<gdt::interval, int> result = grove.intersect(query_interval, "index1");

    // should find two overlapping intervals (e.g., intvl3 and intvl4)
    ASSERT_EQ(result.get_keys().size(), 2);

    auto keys = result.get_keys();

    // verify first overlapping interval
    EXPECT_EQ(keys[0]->get_value().get_start(), 20);
    EXPECT_EQ(keys[0]->get_value().get_end(), 30);
    EXPECT_EQ(keys[0]->get_data(), 30);

    EXPECT_EQ(keys[1]->get_value().get_start(), 40);
    EXPECT_EQ(keys[1]->get_value().get_end(), 50);
    EXPECT_EQ(keys[1]->get_data(), 40);

}

// =============================================================================
// Heterogeneous Grove Tests (Variant Types)
// =============================================================================

// Define variant type for testing
using TestVariant = std::variant<std::monostate, int, double, std::string>;

TEST(HeterogeneousGroveTest, VariantInsertionAndQuery) {
    // Create grove with variant data type
    gst::grove<gdt::interval, TestVariant> grove(3);

    // Insert different types
    gdt::interval intvl1{10, 20};
    gdt::interval intvl2{30, 40};
    gdt::interval intvl3{50, 60};

    grove.insert_data("chr1", intvl1, 42);                    // int
    grove.insert_data("chr1", intvl2, 3.14);                  // double
    grove.insert_data("chr1", intvl3, std::string("test"));   // string

    // Query
    gdt::interval query{15, 55};
    auto results = grove.intersect(query, "chr1");

    // Should find all three intervals
    ASSERT_EQ(results.get_keys().size(), 3);

    // Verify data can be accessed
    auto keys = results.get_keys();

    // First key should have int
    EXPECT_TRUE(std::holds_alternative<int>(keys[0]->get_data()));
    EXPECT_EQ(std::get<int>(keys[0]->get_data()), 42);

    // Second key should have double
    EXPECT_TRUE(std::holds_alternative<double>(keys[1]->get_data()));
    EXPECT_DOUBLE_EQ(std::get<double>(keys[1]->get_data()), 3.14);

    // Third key should have string
    EXPECT_TRUE(std::holds_alternative<std::string>(keys[2]->get_data()));
    EXPECT_EQ(std::get<std::string>(keys[2]->get_data()), "test");
}

// =============================================================================
// Heterogeneous Grove Tests (Variant Types) - type check at runtime
// =============================================================================

TEST(HeterogeneousGroveTest, VariantTypeFiltering) {
    gst::grove<gdt::interval, TestVariant> grove(3);

    // Insert mixed types
    grove.insert_data("chr1", gdt::interval{10, 20}, 100);
    grove.insert_data("chr1", gdt::interval{15, 25}, 200);
    grove.insert_data("chr1", gdt::interval{30, 40}, 1.5);
    grove.insert_data("chr1", gdt::interval{35, 45}, std::string("gene"));

    // Query all
    gdt::interval query{12, 42};
    auto results = grove.intersect(query, "chr1");

    // Filter by type
    int int_count = 0;
    int int_sum = 0;
    for (auto* key : results.get_keys()) {
        if (std::holds_alternative<int>(key->get_data())) {
            int_count++;
            int_sum += std::get<int>(key->get_data());
        }
    }

    EXPECT_EQ(int_count, 2);
    EXPECT_EQ(int_sum, 300);

    // Check for string
    bool found_string = false;
    for (auto* key : results.get_keys()) {
        if (std::holds_alternative<std::string>(key->get_data())) {
            found_string = true;
            EXPECT_EQ(std::get<std::string>(key->get_data()), "gene");
        }
    }
    EXPECT_TRUE(found_string);
}

TEST(HeterogeneousGroveTest, VariantWithMonostate) {
    gst::grove<gdt::interval, TestVariant> grove(3);

    // Insert with monostate (no data)
    gdt::interval intvl1{10, 20};
    gdt::key<gdt::interval, TestVariant> key1(intvl1);  // Default constructs variant to monostate
    grove.insert("chr1", key1);

    // Insert with actual data
    grove.insert_data("chr1", gdt::interval{30, 40}, 42);

    // Query
    gdt::interval query{5, 45};
    auto results = grove.intersect(query, "chr1");

    ASSERT_EQ(results.get_keys().size(), 2);

    // First should be monostate
    EXPECT_TRUE(std::holds_alternative<std::monostate>(results.get_keys()[0]->get_data()));

    // Second should be int
    EXPECT_TRUE(std::holds_alternative<int>(results.get_keys()[1]->get_data()));
    EXPECT_EQ(std::get<int>(results.get_keys()[1]->get_data()), 42);
}

// Custom struct for testing
struct custom_data {
    int id;
    double value;

    bool operator==(const custom_data& other) const {
        return id == other.id && value == other.value;
    }
};

// Specialization for custom struct serialization
namespace genogrove::data_type {
template<>
struct serialization_traits<custom_data> {
    static void serialize(std::ostream& os, const custom_data& data) {
        os.write(reinterpret_cast<const char*>(&data.id), sizeof(data.id));
        os.write(reinterpret_cast<const char*>(&data.value), sizeof(data.value));
    }

    static custom_data deserialize(std::istream& is) {
        custom_data data;
        is.read(reinterpret_cast<char*>(&data.id), sizeof(data.id));
        is.read(reinterpret_cast<char*>(&data.value), sizeof(data.value));
        return data;
    }
};
}

TEST(HeterogeneousGroveTest, VariantWithCustomStruct) {
    using CustomVariant = std::variant<std::monostate, int, custom_data>;
    gst::grove<gdt::interval, CustomVariant> grove(3);

    // Insert custom struct
    custom_data custom{42, 3.14};
    grove.insert_data("chr1", gdt::interval{10, 20}, custom);

    // Insert int
    grove.insert_data("chr1", gdt::interval{30, 40}, 100);

    // Query
    gdt::interval query{5, 45};
    auto results = grove.intersect(query, "chr1");

    ASSERT_EQ(results.get_keys().size(), 2);

    // Verify custom data
    EXPECT_TRUE(std::holds_alternative<custom_data>(results.get_keys()[0]->get_data()));
    auto retrieved = std::get<custom_data>(results.get_keys()[0]->get_data());
    EXPECT_EQ(retrieved.id, 42);
    EXPECT_DOUBLE_EQ(retrieved.value, 3.14);

    // Verify int data
    EXPECT_TRUE(std::holds_alternative<int>(results.get_keys()[1]->get_data()));
    EXPECT_EQ(std::get<int>(results.get_keys()[1]->get_data()), 100);
}

// =============================================================================
// Bulk Insert Tests
// =============================================================================

TEST(IntervalGroveTest, BulkInsertSorted) {
    gst::grove<gdt::interval, int> grove(3);

    // Create sorted data
    std::vector<std::pair<gdt::interval, int>> data = {
        {gdt::interval{5, 10}, 10},
        {gdt::interval{10, 15}, 20},
        {gdt::interval{20, 30}, 30},
        {gdt::interval{40, 50}, 40},
        {gdt::interval{60, 70}, 50}
    };

    // Bulk insert sorted data
    grove.insert_data("chr1", data, gst::sorted, gst::bulk);

    // Query to verify all data was inserted
    gdt::interval query{0, 100};
    auto results = grove.intersect(query, "chr1");

    ASSERT_EQ(results.get_keys().size(), 5);

    // Verify data was inserted correctly
    auto keys = results.get_keys();
    EXPECT_EQ(keys[0]->get_value().get_start(), 5);
    EXPECT_EQ(keys[0]->get_value().get_end(), 10);
    EXPECT_EQ(keys[0]->get_data(), 10);

    EXPECT_EQ(keys[1]->get_value().get_start(), 10);
    EXPECT_EQ(keys[1]->get_value().get_end(), 15);
    EXPECT_EQ(keys[1]->get_data(), 20);

    EXPECT_EQ(keys[2]->get_value().get_start(), 20);
    EXPECT_EQ(keys[2]->get_value().get_end(), 30);
    EXPECT_EQ(keys[2]->get_data(), 30);

    EXPECT_EQ(keys[3]->get_value().get_start(), 40);
    EXPECT_EQ(keys[3]->get_value().get_end(), 50);
    EXPECT_EQ(keys[3]->get_data(), 40);

    EXPECT_EQ(keys[4]->get_value().get_start(), 60);
    EXPECT_EQ(keys[4]->get_value().get_end(), 70);
    EXPECT_EQ(keys[4]->get_data(), 50);
}

TEST(IntervalGroveTest, BulkInsertUnsorted) {
    gst::grove<gdt::interval, int> grove(3);

    // Create unsorted data
    std::vector<std::pair<gdt::interval, int>> data = {
        {gdt::interval{40, 50}, 40},
        {gdt::interval{5, 10}, 10},
        {gdt::interval{60, 70}, 50},
        {gdt::interval{10, 15}, 20},
        {gdt::interval{20, 30}, 30}
    };

    // Bulk insert unsorted data (should sort internally)
    grove.insert_data("chr1", data, gst::bulk);

    // Query to verify all data was inserted
    gdt::interval query{0, 100};
    auto results = grove.intersect(query, "chr1");

    ASSERT_EQ(results.get_keys().size(), 5);

    // Verify data was sorted and inserted correctly
    auto keys = results.get_keys();
    EXPECT_EQ(keys[0]->get_value().get_start(), 5);
    EXPECT_EQ(keys[0]->get_value().get_end(), 10);
    EXPECT_EQ(keys[0]->get_data(), 10);

    EXPECT_EQ(keys[1]->get_value().get_start(), 10);
    EXPECT_EQ(keys[1]->get_value().get_end(), 15);
    EXPECT_EQ(keys[1]->get_data(), 20);

    EXPECT_EQ(keys[2]->get_value().get_start(), 20);
    EXPECT_EQ(keys[2]->get_value().get_end(), 30);
    EXPECT_EQ(keys[2]->get_data(), 30);

    EXPECT_EQ(keys[3]->get_value().get_start(), 40);
    EXPECT_EQ(keys[3]->get_value().get_end(), 50);
    EXPECT_EQ(keys[3]->get_data(), 40);

    EXPECT_EQ(keys[4]->get_value().get_start(), 60);
    EXPECT_EQ(keys[4]->get_value().get_end(), 70);
    EXPECT_EQ(keys[4]->get_data(), 50);
}

TEST(IntervalGroveTest, BulkInsertEmpty) {
    gst::grove<gdt::interval, int> grove(3);

    // Create empty data
    std::vector<std::pair<gdt::interval, int>> data;

    // Bulk insert empty data (should do nothing)
    grove.insert_data("chr1", data, gst::bulk);

    // Query should return no results
    gdt::interval query{0, 100};
    auto results = grove.intersect(query, "chr1");

    EXPECT_EQ(results.get_keys().size(), 0);
}

TEST(IntervalGroveTest, BulkInsertLargeDataset) {
    gst::grove<gdt::interval, int> grove(10);

    // Create larger sorted dataset
    std::vector<std::pair<gdt::interval, int>> data;
    for (size_t i = 0; i < 100; ++i) {
        data.emplace_back(gdt::interval{i * 10, i * 10 + 5}, i);
    }

    // Bulk insert with explicit sorted tag (fastest)
    grove.insert_data("chr1", data, gst::sorted, gst::bulk);

    // Query entire range
    gdt::interval query{0, 1000};
    auto results = grove.intersect(query, "chr1");

    ASSERT_EQ(results.get_keys().size(), 100);

    // Verify first and last elements
    auto keys = results.get_keys();
    EXPECT_EQ(keys[0]->get_data(), 0);
    EXPECT_EQ(keys[99]->get_data(), 99);
}

TEST(IntervalGroveTest, BulkInsertVsIndividualInsert) {
    gst::grove<gdt::interval, int> grove_bulk(5);
    gst::grove<gdt::interval, int> grove_individual(5);

    // Create test data
    std::vector<std::pair<gdt::interval, int>> data = {
        {gdt::interval{5, 10}, 10},
        {gdt::interval{15, 20}, 20},
        {gdt::interval{25, 30}, 30},
        {gdt::interval{35, 40}, 40},
        {gdt::interval{45, 50}, 50},
        {gdt::interval{55, 60}, 60}
    };

    // Bulk insert with explicit sorted tag
    grove_bulk.insert_data("chr1", data, gst::sorted, gst::bulk);

    // Individual inserts
    for (const auto& [interval, value] : data) {
        grove_individual.insert_data("chr1", interval, value, gst::sorted);
    }

    // Query both groves
    gdt::interval query{0, 100};
    auto results_bulk = grove_bulk.intersect(query, "chr1");
    auto results_individual = grove_individual.intersect(query, "chr1");

    // Should have same number of results
    ASSERT_EQ(results_bulk.get_keys().size(), results_individual.get_keys().size());

    // Verify all elements match
    auto keys_bulk = results_bulk.get_keys();
    auto keys_individual = results_individual.get_keys();

    for (size_t i = 0; i < keys_bulk.size(); ++i) {
        EXPECT_EQ(keys_bulk[i]->get_value().get_start(),
                  keys_individual[i]->get_value().get_start());
        EXPECT_EQ(keys_bulk[i]->get_value().get_end(),
                  keys_individual[i]->get_value().get_end());
        EXPECT_EQ(keys_bulk[i]->get_data(),
                  keys_individual[i]->get_data());
    }
}

TEST(IntervalGroveTest, BulkInsertMultipleIndices) {
    gst::grove<gdt::interval, int> grove(5);

    // Create data for multiple chromosomes
    std::vector<std::pair<gdt::interval, int>> chr1_data = {
        {gdt::interval{10, 20}, 1},
        {gdt::interval{30, 40}, 2}
    };

    std::vector<std::pair<gdt::interval, int>> chr2_data = {
        {gdt::interval{50, 60}, 3},
        {gdt::interval{70, 80}, 4}
    };

    // Bulk insert to different indices with explicit sorted tag
    grove.insert_data("chr1", chr1_data, gst::sorted, gst::bulk);
    grove.insert_data("chr2", chr2_data, gst::sorted, gst::bulk);

    // Query chr1
    gdt::interval query{0, 100};
    auto results_chr1 = grove.intersect(query, "chr1");
    ASSERT_EQ(results_chr1.get_keys().size(), 2);
    EXPECT_EQ(results_chr1.get_keys()[0]->get_data(), 1);
    EXPECT_EQ(results_chr1.get_keys()[1]->get_data(), 2);

    // Query chr2
    auto results_chr2 = grove.intersect(query, "chr2");
    ASSERT_EQ(results_chr2.get_keys().size(), 2);
    EXPECT_EQ(results_chr2.get_keys()[0]->get_data(), 3);
    EXPECT_EQ(results_chr2.get_keys()[1]->get_data(), 4);
}

TEST(IntervalGroveTest, BulkInsertPreconditionViolation) {
    gst::grove<gdt::interval, int> grove(3);

    // Insert initial data
    std::vector<std::pair<gdt::interval, int>> initial_data = {
        {gdt::interval{10, 20}, 1},
        {gdt::interval{30, 40}, 2}
    };
    grove.insert_data("chr1", initial_data, gst::sorted, gst::bulk);

    // Try to insert data that violates precondition (not greater than existing max)
    std::vector<std::pair<gdt::interval, int>> invalid_data = {
        {gdt::interval{25, 35}, 3},  // Not strictly greater than existing [30, 40]
        {gdt::interval{50, 60}, 4}
    };

    // Should throw runtime_error due to precondition violation
    EXPECT_THROW(
        grove.insert_data("chr1", invalid_data, gst::sorted, gst::bulk),
        std::runtime_error
    );

    // Verify original data is still intact
    gdt::interval query{0, 100};
    auto results = grove.intersect(query, "chr1");
    ASSERT_EQ(results.get_keys().size(), 2);
    EXPECT_EQ(results.get_keys()[0]->get_data(), 1);
    EXPECT_EQ(results.get_keys()[1]->get_data(), 2);
}

TEST(IntervalGroveTest, BulkInsertAppendMode) {
    gst::grove<gdt::interval, int> grove(3);

    // Insert initial batch using bottom-up construction (empty grove)
    std::vector<std::pair<gdt::interval, int>> batch1 = {
        {gdt::interval{10, 20}, 1},
        {gdt::interval{30, 40}, 2},
        {gdt::interval{50, 60}, 3}
    };
    grove.insert_data("chr1", batch1, gst::sorted, gst::bulk);

    // Verify first batch
    gdt::interval query1{0, 100};
    auto results1 = grove.intersect(query1, "chr1");
    ASSERT_EQ(results1.get_keys().size(), 3);

    // Append second batch using rightmost-node append (grove has data)
    std::vector<std::pair<gdt::interval, int>> batch2 = {
        {gdt::interval{70, 80}, 4},
        {gdt::interval{90, 100}, 5},
        {gdt::interval{110, 120}, 6}
    };
    grove.insert_data("chr1", batch2, gst::sorted, gst::bulk);

    // Verify both batches are present
    gdt::interval query2{0, 150};
    auto results2 = grove.intersect(query2, "chr1");
    ASSERT_EQ(results2.get_keys().size(), 6);

    // Verify data values in sorted order
    EXPECT_EQ(results2.get_keys()[0]->get_data(), 1);
    EXPECT_EQ(results2.get_keys()[1]->get_data(), 2);
    EXPECT_EQ(results2.get_keys()[2]->get_data(), 3);
    EXPECT_EQ(results2.get_keys()[3]->get_data(), 4);
    EXPECT_EQ(results2.get_keys()[4]->get_data(), 5);
    EXPECT_EQ(results2.get_keys()[5]->get_data(), 6);

    // Verify intervals are correct
    EXPECT_EQ(results2.get_keys()[0]->get_value().get_start(), 10);
    EXPECT_EQ(results2.get_keys()[5]->get_value().get_end(), 120);
}

TEST(IntervalGroveTest, BulkInsertAppendModeMultipleBatches) {
    gst::grove<gdt::interval, int> grove(5);

    // Insert 5 batches sequentially
    for (int batch = 0; batch < 5; ++batch) {
        std::vector<std::pair<gdt::interval, int>> data;
        for (int i = 0; i < 10; ++i) {
            size_t start = static_cast<size_t>(batch * 100 + i * 10);
            size_t end = start + 5;
            int value = batch * 10 + i;
            data.emplace_back(gdt::interval{start, end}, value);
        }

        // First batch uses bottom-up, rest use append
        grove.insert_data("chr1", data, gst::sorted, gst::bulk);
    }

    // Verify all 50 intervals are present
    gdt::interval query{0, 500};
    auto results = grove.intersect(query, "chr1");
    ASSERT_EQ(results.get_keys().size(), 50);

    // Verify data values are in order
    for (size_t i = 0; i < results.get_keys().size(); ++i) {
        EXPECT_EQ(results.get_keys()[i]->get_data(), static_cast<int>(i));
    }

    // Verify first and last intervals
    EXPECT_EQ(results.get_keys()[0]->get_value().get_start(), 0);
    EXPECT_EQ(results.get_keys()[0]->get_value().get_end(), 5);
    EXPECT_EQ(results.get_keys()[49]->get_value().get_start(), 490);
    EXPECT_EQ(results.get_keys()[49]->get_value().get_end(), 495);
}

TEST(IntervalGroveTest, BulkInsertAppendWithUnsortedTag) {
    gst::grove<gdt::interval, int> grove(3);

    // Insert initial data
    std::vector<std::pair<gdt::interval, int>> batch1 = {
        {gdt::interval{10, 20}, 1},
        {gdt::interval{30, 40}, 2}
    };
    grove.insert_data("chr1", batch1, gst::sorted, gst::bulk);

    // Append unsorted data (sorts internally, then appended)
    std::vector<std::pair<gdt::interval, int>> batch2 = {
        {gdt::interval{70, 80}, 4},
        {gdt::interval{50, 60}, 3},  // Out of order
        {gdt::interval{90, 100}, 5}
    };
    grove.insert_data("chr1", batch2, gst::bulk);

    // Verify all data is present and correctly sorted
    gdt::interval query{0, 150};
    auto results = grove.intersect(query, "chr1");
    ASSERT_EQ(results.get_keys().size(), 5);

    // Verify sorted order
    EXPECT_EQ(results.get_keys()[0]->get_data(), 1);
    EXPECT_EQ(results.get_keys()[1]->get_data(), 2);
    EXPECT_EQ(results.get_keys()[2]->get_data(), 3);
    EXPECT_EQ(results.get_keys()[3]->get_data(), 4);
    EXPECT_EQ(results.get_keys()[4]->get_data(), 5);
}

TEST(IntervalGroveTest, BulkInsertAppendEmptyBatch) {
    gst::grove<gdt::interval, int> grove(3);

    // Insert initial data
    std::vector<std::pair<gdt::interval, int>> batch1 = {
        {gdt::interval{10, 20}, 1},
        {gdt::interval{30, 40}, 2}
    };
    grove.insert_data("chr1", batch1, gst::sorted, gst::bulk);

    // Try to append empty batch (should be no-op)
    std::vector<std::pair<gdt::interval, int>> empty_batch;
    grove.insert_data("chr1", empty_batch, gst::sorted, gst::bulk);

    // Verify original data is still intact
    gdt::interval query{0, 100};
    auto results = grove.intersect(query, "chr1");
    ASSERT_EQ(results.get_keys().size(), 2);
    EXPECT_EQ(results.get_keys()[0]->get_data(), 1);
    EXPECT_EQ(results.get_keys()[1]->get_data(), 2);
}

TEST(IntervalGroveTest, BulkInsertBottomUpReplacesEmptyRoot) {
    gst::grove<gdt::interval, int> grove(3);

    // First bulk insert on empty grove - uses bottom-up construction
    std::vector<std::pair<gdt::interval, int>> data1 = {
        {gdt::interval{10, 20}, 1},
        {gdt::interval{30, 40}, 2},
        {gdt::interval{50, 60}, 3}
    };
    grove.insert_data("chr1", data1, gst::sorted, gst::bulk);

    // Verify data inserted correctly via bottom-up
    gdt::interval query{0, 100};
    auto results = grove.intersect(query, "chr1");
    ASSERT_EQ(results.get_keys().size(), 3);
    EXPECT_EQ(results.get_keys()[0]->get_data(), 1);
    EXPECT_EQ(results.get_keys()[1]->get_data(), 2);
    EXPECT_EQ(results.get_keys()[2]->get_data(), 3);

    // Verify tree structure is valid by checking root exists
    auto* root = grove.get_root("chr1");
    ASSERT_NE(root, nullptr);
}