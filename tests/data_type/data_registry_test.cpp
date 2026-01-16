/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <sstream>
#include <string>

// Genogrove
#include <genogrove/data_type/data_registry.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace gdt = genogrove::data_type;

// Test struct for sample info
struct SampleInfo {
    std::string name;
    std::string tissue;
    int replicate;

    bool operator==(const SampleInfo& other) const {
        return name == other.name && tissue == other.tissue && replicate == other.replicate;
    }
};

// Another test struct to verify independent registries
struct ExperimentInfo {
    std::string experiment_id;
    int run_number;
};

class DataRegistryTest : public ::testing::Test {
  protected:
    void SetUp() override {
        // Reset registries before each test to ensure clean state
        gdt::data_registry<SampleInfo>::reset();
        gdt::data_registry<ExperimentInfo>::reset();
        gdt::data_registry<int>::reset();
        gdt::data_registry<std::string>::reset();
    }

    void TearDown() override {
        // Clean up after tests
        gdt::data_registry<SampleInfo>::reset();
        gdt::data_registry<ExperimentInfo>::reset();
        gdt::data_registry<int>::reset();
        gdt::data_registry<std::string>::reset();
    }
};

TEST_F(DataRegistryTest, SingletonAccess) {
    auto& reg1 = gdt::data_registry<SampleInfo>::instance();
    auto& reg2 = gdt::data_registry<SampleInfo>::instance();

    // Should be the same instance
    EXPECT_EQ(&reg1, &reg2);
}

TEST_F(DataRegistryTest, BasicRegisterAndGet) {
    auto& reg = gdt::data_registry<SampleInfo>::instance();

    SampleInfo sample{"sample1", "liver", 1};
    auto id = reg.register_data(sample);

    EXPECT_EQ(id, 0);

    const SampleInfo* retrieved = reg.get(id);
    ASSERT_NE(retrieved, nullptr);
    EXPECT_EQ(*retrieved, sample);
}

TEST_F(DataRegistryTest, MultipleRegistrations) {
    auto& reg = gdt::data_registry<SampleInfo>::instance();

    auto id1 = reg.register_data({"sample1", "liver", 1});
    auto id2 = reg.register_data({"sample2", "brain", 1});
    auto id3 = reg.register_data({"sample3", "heart", 2});

    // IDs should be sequential starting from 0
    EXPECT_EQ(id1, 0);
    EXPECT_EQ(id2, 1);
    EXPECT_EQ(id3, 2);

    // Verify data can be retrieved correctly
    EXPECT_EQ(reg.get(id1)->name, "sample1");
    EXPECT_EQ(reg.get(id2)->name, "sample2");
    EXPECT_EQ(reg.get(id3)->name, "sample3");
}

TEST_F(DataRegistryTest, InvalidIdReturnsNull) {
    auto& reg = gdt::data_registry<SampleInfo>::instance();

    // Empty registry - any ID is invalid
    EXPECT_EQ(reg.get(0), nullptr);
    EXPECT_EQ(reg.get(100), nullptr);
    EXPECT_EQ(reg.get(gdt::data_registry<SampleInfo>::null_id), nullptr);

    // Register one item
    reg.register_data({"sample1", "liver", 1});

    // ID 0 is now valid, others still invalid
    EXPECT_NE(reg.get(0), nullptr);
    EXPECT_EQ(reg.get(1), nullptr);
    EXPECT_EQ(reg.get(100), nullptr);
}

TEST_F(DataRegistryTest, ContainsMethod) {
    auto& reg = gdt::data_registry<SampleInfo>::instance();

    EXPECT_FALSE(reg.contains(0));
    EXPECT_FALSE(reg.contains(100));

    auto id = reg.register_data({"sample1", "liver", 1});

    EXPECT_TRUE(reg.contains(id));
    EXPECT_FALSE(reg.contains(1));
    EXPECT_FALSE(reg.contains(gdt::data_registry<SampleInfo>::null_id));
}

TEST_F(DataRegistryTest, SizeAndEmpty) {
    auto& reg = gdt::data_registry<SampleInfo>::instance();

    EXPECT_TRUE(reg.empty());
    EXPECT_EQ(reg.size(), 0);

    reg.register_data({"sample1", "liver", 1});
    EXPECT_FALSE(reg.empty());
    EXPECT_EQ(reg.size(), 1);

    reg.register_data({"sample2", "brain", 1});
    EXPECT_EQ(reg.size(), 2);

    reg.register_data({"sample3", "heart", 2});
    EXPECT_EQ(reg.size(), 3);
}

TEST_F(DataRegistryTest, ClearMethod) {
    auto& reg = gdt::data_registry<SampleInfo>::instance();

    reg.register_data({"sample1", "liver", 1});
    reg.register_data({"sample2", "brain", 1});

    EXPECT_EQ(reg.size(), 2);

    reg.clear();

    EXPECT_TRUE(reg.empty());
    EXPECT_EQ(reg.size(), 0);

    // Old IDs should now be invalid
    EXPECT_EQ(reg.get(0), nullptr);
    EXPECT_EQ(reg.get(1), nullptr);
}

TEST_F(DataRegistryTest, ResetMethod) {
    auto& reg = gdt::data_registry<SampleInfo>::instance();

    reg.register_data({"sample1", "liver", 1});
    EXPECT_EQ(reg.size(), 1);

    gdt::data_registry<SampleInfo>::reset();

    EXPECT_TRUE(reg.empty());
}

TEST_F(DataRegistryTest, IndependentRegistriesPerType) {
    auto& sample_reg = gdt::data_registry<SampleInfo>::instance();
    auto& experiment_reg = gdt::data_registry<ExperimentInfo>::instance();

    // Register in both registries
    auto liver_sample_id = sample_reg.register_data({
        "sample1",
        "liver",
        1});
    auto brain_sample_id = sample_reg.register_data({
        "sample2",
        "brain",
        1
    });
    auto exp_id = experiment_reg.register_data({"EXP001", 1});

    // Both should have ID 0 (independent ID spaces)
    EXPECT_EQ(liver_sample_id, 0);
    EXPECT_EQ(brain_sample_id, 1);
    EXPECT_EQ(exp_id, 0);

    // But they point to different registries
    EXPECT_EQ(sample_reg.size(), 2);
    EXPECT_EQ(experiment_reg.size(), 1);

    // Clear one shouldn't affect the other
    sample_reg.clear();
    EXPECT_TRUE(sample_reg.empty());
    EXPECT_FALSE(experiment_reg.empty());
}

TEST_F(DataRegistryTest, MutableAccess) {
    auto& reg = gdt::data_registry<SampleInfo>::instance();

    auto id = reg.register_data({"sample1", "liver", 1});

    // Modify via mutable get
    SampleInfo* info = reg.get(id);
    ASSERT_NE(info, nullptr);
    info->replicate = 42;

    // Verify modification persists
    const SampleInfo* retrieved = reg.get(id);
    EXPECT_EQ(retrieved->replicate, 42);
}

TEST_F(DataRegistryTest, PrimitiveTypes) {
    auto& int_reg = gdt::data_registry<int>::instance();
    auto& str_reg = gdt::data_registry<std::string>::instance();

    auto int_id = int_reg.register_data(42);
    auto str_id = str_reg.register_data("hello");

    EXPECT_EQ(*int_reg.get(int_id), 42);
    EXPECT_EQ(*str_reg.get(str_id), "hello");
}

TEST_F(DataRegistryTest, MoveSemantics) {
    auto& reg = gdt::data_registry<std::string>::instance();

    std::string original = "test_string";
    auto id = reg.register_data(std::move(original));

    // Original may be empty or in moved-from state
    // Retrieved value should be intact
    EXPECT_EQ(*reg.get(id), "test_string");
}

TEST_F(DataRegistryTest, NullIdConstant) {
    // null_id should be max uint32_t
    EXPECT_EQ(gdt::data_registry<int>::null_id, std::numeric_limits<uint32_t>::max());
    EXPECT_EQ(gdt::data_registry<SampleInfo>::null_id, std::numeric_limits<uint32_t>::max());
}

TEST_F(DataRegistryTest, IdsAfterClearRestartFromZero) {
    auto& reg = gdt::data_registry<SampleInfo>::instance();

    auto id1 = reg.register_data({"sample1", "liver", 1});
    auto id2 = reg.register_data({"sample2", "brain", 1});

    EXPECT_EQ(id1, 0);
    EXPECT_EQ(id2, 1);

    reg.clear();

    // After clear, IDs should restart from 0
    auto id3 = reg.register_data({"sample3", "heart", 1});
    EXPECT_EQ(id3, 0);
}

// --- Serialization Tests ---

TEST_F(DataRegistryTest, SerializeDeserializeInts) {
    auto& reg = gdt::data_registry<int>::instance();

    reg.register_data(10);
    reg.register_data(20);
    reg.register_data(30);

    // Serialize
    std::stringstream ss;
    reg.serialize(ss);

    // Clear and deserialize
    reg.clear();
    EXPECT_TRUE(reg.empty());

    ss.seekg(0);
    gdt::data_registry<int>::deserialize(ss);

    // Verify restored data
    EXPECT_EQ(reg.size(), 3);
    EXPECT_EQ(*reg.get(0), 10);
    EXPECT_EQ(*reg.get(1), 20);
    EXPECT_EQ(*reg.get(2), 30);
}

TEST_F(DataRegistryTest, SerializeDeserializeStrings) {
    auto& reg = gdt::data_registry<std::string>::instance();

    reg.register_data("first");
    reg.register_data("second");
    reg.register_data("third with spaces");

    // Serialize
    std::stringstream ss;
    reg.serialize(ss);

    // Clear and deserialize
    reg.clear();
    EXPECT_TRUE(reg.empty());

    ss.seekg(0);
    gdt::data_registry<std::string>::deserialize(ss);

    // Verify restored data
    EXPECT_EQ(reg.size(), 3);
    EXPECT_EQ(*reg.get(0), "first");
    EXPECT_EQ(*reg.get(1), "second");
    EXPECT_EQ(*reg.get(2), "third with spaces");
}

TEST_F(DataRegistryTest, SerializeDeserializeEmptyRegistry) {
    auto& reg = gdt::data_registry<int>::instance();

    // Serialize empty registry
    std::stringstream ss;
    reg.serialize(ss);

    // Add some data (simulating different state)
    reg.register_data(42);
    EXPECT_EQ(reg.size(), 1);

    // Deserialize should restore empty state
    ss.seekg(0);
    gdt::data_registry<int>::deserialize(ss);

    EXPECT_TRUE(reg.empty());
}

TEST_F(DataRegistryTest, DeserializeReplacesExistingData) {
    auto& reg = gdt::data_registry<int>::instance();

    // Initial state
    reg.register_data(100);
    reg.register_data(200);

    // Serialize
    std::stringstream ss;
    reg.serialize(ss);

    // Modify registry
    reg.register_data(300);
    reg.register_data(400);
    EXPECT_EQ(reg.size(), 4);

    // Deserialize should replace all data
    ss.seekg(0);
    gdt::data_registry<int>::deserialize(ss);

    EXPECT_EQ(reg.size(), 2);
    EXPECT_EQ(*reg.get(0), 100);
    EXPECT_EQ(*reg.get(1), 200);
    EXPECT_EQ(reg.get(2), nullptr);  // Old ID 2 no longer valid
}

// --- Combined Registry + Grove Serialization Test ---

namespace gs = genogrove::structure;

TEST_F(DataRegistryTest, CombinedRegistryAndGroveSerialization) {
    // This test demonstrates the pattern for serializing registry + grove together
    // to a single stream, allowing the entire data structure to be saved/loaded as one unit.

    auto& reg = gdt::data_registry<std::string>::instance();

    // Register sample names in the registry
    uint32_t sample1_id = reg.register_data("SampleA_liver");
    uint32_t sample2_id = reg.register_data("SampleB_brain");
    uint32_t sample3_id = reg.register_data("SampleC_heart");
    uint32_t sample4_id = reg.register_data("SampleD_kidney");
    uint32_t sample5_id = reg.register_data("SampleE_lung");

    gs::grove<gdt::interval, uint32_t> grove(3);

    // Insert 5 intervals on chr1 - this will cause multiple splits with order=3
    grove.insert_data("chr1", gdt::interval(100, 200), sample1_id, gs::sorted);
    grove.insert_data("chr1", gdt::interval(300, 400), sample2_id, gs::sorted);
    grove.insert_data("chr1", gdt::interval(500, 600), sample3_id, gs::sorted);
    grove.insert_data("chr1", gdt::interval(700, 800), sample4_id, gs::sorted);
    grove.insert_data("chr1", gdt::interval(900, 1000), sample5_id, gs::sorted);

    // Insert on chr2 as well
    grove.insert_data("chr2", gdt::interval(1000, 1100), sample3_id, gs::sorted);

    // Verify we can resolve registry IDs from grove data
    gdt::interval query(150, 250);
    auto results = grove.intersect(query, "chr1");
    ASSERT_EQ(results.get_keys().size(), 1);

    uint32_t stored_id = results.get_keys()[0]->get_data();
    EXPECT_EQ(stored_id, sample1_id);
    EXPECT_EQ(*reg.get(stored_id), "SampleA_liver");

    // === Serialize both to the same stream ===
    std::stringstream ss;

    // 1. Serialize registry FIRST (so IDs are available when grove is loaded)
    reg.serialize(ss);

    // 2. Serialize grove SECOND
    grove.serialize(ss);

    // === Clear both ===
    reg.clear();
    EXPECT_TRUE(reg.empty());

    // === Deserialize in the same order ===
    ss.seekg(0);

    // 1. Deserialize registry FIRST
    auto& restored_reg = gdt::data_registry<std::string>::deserialize(ss);

    // Verify registry is restored
    EXPECT_EQ(reg.size(), 5);
    EXPECT_EQ(*reg.get(0), "SampleA_liver");
    EXPECT_EQ(*reg.get(1), "SampleB_brain");
    EXPECT_EQ(*reg.get(2), "SampleC_heart");
    EXPECT_EQ(*reg.get(3), "SampleD_kidney");
    EXPECT_EQ(*reg.get(4), "SampleE_lung");

    // 2. Deserialize grove
    auto restored_grove = gs::grove<gdt::interval, uint32_t>::deserialize(ss);

    // Verify grove structure is restored
    EXPECT_EQ(restored_grove.get_order(), 3);
    EXPECT_EQ(restored_grove.get_root_nodes().size(), 2);  // chr1 and chr2

    // Query multiple intervals to verify tree structure and leaf linking work
    gdt::interval query1(150, 250);
    auto results1 = restored_grove.intersect(query1, "chr1");
    ASSERT_EQ(results1.get_keys().size(), 1);
    EXPECT_EQ(*reg.get(results1.get_keys()[0]->get_data()), "SampleA_liver");

    gdt::interval query2(350, 450);
    auto results2 = restored_grove.intersect(query2, "chr1");
    ASSERT_EQ(results2.get_keys().size(), 1);
    EXPECT_EQ(*reg.get(results2.get_keys()[0]->get_data()), "SampleB_brain");

    gdt::interval query3(750, 850);
    auto results3 = restored_grove.intersect(query3, "chr1");
    ASSERT_EQ(results3.get_keys().size(), 1);
    EXPECT_EQ(*reg.get(results3.get_keys()[0]->get_data()), "SampleD_kidney");

    gdt::interval query4(950, 1050);
    auto results4 = restored_grove.intersect(query4, "chr1");
    ASSERT_EQ(results4.get_keys().size(), 1);
    EXPECT_EQ(*reg.get(results4.get_keys()[0]->get_data()), "SampleE_lung");

    // Query chr2 as well
    gdt::interval query5(1050, 1150);
    auto chr2_results = restored_grove.intersect(query5, "chr2");
    ASSERT_EQ(chr2_results.get_keys().size(), 1);
    EXPECT_EQ(*reg.get(chr2_results.get_keys()[0]->get_data()), "SampleC_heart");
}