'use client';

import { useState, useEffect } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(initialValue);
  const [isClient, setIsClient] = useState(false);

  // Ensure window is available (client-side check)
  useEffect(() => {
    setIsClient(true);  // The component has mounted and we're on the client
  }, []);

  useEffect(() => {
    if (!isClient) return;  // Skip if not running on the client

    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        setStoredValue(JSON.parse(item));
      }
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }, [isClient, key]); // Depend on `isClient` to ensure code runs only on the client

  const setValue = (value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (isClient) {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
