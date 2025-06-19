import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NotFound = () => {
  const quickLinks = [
    { name: 'Environmental Services', path: '/services' },
    { name: 'Our Projects', path: '/projects' },
    { name: 'Expert Team', path: '/team' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Latest Blog Posts', path: '/blog' },
    { name: 'Career Opportunities', path: '/careers' }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Error Image/Icon */}
            <div className="mb-8">
              <div className="w-32 h-32 bg-earth-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-6xl">🌍</span>
              </div>
              <h1 className="font-poppins text-6xl md:text-8xl font-bold text-earth-green mb-4">
                404
              </h1>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Page Not Found
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved to help protect our environment.
              </p>
            </div>

            {/* Search Bar */}
            <div className="mb-12">
              <div className="max-w-md mx-auto flex space-x-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    type="text"
                    placeholder="Search our site..."
                    className="pl-10"
                  />
                </div>
                <Button className="bg-earth-green hover:bg-forest-green">
                  Search
                </Button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild size="lg" className="bg-earth-green hover:bg-forest-green">
                <a href="https://ecoenviro-solutions-hub.vercel.app/">
                  <Home className="mr-2 h-5 w-5" />
                  Go to Homepage
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="javascript:history.back()">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Go Back
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mb-12">
              <h3 className="font-poppins text-2xl font-semibold text-gray-900 mb-6">
                Explore Our Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.path}
                    className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-earth-green group"
                  >
                    <span className="text-gray-700 group-hover:text-earth-green font-medium">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Help Section */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-poppins text-xl font-semibold text-gray-900 mb-4">
                Need Environmental Consultation?
              </h3>
              <p className="text-gray-600 mb-6">
                While you're here, why not learn about our environmental and climate solutions? 
                Our expert team is ready to help with your sustainability challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-earth-green hover:bg-forest-green">
                  <Link to="/contact">
                    Get Free Consultation
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link to="/services">
                    View Our Services
                  </Link>
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-12 text-gray-600">
              <p className="mb-2">
                Still having trouble? Contact our support team:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center text-earth-green">
                <a href="tel:+256701492351" className="hover:underline">
                  📞 +256 701492351
                </a>
                <a href="mailto:info@smkecoenvirosolutions.com" className="hover:underline">
                  ✉️ info@smkecoenvirosolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
