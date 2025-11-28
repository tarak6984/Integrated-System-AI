# 🚂 Railway Full Stack Deployment Guide

## ✅ Configuration Complete!

Your application is now configured for **full-stack deployment** on Railway. Both frontend and backend will be served from a single deployment.

---

## 🔧 What Was Updated:

### 1. **package.json**
- ✅ Added `start` script: `npm run build && node server/index.js`
- This builds the frontend and starts the backend

### 2. **railway.json**
- ✅ Updated startCommand to use `npm run start`
- Railway will now build frontend before starting backend

### 3. **server/index.js**
- ✅ Added static file serving for production
- ✅ Backend serves built React files from `/dist` folder
- ✅ All `/api/*` routes go to Express API
- ✅ All other routes serve `index.html` (React Router)

---

## 📝 Railway Environment Variables

**In your Railway dashboard, update these variables:**

```env
NODE_ENV=production

# Your Railway app URL (the one shown in your dashboard)
CLIENT_URL=https://web-production-f9a5.up.railway.app

# Generate a strong secret (use a password generator)
JWT_SECRET=your_super_secret_jwt_key_change_this_to_something_secure

# Database path (keep as is)
DB_PATH=./server/database.sqlite

# API URL - should point to YOUR Railway URL
VITE_API_URL=https://web-production-f9a5.up.railway.app/api

# Optional: Add your API keys
VITE_NEWS_API_KEY=your_news_api_key_here
VITE_OPENAI_API_KEY=your_openai_api_key_here
```

**Important:** Replace `web-production-f9a5.up.railway.app` with YOUR actual Railway URL!

---

## 🚀 How to Deploy:

### **Method 1: Git Push (Automatic)**

If your Railway project is connected to GitHub:

```bash
git add .
git commit -m "Configure full-stack Railway deployment"
git push origin main
```

Railway will automatically detect the push and deploy! 🎉

---

### **Method 2: Railway CLI**

```bash
# Login to Railway
npx @railway/cli login

# Link to your project (if not already linked)
npx @railway/cli link

# Deploy
npx @railway/cli up
```

---

### **Method 3: Manual Trigger**

1. Go to your Railway dashboard
2. Click on your "web" project
3. Click "Deployments" tab
4. Click "Deploy" button

---

## 🔍 Deployment Process:

When you deploy, Railway will:

1. ✅ Install dependencies (`npm install`)
2. ✅ Build frontend (`npm run build` - creates `/dist` folder)
3. ✅ Start Express server (`node server/index.js`)
4. ✅ Express serves:
   - API routes at `/api/*`
   - React app for all other routes

---

## 🌐 After Deployment:

Your app will be available at:
```
https://your-app.up.railway.app
```

**What you can access:**
- Frontend: `https://your-app.up.railway.app`
- API: `https://your-app.up.railway.app/api`
- Health Check: `https://your-app.up.railway.app/api/health`

---

## ✅ Testing After Deployment:

1. **Visit your Railway URL**
   - You should see your React app

2. **Test API Health Check**
   ```
   https://your-app.up.railway.app/api/health
   ```
   Should return: `{"status":"OK","message":"Server is running"}`

3. **Test Authentication**
   - Try signing up
   - Try logging in

---

## 🐛 Troubleshooting:

### **Check Logs:**
In Railway dashboard → Deployments → Click on latest deployment → View logs

### **Common Issues:**

**Issue: Build fails**
- Check Railway logs for errors
- Ensure all dependencies are in `dependencies` (not `devDependencies`)

**Issue: API calls fail**
- Verify `VITE_API_URL` is set correctly in Railway
- Check CORS settings in `server/index.js`

**Issue: 404 on page refresh**
- This should be fixed by the static file serving config
- Verify `NODE_ENV=production` is set in Railway

**Issue: Database not persisting**
- Railway provides persistent storage by default
- Check `DB_PATH` is set correctly

---

## 🎉 Success Checklist:

- [ ] Environment variables updated in Railway dashboard
- [ ] `NODE_ENV` set to `production`
- [ ] `CLIENT_URL` set to your Railway URL
- [ ] Strong `JWT_SECRET` generated
- [ ] Code pushed to Git / deployed via CLI
- [ ] Deployment succeeded in Railway dashboard
- [ ] Frontend loads at Railway URL
- [ ] API health check responds correctly
- [ ] Can sign up / log in successfully

---

## 📞 Next Steps:

Once deployed, you can:
- Add custom domain in Railway settings
- Set up automatic deployments from GitHub
- Monitor usage and logs in Railway dashboard
- Add more API keys (News, OpenAI) for full features

---

**Built with ❤️ - Ready for Production! 🚀**
