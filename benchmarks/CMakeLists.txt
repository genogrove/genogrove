include(FetchContent)

# Don't build benchmark tests or use bundled gtest
set(BENCHMARK_ENABLE_TESTING OFF CACHE BOOL "" FORCE)
set(BENCHMARK_ENABLE_GTEST_TESTS OFF CACHE BOOL "" FORCE)
set(BENCHMARK_ENABLE_INSTALL OFF CACHE BOOL "" FORCE)
set(BENCHMARK_USE_BUNDLED_GTEST OFF CACHE BOOL "" FORCE)

FetchContent_Declare(
        benchmark
        GIT_REPOSITORY https://github.com/google/benchmark.git
        GIT_TAG v1.9.4
)
FetchContent_MakeAvailable(benchmark)
add_executable(genogrove_benchmarks
        control.cpp
        grove_creation.cpp
        grove_serialization.cpp
        grove_view_read.cpp)

target_link_libraries(genogrove_benchmarks
        PRIVATE
        genogrove
        benchmark::benchmark
        benchmark::benchmark_main
)

# CLI benchmarks (tests the actual CLI binary via subprocess)
add_executable(genogrove_cli_benchmarks
        cli_benchmark.cpp)

target_link_libraries(genogrove_cli_benchmarks
        PRIVATE
        benchmark::benchmark
        benchmark::benchmark_main
)

# Enable optimization for benchmarks.
#
# Deliberately NOT -march=native: the continuous-benchmarking job runs on
# whatever shared host GitHub hands out, and those differ in CPU model, so
# -march=native compiles *different code* on different runs. Comparing a commit
# against its predecessor then also compares two codegen targets, which is not a
# comparison anyone can act on. A fixed baseline keeps the binary identical
# across runs so a timing change means a code change (or a slower host, which
# the control benchmarks in control.cpp expose).
#
# x86-64-v2 (SSE4.2/POPCNT, 2009+) is supported by every GitHub-hosted x86
# runner. Other architectures just get -O3; benchmarks are only compared to
# themselves on the same architecture.
set(GENOGROVE_BENCHMARK_OPTIONS -O3 -DNDEBUG)
if(CMAKE_SYSTEM_PROCESSOR MATCHES "x86_64|AMD64")
    list(APPEND GENOGROVE_BENCHMARK_OPTIONS -march=x86-64-v2)
endif()

if(CMAKE_CXX_COMPILER_ID MATCHES "GNU|Clang")
    target_compile_options(genogrove_benchmarks PRIVATE ${GENOGROVE_BENCHMARK_OPTIONS})
    target_compile_options(genogrove_cli_benchmarks PRIVATE ${GENOGROVE_BENCHMARK_OPTIONS})
endif()