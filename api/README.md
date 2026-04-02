# Backend API Documentation

This backend contains all serverless API endpoints for NouRender. It's designed to be modular, scalable, and easily expandable for future features.

## Project Structure

```
api/
├── waitlist.js              # POST endpoint - Add email to waitlist
├── waitlist/
│   └── get.js              # GET endpoint - Retrieve waitlist (secured)
├── utils/
│   ├── validators.js       # Input validation utilities
│   ├── database.js         # Database operations
│   └── security.js         # Security & CORS handling
└── README.md               # This file

data/
└── waitlist.json           # Waitlist data storage (auto-created)
```

## API Endpoints

### 1. Add to Waitlist

**Endpoint:** `POST /api/waitlist`

**Description:** Adds a user's email to the waitlist.

**Request:**
```json
{
  "email": "user@example.com"
}
```

**Response - Success (201):**
```json
{
  "success": true,
  "message": "Successfully added to waitlist",
  "data": {
    "email": "user@example.com",
    "joinedAt": "2024-04-02T10:30:00.000Z"
  }
}
```

**Response - Duplicate (409):**
```json
{
  "success": false,
  "message": "Email already exists in waitlist",
  "isDuplicate": true
}
```

**Response - Invalid (400):**
```json
{
  "success": false,
  "message": "Invalid email format"
}
```

---

### 2. Get Waitlist Entries

**Endpoint:** `GET /api/waitlist/get`

**Description:** Retrieves all waitlist entries (requires authentication).

**Headers:**
```
x-api-key: your_secure_api_key
```

**Response - Success (200):**
```json
{
  "success": true,
  "message": "Waitlist entries retrieved successfully",
  "data": {
    "entries": [
      {
        "id": "1234567890",
        "email": "user@example.com",
        "joinedAt": "2024-04-02T10:30:00.000Z",
        "source": "website"
      }
    ],
    "count": 1
  }
}
```

**Response - Unauthorized (401):**
```json
{
  "success": false,
  "message": "Unauthorized - Invalid or missing API key"
}
```

---

## Configuration

### Environment Variables

For Vercel deployment, set the following environment variables in your Vercel project settings:

| Variable | Description | Required |
|----------|-------------|----------|
| `WAITLIST_API_KEY` | Secret key for securing the GET endpoint | Yes (for admin access) |
| `ALLOWED_ORIGINS` | Comma-separated list of allowed origins for CORS | No (defaults to localhost) |

### Local Development

1. Create a `.env.local` file in the root directory:
```
WAITLIST_API_KEY=your_secure_api_key_here
ALLOWED_ORIGINS=http://localhost:5173
```

2. The API will automatically create the `data/` directory and `waitlist.json` file on first use.

---

## Security Features

### Validated Features:
- ✅ **Email Validation** - Checks format and length
- ✅ **Input Sanitization** - Trims and lowercases emails
- ✅ **API Key Authentication** - Protects GET endpoints
- ✅ **CORS Handling** - Configured for frontend security
- ✅ **Security Logging** - Tracks unauthorized access attempts

### Coming Soon:
- Rate limiting (structure in place, ready for Redis)
- Advanced monitoring and analytics

---

## Adding New Endpoints

### Template for New Features

1. Create a new file in the `api/` folder (e.g., `api/feature.js`)
2. Use existing utilities from `api/utils/`:
   ```javascript
   const { setCorsHeaders, handleCorsPreFlight } = require('./utils/security');
   const { validateEmail } = require('./utils/validators');
   
   module.exports = async (req, res) => {
     setCorsHeaders(res);
     if (handleCorsPreFlight(req, res)) return;
     
     // Your logic here
   };
   ```

3. Export endpoint in Vercel routing (vercel.json gets auto-configured)

### Extending Database

The database module is abstracted. To migrate to a real database:

1. Update `/api/utils/database.js` with your database client
2. Replace file operations with database queries
3. All endpoints will automatically use the new database

Example for MongoDB migration:
```javascript
// Replace file operations with MongoDB calls
const getWaitlistEntries = async () => {
  return await db.collection('waitlist').find({}).toArray();
};
```

---

## Deployment to Vercel

### Steps:

1. **Push code to Git** (GitHub, GitLab, etc.)

2. **Connect to Vercel:**
   - Go to https://vercel.com
   - Click "Add New..." → "Project"
   - Select your repository
   - Select "React" as framework preset

3. **Set Environment Variables:**
   - In project settings → "Environment Variables"
   - Add `WAITLIST_API_KEY` and `ALLOWED_ORIGINS`

4. **Deploy:**
   - Vercel automatically detects `/api` folder
   - Serverless functions are created automatically
   - Your endpoints will be available at `https://yoursite.vercel.app/api/waitlist`

### Accessing Endpoints in Production:

```javascript
// Add email to waitlist
POST https://yoursite.vercel.app/api/waitlist
Content-Type: application/json

{
  "email": "user@example.com"
}

// Get waitlist (requires API key)
GET https://yoursite.vercel.app/api/waitlist/get
x-api-key: your_api_key
```

---

## Data Storage

### Current: File-Based Storage
- Location: `data/waitlist.json`
- Good for: Development and small deployments
- Limitation: Ephemeral on Vercel (data resets on redeploy)

### Production Recommendation:
Migrate to:
- **Supabase** (PostgreSQL with built-in auth)
- **MongoDB Atlas** (NoSQL, easy scaling)
- **Firebase** (Real-time database)
- **AWS DynamoDB** (Serverless, scalable)

Migration steps are straightforward - just update `database.js`.

---

## Error Handling

All endpoints return consistent error responses:

```json
{
  "success": false,
  "message": "Descriptive error message"
}
```

| Status Code | Meaning |
|------------|---------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request (validation error) |
| 401 | Unauthorized |
| 405 | Method Not Allowed |
| 409 | Conflict (duplicate email) |
| 500 | Server Error |

---

## Testing the API

### Using cURL:

```bash
# Add to waitlist
curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Get waitlist (requires API key)
curl -X GET http://localhost:3001/api/waitlist/get \
  -H "x-api-key:your_api_key_here"
```

### Using Postman:

1. Create a new request
2. Set method to POST
3. URL: `http://localhost:3001/api/waitlist`
4. Headers: `Content-Type: application/json`
5. Body (raw): `{"email":"test@example.com"}`
6. Click Send

---

## Troubleshooting

### "WAITLIST_API_KEY not set"
- Add the environment variable to Vercel project settings
- For local development, add to `.env.local`

### "Email already exists"
- The email is already in the waitlist
- Status code will be 409 (Conflict)

### "Cannot find module"
- Ensure all files are created in correct paths
- The backend should be at `/api` not `/src/api`

### Data persists on redeploy
- On Vercel, serverless functions don't persist file data
- Migrate to a cloud database for production

---

## Next Steps

1. ✅ Implement core waitlist logic
2. 🔲 Add email notification on signup
3. 🔲 Create admin dashboard for viewing entries
4. 🔲 Implement survey submission endpoint
5. 🔲 Add analytics tracking
6. 🔲 Migrate to cloud database

---

For questions or issues, check the code comments in each utility file.
