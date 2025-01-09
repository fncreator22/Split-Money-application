'use client';

import { useEffect } from 'react';
import { Header } from '../components/layout/header';
import { ExpenseForm } from '../components/expense/expense-form';
import { ExpenseSummary } from '../components/expense-summary';
import { ReviewForm } from '../components/review/review-form';
import { ReviewList } from '../components/review/review-list';
import { ShareSection } from '../components/share/share-section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useExpenseState } from '../lib/hooks/use-expense-state';
import { useReviews } from '../lib/hooks/use-reviews';
import { useUrlState } from '../lib/hooks/use-url-state';
import { useSharedExpense } from '../lib/hooks/use-shared-expense';
import { memo } from 'react';

const MemoizedShareSection = memo(ShareSection);
const MemoizedExpenseSummary = memo(ExpenseSummary);

export default function Home() {
  const { expense, updateExpense } = useExpenseState();
  const { reviews, handleReviewSubmit } = useReviews();
  const searchParams = useUrlState();

  useSharedExpense({
    searchParams,
    onExpenseLoad: updateExpense,
  });

  // Example of using useEffect for performing a side effect
  useEffect(() => {
    // Here you can perform data fetching or other actions when the component mounts
    // For example, logging the expense data if it's updated
    if (expense) {
      console.log('Expense data updated:', expense);
    }
  }, [expense]); // This will run every time `expense` changes

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto p-2 md:p-8 space-y-4 md:space-y-8">
        <Header />
        
        <Tabs defaultValue="split" className="space-y-4">
          <TabsList className="grid w-full grid-cols-3 h-auto">
            <TabsTrigger value="split" className="text-sm md:text-base py-2 md:py-3">
              Split Money
            </TabsTrigger>
            <TabsTrigger value="share" className="text-sm md:text-base py-2 md:py-3">
              Share
            </TabsTrigger>
            <TabsTrigger value="reviews" className="text-sm md:text-base py-2 md:py-3">
              Reviews
            </TabsTrigger>
          </TabsList>

          <TabsContent value="split" className="space-y-4">
            <ExpenseForm onSubmit={updateExpense} />
            {expense && <MemoizedExpenseSummary expense={expense} />}
          </TabsContent>

          <TabsContent value="share">
            <MemoizedShareSection expense={expense} />
          </TabsContent>

          <TabsContent value="reviews" className="space-y-4">
            <ReviewForm onSubmit={handleReviewSubmit} />
            <ReviewList reviews={reviews} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
