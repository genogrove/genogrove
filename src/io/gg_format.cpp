/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/gg_format.hpp>

#include <genogrove/config/version.hpp>

#include <algorithm>
#include <array>
#include <istream>
#include <ostream>
#include <stdexcept>
#include <string>

namespace genogrove::io {

    namespace {
        // Format a (major, minor, patch) triple as "M.m.p".
        std::string version_string(uint8_t major, uint8_t minor, uint8_t patch) {
            return std::to_string(static_cast<unsigned>(major)) + "." +
                   std::to_string(static_cast<unsigned>(minor)) + "." +
                   std::to_string(static_cast<unsigned>(patch));
        }

        // Format a (major, minor) pair as "M.m".
        std::string format_version_string(uint8_t major, uint8_t minor) {
            return std::to_string(static_cast<unsigned>(major)) + "." +
                   std::to_string(static_cast<unsigned>(minor));
        }
    } // namespace

    gg_header gg_header::current(gg_payload_type payload_type) {
        gg_header h;
        h.format_major = CURRENT_FORMAT_MAJOR;
        h.format_minor = CURRENT_FORMAT_MINOR;
        h.lib_major = static_cast<uint8_t>(genogrove_VERSION_MAJOR);
        h.lib_minor = static_cast<uint8_t>(genogrove_VERSION_MINOR);
        h.lib_patch = static_cast<uint8_t>(genogrove_VERSION_PATCH);
        h.payload_type = payload_type;
        return h;
    }

    void gg_header::write(std::ostream& os) const {
        std::array<char, SIZE> buf{};
        std::copy(MAGIC.begin(), MAGIC.end(), buf.begin());
        buf[4] = static_cast<char>(format_major);
        buf[5] = static_cast<char>(format_minor);
        buf[6] = static_cast<char>(lib_major);
        buf[7] = static_cast<char>(lib_minor);
        buf[8] = static_cast<char>(lib_patch);
        buf[9] = static_cast<char>(payload_type);
        buf[10] = 0;
        buf[11] = 0;

        os.write(buf.data(), buf.size());
        if(!os) {
            throw std::runtime_error("gg_header::write: failed to write .gg header");
        }
    }

    gg_header gg_header::read(std::istream& is) {
        std::array<char, SIZE> buf{};
        is.read(buf.data(), buf.size());
        if(is.gcount() != static_cast<std::streamsize>(buf.size())) {
            throw std::runtime_error(
                "gg_header::read: truncated .gg header (expected " +
                std::to_string(SIZE) + " bytes)");
        }

        if(!std::equal(MAGIC.begin(), MAGIC.end(), buf.begin())) {
            throw std::runtime_error(
                "gg_header::read: not a .gg file (magic mismatch)");
        }

        gg_header h;
        h.format_major = static_cast<uint8_t>(buf[4]);
        h.format_minor = static_cast<uint8_t>(buf[5]);
        h.lib_major = static_cast<uint8_t>(buf[6]);
        h.lib_minor = static_cast<uint8_t>(buf[7]);
        h.lib_patch = static_cast<uint8_t>(buf[8]);

        if(h.format_major != CURRENT_FORMAT_MAJOR ||
           h.format_minor != CURRENT_FORMAT_MINOR) {
            throw std::runtime_error(
                "gg_header::read: unsupported .gg format version " +
                format_version_string(h.format_major, h.format_minor) +
                " (this build supports " +
                format_version_string(CURRENT_FORMAT_MAJOR, CURRENT_FORMAT_MINOR) +
                "; file was written by genogrove " +
                version_string(h.lib_major, h.lib_minor, h.lib_patch) +
                "); please re-create the index");
        }

        const uint8_t pt = static_cast<uint8_t>(buf[9]);
        if(pt != static_cast<uint8_t>(gg_payload_type::BED) &&
           pt != static_cast<uint8_t>(gg_payload_type::GFF)) {
            throw std::runtime_error(
                "gg_header::read: unknown .gg payload type " +
                std::to_string(static_cast<unsigned>(pt)));
        }
        h.payload_type = static_cast<gg_payload_type>(pt);

        return h;
    }

} // namespace genogrove::io
