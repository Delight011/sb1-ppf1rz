import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export function Header() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const linkClass = (path: string) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive(path)
        ? 'text-purple-600 bg-purple-50'
        : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
    }`;

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Sparkles className="h-8 w-8 text-purple-600" />
            <span className="ml-2 text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AstroMatch
            </span>
          </Link>
          <nav className="flex space-x-4">
            <Link to="/" className={linkClass('/')}>
              Discover
            </Link>
            <Link to="/matches" className={linkClass('/matches')}>
              Matches
            </Link>
            <Link to="/messages" className={linkClass('/messages')}>
              Messages
            </Link>
            <Link to="/profile" className={linkClass('/profile')}>
              Profile
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}