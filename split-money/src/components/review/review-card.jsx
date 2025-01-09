'use client';

import { RatingStars } from './rating-stars';

export function ReviewCard({ review }) {
  return (
    <div className="p-4 rounded-lg border bg-card">
      <div className="flex items-center gap-2 mb-2">
        <RatingStars rating={review.rating} readonly />
        <span className="text-sm text-muted-foreground">
          {new Date(review.date).toLocaleDateString()}
        </span>
      </div>
      <p className="text-sm">{review.comment}</p>
    </div>
  );
}
