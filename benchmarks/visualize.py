#!/usr/bin/env python3
"""
SPDX-License-Identifier: GPL-3.0-or-later

Copyright (c) 2025 Richard A. Schäfer

Visualize genogrove benchmark results, comparing performance across different orders.
"""

import json
import sys
from pathlib import Path
from typing import Dict, List, Tuple
import matplotlib
matplotlib.use('Agg')  # Use non-interactive backend for CI
import matplotlib.pyplot as plt
import seaborn as sns
from collections import defaultdict

# Set style
sns.set_theme(style="whitegrid")
plt.rcParams['figure.figsize'] = (12, 8)
plt.rcParams['figure.dpi'] = 100


def parse_benchmark_results(json_file: Path) -> Dict:
    """Parse Google Benchmark JSON output."""
    with open(json_file, 'r') as f:
        return json.load(f)


def extract_metrics(data: Dict) -> Dict[str, List[Tuple]]:
    """
    Extract benchmark metrics organized by benchmark type.

    Returns:
        Dictionary mapping benchmark name to list of
        (size, order, time_us, throughput, serialized_bytes, bytes_per_interval) tuples
    """
    metrics = defaultdict(list)

    for benchmark in data['benchmarks']:
        name = benchmark['name']

        # Parse benchmark name: BM_grove_creation_unsorted/100/2
        parts = name.split('/')
        if len(parts) != 3:
            continue

        bench_type = parts[0]
        size = int(parts[1])
        order = int(parts[2])

        time_us = benchmark.get('real_time', 0)

        throughput = 0
        if time_us > 0:
            throughput = (size * 1e6) / time_us

        serialized_bytes = benchmark.get('serialized_bytes', 0)
        bytes_per_interval = benchmark.get('bytes_per_interval', 0)

        metrics[bench_type].append((size, order, time_us, throughput, serialized_bytes, bytes_per_interval))

    return metrics


def save_plot(fig, output_dir: Path, filename_base: str):
    """Save plot as both PNG and SVG."""
    plt.tight_layout()
    fig.savefig(output_dir / f'{filename_base}.png', dpi=150, bbox_inches='tight')
    fig.savefig(output_dir / f'{filename_base}.svg', bbox_inches='tight')
    plt.close(fig)
    print(f"  Generated: {filename_base}.png + .svg")


def plot_time_vs_order(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """Plot execution time vs order for each data size."""
    for bench_type, data in metrics.items():
        if not data[0][2]:  # skip if no time data
            continue

        by_size = defaultdict(list)
        for size, order, time_us, *_ in data:
            by_size[size].append((order, time_us))

        fig, ax = plt.subplots(figsize=(12, 8))
        for size in sorted(by_size.keys()):
            points = sorted(by_size[size])
            ax.plot([p[0] for p in points], [p[1] for p in points],
                   marker='o', linewidth=2, markersize=8, label=f'{size} intervals')

        ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Time (μs, log scale)', fontsize=12, fontweight='bold')
        ax.set_yscale('log')

        title_name = bench_type.replace('BM_grove_creation_', '').replace('BM_', '').replace('_', ' ').title()
        ax.set_title(f'Time vs Order - {title_name}', fontsize=14, fontweight='bold')
        ax.legend(title='Dataset Size', fontsize=10, title_fontsize=11)
        ax.grid(True, alpha=0.3, which='both')

        save_plot(fig, output_dir, f'{bench_type}_time_vs_order')


def plot_time_vs_size(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """Plot execution time vs dataset size for each order."""
    for bench_type, data in metrics.items():
        if not data[0][2]:
            continue

        by_order = defaultdict(list)
        for size, order, time_us, *_ in data:
            by_order[order].append((size, time_us))

        fig, ax = plt.subplots(figsize=(12, 8))
        colors = sns.color_palette("husl", len(by_order))

        for idx, order in enumerate(sorted(by_order.keys())):
            points = sorted(by_order[order])
            ax.plot([p[0] for p in points], [p[1] for p in points],
                   marker='o', linewidth=2, markersize=8, label=f'order={order}', color=colors[idx])

        ax.set_xlabel('Dataset Size (# intervals)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Time (μs, log scale)', fontsize=12, fontweight='bold')
        ax.set_yscale('log')

        title_name = bench_type.replace('BM_grove_creation_', '').replace('BM_', '').replace('_', ' ').title()
        ax.set_title(f'Time vs Size - {title_name}', fontsize=14, fontweight='bold')
        ax.legend(title='Order', fontsize=9, title_fontsize=10, ncol=2)
        ax.grid(True, alpha=0.3, which='both')

        save_plot(fig, output_dir, f'{bench_type}_time_vs_size')


def plot_throughput_comparison(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """Plot throughput (items/sec) comparison across orders."""
    for bench_type, data in metrics.items():
        by_size = defaultdict(list)
        for size, order, _, throughput, *__ in data:
            by_size[size].append((order, throughput))

        fig, ax = plt.subplots(figsize=(12, 8))
        for size in sorted(by_size.keys()):
            points = sorted(by_size[size])
            ax.plot([p[0] for p in points], [p[1] for p in points],
                   marker='o', linewidth=2, markersize=8, label=f'{size} intervals')

        ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Throughput (intervals/sec)', fontsize=12, fontweight='bold')

        title_name = bench_type.replace('BM_grove_creation_', '').replace('BM_', '').replace('_', ' ').title()
        ax.set_title(f'Throughput vs Order - {title_name}', fontsize=14, fontweight='bold')
        ax.legend(title='Dataset Size', fontsize=10, title_fontsize=11)
        ax.grid(True, alpha=0.3)

        save_plot(fig, output_dir, f'{bench_type}_throughput')


def plot_speedup_factor(metrics: Dict[str, List[Tuple]], output_dir: Path, baseline_order: int = 2):
    """Plot speedup factor relative to baseline order."""
    for bench_type, data in metrics.items():
        by_size = defaultdict(list)
        for size, order, time_us, *_ in data:
            by_size[size].append((order, time_us))

        fig, ax = plt.subplots(figsize=(12, 8))

        for size in sorted(by_size.keys()):
            points = sorted(by_size[size])
            baseline_time = next((t for o, t in points if o == baseline_order), None)
            if not baseline_time:
                continue

            orders = [o for o, t in points if t > 0]
            speedups = [baseline_time / t for o, t in points if t > 0]
            ax.plot(orders, speedups, marker='o', linewidth=2, markersize=8, label=f'{size} intervals')

        ax.axhline(y=1.0, color='gray', linestyle='--', linewidth=1, alpha=0.7,
                  label=f'Baseline (order={baseline_order})')
        ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
        ax.set_ylabel(f'Speedup Factor (relative to order={baseline_order})', fontsize=12, fontweight='bold')

        title_name = bench_type.replace('BM_grove_creation_', '').replace('BM_', '').replace('_', ' ').title()
        ax.set_title(f'Speedup Factor vs Order - {title_name}', fontsize=14, fontweight='bold')
        ax.legend(title='Dataset Size', fontsize=10, title_fontsize=11)
        ax.grid(True, alpha=0.3)

        save_plot(fig, output_dir, f'{bench_type}_speedup')


def plot_sorted_vs_unsorted_comparison(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """Plot direct comparison between sorted and unsorted insertion."""
    sorted_data = metrics.get('BM_grove_creation_sorted', [])
    unsorted_data = metrics.get('BM_grove_creation_unsorted', [])
    if not sorted_data or not unsorted_data:
        return

    sorted_by = {(s, o): t for s, o, t, *_ in sorted_data}
    unsorted_by = {(s, o): t for s, o, t, *_ in unsorted_data}

    all_sizes = sorted(set(s for s, _ in sorted_by.keys()))
    for size in all_sizes:
        fig, ax = plt.subplots(figsize=(12, 8))

        s_points = sorted((o, t) for (s, o), t in sorted_by.items() if s == size)
        u_points = sorted((o, t) for (s, o), t in unsorted_by.items() if s == size)

        ax.plot([p[0] for p in s_points], [p[1] for p in s_points],
               marker='o', linewidth=2.5, markersize=10, label='Sorted', color='#2ecc71')
        ax.plot([p[0] for p in u_points], [p[1] for p in u_points],
               marker='s', linewidth=2.5, markersize=10, label='Unsorted', color='#e74c3c', linestyle='--')

        ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Time (μs, log scale)', fontsize=12, fontweight='bold')
        ax.set_yscale('log')
        ax.set_title(f'Sorted vs Unsorted - {size} intervals', fontsize=14, fontweight='bold')
        ax.legend(fontsize=11)
        ax.grid(True, alpha=0.3, which='both')

        save_plot(fig, output_dir, f'sorted_vs_unsorted_size_{size}')


def plot_sorted_speedup(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """Plot speedup factor of sorted over unsorted."""
    sorted_data = metrics.get('BM_grove_creation_sorted', [])
    unsorted_data = metrics.get('BM_grove_creation_unsorted', [])
    if not sorted_data or not unsorted_data:
        return

    sorted_by = {(s, o): t for s, o, t, *_ in sorted_data}
    unsorted_by = {(s, o): t for s, o, t, *_ in unsorted_data}

    by_size = defaultdict(list)
    for (size, order), unsorted_time in unsorted_by.items():
        sorted_time = sorted_by.get((size, order))
        if sorted_time and sorted_time > 0:
            by_size[size].append((order, unsorted_time / sorted_time))

    fig, ax = plt.subplots(figsize=(12, 8))
    for size in sorted(by_size.keys()):
        points = sorted(by_size[size])
        ax.plot([p[0] for p in points], [p[1] for p in points],
               marker='o', linewidth=2, markersize=8, label=f'{size} intervals')

    ax.axhline(y=1.0, color='gray', linestyle='--', linewidth=1.5, alpha=0.7, label='No speedup')
    ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
    ax.set_ylabel('Speedup Factor (Sorted vs Unsorted)', fontsize=12, fontweight='bold')
    ax.set_title('Sorted Insertion Speedup vs Unsorted', fontsize=14, fontweight='bold')
    ax.legend(title='Dataset Size', fontsize=10, title_fontsize=11)
    ax.grid(True, alpha=0.3)

    save_plot(fig, output_dir, 'sorted_insertion_speedup')


def plot_serialization_size(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """Plot serialized size vs dataset size and bytes-per-interval vs order."""
    data = metrics.get('BM_serialization_size', [])
    if not data:
        return

    # Plot 1: Total size vs dataset size
    by_order = defaultdict(list)
    for size, order, _, _, serialized_bytes, _ in data:
        if serialized_bytes > 0:
            by_order[order].append((size, serialized_bytes))

    if by_order:
        fig, ax = plt.subplots(figsize=(12, 8))
        colors = sns.color_palette("husl", len(by_order))

        for idx, order in enumerate(sorted(by_order.keys())):
            points = sorted(by_order[order])
            ax.plot([p[0] for p in points], [p[1] / 1024 for p in points],
                   marker='o', linewidth=2, markersize=8, label=f'order={order}', color=colors[idx])

        ax.set_xlabel('Dataset Size (# intervals)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Serialized Size (KB)', fontsize=12, fontweight='bold')
        ax.set_title('Serialized Size vs Dataset Size', fontsize=14, fontweight='bold')
        ax.legend(title='Order', fontsize=9, title_fontsize=10, ncol=2)
        ax.grid(True, alpha=0.3)

        save_plot(fig, output_dir, 'BM_serialization_size_size_vs_dataset')

    # Plot 2: Bytes per interval vs order
    by_size = defaultdict(list)
    for size, order, _, _, _, bytes_per in data:
        if bytes_per > 0:
            by_size[size].append((order, bytes_per))

    if by_size:
        fig, ax = plt.subplots(figsize=(12, 8))

        for size in sorted(by_size.keys()):
            points = sorted(by_size[size])
            ax.plot([p[0] for p in points], [p[1] for p in points],
                   marker='o', linewidth=2, markersize=8, label=f'{size} intervals')

        ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Bytes per Interval (compressed)', fontsize=12, fontweight='bold')
        ax.set_title('Serialization Efficiency vs Order', fontsize=14, fontweight='bold')
        ax.legend(title='Dataset Size', fontsize=10, title_fontsize=11)
        ax.grid(True, alpha=0.3)

        save_plot(fig, output_dir, 'BM_serialization_size_bytes_per_interval')


# ----------------------------
# Section definitions for HTML
# ----------------------------
SECTIONS = [
    {
        'id': 'sorted',
        'title': 'Sorted Insertion',
        'bench_type': 'BM_grove_creation_sorted',
        'plots': ['time_vs_order', 'time_vs_size', 'throughput', 'speedup'],
    },
    {
        'id': 'unsorted',
        'title': 'Unsorted Insertion',
        'bench_type': 'BM_grove_creation_unsorted',
        'plots': ['time_vs_order', 'time_vs_size', 'throughput', 'speedup'],
    },
    {
        'id': 'bulk-sorted',
        'title': 'Bulk Sorted Insertion',
        'bench_type': 'BM_grove_creation_bulk_sorted',
        'plots': ['time_vs_order', 'time_vs_size', 'throughput', 'speedup'],
    },
    {
        'id': 'bulk-unsorted',
        'title': 'Bulk Unsorted Insertion',
        'bench_type': 'BM_grove_creation_bulk_unsorted',
        'plots': ['time_vs_order', 'time_vs_size', 'throughput', 'speedup'],
    },
    {
        'id': 'comparison',
        'title': 'Sorted vs Unsorted',
        'bench_type': None,  # special handling
        'plots': [],
    },
    {
        'id': 'serialization',
        'title': 'Serialization Size',
        'bench_type': 'BM_serialization_size',
        'plots': [],  # special handling
    },
]

PLOT_TITLES = {
    'time_vs_order': 'Time vs Order',
    'time_vs_size': 'Time vs Size',
    'throughput': 'Throughput',
    'speedup': 'Speedup Factor',
}


def generate_html_index(output_dir: Path, metrics: Dict[str, List[Tuple]]):
    """Generate an HTML index page with sidebar navigation and download links."""

    # Build list of active sections
    active_sections = []
    for section in SECTIONS:
        if section['bench_type'] is None:
            # Comparison section — needs both sorted and unsorted
            if 'BM_grove_creation_sorted' in metrics and 'BM_grove_creation_unsorted' in metrics:
                active_sections.append(section)
        elif section['bench_type'] in metrics:
            active_sections.append(section)

    # Build sidebar nav
    nav_items = ''.join(
        f'<a href="#{s["id"]}">{s["title"]}</a>\n' for s in active_sections
    )

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genogrove Benchmark Visualizations</title>
    <style>
        * {{ box-sizing: border-box; }}
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6; color: #333; margin: 0; background: #f5f5f5;
        }}
        .sidebar {{
            position: fixed; top: 0; left: 0; width: 220px; height: 100vh;
            background: #2c3e50; padding: 20px 0; overflow-y: auto; z-index: 10;
        }}
        .sidebar h2 {{
            color: #ecf0f1; font-size: 1.1em; padding: 0 20px; margin: 0 0 15px;
            border-bottom: 2px solid #3498db; padding-bottom: 10px;
        }}
        .sidebar a {{
            display: block; color: #bdc3c7; padding: 8px 20px; text-decoration: none;
            font-size: 0.9em; transition: background 0.2s;
        }}
        .sidebar a:hover {{ background: #34495e; color: #ecf0f1; }}
        .content {{ margin-left: 220px; padding: 30px; max-width: 1400px; }}
        h1 {{ color: #2c3e50; border-bottom: 3px solid #3498db; padding-bottom: 10px; }}
        h2 {{ color: #34495e; margin-top: 40px; border-bottom: 2px solid #95a5a6; padding-bottom: 5px; }}
        .plot-grid {{
            display: grid; grid-template-columns: repeat(auto-fit, minmax(550px, 1fr));
            gap: 25px; margin: 25px 0;
        }}
        .plot-container {{
            background: white; border-radius: 8px; padding: 18px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }}
        .plot-container img {{ width: 100%; height: auto; border-radius: 4px; }}
        .plot-container h3 {{ margin: 0 0 10px; color: #2c3e50; font-size: 1.05em; }}
        .download-links {{ margin-top: 8px; font-size: 0.85em; }}
        .download-links a {{
            color: #3498db; text-decoration: none; margin-right: 12px;
        }}
        .download-links a:hover {{ text-decoration: underline; }}
        .description {{
            background: white; padding: 20px; border-radius: 8px;
            margin: 20px 0; border-left: 4px solid #3498db;
        }}
        footer {{
            margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd;
            text-align: center; color: #7f8c8d;
        }}
    </style>
</head>
<body>
    <nav class="sidebar">
        <h2>Sections</h2>
        {nav_items}
    </nav>

    <div class="content">
    <h1>Genogrove Benchmark Visualizations</h1>

    <div class="description">
        <p><strong>Tested configurations:</strong>
        Orders: 2, 5, 10, 15, 20, 25, 30 |
        Dataset sizes: 100, 500, 1000, 5000 intervals |
        Modes: Sorted, Unsorted, Bulk Sorted, Bulk Unsorted</p>
    </div>
"""

    def plot_card(filename_base, title):
        return f"""        <div class="plot-container">
            <h3>{title}</h3>
            <img src="{filename_base}.png" alt="{title}">
            <div class="download-links">
                <a href="{filename_base}.png" download>PNG</a>
                <a href="{filename_base}.svg" download>SVG</a>
            </div>
        </div>
"""

    # Render each section
    for section in active_sections:
        html += f'\n    <h2 id="{section["id"]}">{section["title"]}</h2>\n'
        html += '    <div class="plot-grid">\n'

        if section['id'] == 'comparison':
            html += plot_card('sorted_insertion_speedup', 'Sorted Insertion Speedup')
            all_sizes = sorted(set(s for s, *_ in metrics.get('BM_grove_creation_sorted', [])))
            for size in all_sizes:
                html += plot_card(f'sorted_vs_unsorted_size_{size}', f'Direct Comparison - {size} intervals')

        elif section['id'] == 'serialization':
            html += plot_card('BM_serialization_size_size_vs_dataset', 'Total Serialized Size vs Dataset')
            html += plot_card('BM_serialization_size_bytes_per_interval', 'Bytes per Interval vs Order')

        else:
            bt = section['bench_type']
            for plot_suffix in section['plots']:
                html += plot_card(f'{bt}_{plot_suffix}', PLOT_TITLES[plot_suffix])

        html += '    </div>\n'

    html += """
    <footer>
        <p>Generated by genogrove continuous benchmarking &bull;
        <a href="https://github.com/genogrove/genogrove">GitHub Repository</a></p>
    </footer>
    </div>
</body>
</html>
"""

    index_file = output_dir / 'index.html'
    with open(index_file, 'w') as f:
        f.write(html)

    print(f"\nGenerated HTML index: {index_file}")


def main():
    if len(sys.argv) < 2:
        print("Usage: python visualize.py <benchmark_result.json> [output_dir]")
        sys.exit(1)

    json_file = Path(sys.argv[1])
    output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else Path.cwd()

    if not json_file.exists():
        print(f"Error: Benchmark file not found: {json_file}")
        sys.exit(1)

    output_dir.mkdir(parents=True, exist_ok=True)

    print(f"Reading benchmark results from: {json_file}")
    print(f"Output directory: {output_dir}\n")

    data = parse_benchmark_results(json_file)
    metrics = extract_metrics(data)

    print(f"Found {len(metrics)} benchmark types:")
    for bench_type, data_points in metrics.items():
        print(f"  - {bench_type}: {len(data_points)} data points")

    # Generate creation plots (sorted, unsorted, bulk sorted, bulk unsorted)
    print("\nGenerating creation plots...")
    plot_time_vs_order(metrics, output_dir)
    plot_time_vs_size(metrics, output_dir)
    plot_throughput_comparison(metrics, output_dir)
    plot_speedup_factor(metrics, output_dir)

    # Generate comparison plots
    print("\nGenerating comparison plots...")
    plot_sorted_vs_unsorted_comparison(metrics, output_dir)
    plot_sorted_speedup(metrics, output_dir)

    # Generate serialization size plots
    print("\nGenerating serialization size plots...")
    plot_serialization_size(metrics, output_dir)

    # Generate HTML index
    generate_html_index(output_dir, metrics)

    print("\nAll visualizations generated successfully!")


if __name__ == '__main__':
    main()
