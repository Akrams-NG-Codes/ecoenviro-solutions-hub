
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Plus, Edit, Trash2, Eye, Lock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: 'Climate Change Adaptation Strategies for Ugandan Agriculture',
      category: 'Climate Change',
      status: 'Published',
      views: 2341,
      likes: 87,
      comments: 23,
      publishDate: '2024-01-15'
    },
    {
      id: 2,
      title: 'The Importance of Environmental Impact Assessments in Uganda',
      category: 'Environmental Assessment',
      status: 'Published',
      views: 1876,
      likes: 62,
      comments: 18,
      publishDate: '2024-01-10'
    },
    {
      id: 3,
      title: 'Weather Monitoring Technologies: Revolutionizing Agriculture',
      category: 'Technology',
      status: 'Draft',
      views: 0,
      likes: 0,
      comments: 0,
      publishDate: null
    }
  ]);

  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    content: '',
    tags: ''
  });

  const [editingPost, setEditingPost] = useState(null);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple authentication - in production, this would be more secure
    if (credentials.username === 'admin' && credentials.password === 'smkecoenvirosolutions2024') {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the admin panel",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    const post = {
      id: blogPosts.length + 1,
      ...newPost,
      status: 'Draft',
      views: 0,
      likes: 0,
      comments: 0,
      publishDate: null
    };
    setBlogPosts([...blogPosts, post]);
    setNewPost({ title: '', category: '', content: '', tags: '' });
    toast({
      title: "Post created",
      description: "New blog post has been created as draft",
    });
  };

  const handlePublishPost = (id: number) => {
    setBlogPosts(posts => posts.map(post => 
      post.id === id 
        ? { ...post, status: 'Published', publishDate: new Date().toISOString().split('T')[0] }
        : post
    ));
    toast({
      title: "Post published",
      description: "Blog post is now live",
    });
  };

  const handleDeletePost = (id: number) => {
    setBlogPosts(posts => posts.filter(post => post.id !== id));
    toast({
      title: "Post deleted",
      description: "Blog post has been removed",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center bg-gray-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-center flex items-center justify-center">
                <Lock className="mr-2 h-5 w-5" />
                Admin Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                    Username
                  </label>
                  <Input
                    id="username"
                    type="text"
                    value={credentials.username}
                    onChange={(e) => setCredentials(prev => ({ ...prev, username: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={credentials.password}
                    onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-earth-green hover:bg-forest-green">
                  Login
                </Button>
              </form>
              <div className="mt-4 text-sm text-gray-600 text-center">
                Demo credentials: admin / smkecoenvirosolutions2024
              </div>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="font-poppins text-3xl font-bold">Admin Panel</h1>
            <Button 
              onClick={() => setIsAuthenticated(false)}
              variant="outline"
            >
              Logout
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Create New Post */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="mr-2 h-5 w-5" />
                    Create New Post
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCreatePost} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Title
                      </label>
                      <Input
                        value={newPost.title}
                        onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category
                      </label>
                      <Input
                        value={newPost.category}
                        onChange={(e) => setNewPost(prev => ({ ...prev, category: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content
                      </label>
                      <Textarea
                        rows={8}
                        value={newPost.content}
                        onChange={(e) => setNewPost(prev => ({ ...prev, content: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tags (comma separated)
                      </label>
                      <Input
                        value={newPost.tags}
                        onChange={(e) => setNewPost(prev => ({ ...prev, tags: e.target.value }))}
                        placeholder="climate, agriculture, sustainability"
                      />
                    </div>
                    <Button type="submit" className="w-full bg-earth-green hover:bg-forest-green">
                      Create Draft
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Manage Posts */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Manage Blog Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {blogPosts.map((post) => (
                      <div key={post.id} className="border rounded-lg p-4 bg-white">
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg">{post.title}</h3>
                            <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                              <Badge variant="outline">{post.category}</Badge>
                              <Badge 
                                className={post.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                              >
                                {post.status}
                              </Badge>
                              {post.publishDate && (
                                <span>Published: {post.publishDate}</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                          <div className="flex space-x-4">
                            <span className="flex items-center">
                              <Eye className="h-4 w-4 mr-1" />
                              {post.views}
                            </span>
                            <span>{post.likes} likes</span>
                            <span>{post.comments} comments</span>
                          </div>
                        </div>

                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4 mr-1" />
                            Edit
                          </Button>
                          {post.status === 'Draft' && (
                            <Button 
                              size="sm" 
                              className="bg-earth-green hover:bg-forest-green"
                              onClick={() => handlePublishPost(post.id)}
                            >
                              Publish
                            </Button>
                          )}
                          <Button 
                            size="sm" 
                            variant="destructive"
                            onClick={() => handleDeletePost(post.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminPanel;
