#include <subcalls/index.hpp>

namespace subcalls {

static constexpr const char* DEFAULT_TREE_ORDER = "3";

cxxopts::Options index::parse_args(int argc, char** argv) {
    cxxopts::Options options("genogrove index", "index an interval file");
    options.add_options()
            ("inputfile", "The input file to be indexed",
                    cxxopts::value<std::string>())
            ("o,outputfile", "Write the index to the specified file",
                    cxxopts::value<std::string>())
            ("k,order", "The order of the tree",
                    cxxopts::value<int>()->default_value(DEFAULT_TREE_ORDER))
            ("s,sorted", "Interval in the input file are sorted",
                    cxxopts::value<bool>()->default_value("false"))
            ("t,timed", "Measure the time taken for indexing",
                    cxxopts::value<bool>()->default_value("false"))
            ("h,help", "Print help")
            ;
    options.parse_positional({"inputfile"});
    options.positional_help("inputfile");

    return options;
}

void index::validate(const cxxopts::ParseResult& args) {
    if(!args.count("inputfile")) {
        throw std::runtime_error("Error: inputfile is required");
    }
    std::string inputfile = args["inputfile"].as<std::string>();
    if(!std::filesystem::exists(inputfile)) {
        throw std::runtime_error("Error: file does not exist: " + inputfile);
    }
}

void index::execute(const cxxopts::ParseResult& args) {
    throw std::runtime_error("Error: idx subcommand not yet implemented");
}

}
