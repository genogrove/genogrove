/*
 * SPDX-License-Identifier: MIT
 *
 * Copyright (c) 2025 Richard A. Schäfer
 *
 * This file is part of genogrove and is licensed under the terms of the MIT license.
 * See the LICENSE file in the root of the repository for more information.
 */

// Generate sorted and unsorted interval files for benchmarking

#include <algorithm>
#include <fstream>
#include <iostream>
#include <random>
#include <vector>

struct IntervalData {
    int start;
    int end;
    int data;
};

void write_intervals(const std::vector<IntervalData>& intervals, const std::string& filename, const std::string& description) {
    std::ofstream out(filename);
    if (!out) {
        std::cerr << "Error: Could not open " << filename << " for writing" << std::endl;
        throw std::runtime_error("Failed to open file");
    }

    out << "# " << description << std::endl;
    out << "# Format: start end data" << std::endl;
    out << "# Total intervals: " << intervals.size() << std::endl;

    for (const auto& interval : intervals) {
        out << interval.start << " " << interval.end << " " << interval.data << "\n";
    }

    out.close();
    std::cout << "Generated " << intervals.size() << " intervals to " << filename << std::endl;
}

int main(int argc, char** argv) {
    if (argc != 3) {
        std::cerr << "Usage: " << argv[0] << " <num_intervals> <output_prefix>" << std::endl;
        std::cerr << "Example: " << argv[0] << " 10000 intervals_10000" << std::endl;
        std::cerr << "  Creates: intervals_10000_sorted.txt and intervals_10000_unsorted.txt" << std::endl;
        return 1;
    }

    int num_intervals = std::stoi(argv[1]);
    std::string output_prefix = argv[2];

    // Generate intervals in sorted order
    std::vector<IntervalData> intervals;
    intervals.reserve(num_intervals);
    for (int i = 1; i <= num_intervals; ++i) {
        intervals.push_back({i * 10, i * 10 + 5, i});
    }

    // Write sorted intervals
    write_intervals(intervals, output_prefix + "_sorted.txt", "Sorted intervals for benchmarking");

    // Shuffle with fixed seed for reproducibility
    std::mt19937 rng(42);
    std::shuffle(intervals.begin(), intervals.end(), rng);

    // Write unsorted intervals
    write_intervals(intervals, output_prefix + "_unsorted.txt", "Unsorted intervals for benchmarking (seed=42)");

    std::cout << "\nSuccessfully created both sorted and unsorted interval files" << std::endl;

    return 0;
}