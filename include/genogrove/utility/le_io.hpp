/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_UTILITY_LE_IO_HPP
#define GENOGROVE_UTILITY_LE_IO_HPP

#include <array>
#include <bit>
#include <concepts>
#include <cstddef>
#include <cstdint>
#include <istream>
#include <limits>
#include <ostream>
#include <stdexcept>
#include <type_traits>
#include <utility>

namespace genogrove::utility {

    /**
     * @brief Scalars with a fixed-width, little-endian wire form.
     *
     * Integers, enums and IEEE-754 floats. The bytes on disk depend only on the
     * value, never on the host's byte order. `std::size_t` is always 8 bytes on
     * disk, so a file written by a 64-bit build reads on a 32-bit one (and the
     * read fails if the value does not fit).
     */
    template <typename T>
    concept wire_scalar = std::is_arithmetic_v<T> || std::is_enum_v<T>;

    namespace detail {

        // The unsigned value that holds T's bytes on the wire.
        template <wire_scalar T>
        [[nodiscard]] constexpr auto to_wire_bits(T value) {
            if constexpr (std::is_enum_v<T>) {
                return to_wire_bits(static_cast<std::underlying_type_t<T>>(value));
            } else if constexpr (std::is_same_v<T, bool>) {
                return static_cast<std::uint8_t>(value);
            } else if constexpr (std::is_floating_point_v<T>) {
                static_assert(std::numeric_limits<T>::is_iec559 && (sizeof(T) == 4 || sizeof(T) == 8),
                              "only IEEE-754 float and double have a wire form");
                using bits_t = std::conditional_t<sizeof(T) == 4, std::uint32_t, std::uint64_t>;
                return std::bit_cast<bits_t>(value);
            } else if constexpr (std::is_same_v<T, std::size_t>) {
                return static_cast<std::uint64_t>(value);
            } else {
                return static_cast<std::make_unsigned_t<T>>(value);
            }
        }

        template <wire_scalar T>
        using wire_bits_t = decltype(to_wire_bits(std::declval<T>()));

    }  // namespace detail

    /// Write `value` as fixed-width little-endian bytes.
    template <wire_scalar T>
    inline void write_le(std::ostream& os, T value) {
        const auto bits = detail::to_wire_bits(value);
        std::array<char, sizeof(bits)> buf{};
        for (std::size_t i = 0; i < buf.size(); ++i) {
            buf[i] = static_cast<char>((bits >> (8 * i)) & 0xFF);
        }
        os.write(buf.data(), static_cast<std::streamsize>(buf.size()));
    }

    /**
     * @brief Read a fixed-width little-endian value.
     *
     * On a short read the stream's failbit is set and `value` is left
     * value-initialized, so the caller checks the stream afterwards (as with
     * read_pod). A `std::size_t` that exceeds this platform's range throws
     * std::runtime_error.
     */
    template <wire_scalar T>
    inline void read_le(std::istream& is, T& value) {
        using bits_t = detail::wire_bits_t<T>;
        std::array<char, sizeof(bits_t)> buf{};
        is.read(buf.data(), static_cast<std::streamsize>(buf.size()));
        value = T{};
        if (!is) {
            return;
        }
        bits_t bits = 0;
        for (std::size_t i = 0; i < buf.size(); ++i) {
            bits |= static_cast<bits_t>(static_cast<bits_t>(static_cast<unsigned char>(buf[i])) << (8 * i));
        }
        if constexpr (std::is_enum_v<T>) {
            value = static_cast<T>(static_cast<std::underlying_type_t<T>>(bits));
        } else if constexpr (std::is_same_v<T, bool>) {
            value = bits != 0;
        } else if constexpr (std::is_floating_point_v<T>) {
            value = std::bit_cast<T>(bits);
        } else if constexpr (std::is_same_v<T, std::size_t>) {
            if (bits > std::numeric_limits<std::size_t>::max()) {
                throw std::runtime_error("Failed to deserialize: 64-bit size does not fit this platform's size_t");
            }
            value = static_cast<std::size_t>(bits);
        } else {
            value = static_cast<T>(bits);
        }
    }

}  // namespace genogrove::utility

#endif  // GENOGROVE_UTILITY_LE_IO_HPP