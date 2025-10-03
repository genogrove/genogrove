#include <genogrove/data_type/type_registry.hpp>

namespace genogrove::data_type {
    std::unordered_map<std::string, cast_function> type_registry::cast_functions;
    std::unordered_map<std::type_index, std::string> type_registry::type_names;
    std::unordered_map<std::string, factory_function> type_registry::factory_functions;

    // getter & setter
    std::unordered_map<std::type_index, std::string> type_registry::get_type_names() { return type_names; }
    std::unordered_map<std::string, cast_function> type_registry::get_cast_functions() { return cast_functions; }

    // reset the TypeRegistry
    void type_registry::reset() {
        type_names.clear();
        cast_functions.clear();
    }

    std::shared_ptr<any_base> type_registry::create(const std::string& typeName) {
        auto it = factory_functions.find(typeName);
        if(it != factory_functions.end()) {
            return it->second();
        }
        throw std::runtime_error("Type not registered: " + typeName);
    }
}

