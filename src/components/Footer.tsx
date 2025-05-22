import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Jhang Polytechnic Institute</h3>
            <p className="text-gray-300 mb-4">
              Providing quality education in technology and safety courses to empower the future workforce.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/+923001234567" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-300 hover:text-white">Our Courses</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-white">Contact Us</Link></li>
              <li><Link to="/apply" className="text-gray-300 hover:text-white">Apply Now</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li><Link to="/courses?category=Tech" className="text-gray-300 hover:text-white">Technology Courses</Link></li>
              <li><Link to="/courses?category=Safety" className="text-gray-300 hover:text-white">Safety Courses</Link></li>
              <li><Link to="/courses?type=Private" className="text-gray-300 hover:text-white">Private Certifications</Link></li>
              <li><Link to="/courses?type=Govt" className="text-gray-300 hover:text-white">Government Certifications</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-300">123 Education Street, Jhang, Punjab, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <a href="tel:+923001234567" className="text-gray-300 hover:text-white">+92 300 1234567</a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@jhanginstitute.com" className="text-gray-300 hover:text-white">info@jhanginstitute.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jhang Polytechnic Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
