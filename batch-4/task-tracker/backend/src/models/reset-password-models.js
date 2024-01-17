const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const resetPasswordSchema = new Schema({
  otpCode: { type: Number, require: true, unique: true },
  token: { type: String, require: true },
});

const resetPasswordModel = model('reset-password-otp', resetPasswordSchema);

module.exports = resetPasswordModel;