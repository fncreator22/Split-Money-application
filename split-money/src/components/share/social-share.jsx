'use client';

import { Share2 } from 'lucide-react';
import { Button } from '../ui/button';
import { useToast } from '../../hooks/use-toast';

export function SocialShare({ url, title }) {
  const { toast } = useToast();

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: 'Check out this expense split',
          url,
        });
        toast.success('Shared successfully!');
      } catch (error) {
        if (error.name !== 'AbortError') {
          toast.error('Failed to share');
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard!');
      } catch (error) {
        toast.error('Failed to copy link');
      }
    }
  };

  return (
    <Button 
      onClick={handleShare} 
      className="w-full text-sm md:text-base py-2 md:py-3" 
      variant="outline"
    >
      <Share2 className="w-4 h-4 mr-2" />
      Share
    </Button>
  );
}
