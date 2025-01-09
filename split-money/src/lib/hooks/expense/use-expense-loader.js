'use client';

import { useCallback } from 'react';
import { parseExpenseFromParams } from '../../utils/expense';

export function useExpenseLoader(onExpenseLoad, toast) {
  return useCallback((param) => {
    try {
      const parsedExpense = parseExpenseFromParams(param);
      if (parsedExpense) {
        onExpenseLoad(parsedExpense);
        return true;
      }
    } catch (error) {
      toast.error('Failed to load shared expense');
    }
    return false;
  }, [onExpenseLoad, toast]);
}
