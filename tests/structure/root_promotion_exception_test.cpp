/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Standard
#include <cstddef>
#include <stdexcept>
#include <string>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>
#include <genogrove/structure/grove/grove.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

namespace {

// An interval whose aggregate() throws while armed. A leaf insert never calls
// aggregate(), so with a leaf root the first call happens inside the split that
// root promotion performs, after the new root has been allocated and linked to
// the old one. That is the window promote_new_root() must unwind without
// leaking the new root or leaving the old root pointing at it.
struct throwing_interval {
    static inline bool armed = false;
    gdt::interval value;

    throwing_interval() = default;
    throwing_interval(std::size_t start, std::size_t end) : value(start, end) {}
    explicit throwing_interval(gdt::interval v) : value(v) {}

    bool operator<(const throwing_interval& o) const { return value < o.value; }
    bool operator>(const throwing_interval& o) const { return value > o.value; }
    bool operator==(const throwing_interval& o) const { return value == o.value; }
    static bool overlaps(const throwing_interval& a, const throwing_interval& b) {
        return gdt::interval::overlaps(a.value, b.value);
    }
    static throwing_interval aggregate(const throwing_interval& a, const throwing_interval& b) {
        if(armed) {
            throw std::runtime_error("aggregate armed to throw");
        }
        return throwing_interval(gdt::interval::aggregate(a.value, b.value));
    }
    [[nodiscard]] std::string to_string() const { return value.to_string(); }
};

using grove_t = gst::grove<throwing_interval, int>;
using tkey = gdt::key<throwing_interval, int>;

} // namespace

TEST(rootPromotionExceptionTest, failedPromotionLeavesOldRootPublished) {
    // Order 4, not 3: the split keeps floor(order / 2) keys in the left leaf,
    // and the parent separator is the aggregate over those keys. With one key
    // there is nothing to fold and aggregate() is never called; with two it is.
    grove_t grove(4);
    grove.insert("chr1", tkey(throwing_interval(10, 20), 0));
    grove.insert("chr1", tkey(throwing_interval(30, 40), 0));
    grove.insert("chr1", tkey(throwing_interval(50, 60), 0));
    auto* old_root = grove.get_root_nodes().at("chr1");
    ASSERT_NE(old_root, nullptr);

    // The fourth key fills the root to `order`, which triggers promotion.
    throwing_interval::armed = true;
    EXPECT_THROW(grove.insert("chr1", tkey(throwing_interval(70, 80), 0)),
                 std::runtime_error);
    throwing_interval::armed = false;

    // The grove still publishes the old root, and it no longer points at the
    // parent that was unwound. Before the fix that parent leaked and this
    // pointer dangled.
    EXPECT_EQ(grove.get_root_nodes().at("chr1"), old_root);
    EXPECT_EQ(old_root->get_parent(), nullptr);

    // The tree keeps working, and the grove destructor then frees every node
    // exactly once. A new root that kept the old root as its child would
    // double-free it, which a sanitizer build reports.
    EXPECT_NO_THROW(grove.insert("chr1", tkey(throwing_interval(90, 100), 0)));
    auto result = grove.intersect(throwing_interval(90, 100), "chr1");
    EXPECT_EQ(result.get_keys().size(), 1u);
}