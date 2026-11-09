/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_HTSLIB_RAII_HPP
#define GENOGROVE_IO_HTSLIB_RAII_HPP

#include <cstdlib>
#include <memory>
#include <utility>

#include <htslib/kstring.h>

namespace genogrove::io {

    /// Stateless deleter that calls `destroy(ptr)`, so a handle type can be named
    /// without carrying a function pointer around. unique_ptr never calls it with
    /// null. The return value is ignored, so a failed `hts_close` goes unreported:
    /// fine for read handles, not for files opened for writing.
    template <auto destroy>
    struct hts_deleter {
        template <typename T>
        void operator()(T* ptr) const {
            destroy(ptr);
        }
    };

    /// Owning pointer to an htslib handle, e.g. `hts_ptr<htsFile, hts_close>`.
    /// Movable, not copyable; a moved-from pointer is null.
    template <typename T, auto destroy>
    using hts_ptr = std::unique_ptr<T, hts_deleter<destroy>>;

    /// malloc()-owned scratch array that htslib's `bcf_get_*` helpers grow in
    /// place. `data` and `size` are the in/out arguments of those calls, so they
    /// stay together; a moved-from buffer is empty.
    template <typename T>
    struct hts_scratch {
        T* data = nullptr;
        int size = 0;

        hts_scratch() = default;
        hts_scratch(const hts_scratch&) = delete;
        hts_scratch& operator=(const hts_scratch&) = delete;
        hts_scratch(hts_scratch&& other) noexcept
            : data(std::exchange(other.data, nullptr)), size(std::exchange(other.size, 0)) {}
        hts_scratch& operator=(hts_scratch&& other) noexcept {
            if (this != &other) {
                std::free(data);
                data = std::exchange(other.data, nullptr);
                size = std::exchange(other.size, 0);
            }
            return *this;
        }
        ~hts_scratch() { std::free(data); }
    };

    /// Owns the buffer of a `kstring_t` that htslib reads lines into. Pass `&ks`
    /// to htslib; a moved-from owner is empty.
    struct hts_kstring {
        kstring_t ks = {0, 0, nullptr};

        hts_kstring() = default;
        hts_kstring(const hts_kstring&) = delete;
        hts_kstring& operator=(const hts_kstring&) = delete;
        hts_kstring(hts_kstring&& other) noexcept : ks(std::exchange(other.ks, kstring_t{0, 0, nullptr})) {}
        hts_kstring& operator=(hts_kstring&& other) noexcept {
            if (this != &other) {
                std::free(ks.s);
                ks = std::exchange(other.ks, kstring_t{0, 0, nullptr});
            }
            return *this;
        }
        ~hts_kstring() { std::free(ks.s); }
    };

}  // namespace genogrove::io

#endif  // GENOGROVE_IO_HTSLIB_RAII_HPP
