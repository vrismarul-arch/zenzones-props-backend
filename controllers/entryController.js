const Entry = require("../models/Entry");

// Controller to add a new entry
const addEntry = async (req, res) => {
  try {
    const { name, email, phoneNumber, dateTime } = req.body;

    // Simple validation
    if (!name || !email || !phoneNumber || !dateTime) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEntry = new Entry({
      name,
      email,
      phoneNumber,
      dateTime,
    });

    await newEntry.save();

    res.status(201).json({ message: "Entry saved successfully" });
  } catch (error) {
    console.error("Error saving entry:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addEntry,
};
