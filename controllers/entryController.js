const Entry = require("../models/Entry");

// Add new entry
const addEntry = async (req, res) => {
  try {
    const { name, email, phoneNumber, dateTime } = req.body;
    if (!name || !email || !phoneNumber || !dateTime) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEntry = new Entry({ name, email, phoneNumber, dateTime });
    await newEntry.save();

    res.status(201).json({ message: "Entry saved successfully. Our team will contact you soon." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all entries
const getAllEntries = async (req, res) => {
  try {
    const entries = await Entry.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// Update status
const updateStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!["Pending", "Completed", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status" });
    }

    const entry = await Entry.findByIdAndUpdate(id, { status }, { new: true });
    if (!entry) return res.status(404).json({ message: "Entry not found" });

    res.json({ message: "Status updated", entry });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { addEntry, getAllEntries, updateStatus };
