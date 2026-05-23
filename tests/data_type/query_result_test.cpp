/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <string>
#include <type_traits>
#include <utility>
#include <vector>

// genogrove
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/data_type/flanking_query_result.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/numeric.hpp>
#include <genogrove/data_type/genomic_coordinate.hpp>

namespace gdt = genogrove::data_type;

TEST(query_result_test, constructor) {
    // Create a query result object, lets assume the query in an interval
    const gdt::interval query_interval(10, 20);
    const gdt::query_result<gdt::interval, int> query(query_interval); // initialize with query (aka interval)

    // verify initial state
    EXPECT_EQ(query_interval, query.get_query());
    EXPECT_TRUE(query.get_keys().empty());
}

TEST(query_result_test, add_keys_with_data) {
    gdt::interval query_interval(10, 20);
    gdt::query_result<gdt::interval, int> results(query_interval);

    // create test intervals
    const gdt::interval intvl0(5,15);
    const gdt::interval intvl1(12,22);
    const gdt::interval intvl2(18,25);
    const gdt::interval intvl3(30, 40);

    // create 'overlapping' keys (as query results)
    gdt::key<gdt::interval, int> key0(intvl0, 5);
    gdt::key<gdt::interval, int> key1(intvl1, 15);
    gdt::key<gdt::interval, int> key2(intvl2, 18);

    // add keys to query_results
    results.add_key(&key0);
    results.add_key(&key1);
    results.add_key(&key2);

    // verify that keys were added correctly
    const auto keys = results.get_keys();

    // verify associated data
    EXPECT_EQ(keys.size(), 3);
    EXPECT_TRUE(keys[0]->has_data());
    EXPECT_TRUE(keys[1]->has_data());
    EXPECT_TRUE(keys[2]->has_data());

    // retrieve associated data
    EXPECT_EQ(keys[0]->get_data(), 5);
    EXPECT_EQ(keys[1]->get_data(), 15);
    EXPECT_EQ(keys[2]->get_data(), 18);
}

TEST(query_result_test, void_data_type) {
    gdt::interval query_interval(10, 20);
    gdt::query_result<gdt::interval> results(query_interval);

    gdt::key<gdt::interval> key0(gdt::interval(5, 15));
    gdt::key<gdt::interval> key1(gdt::interval(12, 22));

    results.add_key(&key0);
    results.add_key(&key1);

    EXPECT_EQ(results.get_query(), query_interval);
    EXPECT_EQ(results.get_keys().size(), 2);
    EXPECT_EQ(results.get_keys()[0]->get_value(), gdt::interval(5, 15));
    EXPECT_EQ(results.get_keys()[1]->get_value(), gdt::interval(12, 22));
}

TEST(query_result_test, empty_result) {
    gdt::interval query_interval(100, 200);
    gdt::query_result<gdt::interval, int> results(query_interval);

    EXPECT_EQ(results.get_query(), query_interval);
    EXPECT_TRUE(results.get_keys().empty());
    EXPECT_EQ(results.get_keys().size(), 0);
}

TEST(query_result_test, key_ordering_preserved) {
    gdt::interval query_interval(0, 100);
    gdt::query_result<gdt::interval> results(query_interval);

    gdt::key<gdt::interval> key0(gdt::interval(50, 60));
    gdt::key<gdt::interval> key1(gdt::interval(10, 20));
    gdt::key<gdt::interval> key2(gdt::interval(80, 90));

    // Insert in non-sorted order — result should preserve insertion order
    results.add_key(&key0);
    results.add_key(&key1);
    results.add_key(&key2);

    auto keys = results.get_keys();
    ASSERT_EQ(keys.size(), 3);
    EXPECT_EQ(keys[0]->get_value(), gdt::interval(50, 60));
    EXPECT_EQ(keys[1]->get_value(), gdt::interval(10, 20));
    EXPECT_EQ(keys[2]->get_value(), gdt::interval(80, 90));
}

TEST(query_result_test, with_numeric_key) {
    gdt::numeric query_val(42);
    gdt::query_result<gdt::numeric> results(query_val);

    gdt::key<gdt::numeric> key0(gdt::numeric(42));
    results.add_key(&key0);

    EXPECT_EQ(results.get_query(), query_val);
    ASSERT_EQ(results.get_keys().size(), 1);
    EXPECT_EQ(results.get_keys()[0]->get_value(), gdt::numeric(42));
}

TEST(query_result_test, with_genomic_coordinate_key) {
    gdt::genomic_coordinate query_coord('+', 100, 200);
    gdt::query_result<gdt::genomic_coordinate, std::string> results(query_coord);

    gdt::key<gdt::genomic_coordinate, std::string> key0(
        gdt::genomic_coordinate('+', 90, 150), "exon1");
    gdt::key<gdt::genomic_coordinate, std::string> key1(
        gdt::genomic_coordinate('+', 180, 250), "exon2");

    results.add_key(&key0);
    results.add_key(&key1);

    EXPECT_EQ(results.get_query(), query_coord);
    ASSERT_EQ(results.get_keys().size(), 2);
    EXPECT_EQ(results.get_keys()[0]->get_data(), "exon1");
    EXPECT_EQ(results.get_keys()[1]->get_data(), "exon2");
}

TEST(query_result_test, add_null_key_throws) {
    gdt::interval query_interval(10, 20);
    gdt::query_result<gdt::interval> results(query_interval);

    EXPECT_THROW(results.add_key(nullptr), std::invalid_argument);
    EXPECT_TRUE(results.get_keys().empty());
}

// =============================================================================
// Pointer-type contract (#435)
// =============================================================================

// Pins the get_keys() return type: must be a const-reference to a vector of
// non-const `key*`, so callers can feed result keys straight back into
// mutating graph operations (`add_edge`, `link_if`, …) without a
// `const_cast`. The const-pointer variant introduced in #324 was reverted in
// #435 because it only blocked one of several entry points to the same
// ordering-corruption footgun (insert_data() already hands out a mutable
// pointer) while making the idiomatic call sites uglier.
TEST(query_result_test, get_keys_returns_non_const_pointer_vector) {
    using result_t = gdt::query_result<gdt::interval, int>;
    using returned_t = decltype(std::declval<const result_t&>().get_keys());
    using expected_t = const std::vector<gdt::key<gdt::interval, int>*>&;
    static_assert(std::is_same_v<returned_t, expected_t>,
        "query_result::get_keys() must return const std::vector<key*>& "
        "so callers can pass result keys back into mutating graph ops "
        "without a const_cast (#435).");
}

TEST(query_result_test, flanking_returns_non_const_pointers) {
    using flank_t = gdt::flanking_query_result<gdt::interval, int>;
    using pred_t = decltype(std::declval<const flank_t&>().get_predecessor());
    using succ_t = decltype(std::declval<const flank_t&>().get_successor());
    using expected_t = gdt::key<gdt::interval, int>*;
    static_assert(std::is_same_v<pred_t, expected_t>,
        "flanking_query_result::get_predecessor() must return key* (#435).");
    static_assert(std::is_same_v<succ_t, expected_t>,
        "flanking_query_result::get_successor() must return key* (#435).");
}
