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
#include <string>
#include <utility>

namespace gst = genogrove::structure;

// ----------------------------
// Benchmark: Unsorted Intervals
// ----------------------------
static void BM_grove_creation_unsorted(benchmark::State& state) {
    const auto num_intervals = state.range(0);
    const auto k = static_cast<int>(state.range(1));

    std::string filename = std::filesystem::current_path() / "data" /
        (std::to_string(num_intervals) + "_intervals_unsorted.txt");
    const auto& intervals = load_intervals(filename);

    for (auto _ : state) {
        gst::grove<gdt::interval, int> grove(k);
        for (const auto& interval_data : intervals) {
            grove.insert_data("chr1", interval_data.intvl, interval_data.data);
        }
        benchmark::DoNotOptimize(grove);
    }

    state.SetItemsProcessed(state.iterations() * num_intervals);
    state.SetComplexityN(num_intervals);
}

// ----------------------------
// Benchmark: Sorted Intervals
// ----------------------------
static void BM_grove_creation_sorted(benchmark::State& state) {
    const auto num_intervals = state.range(0);
    const auto k = static_cast<int>(state.range(1));

    std::string filename = std::filesystem::current_path() / "data" /
        (std::to_string(num_intervals) + "_intervals_sorted.txt");
    const auto& intervals = load_intervals(filename);

    for (auto _ : state) {
        gst::grove<gdt::interval, int> grove(k);
        for (const auto& interval_data : intervals) {
            grove.insert_data("chr1", interval_data.intvl, interval_data.data, gst::sorted);
        }
        benchmark::DoNotOptimize(grove);
    }

    state.SetItemsProcessed(state.iterations() * num_intervals);
    state.SetComplexityN(num_intervals);
}

// ----------------------------
// Benchmark: Bulk Sorted Intervals
// ----------------------------
static void BM_grove_creation_bulk_sorted(benchmark::State& state) {
    const auto num_intervals = state.range(0);
    const auto k = static_cast<int>(state.range(1));

    std::string filename = std::filesystem::current_path() / "data" /
        (std::to_string(num_intervals) + "_intervals_sorted.txt");
    const auto& intervals = load_intervals(filename);

    // Prepare data as vector of pairs for bulk insert
    std::vector<std::pair<gdt::interval, int>> pair_data;
    pair_data.reserve(intervals.size());
    for (const auto& iv : intervals) {
        pair_data.emplace_back(iv.intvl, iv.data);
    }

    for (auto _ : state) {
        gst::grove<gdt::interval, int> grove(k);
        grove.insert_data("chr1", pair_data, gst::sorted, gst::bulk);
        benchmark::DoNotOptimize(grove);
    }

    state.SetItemsProcessed(state.iterations() * num_intervals);
    state.SetComplexityN(num_intervals);
}

// ----------------------------
// Benchmark: Bulk Unsorted Intervals
// ----------------------------
static void BM_grove_creation_bulk_unsorted(benchmark::State& state) {
    const auto num_intervals = state.range(0);
    const auto k = static_cast<int>(state.range(1));

    std::string filename = std::filesystem::current_path() / "data" /
        (std::to_string(num_intervals) + "_intervals_unsorted.txt");
    const auto& intervals = load_intervals(filename);

    // Prepare data as vector of pairs for bulk insert
    std::vector<std::pair<gdt::interval, int>> pair_data;
    pair_data.reserve(intervals.size());
    for (const auto& iv : intervals) {
        pair_data.emplace_back(iv.intvl, iv.data);
    }

    for (auto _ : state) {
        gst::grove<gdt::interval, int> grove(k);
        // bulk_t without sorted_t: sorts internally then does sorted bulk insert
        grove.insert_data("chr1", pair_data, gst::bulk);
        benchmark::DoNotOptimize(grove);
    }

    state.SetItemsProcessed(state.iterations() * num_intervals);
    state.SetComplexityN(num_intervals);
}

// ----------------------------
// Apply argument combinations
// ----------------------------
static void ApplyArgs(benchmark::internal::Benchmark* b) {
    std::vector<int> sizes = {100, 500, 1000, 5000};
    std::vector<int> k_values = {2, 5, 10, 15, 20, 25, 30, 50, 75, 100, 150, 200};

    for (int n : sizes) {
        for (int k : k_values) {
            b->Args({n, k});
        }
    }
}

// ----------------------------
// Register benchmarks
// ----------------------------
BENCHMARK(BM_grove_creation_unsorted)
    ->Apply(ApplyArgs)
    ->Unit(benchmark::kMicrosecond)
    ->Complexity();

BENCHMARK(BM_grove_creation_sorted)
    ->Apply(ApplyArgs)
    ->Unit(benchmark::kMicrosecond)
    ->Complexity();

BENCHMARK(BM_grove_creation_bulk_sorted)
    ->Apply(ApplyArgs)
    ->Unit(benchmark::kMicrosecond)
    ->Complexity();

BENCHMARK(BM_grove_creation_bulk_unsorted)
    ->Apply(ApplyArgs)
    ->Unit(benchmark::kMicrosecond)
    ->Complexity();

// ----------------------------
// Main
// ----------------------------
int main(int argc, char** argv) {
    benchmark::Initialize(&argc, argv);

    if (benchmark::ReportUnrecognizedArguments(argc, argv)) {
        return 1;
    }

    benchmark::RunSpecifiedBenchmarks();
    benchmark::Shutdown();

    return 0;
}