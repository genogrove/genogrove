/*
 * Thread safety tests for grove
 */

#include <gtest/gtest.h>
#include <thread>
#include <vector>
#include <atomic>
#include <random>

#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/data_type/interval.hpp>

namespace gdt = genogrove::data_type;
namespace gs = genogrove::structure;

class GroveThreadSafetyTest : public ::testing::Test {
protected:
    static constexpr int ORDER = 100;
    static constexpr int NUM_THREADS = 8;
    static constexpr int INSERTIONS_PER_THREAD = 1000;
};

// Test concurrent insertions to DIFFERENT indices (chromosomes)
// This should have no contention since each thread works on its own index
TEST_F(GroveThreadSafetyTest, ConcurrentInsertionsDifferentIndices) {
    gs::grove<gdt::interval, int> g(ORDER);
    std::atomic<int> total_inserted{0};

    std::vector<std::thread> threads;
    for (int t = 0; t < NUM_THREADS; ++t) {
        threads.emplace_back([&g, &total_inserted, t]() {
            std::string index = "chr" + std::to_string(t);
            for (int i = 0; i < INSERTIONS_PER_THREAD; ++i) {
                int start = i * 100;
                int end = start + 50;
                g.insert_data(index, gdt::interval(start, end), i, gs::sorted);
                total_inserted++;
            }
        });
    }

    for (auto& thread : threads) {
        thread.join();
    }

    EXPECT_EQ(total_inserted.load(), NUM_THREADS * INSERTIONS_PER_THREAD);

    // Note: indexed_vertex_count() includes internal B+ tree separator keys,
    // so it will be >= the number of data insertions
    EXPECT_GE(g.indexed_vertex_count(), static_cast<size_t>(NUM_THREADS * INSERTIONS_PER_THREAD));

    // Verify each index has the correct number of entries via intersect (leaf keys only)
    for (int t = 0; t < NUM_THREADS; ++t) {
        std::string index = "chr" + std::to_string(t);
        gdt::interval query(0, INSERTIONS_PER_THREAD * 100);
        auto results = g.intersect(query, index);
        EXPECT_EQ(results.get_keys().size(), INSERTIONS_PER_THREAD);
    }
}

// Test concurrent insertions to the SAME index
// This tests the per-index locking under contention
TEST_F(GroveThreadSafetyTest, ConcurrentInsertionsSameIndex) {
    gs::grove<gdt::interval, int> g(ORDER);
    std::atomic<int> total_inserted{0};

    std::vector<std::thread> threads;
    for (int t = 0; t < NUM_THREADS; ++t) {
        threads.emplace_back([&g, &total_inserted, t]() {
            for (int i = 0; i < INSERTIONS_PER_THREAD; ++i) {
                // Each thread inserts non-overlapping intervals
                int base = t * INSERTIONS_PER_THREAD * 100;
                int start = base + i * 100;
                int end = start + 50;
                g.insert_data("chr1", gdt::interval(start, end), t * INSERTIONS_PER_THREAD + i);
                total_inserted++;
            }
        });
    }

    for (auto& thread : threads) {
        thread.join();
    }

    EXPECT_EQ(total_inserted.load(), NUM_THREADS * INSERTIONS_PER_THREAD);
    EXPECT_EQ(g.indexed_vertex_count(), NUM_THREADS * INSERTIONS_PER_THREAD);
}

// Test concurrent reads and writes
TEST_F(GroveThreadSafetyTest, ConcurrentReadsAndWrites) {
    gs::grove<gdt::interval, int> g(ORDER);

    // Pre-populate with some data
    for (int i = 0; i < 1000; ++i) {
        g.insert_data("chr1", gdt::interval(i * 100, i * 100 + 50), i, gs::sorted);
    }

    std::atomic<int> reads_completed{0};
    std::atomic<int> writes_completed{0};

    std::vector<std::thread> threads;

    // Writer threads
    for (int t = 0; t < NUM_THREADS / 2; ++t) {
        threads.emplace_back([&g, &writes_completed, t]() {
            for (int i = 0; i < INSERTIONS_PER_THREAD; ++i) {
                int base = 100000 + t * INSERTIONS_PER_THREAD * 100;
                int start = base + i * 100;
                g.insert_data("chr1", gdt::interval(start, start + 50),
                              10000 + t * INSERTIONS_PER_THREAD + i);
                writes_completed++;
            }
        });
    }

    // Reader threads
    for (int t = 0; t < NUM_THREADS / 2; ++t) {
        threads.emplace_back([&g, &reads_completed]() {
            std::random_device rd;
            std::mt19937 gen(rd());
            std::uniform_int_distribution<> dis(0, 99900);

            for (int i = 0; i < INSERTIONS_PER_THREAD; ++i) {
                int start = dis(gen);
                gdt::interval query(start, start + 100);
                auto results = g.intersect(query, "chr1");
                // Just verify we can read without crashing
                (void)results.get_keys().size();
                reads_completed++;
            }
        });
    }

    for (auto& thread : threads) {
        thread.join();
    }

    EXPECT_EQ(writes_completed.load(), (NUM_THREADS / 2) * INSERTIONS_PER_THREAD);
    EXPECT_EQ(reads_completed.load(), (NUM_THREADS / 2) * INSERTIONS_PER_THREAD);
}

// Test concurrent graph operations
TEST_F(GroveThreadSafetyTest, ConcurrentGraphOperations) {
    gs::grove<gdt::interval, int> g(ORDER);

    // Pre-populate with data
    std::vector<gdt::key<gdt::interval, int>*> keys;
    for (int i = 0; i < 1000; ++i) {
        auto* key = g.insert_data("chr1", gdt::interval(i * 100, i * 100 + 50), i, gs::sorted);
        keys.push_back(key);
    }

    std::atomic<int> edges_added{0};

    std::vector<std::thread> threads;
    for (int t = 0; t < NUM_THREADS; ++t) {
        threads.emplace_back([&g, &keys, &edges_added, t]() {
            int start_idx = t * (keys.size() / NUM_THREADS);
            int end_idx = (t + 1) * (keys.size() / NUM_THREADS) - 1;

            for (int i = start_idx; i < end_idx; ++i) {
                g.add_edge(keys[i], keys[i + 1]);
                edges_added++;
            }
        });
    }

    for (auto& thread : threads) {
        thread.join();
    }

    // Verify edges were added (some may overlap due to thread boundaries)
    EXPECT_GT(g.edge_count(), 0u);
    EXPECT_EQ(edges_added.load(), NUM_THREADS * (keys.size() / NUM_THREADS - 1));
}

// Test concurrent external key additions
TEST_F(GroveThreadSafetyTest, ConcurrentExternalKeys) {
    gs::grove<gdt::interval, int> g(ORDER);
    std::atomic<int> keys_added{0};

    std::vector<std::thread> threads;
    for (int t = 0; t < NUM_THREADS; ++t) {
        threads.emplace_back([&g, &keys_added, t]() {
            for (int i = 0; i < INSERTIONS_PER_THREAD; ++i) {
                int start = t * INSERTIONS_PER_THREAD * 100 + i * 100;
                g.add_external_key(gdt::interval(start, start + 50),
                                   t * INSERTIONS_PER_THREAD + i);
                keys_added++;
            }
        });
    }

    for (auto& thread : threads) {
        thread.join();
    }

    EXPECT_EQ(keys_added.load(), NUM_THREADS * INSERTIONS_PER_THREAD);
    EXPECT_EQ(g.external_vertex_count(), NUM_THREADS * INSERTIONS_PER_THREAD);
}

// Stress test with mixed operations
TEST_F(GroveThreadSafetyTest, StressTestMixedOperations) {
    gs::grove<gdt::interval, int> g(ORDER);

    std::atomic<bool> stop{false};
    std::atomic<int> operations{0};

    std::vector<std::thread> threads;

    // Inserters
    for (int t = 0; t < 2; ++t) {
        threads.emplace_back([&g, &stop, &operations, t]() {
            int i = 0;
            while (!stop.load()) {
                std::string index = "chr" + std::to_string(t);
                g.insert_data(index, gdt::interval(i * 10, i * 10 + 5), i);
                operations++;
                i++;
            }
        });
    }

    // Readers
    for (int t = 0; t < 2; ++t) {
        threads.emplace_back([&g, &stop, &operations, t]() {
            std::string index = "chr" + std::to_string(t % 2);
            while (!stop.load()) {
                gdt::interval query(0, 10000);
                auto results = g.intersect(query, index);
                (void)results.get_keys().size();
                operations++;
            }
        });
    }

    // External key adders
    threads.emplace_back([&g, &stop, &operations]() {
        int i = 0;
        while (!stop.load()) {
            g.add_external_key(gdt::interval(i * 10, i * 10 + 5), i);
            operations++;
            i++;
        }
    });

    // Let it run for a bit
    std::this_thread::sleep_for(std::chrono::milliseconds(500));
    stop.store(true);

    for (auto& thread : threads) {
        thread.join();
    }

    // If we got here without crashing or deadlocking, the test passed
    EXPECT_GT(operations.load(), 0);
    std::cout << "Completed " << operations.load() << " operations without issues\n";
}