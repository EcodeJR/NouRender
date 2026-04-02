/**
 * Security utilities for API endpoints
 * Handles authentication, CORS, and rate limiting
 */

/**
 * Validates API key from request headers
 * API key should be passed as 'x-api-key' header
 * 
 * For production: Store keys in environment variables
 * Example: WAITLIST_API_KEY=your_secure_key_here
 * 
 * @param {object} req - Request object
 * @returns {boolean} Whether API key is valid
 */
const validateApiKey = (req) => {
  const apiKey = req.headers['x-api-key'];
  const validKey = process.env.WAITLIST_API_KEY;

  // If no key is set in env, deny access
  if (!validKey) {
    console.warn('WAITLIST_API_KEY not set in environment variables');
    return false;
  }

  return apiKey === validKey;
};

/**
 * Sets CORS headers for API responses
 * @param {object} res - Response object
 * @param {string[]} allowedOrigins - Array of allowed origins
 */
const setCorsHeaders = (res, allowedOrigins = ['http://localhost:3000', 'http://localhost:5173']) => {
  const origin = process.env.ALLOWED_ORIGINS || allowedOrigins.join(',');
  res.setHeader('Access-Control-Allow-Origin', origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');
};

/**
 * Handles preflight CORS requests
 * @param {object} req - Request object
 * @param {object} res - Response object
 * @returns {boolean} Whether request was handled
 */
const handleCorsPreFlight = (req, res) => {
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res);
    res.status(200).end();
    return true;
  }
  return false;
};

/**
 * Rate limiting helper
 * Note: For production use, implement proper rate limiting with Redis
 * This is a placeholder for documenting the pattern
 * 
 * @param {object} _req - Request object (unused for now)
 * @param {string} _identifier - IP or user identifier (unused for now)
 * @returns {object} { isAllowed: boolean, remaining: number, resetTime: number }
 */
const checkRateLimit = (_req, _identifier) => {
  // TODO: Implement with Redis or similar
  // For now, return unlimited
  return {
    isAllowed: true,
    remaining: 1000,
    resetTime: 0,
  };
};

/**
 * Logs request details for security monitoring
 * @param {object} req - Request object
 * @param {string} action - Action being performed
 */
const logSecurityEvent = (req, action) => {
  const timestamp = new Date().toISOString();
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  console.log(`[${timestamp}] Security Event - Action: ${action}, IP: ${ip}, Method: ${req.method}`);
};

/**
 * Validates HTTP method
 * @param {object} req - Request object
 * @param {string[]} allowedMethods - Allowed HTTP methods
 * @returns {boolean} Whether method is allowed
 */
const validateMethod = (req, allowedMethods = []) => {
  return allowedMethods.includes(req.method);
};

module.exports = {
  validateApiKey,
  setCorsHeaders,
  handleCorsPreFlight,
  checkRateLimit,
  logSecurityEvent,
  validateMethod,
};
