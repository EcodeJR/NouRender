/**
 * NouRender Backend Server
 * Entry point for the application
 * 
 * Start with: node server.js (from /api folder)
 * Or: npm start (from /api folder)
 */

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const { connectDB, closeDB } = require('./utils/database');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS || ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
  })
);

// Connect to MongoDB on startup
connectDB().catch((error) => {
  console.error('Failed to connect to MongoDB:', error);
  process.exit(1);
});

// ============ API Routes ============

/**
 * POST /api/waitlist
 * Add email to waitlist
 */
app.post('/api/waitlist', require('./waitlist'));

/**
 * GET /api/waitlist/get
 * Get all waitlist entries (requires API key)
 */
app.get('/api/waitlist/get', require('./waitlist/get'));

/**
 * Health check endpoint
 */
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

/**
 * 404 handler
 */
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found' });
});

/**
 * Error handler
 */
app.use((err, req, res, _next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    message: process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message,
  });
});

// ============ Server Startup ============

const server = app.listen(PORT, () => {
  console.log(`
╔═════════════════════════════════════╗
║        NouRender API Server         ║
╚═════════════════════════════════════╝

✓ Server running on port ${PORT}
✓ Environment: ${process.env.NODE_ENV || 'development'}
✓ Database: MongoDB

Available Endpoints:
  POST   /api/waitlist          - Add email to waitlist
  GET    /api/waitlist/get      - Get all entries (requires API key)
  GET    /api/health            - Health check

Documentation: See /api/README.md
  `);
});

// Graceful shutdown
process.on('SIGINT', async () => {
  console.log('\n\n✓ Shutting down gracefully...');
  await closeDB();
  server.close(() => {
    console.log('✓ Server closed');
    process.exit(0);
  });
});

module.exports = app;
