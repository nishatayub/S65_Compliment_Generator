import Nav from './Nav'
import Unknown2 from '/assets/Unknown-2.jpg?url';
import AboutUs from './AboutUs';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden">
      <Nav />
      <div className='min-h-screen'>
        {/* Main Hero Section */}
        <div className='flex flex-col md:flex-row justify-evenly items-center gap-8 mt-16 px-6 lg:px-12'>
          {/* Left side - Text content */}
          <div className="relative animate-fadeIn w-full md:w-1/2">
            <div className="absolute -left-6 -top-6 w-24 h-24 bg-pink-200 rounded-full opacity-70 z-0 animate-pulse"></div>
            <div className="absolute -right-10 bottom-10 w-16 h-16 bg-lime-200 rounded-full opacity-50 z-0 animate-float"></div>
            
            <div className="relative z-10">
              <h1 className='font-extrabold text-4xl md:text-6xl w-full md:w-90 text-pink-700 mb-6 leading-tight'>
                <strong className='text-5xl md:text-7xl block mb-2 bg-gradient-to-r from-pink-900 to-pink-600 text-transparent bg-clip-text'>Affirmo</strong>
                <span className="relative">
                  for whenever you feel unconfident
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-lime-500 opacity-30 -skew-x-12"></span>
                </span>
              </h1>
              
              <p className="text-pink-800 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
                Our compliment service helps you regain confidence and feel better instantly. 
                With personalized affirmations crafted just for you, you&apos;ll rediscover your 
                inner strength and shine brighter than ever.
              </p>
              
              <div className="absolute -z-10 top-20 right-0 w-40 h-40 bg-gradient-to-br from-pink-200 to-pink-100 rounded-full blur-3xl opacity-70"></div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="relative w-full md:w-1/2 flex justify-center animate-slideInRight">
            <div className="absolute -right-4 -bottom-4 w-full h-full bg-pink-300 rounded-4xl opacity-30 z-0"></div>
            <div className="absolute -left-2 -top-2 w-full h-full bg-lime-200 rounded-4xl opacity-20 z-0"></div>
            
            <img 
              src={Unknown2} 
              alt="Affirmo compliments service" 
              className='relative z-10 h-80 w-80 md:h-96 md:w-96 object-cover rounded-4xl shadow-xl border-4 border-pink-700 transform hover:scale-105 transition-transform duration-300' 
            />
            
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-pink-900 to-pink-600 rounded-full blur-3xl opacity-10 z-0 animate-pulse"></div>
          </div>
        </div>
        
        {/* CTA buttons */}
        <div className='flex flex-col md:flex-row justify-center gap-4 mt-16 px-6'>
          <Link to='signup' className='bg-gradient-to-r from-pink-900 to-pink-700 text-amber-50 w-full md:w-40 h-16 rounded-4xl hover:from-pink-800 hover:to-pink-600 hover:shadow-lg transition-all items-center flex justify-center font-bold text-lg hover-lift'>
            <span>Get Started</span> &nbsp; <span className="animate-pulse">&rarr;</span>
          </Link>
          <Link to='sendcompliment' className='bg-gradient-to-r from-pink-800 to-pink-600 text-amber-50 w-full md:w-60 h-16 rounded-4xl hover:from-pink-700 hover:to-pink-500 hover:shadow-lg transition-all items-center flex justify-center font-bold text-lg hover-lift stagger-1'>
            Send a Compliment
          </Link>
          <Link to='receivecompliment' className='bg-gradient-to-r from-lime-800 to-lime-600 text-amber-50 w-full md:w-60 h-16 rounded-4xl hover:from-lime-700 hover:to-lime-500 hover:shadow-lg transition-all items-center flex justify-center font-bold text-lg hover-lift stagger-2'>
            Receive a Compliment
          </Link>
        </div>
        
        {/* Decorative elements */}
        <div className="hidden md:block absolute left-10 top-1/3 w-6 h-6 bg-lime-400 rounded-full animate-float opacity-70"></div>
        <div className="hidden md:block absolute right-20 top-1/4 w-4 h-4 bg-pink-400 rounded-full animate-float opacity-70" style={{ animationDelay: '1.5s' }}></div>
        <div className="hidden md:block absolute left-1/4 bottom-20 w-8 h-8 bg-pink-300 rounded-full animate-float opacity-60" style={{ animationDelay: '0.8s' }}></div>
        
        {/* About Us section */}
        <AboutUs />
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  )
}

export default Hero
