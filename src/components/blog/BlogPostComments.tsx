
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Tables } from '@/integrations/supabase/types';

type BlogComment = Tables<'blog_comments'>;

interface BlogPostCommentsProps {
  comments: BlogComment[];
  comment: { name: string; message: string };
  onCommentChange: (field: 'name' | 'message', value: string) => void;
  onCommentSubmit: (e: React.FormEvent) => void;
  getTimeAgo: (dateString: string) => string;
}

const BlogPostComments = ({ 
  comments, 
  comment, 
  onCommentChange, 
  onCommentSubmit, 
  getTimeAgo 
}: BlogPostCommentsProps) => {
  return (
    <div>
      <h3 className="font-poppins text-2xl font-bold text-gray-900 mb-6">
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Leave a Comment</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onCommentSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Your name"
                value={comment.name}
                onChange={(e) => onCommentChange('name', e.target.value)}
                required
              />
            </div>
            <div>
              <Textarea
                placeholder="Share your thoughts..."
                rows={4}
                value={comment.message}
                onChange={(e) => onCommentChange('message', e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="bg-earth-green hover:bg-forest-green">
              Post Comment
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-l-4 border-earth-green pl-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">{comment.author_name}</h4>
              <span className="text-sm text-gray-500">{getTimeAgo(comment.created_at)}</span>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
        {comments.length === 0 && (
          <p className="text-gray-500 text-center py-8">
            No comments yet. Be the first to share your thoughts!
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPostComments;
