# genogrove

<!-- [![.github/workflows/ci.yml](https://github.com/genogrove/genogrove/actions/workflows/ci.yml/badge.svg)](https://github.com/genogrove/structure/actions/workflows/ci.yml) -->
[![Downloads](https://img.shields.io/github/downloads/genogrove/structure/total.svg)](https://img.shields.io/github/downloads/genogrove/structure/total.svg)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)
![CodeRabbit Pull Request Reviews](https://img.shields.io/coderabbit/prs/github/genogrove/genogrove?utm_source=oss&utm_medium=github&utm_campaign=genogrove%2Fgenogrove&labelColor=171717&color=FF570A&link=https%3A%2F%2Fcoderabbit.ai&label=CodeRabbit+Reviews)

This repository contains the genogrove library.

## 🔧 Build Matrix Status

| Compiler     | C++17 | C++20                                                                                                                                                          |
|--------------|-------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| GCC 12       | TBD   | ![gcc-12-Release](https://img.shields.io/github/actions/workflow/status/genogrove/structure/ci.yml?branch=main&label=gcc-12-Release&style=flat&event=push)     |
| GCC 13       | TBD   | ![gcc-13-Release](https://img.shields.io/github/actions/workflow/status/genogrove/structure/ci.yml?branch=main&label=gcc-13-Release&style=flat&event=push)     |
| GCC 14       | TBD   | ![gcc-14-Release](https://img.shields.io/github/actions/workflow/status/genogrove/structure/ci.yml?branch=main&label=gcc-14-Release&style=flat&event=push)     |
| Clang 14     | TBD   | ![clang-14-Release](https://img.shields.io/github/actions/workflow/status/genogrove/structure/ci.yml?branch=main&label=clang-14-Release&style=flat&event=push) |

## 🚀 Quick Start
1. Clonse the repository:
    ```
    git clone https://github.com/genogrove/structure.git
    cd structure
   ```
2. Build the project (using cmake):
    ```
    cmake -S . -B build -DCMAKE_BUILD_TYPE=Release
    cmake --build build
   ```
3. Run tests (optional):
    ```
   ctest -C Release
   ```
   Note this requires the cmake to be called with `-DBUILD_TESTING=ON`
4. Include in your project:
    - Add structure/include to your include path.
    - Link against the built library in your cmake or build system

## Documentation

An extensive documentation can be found at [www.genogrove.com](https://www.genogrove.com).

## License

Distributed under [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) 

