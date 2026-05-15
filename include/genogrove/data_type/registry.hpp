/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_REGISTRY_HPP
#define GENOGROVE_REGISTRY_HPP

#include <concepts>
#include <cstdint>
#include <deque>
#include <functional>
#include <istream>
#include <limits>
#include <mutex>
#include <optional>
#include <ostream>
#include <stdexcept>
#include <string>
#include <unordered_map>

#include <genogrove/data_type/serialization_traits.hpp>

namespace genogrove::data_type {

/**
 * @brief Concept: T can be used as a registry value
 *
 * Requires equality comparison and hashability so the registry can deduplicate
 * on insert via its internal value→id lookup.
 */
template<typename T>
concept registry_value =
    std::equality_comparable<T>
    && requires(const T& t) {
        { std::hash<T>{}(t) } -> std::convertible_to<std::size_t>;
    };

/**
 * @brief Singleton registry that interns values into small integer IDs.
 *
 * @tparam T The value type to intern. Must be hashable and equality-comparable.
 *
 * @details Every distinct value gets one stable ID; calling intern() with the same
 * value always returns the same ID. The point is to collapse many references to
 * the same value (typically a string like a chromosome name, transcript ID,
 * sample name) down to a 4-byte ID stored elsewhere — useful when the same value
 * appears thousands of times across grove entries.
 *
 * Each type T has its own singleton with an independent ID space.
 *
 * @note Thread safety: intern(), find(), clear(), serialize(), and deserialize()
 *       are protected by an internal mutex. get(), contains(), size(), empty()
 *       are unlocked fast paths. get(id) is safe under concurrent intern() iff
 *       the caller obtained `id` from a prior intern() that happens-before
 *       this thread (e.g. via thread join, mutex, atomic publication, queue).
 *       size()/empty()/contains() return best-effort snapshots under concurrent
 *       writes.
 *
 * @note Singleton lifetime: Data persists for program duration. Call reset() in
 *       tests to clear state between cases.
 *
 * Example:
 * @code
 * auto& reg = registry<std::string>::instance();
 * uint32_t a = reg.intern("chr1");   // 0 (new)
 * uint32_t b = reg.intern("chr1");   // 0 (existing — deduplicated)
 * uint32_t c = reg.intern("chr2");   // 1 (new)
 * const std::string& s = reg.get(a); // "chr1"
 * @endcode
 */
template<registry_value T>
class registry {
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
    static registry& instance() {
        static registry inst;
        return inst;
    }

    // Disable copy and move
    registry(const registry&) = delete;
    registry& operator=(const registry&) = delete;
    registry(registry&&) = delete;
    registry& operator=(registry&&) = delete;

    /**
     * @brief Intern a value, returning its stable ID.
     * @param value The value to intern.
     * @return The ID for `value`. If `value` was already interned, returns the
     *         existing ID; otherwise allocates a new one.
     * @throws std::runtime_error if the registry has reached maximum capacity.
     * @note Idempotent: intern(x) == intern(x) for all x.
     * @note Thread-safe.
     */
    [[nodiscard]] id_type intern(const T& value) {
        std::lock_guard lock(mtx);
        if (auto it = lookup.find(value); it != lookup.end()) {
            return it->second;
        }
        if (storage.size() >= null_id) {
            throw std::runtime_error("registry: maximum capacity reached");
        }
        auto id = static_cast<id_type>(storage.size());
        storage.push_back(value);
        try {
            lookup.emplace(storage.back(), id);
        } catch (...) {
            // Roll back the deque entry so storage and lookup stay consistent;
            // otherwise the orphaned value would be invisible to future
            // intern() calls but still occupy an id slot.
            storage.pop_back();
            throw;
        }
        return id;
    }

    /**
     * @brief Look up the ID for a value without inserting.
     * @param value The value to look up.
     * @return The ID if `value` is interned, std::nullopt otherwise.
     * @note Thread-safe.
     */
    [[nodiscard]] std::optional<id_type> find(const T& value) const {
        std::lock_guard lock(mtx);
        if (auto it = lookup.find(value); it != lookup.end()) {
            return it->second;
        }
        return std::nullopt;
    }

    /**
     * @brief Get the value for a given ID (const access).
     * @param id The ID returned from intern().
     * @return Const reference to the value.
     * @throws std::out_of_range if `id` is not a valid ID.
     * @note Unlocked. Safe under concurrent intern() iff `id` was obtained from
     *       an intern() that happens-before this call.
     */
    const T& get(id_type id) const {
        if (id >= storage.size()) {
            throw std::out_of_range("registry::get(): invalid id " + std::to_string(id));
        }
        return storage[id];
    }

    /**
     * @brief Check whether an ID refers to a valid entry.
     * @param id The ID to check.
     * @return true if valid, false otherwise.
     * @note Unlocked best-effort read; size may be observed stale under
     *       concurrent writes.
     */
    [[nodiscard]] bool contains(id_type id) const noexcept {
        return id < storage.size();
    }

    /**
     * @brief Number of interned entries.
     * @note Unlocked best-effort read under concurrent writes.
     */
    [[nodiscard]] std::size_t size() const noexcept {
        return storage.size();
    }

    /**
     * @brief Whether the registry has any entries.
     * @note Unlocked best-effort read under concurrent writes.
     */
    [[nodiscard]] bool empty() const noexcept {
        return storage.empty();
    }

    /**
     * @brief Clear all interned data.
     * @warning Invalidates all previously returned IDs.
     * @note Primarily intended for testing; use with caution in production.
     * @note Thread-safe.
     */
    void clear() {
        std::lock_guard lock(mtx);
        storage.clear();
        lookup.clear();
    }

    /**
     * @brief Reset the singleton by clearing all data.
     * @note Convenience for tests; equivalent to instance().clear().
     */
    static void reset() {
        instance().clear();
    }

    /**
     * @brief Serialize the registry to an output stream.
     * @param os Output stream to write to.
     * @note Wire format: uint64_t entry count, followed by each value via
     *       serializer<T>. The lookup map is reconstructed on deserialize().
     * @note Thread-safe (acquires the mutex for a coherent snapshot).
     */
    void serialize(std::ostream& os) const {
        std::lock_guard lock(mtx);
        uint64_t count = storage.size();
        os.write(reinterpret_cast<const char*>(&count), sizeof(count));

        for (const auto& entry : storage) {
            serializer<T>::write(os, entry);
        }

        if (!os) {
            throw std::runtime_error("Failed to serialize registry: stream error");
        }
    }

    /**
     * @brief Deserialize registry data from an input stream into the singleton.
     * @param is Input stream to read from.
     * @return Reference to the singleton (now populated with deserialized data).
     * @note Clears existing data before loading; all previous IDs become invalid.
     * @note Loaded entries keep their original IDs.
     * @note Thread-safe.
     */
    [[nodiscard]] static registry& deserialize(std::istream& is) {
        auto& inst = instance();
        std::lock_guard lock(inst.mtx);
        inst.storage.clear();
        inst.lookup.clear();

        uint64_t count;
        is.read(reinterpret_cast<char*>(&count), sizeof(count));
        if (!is) {
            throw std::runtime_error("Failed to deserialize registry: stream error reading count");
        }

        for (uint64_t i = 0; i < count; ++i) {
            T value = serializer<T>::read(is);
            auto id = static_cast<id_type>(inst.storage.size());
            inst.storage.push_back(std::move(value));
            inst.lookup.emplace(inst.storage.back(), id);
        }

        return inst;
    }

  private:
    registry() = default;

    std::deque<T> storage;
    std::unordered_map<T, id_type> lookup;
    mutable std::mutex mtx;
};

} // namespace genogrove::data_type

#endif // GENOGROVE_REGISTRY_HPP