/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_GG_FORMAT_HPP
#define GENOGROVE_IO_GG_FORMAT_HPP

#include <array>
#include <cstdint>
#include <iosfwd>

namespace genogrove::io {

    /// Payload type tag stored in the .gg header so a reader can dispatch
    /// to the correct grove instantiation.
    enum class gg_payload_type : uint8_t {
        BED = 0x01,
        GFF = 0x02,
    };

    /// On-disk header for a serialised grove (.gg file).
    ///
    /// The header is 12 bytes of plain (uncompressed) data preceding the
    /// zlib-compressed grove payload, so a .gg file can be identified and
    /// validated without decompressing first.
    ///
    /// Layout:
    ///   offset  size  field
    ///        0     4  magic           = "GROV"
    ///        4     1  format_major    = 0   (pre-1.0; any change may break compatibility)
    ///        5     1  format_minor    = 1
    ///        6     1  lib_major       = genogrove_VERSION_MAJOR (informational)
    ///        7     1  lib_minor       = genogrove_VERSION_MINOR (informational)
    ///        8     1  lib_patch       = genogrove_VERSION_PATCH (informational)
    ///        9     1  payload_type    (BED = 0x01, GFF = 0x02)
    ///       10     2  reserved        (zero)
    ///
    /// While CURRENT_FORMAT_MAJOR == 0, read() requires an exact match on
    /// (format_major, format_minor) and throws std::runtime_error otherwise.
    /// The lib_* fields are informational only and never cause rejection.
    struct gg_header {
        static constexpr std::array<char, 4> MAGIC = {'G', 'R', 'O', 'V'};
        static constexpr uint8_t CURRENT_FORMAT_MAJOR = 0;
        static constexpr uint8_t CURRENT_FORMAT_MINOR = 1;
        static constexpr std::size_t SIZE = 12;

        uint8_t format_major = CURRENT_FORMAT_MAJOR;
        uint8_t format_minor = CURRENT_FORMAT_MINOR;
        uint8_t lib_major = 0;
        uint8_t lib_minor = 0;
        uint8_t lib_patch = 0;
        gg_payload_type payload_type = gg_payload_type::BED;

        /// Build a header stamped with the current library version and the
        /// given payload type. Use this at the writer side.
        [[nodiscard]] static gg_header current(gg_payload_type payload_type);

        /// Write the 12-byte header to a binary output stream.
        /// Throws std::runtime_error if the stream is in a bad state after writing.
        void write(std::ostream& os) const;

        /// Read and validate a 12-byte header from a binary input stream.
        ///
        /// Throws std::runtime_error on:
        ///   - short read (not enough bytes for a header)
        ///   - magic mismatch ("not a .gg file")
        ///   - unsupported (format_major, format_minor)
        ///   - unknown payload_type value
        ///
        /// A library-version difference (lib_major/minor/patch) does NOT cause
        /// rejection — those fields are informational and the read succeeds.
        [[nodiscard]] static gg_header read(std::istream& is);
    };

} // namespace genogrove::io

#endif // GENOGROVE_IO_GG_FORMAT_HPP
