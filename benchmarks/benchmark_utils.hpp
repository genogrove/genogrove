/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the GPL-3.0-or-later license.
 * See the LICENSE file in the root of the repository for more information.
 */
#ifndef GENOGROVE_BENCHMARK_UTILS_HPP
#define GENOGROVE_BENCHMARK_UTILS_HPP

#include <genogrove/data_type/interval.hpp>

#include <filesystem>
#include <fstream>
#include <map>
#include <sstream>
#include <string>
#include <vector>

namespace gdt = genogrove::data_type;

struct IntervalWithData {
    gdt::interval intvl;
    int data;
};

inline std::map<std::string, std::vector<IntervalWithData>>& interval_cache() {
    static std::map<std::string, std::vector<IntervalWithData>> cache;
    return cache;
}

inline const std::vector<IntervalWithData>& load_intervals(const std::string& filename) {
    auto& cache = interval_cache();
    auto it = cache.find(filename);
    if (it != cache.end()) {
        return it->second;
    }

    std::vector<IntervalWithData> intervals;
    std::ifstream file(filename);
    if (!file) {
        throw std::runtime_error("Failed to load intervals from " + filename);
    }

    std::string line;
    while (std::getline(file, line)) {
        if (line.empty() || line[0] == '#') continue;
        std::istringstream iss(line);
        int start, end, data;
        if (iss >> start >> end >> data) {
            intervals.push_back({gdt::interval(start, end), data});
        }
    }

    if (intervals.empty()) {
        throw std::runtime_error("No intervals loaded from " + filename);
    }

    cache[filename] = std::move(intervals);
    return cache[filename];
}

#endif // GENOGROVE_BENCHMARK_UTILS_HPP