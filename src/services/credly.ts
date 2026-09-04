import { certifications, type Certification } from "../data/certifications";

export const CREDLY_USERNAME = "jhoan-rojas";

const directUrl = (user: string) =>
  `https://www.credly.com/users/${user}/badges.json`;

const proxyUrls = (url: string) => [
  `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
  `https://corsproxy.io/?url=${encodeURIComponent(url)}`,
];

function mapBadges(json: unknown): Certification[] {
  const data = (json as { data?: unknown[] })?.data;
  if (!Array.isArray(data)) return [];

  return data
    .map((b) => {
      const badge = b as Record<string, unknown>;
      const template = (badge.badge_template ?? {}) as Record<string, unknown>;
      const name = typeof template.name === "string" ? template.name : "";
      const issuerEntities = ((template.issuer as Record<string, unknown>)?.entities ??
        []) as Record<string, unknown>[];
      let issuer = "";
      for (const e of issuerEntities) {
        const entity = (e.entity as Record<string, unknown>) ?? {};
        if (entity.type === "Organization") {
          issuer = typeof entity.name === "string" ? entity.name : "";
          break;
        }
      }
      const badgeImage =
        (template.image as { url?: string } | undefined)?.url ?? "";
      const date = (typeof badge.issued_at_date === "string" ? badge.issued_at_date : "").slice(0, 7);
      const id = typeof badge.id === "string" ? badge.id : "";

      if (!name || !id || !badgeImage) return null;

      return {
        name,
        issuer,
        category: issuer,
        date,
        badgeImage,
        credentialUrl: `https://www.credly.com/badges/${id}`,
      } as Certification;
    })
    .filter((c): c is Certification => c !== null);
}

export async function fetchCredlyBadges(): Promise<Certification[]> {
  const url = directUrl(CREDLY_USERNAME);
  const attempts = [url, ...proxyUrls(url)];

  for (const target of attempts) {
    try {
      const res = await fetch(target, {
        headers: { Accept: "application/json" },
      });
      if (!res.ok) continue;
      const json = await res.json();
      const mapped = mapBadges(json);
      if (mapped.length > 0) return mapped;
    } catch {
      // intentar siguiente fuente
    }
  }

  return certifications;
}