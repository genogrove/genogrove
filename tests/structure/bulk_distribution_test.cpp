/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

/*
 * Unit tests for detail::distribute_evenly — the bottom-up bulk-build helper.
 * Exercised here directly (pure arithmetic, no allocation) so the > INT_MAX
 * cases from #486 can be checked without building billions of keys.
 */

#include <gtest/gtest.h>

#include <cstddef>
#include <cstdint>
#include <limits>

#include <genogrove/structure/grove/grove.hpp>

namespace det = genogrove::structure::detail;

namespace {

// Reconstruct the group sizes and assert the distribution is well-formed:
// covers exactly `total`, no group over `max_per_group`, none empty, and the
// group count is the ceiling total/max_per_group.
void expect_valid_distribution(std::size_t total, std::size_t max_per_group) {
    const det::even_distribution d = det::distribute_evenly(total, max_per_group);

    ASSERT_GT(d.num_groups, 0u);
    EXPECT_EQ(d.num_groups, (total + max_per_group - 1) / max_per_group);

    std::size_t sum = 0;
    std::size_t min_count = std::numeric_limits<std::size_t>::max();
    std::size_t max_count = 0;
    for (std::size_t i = 0; i < d.num_groups; ++i) {
        const std::size_t c = d.count_for(i);
        sum += c;
        min_count = std::min(min_count, c);
        max_count = std::max(max_count, c);
    }
    EXPECT_EQ(sum, total) << "groups must cover every item exactly";
    EXPECT_LE(max_count, max_per_group) << "no group may exceed the cap";
    EXPECT_GE(min_count, 1u) << "no group may be empty";
    EXPECT_LE(max_count - min_count, 1u) << "sizes must differ by at most one";
}

}  // namespace

TEST(BulkDistributionTest, SmallCounts) {
    expect_valid_distribution(10, 3);   // 4 groups: 3,3,2,2
    expect_valid_distribution(1, 3);    // single group of 1
    expect_valid_distribution(9, 3);    // 3 exact groups of 3
}

// #486: a size_t count above INT_MAX must not be narrowed. Pre-fix, the
// static_cast<int>(total) overflowed and produced a garbage group count,
// silently corrupting the bulk build. These allocate nothing — pure arithmetic.
TEST(BulkDistributionTest, CountsAboveIntMaxAreNotNarrowed) {
    const std::size_t int_max = static_cast<std::size_t>(std::numeric_limits<int>::max());
    ASSERT_GT(std::size_t{3'000'000'000}, int_max);  // guard: the test is meaningful

    expect_valid_distribution(3'000'000'000ull, 100);       // exact: 30M groups of 100
    expect_valid_distribution(int_max + 5, 1000);           // remainder path over INT_MAX
    expect_valid_distribution(5'000'000'000ull, 100'000'000);  // few very large groups
}

TEST(BulkDistributionTest, ThreeBillionOverHundredIsExact) {
    const det::even_distribution d = det::distribute_evenly(3'000'000'000ull, 100);
    EXPECT_EQ(d.num_groups, 30'000'000u);
    EXPECT_EQ(d.base_per_group, 100u);
    EXPECT_EQ(d.extra_groups, 0u);
    EXPECT_EQ(d.count_for(0), 100u);
}