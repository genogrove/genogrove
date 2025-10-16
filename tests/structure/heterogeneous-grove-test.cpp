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

// Standard
#include <variant>
#include <string>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace gdt = genogrove::data_type;
namespace gst = genogrove::structure;

// Define variant type for testing
using TestVariant = std::variant<std::monostate, int, double, std::string>;

TEST(heterogeneous_grove_test, variant_insertion_and_query) {
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

TEST(heterogeneous_grove_test, variant_type_filtering) {
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

TEST(heterogeneous_grove_test, variant_with_monostate) {
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
struct CustomData {
    int id;
    double value;

    bool operator==(const CustomData& other) const {
        return id == other.id && value == other.value;
    }
};

// Specialization for custom struct serialization
namespace genogrove::data_type {
    template<>
    struct serialization_traits<CustomData> {
        static void serialize(std::ostream& os, const CustomData& data) {
            os.write(reinterpret_cast<const char*>(&data.id), sizeof(data.id));
            os.write(reinterpret_cast<const char*>(&data.value), sizeof(data.value));
        }

        static CustomData deserialize(std::istream& is) {
            CustomData data;
            is.read(reinterpret_cast<char*>(&data.id), sizeof(data.id));
            is.read(reinterpret_cast<char*>(&data.value), sizeof(data.value));
            return data;
        }
    };
}

TEST(heterogeneous_grove_test, variant_with_custom_struct) {
    using CustomVariant = std::variant<std::monostate, int, CustomData>;
    gst::grove<gdt::interval, CustomVariant> grove(3);

    // Insert custom struct
    CustomData custom{42, 3.14};
    grove.insert_data("chr1", gdt::interval{10, 20}, custom);

    // Insert int
    grove.insert_data("chr1", gdt::interval{30, 40}, 100);

    // Query
    gdt::interval query{5, 45};
    auto results = grove.intersect(query, "chr1");

    ASSERT_EQ(results.get_keys().size(), 2);

    // Verify custom data
    EXPECT_TRUE(std::holds_alternative<CustomData>(results.get_keys()[0]->get_data()));
    auto retrieved = std::get<CustomData>(results.get_keys()[0]->get_data());
    EXPECT_EQ(retrieved.id, 42);
    EXPECT_DOUBLE_EQ(retrieved.value, 3.14);

    // Verify int data
    EXPECT_TRUE(std::holds_alternative<int>(results.get_keys()[1]->get_data()));
    EXPECT_EQ(std::get<int>(results.get_keys()[1]->get_data()), 100);
}
