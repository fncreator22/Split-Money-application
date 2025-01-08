'use client';

export function parseExpenseFromParams(param) {
  try {
    const decoded = decodeURIComponent(param);
    const parsed = JSON.parse(decoded);
    
    if (
      parsed &&
      typeof parsed === 'object' &&
      typeof parsed.description === 'string' &&
      typeof parsed.amount === 'number' &&
      Array.isArray(parsed.participants)
    ) {
      return parsed;
    }
    return null;
  } catch {
    return null;
  }
}
