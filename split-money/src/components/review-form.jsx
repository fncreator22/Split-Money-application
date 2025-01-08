'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';

export function ReviewForm({ onSubmit }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;

    onSubmit({ rating, comment });
    setRating(0);
    setComment('');
  };

  return (
    <Card className="p-6 backdrop-blur-lg bg-background/80">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((value) => (
            <Button
              key={value}
              type="button"
              variant={rating >= value ? 'default' : 'outline'}
              size="icon"
              onClick={() => setRating(value)}
              className="transition-all duration-200"
            >
              <Star
                className={`h-4 w-4 ${
                  rating >= value ? 'fill-current' : ''
                }`}
              />
            </Button>
          ))}
        </div>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience..."
          className="min-h-[100px]"
        />
        <Button type="submit" className="w-full" disabled={rating === 0}>
          Submit Review
        </Button>
      </form>
    </Card>
  );
}
