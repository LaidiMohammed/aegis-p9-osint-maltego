"""Smoke tests de base — make test."""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from src import osint_maltego_main


def test_smoke_structure():
    out = osint_maltego_main.smoke("x", "y")
    assert out["ok"] is True


def test_main_returns_0():
    assert osint_maltego_main.main([]) == 0


def test_main_json_output():
    import contextlib, io, json
    with contextlib.redirect_stdout(io.StringIO()) as buf:
        assert osint_maltego_main.main(["--json"]) == 0
    data = json.loads(buf.getvalue())
    assert data["project"] == "P9"
