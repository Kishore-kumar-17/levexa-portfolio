// Parses Instagram-style counts such as "2,758", "485K" or "2.8M"
export function parseCount(value: string): number {
  const clean = value.replace(/,/g, "").trim();
  const multiplier = clean.endsWith("M") ? 1_000_000 : clean.endsWith("K") ? 1_000 : 1;
  return parseFloat(clean) * multiplier;
}

// Rounds down to one decimal with a "+" so totals never overstate, e.g. 7,165,000 -> "7.1M+"
export function formatCount(total: number): string {
  if (total >= 1_000_000) return `${Math.floor(total / 100_000) / 10}M+`;
  if (total >= 1_000) return `${Math.floor(total / 100) / 10}K+`;
  return String(total);
}
