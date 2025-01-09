'use client';

import { useEffect, useRef } from 'react';

export function useUrlChangeHandler(setSearchParams) {
  const updateCount = useRef(0);

  useEffect(() => {
    const handleUrlChange = () => {
      if (updateCount.current > 100) {
        console.warn('Too many URL updates detected, stopping to prevent infinite loop');
        return;
      }
      updateCount.current += 1;
      setSearchParams(new URLSearchParams(window.location.search));
    };

    window.addEventListener('popstate', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      updateCount.current = 0;
    };
  }, [setSearchParams]);
}
