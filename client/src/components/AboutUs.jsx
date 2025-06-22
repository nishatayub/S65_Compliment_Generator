import { Link } from 'react-router-dom';
import Nav from './NavBar';
import Footer from './Footer';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.jpg';
import p6 from '../assets/p6.jpg';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-white leading-tight mb-6">
            About Affirmo<br />
            Our Story & Mission
          </h1>
          <p className="text-purple-100 text-lg max-w-2xl mx-auto">
            We&apos;re on a mission to build a world where everyone recognizes their worth and 
            spreads positivity through genuine compliments and affirmations. 💜
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="bg-white py-16 -mt-10 relative z-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Affirmo was born from a simple yet powerful belief: that everyone deserves to feel 
                valued, appreciated, and confident in their own skin. In a world that often focuses 
                on criticism and negativity, we wanted to create a space dedicated entirely to 
                building people up.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                What started as a simple compliment generator has evolved into a comprehensive 
                platform for confidence building, featuring personalized affirmations, mood-based 
                support, and tools to spread love to others. We believe that small acts of kindness 
                can create ripple effects that transform communities.
              </p>
              <div className="flex gap-4">
                <Link 
                  to="/sendcompliment" 
                  className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all"
                >
                  Send Some Love
                </Link>
                <Link 
                  to="/receivecompliment" 
                  className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-sm font-medium transition-all"
                >
                  Get Affirmed
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src={p1} 
                alt="People connecting and sharing positivity" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Mission & Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Everything we do is guided by our core values and commitment to spreading positivity
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative mb-6">
                <img 
                  src={p2} 
                  alt="Building confidence and self-worth" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">💪</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Empowerment</h3>
              <p className="text-gray-600 text-sm">
                We believe everyone has inherent worth and unique strengths. Our goal is to help 
                people recognize and celebrate these qualities in themselves and others.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative mb-6">
                <img 
                  src={p3} 
                  alt="Authentic and genuine connections" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">💚</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Authenticity</h3>
              <p className="text-gray-600 text-sm">
                We create genuine, meaningful compliments and affirmations. No generic praise here – 
                every message is crafted to resonate deeply and feel personally relevant.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative mb-6">
                <img 
                  src={p4} 
                  alt="Community and spreading positivity" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-2xl">🌟</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
              <p className="text-gray-600 text-sm">
                Positivity is contagious. We&apos;re building a community where kindness spreads naturally, 
                creating ripple effects that extend far beyond our platform.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Impact Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src={p5} 
                alt="The positive impact of affirmations and compliments" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-teal-400 rounded-2xl flex items-center justify-center">
                <span className="text-4xl">�</span>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">The Science Behind Positivity</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Research shows that regular positive affirmations can rewire neural pathways, 
                boost self-esteem, and improve overall mental well-being. When we receive genuine 
                compliments, our brains release dopamine and serotonin – the same chemicals 
                associated with happiness and satisfaction.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                But the benefits extend beyond the recipient. Studies indicate that giving 
                compliments and performing acts of kindness can increase our own happiness levels, 
                reduce stress, and strengthen social connections.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                  <div className="text-xs text-gray-600">improved mood after receiving compliments</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">92%</div>
                  <div className="text-xs text-gray-600">feel happier when giving compliments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team & Future Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Looking Forward</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                We&apos;re just getting started. Our vision extends beyond individual affirmations 
                to building a global community where positivity is the norm, not the exception. 
                We&apos;re constantly working on new features, partnerships, and initiatives to 
                make confidence-building accessible to everyone.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Whether you&apos;re here to boost your own confidence, send love to friends, or simply 
                be part of a positive community, we&apos;re grateful you&apos;re on this journey with us. 
                Together, we&apos;re making the world a little brighter, one compliment at a time.
              </p>
              
              <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">💡</span>
                  <h4 className="font-semibold text-gray-800">Join Our Mission</h4>
                </div>
                <p className="text-sm text-gray-700">
                  Ready to be part of the positivity movement? Start by sending a compliment 
                  or getting your daily affirmation!
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={p6} 
                alt="The future of positivity and community building" 
                className="rounded-2xl shadow-lg w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <span className="text-white text-2xl">�</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of others who are building confidence, spreading joy, and 
            discovering their worth through Affirmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/signup" 
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold transition-all"
            >
              Join the Community
            </Link>
            <Link 
              to="/receivecompliment" 
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full font-semibold transition-all"
            >
              Get Your First Affirmation
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
