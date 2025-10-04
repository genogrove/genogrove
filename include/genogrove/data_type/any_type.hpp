/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT
 * license. See the LICENSE file in the root of the repository for more
 * information.
 */

#ifndef GENOGROVE_ANYTYPE_HPP
#define GENOGROVE_ANYTYPE_HPP

// Standard
#include <memory>
#include <ostream>
#include <string>
#include <typeindex>

namespace genogrove::data_type {
/*
 * @brief This is an abstract class (base class) for storing any type of data
 */
class any_base {
  public:
    virtual ~any_base() = default;
    virtual std::string get_type_name() const = 0;
    //        virtual std::type_index getDataTypeIndex() const = 0; // return type
    //        of stored data

    // serialization
    virtual void serialize(std::ostream& os) const = 0;
    virtual std::shared_ptr<any_base> deserialize(std::istream& is) = 0;
};

/*
 * @brief This is a template class for storing any type of data
 */
template <typename T> class any_type : public any_base {
  private:
    T data; // always store value (not reference)
    std::string type_name;

  public:
    // constructors
    any_type() : type_name(typeid(T).name()) {}
    any_type(const T& data)
        : data(data), type_name(typeid(T).name()) {} // Constructor for lvalue references
    any_type(T&& data)
        : data(std::forward<T>(data)), type_name(typeid(T).name()) {
    } // Constructor for rvalue references

    // descructor
    ~any_type() override = default; // needs to be defined explicitly (otherwise
                                    // delete due to use of std::optional)

    T& get_data() {
        return data;
    }

    // std::string getDataTypeName() const override { return typeid(T).name();}
    std::string get_type_name() const override {
        return type_name;
    }
    void set_type_name(std::string typeName) {
        this->type_name = typeName;
    }

    /*
     * @brief serialize the data
     */
    void serialize(std::ostream& os) const override {
        size_t type_name_len = type_name.size();
        os.write(reinterpret_cast<const char*>(&type_name_len), sizeof(type_name_len));
        os.write(type_name.c_str(), type_name_len);

        os.write(reinterpret_cast<const char*>(&data),
        sizeof(T)); // write the data
    }

    std::shared_ptr<any_base> deserialize(std::istream& is) {
        size_t type_name_len;
        is.read(reinterpret_cast<char*>(&type_name_len), sizeof(type_name_len));
        std::string typeName(type_name_len, '\0');
        is.read(&type_name[0], type_name_len);

        // read the data
        T data;
        is.read(reinterpret_cast<char*>(&data), sizeof(T));

        return std::make_shared<any_type<T>>(data);
    }
};
}; // namespace genogrove::data_type

#endif // GENOGROVE_ANYTYPE_HPP
