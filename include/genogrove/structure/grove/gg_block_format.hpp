/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_GG_BLOCK_FORMAT_HPP
#define GENOGROVE_STRUCTURE_GROVE_GG_BLOCK_FORMAT_HPP

#include <array>
#include <concepts>
#include <cstdint>
#include <stdexcept>
#include <string>
#include <string_view>
#include <type_traits>

#include "genogrove/data_type/genomic_coordinate.hpp"
#include "genogrove/data_type/interval.hpp"
#include "genogrove/data_type/kmer.hpp"
#include "genogrove/data_type/numeric.hpp"

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
inline constexpr std::array<char, 4> grove_stream_magic = {'G', 'G', 'B', '\x04'};

/// Built-in key types a grove stream can be tagged with. Any other key type is
/// written as `custom`, which cannot tell two custom types apart.
enum class key_kind : std::uint8_t {
    custom = 0,
    interval = 1,
    genomic_coordinate = 2,
    numeric = 3,
    kmer = 4,
};

/// Type tag written right after the magic. Lets a reader instantiated with
/// different template arguments fail fast instead of misparsing the blocks.
/// Three single-byte fields, so it is written as-is with no padding.
struct stream_type_tag {
    key_kind key = key_kind::custom;
    std::uint8_t has_data = 0;       ///< data_type != void
    std::uint8_t has_edge_data = 0;  ///< edge_data_type != void

    [[nodiscard]] bool operator==(const stream_type_tag&) const = default;
};

template <typename key_type, typename data_type, typename edge_data_type>
[[nodiscard]] constexpr stream_type_tag make_stream_type_tag() {
    namespace gdt = genogrove::data_type;
    key_kind k = key_kind::custom;
    if constexpr (std::same_as<key_type, gdt::interval>) {
        k = key_kind::interval;
    } else if constexpr (std::same_as<key_type, gdt::genomic_coordinate>) {
        k = key_kind::genomic_coordinate;
    } else if constexpr (std::same_as<key_type, gdt::numeric>) {
        k = key_kind::numeric;
    } else if constexpr (std::same_as<key_type, gdt::kmer>) {
        k = key_kind::kmer;
    }
    return {k, static_cast<std::uint8_t>(!std::is_void_v<data_type>),
            static_cast<std::uint8_t>(!std::is_void_v<edge_data_type>)};
}

[[nodiscard]] inline std::string describe(const stream_type_tag& t) {
    std::string_view key;
    switch (t.key) {
        case key_kind::custom: key = "custom"; break;
        case key_kind::interval: key = "interval"; break;
        case key_kind::genomic_coordinate: key = "genomic_coordinate"; break;
        case key_kind::numeric: key = "numeric"; break;
        case key_kind::kmer: key = "kmer"; break;
        default: key = "unknown"; break;
    }
    std::string d = "key type ";
    d += key;
    d += t.has_data ? ", with data" : ", no data";
    d += t.has_edge_data ? ", with edge data" : ", no edge data";
    return d;
}

/// Throws std::runtime_error naming both types if the stream was written for a
/// different grove instantiation. `who` prefixes the message ("Failed to
/// deserialize grove" / "grove_view").
inline void check_stream_type_tag(const stream_type_tag& written, const stream_type_tag& expected,
                                  std::string_view who) {
    if (written != expected) {
        throw std::runtime_error(std::string(who) + ": grove stream was written with " +
                                 describe(written) + ", reader expects " + describe(expected));
    }
}

} // namespace genogrove::structure::detail

#endif // GENOGROVE_STRUCTURE_GROVE_GG_BLOCK_FORMAT_HPP
