require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Validate required environment variables
if (!process.env.MONGO_URI) {
  console.error('❌ Error: MONGO_URI is not defined. Check your .env file.');
  process.exit(1);
}

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/messages', require('./routes/messageRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Root Route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('🚨 Error:', err.message);
  res.status(500).json({ error: 'Server error' });
});

// 404 Route Handling
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
