const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, "is invalid"]
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;