#!/bin/bash
set -e
cd "$(dirname "$0")/.."
exec "$( [ -d .venv ] && echo .venv/bin/python || echo python3 )" "src/osint_maltego_main.py"
