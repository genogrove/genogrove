/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_STRUCTURE_GROVE_POD_IO_HPP
#define GENOGROVE_STRUCTURE_GROVE_POD_IO_HPP

#include <istream>
#include <ostream>
#include <type_traits>

namespace genogrove::structure::detail {

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