
import React from 'react';
import { Heart, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { Tables } from '@/integrations/supabase/types';

type BlogPost = Tables<'blog_posts'>;

interface BlogPostActionsProps {
  post: BlogPost;
  isLiked: boolean;
  onLike: () => void;
}

const BlogPostActions = ({ post, isLiked, onLike }: BlogPostActionsProps) => {
  return (
    <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg mb-12">
      <div className="flex items-center gap-4">
        <Button
          onClick={onLike}
          variant={isLiked ? "default" : "outline"}
          className={isLiked ? "bg-red-500 hover:bg-red-600" : ""}
        >
          <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
          {post.likes} Likes
        </Button>
        <Button variant="outline">
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
      <div className="text-gray-600">
        Found this helpful? Share it with your network!
      </div>
    </div>
  );
};

export default BlogPostActions;
