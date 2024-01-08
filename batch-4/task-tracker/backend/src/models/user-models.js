const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  address: String,
  phone: String,
  role: String,
  age: Number,
});

const userModel = model('users', userSchema);

module.exports = userModel;