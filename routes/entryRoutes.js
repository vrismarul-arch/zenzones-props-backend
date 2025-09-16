const express = require("express");
const router = express.Router();
const { addEntry, getAllEntries, updateStatus } = require("../controllers/entryController");

// Add new entry
router.post("/add", addEntry);

// Get all entries
router.get("/all", getAllEntries);

// Update entry status
router.put("/status/:id", updateStatus);

module.exports = router;
