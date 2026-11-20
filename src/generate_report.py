"""generate_report.py — Génère le PDF du rapport P9 — Comparaison OSINT (AEGIS).

Contenu : résultats WHOIS/DNS, comparaison d'outils, recommandations, export PDF pro.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path


def build_markdown(data: dict) -> str:
    """Construit le contenu Markdown du rapport P9."""
    summary = data.get("analysis", {})
    whois = data.get("whois", {})
    dns_a = data.get("dns_a", [])
    dns_mx = data.get("dns_mx", [])

    lines = [
        "# P9 — Comparaison d'outils OSINT (WHOIS/DNS/Hunter) — AEGIS",
        "",
        f"- **Domaine analysé :** `{data.get('domain', '-')}`",
        f"- **WHOIS data disponible :** {summary.get('has_whois_data', False)}",
        f"- **DNS A records :** {summary.get('has_dns_a', False)} ({len(dns_a)} IP(s))",
        f"- **DNS MX records :** {summary.get('has_dns_mx', False)} ({len(dns_mx)} hôte(s))",
        f"- **Nombre d'IP uniques :** {summary.get('ip_count', 0)}",
        "",
        "## 1. Résultats WHOIS",
        "",
    ]
    if whois.get("created"):
        lines += [
            f"- **Créé le :** {whois.get('created')}",
            f"- **Mis à jour le :** {whois.get('updated')}",
            f"- **Expire le :** {whois.get('expires')}",
            f"- **Registrar :** {whois.get('registrar', 'N/A')}",
        ]
    else:
        lines += ["- Aucune donnée WHOIS disponible (environnement laboratoire)"]

    lines += [
        "",
        "## 2. Résultats DNS",
        "",
        "### Enregistrements A",
        "",
    ]
    if dns_a:
        for ip in dns_a[:10]:
            lines.append(f"- `{ip}`")
    else:
        lines.append("- Aucun enregistrement A trouvé")

    lines += [
        "",
        "### Enregistrements MX",
        "",
    ]
    if dns_mx:
        for mx in dns_mx[:10]:
            lines.append(f"- `{mx}`")
    else:
        lines.append("- Aucun enregistrement MX trouvé")

    lines += [
        "",
        "## 3. Recommandations",
        "",
    ]
    for rec in data.get("recommendations", []):
        lines.append(f"- {rec}")

    lines += [
        "",
        "## 4. Outils de comparaison",
        "",
        "| Outil | Type | Résultat |",
        "|---|---|---|",
        "| WHOIS | Registre | Domain créé/expire/registrar |",
        "| DNS | Résolution | Enregistrements A/MX |",
        "| Hunter | Recherche | Recherche d'emails/preuves |",
    ] if not dns_a else "| Maltego | Visualisation | Graphe de domaine |",

    lines += [
        "",
        f"## 5. Exécutions à montrer au prof :",
        f"- `python -m src.osint_maltego_main --domain example.com --save-json outputs/results.json --pdf outputs/rapport-p9.pdf`",
        f"- `python -m src.osint_maltego_main --domain test.com --json`",
    ]

    return "\n".join(lines)


def build_pdf(markdown: str, out_path: Path) -> None:
    """Génère le PDF à partir du contenu Markdown."""
    from reportlab.lib.pagesizes import LETTER
    from reportlab.lib.styles import getSampleStyleSheet
    from reportlab.lib.units import inch
    from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer

    def esc(t: str) -> str:
        return t.replace("&", "&").replace("<", "<").replace(">", ">")

    out_path.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(str(out_path), pagesize=LETTER, topMargin=0.5 * inch,
                            bottomMargin=0.5 * inch, leftMargin=0.75 * inch, rightMargin=0.75 * inch)
    styles = getSampleStyleSheet()
    story = []
    for line in markdown.split("\n"):
        if not line.strip():
            story.append(Spacer(1, 6))
            continue
        if line.startswith("# "):
            story.append(Paragraph(esc(line[2:]), styles["h1"]))
        elif line.startswith("## "):
            story.append(Paragraph(esc(line[3:]), styles["h2"]))
        else:
            story.append(Paragraph(esc(line), styles["Normal"]))
    doc.build(story)
    print(f"[OK] PDF écrit : {out_path} ({out_path.stat().st_size} octets)")


def main(argv: list[str] | None = None) -> int:
    ap = argparse.ArgumentParser(prog="generate_report", description="Génère le rapport P9 — Comparaison OSINT")
    ap.add_argument("--json", type=Path, default=None, help="Fichier JSON du résultat d'analyse")
    ap.add_argument("--pdf", type=Path, default=Path("outputs/rapport-p9.pdf"), help="Chemin du PDF")
    args = ap.parse_args(argv)

    data = json.loads(args.json.read_text(encoding="utf-8")) if args.json else {
        "project": "P9",
        "domain": "n/a",
        "whois": {"note": "Aucune donnée"},
        "dns_a": [],
        "dns_mx": [],
        "analysis": {"has_whois_data": False, "has_dns_a": False, "has_dns_mx": False, "ip_count": 0},
        "recommendations": []
    }

    md = build_markdown(data)
    args.pdf.parent.mkdir(parents=True, exist_ok=True)
    (args.pdf.parent / "report.md").write_text(md, encoding="utf-8")
    build_pdf(md, args.pdf)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())