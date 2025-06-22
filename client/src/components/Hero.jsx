import { Link } from 'react-router-dom';
import Nav from './NavBar';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Nav />
      
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden" style={{backgroundColor: '#cbe6c7'}}>
        {/* Geometric pattern background */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full" style={{backgroundColor: '#8fb78f'}}></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full" style={{backgroundColor: '#b4cccf'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rotate-45" style={{backgroundColor: '#f3a5bc'}}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full mb-6" style={{backgroundColor: '#8fb78f', color: 'white'}}>
                <span className="text-sm font-medium">Transform Your Mindset Today</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{color: '#28536b'}}>
                Build Confidence<br />
                Through <span style={{color: '#8fb78f'}}>Connection</span>
              </h1>
              
              <p className="text-xl mb-8 leading-relaxed" style={{color: '#28536b'}}>
                Experience personalized affirmations and meaningful compliments in a supportive community designed to boost your confidence and spread positivity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  to="/sendcompliment" 
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 text-white shadow-lg"
                  style={{backgroundColor: '#28536b'}}
                >
                  Send Compliments
                </Link>
                <Link 
                  to="/receivecompliment" 
                  className="px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 border-2"
                  style={{color: '#28536b', borderColor: '#28536b', backgroundColor: 'white'}}
                >
                  Get Affirmations
                </Link>
              </div>
              
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: '#28536b'}}>10K+</div>
                  <div className="text-sm" style={{color: '#8fb78f'}}>Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: '#28536b'}}>50K+</div>
                  <div className="text-sm" style={{color: '#8fb78f'}}>Messages Sent</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{color: '#28536b'}}>4.9</div>
                  <div className="text-sm" style={{color: '#8fb78f'}}>User Rating</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full mt-2" style={{backgroundColor: '#8fb78f'}}></div>
                    <div>
                      <div className="font-semibold mb-1" style={{color: '#28536b'}}>Personalized Affirmations</div>
                      <div className="text-sm" style={{color: '#28536b'}}>Receive messages tailored to your current mood and needs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full mt-2" style={{backgroundColor: '#f3a5bc'}}></div>
                    <div>
                      <div className="font-semibold mb-1" style={{color: '#28536b'}}>Community Support</div>
                      <div className="text-sm" style={{color: '#28536b'}}>Connect with like-minded individuals in a safe space</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 rounded-full mt-2" style={{backgroundColor: '#b4cccf'}}></div>
                    <div>
                      <div className="font-semibold mb-1" style={{color: '#28536b'}}>Daily Motivation</div>
                      <div className="text-sm" style={{color: '#28536b'}}>Start each day with positive reinforcement</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Feature Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#28536b'}}>
              Why Choose Affirmo?
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{color: '#8fb78f'}}>
              Discover the features that make our platform unique
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#8fb78f'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: '#28536b'}}>Send Compliments</h3>
              <p style={{color: '#8fb78f'}}>Share meaningful messages that brighten someone's day and strengthen relationships</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#f3a5bc'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: '#28536b'}}>Receive Affirmations</h3>
              <p style={{color: '#8fb78f'}}>Get personalized affirmations based on your mood and current life situation</p>
            </div>
            
            <div className="text-center p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center" style={{backgroundColor: '#b4cccf'}}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: '#28536b'}}>Build Confidence</h3>
              <p style={{color: '#8fb78f'}}>Develop lasting self-esteem through consistent positive reinforcement and community support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{background: 'linear-gradient(135deg, #b4cccf 0%, #cbe6c7 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#28536b'}}>
              Spreading Joy Together
            </h2>
            <p className="text-lg" style={{color: '#28536b'}}>Our cozy community impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold mb-2" style={{color: '#8fb78f'}}>10K+</div>
              <div style={{color: '#28536b'}}>Warm Messages</div>
            </div>
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold mb-2" style={{color: '#f3a5bc'}}>5K+</div>
              <div style={{color: '#28536b'}}>Happy Members</div>
            </div>
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold mb-2" style={{color: '#ffc49b'}}>2.5K+</div>
              <div style={{color: '#28536b'}}>Uplifting Stories</div>
            </div>
            <div className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <div className="text-4xl font-bold mb-2" style={{color: '#28536b'}}>Daily</div>
              <div style={{color: '#28536b'}}>New Connections</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#28536b'}}>
              How It Works
            </h2>
            <p className="text-lg" style={{color: '#28536b'}}>Simple steps to spread and receive positivity</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{background: 'linear-gradient(to right, #8fb78f, #cbe6c7)'}}>
                <span className="text-white text-2xl">1️⃣</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: '#28536b'}}>Choose Your Mood</h3>
              <p style={{color: '#28536b'}}>Tell us how you&apos;re feeling or what you need today</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{background: 'linear-gradient(to right, #f3a5bc, #ffc49b)'}}>
                <span className="text-white text-2xl">2️⃣</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: '#28536b'}}>Get Personalized Messages</h3>
              <p style={{color: '#28536b'}}>Receive tailored compliments and affirmations</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg" style={{background: 'linear-gradient(to right, #28536b, #b4cccf)'}}>
                <span className="text-white text-2xl">3️⃣</span>
              </div>
              <h3 className="text-xl font-bold mb-4" style={{color: '#28536b'}}>Share the Love</h3>
              <p style={{color: '#28536b'}}>Pass on the positivity to friends and loved ones</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16" style={{background: 'linear-gradient(135deg, #f3a5bc 0%, #ffc49b 50%, #cbe6c7 100%)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{color: '#28536b'}}>
              Moments of Joy
            </h2>
            <p className="text-lg" style={{color: '#28536b'}}>Capturing the beauty of human connection</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[p4, p5, p6, p7, p8].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{background: 'linear-gradient(to right, #28536b, #8fb78f, #f3a5bc)'}}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands who&apos;ve discovered the power of positive connection. 
            Your journey to confidence and joy starts with a single compliment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/sendcompliment" 
              className="bg-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
              style={{color: '#28536b'}}
            >
              Start Spreading Joy 🌟
            </Link>
            <Link 
              to="/receivecompliment" 
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105"
            >
              Get Your Boost ✨
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
