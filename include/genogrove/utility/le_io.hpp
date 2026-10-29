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
     * Integers, enums, `float` and `double`. The bytes on disk depend only on the
     * value, never on the host's byte order. Other floating-point types
     * (`long double`) have no portable form and are not admitted. `long`,
     * `unsigned long` and `wchar_t` take their platform's width, so key and data
     * types should use the fixed-width integers.
     *
     * A position or count held in a `std::size_t` is not a special case here: on
     * a 32-bit ABI `std::size_t` is `std::uint32_t`. Write those with
     * write_size() so they are always 8 bytes.
     */
    template <typename T>
    concept wire_scalar =
        std::is_integral_v<T> || std::is_enum_v<T> || std::same_as<T, float> || std::same_as<T, double>;

    namespace detail {

        // The unsigned value that holds T's bytes on the wire.
        template <wire_scalar T>
        [[nodiscard]] constexpr auto to_wire_bits(T value) {
            if constexpr (std::is_enum_v<T>) {
                return to_wire_bits(static_cast<std::underlying_type_t<T>>(value));
            } else if constexpr (std::is_same_v<T, bool>) {
                return static_cast<std::uint8_t>(value);
            } else if constexpr (std::is_floating_point_v<T>) {
                static_assert(std::numeric_limits<T>::is_iec559,
                              "only IEEE-754 float and double have a wire form");
                using bits_t = std::conditional_t<sizeof(T) == 4, std::uint32_t, std::uint64_t>;
                return std::bit_cast<bits_t>(value);
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
     * value-initialized, so the caller checks the stream afterwards.
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
        } else {
            value = static_cast<T>(bits);
        }
    }

    /// Write a position or count as 8 bytes, whatever the width of this platform's `std::size_t`.
    inline void write_size(std::ostream& os, std::size_t value) {
        write_le(os, static_cast<std::uint64_t>(value));
    }

    /**
     * @brief Read a value written by write_size().
     *
     * Throws std::runtime_error if it does not fit this platform's
     * `std::size_t`. On a short read the failbit is set and `value` is 0.
     */
    inline void read_size(std::istream& is, std::size_t& value) {
        std::uint64_t wide = 0;
        read_le(is, wide);
        if constexpr (sizeof(std::size_t) < sizeof(std::uint64_t)) {
            if (wide > std::numeric_limits<std::size_t>::max()) {
                throw std::runtime_error("Failed to deserialize: 64-bit size does not fit this platform's size_t");
            }
        }
        value = static_cast<std::size_t>(wide);
    }

}  // namespace genogrove::utility

#endif  // GENOGROVE_UTILITY_LE_IO_HPP
