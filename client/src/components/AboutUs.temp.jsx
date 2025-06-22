import { Link } from 'react-router-dom';
import Nav from './NavBar';
import Footer from './Footer';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Navigation */}
        <Nav />
        
        <div className="flex flex-wrap justify-center p-10 gap-8 relative mt-8">
          {/* Background decoration */}
          <div className="absolute left-10 top-10 w-40 h-40 bg-pink-200 rounded-full opacity-20"></div>
          <div className="absolute right-10 bottom-10 w-60 h-60 bg-pink-200 rounded-full opacity-20"></div>
          
          <div className="w-full md:w-[45%] bg-white bg-opacity-95 backdrop-blur-md border-2 border-pink-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-200 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">💖</span>
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-lime-800 to-lime-600 inline-block text-transparent bg-clip-text">About Us</h2>
              </div>
              <p className="text-pink-800 text-xl font-medium border-l-4 border-pink-700 pl-4 my-4">Spreading Positivity, One Compliment at a Time!</p>
              <p className="text-pink-800 text-lg mt-4 leading-relaxed">
                Welcome to Affirmo, your go-to place for instant happiness! 😊 We believe that a small compliment 
                can make a big difference in someone&apos;s day. That&apos;s why we built this Compliment Generator—to spread 
                kindness, boost confidence, and put a smile on your face!
              </p>
            </div>
          </div>

          <div className="w-full md:w-[45%] bg-white bg-opacity-95 backdrop-blur-md border-2 border-pink-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-lime-200 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">🌟</span>
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-lime-800 to-lime-600 inline-block text-transparent bg-clip-text">Why Compliments Matter</h2>
              </div>
              <ul className="text-pink-800 text-lg list-none space-y-4 mt-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-pink-600 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                  <span>Boost self-esteem and make people feel valued</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-pink-600 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                  <span>Strengthen relationships by spreading positivity</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-pink-600 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                  <span>Improve mood and overall well-being</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-pink-600 rounded-full flex items-center justify-center text-white mr-3">✓</div>
                  <span>Create a ripple effect—kindness inspires kindness!</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="w-full md:w-[45%] bg-white bg-opacity-95 backdrop-blur-md border-2 border-pink-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-200 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">💡</span>
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-lime-800 to-lime-600 inline-block text-transparent bg-clip-text">What We Do</h2>
              </div>
              <p className="text-pink-800 text-lg mt-4 leading-relaxed">
                Our service provides thoughtful and heartwarming compliments at just the right time! 
                Whether you need a little motivation, want to brighten someone&apos;s day, or just enjoy 
                wholesome words, Affirmo has you covered with personalized affirmations.
              </p>
            </div>
          </div>

          <div className="w-full md:w-[45%] bg-white bg-opacity-95 backdrop-blur-md border-2 border-pink-700 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105 relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-lime-200 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-5xl">✨</span>
                <h2 className="text-4xl font-extrabold bg-gradient-to-r from-lime-800 to-lime-600 inline-block text-transparent bg-clip-text">Features</h2>
              </div>
              <ul className="text-pink-800 text-lg list-none space-y-4 mt-6">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-lime-600 rounded-full flex items-center justify-center text-white mr-3">💬</div>
                  <span>Unlimited Compliments: No matter how many you need, we&apos;ve got plenty!</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-lime-600 rounded-full flex items-center justify-center text-white mr-3">🎨</div>
                  <span>Personalized Experience: Compliments tailored to your mood</span>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-8 w-8 bg-lime-600 rounded-full flex items-center justify-center text-white mr-3">📤</div>
                  <span>Share with Friends: Easily send compliments to others who need a boost</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Back to home button */}
          <div className="w-full flex justify-center mt-8 mb-4">
            <Link to="/" className="bg-pink-700 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-bold transition-all shadow-lg flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
