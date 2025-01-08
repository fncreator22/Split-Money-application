'use client';

import { useState, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { useSharedExpense } from './use-shared-expense';

export function useExpense() {
  const [currentExpense, setCurrentExpense] = useState(null);
  const { toast } = useToast();
  
  // Load shared expense from URL if available
  useSharedExpense(setCurrentExpense);

  const handleExpenseSubmit = useCallback((expense) => {
    try {
      setCurrentExpense(expense);
      toast.success('Expense split successfully');
    } catch (error) {
      toast.error('Failed to split expense');
    }
  }, [toast]);

  return {
    currentExpense,
    handleExpenseSubmit,
  };
}
