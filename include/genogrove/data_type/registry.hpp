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
#include <type_traits>
#include <unordered_map>
#include <vector>

#include <genogrove/data_type/serialization_traits.hpp>

namespace genogrove::data_type {

/**
 * @brief Concept: T can be used as a registry key
 *
 * Requires equality comparison and hashability so the registry can deduplicate
 * on insert via its internal key→id lookup.
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
 * @tparam Key     The identity type used for deduplication. Must be hashable
 *                 and equality-comparable.
 * @tparam Tag     Phantom type used only to discriminate singletons. Different
 *                 `Tag` arguments produce distinct types with independent ID
 *                 pools; the default `void` preserves the original "one
 *                 singleton per (Key, Payload)" behavior. `Tag` never appears
 *                 in the body — no storage, no serialization, no runtime cost.
 * @tparam Payload The value type stored against each ID. Defaults to `Key`
 *                 (the common case: identity *is* the whole value, like
 *                 `std::string` intern pools). When `Payload != Key`, the
 *                 registry stores `Payload` values keyed on `Key` — useful
 *                 when identity is a subset of a larger record (e.g.
 *                 `gene_id` keying a `gene_info{ id, name, biotype }` blob).
 *                 No constraint on `Payload` itself; `serialize()` /
 *                 `deserialize()` additionally require `Payload` to be
 *                 readable/writable via `serializer<Payload>`.
 *
 * @details Every distinct key gets one stable ID; calling intern() with the
 * same key always returns the same ID. The point is to collapse many
 * references to the same identity down to a 4-byte ID stored elsewhere —
 * useful when the same identity appears thousands of times across grove
 * entries.
 *
 * **First-write-wins on payload.** When `Payload != Key` and a caller
 * `intern(k, p)` against a key that is already present, the existing payload
 * is preserved and the new `p` is silently dropped. This matches the typical
 * "first source has the canonical record; later sources may carry placeholder
 * fields" pattern (e.g. annotations sorted first, downstream entries reusing
 * the id).
 *
 * Each `(Key, Tag, Payload)` triple has its own singleton with an independent
 * ID space. Use the `Tag` parameter when two unrelated pools share the same
 * value type and must not collide:
 *
 * @code
 * using transcript_registry = registry<std::string, struct transcript_tag>;
 * using source_registry     = registry<std::string, struct source_tag>;
 *
 * transcript_registry::instance().intern("ENST00000001"); // 0 in transcript pool
 * source_registry::instance().intern("HAVANA");           // 0 in source pool (separate)
 * @endcode
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
 * Example (identity is the whole value):
 * @code
 * auto& reg = registry<std::string>::instance();
 * uint32_t a = reg.intern("chr1");   // 0 (new)
 * uint32_t b = reg.intern("chr1");   // 0 (existing — deduplicated)
 * uint32_t c = reg.intern("chr2");   // 1 (new)
 * const std::string& s = reg.get(a); // "chr1"
 * @endcode
 *
 * Example (identity is a subset of the payload):
 * @code
 * struct gene_info {
 *     std::string gene_name;
 *     std::string gene_biotype;
 * };
 * using gene_reg = registry<std::string, void, gene_info>;
 *
 * auto id1 = gene_reg::instance().intern("ENSG001", {"FOO", "protein_coding"});
 * auto id2 = gene_reg::instance().intern("ENSG001", {"placeholder", ""});
 * // id1 == id2; the placeholder payload is dropped (first-write-wins).
 * const gene_info& g = gene_reg::instance().get(id1); // {"FOO", "protein_coding"}
 * @endcode
 */
template<registry_value Key, typename Tag = void, typename Payload = Key>
class registry {
  public:
    /// Type used for registry IDs
    using id_type = uint32_t;

    /// Sentinel value representing an invalid/unset ID
    static constexpr id_type null_id = std::numeric_limits<id_type>::max();

    /// True iff the key type equals the payload type (single-arg intern() form).
    static constexpr bool key_is_payload = std::is_same_v<Key, Payload>;

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
     * @brief Intern a (key, payload) pair, returning its stable ID.
     * @param key     The identity used to deduplicate.
     * @param payload The value to store under that identity.
     * @return The ID for `key`. If `key` is already interned, returns the
     *         existing ID and **silently drops `payload`** (first-write-wins);
     *         otherwise allocates a new ID and stores `payload`.
     * @throws std::runtime_error if the registry has reached maximum capacity.
     * @note Idempotent on key: intern(k, _) always returns the same id for k.
     * @note Thread-safe.
     */
    [[nodiscard]] id_type intern(const Key& key, const Payload& payload) {
        std::lock_guard lock(mtx);
        if (auto it = lookup.find(key); it != lookup.end()) {
            return it->second;
        }
        if (storage.size() >= null_id) {
            throw std::runtime_error("registry: maximum capacity reached");
        }
        auto id = static_cast<id_type>(storage.size());
        storage.push_back(payload);
        try {
            lookup.emplace(key, id);
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
     * @brief Intern a value (single-arg form when key and payload are the same type).
     * @param value The value to intern; used as both identity and payload.
     * @return The ID for `value`.
     * @note Only available when `Key == Payload` (the default). For
     *       `Payload != Key`, use the two-arg form.
     */
    [[nodiscard]] id_type intern(const Key& value)
        requires key_is_payload
    {
        return intern(value, value);
    }

    /**
     * @brief Look up the ID for a key without inserting.
     * @param key The identity to look up.
     * @return The ID if `key` is interned, std::nullopt otherwise.
     * @note Thread-safe.
     */
    [[nodiscard]] std::optional<id_type> find(const Key& key) const {
        std::lock_guard lock(mtx);
        if (auto it = lookup.find(key); it != lookup.end()) {
            return it->second;
        }
        return std::nullopt;
    }

    /**
     * @brief Get the payload for a given ID (const access).
     * @param id The ID returned from intern().
     * @return Const reference to the stored payload.
     * @throws std::out_of_range if `id` is not a valid ID.
     * @note Unlocked. Safe under concurrent intern() iff `id` was obtained from
     *       an intern() that happens-before this call.
     */
    const Payload& get(id_type id) const {
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
     * @note Wire format depends on `Key == Payload`:
     *       - When `Key == Payload` (default): `uint64_t count` followed by
     *         each payload via `serializer<Payload>`. The lookup map is
     *         reconstructed on deserialize() by treating each payload as its
     *         own key. This matches the historical format.
     *       - When `Key != Payload`: `uint64_t count` followed by
     *         `(key, payload)` pairs written in ID order. Both `serializer<Key>`
     *         and `serializer<Payload>` are required.
     * @note Thread-safe (acquires the mutex for a coherent snapshot).
     */
    void serialize(std::ostream& os) const {
        std::lock_guard lock(mtx);
        uint64_t count = storage.size();
        os.write(reinterpret_cast<const char*>(&count), sizeof(count));

        if constexpr (key_is_payload) {
            for (const auto& entry : storage) {
                serializer<Payload>::write(os, entry);
            }
        } else {
            // The lookup map is the only place the canonical key lives, so
            // build a temporary id->key* index to walk storage and lookup
            // together in id order without touching the map twice per entry.
            std::vector<const Key*> key_by_id(storage.size(), nullptr);
            for (const auto& kv : lookup) {
                key_by_id[kv.second] = &kv.first;
            }
            for (std::size_t i = 0; i < storage.size(); ++i) {
                serializer<Key>::write(os, *key_by_id[i]);
                serializer<Payload>::write(os, storage[i]);
            }
        }

        if (!os) {
            throw std::runtime_error("Failed to serialize registry: stream error");
        }
    }

    /**
     * @brief Deserialize registry data from an input stream into the singleton.
     * @param is Input stream to read from.
     * @return Reference to the singleton (now populated with deserialized data).
     * @note Replaces existing data on success; all previous IDs become invalid.
     * @note Loaded entries keep their original IDs.
     * @note Thread-safe.
     * @note Strong exception guarantee: if the stream throws or contains
     *       truncated data, the singleton is left exactly as it was before
     *       the call. The new state is built into local containers and only
     *       move-assigned into the singleton after the read loop completes.
     */
    [[nodiscard]] static registry& deserialize(std::istream& is) {
        uint64_t count;
        is.read(reinterpret_cast<char*>(&count), sizeof(count));
        if (!is) {
            throw std::runtime_error("Failed to deserialize registry: stream error reading count");
        }

        // Reject counts that would exceed the id_type capacity or trigger a
        // pathological reserve() on attacker-crafted / malformed streams.
        // Matches the bound `intern()` enforces (storage.size() < null_id).
        if (count > static_cast<uint64_t>(null_id)) {
            throw std::runtime_error(
                "Failed to deserialize registry: entry count exceeds id_type capacity");
        }

        // Build into temporaries so a mid-load throw (truncated stream,
        // serializer read failure, ctor failure) doesn't leave the singleton
        // in a partial state. Holding no lock during the slow I/O also stops
        // the read loop from blocking concurrent readers.
        std::deque<Payload> new_storage;
        std::unordered_map<Key, id_type> new_lookup;
        new_lookup.reserve(static_cast<std::size_t>(count));

        for (uint64_t i = 0; i < count; ++i) {
            // Reject duplicate keys: emplace silently no-ops on the second
            // insert, which would leave new_storage longer than new_lookup
            // and (in the Key != Payload branch) cause serialize() to walk
            // off the end of the key_by_id index with a null pointer.
            // Throwing keeps the strong exception guarantee — the singleton
            // is untouched until the commit block below.
            if constexpr (key_is_payload) {
                Payload value = serializer<Payload>::read(is);
                auto id = static_cast<id_type>(new_storage.size());
                new_storage.push_back(std::move(value));
                if (!new_lookup.emplace(new_storage.back(), id).second) {
                    throw std::runtime_error(
                        "Failed to deserialize registry: duplicate key");
                }
            } else {
                Key k = serializer<Key>::read(is);
                Payload p = serializer<Payload>::read(is);
                auto id = static_cast<id_type>(new_storage.size());
                if (!new_lookup.emplace(std::move(k), id).second) {
                    throw std::runtime_error(
                        "Failed to deserialize registry: duplicate key");
                }
                new_storage.push_back(std::move(p));
            }
        }

        // Commit: noexcept move-assign of std::deque + std::unordered_map
        // (both have propagate_on_container_move_assignment for std::allocator).
        auto& inst = instance();
        std::lock_guard lock(inst.mtx);
        inst.storage = std::move(new_storage);
        inst.lookup = std::move(new_lookup);
        return inst;
    }

  private:
    registry() = default;

    std::deque<Payload> storage;
    std::unordered_map<Key, id_type> lookup;
    mutable std::mutex mtx;
};

} // namespace genogrove::data_type

#endif // GENOGROVE_REGISTRY_HPP