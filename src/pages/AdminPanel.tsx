
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
import { supabase } from '@/integrations/supabase/client';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

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

const AdminPanel = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [newPost, setNewPost] = useState({
    title: '',
    category: '',
    content: '',
    excerpt: '',
    author: '',
    tags: '',
    read_time: '',
    featured_image: ''
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch blog posts
  const { data: blogPosts = [], isLoading } = useQuery({
    queryKey: ['admin-blog-posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as BlogPost[];
    },
    enabled: isAuthenticated,
  });

  // Generate slug from title
  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, '')
      .replace(/\s+/g, '-');
  };

  // Create post mutation
  const createPostMutation = useMutation({
    mutationFn: async (postData: any) => {
      const slug = generateSlug(postData.title);
      const tags = postData.tags ? postData.tags.split(',').map((tag: string) => tag.trim()) : [];
      
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([{
          ...postData,
          slug,
          tags,
          status: 'draft'
        }])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      setNewPost({
        title: '',
        category: '',
        content: '',
        excerpt: '',
        author: '',
        tags: '',
        read_time: '',
        featured_image: ''
      });
      toast({
        title: "Post created",
        description: "New blog post has been created as draft",
      });
    },
    onError: (error) => {
      toast({
        title: "Error creating post",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  // Publish post mutation
  const publishPostMutation = useMutation({
    mutationFn: async (id: string) => {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({ 
          status: 'published', 
          published_at: new Date().toISOString() 
        })
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast({
        title: "Post published",
        description: "Blog post is now live",
      });
    },
    onError: (error) => {
      toast({
        title: "Error publishing post",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  // Delete post mutation
  const deletePostMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['admin-blog-posts'] });
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
      toast({
        title: "Post deleted",
        description: "Blog post has been removed",
      });
    },
    onError: (error) => {
      toast({
        title: "Error deleting post",
        description: error.message,
        variant: "destructive",
      });
    }
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
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
    if (!newPost.title || !newPost.content || !newPost.author || !newPost.category) {
      toast({
        title: "Missing fields",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    createPostMutation.mutate(newPost);
  };

  const handlePublishPost = (id: string) => {
    publishPostMutation.mutate(id);
  };

  const handleDeletePost = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      deletePostMutation.mutate(id);
    }
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
                        Title *
                      </label>
                      <Input
                        value={newPost.title}
                        onChange={(e) => setNewPost(prev => ({ ...prev, title: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author *
                      </label>
                      <Input
                        value={newPost.author}
                        onChange={(e) => setNewPost(prev => ({ ...prev, author: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Category *
                      </label>
                      <Input
                        value={newPost.category}
                        onChange={(e) => setNewPost(prev => ({ ...prev, category: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Excerpt
                      </label>
                      <Textarea
                        rows={3}
                        value={newPost.excerpt}
                        onChange={(e) => setNewPost(prev => ({ ...prev, excerpt: e.target.value }))}
                        placeholder="Brief description of the post"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Content *
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
                        Featured Image URL
                      </label>
                      <Input
                        value={newPost.featured_image}
                        onChange={(e) => setNewPost(prev => ({ ...prev, featured_image: e.target.value }))}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Read Time
                      </label>
                      <Input
                        value={newPost.read_time}
                        onChange={(e) => setNewPost(prev => ({ ...prev, read_time: e.target.value }))}
                        placeholder="5 min read"
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
                    <Button 
                      type="submit" 
                      className="w-full bg-earth-green hover:bg-forest-green"
                      disabled={createPostMutation.isPending}
                    >
                      {createPostMutation.isPending ? 'Creating...' : 'Create Draft'}
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
                  {isLoading ? (
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-earth-green mx-auto mb-2"></div>
                      <p className="text-gray-600">Loading posts...</p>
                    </div>
                  ) : blogPosts.length === 0 ? (
                    <div className="text-center py-8">
                      <p className="text-gray-600">No blog posts yet. Create your first post!</p>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {blogPosts.map((post) => (
                        <div key={post.id} className="border rounded-lg p-4 bg-white">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{post.title}</h3>
                              <p className="text-sm text-gray-600 mt-1">by {post.author}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                                <Badge variant="outline">{post.category}</Badge>
                                <Badge 
                                  className={post.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                                >
                                  {post.status}
                                </Badge>
                                {post.published_at && (
                                  <span>Published: {new Date(post.published_at).toLocaleDateString()}</span>
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
                              <span>{post.comments_count} comments</span>
                            </div>
                          </div>

                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4 mr-1" />
                              Edit
                            </Button>
                            {post.status === 'draft' && (
                              <Button 
                                size="sm" 
                                className="bg-earth-green hover:bg-forest-green"
                                onClick={() => handlePublishPost(post.id)}
                                disabled={publishPostMutation.isPending}
                              >
                                {publishPostMutation.isPending ? 'Publishing...' : 'Publish'}
                              </Button>
                            )}
                            <Button 
                              size="sm" 
                              variant="destructive"
                              onClick={() => handleDeletePost(post.id)}
                              disabled={deletePostMutation.isPending}
                            >
                              <Trash2 className="h-4 w-4 mr-1" />
                              {deletePostMutation.isPending ? 'Deleting...' : 'Delete'}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
