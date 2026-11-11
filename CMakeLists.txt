cmake_minimum_required(VERSION 3.14)
project(genogrove VERSION 0.27.0)

find_package(PkgConfig REQUIRED)
find_package(ZLIB REQUIRED)
pkg_check_modules(HTSLIB REQUIRED IMPORTED_TARGET GLOBAL htslib)

# export compile commands for IDEs
# check if debug mode then export compile commands
if(CMAKE_BUILD_TYPE STREQUAL "Debug")
  message(STATUS "Debug build - exporting compile commands")
  set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
endif()

# genogrove requires at least C++20
if(NOT DEFINED CMAKE_CXX_STANDARD)
    message(STATUS "CMAKE_CXX_STANDARD not set - defaulting to C++20")
    set(CMAKE_CXX_STANDARD 20)
    set(CMAKE_CXX_STANDARD_REQUIRED ON)
elseif(CMAKE_CXX_STANDARD LESS 20)
    message(FATAL_ERROR "genogrove requires at least C++20")
endif()


# Sanitizer support
option(ENABLE_SANITIZER "Enable sanitizers (address, leak, undefined)" OFF)
if(ENABLE_SANITIZER)
  message(STATUS "Sanitizers enabled")
  set(SANITIZER_FLAGS "-fsanitize=address,undefined -fno-omit-frame-pointer -g")
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${SANITIZER_FLAGS}")
  set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} ${SANITIZER_FLAGS}")
  set(CMAKE_EXE_LINKER_FLAGS "${CMAKE_EXE_LINKER_FLAGS} ${SANITIZER_FLAGS}")
endif()

# create the genogrove library
FILE(GLOB SOURCES "src/*.cpp")
FILE(GLOB SOURCES_DATA_TYPE "src/data_type/*.cpp")
FILE(GLOB SOURCES_IO "src/io/*.cpp")
add_library(genogrove ${SOURCES} ${SOURCES_DATA_TYPE} ${SOURCES_IO})
target_include_directories(genogrove
        PUBLIC
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
        $<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}/include>
        $<INSTALL_INTERFACE:include>
)
# htslib as a target keeps host paths out of the installed package; the package config finds it again.
target_link_libraries(genogrove PUBLIC PkgConfig::HTSLIB ZLIB::ZLIB)
# Consumers get the C++ standard from the target.
target_compile_features(genogrove PUBLIC cxx_std_20)

# Set RPATH for runtime library discovery
set_target_properties(genogrove PROPERTIES
    BUILD_RPATH "${HTSLIB_LIBRARY_DIRS}"
    INSTALL_RPATH "${HTSLIB_LIBRARY_DIRS}"
)

#
#include(GenerateExportHeader)
#generate_export_header(genogrove
#    EXPORT_FILE_NAME ${CMAKE_CURRENT_BINARY_DIR}/genogrove_export.h
#)

##########################################
# Version configuration
##########################################
configure_file(
        include/genogrove/config/version.hpp.in
        ${CMAKE_CURRENT_BINARY_DIR}/include/genogrove/config/version.hpp
)

# build the CLI if requested (before tests so CLI targets are available for CLI tests)
option(BUILD_CLI "Building the commandline interface" OFF)
if(BUILD_CLI)
    message(STATUS "Building the commandline interface")
    add_subdirectory(cli)
endif()

##########################################
# Testing
##########################################
include(CTest)
if(BUILD_TESTING)
  enable_testing()
  add_subdirectory(tests ${CMAKE_BINARY_DIR}/tests)
endif()

##########################################
# Install and export
##########################################
include(CMakePackageConfigHelpers)
install(
        TARGETS genogrove
        EXPORT genogrove_targets
        LIBRARY DESTINATION lib
        ARCHIVE DESTINATION lib
        RUNTIME DESTINATION bin
)

install(DIRECTORY include/genogrove
        DESTINATION include
        FILES_MATCHING PATTERN "*.hpp" PATTERN "*.ipp"
)
# The generated version header lives in the build tree.
install(FILES "${CMAKE_CURRENT_BINARY_DIR}/include/genogrove/config/version.hpp"
        DESTINATION include/genogrove/config
)
# uncomment when install on windows
#install(FILES ${CMAKE_CURRENT_BINARY_DIR}/genogrove_export.h DESTINATION include/genogrove)

export(EXPORT genogrove_targets
        FILE "${CMAKE_CURRENT_BINARY_DIR}/genogrove_targets.cmake"
        NAMESPACE genogrove::
)
install(EXPORT genogrove_targets
        FILE genogrove_targets.cmake
        NAMESPACE genogrove::
        DESTINATION lib/cmake/genogrove
) # allows "find_package(genogrove)"

# find_package(genogrove CONFIG) expects these file names.
write_basic_package_version_file(
        "${CMAKE_CURRENT_BINARY_DIR}/genogrove-config-version.cmake"
        VERSION ${PROJECT_VERSION}
        COMPATIBILITY SameMajorVersion
)

# create the package config file
configure_package_config_file(
        "${CMAKE_CURRENT_SOURCE_DIR}/cmake/genogrove_config.cmake.in"
        "${CMAKE_CURRENT_BINARY_DIR}/genogrove-config.cmake"
        INSTALL_DESTINATION lib/cmake/genogrove
)

install(FILES
        "${CMAKE_CURRENT_BINARY_DIR}/genogrove-config.cmake"
        "${CMAKE_CURRENT_BINARY_DIR}/genogrove-config-version.cmake"
        DESTINATION lib/cmake/genogrove
)

##########################################
# Benchmarks
##########################################
option(BUILD_BENCHMARKS "Build benchmarks" OFF)
if(BUILD_BENCHMARKS)
    message(STATUS "Building benchmarks")
    add_subdirectory(benchmarks)
endif()




