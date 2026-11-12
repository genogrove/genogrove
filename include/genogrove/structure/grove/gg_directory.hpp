/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_GG_DIRECTORY_HPP
#define GENOGROVE_STRUCTURE_GROVE_GG_DIRECTORY_HPP

#include <array>
#include <cstdint>
#include <istream>
#include <stdexcept>
#include <string>
#include <string_view>
#include <unordered_set>
#include <utility>
#include <vector>

#include "genogrove/structure/grove/gg_block_format.hpp"
#include "genogrove/structure/grove/pod_io.hpp"

namespace genogrove::structure::detail {

/// The plain header of a grove stream, shared by grove::deserialize and grove_view.
struct gg_directory {
    int order = 0;
    std::vector<std::pair<std::string, block_id>> index_roots;
    block_id num_blocks = 0;
    block_id ext_block_begin = 0;
    std::uint64_t leaf_count_field = 0;
    std::uint64_t external_count_field = 0;
};

/// Reads and validates the directory from the current position. `who` prefixes
/// every error ("Failed to deserialize grove" / "grove_view"). Rejects a bad
/// magic or type tag, an order below 3, duplicate index names, indices sharing a
/// root block, and counts the stream cannot back.
template <typename key_type, typename data_type, typename edge_data_type>
[[nodiscard]] gg_directory read_gg_directory(std::istream& is, std::string_view who) {
    auto fail = [&](std::string_view what) {
        throw std::runtime_error(std::string(who) + ": " + std::string(what));
    };

    std::array<char, 4> magic{};
    is.read(magic.data(), static_cast<std::streamsize>(magic.size()));
    if (is.gcount() != static_cast<std::streamsize>(magic.size()) ||
        magic != grove_stream_magic) {
        fail("bad magic (not a format 0.4 grove stream)");
    }
    stream_type_tag written;
    read_pod(is, written);
    if (!is) {
        fail("stream error reading type tag");
    }
    check_stream_type_tag(written, make_stream_type_tag<key_type, data_type, edge_data_type>(),
                          who);

    gg_directory dir;
    read_pod(is, dir.order);
    if (!is) {
        fail("stream error reading order");
    }
    // Reported as runtime_error like every other malformed-stream path, rather
    // than letting grove(order) throw std::invalid_argument.
    if (dir.order < 3) {
        fail("order must be >= 3");
    }

    std::uint32_t num_indices;
    read_pod(is, num_indices);
    if (!is) {
        fail("stream error reading index count");
    }
    // The count is file-controlled: each entry is at least a name-length field
    // and a root block id, so reject a count the stream cannot back before reserving.
    require_backing_bytes(is, num_indices, sizeof(std::uint32_t) + sizeof(block_id), "index");
    dir.index_roots.reserve(num_indices);
    std::unordered_set<std::string> seen_names;
    std::unordered_set<block_id> seen_roots;
    for (std::uint32_t i = 0; i < num_indices; ++i) {
        std::uint32_t name_len;
        read_pod(is, name_len);
        if (!is) {
            fail("stream error reading index name length");
        }
        require_backing_bytes(is, name_len, 1, "index name");
        std::string name(name_len, '\0');
        is.read(name.data(), static_cast<std::streamsize>(name_len));
        if (!is) {
            fail("stream error reading index name");
        }
        block_id root_id;
        read_pod(is, root_id);
        if (!is) {
            fail("stream error reading root block id");
        }
        if (!seen_roots.insert(root_id).second) {
            fail("two indices share a root block");
        }
        if (!seen_names.insert(name).second) {
            fail("duplicate index name");
        }
        dir.index_roots.emplace_back(std::move(name), root_id);
    }

    read_pod(is, dir.num_blocks);
    read_pod(is, dir.ext_block_begin);
    read_pod(is, dir.leaf_count_field);
    read_pod(is, dir.external_count_field);
    if (!is) {
        fail("stream error reading directory");
    }
    if (dir.ext_block_begin > dir.num_blocks) {
        fail("external-block-begin exceeds block count");
    }
    // num_blocks sizes per-block vectors in both readers, and each block is at
    // least an 8-byte length prefix on disk: reject a count the stream cannot back.
    require_backing_bytes(is, dir.num_blocks, sizeof(std::uint64_t), "block");
    return dir;
}

} // namespace genogrove::structure::detail

#endif // GENOGROVE_STRUCTURE_GROVE_GG_DIRECTORY_HPP
