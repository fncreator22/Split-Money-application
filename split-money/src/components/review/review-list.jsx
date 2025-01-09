'use client';

import { Card } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { RatingStars } from './rating-stars';
import { ReviewCard } from './review-card';

export function ReviewList({ reviews }) {
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length
      : 0;

  return (
    <Card className="p-3 md:p-6 backdrop-blur-lg bg-background/80">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-bold">Reviews</h2>
        {reviews.length > 0 && (
          <div className="flex items-center gap-2 mt-2">
            <RatingStars rating={Math.round(averageRating)} readonly />
            <span className="text-sm text-muted-foreground">
              ({averageRating.toFixed(1)})
            </span>
          </div>
        )}
      </div>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
          {reviews.length === 0 && (
            <p className="text-center text-muted-foreground">
              No reviews yet. Be the first to share your experience!
            </p>
          )}
        </div>
      </ScrollArea>
    </Card>
  );
}
