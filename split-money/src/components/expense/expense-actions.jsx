'use client';

import { Plus, Split } from 'lucide-react';
import { Button } from '../ui/button';

export function ExpenseActions({ onAddParticipant }) {
  return (
    <div className="flex flex-col sm:flex-row gap-2">
      <Button
        type="button"
        variant="outline"
        onClick={onAddParticipant}
        className="w-full text-sm md:text-base py-2 md:py-3"
      >
        <Plus className="w-4 h-4 mr-2" />
        Add Participant
      </Button>
      <Button 
        type="submit" 
        className="w-full text-sm md:text-base py-2 md:py-3"
      >
        <Split className="w-4 h-4 mr-2" />
        Split Expense
      </Button>
    </div>
  );
}
