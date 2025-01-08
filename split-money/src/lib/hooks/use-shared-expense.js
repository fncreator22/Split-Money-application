'use client';

import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { parseExpenseFromParams } from '@/lib/utils/expense';
import { useExpenseLoader } from './expense/use-expense-loader';

export function useSharedExpense({ searchParams, onExpenseLoad }) {
  const hasLoaded = useRef(false);
  const { toast } = useToast();
  const loadExpense = useExpenseLoader(onExpenseLoad, toast);

  useEffect(() => {
    if (!searchParams || hasLoaded.current) return;

    const expenseParam = searchParams.get('expense');
    if (!expenseParam) return;

    if (loadExpense(expenseParam)) {
      hasLoaded.current = true;
    }
  }, [searchParams, loadExpense]);
}
