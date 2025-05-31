import { useState } from 'react';
import compliments from '../../../backend/utils/compliments';
import { Link } from 'react-router-dom';
import Nav from './Nav';
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
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Navigation */}
        <Nav />
        
        <div className="flex flex-col justify-center items-center p-6 mt-8 relative">
          {/* Decorative floating elements */}
          <div className="absolute top-40 right-20 w-16 h-16 bg-pink-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute top-60 left-40 w-20 h-20 bg-lime-300 rounded-full animate-pulse opacity-40"></div>
          <div className="absolute bottom-40 right-40 w-12 h-12 bg-pink-400 rounded-full animate-pulse opacity-40"></div>
          
          <div className="w-full max-w-xl p-4 sm:p-8 bg-white shadow-2xl rounded-3xl border-4 border-pink-700 relative overflow-hidden backdrop-blur-sm bg-opacity-90">
            {/* Decorative background elements */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full z-0"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-lime-200 to-lime-100 rounded-full z-0"></div>
            
            <div className="relative z-10 w-full">
              <div className="flex items-center justify-center mb-4 flex-wrap">
                <span className="text-5xl transform hover:rotate-12 transition-transform cursor-pointer mr-3">🎁</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-pink-400">
                  Receive a Compliment
                </h2>
              </div>
              
              <div className="h-1 w-2/3 bg-gradient-to-r from-pink-500 to-lime-500 rounded-full mx-auto mb-6"></div>

              {selectedMood === '' ? (
                <>
                  <p className="text-center text-xl font-semibold text-pink-800 mb-6 italic">
                    What kind of compliment would brighten your day?
                  </p>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.keys(compliments).map((mood) => {
                      // Create custom display names for long mood types
                      let displayName;
                      switch(mood) {
                        case 'cheerfulCompliments':
                          displayName = 'Cheerful';
                          break;
                        case 'comfortingCompliments':
                          displayName = 'Comforting';
                          break;
                        case 'motivationalCompliments':
                          displayName = 'Motivational';
                          break;
                        case 'soothingCompliments':
                          displayName = 'Soothing';
                          break;
                        default:
                          displayName = mood.charAt(0).toUpperCase() + mood.slice(1);
                      }
                      
                      return (
                        <button
                          key={mood}
                          onClick={() => setSelectedMood(mood)}
                          className="bg-gradient-to-r from-pink-700 to-pink-500 text-white text-lg font-semibold py-3 px-4 rounded-xl hover:shadow-lg transition-all transform hover:-translate-y-1 hover:from-pink-600 hover:to-pink-400 flex items-center justify-center w-full"
                        >
                          <span className="mr-2">{mood.includes('cheerful') ? '😊' : 
                                               mood.includes('comforting') ? '🤗' : 
                                               mood.includes('motivational') ? '💪' : 
                                               mood.includes('soothing') ? '😌' : '💖'}</span>
                          <span>{displayName} Compliments</span>
                        </button>
                      );
                    })}
                  </div>
                  <p className="text-center text-pink-600 font-medium mt-6 text-sm">
                    Select a category for your personalized compliment!
                  </p>
                </>
              ) : (
                <div className="transition-all duration-500 ease-in-out">
                  {errorMessage && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded-lg">
                      <p className="font-medium">{errorMessage}</p>
                    </div>
                  )}
                  
                  {compliment && (
                    <div className="bg-gradient-to-r from-pink-50 to-lime-50 p-4 sm:p-6 rounded-2xl border-2 border-pink-200 shadow-inner mb-6 transform transition-all hover:shadow-md">
                      <div className="flex justify-center mb-2">
                        <div className="h-8 w-8 rounded-full bg-pink-100 flex items-center justify-center">
                          <span className="text-xl animate-bounce">💫</span>
                        </div>
                      </div>
                      <p className="text-center text-pink-800 font-bold text-base md:text-lg leading-relaxed break-words">
                        &ldquo;{compliment}&rdquo;
                      </p>
                    </div>
                  )}
                  
                  <button
                    onClick={fetchCompliment}
                    className="mt-6 w-full bg-gradient-to-r from-lime-800 to-lime-600 text-white text-lg font-bold py-3 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center"
                  >
                    <span className="mr-2">Get a Compliment</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => {
                      setSelectedMood('');
                      setCompliment('');
                      setErrorMessage('');
                    }}
                    className="mt-4 w-full bg-gradient-to-r from-pink-700 to-pink-500 text-white text-lg font-bold py-3 rounded-xl hover:shadow-xl transition-all transform hover:-translate-y-1"
                  >
                    Choose Another Mood
                  </button>
                  
                  <div className="mt-6 text-center">
                    <Link to="/" className="text-pink-700 hover:text-pink-500 font-medium flex items-center justify-center group transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 group-hover:-translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      Back to Home
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="text-center mt-6 text-pink-800 font-medium">
            Boost your mood with a personal compliment every day! ✨
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default ReceiveCompliment;
