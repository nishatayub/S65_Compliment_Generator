import { useState } from "react";
import axios from "axios";
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import API_URL from '../config/api';

const SendCompliment = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  
  const handleSubmit = async () => {

    try {
      const endpoint = "/api/compliment/send-email";
      const response = await axios.post(`${API_URL.BASE_URL}${endpoint}`, {
        message,
        recipient,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Failed to send compliment!", error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Navigation */}
        <Nav />
        
        <div className="flex flex-col justify-center items-center p-6 mt-4 relative">
          {/* Decorative floating elements */}
          <div className="absolute top-40 left-20 w-16 h-16 bg-pink-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-60 right-40 w-20 h-20 bg-lime-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-40 left-40 w-12 h-12 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
          
          <div className="w-full max-w-lg p-8 bg-white shadow-2xl rounded-3xl border-4 border-pink-700 relative overflow-hidden backdrop-blur-sm bg-opacity-90">
            {/* Decorative background elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full z-0"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-lime-200 to-lime-100 rounded-full z-0"></div>
            <div className="absolute right-20 bottom-20 w-20 h-20 bg-gradient-to-br from-pink-300 to-pink-200 rounded-full z-0 animate-ping opacity-30"></div>
            
            <div className="relative z-10">
              <div className="relative">
                <h2 className="text-4xl font-extrabold text-center mb-2">
                  <span className="bg-gradient-to-r from-pink-700 to-pink-500 text-transparent bg-clip-text">Share the Joy</span>
                </h2>
                <div className="flex justify-center mb-6 relative">
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-300 rounded-full animate-ping opacity-60"></div>
                  <span className="text-5xl transform hover:scale-110 transition-transform cursor-pointer">💌</span>
                </div>
                <p className="text-center text-pink-700 mb-8 font-medium italic">Send a heartfelt compliment to brighten someone's day!</p>
              </div>
              
              <div className="mb-6 transform hover:scale-101 transition-all">
                <label className="block text-pink-800 font-semibold mb-2 text-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  Your Compliment
                </label>
                <textarea
                  className="w-full p-4 border-2 border-pink-700 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-pink-600 bg-white shadow-inner hover:border-pink-500 transition-colors placeholder-pink-300"
                  rows="5"
                  placeholder="Write your heartfelt message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <p className="text-xs text-pink-500 mt-1 ml-2 italic">Share kind words that will make someone smile!</p>
              </div>
              
              <div className="mb-8 transform hover:scale-101 transition-all">
                <label className="block text-pink-800 font-semibold mb-2 text-lg flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-pink-600" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Recipient's Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    className="w-full p-4 pl-10 border-2 border-pink-700 rounded-xl text-xl focus:outline-none focus:ring-2 focus:ring-pink-600 bg-white shadow-inner hover:border-pink-500 transition-colors placeholder-pink-300"
                    placeholder="friend@example.com"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                </div>
                <p className="text-xs text-pink-500 mt-1 ml-2 italic">We'll deliver your compliment right to their inbox!</p>
              </div>
              
              <button
                onClick={() => handleSubmit("email")}
                className="w-full bg-gradient-to-r from-lime-800 to-lime-600 text-white text-xl font-bold py-4 px-6 rounded-xl hover:shadow-xl transition transform hover:-translate-y-1 flex items-center justify-center relative overflow-hidden group"
              >
                <span className="absolute right-0 w-8 h-full bg-white opacity-10 transform -skew-x-10 transition-transform duration-700 group-hover:translate-x-20"></span>
                <span className="mr-2">Send Compliment</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
              
              <div className="mt-8 text-center">
                <Link to="/" className="text-pink-700 hover:text-pink-500 font-medium flex items-center justify-center group transition-all duration-300 hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center mt-6 text-pink-800 font-medium animate-pulse">
            Spread kindness, one compliment at a time! ✨
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default SendCompliment;