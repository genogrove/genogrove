# A separate project that uses an installed genogrove package. It sets no C++
# standard and no include or library paths: everything must come from the package.
cmake_minimum_required(VERSION 3.14)
project(genogrove_consumer CXX)

find_package(genogrove CONFIG REQUIRED)

add_executable(consumer main.cpp)
target_link_libraries(consumer PRIVATE genogrove::genogrove)
