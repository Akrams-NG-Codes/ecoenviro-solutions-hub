
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Eye, Heart, MessageCircle, Share2, ArrowLeft, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import type { Tables } from '@/integrations/supabase/types';

type BlogPost = Tables<'blog_posts'>;
type BlogComment = Tables<'blog_comments'>;

const BlogPost = () => {
  const { slug } = useParams();
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getTimeAgo = (dateString: string) => {
    const now = new Date();
    const commentDate = new Date(dateString);
    const diffInMs = now.getTime() - commentDate.getTime();
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
    } else if (diffInHours > 0) {
      return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    } else {
      return 'Just now';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-earth-green mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link to="/blog" className="text-earth-green hover:text-forest-green">
              ← Back to Blog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Back to Blog */}
        <div className="bg-gray-50 py-4">
          <div className="container mx-auto px-4">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-earth-green hover:text-forest-green"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div 
          className="h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${post.featured_image || 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&h=600&fit=crop'})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <Badge className="bg-earth-green text-white mb-4">
                {post.category}
              </Badge>
              <h1 className="font-poppins text-4xl md:text-5xl font-bold text-white mb-4">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Article Meta */}
                <div className="flex flex-wrap items-center gap-6 mb-8 text-gray-600">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{formatDate(post.published_at || post.created_at)}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    <span>{post.views} views</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span>{post.comments_count} comments</span>
                  </div>
                  {post.read_time && <span>{post.read_time}</span>}
                </div>

                {/* Article Body */}
                <div 
                  className="prose prose-lg max-w-none mb-12"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                {post.tags && post.tags.length > 0 && (
                  <div className="mb-8">
                    <h3 className="font-semibold text-lg mb-4 flex items-center">
                      <Tag className="h-5 w-5 mr-2" />
                      Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-earth-green border-earth-green">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Social Actions */}
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg mb-12">
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={handleLike}
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

                {/* Comments Section */}
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
                      <form onSubmit={handleCommentSubmit} className="space-y-4">
                        <div>
                          <Input
                            placeholder="Your name"
                            value={comment.name}
                            onChange={(e) => setComment(prev => ({ ...prev, name: e.target.value }))}
                            required
                          />
                        </div>
                        <div>
                          <Textarea
                            placeholder="Share your thoughts..."
                            rows={4}
                            value={comment.message}
                            onChange={(e) => setComment(prev => ({ ...prev, message: e.target.value }))}
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
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                {/* Author Bio */}
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
                        alt={post.author}
                        className="w-20 h-20 rounded-full mx-auto mb-4"
                      />
                      <h3 className="font-semibold text-lg mb-2">{post.author}</h3>
                      <p className="text-gray-600 text-sm mb-4">
                        Environmental Scientist with expertise in climate adaptation and environmental assessment.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Related Articles</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link 
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.slug}`}
                          className="block group"
                        >
                          <div className="flex space-x-4">
                            <img 
                              src={relatedPost.featured_image || 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=80&h=80&fit=crop'}
                              alt={relatedPost.title}
                              className="w-20 h-20 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-medium text-gray-900 group-hover:text-earth-green line-clamp-2 mb-1">
                                {relatedPost.title}
                              </h4>
                              <div className="flex items-center text-sm text-gray-500">
                                <Badge variant="outline" className="mr-2 text-xs">
                                  {relatedPost.category}
                                </Badge>
                                {relatedPost.read_time}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </CardContent>
                  </Card>
                )}

                {/* Newsletter Signup */}
                <Card className="bg-earth-green text-white">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
                    <p className="text-sm mb-4">
                      Get the latest environmental insights delivered to your inbox.
                    </p>
                    <div className="space-y-3">
                      <Input 
                        placeholder="Your email address"
                        className="bg-white/10 border-white/20 text-white placeholder-green-200"
                      />
                      <Button className="w-full bg-white text-earth-green hover:bg-gray-100">
                        Subscribe
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
