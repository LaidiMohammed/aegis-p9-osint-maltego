export function whoisLookup(domain: string) {
  const d = domain.toLowerCase();
  const known: Record<string, any> = {
    "example.com": { created: "1995-08-14", updated: "2023-10-01", expires: "2026-12-31", registrar: "PseudoReg", dns: ["ns1.example.com","ns2.example.com"] },
    "test.com": { created: "2020-01-01", updated: "2024-06-15", expires: "2025-01-01", registrar: "TestReg", dns: ["ns1.test.com"] },
  };
  return known[d] || { domain: d, created: null, updated: null, expires: null, registrar: null, dns: [], note: "Données limitées en laboratoire" };
}

export function dnsLookup(domain: string, recordType = "A"): string[] {
  const d = domain.toLowerCase();
  const known: Record<string, string[]> = {
    "example.com": ["93.184.216.34"],
    "test.com": ["192.0.2.1"],
  };
  return known[d] || ["127.0.0.1"];
}

export function compareToOsint(domain: string) {
  const whois = whoisLookup(domain);
  const dnsA = dnsLookup(domain, "A");
  const dnsMx = dnsLookup(domain, "MX");
  const hasWhois = whois.created !== null;
  const ipCount = new Set([...dnsA, ...dnsMx]).size;
  const recs = hasWhois
    ? ["Domain registered since " + whois.created, "Check registrar information for contact details"]
    : ["WHOIS data limited in laboratory environment", "Use external WHOIS services for complete information"];
  return {
    project: "P9", domain, whois, dns_a: dnsA, dns_mx: dnsMx,
    analysis: { has_whois_data: hasWhois, has_dns_a: dnsA.length > 0, has_dns_mx: dnsMx.length > 0, ip_count: ipCount },
    recommendations: recs,
    method: "WHOIS/DNS local — pas d'appel API externe",
  };
}
