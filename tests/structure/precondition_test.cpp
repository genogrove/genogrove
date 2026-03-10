/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// genogrove
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/query_result.hpp>
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/structure/grove/node.hpp>

namespace gst = genogrove::structure;
namespace gdt = genogrove::data_type;

// =============================================================================
// Grove preconditions
// =============================================================================

TEST(grovePreconditionTest, constructorRejectsOrderBelowTwo) {
    EXPECT_THROW((gst::grove<gdt::interval, int>(1)), std::invalid_argument);
    EXPECT_THROW((gst::grove<gdt::interval, int>(0)), std::invalid_argument);
    EXPECT_THROW((gst::grove<gdt::interval, int>(-1)), std::invalid_argument);
}

TEST(grovePreconditionTest, constructorAcceptsOrderTwo) {
    EXPECT_NO_THROW((gst::grove<gdt::interval, int>(2)));
}

TEST(grovePreconditionTest, constructorRejectsInvalidFillFactor) {
    EXPECT_THROW((gst::grove<gdt::interval, int>(10, 0.4f)), std::invalid_argument);
    EXPECT_THROW((gst::grove<gdt::interval, int>(10, 1.1f)), std::invalid_argument);
}

TEST(grovePreconditionTest, setOrderRejectsInvalid) {
    gst::grove<gdt::interval, int> g(10);
    EXPECT_THROW(g.set_order(1), std::invalid_argument);
    EXPECT_THROW(g.set_order(0), std::invalid_argument);
}

TEST(grovePreconditionTest, setOrderAllowedOnEmptyGrove) {
    gst::grove<gdt::interval, int> g(10);
    EXPECT_NO_THROW(g.set_order(5));
    EXPECT_EQ(g.get_order(), 5);
}

TEST(grovePreconditionTest, setOrderRejectsPopulatedGrove) {
    gst::grove<gdt::interval, int> g(10);
    g.insert_data("chr1", gdt::interval{10, 20}, 1);
    EXPECT_THROW(g.set_order(5), std::runtime_error);
}

TEST(grovePreconditionTest, setFillFactorRejectsInvalid) {
    gst::grove<gdt::interval, int> g(10);
    EXPECT_THROW(g.set_fill_factor(0.3f), std::invalid_argument);
    EXPECT_THROW(g.set_fill_factor(1.5f), std::invalid_argument);
}

// =============================================================================
// Node preconditions
// =============================================================================

TEST(nodePreconditionTest, constructorRejectsOrderBelowTwo) {
    EXPECT_THROW((gst::node<gdt::interval, int>(1)), std::invalid_argument);
    EXPECT_THROW((gst::node<gdt::interval, int>(0)), std::invalid_argument);
}

TEST(nodePreconditionTest, constructorAcceptsOrderTwo) {
    EXPECT_NO_THROW((gst::node<gdt::interval, int>(2)));
}

TEST(nodePreconditionTest, setOrderRejectsInvalid) {
    gst::node<gdt::interval, int> n(10);
    EXPECT_THROW(n.set_order(1), std::invalid_argument);
    EXPECT_THROW(n.set_order(0), std::invalid_argument);
}

TEST(nodePreconditionTest, insertKeyPtrRejectsOutOfBounds) {
    gst::node<gdt::interval, int> n(10);
    gdt::key<gdt::interval, int> k(gdt::interval{10, 20}, 1);
    EXPECT_THROW(n.insert_key_ptr(&k, -1), std::out_of_range);
    EXPECT_THROW(n.insert_key_ptr(&k, 1), std::out_of_range);
}

TEST(nodePreconditionTest, insertKeyPtrRejectsNull) {
    gst::node<gdt::interval, int> n(10);
    EXPECT_THROW(n.insert_key_ptr(nullptr), std::invalid_argument);
    EXPECT_THROW(n.insert_key_ptr(nullptr, 0), std::invalid_argument);
}

// =============================================================================
// Node child operations
// =============================================================================

TEST(nodePreconditionTest, addChildRejectsOutOfRange) {
    gst::node<gdt::interval, int> parent(10);
    gst::node<gdt::interval, int> child(10);
    EXPECT_THROW(parent.add_child(&child, -1), std::out_of_range);
    EXPECT_THROW(parent.add_child(&child, 1), std::out_of_range);
}

TEST(nodePreconditionTest, addChildAcceptsValidIndex) {
    gst::node<gdt::interval, int> parent(10);
    gst::node<gdt::interval, int> child(10);
    EXPECT_NO_THROW(parent.add_child(&child, 0));
}

TEST(nodePreconditionTest, getChildRejectsOutOfRange) {
    gst::node<gdt::interval, int> n(10);
    EXPECT_THROW(n.get_child(0), std::out_of_range);
    EXPECT_THROW(n.get_child(-1), std::out_of_range);
}

TEST(nodePreconditionTest, getChildReturnsValidChild) {
    gst::node<gdt::interval, int> parent(10);
    gst::node<gdt::interval, int> child(10);
    parent.add_child(&child, 0);
    EXPECT_EQ(parent.get_child(0), &child);
}

// =============================================================================
// Grove intersect with non-existent index
// =============================================================================

TEST(grovePreconditionTest, intersectNonExistentIndexReturnsEmpty) {
    gst::grove<gdt::interval, int> g(10);
    g.insert_data("chr1", gdt::interval{10, 20}, 1);

    auto result = g.intersect(gdt::interval{10, 20}, "chrX");
    EXPECT_EQ(result.get_keys().size(), 0);
}

// =============================================================================
// query_result preconditions
// =============================================================================

TEST(queryResultPreconditionTest, addKeyRejectsNull) {
    gdt::query_result<gdt::interval, int> qr(gdt::interval{10, 20});
    EXPECT_THROW(qr.add_key(nullptr), std::invalid_argument);
}
