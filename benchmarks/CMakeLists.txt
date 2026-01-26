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
        grove_creation.cpp)

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

# enable optimization for benchmarks
if(CMAKE_CXX_COMPILER_ID MATCHES "GNU|Clang")
    target_compile_options(genogrove_benchmarks PRIVATE
            -O3
            -march=native
            -DNDEBUG
    )
    target_compile_options(genogrove_cli_benchmarks PRIVATE
            -O3
            -march=native
            -DNDEBUG
    )
endif()