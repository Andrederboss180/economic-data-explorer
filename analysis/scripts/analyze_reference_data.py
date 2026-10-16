"""Descriptive statistics from the frozen CSV; no network or dependencies."""

from __future__ import annotations

import csv
import math
from pathlib import Path

from fetch_world_bank_data import COUNTRIES, INDICATORS, REFERENCE_CSV


RESULTS_CSV = REFERENCE_CSV.parents[1] / "results" / "analysis_results.csv"
PERIODS = ((2000, 2024), (2000, 2019))


def read_reference(path: Path) -> dict[str, dict[int, tuple[float | None, float | None]]]:
    """Keep unemployment (x) and inflation (y) paired by country and year."""
    observations = {code: {} for code in COUNTRIES}
    required = {
        "country_code", "country_name", "year", "unemployment_pct",
        "inflation_pct", "unemployment_indicator", "inflation_indicator",
    }
    with path.open(encoding="utf-8", newline="") as source:
        reader = csv.DictReader(source)
        if not required.issubset(reader.fieldnames or []):
            raise ValueError("Reference CSV is missing required columns")
        for row in reader:
            code = row["country_code"]
            if code not in COUNTRIES or row["country_name"] != COUNTRIES[code]:
                raise ValueError("Unexpected country in reference CSV")
            for key in ("inflation", "unemployment"):
                if row[f"{key}_indicator"] != INDICATORS[key]["code"]:
                    raise ValueError(f"Wrong {key} indicator")
            year = int(row["year"])
            if not 2000 <= year <= 2024:
                raise ValueError(f"Unexpected year: {year}")
            if year in observations[code]:
                raise ValueError(f"Duplicate country-year: {code} {year}")
            values = []
            for field in ("unemployment_pct", "inflation_pct"):
                text = row[field].strip()
                value = float(text) if text else None
                if value is not None and not math.isfinite(value):
                    raise ValueError(f"Non-finite {field}: {code} {year}")
                values.append(value)
            observations[code][year] = tuple(values)
    return observations


def calculate_statistics(pairs: list[tuple[float, float]]) -> dict:
    """OLS of y on x and Pearson r, using centered sums for clarity."""
    n = len(pairs)
    result = {
        "n": n, "pearson_r": None, "intercept_alpha": None, "slope_beta": None,
        "pearson_status": "insufficient_observations",
        "regression_status": "insufficient_observations",
    }
    if n < 2:
        return result
    x, y = zip(*pairs)
    # Check equality directly: averaging constants such as 0.1 can round.
    if min(x) == max(x):
        result.update(pearson_status="constant_unemployment",
                      regression_status="constant_unemployment")
        return result
    if min(y) == max(y):
        result.update(slope_beta=0.0, intercept_alpha=y[0],
                      pearson_status="constant_inflation", regression_status="ok")
        return result
    mean_x, mean_y = math.fsum(x) / n, math.fsum(y) / n
    xx = math.fsum((value - mean_x) ** 2 for value in x)
    yy = math.fsum((value - mean_y) ** 2 for value in y)
    xy = math.fsum((a - mean_x) * (b - mean_y) for a, b in pairs)
    beta = xy / xx
    result.update(slope_beta=beta, intercept_alpha=mean_y - beta * mean_x,
                  regression_status="ok")
    result.update(pearson_r=max(-1.0, min(1.0, xy / math.sqrt(xx * yy))),
                  pearson_status="ok")
    return result


def analyze_period(observations: dict, start: int, end: int) -> dict:
    """Exclude incomplete pairs, report absent rows separately, never impute."""
    pairs, missing_years, incomplete_years = [], [], []
    for year in range(start, end + 1):
        if year not in observations:
            missing_years.append(year)
        elif None in observations[year]:
            incomplete_years.append(year)
        else:
            pairs.append(observations[year])
    return {
        "start_year": start, "end_year": end,
        "missing_years": ";".join(map(str, missing_years)),
        "incomplete_years": ";".join(map(str, incomplete_years)),
        "n_excluded": len(missing_years) + len(incomplete_years),
        **calculate_statistics(pairs),
    }


def build_results(path: Path = REFERENCE_CSV) -> list[dict]:
    observations = read_reference(path)
    return [
        {"country_code": code, "country_name": name,
         **analyze_period(observations[code], start, end)}
        for code, name in COUNTRIES.items()
        for start, end in PERIODS
    ]


def main() -> None:
    results = build_results()
    RESULTS_CSV.parent.mkdir(parents=True, exist_ok=True)
    with RESULTS_CSV.open("w", encoding="utf-8", newline="") as output:
        writer = csv.DictWriter(output, fieldnames=list(results[0]), lineterminator="\n")
        writer.writeheader()
        writer.writerows(results)  # None becomes an empty cell, never a zero.
    print(f"Saved {len(results)} country-period results to {RESULTS_CSV}")
    for row in results:
        print(f"{row['country_code']} {row['start_year']}-{row['end_year']}: "
              f"n={row['n']}, r={row['pearson_r']}, beta={row['slope_beta']}")


if __name__ == "__main__":
    main()
