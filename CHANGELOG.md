# Changelog

All notable changes to genogrove will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Refactored
- **Minor C++20 style cleanups**: Removed redundant `static` from `inline static constexpr` in `grove.hpp`, extraneous semicolon after namespace brace in `any_type.hpp`, unused `start_program` variable in CLI `index.cpp`, and changed `print_general_help()` to take `const cxxopts::Options&` ([#117](https://github.com/genogrove/genogrove/issues/117))
- **Replace legacy algorithms with `std::ranges` and `map::contains()`**: Modernized algorithm calls across the codebase — `std::find_if`/`std::any_of`/`std::all_of` → `std::ranges::` equivalents, manual aggregate loops in `interval`, `numeric`, and `kmer` → `std::ranges::min`/`std::ranges::max` with projections, manual insertion loop in `node` → `std::ranges::lower_bound`, and `find() == end()` → `contains()` in `type_registry`. Extracted duplicate `is_digit` lambda from `bed_reader`/`gff_reader` into shared `utility/char_utils.hpp` ([#117](https://github.com/genogrove/genogrove/issues/117))
- **Remove redundant `operator!=`, add `noexcept`, clean up dead code**: Removed C++20-redundant `operator!=` from `file_reader_iterator` and `key`. Added `noexcept` to trivial getters/setters across `interval`, `genomic_coordinate`, `numeric`, `kmer`, `node`, `key`, and `query_result`. Cleaned up dead code in `key_type_base.hpp` (removed commented-out preprocessor guards, unused `is_key_type_base()` helper, and unused `<vector>` include) ([#117](https://github.com/genogrove/genogrove/issues/117))
- **Adopt `std::format`**: Replaced `std::stringstream`/`std::put_time` with `std::format` in CLI `get_time()` and `get_log()`, and `std::to_string` + char concatenation with `std::format` in `sam_entry::cigar_string_repr()`. Dropped GCC 12 from CI (lacks `<format>` support) ([#117](https://github.com/genogrove/genogrove/issues/117))

### Changed
- **Rename `is_overlapping()` → `overlaps()`** (**breaking**): Renamed the static overlap predicate on all key types (`interval`, `genomic_coordinate`, `numeric`, `kmer`) and in the `key_type_base` concept to `overlaps()` for idiomatic C++ naming. The `is_` prefix is reserved for single-object state checks; `overlaps(a, b)` reads naturally as a two-argument relationship predicate ([#151](https://github.com/genogrove/genogrove/issues/151))
- **Decouple I/O entry types from `gdt::interval`** (**breaking**): Replaced `gdt::interval interval` field in `bed_entry`, `gff_entry`, and `sam_entry` with plain `size_t start` and `size_t end` fields. Readers now store raw format-native coordinates (0-based half-open) without depending on the grove's key type. Users must construct `gdt::interval(entry.start, entry.end - 1)` when inserting into a grove. CLI handlers updated accordingly ([#153](https://github.com/genogrove/genogrove/issues/153))
- **Constrain template parameters with concepts** (**breaking**): Added C++20 concept constraints to unconstrained template parameters: `std::predicate` on `get_neighbors_if()`, `std::invocable` on `link_if()`, `std::ranges::input_range` on bulk insert `Container` params, associative container requirements on `key_lookup()`/`value_lookup()`, and `std::copy_constructible` on `type_registry::register_type<T>()`/`cast<T>()` ([#116](https://github.com/genogrove/genogrove/issues/116))
- **Adopt `std::string_view` for read-only string parameters** (**breaking**): Changed `grove::intersect()`, `gff_entry::get_attribute()`, `index_registry::is_registered()`/`value_lookup()`, `type_registry::create()`, and `get_log()` from `const std::string&` to `std::string_view`. Added `std::less<>` transparent comparator to `gff_entry::attributes` map for heterogeneous lookup ([#116](https://github.com/genogrove/genogrove/issues/116))
- **Adopt `std::span` for `aggregate()`** (**breaking**): Changed `aggregate()` signature on all key types (`interval`, `genomic_coordinate`, `numeric`, `kmer`) and in the `key_type_base` concept from `const std::vector<T>&` to `std::span<const T>`, allowing callers to pass any contiguous range without copying to a vector ([#116](https://github.com/genogrove/genogrove/issues/116))

### Fixed
- **Validate stream state in structural deserializers**: Added `if(!is)` checks after every `is.read()` in `node::deserialize()`, `grove::deserialize()`, `data_registry::deserialize()`, and `serialization_traits<std::string>::deserialize()`, matching the existing pattern in leaf-level deserializers. Added B+ tree invariant bounds on `num_keys` and `num_children` in `node::deserialize()`. Added `order >= 2` validation to grove constructor ([#125](https://github.com/genogrove/genogrove/issues/125))
- **Validate stream state in serializers**: Added `if(!os)` checks after `os.write()` calls in all `serialize()` methods — `interval`, `genomic_coordinate`, `numeric`, `kmer`, `key`, `node`, `grove`, `data_registry`, and `serialization_traits<std::string>` — matching the existing pattern in the generic `serialization_traits<T>` serializer ([#126](https://github.com/genogrove/genogrove/issues/126))
- **Documentation: interval uses closed coordinates, not half-open**: Fixed docstrings in `interval` and `genomic_coordinate` that incorrectly described the coordinate system as half-open `[start, end)`. The implementation and tests use closed intervals `[start, end]` where the overlap condition is `max(a.start, b.start) <= min(a.end, b.end)` ([#153](https://github.com/genogrove/genogrove/issues/153))
- **Benchmark CI malformed JSON**: Replaced `--benchmark_format=json | tee` with `--benchmark_out=` + `--benchmark_out_format=json` so console progress lines don't corrupt the JSON output file ([#199](https://github.com/genogrove/genogrove/pull/199))
- **Benchmark CI improvements**: Limited chart history to last 25 commits and enabled benchmark runs on PRs (without storing results) for validation ([#201](https://github.com/genogrove/genogrove/pull/201))

### Removed
- **Deleted unused `file_entry.hpp`**: Removed the legacy `file_entry` struct from the CLI, which was never used outside a commented-out reference in `index.cpp` ([#153](https://github.com/genogrove/genogrove/issues/153))
- **Remove legacy type erasure code**: Deleted `any_type.hpp`, `type_registry.hpp`, and `type_registry.cpp` — unused since the library moved from runtime type erasure to compile-time templates. Cleaned up dead includes from `key.hpp` and `query_result.hpp`

### Performance
- **Minor performance improvements**: Replaced `std::ostringstream` with `std::format` in `genomic_coordinate::to_string()`, added `reserve()` to `get_neighbors_if()`, simplified BAM tag key construction, and cached redundant `args.as<std::string>()` calls in CLI `intersect.cpp` ([#172](https://github.com/genogrove/genogrove/issues/172))

## [0.16.0] - 2026-03-01

### Fixed
- **gff_reader `::isdigit` undefined behavior**: Replaced bare `::isdigit` calls with a safe wrapper that casts to `unsigned char`, matching the pattern already used in `bed_reader` ([#111](https://github.com/genogrove/genogrove/issues/111), [#118](https://github.com/genogrove/genogrove/pull/118))
- **`intersect()` rejects temporaries**: Changed `intersect()` and `search_iter()` to accept `const key_type&` instead of `key_type&`, allowing idiomatic usage like `grove.intersect(interval{100, 200})` ([#113](https://github.com/genogrove/genogrove/issues/113), [#120](https://github.com/genogrove/genogrove/pull/120))
- **gff_reader silently swallows I/O errors**: `gff_reader::read_next()` now throws `std::runtime_error` when `bgzf_getline()` returns an I/O error (`ret < -1`), matching `bed_reader` behavior ([#128](https://github.com/genogrove/genogrove/issues/128), [#149](https://github.com/genogrove/genogrove/pull/149))

### Added
- **`bed_reader_options` and `gff_reader_options` structs**: New options structs with `skip_invalid_lines` field for opt-in lenient parsing. Added `skip_invalid_records` to existing `bam_reader_options` ([#110](https://github.com/genogrove/genogrove/issues/110), [#149](https://github.com/genogrove/genogrove/pull/149))

### Changed
- **File readers throw on parse/I/O errors** (**breaking**): `read_next()` in `bed_reader`, `gff_reader`, and `bam_reader` now throws `std::runtime_error` on parse and I/O errors instead of returning `false`. Returns `false` only on EOF. Use `skip_invalid_lines` / `skip_invalid_records` in the options struct for lenient mode. CLI handlers updated to use try-catch ([#110](https://github.com/genogrove/genogrove/issues/110), [#149](https://github.com/genogrove/genogrove/pull/149))
- **Add `explicit`, `const`, `std::move`, fix signed/unsigned**: Added `explicit` to single-argument constructors (`node`, `grove`, `query_result`), `const` to query-only methods on `file_reader_base`/derived readers and `index_registry`, `std::move` for sink parameters in entry constructors, and changed `int` loop variables to `size_t` to fix signed/unsigned comparisons ([#115](https://github.com/genogrove/genogrove/issues/115), [#122](https://github.com/genogrove/genogrove/pull/122))
- **Add `constexpr` to data type constructors, operators, and trivial functions**: Moved constructors, comparison operators, getters/setters, `overlaps()`, and `decode_base()` inline into headers as `constexpr`. Also added `constexpr` to `alignment_flags` and `cigar_element` helpers in `bam_reader.hpp` ([#114](https://github.com/genogrove/genogrove/issues/114), [#121](https://github.com/genogrove/genogrove/pull/121))
- **Rename `overlap()` → `is_overlapping()` → `overlaps()`** (**breaking**): Renamed the static overlap method on all key types (`interval`, `genomic_coordinate`, `numeric`, `kmer`) and in the `key_type_base` concept. Originally renamed to `is_overlapping()` in [#119](https://github.com/genogrove/genogrove/pull/119), then to `overlaps()` in [#151](https://github.com/genogrove/genogrove/issues/151) for idiomatic C++ naming ([#112](https://github.com/genogrove/genogrove/issues/112), [#119](https://github.com/genogrove/genogrove/pull/119), [#151](https://github.com/genogrove/genogrove/issues/151))
- **Add `[[nodiscard]]` to key API functions**: Added `[[nodiscard]]` to static factories/deserialize (`node::deserialize`, `key::deserialize`, `data_registry::deserialize`, `bam_reader_options::defaults/include_all/primary_only/high_quality`), boolean checks (`data_registry::contains`, `graph_overlay::has_edge`, `grove::has_edge`, `kmer::is_valid`, `filetype_detector::detect_filetype`), `overlaps()`, and all `aggregate()` methods ([#112](https://github.com/genogrove/genogrove/issues/112), [#119](https://github.com/genogrove/genogrove/pull/119))
- **CI: split into separate workflows**: Replaced single `ci.yml` with `ci-ubuntu.yml` and `ci-macos.yml` for cleaner matrix configuration. Added Clang 16/17 to Ubuntu and macOS 15 (Apple Clang 16) to macOS. Eliminates all macOS exclude entries ([#105](https://github.com/genogrove/genogrove/pull/105))
- **README overhaul**: Consolidated badges (single dynamic build badge + static compiler/platform badges), fixed `genogrove/structure` URLs, added usage example, language bindings table, and compiler support section ([#105](https://github.com/genogrove/genogrove/pull/105))

## [0.15.2] - 2026-02-25

### Fixed
- **set_root_nodes() dangling pointer bug**: Fixed `set_root_nodes()` deleting the new parameter's nodes instead of the old member nodes, resulting in dangling pointers ([#93](https://github.com/genogrove/genogrove/issues/93), [#95](https://github.com/genogrove/genogrove/pull/95))
- **CLI intersect bugs**: Fixed undefined positional binding (`"inputfile"` → `"queryfile", "targetfile"`), memory leak from raw `new std::ofstream` replaced with `std::unique_ptr`, added output file open validation, fixed missing namespace qualifiers in BED/GFF handlers, and fixed `any_type.hpp` incomplete `std::istream` type warning ([#40](https://github.com/genogrove/genogrove/issues/40), [#96](https://github.com/genogrove/genogrove/pull/96))
- **CLI intersect validation**: Required parameters (`queryfile`, `targetfile`) now exit on missing instead of continuing, targetfile validates file existence instead of only parent directory, and outputfile skips parent directory check for simple filenames ([#41](https://github.com/genogrove/genogrove/issues/41), [#98](https://github.com/genogrove/genogrove/pull/98))
- **CLI main parser crash**: Fixed unrecognised subcommand options (`-q`, `-t`, etc.) crashing with SIGABRT by adding `allow_unrecognised_options()` to the main parser, and fixed spaces in option definitions ([#98](https://github.com/genogrove/genogrove/pull/98))
- **bed_reader stale optionals**: Reset all optional `bed_entry` fields at the start of each `read_next()` to prevent stale data from previous records (e.g., BED12 → BED3). Also replaced bare `::isdigit` with a safe `unsigned char` lambda to avoid UB, and set `error_message` on I/O failures ([#58](https://github.com/genogrove/genogrove/issues/58), [#100](https://github.com/genogrove/genogrove/pull/100))
- **bed_reader/gff_reader non-copyable**: Deleted copy constructor and copy assignment to prevent double-free of owned `BGZF*` resources; added move constructor and move assignment ([#62](https://github.com/genogrove/genogrove/issues/62), [#101](https://github.com/genogrove/genogrove/pull/101))
- **CLI silent reader errors**: CLI handlers now check `get_error_message()` after iterator loops and report parsing errors to stderr instead of silently discarding malformed records ([#68](https://github.com/genogrove/genogrove/issues/68), [#102](https://github.com/genogrove/genogrove/pull/102))
- **Missing `<sys/wait.h>` in e2e tests**: Added `#include <sys/wait.h>` (guarded with `#ifndef _WIN32`) for `WIFEXITED`/`WEXITSTATUS` macros that could fail on stricter toolchains ([#99](https://github.com/genogrove/genogrove/issues/99), [#103](https://github.com/genogrove/genogrove/pull/103))

### Added
- **CLI integration tests**: Unit tests for intersect handlers/validation and end-to-end tests spawning the CLI binary. Gated behind `BUILD_CLI=ON`. CI now builds and tests the CLI ([#97](https://github.com/genogrove/genogrove/issues/97), [#98](https://github.com/genogrove/genogrove/pull/98))
- **Missing `#include <algorithm>`**: Added explicit include for `std::sort` in `numeric_test.cpp` and `genomic_coordinate_test.cpp` ([#98](https://github.com/genogrove/genogrove/pull/98))

### Changed
- **grove.hpp cleanup**: Removed dead code (unreachable return, unused try-catch in `insert_iter`), fixed include grouping, removed redundant constructor initializers, fixed typo ([#94](https://github.com/genogrove/genogrove/pull/94))
- **CI: upgrade clang-14 to clang-18**: clang-14 is incompatible with GCC 14's libstdc++ C++20 headers on ubuntu-24.04. Updated CI matrix and README badge ([#98](https://github.com/genogrove/genogrove/pull/98))
- **CLI: remove unused zlib CPM dependency**: CLI gets zlib transitively through genogrove → htslib; the explicit CPM fetch was unnecessary and polluted global build state ([#98](https://github.com/genogrove/genogrove/pull/98))

## [0.15.1] - 2026-02-22

### Fixed
- **Internal node split bugs**: Fixed three bugs in B+ tree `split_node` that caused structural
corruption when splitting internal (non-leaf) nodes ([#89](https://github.com/genogrove/genogrove/issues/89), [#90](https://github.com/genogrove/genogrove/pull/90)):
  - Children were split at the same index as keys, violating the B+ tree invariant (n keys → n+1 children). Now promotes the middle key and splits children correctly.
  - Moved children's parent pointers were never updated to the new sibling node.
  - Removed duplicate `set_next` call on the leaf split path.
- **Cascading splits in sorted insertion**: `insert_sorted` now cascades splits upward when a
leaf split causes the parent to also overflow, ensuring tree validity with small orders.

### Added
- B+ tree invariant validation tests (`internal_node_split_invariants`,
`internal_node_split_regular_insert`) that verify tree structure with order=3 across all key types.

## [0.15.0] - 2026-01-28

### Added

- **SAM/BAM/CRAM Reader**: New `bam_reader` class for reading alignment files using htslib with
automatic format detection. Provides full access to alignment data including read name (QNAME),
reference name (RNAME), genomic interval (computed from POS + CIGAR), alignment flags, mapping
quality (MAPQ), CIGAR string, sequence (SEQ), quality scores (QUAL), mate information for paired
reads, and all auxiliary tags
- **Alignment Filtering**: Configurable `bam_reader_options` with factory methods for common
use cases: `defaults()` (skip unmapped), `include_all()`, `primary_only()` (skip secondary and
supplementary), `high_quality(min_mapq)` (skip secondary, supplementary, QC-failed, duplicates,
and low MAPQ reads)
- **CIGAR Support**: Full CIGAR parsing with `cigar_element` struct containing operation type
(`cigar_op` enum) and length. Helper methods `consumes_reference()` and `consumes_query()` for
interval computation
- **Flag Helpers**: `alignment_flags` wrapper class with convenience methods: `is_paired()`,
`is_proper_pair()`, `is_unmapped()`, `is_reverse()`, `is_secondary()`, `is_supplementary()`,
`is_duplicate()`, `is_qc_fail()`, etc.
- **Tag Parsing**: All SAM auxiliary tag types supported via `std::variant`: character (A),
integer (i), float (f), string (Z/H), and typed arrays (B:c, B:C, B:s, B:S, B:i, B:I, B:f)
- **Header Access**: Methods to retrieve full header text and reference sequence names
- **Iterator Support**: Modern range-based iteration with `for (const auto& entry : reader)`
syntax, consistent with `bed_reader` and `gff_reader`
- **Filetype Detection**: Added SAM and BAM to `filetype` enum in filetype_detector for
consistent file type handling
- Added comprehensive test coverage for SAM/BAM file reading including basic reading,
filtering options, CIGAR parsing with various operations (M, I, D, N, S), interval computation,
tag parsing (integer, string, character types), mate information, flag methods, iterator
support, header extraction, and format transparency (SAM vs BAM content equivalence)

## [0.14.0] - 2026-01-18

### Added
- Extended the API to support creating external keys with 
optional associated data ([#85](https://github.com/genogrove/genogrove/pull/85))
- Added vertex counting methods to distinguish between indexed and 
external vertices ([#85](https://github.com/genogrove/genogrove/pull/85))

## [0.13.1] - 2026-01-16

### Chores
- Added (missing) serialization and deserialization support for genomic 
coordinates ([#84](https://github.com/genogrove/genogrove/pull/84))
- Standardized serialization API across data types for consistency and 
extensibility ([#84](https://github.com/genogrove/genogrove/pull/84))
- Improved serialization framework architecture for better 
maintainability and extensibility ([#84](https://github.com/genogrove/genogrove/pull/84))

## [0.13.0] - 2026-01-16

### Added
- Added extensive doxygen documentation for data_types ([#81](https://github.com/genogrove/genogrove/pull/81))
- Added a k-mer data type for DNA sequences (up to 32 bases) with compact 2-bit encoding; 
supports construction, comparison, ordering, serialization, 
aggregation, and exact-match overlap ([#82](https://github.com/genogrove/genogrove/pull/82))
- Added comprehensive unit and integration tests covering construction, encoding/decoding, comparison, 
serialization, aggregation, querying, graph edges, and boundary conditions ([#82](https://github.com/genogrove/genogrove/pull/82))
- Introduced a new data registry system for managing per-type singleton metadata storage with 
ID-based retrieval and validation ([#83](https://github.com/genogrove/genogrove/pull/83))
- Enhanced serialization and deserialization capabilities for grove structures and nodes, 
enabling improved persistence and reconstruction of complex data hierarchies ([#83](https://github.com/genogrove/genogrove/pull/83))

## [0.12.0] - 2026-01-12

### Added 
- Added vertex_count() method to retrieve the total number of keys in the grove, including 
isolated ones without edges ([#79](https://github.com/genogrove/genogrove/pull/79))
- Added numeric data type for use as a key in tree-based structures. Supports comparison operators 
(equality, less than, greater than), integer value accessors and mutators, string representation, 
binary format serialization/deserialization utilities, and static helper methods for detecting value 
overlaps and aggregating numeric value collections ([#80](https://github.com/genogrove/genogrove/pull/80))
- Large expansion of test coverage: numeric and key-type suites, new interval tests, grove tests for 
numeric; removed some legacy interval grove tests; test discovery now 
collects sources recursively ([#80](https://github.com/genogrove/genogrove/pull/80))

### Refactor
- Removed unsorted insertion mode. The bulk insertion API now requires an 
explicit sorted flag parameter, changing how batch data is inserted. Direct unsorted insertions 
are no longer supported ([#77](https://github.com/genogrove/genogrove/pull/77))
- Refactor tests for simplified test setup when adding 
more data types ([927196b](https://github.com/genogrove/genogrove/commit/927196bd858e76c39b15ad4911fb324939cfd45d))
- enhances the link_if method to accept predicates returning either bool or 
std::optional<edge_data_type>, enabling optional edge metadata. A new is_optional type trait detects 
optional types, and implementation uses if constexpr for compile-time dispatch ([#78](https://github.com/genogrove/genogrove/pull/78))
- Clarified distinction between total key count and edge-connected 
key count through separate, purpose-specific methods for better code clarity ([#79](https://github.com/genogrove/genogrove/pull/79))

### Chores
- Public headers updated to expose numeric types ([#80](https://github.com/genogrove/genogrove/pull/80))

## [0.11.0] - 2026-01-07

### Added
- Added bulk insertion capability for faster processing of large datasets. Insert multiple items simultaneously 
with automatic sorting detection, significantly improving performance compared to individual insertions. 
Fully supported across multiple indices ([#72](https://github.com/genogrove/genogrove/pull/72))
- Comprehensive test coverage added for bulk insertion, including sorted and unsorted data, 
empty datasets, large batches, and multi-index scenarios ([#72](https://github.com/genogrove/genogrove/pull/72))
- Hybrid bulk-insert: fast O(n) construction for empty indices and validated 
append-mode for existing indices, improving large pre-sorted import speed ([#74](https://github.com/genogrove/genogrove/pull/74))
- New tests for append batches, multiple sequential inserts, unsorted inputs, 
empty-batch no-ops, and empty-index initialization ([#74](https://github.com/genogrove/genogrove/pull/74))

### Refactor
- BED file parsing now includes improved support for annotation data with enhanced handling 
of colors, thickness information, and block data for more accurate file 
processing ([#70](https://github.com/genogrove/genogrove/pull/70))

### Bug fixes
- Corrected missing sorted parameter (aka gst::sorted) for `insert_data` function on sorted 
intervals ([#71](https://github.com/genogrove/genogrove/pull/71))
- Append-path now enforces ordering preconditions and correctly handles node 
overflow/splits while preserving ordering ([#74](https://github.com/genogrove/genogrove/pull/74))
- Improved reliability of time formatting in the CLI utility ([#75](https://github.com/genogrove/genogrove/pull/75))


## [0.10.0] - 2026-01-03

### Added
- Redesigned genomic coordinate API with enhanced comparison and 
utility operations for interval queries ([#69](https://github.com/genogrove/genogrove/pull/69))
- Optimized search traversal in Grove data structure for improved performance on 
interval-based lookups ([#69](https://github.com/genogrove/genogrove/pull/69))
- Added comprehensive test suite covering genomic coordinate 
functionality and operations ([#69](https://github.com/genogrove/genogrove/pull/69))
- Added extensive test coverage for Grove data structure with genomic coordinates, 
including strand-specific queries and complex data types ([#69](https://github.com/genogrove/genogrove/pull/69))

## [0.9.0] - 2025-12-27

### Added
- Added range-based iterator support for file readers, enabling standard 
C++ iteration patterns for BED and GFF file entries ([#67](https://github.com/genogrove/genogrove/pull/67))
- Expanded test coverage with comprehensive iterator-based test cases, 
including gzipped file handling and edge cases ([#67](https://github.com/genogrove/genogrove/pull/67))

## [0.8.1] - 2025-12-26

### Added
- File I/O classes and types reorganized into the genogrove::io 
namespace—update code references accordingly ([#66](https://github.com/genogrove/genogrove/pull/66))
- Added error message and current line tracking accessors for improved 
debugging and diagnostics ([#66](https://github.com/genogrove/genogrove/pull/66))
- Enhanced input validation with more robust error handling in file readers ([#66](https://github.com/genogrove/genogrove/pull/66))

## [0.8.0] - 2025-12-25

### Added
- Extended compression support in file detection: now handles BZIP2, XZ, ZSTD, and 
LZ4 formats in addition to GZIP ([#64](https://github.com/genogrove/genogrove/pull/64))
- Enhanced GFF/GTF file handling with automatic format 
detection ([#64](https://github.com/genogrove/genogrove/pull/64))
- Added comprehensive test coverage for compression detection and 
format validation ([#64](https://github.com/genogrove/genogrove/pull/64))

### Chores
- Enhanced BED file validation to verify proper column structure and data 
integrity upon file loading ([#65](https://github.com/genogrove/genogrove/pull/65))
- Improved error handling with clearer messages for malformed or 
improperly formatted BED files ([#65](https://github.com/genogrove/genogrove/pull/65))
- Stronger BED file validation on load to detect malformed or incomplete BED 
records and fail early with clearer errors ([#65](https://github.com/genogrove/genogrove/pull/65))

## [0.7.0] - 2025-12-21

### Added
- Added support for GFF/GTF file formats alongside existing 
BED format ([#61](https://github.com/genogrove/genogrove/pull/61))
- Enabled querying and intersecting GFF/GTF genomic annotations 
with target files ([#61](https://github.com/genogrove/genogrove/pull/61))
- Introduced unified file handling API for streamlined genomic 
data processing ([#61](https://github.com/genogrove/genogrove/pull/61))
- Added comprehensive test suite for GFF/GTF file parsing and operations, 
including support for gzipped files and error scenarios ([#61](https://github.com/genogrove/genogrove/pull/61))


### Chores
- Internal reorganization of file handling components for improved code 
structure and maintainability ([#59](https://github.com/genogrove/genogrove/pull/59))
- Enhanced file reading robustness by implementing explicit error handling for file 
seek operations. The file reader now properly detects and gracefully handles seek 
failures by treating them as end-of-file conditions, significantly improving reliability, 
stability, and error recovery when 
processing large or complex genomic data files ([#60](https://github.com/genogrove/genogrove/pull/60))
- Enhanced compile-time type detection for interval key types using 
improved validation mechanisms ([#63](https://github.com/genogrove/genogrove/pull/63))
- Updated grove data printing output format to use string conversion for 
improved consistency ([#63](https://github.com/genogrove/genogrove/pull/63))

## [0.6.0] - 2025-12-15

### Added
- Added a BED reader (supports BED3/6/12 with optional fields, validation, sequential reading), 
a generic file-reader interface, factory utilities, 
and filetype detection with gzip handling ([#55](https://github.com/genogrove/genogrove/pull/55))
- Added comprehensive IO tests and sample BED datasets; new IO test target and adjusted 
test discovery/runtime paths ([#55](https://github.com/genogrove/genogrove/pull/55))

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