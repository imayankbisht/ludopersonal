const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
    unique: true
  },
  displayName: {
    type: String
  }
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
