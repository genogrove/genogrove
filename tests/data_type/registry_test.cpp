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
    // Resets only the default-tag registries used across most tests.
    // Tests that intern into tagged registries (registry<T, Tag, ...>) must
    // reset those singletons themselves — at both setup and teardown — since
    // this fixture cannot enumerate user-added tags. See e.g.
    // `TaggedRegistriesAreIndependentSingletons` for the pattern.
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

TEST_F(RegistryTest, TaggedRegistriesAreIndependentSingletons) {
    // Phantom tags discriminate singletons that share the same value type T,
    // so independent pools (e.g. transcript ids vs sample names) do not
    // collide on a shared singleton.
    using transcript_registry = gdt::registry<std::string, struct transcript_tag>;
    using sample_registry     = gdt::registry<std::string, struct sample_tag>;

    transcript_registry::reset();
    sample_registry::reset();

    auto& reg_default = gdt::registry<std::string>::instance();
    auto& reg_tx = transcript_registry::instance();
    auto& reg_sample = sample_registry::instance();

    // The three singletons must be distinct objects.
    EXPECT_NE(static_cast<void*>(&reg_default), static_cast<void*>(&reg_tx));
    EXPECT_NE(static_cast<void*>(&reg_default), static_cast<void*>(&reg_sample));
    EXPECT_NE(static_cast<void*>(&reg_tx), static_cast<void*>(&reg_sample));

    auto tx_a = reg_tx.intern("ENST00000001");
    auto tx_b = reg_tx.intern("ENST00000002");
    auto sample_a = reg_sample.intern("TCGA-A1-B2");
    auto sample_b = reg_sample.intern("ENST00000001"); // same string, different pool

    // Same string in two different tagged pools must allocate independent ids.
    EXPECT_EQ(tx_a, 0u);
    EXPECT_EQ(tx_b, 1u);
    EXPECT_EQ(sample_a, 0u);
    EXPECT_EQ(sample_b, 1u);

    EXPECT_EQ(reg_tx.size(), 2u);
    EXPECT_EQ(reg_sample.size(), 2u);

    // Resolving an id only refers to its own pool.
    EXPECT_EQ(reg_tx.get(tx_a), "ENST00000001");
    EXPECT_EQ(reg_sample.get(sample_b), "ENST00000001");
    EXPECT_EQ(reg_sample.get(sample_a), "TCGA-A1-B2");

    // The default-tagged singleton (used by existing callers) is untouched.
    EXPECT_TRUE(reg_default.empty());

    // Clearing one tagged pool leaves the others alone.
    reg_tx.clear();
    EXPECT_TRUE(reg_tx.empty());
    EXPECT_EQ(reg_sample.size(), 2u);
    EXPECT_TRUE(reg_default.empty());

    transcript_registry::reset();
    sample_registry::reset();
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
    std::ignore = gdt::registry<int>::deserialize(ss);

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
    std::ignore = gdt::registry<std::string>::deserialize(ss);

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
    std::ignore = gdt::registry<std::string>::deserialize(ss);

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
    std::ignore = gdt::registry<int>::deserialize(ss);

    EXPECT_TRUE(reg.empty());
}

TEST_F(RegistryTest, DeserializeProvidesStrongExceptionGuaranteeOnTruncatedStream) {
    // Regression test for #330: deserialize used to clear the singleton's
    // storage and lookup *before* reading entries. If serializer<T>::read
    // threw partway through (truncated stream, malformed bytes, T ctor
    // failure), the singleton was left with a partial dataset and subsequent
    // intern() would allocate new ids on top of torso state.
    auto& reg = gdt::registry<std::string>::instance();

    // Build a valid serialized payload of 5 string entries, then drop it
    // into the registry as the "incoming" stream we'll later truncate.
    std::stringstream src;
    {
        std::ignore = reg.intern("one");
        std::ignore = reg.intern("two");
        std::ignore = reg.intern("three");
        std::ignore = reg.intern("four");
        std::ignore = reg.intern("five");
        reg.serialize(src);
        reg.clear();
    }

    // Populate the singleton with the "pre-existing" state we expect to
    // survive a failed deserialize.
    auto id_alpha = reg.intern("alpha");
    auto id_beta  = reg.intern("beta");
    auto id_gamma = reg.intern("gamma");
    ASSERT_EQ(reg.size(), 3u);

    // Truncate the serialized payload so the read hits EOF partway through
    // the entry loop. Cutting at half guarantees we're past the 8-byte count
    // header and into the string entries.
    const std::string full_bytes = src.str();
    ASSERT_GT(full_bytes.size(), sizeof(uint64_t));
    std::stringstream truncated_ss(
        full_bytes.substr(0, full_bytes.size() / 2),
        std::ios::in | std::ios::binary);

    EXPECT_THROW({
        std::ignore = gdt::registry<std::string>::deserialize(truncated_ss);
    }, std::runtime_error);

    // Strong exception guarantee: singleton state is exactly what it was
    // before the failed deserialize call.
    EXPECT_EQ(reg.size(), 3u);
    EXPECT_EQ(reg.get(id_alpha), "alpha");
    EXPECT_EQ(reg.get(id_beta),  "beta");
    EXPECT_EQ(reg.get(id_gamma), "gamma");
    // Lookup is also intact — intern of an existing value returns the same id.
    EXPECT_EQ(reg.intern("alpha"), id_alpha);
    EXPECT_EQ(reg.intern("beta"),  id_beta);
    EXPECT_EQ(reg.intern("gamma"), id_gamma);
}

TEST_F(RegistryTest, DeserializeRejectsCountExceedingIdCapacity) {
    // Defensive check: a malformed / attacker-crafted stream advertising a
    // count larger than id_type can represent would silently wrap ids on
    // static_cast<id_type>(new_storage.size()) and pre-allocate pathological
    // memory via reserve(). Reject loudly before the read loop instead.
    auto& reg = gdt::registry<std::string>::instance();
    auto id = reg.intern("kept");
    ASSERT_EQ(reg.size(), 1u);

    // Synthesize a header with count = null_id + 1 (one past the largest
    // value intern() would ever allow). No entries follow — the count check
    // must fire before the read loop tries to fetch any.
    const uint64_t bad_count =
        static_cast<uint64_t>(gdt::registry<std::string>::null_id) + 1u;
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    ss.write(reinterpret_cast<const char*>(&bad_count), sizeof(bad_count));

    EXPECT_THROW({
        std::ignore = gdt::registry<std::string>::deserialize(ss);
    }, std::runtime_error);

    // Strong exception guarantee: pre-existing state survived the rejection.
    EXPECT_EQ(reg.size(), 1u);
    EXPECT_EQ(reg.get(id), "kept");
}

TEST_F(RegistryTest, DeserializeRejectsDuplicateKeys) {
    // Defensive check: a legitimate serialize() can never emit duplicate keys
    // because intern() deduplicates, so any stream with two entries sharing
    // a key is malformed. The pre-fix bug was that emplace silently no-op'd
    // on the second entry, leaving new_storage longer than new_lookup —
    // benign in the historical Key == Payload branch (get() still worked),
    // but the Key != Payload branch later dereferences a null pointer in
    // serialize(). Reject the load instead and preserve the singleton.
    auto& reg = gdt::registry<std::string>::instance();
    auto id_kept = reg.intern("kept");
    ASSERT_EQ(reg.size(), 1u);

    // Build a stream by hand: count=2, then the same string written twice.
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    const uint64_t count = 2;
    ss.write(reinterpret_cast<const char*>(&count), sizeof(count));
    gdt::serializer<std::string>::write(ss, "dup");
    gdt::serializer<std::string>::write(ss, "dup");

    EXPECT_THROW({
        std::ignore = gdt::registry<std::string>::deserialize(ss);
    }, std::runtime_error);

    // Strong exception guarantee: pre-existing singleton state is intact.
    EXPECT_EQ(reg.size(), 1u);
    EXPECT_EQ(reg.get(id_kept), "kept");
    EXPECT_FALSE(reg.find("dup").has_value());
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
    std::ignore = gdt::registry<int>::deserialize(ss);

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

// --- registry<Key, Tag, Payload>: separate identity from payload (issue #400) ---

// gene_info models the canonical motivating use case: identity is `gene_id`
// alone, but the registry stores the full annotation record (name + biotype)
// keyed on that id. Two distinct gene_info values with the same `gene_id`
// must collapse to one slot, and the first payload written must win — later
// duplicates with placeholder fields must reuse the existing id without
// overwriting the canonical record.
//
// gene_info itself keeps its natural deep `operator==` — the partial-equality
// footgun from the issue's workaround does not appear because identity is
// expressed via the registry's Key parameter, not via the payload's operators.
struct gene_info {
    std::string gene_name;
    std::string gene_biotype;

    bool operator==(const gene_info& other) const {
        return gene_name == other.gene_name && gene_biotype == other.gene_biotype;
    }

    void serialize(std::ostream& os) const {
        gdt::serializer<std::string>::write(os, gene_name);
        gdt::serializer<std::string>::write(os, gene_biotype);
    }

    [[nodiscard]] static gene_info deserialize(std::istream& is) {
        gene_info g;
        g.gene_name = gdt::serializer<std::string>::read(is);
        g.gene_biotype = gdt::serializer<std::string>::read(is);
        return g;
    }
};

using gene_registry = gdt::registry<std::string, void, gene_info>;

class KeyPayloadRegistryTest : public ::testing::Test {
  protected:
    void SetUp() override { gene_registry::reset(); }
    void TearDown() override { gene_registry::reset(); }
};

TEST_F(KeyPayloadRegistryTest, InternStoresPayloadKeyedOnKey) {
    auto& reg = gene_registry::instance();

    auto id = reg.intern("ENSG001", {"FOO", "protein_coding"});

    EXPECT_EQ(id, 0u);
    EXPECT_EQ(reg.get(id).gene_name, "FOO");
    EXPECT_EQ(reg.get(id).gene_biotype, "protein_coding");
}

TEST_F(KeyPayloadRegistryTest, DistinctKeysAllocateSequentialIds) {
    auto& reg = gene_registry::instance();

    auto id1 = reg.intern("ENSG001", {"FOO", "protein_coding"});
    auto id2 = reg.intern("ENSG002", {"BAR", "lincRNA"});
    auto id3 = reg.intern("ENSG003", {"BAZ", "miRNA"});

    EXPECT_EQ(id1, 0u);
    EXPECT_EQ(id2, 1u);
    EXPECT_EQ(id3, 2u);
    EXPECT_EQ(reg.size(), 3u);
}

TEST_F(KeyPayloadRegistryTest, FirstWriteWinsOnDuplicateKey) {
    // The whole point of separating Key from Payload: when later sources
    // re-emit the same identity with placeholder fields, the registry must
    // hand back the existing id AND keep the canonical payload from the
    // first write.
    auto& reg = gene_registry::instance();

    auto id1 = reg.intern("ENSG001", {"FOO", "protein_coding"});
    auto id2 = reg.intern("ENSG001", {"placeholder_name", "placeholder_biotype"});
    auto id3 = reg.intern("ENSG001", {"", ""});

    EXPECT_EQ(id1, id2);
    EXPECT_EQ(id1, id3);
    EXPECT_EQ(reg.size(), 1u);

    // Canonical record from the first intern survives untouched.
    EXPECT_EQ(reg.get(id1).gene_name, "FOO");
    EXPECT_EQ(reg.get(id1).gene_biotype, "protein_coding");
}

TEST_F(KeyPayloadRegistryTest, FindByKeyReturnsExistingId) {
    auto& reg = gene_registry::instance();

    auto id = reg.intern("ENSG001", {"FOO", "protein_coding"});
    auto found = reg.find("ENSG001");

    ASSERT_TRUE(found.has_value());
    EXPECT_EQ(*found, id);

    EXPECT_FALSE(reg.find("ENSG999").has_value());
}

TEST_F(KeyPayloadRegistryTest, GetReturnsPayloadNotKey) {
    // Sanity check that the return type really is the payload — would not
    // compile if get() handed back the Key (std::string) instead.
    auto& reg = gene_registry::instance();
    auto id = reg.intern("ENSG001", {"FOO", "protein_coding"});
    const gene_info& g = reg.get(id);
    EXPECT_EQ(g.gene_name, "FOO");
}

TEST_F(KeyPayloadRegistryTest, SerializeDeserializeRoundTripsKeyPayload) {
    auto& reg = gene_registry::instance();

    auto id1 = reg.intern("ENSG001", {"FOO", "protein_coding"});
    auto id2 = reg.intern("ENSG002", {"BAR", "lincRNA"});

    std::stringstream ss;
    reg.serialize(ss);

    reg.clear();
    EXPECT_TRUE(reg.empty());

    ss.seekg(0);
    std::ignore = gene_registry::deserialize(ss);

    EXPECT_EQ(reg.size(), 2u);
    EXPECT_EQ(reg.get(id1).gene_name, "FOO");
    EXPECT_EQ(reg.get(id1).gene_biotype, "protein_coding");
    EXPECT_EQ(reg.get(id2).gene_name, "BAR");
    EXPECT_EQ(reg.get(id2).gene_biotype, "lincRNA");

    // Lookup must be rebuilt: re-interning a known key returns the same id,
    // and the canonical payload still wins.
    EXPECT_EQ(reg.intern("ENSG001", {"different", "different"}), id1);
    EXPECT_EQ(reg.get(id1).gene_name, "FOO");

    auto found = reg.find("ENSG002");
    ASSERT_TRUE(found.has_value());
    EXPECT_EQ(*found, id2);
}

TEST_F(KeyPayloadRegistryTest, TagDiscriminatesSingletonsAcrossKeyPayloadPools) {
    // Two registries with the same (Key, Payload) but distinct Tag must
    // back independent singletons — same identity in two different tagged
    // pools allocates independent ids.
    using gene_reg_a = gdt::registry<std::string, struct gene_tag_a, gene_info>;
    using gene_reg_b = gdt::registry<std::string, struct gene_tag_b, gene_info>;

    gene_reg_a::reset();
    gene_reg_b::reset();

    auto& a = gene_reg_a::instance();
    auto& b = gene_reg_b::instance();

    EXPECT_NE(static_cast<void*>(&a), static_cast<void*>(&b));

    auto id_a = a.intern("ENSG001", {"FOO", "protein_coding"});
    auto id_b = b.intern("ENSG001", {"BAR", "lincRNA"});

    // Same key in different tagged pools — each starts at 0 with its own
    // canonical payload.
    EXPECT_EQ(id_a, 0u);
    EXPECT_EQ(id_b, 0u);
    EXPECT_EQ(a.get(id_a).gene_name, "FOO");
    EXPECT_EQ(b.get(id_b).gene_name, "BAR");

    gene_reg_a::reset();
    gene_reg_b::reset();
}

TEST_F(KeyPayloadRegistryTest, ClearWipesBothStorageAndLookup) {
    auto& reg = gene_registry::instance();

    std::ignore = reg.intern("ENSG001", {"FOO", "protein_coding"});
    std::ignore = reg.intern("ENSG002", {"BAR", "lincRNA"});
    ASSERT_EQ(reg.size(), 2u);

    reg.clear();

    EXPECT_TRUE(reg.empty());
    EXPECT_FALSE(reg.find("ENSG001").has_value());
    // Next intern starts the id space over from 0.
    EXPECT_EQ(reg.intern("ENSG999", {"NEW", "protein_coding"}), 0u);
}

TEST_F(KeyPayloadRegistryTest, DeserializeRejectsDuplicateKeys) {
    // Same protection as RegistryTest.DeserializeRejectsDuplicateKeys but on
    // the Key != Payload wire format. Without the duplicate-key check this
    // load would leave new_storage longer than new_lookup, and the *next*
    // serialize() would dereference a null pointer in the key_by_id index
    // built from lookup. Reject the load and preserve the singleton.
    auto& reg = gene_registry::instance();
    auto id_kept = reg.intern("ENSG001", {"FOO", "protein_coding"});
    ASSERT_EQ(reg.size(), 1u);

    // Wire format for Key != Payload: count, then (key, payload) pairs.
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    const uint64_t count = 2;
    ss.write(reinterpret_cast<const char*>(&count), sizeof(count));
    gdt::serializer<std::string>::write(ss, "DUP_KEY");
    gene_info{"first", "type_a"}.serialize(ss);
    gdt::serializer<std::string>::write(ss, "DUP_KEY"); // duplicate key
    gene_info{"second", "type_b"}.serialize(ss);

    EXPECT_THROW({
        std::ignore = gene_registry::deserialize(ss);
    }, std::runtime_error);

    // Strong exception guarantee: pre-existing singleton state is intact.
    EXPECT_EQ(reg.size(), 1u);
    EXPECT_EQ(reg.get(id_kept).gene_name, "FOO");
    EXPECT_FALSE(reg.find("DUP_KEY").has_value());
}
