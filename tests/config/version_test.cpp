#include <gtest/gtest.h>
#include <genogrove/config/version.hpp>

// retrieve version numbers from cmake to ensure they are set
#ifndef EXPECTED_VERSION_MAJOR
#define EXPECTED_VERSION_MAJOR -1 // fall back to -1 (if not set)
#endif

#ifndef EXPECTED_VERSION_MINOR
#define EXPECTED_VERSION_MINOR -1
#endif

#ifndef EXPECTED_VERSION_PATCH
#define EXPECTED_VERSION_PATCH -1
#endif

TEST(version_test, version_numbers_set) {
    EXPECT_GE(genogrove_VERSION_MAJOR, 0);
    EXPECT_GE(genogrove_VERSION_MINOR, 0);
    EXPECT_GE(genogrove_VERSION_PATCH, 0);
}

TEST(version_test, verion_numbers_match) {
    EXPECT_EQ(genogrove_VERSION_MAJOR, EXPECTED_VERSION_MAJOR);
    EXPECT_EQ(genogrove_VERSION_MINOR, EXPECTED_VERSION_MINOR);
    EXPECT_EQ(genogrove_VERSION_PATCH, EXPECTED_VERSION_PATCH);
}