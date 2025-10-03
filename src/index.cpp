#include <genogrove/data_type/index.hpp>

namespace genogrove::data_type {
    index::index(std::string key) : value(index_registry::instance().register_key(key)) {}

    std::string index::get_key() const {
        return index_registry::instance().key_lookup(this->value).value();
    }

    uint8_t index::get_value() const {
        return this->value;
    }
}