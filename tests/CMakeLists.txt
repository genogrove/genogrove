message(STATUS "Building tests")

# enable ctest
enable_testing()

include(FetchContent)

# Prevent GoogleTest from using system-installed gtest
set(CMAKE_DISABLE_FIND_PACKAGE_GTest TRUE)

FetchContent_Declare(
        googletest
        GIT_REPOSITORY https://github.com/google/googletest.git
        GIT_TAG v1.15.2
)
# Disable gmock build to avoid compatibility issues with LLVM 20
set(BUILD_GMOCK OFF CACHE BOOL "" FORCE)
FetchContent_MakeAvailable(googletest)

# Force fetched googletest headers to be used before system headers
include_directories(BEFORE SYSTEM
    ${googletest_SOURCE_DIR}/googletest/include
    ${googletest_SOURCE_DIR}/googlemock/include
)

include(GoogleTest)

# ----------------------------
# CONFIG TESTS
# ----------------------------
FILE(GLOB TEST_SOURCES_CONFIG "./config/*.cpp")
add_executable(genogrove_config_tests ${TEST_SOURCES_CONFIG})
target_include_directories(
        genogrove_config_tests
        PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/../include
        ${CMAKE_CURRENT_BINARY_DIR}/../include # important as we configure the version in the build tree
)
target_link_libraries(genogrove_config_tests gtest gtest_main)
target_compile_definitions(
        genogrove_config_tests
        PRIVATE
        EXPECTED_VERSION_MAJOR=${genogrove_VERSION_MAJOR}
        EXPECTED_VERSION_MINOR=${genogrove_VERSION_MINOR}
        EXPECTED_VERSION_PATCH=${genogrove_VERSION_PATCH}
)
gtest_discover_tests(genogrove_config_tests)

# ----------------------------
# DATA_TYPE TESTS
# ----------------------------
FILE(GLOB TEST_SOURCES_DATA_TYPE "./data_type/*.cpp")
add_executable(genogrove_data_type_tests ${TEST_SOURCES_DATA_TYPE})
target_include_directories(
        genogrove_data_type_tests
        PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/../include
)
target_link_libraries(genogrove_data_type_tests genogrove gtest gtest_main)
gtest_discover_tests(genogrove_data_type_tests)

# ----------------------------
# UTILITY TESTS
# ----------------------------
FILE(GLOB TEST_SOURCES_UTILITY "./utility/*.cpp")
add_executable(genogrove_utility_tests ${TEST_SOURCES_UTILITY})
target_include_directories(
        genogrove_utility_tests
        PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/../include
)
target_link_libraries(genogrove_utility_tests genogrove gtest gtest_main)
gtest_discover_tests(genogrove_utility_tests)

# ----------------------------
# STRUCTURE TESTS
# ----------------------------
FILE(GLOB TEST_SOURCES_STRUCTURE "./structure/*.cpp")
add_executable(genogrove_structure_tests ${TEST_SOURCES_STRUCTURE})
target_include_directories(
        genogrove_structure_tests
        PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/../include
)
target_link_libraries(genogrove_structure_tests genogrove gtest gtest_main)
gtest_discover_tests(genogrove_structure_tests)


