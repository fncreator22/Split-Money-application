'use client';

import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export function ExpenseSummary({ expense }) {
  if (!expense) return null;

  const perPersonAmount = expense.amount / expense.participants.length;

  return (
    <Card className="p-3 md:p-6 backdrop-blur-lg bg-background/80">
      <h2 className="text-xl md:text-2xl font-bold mb-4">Expense Summary</h2>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Description</p>
          <p className="text-lg md:text-xl font-semibold">{expense.description}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Total Amount</p>
          <p className="text-lg md:text-xl font-semibold">
          ₹{expense.amount.toFixed(2)}
          </p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Per Person</p>
          <p className="text-lg md:text-xl font-semibold">₹{perPersonAmount.toFixed(2)}</p>
        </div>
        <div className="overflow-x-auto">
          <p className="text-sm text-muted-foreground mb-2">Split Details</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Participant</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {expense.participants.map((participant) => (
                <TableRow key={participant.id}>
                  <TableCell>{participant.name}</TableCell>
                  <TableCell className="text-right">
                  ₹{perPersonAmount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </Card>
  );
}
