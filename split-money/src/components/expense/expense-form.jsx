'use client';

import { useState } from 'react';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { useToast } from '../../hooks/use-toast';
import { ParticipantList } from './participant-list';
import { ExpenseActions } from './expense-actions';

export function ExpenseForm({ onSubmit }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState([{ id: '1', name: '' }]);
  const { toast } = useToast();

  const addParticipant = () => {
    setParticipants([
      ...participants,
      { id: Math.random().toString(), name: '' },
    ]);
  };

  const updateParticipant = (id, name) => {
    setParticipants(
      participants.map((p) => (p.id === id ? { ...p, name } : p))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || participants.some((p) => !p.name)) {
      toast.error('Please fill in all fields');
      return;
    }

    onSubmit({
      description,
      amount: parseFloat(amount),
      participants,
    });

    setDescription('');
    setAmount('');
    setParticipants([{ id: '1', name: '' }]);
  };

  return (
    <Card className="p-3 md:p-6 backdrop-blur-lg bg-background/80">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Dinner, Movie tickets, etc."
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label>Participants</Label>
          <ParticipantList
            participants={participants}
            onUpdate={updateParticipant}
          />
        </div>

        <ExpenseActions onAddParticipant={addParticipant} />
      </form>
    </Card>
  );
}
