/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Google Test
#include <gtest/gtest.h>

// Genogrove
#include <genogrove/data_type/index.hpp>
#include <genogrove/data_type/index_registry.hpp>

namespace gdt = genogrove::data_type;

TEST(index_test, index) {
    // add index to registry
    gdt::index chr1("idx1");
    gdt::index chr2("idx2");
    gdt::index chr3("idx3");

    // test that the chromosomes are created (according to the registry)
    EXPECT_EQ(chr1.get_value(), 0);
    EXPECT_EQ(chr2.get_value(), 1);
    EXPECT_EQ(chr3.get_value(), 2);

    // test that the index can be retrieved from the registry
    EXPECT_EQ(gdt::index_registry::instance().key_lookup(chr1.get_value()), "idx1");
    EXPECT_EQ(gdt::index_registry::instance().key_lookup(chr2.get_value()), "idx2");
    EXPECT_EQ(gdt::index_registry::instance().key_lookup(chr3.get_value()), "idx3");
}
