/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_POD_IO_HPP
#define GENOGROVE_STRUCTURE_GROVE_POD_IO_HPP

#include <cstdint>
#include <istream>
#include <ostream>
#include <stdexcept>
#include <string>
#include <type_traits>

namespace genogrove::structure::detail {

/// Reject a file-controlled element count that the remaining stream cannot
/// possibly back. Every element occupies at least `min_bytes_per_elem` bytes on
/// disk, so a `count` exceeding `remaining / min_bytes_per_elem` is corrupt and
/// must not be used to size an allocation — otherwise a tiny malicious `.gg` can
/// force a multi-GB reserve/resize and OOM before the (missing) data is read.
/// Throws std::runtime_error (matching every other malformed-stream path) so the
/// failure surfaces as a normal library error, never an escaping std::bad_alloc.
///
/// Seekable streams only (files, stringstreams, and the seekable memory_streambuf
/// over decompressed blocks). A non-seekable source is left unbounded — best
/// effort rather than a false rejection. The stream position is preserved.
inline void require_backing_bytes(std::istream& is, std::uint64_t count,
                                  std::uint64_t min_bytes_per_elem, const char* what) {
    if (count == 0 || min_bytes_per_elem == 0) {
        return;
    }
    const std::streampos cur = is.tellg();
    if (cur == std::streampos(-1)) {
        return;  // not seekable — cannot bound
    }
    is.seekg(0, std::ios::end);
    const std::streampos end = is.tellg();
    is.seekg(cur, std::ios::beg);
    // streampos only guarantees ==/!=; use the streamoff difference for ordering.
    const std::streamoff remaining_off = end - cur;
    if (!is || end == std::streampos(-1) || remaining_off < 0) {
        is.clear();  // clear any failbit from the probe; leave unbounded
        return;
    }
    const std::uint64_t remaining = static_cast<std::uint64_t>(remaining_off);
    if (count > remaining / min_bytes_per_elem) {
        throw std::runtime_error(std::string("Failed to deserialize: implausible ") + what +
                                 " count exceeds remaining stream bytes");
    }
}

/// Write a trivially-copyable POD value to a binary output stream.
template<typename T>
inline void write_pod(std::ostream& os, const T& value) {
    static_assert(std::is_trivially_copyable_v<T>,
                  "write_pod requires a trivially-copyable type");
    os.write(reinterpret_cast<const char*>(&value), sizeof(T));
}

/// Read a trivially-copyable POD value from a binary input stream.
/// The caller is responsible for checking stream state afterward so
/// that error messages can name the specific field that failed to read.
template<typename T>
inline void read_pod(std::istream& is, T& value) {
    static_assert(std::is_trivially_copyable_v<T>,
                  "read_pod requires a trivially-copyable type");
    is.read(reinterpret_cast<char*>(&value), sizeof(T));
}

} // namespace genogrove::structure::detail

#endif // GENOGROVE_STRUCTURE_GROVE_POD_IO_HPP