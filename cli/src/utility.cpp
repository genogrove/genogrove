#include "utility.hpp"

// standard
#include <chrono>
#include <ctime>
#include <format>

std::string util::get_time() {
    auto now = std::chrono::system_clock::now();
    std::time_t now_c = std::chrono::system_clock::to_time_t(now);

    // convert the time and data to a string in the format YYYY-MM-DD HH:MM:SS
    // use thread-safe localtime_r (POSIX) or localtime_s (Windows)
    std::tm tm_buf = {}; // zero-initialize as safety fallback
    bool success = false;

#ifdef _WIN32
    // Windows: localtime_s returns 0 on success
    if (localtime_s(&tm_buf, &now_c) == 0) {
        success = true;
    } else if (gmtime_s(&tm_buf, &now_c) == 0) {
        // fallback to UTC time if local time fails
        success = true;
    }
#else
    // POSIX: localtime_r returns pointer on success, nullptr on failure
    if (localtime_r(&now_c, &tm_buf) != nullptr) {
        success = true;
    } else if (gmtime_r(&now_c, &tm_buf) != nullptr) {
        // fallback to UTC time if local time fails
        success = true;
    }
#endif

    if (success) {
        return std::format("{:04d}-{:02d}-{:02d} {:02d}:{:02d}:{:02d}",
            tm_buf.tm_year + 1900, tm_buf.tm_mon + 1, tm_buf.tm_mday,
            tm_buf.tm_hour, tm_buf.tm_min, tm_buf.tm_sec);
    }
    // final fallback: return epoch time as string if both conversions failed
    return std::format("TIMESTAMP_ERROR_{}", now_c);
}

std::string util::get_log(std::string_view subcall){
    return std::format("[GENOGROVE {} {} ]", get_time(), subcall);
}


