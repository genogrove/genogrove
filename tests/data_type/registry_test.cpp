/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <atomic>
#include <functional>
#include <limits>
#include <set>
#include <sstream>
#include <string>
#include <thread>
#include <tuple>
#include <vector>

// Genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/registry.hpp>
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

    bool operator==(const ExperimentInfo& other) const {
        return experiment_id == other.experiment_id && run_number == other.run_number;
    }
};

namespace std {
template<>
struct hash<SampleInfo> {
    std::size_t operator()(const SampleInfo& s) const noexcept {
        std::size_t h1 = std::hash<std::string>{}(s.name);
        std::size_t h2 = std::hash<std::string>{}(s.tissue);
        std::size_t h3 = std::hash<int>{}(s.replicate);
        return h1 ^ (h2 << 1) ^ (h3 << 2);
    }
};

template<>
struct hash<ExperimentInfo> {
    std::size_t operator()(const ExperimentInfo& e) const noexcept {
        std::size_t h1 = std::hash<std::string>{}(e.experiment_id);
        std::size_t h2 = std::hash<int>{}(e.run_number);
        return h1 ^ (h2 << 1);
    }
};
} // namespace std

class RegistryTest : public ::testing::Test {
  protected:
    void SetUp() override {
        gdt::registry<SampleInfo>::reset();
        gdt::registry<ExperimentInfo>::reset();
        gdt::registry<int>::reset();
        gdt::registry<std::string>::reset();
    }

    void TearDown() override {
        gdt::registry<SampleInfo>::reset();
        gdt::registry<ExperimentInfo>::reset();
        gdt::registry<int>::reset();
        gdt::registry<std::string>::reset();
    }
};

TEST_F(RegistryTest, SingletonAccess) {
    auto& reg1 = gdt::registry<SampleInfo>::instance();
    auto& reg2 = gdt::registry<SampleInfo>::instance();

    EXPECT_EQ(&reg1, &reg2);
}

TEST_F(RegistryTest, BasicInternAndGet) {
    auto& reg = gdt::registry<SampleInfo>::instance();

    SampleInfo sample{"sample1", "liver", 1};
    auto id = reg.intern(sample);

    EXPECT_EQ(id, 0);
    EXPECT_EQ(reg.get(id), sample);
}

TEST_F(RegistryTest, MultipleDistinctInternsAllocateSequentialIds) {
    auto& reg = gdt::registry<SampleInfo>::instance();

    auto id1 = reg.intern({"sample1", "liver", 1});
    auto id2 = reg.intern({"sample2", "brain", 1});
    auto id3 = reg.intern({"sample3", "heart", 2});

    EXPECT_EQ(id1, 0);
    EXPECT_EQ(id2, 1);
    EXPECT_EQ(id3, 2);

    EXPECT_EQ(reg.get(id1).name, "sample1");
    EXPECT_EQ(reg.get(id2).name, "sample2");
    EXPECT_EQ(reg.get(id3).name, "sample3");
}

TEST_F(RegistryTest, InternIsIdempotent) {
    auto& reg = gdt::registry<std::string>::instance();

    auto a = reg.intern("chr1");
    auto b = reg.intern("chr1");
    auto c = reg.intern("chr1");

    EXPECT_EQ(a, b);
    EXPECT_EQ(b, c);
    EXPECT_EQ(reg.size(), 1u);
}

TEST_F(RegistryTest, InternDeduplicatesAcrossInterleavedCalls) {
    auto& reg = gdt::registry<std::string>::instance();

    auto a1 = reg.intern("chr1");
    auto b1 = reg.intern("chr2");
    auto a2 = reg.intern("chr1");
    auto c1 = reg.intern("chr3");
    auto b2 = reg.intern("chr2");

    EXPECT_EQ(a1, a2);
    EXPECT_EQ(b1, b2);
    EXPECT_NE(a1, b1);
    EXPECT_NE(a1, c1);
    EXPECT_EQ(reg.size(), 3u);
}

TEST_F(RegistryTest, InternDeduplicatesComplexValues) {
    auto& reg = gdt::registry<SampleInfo>::instance();

    SampleInfo s{"sample1", "liver", 1};
    auto id1 = reg.intern(s);
    auto id2 = reg.intern(s);
    auto id3 = reg.intern({"sample1", "liver", 1});

    EXPECT_EQ(id1, id2);
    EXPECT_EQ(id1, id3);
    EXPECT_EQ(reg.size(), 1u);
}

TEST_F(RegistryTest, FindReturnsIdForExistingValue) {
    auto& reg = gdt::registry<std::string>::instance();

    auto id = reg.intern("chr1");
    auto found = reg.find("chr1");

    ASSERT_TRUE(found.has_value());
    EXPECT_EQ(*found, id);
}

TEST_F(RegistryTest, FindReturnsNulloptForMissingValue) {
    auto& reg = gdt::registry<std::string>::instance();

    EXPECT_FALSE(reg.find("chr1").has_value());

    std::ignore = reg.intern("chr1");
    EXPECT_FALSE(reg.find("chr2").has_value());
}

TEST_F(RegistryTest, FindDoesNotInsert) {
    auto& reg = gdt::registry<std::string>::instance();

    EXPECT_FALSE(reg.find("chr1").has_value());
    EXPECT_EQ(reg.size(), 0u);
    EXPECT_TRUE(reg.empty());
}

TEST_F(RegistryTest, InvalidIdThrows) {
    auto& reg = gdt::registry<SampleInfo>::instance();

    EXPECT_THROW(reg.get(0), std::out_of_range);
    EXPECT_THROW(reg.get(100), std::out_of_range);
    EXPECT_THROW(reg.get(gdt::registry<SampleInfo>::null_id), std::out_of_range);

    std::ignore = reg.intern({"sample1", "liver", 1});

    EXPECT_NO_THROW(reg.get(0));
    EXPECT_THROW(reg.get(1), std::out_of_range);
    EXPECT_THROW(reg.get(100), std::out_of_range);
}

TEST_F(RegistryTest, ContainsMethod) {
    auto& reg = gdt::registry<SampleInfo>::instance();

    EXPECT_FALSE(reg.contains(0));
    EXPECT_FALSE(reg.contains(100));

    auto id = reg.intern({"sample1", "liver", 1});

    EXPECT_TRUE(reg.contains(id));
    EXPECT_FALSE(reg.contains(1));
    EXPECT_FALSE(reg.contains(gdt::registry<SampleInfo>::null_id));
}

TEST_F(RegistryTest, SizeAndEmpty) {
    auto& reg = gdt::registry<SampleInfo>::instance();

    EXPECT_TRUE(reg.empty());
    EXPECT_EQ(reg.size(), 0u);

    std::ignore = reg.intern({"sample1", "liver", 1});
    EXPECT_FALSE(reg.empty());
    EXPECT_EQ(reg.size(), 1u);

    std::ignore = reg.intern({"sample2", "brain", 1});
    EXPECT_EQ(reg.size(), 2u);

    std::ignore = reg.intern({"sample3", "heart", 2});
    EXPECT_EQ(reg.size(), 3u);
}

TEST_F(RegistryTest, ClearMethod) {
    auto& reg = gdt::registry<SampleInfo>::instance();

    std::ignore = reg.intern({"sample1", "liver", 1});
    std::ignore = reg.intern({"sample2", "brain", 1});

    EXPECT_EQ(reg.size(), 2u);

    reg.clear();

    EXPECT_TRUE(reg.empty());
    EXPECT_EQ(reg.size(), 0u);

    EXPECT_THROW(reg.get(0), std::out_of_range);
    EXPECT_THROW(reg.get(1), std::out_of_range);

    // find() should also be cleared
    EXPECT_FALSE(reg.find({"sample1", "liver", 1}).has_value());
}

TEST_F(RegistryTest, ResetMethod) {
    auto& reg = gdt::registry<SampleInfo>::instance();

    std::ignore = reg.intern({"sample1", "liver", 1});
    EXPECT_EQ(reg.size(), 1u);

    gdt::registry<SampleInfo>::reset();

    EXPECT_TRUE(reg.empty());
}

TEST_F(RegistryTest, IndependentRegistriesPerType) {
    auto& sample_reg = gdt::registry<SampleInfo>::instance();
    auto& experiment_reg = gdt::registry<ExperimentInfo>::instance();

    auto liver_sample_id = sample_reg.intern({"sample1", "liver", 1});
    auto brain_sample_id = sample_reg.intern({"sample2", "brain", 1});
    auto exp_id = experiment_reg.intern({"EXP001", 1});

    EXPECT_EQ(liver_sample_id, 0);
    EXPECT_EQ(brain_sample_id, 1);
    EXPECT_EQ(exp_id, 0);

    EXPECT_EQ(sample_reg.size(), 2u);
    EXPECT_EQ(experiment_reg.size(), 1u);

    sample_reg.clear();
    EXPECT_TRUE(sample_reg.empty());
    EXPECT_FALSE(experiment_reg.empty());
}

TEST_F(RegistryTest, PrimitiveTypes) {
    auto& int_reg = gdt::registry<int>::instance();
    auto& str_reg = gdt::registry<std::string>::instance();

    auto int_id = int_reg.intern(42);
    auto str_id = str_reg.intern("hello");

    EXPECT_EQ(int_reg.get(int_id), 42);
    EXPECT_EQ(str_reg.get(str_id), "hello");

    // Dedup works for primitives too
    EXPECT_EQ(int_reg.intern(42), int_id);
    EXPECT_EQ(str_reg.intern("hello"), str_id);
}

TEST_F(RegistryTest, NullIdConstant) {
    EXPECT_EQ(gdt::registry<int>::null_id, std::numeric_limits<uint32_t>::max());
    EXPECT_EQ(gdt::registry<SampleInfo>::null_id, std::numeric_limits<uint32_t>::max());
}

TEST_F(RegistryTest, IdsAfterClearRestartFromZero) {
    auto& reg = gdt::registry<SampleInfo>::instance();

    auto id1 = reg.intern({"sample1", "liver", 1});
    auto id2 = reg.intern({"sample2", "brain", 1});

    EXPECT_EQ(id1, 0);
    EXPECT_EQ(id2, 1);

    reg.clear();

    auto id3 = reg.intern({"sample3", "heart", 1});
    EXPECT_EQ(id3, 0);
}

// --- Serialization Tests ---

TEST_F(RegistryTest, SerializeDeserializeInts) {
    auto& reg = gdt::registry<int>::instance();

    std::ignore = reg.intern(10);
    std::ignore = reg.intern(20);
    std::ignore = reg.intern(30);

    std::stringstream ss;
    reg.serialize(ss);

    reg.clear();
    EXPECT_TRUE(reg.empty());

    ss.seekg(0);
    gdt::registry<int>::deserialize(ss);

    EXPECT_EQ(reg.size(), 3u);
    EXPECT_EQ(reg.get(0), 10);
    EXPECT_EQ(reg.get(1), 20);
    EXPECT_EQ(reg.get(2), 30);
}

TEST_F(RegistryTest, SerializeDeserializeStrings) {
    auto& reg = gdt::registry<std::string>::instance();

    std::ignore = reg.intern("first");
    std::ignore = reg.intern("second");
    std::ignore = reg.intern("third with spaces");

    std::stringstream ss;
    reg.serialize(ss);

    reg.clear();
    EXPECT_TRUE(reg.empty());

    ss.seekg(0);
    gdt::registry<std::string>::deserialize(ss);

    EXPECT_EQ(reg.size(), 3u);
    EXPECT_EQ(reg.get(0), "first");
    EXPECT_EQ(reg.get(1), "second");
    EXPECT_EQ(reg.get(2), "third with spaces");
}

TEST_F(RegistryTest, SerializeDeserializeRebuildsLookup) {
    auto& reg = gdt::registry<std::string>::instance();

    auto id_a = reg.intern("alpha");
    auto id_b = reg.intern("beta");

    std::stringstream ss;
    reg.serialize(ss);

    reg.clear();
    ss.seekg(0);
    gdt::registry<std::string>::deserialize(ss);

    // Interning a previously-known value after deserialize must return the
    // original id, not allocate a new one — proves the lookup map was rebuilt.
    EXPECT_EQ(reg.intern("alpha"), id_a);
    EXPECT_EQ(reg.intern("beta"), id_b);
    EXPECT_EQ(reg.size(), 2u);

    // find() must also work
    auto found = reg.find("alpha");
    ASSERT_TRUE(found.has_value());
    EXPECT_EQ(*found, id_a);
}

TEST_F(RegistryTest, SerializeDeserializeEmptyRegistry) {
    auto& reg = gdt::registry<int>::instance();

    std::stringstream ss;
    reg.serialize(ss);

    std::ignore = reg.intern(42);
    EXPECT_EQ(reg.size(), 1u);

    ss.seekg(0);
    gdt::registry<int>::deserialize(ss);

    EXPECT_TRUE(reg.empty());
}

TEST_F(RegistryTest, DeserializeReplacesExistingData) {
    auto& reg = gdt::registry<int>::instance();

    std::ignore = reg.intern(100);
    std::ignore = reg.intern(200);

    std::stringstream ss;
    reg.serialize(ss);

    std::ignore = reg.intern(300);
    std::ignore = reg.intern(400);
    EXPECT_EQ(reg.size(), 4u);

    ss.seekg(0);
    gdt::registry<int>::deserialize(ss);

    EXPECT_EQ(reg.size(), 2u);
    EXPECT_EQ(reg.get(0), 100);
    EXPECT_EQ(reg.get(1), 200);
    EXPECT_THROW(reg.get(2), std::out_of_range);
}

// --- Thread-safety smoke test ---

TEST_F(RegistryTest, ConcurrentInternIsRaceFree) {
    auto& reg = gdt::registry<std::string>::instance();

    constexpr int num_threads = 8;
    constexpr int per_thread = 1000;
    // 32 distinct values; many threads collide on the same values.
    constexpr int distinct_values = 32;

    std::vector<std::thread> threads;
    std::vector<std::vector<uint32_t>> results(num_threads);
    for (int t = 0; t < num_threads; ++t) {
        threads.emplace_back([&, t]() {
            results[t].reserve(per_thread);
            for (int i = 0; i < per_thread; ++i) {
                std::string value = "value_" + std::to_string((t * 7 + i) % distinct_values);
                results[t].push_back(reg.intern(value));
            }
        });
    }
    for (auto& th : threads) th.join();

    // Exactly `distinct_values` unique entries must exist.
    EXPECT_EQ(reg.size(), static_cast<std::size_t>(distinct_values));

    // Every returned id must round-trip through get() to the expected value.
    for (int t = 0; t < num_threads; ++t) {
        for (int i = 0; i < per_thread; ++i) {
            std::string expected = "value_" + std::to_string((t * 7 + i) % distinct_values);
            EXPECT_EQ(reg.get(results[t][i]), expected);
        }
    }

    // Each distinct value must have a single canonical id.
    std::set<uint32_t> seen_ids;
    for (int v = 0; v < distinct_values; ++v) {
        std::string value = "value_" + std::to_string(v);
        auto found = reg.find(value);
        ASSERT_TRUE(found.has_value());
        EXPECT_TRUE(seen_ids.insert(*found).second);
    }
}

// --- Combined Registry + Grove Serialization Test ---

namespace gs = genogrove::structure;

TEST_F(RegistryTest, CombinedRegistryAndGroveSerialization) {
    auto& reg = gdt::registry<std::string>::instance();

    uint32_t sample1_id = reg.intern("SampleA_liver");
    uint32_t sample2_id = reg.intern("SampleB_brain");
    uint32_t sample3_id = reg.intern("SampleC_heart");
    uint32_t sample4_id = reg.intern("SampleD_kidney");
    uint32_t sample5_id = reg.intern("SampleE_lung");

    gs::grove<gdt::interval, uint32_t> grove(3);

    grove.insert_data("chr1", gdt::interval(100, 200), sample1_id, gs::sorted);
    grove.insert_data("chr1", gdt::interval(300, 400), sample2_id, gs::sorted);
    grove.insert_data("chr1", gdt::interval(500, 600), sample3_id, gs::sorted);
    grove.insert_data("chr1", gdt::interval(700, 800), sample4_id, gs::sorted);
    grove.insert_data("chr1", gdt::interval(900, 1000), sample5_id, gs::sorted);
    grove.insert_data("chr2", gdt::interval(1000, 1100), sample3_id, gs::sorted);

    gdt::interval query(150, 250);
    auto results = grove.intersect(query, "chr1");
    ASSERT_EQ(results.get_keys().size(), 1u);

    uint32_t stored_id = results.get_keys()[0]->get_data();
    EXPECT_EQ(stored_id, sample1_id);
    EXPECT_EQ(reg.get(stored_id), "SampleA_liver");

    std::stringstream ss;
    reg.serialize(ss);
    grove.serialize(ss);

    reg.clear();
    EXPECT_TRUE(reg.empty());

    ss.seekg(0);

    auto& restored_reg = gdt::registry<std::string>::deserialize(ss);

    EXPECT_EQ(restored_reg.size(), 5u);
    EXPECT_EQ(restored_reg.get(0), "SampleA_liver");
    EXPECT_EQ(restored_reg.get(1), "SampleB_brain");
    EXPECT_EQ(restored_reg.get(2), "SampleC_heart");
    EXPECT_EQ(restored_reg.get(3), "SampleD_kidney");
    EXPECT_EQ(restored_reg.get(4), "SampleE_lung");

    auto restored_grove = gs::grove<gdt::interval, uint32_t>::deserialize(ss);

    EXPECT_EQ(restored_grove.get_order(), 3);
    EXPECT_EQ(restored_grove.get_root_nodes().size(), 2u);

    gdt::interval query1(150, 250);
    auto results1 = restored_grove.intersect(query1, "chr1");
    ASSERT_EQ(results1.get_keys().size(), 1u);
    EXPECT_EQ(restored_reg.get(results1.get_keys()[0]->get_data()), "SampleA_liver");

    gdt::interval query2(350, 450);
    auto results2 = restored_grove.intersect(query2, "chr1");
    ASSERT_EQ(results2.get_keys().size(), 1u);
    EXPECT_EQ(restored_reg.get(results2.get_keys()[0]->get_data()), "SampleB_brain");

    gdt::interval query3(750, 850);
    auto results3 = restored_grove.intersect(query3, "chr1");
    ASSERT_EQ(results3.get_keys().size(), 1u);
    EXPECT_EQ(restored_reg.get(results3.get_keys()[0]->get_data()), "SampleD_kidney");

    gdt::interval query4(950, 1050);
    auto results4 = restored_grove.intersect(query4, "chr1");
    ASSERT_EQ(results4.get_keys().size(), 1u);
    EXPECT_EQ(restored_reg.get(results4.get_keys()[0]->get_data()), "SampleE_lung");

    gdt::interval query5(1050, 1150);
    auto chr2_results = restored_grove.intersect(query5, "chr2");
    ASSERT_EQ(chr2_results.get_keys().size(), 1u);
    EXPECT_EQ(restored_reg.get(chr2_results.get_keys()[0]->get_data()), "SampleC_heart");
}

// --- Serialization error path tests ---

TEST_F(RegistryTest, SerializeToFailedStream) {
    auto& reg = gdt::registry<int>::instance();
    std::ignore = reg.intern(42);

    std::stringstream ss;
    ss.setstate(std::ios::failbit);
    EXPECT_THROW(reg.serialize(ss), std::runtime_error);
}

TEST_F(RegistryTest, DeserializeFromEmptyStream) {
    std::stringstream ss;
    EXPECT_THROW({
        [[maybe_unused]] auto& result = gdt::registry<int>::deserialize(ss);
    }, std::runtime_error);
}