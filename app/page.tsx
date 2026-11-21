import Console from "@/components/Console";
import Reveal from "@/components/Reveal";

export default function Page() {
  return (
    <main className="scan-grid min-h-screen bg-cream">
      <nav className="sticky top-0 z-40 border-b border-navy/15 bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center border-2 border-navy font-mono text-xs font-bold">P9</span>
            <span className="coord text-navy/70">OSINT ATLAS</span>
          </a>
          <div className="hidden gap-7 md:flex">
            <a href="#scan" className="coord text-navy/55 hover:text-[#2f6f7e]">Scan</a>
            <a href="#demo" className="coord text-navy/55 hover:text-[#2f6f7e]">Démo</a>
            <a href="#ethique" className="coord text-navy/55 hover:text-[#2f6f7e]">Éthique</a>
          </div>
          <a href="https://github.com/LaidiMohammed/aegis-p9-osint-maltego" target="_blank" rel="noreferrer" className="border border-navy/40 px-3 py-1.5 font-mono text-[11px] hover:bg-navy hover:text-cream">GitHub ↗</a>
        </div>
      </nav>
      <section id="top" className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:py-20">
        <div>
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-[#2f6f7e]" />
              <span className="coord text-[#2f6f7e]">Fiche technique · P9</span>
            </div>
          </Reveal>
          <Reveal delay={70}>
            <h1 className="text-5xl font-bold leading-[1.02] sm:text-6xl">
              OSINT ATLAS<br />
              <span className="text-[#2f6f7e] italic">Cartographie</span>
            </h1>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-navy/75">
              Module réalisé selon la fiche technique du projet P9. Analyse locale, laboratoire isolé, 0 GPU.
            </p>
          </Reveal>
          <Reveal delay={210}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#scan" className="border border-[#2f6f7e] bg-[#2f6f7e] px-6 py-3 font-mono text-xs font-bold uppercase tracking-widest text-cream hover:bg-white hover:text-[#2f6f7e]">
                Lancer l'analyse ↓
              </a>
              <a href="#demo" className="rounded border border-[#2f6f7e] px-6 py-3 font-mono text-xs uppercase tracking-widest text-navy/60 hover:border-[#2f6f7e]">
                Démonstration
              </a>
            </div>
          </Reveal>
          <Reveal delay={280}>
            <div className="mt-10 grid grid-cols-4 gap-4 border-t border-navy/20 pt-6">
              {["01", "module"].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold text-navy">{n}</div>
                  <div className="coord text-navy/40">{l}</div>
                </div>
              ))}
              {["02", "fonction"].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold text-navy">{n}</div>
                  <div className="coord text-navy/40">{l}</div>
                </div>
              ))}
              {["03", "API route"].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold text-navy">{n}</div>
                  <div className="coord text-navy/40">{l}</div>
                </div>
              ))}
              {["00", "GPU"].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-2xl font-bold text-navy">{n}</div>
                  <div className="coord text-navy/40">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <Console />
        </Reveal>
      </section>
      <section id="demo" className="mx-auto max-w-7xl px-5 py-14">
        <Reveal>
          <span className="coord text-[#2f6f7e]">01 / Démonstration</span>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Commandes</h2>
        </Reveal>
        <div className="mt-8 space-y-2 rounded-xl border border-navy/20 bg-white/60 p-5 font-mono text-[12px]">
          {["python -m src.osint_maltego_main --json", "python -m src.generate_report --pdf outputs/rapport.pdf"].map((c, i) => (
            <div key={i} className="rounded border border-[#2f6f7e]/30 bg-white/50 px-4 py-3 text-navy">
              <span className="text-[#2f6f7e]">$</span> {c}
            </div>
          ))}
        </div>
      </section>
      <section id="ethique" className="mx-auto max-w-7xl px-5 py-14">
        <Reveal>
          <span className="coord text-[#2f6f7e]">02 / Éthique</span>
          <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Cadre du projet</h2>
        </Reveal>
        <div className="mt-6 rounded-xl border-l-2 border-[#2f6f7e] bg-white/50 p-6">
          <p className="text-sm leading-relaxed text-navy/70">
            Analyse locale uniquement. Aucun envoi de données vers des services distants. Stand-alone, anti-GPU, anti-cloud.
          </p>
        </div>
      </section>
      <footer className="border-t border-navy bg-navy text-cream">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-10">
          <div>
            <div className="font-display text-2xl font-bold">
              P9 <span className="text-[#2f6f7e] italic">/OSINT ATLAS</span>
            </div>
            <div className="coord mt-1 text-cream/50">Master 1 PFE · Laidi Mohammed · 2026</div>
          </div>
          <div className="flex gap-5 font-mono text-xs text-cream/70">
            <a href="https://github.com/LaidiMohammed/aegis-p9-osint-maltego" target="_blank" rel="noreferrer" className="hover:text-[#2f6f7e]">
              GitHub ↗
            </a>
            <a href="https://aegis-p9-osint-maltego.vercel.app" className="hover:text-[#2f6f7e]">
              Vercel ↗
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
