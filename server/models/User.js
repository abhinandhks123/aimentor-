// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  wakeUpTime: String,
  targetYear: Number,
  motivationStyle: String,
  weakSubjects: [String],
  password: String,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
