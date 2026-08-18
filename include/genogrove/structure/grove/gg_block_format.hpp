/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_GG_BLOCK_FORMAT_HPP
#define GENOGROVE_STRUCTURE_GROVE_GG_BLOCK_FORMAT_HPP

#include <array>
#include <cstdint>

namespace genogrove::structure::detail {

/// Identifier of a single serialized block within a grove stream. Every node
/// (internal or leaf) is one block; external keys occupy one or more fixed-size
/// blocks after the node blocks. A block_id is a dense index in [0, num_blocks)
/// and doubles as the high half of a key's global id (block_id, slot).
using block_id = std::uint32_t;

/// Sentinel meaning "no block here" — used for the `next` reference of the last
/// leaf in an index's leaf chain (which has no successor).
inline constexpr block_id no_block = 0xFFFFFFFFu;

/// Maximum external keys packed into one block by the writer (its chunk size).
/// A block's key count is read from the file, so deserialization rejects any
/// count above this — a valid stream never exceeds it, and a bogus count must
/// not drive an unbounded parse/allocation loop (see #484). Keep the writer's
/// chunk size and this cap in lock-step by referencing this constant in both.
inline constexpr std::uint32_t max_external_keys_per_block = 512;

/// Magic + version at the very start of a grove serialization stream (distinct
/// from the CLI-level io::gg_header that wraps a .gg file). Lets grove::deserialize
/// reject a foreign / older-layout stream with a clear error before parsing. The
/// trailing byte is the grove-stream format version; bump it on any layout change,
/// kept numerically equal to io::gg_header::CURRENT_FORMAT_MINOR (both track the
/// same on-disk layout — no technical link between the two constants, just a
/// convention to avoid two version numbers drifting apart for one format).
inline constexpr std::array<char, 4> grove_stream_magic = {'G', 'G', 'B', '\x03'};

} // namespace genogrove::structure::detail

#endif // GENOGROVE_STRUCTURE_GROVE_GG_BLOCK_FORMAT_HPP
