const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

// POST Route to store messages
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({ name, email, message });
    await newMessage.save();
    res.status(201).json({ success: true, message: 'Message stored successfully!' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// GET Route to fetch stored messages
router.get('/', async (req, res) => {
  try {
    const messages = await Message.find().sort({ timestamp: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
