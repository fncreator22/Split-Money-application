'use client';

import { useCallback } from 'react';
import { Button } from '../ui/button';
import { Link } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';
import { generateShareUrl } from '../../lib/utils/share';
import { QRCanvas } from './qr-canvas';
import { SocialShare } from './social-share';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Separator } from '../ui/separator';

export function ShareSection({ expense }) {
  const { toast } = useToast();

  const handleCopyLink = useCallback(async () => {
    if (!expense) return;
    
    try {
      const shareUrl = generateShareUrl(expense);
      await navigator.clipboard.writeText(shareUrl);
      toast.success('Share link copied to clipboard!');
    } catch (error) {
      toast.error('Failed to copy link');
    }
  }, [expense, toast]);

  if (!expense) {
    return (
      <Card className="backdrop-blur-lg bg-background/80">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Share Expense</CardTitle>
          <CardDescription>
            Add an expense first to generate sharing options
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const shareUrl = generateShareUrl(expense);
  const shareTitle = `Split expense for ${expense.description} - ${expense.amount.toFixed(2)}`;

  return (
    <Card className="backdrop-blur-lg bg-background/80">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">Share Expense</CardTitle>
        <CardDescription>
          Share this expense with your friends using any of these options
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-center p-2 md:p-4">
          <QRCanvas url={shareUrl} />
        </div>

        <Separator />

        <div className="space-y-2">
          <Button
            onClick={handleCopyLink}
            className="w-full text-sm md:text-base py-2 md:py-3"
            variant="outline"
          >
            <Link className="w-4 h-4 mr-2" />
            Copy Link
          </Button>
        </div>

        <Separator />

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-center mb-4">
            Share on Social Media
          </h3>
          <SocialShare url={shareUrl} title={shareTitle} />
        </div>
      </CardContent>
    </Card>
  );
}
