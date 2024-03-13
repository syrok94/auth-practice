const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  providerId: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  profilePhoto: {
    type: String,
    required: false,
  },
});

const User = mongoose.model('User', profileSchema);

module.exports = User;