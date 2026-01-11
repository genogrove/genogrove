# Test Suite

This directory contains tests for genogrove's data structure and algorithms.

## Structure

The test suite uses a **traits-based pattern** with **Google Test's typed tests** to eliminate code duplication across different key types (e.g., `interval`, `genomic_coordinate`). Tests are separated into:

1. **Type-dependent tests** - Run once for each key type being tested
2. **Type-independent tests** - Run once with a representative key type (typically `interval`)

### Key Files

#### Type-Dependent Tests (key_type_grove_test.hpp)

**File**: `data_type_grove_test.hpp`

Contains the test framework for grove operations that depend on the key type:
- Basic insertion (regular, sorted, bulk)
- Query operations (overlapping, non-overlapping)
- Key traversal and verification
- Edge creation and removal

**Key Components**:

```cpp
// 1. Traits pattern - define behavior once per type
template<>
struct grove_test_traits<gdt::interval, int> {
    static std::vector<std::pair<gdt::interval, int>> generate_test_data(size_t count);
    static query_overlap_expectation<gdt::interval> create_overlapping_query(...);
    static query_overlap_expectation<gdt::interval> create_non_overlapping_query(...);
};

// 2. Typed test fixture - runs for all registered types
template <typename T>
class grove_typed_test : public simple_grove_test_base<T> {};

// 3. Test definitions - defined once, run for all types
TYPED_TEST_P(grove_typed_test, regular_insert) {
    this->assert_regular_insert(25);
}
```

#### Type-Independent Tests

**File**: `graph-overlay-test.cpp`

Comprehensive graph overlay tests including:
- Pointer stability across tree operations
- Cross-chromosome edges (gene fusions, translocations)
- Multi-chromosome complex graphs (chimeric transcripts)

## Adding a New Key Type

To add tests for a new key type (e.g., `genomic_coordinate`):

### 1. Specialize the Traits

Create a new file `genomic_coordinate_grove_test.cpp`:

```cpp
#include "data_type_grove_test.hpp"
#include <genogrove/data_type/genomic_coordinate.hpp>

namespace gdt = genogrove::data_type;

// Specialize traits for genomic_coordinate
template<>
struct grove_test_traits<gdt::genomic_coordinate, int> {
    static std::vector<std::pair<gdt::genomic_coordinate, int>>
    generate_test_data(size_t count) {
        std::vector<std::pair<gdt::genomic_coordinate, int>> data;
        for (size_t i = 0; i < count; ++i) {
            size_t start = i * 100;
            size_t end = start + 50;
            data.push_back({{start, end, '+'}, static_cast<int>(i)});
        }
        return data;
    }

    static query_overlap_expectation<gdt::genomic_coordinate>
    create_overlapping_query(
        const std::vector<std::pair<gdt::genomic_coordinate, int>>& test_data) {
        // Create a query that overlaps with indices 1, 2, 3
        gdt::genomic_coordinate query{120, 320, '+'};
        return {query, {1, 2, 3}};
    }

    static query_overlap_expectation<gdt::genomic_coordinate>
    create_non_overlapping_query(
        const std::vector<std::pair<gdt::genomic_coordinate, int>>& test_data) {
        // Create a query in a gap between intervals
        gdt::genomic_coordinate query{60, 80, '+'};
        return {query, {}};
    }
};

// Register the type for typed testing
using GenomicCoordinateTestTypes = ::testing::Types<gdt::genomic_coordinate>;
INSTANTIATE_TYPED_TEST_SUITE_P(GenomicCoordinate, grove_typed_test,
                               GenomicCoordinateTestTypes);
```

### 2. That's It!

All standard tests (`regular_insert`, `sorted_insert`, `bulk_insert`, etc.) now run automatically for your new type. No need to reimplement test logic.

## Test Categories

### Insertion Tests

- **`regular_insert`**: Tests individual key insertion without optimization tags
- **`sorted_insert`**: Tests insertion with the `sorted` tag (append optimization)
- **`bulk_insert`**: Tests bulk insertion with bottom-up tree construction
- **`bulk_insert_unsorted`**: Tests bulk insert with internal sorting
- **`bulk_insert_empty`**: Edge case testing
- **`bulk_insert_large_dataset`**: Stress testing with 100+ keys
- **`bulk_insert_append_mode`**: Tests appending to existing data
- **`bulk_insert_multiple_indices`**: Tests multiple chromosome indices
- **`bulk_insert_precondition_violation`**: Tests error handling

### Query Tests

Embedded in insertion tests:
- Overlapping queries (should find multiple results)
- Non-overlapping queries (should find zero results)
- Query result verification (exact match checking)

### Graph Tests (Type-Independent)

Located in `graph-overlay-test.cpp`:

**Basic Operations**:
- Edge addition and removal
- Out-degree calculation
- Edge counting and vertex counting
- Graph clearing

**Metadata Tests**:
- Edge metadata storage
- Filtering by metadata properties (transcript ID, confidence, junction type)
- Complex metadata structures

**Cross-Chromosome Tests**:
- Basic cross-chromosome edges
- Gene fusion modeling (BCR-ABL)
- Chimeric transcripts spanning 3+ chromosomes
- Translocation detection

## Best Practices

### 1. Minimal Implementation per Type

Only implement the three traits methods:
- `generate_test_data()`
- `create_overlapping_query()`
- `create_non_overlapping_query()`

Everything else is handled by the framework.

### 2. Keep Query Logic Simple

The `create_overlapping_query()` should:
- Dynamically compute expected indices by checking overlaps
- Not hard-code assumptions about data ordering

Example:
```cpp
std::vector<size_t> expected_indices;
for (size_t i = 0; i < test_data.size(); ++i) {
    if (gdt::interval::overlap(test_data[i].first, query)) {
        expected_indices.push_back(i);
    }
}
return {query, expected_indices};
```

### 3. Separate Type-Dependent from Type-Independent

- Type-dependent: Different behavior per key type → `data_type_grove_test.hpp`
- Type-independent: Same behavior regardless of key type → `grove_graph_test.hpp`, `graph-overlay-test.cpp`

### 4. Use Realistic Genomic Scenarios

Graph tests use realistic scenarios:
- BCR-ABL fusion (chr9 + chr22)
- Chimeric transcripts
- Gene fusions with metadata (confidence, read support)

This helps validate real-world use cases.

## Running Tests

```bash
# Build with tests enabled
cmake -S . -B build -DBUILD_TESTING=ON -DCMAKE_BUILD_TYPE=Debug
cmake --build build

# Run all structure tests
cd build && ctest -R genogrove_structure_tests --output-on-failure

# Run specific test suite
./build/tests/genogrove_structure_tests --gtest_filter="Interval/*"
./build/tests/genogrove_structure_tests --gtest_filter="*graph*"
```