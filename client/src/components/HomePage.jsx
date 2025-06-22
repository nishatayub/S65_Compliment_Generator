import { Link } from 'react-router-dom';
import Nav from './NavBar';
import Footer from './Footer';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p7 from '../assets/p7.jpg';
import p8 from '../assets/p8.jpg';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* First Section - Header with Title and Images */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-8">
              <span className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-bold">
                Affirmo
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light text-blue-600 leading-tight mb-12">
              Building confidence<br />
              and making self-worth<br />
              unforgettable.
            </h1>
            
            <div className="grid md:grid-cols-2 gap-12 items-stretch mb-16">
              {/* Left side - Visual Elements & Stats */}
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg h-full flex flex-col">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">A</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Your Journey Starts Here</h3>
                    <p className="text-gray-600 text-sm">Join thousands discovering their worth</p>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 text-sm">💝</span>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">Compliments Sent</span>
                      </div>
                      <span className="text-blue-600 font-bold">10,000+</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                          <span className="text-teal-600 text-sm">✨</span>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">Happy Users</span>
                      </div>
                      <span className="text-teal-600 font-bold">5,000+</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-600 text-sm">🌟</span>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">Confidence Built</span>
                      </div>
                      <span className="text-orange-600 font-bold">Daily</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <span className="text-purple-600 text-sm">💫</span>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">Success Stories</span>
                      </div>
                      <span className="text-purple-600 font-bold">2,500+</span>
                    </div>
                    
                    <div className="flex items-center justify-between bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-600 text-sm">🎯</span>
                        </div>
                        <span className="text-gray-700 text-sm font-medium">Lives Transformed</span>
                      </div>
                      <span className="text-green-600 font-bold">Every Day</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements for visual interest - contained within bounds */}
                <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 bg-pink-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
              
              {/* Right side - Description and CTA */}
              <div className="relative overflow-hidden">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg h-full flex flex-col">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      Spread Positivity & Build Confidence
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      At Affirmo — a fun, colorful, and empowering platform dedicated to boosting 
                      your confidence through personalized compliments and positive affirmations. 
                      Transform your mindset, one affirmation at a time.
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-6 flex-grow">
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">Personalized affirmations</span>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">Mood-based support</span>
                    </div>
                    
                    <div className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-sm">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-gray-700 text-sm">Share with loved ones</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link 
                      to="/sendcompliment" 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-full text-sm font-medium transition-all hover:scale-105 text-center shadow-lg"
                    >
                      START SPREADING JOY
                    </Link>
                    <Link 
                      to="/receivecompliment" 
                      className="bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 px-6 py-3 rounded-full text-sm font-medium transition-all hover:scale-105 text-center"
                    >
                      Get My Affirmation
                    </Link>
                  </div>
                </div>
                
                {/* Floating elements - contained within bounds */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-blue-400 rounded-full opacity-70 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-orange-400 rounded-full opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
              </div>
            </div>
          </div>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform">
              <img 
                src={p1} 
                alt="Send compliments" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white text-sm font-semibold p-4">Send Compliments</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform">
              <img 
                src={p2} 
                alt="Receive affirmations" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white text-sm font-semibold p-4">Receive Affirmations</span>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-transform">
              <img 
                src={p3} 
                alt="Build confidence" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                <span className="text-white text-sm font-semibold p-4">Build Confidence</span>
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

export default HomePage;
