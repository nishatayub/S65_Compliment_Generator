import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-20">
      <div className="flex justify-between items-center py-4 px-6 border-b-2 border-pink-800 bg-gradient-to-r from-pink-50 to-pink-100">
        <Link to="/" className="font-extrabold text-3xl text-pink-900 flex items-center gap-2 hover:text-pink-700 transition-colors">
          <span className="bg-gradient-to-r from-pink-700 to-pink-500 text-transparent bg-clip-text">Affirmo</span>
          <span className="bg-lime-600 h-2 w-2 rounded-full animate-pulse"></span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-10 text-lg font-medium">
            <li><Link to="/" className="text-pink-800 hover:text-pink-600 transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-pink-800 hover:text-pink-600 transition-colors">About Us</Link></li>
            <li><a href="/#services" className="text-pink-800 hover:text-pink-600 transition-colors">Services</a></li>
            <li><a href="/#contacts" className="text-pink-800 hover:text-pink-600 transition-colors">Contact</a></li>
          </ul>
          <div className="flex gap-3">
            <Link to="/login" className="px-6 py-2 bg-gradient-to-r from-pink-800 to-pink-600 rounded-full text-white hover:shadow-lg transition-all font-medium">
              Log In
            </Link>
            <Link to="/signup" className="px-6 py-2 bg-gradient-to-r from-lime-800 to-lime-600 rounded-full text-white hover:shadow-lg transition-all font-medium">
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="flex items-center p-2 rounded-md text-pink-900"
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
        <div className="md:hidden absolute w-full bg-white shadow-lg rounded-b-2xl border-b-2 border-pink-300 animate-fadeIn">
          <ul className="flex flex-col text-lg">
            <li><Link to="/" className="block px-4 py-3 text-pink-800 hover:bg-pink-50">Home</Link></li>
            <li><Link to="/about" className="block px-4 py-3 text-pink-800 hover:bg-pink-50" onClick={() => setIsMenuOpen(false)}>About Us</Link></li>
            <li><a href="/#services" className="block px-4 py-3 text-pink-800 hover:bg-pink-50" onClick={() => setIsMenuOpen(false)}>Services</a></li>
            <li><a href="/#contacts" className="block px-4 py-3 text-pink-800 hover:bg-pink-50" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
          <div className="flex flex-col gap-3 p-4">
            <Link to="/login" className="px-6 py-2 bg-gradient-to-r from-pink-800 to-pink-600 rounded-full text-white hover:opacity-90 transition-opacity text-center font-medium">
              Log In
            </Link>
            <Link to="/signup" className="px-6 py-2 bg-gradient-to-r from-lime-800 to-lime-600 rounded-full text-white hover:opacity-90 transition-opacity text-center font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
