/**
 * POST /api/waitlist
 * 
 * Adds a user to the waitlist
 * 
 * Request body:
 * {
 *   "email": "user@example.com"
 * }
 * 
 * Response:
 * {
 *   "success": boolean,
 *   "message": string,
 *   "data": {
 *     "email": string,
 *     "joinedAt": string
 *   }
 * }
 */

const { validateEmail, sanitizeEmail } = require('./utils/validators');
const { addToWaitlist } = require('./utils/database');
const { setCorsHeaders, handleCorsPreFlight, validateMethod } = require('./utils/security');

module.exports = async (req, res) => {
  try {
    // Set CORS headers
    setCorsHeaders(res);

    // Handle preflight
    if (handleCorsPreFlight(req, res)) {
      return;
    }

    // Validate method
    if (!validateMethod(req, ['POST', 'OPTIONS'])) {
      res.status(405).json({ success: false, message: 'Method not allowed' });
      return;
    }

    const { email } = req.body || {};

    // Validate email
    const validation = validateEmail(email);
    if (!validation.isValid) {
      return res.status(400).json({
        success: false,
        message: validation.error,
      });
    }

    // Sanitize email
    const sanitized = sanitizeEmail(email);

    // Add to waitlist
    const result = await addToWaitlist(sanitized);

    if (!result.success) {
      const statusCode = result.isDuplicate ? 409 : 500;
      return res.status(statusCode).json({
        success: false,
        message: result.message,
      });
    }

    // Success response
    res.status(201).json({
      success: true,
      message: result.message,
      data: {
        email: sanitized,
        joinedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error('Waitlist API Error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while processing your request',
    });
  }
};
