'use client';

import { useEffect, useRef } from 'react';

export function useInitialUrl(setSearchParams) {
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current && typeof window !== 'undefined') {
      initialized.current = true;
      setSearchParams(new URLSearchParams(window.location.search));
    }
  }, [setSearchParams]);
}
