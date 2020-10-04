const mongoose = require("mongoose");

const costomerSchema = mongoose.Schema(
  {
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    fullName: { type: String, required: true },
    mobileNumber: { type: String },
    address: { type: String, required: true },
    notes: { type: String },
    item: [
      {
        date: { type: Date, required: true },
        description: { type: String, required: true },
        unitPrice: { type: Number, required: true },
        quantity: { type: Number, required: true },
        taxPercent: { type: Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Costomer", costomerSchema);
