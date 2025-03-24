import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

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
      const response = await axios.post('http://localhost:8080/api/user/add', userData);
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
    <div className="flex justify-center items-center min-h-screen bg-red-20se0">
      <div className="w-96 p-8 bg-white shadow-2xl rounded-3xl border-4 border-pink-700">
        <h2 className="text-4xl font-extrabold text-lime-800 text-center mb-6">Join Us! 🎉</h2>

        {errorMessage && <p className="text-red-600 text-center mb-4">{errorMessage}</p>}

        <form onSubmit={handleSubmit}>
          <label className="block text-xl font-medium text-pink-800 mb-2">Full Name</label>
          <input 
            type="text" name="name"
            value={userData.name} 
            placeholder="Enter your full name"
            onChange={handleChange}
            className="w-full px-4 py-2 text-lg text-gray-700 border border-pink-800 rounded-lg focus:ring-2 focus:ring-pink-600 outline-none"
          />

          <label className="block text-xl font-medium text-pink-800 mt-4 mb-2">Email</label>
          <input 
            type="email" name="email"
            value={userData.email}  
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full px-4 py-2 text-lg text-gray-700 border border-pink-800 rounded-lg focus:ring-2 focus:ring-pink-600 outline-none"
          />

          <label className="block text-xl font-medium text-pink-800 mt-4 mb-2">Password</label>
          <input 
            type="password" name="password"
            value={userData.password}
            placeholder="Create a password"
            onChange={handleChange}
            className="w-full px-4 py-2 text-lg text-gray-700 border border-pink-800 rounded-lg focus:ring-2 focus:ring-pink-600 outline-none"
          />

          <button 
            type="submit"
            className="mt-6 w-full bg-lime-800 text-white text-lg font-semibold py-2 rounded-lg hover:bg-lime-700 transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-pink-800 mt-4">
          Already have an account? <Link to="/login" className="font-bold text-lime-800 hover:underline" >Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
