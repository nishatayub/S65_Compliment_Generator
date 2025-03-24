
const AboutUs = () => {
  return (
    <div className="mt-10 bg-gradient-to-r from-pink-900 to-red-100 min-h-screen flex flex-wrap justify-center p-10 gap-8">
      <div className="w-[45%] bg-white bg-opacity-90 backdrop-blur-md border-2 border-pink-700 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
        <p className="text-4xl font-extrabold text-lime-800 mb-4">💖 About Us</p>
        <p className="text-pink-800 text-xl font-medium">Spreading Positivity, One Compliment at a Time!</p>
        <p className="text-pink-800 text-lg mt-4">
          Welcome to HapWor, your go-to place for instant happiness! 😊 We believe that a small compliment 
          can make a big difference in someone’s day. That’s why we built this Compliment Generator—to spread 
          kindness, boost confidence, and put a smile on your face!
        </p>
      </div>
      <div className="w-[45%] bg-white bg-opacity-90 backdrop-blur-md border-2 border-pink-700 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
        <p className="text-3xl font-extrabold text-lime-800 mb-4">🌟 Why Compliments Matter?</p>
        <ul className="text-pink-800 text-lg list-none space-y-2">
          <li>✅ Boost self-esteem and make people feel valued</li>
          <li>✅ Strengthen relationships by spreading positivity</li>
          <li>✅ Improve mood and overall well-being</li>
          <li>✅ Create a ripple effect—kindness inspires kindness!</li>
        </ul>
      </div>

      <div className="w-[45%] bg-white bg-opacity-90 backdrop-blur-md border-2 border-pink-700 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
        <p className="text-3xl font-extrabold text-lime-800 mb-4">💡 What We Do</p>
        <p className="text-pink-800 text-lg">
          Our generator provides random, thoughtful, and heartwarming compliments in just one click! 
          Whether you need a little motivation, want to brighten someone’s day, or just enjoy 
          wholesome words, we’ve got you covered!
        </p>
      </div>

      <div className="w-[45%] bg-white bg-opacity-90 backdrop-blur-md border-2 border-pink-700 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-transform duration-300 hover:scale-105">
        <p className="text-3xl font-extrabold text-lime-800 mb-4">✨ Features</p>
        <ul className="text-pink-800 text-lg list-none space-y-2">
          <li>💬 Unlimited Compliments: No matter how many you need, we’ve got plenty!</li>
          <li>🎨 Custom Themes: Choose between fun, neon, or dark mode.</li>
          <li>📤 Share with Friends: Easily send compliments via social media or messages.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutUs;
