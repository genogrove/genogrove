/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_DATA_REGISTRY_HPP
#define GENOGROVE_DATA_REGISTRY_HPP

#include <cstdint>
#include <istream>
#include <limits>
#include <ostream>
#include <stdexcept>
#include <vector>

#include <genogrove/data_type/serialization_traits.hpp>

namespace genogrove::data_type {

/**
 * @brief Singleton registry for storing shared metadata by ID
 *
 * @tparam registry_data_type The type of data to store in the registry
 *
 * @details Use case: Store sample/experiment metadata once, reference by ID from grove entries.
 * Each type T gets its own singleton registry with independent ID space.
 * This reduces memory when many grove entries share the same metadata.
 *
 * @note Thread safety: Not thread-safe (matches existing registries like index_registry).
 *       Add mutex if concurrent access is needed.
 * @note Singleton lifetime: Data persists for program duration. Call reset() in tests
 *       to clear state between test cases.
 *
 * Example usage:
 * @code
 * // Define sample info structure
 * struct SampleInfo {
 *     std::string name;
 *     std::string tissue;
 *     int replicate;
 * };
 *
 * // Register sample info
 * auto& sample_reg = data_registry<SampleInfo>::instance();
 * uint32_t sample_id = sample_reg.register_data(SampleInfo{"sample1", "liver", 1});
 *
 * // Store ID in grove as the data_type
 * grove<interval, uint32_t> g;
 * g.insert_data("chr1", interval{100, 200}, sample_id, sorted);
 *
 * // Later: retrieve sample info by ID
 * const SampleInfo* info = sample_reg.get(sample_id);
 * @endcode
 */
template<typename registry_data_type>
class data_registry {
  public:
    /// Type used for registry IDs
    using id_type = uint32_t;

    /// Sentinel value representing an invalid/unset ID
    static constexpr id_type null_id = std::numeric_limits<id_type>::max();

    /**
     * @brief Get the singleton instance for this type
     * @return Reference to the singleton registry instance
     * @note Uses Meyer's singleton pattern for thread-safe initialization
     */
    static data_registry& instance() {
        static data_registry inst;
        return inst;
    }

    // Disable copy and move
    data_registry(const data_registry&) = delete;
    data_registry& operator=(const data_registry&) = delete;
    data_registry(data_registry&&) = delete;
    data_registry& operator=(data_registry&&) = delete;

    /**
     * @brief Register data and return its ID
     * @param data The data to store in the registry (will be moved)
     * @return ID that can be used to retrieve this data
     * @throws std::runtime_error if registry has reached maximum capacity
     * @note Each call creates a new entry; no deduplication is performed
     */
    id_type register_data(registry_data_type data) {
        if (storage.size() >= null_id) {
            throw std::runtime_error("data_registry: maximum capacity reached");
        }
        id_type id = static_cast<id_type>(storage.size());
        storage.push_back(std::move(data));
        return id;
    }

    /**
     * @brief Get data by ID (const version)
     * @param id The ID returned from register_data
     * @return Pointer to the data, or nullptr if ID is invalid
     */
    const registry_data_type* get(id_type id) const {
        if (id >= storage.size()) return nullptr;
        return &storage[id];
    }

    /**
     * @brief Get data by ID (mutable version)
     * @param id The ID returned from register_data
     * @return Pointer to the data, or nullptr if ID is invalid
     */
    registry_data_type* get(id_type id) {
        if (id >= storage.size()) return nullptr;
        return &storage[id];
    }

    /**
     * @brief Check if an ID is valid
     * @param id The ID to check
     * @return true if ID refers to valid data, false otherwise
     */
    [[nodiscard]] bool contains(id_type id) const {
        return id < storage.size();
    }

    /**
     * @brief Get the number of registered entries
     * @return Number of entries in the registry
     */
    [[nodiscard]] size_t size() const {
        return storage.size();
    }

    /**
     * @brief Check if the registry is empty
     * @return true if no entries are registered, false otherwise
     */
    [[nodiscard]] bool empty() const {
        return storage.empty();
    }

    /**
     * @brief Clear all registered data
     * @warning This invalidates all previously returned IDs
     * @note Primarily intended for testing; use with caution in production
     */
    void clear() {
        storage.clear();
    }

    /**
     * @brief Reset the singleton by clearing all data
     * @note Convenience method for testing; equivalent to instance().clear()
     */
    static void reset() {
        instance().clear();
    }

    /**
     * @brief Serialize the registry to an output stream
     * @param os Output stream to write to
     * @note Writes entry count followed by each entry using serializer<registry_data_type>
     * @note registry_data_type must be serializable (trivially copyable or have serialization_traits)
     */
    void serialize(std::ostream& os) const {
        // Write entry count
        uint64_t count = storage.size();
        os.write(reinterpret_cast<const char*>(&count), sizeof(count));

        // Write each entry
        for (const auto& entry : storage) {
            serializer<registry_data_type>::write(os, entry);
        }
    }

    /**
     * @brief Deserialize registry data from an input stream into the singleton
     * @param is Input stream to read from
     * @return Reference to the singleton registry (now populated with deserialized data)
     * @note Clears existing data before loading; all previous IDs become invalid
     * @note Loaded entries will have the same IDs as when serialized
     */
    [[nodiscard]] static data_registry& deserialize(std::istream& is) {
        auto& inst = instance();
        inst.clear();

        // Read entry count
        uint64_t count;
        is.read(reinterpret_cast<char*>(&count), sizeof(count));

        // Read each entry
        inst.storage.reserve(count);
        for (uint64_t i = 0; i < count; ++i) {
            inst.storage.push_back(serializer<registry_data_type>::read(is));
        }

        return inst;
    }

  private:
    data_registry() = default;

    /// Storage for registered data; index = ID
    std::vector<registry_data_type> storage;
};

} // namespace genogrove::data_type

#endif // GENOGROVE_DATA_REGISTRY_HPP