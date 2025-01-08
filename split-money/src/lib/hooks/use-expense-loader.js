'use client';

import { useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { parseExpenseFromParams } from '@/lib/utils/expense';

export function useExpenseLoader(onExpenseLoad) {
  const { toast } = useToast();

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
