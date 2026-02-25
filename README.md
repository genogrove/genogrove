# genogrove

[![Ubuntu](https://img.shields.io/github/actions/workflow/status/genogrove/genogrove/ci-ubuntu.yml?branch=main&label=Ubuntu&style=flat)](https://github.com/genogrove/genogrove/actions/workflows/ci-ubuntu.yml)
[![macOS](https://img.shields.io/github/actions/workflow/status/genogrove/genogrove/ci-macos.yml?branch=main&label=macOS&style=flat)](https://github.com/genogrove/genogrove/actions/workflows/ci-macos.yml)
![Compilers](https://img.shields.io/badge/compilers-GCC%2012--14%20|%20Clang%2016--18%20|%20Apple%20Clang-informational)
[![Release](https://img.shields.io/github/v/release/genogrove/genogrove)](https://github.com/genogrove/genogrove/releases/latest)
![C++20](https://img.shields.io/badge/C%2B%2B-20-blue.svg)
[![Downloads](https://img.shields.io/github/downloads/genogrove/genogrove/total.svg)](https://github.com/genogrove/genogrove/releases)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
[![GitHub stars](https://img.shields.io/github/stars/genogrove/genogrove)](https://github.com/genogrove/genogrove/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/genogrove/genogrove)](https://github.com/genogrove/genogrove/issues)
![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/genogrove/genogrove?utm_source=oss&utm_medium=github&utm_campaign=genogrove%2Fgenogrove&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

A C++20 library for efficient genomic interval storage and querying using a specialized B+ tree data structure (grove). Supports BED, GFF/GTF, and SAM/BAM formats with an optional CLI.

## Quick Start

```bash
git clone https://github.com/genogrove/genogrove.git
cd genogrove
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
cmake --build build
```

For testing, add `-DBUILD_TESTING=ON`. For the CLI, add `-DBUILD_CLI=ON`.

## Example

```cpp
#include <genogrove/structure/grove/grove.hpp>
#include <genogrove/io/bed_reader.hpp>

namespace ggs = genogrove::structure;
namespace gio = genogrove::io;
namespace gdt = genogrove::data_type;

// Load intervals from a BED file
ggs::grove<gdt::interval, gio::bed_entry> grove;
gio::bed_reader reader("regions.bed");
for (const auto& entry : reader) {
    grove.insert_data(entry.chrom, entry.interval, entry);
}

// Query overlapping intervals
gdt::interval query(1000, 2000);
auto results = grove.intersect(query, "chr1");
for (auto* key : results.get_keys()) {
    auto& data = key->get_data();
    // data.chrom, data.interval, data.name, ...
}
```

## Language Bindings

| Language | Repository |
|----------|------------|
| Python | [pygenogrove](https://github.com/genogrove/pygenogrove) |
| R | [genogrove-r](https://github.com/genogrove/genogrove-r) |
| Rust | [genogrove-rs](https://github.com/genogrove/genogrove-rs) |

## Compiler Support

| Platform | Compiler | Versions |
|----------|----------|----------|
| Ubuntu 24.04 | GCC | 12, 13, 14 |
| Ubuntu 24.04 | Clang (LLVM) | 16, 17, 18 |
| macOS 14 | Apple Clang | 15 (Xcode 15.4) |
| macOS 15 | Apple Clang | 16 (Xcode 16.x) |

All configurations are tested in both Debug and Release modes.

## Documentation

Full documentation is available at [www.genogrove.com](https://www.genogrove.com).

## License

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
