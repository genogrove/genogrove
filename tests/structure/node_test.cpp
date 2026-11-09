/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Direct unit tests for gst::node, independent of grove's insert/remove
// machinery. Preconditions (constructor order, insert_key_ptr, add_child,
// get_child), the const-navigation asserts and the Rule-of-Five type traits live
// in precondition_test.cpp; this file covers behaviour.

// Google Test
#include <gtest/gtest.h>

// Standard
#include <deque>
#include <functional>
#include <initializer_list>
#include <memory>
#include <sstream>
#include <stdexcept>
#include <string>
#include <type_traits>
#include <unordered_map>
#include <utility>
#include <vector>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>
#include <genogrove/structure/grove/gg_block_format.hpp>
#include <genogrove/structure/grove/node.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

using node_t = gst::node<gdt::interval, int>;
using ikey = gdt::key<gdt::interval, int>;

namespace {

// Runs `fn`, expects a std::runtime_error whose message contains `what`.
void expect_runtime_error(const std::function<void()>& fn, const std::string& what) {
    try {
        fn();
        FAIL() << "expected std::runtime_error containing \"" << what << "\"";
    } catch (const std::runtime_error& e) {
        EXPECT_NE(std::string(e.what()).find(what), std::string::npos) << e.what();
    }
}

// Heap leaf holding `keys`. Ownership passes to the internal node it is added to.
node_t* new_leaf(std::initializer_list<ikey*> keys) {
    auto* leaf = new node_t(4);
    leaf->set_is_leaf(true);
    for (auto* k : keys) {
        leaf->insert_key_ptr(k);
    }
    return leaf;
}

// Parses one block back into a node; the keys land in `storage`. Works for any
// node instantiation: the key object type is read off the node's key pointers.
template <typename node_type>
struct parsed_block {
    using key_object = std::remove_pointer_t<
        typename std::remove_reference_t<decltype(std::declval<node_type&>().get_keys())>::value_type>;

    std::deque<key_object> storage;
    std::vector<gst::detail::block_id> child_ids;
    gst::detail::block_id next_id = 0;
    std::unique_ptr<node_type> node;
};

template <typename node_type>
parsed_block<node_type> parse_block(const std::string& bytes, int order) {
    parsed_block<node_type> p;
    std::istringstream is(bytes);
    p.node.reset(node_type::deserialize_block(is, order, p.storage, p.child_ids, p.next_id));
    return p;
}

template <typename node_type>
std::string write_block(const node_type& n,
                        const std::unordered_map<const node_type*, gst::detail::block_id>& ids) {
    std::ostringstream os;
    n.serialize_block(os, ids);
    return os.str();
}

} // namespace

// =============================================================================
// Defaults and accessors
// =============================================================================

TEST(nodeTest, freshNodeIsEmptyInternalNode) {
    node_t n(4);

    EXPECT_EQ(n.get_order(), 4);
    EXPECT_FALSE(n.get_is_leaf());
    EXPECT_TRUE(n.get_keys().empty());
    EXPECT_TRUE(n.get_children().empty());
    EXPECT_EQ(n.get_parent(), nullptr);
    EXPECT_EQ(n.get_next(), nullptr);
    EXPECT_EQ(n.get_subtree_max(), nullptr);
}

TEST(nodeTest, settersRoundTrip) {
    node_t n(4);
    node_t other(4);

    n.set_is_leaf(true);
    n.set_parent(&other);
    n.set_next(&other);

    EXPECT_TRUE(n.get_is_leaf());
    EXPECT_EQ(n.get_parent(), &other);
    EXPECT_EQ(n.get_next(), &other);

    n.set_is_leaf(false);
    n.set_parent(nullptr);
    n.set_next(nullptr);

    EXPECT_FALSE(n.get_is_leaf());
    EXPECT_EQ(n.get_parent(), nullptr);
    EXPECT_EQ(n.get_next(), nullptr);
}

// =============================================================================
// Key insertion
// =============================================================================

TEST(nodeTest, insertKeyPtrKeepsKeysSorted) {
    node_t n(8);
    ikey high(gdt::interval{30, 40}, 3);
    ikey low(gdt::interval{10, 20}, 1);
    ikey mid(gdt::interval{20, 25}, 2);

    n.insert_key_ptr(&high);
    n.insert_key_ptr(&low);
    n.insert_key_ptr(&mid);

    ASSERT_EQ(n.get_keys().size(), 3u);
    EXPECT_EQ(n.get_keys()[0], &low);
    EXPECT_EQ(n.get_keys()[1], &mid);
    EXPECT_EQ(n.get_keys()[2], &high);
}

TEST(nodeTest, insertKeyPtrAtIndexPlacesKeyWithoutSorting) {
    // The indexed overload trusts the caller: it must not reorder.
    node_t n(8);
    ikey high(gdt::interval{30, 40}, 3);
    ikey low(gdt::interval{10, 20}, 1);

    n.insert_key_ptr(&high, 0);
    n.insert_key_ptr(&low, 1);  // index == size appends

    ASSERT_EQ(n.get_keys().size(), 2u);
    EXPECT_EQ(n.get_keys()[0], &high);
    EXPECT_EQ(n.get_keys()[1], &low);

    ikey front(gdt::interval{50, 60}, 5);
    n.insert_key_ptr(&front, 0);  // shifts the others right

    ASSERT_EQ(n.get_keys().size(), 3u);
    EXPECT_EQ(n.get_keys()[0], &front);
    EXPECT_EQ(n.get_keys()[1], &high);
    EXPECT_EQ(n.get_keys()[2], &low);
}

TEST(nodeTest, printKeysJoinsKeyStringsWithSeparator) {
    node_t n(4);
    ikey a(gdt::interval{10, 20}, 1);
    ikey b(gdt::interval{30, 40}, 2);
    n.insert_key_ptr(&a);
    n.insert_key_ptr(&b);

    std::ostringstream custom;
    n.print_keys(custom, "|");
    EXPECT_EQ(custom.str(), a.to_string() + "|" + b.to_string());

    std::ostringstream tabbed;  // the default separator is a tab
    n.print_keys(tabbed);
    EXPECT_EQ(tabbed.str(), a.to_string() + "\t" + b.to_string());

    std::ostringstream empty;
    node_t no_keys(4);
    no_keys.print_keys(empty);
    EXPECT_TRUE(empty.str().empty());
}

// =============================================================================
// Child operations
// =============================================================================

TEST(nodeTest, addChildAtIndexZeroShiftsExistingChildren) {
    node_t parent(4);
    auto* first = new node_t(4);
    auto* second = new node_t(4);

    parent.add_child(first, 0);
    parent.add_child(second, 0);  // goes in front, pushing `first` right

    ASSERT_EQ(parent.get_children().size(), 2u);
    EXPECT_EQ(parent.get_child(0), second);
    EXPECT_EQ(parent.get_child(1), first);
}

// =============================================================================
// Aggregates
// =============================================================================

TEST(nodeTest, calcKeysAggregateThrowsWithoutKeys) {
    node_t n(4);
    EXPECT_THROW((void)n.calc_keys_aggregate(), std::runtime_error);
}

TEST(nodeTest, calcKeysAggregateOfOneKeyIsThatKey) {
    node_t n(4);
    ikey k(gdt::interval{10, 20}, 1);
    n.insert_key_ptr(&k);

    EXPECT_EQ(n.calc_keys_aggregate(), (gdt::interval{10, 20}));
}

TEST(nodeTest, calcKeysAggregateIsBoundingRange) {
    node_t n(8);
    ikey a(gdt::interval{10, 20}, 1);
    ikey b(gdt::interval{5, 8}, 2);
    ikey c(gdt::interval{15, 30}, 3);
    n.insert_key_ptr(&a);
    n.insert_key_ptr(&b);
    n.insert_key_ptr(&c);

    EXPECT_EQ(n.calc_keys_aggregate(), (gdt::interval{5, 30}));
}

TEST(nodeTest, calcSubtreeRangeOfLeafEqualsKeysAggregate) {
    node_t leaf(4);
    leaf.set_is_leaf(true);
    ikey a(gdt::interval{10, 20}, 1);
    ikey b(gdt::interval{30, 50}, 2);
    leaf.insert_key_ptr(&a);
    leaf.insert_key_ptr(&b);

    EXPECT_EQ(leaf.calc_subtree_range(), leaf.calc_keys_aggregate());
}

TEST(nodeTest, calcSubtreeRangeReachesLastChild) {
    // An internal node's own keys cover children[0..n-2]; the last child has no
    // separator, so calc_subtree_range() must descend into it, at every level.
    ikey sep_root(gdt::interval{10, 12}, 0);
    ikey sep_mid(gdt::interval{20, 22}, 0);
    ikey in_a(gdt::interval{10, 12}, 1);
    ikey in_b(gdt::interval{20, 22}, 2);
    ikey in_c(gdt::interval{90, 95}, 3);

    node_t root(4);
    root.insert_key_ptr(&sep_root);

    auto* mid = new node_t(4);
    mid->insert_key_ptr(&sep_mid);
    mid->add_child(new_leaf({&in_b}), 0);
    mid->add_child(new_leaf({&in_c}), 1);

    root.add_child(new_leaf({&in_a}), 0);
    root.add_child(mid, 1);  // root owns everything below it

    EXPECT_EQ(root.calc_keys_aggregate(), (gdt::interval{10, 12}));
    EXPECT_EQ(mid->calc_subtree_range(), (gdt::interval{20, 95}));
    EXPECT_EQ(root.calc_subtree_range(), (gdt::interval{10, 95}));
}

// =============================================================================
// Cached subtree max
// =============================================================================

TEST(nodeTest, refreshSubtreeMaxOfLeafIsLastKey) {
    node_t leaf(4);
    leaf.set_is_leaf(true);
    ikey a(gdt::interval{10, 20}, 1);
    ikey b(gdt::interval{30, 40}, 2);
    leaf.insert_key_ptr(&a);
    leaf.insert_key_ptr(&b);

    leaf.refresh_subtree_max();
    EXPECT_EQ(leaf.get_subtree_max(), &b);
}

TEST(nodeTest, refreshSubtreeMaxOfEmptyNodeIsNull) {
    node_t leaf(4);
    leaf.set_is_leaf(true);
    ikey a(gdt::interval{10, 20}, 1);
    leaf.insert_key_ptr(&a);
    leaf.refresh_subtree_max();
    ASSERT_EQ(leaf.get_subtree_max(), &a);

    leaf.get_keys().clear();
    leaf.refresh_subtree_max();
    EXPECT_EQ(leaf.get_subtree_max(), nullptr);

    node_t internal(4);
    internal.refresh_subtree_max();
    EXPECT_EQ(internal.get_subtree_max(), nullptr);
}

TEST(nodeTest, refreshSubtreeMaxOfInternalReadsLastChildsCachedMax) {
    ikey sep(gdt::interval{10, 20}, 0);
    ikey in_a(gdt::interval{10, 20}, 1);
    ikey in_b(gdt::interval{30, 40}, 2);

    node_t root(4);
    root.insert_key_ptr(&sep);
    auto* leaf_b = new_leaf({&in_b});
    root.add_child(new_leaf({&in_a}), 0);
    root.add_child(leaf_b, 1);

    // Bottom-up contract: the parent reads the child's cache, so a parent
    // refreshed before its child sees no bound yet.
    root.refresh_subtree_max();
    EXPECT_EQ(root.get_subtree_max(), nullptr);

    leaf_b->refresh_subtree_max();
    root.refresh_subtree_max();
    EXPECT_EQ(root.get_subtree_max(), &in_b);
}

TEST(nodeTest, refreshSubtreeMaxRecursiveFillsEveryLevel) {
    ikey sep(gdt::interval{10, 20}, 0);
    ikey in_a(gdt::interval{10, 20}, 1);
    ikey in_b(gdt::interval{30, 40}, 2);

    node_t root(4);
    root.insert_key_ptr(&sep);
    auto* leaf_a = new_leaf({&in_a});
    auto* leaf_b = new_leaf({&in_b});
    root.add_child(leaf_a, 0);
    root.add_child(leaf_b, 1);

    root.refresh_subtree_max_recursive();

    EXPECT_EQ(leaf_a->get_subtree_max(), &in_a);
    EXPECT_EQ(leaf_b->get_subtree_max(), &in_b);
    EXPECT_EQ(root.get_subtree_max(), &in_b);
}

// =============================================================================
// Move semantics
// =============================================================================

TEST(nodeTest, moveConstructorTransfersStateAndEmptiesSource) {
    node_t parent(4);
    node_t next(4);
    ikey k(gdt::interval{10, 20}, 1);

    node_t source(6);
    source.set_is_leaf(true);
    source.insert_key_ptr(&k);
    source.set_parent(&parent);
    source.set_next(&next);
    source.refresh_subtree_max();

    node_t moved(std::move(source));

    EXPECT_EQ(moved.get_order(), 6);
    EXPECT_TRUE(moved.get_is_leaf());
    ASSERT_EQ(moved.get_keys().size(), 1u);
    EXPECT_EQ(moved.get_keys()[0], &k);
    EXPECT_EQ(moved.get_parent(), &parent);
    EXPECT_EQ(moved.get_next(), &next);
    // The cached max must travel with the keys it describes: a node that kept
    // the keys but lost it would report "no bound" and routing would misread that.
    EXPECT_EQ(moved.get_subtree_max(), &k);

    EXPECT_TRUE(source.get_keys().empty());
    EXPECT_EQ(source.get_parent(), nullptr);
    EXPECT_EQ(source.get_next(), nullptr);
    EXPECT_EQ(source.get_subtree_max(), nullptr);
}

TEST(nodeTest, moveConstructorTransfersChildOwnership) {
    node_t source(4);
    auto* child = new node_t(4);
    source.add_child(child, 0);

    node_t moved(std::move(source));

    ASSERT_EQ(moved.get_children().size(), 1u);
    EXPECT_EQ(moved.get_children()[0], child);
    EXPECT_TRUE(source.get_children().empty());  // no double delete on destruction
}

TEST(nodeTest, moveAssignmentTransfersStateAndReleasesOldChildren) {
    node_t parent(4);
    ikey k(gdt::interval{10, 20}, 1);

    node_t source(6);
    source.set_is_leaf(true);
    source.insert_key_ptr(&k);
    source.set_parent(&parent);
    source.refresh_subtree_max();

    node_t target(4);
    // Freed by the assignment. node has no hook to observe the delete, so a leak
    // here only shows up under LeakSanitizer.
    target.add_child(new node_t(4), 0);

    target = std::move(source);

    EXPECT_EQ(target.get_order(), 6);
    EXPECT_TRUE(target.get_is_leaf());
    ASSERT_EQ(target.get_keys().size(), 1u);
    EXPECT_EQ(target.get_keys()[0], &k);
    EXPECT_EQ(target.get_parent(), &parent);
    EXPECT_EQ(target.get_subtree_max(), &k);

    EXPECT_TRUE(source.get_keys().empty());
    EXPECT_EQ(source.get_parent(), nullptr);
    EXPECT_EQ(source.get_subtree_max(), nullptr);
}

TEST(nodeTest, selfMoveAssignmentKeepsState) {
    node_t n(4);
    auto* child = new node_t(4);
    n.add_child(child, 0);
    node_t& alias = n;

    n = std::move(alias);

    ASSERT_EQ(n.get_children().size(), 1u);
    EXPECT_EQ(n.get_children()[0], child);
}

// =============================================================================
// Block serialization
// =============================================================================

TEST(nodeBlockTest, leafRoundTripKeepsKeysDataAndNextId) {
    node_t leaf(4);
    leaf.set_is_leaf(true);
    ikey a(gdt::interval{10, 20}, 1);
    ikey b(gdt::interval{30, 40}, 2);
    leaf.insert_key_ptr(&a);
    leaf.insert_key_ptr(&b);
    node_t successor(4);
    leaf.set_next(&successor);

    auto p = parse_block<node_t>(write_block(leaf, {{&leaf, 0}, {&successor, 7}}), 4);

    EXPECT_TRUE(p.node->get_is_leaf());
    ASSERT_EQ(p.node->get_keys().size(), 2u);
    EXPECT_EQ(p.node->get_keys()[0]->get_value(), (gdt::interval{10, 20}));
    EXPECT_EQ(p.node->get_keys()[0]->get_data(), 1);
    EXPECT_EQ(p.node->get_keys()[1]->get_value(), (gdt::interval{30, 40}));
    EXPECT_EQ(p.node->get_keys()[1]->get_data(), 2);
    EXPECT_EQ(p.next_id, 7u);
    EXPECT_TRUE(p.child_ids.empty());
    // Block references stay numeric; the pointers are the caller's to resolve.
    EXPECT_EQ(p.node->get_next(), nullptr);
    EXPECT_EQ(p.node->get_parent(), nullptr);
}

TEST(nodeBlockTest, lastLeafWritesNoBlockAsNextId) {
    node_t leaf(4);
    leaf.set_is_leaf(true);
    ikey a(gdt::interval{10, 20}, 1);
    leaf.insert_key_ptr(&a);

    auto p = parse_block<node_t>(write_block(leaf, {{&leaf, 0}}), 4);

    EXPECT_EQ(p.next_id, gst::detail::no_block);
}

TEST(nodeBlockTest, internalRoundTripKeepsKeysAndChildIds) {
    node_t internal(4);
    ikey sep(gdt::interval{10, 20}, 9);
    internal.insert_key_ptr(&sep);
    auto* c0 = new node_t(4);
    auto* c1 = new node_t(4);
    internal.add_child(c0, 0);
    internal.add_child(c1, 1);

    auto p = parse_block<node_t>(write_block(internal, {{c0, 3}, {c1, 4}}), 4);

    EXPECT_FALSE(p.node->get_is_leaf());
    ASSERT_EQ(p.node->get_keys().size(), 1u);
    EXPECT_EQ(p.node->get_keys()[0]->get_value(), (gdt::interval{10, 20}));
    EXPECT_EQ(p.node->get_keys()[0]->get_data(), 9);
    EXPECT_EQ(p.child_ids, (std::vector<gst::detail::block_id>{3, 4}));
    EXPECT_EQ(p.next_id, gst::detail::no_block);
    EXPECT_TRUE(p.node->get_children().empty());  // pointers are linked later by the caller
}

TEST(nodeBlockTest, datalessLeafRoundTrips) {
    using plain_node = gst::node<gdt::interval>;
    plain_node leaf(4);
    leaf.set_is_leaf(true);
    gdt::key<gdt::interval> k(gdt::interval{10, 20});
    leaf.insert_key_ptr(&k);

    auto p = parse_block<plain_node>(write_block(leaf, {{&leaf, 0}}), 4);

    ASSERT_EQ(p.node->get_keys().size(), 1u);
    EXPECT_EQ(p.node->get_keys()[0]->get_value(), (gdt::interval{10, 20}));
    EXPECT_EQ(p.next_id, gst::detail::no_block);
}

TEST(nodeBlockTest, serializeRejectsNodeMissingFromBlockMap) {
    node_t leaf(4);
    leaf.set_is_leaf(true);
    node_t successor(4);
    leaf.set_next(&successor);
    expect_runtime_error([&] { (void)write_block(leaf, {}); }, "next leaf missing");

    node_t internal(4);
    ikey sep(gdt::interval{10, 20}, 1);
    internal.insert_key_ptr(&sep);
    internal.add_child(new node_t(4), 0);
    internal.add_child(new node_t(4), 1);
    expect_runtime_error([&] { (void)write_block(internal, {}); }, "child missing");
}

TEST(nodeBlockTest, deserializeRejectsKeyCountAtOrAboveOrder) {
    node_t leaf(4);
    leaf.set_is_leaf(true);
    ikey a(gdt::interval{10, 20}, 1);
    ikey b(gdt::interval{30, 40}, 2);
    ikey c(gdt::interval{50, 60}, 3);
    leaf.insert_key_ptr(&a);
    leaf.insert_key_ptr(&b);
    leaf.insert_key_ptr(&c);
    const auto bytes = write_block(leaf, {{&leaf, 0}});

    EXPECT_NO_THROW((void)parse_block<node_t>(bytes, 4));
    expect_runtime_error([&] { (void)parse_block<node_t>(bytes, 3); }, "num_keys exceeds order");
}

TEST(nodeBlockTest, deserializeRejectsChildCountThatDoesNotMatchKeyCount) {
    // One key must come with two children; this block claims three.
    node_t internal(4);
    ikey sep(gdt::interval{10, 20}, 1);
    internal.insert_key_ptr(&sep);
    auto* c0 = new node_t(4);
    auto* c1 = new node_t(4);
    auto* c2 = new node_t(4);
    internal.add_child(c0, 0);
    internal.add_child(c1, 1);
    internal.add_child(c2, 2);
    const auto bytes = write_block(internal, {{c0, 1}, {c1, 2}, {c2, 3}});

    expect_runtime_error([&] { (void)parse_block<node_t>(bytes, 4); }, "child count does not match key count");
    // At order 2 the same block fails the earlier "more children than order" check.
    expect_runtime_error([&] { (void)parse_block<node_t>(bytes, 2); }, "num_children exceeds order");
}

TEST(nodeBlockTest, deserializeRejectsInternalNodeWithoutKeys) {
    // search_overlaps reads keys[0] on every internal node. One child and no key
    // passes the child-count check (0 + 1), so only the no-keys guard rejects it.
    node_t internal(4);
    auto* child = new node_t(4);
    internal.add_child(child, 0);
    const auto bytes = write_block(internal, {{child, 1}});

    expect_runtime_error([&] { (void)parse_block<node_t>(bytes, 4); }, "internal node has no keys");
}

TEST(nodeBlockTest, deserializeRejectsTruncatedBlock) {
    node_t leaf(4);
    leaf.set_is_leaf(true);
    ikey a(gdt::interval{10, 20}, 1);
    leaf.insert_key_ptr(&a);
    const auto bytes = write_block(leaf, {{&leaf, 0}});

    expect_runtime_error([&] { (void)parse_block<node_t>("", 4); }, "stream error");
    // Cut before the trailing next id.
    expect_runtime_error([&] { (void)parse_block<node_t>(bytes.substr(0, bytes.size() - 1), 4); },
                         "stream error reading next id");

    // Same for an internal block: cut inside its last child id.
    node_t internal(4);
    ikey sep(gdt::interval{10, 20}, 1);
    internal.insert_key_ptr(&sep);
    auto* c0 = new node_t(4);
    auto* c1 = new node_t(4);
    internal.add_child(c0, 0);
    internal.add_child(c1, 1);
    const auto internal_bytes = write_block(internal, {{c0, 1}, {c1, 2}});

    EXPECT_NO_THROW((void)parse_block<node_t>(internal_bytes, 4));
    expect_runtime_error(
        [&] { (void)parse_block<node_t>(internal_bytes.substr(0, internal_bytes.size() - 1), 4); },
        "stream error reading child id");
}
