#include <genogrove/data_type/index_registry.hpp>

namespace genogrove::data_type {

    index_registry &index_registry::instance() {
        static index_registry instance;
        return instance;
    }

    uint8_t index_registry::register_key(const std::string &key) {
        std::optional<uint8_t> idx = ggu::value_lookup(this->registry, key);
        if(!idx.has_value()) {
            uint8_t new_index = this->next_index++;
            this->registry.insert({key, new_index});
            return new_index;
        }
        return idx.value();
    }

    bool index_registry::is_registered(std::string_view key) const {
        return ggu::value_lookup(this->registry, key).has_value();
    }

    std::optional<std::string> index_registry::key_lookup(uint8_t value) const {
        return ggu::key_lookup(this->registry, value);
    }

    std::optional<uint8_t> index_registry::value_lookup(std::string_view key) const {
        return ggu::value_lookup(this->registry, key);
    }
}
