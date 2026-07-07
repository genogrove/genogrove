/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_CLI_HANDLERS_NAME_MAP_HPP
#define GENOGROVE_CLI_HANDLERS_NAME_MAP_HPP

#include <string_view>
#include <unordered_map>

#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>

namespace handlers {

namespace gdt = genogrove::data_type;

// Transient map from a record's chosen name to the inserted key pointer in the
// grove. The name is BED column 4 for `bed_entry`, or a chosen attribute value
// (ID, gene_id, ...) for `gff_entry` — the payload varies, the mechanism does
// not. Built at index time by `grove_insert` and consumed by
// `links::apply_to_grove` to resolve `--links` rows to graph edges.
//
// The key is a string_view into the stored payload string (the grove's
// `key_storage` is a `std::deque`, so addresses are stable for the grove's
// lifetime). No string copies. The map is never serialised; it lives only for
// the duration of `idx::execute`.
template <typename payload_t>
using name_to_key_map =
    std::unordered_map<std::string_view, gdt::key<gdt::interval, payload_t>*>;

} // namespace handlers

#endif // GENOGROVE_CLI_HANDLERS_NAME_MAP_HPP