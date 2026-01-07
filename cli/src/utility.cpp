#include "utility.hpp"

// standard
#include <chrono>
#include <sstream>
#include <iomanip>
#include <ctime>

std::string util::get_time() {
    auto now = std::chrono::system_clock::now();
    std::time_t now_c = std::chrono::system_clock::to_time_t(now);

    // convert the time and data to a string in the format YYYY-MM-DD
    // use thread-safe localtime_r (POSIX) or localtime_s (Windows)
    std::tm tm_buf;
#ifdef _WIN32
    localtime_s(&tm_buf, &now_c);
#else
    localtime_r(&now_c, &tm_buf);
#endif
    std::stringstream ss;
    ss << std::put_time(&tm_buf, "%Y-%m-%d %H:%M:%S");
    return ss.str();
}

std::string util::get_log(std::string subcall){
    std::string logentry = "[GENOGROVE " + get_time() +" " + subcall + " ]";
    return logentry;
}


