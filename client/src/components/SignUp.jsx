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
      
      {/* Clean Signup Form Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Join Affirmo</h1>
            <p className="text-gray-600">Create your account and start your confidence journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-block mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">A</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Create Account</h2>
                <p className="text-gray-600 text-sm">Begin your journey with personalized affirmations</p>
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
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
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
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
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
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition-all"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Create Account
              </button>
            </form>

            <div className="text-center mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                Already have an account? {' '}
                <Link to="/login" className="font-semibold text-orange-600 hover:text-orange-700 transition-colors">
                  Sign in here
                </Link>
              </p>
            </div>
            </div>
            
            {/* Image Section */}
            <div className="hidden md:block relative">
              <img 
                src={p6} 
                alt="Join Affirmo community" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Start Your Journey</h3>
                <p className="text-sm text-gray-200">Build confidence with personalized affirmations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Signup;
