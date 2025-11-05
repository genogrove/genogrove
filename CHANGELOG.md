# Changelog

All notable changes to GenoGrove will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] - 2025-11-04

### Added
- Expanded and hardened tests covering heterogeneous data, serialization round-trips, and more scenarios.
- Compile-Time Type Safety: Uses C++20 concepts and requires clauses
- Better Performance: [[no_unique_address]] optimization, perfect forwarding
- Added configurable BUILD_BENCHMARKS option and updated help text.

### Removed
- Support for C++17 has been dropped due to use of C++20 feature for efficiency
- Removed legacy runtime type-registration/any-type mechanisms (API simplified).

## [0.0.1] - 2025-10-07

# Added
- Initial release of genogrove 
- Core data structure with basic insert/search/delete operations
- Intersection detection algorithm