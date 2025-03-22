const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin'); 

// Load environment variables
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;  // Ensure it's correctly loaded

if (!MONGO_URI) {
  console.error('Error: MONGO_URI is not defined. Check your .env file.');
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Database Connection Error: ${error.message}`);
    process.exit(1);
  }
};

// Function to create an admin user
const createAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({ username: 'Samyak' });
    if (existingAdmin) {
      console.log('Admin already exists');
      mongoose.disconnect();
      return;
    }

    const hashedPassword = await bcrypt.hash('9775948268', 10);
    const admin = new Admin({ username: 'Samyak', password: hashedPassword });

    await admin.save();
    console.log('Admin created successfully');
  } catch (error) {
    console.error(`Error creating admin: ${error.message}`);
  } finally {
    mongoose.disconnect();
  }
};

// Run function only when script is executed directly
if (require.main === module) {
  createAdmin();
}

module.exports = connectDB;
