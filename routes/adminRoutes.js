const express = require("express");
const router = express.Router();
const { adminLogin, getAdminProfile } = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

// Admin login
router.post("/login", adminLogin);

// Protected profile
router.get("/profile", authMiddleware, getAdminProfile);

module.exports = router;
