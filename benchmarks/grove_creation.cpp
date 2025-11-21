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
#include <genogrove/data_type/interval.hpp>

// Google Benchmark
#include <benchmark/benchmark.h>

// Standard library
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>
#include <map>
#include <filesystem>

namespace gdt = genogrove::data_type;
namespace gst = genogrove::structure;

// ----------------------------
// Interval data structure
// ----------------------------
struct IntervalWithData {
    gdt::interval intvl;
    int data;
};

// ----------------------------
// Cache for loaded intervals
// ----------------------------
std::map<std::string, std::vector<IntervalWithData>> g_interval_cache;

// ----------------------------
// Load intervals from file
// ----------------------------
const std::vector<IntervalWithData>& load_intervals(const std::string& filename) {
    // Check cache first
    auto it = g_interval_cache.find(filename);
    if (it != g_interval_cache.end()) {
        return it->second;
    }

    std::vector<IntervalWithData> intervals;
    std::ifstream file(filename);
    if (!file) {
        std::cerr << "Error: Could not open " << filename << std::endl;
        std::cerr << "Current working directory: " << std::filesystem::current_path() << std::endl;
        // std::cerr << "Please run 'make generate-all' in the benchmarks directory first" << std::endl;
        throw std::runtime_error("Failed to load intervals");
    }

    std::string line;
    while (std::getline(file, line)) {
        // Skip comments and empty lines
        if (line.empty() || line[0] == '#') {
            continue;
        }

        std::istringstream iss(line);
        int start, end, data;
        if (iss >> start >> end >> data) {
            intervals.push_back({gdt::interval(start, end), data});
        }
    }

    if (intervals.empty()) {
        throw std::runtime_error("No intervals loaded from " + filename);
    }

    // Output needs to be ommitted as this taints the benchmark JSON output
    // std::cout << "Loaded " << intervals.size() << " intervals from " << filename << std::endl;

    // Cache the loaded intervals
    g_interval_cache[filename] = std::move(intervals);
    return g_interval_cache[filename];
}


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
                grove.insert_data("chr1", interval_data.intvl, interval_data.data);
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