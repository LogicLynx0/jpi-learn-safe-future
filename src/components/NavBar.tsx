
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import WhatsAppButton from './WhatsAppButton';

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-institute-blue">JPI</span>
              <span className="ml-2 text-lg font-medium">Jhang Polytechnic Institute</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-institute-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild variant="default" className="bg-institute-blue hover:bg-blue-800 ml-4">
                <Link to="/apply">Apply Now</Link>
              </Button>
            </div>
          </div>

          {/* Social Media - Desktop */}
          <div className="hidden md:flex items-center space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-institute-blue">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-institute-blue">
              <Instagram size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-institute-blue focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn("md:hidden", isOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-institute-blue hover:bg-gray-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild variant="default" className="bg-institute-blue hover:bg-blue-800 w-full mt-2">
            <Link to="/apply" onClick={() => setIsOpen(false)}>Apply Now</Link>
          </Button>
          
          {/* Social Media - Mobile */}
          <div className="flex items-center space-x-4 pt-4 px-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-institute-blue">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-institute-blue">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Button */}
      <WhatsAppButton />
    </nav>
  );
};

export default NavBar;
