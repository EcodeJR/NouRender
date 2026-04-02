/**
 * GET /api/waitlist/get
 * 
 * Retrieves all waitlist entries (SECURED - requires API key)
 * 
 * Headers:
 * {
 *   "x-api-key": "your_api_key_here"
 * }
 * 
 * Response:
 * {
 *   "success": boolean,
 *   "message": string,
 *   "data": {
 *     "entries": array,
 *     "count": number
 *   }
 * }
 * 
 * Security Note:
 * - This endpoint requires authentication
 * - Set WAITLIST_API_KEY environment variable
 * - For Vercel: Add to environment variables in project settings
 */

const { getWaitlistEntries, getWaitlistCount } = require('../utils/database');
const { setCorsHeaders, handleCorsPreFlight, validateApiKey, validateMethod, logSecurityEvent } = require('../utils/security');

module.exports = async (req, res) => {
  try {
    // Set CORS headers
    setCorsHeaders(res);

    // Handle preflight
    if (handleCorsPreFlight(req, res)) {
      return;
    }

    // Validate method
    if (!validateMethod(req, ['GET', 'OPTIONS'])) {
      res.status(405).json({ success: false, message: 'Method not allowed' });
      return;
    }

    // Validate API key
    if (!validateApiKey(req)) {
      logSecurityEvent(req, 'UNAUTHORIZED_ACCESS_ATTEMPT');
      return res.status(401).json({
        success: false,
        message: 'Unauthorized - Invalid or missing API key',
      });
    }

    // Log successful access
    logSecurityEvent(req, 'WAITLIST_RETRIEVED');

    // Get entries
    const entries = await getWaitlistEntries();
    const count = await getWaitlistCount();

    res.status(200).json({
      success: true,
      message: 'Waitlist entries retrieved successfully',
      data: {
        entries,
        count,
      },
    });
  } catch (error) {
    console.error('Waitlist GET API Error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while retrieving waitlist entries',
    });
  }
};
