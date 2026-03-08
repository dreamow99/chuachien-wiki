import type { Temple } from '../types/temple';

export type TypeFilter = 'all' | 'temple' | 'pagoda';

/**
 * Text search over name, address, description. Case-insensitive.
 */
export function searchTemples(
  temples: Temple[],
  query: string,
  typeFilter: TypeFilter
): Temple[] {
  const q = query.trim().toLowerCase();
  let result = temples;

  if (q) {
    result = result.filter(
      (t) =>
        t.name.toLowerCase().includes(q) ||
        t.address.toLowerCase().includes(q) ||
        (t.description && t.description.toLowerCase().includes(q))
    );
  }

  if (typeFilter !== 'all') {
    result = result.filter((t) => t.type === typeFilter);
  }

  return result;
}
