import { Link } from 'react-router-dom';
import girlPic from '/assets/girlPic.jpeg?url';
import Nav from './Nav';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Navigation */}
        <Nav />
        
        {/* Hero Section */}
        <div className="flex flex-col-reverse lg:flex-row gap-8 mt-8">
          {/* Left side - Main content */}
          <div className="w-full lg:w-3/5 bg-gradient-to-br from-pink-900 to-pink-700 rounded-3xl p-8 relative shadow-2xl overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-pink-600 rounded-full opacity-30"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-lime-800 rounded-full opacity-20"></div>
            
            <div className="relative z-10">
              <h1 className="text-5xl font-extrabold mb-4 text-white">
                <span className="text-7xl text-amber-50 block leading-tight">Affirmo</span>
              </h1>
              <h2 className="text-3xl font-extrabold mb-6 text-lime-200">
                For whenever you feel unconfident
              </h2>
              <p className="text-xl mb-8 text-white leading-relaxed">
                Our compliment service is the place where you can boost your self-esteem and feel better instantly.
                We provide personalized compliments that help you reconnect with your inner confidence!
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/signup" className="bg-lime-800 text-amber-50 px-8 py-4 rounded-4xl text-lg font-bold hover:bg-lime-700 transition-all shadow-lg flex items-center justify-center">
                  Get Started &nbsp; &rarr;
                </Link>
                <Link to="/sendcompliment" className="bg-pink-500 text-amber-50 px-8 py-4 rounded-4xl text-lg font-bold hover:bg-pink-400 transition-all shadow-lg flex items-center justify-center">
                  Send a Compliment
                </Link>
                <Link to="/receivecompliment" className="bg-pink-700 text-amber-50 px-8 py-4 rounded-4xl text-lg font-bold hover:bg-pink-600 transition-all shadow-lg flex items-center justify-center">
                  Receive a Compliment
                </Link>
              </div>
            </div>
          </div>

          {/* Right side - Special offer card */}
          <div className="w-full lg:w-2/5">
            <div className="bg-gradient-to-br from-pink-600 to-pink-400 text-white p-8 rounded-3xl h-full relative shadow-2xl overflow-hidden">
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-pink-300 rounded-full opacity-30"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-pink-300 rounded-full opacity-30"></div>
              
              <div className="relative z-10">
                
                <h3 className="text-2xl font-extrabold mb-6 mt-8">Experience the Power of Compliments</h3>
                <p className="text-lg mb-8 leading-relaxed">
                  Daily compliments can improve your self-esteem and transform your outlook on life! Our service delivers personalized positive affirmations when you need them most.
                </p>
                
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img src={girlPic} alt="Happy Client" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold">Sarah W.</p>
                    <p className="text-sm opacity-80">&quot;Affirmo changed my life!&quot;</p>
                    <div className="flex mt-1">
                      <span className="text-yellow-300">★★★★★</span>
                    </div>
                  </div>
                </div>
                
                <Link to="/signup" className="inline-block bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-bold hover:bg-pink-100 transition-all shadow-lg">
                  Join Affirmo Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Us Section */}
        <div id="about" className="my-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-pink-900">About Affirmo</h2>
            
            <div className="flex flex-wrap md:flex-nowrap gap-8">
              <div className="w-full md:w-1/2">
                <p className="text-lg text-pink-800 mb-4">
                  <span className="font-bold text-2xl text-pink-900">Affirmo</span> is a unique service designed to provide instant confidence boosts through personalized compliments.
                </p>
                <p className="text-lg text-pink-800 mb-4">
                  Over the last 3 years, we&apos;ve helped thousands of people feel better about themselves and discover their inner worth.
                </p>
                <p className="text-lg text-pink-800 mb-4">
                  For the health of your mental wellbeing, we ensure our compliments are specific, genuine and meaningful to truly make a difference in your day.
                </p>
                <p className="text-lg text-pink-800">
                  Use our free service for instant mood boosts any time of the day!
                </p>
                
                <div className="mt-8">
                  <Link to="/about" className="inline-block bg-lime-800 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-lime-700 transition-all shadow-md">
                    Learn More About Us
                  </Link>
                </div>
              </div>
              
              {/* Image Carousel */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl relative">
                <img src={girlPic} alt="Affirmo Experience" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 flex items-center justify-between">
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div id="services" className="my-16">
          <h2 className="text-4xl font-extrabold mb-10 text-center text-pink-900">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Personal Compliments Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-pink-800 to-pink-600 text-white py-6">
                <h3 className="text-3xl font-bold text-center">Personal Compliments</h3>
              </div>
              <div className="p-6">
                <div className="text-xl text-pink-800 font-semibold mb-6 text-center">
                  All Services Completely Free
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-pink-600 rounded-full flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-pink-800">Personalized compliments for your needs</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-pink-600 rounded-full flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-pink-800">Confidence-building messages</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-pink-600 rounded-full flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-pink-800">Daily affirmations</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-pink-600 rounded-full flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-pink-800">24/7 access to compliment library</span>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/sendcompliment" className="inline-block bg-pink-800 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-pink-700 transition-all shadow-md">
                    Get Compliments
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Mood Boosting Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-r from-lime-800 to-lime-600 text-white py-6">
                <h3 className="text-3xl font-bold text-center">Mood Boosting</h3>
              </div>
              <div className="p-6">
                <div className="text-xl text-lime-800 font-semibold mb-6 text-center">
                  All Services Completely Free
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-lime-600 rounded-full flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-lime-800">Mood-specific compliments</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-lime-600 rounded-full flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-lime-800">Personal development suggestions</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-lime-600 rounded-full flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-lime-800">Self-esteem enhancements</span>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 bg-lime-600 rounded-full flex items-center justify-center text-white">✓</div>
                    <span className="ml-3 text-lime-800">Ongoing positivity support</span>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <Link to="/receivecompliment" className="inline-block bg-lime-800 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-lime-700 transition-all shadow-md">
                    Boost Your Mood
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="my-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-pink-700 to-pink-500 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-400 rounded-full opacity-30"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-pink-400 rounded-full opacity-30"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">How to get compliments?</h3>
              
              <ol className="space-y-6">
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-pink-700 flex items-center justify-center font-bold text-xl mr-4">1</div>
                  <div className="text-lg">Choose the compliment type you want</div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-pink-700 flex items-center justify-center font-bold text-xl mr-4">2</div>
                  <div className="text-lg">Set your mood preferences</div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-pink-700 flex items-center justify-center font-bold text-xl mr-4">3</div>
                  <div className="text-lg">Select your interests (optional)</div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-pink-700 flex items-center justify-center font-bold text-xl mr-4">4</div>
                  <div className="text-lg">Click &quot;Get Compliment&quot;</div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-pink-700 flex items-center justify-center font-bold text-xl mr-4">5</div>
                  <div className="text-lg">Receive your personalized compliment!</div>
                </li>
              </ol>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-lime-700 to-lime-500 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-lime-400 rounded-full opacity-30"></div>
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-lime-400 rounded-full opacity-30"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6">Benefits of Daily Compliments</h3>
              
              <ul className="space-y-6">
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-lime-700 flex items-center justify-center font-bold text-2xl mr-4">✓</div>
                  <div className="text-lg">Increased self-confidence</div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-lime-700 flex items-center justify-center font-bold text-2xl mr-4">✓</div>
                  <div className="text-lg">Better mood and emotional well-being</div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-lime-700 flex items-center justify-center font-bold text-2xl mr-4">✓</div>
                  <div className="text-lg">Personalized affirmations just for you</div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-lime-700 flex items-center justify-center font-bold text-2xl mr-4">✓</div>
                  <div className="text-lg">Motivation to start your day positively</div>
                </li>
                <li className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-white text-lime-700 flex items-center justify-center font-bold text-2xl mr-4">✓</div>
                  <div className="text-lg">Support for difficult days when you need it most</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div id="reviews" className="my-16 ">
          <div className="bg-gradient-to-br from-pink-600 to-pink-400 rounded-3xl p-8 shadow-xl text-black relative overflow-hidden">
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-pink-300 rounded-full opacity-30"></div>
            <div className="absolute left-1/2 -top-40 w-80 h-80 bg-pink-300 rounded-full opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-extrabold mb-6 text-center">Testimonials</h2>
              <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
                We always prioritize our users&apos; satisfaction! Read what our community has to say about their experience with Affirmo.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-pink-800 rounded-full flex items-center justify-center text-2xl font-bold text-white">J</div>
                    <div className="ml-4">
                      <p className="font-bold text-xl">Jessica T.</p>
                      <div className="flex text-yellow-300 text-xl">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-lg">
                    &quot;Affirmo has completely changed my outlook! The personalized compliments I receive each day have helped me regain my confidence during a particularly difficult time. Highly recommend!&quot;
                  </p>
                </div>
                
                <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-white border-opacity-20 transform hover:scale-105 transition-transform duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-pink-800 rounded-full flex items-center justify-center text-2xl font-bold text-white">M</div>
                    <div className="ml-4">
                      <p className="font-bold text-xl">Marcus W.</p>
                      <div className="flex text-yellow-300 text-xl">★★★★★</div>
                    </div>
                  </div>
                  <p className="text-lg">
                    &quot;I was skeptical at first, but the personalized approach really makes a difference. The compliments are thoughtful and specific, not generic at all. It&apos;s a great way to start my day!&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Final CTA Section */}
        <div className="my-16">
          <div className="w-full bg-gradient-to-br from-pink-800 to-pink-600 rounded-3xl p-8 shadow-xl text-white relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-pink-500 rounded-full opacity-30"></div>
            
            <div className="relative z-10 text-center">
              <div className="mb-4">
                <span className="inline-block bg-white text-pink-800 font-bold text-xl py-1 px-4 rounded-full animate-pulse">Try Now</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">Get Your Free Compliment Today!</h3>
              
              <p className="text-lg mb-8 max-w-3xl mx-auto">
                Experience the power of positive affirmations with Affirmo. Our compliment generator is designed to boost your confidence, improve your mood, and brighten your day with personalized messages.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/signup" className="bg-lime-600 hover:bg-lime-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg">
                  Sign Up For Free
                </Link>
                <Link to="/receivecompliment" className="bg-white text-pink-700 px-8 py-4 rounded-full text-lg font-bold hover:bg-pink-50 transition-all shadow-lg">
                  Get a Compliment Now
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div id="contacts" className="my-16">
          <div className="bg-gradient-to-br from-pink-900 to-pink-700 rounded-3xl p-8 shadow-xl text-white text-center">
            <h2 className="text-4xl font-extrabold mb-6">Get In Touch</h2>
            <p className="text-xl max-w-2xl mx-auto mb-8">
              Need a custom compliment or have questions about our service? Our friendly team is here to boost your day!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+15551234567" className="flex items-center gap-3 px-6 py-4 bg-white text-pink-900 rounded-full text-lg font-bold hover:bg-pink-100 transition-all shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 8709474765
              </a>
              <a href="mailto:hello@affirmo.com" className="flex items-center gap-3 px-6 py-4 bg-white text-pink-900 rounded-full text-lg font-bold hover:bg-pink-100 transition-all shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@affirmo.com
              </a>
            </div>
            
            <div className="flex justify-center mt-8 space-x-6">
              <a href="#" className="bg-white rounded-full p-3 text-pink-900 hover:bg-pink-100 transition-all">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="bg-white rounded-full p-3 text-pink-900 hover:bg-pink-100 transition-all">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="bg-white rounded-full p-3 text-pink-900 hover:bg-pink-100 transition-all">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
