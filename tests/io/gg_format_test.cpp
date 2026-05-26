/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// gtest
#include <gtest/gtest.h>

// standard
#include <cstdint>
#include <sstream>
#include <stdexcept>
#include <string>

// genogrove
#include <genogrove/config/version.hpp>
#include <genogrove/io/gg_format.hpp>

namespace gio = genogrove::io;

// ==========================================
// Header layout
// ==========================================

TEST(GgHeader, headerIsExactlyTwelveBytes) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    gio::gg_header::current(gio::gg_payload_type::BED).write(ss);
    EXPECT_EQ(ss.str().size(), gio::gg_header::SIZE);
    EXPECT_EQ(ss.str().size(), 12u);
}

TEST(GgHeader, magicIsGROV) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    gio::gg_header::current(gio::gg_payload_type::BED).write(ss);
    const auto bytes = ss.str();
    ASSERT_GE(bytes.size(), 4u);
    EXPECT_EQ(bytes[0], 'G');
    EXPECT_EQ(bytes[1], 'R');
    EXPECT_EQ(bytes[2], 'O');
    EXPECT_EQ(bytes[3], 'V');
}

TEST(GgHeader, currentStampsLibVersion) {
    const auto h = gio::gg_header::current(gio::gg_payload_type::BED);
    EXPECT_EQ(static_cast<unsigned>(h.lib_major), static_cast<unsigned>(genogrove_VERSION_MAJOR));
    EXPECT_EQ(static_cast<unsigned>(h.lib_minor), static_cast<unsigned>(genogrove_VERSION_MINOR));
    EXPECT_EQ(static_cast<unsigned>(h.lib_patch), static_cast<unsigned>(genogrove_VERSION_PATCH));
    EXPECT_EQ(h.format_major, gio::gg_header::CURRENT_FORMAT_MAJOR);
    EXPECT_EQ(h.format_minor, gio::gg_header::CURRENT_FORMAT_MINOR);
    EXPECT_EQ(h.payload_type, gio::gg_payload_type::BED);
}

// ==========================================
// Round trip
// ==========================================

TEST(GgHeader, roundTripBed) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    const auto written = gio::gg_header::current(gio::gg_payload_type::BED);
    written.write(ss);

    const auto read = gio::gg_header::read(ss);
    EXPECT_EQ(read.format_major, written.format_major);
    EXPECT_EQ(read.format_minor, written.format_minor);
    EXPECT_EQ(read.lib_major, written.lib_major);
    EXPECT_EQ(read.lib_minor, written.lib_minor);
    EXPECT_EQ(read.lib_patch, written.lib_patch);
    EXPECT_EQ(read.payload_type, gio::gg_payload_type::BED);
}

TEST(GgHeader, roundTripGff) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    gio::gg_header::current(gio::gg_payload_type::GFF).write(ss);

    const auto read = gio::gg_header::read(ss);
    EXPECT_EQ(read.payload_type, gio::gg_payload_type::GFF);
}

TEST(GgHeader, readPositionsStreamAfterHeader) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    gio::gg_header::current(gio::gg_payload_type::BED).write(ss);
    const std::string trailing = "PAYLOAD";
    ss.write(trailing.data(), static_cast<std::streamsize>(trailing.size()));

    (void)gio::gg_header::read(ss);
    std::string rest(trailing.size(), '\0');
    ss.read(rest.data(), static_cast<std::streamsize>(rest.size()));
    EXPECT_EQ(rest, trailing);
}

// ==========================================
// Rejection paths
// ==========================================

TEST(GgHeader, rejectsBadMagic) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    // 12 bytes of garbage, wrong magic.
    const char bad[12] = {'X','X','X','X', 0,1, 0,0,0, 0x01, 0,0};
    ss.write(bad, sizeof(bad));

    EXPECT_THROW(gio::gg_header::read(ss), std::runtime_error);
}

TEST(GgHeader, rejectsTruncatedHeader) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    // Only the magic; no version, payload, etc.
    ss.write("GROV", 4);

    EXPECT_THROW(gio::gg_header::read(ss), std::runtime_error);
}

TEST(GgHeader, rejectsUnsupportedFormatVersion) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    // Valid magic, but format version 9.9 — must be rejected while
    // CURRENT_FORMAT_MAJOR == 0.
    const char bytes[12] = {
        'G','R','O','V',
        9, 9,                                              // format major.minor
        0, 0, 0,                                           // lib version (zero — informational, ignored)
        static_cast<char>(gio::gg_payload_type::BED),
        0, 0,
    };
    ss.write(bytes, sizeof(bytes));

    EXPECT_THROW(gio::gg_header::read(ss), std::runtime_error);
}

TEST(GgHeader, rejectsUnknownPayloadType) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    const char bytes[12] = {
        'G','R','O','V',
        static_cast<char>(gio::gg_header::CURRENT_FORMAT_MAJOR),
        static_cast<char>(gio::gg_header::CURRENT_FORMAT_MINOR),
        0, 0, 0,
        static_cast<char>(0xAB),                           // unknown payload type
        0, 0,
    };
    ss.write(bytes, sizeof(bytes));

    EXPECT_THROW(gio::gg_header::read(ss), std::runtime_error);
}

// ==========================================
// Library-version mismatch is informational, not a hard error
// ==========================================

TEST(GgHeader, toleratesLibVersionMismatch) {
    std::stringstream ss(std::ios::in | std::ios::out | std::ios::binary);
    // Valid format version + valid payload, but lib version is clearly not
    // what this build was compiled with. read() must succeed and surface the
    // value via the returned header.
    const char bytes[12] = {
        'G','R','O','V',
        static_cast<char>(gio::gg_header::CURRENT_FORMAT_MAJOR),
        static_cast<char>(gio::gg_header::CURRENT_FORMAT_MINOR),
        99, 99, 99,                                        // wildly off lib version
        static_cast<char>(gio::gg_payload_type::BED),
        0, 0,
    };
    ss.write(bytes, sizeof(bytes));

    gio::gg_header h;
    ASSERT_NO_THROW(h = gio::gg_header::read(ss));
    EXPECT_EQ(static_cast<unsigned>(h.lib_major), 99u);
    EXPECT_EQ(static_cast<unsigned>(h.lib_minor), 99u);
    EXPECT_EQ(static_cast<unsigned>(h.lib_patch), 99u);
}
