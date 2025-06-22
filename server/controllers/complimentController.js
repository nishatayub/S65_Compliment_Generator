require("dotenv").config();
const Compliment = require("../models/complimentModel");
const nodemailer = require("nodemailer");

exports.saveCompliment = async (req, res) => {
  try {
    const { message, recipient, sentVia } = req.body;
    const newCompliment = new Compliment({ message, recipient, sentVia });
    await newCompliment.save();
    return res.status(201).json({ message: "Compliment saved!", data: newCompliment });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Error saving compliment!" });
  }
};

exports.sendEmail = async (req, res) => {
  const { message, recipient } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipient,
    subject: "You received a compliment! 💖",
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions); 
    return res.status(200).json({ message: "Email sent!" });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Failed to send email!" });
  }
};
