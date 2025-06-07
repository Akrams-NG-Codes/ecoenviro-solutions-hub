
import React, { useState } from 'react';
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

const BlogPost = () => {
  const { slug } = useParams();
  const { toast } = useToast();
  
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(87);
  const [comment, setComment] = useState({ name: '', message: '' });
  const [comments, setComments] = useState([
    {
      id: 1,
      name: 'John Mukasa',
      message: 'This is very insightful! We\'ve been implementing some of these strategies on our farm.',
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      name: 'Sarah Nakato',
      message: 'Great article. Would love to see more content about water conservation techniques.',
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      name: 'David Ssebunya',
      message: 'The climate data analysis is particularly valuable for our planning.',
      timestamp: '1 day ago'
    }
  ]);

  // Mock blog post data - in a real app, this would be fetched based on slug
  const post = {
    title: 'Climate Change Adaptation Strategies for Ugandan Agriculture',
    author: 'Dr. Samuel Kayondo',
    publishDate: '2024-01-15',
    readTime: '8 min read',
    views: 2341,
    category: 'Climate Change',
    tags: ['Climate Adaptation', 'Agriculture', 'Uganda', 'Sustainability'],
    image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&h=600&fit=crop',
    content: `
      <p>Climate change poses significant challenges to agricultural systems across Uganda, affecting rainfall patterns, temperature ranges, and extreme weather events. As environmental consultants, we've observed firsthand how these changes impact farming communities and food security throughout East Africa.</p>

      <h2>Understanding Climate Impacts on Ugandan Agriculture</h2>
      
      <p>Uganda's agricultural sector, which employs over 70% of the population, is particularly vulnerable to climate variability. Our research has identified several key areas where climate change is having the most significant impact:</p>

      <h3>Changing Rainfall Patterns</h3>
      <p>Traditional rainy seasons are becoming increasingly unpredictable, with some regions experiencing prolonged droughts while others face unprecedented flooding. This variability makes it difficult for farmers to plan planting and harvesting schedules effectively.</p>

      <h3>Temperature Fluctuations</h3>
      <p>Rising average temperatures and increased frequency of extreme heat events are affecting crop yields, particularly for temperature-sensitive crops like coffee and tea, which are crucial to Uganda's export economy.</p>

      <h2>Adaptation Strategies We Recommend</h2>

      <p>Based on our extensive field research and collaboration with farming communities, we've developed a comprehensive set of adaptation strategies:</p>

      <h3>1. Diversified Crop Selection</h3>
      <p>Encouraging farmers to adopt drought-resistant and climate-adapted crop varieties can significantly improve resilience. We work with agricultural extension services to promote crops that can withstand variable rainfall and temperature conditions.</p>

      <h3>2. Improved Water Management</h3>
      <p>Installing efficient irrigation systems and rainwater harvesting infrastructure helps farmers maintain productivity during dry spells. Our water management projects have shown up to 40% improvement in crop yields during drought years.</p>

      <h3>3. Soil Conservation Practices</h3>
      <p>Implementing terracing, cover cropping, and organic farming practices helps maintain soil health and water retention capacity, making farmland more resilient to climate extremes.</p>

      <h2>Technology Integration</h2>

      <p>Modern technology plays a crucial role in climate adaptation. Our weather monitoring systems provide farmers with accurate, localized forecasts that enable better decision-making for planting, irrigation, and harvesting.</p>

      <h3>Mobile Weather Alerts</h3>
      <p>We've developed a mobile alert system that sends weather forecasts and agricultural advisories directly to farmers' phones, helping them prepare for adverse weather conditions.</p>

      <h2>Community-Based Solutions</h2>

      <p>Successful climate adaptation requires community involvement. We facilitate farmer training programs and establish climate-smart agriculture demonstration plots where farmers can learn and share best practices.</p>

      <h3>Farmer Field Schools</h3>
      <p>These educational programs bring together farmers to learn about climate adaptation techniques, share experiences, and develop collective responses to climate challenges.</p>

      <h2>Policy Recommendations</h2>

      <p>Effective climate adaptation also requires supportive policy frameworks. We work with government agencies to develop policies that:</p>

      <ul>
        <li>Provide financial support for climate adaptation investments</li>
        <li>Promote research and development of climate-resilient crops</li>
        <li>Establish early warning systems for extreme weather events</li>
        <li>Support infrastructure development for water management</li>
      </ul>

      <h2>Looking Forward</h2>

      <p>Climate adaptation is an ongoing process that requires continuous monitoring, evaluation, and adjustment of strategies. Our commitment is to work alongside Ugandan farmers and communities to build resilience and ensure food security in the face of climate change.</p>

      <p>Through collaborative efforts between environmental consultants, farmers, government agencies, and international partners, we can develop sustainable solutions that protect both agricultural productivity and environmental integrity.</p>

      <p>For more information about our climate adaptation services or to discuss how we can support your agricultural adaptation needs, please contact our team of experts.</p>
    `
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(prev => isLiked ? prev - 1 : prev + 1);
    toast({
      title: isLiked ? "Removed from favorites" : "Added to favorites",
      description: isLiked ? "Post unliked" : "Thanks for liking this post!",
    });
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.name && comment.message) {
      const newComment = {
        id: comments.length + 1,
        name: comment.name,
        message: comment.message,
        timestamp: 'Just now'
      };
      setComments([newComment, ...comments]);
      setComment({ name: '', message: '' });
      toast({
        title: "Comment posted!",
        description: "Thank you for sharing your thoughts.",
      });
    }
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'The Importance of Environmental Impact Assessments in Uganda',
      slug: 'importance-environmental-impact-assessments-uganda',
      category: 'Environmental Assessment',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Weather Monitoring Technologies: Revolutionizing Agriculture',
      slug: 'weather-monitoring-technologies-agriculture',
      category: 'Technology',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250&fit=crop'
    }
  ];

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
          style={{ backgroundImage: `url(${post.image})` }}
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
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-2" />
                    <span>{post.views} views</span>
                  </div>
                  <div className="flex items-center">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    <span>{comments.length} comments</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                {/* Article Body */}
                <div 
                  className="prose prose-lg max-w-none mb-12"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
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

                {/* Social Actions */}
                <div className="flex items-center justify-between p-6 bg-gray-50 rounded-lg mb-12">
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={handleLike}
                      variant={isLiked ? "default" : "outline"}
                      className={isLiked ? "bg-red-500 hover:bg-red-600" : ""}
                    >
                      <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                      {likes} Likes
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
                          <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                          <span className="text-sm text-gray-500">{comment.timestamp}</span>
                        </div>
                        <p className="text-gray-700">{comment.message}</p>
                      </div>
                    ))}
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
                        Chief Executive Officer & Lead Environmental Scientist with 15+ years of experience in climate adaptation and environmental assessment.
                      </p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Related Posts */}
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
                            src={relatedPost.image}
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
                              {relatedPost.readTime}
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </CardContent>
                </Card>

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
