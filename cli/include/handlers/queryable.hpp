/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_QUERYABLE_HPP
#define GENOGROVE_CLI_HANDLERS_QUERYABLE_HPP

#include <string_view>

#include <genogrove/data_type/interval.hpp>

namespace handlers {

namespace gdt = genogrove::data_type;

// A grove-like type the intersect handlers can query: it exposes
// intersect(interval, index). Satisfied by both the in-memory grove<> and the
// partial-read grove_view<>, so grove_intersect is written once over either and
// a non-grove argument fails at the boundary instead of deep in the body.
template <typename G>
concept interval_queryable = requires(G& g, const gdt::interval& q, std::string_view idx) {
    g.intersect(q, idx);
};

} // namespace handlers

#endif // GENOGROVE_CLI_HANDLERS_QUERYABLE_HPP