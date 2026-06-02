/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

// =============================================================================
// Dataless grove (data_type = void)
//
// Regression coverage for #444: completing grove<key_type> with the default
// data_type = void instantiates every member *declaration*. The data-carrying
// members guarded by `requires (!std::is_void_v<data_type>)` must not produce a
// `void`-typed parameter at that point, or the type is uncompilable. The whole
// suite never attached data before, so this configuration was never exercised.
// =============================================================================

// Completing the type instantiates all member declarations — the core check.
// grove<gdt::interval> uses the default data_type = void, so this is genuinely
// the dataless configuration.
static_assert(sizeof(gst::grove<gdt::interval>) > 0,
              "dataless grove<interval> must be a complete type (#444)");

// A dataless grove must NOT expose the data-carrying overloads — overload
// probing must report them as not callable, rather than selecting them and
// then failing hard in the body (the constraint gates on the grove's own
// data_type, not the deduced argument type). Guards the regression surfaced by
// the Codex review on #445.
static_assert(!requires(gst::grove<gdt::interval> g, gdt::interval iv) {
    g.insert_data("chr1", iv, 1);
}, "dataless grove must not expose a data-carrying insert_data overload");

static_assert(!requires(gst::grove<gdt::interval> g, gdt::interval iv) {
    g.add_external_key(iv, 1);
}, "dataless grove must not expose a data-carrying add_external_key overload");

TEST(DatalessGroveTest, InsertAndQuery) {
    gst::grove<gdt::interval> g(3);

    gdt::key<gdt::interval> k1(gdt::interval{100, 200});
    gdt::key<gdt::interval> k2(gdt::interval{300, 400});
    g.insert("chr1", k1);
    g.insert("chr1", k2);

    auto result = g.intersect(gdt::interval{150, 350}, "chr1");
    EXPECT_EQ(result.get_keys().size(), 2u);
}

TEST(DatalessGroveTest, NonOverlappingQueryReturnsEmpty) {
    gst::grove<gdt::interval> g(3);

    gdt::key<gdt::interval> k(gdt::interval{100, 200});
    g.insert("chr1", k);

    auto result = g.intersect(gdt::interval{300, 400}, "chr1");
    EXPECT_TRUE(result.get_keys().empty());
}

TEST(DatalessGroveTest, ExternalKeyAndEdge) {
    gst::grove<gdt::interval> g(3);

    gdt::key<gdt::interval> k(gdt::interval{1000, 1200});
    auto* indexed = g.insert("chr1", k);

    // The void-data add_external_key overload (no data argument).
    auto* external = g.add_external_key(gdt::interval{5000, 5500});
    ASSERT_NE(indexed, nullptr);
    ASSERT_NE(external, nullptr);

    g.add_edge(indexed, external);
    EXPECT_TRUE(g.has_edge(indexed, external));
}