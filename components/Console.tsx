"use client";
import { useState } from "react";

export default function Console() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function launch() {
    setLoading(true);
    setData(null);
    const body: any = {};
    body.domain = (document.getElementById("domain") as HTMLInputElement).value;
    try {
      const res = await fetch("/api/compare", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setData(await res.json());
    } catch {
      setData(null);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bracket cut-card scanlines overflow-hidden">
      <div className="flex items-center justify-between border-b border-slate-700/50 px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-signal" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan" />
          <span className="ml-3 font-mono text-xs text-mist">POST /api/compare — backend réel</span>
        </div>
        <span className="tag text-slate-500">P9 engine</span>
      </div>
      <div className="p-5">
        <label className="tag mb-2 block text-cyan">Saisie</label>
        <div className="mb-3">
          <label className="coord text-slate-500 block mb-1">Domaine</label>
          <input
            type="text"
            name="domain"
            id="domain"
            value="example.com"
            className="w-full border border-slate-700 bg-black/40 p-3 font-mono text-[12px] text-slate-200 outline-none focus:border-cyan"
          />
        </div>
        <button
          onClick={launch}
          disabled={loading}
          className="mt-4 w-full bg-signal px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-ink disabled:opacity-50"
          style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
        >
          {loading ? "Analyse serveur en cours…" : "▶ Lancer l'analyse"}
        </button>
        {data && (
          <div className="mt-5 border-t border-slate-700/50 pt-4">
            <div className="mb-3 font-mono text-sm text-slate-300">
              [SUMMARY] P9 — {JSON.stringify(data).slice(0, 120)}…
            </div>
            <pre className="mt-2 overflow-x-auto p-3 font-mono text-[11px] text-slate-300 bg-black/30 rounded">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
