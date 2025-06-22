const express = require("express");
const { sendEmail, sendWhatsAppMessage, saveCompliment } = require("../controllers/complimentController");

const router = express.Router();

router.post("/send-email", sendEmail);
router.post("/save", saveCompliment);

module.exports = router;
