# Makefile for benchmark utilities
# SPDX-License-Identifier: MIT

CXX ?= g++
CXXFLAGS = -std=c++17 -O2 -Wall -Wextra

# Executable lives in the current directory
GENERATE_INTERVALS = ./generate_intervals

# Interval sizes
SIZES = 100 500 1000 5000 10000

.PHONY: all clean generate-all help generate

all: $(GENERATE_INTERVALS)

help:
	@echo "Available targets:"
	@echo "  make                    - Build generate_intervals utility"
	@echo "  make generate-all       - Generate all interval files in current directory"
	@echo "  make generate SIZE=1000 - Generate intervals for specific size"
	@echo "  make clean              - Remove compiled binary"

$(GENERATE_INTERVALS): generate_intervals.cpp
	@echo "Compiling generate_intervals..."
	$(CXX) $(CXXFLAGS) -o $@ $<
	@echo "Done."

generate-all: $(GENERATE_INTERVALS)
	@echo "Generating interval files for sizes: $(SIZES)"
	@for size in $(SIZES); do \
		echo "Generating $$size intervals..."; \
		$(GENERATE_INTERVALS) $$size $${size}_intervals; \
	done
	@echo "All interval files generated in current directory:"
	@ls -lh .

generate: $(GENERATE_INTERVALS)
ifndef SIZE
	@echo "Error: SIZE not specified"
	@echo "Usage: make generate SIZE=<num_intervals>"
	@exit 1
endif
	@echo "Generating $(SIZE) intervals..."
	$(GENERATE_INTERVALS) $(SIZE) intervals_$(SIZE)

clean:
	@echo "Cleaning up..."
	rm -f generate_intervals
	@echo "Done."
