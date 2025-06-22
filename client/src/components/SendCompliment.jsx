import { useState } from "react";
import axios from "axios";
import Nav from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import API_URL from '../config/api';

const SendCompliment = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  
  const handleSubmit = async () => {
    if (!message || !recipient) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const endpoint = "/api/compliment/send-email";
      console.log(`Sending request to: ${API_URL.BASE_URL}${endpoint}`);
      
      // Configure axios with CORS headers
      const response = await axios.post(`${API_URL.BASE_URL}${endpoint}`, {
        message,
        recipient,
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        withCredentials: false // Important for CORS
      });
      
      alert(response.data.message || "Compliment sent successfully!");
    } catch (error) {
      console.error("Error sending compliment:", error);
      alert(`Failed to send compliment: ${error.response?.data?.message || error.message || 'Unknown error'}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* Main Content Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            {/* Left Side - Description */}
            <div className="bg-gradient-to-br from-pink-50 to-red-50 rounded-2xl p-8 shadow-lg h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  💌
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Send Love &<br />
                  Spread Joy
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Share a heartfelt compliment and brighten someone&apos;s day. Your words have the power 
                  to uplift, inspire, and create beautiful moments! 💝
                </p>
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-pink-600 text-sm">💝</span>
                  </div>
                  <span className="text-gray-700 text-sm">Express genuine appreciation</span>
                </div>
                
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-sm">✨</span>
                  </div>
                  <span className="text-gray-700 text-sm">Make someone&apos;s day brighter</span>
                </div>
                
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <span className="text-orange-600 text-sm">🌟</span>
                  </div>
                  <span className="text-gray-700 text-sm">Strengthen relationships</span>
                </div>
              </div>
              
              <div className="mt-8 bg-white rounded-lg p-4 shadow-sm">
                <h4 className="font-semibold text-gray-800 mb-2">💡 Tips for Great Compliments:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Be specific and genuine</li>
                  <li>• Share a memory or moment</li>
                  <li>• Highlight their unique qualities</li>
                  <li>• Express gratitude for their impact</li>
                </ul>
              </div>
            </div>
            
            {/* Right Side - Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-pink-500 h-full flex flex-col">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Craft Your Compliment</h3>
                <p className="text-gray-600 text-sm">Write a message that will make someone smile and feel appreciated</p>
              </div>
               <div className="space-y-6 flex-grow">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Heartfelt Message
                  </label>
                  <textarea
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all resize-none"
                    rows="6"
                    placeholder="Write something beautiful... Express what makes this person special, acknowledge their strengths, or share how they've made a positive impact on your life."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-2">💡 Tip: Be specific and genuine. Share a memory, highlight their unique qualities, or express gratitude.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Recipient&apos;s Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 text-gray-700 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none transition-all"
                    placeholder="friend@example.com"
                    value={recipient}
                    onChange={(e) => setRecipient(e.target.value)}
                  />
                  <p className="text-xs text-gray-500 mt-2">✨ We&apos;ll deliver your compliment with care and love!</p>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>💌</span>
                  Send Your Compliment
                </button>
              </div>
              
              <div className="text-center mt-auto pt-6 border-t border-gray-100">
                <p className="text-gray-600 text-sm">
                  Want to receive some love too? {' '}
                  <Link to="/receivecompliment" className="font-semibold text-pink-600 hover:text-pink-700 transition-colors">
                    Get your affirmation
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
};

export default SendCompliment;