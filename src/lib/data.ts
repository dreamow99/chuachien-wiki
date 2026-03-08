import type { Temple } from '../types/temple';

const DATA_URL = '/data/temples.json';

let cached: Temple[] | null = null;

/**
 * Load temple/pagoda data from static JSON. Caches after first fetch.
 */
export async function loadTemples(): Promise<Temple[]> {
  if (cached) return cached;
  const res = await fetch(DATA_URL);
  if (!res.ok) throw new Error('Failed to load temples data');
  const data = (await res.json()) as Temple[];
  cached = data;
  return data;
}

export type { Temple };
