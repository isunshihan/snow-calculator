import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Navigation Links */}
          <nav>
            <ul className="flex space-x-6">
              <li><Link to="/about" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
              <li><a href="https://github.com/isunshihan/snow-calculator" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Github</a></li>
            </ul>
          </nav>
          
          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            Snow Day Calculator 2025
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
