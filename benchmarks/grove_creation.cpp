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
#include <genogrove/data_type/key.hpp>
#include <genogrove/data_type/interval.hpp>

// Google Benchmark
#include <benchmark/benchmark.h>


namespace gdt = genogrove::data_type;
namespace gst = genogrove::structure;

static void BM_interval_insert(benchmark::State& state) {
    const int num_intervals = state.range(0);
    for(auto _ : state) {
        state.PauseTiming();
        gst::grove<gdt::interval, int> grove(3);
        state.ResumeTiming();

        for(int i = 1; i < num_intervals; i++) {
            std::cout << i << "\n";
            int val = i;
            gdt::interval intvl(i, i+1);
            grove.insert_data(std::string("index1"), intvl, val);
        }
        benchmark::DoNotOptimize(grove);
    }
    state.SetItemsProcessed(state.iterations() * num_intervals);
}

BENCHMARK(BM_interval_insert)->Range(8, 8<<10);  // Added: BENCHMARK() call and Range

BENCHMARK_MAIN();



