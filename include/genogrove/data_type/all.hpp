/*
 * SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3
 * license. See the LICENSE file in the root of the repository for more
 * information.
 */

#ifndef GENOGROVE_DATA_TYPE_ALL_HPP
#define GENOGROVE_DATA_TYPE_ALL_HPP

#include <genogrove/data_type/constants.hpp>
#include <genogrove/data_type/data_registry.hpp>
#include <genogrove/data_type/genomic_coordinate.hpp>
#include <genogrove/data_type/index.hpp>
#include <genogrove/data_type/index_registry.hpp>
#include <genogrove/data_type/interval.hpp>
#include <genogrove/data_type/key.hpp>
#include <genogrove/data_type/key_type_base.hpp>
#include <genogrove/data_type/kmer.hpp>
#include <genogrove/data_type/numeric.hpp>
#include <genogrove/data_type/query_result.hpp>

/**
 * @namespace genogrove::data_type
 * @brief Data types and type system for the genogrove library
 *
 * This namespace contains the fundamental data types, type constraints, and supporting
 * infrastructure for the genogrove library. It includes:
 *
 * ## Key Types (satisfying key_type_base concept)
 * - **interval**: Basic genomic intervals with start/end positions (0-based half-open)
 * - **genomic_coordinate**: Stranded genomic intervals with coordinate-first sorting
 * - **numeric**: Point-based integer type for non-genomic B+ tree operations
 * - **kmer**: K-mer sequences with 2-bit encoding for sequence-based indexing
 *
 * ## Type Wrappers and Containers
 * - **key**: Template wrapper combining key_type with optional associated data
 * - **query_result**: Container for intersection query results with matching keys
 *
 * ## Type System Infrastructure
 * - **key_type_base**: C++20 concept defining requirements for key types
 *   (comparison operators, overlap(), aggregate(), to_string())
 * - **index**: Index identifier management (e.g., chromosome names)
 * - **index_registry**: Global registry for managing index identifiers
 * - **data_registry**: Template registry for shared metadata (per-type singleton)
 * - **type_registry**: Type information registry system
 * - **serialization_traits**: Traits for type-specific serialization
 * - **constants**: Common constants and type definitions
 *
 * ## Key Type Requirements
 * All key types must satisfy the key_type_base concept by providing:
 * - Comparison operators: operator<, operator>, operator==
 * - Static overlap() method for detecting overlaps between keys
 * - Static aggregate() method for combining multiple keys into a bounding key
 * - Instance to_string() method for string representation
 *
 * @see genogrove::structure for the data structures using these types
 */

#endif //GENOGROVE_DATA_TYPE_ALL_HPP
