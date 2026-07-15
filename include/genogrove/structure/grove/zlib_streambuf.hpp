/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_ZLIB_STREAMBUF_HPP
#define GENOGROVE_ZLIB_STREAMBUF_HPP

#include <array>
#include <stdexcept>
#include <streambuf>
#include <string>
#include <string_view>

#include <zlib.h>

namespace genogrove::structure::detail {

/**
 * @brief Reusable one-shot zlib compressor for independent blocks
 *
 * Initializes one zlib deflate state and reuses it across many independent
 * blocks via deflateReset(). Avoids a deflateInit/deflateEnd (and its large
 * internal-state allocation) per block, which dominates when compressing many
 * small blocks. Each compress() call emits one complete, self-contained zlib
 * stream. Not thread-safe; not copyable/movable (owns a z_stream).
 */
class block_deflater {
public:
    block_deflater() {
        zs = {};
        if (deflateInit(&zs, Z_DEFAULT_COMPRESSION) != Z_OK) {
            throw std::runtime_error("deflateInit failed");
        }
    }
    ~block_deflater() { deflateEnd(&zs); }
    block_deflater(const block_deflater&) = delete;
    block_deflater& operator=(const block_deflater&) = delete;
    block_deflater(block_deflater&&) = delete;
    block_deflater& operator=(block_deflater&&) = delete;

    /// Compress `src` into `out` (cleared first) as one independent zlib stream.
    void compress(std::string_view src, std::string& out) {
        if (deflateReset(&zs) != Z_OK) {
            throw std::runtime_error("deflateReset failed");
        }
        zs.avail_in = static_cast<uInt>(src.size());
        zs.next_in = reinterpret_cast<Bytef*>(const_cast<char*>(src.data()));
        out.resize(deflateBound(&zs, static_cast<uLong>(src.size())));
        zs.avail_out = static_cast<uInt>(out.size());
        zs.next_out = reinterpret_cast<Bytef*>(out.data());
        int ret = deflate(&zs, Z_FINISH);
        if (ret != Z_STREAM_END) {
            throw std::runtime_error("deflate failed to finish block");
        }
        out.resize(out.size() - zs.avail_out);
    }

private:
    z_stream zs{};
};

/**
 * @brief Reusable one-shot zlib decompressor for independent blocks
 *
 * Mirror of block_deflater for reads: one inflate state reused across blocks
 * via inflateReset(). Each decompress() call reads one complete zlib stream.
 * Not thread-safe; not copyable/movable (owns a z_stream).
 */
class block_inflater {
public:
    block_inflater() {
        zs = {};
        if (inflateInit(&zs) != Z_OK) {
            throw std::runtime_error("inflateInit failed");
        }
    }
    ~block_inflater() { inflateEnd(&zs); }
    block_inflater(const block_inflater&) = delete;
    block_inflater& operator=(const block_inflater&) = delete;
    block_inflater(block_inflater&&) = delete;
    block_inflater& operator=(block_inflater&&) = delete;

    /// Decompress the zlib stream in [src, src+len) into `out` (cleared first).
    void decompress(const char* src, std::size_t len, std::string& out) {
        if (inflateReset(&zs) != Z_OK) {
            throw std::runtime_error("inflateReset failed");
        }
        zs.avail_in = static_cast<uInt>(len);
        zs.next_in = reinterpret_cast<Bytef*>(const_cast<char*>(src));
        out.clear();
        int ret;
        do {
            zs.avail_out = static_cast<uInt>(scratch.size());
            zs.next_out = reinterpret_cast<Bytef*>(scratch.data());
            ret = inflate(&zs, Z_NO_FLUSH);
            if (ret != Z_OK && ret != Z_STREAM_END) {
                // Z_BUF_ERROR here means no progress possible (truncated input),
                // since a full output buffer is provided every iteration.
                throw std::runtime_error("inflate failed: truncated or corrupt block");
            }
            out.append(scratch.data(), scratch.size() - zs.avail_out);
        } while (ret != Z_STREAM_END);
    }

private:
    static constexpr std::size_t scratch_size = 16384;
    z_stream zs{};
    std::array<char, scratch_size> scratch{};
};

/**
 * @brief Non-owning read-only streambuf over an existing byte range
 *
 * Serves sequential reads directly from a caller-owned buffer with no copy.
 * The buffer must outlive the streambuf. Used to parse an already-decompressed
 * block without an intermediate std::istringstream copy.
 */
class memory_streambuf : public std::streambuf {
public:
    memory_streambuf(const char* data, std::size_t size) {
        char* p = const_cast<char*>(data);
        setg(p, p, p + size);
    }
};

} // namespace genogrove::structure::detail

#endif // GENOGROVE_ZLIB_STREAMBUF_HPP