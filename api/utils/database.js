/**
 * Database operations module - MongoDB
 * 
 * Handles all waitlist data operations using MongoDB
 * Connection string should be in environment variable: MONGODB_URI
 */

const { MongoClient } = require('mongodb');

let mongoClient = null;
let db = null;
let waitlistCollection = null;

/**
 * Connects to MongoDB
 * @returns {Promise<void>}
 */
const connectDB = async () => {
  try {
    if (mongoClient && mongoClient.topology && mongoClient.topology.isConnected()) {
      return;
    }

    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    mongoClient = new MongoClient(mongoUri);
    await mongoClient.connect();

    db = mongoClient.db('nourender');
    waitlistCollection = db.collection('waitlist');

    // Create index for email uniqueness
    await waitlistCollection.createIndex({ email: 1 }, { unique: true });

    console.log('✓ Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    throw error;
  }
};

/**
 * Reads all waitlist entries
 * @returns {Promise<object[]>} Array of waitlist entries
 */
const getWaitlistEntries = async () => {
  try {
    await connectDB();
    const entries = await waitlistCollection
      .find({})
      .sort({ joinedAt: -1 })
      .toArray();
    return entries;
  } catch (error) {
    console.error('Error reading waitlist:', error);
    return [];
  }
};

/**
 * Adds a new email to the waitlist
 * @param {string} email - Email to add
 * @returns {Promise<object>} { success: boolean, message: string, isDuplicate?: boolean }
 */
const addToWaitlist = async (email) => {
  try {
    await connectDB();

    const newEntry = {
      email,
      joinedAt: new Date(),
      source: 'website',
    };

    const result = await waitlistCollection.insertOne(newEntry);

    return {
      success: true,
      message: 'Successfully added to waitlist',
      id: result.insertedId.toString(),
    };
  } catch (error) {
    if (error.code === 11000) {
      return {
        success: false,
        message: 'Email already exists in waitlist',
        isDuplicate: true,
      };
    }
    console.error('Error adding to waitlist:', error);
    return { success: false, message: 'Failed to add to waitlist' };
  }
};

/**
 * Gets waitlist count
 * @returns {Promise<number>} Number of entries in waitlist
 */
const getWaitlistCount = async () => {
  try {
    await connectDB();
    const count = await waitlistCollection.countDocuments();
    return count;
  } catch (error) {
    console.error('Error getting waitlist count:', error);
    return 0;
  }
};

/**
 * Removes an email from waitlist
 * @param {string} email - Email to remove
 * @returns {Promise<object>} { success: boolean, message: string }
 */
const removeFromWaitlist = async (email) => {
  try {
    await connectDB();
    const result = await waitlistCollection.deleteOne({ email });

    if (result.deletedCount > 0) {
      return { success: true, message: 'Removed from waitlist' };
    }

    return { success: false, message: 'Email not found in waitlist' };
  } catch (error) {
    console.error('Error removing from waitlist:', error);
    return { success: false, message: 'Failed to remove from waitlist' };
  }
};

/**
 * Closes MongoDB connection
 * @returns {Promise<void>}
 */
const closeDB = async () => {
  try {
    if (mongoClient) {
      await mongoClient.close();
      mongoClient = null;
      db = null;
      waitlistCollection = null;
      console.log('✓ Disconnected from MongoDB');
    }
  } catch (error) {
    console.error('Error closing database connection:', error);
  }
};

module.exports = {
  connectDB,
  closeDB,
  getWaitlistEntries,
  addToWaitlist,
  getWaitlistCount,
  removeFromWaitlist,
};
