cmake_minimum_required(VERSION 3.10)
project(genogrove VERSION 0.0.1)

# export compile commands for IDEs
# check if debug mode then export compile commands
if(CMAKE_BUILD_TYPE STREQUAL "Debug")
  message(STATUS "Debug build - exporting compile commands")
  set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
endif()

# genogrove requires at least C++17
if(NOT DEFINED CMAKE_CXX_STANDARD)
  message(STATUS "CMAKE_CXX_STANDARD not set - defaulting to C++20")
  set(CMAKE_CXX_STANDARD 20)
  set(CMAKE_CXX_STANDARD_REQUIRED ON)
elseif(CMAKE_CXX_STANDARD LESS 17)
  message(FATAL_ERROR "genogrove requires at least C++17")
endif()

# create the genogrove library
FILE(GLOB SOURCES "src/*.cpp")
add_library(genogrove ${SOURCES})
target_include_directories(genogrove
        PUBLIC
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
        $<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}/include>
)

# if using C++17, we need to add range-v3 (utility dependency)
if(CMAKE_CXX_STANDARD EQUAL 17)
  message(STATUS "C++17 detected, adding range-v3 dependency")
  include(FetchContent)
  FetchContent_Declare(
            range-v3
            GIT_REPOSITORY https://github.com/ericniebler/range-v3.git
            GIT_TAG 0.12.0
    )
  FetchContent_MakeAvailable(range-v3)
  target_link_libraries(genogrove INTERFACE range-v3::range-v3)
endif()

# configure version of the library
configure_file(
        include/genogrove/config/version.hpp.in
        ${CMAKE_CURRENT_BINARY_DIR}/include/genogrove/config/version.hpp
)

# optionally include tests
if(BUILD_TESTING)
  enable_testing()
  add_subdirectory(tests)
endif()
