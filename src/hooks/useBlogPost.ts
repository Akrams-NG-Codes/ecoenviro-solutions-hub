
import { useState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

type BlogPost = Tables<'blog_posts'>;
type BlogComment = Tables<'blog_comments'>;

export const useBlogPost = (slug: string | undefined) => {
  const { toast } = useToast();
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [isLiked, setIsLiked] = useState(false);
  const [comment, setComment] = useState({ name: '', message: '' });
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  // Fetch blog post by slug
  useEffect(() => {
    const fetchPost = async () => {
      if (!slug) return;

      try {
        const { data: postData, error: postError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('slug', slug)
          .eq('status', 'published')
          .single();

        if (postError) {
          console.error('Error fetching post:', postError);
          setLoading(false);
          return;
        }

        setPost(postData);

        // Increment view count
        const { error: updateError } = await supabase
          .from('blog_posts')
          .update({ views: postData.views + 1 })
          .eq('id', postData.id);

        if (updateError) {
          console.error('Error updating views:', updateError);
        }

        // Fetch comments for this post
        const { data: commentsData, error: commentsError } = await supabase
          .from('blog_comments')
          .select('*')
          .eq('post_id', postData.id)
          .order('created_at', { ascending: false });

        if (commentsError) {
          console.error('Error fetching comments:', commentsError);
        } else {
          setComments(commentsData);
        }

        // Fetch related posts
        const { data: relatedData, error: relatedError } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('status', 'published')
          .eq('category', postData.category)
          .neq('id', postData.id)
          .limit(3);

        if (relatedError) {
          console.error('Error fetching related posts:', relatedError);
        } else {
          setRelatedPosts(relatedData);
        }

      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  const handleLike = async () => {
    if (!post) return;

    const newLikeCount = isLiked ? post.likes - 1 : post.likes + 1;
    
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ likes: newLikeCount })
        .eq('id', post.id);

      if (error) {
        console.error('Error updating likes:', error);
        toast({
          title: "Error",
          description: "Failed to update like. Please try again.",
          variant: "destructive"
        });
        return;
      }

      setPost({ ...post, likes: newLikeCount });
      setIsLiked(!isLiked);
      toast({
        title: isLiked ? "Removed from favorites" : "Added to favorites",
        description: isLiked ? "Post unliked" : "Thanks for liking this post!",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!post || !comment.name || !comment.message) return;

    try {
      const { data: newComment, error } = await supabase
        .from('blog_comments')
        .insert({
          post_id: post.id,
          author_name: comment.name,
          content: comment.message
        })
        .select()
        .single();

      if (error) {
        console.error('Error posting comment:', error);
        toast({
          title: "Error",
          description: "Failed to post comment. Please try again.",
          variant: "destructive"
        });
        return;
      }

      // Update comments count
      const { error: updateError } = await supabase
        .from('blog_posts')
        .update({ comments_count: post.comments_count + 1 })
        .eq('id', post.id);

      if (updateError) {
        console.error('Error updating comments count:', updateError);
      }

      setComments([newComment, ...comments]);
      setPost({ ...post, comments_count: post.comments_count + 1 });
      setComment({ name: '', message: '' });
      toast({
        title: "Comment posted!",
        description: "Thank you for sharing your thoughts.",
      });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleCommentChange = (field: 'name' | 'message', value: string) => {
    setComment(prev => ({ ...prev, [field]: value }));
  };

  return {
    post,
    comments,
    isLiked,
    comment,
    loading,
    relatedPosts,
    handleLike,
    handleCommentSubmit,
    handleCommentChange
  };
};
