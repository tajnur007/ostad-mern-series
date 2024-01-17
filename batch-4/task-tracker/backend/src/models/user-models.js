const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: String,
  phone: String,
  role: String,
  age: Number,
  authToken: String,
});

const userModel = model('users', userSchema);

module.exports = userModel;