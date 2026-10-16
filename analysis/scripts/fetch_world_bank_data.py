"""Fetch and validate the World Bank reference data for this project.

The script uses only Python's standard library. It stores the six original
JSON responses unchanged, writes one combined CSV, and records provenance and
validation details next to the raw snapshot.
"""

from __future__ import annotations

import csv
import hashlib
import json
import sys
from dataclasses import dataclass
from datetime import datetime, timezone
from decimal import Decimal
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen


COUNTRIES = {
    "DEU": "Germany",
    "FRA": "France",
    "ESP": "Spain",
}

INDICATORS = {
    "inflation": {
        "code": "FP.CPI.TOTL.ZG",
        "name": "Inflation, consumer prices (annual %)",
        "definition": (
            "Annual percentage change in consumer prices for a basket of "
            "goods and services."
        ),
        "source_url": "https://data.worldbank.org/indicator/FP.CPI.TOTL.ZG",
    },
    "unemployment": {
        "code": "SL.UEM.TOTL.ZS",
        "name": (
            "Unemployment, total (% of total labor force) "
            "(modeled ILO estimate)"
        ),
        "definition": (
            "Share of the labor force without work but available for and "
            "seeking employment; modeled ILO estimate."
        ),
        "source_url": "https://data.worldbank.org/indicator/SL.UEM.TOTL.ZS",
    },
}

START_YEAR = 2000
END_YEAR = 2024
EXPECTED_YEARS = set(range(START_YEAR, END_YEAR + 1))
BASE_URL = "https://api.worldbank.org/v2/country"
TIMEOUT_SECONDS = 30

REPOSITORY_ROOT = Path(__file__).resolve().parents[2]
RAW_DIRECTORY = REPOSITORY_ROOT / "data" / "raw"
REFERENCE_DIRECTORY = REPOSITORY_ROOT / "data" / "reference"
REFERENCE_CSV = REFERENCE_DIRECTORY / "reference_2000_2024.csv"
METADATA_FILE = RAW_DIRECTORY / "world_bank_2000_2024_metadata.json"


class DataRetrievalError(RuntimeError):
    """Raised when an API response cannot be safely used."""


@dataclass
class ValidatedSeries:
    """One validated country-indicator response and its original bytes."""

    country_code: str
    country_name: str
    indicator_key: str
    indicator_code: str
    indicator_name: str
    url: str
    http_status: int
    raw_bytes: bytes
    metadata: dict[str, Any]
    values_by_year: dict[int, Decimal | None]
    null_years: list[int]


def build_url(country_code: str, indicator_code: str) -> str:
    """Build one explicit World Bank Indicators API URL."""

    query = urlencode(
        {
            "format": "json",
            "date": f"{START_YEAR}:{END_YEAR}",
            "per_page": 100,
        },
        safe=":",
    )
    return f"{BASE_URL}/{country_code}/indicator/{indicator_code}?{query}"


def parse_json(raw_bytes: bytes, url: str) -> Any:
    """Parse JSON while retaining decimal values without float rounding."""

    try:
        text = raw_bytes.decode("utf-8")
        return json.loads(text, parse_float=Decimal)
    except (UnicodeDecodeError, json.JSONDecodeError) as error:
        raise DataRetrievalError(f"Invalid JSON response from {url}: {error}") from error


def validate_payload(
    payload: Any,
    country_code: str,
    country_name: str,
    indicator_code: str,
    url: str,
) -> tuple[dict[str, Any], dict[int, Decimal | None], list[int], str]:
    """Validate structure, identity, years, duplicates, values and coverage."""

    if not isinstance(payload, list) or len(payload) != 2:
        raise DataRetrievalError(f"Unexpected top-level JSON structure from {url}")

    metadata, observations = payload
    if not isinstance(metadata, dict) or not isinstance(observations, list):
        raise DataRetrievalError(f"Missing metadata or observation list in {url}")

    if metadata.get("page") != 1 or metadata.get("pages") != 1:
        raise DataRetrievalError(f"Unexpected pagination metadata in {url}: {metadata}")
    if metadata.get("total") != len(observations):
        raise DataRetrievalError(
            f"Metadata total does not match observation count in {url}"
        )

    values_by_year: dict[int, Decimal | None] = {}
    null_years: list[int] = []
    indicator_name = ""

    for observation in observations:
        if not isinstance(observation, dict):
            raise DataRetrievalError(f"Non-object observation in {url}")

        if observation.get("countryiso3code") != country_code:
            raise DataRetrievalError(f"Wrong country code in {url}")

        country = observation.get("country")
        if not isinstance(country, dict) or country.get("value") != country_name:
            raise DataRetrievalError(f"Wrong country name in {url}")

        indicator = observation.get("indicator")
        if not isinstance(indicator, dict) or indicator.get("id") != indicator_code:
            raise DataRetrievalError(f"Wrong indicator in {url}")
        if not indicator_name:
            indicator_name = str(indicator.get("value", ""))

        try:
            year = int(observation["date"])
        except (KeyError, TypeError, ValueError) as error:
            raise DataRetrievalError(f"Invalid year in {url}") from error

        if year not in EXPECTED_YEARS:
            raise DataRetrievalError(f"Year {year} is outside the requested range in {url}")
        if year in values_by_year:
            raise DataRetrievalError(f"Duplicate country-year entry for {year} in {url}")

        value = observation.get("value")
        if value is None:
            values_by_year[year] = None
            null_years.append(year)
        elif isinstance(value, bool) or not isinstance(value, (int, Decimal)):
            raise DataRetrievalError(f"Non-numeric value for {year} in {url}")
        else:
            values_by_year[year] = Decimal(str(value))

    missing_years = sorted(EXPECTED_YEARS - set(values_by_year))
    if missing_years:
        raise DataRetrievalError(f"Missing year records in {url}: {missing_years}")

    return metadata, values_by_year, sorted(null_years), indicator_name


def fetch_series(
    country_code: str,
    country_name: str,
    indicator_key: str,
    indicator_code: str,
) -> ValidatedSeries:
    """Fetch and validate one of the six required API responses."""

    url = build_url(country_code, indicator_code)
    request = Request(url, headers={"User-Agent": "economic-data-explorer/1.0"})

    try:
        with urlopen(request, timeout=TIMEOUT_SECONDS) as response:
            status = response.getcode()
            raw_bytes = response.read()
    except HTTPError as error:
        raise DataRetrievalError(
            f"HTTP {error.code} for {url}: {error.reason}"
        ) from error
    except (URLError, TimeoutError) as error:
        raise DataRetrievalError(f"Network error for {url}: {error}") from error

    if status != 200:
        raise DataRetrievalError(f"Unexpected HTTP status {status} for {url}")

    payload = parse_json(raw_bytes, url)
    metadata, values, null_years, api_indicator_name = validate_payload(
        payload, country_code, country_name, indicator_code, url
    )

    return ValidatedSeries(
        country_code=country_code,
        country_name=country_name,
        indicator_key=indicator_key,
        indicator_code=indicator_code,
        indicator_name=api_indicator_name,
        url=url,
        http_status=status,
        raw_bytes=raw_bytes,
        metadata=metadata,
        values_by_year=values,
        null_years=null_years,
    )


def decimal_text(value: Decimal | None) -> str:
    """Return the API precision as plain text; null stays an empty CSV cell."""

    return "" if value is None else str(value)


def raw_filename(series: ValidatedSeries) -> str:
    """Create a stable filename for one original response."""

    return (
        f"world_bank_{series.country_code}_{series.indicator_code}_"
        f"{START_YEAR}_{END_YEAR}_raw.json"
    )


def write_outputs(series_list: list[ValidatedSeries], retrieved_at: str) -> None:
    """Write original JSON, combined CSV and provenance after all checks pass."""

    RAW_DIRECTORY.mkdir(parents=True, exist_ok=True)
    REFERENCE_DIRECTORY.mkdir(parents=True, exist_ok=True)

    by_key = {
        (series.country_code, series.indicator_key): series
        for series in series_list
    }

    response_metadata = []
    for series in series_list:
        raw_path = RAW_DIRECTORY / raw_filename(series)
        raw_path.write_bytes(series.raw_bytes)
        response_metadata.append(
            {
                "country_code": series.country_code,
                "country_name": series.country_name,
                "indicator_code": series.indicator_code,
                "indicator_name_from_api": series.indicator_name,
                "url": series.url,
                "raw_file": raw_path.relative_to(REPOSITORY_ROOT).as_posix(),
                "http_status": series.http_status,
                "page": series.metadata["page"],
                "pages": series.metadata["pages"],
                "total": series.metadata["total"],
                "lastupdated": series.metadata.get("lastupdated"),
                "observation_records": len(series.values_by_year),
                "null_years": series.null_years,
                "missing_year_records": [],
                "duplicate_year_records": [],
                "validation_passed": True,
            }
        )

    fields = [
        "country_code",
        "country_name",
        "year",
        "inflation_pct",
        "unemployment_pct",
        "inflation_indicator",
        "unemployment_indicator",
        "retrieved_at",
    ]
    with REFERENCE_CSV.open("w", encoding="utf-8", newline="") as csv_file:
        writer = csv.DictWriter(csv_file, fieldnames=fields, lineterminator="\n")
        writer.writeheader()
        for country_code, country_name in COUNTRIES.items():
            inflation = by_key[(country_code, "inflation")]
            unemployment = by_key[(country_code, "unemployment")]
            for year in sorted(EXPECTED_YEARS):
                writer.writerow(
                    {
                        "country_code": country_code,
                        "country_name": country_name,
                        "year": year,
                        "inflation_pct": decimal_text(inflation.values_by_year[year]),
                        "unemployment_pct": decimal_text(
                            unemployment.values_by_year[year]
                        ),
                        "inflation_indicator": inflation.indicator_code,
                        "unemployment_indicator": unemployment.indicator_code,
                        "retrieved_at": retrieved_at,
                    }
                )

    null_observations = sum(len(series.null_years) for series in series_list)
    metadata_document = {
        "retrieved_at_utc": retrieved_at,
        "script": "analysis/scripts/fetch_world_bank_data.py",
        "script_sha256": hashlib.sha256(Path(__file__).read_bytes()).hexdigest(),
        "api": "World Bank Indicators API",
        "authentication": "No API key required",
        "period": {"start_year": START_YEAR, "end_year": END_YEAR},
        "countries": COUNTRIES,
        "indicators": INDICATORS,
        "responses": response_metadata,
        "output": {
            "combined_csv": REFERENCE_CSV.relative_to(REPOSITORY_ROOT).as_posix(),
            "country_year_rows": len(COUNTRIES) * len(EXPECTED_YEARS),
            "source_observation_records": sum(
                len(series.values_by_year) for series in series_list
            ),
            "null_observations": null_observations,
        },
        "validation": {
            "requests_expected": len(COUNTRIES) * len(INDICATORS),
            "requests_validated": len(series_list),
            "http_status_checked": True,
            "json_structure_checked": True,
            "country_indicator_year_checked": True,
            "null_values_documented": True,
            "duplicates_checked": True,
            "year_coverage_checked": True,
            "all_checks_passed": True,
        },
        "precision_note": (
            "Raw response bytes are unchanged. JSON decimals were parsed with "
            "Decimal and written to CSV as text without binary-float rounding."
        ),
    }
    METADATA_FILE.write_text(
        json.dumps(metadata_document, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )


def main() -> int:
    """Retrieve all six series, validate them, and write the snapshot."""

    retrieved_at = (
        datetime.now(timezone.utc)
        .replace(microsecond=0)
        .isoformat()
        .replace("+00:00", "Z")
    )
    series_list: list[ValidatedSeries] = []

    try:
        for country_code, country_name in COUNTRIES.items():
            for indicator_key, indicator in INDICATORS.items():
                series = fetch_series(
                    country_code,
                    country_name,
                    indicator_key,
                    indicator["code"],
                )
                series_list.append(series)
                print(
                    f"Validated {country_code} {indicator['code']}: "
                    f"{len(series.values_by_year)} records, "
                    f"{len(series.null_years)} null values, "
                    f"last updated {series.metadata.get('lastupdated')}"
                )

        write_outputs(series_list, retrieved_at)
    except DataRetrievalError as error:
        print(f"ERROR: {error}", file=sys.stderr)
        return 1

    print(f"Saved 6 original JSON responses in {RAW_DIRECTORY}")
    print(f"Saved 75 country-year rows in {REFERENCE_CSV}")
    print(f"Saved provenance and validation in {METADATA_FILE}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
