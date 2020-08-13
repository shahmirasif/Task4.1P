const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  fName: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  lName: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    min: 5,
    max: 255,
  },
  password: {
    type: String,
    min: 8,
    max: 1024,
    required: true,
  },
  address: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  city: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  region: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  zip: {
    type: String,
    min: 3,
    max: 10,
  },
  contact: {
    type: String,
    min: 5,
    max: 15,
  },
});

module.exports = userSchema;
