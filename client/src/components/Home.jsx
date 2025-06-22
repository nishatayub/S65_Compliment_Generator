import { Link } from 'react-router-dom';
import Nav from './NavBar';
import Footer from './Footer';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* Enhanced Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-10 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-gradient-to-br from-orange-200 to-pink-200 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full opacity-10 animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            {/* Enhanced brand badge */}
            <div className="inline-block mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-xl blur opacity-75 animate-pulse"></div>
              <span className="relative bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-lg transform hover:scale-105 transition-all duration-300">
                ✨ Affirmo
              </span>
            </div>
            
            {/* Enhanced main heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-light bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent leading-tight mb-8 animate-fade-in">
              Building confidence<br />
              <span className="font-semibold">and making</span> self-worth<br />
              <span className="text-yellow-500 font-bold">unforgettable.</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12 opacity-90">
              Transform your mindset with personalized affirmations and spread joy through meaningful compliments
            </p>
            
            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/sendcompliment" 
                className="group bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 hover:from-blue-600 hover:via-purple-600 hover:to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Start Spreading Joy</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
              <Link 
                to="/receivecompliment" 
                className="group bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-purple-300 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-md"
              >
                <span className="flex items-center justify-center gap-2">
                  <span>Get My Affirmation</span>
                  <span className="text-purple-500">✨</span>
                </span>
              </Link>
            </div>
          </div>
          
          {/* Enhanced Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-20">
            {/* Left side - Enhanced Stats Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white text-3xl font-bold">A</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Your Journey Starts Here</h3>
                  <p className="text-gray-600">Join thousands discovering their worth daily</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-lg">💝</span>
                      </div>
                      <span className="text-gray-700 font-medium">Compliments Sent</span>
                    </div>
                    <span className="text-blue-600 font-bold text-xl">10,000+</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-4 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-green-500 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-lg">✨</span>
                      </div>
                      <span className="text-gray-700 font-medium">Happy Users</span>
                    </div>
                    <span className="text-teal-600 font-bold text-xl">5,000+</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-4 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-lg">🌟</span>
                      </div>
                      <span className="text-gray-700 font-medium">Confidence Built</span>
                    </div>
                    <span className="text-orange-600 font-bold text-xl">Daily</span>
                  </div>
                  
                  <div className="flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white text-lg">💫</span>
                      </div>
                      <span className="text-gray-700 font-medium">Success Stories</span>
                    </div>
                    <span className="text-purple-600 font-bold text-xl">2,500+</span>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
            
            {/* Right side - Enhanced CTA Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-pink-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <div className="relative bg-white backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Spread Positivity & Build Confidence
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Transform your mindset with our AI-powered compliments and affirmations. 
                    Join a community dedicated to lifting each other up.
                  </p>
                </div>
                
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Personalized affirmations</span>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-gradient-to-r from-teal-50 to-green-50 rounded-xl p-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Mood-based support</span>
                  </div>
                  
                  <div className="flex items-center gap-4 bg-gradient-to-r from-orange-50 to-pink-50 rounded-xl p-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-gray-700 font-medium">Share with loved ones</span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-3 mt-auto">
                  <Link 
                    to="/sendcompliment" 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 text-center shadow-lg hover:shadow-xl"
                  >
                    START SPREADING JOY ✨
                  </Link>
                  <Link 
                    to="/receivecompliment" 
                    className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-purple-300 px-6 py-4 rounded-xl font-semibold transition-all hover:scale-105 text-center shadow-md hover:shadow-lg"
                  >
                    Get My Affirmation 💝
                  </Link>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-blue-400 rounded-full opacity-70 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 via-blue-400/40 to-transparent z-10"></div>
              <img 
                src={p1} 
                alt="Send compliments" 
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-lg font-bold mb-2">Send Compliments</h4>
                  <p className="text-sm opacity-90">Brighten someone&apos;s day with heartfelt words</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <span className="text-white text-sm">💌</span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/80 via-purple-400/40 to-transparent z-10"></div>
              <img 
                src={p2} 
                alt="Receive affirmations" 
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-lg font-bold mb-2">Receive Affirmations</h4>
                  <p className="text-sm opacity-90">Get personalized boost when you need it</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <span className="text-white text-sm">✨</span>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-teal-600/80 via-teal-400/40 to-transparent z-10"></div>
              <img 
                src={p3} 
                alt="Build confidence" 
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 z-20 flex items-end">
                <div className="p-6 text-white">
                  <h4 className="text-lg font-bold mb-2">Build Confidence</h4>
                  <p className="text-sm opacity-90">Transform your mindset with daily practice</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🌟</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Section */}
      <section className="bg-lime-400 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="text-8xl font-light mb-8 opacity-20 transform -rotate-6 text-gray-800">HELLO</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Meet your new<br />
                confidence companion
              </h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                At Affirmo, we believe in the power of positivity and 
                self-love to transform your mindset. Our platform 
                helps you build confidence through personalized compliments and affirmations, 
                and we can&apos;t wait to help you discover your inner strength.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-105 transition-transform">
              <img 
                src={p4} 
                alt="Confidence journey" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* White Section with Orange Header */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-orange-500 mb-6 leading-tight">
                Bringing the Positivity, Joy, and 
                Sparkle that Lives Within 
                Every Person
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We&apos;re a team of positivity enthusiasts and confidence builders - our approach 
                is rooted in psychology but always delivered with warmth. We&apos;re passionate 
                about helping people discover their worth and crafting personalized messages 
                that resonate deeply.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                We believe that building confidence goes beyond surface-level praise. 
                We understand the transformative power of genuine recognition and positive reinforcement.
              </p>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transition-transform">
              <img 
                src={p8} 
                alt="Positive mindset" 
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white text-sm font-semibold p-4">Positive Mindset</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Confidence Building Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col justify-between h-full">
              <div>
                <h3 className="text-4xl font-light text-gray-800 mb-2">
                  Confidence Building
                </h3>
                <p className="text-3xl font-light text-gray-800 mb-8">
                  <em>is more than</em><br />
                  Compliments
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-8">
                  LISTEN TO YOUR HEART, THEN AMPLIFY IT. We don&apos;t just give generic praise. 
                  Our confidence-building approach goes beyond the surface to create personalized 
                  experiences that help you recognize your unique worth.
                </p>

                {/* Numbered List */}
                <div className="space-y-6 mb-8">
                  <div className="flex gap-4">
                    <div className="bg-yellow-100 text-yellow-700 font-bold text-lg px-3 py-1 rounded min-w-[3rem] text-center">01</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm">PERSONALIZED AFFIRMATIONS</h4>
                      <p className="text-gray-600 text-sm">
                        Custom-crafted compliments designed to resonate with you personally.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-orange-100 text-orange-700 font-bold text-lg px-3 py-1 rounded min-w-[3rem] text-center">02</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm">MOOD-BASED SUPPORT</h4>
                      <p className="text-gray-600 text-sm">
                        Receive compliments tailored to your current emotional state.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="bg-green-100 text-green-700 font-bold text-lg px-3 py-1 rounded min-w-[3rem] text-center">03</div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1 text-sm">SHARE THE LOVE</h4>
                      <p className="text-gray-600 text-sm">
                        Send heartfelt compliments to friends and loved ones.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to Action */}
              <div className="mt-auto pt-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-gray-800 mb-2">Ready to Experience This?</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    Start your confidence journey today with personalized affirmations.
                  </p>
                  <Link 
                    to="/receivecompliment" 
                    className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                  >
                    Get My Affirmation
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="relative overflow-hidden rounded-lg shadow-lg h-full hover:scale-105 transition-transform">
              <img 
                src={p7} 
                alt="Self-love journey" 
                className="w-full h-full min-h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white text-sm font-semibold p-4">Self-Love Journey</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section with Call to Action */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-500 text-sm uppercase tracking-wider mb-4">THIS IS YOUR MOMENT</p>
            <h2 className="text-4xl md:text-5xl font-light text-yellow-500 mb-8">
              START YOUR<br />
              CONFIDENCE JOURNEY
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed mb-12">
              Ready to boost your confidence and spread positivity? Let&apos;s start! 
              Whether you want to send uplifting messages to loved ones or receive personalized 
              affirmations to brighten your day, Affirmo is here to help.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link 
                to="/sendcompliment" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
              >
                Send a Compliment
              </Link>
              <Link 
                to="/receivecompliment" 
                className="bg-teal-400 hover:bg-teal-500 text-white px-8 py-3 rounded-full font-medium transition-all hover:scale-105"
              >
                Get My Affirmation
              </Link>
            </div>
            
            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8 mt-16 mb-12">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:scale-105 transition-transform">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 text-sm mb-4">
                  &quot;Affirmo completely changed how I see myself. The personalized compliments 
                  helped me recognize my strengths during a really tough time.&quot;
                </p>
                <div className="text-sm font-semibold text-gray-800">- Sarah M.</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:scale-105 transition-transform">
                <div className="text-yellow-400 text-2xl mb-4">⭐⭐⭐⭐⭐</div>
                <p className="text-gray-600 text-sm mb-4">
                  &quot;I love how the affirmations match my mood perfectly. It&apos;s like 
                  having a supportive friend available 24/7.&quot;
                </p>
                <div className="text-sm font-semibold text-gray-800">- Jake T.</div>
              </div>
            </div>
          </div>
          
          {/* Decorative Stars */}
          <div className="flex justify-between items-center">
            <div className="text-yellow-400 text-4xl hover:rotate-12 transition-transform cursor-pointer">✦</div>
            <div className="text-blue-400 text-3xl hover:rotate-12 transition-transform cursor-pointer">✦</div>
            <div className="text-yellow-400 text-5xl hover:rotate-12 transition-transform cursor-pointer">✦</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
