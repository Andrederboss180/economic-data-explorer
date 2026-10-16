"""Lightweight standard-library tests for World Bank response validation."""

from __future__ import annotations

import sys
import unittest
from decimal import Decimal
from pathlib import Path


SCRIPTS_DIRECTORY = Path(__file__).resolve().parents[1] / "scripts"
sys.path.insert(0, str(SCRIPTS_DIRECTORY))

import fetch_world_bank_data as fetch  # noqa: E402


def valid_payload() -> list[object]:
    """Return a minimal complete 2000-2024 response shaped like the API."""

    observations = []
    for year in range(fetch.START_YEAR, fetch.END_YEAR + 1):
        observations.append(
            {
                "indicator": {
                    "id": "FP.CPI.TOTL.ZG",
                    "value": "Inflation, consumer prices (annual %)",
                },
                "country": {"id": "DE", "value": "Germany"},
                "countryiso3code": "DEU",
                "date": str(year),
                "value": None if year == 2005 else Decimal("1.25"),
            }
        )
    return [
        {
            "page": 1,
            "pages": 1,
            "per_page": 100,
            "total": len(observations),
            "lastupdated": "2026-10-08",
        },
        observations,
    ]


class ValidationTests(unittest.TestCase):
    def test_complete_payload_records_null_without_replacing_it(self) -> None:
        payload = valid_payload()
        metadata, values, null_years, indicator_name = fetch.validate_payload(
            payload,
            "DEU",
            "Germany",
            "FP.CPI.TOTL.ZG",
            "test-url",
        )

        self.assertEqual(metadata["total"], 25)
        self.assertEqual(len(values), 25)
        self.assertIsNone(values[2005])
        self.assertEqual(null_years, [2005])
        self.assertEqual(indicator_name, "Inflation, consumer prices (annual %)")

    def test_duplicate_year_is_rejected(self) -> None:
        payload = valid_payload()
        payload[1].append(dict(payload[1][0]))
        payload[0]["total"] += 1

        with self.assertRaisesRegex(fetch.DataRetrievalError, "Duplicate"):
            fetch.validate_payload(
                payload, "DEU", "Germany", "FP.CPI.TOTL.ZG", "test-url"
            )

    def test_missing_year_record_is_rejected(self) -> None:
        payload = valid_payload()
        payload[1].pop()
        payload[0]["total"] -= 1

        with self.assertRaisesRegex(fetch.DataRetrievalError, "Missing year"):
            fetch.validate_payload(
                payload, "DEU", "Germany", "FP.CPI.TOTL.ZG", "test-url"
            )

    def test_wrong_indicator_is_rejected(self) -> None:
        payload = valid_payload()
        payload[1][0]["indicator"]["id"] = "WRONG.CODE"

        with self.assertRaisesRegex(fetch.DataRetrievalError, "Wrong indicator"):
            fetch.validate_payload(
                payload, "DEU", "Germany", "FP.CPI.TOTL.ZG", "test-url"
            )

    def test_invalid_json_is_rejected(self) -> None:
        with self.assertRaisesRegex(fetch.DataRetrievalError, "Invalid JSON"):
            fetch.parse_json(b"not json", "test-url")

    def test_url_contains_expected_parameters(self) -> None:
        url = fetch.build_url("DEU", "FP.CPI.TOTL.ZG")

        self.assertIn("country/DEU/indicator/FP.CPI.TOTL.ZG", url)
        self.assertIn("format=json", url)
        self.assertIn("date=2000:2024", url)
        self.assertIn("per_page=100", url)


if __name__ == "__main__":
    unittest.main()
