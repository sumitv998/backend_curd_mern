const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  age: {
    type: String,
    required: [true, "Please provide Age!"],
  },
  number: {
    type: Number,
    required: [true, "Please provide your price number!"],
  },
  work: {
    type: String,
    required: [true, "Please provide a work!"],
  },
  add: {
    type: String,
    required: [true, "Please provide a address!"],
  },
  desc: {
    type: String,
    required: [true, "Please provide a description!"],
  },
});

const User = mongoose.model("Users", userSchema);

module.exports = User;
