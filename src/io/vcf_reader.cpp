/*
 * SPDX-License-Identifier: GPL-3.0-or-later
 * See the LICENSE file in the root of the repository for more information.
 */

#include <genogrove/io/vcf_reader.hpp>

// standard
#include <cstdlib>
#include <stdexcept>

namespace genogrove::io {

    vcf_reader::vcf_reader(const std::filesystem::path& path)
        : vcf_reader(path, vcf_reader_options::defaults()) {}

    vcf_reader::vcf_reader(const std::filesystem::path& path, const vcf_reader_options& options)
        : options(options)
        , record_num(0)
        , at_eof(false) {
        // Every handle is an RAII member, so a throw anywhere below releases
        // whatever was already opened; no manual cleanup is needed.

        // Open the file with htslib (auto-detects VCF/BCF and bgzip)
        vcf_file.reset(bcf_open(path.c_str(), "r"));
        if (!vcf_file) {
            throw std::runtime_error("Failed to open file: " + path.string());
        }

        // Read the header
        header_ptr.reset(bcf_hdr_read(vcf_file.get()));
        if (!header_ptr) {
            throw std::runtime_error("Failed to read header from: " + path.string());
        }
        bcf_hdr_t* header = header_ptr.get();

        // Cache header text
        hts_kstring text;
        if (bcf_hdr_format(header, 0, &text.ks) == 0 && text.ks.s) {
            header_text = std::string(text.ks.s, text.ks.l);
        }

        // Cache sample names
        int n_samples = bcf_hdr_nsamples(header);
        sample_names.reserve(n_samples);
        for (int i = 0; i < n_samples; ++i) {
            sample_names.emplace_back(header->samples[i]);
        }

        // Cache contig names
        int n_contigs = 0;
        const char** seqs = bcf_hdr_seqnames(header, &n_contigs);
        if (seqs) {
            contigs.reserve(n_contigs);
            for (int i = 0; i < n_contigs; ++i) {
                contigs.emplace_back(seqs[i]);
            }
            free(seqs);  // bcf_hdr_seqnames allocates the array (not the strings)
        }

        // Allocate reusable record structure
        record.reset(bcf_init());
        if (!record) {
            throw std::runtime_error("Failed to allocate VCF record structure");
        }

        // Region mode: seek to the requested locus via the index. read_next()
        // then pulls only overlapping records. Streaming mode (empty region)
        // leaves the index/iterator null. The path differs by format: binary
        // BCF is read with bcf_itr_next() over a CSI index; text bgzip VCF is
        // read with tbx_itr_next() + vcf_parse() over a tabix index, because
        // bcf_itr_next() decodes binary records and errors on text VCF.
        if (!this->options.region.empty()) {
            if (vcf_file->format.format == bcf) {
                idx.reset(bcf_index_load(path.c_str()));
                if (!idx) {
                    throw std::runtime_error(
                        "Region access requires a CSI-indexed BCF: " + path.string());
                }
                region_itr.reset(bcf_itr_querys(idx.get(), header, this->options.region.c_str()));
            } else {
                tbx.reset(tbx_index_load(path.c_str()));
                if (!tbx) {
                    throw std::runtime_error(
                        "Region access requires a bgzip-compressed, tabix-indexed (.tbi/.csi) VCF: " +
                        path.string());
                }
                region_itr.reset(tbx_itr_querys(tbx.get(), this->options.region.c_str()));
            }
            if (!region_itr) {
                throw std::runtime_error(
                    "Invalid region '" + this->options.region +
                    "' (or its sequence is not in the index) for " + path.string());
            }
        }
    }

    bool vcf_reader::is_filtered(bcf1_t* rec) const {
        // Unfiltered: FILTER is "." (n_flt == 0) or exactly "PASS".
        if (rec->d.n_flt == 0) {
            return false;
        }
        if (rec->d.n_flt == 1) {
            const char* name = bcf_hdr_int2id(header_ptr.get(), BCF_DT_ID, rec->d.flt[0]);
            if (name && std::string(name) == "PASS") {
                return false;
            }
        }
        return true;
    }

    bool vcf_reader::read_next(vcf_entry& entry) {
        // Unconditional clear honors the file_reader_base contract: any path
        // that sets error_message must either throw or return false.
        error_message.clear();

        if (!vcf_file || at_eof) {
            return false;
        }

        // Fetch one raw record from the active source. All three return >= 0 on
        // success, -1 at EOF, and < -1 on a critical error, so the skip/parse
        // loop below is shared:
        //   - tbx set     -> text VCF region: read a line, then vcf_parse() it
        //   - region_itr  -> binary BCF region: bcf_itr_next()
        //   - neither     -> streaming: bcf_read()
        auto read_raw = [&]() -> int {
            if (tbx) {
                int r = tbx_itr_next(vcf_file.get(), tbx.get(), region_itr.get(), &region_ks.ks);
                if (r >= 0 && vcf_parse(&region_ks.ks, header_ptr.get(), record.get()) < 0) {
                    return -2;  // malformed line -> surface as a critical error
                }
                return r;
            }
            if (region_itr) return bcf_itr_next(vcf_file.get(), region_itr.get(), record.get());
            return bcf_read(vcf_file.get(), header_ptr.get(), record.get());
        };

        int ret;
        while ((ret = read_raw()) >= 0) {
            record_num++;

            // Need FILTER before deciding to skip; unpack up to FILTER.
            bcf_unpack(record.get(), BCF_UN_FLT);

            if (options.skip_filtered && is_filtered(record.get())) {
                continue;
            }

            parse_record(record.get(), entry);
            return true;
        }

        // ret < 0: either EOF (-1) or a critical error (< -1).
        if (ret < -1) {
            error_message = "I/O error reading VCF record after record " + std::to_string(record_num);
            throw std::runtime_error(error_message);
        }

        at_eof = true;
        return false;
    }

    void vcf_reader::parse_record(bcf1_t* rec, vcf_entry& entry) {
        // Unpack shared fields (ID, REF/ALT, FILTER, INFO). FORMAT is unpacked
        // lazily inside parse_samples_fields via the bcf_get_* helpers.
        bcf_unpack(rec, BCF_UN_SHR);
        bcf_hdr_t* header = header_ptr.get();

        // CHROM
        const char* chrom = bcf_hdr_id2name(header, rec->rid);
        entry.chrom = chrom ? chrom : ".";

        // Coordinates: htslib pos is 0-based; rlen is the REF span.
        entry.start = static_cast<size_t>(rec->pos);
        entry.end = static_cast<size_t>(rec->pos + rec->rlen);

        // ID ("." is the VCF missing value -> empty)
        entry.id.clear();
        if (rec->d.id && std::string(rec->d.id) != ".") {
            entry.id = rec->d.id;
        }

        // REF / ALT. d.allele[0] is REF; [1..n_allele) are ALT alleles.
        entry.ref.clear();
        entry.alt.clear();
        if (rec->n_allele > 0) {
            entry.ref = rec->d.allele[0];
            entry.alt.reserve(rec->n_allele - 1);
            for (int i = 1; i < rec->n_allele; ++i) {
                entry.alt.emplace_back(rec->d.allele[i]);
            }
        }

        // QUAL (NaN sentinel marks missing)
        if (bcf_float_is_missing(rec->qual)) {
            entry.qual = 0.0f;
            entry.qual_missing = true;
        } else {
            entry.qual = rec->qual;
            entry.qual_missing = false;
        }

        // FILTER: empty for "." (n_flt == 0); otherwise the named filters.
        entry.filter.clear();
        entry.filter.reserve(rec->d.n_flt);
        for (int i = 0; i < rec->d.n_flt; ++i) {
            const char* name = bcf_hdr_int2id(header, BCF_DT_ID, rec->d.flt[i]);
            if (name) {
                entry.filter.emplace_back(name);
            }
        }

        // INFO
        entry.info.clear();
        if (options.parse_info) {
            parse_info_fields(rec, entry);
        }

        // FORMAT / per-sample columns
        entry.format.clear();
        entry.samples.clear();
        if (options.parse_samples && bcf_hdr_nsamples(header) > 0) {
            parse_samples_fields(rec, entry);
        }
    }

    void vcf_reader::parse_info_fields(bcf1_t* rec, vcf_entry& entry) {
        bcf_hdr_t* header = header_ptr.get();
        for (int i = 0; i < rec->n_info; ++i) {
            const bcf_info_t& z = rec->d.info[i];
            const char* tag = bcf_hdr_int2id(header, BCF_DT_ID, z.key);
            if (!tag) continue;

            int htype = bcf_hdr_id2type(header, BCF_HL_INFO, z.key);
            switch (htype) {
                case BCF_HT_FLAG:
                    entry.info[tag] = true;
                    break;

                case BCF_HT_INT: {
                    int n = bcf_get_info_int32(header, rec, tag, &int_buf.data, &int_buf.size);
                    if (n > 0) {
                        entry.info[tag] = std::vector<int32_t>(int_buf.data, int_buf.data + n);
                    }
                    break;
                }

                case BCF_HT_REAL: {
                    int n = bcf_get_info_float(header, rec, tag, &float_buf.data, &float_buf.size);
                    if (n > 0) {
                        entry.info[tag] = std::vector<float>(float_buf.data, float_buf.data + n);
                    }
                    break;
                }

                case BCF_HT_STR: {
                    int n = bcf_get_info_string(header, rec, tag, &str_buf.data, &str_buf.size);
                    if (n > 0) {
                        entry.info[tag] = std::string(str_buf.data, static_cast<size_t>(n));
                    }
                    break;
                }

                default:
                    break;  // unknown INFO type — skip
            }
        }
    }

    void vcf_reader::parse_samples_fields(bcf1_t* rec, vcf_entry& entry) {
        bcf_unpack(rec, BCF_UN_ALL);
        bcf_hdr_t* header = header_ptr.get();
        const int n_samples = bcf_hdr_nsamples(header);

        // FORMAT keys in column order (the first is conventionally GT).
        entry.format.reserve(rec->n_fmt);
        for (int i = 0; i < rec->n_fmt; ++i) {
            const char* key = bcf_hdr_int2id(header, BCF_DT_ID, rec->d.fmt[i].id);
            if (key) {
                entry.format.emplace_back(key);
            }
        }

        entry.samples.resize(n_samples);

        // GT: bcf_get_genotypes returns n_samples * max_ploidy encoded ints,
        // padded per sample with bcf_int32_vector_end.
        int ngt = bcf_get_genotypes(header, rec, &gt_buf.data, &gt_buf.size);
        if (ngt > 0) {
            const int max_ploidy = ngt / n_samples;
            for (int s = 0; s < n_samples; ++s) {
                const int32_t* ptr = gt_buf.data + s * max_ploidy;
                sample_genotype& sg = entry.samples[s];
                for (int p = 0; p < max_ploidy; ++p) {
                    if (ptr[p] == bcf_int32_vector_end) {
                        break;  // sample has fewer alleles than max_ploidy
                    }
                    sg.has_gt = true;
                    if (bcf_gt_is_missing(ptr[p])) {
                        sg.gt_alleles.push_back(-1);
                    } else {
                        sg.gt_alleles.push_back(bcf_gt_allele(ptr[p]));
                    }
                    // Phasing is encoded on alleles after the first.
                    if (p > 0 && bcf_gt_is_phased(ptr[p])) {
                        sg.phased = true;
                    }
                }
            }
        }

        // Remaining FORMAT fields (everything except GT).
        for (int i = 0; i < rec->n_fmt; ++i) {
            const int fmt_id = rec->d.fmt[i].id;
            const char* key = bcf_hdr_int2id(header, BCF_DT_ID, fmt_id);
            if (!key || std::string(key) == "GT") continue;

            int htype = bcf_hdr_id2type(header, BCF_HL_FMT, fmt_id);
            switch (htype) {
                case BCF_HT_INT: {
                    int n = bcf_get_format_int32(header, rec, key, &int_buf.data, &int_buf.size);
                    if (n <= 0) break;
                    // htslib returns a flat n_samples * max_width buffer, right-
                    // padding samples that carry fewer values with the sentinel
                    // bcf_int32_vector_end. Keep only each sample's real values.
                    const int per = n / n_samples;
                    for (int s = 0; s < n_samples; ++s) {
                        const int32_t* p = int_buf.data + s * per;
                        std::vector<int32_t> vals;
                        vals.reserve(per);
                        for (int j = 0; j < per; ++j) {
                            if (p[j] == bcf_int32_vector_end) break;
                            vals.push_back(p[j]);
                        }
                        entry.samples[s].fields[key] = std::move(vals);
                    }
                    break;
                }

                case BCF_HT_REAL: {
                    int n = bcf_get_format_float(header, rec, key, &float_buf.data, &float_buf.size);
                    if (n <= 0) break;
                    const int per = n / n_samples;
                    for (int s = 0; s < n_samples; ++s) {
                        const float* p = float_buf.data + s * per;
                        std::vector<float> vals;
                        vals.reserve(per);
                        for (int j = 0; j < per; ++j) {
                            if (bcf_float_is_vector_end(p[j])) break;
                            vals.push_back(p[j]);
                        }
                        entry.samples[s].fields[key] = std::move(vals);
                    }
                    break;
                }

                case BCF_HT_STR: {
                    // bcf_get_format_string allocates one char* per sample plus
                    // a flat backing buffer; free both on the way out.
                    char** dst = nullptr;
                    int ndst = 0;
                    int n = bcf_get_format_string(header, rec, key, &dst, &ndst);
                    if (n > 0 && dst) {
                        for (int s = 0; s < n_samples; ++s) {
                            entry.samples[s].fields[key] = std::string(dst[s]);
                        }
                    }
                    if (dst) {
                        free(dst[0]);  // backing buffer
                        free(dst);     // pointer array
                    }
                    break;
                }

                default:
                    break;
            }
        }
    }

    bool vcf_reader::has_next() {
        return !at_eof && vcf_file;
    }

    std::string vcf_reader::get_error_message() const {
        return error_message;
    }

    size_t vcf_reader::get_current_line() const {
        return record_num;
    }

    const std::string& vcf_reader::get_header() const {
        return header_text;
    }

    const std::vector<std::string>& vcf_reader::get_sample_names() const {
        return sample_names;
    }

    const std::vector<std::string>& vcf_reader::get_contigs() const {
        return contigs;
    }

} // namespace genogrove::io