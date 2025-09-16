const express = require("express");
const router = express.Router();
const { addEntry } = require("../controllers/entryController");

// Route to add a new entry
router.post("/add", addEntry);

module.exports = router;
