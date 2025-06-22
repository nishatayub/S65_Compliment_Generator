import { useState } from 'react';
import compliments from '../../../server/utils/compliments';
import { Link } from 'react-router-dom';
import Nav from './NavBar';
import Footer from './Footer';

const ReceiveCompliment = () => {
  const [selectedMood, setSelectedMood] = useState('');
  const [compliment, setCompliment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const fetchCompliment = () => {
    try {
      if (!selectedMood) {
        throw new Error("Please select a mood first!");
      }

      const moodCompliments = compliments[selectedMood];

      if (!moodCompliments || moodCompliments.length === 0) {
        throw new Error("No compliments available for this mood. Try another one!");
      }

      const randomCompliment = moodCompliments[Math.floor(Math.random() * moodCompliments.length)];
      setCompliment(randomCompliment);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
      setCompliment('');
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
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-2xl p-8 shadow-lg h-full flex flex-col">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  🎁
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Receive Your<br />
                  Personal Affirmation
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Sometimes we all need a reminder of how amazing we are. Get a personalized 
                  affirmation tailored to your current mood and let it brighten your day! 🌟
                </p>
              </div>
              
              <div className="space-y-4 flex-grow">
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-teal-600 text-sm">🌟</span>
                  </div>
                  <span className="text-gray-700 text-sm">Mood-based affirmations</span>
                </div>
                
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">💎</span>
                  </div>
                  <span className="text-gray-700 text-sm">Boost your self-confidence</span>
                </div>
                
                <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-sm">✨</span>
                  </div>
                  <span className="text-gray-700 text-sm">Instant mood uplift</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Affirmation Tool */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-teal-500 h-full flex flex-col">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Your Personalized Affirmation</h3>
                <p className="text-gray-600 text-sm">Choose how you&apos;re feeling and receive a message crafted just for you</p>
              </div>

              <div className="flex-grow">
                {selectedMood === '' ? (
                  <div className="space-y-4">
                    <p className="text-center text-lg font-medium text-gray-700 mb-6">
                      How are you feeling today?
                    </p>
                    <div className="space-y-3">
                      {Object.keys(compliments).map((mood) => {
                        // Create custom display names for long mood types
                        let displayName;
                        let emoji;
                        switch(mood) {
                          case 'cheerfulCompliments':
                            displayName = 'Cheerful & Happy';
                            emoji = '😊';
                            break;
                          case 'comfortingCompliments':
                            displayName = 'Need Comfort';
                            emoji = '🤗';
                            break;
                          case 'motivationalCompliments':
                            displayName = 'Need Motivation';
                            emoji = '💪';
                            break;
                          case 'soothingCompliments':
                            displayName = 'Feeling Stressed';
                            emoji = '😌';
                            break;
                          default:
                            displayName = mood.charAt(0).toUpperCase() + mood.slice(1);
                            emoji = '💖';
                        }
                        
                        return (
                          <button
                            key={mood}
                            onClick={() => setSelectedMood(mood)}
                            className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3"
                          >
                            <span className="text-2xl">{emoji}</span>
                            <span>{displayName}</span>
                          </button>
                        );
                      })}
                    </div>
                    <p className="text-center text-gray-500 text-sm mt-6">
                      Select the option that best matches your current mood
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {errorMessage && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                        {errorMessage}
                      </div>
                    )}
                    
                    {compliment && (
                      <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-lg border border-blue-200">
                        <div className="text-center mb-4">
                          <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto">
                            <span className="text-2xl">✨</span>
                          </div>
                        </div>
                        <blockquote className="text-center text-gray-800 font-medium text-lg leading-relaxed">
                          &ldquo;{compliment}&rdquo;
                        </blockquote>
                      </div>
                    )}
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={fetchCompliment}
                        className="flex-1 bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-semibold py-3 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                      >
                        {compliment ? 'Get Another Affirmation' : 'Get My Affirmation'} ✨
                      </button>
                      
                      <button
                        onClick={() => {
                          setSelectedMood('');
                          setCompliment('');
                          setErrorMessage('');
                        }}
                        className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-all"
                      >
                        Change Mood
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="text-center mt-auto pt-6 border-t border-gray-100">
                <p className="text-gray-600 text-sm">
                  Want to spread some love too? {' '}
                  <Link to="/sendcompliment" className="font-semibold text-teal-600 hover:text-teal-700 transition-colors">
                    Send a compliment
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

export default ReceiveCompliment;
