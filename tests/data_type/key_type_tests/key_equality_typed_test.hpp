/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Shared typed-test suite for the generic `gdt::key<>` operator== contract.
// Mirrors the per-key-type pattern from tests/structure/key_type_grove_test.hpp.
//
// Per-type instantiation (in each <type>_key_test.cpp):
//
//   template<>
//   struct key_equality_traits<gdt::interval> {
//       static gdt::interval value_a() { return gdt::interval{10, 20}; }
//       static gdt::interval value_b_different() { return gdt::interval{30, 40}; }
//   };
//
//   using IntervalKeyEqTypes = ::testing::Types<gdt::interval>;
//   INSTANTIATE_TYPED_TEST_SUITE_P(Interval, key_equality_typed_test, IntervalKeyEqTypes);

#ifndef GENOGROVE_TESTS_DATA_TYPE_KEY_EQUALITY_TYPED_TEST_HPP
#define GENOGROVE_TESTS_DATA_TYPE_KEY_EQUALITY_TYPED_TEST_HPP

#include <gtest/gtest.h>

#include <concepts>
#include <string>
#include <type_traits>

#include <genogrove/data_type/key.hpp>

namespace gdt = genogrove::data_type;

namespace key_equality_test_support {

// Data type with no operator==. Used to confirm key equality no longer
// requires data_type to be equality-comparable after #332.
struct opaque_data {
    int payload;
    // intentionally no operator==
};

// Per-key-type traits providing two distinct sample values. Each
// `<type>_key_test.cpp` specializes this for its own key type.
template <typename KeyType>
struct key_equality_traits;

} // namespace key_equality_test_support

// =============================================================================
// Typed test suite — equality contract for the generic `gdt::key<>` class
// =============================================================================
//
// Design decision (#332): key equality is determined purely by `value`. The
// associated `data_type` is treated as decoration and ignored. This matches
// the B+ tree's notion of identity (the tree orders by `value::operator<`)
// and frees `data_type` from needing its own `operator==`.

template <typename KeyType>
class key_equality_typed_test : public ::testing::Test {};

TYPED_TEST_SUITE_P(key_equality_typed_test);

TYPED_TEST_P(key_equality_typed_test, equality_compares_value_only) {
    using key_t = TypeParam;
    using traits = key_equality_test_support::key_equality_traits<key_t>;

    const auto va = traits::value_a();
    const auto vb = traits::value_b_different();

    gdt::key<key_t, int> k1(va, 1);
    gdt::key<key_t, int> k2(va, 2);   // same value, different data
    gdt::key<key_t, int> k3(vb, 1);   // different value, same data

    EXPECT_TRUE(k1 == k2)
        << "Same value, different data should compare equal (key equality "
           "compares value only, #332).";
    EXPECT_FALSE(k1 == k3)
        << "Different value should compare unequal regardless of data.";
}

TYPED_TEST_P(key_equality_typed_test, equality_available_for_non_comparable_data) {
    // Pre-#332 operator== called `data == other.data`, so any key with a
    // non-comparable data_type either failed to compile or had a broken
    // operator==. Post-fix the operator only touches value, so this works.
    using key_t = TypeParam;
    using opaque = key_equality_test_support::opaque_data;

    static_assert(std::equality_comparable<gdt::key<key_t, opaque>>,
        "key<KeyType, opaque_data> must be equality_comparable even though "
        "opaque_data has no operator== — key equality compares value only (#332).");

    // Sanity: standard data_types remain comparable.
    static_assert(std::equality_comparable<gdt::key<key_t, int>>);
    static_assert(std::equality_comparable<gdt::key<key_t, std::string>>);
    static_assert(std::equality_comparable<gdt::key<key_t, void>>);
}

TYPED_TEST_P(key_equality_typed_test, ordering_compares_value_only) {
    using key_t = TypeParam;
    using traits = key_equality_test_support::key_equality_traits<key_t>;

    const auto va = traits::value_a();
    const auto vb = traits::value_b_different();

    // Pick the smaller of the two trait values as the "low" side so the
    // ordering assertions hold regardless of which order the traits return.
    const auto& lo = (va < vb) ? va : vb;
    const auto& hi = (va < vb) ? vb : va;

    gdt::key<key_t, int> k_lo_a(lo, 1);
    gdt::key<key_t, int> k_lo_b(lo, 2);   // same value, different data
    gdt::key<key_t, int> k_hi  (hi, 1);

    EXPECT_TRUE(k_lo_a < k_hi);
    EXPECT_TRUE(k_hi   > k_lo_a);
    EXPECT_FALSE(k_lo_a < k_lo_b)
        << "Ordering compares value only; same value must not be strictly less.";
    EXPECT_FALSE(k_lo_a > k_lo_b);
}

REGISTER_TYPED_TEST_SUITE_P(
    key_equality_typed_test,
    equality_compares_value_only,
    equality_available_for_non_comparable_data,
    ordering_compares_value_only);

#endif // GENOGROVE_TESTS_DATA_TYPE_KEY_EQUALITY_TYPED_TEST_HPP