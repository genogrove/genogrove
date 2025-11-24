cmake_minimum_required(VERSION 3.14)
project(genogrove_cli VERSION 0.0.1)

set(CMAKE_CXX_STANDARD 20)
set(CPM_DOWNLOAD_VERSION v0.40.2)
set(CPM_HASH_SUM "c8cdc32c03816538ce22781ed72964dc864b2a34a310d3b7104812a5ca2d835d")

if(NOT EXISTS ${CMAKE_BINARY_DIR}/cmake/CPM.cmake)
    file(DOWNLOAD
            https://github.com/cpm-cmake/CPM.cmake/releases/download/${CPM_DOWNLOAD_VERSION}/CPM.cmake
            ${CMAKE_BINARY_DIR}/cmake/CPM.cmake
            EXPECTED_HASH SHA256=${CPM_HASH_SUM})
endif()
include(${CMAKE_BINARY_DIR}/cmake/CPM.cmake)

# add packages
CPMAddPackage(
        NAME cxxopts
        GITHUB_REPOSITORY jarro2783/cxxopts
        VERSION 3.2.0
        OPTIONS
        "CXXOPTS_BUILD_EXAMPLES OFF"
        "CXXOPTS_BUILD_TESTS OFF"
)
CPMAddPackage(
        NAME zlib
        GITHUB_REPOSITORY madler/zlib
        GIT_TAG v1.3.1
)
## add the actual genogrove
#CPMAddPackage(
#        NAME genogrove
#        GITHUB_REPOSITORY genogrove/genogrove
#        GIT_TAG v0.3.0
#)

find_package(PkgConfig REQUIRED)
pkg_check_modules(HTSLIB REQUIRED htslib)

# sources
file(GLOB LIB_SOURCES ../src/*.cpp)
file(GLOB CLI_SOURCES src/*.cpp)

add_executable(genogrove-cli ${LIB_SOURCES} ${CLI_SOURCES})
target_include_directories(genogrove-cli PUBLIC ${cxxopts_SOURCE_DIR}/include) # include cxxopts headers
target_include_directories(genogrove-cli PUBLIC "${CMAKE_CURRENT_SOURCE_DIR}/../include/") # genogrove header files
target_include_directories(genogrove-cli PUBLIC "{HTSLIB_INCLUDE_DIRS}") # htslib header files
target_include_directories(genogrove-cli PUBLIC include) # include genogrove_cli headers

target_link_libraries(genogrove-cli cxxopts zlibstatic)
target_link_libraries(genogrove-cli ${HTSLIB_LIBRARIES})

# set the output directory for the executable
set_target_properties(genogrove-cli PROPERTIES
        OUTPUT_NAME genogrove
        RUNTIME_OUTPUT_DIRECTORY ${CMAKE_BINARY_DIR}/bin
)