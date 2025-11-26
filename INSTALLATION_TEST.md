# 🧪 Installation & Testing Guide

## Quick Verification Checklist

Use this guide to verify everything works correctly.

---

## ✅ Step 1: Install Dependencies

```bash
npm install
```

**Expected Output:**
```
added 300+ packages in 2-3 minutes
```

**✅ Success Indicators:**
- No error messages
- `node_modules` folder created
- `package-lock.json` file created

**❌ Troubleshooting:**
- If error: Ensure Node.js 18+ is installed
- Try: `npm cache clean --force` then retry
- Or use: `npm install --legacy-peer-deps`

---

## ✅ Step 2: Start Development Server

```bash
npm run dev
```

**Expected Output:**
```
VITE v5.2.0  ready in 500 ms

➜  Local:   http://localhost:3000/
➜  Network: use --host to expose
➜  press h + enter to show help
```

**✅ Success Indicators:**
- Server starts without errors
- Browser opens automatically
- Website loads at http://localhost:3000

**❌ Troubleshooting:**
- Port 3000 busy? Server will use 3001, 3002, etc.
- Browser doesn't open? Manually go to the URL shown
- If error, check console for details

---

## ✅ Step 3: Visual Verification

### Homepage Should Show:

#### 1. Hero Section ✅
- [ ] Large heading "Integrating Industries with the Power of AI"
- [ ] Blue gradient text effect on "Power of AI"
- [ ] Two buttons: "Get Started" and "Explore Services"
- [ ] Three statistics cards
- [ ] Animated floating elements
- [ ] Smooth animations on load

#### 2. Navigation Header ✅
- [ ] Logo "Integrated Systems AI" in top-left
- [ ] Navigation menu: Home, Services, Vision, Why Us, Contact
- [ ] "Get Started" button in header
- [ ] Mobile: Hamburger menu appears on small screens
- [ ] Header becomes solid white when scrolling

#### 3. Vision & Mission Section ✅
- [ ] Two large cards side by side
- [ ] Icons with gradient backgrounds
- [ ] "Our Vision" and "Our Mission" titles
- [ ] Text content from provided documents
- [ ] Hover effects on cards

#### 4. Services Section ✅
- [ ] Four service cards in 2x2 grid
- [ ] AI Research & Development Lab
- [ ] Integrated AI Solutions
- [ ] Branded Ventures
- [ ] Shadow Ventures
- [ ] Feature tags at bottom of each card
- [ ] Different colored icons

#### 5. Core Values Section ✅
- [ ] Four value cards in a grid
- [ ] Icons for each value
- [ ] Industry tags: Logistics, Manufacturing, etc.
- [ ] Border animation on hover

#### 6. Global Vision Section ✅
- [ ] Four region cards with flag emojis
- [ ] Bangladesh, Southeast Asia, Middle East, Africa
- [ ] Long-term objectives listed
- [ ] Large quote card at bottom

#### 7. Why Choose Us Section ✅
- [ ] Five differentiator cards
- [ ] Icons with gradient backgrounds
- [ ] Gradient CTA card at bottom
- [ ] Hover effects

#### 8. Contact Section ✅
- [ ] Large gradient background card
- [ ] Email: buildwith@integratedsystems.ai
- [ ] Clickable email link
- [ ] Three statistics below
- [ ] "Partner with Us" title

#### 9. Footer ✅
- [ ] Company logo and description
- [ ] Three columns of links
- [ ] Social media icons
- [ ] Email and location info
- [ ] Copyright notice
- [ ] Dark background

---

## ✅ Step 4: Interaction Testing

### Navigation Tests
```
1. Click "Services" in menu
   ✅ Should scroll smoothly to Services section

2. Click "Vision" in menu
   ✅ Should scroll to Vision & Mission

3. Click "Contact" in menu
   ✅ Should scroll to Contact section

4. Click logo
   ✅ Should scroll to top

5. Click "Get Started" button
   ✅ Should scroll to Contact section
```

### Mobile Menu Test (Resize browser < 768px)
```
1. Hamburger icon appears
   ✅ Three horizontal lines visible

2. Click hamburger
   ✅ Menu slides down

3. Click menu item
   ✅ Menu closes, page scrolls

4. Click X icon
   ✅ Menu closes
```

### Hover Effects Test
```
1. Hover over any card
   ✅ Card lifts up, shadow increases

2. Hover over buttons
   ✅ Button scales slightly larger

3. Hover over service cards
   ✅ Border color changes, shadow increases

4. Scroll page
   ✅ Header background changes to solid white
```

### Animation Test
```
1. Reload page
   ✅ Hero elements fade in smoothly

2. Scroll down slowly
   ✅ Sections animate into view

3. Observe floating elements
   ✅ Icons move up and down
```

### Link Test
```
1. Click email link in Contact section
   ✅ Opens email client with correct address

2. Click email in footer
   ✅ Opens email client

3. Check social icons (optional)
   ✅ Links present (placeholder #)
```

---

## ✅ Step 5: Responsive Testing

### Desktop (> 1024px)
```
✅ Full navigation bar visible
✅ Multi-column grids
✅ Hover effects work
✅ Proper spacing
```

### Tablet (768px - 1024px)
```
✅ 2-column grids
✅ Reduced padding
✅ Navigation still visible
✅ Readable text sizes
```

### Mobile (< 768px)
```
✅ Single column layout
✅ Hamburger menu
✅ Stacked buttons
✅ Larger touch targets
✅ All content accessible
```

**How to Test:**
- Open Chrome DevTools (F12)
- Click device toolbar icon
- Select different devices
- Or manually resize browser

---

## ✅ Step 6: Performance Check

### Browser Console (F12)
```
1. Open Console tab
   ✅ No red errors

2. Check Network tab
   ✅ All resources load (green status)

3. Check Performance
   ✅ Page loads in < 2 seconds
```

### Lighthouse Audit (Optional)
```
1. Open Chrome DevTools
2. Go to Lighthouse tab
3. Click "Generate report"

Expected Scores:
✅ Performance:   90+
✅ Accessibility: 95+
✅ Best Practices: 95+
✅ SEO:          95+
```

---

## ✅ Step 7: Build Test

```bash
npm run build
```

**Expected Output:**
```
vite v5.2.0 building for production...
✓ 100+ modules transformed.
dist/index.html                   1.2 kB
dist/assets/index-[hash].css     12.3 kB
dist/assets/index-[hash].js     180.5 kB

✓ built in 3.5s
```

**✅ Success Indicators:**
- `dist` folder created
- No errors
- Build completes in < 10 seconds

### Preview Production Build
```bash
npm run preview
```

**Expected:**
- Server starts at http://localhost:4173
- Website works identically to dev mode
- All features functional

---

## ✅ Step 8: Code Quality Check

```bash
npm run lint
```

**Expected Output:**
```
No linting errors found
```

**✅ Success Indicators:**
- No errors
- Maybe some warnings (acceptable)

---

## 📊 Success Criteria Summary

| Test | Status |
|------|--------|
| Dependencies Install | ✅ |
| Dev Server Starts | ✅ |
| Website Loads | ✅ |
| All Sections Visible | ✅ |
| Navigation Works | ✅ |
| Smooth Scrolling | ✅ |
| Animations Smooth | ✅ |
| Mobile Responsive | ✅ |
| No Console Errors | ✅ |
| Production Build | ✅ |
| Hover Effects | ✅ |
| Links Work | ✅ |

---

## 🐛 Common Issues & Solutions

### Issue 1: Dependencies won't install
**Solution:**
```bash
# Clear cache
npm cache clean --force

# Delete old files
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Issue 2: Port 3000 already in use
**Solution:**
- Server will auto-select next available port
- Or manually set port in vite.config.js

### Issue 3: Page is blank
**Solution:**
- Check browser console (F12)
- Look for JavaScript errors
- Ensure all imports are correct
- Try: `npm run build && npm run preview`

### Issue 4: Styles not applying
**Solution:**
- Ensure TailwindCSS is building correctly
- Check index.css imports
- Clear browser cache (Ctrl + Shift + R)

### Issue 5: Animations not working
**Solution:**
- Check if Framer Motion installed
- Verify no console errors
- Try different browser

---

## 🎯 Quick Test Script

Run this sequence for a complete test:

```bash
# Full test sequence
npm install           # Install dependencies
npm run dev          # Start dev server (test in browser)
# (Ctrl + C to stop)
npm run build        # Build for production
npm run preview      # Preview production build
# (Ctrl + C to stop)
npm run lint         # Check code quality
```

**Time Required:** 5-10 minutes total

---

## ✅ Final Verification

Before submitting, confirm:

- [ ] `npm install` completes successfully
- [ ] `npm run dev` starts without errors
- [ ] Website loads at http://localhost:3000
- [ ] All 7 sections are visible and styled correctly
- [ ] Navigation menu works (smooth scrolling)
- [ ] Mobile menu works (hamburger icon)
- [ ] Email link works (buildwith@integratedsystems.ai)
- [ ] Hover effects work on cards and buttons
- [ ] Animations are smooth (no jank)
- [ ] Responsive on mobile (resize browser)
- [ ] No console errors (F12)
- [ ] `npm run build` completes successfully
- [ ] Footer shows correct information
- [ ] All content from documents is present

---

## 🎉 Success!

If all checks pass, the website is:
✅ **Fully functional**
✅ **Production ready**
✅ **Ready for deployment**
✅ **Ready for submission**

---

## 📧 Support

If you encounter any issues:
**Email:** buildwith@integratedsystems.ai

---

**Integrated Systems AI Ltd**  
*Integrating industries with the power of AI*
