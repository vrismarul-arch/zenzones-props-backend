const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    dateTime: { type: Date, required: true },
    propertyType: { 
      type: String, 
      enum: ["2BHK", "3BHK", "4BHK"], 
      required: true 
    },
    notes: { type: String, default: "" },
    status: { 
      type: String, 
      enum: ["Pending", "Completed", "Rejected"], 
      default: "Pending" 
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Entry", entrySchema);
