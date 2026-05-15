/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_IO_KSTRING_GUARD_HPP
#define GENOGROVE_IO_KSTRING_GUARD_HPP

#include <cstdlib>
#include <htslib/kstring.h>

namespace genogrove::io {

struct kstring_guard {
    kstring_t& ks;

    explicit kstring_guard(kstring_t& k) : ks(k) {}
    ~kstring_guard() { free(ks.s); ks.s = nullptr; }

    kstring_guard(const kstring_guard&) = delete;
    kstring_guard& operator=(const kstring_guard&) = delete;
};

}

#endif //GENOGROVE_IO_KSTRING_GUARD_HPP