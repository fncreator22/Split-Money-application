'use client';

import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

export function ReviewList({ reviews }) {
  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <Card className="p-6 backdrop-blur-lg bg-background/80">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Reviews</h2>
        {reviews.length > 0 && (
          <div className="flex items-center gap-2 mt-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((value) => (
                <Star
                  key={value}
                  className={`h-4 w-4 ${
                    value <= averageRating ? 'fill-current' : ''
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              ({averageRating.toFixed(1)})
            </span>
          </div>
        )}
      </div>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 rounded-lg border bg-card"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Star
                      key={value}
                      className={`h-4 w-4 ${
                        value <= review.rating ? 'fill-current' : ''
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm">{review.comment}</p>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
