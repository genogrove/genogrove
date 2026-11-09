/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

// Truncation detection in bam_reader's hand-rolled auxiliary-tag parser.
//
// The shipped fixtures only hold well-formed tags, so none of the "ran out of
// bytes" branches were reached. These tests write a one-record BAM whose aux
// block is exactly the bytes under test: htslib checks the fixed-size parts of a
// BAM record when reading but not the tag payloads, so the malformed block
// reaches parse_tags().

// gtest
#include <gtest/gtest.h>

// standard
#include <cstdint>
#include <cstring>
#include <filesystem>
#include <initializer_list>
#include <memory>
#include <stdexcept>
#include <string>
#include <system_error>
#include <vector>

// genogrove
#include <genogrove/io/bam_reader.hpp>

// htslib
#include <htslib/sam.h>

namespace fs = std::filesystem;
namespace gio = genogrove::io;

namespace {

// A malformed aux block and the tag the error message must name.
struct truncated_case {
    std::string name;      // gtest param name (letters, digits, '_'); also names the scratch file
    std::string aux;       // the raw aux block of the single record
    std::string last_tag;  // tag named in the error ("" when the cut falls between tags)
};

// A well-formed aux block and the value its single "XT" tag must parse to.
struct exact_case {
    std::string name;
    std::string aux;
    gio::sam_tag_value expected;
};

// Raw bytes from integer values, so NULs and high bytes are easy to write.
std::string bytes(std::initializer_list<int> values) {
    std::string out;
    for (int v : values) {
        out += static_cast<char>(static_cast<unsigned char>(v));
    }
    return out;
}

// The parser reads every multi-byte value (scalars, array counts, elements) with
// memcpy, i.e. in host byte order, so the payloads are built the same way.
template <typename T>
std::string native(T value) {
    std::string out(sizeof(value), '\0');
    std::memcpy(out.data(), &value, sizeof(value));
    return out;
}

// One aux tag named "XT": name, type byte, payload.
std::string tag(char type, const std::string& payload = {}) {
    return std::string("XT") + type + payload;
}

// A complete, well-formed tag used to put a valid tag in front of the bad one.
const std::string valid_tag = "NMC" + bytes({5});

// Deletes the scratch BAM when the test ends.
struct scratch_file {
    fs::path path;

    explicit scratch_file(const std::string& name)
        : path(fs::temp_directory_path() / ("gg_bam_aux_" + name + ".bam")) {}

    ~scratch_file() {
        std::error_code ec;
        fs::remove(path, ec);
    }
};

// Writes a BAM with one mapped read (4M, "ACGT") on chr1 whose aux block is `aux`.
void write_single_record_bam(const fs::path& path, const std::string& aux) {
    const std::string header_text = "@HD\tVN:1.6\n@SQ\tSN:chr1\tLN:1000\n";
    std::unique_ptr<sam_hdr_t, decltype(&sam_hdr_destroy)> header(
        sam_hdr_parse(header_text.size(), header_text.c_str()), &sam_hdr_destroy);
    ASSERT_TRUE(header != nullptr);
    std::unique_ptr<bam1_t, decltype(&bam_destroy1)> record(bam_init1(), &bam_destroy1);
    ASSERT_TRUE(record != nullptr);

    const uint32_t cigar[] = {bam_cigar_gen(4, BAM_CMATCH)};
    ASSERT_GE(bam_set1(record.get(), 2, "r1", 0, 0, 99, 60, 1, cigar, -1, -1, 0, 4, "ACGT", nullptr,
                       aux.size()),
              0);
    // bam_set1 reserved aux.size() bytes at the aux offset. Fill them with the exact
    // bytes under test and pin l_data to end right after them.
    uint8_t* aux_start = bam_get_aux(record.get());
    std::memcpy(aux_start, aux.data(), aux.size());
    record->l_data = static_cast<int>(aux_start - record->data) + static_cast<int>(aux.size());

    // sam_open/sam_close are macros over these, so use the functions directly.
    std::unique_ptr<samFile, decltype(&hts_close)> out(hts_open(path.string().c_str(), "wb"),
                                                       &hts_close);
    ASSERT_TRUE(out != nullptr);
    ASSERT_EQ(sam_hdr_write(out.get(), header.get()), 0);
    ASSERT_GE(sam_write1(out.get(), header.get(), record.get()), 0);
    // Close explicitly: a failed flush would otherwise leave a short file and the
    // cases would fail with a misleading message.
    ASSERT_EQ(hts_close(out.release()), 0);
}

// Reads the first record, which must throw, and returns the exception text. The
// reader's own error message has to agree with it.
std::string read_first_record_error(const fs::path& path) {
    gio::bam_reader reader(path);
    gio::sam_entry entry;
    try {
        (void)reader.read_next(entry);
    } catch (const std::runtime_error& e) {
        EXPECT_EQ(reader.get_error_message(), e.what());
        return e.what();
    }
    ADD_FAILURE() << "expected std::runtime_error from read_next()";
    return {};
}

const std::vector<truncated_case>& truncated_cases() {
    static const std::vector<truncated_case> cases = {
        // Fewer than 3 bytes left for a tag header (2-char name + type byte). The
        // truncation is between tags, so no tag is named, even after a valid one.
        {"header_one_byte", "X", ""},
        {"header_two_bytes", "XT", ""},
        {"header_short_after_valid_tag", valid_tag + "XT", ""},

        // Scalar payloads cut short.
        {"char_A_missing_value", tag('A'), "XT"},
        {"int8_c_missing_value", tag('c'), "XT"},
        {"uint8_C_missing_value", tag('C'), "XT"},
        {"int16_s_one_byte", tag('s', bytes({1})), "XT"},
        {"uint16_S_one_byte", tag('S', bytes({1})), "XT"},
        {"int32_i_three_bytes", tag('i', bytes({1, 2, 3})), "XT"},
        {"uint32_I_three_bytes", tag('I', bytes({1, 2, 3})), "XT"},
        {"float_f_three_bytes", tag('f', bytes({1, 2, 3})), "XT"},

        // Strings need a terminating NUL inside the block.
        {"string_Z_no_payload", tag('Z'), "XT"},
        {"string_Z_missing_nul", tag('Z', "abc"), "XT"},
        {"hex_H_missing_nul", tag('H', "1F"), "XT"},

        // 'B' arrays: header cut short, payload shorter than the count, a count that
        // cannot fit in the block, and an unknown element type.
        {"array_header_short", tag('B', "i" + bytes({1, 0})), "XT"},
        {"array_payload_short",
         tag('B', "i" + native<uint32_t>(3) + bytes({1, 0, 0, 0})),
         "XT"},
        // On 64-bit this is rejected by the remaining-bytes check; the SIZE_MAX guard
        // in read_typed_array only matters where size_t is 32 bits wide.
        {"array_count_exceeds_block",
         tag('B', "C" + native<uint32_t>(0xFFFFFFFFu) + bytes({1})),
         "XT"},
        {"array_unknown_subtype", tag('B', "x" + native<uint32_t>(0)), "XT"},

        // A type byte the parser does not know.
        {"unknown_tag_type", tag('Q', bytes({1, 2, 3, 4})), "XT"},

        // The error names the tag being parsed, not an earlier one that was fine.
        {"second_tag_truncated", valid_tag + tag('s', bytes({1})), "XT"},
    };
    return cases;
}

// The same shapes with exactly enough bytes. If a bounds check were off by one
// (`<` vs `<=`), one of these would be rejected. The parsed value and type are
// checked too, so a wrong-width read or a wrong subtype mapping that stays inside
// the block is caught as well. Integers of every width parse to int64_t.
const std::vector<exact_case>& exact_cases() {
    static const std::vector<exact_case> cases = {
        {"char_A", tag('A', "x"), 'x'},
        {"int8_c", tag('c', bytes({0xFF})), int64_t{-1}},
        {"uint8_C", tag('C', bytes({7})), int64_t{7}},
        {"int16_s", tag('s', native<int16_t>(-300)), int64_t{-300}},
        {"uint16_S", tag('S', native<uint16_t>(60000)), int64_t{60000}},
        {"int32_i", tag('i', native<int32_t>(-70000)), int64_t{-70000}},
        {"uint32_I", tag('I', native<uint32_t>(4000000000u)), int64_t{4000000000}},
        {"float_f", tag('f', native<float>(1.5f)), 1.5f},
        {"string_Z", tag('Z', std::string("hi\0", 3)), std::string("hi")},
        {"string_Z_empty", tag('Z', bytes({0})), std::string()},
        {"hex_H", tag('H', std::string("1F\0", 3)), std::string("1F")},

        // One element per 'B' subtype, plus an empty array (header only, 5 bytes).
        {"array_c_one", tag('B', "c" + native<uint32_t>(1) + bytes({0xFE})),
         std::vector<int8_t>{-2}},
        {"array_C_one", tag('B', "C" + native<uint32_t>(1) + bytes({200})),
         std::vector<uint8_t>{200}},
        {"array_s_one", tag('B', "s" + native<uint32_t>(1) + native<int16_t>(-2)),
         std::vector<int16_t>{-2}},
        {"array_S_one", tag('B', "S" + native<uint32_t>(1) + native<uint16_t>(65000)),
         std::vector<uint16_t>{65000}},
        {"array_i_one", tag('B', "i" + native<uint32_t>(1) + native<int32_t>(-5)),
         std::vector<int32_t>{-5}},
        {"array_I_one", tag('B', "I" + native<uint32_t>(1) + native<uint32_t>(4000000000u)),
         std::vector<uint32_t>{4000000000u}},
        {"array_f_one", tag('B', "f" + native<uint32_t>(1) + native<float>(2.5f)),
         std::vector<float>{2.5f}},
        {"array_C_empty", tag('B', "C" + native<uint32_t>(0)), std::vector<uint8_t>{}},
    };
    return cases;
}

// Test-name generator for both parameterized suites.
template <typename param_type>
std::string case_name(const ::testing::TestParamInfo<param_type>& info) {
    return info.param.name;
}

}  // namespace

// =============================================================================
// Malformed aux data is rejected with the record number and the tag being parsed
// =============================================================================

class BamAuxTruncated : public ::testing::TestWithParam<truncated_case> {};

TEST_P(BamAuxTruncated, ReadNextThrowsNamingTheTag) {
    const auto& c = GetParam();
    scratch_file file(c.name);
    ASSERT_NO_FATAL_FAILURE(write_single_record_bam(file.path, c.aux));

    std::string expected = "Truncated auxiliary data at record 1";
    if (!c.last_tag.empty()) {
        expected += ", last tag: " + c.last_tag;
    }
    EXPECT_EQ(read_first_record_error(file.path), expected);
}

INSTANTIATE_TEST_SUITE_P(Case, BamAuxTruncated, ::testing::ValuesIn(truncated_cases()),
                         case_name<truncated_case>);

// =============================================================================
// Exactly-sized payloads still parse (guards the bounds checks against off-by-one)
// =============================================================================

class BamAuxExact : public ::testing::TestWithParam<exact_case> {};

TEST_P(BamAuxExact, ExactlySizedPayloadParsesToItsValue) {
    // Also shows the helper writes a readable file, so the throws in the suite above
    // come from the aux bytes and not from the file or header.
    const auto& c = GetParam();
    scratch_file file(c.name);
    ASSERT_NO_FATAL_FAILURE(write_single_record_bam(file.path, c.aux));

    gio::bam_reader reader(file.path);
    gio::sam_entry entry;
    ASSERT_TRUE(reader.read_next(entry));
    EXPECT_TRUE(reader.get_error_message().empty()) << reader.get_error_message();
    ASSERT_EQ(entry.tags.size(), 1u);
    ASSERT_EQ(entry.tags.count("XT"), 1u);
    EXPECT_EQ(entry.tags.at("XT"), c.expected);
    EXPECT_FALSE(reader.read_next(entry)) << "the file holds exactly one record";
}

INSTANTIATE_TEST_SUITE_P(Case, BamAuxExact, ::testing::ValuesIn(exact_cases()),
                         case_name<exact_case>);
