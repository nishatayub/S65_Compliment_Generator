import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand & Mission */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">A</span>
              </div>
              <span className="font-bold text-2xl">affirmo</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-md">
              Building confidence and making self-worth unforgettable. Join thousands who are 
              discovering their inner strength through personalized affirmations and spreading 
              joy through heartfelt compliments.
            </p>
            <div className="flex gap-4">
              <Link 
                to="/sendcompliment" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
              >
                Send Love
              </Link>
              <Link 
                to="/receivecompliment" 
                className="bg-teal-400 hover:bg-teal-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all"
              >
                Get Affirmed
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Quick Links</h4>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-300 hover:text-white transition-colors text-sm">Home</Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">About Us</Link>
              <Link to="/sendcompliment" className="block text-gray-300 hover:text-white transition-colors text-sm">Send Compliments</Link>
              <Link to="/receivecompliment" className="block text-gray-300 hover:text-white transition-colors text-sm">Get Affirmations</Link>
              <Link to="/login" className="block text-gray-300 hover:text-white transition-colors text-sm">Login</Link>
              <Link to="/signup" className="block text-gray-300 hover:text-white transition-colors text-sm">Sign Up</Link>
            </div>
          </div>
          
          {/* Community */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-yellow-400">Community</h4>
            <div className="space-y-3">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Success Stories</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Daily Inspiration</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Support</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">FAQ</a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm">Contact Us</a>
            </div>
          </div>
        </div>
        
        {/* Social Media & Newsletter */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h5 className="font-semibold text-lg mb-3 text-yellow-400">Stay Connected</h5>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">@</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer">
                  <span className="text-white text-sm font-bold">p</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <h5 className="font-semibold text-lg mb-3 text-yellow-400">Daily Positivity</h5>
              <p className="text-gray-300 text-sm mb-3">Get uplifting messages delivered to your inbox</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-2 rounded-full text-gray-800 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-full text-sm font-medium transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-gray-400 text-sm mb-2">
            © 2024 Affirmo. All rights reserved. Spreading positivity, one compliment at a time. ✨
          </p>
          <div className="flex justify-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;