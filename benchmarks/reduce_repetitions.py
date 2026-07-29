#!/usr/bin/env python3
"""Reduce a google-benchmark JSON with repetitions to one row per benchmark.

Keeps the *fastest* repetition rather than the mean or median. A slow sample
means something else on the shared runner got in the way; the fastest sample is
the one least polluted by that interference, so it is the most comparable number
across commits. Averaging interference in is what makes run-to-run comparison
unusable.

The surviving rows keep their original names and the file keeps the original
schema, so downstream consumers (github-action-benchmark, visualize.py) see
exactly what a single-repetition run produced and the dashboard's history stays
continuous.

Usage: reduce_repetitions.py <raw.json> <reduced.json>
"""

import json
import sys


def reduce_benchmarks(raw):
    """Return the raw report with one entry per benchmark: the fastest run."""
    fastest = {}
    for entry in raw.get("benchmarks", []):
        # google-benchmark appends _mean/_median/_stddev/_cv rows when
        # repetitions > 1; they would be double counted alongside the runs.
        if entry.get("run_type") == "aggregate":
            continue
        # Rows that errored out carry no timing worth comparing.
        if entry.get("error_occurred"):
            continue
        name = entry.get("run_name") or entry.get("name")
        if name is None or "real_time" not in entry:
            continue
        current = fastest.get(name)
        if current is None or entry["real_time"] < current["real_time"]:
            fastest[name] = entry

    reduced = []
    for name, entry in fastest.items():  # insertion order == original order
        row = dict(entry)
        row["name"] = name
        row["run_name"] = name
        row["run_type"] = "iteration"
        row["repetitions"] = 1
        row["repetition_index"] = 0
        reduced.append(row)

    out = dict(raw)
    out["benchmarks"] = reduced
    return out


def main(argv):
    if len(argv) != 3:
        print(__doc__.strip(), file=sys.stderr)
        return 2

    with open(argv[1]) as handle:
        raw = json.load(handle)

    total = len(raw.get("benchmarks", []))
    out = reduce_benchmarks(raw)
    kept = len(out["benchmarks"])
    if kept == 0:
        print(f"error: no usable benchmark rows in {argv[1]}", file=sys.stderr)
        return 1

    with open(argv[2], "w") as handle:
        json.dump(out, handle, indent=2)

    print(f"reduced {total} rows to {kept} benchmarks (fastest repetition each)")
    return 0


if __name__ == "__main__":
    sys.exit(main(sys.argv))