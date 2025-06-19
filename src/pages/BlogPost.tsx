
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogPostHeader from '@/components/blog/BlogPostHeader';
import BlogPostContent from '@/components/blog/BlogPostContent';
import BlogPostActions from '@/components/blog/BlogPostActions';
import BlogPostComments from '@/components/blog/BlogPostComments';
import BlogPostSidebar from '@/components/blog/BlogPostSidebar';
import { useBlogPost } from '@/hooks/useBlogPost';
import { formatDate, getTimeAgo } from '@/utils/dateUtils';

const BlogPost = () => {
  const { slug } = useParams();
  const {
    post,
    comments,
    isLiked,
    comment,
    loading,
    relatedPosts,
    handleLike,
    handleCommentSubmit,
    handleCommentChange
  } = useBlogPost(slug);

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
        <BlogPostHeader post={post} formatDate={formatDate} />

        {/* Article Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <BlogPostContent post={post} />
                <BlogPostActions 
                  post={post} 
                  isLiked={isLiked} 
                  onLike={handleLike} 
                />
                <BlogPostComments
                  comments={comments}
                  comment={comment}
                  onCommentChange={handleCommentChange}
                  onCommentSubmit={handleCommentSubmit}
                  getTimeAgo={getTimeAgo}
                />
              </div>

              {/* Sidebar */}
              <BlogPostSidebar post={post} relatedPosts={relatedPosts} />
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
