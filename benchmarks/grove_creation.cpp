/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
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

namespace gst = genogrove::structure;


// ----------------------------
// Benchmark: Unsorted Intervals
// ----------------------------
static void BM_grove_creation_unsorted(benchmark::State& state) {
    const int num_intervals = state.range(0);
    const int k = state.range(1);

    // Load intervals from file (cached after first load)
    std::string filename = std::filesystem::current_path() / "data" / (std::to_string(num_intervals) + "_intervals_unsorted.txt");
    const auto& intervals = load_intervals(filename);

    for (auto _ : state) {
        // Explicit scope ensures grove is destroyed after each iteration
        {
            gst::grove<gdt::interval, int> grove(k);

            for (const auto& interval_data : intervals) {
                grove.insert_data("chr1", interval_data.intvl, interval_data.data);
            }

            benchmark::DoNotOptimize(grove);
        } // grove destructor called HERE - before next iteration
    }

    state.SetItemsProcessed(state.iterations() * num_intervals);
    state.SetComplexityN(num_intervals);
}

// ----------------------------
// Benchmark: Sorted Intervals
// ----------------------------
static void BM_grove_creation_sorted(benchmark::State& state) {
    const int num_intervals = state.range(0);
    const int k = state.range(1);

    // Load intervals from file (cached after first load)
    std::string filename = std::filesystem::current_path() / "data" / (std::to_string(num_intervals) + "_intervals_sorted.txt");
    const auto& intervals = load_intervals(filename);

    for (auto _ : state) {
        // Explicit scope ensures grove is destroyed after each iteration
        {
            gst::grove<gdt::interval, int> grove(k);

            for (const auto& interval_data : intervals) {
                grove.insert_data("chr1", interval_data.intvl, interval_data.data, gst::sorted);
            }

            benchmark::DoNotOptimize(grove);
        } // grove destructor called HERE - before next iteration
    }

    state.SetItemsProcessed(state.iterations() * num_intervals);
    state.SetComplexityN(num_intervals);
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
BENCHMARK(BM_grove_creation_unsorted)
    ->Apply(ApplyArgs)
    ->Unit(benchmark::kMicrosecond)
    ->Complexity();

BENCHMARK(BM_grove_creation_sorted)
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