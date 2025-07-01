// server.js
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}));

app.use(express.json());

// 2. Define your Mongoose schema/model
const messageSchema = new mongoose.Schema({
  name:    { type: String, required: true },
  email:   { type: String, required: true },
  message: { type: String, required: true },
  created: { type: Date,   default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// 3. Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// 4. Define the POST endpoint
app.post('/api/messages', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMsg = new Message({ name, email, message });
    await newMsg.save();
    res.status(201).json({ success: true, msg: 'Message stored.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: 'Server error.' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
