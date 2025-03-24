require("dotenv").config();
const express = require("express");
const connectDB = require("./db/db.js");
const userRoutes = require("./routes/userRoute.js");
const complimentRoutes = require("./routes/complimentRoute.js");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use("/api/user", userRoutes);
app.use("/api/compliment", complimentRoutes);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });
