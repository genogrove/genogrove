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
    std::stringstream ss;
    ss << std::put_time(std::localtime(&now_c), "%Y-%m-%d %H:%M:%S");
    return ss.str();
}

std::string util::get_log(std::string subcall){
    std::string logentry = "[GENOGROVE " + get_time() +" " + subcall + " ]";
    return logentry;
}


