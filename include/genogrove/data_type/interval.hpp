/*
 * SPDX-License-Indentifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

#ifndef DATATYPE_INTERVAL_HPP
#define DATATYPE_INTERVAL_HPP

// Standard
#include <cstddef>
#include <iostream>
#include <string>
#include <vector>

namespace genogrove::data_type {
    class interval {
        public:
            interval();
            interval(size_t start, size_t end);
            ~interval() = default;

            /*
             * @brief compares two intervals. Note: We check if the left interval is less or overlapping the right
             */
            bool operator<(const interval& other) const;
            bool operator>(const interval& other) const;
            bool operator==(const interval& other) const;

            /*
             * @brief indicates that this is an interval type (constexpr C++20)
             */
            static constexpr bool is_interval = true;

            /*
             * @brief determine if two intervals overlap
             */
            static bool overlap(const interval& a, const interval& b);

            /*
             * @brief
             */
            static interval aggregate(const std::vector<interval>& intervals);

            /*
             * @brief converts the interval to a string
             */
            std::string toString() const;

            /*
             * @brief Check if the subjected interval is left of the class interval
             */
            // bool leftOf(const interval& other) const;


            // getter & setter
            /*
             * @brief Get the start of the interval
             */
            size_t getStart() const;
            /*
             * @brief Get the end of the interval
             */
            void setStart(size_t start);

            /*
             * @brief Get the end of the interval
             */
            size_t getEnd() const;

            /*
             * @brief Get the end of the interval
             */
            void setEnd(size_t end);

            /*
             * @brief Serialize the interval to a stream
             */
            void serialize(std::ostream& os) const;

            /*
             * @brief Deserialize the interval from a stream
             */
            interval deserialize(std::istream& is);

        private:
            size_t start;
            size_t end;
    };
}

#endif //DATATYPE_INTERVAL_HPP
