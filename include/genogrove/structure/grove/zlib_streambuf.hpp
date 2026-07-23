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

    /// Default per-block decompressed-size ceiling: a small compressed block can
    /// inflate to gigabytes (a "zip bomb"), so cap the output on untrusted input.
    /// 1 GiB is far above any legitimate single block (one node or one external-
    /// key chunk) while still bounding the blow-up. See #484.
    static constexpr std::size_t default_max_block_output = std::size_t{1} << 30;

    /// Decompress the zlib stream in [src, src+len) into `out` (cleared first).
    /// Throws if the decompressed size would exceed `max_output` — a
    /// decompression-bomb guard for corrupt/malicious blocks.
    void decompress(const char* src, std::size_t len, std::string& out,
                    std::size_t max_output = default_max_block_output) {
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
            const std::size_t produced = scratch.size() - zs.avail_out;
            if (produced > max_output - out.size()) {  // out.size() <= max_output holds
                throw std::runtime_error("inflate failed: decompressed block exceeds size limit");
            }
            out.append(scratch.data(), produced);
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

protected:
    // Seekable (read-only) so callers can measure the remaining decompressed
    // block via tellg()/seekg() — used by require_backing_bytes to bound
    // in-block counts/lengths against real data (see #484).
    pos_type seekoff(off_type off, std::ios_base::seekdir dir,
                     std::ios_base::openmode which) override {
        if ((which & std::ios_base::in) == 0) {
            return pos_type(off_type(-1));
        }
        // Work in integer-offset space: forming an out-of-range pointer (e.g.
        // eback() + huge_off) before the bounds check is UB, so validate the
        // target offset against [0, size] first, then build the in-bounds pointer.
        const off_type size = egptr() - eback();
        off_type base = 0;
        if (dir == std::ios_base::cur) {
            base = gptr() - eback();
        } else if (dir == std::ios_base::end) {
            base = size;
        }
        const off_type target = base + off;
        if (target < 0 || target > size) {
            return pos_type(off_type(-1));
        }
        char* const beg = eback();
        setg(beg, beg + target, beg + size);
        return pos_type(target);
    }

    pos_type seekpos(pos_type pos, std::ios_base::openmode which) override {
        return seekoff(off_type(pos), std::ios_base::beg, which);
    }
};

} // namespace genogrove::structure::detail

#endif // GENOGROVE_ZLIB_STREAMBUF_HPP