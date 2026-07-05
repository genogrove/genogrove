/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Compares two ways to answer a query against a serialized .gg on disk:
//   - eager: grove::deserialize (inflates every block) then intersect
//   - lazy:  lazy_grove::open (scans the block index, inflates nothing) then
//            intersect (inflates only the O(log n) blocks on the descent path)
// The lazy path trades a whole-file inflate for a cheap index scan + a handful
// of block loads, so it wins on read+query latency for a large index — and
// touches a tiny fraction of the blocks (reported as a counter).

// genogrove
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/lazy_grove.hpp>
#include "benchmark_utils.hpp"

// Google Benchmark
#include <benchmark/benchmark.h>

// Standard library
#include <filesystem>
#include <fstream>
#include <string>

namespace gst = genogrove::structure;
namespace fs = std::filesystem;

namespace {

// Build the grove from the sorted dataset and serialize it to a temp .gg.
// lazy_grove needs a seekable file, so the payload goes to disk (not a stream).
fs::path prepare_gg(int num_intervals, int order, const char* tag) {
    std::string filename = fs::current_path() / "data" /
        (std::to_string(num_intervals) + "_intervals_sorted.txt");
    const auto& intervals = load_intervals(filename);

    gst::grove<gdt::interval, int> grove(order);
    for (const auto& interval_data : intervals) {
        grove.insert_data("chr1", interval_data.intvl, interval_data.data, gst::sorted);
    }
    fs::path path = fs::temp_directory_path() /
        ("gg_lazy_bench_" + std::string(tag) + "_" + std::to_string(num_intervals) +
         "_" + std::to_string(order) + ".gg");
    std::ofstream ofs(path, std::ios::binary);
    grove.serialize(ofs);
    return path;
}

// A query guaranteed to hit an interval near the middle of the dataset.
gdt::interval mid_query(int num_intervals) {
    std::string filename = fs::current_path() / "data" /
        (std::to_string(num_intervals) + "_intervals_sorted.txt");
    const auto& intervals = load_intervals(filename);
    return intervals[intervals.size() / 2].intvl;
}

} // namespace

// ----------------------------
// Eager: deserialize whole file + query
// ----------------------------
static void BM_lazy_read_eager(benchmark::State& state) {
    const auto num_intervals = static_cast<int>(state.range(0));
    const auto order = static_cast<int>(state.range(1));
    fs::path path = prepare_gg(num_intervals, order, "eager");
    const gdt::interval query = mid_query(num_intervals);

    for (auto _ : state) {
        std::ifstream ifs(path, std::ios::binary);
        auto grove = gst::grove<gdt::interval, int>::deserialize(ifs);
        auto hits = grove.intersect(query, "chr1").get_keys().size();
        benchmark::DoNotOptimize(hits);
    }

    fs::remove(path);
    state.SetItemsProcessed(state.iterations());
}

// ----------------------------
// Lazy: open (index scan) + query (loads only the touched blocks)
// ----------------------------
static void BM_lazy_read_lazy(benchmark::State& state) {
    const auto num_intervals = static_cast<int>(state.range(0));
    const auto order = static_cast<int>(state.range(1));
    fs::path path = prepare_gg(num_intervals, order, "lazy");
    const gdt::interval query = mid_query(num_intervals);

    std::size_t blocks_loaded = 0;
    std::size_t block_count = 0;
    for (auto _ : state) {
        auto lazy = gst::lazy_grove<gdt::interval, int>::open(path.string());
        auto hits = lazy.intersect(query, "chr1").get_keys().size();
        benchmark::DoNotOptimize(hits);
        blocks_loaded = lazy.blocks_loaded();
        block_count = lazy.block_count();
    }

    fs::remove(path);
    state.counters["blocks_loaded"] = static_cast<double>(blocks_loaded);
    state.counters["block_count"] = static_cast<double>(block_count);
    state.counters["loaded_fraction"] =
        block_count ? static_cast<double>(blocks_loaded) / static_cast<double>(block_count) : 0.0;
    state.SetItemsProcessed(state.iterations());
}

// ----------------------------
// Argument combinations: dataset size x tree order
// ----------------------------
static void ApplyReadArgs(benchmark::internal::Benchmark* b) {
    for (int n : {100, 500, 1000, 5000, 10000}) {
        for (int k : {3, 32}) {
            b->Args({n, k});
        }
    }
}

BENCHMARK(BM_lazy_read_eager)->Apply(ApplyReadArgs)->Unit(benchmark::kMicrosecond);
BENCHMARK(BM_lazy_read_lazy)->Apply(ApplyReadArgs)->Unit(benchmark::kMicrosecond);