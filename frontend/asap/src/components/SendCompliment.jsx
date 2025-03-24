import { useState } from "react";
import axios from "axios";

const SendCompliment = () => {
  const [message, setMessage] = useState("");
  const [recipient, setRecipient] = useState("");
  
  const handleSubmit = async () => {

    try {
      const endpoint = "/api/compliment/send-email";
      const response = await axios.post(`http://localhost:8080${endpoint}`, {
        message,
        recipient,
      });
      alert(response.data.message);
    } catch (error) {
      alert("Failed to send compliment!", error.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-red-200 p-6">
      <div className="w-130 p-8 bg-white shadow-2xl rounded-3xl border-4 border-pink-700">
        <h2 className="text-4xl font-extrabold text-lime-800 text-center mb-6">💌 Send a Compliment</h2>
        <textarea
          className="w-full p-3 border-2 border-pink-700 rounded-xl text-xl focus:outline-none bg-white"
          rows="4"
          placeholder="Write your compliment..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <input
          type="text"
          className="w-full p-3 border-2 border-pink-700 rounded-xl mt-4 text-xl focus:outline-none bg-white"
          placeholder="Enter recipient (Email)"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
        />
        
          <button
            onClick={() => handleSubmit("email")}
            className="mt-6 w-full bg-lime-800 text-white text-lg font-semibold py-2 rounded-lg hover:bg-lime-700 transition-all"
          >
            Send
          </button>
      </div>
    </div>
  );
};

export default SendCompliment;