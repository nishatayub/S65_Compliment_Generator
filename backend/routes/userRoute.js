const { addUser, getUser, updateUser, loginUser, deleteUser } = require("../controllers/userController.js");
const authMiddleware = require("../middlewares/authMiddleware");
const express = require("express");
const router = express.Router();

router.post("/add", addUser);
router.post("/login", loginUser);

// Protected Routes (Require authentication)
router.get("/users", authMiddleware, getUser);
router.put("/users/:id", authMiddleware, updateUser);
router.delete("/users/:id", authMiddleware, deleteUser);
module.exports = router;
