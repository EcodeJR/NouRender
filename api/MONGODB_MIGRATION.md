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

3. **`server.js`** - Created as the main entry point in `/api`:
   - Express server setup
   - MongoDB connection on startup
   - All API route handling
   - Graceful shutdown

4. **`package.json`** in `/api` - Backend dependencies:
   - `express` - Web framework
   - `mongodb` - MongoDB driver
   - `cors` - Cross-origin handling
   - `body-parser` - Request parsing
   - `dotenv` - Environment variables
   - `nodemon` - Auto-reload during development

---

## Setup Instructions

### 1. Install Backend Dependencies
Navigate to the `/api` folder:
```bash
cd api
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
Create a `.env` file in `/api` folder (copy from `.env.example`):

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nourender?retryWrites=true&w=majority
PORT=3001
NODE_ENV=development
WAITLIST_API_KEY=your_secure_key_here_use_crypto.randomBytes(32).toString('hex')
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001
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

**Terminal 1 - Backend (Express, from `/api` folder):**
```bash
cd api
npm run server:dev
```
Backend will run at: `http://localhost:3001`

**Terminal 2 - Frontend (Vite, from root folder):**
```bash
npm run dev
```
Frontend will run at: `http://localhost:5173`

### Production Mode

**From `/api` folder:**
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

## Troubleshooting

### Error: "Cannot find module 'express'"
**Solution:** Run `npm install` in the `/api` folder

### Error: "MONGODB_URI not provided"
**Solution:** Create `.env` file in `/api` folder with MongoDB connection string

### Error: "connect ECONNREFUSED 127.0.0.1:27017"
**Solution:** Make sure MongoDB is running (Atlas or local) and connection string is correct

### Error: "Duplicate key error"
**Solution:** This is normal - means email already exists in database. Try with different email.
