# Changelog

All notable changes to genogrove will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Refactored
- **`bed_reader` / `gff_reader` field parsers take `std::string_view`**: both readers tokenize lines with the zero-copy tokenizer (`string_view` slices) but then materialized `std::string` copies just to call their parse helpers. `bed_reader`'s `parse_score` / `parse_strand` / `parse_thickness` / `parse_rgb` / `parse_blocks` (and the static `parse_csv`) and `gff_reader::parse_attributes` now take `std::string_view`, removing one avoidable allocation per optional BED field and per GFF record. `parse_blocks` swaps `std::stoi` for `std::from_chars` (matching every other parser in the file) so its count field can be a `string_view`. No behavior change. ([#336](https://github.com/genogrove/genogrove/issues/336), [#337](https://github.com/genogrove/genogrove/issues/337), [#410](https://github.com/genogrove/genogrove/pull/410))
- **Dead-code removal**: drops three unused symbols flagged by `/cpp-audit`. `grove::set_root_nodes` / `grove::set_rightmost_node` — private methods with zero call sites; `set_root_nodes` was an attractive nuisance (wiring it up would silently wipe the graph overlay, external keys, and `leaf_key_count`). `data_type/constants.hpp` — deleted; its lone `MAX_CHRM_BITS` constant was unreferenced, lived in a foreign `genogrove::core` namespace, and carried a comment that contradicted its value. `numeric::is_numeric` / `kmer::is_kmer` — trait tags that mirrored `interval::is_interval` but were never detected anywhere (only `is_interval` is consumed, by `grove_query` / `grove_flanking`); removed along with the tautological `kmerTest.isKmerConstexpr` test. No behavior change. ([#331](https://github.com/genogrove/genogrove/issues/331), [#348](https://github.com/genogrove/genogrove/issues/348), [#349](https://github.com/genogrove/genogrove/issues/349), [#409](https://github.com/genogrove/genogrove/pull/409))

### Changed
- **`grove` public docstrings**: fixes two Doxygen-comment inconsistencies on the public `grove` API surface. `grove(int order)`'s `@param` line said "k-1 keys and k children" while the parameter is named `order` — now reads "order-1 keys and order children" against the actual identifier. `insert_data(…, sorted_t)`'s `@param` tag was bare (`@param Tag to dispatch...`), which Doxygen could not cross-reference; added the missing `sorted_t` parameter name. Comments-only; no public API or behavior change. ([#369](https://github.com/genogrove/genogrove/issues/369), [#370](https://github.com/genogrove/genogrove/issues/370), [#408](https://github.com/genogrove/genogrove/pull/408))

### Refactored
- **CLI hygiene**: tightens the `cli/` module along five small `/cpp-audit` findings. (1) File-scope `gdt` / `ggs` / `gio` aliases in public CLI headers (`handlers/bed.hpp`, `handlers/gff.hpp`, `subcalls/intersect.hpp`, `subcalls/index.hpp`) no longer leak into includers — handler aliases are scoped inside `namespace handlers::bed` / `handlers::gff`, and the unused subcall aliases are dropped entirely. (2) The non-standard `ggt` alias is replaced with the project-standard `gdt`. (3) `intersect::execute()` no longer re-runs `validate(args)` — `main.cpp` already calls `validate()` before `execute()` on every code path, so the duplicate could only diverge under TOCTOU (file deleted between the two calls). (4) `DEFAULT_TREE_ORDER` in `index.cpp` / `intersect.cpp` becomes `constexpr std::string_view` (C++20-idiomatic). (5) The `"..."` placeholder in `main.cpp`'s `cxxopts::Options` description is replaced with `"Index and query genomic intervals using grove B+ trees."` so `genogrove --help` is informative. No public library API change. ([#340](https://github.com/genogrove/genogrove/issues/340), [#341](https://github.com/genogrove/genogrove/issues/341), [#342](https://github.com/genogrove/genogrove/issues/342), [#368](https://github.com/genogrove/genogrove/issues/368), [#376](https://github.com/genogrove/genogrove/issues/376), [#407](https://github.com/genogrove/genogrove/pull/407))
- **`grove` serialization internals**: extracts the `reinterpret_cast<…>(&x), sizeof(x)` boilerplate that `grove::serialize` / `grove::deserialize` / `node::serialize` / `node::deserialize` all duplicated into `detail::write_pod` / `detail::read_pod` templates (new `pod_io.hpp` header), guarded by `static_assert(std::is_trivially_copyable_v<T>)` so the helpers can't silently accept a non-POD. Per-site `if (!is)` stream-state checks are preserved so deserialization errors still name the field that failed. Also replaces the two `std::function`-typed recursive lambdas (`index_dfs`, `collect_leaves`) inside `grove_serialize.ipp` with templated free functions in `genogrove::structure::detail`, eliminating per-recursion type-erasure heap allocations on serialize / deserialize. Wire format unchanged — same byte layout, same key/leaf ordering. ([#338](https://github.com/genogrove/genogrove/issues/338), [#371](https://github.com/genogrove/genogrove/issues/371), [#406](https://github.com/genogrove/genogrove/pull/406))
- **`bam_reader` internals**: `parse_alignment` now returns `void` (the previous `bool` return was always `true` and discarded at the call site; truncation still propagates via `throw`), and `compute_interval` now takes the already-parsed `cigar_string&` and reuses `cigar_element::consumes_reference()` instead of an inline CIGAR-op predicate — single source of truth for the reference-consuming op set. No behavior change: `parse_cigar` already filtered ops with code > 8, and the old inline predicate matched the same ops (M/D/N/=/X) the typed predicate now matches. ([#351](https://github.com/genogrove/genogrove/issues/351), [#352](https://github.com/genogrove/genogrove/issues/352), [#405](https://github.com/genogrove/genogrove/pull/405))

## [0.24.1] - 2026-05-18

### Refactored
- **`gdt::registry<>` Rule of Five completeness**: adds an explicit `~registry() = default;` declaration next to the four already-deleted copy/move members so the type's intent is unambiguous to readers — singleton, non-copyable, non-movable, defaulted destructor. No behavior change; the compiler-generated destructor is identical to the explicit defaulted one. ([#358](https://github.com/genogrove/genogrove/issues/358), [#402](https://github.com/genogrove/genogrove/pull/402))

### Added
- **`gdt::registry<Key, Tag, Payload>`**: optional `Payload` template parameter (third position, defaulting to `Key`) lets a registry store records keyed on a subset of their own fields — e.g. a `gene_info{name, biotype}` keyed on `gene_id` alone — without overloading the payload's `operator==` and `std::hash` to consider only the identity subset (which would leak partial equality to every consumer holding the payload outside the registry). New `intern(key, payload)` overload deduplicates on `key` alone with **first-write-wins** semantics: re-interning a known key returns the existing id and silently drops the new payload, matching the typical "first source has the canonical record; later sources may carry placeholders" pattern. `find()` takes `Key`; `get()` returns `const Payload&`. Existing `registry<T>` / `registry<T, Tag>` call sites compile and behave identically (single-arg `intern(value)` is preserved via `requires Key == Payload`), and the historical `count + payloads` serialization wire format is preserved when `Key == Payload`; the new `count + (key, payload) pairs` layout is used only when the types differ. `deserialize()` now also rejects streams containing duplicate keys with `std::runtime_error("Failed to deserialize registry: duplicate key")` — protects the new `Key != Payload` branch from a null-pointer dereference in the next `serialize()` and closes a latent silent-corruption bug in the historical `Key == Payload` branch on malformed input; legitimate `serialize()` output is unaffected since `intern()` deduplicates. ([#400](https://github.com/genogrove/genogrove/issues/400), [#401](https://github.com/genogrove/genogrove/pull/401))

## [0.24.0] - 2026-05-17

### Added
- **`gdt::registry<T, Tag>`**: optional phantom `Tag` template parameter discriminates singletons that share the same value type `T`, so two unrelated pools (e.g. transcript ids vs sample names, both `std::string`) get independent ID spaces without consumers having to wrap `T` in a strong-type struct. `Tag` defaults to `void`, so every existing `registry<T>` keeps its singleton and call sites are unchanged. Tag is type-level only — no storage, no runtime cost, no impact on the serialization wire format. ([#319](https://github.com/genogrove/genogrove/issues/319), [#320](https://github.com/genogrove/genogrove/pull/320))
- **`grove::compact()`**: reclaims `key_storage` slots that `remove_key()` previously left behind (and orphan separator keys dropped by internal-node splits). Walks every B+ tree, copies live keys into a fresh deque, rewrites every node and every graph adjacency entry to the new pointers, then swaps the new storage in. External keys (`add_external_key`) are unaffected. O(N + E). **Invalidates every key pointer previously returned by `insert_data()` for indexed keys** — callers must rediscover keys via queries after compaction. Also adds `key_storage_size()` so callers can decide when compaction is worth running. ([#322](https://github.com/genogrove/genogrove/issues/322), [#388](https://github.com/genogrove/genogrove/pull/388))

### Changed
- **SPDX header coverage**: backfills the standard `SPDX-License-Identifier: GPL-3.0-or-later` block across 23 source files that were missing it after [d7aa89f](https://github.com/genogrove/genogrove/commit/d7aa89f) — the `src/data_type/*.cpp` files originally flagged in the issue, plus `src/io/*.cpp`, `cli/src/*.cpp`, the affected `tests/*.cpp`, and the `grove_*.ipp` class-body fragments. Every `.cpp` / `.hpp` / `.h` / `.ipp` file in the tree now carries the header so file-level license scanners (REUSE-lint, ScanCode, FOSSology) see consistent metadata. No code-behavior change. ([#360](https://github.com/genogrove/genogrove/issues/360), [#390](https://github.com/genogrove/genogrove/pull/390))
- **`query_result` and `flanking_query_result` const-correctness + concept constraint** (**source-level breaking change for callers that bound result pointers to non-const `key*`**): both result containers now store and return `const key<...>*` instead of `key<...>*`, so `result.get_keys()[i]->set_value(...)` (and friends) is now a compile error rather than a silent corruption of B+ tree ordering invariants. Both class templates are also constrained with `template<key_type_base key_type, ...>`, so misuse with a non-conforming key type fails at the result-container instantiation site with a clean concept diagnostic instead of deep inside `key<>` template instantiation. Internal grove call sites (`grove_query.ipp`, `grove_flanking.ipp`), CLI handlers, and existing tests are unaffected — they pass non-const `key*` through implicit conversion at the API boundary and only read via const methods. ([#324](https://github.com/genogrove/genogrove/issues/324), [#397](https://github.com/genogrove/genogrove/pull/397))
- **`gdt::key<>` comparisons compare value only** (**source-level semantic change for `==`; `<` and `>` are new on the wrapper**): `operator==` no longer factors `data` into the comparison — two keys at the same `value` with different `data` now compare equal. `data_type` no longer needs to be equality-comparable for `key<>` to satisfy `std::equality_comparable`. New `operator<` and `operator>` on the wrapper delegate to `value::operator<` / `value::operator>`; they are unconditionally available because the `key_type_base` concept already requires `<` and `>` on `key_type`. Matches the B+ tree's notion of identity (the tree orders and searches by value, never by data). The original issue proposed tightening the `==` requires-clause to require `data_type` equality-comparability; instead the dependency on `data_type` equality was removed entirely and the same value-only design was extended to `<` / `>`. ([#332](https://github.com/genogrove/genogrove/issues/332), [#398](https://github.com/genogrove/genogrove/pull/398))

### Fixed
- **`bam_reader::read_next()` honors the `file_reader_base` error-message contract** (**minor behavior change**): `error_message_` is now cleared at the very top of `read_next()` rather than only inside the read loop, so the `!sam_file_ || at_eof_` early-return path can no longer leak a stale message from a prior call. Truncated auxiliary data — previously returned alongside `true` from `read_next()` with `error_message_` quietly set — now throws `std::runtime_error("Truncated auxiliary data at record N")`. Together these guarantee the documented invariant: when `read_next()` returns `true`, `get_error_message()` reads empty. ([#321](https://github.com/genogrove/genogrove/issues/321), [#385](https://github.com/genogrove/genogrove/pull/385))
- **`bam_reader::compute_interval` no longer fabricates a 1-base interval for zero-ref-consuming CIGARs** (**behavior change**): pure soft-clip (`100S`) and hard-clip-only secondary records now propagate `start == end == POS` truthfully instead of being silently coerced to `[pos, pos+1)` — the old behavior produced spurious overlap hits during `intersect()`. New `sam_entry::consumes_reference()` helper is the clean caller-side gate before converting to a closed `gdt::interval(start, end - 1)`; the conversion is only valid when `start < end`. Mirrors the existing unmapped-read pattern (`start == end == 0`). ([#327](https://github.com/genogrove/genogrove/issues/327), [#391](https://github.com/genogrove/genogrove/pull/391))
- **`bgzf_next_data_line` preserves embedded NULs**: switched line construction from `std::string(str.s)` (C-string ctor — truncates at the first `\0`) to `std::string(str.s, str.l)` (length-counted ctor — preserves the full byte range). kstring isn't NUL-terminated by contract, so the prior code silently dropped everything past an embedded NUL, including trailing tab-separated fields that downstream BED/GFF parsers needed. Affects both `bed_reader` and `gff_reader`. ([#346](https://github.com/genogrove/genogrove/issues/346), [#392](https://github.com/genogrove/genogrove/pull/392))
- **`file_reader_iterator::operator==` now respects iterator position** (**minor behavior change for an edge case**): two non-end iterators on the same reader used to compare equal unconditionally — the operator only checked `at_end_` + `reader_` identity. Now compares a new monotonic `pos_` counter (bumped on each successful `advance()`) so two non-end iterators are equal iff they have the same parent reader AND have advanced the same number of times. Restores the input-iterator contract that "two iterators compare equal iff they refer to the same position." End-iterator comparisons (`it == reader.end()`) are unchanged. Affects every reader (`bed_reader`, `gff_reader`, `bam_reader`, `fasta_reader`) since they share the same `file_reader_iterator`. ([#325](https://github.com/genogrove/genogrove/issues/325), [#394](https://github.com/genogrove/genogrove/pull/394))
- **`inflate_streambuf` throws on seek failure for non-seekable sources** (**minor behavior change**): after `Z_STREAM_END` with leftover buffered bytes, the streambuf used to call `source_.seekg(-avail_in, cur)` to rewind unconsumed bytes without checking the result — non-seekable sources (pipes, sockets, custom non-seekable streambufs) silently failed the seek and dropped the trailing data, violating the "concatenated payloads" contract. Now checks `source_.fail()` and throws `std::runtime_error("inflate_streambuf: source stream is not seekable; concatenated payloads require a seekable source")`. Only fires when there are leftover bytes to rewind, so single-payload usage on seekable streams (`std::ifstream`, `std::stringstream`) is unaffected. ([#323](https://github.com/genogrove/genogrove/issues/323), [#395](https://github.com/genogrove/genogrove/pull/395))
- **`registry::deserialize` provides a strong exception guarantee** (**minor behavior change**): used to `storage.clear()` + `lookup.clear()` *before* reading entries, so a truncated stream or throwing `serializer<T>::read` / `T` ctor left the singleton with a partial dataset that corrupted subsequent `intern()` calls. Now reads into local `std::deque<T>` + `std::unordered_map<T, id_type>` temporaries and commits via noexcept move-assign only after the read loop completes. Also rejects header counts that exceed `id_type` capacity (would silently wrap ids and trigger pathological allocations on malformed streams). Side benefit: the mutex is only held for the brief commit step, so concurrent `intern()` / `find()` / `get()` no longer block on deserialize I/O. Wire format unchanged. ([#330](https://github.com/genogrove/genogrove/issues/330), [#396](https://github.com/genogrove/genogrove/pull/396))

### Refactored
- **`grove::serialize()`, `grove::grove_to_sif()`, and `node::serialize()` are now `const`**: read-only graph_overlay accessors (`get_neighbors`, `get_edges`, `get_edge_list`, `get_neighbors_if`, `has_edge`, `out_degree`) now take `const gdt::key<...>*` source, and the adjacency map is keyed on `const gdt::key<...>*` so lookups don't need a `const_cast`. Removes the `const_cast` that `serialize()` previously used to compensate for the non-const accessors. Mutating accessors (`add_edge`, `remove_edge`, `remove_edges_*`) keep their non-const-pointer signatures and existing callers passing `key*` continue to work via implicit conversion — no source changes required in consumers. ([#334](https://github.com/genogrove/genogrove/issues/334), [#335](https://github.com/genogrove/genogrove/issues/335), [#386](https://github.com/genogrove/genogrove/pull/386))
- **Header hygiene cleanup**: `key_type_base.hpp` now explicitly includes `<string>` (the `to_string()` requirement was working only via transitive includes); `serialization_traits.hpp` drops its unused `<cassert>` include; `bam_reader.hpp` moves the misplaced `<utility>` include into the standard-headers cluster; `filetype_detector.hpp` moves `namespace fs = std::filesystem` from file scope into the `genogrove::io` namespace so the alias no longer leaks to every includer. No behavior change; pure include-graph cleanup. ([#361](https://github.com/genogrove/genogrove/issues/361), [#362](https://github.com/genogrove/genogrove/issues/362), [#363](https://github.com/genogrove/genogrove/issues/363), [#382](https://github.com/genogrove/genogrove/issues/382), [#387](https://github.com/genogrove/genogrove/pull/387))

## [0.23.0] - 2026-05-15

### Added
- **`registry::find(value)`**: returns `std::optional<id_type>` for the value if interned, `std::nullopt` otherwise. Lets callers probe the registry without inserting. ([#316](https://github.com/genogrove/genogrove/issues/316), [#317](https://github.com/genogrove/genogrove/pull/317))

### Changed
- **`gdt::registry<T>` is now dedup-on-insert** (**breaking**): `register_data()` is replaced by `intern()`. `intern(value)` returns the existing ID for a value already in the registry, or allocates a new one if not — idempotent: `intern(x) == intern(x)` for all `x`. Collapses N references to the same value down to a single 4-byte ID, the use case the issue was filed for (chromosome names, transcript/gene IDs, sample names seen thousands of times across grove entries). `T` must now satisfy the new `registry_value` concept (hashable + equality-comparable). The mutable `get(id)` overload is removed — mutating an interned value would desynchronize the internal value→id lookup. Old serialized files load fine; the lookup map is rebuilt from the deque on `deserialize()`. ([#316](https://github.com/genogrove/genogrove/issues/316), [#317](https://github.com/genogrove/genogrove/pull/317))
- **`gdt::registry<T>` is now thread-safe**: `intern()`, `find()`, `clear()`, `serialize()`, and `deserialize()` are protected by an internal `std::mutex`. `get(id)`, `contains(id)`, `size()`, and `empty()` are unlocked fast paths — `get(id)` is safe under concurrent `intern()` iff the caller obtained `id` from an `intern()` call that happens-before this thread (the natural pattern: id is returned, then published to other threads via a queue/atomic/join). Lets atroplex's forthcoming parallel-build code use one upstream primitive instead of maintaining its own per-string-pool boilerplate. ([#316](https://github.com/genogrove/genogrove/issues/316), [#317](https://github.com/genogrove/genogrove/pull/317))

## [0.22.0] - 2026-05-07

### Added
- **`grove::flanking()`**: returns the predecessor and successor of a query in the grove's sort order, restricted to keys that do not overlap the query. Two overloads, with or without a caller-supplied compatibility predicate (e.g., strand match). Generic over `key_type` — interval-aware tight pruning when `key_type::is_interval` is defined, looser comparison-based pruning otherwise. New `gdt::flanking_query_result` companion type holds the predecessor/successor pointers; distance is type-specific and computed by the caller. Named `flanking` rather than `neighbors` to avoid collision with the existing graph-overlay `get_neighbors()`. ([#309](https://github.com/genogrove/genogrove/issues/309), [#311](https://github.com/genogrove/genogrove/pull/311))

### Changed
- **`gff_reader` / `bed_reader` no longer throw on zero-record inputs** (**behavior change**): empty files, comments-only files, and files where every line is blank or starts with `#` are now treated as structurally valid inputs that simply contain no records. The constructor returns successfully and iteration yields zero entries (`reader.begin() == reader.end()`). File-open failures, malformed first lines, and per-line parse errors during iteration still throw as before. Lets batch consumers (e.g., atroplex's cohort-scale builds) decide their own policy on empty inputs instead of aborting. ([#310](https://github.com/genogrove/genogrove/issues/310), [#314](https://github.com/genogrove/genogrove/pull/314))

### Fixed
- **`gff_reader` and `bed_reader` constructors fail on plain gzip files**: the rewind-after-validation step used `bgzf_seek`, which only works on BGZF (plain gzip has no block index). Affected ENCODE-style GTFs distributed as `gzip` rather than `bgzip`. New helper `bgzf_rewind_to_start()` falls back to close+reopen when `bgzf_seek` fails. Also rewrote `bgzf_has_next()` on top of stateless `bgzf_peek()` — the previous read+seek-back pattern silently returned `false` on plain gzip and broke iteration mid-stream. ([#303](https://github.com/genogrove/genogrove/issues/303), [#313](https://github.com/genogrove/genogrove/pull/313))

## [0.21.0] - 2026-04-13

### Added
- **B+ tree key removal with rebalancing**: `grove::remove_key()` removes a key from the tree, borrowing from a sibling or merging if the leaf underflows, cascading internal rebalances and collapsing the root if needed. Automatically cleans up all graph edges (incoming + outgoing) involving the removed key. ([#304](https://github.com/genogrove/genogrove/issues/304), [#305](https://github.com/genogrove/genogrove/pull/305))
- **Bulk graph edge removal**: `graph_overlay::remove_edges_from()`, `remove_edges_to()`, `remove_all_edges()`, `remove_edges_if()` (with grove forwarding methods) for scrubbing edges independently of key removal. ([#305](https://github.com/genogrove/genogrove/pull/305))
- **`node::calc_subtree_range()`**: walks the last-child chain to produce the full subtree bounding range, used where separators need to cover the entire subtree (not just the node's own keys). `calc_parent_key()` renamed to `calc_keys_aggregate()` for accuracy. ([#305](https://github.com/genogrove/genogrove/pull/305))

### Fixed
- **`insert_iter` stale separators**: on a non-splitting recursive insert, the parent's separator for the child was never refreshed; if the new key extended the child's range, `search_iter`'s abort clause could then fire and make the key unreachable via `intersect()`. The separator is now widened with `aggregate(sep, key)` after each recursive insert. ([#305](https://github.com/genogrove/genogrove/pull/305))
- **`build_tree_bottom_up` under-filled tail and multi-level separator bug**: greedy packing left the last leaf/internal group under min occupancy, and internal-level separators computed via `calc_keys_aggregate(child)` missed the child's own last-child subtree for 3+ level trees. Now distributes items evenly across groups and tracks each node's true subtree range as the build proceeds. ([#305](https://github.com/genogrove/genogrove/pull/305))
- **`split_internal_node` unbalanced split**: with `default_mid = (order+1)/2` the split could produce a right child with 0 keys and 1 child (degenerate). Now uses a single `order / 2` midpoint for both leaf and internal splits — the one value that satisfies both leaf and internal min-occupancy constraints. ([#305](https://github.com/genogrove/genogrove/pull/305))
- **`search_iter` strand-unsafe abort**: the early-out `query < keys[0] && !overlaps` tripped on pure strand mismatch for `genomic_coordinate`, aborting subtree traversals that still contained strand-compatible matches. Replaced with a pure spatial check (`query.get_end() < keys[0].get_start()`). ([#305](https://github.com/genogrove/genogrove/pull/305))
- **`grove` constructor now rejects `order < 3`**: with `order == 2`, `split_internal_node` produced a degenerate right sibling with 0 keys and 1 child that broke every code path dereferencing `keys[0]`. The check was previously `order < 2` which let this case through. CLI `intersect` validation, benchmark sweeps, and the `orderTwoFunctional` / `orderTwoSortedInsert` tests are updated accordingly; a stale `node::calc_keys_aggregate()` docstring reference is also corrected. ([#307](https://github.com/genogrove/genogrove/pull/307))
- **Sorted-insert hot-path regression from #305**: replacing the sorted-leaf split with the symmetric `split_mid() = order/2` made leaf splits fire roughly twice as often on sorted append, causing a ~2× runtime regression at small orders (1.73× at `order=5, N=100` up to 2.07× at `order=5, N=1000` on the gh-pages continuous benchmark chart). `split_node()` now picks an asymmetric leaf midpoint (`mid = order - 1`) on the sorted-insert path and the symmetric `split_mid()` on the regular path; internal splits stay symmetric regardless, so the #306 degenerate `(0 keys, 1 child)` right internal cannot reappear. The shared test validator (new `tests/structure/tree_validator.hpp`, used by both `key_type_grove_test.hpp` and `grove_remove_test.cpp`) now exempts the rightmost leaf from the min-occupancy check, matching standard right-biased B+ tree behavior. ([#308](https://github.com/genogrove/genogrove/pull/308))

### Changed
- **Removed `fill_factor` from `grove`** (constructor, member, getters/setters, serialization): after tightening split points to respect leaf and internal minimum occupancy, `fill_factor` had essentially no effect. The O(1) rightmost-append path of sorted insert is preserved. ([#305](https://github.com/genogrove/genogrove/pull/305))

## [0.20.2] - 2026-04-08

### Fixed
- **`inflate_streambuf` leaves failbit on source stream after decompression**: When the last `source_.read()` returned fewer bytes than requested, `std::istream::read` set eofbit + failbit. The `source_.clear()` call was inside the `avail_in > 0` seekback branch and never ran when all bytes were consumed. Now clears unconditionally on `Z_STREAM_END`. ([#301](https://github.com/genogrove/genogrove/issues/301), [#302](https://github.com/genogrove/genogrove/pull/302))

## [0.20.1] - 2026-04-08

### Fixed
- **Edge index mismatch in serialization roundtrip**: Serialization built key indices by iterating `key_storage` (insertion order), but deserialization populates `key_storage` via DFS pre-order traversal. Internal separator keys from node splits caused indices to diverge, wiring edges to wrong keys after roundtrip. Now builds indices via DFS to match deserialization order. ([#299](https://github.com/genogrove/genogrove/issues/299), [#300](https://github.com/genogrove/genogrove/pull/300))

## [0.20.0] - 2026-04-03

### Added
- **FASTA/FASTQ streaming reader**: `fasta_reader` class for streaming FASTA and FASTQ files (including gzip-compressed) using htslib's kseq parser. Adds `FASTA`/`FASTQ` to filetype detector with standard extensions. ([#297](https://github.com/genogrove/genogrove/pull/297))
- **Indexed FASTA random access**: `fasta_index` class wrapping htslib's faidx API for region-based sequence retrieval with 0-based half-open coordinates. ([#298](https://github.com/genogrove/genogrove/pull/298))

### Changed
- **Rename FASTA/FASTQ reader types**: `sequence_reader` → `fasta_reader`, `sequence_entry` → `fasta_entry`, `sequence_reader_options` → `fasta_reader_options` for naming consistency. ([#298](https://github.com/genogrove/genogrove/pull/298))

## [0.19.0] - 2026-03-29

### Added
- **Graph overlay edges now persist across serialization** (**breaking format change**): Edges are serialized as flat `(source_index, target_index, [metadata])` pairs. Old serialized files must be re-created. ([#286](https://github.com/genogrove/genogrove/issues/286), [#296](https://github.com/genogrove/genogrove/pull/296))
- **Grove test fixture isolation documentation**: Documented that `grove_test_base` is safe without `SetUp()`/`TearDown()`. ([#181](https://github.com/genogrove/genogrove/issues/181), [#259](https://github.com/genogrove/genogrove/pull/259))
- **Edge case tests for key types and grove operations**: Zero-length interval overlaps, large `size_t` coordinates, `INT_MIN`/`INT_MAX` numeric operations, single-element grove queries, duplicate key insertion, and order=2 stress tests. ([#179](https://github.com/genogrove/genogrove/issues/179), [#258](https://github.com/genogrove/genogrove/pull/258))
- **IO edge case tests**: GFF `start=1` boundary and single-base features, GFF3 URL-encoded semicolons, BED12 blockCount mismatch and blockStart out-of-bounds validation. ([#179](https://github.com/genogrove/genogrove/issues/179), [#262](https://github.com/genogrove/genogrove/pull/262))

### Changed
- **GFF reader stores native 1-based inclusive coordinates** (**breaking**): `gff_entry.start` and `gff_entry.end` now contain coordinates as they appear in the GFF file. Conversion to grove intervals simplifies to `gdt::interval(entry.start, entry.end)`. ([#257](https://github.com/genogrove/genogrove/issues/257), [#261](https://github.com/genogrove/genogrove/pull/261))
- **`get_root_nodes()` returns by const reference**: Eliminates an unnecessary map copy on every call. ([#146](https://github.com/genogrove/genogrove/issues/146), [#255](https://github.com/genogrove/genogrove/pull/255))
- **Standardized SPDX license identifiers to `GPL-3.0-or-later`**: Fixed mixed MIT/GPLv3 identifiers across all files. Fixed Doxygen doc comments in `graph_overlay.hpp`. ([#276](https://github.com/genogrove/genogrove/issues/276), [#277](https://github.com/genogrove/genogrove/issues/277), [#278](https://github.com/genogrove/genogrove/pull/278))

### Fixed
- **GTF attribute parser incorrectly splits on semicolons inside quoted values**: Added quote-aware `next_gtf_field()` tokenizer. ([#263](https://github.com/genogrove/genogrove/issues/263), [#264](https://github.com/genogrove/genogrove/pull/264))
- **Node allocations leak on exception**: RAII-protected `build_tree_bottom_up()`, `split_node()`, and `node::deserialize()` with `std::unique_ptr`. ([#141](https://github.com/genogrove/genogrove/issues/141), [#265](https://github.com/genogrove/genogrove/pull/265))
- **Leaf chain traversal could overflow stack and miss overlapping intervals**: Converted to iteration; fixed pruning condition to only check `first_key.start > query.end`. ([#274](https://github.com/genogrove/genogrove/issues/274), [#290](https://github.com/genogrove/genogrove/pull/290))
- **`vertex_count()` and `indexed_vertex_count()` inflated by separator keys**: Added `leaf_key_count` counter tracking only data insertions. ([#282](https://github.com/genogrove/genogrove/issues/282), [#293](https://github.com/genogrove/genogrove/pull/293))
- **Interval and genomic_coordinate setters bypass validation**: Replaced `set_start()`/`set_end()` with atomic `set_range(start, end)`. Added strand validation to `set_strand()`. ([#273](https://github.com/genogrove/genogrove/issues/273), [#289](https://github.com/genogrove/genogrove/pull/289))
- **Dangling pointer in bulk insert when `build_tree_bottom_up` throws**: RAII-guards old root and erases map entries before rebuild. ([#283](https://github.com/genogrove/genogrove/issues/283), [#294](https://github.com/genogrove/genogrove/pull/294))
- **CLI handlers called `exit(1)` bypassing RAII cleanup**: Exceptions now propagate to `main()`. ([#268](https://github.com/genogrove/genogrove/issues/268), [#287](https://github.com/genogrove/genogrove/pull/287))
- **zlib streambuf missing explicit move deletion**: Deleted move operations to prevent double `deflateEnd`/`inflateEnd`. ([#269](https://github.com/genogrove/genogrove/issues/269), [#288](https://github.com/genogrove/genogrove/pull/288))
- **BED reader uses locale-dependent `stoi`/`stoul`**: Replaced with `std::from_chars`. ([#275](https://github.com/genogrove/genogrove/issues/275), [#291](https://github.com/genogrove/genogrove/pull/291))
- **Defensive checks**: `newlocale()` null check, `calc_parent_key()` empty-keys precondition, dead `validate_extension` removal. ([#270](https://github.com/genogrove/genogrove/issues/270), [#271](https://github.com/genogrove/genogrove/issues/271), [#272](https://github.com/genogrove/genogrove/issues/272), [#279](https://github.com/genogrove/genogrove/pull/279))

### Refactored
- **Decompose `grove.hpp` into `.ipp` files**: Split 1351-line file into `grove_graph.ipp`, `grove_insert.ipp`, `grove_query.ipp`, `grove_serialize.ipp`. Decomposed `split_node()` into `split_leaf_node()` + `split_internal_node()`. ([#184](https://github.com/genogrove/genogrove/issues/184), [#280](https://github.com/genogrove/genogrove/pull/280))
- **Tighten range concepts on bulk insert**: `input_range` → `forward_range && sized_range` / `random_access_range && sized_range`. ([#281](https://github.com/genogrove/genogrove/issues/281), [#292](https://github.com/genogrove/genogrove/pull/292))
- **Replace magic numbers with named constants**: `interval::INVALID_POSITION`, `kmer::BASE_MASK`, reader validation constants, CLI defaults. ([#187](https://github.com/genogrove/genogrove/issues/187), [#260](https://github.com/genogrove/genogrove/pull/260))
- **Remove dead code**: `skip_invalid_records` from `bam_reader_options` ([#250](https://github.com/genogrove/genogrove/issues/250)), `node::set_keys()`/`set_children()` ([#237](https://github.com/genogrove/genogrove/issues/237)), `set_root_nodes()` made private ([#253](https://github.com/genogrove/genogrove/issues/253))
- **Add `[[nodiscard]]` to non-trivial pure queries**: `intersect()`, `calc_parent_key()`, `get_neighbors()`, `get_edges()`, `get_neighbors_if()`, `has_next()`. ([#150](https://github.com/genogrove/genogrove/issues/150), [#266](https://github.com/genogrove/genogrove/pull/266))

## [0.18.0] - 2026-03-20

### Added
- **Opt-in GTF attribute validation**: New `validate_gtf` option in `gff_reader_options` validates mandatory GTF2 attributes (`gene_id` on all features, `transcript_id` on transcript-level features). Respects `skip_invalid_lines`. Off by default, only applies to GTF-format files. Also added usage documentation to all reader options structs. ([#219](https://github.com/genogrove/genogrove/issues/219), [#252](https://github.com/genogrove/genogrove/pull/252))
- **BAM reader filter and array tag test coverage**: Added 8 tests covering `skip_qc_fail`, `skip_duplicates`, QC-fail/duplicate flag detection, `high_quality()` filter combination, and array tag parsing (`B:i`, `B:f`, `B:C`). Extended test SAM/BAM data with 3 new records. ([#177](https://github.com/genogrove/genogrove/issues/177), [#249](https://github.com/genogrove/genogrove/pull/249))
- **`serialization_traits` test coverage**: Added 16 tests covering trivially-copyable round-trips, `std::string` specialization (normal, empty, embedded nulls), stream error handling, `serializer<T>` dispatch to member methods vs traits, and multi-value sequential serialization. ([#180](https://github.com/genogrove/genogrove/issues/180), [#246](https://github.com/genogrove/genogrove/pull/246))
- **Typed graph overlay tests**: Added 7 `TYPED_TEST_P` graph overlay tests (edge creation, removal, `has_edge`, `get_neighbors`, `link_if`, cross-chromosome edges, graph clear) running across all key types (interval, genomic_coordinate, numeric, kmer). Fixed pre-existing bugs in `assert_edge_removal` and `assert_clear_graph` helpers. ([#176](https://github.com/genogrove/genogrove/issues/176), [#239](https://github.com/genogrove/genogrove/pull/239))
- **`query_result` test coverage**: Added 6 new tests covering void `data_type`, empty results, key insertion-order preservation, `numeric` keys, `genomic_coordinate` keys with string data, and null key rejection ([#174](https://github.com/genogrove/genogrove/issues/174), [#238](https://github.com/genogrove/genogrove/pull/238))
- **IO reader error-message checks after iteration**: Added `get_error_message().empty()` assertions after all range-for loops in BED (10), GFF (8), and BAM (22) reader tests to enforce the iterator error-checking contract ([#178](https://github.com/genogrove/genogrove/issues/178), [#238](https://github.com/genogrove/genogrove/pull/238))
- **Error-path test coverage**: Added 28 tests covering previously untested error paths — serialization/deserialization failure for all key types and `registry` (empty stream, truncated stream, failed stream), node `add_child`/`get_child` out-of-range, grove `intersect` on non-existent index, filetype detector on non-existent file, BAM reader empty SAM file and `get_error_message()` after iteration, and utility `value_lookup`/`key_lookup` for missing entries ([#137](https://github.com/genogrove/genogrove/issues/137), [#222](https://github.com/genogrove/genogrove/pull/222))

### Refactored
- **Reduce temporary string allocations in GFF attribute parsing**: Use `string_view` for quote-stripping in GTF attributes before materializing `std::string`, and `insert_or_assign()` in both GTF and GFF3 branches for consistent single-allocation insertion. ([#169](https://github.com/genogrove/genogrove/issues/169), [#245](https://github.com/genogrove/genogrove/pull/245))
- **Extract shared BGZF utilities from IO readers**: Extracted `bgzf_next_data_line()` and `bgzf_has_next()` into `io/bgzf_utils.hpp/.cpp`, eliminating ~100 lines of duplicated comment/empty-line skip loops and EOF-peek logic from `bed_reader` and `gff_reader`. ([#185](https://github.com/genogrove/genogrove/issues/185), [#242](https://github.com/genogrove/genogrove/pull/242))
- **Decompose long IO reader functions**: Extracted `bed_reader::parse_optional_fields()` to flatten the 5-level nested if-chain for BED4–BED12 fields into a linear early-return flow. Extracted `gff_reader::parse_score()`, `parse_strand()`, `parse_phase()` helpers. Extracted `bam_reader::parse_tag_array()` with templatized `read_typed_array<T>()` to eliminate 7 repetitive array-parsing sub-cases. ([#183](https://github.com/genogrove/genogrove/issues/183), [#241](https://github.com/genogrove/genogrove/pull/241))
- **Const qualifiers on grove and node accessors**: Added const overloads for `node::get_keys()`, `get_children()`, `get_child()`. Marked `grove::get_rightmost_node()` and `get_root()` as `const`. Added targeted `[[nodiscard]]` to `registry::register_data()` and `grove::intersect()` (all-index overload). Added `CONTRIBUTING.md` with `[[nodiscard]]` policy and code standards. ([#156](https://github.com/genogrove/genogrove/issues/156), [#150](https://github.com/genogrove/genogrove/issues/150), [#236](https://github.com/genogrove/genogrove/pull/236))
- **Encapsulate grove and node internals**: Moved grove tree-manipulation methods (`set_rightmost_node()`, `get_root()`, `insert_root()`, `insert_iter()`, `split_node()`, `insert_data_sorted()`, `insert_sorted()`, `search_iter()`) to `private`. Removed `set_order()` from both `grove` and `node` — order is immutable after construction. ([#155](https://github.com/genogrove/genogrove/issues/155), [#227](https://github.com/genogrove/genogrove/pull/227))
- **Forward base class in IO reader move operations**: `bed_reader`, `gff_reader`, and `bam_reader` move constructors and move assignment operators now invoke the `file_reader<EntryType>` base class move constructor/assignment, preventing silent state loss if the base ever gains data members. ([#148](https://github.com/genogrove/genogrove/issues/148), [#225](https://github.com/genogrove/genogrove/pull/225))
- **Rename `data_registry` to `registry`**: With `index_registry` removed, the `data_` prefix is unnecessary. Renamed class, header, and test file. ([#229](https://github.com/genogrove/genogrove/pull/229))
- **Replace `exit(1)` with exceptions in CLI handlers**: CLI validation and error paths now throw `std::runtime_error` instead of calling `exit(1)`, enabling proper RAII cleanup and making handlers reusable in library/testing contexts. Top-level `main()` catches exceptions. Standardized error messages with consistent `"Error: "` prefix. ([#160](https://github.com/genogrove/genogrove/issues/160), [#231](https://github.com/genogrove/genogrove/pull/231))
- **Minor API design cleanups**: Added class-level docstring to `file_reader_iterator` documenting single-pass semantics, lifetime requirements, and error-checking guidance. Extracted CLI subcommand names into `constexpr std::string_view` constants. ([#162](https://github.com/genogrove/genogrove/issues/162), [#234](https://github.com/genogrove/genogrove/pull/234))

### Removed
- **Delete unused CLI `utility.hpp`/`utility.cpp`**: Removed dead `get_log()`/`get_time()` helpers and their include. Replaced commented-out code in `index::execute()` with `throw std::runtime_error`. ([#188](https://github.com/genogrove/genogrove/issues/188), [#235](https://github.com/genogrove/genogrove/pull/235))
- **Remove unused `index` and `index_registry`**: Deleted `index.hpp`, `index_registry.hpp`, `index.cpp`, `index_registry.cpp`, and `index_test.cpp` — these classes were not used by the core library or any consumers. Closes [#147](https://github.com/genogrove/genogrove/issues/147). ([#229](https://github.com/genogrove/genogrove/pull/229))

### Changed
- **`query_result` getters return by const reference**: `get_query()` and `get_keys()` now return `const key_type&` and `const std::vector<...>&` respectively, avoiding unnecessary copies on every call. ([#157](https://github.com/genogrove/genogrove/issues/157), [#251](https://github.com/genogrove/genogrove/pull/251))
- **`registry::get()` returns references instead of raw pointers** (**breaking**): `get()` now returns `const T&` / `T&` and throws `std::out_of_range` on invalid IDs instead of returning `nullptr`. Internal storage switched from `std::vector` to `std::deque` for reference stability across `register_data()` calls. Use `contains()` to check validity before calling `get()`. ([#143](https://github.com/genogrove/genogrove/issues/143), [#226](https://github.com/genogrove/genogrove/pull/226))

### Fixed
- **macOS CI: use absolute Apple Clang paths**: Use `/usr/bin/clang` and `/usr/bin/clang++` instead of bare `clang`/`clang++`, which resolved to Homebrew LLVM and caused `nullptr_t` build failures. ([#247](https://github.com/genogrove/genogrove/pull/247))
- **`bed_reader` constructor overflow detection**: Check `std::from_chars()` return values in constructor validation to detect `size_t` overflow on coordinates and fix error message accuracy (`"start >= end"`). ([#243](https://github.com/genogrove/genogrove/issues/243), [#244](https://github.com/genogrove/genogrove/pull/244))
- **Validate BED optional field groups as complete units**: `parse_optional_fields()` now rejects lines with partially-present BED9 (thickStart/thickEnd/itemRgb) or BED12 (blockCount/blockSizes/blockStarts) trios instead of silently treating them as a shorter format. ([#183](https://github.com/genogrove/genogrove/issues/183), [#241](https://github.com/genogrove/genogrove/pull/241))
- **Surface truncated BAM auxiliary data**: `parse_tags()` now signals truncation on any early-return path (insufficient bytes, unterminated strings, malformed arrays), and `parse_alignment()` sets `error_message_` so callers who check `get_error_message()` after iteration can detect it. The record itself is still returned since aux tags are supplementary metadata. ([#183](https://github.com/genogrove/genogrove/issues/183), [#241](https://github.com/genogrove/genogrove/pull/241))
- **`parse_csv()` returns `std::optional` to distinguish parse errors from empty input**: Malformed BED12 RGB fields (e.g., `"255,abc,0"`) and block size/start fields now produce specific error messages instead of silently leaving the entry unset. ([#161](https://github.com/genogrove/genogrove/issues/161), [#240](https://github.com/genogrove/genogrove/pull/240))
- **Null pointer checks in `graph_overlay`**: `add_edge()` (both overloads) and `get_neighbors()` now throw `std::invalid_argument` on null source or target pointers instead of silently inserting into the adjacency map. ([#146](https://github.com/genogrove/genogrove/issues/146), [#235](https://github.com/genogrove/genogrove/pull/235))
- **Test quality fixes**: Fixed test name typo (`verion_numbers_match` → `version_numbers_match`), removed commented-out debug output in `genomic_coordinate_test`, removed duplicate assertion in `key_type_grove_test`. ([#182](https://github.com/genogrove/genogrove/issues/182), [#235](https://github.com/genogrove/genogrove/pull/235))
- **Consistent `error_message` semantics across IO readers**: All three readers (`bed_reader`, `gff_reader`, `bam_reader`) now clear `error_message` at the start of each loop iteration in `read_next()`, so `get_error_message()` always reflects the most recently attempted record. Previously, `bed_reader` and `gff_reader` retained stale errors from skipped lines. Documented the contract on `file_reader_base::get_error_message()`. ([#158](https://github.com/genogrove/genogrove/issues/158), [#233](https://github.com/genogrove/genogrove/pull/233))
- **Use bounds-checked `get_child()` in `search_iter()`**: Replaced direct `get_children()[i]` vector access with the bounds-checked `get_child(i)` accessor, which throws `std::out_of_range` on invalid index instead of silently reading out-of-bounds. ([#142](https://github.com/genogrove/genogrove/issues/142), [#232](https://github.com/genogrove/genogrove/pull/232))
- **Fix bounds-check gaps in `bam_reader` parsing**: Guard `qual[0]` access when `l_qseq == 0` (unmapped reads), skip invalid CIGAR ops (`op > 8`) to prevent OOB in `to_char()`, add missing bounds checks for single-byte tag types (`A`/`c`/`C`), and replace unbounded `strlen` with `memchr` for `Z`/`H` string tags to handle unterminated strings safely. ([#144](https://github.com/genogrove/genogrove/issues/144), [#230](https://github.com/genogrove/genogrove/pull/230))
- **`set_root_nodes()` now clears key storage, external keys, and graph overlay**: Previously only deleted tree nodes and cleared rightmost cache, leaving orphaned keys in `key_storage`/`external_key_storage` and dangling pointers in `graph_data`. ([#140](https://github.com/genogrove/genogrove/issues/140), [#224](https://github.com/genogrove/genogrove/pull/224))
- **Enforce Rule of Five on `node` and `grove`**: Both classes had custom destructors that `delete` raw pointers but relied on compiler-generated copy operations, causing double-free on copy. Deleted copy constructor/assignment on both. Added explicit `noexcept` move constructor/assignment to `node` (transfers child ownership, nulls source pointers). Defaulted `noexcept` move operations on `grove` (container moves leave source empty). ([#138](https://github.com/genogrove/genogrove/issues/138), [#223](https://github.com/genogrove/genogrove/pull/223))
- **Add precondition checks to public constructors and API boundaries**: Validate inputs at public API boundaries — `interval(start, end)` and `genomic_coordinate(strand, start, end)` reject inverted coordinates (`start > end`) and invalid strand characters; `node`/`grove` constructors reject `order < 2`; `grove` constructor and `set_fill_factor()` reject out-of-range fill factors (now throw `std::invalid_argument` consistently); `node::insert_key_ptr()` both overloads reject null pointers and the indexed overload bounds-checks the index; `query_result::add_key()` rejects null pointers. Fixed `interval::overlaps()` constructing a temporary interval with potentially inverted coordinates. Widened CLI BED/GFF handler catch blocks from `std::runtime_error` to `std::exception`. Removed bulk insert sorted-precondition runtime check (caller's responsibility). Migrated `genomic_coordinate_grove_test` to the typed test pattern. ([#132](https://github.com/genogrove/genogrove/issues/132), [#217](https://github.com/genogrove/genogrove/pull/217))
- **GFF reader: report parse errors instead of silently swallowing them**: Invalid score, strand, and phase values now set `error_message` and throw `std::runtime_error` (or skip with `skip_invalid_lines`) instead of silently becoming `nullopt`. Score parsing uses locale-independent `strtod_l` instead of `std::stod`. Replaced `std::stoi` + `catch(...)` with `std::from_chars` in `get_exon_number()`. Removed dead `validate_gtf_attributes()`. ([#134](https://github.com/genogrove/genogrove/issues/134), [#218](https://github.com/genogrove/genogrove/pull/218))
- **RAII guard for htslib `kstring_t` allocations**: Added `kstring_guard` to ensure `kstring_t::s` is freed on all exit paths in `bed_reader` and `gff_reader`, preventing memory leaks when `std::string` construction throws after `bgzf_getline` allocates. ([#135](https://github.com/genogrove/genogrove/issues/135), [#220](https://github.com/genogrove/genogrove/pull/220))
- **Fix `numeric` default constructor docstring**: Docstring said "value 0" but implementation correctly uses `INT_MIN` as a sentinel for max-based aggregation. ([#154](https://github.com/genogrove/genogrove/issues/154), [#221](https://github.com/genogrove/genogrove/pull/221))

## [0.17.0] - 2026-03-05

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
- **Adopt `std::span` for `aggregate()`** (**breaking**, superseded by [#168](https://github.com/genogrove/genogrove/issues/168)): Changed `aggregate()` signature on all key types (`interval`, `genomic_coordinate`, `numeric`, `kmer`) and in the `key_type_base` concept from `const std::vector<T>&` to `std::span<const T>`, allowing callers to pass any contiguous range without copying to a vector ([#116](https://github.com/genogrove/genogrove/issues/116))

### Fixed
- **Clean up `grove_to_sif()` and implement key link output**: Added `const` to `grove_to_sif()` and `print_keys()`, fixed trailing separator in `print_keys()`, implemented graph overlay key link output (`keylink` edges) that was previously commented out, renamed shadowing `node` variable to `current`
- **Validate stream state in structural deserializers**: Added `if(!is)` checks after every `is.read()` in `node::deserialize()`, `grove::deserialize()`, `data_registry::deserialize()`, and `serialization_traits<std::string>::deserialize()`, matching the existing pattern in leaf-level deserializers. Added B+ tree invariant bounds on `num_keys` and `num_children` in `node::deserialize()`. Added `order >= 2` validation to grove constructor ([#125](https://github.com/genogrove/genogrove/issues/125))
- **Validate stream state in serializers**: Added `if(!os)` checks after `os.write()` calls in all `serialize()` methods — `interval`, `genomic_coordinate`, `numeric`, `kmer`, `key`, `node`, `grove`, `data_registry`, and `serialization_traits<std::string>` — matching the existing pattern in the generic `serialization_traits<T>` serializer ([#126](https://github.com/genogrove/genogrove/issues/126))
- **Documentation: interval uses closed coordinates, not half-open**: Fixed docstrings in `interval` and `genomic_coordinate` that incorrectly described the coordinate system as half-open `[start, end)`. The implementation and tests use closed intervals `[start, end]` where the overlap condition is `max(a.start, b.start) <= min(a.end, b.end)` ([#153](https://github.com/genogrove/genogrove/issues/153))
- **Bounds-check string length in deserialization**: Added overflow guard in `serialization_traits<std::string>::deserialize()` and `grove::deserialize()` index name reader — rejects lengths exceeding `std::streamsize::max()` before the implicit `uint64_t` → `std::streamsize` cast can silently truncate
- **Eliminate two-phase key rehoming in deserialization**: `node::deserialize()` now takes a `key_storage` deque reference and allocates keys directly into the grove's deque during deserialization, removing the separate `rehome_keys()` post-pass that heap-allocated keys and then moved them. Eliminates a class of dangling-pointer bugs if rehoming was interrupted
- **Benchmark CI malformed JSON**: Replaced `--benchmark_format=json | tee` with `--benchmark_out=` + `--benchmark_out_format=json` so console progress lines don't corrupt the JSON output file ([#199](https://github.com/genogrove/genogrove/pull/199))
- **Benchmark CI improvements**: Limited chart history to last 25 commits and enabled benchmark runs on PRs (without storing results) for validation ([#201](https://github.com/genogrove/genogrove/pull/201))
- **Deduplicate CI triggers**: Restricted `push` trigger to `main` only in `ci-ubuntu.yml` and `ci-macos.yml`, keeping `pull_request` for PRs — eliminates duplicate CI runs on every PR push ([#202](https://github.com/genogrove/genogrove/pull/202))
- **Fix resource leaks in IO reader constructors**: Wrapped throwing sections of `bam_reader`, `bed_reader`, and `gff_reader` constructors in try/catch to prevent htslib handle and kstring leaks if `std::string`/`std::vector` operations throw `std::bad_alloc` ([#129](https://github.com/genogrove/genogrove/issues/129))
- **Prevent `index_registry` overflow**: Added overflow check that throws `std::runtime_error` when capacity (255) is exceeded, and added in-class initializer for `next_index` ([#130](https://github.com/genogrove/genogrove/issues/130))
- **Fix undefined behavior from unaligned pointer casts in `bam_reader::parse_tags()`**: Replaced `reinterpret_cast` with `std::memcpy` for scalar tag reads (`int16_t`, `uint16_t`, `int32_t`, `uint32_t`, `float`) and the array element count. Added bounds checks on all scalar and array reads to guard against truncated aux data, with overflow-safe `size_t` arithmetic for array payload validation ([#131](https://github.com/genogrove/genogrove/issues/131))

### Removed
- **Deleted unused `file_entry.hpp`**: Removed the legacy `file_entry` struct from the CLI, which was never used outside a commented-out reference in `index.cpp` ([#153](https://github.com/genogrove/genogrove/issues/153))
- **Remove legacy type erasure code**: Deleted `any_type.hpp`, `type_registry.hpp`, and `type_registry.cpp` — unused since the library moved from runtime type erasure to compile-time templates. Cleaned up dead includes from `key.hpp` and `query_result.hpp`

### Performance
- **Fix O(n) linear scan in `value_lookup()`**: Replaced `std::ranges::find` with `container.find()` in the generic `value_lookup()` utility, giving O(1) amortized lookups on `unordered_map` (previously O(n)). Added a reverse lookup vector to `index_registry` so `key_lookup()` is O(1) instead of O(n) linear scan ([#164](https://github.com/genogrove/genogrove/issues/164))
- **Eliminate `std::string` allocations on grove map lookups**: Added transparent `string_hash` and `std::equal_to<>` to grove's `root_nodes` and `rightmost_nodes` maps, enabling direct `string_view` lookup without constructing a temporary `std::string`. Updated `value_lookup()` to detect transparent containers via `requires` and skip key conversion automatically ([#165](https://github.com/genogrove/genogrove/issues/165))
- **Replace `std::stringstream` with zero-copy tab tokenizer in BED/GFF readers**: Replaced per-record `std::stringstream` construction with a shared `next_field()` utility that returns `string_view` slices (zero-copy). Uses `std::from_chars` for coordinate parsing instead of `std::stoul`/`std::stoi`. Also handles `\r` line endings for Windows-format files. Switching from any-whitespace splitting to tab-only is more correct per BED/GFF specs ([#167](https://github.com/genogrove/genogrove/issues/167))
- **Replace O(n) rightmost-node scan in `split_node()` with O(1) lookup**: Threaded the index name through `insert()` → `insert_iter()` → `split_node()` so the rightmost-nodes cache update uses a direct `find(index_name)` instead of iterating all indices ([#170](https://github.com/genogrove/genogrove/issues/170))
- **Replace `aggregate(span)` with pairwise `aggregate(a, b)`** (**breaking**): Replaced `aggregate(std::span<const T>)` with `aggregate(const T&, const T&)` on all four key types and in the `key_type_base` concept. The pairwise signature enables zero-allocation folds in `calc_parent_key()` and `split_node()`, eliminating temporary `std::vector` heap allocations on every node split ([#168](https://github.com/genogrove/genogrove/issues/168))
- **Fill-factor-aware splits for sorted insertion**: Sorted insertion paths (`insert_sorted()`, bulk `insert_data()`) now split nodes using a configurable fill factor (default 1.0) instead of the fixed midpoint. At the default, left nodes are packed fully (~100%) rather than ~50%, reducing tree size and depth for sorted workloads. The fill factor is a grove constructor parameter and is persisted through serialization ([#211](https://github.com/genogrove/genogrove/issues/211))
- **Compact serialization format** (**breaking**): Replaced `size_t` (8B) count fields with `uint32_t` (4B) in node, grove, and string serialization. Folded `is_leaf` bool into the high bit of the key count, eliminating a separate byte per node. Saves 5B per leaf and 9B per internal node ([#211](https://github.com/genogrove/genogrove/issues/211))
- **zlib-compressed serialization** (**breaking**): Grove serialization now always uses streaming zlib compression via custom `deflate_streambuf`/`inflate_streambuf` wrappers. No API change — `serialize()`/`deserialize()` signatures unchanged. Uses zlib transitively available via htslib ([#211](https://github.com/genogrove/genogrove/issues/211))
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