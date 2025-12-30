/*
* SPDX-License-Identifier: GPLv3
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPLv3 license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef GENOGROVE_FILE_READER_HPP
#define GENOGROVE_FILE_READER_HPP

#include <string>
#include <iterator>
#include <optional>

namespace genogrove::io {
    // Base class for all file readers (no template)
    class file_reader_base {
    public:
        virtual bool has_next() = 0;
        virtual std::string get_error_message() = 0;
        virtual size_t get_current_line() = 0;
        virtual ~file_reader_base() = default;
    };

    // Forward declaration
    template<typename EntryType>
    class file_reader;

    // Iterator for file readers
    template<typename EntryType>
    class file_reader_iterator {
    public:
        using iterator_category = std::input_iterator_tag;
        using value_type = EntryType;
        using difference_type = std::ptrdiff_t;
        using pointer = const EntryType*;
        using reference = const EntryType&;

        // Constructor for begin iterator
        explicit file_reader_iterator(file_reader<EntryType>* reader) : reader_(reader), at_end_(false) {
            if (reader_ && reader_->has_next()) {
                advance();
            } else {
                at_end_ = true;
            }
        }

        // Constructor for end iterator
        file_reader_iterator() : reader_(nullptr), at_end_(true) {}

        // Dereference operator
        reference operator*() const {
            return current_entry_.value();
        }

        pointer operator->() const {
            return &current_entry_.value();
        }

        // Pre-increment
        file_reader_iterator& operator++() {
            advance();
            return *this;
        }

        // Post-increment
        file_reader_iterator operator++(int) {
            file_reader_iterator tmp = *this;
            advance();
            return tmp;
        }

        // Equality comparison
        bool operator==(const file_reader_iterator& other) const {
            // Two end iterators are equal
            if (at_end_ && other.at_end_) return true;
            // End iterator compared to non-end
            if (at_end_ != other.at_end_) return false;
            // Same reader
            return reader_ == other.reader_;
        }

        bool operator!=(const file_reader_iterator& other) const {
            return !(*this == other);
        }

    private:
        void advance() {
            if (!reader_ || at_end_) {
                at_end_ = true;
                current_entry_.reset();
                return;
            }

            EntryType entry;
            if (reader_->read_next(entry)) {
                current_entry_ = std::move(entry);
            } else {
                // Error occurred or no more entries
                at_end_ = true;
                current_entry_.reset();
            }
        }

        file_reader<EntryType>* reader_;
        std::optional<EntryType> current_entry_;
        bool at_end_;
    };

    // Templated derived class for type-specific reading
    template<typename EntryType>
    class file_reader : public file_reader_base {
    public:
        using iterator = file_reader_iterator<EntryType>;

        virtual bool read_next(EntryType& entry) = 0;

        // Iterator support
        iterator begin() {
            return iterator(this);
        }

        iterator end() {
            return iterator();
        }
    };
}


#endif //GENOGROVE_FILE_READER_HPP
