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
    /*
     * @brief Ensures derived objects are destroyed correctly when deleted through a base pointer.
     * Provides a virtual destructor so that deleting an instance of a derived type via a pointer to
     * any_base invokes the derived type's destructor.
     */
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
    /*
     * @brief Default-constructs an any_type instance. Initializes the stored type name
     * to the runtime name of T and leaves then contained value default-initialized.
     */
    any_type() : type_name(typeid(T).name()) {}

    /*
     * @brief Constructs an any_type by copying the provided value and recording its type name.
     * Stores a copy of `data` in the object and initializes `type_name` with `typeid(T).name()`.
     * @param data The value to store (copied).
     */
    any_type(const T& data) : data(data), type_name(typeid(T).name()) {}

    /*
     * @brief Constructs an any_type by initializing the stored value and capturing its type name.
     * Initializes the contained value from the provided argument and sets the internal type_name
     * to the mangled name returned by typeid(T).name().
     * @param data Value used to initialize the stored data (moved when possible).
     */
    any_type(T&& data)
        : data(std::forward<T>(data)), type_name(typeid(T).name()) {
    } // Constructor for rvalue references

    /*
     * @brief Destroys the any_type instance.
     * Defaulted destructor; releases member resources through their own destructors.
     */
    ~any_type() override = default; // needs to be defined explicitly (otherwise
                                    // delete due to use of std::optional)

    /*
     * @brief Access the stored value as a const reference.
     * @return const T& Reference to the internally stored value.
     */
    const T& get_data() const {
        return *data;
    }

    /*
     * @brief Accesses the contained value for modification.
     * Provides a mutable reference to the stored value so callers can read or modify it in-place.
     * @return T& Reference to the contained value; remains valid while the object exists and is not moved from or destroyed.
     */
    T& get_data() {
        return data;
    }

    /*
     * @brief Return the stored type name for the contained value.
     * @return std::string The type name string associated with this instance
     * (originally captured from `typeid(T).name()` or updated via `set_type_name`).
     */
    std::string get_type_name() const override {
        return type_name;
    }

    /*
     * @brief Sets the stored type name used for identification and serialization.
     * @param typeName New type name to assign; replaces the object's current stored type name.
     */
    void set_type_name(std::string typeName) {
        this->type_name = typeName;
    }

    /*
     * @brief Serialize the stored type name and value into a binary stream.
     * The serialized format written to the stream is:
     * 1) size_t containing the length of the type name,
     * 2) raw bytes of the type name (no terminating null),
     * 3) raw bytes of the stored value (sizeof(T) bytes).
     *
     * @param os Output stream that will receive the binary representation.
     */
    void serialize(std::ostream& os) const override {
        size_t type_name_len = type_name.size();
        os.write(reinterpret_cast<const char*>(&type_name_len), sizeof(type_name_len));
        os.write(type_name.c_str(), type_name_len);

        os.write(reinterpret_cast<const char*>(&data),
                 sizeof(T)); // write the data
    }

    /*
     * @brief Deserialize an any_type<T> from a binary stream.
     *
     * Reads a serialized representation from the provided stream: first a
     * size_t containing the byte length of the stored type name, then that many
     * bytes of the type name, followed by sizeof(T) raw bytes representing the
     * value of type T. Constructs and returns a new any_type<T> containing the
     * deserialized value.
     *
     * @param is Input stream to read the serialized data from. The stream is read
     *           for: (size_t)type-name-length, (type-name-length) bytes of type
     *           name, then sizeof(T) bytes for the stored value.
     * @return std::shared_ptr<any_base> Shared pointer to an any_type<T> holding
     *         the deserialized value.
     */
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