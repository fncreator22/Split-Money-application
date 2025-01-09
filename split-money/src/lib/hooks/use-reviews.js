'use client';

import { useLocalStorage } from '../../hooks/use-local-storage';
import { useToast } from '../../hooks/use-toast';

export function useReviews() {
  const [reviews, setReviews] = useLocalStorage('reviews', []);
  const { toast } = useToast();

  const handleReviewSubmit = (review) => {
    const newReview = {
      id: Math.random().toString(),
      ...review,
      date: new Date().toISOString(),
    };
    setReviews([...reviews, newReview]);
    toast.success('Thank you for your feedback!');
  };

  return {
    reviews,
    handleReviewSubmit,
  };
}
