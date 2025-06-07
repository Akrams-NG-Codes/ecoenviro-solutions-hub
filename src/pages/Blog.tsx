
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Eye, Heart, MessageCircle, Search } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Climate Change Adaptation Strategies for Ugandan Agriculture',
      excerpt: 'Exploring effective adaptation strategies that help Ugandan farmers cope with changing climate patterns and ensure food security.',
      author: 'Dr. Samuel Kayondo',
      date: '2024-01-15',
      category: 'Climate Change',
      readTime: '8 min read',
      views: 2341,
      likes: 87,
      comments: 23,
      image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop',
      slug: 'climate-change-adaptation-ugandan-agriculture'
    },
    {
      id: 2,
      title: 'The Importance of Environmental Impact Assessments in Uganda',
      excerpt: 'Understanding why EIAs are crucial for sustainable development and how they protect Uganda\'s natural resources for future generations.',
      author: 'Eng. Margaret Nalwanga',
      date: '2024-01-10',
      category: 'Environmental Assessment',
      readTime: '6 min read',
      views: 1876,
      likes: 62,
      comments: 18,
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop',
      slug: 'importance-environmental-impact-assessments-uganda'
    },
    {
      id: 3,
      title: 'Weather Monitoring Technologies: Revolutionizing Agriculture',
      excerpt: 'How modern weather monitoring technologies are helping farmers make informed decisions and improve crop yields across East Africa.',
      author: 'Dr. James Ssemwanga',
      date: '2024-01-05',
      category: 'Technology',
      readTime: '10 min read',
      views: 3124,
      likes: 156,
      comments: 45,
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      slug: 'weather-monitoring-technologies-agriculture'
    },
    {
      id: 4,
      title: 'Sustainable Water Management in Urban Uganda',
      excerpt: 'Examining innovative approaches to water management in Uganda\'s growing cities and the role of environmental consultancy.',
      author: 'Grace Nakato',
      date: '2023-12-28',
      category: 'Water Resources',
      readTime: '7 min read',
      views: 1567,
      likes: 43,
      comments: 12,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
      slug: 'sustainable-water-management-urban-uganda'
    },
    {
      id: 5,
      title: 'Biodiversity Conservation in Murchison Falls National Park',
      excerpt: 'A deep dive into conservation efforts at Murchison Falls and the critical role of environmental monitoring in protecting wildlife.',
      author: 'David Musoke',
      date: '2023-12-20',
      category: 'Conservation',
      readTime: '12 min read',
      views: 2789,
      likes: 134,
      comments: 67,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
      slug: 'biodiversity-conservation-murchison-falls'
    },
    {
      id: 6,
      title: 'Green Building Standards and Environmental Compliance',
      excerpt: 'Understanding green building standards in Uganda and how environmental consultants help ensure compliance with sustainability requirements.',
      author: 'Sarah Namutebi',
      date: '2023-12-15',
      category: 'Sustainability',
      readTime: '9 min read',
      views: 1234,
      likes: 56,
      comments: 29,
      image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop',
      slug: 'green-building-standards-environmental-compliance'
    }
  ];

  const categories = ['All', 'Climate Change', 'Environmental Assessment', 'Technology', 'Water Resources', 'Conservation', 'Sustainability'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-xl transition-all duration-300 h-full">
                  {/* Image */}
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />

                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-gray-500">{post.readTime}</span>
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-gray-900 line-clamp-2">
                      {post.title}
                    </h3>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Author and Date */}
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <User className="h-4 w-4 mr-1" />
                      <span className="mr-4">{post.author}</span>
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
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
                          <span>{post.comments}</span>
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

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
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
