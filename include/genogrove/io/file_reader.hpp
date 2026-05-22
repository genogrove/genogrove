/*
 * SPDX-License-Identifier: GPL-3.0-or-later
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
        [[nodiscard]] virtual bool has_next() = 0;
        /// Returns the error message from the most recent read_next() call.
        /// Cleared at the start of each read_next(); empty if the last read succeeded.
        [[nodiscard]] virtual std::string get_error_message() const = 0;
        /// Returns the 1-based position the reader has consumed up to in its input.
        /// The unit is reader-specific: the physical line number for the text
        /// readers (BED/GFF — comment and blank lines are counted), or the record
        /// index for the BAM reader (records dropped by filters are counted).
        /// In all cases it reflects input *consumed*, not entries *yielded* by
        /// read_next() — a skipped comment line or a filtered-out record still
        /// advances it. Zero before the first read_next(). Intended for error
        /// messages and progress reporting, not for counting returned entries.
        [[nodiscard]] virtual size_t get_current_line() const = 0;

        file_reader_base() = default;
        virtual ~file_reader_base() = default;
        // Polymorphic base: copying would slice. Move is explicitly defaulted
        // so a derived reader's move moves *through* the base subobject rather
        // than silently falling back to the base's copy-assignment.
        file_reader_base(const file_reader_base&) = delete;
        file_reader_base& operator=(const file_reader_base&) = delete;
        file_reader_base(file_reader_base&&) = default;
        file_reader_base& operator=(file_reader_base&&) = default;
    };

    // Forward declaration
    template<typename EntryType>
    class file_reader;

    /**
     * @brief Input iterator for file readers
     *
     * @tparam EntryType The entry type produced by the reader (e.g., bed_entry, gff_entry, sam_entry)
     *
     * Single-pass input iterator (std::input_iterator_tag). The iterator holds a non-owning
     * pointer to its parent file_reader — the reader must outlive all iterators obtained from it.
     * Advancing past a read failure or EOF moves the iterator to the end position.
     * Always check get_error_message() on the reader after the loop to distinguish EOF from error.
     *
     * @note Equality: two iterators compare equal iff they refer to the same position.
     *       End iterators compare equal to each other. Two non-end iterators compare
     *       equal iff they have the same parent reader AND have advanced the same number
     *       of times (position tracked via an internal monotonic counter). Because the
     *       underlying reader is single-pass, copying an iterator and then advancing one
     *       copy is the only realistic way to produce two iterators on the same reader
     *       with different positions.
     */
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
            // Two non-end iterators are equal iff they're at the same position on
            // the same reader. Without the pos_ check, any two non-end iterators
            // on the same reader would compare equal — broken for copies whose
            // original has since advanced.
            return reader_ == other.reader_ && pos_ == other.pos_;
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
                ++pos_;  // bump on successful advance; failure keeps pos_ unchanged
            } else {
                // Error occurred or no more entries
                at_end_ = true;
                current_entry_.reset();
            }
        }

        file_reader<EntryType>* reader_;
        std::optional<EntryType> current_entry_;
        bool at_end_;
        // Monotonic record-index counter. 0 on construction; bumped on each
        // successful advance(). Lets operator== distinguish two iterators
        // on the same reader that have advanced different numbers of times.
        size_t pos_ = 0;
    };

    // Templated derived class for type-specific reading
    template<typename EntryType>
    class file_reader : public file_reader_base {
    public:
        using iterator = file_reader_iterator<EntryType>;

        file_reader() = default;
        ~file_reader() override = default;
        file_reader(const file_reader&) = delete;
        file_reader& operator=(const file_reader&) = delete;
        file_reader(file_reader&&) = default;
        file_reader& operator=(file_reader&&) = default;

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
