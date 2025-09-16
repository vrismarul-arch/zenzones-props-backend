const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  dateTime: { type: Date, required: true },
});

module.exports = mongoose.model("Entry", entrySchema);
