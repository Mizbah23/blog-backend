const express = require('express');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));