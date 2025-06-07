
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest environmental insights and updates.",
      });
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-earth-green to-forest-green">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Environmental Insights
            </h2>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Get the latest environmental news, weather updates, and sustainability tips delivered to your inbox
            </p>
          </div>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
            <div className="flex space-x-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder-green-200"
                required
              />
              <Button 
                type="submit"
                className="bg-white text-earth-green hover:bg-green-50 px-6"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </Button>
            </div>
          </form>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-green-100">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">📊</span>
              </div>
              <span>Weekly Weather Reports</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">🌱</span>
              </div>
              <span>Sustainability Tips</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-sm">📢</span>
              </div>
              <span>Industry Updates</span>
            </div>
          </div>

          <p className="text-green-200 text-sm mt-6">
            No spam, unsubscribe at any time. Your privacy is our priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
