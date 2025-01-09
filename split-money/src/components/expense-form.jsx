'use client';

import { useState } from 'react';
import { Plus, Split } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { useToast } from '@/components/ui/use-toast';

export function ExpenseForm({ onSubmit }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [participants, setParticipants] = useState([{ id: '1', name: '' }]);
  const { toast } = useToast();

  const addParticipant = () => {
    setParticipants([...participants, { id: Math.random().toString(), name: '' }]);
  };

  const updateParticipant = (id, name) => {
    setParticipants(
      participants.map((p) => (p.id === id ? { ...p, name } : p))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !amount || participants.some((p) => !p.name)) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields',
        variant: 'destructive',
      });
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
    <Card className="p-6 backdrop-blur-lg bg-background/80">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Dinner, Movie tickets, etc."
          />
        </div>

        <div>
          <Label htmlFor="amount">Amount</Label>
          <Input
            id="amount"
            type="number"
            min="0"
            step="0.01"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
          />
        </div>

        <div className="space-y-2">
          <Label>Participants</Label>
          {participants.map((participant) => (
            <Input
              key={participant.id}
              value={participant.name}
              onChange={(e) =>
                updateParticipant(participant.id, e.target.value)
              }
              placeholder="Participant name"
              className="mb-2"
            />
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={addParticipant}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Participant
          </Button>
          <Button type="submit" className="w-full">
            <Split className="w-4 h-4 mr-2" />
            Split Expense
          </Button>
        </div>
      </form>
    </Card>
  );
}
