
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, User, Eye, Heart, MessageCircle, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  
  // Mock data - in a real app, this would come from an API
  const post = {
    id: 1,
    title: 'Climate Change Adaptation Strategies for Ugandan Agriculture',
    content: `
      <p>Climate change poses significant challenges to agricultural systems across Uganda, affecting crop yields, water availability, and farming patterns. As an environmental consultancy firm, we've observed firsthand how changing weather patterns impact local communities and agricultural productivity.</p>

      <h2>Understanding the Challenge</h2>
      <p>Uganda's agricultural sector, which employs over 70% of the population, faces increasing pressure from:</p>
      <ul>
        <li>Unpredictable rainfall patterns</li>
        <li>Extended drought periods</li>
        <li>Increased frequency of extreme weather events</li>
        <li>Rising temperatures affecting crop growth cycles</li>
      </ul>

      <h2>Adaptation Strategies</h2>
      <p>Through our work with various agricultural projects, we've identified several effective adaptation strategies:</p>

      <h3>1. Drought-Resistant Crop Varieties</h3>
      <p>Developing and promoting crop varieties that can withstand water stress is crucial. We've worked with research institutions to identify indigenous varieties that show remarkable resilience to changing conditions.</p>

      <h3>2. Improved Water Management</h3>
      <p>Implementing efficient irrigation systems and water conservation techniques helps farmers cope with irregular rainfall. Our projects have shown that drip irrigation can reduce water usage by up to 40% while maintaining crop yields.</p>

      <h3>3. Agroforestry Systems</h3>
      <p>Integrating trees into agricultural landscapes provides multiple benefits including soil conservation, carbon sequestration, and microclimate regulation.</p>

      <h2>Technology Integration</h2>
      <p>Modern technology plays a vital role in climate adaptation. Our weather monitoring systems provide farmers with:</p>
      <ul>
        <li>Real-time weather data</li>
        <li>Seasonal forecasts</li>
        <li>Early warning systems for extreme weather</li>
        <li>Customized agricultural advisories</li>
      </ul>

      <h2>Success Stories</h2>
      <p>In our recent project with the Ministry of Agriculture, we helped establish 50 weather monitoring stations across central and eastern Uganda. The results have been remarkable:</p>
      <ul>
        <li>30% improvement in crop yields</li>
        <li>Reduced crop losses from weather extremes</li>
        <li>Better planning of agricultural activities</li>
        <li>Increased farmer income and food security</li>
      </ul>

      <h2>Looking Forward</h2>
      <p>Climate adaptation is an ongoing process that requires continuous monitoring, evaluation, and adjustment of strategies. As environmental consultants, we remain committed to supporting Uganda's agricultural sector in building resilience against climate change.</p>

      <p>The key to successful adaptation lies in combining traditional knowledge with modern science, involving local communities in the planning process, and ensuring that solutions are practical and accessible to smallholder farmers.</p>
    `,
    author: 'Dr. Samuel Kayondo',
    date: '2024-01-15',
    category: 'Climate Change',
    readTime: '8 min read',
    views: 2341,
    likes: 87,
    comments: 23,
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&h=600&fit=crop',
    tags: ['Climate Change', 'Agriculture', 'Adaptation', 'Uganda', 'Sustainability']
  };

  // Mock comments data
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'John Mukasa',
      message: 'This is very insightful! We are implementing some of these strategies on our farm in Masaka.',
      timestamp: '2024-01-16 10:30',
      likes: 5
    },
    {
      id: 2,
      name: 'Sarah Nakato',
      message: 'The drought-resistant varieties you mentioned - where can farmers access these seeds?',
      timestamp: '2024-01-16 14:20',
      likes: 3
    },
    {
      id: 3,
      name: 'David Ssemwanga',
      message: 'Excellent work! The weather monitoring project has been a game-changer for our community.',
      timestamp: '2024-01-17 09:15',
      likes: 7
    }
  ]);

  const [newComment, setNewComment] = useState({ name: '', message: '' });
  const [liked, setLiked] = useState(false);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.name && newComment.message) {
      const comment = {
        id: comments.length + 1,
        name: newComment.name,
        message: newComment.message,
        timestamp: new Date().toLocaleString(),
        likes: 0
      };
      setComments([...comments, comment]);
      setNewComment({ name: '', message: '' });
      toast({
        title: "Comment posted!",
        description: "Thank you for your feedback.",
      });
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "Like removed" : "Post liked!",
      description: liked ? "You unliked this post." : "Thank you for liking this post!",
    });
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Post link has been copied to clipboard.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Image */}
        <div 
          className="h-96 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${post.image})` }}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-8 left-0 right-0">
            <div className="container mx-auto px-4">
              <Badge className="mb-4 bg-earth-green">
                {post.category}
              </Badge>
              <h1 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Button 
              asChild 
              variant="outline" 
              className="mb-8 group"
            >
              <a href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </a>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Post Meta */}
                <div className="flex flex-wrap items-center justify-between mb-8 pb-8 border-b">
                  <div className="flex items-center space-x-6 text-gray-600">
                    <div className="flex items-center">
                      <User className="h-5 w-5 mr-2" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Eye className="h-5 w-5 mr-2" />
                      <span>{post.views} views</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>

                  <div className="flex items-center space-x-4 mt-4 lg:mt-0">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={handleLike}
                      className={liked ? "text-red-500 border-red-500" : ""}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${liked ? 'fill-current' : ''}`} />
                      {post.likes + (liked ? 1 : 0)}
                    </Button>
                    <Button variant="outline" size="sm" onClick={handleShare}>
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Post Content */}
                <div 
                  className="prose prose-lg max-w-none mb-12"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mb-12">
                  <h3 className="font-semibold mb-4">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Comments Section */}
                <div>
                  <h3 className="font-poppins text-2xl font-bold mb-6">
                    Comments ({comments.length})
                  </h3>

                  {/* Comment Form */}
                  <Card className="mb-8">
                    <CardHeader>
                      <CardTitle>Leave a Comment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleCommentSubmit} className="space-y-4">
                        <Input
                          placeholder="Your name"
                          value={newComment.name}
                          onChange={(e) => setNewComment(prev => ({ ...prev, name: e.target.value }))}
                          required
                        />
                        <Textarea
                          placeholder="Your comment"
                          value={newComment.message}
                          onChange={(e) => setNewComment(prev => ({ ...prev, message: e.target.value }))}
                          rows={4}
                          required
                        />
                        <Button type="submit" className="bg-earth-green hover:bg-forest-green">
                          Post Comment
                        </Button>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <Card key={comment.id}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-earth-green rounded-full flex items-center justify-center text-white font-semibold">
                                {comment.name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-semibold">{comment.name}</h4>
                                <p className="text-sm text-gray-500">{comment.timestamp}</p>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Heart className="h-4 w-4 text-gray-400" />
                              <span className="text-sm text-gray-500">{comment.likes}</span>
                            </div>
                          </div>
                          <p className="text-gray-700">{comment.message}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-8">
                  {/* Author Info */}
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="w-20 h-20 bg-earth-green rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <h4 className="font-semibold mb-2">{post.author}</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Chief Environmental Consultant with 15+ years of experience in climate science and environmental management.
                      </p>
                      <Button size="sm" variant="outline" className="w-full">
                        View Profile
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Related Posts */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Related Articles</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        'Weather Monitoring Technologies in Agriculture',
                        'Sustainable Water Management Strategies',
                        'Environmental Impact Assessment Best Practices'
                      ].map((title, index) => (
                        <a 
                          key={index}
                          href="#" 
                          className="block text-sm hover:text-earth-green transition-colors border-b pb-2 last:border-b-0"
                        >
                          {title}
                        </a>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
