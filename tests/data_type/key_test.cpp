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

// Named concepts for the data-accessor detection below. A named concept
// evaluates its requires-body in a proper SFINAE context; an inline
// `requires{ k.set_data(x); }` inside static_assert hard-errors on some
// compilers when every overload is constraint-removed, so route through these.
template <class K, class V>
concept can_set_data = requires(K k, V v) { k.set_data(v); };
template <class K>
concept can_get_data = requires(K k) { k.get_data(); };

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

TEST(keyTest, dataAccessorsConstrainedOnDataType) {
    // #488: the data accessors must gate on data_t, not the deduced argument.
    // On a dataless key<T, void>, set_data/get_data must be cleanly removed from
    // overload resolution (SFINAE), not hard-error deep in the body.
    static_assert(!can_set_data<gdt::key<gdt::interval>, int>,
        "set_data must not be callable on a dataless key<T, void>");
    static_assert(!can_get_data<gdt::key<gdt::interval>>,
        "get_data must not be callable on a dataless key<T, void>");

    // ...and remain available on a key that does carry data.
    static_assert(can_set_data<gdt::key<gdt::interval, int>, int>,
        "set_data must be callable on key<T, int>");
    static_assert(can_get_data<gdt::key<gdt::interval, int>>,
        "get_data must be callable on key<T, int>");
}