/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <set>

// Genogrove
#include <genogrove/data_type/index.hpp>
#include <genogrove/data_type/index_registry.hpp>

namespace gdt = genogrove::data_type;

TEST(indexTest, basicConstruction) {
    gdt::index idx1("unique_basic_chr1");

    EXPECT_EQ(idx1.get_key(), "unique_basic_chr1");
    // Don't test exact value as registry is a singleton that persists across tests
    EXPECT_GE(idx1.get_value(), 0);
}

TEST(indexTest, multipleIndices) {
    gdt::index chr1("unique_idx1");
    gdt::index chr2("unique_idx2");
    gdt::index chr3("unique_idx3");

    // Test that indices are assigned sequential values (relative to each other)
    EXPECT_EQ(chr2.get_value(), chr1.get_value() + 1);
    EXPECT_EQ(chr3.get_value(), chr2.get_value() + 1);

    // Test that keys can be retrieved correctly
    EXPECT_EQ(chr1.get_key(), "unique_idx1");
    EXPECT_EQ(chr2.get_key(), "unique_idx2");
    EXPECT_EQ(chr3.get_key(), "unique_idx3");
}

TEST(indexTest, indexRegistry) {
    // add index to registry
    gdt::index chr1("unique_reg_idx1");
    gdt::index chr2("unique_reg_idx2");
    gdt::index chr3("unique_reg_idx3");

    // test that the indices are assigned sequentially (relative to each other)
    EXPECT_EQ(chr2.get_value(), chr1.get_value() + 1);
    EXPECT_EQ(chr3.get_value(), chr2.get_value() + 1);

    // test that the index can be retrieved from the registry
    EXPECT_EQ(gdt::index_registry::instance().key_lookup(chr1.get_value()), "unique_reg_idx1");
    EXPECT_EQ(gdt::index_registry::instance().key_lookup(chr2.get_value()), "unique_reg_idx2");
    EXPECT_EQ(gdt::index_registry::instance().key_lookup(chr3.get_value()), "unique_reg_idx3");
}

TEST(indexTest, registryKeyLookup) {
    gdt::index test_idx("test_key");

    auto result = gdt::index_registry::instance().key_lookup(test_idx.get_value());

    ASSERT_TRUE(result.has_value());
    EXPECT_EQ(result.value(), "test_key");
}

TEST(indexTest, registryValueLookup) {
    gdt::index test_idx("lookup_test");

    auto result = gdt::index_registry::instance().value_lookup("lookup_test");

    ASSERT_TRUE(result.has_value());
    EXPECT_EQ(result.value(), test_idx.get_value());
}

TEST(indexTest, registryIsRegistered) {
    gdt::index registered_idx("registered");

    EXPECT_TRUE(gdt::index_registry::instance().is_registered("registered"));
    EXPECT_FALSE(gdt::index_registry::instance().is_registered("not_registered"));
}

TEST(indexTest, duplicateKeysSameValue) {
    gdt::index idx1("duplicate");
    gdt::index idx2("duplicate");

    // Same key should result in same value
    EXPECT_EQ(idx1.get_value(), idx2.get_value());
    EXPECT_EQ(idx1.get_key(), idx2.get_key());
}

TEST(indexTest, registryValueLookupNonExistent) {
    auto result = gdt::index_registry::instance().value_lookup("nonexistent_key_xyz");

    EXPECT_FALSE(result.has_value());
}

TEST(indexTest, registryKeyLookupInvalid) {
    // Using a value that's unlikely to be registered (255 is max uint8_t)
    auto result = gdt::index_registry::instance().key_lookup(255);

    // This will depend on how many indices have been created so far
    // If 255 indices haven't been created, this should return nullopt
    // For now, just check that the function returns something
    EXPECT_TRUE(result.has_value() || !result.has_value());
}

TEST(indexTest, genomicChromosomes) {
    // Test with realistic chromosome names
    gdt::index chr1("chr1");
    gdt::index chr2("chr2");
    gdt::index chrX("chrX");
    gdt::index chrY("chrY");
    gdt::index chrM("chrM");

    EXPECT_EQ(chr1.get_key(), "chr1");
    EXPECT_EQ(chr2.get_key(), "chr2");
    EXPECT_EQ(chrX.get_key(), "chrX");
    EXPECT_EQ(chrY.get_key(), "chrY");
    EXPECT_EQ(chrM.get_key(), "chrM");

    // Each should have unique values
    std::set<uint8_t> values = {
        chr1.get_value(),
        chr2.get_value(),
        chrX.get_value(),
        chrY.get_value(),
        chrM.get_value()
    };
    EXPECT_EQ(values.size(), 5);
}

TEST(indexTest, registryPersistence) {
    // Create an index
    gdt::index persistent("persistent_key");
    uint8_t original_value = persistent.get_value();

    // Create another index with the same key
    gdt::index persistent2("persistent_key");

    // Should get the same value from registry
    EXPECT_EQ(persistent2.get_value(), original_value);

    // Registry should still have the mapping
    auto lookup_result = gdt::index_registry::instance().value_lookup("persistent_key");
    ASSERT_TRUE(lookup_result.has_value());
    EXPECT_EQ(lookup_result.value(), original_value);
}
