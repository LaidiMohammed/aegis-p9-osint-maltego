# AEGIS — P9 — Comparaison d'outils OSINT (WHOIS/DNS/Hunter)

[![Vercel](https://img.shields.io/badge/Vercel-aegis-p9--blue?logo=vercel)](https://aegis-p9-osint-maltego.vercel.app)
[![Tests](https://img.shields.io/badge/Tests-passing-brightgreen)]

Comparaison d'outils OSINT (WHOIS/DNS/Hunter) — PFE P13 style AEGIS (Master 1 Sécurité informatique).

## Infos rapides

| Élément | Valeur |
|---|---|
| **GitHub** | https://github.com/LaidiMohammed/aegis-p9-osint-maltego |
| **Vercel** | https://aegis-p9-osint-maltego.vercel.app |
| **Stacks** | whois, dnspython, requests, reportlab |
| **Type** | fg |
| **Ethique** | Labo local, anti-GPU, anti-cloud, stand-alone |

## Install

```bash
pip install -r requirements.txt
make install  # (venv)
```

## Smoke & tests (démo à la prof)

```bash
make smoke   # ou: scripts/run_smoke.sh
make test
```

## Fonctions à exécuter à la démo

Voir [`docs/ETHICS.md`](docs/ETHICS.md), [`docs/SPEC.md`](docs/SPEC.md).
