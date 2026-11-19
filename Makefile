#!/bin/bash
.PHONY: install test lint demo
V := $(shell if [ -d .venv ]; then echo .venv/bin/python; else echo python3; fi)

install: venv

venv: python3 -m venv .venv && .venv/bin/pip install -r requirements.txt

test: $(shell echo .venv/bin/pytest -q)

# Smoke test — sortie simple pour le prof
smoke: $(shell echo .venv/bin/python) scripts/run_smoke.py

demo: install smoke
