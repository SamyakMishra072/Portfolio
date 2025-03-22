const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

// Load environment variables
dotenv.config();

console.log("MONGO_URI from .env:", process.env.MONGO_URI); // Debugging

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('❌ Error: MONGO_URI is not defined. Check your .env file.');
  process.exit(1);
}

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error(`❌ Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

// Automatically create admin user
const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({ username: 'Admin' });
    if (existingAdmin) {
      console.log('⚠️ Admin already exists!');
      return;
    }

    const hashedPassword = await bcrypt.hash('12345678', 10);
    const admin = new Admin({ username: 'Admin', password: hashedPassword });

    await admin.save();
    console.log('✅ Admin (Admin / 12345678) created successfully!');
  } catch (error) {
    console.error(`❌ Error creating admin: ${error.message}`);
  } finally {
    mongoose.disconnect();
  }
};

// Run function only if script is executed directly
if (require.main === module) {
  createAdmin();
}

module.exports = connectDB;
