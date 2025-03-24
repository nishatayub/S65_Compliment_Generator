import { useState } from 'react';
import compliments from '../../../../backend/utils/compliments.js';

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
    <div className="flex flex-col justify-center items-center min-h-screen bg-red-200 p-6">
      <div className="w-160 p-8 bg-white shadow-2xl rounded-3xl border-4 border-pink-700">
        <h2 className="text-4xl font-extrabold text-lime-800 text-center mb-6">
          Receive a Compliment 🎁
        </h2>

        {selectedMood === '' ? (
          <>
            <p className="text-center text-lg font-semibold mb-4">
              What kind of compliment do you need today?
            </p>
            <div className="grid grid-cols-2 gap-4">
              {Object.keys(compliments).map((mood) => (
                <button
                  key={mood}
                  onClick={() => setSelectedMood(mood)}
                  className="bg-red-800 text-white text-lg font-semibold py-2 px-2 rounded-lg hover:bg-red-900 transition-all w-70"
                >
                  {mood.charAt(0).toUpperCase() + mood.slice(1)}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {errorMessage && <p className="text-red-600 text-center mb-4">{errorMessage}</p>}
            {compliment && (
              <p className="text-center text-green-700 font-bold mb-4 bg-green-100 p-3 rounded-lg">
                {compliment}
              </p>
            )}
            <button
              onClick={fetchCompliment}
              className="mt-6 w-full bg-lime-800 text-white text-lg font-semibold py-2 rounded-lg hover:bg-lime-700 transition-all"
            >
              Get a Compliment
            </button>
            <button
              onClick={() => {
                setSelectedMood('');
                setCompliment('');
                setErrorMessage('');
              }}
              className="mt-4 w-full bg-yellow-700 text-white text-lg font-semibold py-2 rounded-lg hover:bg-yellow-900 transition-all"
            >
              Choose Another Mood
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ReceiveCompliment;
