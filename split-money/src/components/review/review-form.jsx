'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { RatingStars } from './rating-stars';

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
    <Card className="p-3 md:p-6 backdrop-blur-lg bg-background/80">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center md:justify-start">
          <RatingStars rating={rating} onRate={setRating} />
        </div>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience..."
          className="min-h-[100px] w-full resize-none"
        />
        <Button 
          type="submit" 
          className="w-full text-sm md:text-base py-2 md:py-3" 
          disabled={rating === 0}
        >
          Submit Review
        </Button>
      </form>
    </Card>
  );
}
