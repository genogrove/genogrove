/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
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
        : sink_(sink) {
        zs_ = {};
        int ret = deflateInit(&zs_, Z_DEFAULT_COMPRESSION);
        if (ret != Z_OK) {
            throw std::runtime_error("deflateInit failed");
        }
        setp(in_buf_.data(), in_buf_.data() + in_buf_.size());
    }

    deflate_streambuf(const deflate_streambuf&) = delete;
    deflate_streambuf& operator=(const deflate_streambuf&) = delete;

    ~deflate_streambuf() override {
        deflateEnd(&zs_);
    }

    void finish() {
        compress(Z_FINISH);
        deflateEnd(&zs_);
        zs_ = {};  // prevent double-free in destructor
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
        zs_.avail_in = static_cast<uInt>(pptr() - pbase());
        zs_.next_in = reinterpret_cast<Bytef*>(pbase());

        int ret;
        do {
            zs_.avail_out = static_cast<uInt>(out_buf_.size());
            zs_.next_out = reinterpret_cast<Bytef*>(out_buf_.data());
            ret = deflate(&zs_, flush);
            if (ret != Z_OK && ret != Z_STREAM_END) {
                throw std::runtime_error("deflate failed: " + std::string(zs_.msg ? zs_.msg : "unknown error"));
            }
            auto have = out_buf_.size() - zs_.avail_out;
            if (have > 0) {
                sink_.write(out_buf_.data(), static_cast<std::streamsize>(have));
                if (!sink_) {
                    throw std::runtime_error("Failed to write compressed data to stream");
                }
            }
        } while (ret != Z_STREAM_END && (zs_.avail_out == 0 || flush == Z_FINISH));

        setp(in_buf_.data(), in_buf_.data() + in_buf_.size());
    }

    static constexpr std::size_t buf_size = 16384;
    std::array<char, buf_size> in_buf_{};
    std::array<char, buf_size> out_buf_{};
    z_stream zs_{};
    std::ostream& sink_;
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
        : source_(source) {
        zs_ = {};
        int ret = inflateInit(&zs_);
        if (ret != Z_OK) {
            throw std::runtime_error("inflateInit failed");
        }
        setg(out_buf_.data(), out_buf_.data(), out_buf_.data());
    }

    inflate_streambuf(const inflate_streambuf&) = delete;
    inflate_streambuf& operator=(const inflate_streambuf&) = delete;

    ~inflate_streambuf() override {
        inflateEnd(&zs_);
    }

protected:
    int_type underflow() override {
        if (gptr() < egptr()) {
            return traits_type::to_int_type(*gptr());
        }

        if (stream_ended_) {
            return traits_type::eof();
        }

        zs_.avail_out = static_cast<uInt>(out_buf_.size());
        zs_.next_out = reinterpret_cast<Bytef*>(out_buf_.data());

        while (zs_.avail_out > 0) {
            if (zs_.avail_in == 0) {
                source_.read(in_buf_.data(), static_cast<std::streamsize>(in_buf_.size()));
                auto bytes_read = source_.gcount();
                if (bytes_read == 0) {
                    if (source_.bad()) {
                        throw std::runtime_error("inflate: I/O error reading compressed stream");
                    }
                    throw std::runtime_error("inflate: unexpected EOF in compressed stream (truncated input)");
                }
                zs_.avail_in = static_cast<uInt>(bytes_read);
                zs_.next_in = reinterpret_cast<Bytef*>(in_buf_.data());
            }

            int ret = inflate(&zs_, Z_NO_FLUSH);
            if (ret == Z_STREAM_END) {
                stream_ended_ = true;
                // Seek source back by unconsumed bytes so trailing data
                // (e.g. a second grove) remains readable on the source stream
                if (zs_.avail_in > 0) {
                    source_.clear();  // clear eofbit if set
                    source_.seekg(-static_cast<std::streamoff>(zs_.avail_in),
                                  std::ios_base::cur);
                }
                break;
            }
            if (ret != Z_OK) {
                throw std::runtime_error("inflate failed: " + std::string(zs_.msg ? zs_.msg : "unknown error"));
            }
        }

        auto have = out_buf_.size() - zs_.avail_out;
        if (have == 0) {
            return traits_type::eof();
        }

        setg(out_buf_.data(), out_buf_.data(), out_buf_.data() + have);
        return traits_type::to_int_type(*gptr());
    }

private:
    static constexpr std::size_t buf_size = 16384;
    std::array<char, buf_size> in_buf_{};
    std::array<char, buf_size> out_buf_{};
    z_stream zs_{};
    std::istream& source_;
    bool stream_ended_ = false;
};

} // namespace genogrove::structure::detail

#endif // GENOGROVE_ZLIB_STREAMBUF_HPP