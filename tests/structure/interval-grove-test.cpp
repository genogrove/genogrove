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

TEST(IntervalGroveTest, IntervalCreation) {
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



