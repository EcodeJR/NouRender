# Quick Start Guide - NouRender Features

## 📋 What's Been Done

### ✅ Backend Waitlist API (Production Ready)
Located in `/api/` folder at your project root

**Endpoints:**
- `POST /api/waitlist` - Add email (public)
- `GET /api/waitlist/get` - Retrieve all entries (requires API key)

**Data Storage:** `/data/waitlist.json` (auto-created)

---

## 🎯 What You Need to Do Now

### Step 1: Add Survey Form Link (5 minutes)
**File:** `/src/pages/SurveyPage.jsx` - Line 6

Find:
```javascript
const SURVEY_FORM_URL = 'https://forms.example.com/survey';
```

Replace with your actual survey link (Google Forms, Typeform, Jotform, etc.)

---

### Step 2: Connect Waitlist Form (15 minutes)
**File:** `/src/pages/WaitlistPage.jsx`

Add this function to handle API calls:
```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    
    const data = await response.json();
    
    if (data.success) {
      alert('Great! You\'ve been added to our waitlist!');
      setEmail('');
    } else {
      alert(data.message); // Shows error like "Email already exists"
    }
  } catch (error) {
    alert('Failed to add to waitlist. Please try again.');
  }
};
```

Then update the button:
```javascript
<button onClick={handleSubmit} className="...">
  Join Waitlist
</button>
```

---

### Step 3: Test Locally (10 minutes)

Terminal window:
```bash
npm run dev
```

Visit in browser:
1. `http://localhost:5173/survey` - See survey page
2. `http://localhost:5173` - See survey section on home
3. Try adding email on waitlist page (will save to `/data/waitlist.json`)

---

### Step 4: Deploy to Vercel (10 minutes)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add waitlist API and survey features"
   git push
   ```

2. **Set Environment Variables in Vercel:**
   - Go to: Vercel Dashboard → Your Project → Settings → Environment Variables
   - Add these two:
     | Variable | Value |
     |----------|-------|
     | `WAITLIST_API_KEY` | Generate: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"` |
     | `ALLOWED_ORIGINS` | `https://yourdomain.vercel.app` |

3. **Vercel auto-deploys.**
   - Your backend API will be live at: `https://yourdomain.vercel.app/api/waitlist`

---

## 📍 File Locations Reference

```
Important Files:
├── /api/                         ← Backend API
│   ├── waitlist.js              ← PostEndpoint
│   ├── waitlist/get.js          ← GET Endpoint
│   ├── utils/                   ← Shared utilities
│   └── README.md                ← Full documentation
│
├── /src/pages/
│   ├── SurveyPage.jsx          ← Survey page (UPDATE WITH your link)
│   ├── Home.jsx                 ← Has survey CTA section
│   └── WaitlistPage.jsx         ← UPDATE to call API
│
├── /src/App.jsx                 ← /survey route already added
├── /vercel.json                 ← API configuration done
| 
├── FEATURE_SETUP.md            ← Full implementation guide
└── /data/waitlist.json          ← Auto-created on first use
```

---

## 🧪 Test Requests

### Add to Waitlist (Test with cURL)
```bash
curl -X POST http://localhost:5173/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

**Expected Response:**
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

### Get Waitlist (Test with API Key)
```bash
curl -X GET http://localhost:5173/api/waitlist/get \
  -H "x-api-key:your_api_key_here"
```

---

## 🔄 Current Flow

```
User Journey:
1. User visits homepage
   ↓
2. See survey section → Click "Take Survey Now"
   ↓
3. Taken to /survey page
   ↓
4. Click "Take Survey Now" button → External form opens
   ↓
5. Back on home, user can Join Waitlist
   ↓
6. Email sent to /api/waitlist → Saved to database
   ↓
7. Success confirmation
```

---

## ⚠️ Important Notes

### Data Storage
- **Currently:** File-based (`/data/waitlist.json`)
- **On Vercel:** Ephemeral (resets on redeploy) - migrate to cloud DB for production
- **To Migrate:** See `/api/README.md` for database migration guide

### Security
- The GET endpoint (`/api/waitlist/get`) requires API key authentication
- Always keep `WAITLIST_API_KEY` secure
- Do not commit `WAITLIST_API_KEY` to Git

### Environment Variables
- Local testing: Works without WAITLIST_API_KEY
- Production (Vercel): Must set WAITLIST_API_KEY

---

## 🚀 Next Steps (Future)

After getting these features live:
1. Set up email notifications
2. Create admin dashboard to view waitlist
3. Add survey submission endpoint
4. Implement proper database (PostgreSQL, MongoDB, etc.)
5. Add analytics

---

## 📚 Detailed Docs

- **Full API Docs:** See `/api/README.md`
- **Setup Guide:** See `/FEATURE_SETUP.md`
- **Code Comments:** Each file has inline documentation

---

## ❓ Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| API returns 500 | Check `/api/utils/` files exist & `WAITLIST_API_KEY` is set |
| Survey button doesn't work | Add survey link in SurveyPage.jsx line 6 |
| Data lost after Vercel deploy | Expected with file storage - migrate to cloud DB |
| Email validation failing | Check email format and length (<255 chars) |

---

**Ready?** Start with Step 1 above! ⬆️
