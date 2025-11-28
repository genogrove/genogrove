#include <subcalls/index.hpp>

namespace subcalls {

cxxopts::Options index::parse_args(int argc, char** argv) {
    cxxopts::Options options("genogrove index", "index an interval file");
    options.add_options()
            ("inputfile", "The input file to be indexed",
                    cxxopts::value<std::string>())
            ("o,outputfile", "Write the index to the specified file",
                    cxxopts::value<std::string>())
            ("k,order", "The order of the tree",
                    cxxopts::value<int>()->default_value("3"))
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
        std::cerr << "Error: inputfile is required\n";
        exit(1);
    }
    if(args.count("inputfile")) {
        std::string inputfile = args["inputfile"].as<std::string>();
        // check if the file exists
        if(!std::filesystem::exists(inputfile)) {
            std::cerr << "File does not exist: " << inputfile << "\n";
            exit(1);
        }
    }
}

void index::execute(const cxxopts::ParseResult& args) {
    auto start_program = std::chrono::steady_clock::now();
    std::filesystem::path inputfile = args["inputfile"].as<std::string>();
    std::cout << "Indexing file: " << inputfile << "\n";

    // // detect the file type
    // auto [filetype, is_gzipped] = filetype_detector().detect_filetype(inputfile);
    // std::unique_ptr<file_reader> reader = file_reader_factory::create(inputfile, filetype, is_gzipped);
    // if(!reader) {
    //     std::cerr << util::get_log("index") << " Unsupported file type for: " << inputfile << "\n";
    // }
    //
    // // create the grove
    // ggs::grove<ggt::interval, int> grove(args["order"].as<int>());
    // file_entry entry;
    //
    // // stop the time
    // auto start_insertion = std::chrono::steady_clock::now();
    //
    // while(reader->has_next()) {
    //     //        std::cout << "Reading entry: " << reader->getCurrentLine() << std::endl;
    //     if(!reader->read_next(entry)) {
    //         if(reader->get_error_message().empty()) {
    //             break; // this is just an EOF
    //         }
    //         std::cerr << reader->get_error_message() << std::endl;
    //         return;
    //     }
    //     grove.insert_data(entry.chrom, entry.interval, entry.strand);
    // }
    //
    // auto end_insertion = std::chrono::steady_clock::now();
    // std::chrono::duration<double> insertion_time = end_insertion - start_insertion;
    // std::cout << util::get_log("index") << "Finished inserting data into the grove\n";
    // std::cout << util::get_log("index") << "Time taken for insertion: " << insertion_time.count() << " seconds\n";
    //
    // // write the grove to a file
    // std::filesystem::path outputfile;
    // // TODO: validate that output file has been specified in validate
    // outputfile = inputfile.replace_extension(".gg");
    // std::cout << "Writing index to file: " << outputfile << "\n";
}

}
