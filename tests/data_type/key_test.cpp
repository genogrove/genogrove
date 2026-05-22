/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <concepts>

// Genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>

namespace gdt = genogrove::data_type;

TEST(keyTest, defaultConstructible) {
    // #381: key<T, void> (no associated data) must be default-constructible.
    // The primary default ctor requires data_t to be default-initializable,
    // which void is not — so the data-less form needs its own default ctor.
    static_assert(std::default_initializable<gdt::key<gdt::interval>>,
        "key<T, void> must be default-constructible");
    static_assert(std::default_initializable<gdt::key<gdt::interval, int>>,
        "key<T, int> must be default-constructible");

    gdt::key<gdt::interval> k;
    EXPECT_FALSE(k.has_data());
}