"""Known mathematical examples and a separate standard-library cross-check."""

import csv
import math
from pathlib import Path
import statistics
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
import analyze_reference_data as analysis


class StatisticsTests(unittest.TestCase):
    def assert_coefficients(self, pairs, r, beta, alpha):
        result = analysis.calculate_statistics(pairs)
        self.assertEqual(result["n"], len(pairs))
        for key, expected in (("pearson_r", r), ("slope_beta", beta),
                              ("intercept_alpha", alpha)):
            self.assertAlmostEqual(result[key], expected, places=12)

    def test_known_positive_line(self):
        self.assert_coefficients([(1, 3), (2, 5), (3, 7)], 1, 2, 1)

    def test_known_negative_line(self):
        self.assert_coefficients([(1, 5), (2, 3), (3, 1)], -1, -2, 7)

    def test_known_zero_correlation(self):
        self.assert_coefficients([(-1, 1), (0, -2), (1, 1)], 0, 0, 0)

    def test_known_nonperfect_relationship(self):
        # Means (2, 2), centered sums xx=2, yy=6, xy=3.
        self.assert_coefficients([(1, 1), (2, 1), (3, 4)],
                                 math.sqrt(3) / 2, 1.5, -1)

    def test_empty_and_single_observation(self):
        for pairs in ([], [(2, 3)]):
            result = analysis.calculate_statistics(pairs)
            self.assertIsNone(result["pearson_r"])
            self.assertIsNone(result["slope_beta"])
            self.assertIsNone(result["intercept_alpha"])
            self.assertEqual(result["regression_status"], "insufficient_observations")

    def test_constant_unemployment(self):
        for constant in (2, 0.1):
            with self.subTest(constant=constant):
                result = analysis.calculate_statistics([(constant, y) for y in (1, 2, 3)])
                self.assertIsNone(result["pearson_r"])
                self.assertIsNone(result["slope_beta"])
                self.assertEqual(result["regression_status"], "constant_unemployment")

    def test_constant_inflation_has_valid_horizontal_regression(self):
        for constant in (4, 0.1):
            with self.subTest(constant=constant):
                result = analysis.calculate_statistics([(x, constant) for x in (1, 2, 3)])
                self.assertIsNone(result["pearson_r"])
                self.assertEqual(result["pearson_status"], "constant_inflation")
                self.assertEqual(result["slope_beta"], 0)
                self.assertEqual(result["intercept_alpha"], constant)
                self.assertEqual(result["regression_status"], "ok")

    def test_period_filter_and_pairwise_missing_values(self):
        observations = {1999: (99, 99), 2000: (1, 3), 2001: (None, 5),
                        2002: (3, None), 2004: (2, 5), 2005: (99, 99)}
        result = analysis.analyze_period(observations, 2000, 2004)
        self.assertEqual(result["n"], 2)
        self.assertEqual(result["n_excluded"], 3)
        self.assertEqual(result["missing_years"], "2003")
        self.assertEqual(result["incomplete_years"], "2001;2002")
        self.assertEqual(result["slope_beta"], 2)
        self.assertEqual(result["pearson_r"], 1)


class ReferenceTests(unittest.TestCase):
    def load_rows(self, rows):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "reference.csv"
            with path.open("w", encoding="utf-8", newline="") as output:
                writer = csv.DictWriter(output, fieldnames=list(rows[0]))
                writer.writeheader()
                writer.writerows(rows)
            return analysis.read_reference(path)

    def source_rows(self):
        with analysis.REFERENCE_CSV.open(encoding="utf-8", newline="") as source:
            return list(csv.DictReader(source))

    def test_country_year_alignment_and_blank_values(self):
        rows = self.source_rows()
        rows[0]["inflation_pct"] = ""
        data = self.load_rows(list(reversed(rows)))
        self.assertIsNone(data["DEU"][2000][1])
        self.assertEqual(data["FRA"][2024][0], 7.4)
        result = analysis.analyze_period(data["DEU"], 2000, 2024)
        self.assertEqual(result["n"], 24)
        self.assertEqual(result["incomplete_years"], "2000")

    def test_duplicate_country_year_rejected(self):
        rows = self.source_rows()
        with self.assertRaisesRegex(ValueError, "Duplicate"):
            self.load_rows(rows + [rows[0]])

    def test_nonfinite_invalid_numeric_and_wrong_identity_rejected(self):
        for field, value in (("inflation_pct", "NaN"), ("inflation_pct", "inf"),
                             ("unemployment_pct", "invalid"),
                             ("inflation_indicator", "wrong"),
                             ("country_code", "wrong"), ("year", "2025")):
            with self.subTest(field=field, value=value):
                rows = self.source_rows()
                rows[0][field] = value
                with self.assertRaises(ValueError):
                    self.load_rows(rows)

    def test_real_data_against_statistics_module(self):
        # Separate CSV reading/grouping and established library functions.
        rows = self.source_rows()
        results = analysis.build_results()
        self.assertEqual(len(results), 6)
        for result in results:
            selected = [row for row in rows
                        if row["country_code"] == result["country_code"]
                        and result["start_year"] <= int(row["year"]) <= result["end_year"]
                        and row["unemployment_pct"] and row["inflation_pct"]]
            x = [float(row["unemployment_pct"]) for row in selected]
            y = [float(row["inflation_pct"]) for row in selected]
            regression = statistics.linear_regression(x, y)
            self.assertEqual(result["n"], 25 if result["end_year"] == 2024 else 20)
            self.assertEqual(result["n_excluded"], 0)
            for key, expected in (("pearson_r", statistics.correlation(x, y)),
                                  ("slope_beta", regression.slope),
                                  ("intercept_alpha", regression.intercept)):
                self.assertTrue(math.isclose(result[key], expected,
                                            rel_tol=1e-12, abs_tol=1e-12))

    def test_saved_results_match_recomputation(self):
        with analysis.RESULTS_CSV.open(encoding="utf-8", newline="") as source:
            saved = list(csv.DictReader(source))
        expected = [{key: "" if value is None else str(value)
                     for key, value in row.items()} for row in analysis.build_results()]
        self.assertEqual(saved, expected)


if __name__ == "__main__":
    unittest.main()
