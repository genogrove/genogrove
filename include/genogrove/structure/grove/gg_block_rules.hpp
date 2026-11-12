/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_GG_BLOCK_RULES_HPP
#define GENOGROVE_STRUCTURE_GROVE_GG_BLOCK_RULES_HPP

#include <cstdint>
#include <stdexcept>
#include <string>
#include <string_view>
#include <vector>

#include "genogrove/structure/grove/gg_block_format.hpp"

namespace genogrove::structure::detail {

// Rules every node block must obey, shared by grove::deserialize and grove_view.
// `who` prefixes the error ("Failed to deserialize grove" / "grove_view"). The
// writer numbers blocks in DFS pre-order, so any other id order is a cycle or a
// shared subtree that would recurse or loop without bound.

/// A leaf's successor is its right sibling, which is numbered later.
inline void check_next_follows(block_id leaf, block_id next_id, std::string_view who) {
    if (next_id != no_block && next_id <= leaf) {
        throw std::runtime_error(std::string(who) + ": next block does not follow its leaf");
    }
}

/// Child ids ascend and all follow the parent; a repeat would multiply the work
/// of a descent.
inline void check_child_ids_follow(block_id parent, const std::vector<block_id>& child_ids,
                                   std::string_view who) {
    block_id prev = parent;
    for (const block_id cid : child_ids) {
        if (cid <= prev) {
            throw std::runtime_error(std::string(who) +
                                     ": child block repeats or precedes its parent");
        }
        prev = cid;
    }
}

/// A tree deeper than max_tree_depth would overflow the stack in a walk.
inline void check_depth(std::uint32_t depth, std::string_view who) {
    if (depth > max_tree_depth) {
        throw std::runtime_error(std::string(who) + ": tree is too deep");
    }
}

} // namespace genogrove::structure::detail

#endif // GENOGROVE_STRUCTURE_GROVE_GG_BLOCK_RULES_HPP
