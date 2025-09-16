require("dotenv").config();
const jwt = require("jsonwebtoken");

// Admin login
const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ message: "Email and password required" });

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ message: "Login successful", token });
  } else {
    return res.status(401).json({ message: "Invalid email or password" });
  }
};

// Get admin profile (protected)
const getAdminProfile = (req, res) => {
  return res.status(200).json({
    name: "Admin",
    email: process.env.ADMIN_EMAIL,
  });
};

module.exports = { adminLogin, getAdminProfile };
