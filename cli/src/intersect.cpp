#include <subcalls/intersect.hpp>

namespace subcalls {
cxxopts::Options intersect::parse_args(int argc, char** argv) {
    cxxopts::Options options("intersect", "Search for interval overlaps in the index");
    options.add_options()
            ("-q, queryfile", "The query file to be indexed",
             cxxopts::value<std::string>())
            ("-t, targetfile", "The target file to be index/searched against",
                    cxxopts::value<std::string>())
            ("-o, outputfile", "Write the index to the specified file",
             cxxopts::value<std::string>()->default_value(""))
            ("k, order", "The order of the tree (default: 3)",
             cxxopts::value<int>()->default_value("3"))
            ;
    options.parse_positional({"inputfile"});
    return options;
}

void intersect::validate(const cxxopts::ParseResult& args) {
    if(args.count("queryfile")) { // validate the queryfile
        // check if file exists
        std::string queryFilePath = args["queryfile"].as<std::string>();
        if(!std::filesystem::exists(queryFilePath)) {
            std::cerr << "File does not exist: " << queryFilePath << std::endl;
            exit(1);
        }
    }
    if(args.count("targetfile")) {
        // check if path to file exists
        std::string inputfile = args["targetfile"].as<std::string>();
        std::filesystem::path inputfilePath(inputfile);
        if(!std::filesystem::exists(inputfilePath.parent_path())) {
            std::cerr << "Parent directory does not exist: " << inputfilePath.parent_path() << std::endl;
            exit(1);
        }
    }
    if(args.count("outputfile")) {
        // check if path to file exists
        std::string outputfile = args["outputfile"].as<std::string>();
        std::filesystem::path outputfilePath(outputfile);
        if(!std::filesystem::exists(outputfilePath.parent_path())) {
            std::cerr << "Parent directory does not exist: " << outputfilePath.parent_path() << std::endl;
            exit(1);
        }
    }
    if(args.count("k")) {
        int k = args["k"].as<int>();
        if(k < 2) {
            std::cerr << "Order must be at least 2" << std::endl;
            exit(1);
        }
    }
}

void intersect::execute(const cxxopts::ParseResult& args) {
    validate(args); // validate the arguments
    // first check if the targetfile has been indexed - exists targetfile.gg (skip this for now)

    // get parameters
    std::string queryfile = args["queryfile"].as<std::string>();
    std::string targetfile = args["targetfile"].as<std::string>();
    int k = args["k"].as<int>();

    // stream for output (either to stdout or to file)
    std::ostream* outputStream = &std::cout;
    if(args.count("outputfile")) {
        std::string outputfile = args["outputfile"].as<std::string>();
        outputStream = new std::ofstream(outputfile);
    }

    ggs::grove<gdt::interval, int> grove(k);
    auto [filetype, gzipped] = filetype_detector().detect_filetype(queryfile); // detect the file type

    std::unique_ptr<file_reader> reader = file_reader_factory::create(targetfile, filetype, gzipped);

}

}
