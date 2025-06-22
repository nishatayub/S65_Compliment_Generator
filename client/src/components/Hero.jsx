import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-60"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-yellow-200 rounded-full opacity-50"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-purple-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-teal-200 rounded-full opacity-50"></div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="text-center">
          {/* Curved text decoration */}
          <div className="mb-8">
            <span className="text-pink-500 text-lg font-handwriting italic transform -rotate-12 inline-block">
              organizational
            </span>
            <br />
            <span className="text-pink-500 text-lg font-handwriting italic transform rotate-6 inline-block ml-8">
              development
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 leading-tight mb-8">
            <span className="text-yellow-500">Positivity</span> bridges where you are with<br />
            where you want to be.
          </h1>
          
          {/* Subtext */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Transform your mindset with personalized affirmations and compliments. 
            Our platform helps you build confidence, steering you forward through life&apos;s journey — 
            mapping where you currently are, charting the course to where you&apos;re headed, 
            and then planning the best route to get there.
          </p>
          
          {/* CTA Button */}
          <div className="mb-16">
            <Link 
              to="/signup" 
              className="inline-block px-12 py-4 bg-teal-400 hover:bg-teal-500 text-white font-semibold rounded-full text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              ✨ GET STARTED TODAY
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom wavy section */}
      <div className="absolute bottom-0 w-full">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" fill="#14b8a6" opacity="0.1"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
