# Using Sanitizers

This project supports AddressSanitizer and UndefinedBehaviorSanitizer for detecting memory issues and undefined behavior.

## Building with Sanitizers

To enable sanitizers during build:

```bash
cmake -B build -S . -DENABLE_SANITIZER=ON -DBUILD_TESTING=ON -DCMAKE_BUILD_TYPE=Debug
cmake --build
```

To build without sanitizers (default):

```bash
cmake -B build -S . -DBUILD_TESTING=ON -DCMAKE_BUILD_TYPE=Debug
cmake --build
```

## Running Tests with Sanitizers

Once built with sanitizers enabled, simply run the tests:

```bash
./tests/genogrove_structure_tests
or
cd build && ctest --output-on-failure
```

For more detailed leak detection:

```bash
export ASAN_OPTIONS=detect_leaks=1
cd build && ./tests/genogrove_structure_tests
```

## What Sanitizers Detect

- **AddressSanitizer**: Memory leaks, use-after-free, buffer overflows, stack/heap overflow
- **UndefinedBehaviorSanitizer**: Undefined behavior like null pointer dereference, integer overflow, etc.

## Note

Some false positives may appear from system libraries (e.g., Objective-C runtime on macOS). These can be ignored if they're not from genogrove code.
