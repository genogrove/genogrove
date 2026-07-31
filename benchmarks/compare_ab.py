#!/usr/bin/env python3
"""Compare two sets of google-benchmark runs measured on the same machine.

The continuous-benchmarking dashboard compares a commit against its predecessor,
which were measured on *different* shared runners — differences of 30% or more
between hosts are routine, so a ratio there mixes "the code changed" with "the
machine changed" and cannot be acted on. This script instead compares two builds
run alternately on one host, so the host cancels out.

Both sides may be given several files (one per interleaved round). The fastest
sample per benchmark per side is used: a slow sample means something else on the
runner interfered, which is noise rather than a slower library.

The control benchmarks (BM_control_*) are reported separately. They do fixed work
in no genogrove code, so if they differ between the two sides the measurement
itself is suspect — something disturbed the run and the rest of the table should
be read with suspicion.

Usage:
  compare_ab.py --head h1.json [h2.json ...] --base b1.json [b2.json ...]
                [--threshold 1.20] [--out report.md]

Exit status is 0 unless --fail-over is given and exceeded.
"""

import argparse
import json
import sys

CONTROL_PREFIX = "BM_control"


def fastest_per_benchmark(paths):
    """Minimum real_time per benchmark name across all given report files."""
    best = {}
    for path in paths:
        with open(path) as handle:
            report = json.load(handle)
        for entry in report.get("benchmarks", []):
            if entry.get("run_type") == "aggregate" or entry.get("error_occurred"):
                continue
            name = entry.get("run_name") or entry.get("name")
            time = entry.get("real_time")
            if name is None or time is None:
                continue
            if name not in best or time < best[name]:
                best[name] = time
    return best


def format_report(head, base, threshold, head_sha=None, base_sha=None, warnings=()):
    shared = [n for n in head if n in base and base[n] > 0]
    controls = sorted(n for n in shared if n.startswith(CONTROL_PREFIX))
    measured = [n for n in shared if not n.startswith(CONTROL_PREFIX)]

    ratios = sorted(((head[n] / base[n], n) for n in measured), reverse=True)
    regressions = [(r, n) for r, n in ratios if r >= threshold]
    improvements = [(r, n) for r, n in ratios if r <= 1 / threshold]

    lines = ["## Benchmark A/B (same runner, interleaved)", ""]

    # State which commits produced these numbers. The report is normally posted
    # as a comment that is edited in place, so without this a reader cannot tell
    # whether it describes the current tip or a superseded push.
    if head_sha or base_sha:
        lines.append(f"`{(head_sha or '?')[:12]}` (this PR) vs `{(base_sha or '?')[:12]}` (base)")
        lines.append("")

    for warning in warnings:
        lines += [f"> ⚠️ {warning}", ""]

    if controls:
        lines += ["<details><summary>Machine controls — these should read ~1.00x</summary>", ""]
        lines += ["| control | base | head | ratio |", "|---|---|---|---|"]
        for name in controls:
            lines.append(
                f"| `{name}` | {base[name]:.1f} | {head[name]:.1f} | {head[name] / base[name]:.2f}x |"
            )
        drift = max(abs(head[n] / base[n] - 1.0) for n in controls)
        lines += [""]
        if drift > 0.05:
            lines.append(
                f"⚠️ Controls differ by {drift * 100:.0f}%. Both sides ran on one host, so this "
                "means the run was disturbed — treat the table below as unreliable."
            )
        else:
            lines.append("Controls agree, so the comparison below reflects code rather than host.")
        lines += ["", "</details>", ""]
    else:
        lines += ["> No control benchmarks in the filter — host stability was not verified.", ""]

    if not measured:
        lines.append("No benchmarks in common between the two sides.")
        return "\n".join(lines), 0.0

    worst = ratios[0][0]
    lines.append(
        f"{len(measured)} benchmarks compared. "
        f"Slowest {worst:.2f}x, fastest {ratios[-1][0]:.2f}x, "
        f"median {sorted(r for r, _ in ratios)[len(ratios) // 2]:.2f}x."
    )
    lines.append("")

    if regressions:
        lines += [f"### Slower by {threshold:.2f}x or more", "", "| benchmark | base | head | ratio |", "|---|---|---|---|"]
        for r, n in regressions[:25]:
            lines.append(f"| `{n}` | {base[n]:.1f} | {head[n]:.1f} | **{r:.2f}x** |")
        if len(regressions) > 25:
            lines.append(f"| … {len(regressions) - 25} more | | | |")
        lines.append("")
    else:
        lines += [f"No benchmark is slower by {threshold:.2f}x or more.", ""]

    if improvements:
        lines += [f"### Faster by {threshold:.2f}x or more", "", "| benchmark | base | head | ratio |", "|---|---|---|---|"]
        for r, n in improvements[-25:]:
            lines.append(f"| `{n}` | {base[n]:.1f} | {head[n]:.1f} | **{r:.2f}x** |")
        lines.append("")

    lines.append("All times are the fastest sample per benchmark, in the unit google-benchmark reported.")
    return "\n".join(lines), worst


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--head", nargs="+", required=True, help="report files for the PR build")
    parser.add_argument("--base", nargs="+", required=True, help="report files for the base build")
    parser.add_argument("--threshold", type=float, default=1.20,
                        help="ratio at which a benchmark is listed as slower (default 1.20)")
    parser.add_argument("--fail-over", type=float, default=None,
                        help="exit non-zero if any benchmark is slower than this ratio")
    parser.add_argument("--out", default=None, help="write the markdown report here as well as stdout")
    parser.add_argument("--head-sha", default=None, help="commit measured as head, shown in the report")
    parser.add_argument("--base-sha", default=None, help="commit measured as base, shown in the report")
    parser.add_argument("--warn", action="append", default=None,
                        help="caveat to print above the table; repeatable")
    args = parser.parse_args(argv)

    head = fastest_per_benchmark(args.head)
    base = fastest_per_benchmark(args.base)
    if not head or not base:
        print("error: one side produced no benchmark rows", file=sys.stderr)
        return 2

    report, worst = format_report(head, base, args.threshold,
                                  args.head_sha, args.base_sha, args.warn or ())
    print(report)
    if args.out:
        with open(args.out, "w") as handle:
            handle.write(report + "\n")

    # Strictly greater, matching both the module docstring ("exceeded") and
    # this flag's help ("slower than this ratio"). --threshold stays inclusive,
    # since it is documented as the ratio *at which* a benchmark is listed.
    if args.fail_over is not None and worst > args.fail_over:
        print(f"\nerror: slowest benchmark {worst:.2f}x exceeds --fail-over {args.fail_over:.2f}x",
              file=sys.stderr)
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
