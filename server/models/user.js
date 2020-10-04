const mongoose = require("mongoose");
require("mongoose-type-email");
mongoose.SchemaTypes.Email.defaults.message = "Email address is invalid";

const userSchema = mongoose.Schema(
  {
    firstName: { type: String, required: true, maxlength: 100 },
    lastName: { type: String, required: true, maxlength: 100 },
    email: { type: mongoose.SchemaTypes.Email, required: true, unique: true },
    password: { type: String, required: true },
    vendorDetails: {
      name: { type: String },
      village: { type: String },
      ps: { type: String },
      district: { type: String },
      contactNumber: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
