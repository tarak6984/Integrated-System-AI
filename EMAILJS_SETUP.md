# EmailJS Setup Guide for Contact Form

Your contact form is already integrated with EmailJS! Just follow these simple steps to activate it.

## Quick Setup (5 minutes)

### Step 1: Get EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for FREE account (200 emails/month)
3. Verify your email

### Step 2: Create Email Service
1. Go to **Email Services** section
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Connect your personal email (for testing)
5. Copy the **Service ID**

### Step 3: Create Email Template
1. Go to **Email Templates** section
2. Click **Create New Template**
3. Use this template content:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
Sent from Integrated Systems AI Website
```

4. In the template settings:
   - Template Name: `contact_form`
   - To Email: **YOUR_TEST_EMAIL@gmail.com** (your personal email)
5. Copy the **Template ID**

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### Step 5: Add to Environment Variables

Create a `.env` file in your project root:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace the values with what you copied from EmailJS.

### Step 6: Restart Dev Server
```bash
# Stop the current server (Ctrl+C)
npm run dev:all
```

## Testing

1. Fill out the contact form on your website
2. Submit the form
3. Check your test email inbox
4. You should receive the contact form submission!

## Update to Company Email Later

When ready to use company email:
1. Go to EmailJS Email Templates
2. Edit the template
3. Change **To Email** to: `buildwith@integrated-systems.ai`
4. Save - that's it!

## Current Status

✅ EmailJS package installed
✅ Contact form code integrated
✅ Fallback mode active (shows success without sending)
⏳ Needs EmailJS credentials in .env file

## Troubleshooting

**Form shows success but no email?**
- Check if .env file exists and has correct values
- Restart the dev server after adding .env
- Check EmailJS dashboard for email quota

**Getting errors?**
- Verify all three credentials are correct
- Check browser console for specific errors
- Make sure EmailJS service is connected to your email

## Security Notes

- ✅ Public Key is safe to expose (it's meant to be public)
- ✅ No sensitive credentials in frontend code
- ✅ EmailJS handles all backend security
- ✅ Free tier: 200 emails/month (perfect for testing)

---

Need help? Check: https://www.emailjs.com/docs/
