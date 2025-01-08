'use client';

import { useState, useEffect } from 'react';
import { useUrlChangeHandler } from './url/use-url-change-handler';
import { useInitialUrl } from './url/use-initial-url';

export function useUrlState() {
  const [searchParams, setSearchParams] = useState(null);
  
  // Handle initial URL state
  useInitialUrl(setSearchParams);
  
  // Handle URL changes
  useUrlChangeHandler(setSearchParams);

  return searchParams;
}
