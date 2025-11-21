/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_DATA_TYPE_TYPE_REGISTRY_HPP
#define GENOGROVE_DATA_TYPE_TYPE_REGISTRY_HPP

// standard
#include <any>
#include <typeindex>
#include <functional>
#include <memory>
#include <iostream>


// genogrove
#include <genogrove/data_type/any_type.hpp>

namespace genogrove::data_type {
    using cast_function = std::function<std::any(const std::shared_ptr<any_base>&)>;
    using factory_function = std::function<std::shared_ptr<any_base>()>;

    class type_registry {
        public:
            // singleton pattern to ensure a single instance
            static type_registry &instance() {
                static type_registry instance;
                return instance;
            }

            type_registry(const type_registry &) = delete;
            type_registry &operator=(const type_registry &) = delete;

            /*
             * @brief
             */
            template<typename T>
            static void register_type() {
                std::type_index type_index = typeid(T);
                std::string type_name = typeid(T).name();

                if(cast_functions.find(type_name) == cast_functions.end()) {
                    cast_functions[type_name] = [](const std::shared_ptr<any_base>& obj) -> std::any {
                        auto castedObj = std::dynamic_pointer_cast<
                        any_type<typename std::remove_reference<T>::type>>(obj);
                        if(!castedObj) {
                            std::cerr << "Failed to cast object to type " << typeid(T).name() << std::endl;
                        }
                        return castedObj->get_data();
                    };
                }

                if(type_names.find(type_index) == type_names.end()) {
                    type_names[type_index] = typeid(T).name(); // store the type name
                }

                if(factory_functions.find(type_name) == factory_functions.end()) {
                    factory_functions[type_name] = []() -> std::shared_ptr<any_base> {
                        return std::make_shared<any_type<T>>();
                    };
                }
            }

            // cast a type back from the registered function
            template<typename T>
            static T cast(const std::shared_ptr<any_base>& obj) {
                std::string type_name = typeid(T).name();
                // check if the type has been registered
                if (cast_functions.find(type_name) == cast_functions.end()) {
                    throw std::runtime_error("The type has not been registered");
                }

                // perform the cast
                std::any result = cast_functions[type_name](obj);
                if (result.has_value()) {
                    return std::any_cast<T>(result);
                } else {
                    throw std::bad_any_cast();
                }
            }

            template<typename T>
            static bool check_type(std::shared_ptr<any_base>& obj) {
                return typeid(T).name() == obj->get_type_name();
            }

            // getter & setter
            static std::unordered_map<std::type_index, std::string> get_type_names();
            static std::unordered_map<std::string, cast_function> get_cast_functions();

            /*
             * @brief Reset te TypeRegistry
             */
            static void reset();
            static std::shared_ptr<any_base> create(const std::string& type_name);

        private:
            type_registry() = default;
            static std::unordered_map<std::type_index, std::string> type_names;
            static std::unordered_map<std::string, cast_function> cast_functions;
            static std::unordered_map<std::string, factory_function> factory_functions;
        };

}


#endif //GENOGROVE_DATA_TYPE_TYPE_REGISTRY_HPP
