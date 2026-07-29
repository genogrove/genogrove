/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Machine-speed controls.
//
// These measure no genogrove code. They exist so the dashboard carries a series
// whose only input is how fast the runner is, because that is otherwise
// impossible to tell apart from a real regression: the benchmark job runs on
// whatever shared host GitHub hands out, and consecutive commits routinely land
// on hosts differing by 30% or more.
//
// A worked example of why this matters — the alert on #518 flagged BM_read_view
// at exactly 2.00x across a 100x range of dataset sizes, in code that PR did not
// touch, while the real 1.5x regression it did introduce sat in the same report
// below the alert threshold. With a control series the first question ("did the
// whole machine move, or did this benchmark?") is answerable at a glance.
//
// Both controls do a fixed amount of work per iteration, independent of any
// input file, allocation, or RNG, so their absolute time is a pure function of
// the host. Read them as a scale factor for everything else in the same run —
// they are not a performance target and should never be optimized.

// Google Benchmark
#include <benchmark/benchmark.h>

// Standard library
#include <cstddef>
#include <cstdint>
#include <numeric>
#include <vector>

namespace {

/// ALU-bound: a dependent multiply-add chain that stays in registers.
/// Tracks core clock and IPC, and is almost immune to memory conditions.
void BM_control_cpu(benchmark::State& state) {
    constexpr int steps = 100000;
    std::uint64_t value = 12345;
    for (auto _ : state) {
        for (int i = 0; i < steps; ++i) {
            // LCG constants (Knuth MMIX) — arbitrary, only the dependency
            // chain matters.
            value = value * 6364136223846793005ULL + 1442695040888963407ULL;
            benchmark::DoNotOptimize(value);
        }
    }
    state.SetItemsProcessed(state.iterations() * steps);
}

/// Memory-latency-bound: a pointer chase through a buffer far larger than L2,
/// with a stride coprime to the slot count so it forms a single cycle covering
/// every slot and defeats the prefetcher. This is the regime grove insertion
/// lives in — chasing node and key pointers — so it is the more relevant of the
/// two controls when insert benchmarks move.
void BM_control_memory(benchmark::State& state) {
    constexpr std::size_t slots = (4u << 20) / sizeof(std::size_t);  // 4 MiB
    constexpr std::size_t stride = 1046527;  // prime, hence coprime to 2^19

    static const std::vector<std::size_t> ring = [] {
        std::vector<std::size_t> next(slots);
        for (std::size_t i = 0; i < slots; ++i) {
            next[i] = (i + stride) % slots;
        }
        return next;
    }();

    std::size_t index = 0;
    for (auto _ : state) {
        for (std::size_t i = 0; i < slots; ++i) {
            index = ring[index];
            benchmark::DoNotOptimize(index);
        }
    }
    state.SetItemsProcessed(state.iterations() * slots);
}

} // namespace

BENCHMARK(BM_control_cpu)->Unit(benchmark::kMicrosecond);
BENCHMARK(BM_control_memory)->Unit(benchmark::kMicrosecond);