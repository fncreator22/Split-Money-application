'use client';

import { useState, useCallback } from 'react';
import { useToast } from '../../hooks/use-toast';

export function useExpenseState() {
  const [expense, setExpense] = useState(null);
  const { toast } = useToast();
  
  const updateExpense = useCallback((newExpense) => {
    setExpense(newExpense);
    toast.success('Expense updated successfully');
  }, [toast]);

  const clearExpense = useCallback(() => {
    setExpense(null);
  }, []);

  return {
    expense,
    updateExpense,
    clearExpense,
  };
}
