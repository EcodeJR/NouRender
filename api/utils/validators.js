/**
 * Input validators for API endpoints
 * Ensures data integrity and security
 */

/**
 * Validates email format
 * @param {string} email - Email to validate
 * @returns {object} { isValid: boolean, error?: string }
 */
const validateEmail = (email) => {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }

  if (email.length > 255) {
    return { isValid: false, error: 'Email is too long' };
  }

  return { isValid: true };
};

/**
 * Sanitizes email input (trim and lowercase)
 * @param {string} email - Email to sanitize
 * @returns {string} Sanitized email
 */
const sanitizeEmail = (email) => {
  return email.trim().toLowerCase();
};

/**
 * Validates request body
 * @param {object} body - Request body to validate
 * @param {string[]} requiredFields - Required field names
 * @returns {object} { isValid: boolean, error?: string }
 */
const validateRequestBody = (body, requiredFields = []) => {
  if (!body || typeof body !== 'object') {
    return { isValid: false, error: 'Invalid request body' };
  }

  for (const field of requiredFields) {
    if (!body[field]) {
      return { isValid: false, error: `${field} is required` };
    }
  }

  return { isValid: true };
};

module.exports = {
  validateEmail,
  sanitizeEmail,
  validateRequestBody,
};
