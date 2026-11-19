# ETHICS — P9 — Comparaison d'outils OSINT (WHOIS/DNS/Hunter) (AEGIS)

Engagements éthiques du projet — stand-alone, labo local, GPU refused, anti-cloud.

- **Cible** : [AEGIS Comparaison d'outils OSINT (WHOIS/DNS/Hunter)](https://github.com/LaidiMohammed/aegis-p9-osint-maltego)
- **Périmètre** : [AEGIS Comparaison d'outils OSINT (WHOIS/DNS/Hunter)](https://aegis-p9-osint-maltego.vercel.app) — smoke + fonctions CLI.
- **GPU refused** : implementation uniquement CPU/pure Python.
- **Données locales** : sources acceptées : labo local (localhost, Juice Shop, DVWA, etc.).
- **Smoke au prof** : cmds à exécuter — voir README/scripts/run_smoke.sh.
- **Smoke clé de validation** : voir `smoke()` dans `src/osint-maltego_main.py` — doit retourner `{"ok": true, ...}`.
- **Site statique Vercel** : disponible pour la démo statique (smoke uniquement).

See SPEC.md (avec use cases + tableaux attendus).
