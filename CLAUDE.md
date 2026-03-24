# CLAUDE.md

## Workflow Rules

- **Every change must be done in a separate PR.**
- **CHANGELOG.md is updated during `/review-pr`** (not at merge time) under `[Unreleased]`. Use [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format. Reference PR/issue numbers.
- **After merging a PR, always delete the local (and remote if applicable) feature branch.**
- **Don't cmake build the project - I'm doing this myself.**
- **Documentation lives in a separate repo** (`genogrove/docs`). Don't modify `docs/` files here.
- **When a PR changes the public API**, create an issue in `genogrove/docs` describing what changed so docs can be updated later.
- **When running `/cpp-audit`**, after creating issues for new findings, check whether any findings overlap with existing issues. If so, add a comment to the existing issue with the additional context from the audit rather than creating a duplicate.

## Project Overview

genogrove is a C++20 library for storing and querying genomic intervals using a B+ tree variant called a **grove**. 
The core idea: genomic data is organized by index (typically chromosome name), where each index maintains its own B+ 
tree. Intervals are inserted into leaves, internal nodes store aggregated bounding intervals for subtree navigation, 
and leaf nodes are linked for efficient range traversal. An embedded directed graph (graph_overlay) connects keys 
across trees for relational queries (e.g., exon→transcript edges).

The library reads standard genomic file formats (BED, GFF/GTF, SAM/BAM) via htslib-backed iterators, inserts records 
into a grove, and supports overlap queries across indices. An optional CLI exposes indexing and intersection as 
command-line tools.

## Modules

### `structure/grove/` — Core Data Structure
- **grove**: Multi-index B+ tree container. Each string index (e.g., "chr1") has its own tree root. Supports single,
sorted, and bulk insertion modes. Bulk insert builds trees bottom-up in O(n). Querying via `intersect()` recursively
searches nodes using `overlaps()` checks. Embeds a `graph_overlay` for directed edges between keys. Thread-safe via
per-index `shared_mutex` (concurrent reads, exclusive writes per chromosome). Serialization is always zlib-compressed
via streaming `deflate_streambuf`/`inflate_streambuf` wrappers. Fill factor controls sorted insertion leaf packing
(default 1.0 = 100%). Non-copyable (Rule of Five). Tree-manipulation methods are private; order is immutable after construction.
- **node**: B+ tree node with parent/child/sibling pointers. Leaves are linked for range traversal. Non-copyable (Rule of Five).
- **graph_overlay**: Directed-edge graph layered on grove keys. Supports optional per-edge metadata, external
(graph-only) keys, and batch edge creation via `link_if()`.
- **zlib_streambuf**: Streaming zlib compression/decompression via custom `std::streambuf` subclasses
(`detail::deflate_streambuf`, `detail::inflate_streambuf`). Used internally by grove serialization.

### `data_type/` — Key Types and Containers
All key types satisfy the `key_type_base` concept: `operator<`, `operator>`, `operator==`, `overlaps()`, `aggregate(const T&, const T&)`, `to_string()`.
- **interval**: Closed `[start, end]` ranges. Overlap = range intersection. Aggregate = bounding interval.
- **genomic_coordinate**: Stranded interval (`+`, `-`, `.`, `*`). Strand-aware overlap; `*` is wildcard.
- **numeric**: Integer wrapper. Overlap = exact match. Aggregate = max.
- **kmer**: DNA k-mer with 2-bit encoding (k≤32). Overlap = exact match. Aggregate = max encoding.
- **key**: Template wrapping a key_type with optional associated data (`data_type`). Uses `requires` clauses — data methods only exist when `data_type != void`.
- **query_result**: Container returned by `intersect()` — holds const references to matching keys + original query. Getters return by const reference (not by value).
- **registry**: Per-type singleton for shared metadata by ID. `get()` returns `const T&`/`T&` and throws `std::out_of_range` on invalid IDs. Use `contains()` to check first. Internal storage: `std::deque` for reference stability.
- **serialization_traits**: Trait-based serialization. Trivially copyable types auto-work; `std::string` has built-in specialization; custom types need a specialization.

### `io/` — File Readers
All readers inherit `file_reader<EntryType>` providing C++20 input iterators (`for (const auto& entry : reader)`). Non-copyable (own raw htslib handles), movable. Iterator stops on both EOF and errors — always check `get_error_message()` after the loop. Entry types store raw format-native coordinates as `size_t start`/`end` (0-based half-open), decoupled from `gdt::interval`. Users convert to grove's closed intervals via `gdt::interval(entry.start, entry.end - 1)` at insertion time. Reader options are aggregate structs configurable via C++20 designated initializers (`{.skip_invalid_lines = true}`) or assign-after-construct.
- **bed_reader**: BED3/6/12 with mixed-format support. Resets optionals per record.
- **gff_reader**: GFF3/GTF with attribute parsing. Format auto-detected. Attributes stored in `std::map` with `std::less<>` for heterogeneous lookup. Opt-in `validate_gtf` validates mandatory GTF2 attributes (`gene_id`, `transcript_id`).
- **bam_reader**: SAM/BAM/CRAM via htslib. Configurable filtering (`bam_reader_options`). Converts SAM 1-based POS to 0-based half-open coordinates.
- **filetype_detector**: Detects file type and compression from magic bytes/extension.

### `utility/` — Helpers
- **ranges.hpp**: `key_lookup()` / `value_lookup()` for associative containers.
- **tokenizer.hpp**: Zero-copy `next_field()` — extracts delimited fields as `string_view` slices. Used by BED/GFF readers.

### `cli/` — Command-Line Interface (optional, `BUILD_CLI=ON`)
Subcommands: `idx` (index), `isec` (intersect). Uses cxxopts for argument parsing. Handlers in `cli/src/handlers/`.

## Build System

```bash
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release    # basic build
cmake -S . -B build -DBUILD_TESTING=ON             # with tests
cmake -S . -B build -DBUILD_CLI=ON                 # with CLI
cmake -S . -B build -DBUILD_BENCHMARKS=ON          # with benchmarks
cmake --build build
cd build && ctest --output-on-failure              # run tests
```

Sanitizers (mutually exclusive): `-DENABLE_ADDRESS_SANITIZER=ON` or `-DENABLE_THREAD_SANITIZER=ON`.

## Code Standards

- **C++20** required. Use concepts and `requires` clauses throughout.
- **Formatting**: `.clang-format` — run on modified files.
- **Namespace aliases**: `ggu` = `genogrove::utility`, `gdt` = `genogrove::data_type`, `ggs` = `genogrove::structure`, `gio` = `genogrove::io`
- **Memory**: Raw pointers in tree structures (grove owns roots, nodes own children). Keys in `std::deque` for stable addresses.
- **Errors**: `std::runtime_error` for logical errors, `std::out_of_range` for index violations.
- **Thread safety**: Public methods acquire locks, then call `_impl` versions. Different chromosomes can be read/written concurrently.

## Dependencies

Auto-fetched via CMake FetchContent:
- **htslib** (system, via pkg-config)
- **zlib** (system, via `find_package(ZLIB)`) — used for grove serialization compression
- **GoogleTest** (v1.15.2): `BUILD_TESTING=ON`
- **Google Benchmark** (v1.9.4): `BUILD_BENCHMARKS=ON`
- **cxxopts**: `BUILD_CLI=ON`

## Key Gotchas

- **Aggregate semantics**: Must represent subtree range for B+ tree navigation to work correctly.
- **Bulk insert precondition**: When appending to existing data, all new keys must be > existing keys.
- **K-mer in GoogleTest**: Use brace initialization `gdt::kmer{str}` (not parentheses) inside macros like `EXPECT_THROW`.
- **registry serialization**: Serialize registries first, then grove. Deserialize in same order.
- **Adding new key types**: Use traits-based pattern in `tests/structure/` — see `tests/structure/README.md`.
- **Serialization is always zlib-compressed**: `serialize()`/`deserialize()` use streaming zlib. The `inflate_streambuf` seeks back unconsumed bytes on `Z_STREAM_END`, so multiple compressed payloads can be concatenated in one stream.
- **Sanitizer false positives**: Ignore warnings from outside genogrove code (especially macOS Objective-C runtime).

## Directory Structure

```
include/genogrove/     Headers: structure/grove/, data_type/, io/, utility/, config/
src/                   Implementations (data_type/, io/, registries)
tests/                 GoogleTest suites: config/, data_type/, io/, utility/, structure/, cli/
cli/                   Optional CLI (include/, src/)
benchmarks/            Google Benchmark
docs/                  Sphinx docs (content lives in genogrove/docs repo)
cmake/                 CMake config files
```