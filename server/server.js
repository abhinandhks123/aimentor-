// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Log all requests for debugging
app.use((req, res, next) => {
  console.log(`[${req.method}] ${req.url}`);
  next();
});

connectDB();

// ✅ Mount route
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log('✅ Server running on port 5000');
});
