import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="z-20 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0">
      <div className="flex justify-between items-center py-4 px-6 max-w-6xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img 
            src="/favicon.ico" 
            alt="Affirmo Logo" 
            className="w-8 h-8"
          />
          <div className="flex flex-col">
            <span className="font-bold text-xl text-gray-800">affirmo</span>
            <span className="text-xs text-gray-500 -mt-1">Spread Positivity</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <Link 
                to="/about" 
                className={`px-4 py-2 rounded-full transition-all ${
                  isActiveLink('/about') 
                    ? 'bg-purple-100 text-purple-700 font-semibold' 
                    : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                }`}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link 
                to="/sendcompliment" 
                className={`px-4 py-2 rounded-full transition-all ${
                  isActiveLink('/sendcompliment') 
                    ? 'bg-pink-100 text-pink-700 font-semibold' 
                    : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
                }`}
              >
                Send Love
              </Link>
            </li>
            <li>
              <Link 
                to="/receivecompliment" 
                className={`px-4 py-2 rounded-full transition-all ${
                  isActiveLink('/receivecompliment') 
                    ? 'bg-teal-100 text-teal-700 font-semibold' 
                    : 'text-gray-600 hover:text-teal-600 hover:bg-teal-50'
                }`}
              >
                Get Affirmed
              </Link>
            </li>
          </ul>
          
          {/* User Actions */}
          <div className="flex items-center gap-3">
            <Link 
              to="/login" 
              className="text-gray-600 hover:text-gray-800 font-medium text-sm transition-colors"
            >
              Sign In
            </Link>
            <Link 
              to="/signup" 
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg"
            >
              Join Free
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="flex items-center p-2 rounded-xl text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-xl rounded-b-2xl border-t border-gray-100">
          <div className="px-6 py-4">
            <ul className="flex flex-col gap-2 text-sm font-medium mb-4">
              <li>
                <Link 
                  to="/about" 
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActiveLink('/about') 
                      ? 'bg-purple-100 text-purple-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/sendcompliment" 
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActiveLink('/sendcompliment') 
                      ? 'bg-pink-100 text-pink-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Send Love
                </Link>
              </li>
              <li>
                <Link 
                  to="/receivecompliment" 
                  className={`block px-4 py-3 rounded-lg transition-all ${
                    isActiveLink('/receivecompliment') 
                      ? 'bg-teal-100 text-teal-700 font-semibold' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Affirmed
                </Link>
              </li>
            </ul>
            
            <div className="flex gap-3 pt-4 border-t border-gray-200">
              <Link 
                to="/login" 
                className="flex-1 text-center text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 rounded-lg font-medium transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
