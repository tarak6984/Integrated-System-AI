# 📧 EmailJS Setup Guide for Contact Form

## Overview
Your contact form is now integrated with EmailJS, which allows it to send real emails directly from the frontend without requiring a backend email server.

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's FREE - 200 emails/month)
3. Sign up with Google or email

### Step 2: Add Email Service
1. After login, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for personal/small business)
   - **Outlook**
   - **Yahoo**
   - Or any other provider
4. Click **"Connect Account"** and authorize EmailJS
5. **Copy the Service ID** (you'll need this later)

### Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from the Integrated Systems AI contact form.
Reply directly to: {{from_email}}
```

4. **Save the template**
5. **Copy the Template ID** (you'll need this later)

### Step 4: Get Your Public Key
1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **"Public Key"**
3. **Copy the Public Key** (it looks like: `user_xxxxxxxxxxxxx`)

### Step 5: Configure Environment Variables
1. Open your `.env.local` file in the project root
2. Add these three lines (replace with YOUR actual values):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Example:**
```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_xxxxxxxxxxxx
```

### Step 6: Restart Your Development Server
```bash
# Stop the current server (Ctrl+C)
# Then restart it:
npm run dev:all
```

---

## ✅ Testing

1. Go to http://localhost:5173
2. Scroll to the **Contact** section
3. Fill out the form:
   - Name: Test User
   - Email: your-email@example.com
   - Company: Test Company (optional)
   - Message: This is a test message
4. Click **"Send Message"**
5. You should see a success message
6. Check your email inbox - you should receive the message!

---

## 🔧 Troubleshooting

### Problem: "Demo mode - EmailJS not configured"
**Solution:** You haven't added the environment variables yet. Follow Step 5 above.

### Problem: Error sending message
**Possible causes:**
1. **Wrong credentials** - Double-check Service ID, Template ID, and Public Key
2. **Email service not connected** - Go to EmailJS dashboard and reconnect your email
3. **Template variables don't match** - Make sure your template uses the correct variable names: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{message}}`

### Problem: Not receiving emails
**Check:**
1. Your spam/junk folder
2. EmailJS dashboard to see if email was sent successfully
3. Email service connection status in EmailJS dashboard

---

## 📊 Current Status

### Without Configuration (Demo Mode)
- ❌ Emails are NOT sent
- ✅ Form validates and shows success message
- ✅ Form clears after submission
- ⚠️ Shows "(Demo mode)" in success message

### With Configuration (Live Mode)
- ✅ Real emails are sent to your inbox
- ✅ Form validates and shows success message
- ✅ Form clears after submission
- ✅ Professional email notifications
- ✅ Auto-reply capability (optional)

---

## 🎯 Benefits of EmailJS

✅ **Free tier:** 200 emails/month
✅ **No backend required:** Works entirely from frontend
✅ **Multiple email services:** Gmail, Outlook, Yahoo, etc.
✅ **Template system:** Customize email format
✅ **Auto-reply feature:** Send confirmation to users
✅ **Email tracking:** See delivery status in dashboard
✅ **Spam protection:** Built-in reCAPTCHA support

---

## 🔐 Security Notes

- Your Public Key is safe to expose in frontend code
- Service ID and Template ID are also public-safe
- EmailJS handles authentication securely
- No sensitive credentials in your code
- Rate limiting prevents abuse

---

## 🚀 Optional Enhancements

### Add Auto-Reply to Users
Create a second template that sends a confirmation email to the user who submitted the form:

```javascript
// After successful send, send auto-reply
await emailjs.send(
  serviceId,
  'template_auto_reply', // Create this template in EmailJS
  {
    to_email: formData.email,
    to_name: formData.name,
  },
  publicKey
);
```

### Add reCAPTCHA Protection
Prevent spam submissions by adding Google reCAPTCHA:
1. Enable in EmailJS dashboard
2. Add reCAPTCHA widget to form
3. Validate before sending

---

## 📞 Support

- **EmailJS Documentation:** https://www.emailjs.com/docs/
- **EmailJS Dashboard:** https://dashboard.emailjs.com/
- **Community Support:** https://www.emailjs.com/community/

---

## ✨ What's Changed in Your Code

### `EnhancedContactForm.jsx`
- ✅ Added EmailJS integration
- ✅ Reads configuration from `.env.local`
- ✅ Graceful fallback if not configured
- ✅ Better error handling
- ✅ Professional email templates

### `.env.local` (needs your values)
```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

---

## 🎉 Once Configured

Your contact form will:
1. ✅ Send real emails to buildwith@integratedsystems.ai
2. ✅ Include all form data (name, email, company, message)
3. ✅ Show professional success/error messages
4. ✅ Clear form after successful submission
5. ✅ Handle errors gracefully

---

**Ready to go? Follow the steps above and your contact form will be fully functional!** 🚀

*Estimated setup time: 5-10 minutes*
