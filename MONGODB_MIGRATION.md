# MongoDB Migration Guide

## What Changed

Your backend has been migrated from file-based storage (fs) to **MongoDB**. Here's what was updated:

### Changes Made:
1. **`/api/utils/database.js`** - Completely refactored to use MongoDB with:
   - Async/await patterns
   - Connection pooling
   - Automatic index creation for email uniqueness
   - Graceful connection handling

2. **`/api/waitlist.js`** & **`/api/waitlist/get.js`** - Updated to:
   - Handle async database operations
   - Await all database calls
   - Proper error handling

3. **`server.js`** - Created as the main entry point:
   - Express server setup
   - MongoDB connection on startup
   - All API route handling
   - Graceful shutdown

4. **`package.json`** - Added dependencies:
   - `express` - Web framework
   - `mongodb` - MongoDB driver
   - `cors` - Cross-origin handling
   - `body-parser` - Request parsing
   - `dotenv` - Environment variables
   - `nodemon` - Auto-reload during development

---

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Get MongoDB Connection String

**Option A: MongoDB Atlas (Cloud - Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Go to "Databases" → Click your cluster → "Connect"
5. Choose "Drivers" → "Node.js"
6. Copy the connection string
7. Replace `<password>` with your database password
8. Keep the connection string safe

**Option B: MongoDB Community (Local)**
1. Download from https://www.mongodb.com/try/download/community
2. Install and run MongoDB locally
3. Connection string: `mongodb://localhost:27017/nourender`

### 3. Create `.env` File
Create a `.env` file in your project root (copy from `.env.example`):

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nourender?retryWrites=true&w=majority
PORT=3001
NODE_ENV=development
WAITLIST_API_KEY=your_secure_key_here_use_crypto.randomBytes(32).toString('hex')
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001
VITE_API_URL=http://localhost:3001
```

Replace:
- `username` - Your MongoDB username
- `password` - Your MongoDB password
- `cluster` - Your cluster name

### 4. Generate API Key
Generate a secure random API key:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```
Copy and paste the output into `WAITLIST_API_KEY` in `.env`

---

## Running the Application

### Development Mode

**Terminal 1 - Frontend (Vite):**
```bash
npm run dev
```
Frontend will run at: `http://localhost:5173`

**Terminal 2 - Backend (Express):**
```bash
npm run server:dev
```
Backend will run at: `http://localhost:3001`

### Production Mode

**Build frontend:**
```bash
npm run build
```

**Run server:**
```bash
npm start
```
or
```bash
npm run server
```

---

## Testing the API

### Add to Waitlist
```bash
curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Successfully added to waitlist",
  "data": {
    "email": "test@example.com",
    "joinedAt": "2024-04-02T10:30:00.000Z"
  }
}
```

### Get Waitlist Entries
```bash
curl -X GET http://localhost:3001/api/waitlist/get \
  -H "x-api-key:your_api_key_here"
```

### Health Check
```bash
curl http://localhost:3001/api/health
```

---

## MongoDB Connection Troubleshooting

### Error: "MONGODB_URI environment variable is not set"
- ✅ Solution: Add `MONGODB_URI` to your `.env` file

### Error: "connect EREFUSED 127.0.0.1:27017"
- ✅ Solution (Local MongoDB): 
  - Make sure MongoDB service is running
  - On Windows: `mongod` command or use MongoDB Compass
  - On Mac: `brew services start mongodb-community`

### Error: "MongoAuthenticationError"
- ✅ Solution:
  - Check username and password in connection string
  - Make sure IP is whitelisted (MongoDB Atlas)
  - Verify `@` symbols are URL-encoded if password contains them

### Error: "MongoServerError: E11000 duplicate key error"
- ✅ Solution: Email already exists in waitlist (expected behavior)

---

## Frontend Integration

Update `/src/pages/WaitlistPage.jsx` to call the backend:

```javascript
const handleJoinWaitlist = async (email) => {
  try {
    const response = await fetch(
      process.env.VITE_API_URL || 'http://localhost:3001' + '/api/waitlist',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      }
    );
    
    const data = await response.json();
    
    if (data.success) {
      alert('Successfully added to waitlist!');
      setEmail('');
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert('Failed to add to waitlist');
  }
};
```

---

## Deploying to Vercel

### Environment Variables to Add:
In Vercel project settings → Environment Variables:

| Variable | Value |
|----------|-------|
| `MONGODB_URI` | Your MongoDB Atlas connection string |
| `WAITLIST_API_KEY` | Generate with: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
| `ALLOWED_ORIGINS` | `https://yourdomain.vercel.app` |
| `NODE_ENV` | `production` |

### Deployment:
1. Push code to Git
2. Vercel auto-detects and deploys
3. API routes are handled by `/api` folder
4. Frontend is built and served from `dist/`

---

## Database Structure

### Waitlist Collection
```javascript
{
  _id: ObjectId,              // Auto-generated by MongoDB
  email: "user@example.com",  // Indexed, unique
  joinedAt: Date,             // ISO 8601 timestamp
  source: "website",          // Always "website"
}
```

---

## Best Practices

1. **Never commit `.env`** - Add to `.gitignore`
2. **Use environment variables** - Never hardcode secrets
3. **Regenerate API key** - Regularly for security
4. **Monitor connections** - Check MongoDB dashboard
5. **Backup data** - MongoDB Atlas auto-backups (paid plans)
6. **Set rate limits** - Implement in production (see `/api/utils/security.js`)

---

## Reverting to File-Based Storage

If you ever need to go back to file-based storage:
1. Keep backup of `/api/utils/database.js`
2. Use version control to revert
3. Remove MongoDB dependency: `npm uninstall mongodb`

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Port 3001 already in use | Change `PORT` in .env or kill process: `lsof -i :3001` |
| CORS errors | Check `ALLOWED_ORIGINS` matches your frontend URL |
| API key not working | Regenerate with `crypto.randomBytes` command |
| Database connection slow | Check MongoDB Atlas cluster region |
| Too many connections | Reduce connection pool size if limited |

---

## File Structure
```
project/
├── server.js                 ← Entry point
├── api/
│   ├── waitlist.js
│   ├── waitlist/get.js
│   └── utils/
│       ├── database.js       ← Now uses MongoDB
│       ├── validators.js
│       └── security.js
├── src/                      ← Frontend (React/Vite)
├── package.json              ← Updated with dependencies
├── .env                      ← Environment variables (create this)
├── .env.example              ← Reference template
└── vercel.json               ← Updated for Vercel
```

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Create MongoDB cluster
3. ✅ Create `.env` file with MONGODB_URI
4. ✅ Start backend: `npm run server:dev`
5. ✅ Start frontend: `npm run dev`
6. ✅ Test API endpoints
7. ✅ Deploy to Vercel

---

**Need help?** Check the API README at `/api/README.md` for detailed endpoint documentation.
