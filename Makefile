# Makefile for building and testing with CMake
# Configuration variables
BUILD_TYPE ?= Debug
CXX_STANDARD ?= 20
BUILD_DIR ?= build
SOURCE_DIR ?= .
GENERATOR ?= Ninja
ENABLE_SANITIZER ?= OFF

.PHONY: all build rebuild test clean help

.DEFAULT_GOAL := help

all: build test  ## Build and test

build:  ## Build the project
	@echo "Configuring project... with $(GENERATOR)"
	@cmake -B $(BUILD_DIR) \
		-G "$(GENERATOR)" \
		-DCMAKE_CXX_STANDARD=$(CXX_STANDARD) \
		-DCMAKE_BUILD_TYPE=$(BUILD_TYPE) \
		-DBUILD_TESTING=ON \
		-DENABLE_SANITIZER=$(ENABLE_SANITIZER) \
		-S $(SOURCE_DIR)
	@echo "Building project..."
	@cmake --build $(BUILD_DIR) --config $(BUILD_TYPE)

test:  ## Run tests
	@echo "Running tests..."
	@cd $(BUILD_DIR) && ctest -C $(BUILD_TYPE) --output-on-failure

clean:  ## Remove build directory
	@echo "Cleaning build directory..."
	@rm -rf $(BUILD_DIR)

rebuild: clean build  ## Clean and rebuild from scratch

help:  ## Show this help message
	@echo "Usage: make [target] [VARIABLE=value]"
	@echo ""
	@echo "Targets:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = ":.*?## "}; {printf "  %-15s %s\n", $$1, $$2}'
	@echo ""
	@echo "Variables:"
	@echo "  BUILD_TYPE   Debug or Release (default: $(BUILD_TYPE))"
	@echo "  BUILD_DIR    Build directory (default: $(BUILD_DIR))"
	@echo "  GENERATOR    CMake generator (default: $(GENERATOR))"
	@echo ""
	@echo "Examples:"
	@echo "  make all                          # Build and test with Ninja"
	@echo "  make build                        # Just build"
	@echo "  make BUILD_TYPE=Release           # Release build"
	@echo "  make GENERATOR=Ninja        # Use Ninja instead"
	@echo "  make ENABLE_SANITIZER=ON        # Use Ninja instead"
