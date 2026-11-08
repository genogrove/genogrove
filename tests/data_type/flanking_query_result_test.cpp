/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Genogrove
#include <genogrove/data_type/flanking_query_result.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>

namespace gdt = genogrove::data_type;

using test_key = gdt::key<gdt::interval, int>;
using result_t = gdt::flanking_query_result<gdt::interval, int>;

TEST(flankingQueryResultTest, defaultStateIsBothNull) {
    result_t result;
    EXPECT_EQ(result.get_predecessor(), nullptr);
    EXPECT_EQ(result.get_successor(), nullptr);
}

TEST(flankingQueryResultTest, setAndGetPredecessor) {
    test_key pred(gdt::interval{0, 5}, 1);
    result_t result;
    result.set_predecessor(&pred);

    EXPECT_EQ(result.get_predecessor(), &pred);
    EXPECT_EQ(result.get_successor(), nullptr);  // the other side stays untouched
}

TEST(flankingQueryResultTest, setAndGetSuccessor) {
    test_key succ(gdt::interval{20, 25}, 2);
    result_t result;
    result.set_successor(&succ);

    EXPECT_EQ(result.get_successor(), &succ);
    EXPECT_EQ(result.get_predecessor(), nullptr);
}

TEST(flankingQueryResultTest, bothSidesAreIndependent) {
    test_key pred(gdt::interval{0, 5}, 1);
    test_key succ(gdt::interval{20, 25}, 2);
    result_t result;
    result.set_predecessor(&pred);
    result.set_successor(&succ);

    EXPECT_EQ(result.get_predecessor()->get_data(), 1);
    EXPECT_EQ(result.get_successor()->get_data(), 2);
}

TEST(flankingQueryResultTest, setOverwritesAndCanResetToNull) {
    test_key first(gdt::interval{0, 5}, 1);
    test_key better(gdt::interval{6, 9}, 3);
    result_t result;

    // The traversal replaces the candidate as closer keys are found.
    result.set_predecessor(&first);
    result.set_predecessor(&better);
    EXPECT_EQ(result.get_predecessor(), &better);

    result.set_predecessor(nullptr);
    EXPECT_EQ(result.get_predecessor(), nullptr);
}

TEST(flankingQueryResultTest, returnedPointerIsMutable) {
    // Non-const pointers let callers feed keys into mutating graph operations.
    test_key pred(gdt::interval{0, 5}, 1);
    result_t result;
    result.set_predecessor(&pred);

    result.get_predecessor()->set_data(99);
    EXPECT_EQ(pred.get_data(), 99);
}

TEST(flankingQueryResultTest, copyKeepsPointers) {
    // The result does not own the keys, so a copy refers to the same keys.
    test_key pred(gdt::interval{0, 5}, 1);
    result_t result;
    result.set_predecessor(&pred);

    const result_t copy = result;
    EXPECT_EQ(copy.get_predecessor(), &pred);
    EXPECT_EQ(copy.get_successor(), nullptr);
}

TEST(flankingQueryResultTest, worksWithDatalessKeys) {
    gdt::key<gdt::interval> pred(gdt::interval{0, 5});
    gdt::flanking_query_result<gdt::interval> result;
    result.set_predecessor(&pred);

    EXPECT_EQ(result.get_predecessor(), &pred);
}