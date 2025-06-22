import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Nav from './NavBar';
import Footer from './Footer';
import API_URL from '../config/api';
import p6 from '../assets/p6.jpg';

const Signup = () => {
  const [userData, setUserData] = useState({ name: '', email: '', password: '' });
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response =await axios.post(`${API_URL.BASE_URL}/api/user/add`, userData);
      const data = response.data; 
      alert(data.message || 'Signup successful!');
      
      setUserData({ name: '', email: '', password: '' });
      setErrorMessage(''); 
      navigate('/')
    } catch (error) {
      console.error('Signup Error:', error);
      setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* Hero Section with Background */}
      <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-6">
            Start Your Journey<br />
            of Self-Discovery
          </h1>
          <p className="text-yellow-100 text-lg max-w-2xl mx-auto">
            Join thousands who are building confidence, spreading joy, and discovering their worth 
            through personalized affirmations and heartfelt compliments! 🌟
          </p>
        </div>
      </div>
      
      {/* Signup Form Section */}
      <div className="bg-white py-16 -mt-10 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-yellow-500">
              <div className="text-center mb-8">
                <div className="inline-block mb-4">
                  <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">A</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Join the Affirmo Community</h2>
                <p className="text-gray-600 text-sm">Create your account and begin your confidence journey today</p>
              </div>
              
              {errorMessage && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                  {errorMessage}
                </div>
              )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={userData.name} 
                  placeholder="Enter your full name"
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={userData.email}  
                  placeholder="Enter your email"
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input 
                  type="password" 
                  name="password"
                  value={userData.password}
                  placeholder="Create a secure password"
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Create Account & Start Affirming
              </button>
            </form>

            <div className="text-center mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                Already part of our community? {' '}
                <Link to="/login" className="font-semibold text-yellow-600 hover:text-yellow-700 transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
            </div>
            
            {/* Image Section */}
            <div className="hidden md:block relative">
              <img 
                src={p6} 
                alt="Join the Affirmo community and start your confidence journey" 
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-xl font-bold mb-2">Join Our Community!</h3>
                <p className="text-sm text-yellow-100">Start building confidence and spreading joy today</p>
              </div>
            </div>
          </div>
          
          {/* Motivational Quote */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm italic">
              &quot;Your confidence journey begins with a single step. Take it with Affirmo.&quot; 🌟
            </p>
          </div>
          
          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl mb-2">💝</div>
              <h4 className="font-semibold text-gray-800 text-sm">Send Love</h4>
              <p className="text-xs text-gray-600 mt-1">Share compliments with friends</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl mb-2">🌟</div>
              <h4 className="font-semibold text-gray-800 text-sm">Get Affirmed</h4>
              <p className="text-xs text-gray-600 mt-1">Receive personalized affirmations</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl mb-2">💪</div>
              <h4 className="font-semibold text-gray-800 text-sm">Build Confidence</h4>
              <p className="text-xs text-gray-600 mt-1">Strengthen your self-worth daily</p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Signup;
