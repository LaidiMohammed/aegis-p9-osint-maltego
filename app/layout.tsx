import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
const displayFont = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-display", display: "swap" });
const monoFont = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });
import "./globals.css";

export const metadata: Metadata = {
  title: "P13 / ZERO-DAY — Dossier d'analyse Traversal",
  description:
    "P13 — Détection et caractérisation du Path Traversal (CWE-22) dans Juice Shop. Laboratoire local autorisé, zéro GPU, zéro production.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${displayFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
