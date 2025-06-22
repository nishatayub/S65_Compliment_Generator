const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization");

    if (!token) {
        return res.status(401).json({ message: "Access Denied! No token provided." });
    }

    try {
        const verified = jwt.verify(token, "your_secret_key");
        req.user = verified; // Attach user data to request
        next(); // Move to the next middleware
    } catch (err) {
        return res.status(400).json({ message: "Invalid Token" });
    }
};

module.exports = authMiddleware;
