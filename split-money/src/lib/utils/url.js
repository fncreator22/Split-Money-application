'use client';

export function parseUrlParams(search) {
  try {
    return new URLSearchParams(search);
  } catch {
    return new URLSearchParams();
  }
}
