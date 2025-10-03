message(STATUS "Building tests")
include(FetchContent)
FetchContent_Declare(
        googletest
        GIT_REPOSITORY https://github.com/google/googletest.git
        GIT_TAG v1.16.0
)
FetchContent_MakeAvailable(googletest)
include(GoogleTest)

# config
FILE(GLOB TEST_SOURCES_CONFIG "./config/*.cpp")
add_executable(genogrove_config_tests ${TEST_SOURCES_CONFIG})
target_include_directories(
        genogrove_config_tests
        PUBLIC
        ${CMAKE_CURRENT_SOURCE_DIR}/../include
        ${CMAKE_CURRENT_BINARY_DIR}/../include # important as we configure the version in the build tree
)
target_link_libraries(genogrove_config_tests GTest::gtest GTest::gtest_main)
target_compile_definitions(
        genogrove_config_tests
        PRIVATE
        EXPECTED_VERSION_MAJOR=${GENOGROVE_VERSION_MAJOR}
        EXPECTED_VERSION_MINOR=${GENOGROVE_VERSION_MINOR}
        EXPECTED_VERSION_PATCH=${GENOGROVE_VERSION_PATCH}
)
gtest_discover_tests(genogrove_config_tests)

# data_type
FILE(GLOB TEST_SOURCES_DATA_TYPE "./data_type/*.cpp")
add_executable(genogrove_data_type_tests ${TEST_SOURCES_DATA_TYPE})
target_link_libraries(genogrove_data_type_tests
        genogrove
        GTest::gtest
        GTest::gtest_main
)
gtest_discover_tests(genogrove_data_type_tests)

# utility
FILE(GLOB TEST_SOURCES_UTILITY "./utility/*.cpp")
add_executable(genogrove_utility_tests ${TEST_SOURCES_UTILITY})
target_link_libraries(genogrove_utility_tests
        genogrove
        GTest::gtest
        GTest::gtest_main
)
gtest_discover_tests(genogrove_utility_tests)

# structure
FILE(GLOB TEST_SOURCES_STRUCTURE "./structure/*.cpp")
add_executable(genogrove_structure_tests ${TEST_SOURCES_STRUCTURE})
target_link_libraries(genogrove_structure_tests
        genogrove
        GTest::gtest
        GTest::gtest_main
)


