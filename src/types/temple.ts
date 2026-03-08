/**
 * Temple / pagoda place record.
 * @see design.md – Data model for a temple/pagoda
 */
export interface Temple {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  /** "temple" | "pagoda" for filtering */
  type: 'temple' | 'pagoda';
  description?: string;
  openingHours?: string;
  contact?: string;
  images?: string[];
}
