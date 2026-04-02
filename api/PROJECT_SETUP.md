# 🎉 Backend Setup Guide: COMPLETE

## ✅ Backend Architecture

### Fully Separated Backend
```
api/                          ← Complete backend isolated here
├── server.js                 (Express entry point)
├── package.json              (Backend dependencies)
├── .env.example              (Backend env template)
├── waitlist.js               (POST endpoint)
├── waitlist/get.js           (GET endpoint)
└── utils/
    ├── database.js           (MongoDB)
    ├── validators.js
    └── security.js
```

### Database
- **Type:** MongoDB
- **Driver:** Official MongoDB Node.js driver
- **Pattern:** Async/await with connection pooling
- **Collection:** `waitlist` with unique email index

---

## 🚀 Quick Start

### 1. Install Dependencies

**Frontend (from root):**
```bash
npm install
```

**Backend (from root, then navigate):**
```bash
cd api
npm install
cd ..
```

### 2. Setup MongoDB

**Option A: Cloud (Recommended)**
- Go to https://www.mongodb.com/cloud/atlas
- Create free account → create cluster → get connection string

**Option B: Local**
- Download & install from https://www.mongodb.com/try/download/community
- Connection: `mongodb://localhost:27017/nourender`

### 3. Create `.env` in `/api`

```env
MONGODB_URI=<your connection string>
PORT=3001
NODE_ENV=development
WAITLIST_API_KEY=<generate with: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))">
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3001
```

### 4. Run Everything

**Terminal 1 - Backend:**
```bash
cd api
npm run server:dev
# Output: Server running on port 3001 ✓
```

**Terminal 2 - Frontend (from root):**
```bash
npm run dev
# Output: http://localhost:5173
```

---

## ✅ Verification Checklist

- [ ] `/api/package.json` created with backend dependencies
- [ ] `/api/server.js` created as entry point
- [ ] `/api/.env.example` in place
- [ ] Root `package.json` has ONLY frontend dependencies
- [ ] Root `eslint.config.js` references `/api/**/*.js`
- [ ] No backend packages in root (express, mongodb, etc removed)
- [ ] Backend imports updated (using relative paths from `/api`)
- [ ] `.env` file created in `/api` with MongoDB connection
- [ ] Backend runs: `cd api && npm run server:dev`
- [ ] Frontend runs: `npm run dev`
- [ ] Both ports correct: 3001 (backend), 5173 (frontend)

---

## 🧪 Test the API

```bash
# Add to waitlist
curl -X POST http://localhost:3001/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Get waitlist (requires API key)
curl -X GET http://localhost:3001/api/waitlist/get \
  -H "x-api-key:your_api_key"

# Health check
curl http://localhost:3001/api/health
```

---

## 📦 Dependencies Breakdown

### Frontend (Root package.json)
- react, react-dom, react-router-dom
- vite (build tool)
- framer-motion, lucide-react (UI)
- tailwindcss, postcss, autoprefixer (styling)
- eslint, @eslint/js (linting)

### Backend (/api/package.json)
- express (web framework)
- mongodb (database driver)
- cors (cross-origin)
- body-parser (request parsing)
- dotenv (environment)
- nodemon (dev auto-reload)

---

## 🌐 Deployment

### Vercel Setup
1. Push code to GitHub
2. Connect to Vercel → auto-detects `/api` structure
3. Set environment in Vercel dashboard:
   - `MONGODB_URI`
   - `WAITLIST_API_KEY`
   - `ALLOWED_ORIGINS=https://your-domain.vercel.app`
   - `NODE_ENV=production`
4. Deploy!

Backend endpoints live at: `https://your-domain.vercel.app/api/waitlist`

---

## 📖 Documentation Files

All backend documentation is in `/api`:
- `README.md` - API reference
- `MONGODB_MIGRATION.md` - Setup & troubleshooting
- `MONGODB_COMPLETE.md` - This file

---

## 🎯 Next Steps

1. ✅ Backend completely isolated in `/api`
2. ✅ Dependencies separated
3. ✅ Entry point created
4. Next → Install dependencies and setup MongoDB
5. Then → Test locally
6. Finally → Deploy to Vercel
