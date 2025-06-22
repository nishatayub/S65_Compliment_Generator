const mongoose = require('mongoose');

const ComplimentSchema = new mongoose.Schema({
    message: { type: String, required: true },
    recipient: { type: String, required: true }, 
    sentVia: { type: String, enum: ["email", "whatsapp"], required: true },
    createdAt: { type: Date, default: Date.now }
  });
  
const Compliment = mongoose.model('Compliment', ComplimentSchema);
module.exports = Compliment;