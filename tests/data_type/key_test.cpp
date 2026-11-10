/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <concepts>
#include <sstream>
#include <stdexcept>
#include <string>
#include <type_traits>
#include <utility>

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

TEST(keyTest, serializeRoundTripWithoutData) {
    gdt::key<gdt::interval> original(gdt::interval{10, 20});
    std::stringstream ss;
    original.serialize(ss);

    auto restored = gdt::key<gdt::interval>::deserialize(ss);
    EXPECT_EQ(restored.get_value(), original.get_value());
    EXPECT_FALSE(restored.has_data());
}

TEST(keyTest, serializeRoundTripWithData) {
    gdt::key<gdt::interval, std::string> original(gdt::interval{10, 20}, "payload");
    std::stringstream ss;
    original.serialize(ss);

    auto restored = gdt::key<gdt::interval, std::string>::deserialize(ss);
    EXPECT_EQ(restored.get_value(), original.get_value());
    EXPECT_EQ(restored.get_data(), "payload");
}

TEST(keyTest, serializeConsumesExactlyOneKey) {
    // Two keys written back to back must be read back in order: deserialize()
    // may not read past the end of the key it was asked for.
    gdt::key<gdt::interval, int> first(gdt::interval{1, 2}, 10);
    gdt::key<gdt::interval, int> second(gdt::interval{3, 4}, 20);
    std::stringstream ss;
    first.serialize(ss);
    const auto first_end = ss.tellp();
    second.serialize(ss);
    const auto second_end = ss.tellp();

    auto r1 = gdt::key<gdt::interval, int>::deserialize(ss);
    EXPECT_EQ(ss.tellg(), first_end);
    auto r2 = gdt::key<gdt::interval, int>::deserialize(ss);
    EXPECT_EQ(ss.tellg(), second_end);
    EXPECT_EQ(r1.get_value(), first.get_value());
    EXPECT_EQ(r1.get_data(), 10);
    EXPECT_EQ(r2.get_value(), second.get_value());
    EXPECT_EQ(r2.get_data(), 20);
}

TEST(keyTest, toStringDelegatesToValue) {
    const gdt::interval iv{10, 20};
    gdt::key<gdt::interval, int> k(iv, 7);
    EXPECT_EQ(k.to_string(), iv.to_string());
}

TEST(keyTest, comparisonUsesValueOnly) {
    // #332: data is decoration. Equal values compare equal whatever the data is.
    gdt::key<gdt::interval, int> a(gdt::interval{10, 20}, 1);
    gdt::key<gdt::interval, int> same_value(gdt::interval{10, 20}, 2);
    gdt::key<gdt::interval, int> later(gdt::interval{30, 40}, 0);

    EXPECT_TRUE(a == same_value);
    EXPECT_FALSE(a < same_value);
    EXPECT_FALSE(a > same_value);

    EXPECT_FALSE(a == later);
    EXPECT_TRUE(a < later);
    EXPECT_TRUE(later > a);
    EXPECT_FALSE(later < a);
}

namespace {
// A payload whose moves throw (copies are fine).
struct throwing_payload {
    throwing_payload() = default;
    throwing_payload(const throwing_payload&) = default;
    throwing_payload& operator=(const throwing_payload&) = default;
    throwing_payload(throwing_payload&&) { throw std::runtime_error("move failed"); }
    throwing_payload& operator=(throwing_payload&&) { throw std::runtime_error("move failed"); }
};

using throwing_key = gdt::key<gdt::interval, throwing_payload>;
}  // namespace

TEST(keyTest, moveIsNoexceptOnlyWhenThePayloadMoveIs) {
    static_assert(std::is_nothrow_move_constructible_v<gdt::key<gdt::interval, int>>);
    static_assert(std::is_nothrow_move_assignable_v<gdt::key<gdt::interval, std::string>>);
    static_assert(!std::is_nothrow_move_constructible_v<throwing_key>);
    static_assert(!std::is_nothrow_move_assignable_v<throwing_key>);
}

TEST(keyTest, throwingPayloadMovePropagatesInsteadOfTerminating) {
    // A defaulted move that was declared noexcept would call std::terminate here.
    throwing_payload payload;
    throwing_key src(gdt::interval{0, 5}, payload);  // copies the payload
    EXPECT_THROW(throwing_key moved(std::move(src)), std::runtime_error);

    throwing_key assign_src(gdt::interval{0, 5}, payload);
    throwing_key dst(gdt::interval{1, 2}, payload);
    EXPECT_THROW(dst = std::move(assign_src), std::runtime_error);
}
