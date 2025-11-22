#!/usr/bin/env python3
"""
SPDX-License-Identifier: MIT

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
        Dictionary mapping benchmark name to list of (size, order, time_us, throughput) tuples
    """
    metrics = defaultdict(list)

    for benchmark in data['benchmarks']:
        name = benchmark['name']

        # Parse benchmark name: BM_grove_creation_unsorted/100/2
        parts = name.split('/')
        if len(parts) != 3:
            continue

        bench_type = parts[0]  # e.g., BM_grove_creation_unsorted
        size = int(parts[1])
        order = int(parts[2])

        # Time in microseconds (real_time is in the unit specified, which is microseconds)
        time_us = benchmark.get('real_time', 0)

        # Calculate throughput (items per second)
        throughput = 0
        if time_us > 0:
            throughput = (size * 1e6) / time_us  # Convert us to seconds

        metrics[bench_type].append((size, order, time_us, throughput))

    return metrics


def plot_time_vs_order(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """
    Plot execution time vs order for each data size.
    Creates separate plots for sorted and unsorted.
    """
    for bench_type, data in metrics.items():
        # Group by size
        by_size = defaultdict(list)
        for size, order, time_us, _ in data:
            by_size[size].append((order, time_us))

        # Sort and create plot
        fig, ax = plt.subplots(figsize=(12, 8))

        for size in sorted(by_size.keys()):
            points = sorted(by_size[size])  # Sort by order
            orders = [p[0] for p in points]
            times = [p[1] for p in points]
            ax.plot(orders, times, marker='o', linewidth=2, markersize=8, label=f'{size} intervals')

        ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Time (μs, log scale)', fontsize=12, fontweight='bold')
        ax.set_yscale('log')

        # Clean up benchmark type name for title
        title_name = bench_type.replace('BM_grove_creation_', '').replace('_', ' ').title()
        ax.set_title(f'Grove Creation Time vs Order - {title_name}', fontsize=14, fontweight='bold')

        ax.legend(title='Dataset Size', fontsize=10, title_fontsize=11)
        ax.grid(True, alpha=0.3, which='both')

        # Save plot
        filename = f'{bench_type}_time_vs_order.png'
        plt.tight_layout()
        plt.savefig(output_dir / filename, dpi=150, bbox_inches='tight')
        plt.close()
        print(f"Generated: {filename}")


def plot_time_vs_size(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """
    Plot execution time vs dataset size for each order.
    Creates separate plots for sorted and unsorted.
    """
    for bench_type, data in metrics.items():
        # Group by order
        by_order = defaultdict(list)
        for size, order, time_us, _ in data:
            by_order[order].append((size, time_us))

        # Create plot
        fig, ax = plt.subplots(figsize=(12, 8))

        # Use a color palette with enough colors
        colors = sns.color_palette("husl", len(by_order))

        for idx, order in enumerate(sorted(by_order.keys())):
            points = sorted(by_order[order])  # Sort by size
            sizes = [p[0] for p in points]
            times = [p[1] for p in points]
            ax.plot(sizes, times, marker='o', linewidth=2, markersize=8,
                   label=f'order={order}', color=colors[idx])

        ax.set_xlabel('Dataset Size (# intervals)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Time (μs, log scale)', fontsize=12, fontweight='bold')
        ax.set_yscale('log')

        # Clean up benchmark type name for title
        title_name = bench_type.replace('BM_grove_creation_', '').replace('_', ' ').title()
        ax.set_title(f'Grove Creation Time vs Size - {title_name}', fontsize=14, fontweight='bold')

        ax.legend(title='Order', fontsize=9, title_fontsize=10, ncol=2)
        ax.grid(True, alpha=0.3, which='both')

        # Save plot
        filename = f'{bench_type}_time_vs_size.png'
        plt.tight_layout()
        plt.savefig(output_dir / filename, dpi=150, bbox_inches='tight')
        plt.close()
        print(f"Generated: {filename}")


def plot_throughput_comparison(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """
    Plot throughput (items/sec) comparison across orders.
    """
    for bench_type, data in metrics.items():
        # Group by size
        by_size = defaultdict(list)
        for size, order, _, throughput in data:
            by_size[size].append((order, throughput))

        # Create plot
        fig, ax = plt.subplots(figsize=(12, 8))

        for size in sorted(by_size.keys()):
            points = sorted(by_size[size])  # Sort by order
            orders = [p[0] for p in points]
            throughputs = [p[1] for p in points]
            ax.plot(orders, throughputs, marker='o', linewidth=2, markersize=8,
                   label=f'{size} intervals')

        ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Throughput (intervals/sec)', fontsize=12, fontweight='bold')

        # Clean up benchmark type name for title
        title_name = bench_type.replace('BM_grove_creation_', '').replace('_', ' ').title()
        ax.set_title(f'Throughput vs Order - {title_name}', fontsize=14, fontweight='bold')

        ax.legend(title='Dataset Size', fontsize=10, title_fontsize=11)
        ax.grid(True, alpha=0.3)

        # Save plot
        filename = f'{bench_type}_throughput.png'
        plt.tight_layout()
        plt.savefig(output_dir / filename, dpi=150, bbox_inches='tight')
        plt.close()
        print(f"Generated: {filename}")


def plot_speedup_factor(metrics: Dict[str, List[Tuple]], output_dir: Path, baseline_order: int = 2):
    """
    Plot speedup factor relative to baseline order.
    """
    for bench_type, data in metrics.items():
        # Group by size
        by_size = defaultdict(list)
        for size, order, time_us, _ in data:
            by_size[size].append((order, time_us))

        # Calculate speedup factors
        fig, ax = plt.subplots(figsize=(12, 8))

        for size in sorted(by_size.keys()):
            points = sorted(by_size[size])  # Sort by order

            # Find baseline time
            baseline_time = None
            for order, time_us in points:
                if order == baseline_order:
                    baseline_time = time_us
                    break

            if baseline_time is None or baseline_time == 0:
                continue

            # Calculate speedup factors
            orders = []
            speedups = []
            for order, time_us in points:
                if time_us > 0:
                    orders.append(order)
                    speedups.append(baseline_time / time_us)

            ax.plot(orders, speedups, marker='o', linewidth=2, markersize=8,
                   label=f'{size} intervals')

        # Add horizontal line at y=1 (baseline)
        ax.axhline(y=1.0, color='gray', linestyle='--', linewidth=1, alpha=0.7,
                  label=f'Baseline (order={baseline_order})')

        ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
        ax.set_ylabel(f'Speedup Factor (relative to order={baseline_order})',
                     fontsize=12, fontweight='bold')

        # Clean up benchmark type name for title
        title_name = bench_type.replace('BM_grove_creation_', '').replace('_', ' ').title()
        ax.set_title(f'Speedup Factor vs Order - {title_name}', fontsize=14, fontweight='bold')

        ax.legend(title='Dataset Size', fontsize=10, title_fontsize=11)
        ax.grid(True, alpha=0.3)

        # Save plot
        filename = f'{bench_type}_speedup.png'
        plt.tight_layout()
        plt.savefig(output_dir / filename, dpi=150, bbox_inches='tight')
        plt.close()
        print(f"Generated: {filename}")


def plot_sorted_vs_unsorted_comparison(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """
    Plot direct comparison between sorted and unsorted insertion for different orders.
    """
    # Separate sorted and unsorted data
    sorted_data = metrics.get('BM_grove_creation_sorted', [])
    unsorted_data = metrics.get('BM_grove_creation_unsorted', [])

    if not sorted_data or not unsorted_data:
        print("Warning: Missing sorted or unsorted data for comparison")
        return

    # Organize data by size and order
    sorted_by_size_order = {}
    unsorted_by_size_order = {}

    for size, order, time_us, _ in sorted_data:
        sorted_by_size_order[(size, order)] = time_us

    for size, order, time_us, _ in unsorted_data:
        unsorted_by_size_order[(size, order)] = time_us

    # Get all unique sizes and orders
    all_sizes = sorted(set(size for size, _ in sorted_by_size_order.keys()))

    # Create one plot per dataset size
    for size in all_sizes:
        fig, ax = plt.subplots(figsize=(12, 8))

        orders_sorted = []
        times_sorted = []
        orders_unsorted = []
        times_unsorted = []

        for (s, order), time_us in sorted(sorted_by_size_order.items()):
            if s == size:
                orders_sorted.append(order)
                times_sorted.append(time_us)

        for (s, order), time_us in sorted(unsorted_by_size_order.items()):
            if s == size:
                orders_unsorted.append(order)
                times_unsorted.append(time_us)

        ax.plot(orders_sorted, times_sorted, marker='o', linewidth=2.5, markersize=10,
               label='Sorted insertion', color='#2ecc71', linestyle='-')
        ax.plot(orders_unsorted, times_unsorted, marker='s', linewidth=2.5, markersize=10,
               label='Unsorted insertion', color='#e74c3c', linestyle='--')

        ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
        ax.set_ylabel('Time (μs, log scale)', fontsize=12, fontweight='bold')
        ax.set_yscale('log')
        ax.set_title(f'Sorted vs Unsorted Insertion - {size} intervals',
                    fontsize=14, fontweight='bold')

        ax.legend(fontsize=11, loc='best')
        ax.grid(True, alpha=0.3, which='both')

        # Save plot
        filename = f'sorted_vs_unsorted_size_{size}.png'
        plt.tight_layout()
        plt.savefig(output_dir / filename, dpi=150, bbox_inches='tight')
        plt.close()
        print(f"Generated: {filename}")


def plot_sorted_speedup(metrics: Dict[str, List[Tuple]], output_dir: Path):
    """
    Plot speedup factor of sorted insertion compared to unsorted.
    Shows how much faster sorted insertion is.
    """
    # Separate sorted and unsorted data
    sorted_data = metrics.get('BM_grove_creation_sorted', [])
    unsorted_data = metrics.get('BM_grove_creation_unsorted', [])

    if not sorted_data or not unsorted_data:
        print("Warning: Missing sorted or unsorted data for speedup comparison")
        return

    # Organize data by size and order
    sorted_by_size_order = {}
    unsorted_by_size_order = {}

    for size, order, time_us, _ in sorted_data:
        sorted_by_size_order[(size, order)] = time_us

    for size, order, time_us, _ in unsorted_data:
        unsorted_by_size_order[(size, order)] = time_us

    # Group by size
    by_size = defaultdict(list)

    for (size, order), unsorted_time in unsorted_by_size_order.items():
        sorted_time = sorted_by_size_order.get((size, order))
        if sorted_time and sorted_time > 0:
            speedup = unsorted_time / sorted_time
            by_size[size].append((order, speedup))

    # Create plot
    fig, ax = plt.subplots(figsize=(12, 8))

    for size in sorted(by_size.keys()):
        points = sorted(by_size[size])  # Sort by order
        orders = [p[0] for p in points]
        speedups = [p[1] for p in points]
        ax.plot(orders, speedups, marker='o', linewidth=2, markersize=8,
               label=f'{size} intervals')

    # Add horizontal line at y=1 (no speedup)
    ax.axhline(y=1.0, color='gray', linestyle='--', linewidth=1.5, alpha=0.7,
              label='No speedup (equal performance)')

    ax.set_xlabel('Order (k)', fontsize=12, fontweight='bold')
    ax.set_ylabel('Speedup Factor (Sorted vs Unsorted)', fontsize=12, fontweight='bold')
    ax.set_title('Sorted Insertion Speedup vs Unsorted', fontsize=14, fontweight='bold')

    ax.legend(title='Dataset Size', fontsize=10, title_fontsize=11)
    ax.grid(True, alpha=0.3)

    # Save plot
    filename = 'sorted_insertion_speedup.png'
    plt.tight_layout()
    plt.savefig(output_dir / filename, dpi=150, bbox_inches='tight')
    plt.close()
    print(f"Generated: {filename}")


def generate_html_index(output_dir: Path, metrics: Dict[str, List[Tuple]]):
    """Generate an HTML index page to view all plots."""
    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Genogrove Benchmark Visualizations</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 1400px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        h1 {
            color: #2c3e50;
            border-bottom: 3px solid #3498db;
            padding-bottom: 10px;
        }
        h2 {
            color: #34495e;
            margin-top: 40px;
            border-bottom: 2px solid #95a5a6;
            padding-bottom: 5px;
        }
        .plot-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
            gap: 30px;
            margin: 30px 0;
        }
        .plot-container {
            background: white;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .plot-container img {
            width: 100%;
            height: auto;
            border-radius: 4px;
        }
        .plot-container h3 {
            margin-top: 0;
            color: #2c3e50;
            font-size: 1.1em;
        }
        .description {
            background: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #3498db;
        }
        footer {
            margin-top: 50px;
            padding-top: 20px;
            border-top: 1px solid #ddd;
            text-align: center;
            color: #7f8c8d;
        }
    </style>
</head>
<body>
    <h1>🧬 Genogrove Benchmark Visualizations</h1>

    <div class="description">
        <p><strong>Overview:</strong> These visualizations compare the performance of the genogrove B+ tree
        implementation across different <em>order</em> values (node capacity parameter). Each plot provides
        a different perspective on how the order affects performance.</p>

        <p><strong>Tested configurations:</strong></p>
        <ul>
            <li><strong>Orders:</strong> 2, 5, 10, 15, 20, 25, 30</li>
            <li><strong>Dataset sizes:</strong> 100, 500, 1000, 5000 intervals</li>
            <li><strong>Insertion modes:</strong> Sorted and unsorted</li>
        </ul>

        <p><strong>Plot types:</strong></p>
        <ul>
            <li><strong>Time vs Order:</strong> Shows how execution time changes with different order values
            for each dataset size. Lower is better.</li>
            <li><strong>Time vs Size:</strong> Shows how execution time scales with dataset size, with
            separate lines for each order value. Helps identify optimal order for different scales.</li>
            <li><strong>Throughput:</strong> Measures items processed per second. Higher is better.</li>
            <li><strong>Speedup Factor:</strong> Shows relative performance compared to baseline order (order=2).
            Values > 1 indicate improvement.</li>
        </ul>

        <p style="margin-top: 20px;">
            📊 <a href="../dev/bench/">View historical benchmark trends</a> (time-series data)
        </p>
    </div>
"""

    # Add plots for each benchmark type
    for bench_type in sorted(metrics.keys()):
        title_name = bench_type.replace('BM_grove_creation_', '').replace('_', ' ').title()
        html_content += f"\n    <h2>{title_name} Insertion</h2>\n"
        html_content += '    <div class="plot-grid">\n'

        plot_types = [
            ('time_vs_order', 'Time vs Order'),
            ('time_vs_size', 'Time vs Size'),
            ('throughput', 'Throughput Comparison'),
            ('speedup', 'Speedup Factor')
        ]

        for suffix, title in plot_types:
            filename = f'{bench_type}_{suffix}.png'
            html_content += f"""        <div class="plot-container">
            <h3>{title}</h3>
            <img src="{filename}" alt="{title}">
        </div>
"""

        html_content += '    </div>\n'

    # Add sorted vs unsorted comparison section
    if 'BM_grove_creation_sorted' in metrics and 'BM_grove_creation_unsorted' in metrics:
        html_content += '\n    <h2>Sorted vs Unsorted Comparison</h2>\n'
        html_content += '    <div class="plot-grid">\n'

        # Add overall speedup plot
        html_content += """        <div class="plot-container">
            <h3>Sorted Insertion Speedup</h3>
            <img src="sorted_insertion_speedup.png" alt="Sorted Insertion Speedup">
        </div>
"""

        # Add per-size comparison plots
        all_sizes = sorted(set(size for size, _, _, _ in metrics['BM_grove_creation_sorted']))
        for size in all_sizes:
            html_content += f"""        <div class="plot-container">
            <h3>Direct Comparison - {size} intervals</h3>
            <img src="sorted_vs_unsorted_size_{size}.png" alt="Sorted vs Unsorted - {size} intervals">
        </div>
"""

        html_content += '    </div>\n'

    html_content += """
    <footer>
        <p>Generated by genogrove continuous benchmarking •
        <a href="https://github.com/genogrove/genogrove">GitHub Repository</a></p>
    </footer>
</body>
</html>
"""

    index_file = output_dir / 'index.html'
    with open(index_file, 'w') as f:
        f.write(html_content)

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

    # Create output directory
    output_dir.mkdir(parents=True, exist_ok=True)

    print(f"Reading benchmark results from: {json_file}")
    print(f"Output directory: {output_dir}")
    print()

    # Parse results
    data = parse_benchmark_results(json_file)
    metrics = extract_metrics(data)

    print(f"Found {len(metrics)} benchmark types:")
    for bench_type, data_points in metrics.items():
        print(f"  - {bench_type}: {len(data_points)} data points")
    print()

    # Generate all plots
    print("Generating visualizations...")
    plot_time_vs_order(metrics, output_dir)
    plot_time_vs_size(metrics, output_dir)
    plot_throughput_comparison(metrics, output_dir)
    plot_speedup_factor(metrics, output_dir)

    # Generate sorted vs unsorted comparison plots
    print("\nGenerating sorted vs unsorted comparisons...")
    plot_sorted_vs_unsorted_comparison(metrics, output_dir)
    plot_sorted_speedup(metrics, output_dir)

    # Generate HTML index
    generate_html_index(output_dir, metrics)

    print("\n✅ All visualizations generated successfully!")


if __name__ == '__main__':
    main()
