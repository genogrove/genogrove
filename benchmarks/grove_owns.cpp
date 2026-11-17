/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Measures the cost a caller pays when it guards each edge with grove::owns().
// owns() scans every leaf, so a guard on E edges over N keys is O(E * N).
//   - chain:   two owns() calls per edge, both keys live (scan stops at the hit),
//              sampled on 1000 edges
//   - foreign: one owns() call on a key of another grove (always a full scan)
// items_per_second is edges per second (chain) or calls per second (foreign).

// genogrove
#include <genogrove/structure/grove/grove.hpp>
#include "benchmark_utils.hpp"

// Google Benchmark
#include <benchmark/benchmark.h>

// Standard library
#include <cstddef>
#include <vector>

namespace gst = genogrove::structure;

namespace {

using grove_t = gst::grove<gdt::interval, int>;
using key_ptr = gdt::key<gdt::interval, int>*;

// Synthetic, non-overlapping, sorted intervals: the data files stop at 10k keys.
std::vector<key_ptr> fill(grove_t& grove, int num_keys) {
    std::vector<key_ptr> keys;
    keys.reserve(static_cast<size_t>(num_keys));
    for (int i = 0; i < num_keys; ++i) {
        const auto start = static_cast<size_t>(i) * 10;
        keys.push_back(grove.insert_data("chr1", gdt::interval(start, start + 5), i, gst::sorted));
    }
    return keys;
}

} // namespace

static void BM_owns_chain(benchmark::State& state) {
    grove_t grove(static_cast<int>(state.range(1)));
    const auto keys = fill(grove, static_cast<int>(state.range(0)));

    // Check 1000 edges spread evenly over the keys, not all N - 1: the full
    // chain at 100k keys takes seconds per iteration, too long for the CI job.
    // Total guard cost for E edges = E / items_per_second.
    const size_t stride = keys.size() / 1000;
    for (auto _ : state) {
        size_t owned = 0;
        for (size_t i = 0; i + 1 < keys.size(); i += stride) {
            owned += static_cast<size_t>(grove.owns(keys[i]) && grove.owns(keys[i + 1]));
        }
        benchmark::DoNotOptimize(owned);
    }
    state.SetItemsProcessed(state.iterations() * 1000);
}

static void BM_owns_foreign(benchmark::State& state) {
    grove_t grove(static_cast<int>(state.range(1)));
    fill(grove, static_cast<int>(state.range(0)));
    grove_t other(static_cast<int>(state.range(1)));
    const key_ptr foreign = fill(other, 1).front();

    for (auto _ : state) {
        bool owned = grove.owns(foreign);
        benchmark::DoNotOptimize(owned);
    }
    state.SetItemsProcessed(state.iterations());
}

// {keys, order}. Order 3 is the CLI default; 100 shows the scan with dense leaves.
BENCHMARK(BM_owns_chain)
    ->ArgsProduct({{1000, 10000, 100000}, {3, 100}})
    ->Unit(benchmark::kMillisecond);
BENCHMARK(BM_owns_foreign)
    ->ArgsProduct({{1000, 10000, 100000}, {3, 100}})
    ->Unit(benchmark::kMicrosecond);