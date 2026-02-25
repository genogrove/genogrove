// standard
#include <iostream>
#include "cxxopts.hpp"

// genogrove
#include <genogrove/structure/all.hpp>

// cli
#include <subcalls/subcall.hpp>
#include <subcalls/index.hpp>
#include <subcalls/intersect.hpp>

std::unique_ptr<subcalls::subcall> create_subcall(const std::string& subcall) {
    if(subcall == "idx") {
        return std::make_unique<subcalls::index>();
    } else if(subcall == "isec") {
        return std::make_unique<subcalls::intersect>();
    } else {
        return nullptr;
    }
}

void print_general_help(cxxopts::Options& options) {
    std::cout << options.help() << "\n";
    std::cout << "Available subcommands: \n";
    std::cout << "\tidx:\t\tIndex an Interval File\n";
    std::cout << "\tisec:\tSearch for interval overlaps in the index\n";
    std::cout << "For more details on a subcommand, use the --help option with the subcommand.\n";
}

int main(int argc, char** argv) {
    cxxopts::Options options("genogrove", "...");
    options.add_options()
        ("subcall", "The subcommand to run", cxxopts::value<std::string>())
        ("h,help", "Print help")
        ("v,version", "Print version")
        ;
    options.parse_positional({"subcall"});
    options.allow_unrecognised_options();

    // parse the commandline arguments
    auto args = options.parse(argc, argv);

    // check if the help option was selected (on the main level)
    if(args.count("help")) {
        if(!args.count("subcall")) {
            print_general_help(options);
            return 0;
        }
    }

    if(!args.count("subcall")) {
        std::cerr << "Error: No subcommand specified.\n";
        std::cerr << options.help() << std::endl;
        return 1;
    }


    std::string subcall = args["subcall"].as<std::string>();
    std::unique_ptr<subcalls::subcall> command = create_subcall(subcall);

    if(!command) {
        std::cerr << "Error: Unknown subcommand '" << subcall << "'.\n";
        std::cerr << options.help() << std::endl;
        return 1;
    }

    // parse additional options for the subcommand
    cxxopts::Options subcallOptions = command->parse_args(argc -1, argv + 1);
    cxxopts::ParseResult subcallArgs = subcallOptions.parse(argc -1, argv + 1);

    if(subcallArgs.count("help")) {
        std::cout << subcallOptions.help() << "\n";
        return 0;
    }

    command->validate(subcallArgs);
    command->execute(subcallArgs);
    return 0;

}