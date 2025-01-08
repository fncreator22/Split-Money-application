'use client';

import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function RatingStars({ rating, onRate, readonly = false }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((value) => (
        <Button
          key={value}
          type="button"
          variant={rating >= value ? 'default' : 'outline'}
          size="icon"
          onClick={() => !readonly && onRate?.(value)}
          className={`transition-all duration-200 ${readonly ? 'cursor-default' : ''}`}
          disabled={readonly}
        >
          <Star
            className={`h-4 w-4 ${
              rating >= value ? 'fill-current' : ''
            }`}
          />
        </Button>
      ))}
    </div>
  );
}
