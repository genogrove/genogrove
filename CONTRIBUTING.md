# Contributing to genogrove

## Code Standards

### C++20

genogrove requires C++20. Use concepts, `requires` clauses, and modern standard library features throughout.

### Formatting

Run `.clang-format` on modified files before committing.

### `[[nodiscard]]` Policy

Apply `[[nodiscard]]` when **discarding the result is always a bug** or **wastes resources** (non-trivial computation, allocation, I/O):

| Scenario | Recommendation |
|---|---|
| Returned ID is the only handle to stored data (e.g., `register_data()`) | `[[nodiscard]]` |
| Factory / deserialize returns (e.g., `deserialize()`) | `[[nodiscard]]` |
| `empty()`, `contains()`, `has_*()`, `is_*()` — confusable with mutators | `[[nodiscard]]` |
| Non-trivial computation or allocation (e.g., `intersect()`, `get_neighbors()`, `calc_parent_key()`) | `[[nodiscard]]` |
| Simple getters returning a stored field or reference (`get_order()`, `get_keys()`, ...) | No |
| Mutators with informational returns (`insert_data()`, `remove_edge()`) | No |

When a `[[nodiscard]]` return must be intentionally discarded in tests or setup code, use `std::ignore = expr;`.

### Error Handling

- `std::runtime_error` for logical errors
- `std::invalid_argument` for invalid parameters at API boundaries
- `std::out_of_range` for index violations
- Do not use `exit()` — throw exceptions so callers can handle them

### Const Correctness

- Mark methods `const` when they don't modify state
- Provide const overloads for accessors that return references (e.g., `get_keys()`)

## Workflow

- Every change goes in a separate PR
- Update `CHANGELOG.md` under `[Unreleased]` using [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format
- Reference both the issue and PR number in changelog entries
- Documentation lives in the separate `genogrove/docs` repo