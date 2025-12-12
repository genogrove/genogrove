# Changelog

All notable changes to GenoGrove will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.1] - 2025-12-12

### Refactor
-Minor code formatting improvements with no observable impact to 
functionality ([#52](https://github.com/genogrove/genogrove/pull/52))

### Added
- Expanded test coverage for data type indexing and registry functionality with additional
  test cases for key/value semantics, registry operations, data persistence, lookups,
  and edge cases ([#53](https://github.com/genogrove/genogrove/pull/53))

## [0.5.0] - 2025-12-07

### Added
- Grove instances now support integrated graph operations, including adding/removing edges, 
querying neighbors, and analyzing graph metrics ([#51](https://github.com/genogrove/genogrove/pull/51)).
- Added convenient graph accessor methods for direct access to underlying graph 
functionality ([#51](https://github.com/genogrove/genogrove/pull/51)).

### Chores
- Optimized internal key storage and ownership management for improved memory
  efficiency ([#49](https://github.com/genogrove/genogrove/pull/49))

## [0.4.0] - 2025-12-02

### Added
- Optional command-line interface (configurable toggle) providing "index" and
  "intersect" subcommands ([#37](https://github.com/genogrove/genogrove/pull/37))
- Enhanced BED file parsing with support for optional fields including name, score, strand, and block
  coordinates ([#42](https://github.com/genogrove/genogrove/pull/42))
- Enhanced error handling with explicit feedback when required query
  file is missing ([#44](https://github.com/genogrove/genogrove/pull/44))
- Added CLI benchmarking infrastructure to measure performance characteristics of
  the intersect subcommand under various
  parameter configurations ([#45](https://github.com/genogrove/genogrove/pull/45))
- Graph overlay for directed-edge management with optional per-edge metadata and traversal
  utilities ([#46](https://github.com/genogrove/genogrove/pull/46))
- Insert operations now return a direct handle to the newly inserted key for
  immediate use ([#47](https://github.com/genogrove/genogrove/pull/47)).
- Added comprehensive tests covering edge insertion, metadata handling, degree/outgoing
  counts, removals, clearing, filtering, and traversal scenarios ([#47](https://github.com/genogrove/genogrove/pull/47))

### Chores
- Removed an unused C++17 dependency block from the build
  configuration ([#37](https://github.com/genogrove/genogrove/pull/37))
- Build configuration now requires C++20 by default ([#46](https://github.com/genogrove/genogrove/pull/46))

## [0.3.0] - 2025-11-24

### Added
- Benchmark performance is now visualized with plots comparing results across different parameters
  (order, size, and insertion modes) ([#31](https://github.com/genogrove/genogrove/pull/31))
- Enhanced sorted interval insertion and query functionality with improved internal parent-child
  relationship management. ([#32](https://github.com/genogrove/genogrove/pull/32))
- Added test coverage for sorted interval insertion and overlapping interval
  queries. ([#32](https://github.com/genogrove/genogrove/pull/32))

### Chores
- Added a CI workflow to run continuous performance benchmarks and flag
  regressions ([#29](https://github.com/genogrove/genogrove/pull/29))
- Included multiple benchmark datasets in sorted and unsorted forms
  (various sizes). ([#29](https://github.com/genogrove/genogrove/pull/29))
- Added a data generator to produce reproducible benchmark
  inputs.  ([#29](https://github.com/genogrove/genogrove/pull/29))
- Added build/run utilities to execute benchmarks and collect JSON
  results.  ([#29](https://github.com/genogrove/genogrove/pull/29))
- Converted benchmarks to a data-driven, cached-loading approach and added dedicated
  grove-creation benchmarks.  ([#29](https://github.com/genogrove/genogrove/pull/29))
- Updated continuous benchmarking workflow configuration to run only on pushes to the main branch,
  removing pull request event triggers. This streamlines CI/CD processes by consolidating benchmark runs to
  main branch deployments. ([#30](https://github.com/genogrove/genogrove/pull/30))
- When inserting data into a grove on sorted data (e.g., `insert_data(..., sorted)) use direct insert rather than
  insert_iter to speed up insertion. ([#34](https://github.com/genogrove/genogrove/pull/34))
- Added missing std::variant required for monostate in key class ([#35](https://github.com/genogrove/genogrove/pull/35))


## [0.2.0] - 2025-11-19

### Added
- Replace separate insert_data functions in grove with insert data dispatch

### Bug Fixes
- Corrected node-splitting so child and key counts are properly adjusted for both leaf and internal nodes,
  improving tree stability and correctness during splits.

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