import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="h-12 w-12 bg-earth-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">🌍</span>
            </div>
            <div>
              <h1 className="font-poppins font-bold text-xl text-gray-900">SMK ECOENVIRO</h1>
              <p className="text-sm text-gray-600">SOLUTIONS LIMITED</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-earth-green border-b-2 border-earth-green'
                    : 'text-gray-700 hover:text-earth-green'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-earth-green hover:bg-forest-green">
              <Link to="/contact">Get Consultation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`font-medium py-2 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-earth-green'
                      : 'text-gray-700 hover:text-earth-green'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-earth-green hover:bg-forest-green mt-4">
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Consultation
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
