
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, Eye, MessageCircle, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import type { Tables } from '@/integrations/supabase/types';

type BlogPost = Tables<'blog_posts'>;

interface BlogPostHeaderProps {
  post: BlogPost;
  formatDate: (dateString: string) => string;
}

const BlogPostHeader = ({ post, formatDate }: BlogPostHeaderProps) => {
  return (
    <>
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

      {/* Article Meta */}
      <div className="py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
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
        </div>
      </div>
    </>
  );
};

export default BlogPostHeader;
