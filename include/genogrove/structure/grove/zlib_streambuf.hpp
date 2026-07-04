/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_ZLIB_STREAMBUF_HPP
#define GENOGROVE_ZLIB_STREAMBUF_HPP

#include <array>
#include <istream>
#include <ostream>
#include <stdexcept>
#include <streambuf>
#include <string>
#include <string_view>

#include <zlib.h>

namespace genogrove::structure::detail {

/**
 * @brief Streaming zlib compression streambuf
 *
 * Wraps a std::ostream and compresses all writes via zlib deflate.
 * Data is compressed in chunks to avoid buffering the entire grove in memory.
 * Call finish() after all data has been written to flush the zlib stream.
 */
class deflate_streambuf : public std::streambuf {
public:
    explicit deflate_streambuf(std::ostream& sink)
        : sink(sink) {
        zs = {};
        int ret = deflateInit(&zs, Z_DEFAULT_COMPRESSION);
        if (ret != Z_OK) {
            throw std::runtime_error("deflateInit failed");
        }
        setp(in_buf.data(), in_buf.data() + in_buf.size());
    }

    deflate_streambuf(const deflate_streambuf&) = delete;
    deflate_streambuf& operator=(const deflate_streambuf&) = delete;
    deflate_streambuf(deflate_streambuf&&) = delete;
    deflate_streambuf& operator=(deflate_streambuf&&) = delete;

    ~deflate_streambuf() override {
        deflateEnd(&zs);
    }

    void finish() {
        compress(Z_FINISH);
        deflateEnd(&zs);
        zs = {};  // prevent double-free in destructor
    }

protected:
    int_type overflow(int_type ch) override {
        compress(Z_NO_FLUSH);
        if (ch != traits_type::eof()) {
            *pptr() = static_cast<char>(ch);
            pbump(1);
        }
        return traits_type::not_eof(ch);
    }

    int sync() override {
        compress(Z_SYNC_FLUSH);
        return 0;
    }

private:
    void compress(int flush) {
        zs.avail_in = static_cast<uInt>(pptr() - pbase());
        zs.next_in = reinterpret_cast<Bytef*>(pbase());

        int ret;
        do {
            zs.avail_out = static_cast<uInt>(out_buf.size());
            zs.next_out = reinterpret_cast<Bytef*>(out_buf.data());
            ret = deflate(&zs, flush);
            if (ret != Z_OK && ret != Z_STREAM_END) {
                throw std::runtime_error("deflate failed: " + std::string(zs.msg ? zs.msg : "unknown error"));
            }
            auto have = out_buf.size() - zs.avail_out;
            if (have > 0) {
                sink.write(out_buf.data(), static_cast<std::streamsize>(have));
                if (!sink) {
                    throw std::runtime_error("Failed to write compressed data to stream");
                }
            }
        } while (ret != Z_STREAM_END && (zs.avail_out == 0 || flush == Z_FINISH));

        setp(in_buf.data(), in_buf.data() + in_buf.size());
    }

    static constexpr std::size_t buf_size = 16384;
    std::array<char, buf_size> in_buf{};
    std::array<char, buf_size> out_buf{};
    z_stream zs{};
    std::ostream& sink;
};

/**
 * @brief Streaming zlib decompression streambuf
 *
 * Wraps a std::istream and decompresses reads via zlib inflate.
 * Compressed data is read in chunks and decompressed on demand.
 */
class inflate_streambuf : public std::streambuf {
public:
    explicit inflate_streambuf(std::istream& source)
        : source(source) {
        zs = {};
        int ret = inflateInit(&zs);
        if (ret != Z_OK) {
            throw std::runtime_error("inflateInit failed");
        }
        setg(out_buf.data(), out_buf.data(), out_buf.data());
    }

    inflate_streambuf(const inflate_streambuf&) = delete;
    inflate_streambuf& operator=(const inflate_streambuf&) = delete;
    inflate_streambuf(inflate_streambuf&&) = delete;
    inflate_streambuf& operator=(inflate_streambuf&&) = delete;

    ~inflate_streambuf() override {
        inflateEnd(&zs);
    }

protected:
    int_type underflow() override {
        if (gptr() < egptr()) {
            return traits_type::to_int_type(*gptr());
        }

        if (stream_ended) {
            return traits_type::eof();
        }

        zs.avail_out = static_cast<uInt>(out_buf.size());
        zs.next_out = reinterpret_cast<Bytef*>(out_buf.data());

        while (zs.avail_out > 0) {
            if (zs.avail_in == 0) {
                source.read(in_buf.data(), static_cast<std::streamsize>(in_buf.size()));
                auto bytes_read = source.gcount();
                if (bytes_read == 0) {
                    if (source.bad()) {
                        throw std::runtime_error("inflate: I/O error reading compressed stream");
                    }
                    throw std::runtime_error("inflate: unexpected EOF in compressed stream (truncated input)");
                }
                zs.avail_in = static_cast<uInt>(bytes_read);
                zs.next_in = reinterpret_cast<Bytef*>(in_buf.data());
            }

            int ret = inflate(&zs, Z_NO_FLUSH);
            if (ret == Z_STREAM_END) {
                stream_ended = true;
                // Clear eofbit/failbit from the last partial source.read(),
                // then seek back unconsumed bytes so trailing data remains readable.
                source.clear();
                if (zs.avail_in > 0) {
                    source.seekg(-static_cast<std::streamoff>(zs.avail_in),
                                  std::ios_base::cur);
                    // Non-seekable sources (pipes, sockets, custom streambufs)
                    // silently fail the seekg. Without this check the trailing
                    // bytes would be lost without any error — the
                    // "concatenated payloads" contract in CLAUDE.md silently
                    // degrades. Throw so the caller knows.
                    if (source.fail()) {
                        throw std::runtime_error(
                            "inflate_streambuf: source stream is not seekable; "
                            "concatenated payloads require a seekable source");
                    }
                }
                break;
            }
            if (ret != Z_OK) {
                throw std::runtime_error("inflate failed: " + std::string(zs.msg ? zs.msg : "unknown error"));
            }
        }

        auto have = out_buf.size() - zs.avail_out;
        if (have == 0) {
            return traits_type::eof();
        }

        setg(out_buf.data(), out_buf.data(), out_buf.data() + have);
        return traits_type::to_int_type(*gptr());
    }

private:
    static constexpr std::size_t buf_size = 16384;
    std::array<char, buf_size> in_buf{};
    std::array<char, buf_size> out_buf{};
    z_stream zs{};
    std::istream& source;
    bool stream_ended = false;
};

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