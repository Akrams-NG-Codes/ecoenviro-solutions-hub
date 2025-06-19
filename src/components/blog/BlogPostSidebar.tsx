
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Tables } from '@/integrations/supabase/types';

type BlogPost = Tables<'blog_posts'>;

interface BlogPostSidebarProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

const BlogPostSidebar = ({ post, relatedPosts }: BlogPostSidebarProps) => {
  return (
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
  );
};

export default BlogPostSidebar;
