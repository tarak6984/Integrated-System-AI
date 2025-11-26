# Deployment Guide - Integrated Systems AI Website

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Automatic deployments from Git
- Built-in CI/CD
- Global CDN
- Free SSL certificates
- Zero configuration needed

**Steps:**
1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite and deploys
6. Done! Get your live URL

**Build Settings (Auto-detected):**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

---

### Option 2: Netlify

**Why Netlify?**
- Drag-and-drop deployment
- Continuous deployment
- Form handling
- Free SSL

**Steps:**

**Method A: Drag & Drop**
1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag `dist` folder to deploy zone
4. Done!

**Method B: Git Integration**
1. Push to GitHub
2. Connect repository on Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

---

### Option 3: GitHub Pages

**Steps:**
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/integrated-systems-ai",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/integrated-systems-ai/',
     // ... rest of config
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

---

### Option 4: Traditional Web Hosting

**For cPanel, shared hosting, or VPS:**

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder contents** to your web server:
   - Via FTP/SFTP
   - Via cPanel File Manager
   - Via SSH/SCP

3. **Configure web server:**

   **Apache (.htaccess):**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   **Nginx:**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

---

### Option 5: AWS S3 + CloudFront

**For enterprise-grade hosting:**

1. **Build:**
   ```bash
   npm run build
   ```

2. **Create S3 bucket:**
   - Enable static website hosting
   - Upload `dist` contents

3. **Setup CloudFront:**
   - Create distribution
   - Point to S3 bucket
   - Configure SSL certificate

4. **Deploy with AWS CLI:**
   ```bash
   aws s3 sync dist/ s3://your-bucket-name
   ```

---

### Option 6: Docker Deployment

**Dockerfile:**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Deploy:**
```bash
docker build -t integrated-systems-ai .
docker run -p 80:80 integrated-systems-ai
```

---

## 🔧 Pre-Deployment Checklist

### 1. Environment Variables
- [ ] Update API endpoints (if any)
- [ ] Set production URLs
- [ ] Configure analytics

### 2. Optimization
- [ ] Run `npm run build`
- [ ] Check bundle size
- [ ] Test production build locally: `npm run preview`

### 3. Testing
- [ ] Test on mobile devices
- [ ] Check all navigation links
- [ ] Verify email links work
- [ ] Test smooth scrolling
- [ ] Check responsive design

### 4. SEO & Meta
- [ ] Update meta tags in `index.html`
- [ ] Add favicon
- [ ] Configure Open Graph tags
- [ ] Add robots.txt (if needed)
- [ ] Submit sitemap to search engines

### 5. Performance
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize images (if added)
- [ ] Enable compression

---

## 📊 Performance Targets

After deployment, aim for:

**Lighthouse Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

---

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Domain Settings
2. Add custom domain
3. Configure DNS or use Netlify DNS

### General DNS Configuration
```
Type: CNAME
Name: www
Value: your-deployment-url.com

Type: A (or ALIAS)
Name: @
Value: deployment-ip-address
```

---

## 🔒 SSL/HTTPS

All recommended platforms provide **free SSL certificates**:
- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Automatic
- AWS: Use ACM (AWS Certificate Manager)

---

## 🚦 Monitoring After Deployment

### 1. Setup Analytics
- Google Analytics
- Vercel Analytics
- Plausible (privacy-friendly)

### 2. Monitor Performance
- Lighthouse CI
- WebPageTest
- GTmetrix

### 3. Error Tracking
- Sentry
- LogRocket
- Rollbar

---

## 📱 Testing After Deployment

### Browser Testing
- [ ] Chrome (Windows/Mac)
- [ ] Firefox
- [ ] Safari (Mac/iOS)
- [ ] Edge

### Device Testing
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad
- [ ] Desktop (various sizes)

### Functionality Testing
- [ ] Navigation menu
- [ ] Smooth scrolling
- [ ] Mobile menu toggle
- [ ] All buttons and links
- [ ] Email link
- [ ] Animations

---

## 🆘 Troubleshooting

### Issue: Blank page after deployment
**Solution:** Check browser console for errors. Usually a routing issue.
```javascript
// In vite.config.js, add:
base: './'  // For relative paths
```

### Issue: 404 on refresh
**Solution:** Configure server for SPA (see hosting-specific configs above)

### Issue: Styles not loading
**Solution:** Check build output, ensure CSS is bundled correctly

### Issue: Slow initial load
**Solution:** 
- Enable gzip/brotli compression
- Use CDN
- Optimize bundle size

---

## 📈 Post-Deployment Optimization

1. **Enable CDN** - Most platforms include this
2. **Configure caching headers**
3. **Enable compression** (gzip/brotli)
4. **Add service worker** (optional, for PWA)
5. **Lazy load images** (if you add more)
6. **Code splitting** (already configured with Vite)

---

## ✅ Recommended: Vercel Deployment

For this project, **Vercel is the best choice** because:
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Global CDN
- ✅ Perfect for Vite/React
- ✅ Free tier is generous
- ✅ Continuous deployment
- ✅ Preview deployments for PRs
- ✅ Easy custom domain setup

---

## 🎉 You're Ready to Deploy!

Choose your platform and follow the steps above. The website is production-ready and optimized for deployment.

**Need help?** Contact: buildwith@integratedsystems.ai

---

**Integrated Systems AI Ltd**  
*Integrating industries with the power of AI*
