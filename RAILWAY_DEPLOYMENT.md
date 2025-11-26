# 🚂 Railway Backend Deployment Guide

## Step-by-Step: Deploy Backend to Railway (5 Minutes)

---

## 📋 **Prerequisites**
- ✅ GitHub account with your repository
- ✅ Code already pushed to GitHub

---

## 🚀 **Deployment Steps**

### **Step 1: Go to Railway**
1. Open: **https://railway.app**
2. Click **"Login"** or **"Start a New Project"**
3. **Sign in with GitHub** (authorize Railway to access your repos)

---

### **Step 2: Create New Project**
1. Click **"New Project"**
2. Select **"Deploy from GitHub repo"**
3. Click **"Configure GitHub App"** (if needed)
4. Select **"Integrated-System-AI"** repository
5. Click **"Deploy Now"**

Railway will automatically:
- ✅ Detect Node.js
- ✅ Install dependencies
- ✅ Start the server

---

### **Step 3: Generate Domain**
1. Wait for deployment to complete (~2 minutes)
2. Click on your service/project
3. Go to **"Settings"** tab
4. Scroll to **"Networking"** section
5. Click **"Generate Domain"**
6. Copy the domain (e.g., `your-app.railway.app`)

---

### **Step 4: Add Environment Variables**
1. Click on **"Variables"** tab
2. Add these variables by clicking **"New Variable"**:

```
NODE_ENV = production
JWT_SECRET = your_super_strong_random_secret_key_here_change_this
PORT = ${{RAILWAY_PORT}}
DB_PATH = /app/server/database.sqlite
CLIENT_URL = https://your-vercel-app.vercel.app
```

**Important Notes:**
- Replace `JWT_SECRET` with a strong random string (at least 32 characters)
- Replace `CLIENT_URL` with your actual Vercel frontend URL
- `PORT` uses Railway's automatic port variable
- `DB_PATH` points to persistent storage location

---

### **Step 5: Redeploy (if needed)**
1. After adding environment variables
2. Click **"Deploy"** → **"Redeploy"**
3. Wait for deployment to complete

---

### **Step 6: Test Your Backend**
1. Copy your Railway URL (e.g., `https://your-app.railway.app`)
2. Test the health endpoint:
   - Open: `https://your-app.railway.app/api/health`
   - You should see: `{"status":"OK","message":"Server is running"}`

✅ **If you see this, your backend is live!**

---

## 🔗 **Step 7: Connect Frontend to Backend**

### Update Vercel Environment Variables:

1. Go to **Vercel Dashboard**
2. Select your **"Integrated-System-AI"** project
3. Go to **"Settings"** → **"Environment Variables"**
4. Add new variable:
   - **Name**: `VITE_API_URL`
   - **Value**: `https://your-app.railway.app/api`
   - (Replace with your actual Railway URL)
5. Click **"Save"**

### Redeploy Frontend:
1. Go to **"Deployments"** tab
2. Click **"..."** on latest deployment
3. Click **"Redeploy"**
4. Wait ~2 minutes

---

## ✅ **Verification Checklist**

Test everything works:

- [ ] Railway backend health check responds
- [ ] Vercel frontend loads
- [ ] Click "Sign Up" on frontend
- [ ] Create a test account
- [ ] Should redirect to dashboard after signup
- [ ] Click "Logout"
- [ ] Click "Login" and login again
- [ ] Session persists on page refresh

---

## 🎯 **Your URLs After Deployment**

```
Frontend (Vercel):  https://your-app.vercel.app
Backend (Railway):  https://your-app.railway.app
API Endpoint:       https://your-app.railway.app/api
```

---

## 🔒 **Generate Strong JWT Secret**

Use one of these methods:

**Method 1 - Online Generator:**
- Go to: https://randomkeygen.com/
- Copy a "CodeIgniter Encryption Key" (256-bit)

**Method 2 - Node.js:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

**Method 3 - PowerShell:**
```powershell
[Convert]::ToBase64String((1..64 | ForEach-Object { Get-Random -Maximum 256 }))
```

---

## 🐛 **Troubleshooting**

### Backend Not Starting:
- Check Railway logs: Click "Deployments" → "View Logs"
- Verify all environment variables are set
- Ensure `NODE_ENV=production`

### Database Errors:
- Railway uses ephemeral storage, database resets on redeploy
- For production, consider upgrading to PostgreSQL
- Or add Railway Volume for persistence

### CORS Errors:
- Verify `CLIENT_URL` matches your Vercel URL exactly
- Include `https://` in the URL
- No trailing slash

### Authentication Not Working:
- Check browser console for errors
- Verify `VITE_API_URL` in Vercel is correct
- Test backend API directly: `/api/health`

---

## 💡 **Pro Tips**

1. **Monitor Your App**: Railway provides logs and metrics
2. **Database**: SQLite works but consider PostgreSQL for production
3. **Scaling**: Railway auto-scales based on traffic
4. **Custom Domain**: Add your own domain in Railway settings
5. **Environment Variables**: Never commit `.env` to GitHub

---

## 📊 **Cost**

- **Railway Free Tier**: $5 credit per month
- **Your backend**: Uses ~$1-2/month
- **Enough for**: Development and moderate traffic

---

## 🎉 **Success!**

Once both are deployed:
- ✅ Frontend on Vercel (static, fast CDN)
- ✅ Backend on Railway (Node.js, database)
- ✅ Full authentication working
- ✅ Production-ready application

---

## 📞 **Need Help?**

If you get stuck:
1. Check Railway deployment logs
2. Check Vercel deployment logs
3. Test backend API endpoints directly
4. Verify environment variables

---

## 🔄 **Quick Command Reference**

```bash
# Test backend locally
npm run dev:server

# Test frontend locally
npm run dev

# Test both locally
npm run dev:all

# Build for production
npm run build
```

---

**Next Steps**: Follow the steps above and let me know when you've deployed to Railway!
