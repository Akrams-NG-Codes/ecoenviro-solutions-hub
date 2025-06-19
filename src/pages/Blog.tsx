
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Eye, Heart, MessageCircle, Search } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useQuery } from '@tanstack/react-query';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string | null;
  content: string;
  author: string;
  category: string;
  tags: string[] | null;
  slug: string;
  status: string;
  featured_image: string | null;
  views: number;
  likes: number;
  comments_count: number;
  read_time: string | null;
  created_at: string;
  updated_at: string;
  published_at: string | null;
}

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const { data: blogPosts = [], isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    },
  });

  // Get unique categories from the posts
  const categories = ['All', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (post.excerpt && post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-earth-green mx-auto mb-4"></div>
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-red-600 mb-4">Error loading blog posts</p>
            <Button onClick={() => window.location.reload()}>
              Try Again
            </Button>
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
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-earth-green to-forest-green text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-poppins text-4xl md:text-5xl font-bold mb-6">
                Environmental Insights Blog
              </h1>
              <p className="text-xl leading-relaxed">
                Stay informed with the latest insights on environmental science, climate change, 
                and sustainable development from our team of experts.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "bg-earth-green hover:bg-forest-green" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                {blogPosts.length === 0 ? (
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Blog Posts Yet</h3>
                    <p className="text-gray-500 text-lg mb-6">
                      Our environmental experts are working on creating insightful content for you.
                    </p>
                    <p className="text-gray-500">
                      Check back soon for the latest environmental insights and sustainability updates!
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="hover:shadow-xl transition-all duration-300 h-full">
                    {/* Image */}
                    {post.featured_image && (
                      <div 
                        className="h-48 bg-cover bg-center"
                        style={{ backgroundImage: `url(${post.featured_image})` }}
                      />
                    )}

                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        {post.read_time && (
                          <span className="text-xs text-gray-500">{post.read_time}</span>
                        )}
                      </div>
                      <h3 className="font-poppins text-xl font-bold text-gray-900 line-clamp-2">
                        {post.title}
                      </h3>
                    </CardHeader>

                    <CardContent className="pt-0">
                      {post.excerpt && (
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                      )}

                      {/* Author and Date */}
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <User className="h-4 w-4 mr-1" />
                        <span className="mr-4">{post.author}</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Eye className="h-4 w-4 mr-1" />
                            <span>{post.views}</span>
                          </div>
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center">
                            <MessageCircle className="h-4 w-4 mr-1" />
                            <span>{post.comments_count}</span>
                          </div>
                        </div>
                      </div>

                      <Button 
                        asChild 
                        className="w-full bg-earth-green hover:bg-forest-green"
                      >
                        <a href={`/blog/${post.slug}`}>
                          Read More
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Subscribe */}
        <section className="py-20 bg-earth-green">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <h2 className="font-poppins text-3xl font-bold mb-4">
                Never Miss an Update
              </h2>
              <p className="text-xl mb-8">
                Subscribe to our newsletter for the latest environmental insights and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-green-200"
                />
                <Button className="bg-white text-earth-green hover:bg-gray-100">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
