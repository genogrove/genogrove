cmake_minimum_required(VERSION 3.14)
project(genogrove VERSION 0.0.1)

# export compile commands for IDEs
# check if debug mode then export compile commands
if(CMAKE_BUILD_TYPE STREQUAL "Debug")
  message(STATUS "Debug build - exporting compile commands")
  set(CMAKE_EXPORT_COMPILE_COMMANDS ON)
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
add_library(genogrove ${SOURCES})
target_include_directories(genogrove
        PUBLIC
        $<BUILD_INTERFACE:${CMAKE_CURRENT_SOURCE_DIR}/include>
        $<BUILD_INTERFACE:${CMAKE_CURRENT_BINARY_DIR}/include>
        $<INSTALL_INTERFACE:include>
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

##########################################
# Testing
##########################################
include(CTest)
if(BUILD_TESTING)
  enable_testing()
  add_subdirectory(tests)
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
        INCLUDES DESTINATION include
)

install(DIRECTORY include/genogrove
        DESTINATION include/genogrove
        FILES_MATCHING PATTERN "*.hpp"
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

write_basic_package_version_file(
        "${CMAKE_CURRENT_BINARY_DIR}/genogrove_config_version.cmake"
        VERSION ${PROJECT_VERSION}
        COMPATIBILITY SameMajorVersion
)

# create Config.cmake file
configure_package_config_file(
        "${CMAKE_CURRENT_SOURCE_DIR}/cmake/genogrove_config.cmake.in"
        "${CMAKE_CURRENT_BINARY_DIR}/genogrove_config.cmake"
        INSTALL_DESTINATION lib/cmake/genogrove
)

install(FILES
        "${CMAKE_CURRENT_BINARY_DIR}/genogrove_config.cmake"
        "${CMAKE_CURRENT_BINARY_DIR}/genogrove_config_version.cmake"
        DESTINATION lib/cmake/genogrove
)

# build the CLI if requested
option(BUILD_CLI "Building the commandline interface" OFF)
if(BUILD_CLI)
    message(STATUS "Building the commandline interface")
    add_subdirectory(cli)
endif()

##########################################
# Benchmarks
##########################################
option(BUILD_BENCHMARKS "Build benchmarks" OFF)
if(BUILD_BENCHMARKS)
    message(STATUS "Building benchmarks")
    add_subdirectory(benchmarks)
endif()




