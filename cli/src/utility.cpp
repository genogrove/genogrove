#include "utility.hpp"

// standard
#include <chrono>
#include <sstream>
#include <iomanip>
#include <ctime>

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

    std::stringstream ss;
    if (success) {
        ss << std::put_time(&tm_buf, "%Y-%m-%d %H:%M:%S");
    } else {
        // final fallback: return epoch time as string if both conversions failed
        ss << "TIMESTAMP_ERROR_" << now_c;
    }
    return ss.str();
}

std::string util::get_log(std::string subcall){
    std::string logentry = "[GENOGROVE " + get_time() +" " + subcall + " ]";
    return logentry;
}


