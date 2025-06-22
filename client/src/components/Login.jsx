import axios  from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import Nav from './NavBar';
import Footer from './Footer';
import API_URL from '../config/api';
import p5 from '../assets/p5.jpg';

const Login = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
      setUserData({ ...userData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(`${API_URL.BASE_URL}/api/user/login`, userData);
        const data = response.data; 

        alert(data.message || 'Login successful!');
  
        setUserData({ email: '', password: '' });
        setErrorMessage(''); 
        navigate('/');
      } catch (error) {
        console.error('Signup Error:', error);
        setErrorMessage(error.response?.data?.message || 'Something went wrong. Please try again.');
      }
    };
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* Clean Login Form Section */}
      <div className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
            <p className="text-gray-600">Sign in to continue your confidence journey</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="hidden md:block relative">
              <img 
                src={p5} 
                alt="Welcome back to Affirmo" 
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-lg font-semibold mb-2">Welcome Back!</h3>
                <p className="text-sm text-gray-200">Continue spreading positivity and building confidence</p>
              </div>
            </div>
            
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="text-center mb-6">
                <div className="inline-block mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xl font-bold">A</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Sign In</h2>
                <p className="text-gray-600 text-sm">Continue your journey of self-love and positivity</p>
              </div>
            
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 text-sm">
                {errorMessage}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                <input 
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                <input 
                  type="password"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
              >
                Sign In
              </button>
            </form>

            <div className="text-center mt-6 pt-6 border-t border-gray-100">
              <p className="text-gray-600 text-sm">
                New to Affirmo? {' '}
                <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                  Create your account
                </Link>
              </p>
            </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default Login;
