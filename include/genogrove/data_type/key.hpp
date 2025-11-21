/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_DATA_TYPE_KEY_HPP
#define GENOGROVE_DATA_TYPE_KEY_HPP

// standard
#include <vector>
#include <istream>
#include <typeindex>
#include <type_traits>

// genogrove
#include <genogrove/data_type/any_type.hpp>
#include <genogrove/data_type/type_registry.hpp>
#include <genogrove/data_type/key_type_base.hpp>
#include <genogrove/data_type/serialization_traits.hpp>

namespace genogrove::data_type {
    template<typename T>
    struct serialization_traits;

    /*
     * @brief the key class
     * @details the key class is used to specify keys in any data structure
     */
    template<key_type_base key_type, typename data_type = void>
    class key {
        public:
            /*
             * @brief Default constructor - initializes key with default values
             */
            key() requires std::default_initializable<key_type> &&
                std::default_initializable<data_type> : value{}, data{} {}

            /*
             * @brief Constructor with key value only
             * When data_type is void, creates a key without data
             * When data_type is not void, creates a key with default-constructed data
             */
            explicit key(key_type kvalue)
                : value(std::move(kvalue)), data{} {}

            /*
             * @brief Constructor with key value and data
             */
            template<typename D = data_type>
            key(key_type key_value, D&& data_value) requires (!std::is_void_v<data_type>) :
                value(std::move(key_value)), data(std::forward<D>(data_value)) {}

            /*
             * @brief Copy constructor
             */
            key(const key&) = default;

            /*
             * @brief move constructor
             */
            key(key&&) noexcept = default;

            /*
             * @brief Copy assignment operator
             */
            key& operator=(const key&) = default;

           /*
            * @brief Move assignment
            */
           key& operator=(key&&) noexcept = default;

           /*
            * @brief destructor
            */
            ~key() = default;

           /*
            * @brief returns the value of the key
            */
            [[nodiscard]] const key_type& get_value() const {
                return value;
            }

            /*
             * @brief Set the key value
             * @param new_value The new key value
             */
            void set_value(key_type new_value) {
                value = std::move(new_value);
            }

            /*
             * @brief Get the associated data (only available when data_type != void). Can be
             * used for internal algorithms to mutate efficiently
             * @return Const reference to the associated data
             */
            template<typename D = data_type>
            [[nodiscard]] const D& get_data() const noexcept requires (!std::is_void_v<D>) {
                    return data;
            }

            /*
             * @brief Get mutable reference to associated data (only available when data_type != void)
             * @return Mutable reference to the associated data
             */
            template<typename D = data_type>
            [[nodiscard]] D& get_data() noexcept requires (!std::is_void_v<D>) {
                return data;
            }



            /*
             * @brief Set the associated data (only available when data_type != void)
             * @param new_data The new data value
             */
            template<typename D = data_type>
            void set_data(D new_data) requires (!std::is_void_v<D>) {
                    data = std::move(new_data);
            }

            /*
             * @brief Check if this key has associated data
             * @return true if data_type is not void, false otherwise
             */
            [[nodiscard]] constexpr bool has_data() const noexcept {
                return !std::is_void_v<data_type>;
            }

            /*
             * @brief Convert key to string representation
             * @return String representation of the key value
             */
            std::string to_string() const {
                return value.to_string();
            }

            /*
             * @brief Serialize the key to an output stream
             * @param os Output stream to write to
             */
            void serialize(std::ostream& os) const {
                serializer<key_type>::write(os, this->value);

                if constexpr(!std::is_void_v<data_type>) {
                    serializer<data_type>::write(os, this->data);
                }
            }

            /*
             * @brief Deserialize the key
             */
            static key deserialize(std::istream& is) {
                key_type key_value = serializer<key_type>::read(is);

                if constexpr(std::is_void_v<data_type>) {
                    return key{std::move(key_value)};
                } else {
                    auto data_value = serializer<data_type>::read(is);
                    return key{std::move(key_value), std::move(data_value)};
                }
            }

            /*
             * @brief Equality comparison
             */
            bool operator==(const key& other) const
                requires std::equality_comparable<key_type> {
                    if constexpr (std::is_void_v<data_type>) {
                        return value == other.value;
                    } else {
                        return value == other.value && data == other.data;
                    }
                }

            /*
             * @brief Inequality comparison
             */
            bool operator!=(const key& other) const
                requires std::equality_comparable<key_type> {
                    return !(*this == other);
                }

        private:
            key_type value;
            [[no_unique_address]]
            std::conditional_t<
                std::is_void_v<data_type>,
                std::monostate,
                data_type
            > data;

            // std::shared_ptr<any_base> data;
            // create a derived class for linked keys
            // key<key_type, data_type>* single_link;
            // std::vector<key*> multi_link;

    };

// ============================================================================
// Serialization Traits - Specialization for custom types
// ============================================================================

/*
 * @brief Default serialization traits for POD types
 * @details Uses raw memory copy - only safe for trivially copyable types
 */
// template<typename T>
// struct serialization_traits {
//     static_assert(std::is_trivially_copyable_v<T>,
//         "Default serialization only works for trivially copyable types. "
//         "Specialize serialization_traits for complex types.");
//
//     static void serialize(std::ostream& os, const T& data_value) {
//         os.write(reinterpret_cast<const char*>(&data_value), sizeof(data_value));
//     }
//
//     static T deserialize(std::istream& is) {
//         T data_value;
//         is.read(reinterpret_cast<char*>(&data_value), sizeof(T));
//         return data_value;
//     }
// };
//
// template<>





}



#endif //GENOGROVE_DATA_TYPE_KEY_HPP