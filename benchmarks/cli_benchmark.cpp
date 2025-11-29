/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Benchmark
#include <benchmark/benchmark.h>

// Standard library
#include <filesystem>
#include <iostream>
#include <cstdlib>
#include <fstream>

namespace fs = std::filesystem;

// ----------------------------
// Helper: Execute CLI command
// ----------------------------
int execute_cli(const std::string& command) {
    return std::system(command.c_str());
}

// ----------------------------
// Benchmark: CLI intersect command
// ----------------------------
static void BM_cli_intersect_perfect_match(benchmark::State& state) {
    const int k = state.range(0);

    fs::path cli_binary = fs::current_path().parent_path() / "bin" / "genogrove";

    fs::path target_file = fs::current_path() / "data/cli/query/basic/truth/10K_sorted.bed";
    fs::path query_file = fs::current_path() / "data/cli/query/basic/query/perfect/10K_sorted.bed";
    fs::path output_file = fs::temp_directory_path() / "genogrove_bench_output.bed";

    if (!fs::exists(cli_binary)) {
        state.SkipWithError("CLI binary not found");
        return;
    }

    if (!fs::exists(target_file) || !fs::exists(query_file)) {
        state.SkipWithError("BED files not found");
        return;
    }

    std::string command = cli_binary.string() +
        " intersect" +
        " -q " + query_file.string() +
        " -t " + target_file.string() +
        " -o " + output_file.string() +
        " --order " + std::to_string(k) +
        " > /dev/null 2>&1";

    for (auto _ : state) {
        int result = execute_cli(command);
        benchmark::DoNotOptimize(result);
    }

    // Cleanup
    if (fs::exists(output_file)) {
        fs::remove(output_file);
    }

    state.SetItemsProcessed(state.iterations() * 10000);
}

// ----------------------------
// Benchmark: Different overlap types
// ----------------------------
static void BM_cli_intersect_partial_overlap(benchmark::State& state) {
    const int k = state.range(0);

    fs::path cli_binary = fs::current_path().parent_path() / "bin" / "genogrove";
    fs::path target_file = fs::current_path() / "data/cli/query/basic/truth/10K_sorted.bed";
    fs::path query_file = fs::current_path() / "data/cli/query/basic/query/5p-partial/10K_sorted.bed";
    fs::path output_file = fs::temp_directory_path() / "genogrove_bench_output.bed";

    if (!fs::exists(cli_binary) || !fs::exists(target_file) || !fs::exists(query_file)) {
        state.SkipWithError("Required files not found");
        return;
    }

    std::string command = cli_binary.string() +
        " intersect" +
        " -q " + query_file.string() +
        " -t " + target_file.string() +
        " -o " + output_file.string() +
        " --order " + std::to_string(k) +
        " > /dev/null 2>&1";

    for (auto _ : state) {
        int result = execute_cli(command);
        benchmark::DoNotOptimize(result);
    }

    if (fs::exists(output_file)) {
        fs::remove(output_file);
    }

    state.SetItemsProcessed(state.iterations() * 10000);
}

// ----------------------------
// Benchmark: Enclosed intervals
// ----------------------------
static void BM_cli_intersect_enclosed(benchmark::State& state) {
    const int k = state.range(0);

    fs::path cli_binary = fs::current_path().parent_path() / "bin" / "genogrove";
    fs::path target_file = fs::current_path() / "data/cli/query/basic/truth/10K_sorted.bed";
    fs::path query_file = fs::current_path() / "data/cli/query/basic/query/enclosed/10K_sorted.bed";
    fs::path output_file = fs::temp_directory_path() / "genogrove_bench_output.bed";

    if (!fs::exists(cli_binary) || !fs::exists(target_file) || !fs::exists(query_file)) {
        state.SkipWithError("Required files not found");
        return;
    }

    std::string command = cli_binary.string() +
        " intersect" +
        " -q " + query_file.string() +
        " -t " + target_file.string() +
        " -o " + output_file.string() +
        " --order " + std::to_string(k) +
        " > /dev/null 2>&1";

    for (auto _ : state) {
        int result = execute_cli(command);
        benchmark::DoNotOptimize(result);
    }

    if (fs::exists(output_file)) {
        fs::remove(output_file);
    }

    state.SetItemsProcessed(state.iterations() * 10000);
}

// ----------------------------
// Register benchmarks
// ----------------------------
BENCHMARK(BM_cli_intersect_perfect_match)
    ->Arg(3)
    ->Arg(5)
    ->Arg(10)
    ->Arg(15)
    ->Arg(20)
    ->Unit(benchmark::kMillisecond);

BENCHMARK(BM_cli_intersect_partial_overlap)
    ->Arg(3)
    ->Arg(5)
    ->Arg(10)
    ->Arg(15)
    ->Arg(20)
    ->Unit(benchmark::kMillisecond);

BENCHMARK(BM_cli_intersect_enclosed)
    ->Arg(3)
    ->Arg(5)
    ->Arg(10)
    ->Arg(15)
    ->Arg(20)
    ->Unit(benchmark::kMillisecond);