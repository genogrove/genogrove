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

// Standard
#include <memory>
#include <string>

// Genogrove
#include <genogrove/data_type/type_registry.hpp>
#include <genogrove/data_type/any_type.hpp>

namespace gdt = genogrove::data_type;

TEST(type_registry_test, register_erase_cast) {
    // Register a type (this basically creates cast functions)
    gdt::type_registry::register_type<int>();
    gdt::type_registry::register_type<std::string>();
    gdt::type_registry::register_type<double>();

    // define some variables
    int i = 42;
    std::string s = "Hello, World!";
    double d = 3.14;

    // remove the types
    std::shared_ptr<gdt::any_base> i1 = std::make_shared<gdt::any_type<std::decay_t<decltype(i)>>>(i);
    std::shared_ptr<gdt::any_base> s1 = std::make_shared<gdt::any_type<std::decay_t<decltype(s)>>>(s);
    std::shared_ptr<gdt::any_base> d1 = std::make_shared<gdt::any_type<std::decay_t<decltype(d)>>>(d);

    // recast the types
    int i1_typed = gdt::type_registry::cast<int>(i1);
    std::string s1_typed = gdt::type_registry::cast<std::string>(s1);
    double d1_typed = gdt::type_registry::cast<double>(d1);

    EXPECT_EQ(i, i1_typed);
    EXPECT_EQ(s, s1_typed);
    EXPECT_EQ(d, d1_typed);

}





