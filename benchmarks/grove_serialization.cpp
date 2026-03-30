/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */

// genogrove
#include <genogrove/structure/grove/grove.hpp>
#include "benchmark_utils.hpp"

// Google Benchmark
#include <benchmark/benchmark.h>

// Standard library
#include <filesystem>
#include <sstream>
#include <string>

namespace gst = genogrove::structure;

// ----------------------------
// Benchmark: Serialization size (sorted insertion)
// ----------------------------
static void BM_serialization_size_sorted(benchmark::State& state) {
    const int num_intervals = state.range(0);
    const int k = state.range(1);

    std::string filename = std::filesystem::current_path() / "data" /
        (std::to_string(num_intervals) + "_intervals_sorted.txt");
    const auto& intervals = load_intervals(filename);

    size_t serialized_bytes = 0;

    for (auto _ : state) {
        gst::grove<gdt::interval, int> grove(k);
        for (const auto& interval_data : intervals) {
            grove.insert_data("chr1", interval_data.intvl, interval_data.data, gst::sorted);
        }

        std::ostringstream oss;
        grove.serialize(oss);
        serialized_bytes = oss.str().size();

        benchmark::DoNotOptimize(serialized_bytes);
    }

    state.counters["serialized_bytes"] = static_cast<double>(serialized_bytes);
    state.counters["bytes_per_interval"] = static_cast<double>(serialized_bytes) / num_intervals;
    state.SetItemsProcessed(state.iterations() * num_intervals);
}

// ----------------------------
// Benchmark: Serialization size (unsorted insertion)
// ----------------------------
static void BM_serialization_size_unsorted(benchmark::State& state) {
    const int num_intervals = state.range(0);
    const int k = state.range(1);

    std::string filename = std::filesystem::current_path() / "data" /
        (std::to_string(num_intervals) + "_intervals_unsorted.txt");
    const auto& intervals = load_intervals(filename);

    size_t serialized_bytes = 0;

    for (auto _ : state) {
        gst::grove<gdt::interval, int> grove(k);
        for (const auto& interval_data : intervals) {
            grove.insert_data("chr1", interval_data.intvl, interval_data.data);
        }

        std::ostringstream oss;
        grove.serialize(oss);
        serialized_bytes = oss.str().size();

        benchmark::DoNotOptimize(serialized_bytes);
    }

    state.counters["serialized_bytes"] = static_cast<double>(serialized_bytes);
    state.counters["bytes_per_interval"] = static_cast<double>(serialized_bytes) / num_intervals;
    state.SetItemsProcessed(state.iterations() * num_intervals);
}

// ----------------------------
// Benchmark: Deserialization time (sorted)
// ----------------------------
static void BM_deserialization_sorted(benchmark::State& state) {
    const int num_intervals = state.range(0);
    const int k = state.range(1);

    std::string filename = std::filesystem::current_path() / "data" /
        (std::to_string(num_intervals) + "_intervals_sorted.txt");
    const auto& intervals = load_intervals(filename);

    // Build and serialize once outside the benchmark loop
    std::string serialized;
    {
        gst::grove<gdt::interval, int> grove(k);
        for (const auto& interval_data : intervals) {
            grove.insert_data("chr1", interval_data.intvl, interval_data.data, gst::sorted);
        }
        std::ostringstream oss;
        grove.serialize(oss);
        serialized = oss.str();
    }

    for (auto _ : state) {
        std::istringstream iss(serialized);
        auto grove = gst::grove<gdt::interval, int>::deserialize(iss);
        benchmark::DoNotOptimize(grove);
    }

    state.counters["serialized_bytes"] = static_cast<double>(serialized.size());
    state.SetItemsProcessed(state.iterations() * num_intervals);
}

// ----------------------------
// Apply argument combinations
// ----------------------------
static void ApplyArgs(benchmark::internal::Benchmark* b) {
    std::vector<int> sizes = {100, 500, 1000, 5000};
    std::vector<int> k_values = {2, 5, 10, 15, 20, 25, 30};

    for (int n : sizes) {
        for (int k : k_values) {
            b->Args({n, k});
        }
    }
}

// ----------------------------
// Register benchmarks
// ----------------------------
BENCHMARK(BM_serialization_size_sorted)
    ->Apply(ApplyArgs)
    ->Unit(benchmark::kMicrosecond);

BENCHMARK(BM_serialization_size_unsorted)
    ->Apply(ApplyArgs)
    ->Unit(benchmark::kMicrosecond);

BENCHMARK(BM_deserialization_sorted)
    ->Apply(ApplyArgs)
    ->Unit(benchmark::kMicrosecond);