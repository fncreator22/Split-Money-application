'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { parseUrlParams } from '../utils/url';

export function useUrlParams() {
  const initialized = useRef(false);
  const [params, setParams] = useState(null);

  const updateParams = useCallback(() => {
    if (typeof window === 'undefined') return;
    setParams(parseUrlParams(window.location.search));
  }, []);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      updateParams();
    }

    window.addEventListener('popstate', updateParams);
    return () => window.removeEventListener('popstate', updateParams);
  }, [updateParams]);

  return params;
}
