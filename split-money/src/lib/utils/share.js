'use client';

export function generateShareUrl(expense) {
  if (typeof window === 'undefined') return '';
  
  try {
    const baseUrl = window.location.origin;
    const params = new URLSearchParams();
    params.set('expense', encodeURIComponent(JSON.stringify(expense)));
    return `${baseUrl}?${params.toString()}`;
  } catch (error) {
    console.error('Failed to generate share URL:', error);
    return '';
  }
}
