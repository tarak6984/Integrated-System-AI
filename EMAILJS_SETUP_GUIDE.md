# 📧 EmailJS Setup Guide for Integrated Systems AI

> **Complete step-by-step guide to configure EmailJS for the contact form**  
> Last Updated: December 2025

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Step 1: Create EmailJS Account](#step-1-create-emailjs-account)
4. [Step 2: Add Email Service](#step-2-add-email-service)
5. [Step 3: Create Email Template](#step-3-create-email-template)
6. [Step 4: Get Your Credentials](#step-4-get-your-credentials)
7. [Step 5: Configure Environment Variables](#step-5-configure-environment-variables)
8. [Step 6: Test the Integration](#step-6-test-the-integration)
9. [Troubleshooting](#troubleshooting)
10. [Email Template Example](#email-template-example)

---

## 🎯 Overview

EmailJS allows you to send emails directly from the contact form without needing a backend server. It's free for up to **200 emails/month**.

**What you'll need:**
- A Gmail account (recommended) or any email provider
- 10 minutes to complete setup
- Access to the project's `.env.local` file

---

## ✅ Prerequisites

Before starting, make sure you have:
- [ ] A Gmail account or other email provider
- [ ] Access to the project codebase
- [ ] Basic understanding of environment variables

---

## Step 1: Create EmailJS Account

### 1.1 Sign Up

1. Go to **[https://www.emailjs.com](https://www.emailjs.com)**
2. Click **"Sign Up Free"** button (top right)
3. Choose one of these options:
   - **Sign up with Google** (Recommended - fastest)
   - Sign up with email and password

![EmailJS Homepage](https://www.emailjs.com/static/img/logo.png)

### 1.2 Verify Email (if using email signup)

1. Check your inbox for verification email
2. Click the verification link
3. You'll be redirected to the EmailJS dashboard

---

## Step 2: Add Email Service

### 2.1 Navigate to Email Services

1. After logging in, you'll see the **Dashboard**
2. Click on **"Email Services"** in the left sidebar
3. Click **"Add New Service"** button

### 2.2 Choose Email Provider

Select your email provider:

#### **Option A: Gmail (Recommended)**
1. Click **"Gmail"** from the list
2. Click **"Connect Account"**
3. Sign in with your Gmail account
4. Grant EmailJS permission to send emails
5. Click **"Create Service"**

#### **Option B: Outlook/Hotmail**
1. Click **"Outlook.com"**
2. Follow the authentication process
3. Click **"Create Service"**

#### **Option C: Other Providers**
- Yahoo Mail
- Custom SMTP (for business emails)
- SendGrid, Mailgun, etc.

### 2.3 Configure Service Settings

1. **Service Name**: Enter a descriptive name (e.g., "Integrated Systems Contact Form")
2. **Service ID**: This will be auto-generated (e.g., `service_abc123`)
3. **From Name**: `Integrated Systems AI` (this appears as the sender)
4. **From Email**: Your email address (e.g., `buildwith@integrated-systems.ai`)
5. Click **"Create Service"**

> ⚠️ **Important**: Copy and save your **Service ID** - you'll need it later!

---

## Step 3: Create Email Template

### 3.1 Navigate to Email Templates

1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"** button

### 3.2 Configure Template

#### **Template Settings:**

1. **Template Name**: `Contact Form Submission`
2. **Template ID**: Auto-generated (e.g., `template_xyz789`)

#### **Subject Line:**
```
New Contact Form Submission from {{from_name}}
```

#### **Email Body (HTML):**

Copy and paste this template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background: linear-gradient(135deg, #0891b2 0%, #8b5cf6 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }
        .content {
            background: #f9fafb;
            padding: 30px;
            border: 1px solid #e5e7eb;
            border-radius: 0 0 8px 8px;
        }
        .field {
            margin-bottom: 20px;
            padding: 15px;
            background: white;
            border-left: 4px solid #0891b2;
            border-radius: 4px;
        }
        .label {
            font-weight: bold;
            color: #0891b2;
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .value {
            color: #1f2937;
            font-size: 16px;
        }
        .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e5e7eb;
            text-align: center;
            color: #6b7280;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>🚀 New Contact Form Submission</h1>
    </div>
    
    <div class="content">
        <div class="field">
            <div class="label">👤 Full Name</div>
            <div class="value">{{from_name}}</div>
        </div>
        
        <div class="field">
            <div class="label">📧 Email Address</div>
            <div class="value">{{from_email}}</div>
        </div>
        
        <div class="field">
            <div class="label">🏢 Company</div>
            <div class="value">{{company}}</div>
        </div>
        
        <div class="field">
            <div class="label">💼 Job Title</div>
            <div class="value">{{job_title}}</div>
        </div>
        
        <div class="field">
            <div class="label">📱 Phone Number</div>
            <div class="value">{{phone}}</div>
        </div>
        
        <div class="field">
            <div class="label">🏭 Industry</div>
            <div class="value">{{industry}}</div>
        </div>
        
        <div class="field">
            <div class="label">🎯 Solution Type</div>
            <div class="value">{{solution_type}}</div>
        </div>
        
        <div class="field">
            <div class="label">⏰ Timeframe</div>
            <div class="value">{{timeframe}}</div>
        </div>
        
        <div class="field">
            <div class="label">💬 Message</div>
            <div class="value">{{message}}</div>
        </div>
        
        <div class="field">
            <div class="label">📎 Attached File</div>
            <div class="value">{{file_name}}</div>
        </div>
        
        <div class="footer">
            <p><strong>Integrated Systems AI</strong></p>
            <p>This email was sent from the contact form on your website</p>
            <p>Received at: {{reply_to}}</p>
        </div>
    </div>
</body>
</html>
```

### 3.3 Configure Template Settings

1. **To Email**: Enter the email where you want to receive submissions (e.g., `buildwith@integrated-systems.ai`)
2. **From Name**: `{{from_name}}` (this will show the sender's name)
3. **Reply To**: `{{from_email}}` (allows you to reply directly to the sender)
4. Click **"Save"** button

> ⚠️ **Important**: Copy and save your **Template ID** - you'll need it later!

---

## Step 4: Get Your Credentials

### 4.1 Get Public Key

1. Click on **"Account"** in the left sidebar
2. Scroll down to **"API Keys"** section
3. You'll see your **Public Key** (e.g., `user_abc123xyz`)
4. Copy this key

### 4.2 Summary of Credentials

You should now have these three values:

| Credential | Example | Where to Find |
|------------|---------|---------------|
| **Service ID** | `service_abc123` | Email Services → Your Service |
| **Template ID** | `template_xyz789` | Email Templates → Your Template |
| **Public Key** | `user_abc123xyz` | Account → API Keys |

---

## Step 5: Configure Environment Variables

### 5.1 Locate Environment File

1. Open your project folder: `d:\FunProject\Integrated-System`
2. Look for `.env.local` file in the root directory
3. If it doesn't exist, create a new file named `.env.local`

### 5.2 Add EmailJS Credentials

Open `.env.local` and add these lines:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

> 🔄 **Replace** `service_abc123`, `template_xyz789`, and `user_abc123xyz` with your actual credentials!

### 5.3 Complete .env.local Example

Your complete `.env.local` file should look like this:

```env
# News API Key (Optional)
VITE_NEWS_API_KEY=your_news_api_key_here

# Groq API Key (Optional - for AI Chatbot)
VITE_GROQ_API_KEY=your_groq_api_key_here

# EmailJS Configuration (Required for Contact Form)
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=user_abc123xyz
```

### 5.4 Save and Restart

1. **Save** the `.env.local` file
2. **Stop** the development server (Ctrl + C in terminal)
3. **Restart** the server:
   ```bash
   npm run dev
   ```

---

## Step 6: Test the Integration

### 6.1 Open the Website

1. Navigate to: `http://localhost:5173`
2. Scroll down to the **Contact Form** section

### 6.2 Fill Out Test Form

Fill in the form with test data:

- **Full Name**: `Test User`
- **Company**: `Test Company`
- **Job Title**: `Developer`
- **Email**: Your email address
- **Phone**: `+1 555 123 4567`
- **Industry**: Select any industry
- **Solution Type**: Select any solution
- **Timeframe**: Select any timeframe
- **Message**: `This is a test message to verify EmailJS integration is working correctly.`
- **Consent**: Check the checkbox

### 6.3 Submit and Verify

1. Click **"Send Inquiry"** button
2. You should see a success message: ✅ *"Thank you! Your inquiry has been sent successfully..."*
3. Check your email inbox (the one you configured in EmailJS)
4. You should receive the formatted email within 1-2 minutes

### 6.4 Expected Email

You should receive an email that looks like this:

```
Subject: New Contact Form Submission from Test User

From: Integrated Systems AI
To: buildwith@integrated-systems.ai

[Formatted HTML email with all the form fields]
```

---

## 🔧 Troubleshooting

### Problem 1: "EmailJS not configured" message

**Solution:**
- Check that all three environment variables are set correctly
- Make sure there are no typos in the variable names
- Restart the development server after adding variables

### Problem 2: Email not received

**Possible causes:**
1. **Check Spam Folder**: EmailJS emails might go to spam initially
2. **Verify Service**: Go to EmailJS dashboard → Email Services → Check if service is active
3. **Check Template**: Verify the "To Email" field in your template
4. **API Quota**: Free plan allows 200 emails/month - check if you've exceeded

### Problem 3: "Failed to send" error

**Solution:**
- Open browser console (F12) to see detailed error
- Verify your Public Key is correct
- Check that your EmailJS account is verified
- Ensure the service is connected to your email provider

### Problem 4: Variables not showing in email

**Solution:**
- Make sure template variables match exactly: `{{from_name}}`, `{{from_email}}`, etc.
- Variables are case-sensitive
- Check for extra spaces in variable names

---

## 📊 EmailJS Free Plan Limits

| Feature | Free Plan |
|---------|-----------|
| **Emails per month** | 200 |
| **Email services** | 2 |
| **Email templates** | Unlimited |
| **File attachments** | Not supported in free plan |
| **Support** | Community forum |

> 💡 **Tip**: For production use with high volume, consider upgrading to a paid plan ($15/month for 1,000 emails)

---

## 🎨 Email Template Example

Here's what your received emails will look like:

```
┌─────────────────────────────────────────┐
│  🚀 New Contact Form Submission         │
│  (Gradient header: Cyan to Purple)      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 👤 FULL NAME                            │
│ John Doe                                │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 📧 EMAIL ADDRESS                        │
│ john@company.com                        │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ 🏢 COMPANY                              │
│ Tech Solutions Inc.                     │
└─────────────────────────────────────────┘

[... more fields ...]

┌─────────────────────────────────────────┐
│ 💬 MESSAGE                              │
│ We're interested in AI automation       │
│ solutions for our manufacturing plant.  │
└─────────────────────────────────────────┘

─────────────────────────────────────────
Integrated Systems AI
This email was sent from the contact form
```

---

## 🔐 Security Features

The contact form includes:

✅ **Rate Limiting**: Prevents spam (max 3 submissions per 10 minutes)  
✅ **Input Sanitization**: Protects against XSS attacks  
✅ **Email Validation**: Ensures valid email format  
✅ **Phone Validation**: Checks phone number format  
✅ **Honeypot Field**: Catches bots automatically  
✅ **GDPR Consent**: Privacy compliance checkbox  
✅ **Message Length**: Min 20, max 2000 characters  

---

## 📞 Support

### EmailJS Support
- **Documentation**: [https://www.emailjs.com/docs](https://www.emailjs.com/docs)
- **Community Forum**: [https://www.emailjs.com/community](https://www.emailjs.com/community)
- **Email Support**: support@emailjs.com (paid plans only)

### Project Support
- **Email**: buildwith@integrated-systems.ai
- **Response Time**: Within 24 hours

---

## ✅ Checklist

Before going live, verify:

- [ ] EmailJS account created and verified
- [ ] Email service connected (Gmail/Outlook/etc.)
- [ ] Email template created with all variables
- [ ] All three credentials copied correctly
- [ ] Environment variables added to `.env.local`
- [ ] Development server restarted
- [ ] Test email sent successfully
- [ ] Test email received in inbox
- [ ] Email formatting looks correct
- [ ] Reply-to address works correctly

---

## 🚀 Next Steps

Once EmailJS is configured:

1. **Test thoroughly** with different form inputs
2. **Check spam folder** and mark as "Not Spam"
3. **Set up email filters** to organize submissions
4. **Monitor usage** in EmailJS dashboard
5. **Consider upgrading** if you need more than 200 emails/month

---

## 📝 Notes

- EmailJS credentials are **free forever** for up to 200 emails/month
- The contact form works in **demo mode** without EmailJS (shows success message but doesn't send)
- File uploads are **noted in the email** but not actually attached (upgrade to paid plan for attachments)
- All environment variables starting with `VITE_` are exposed to the browser (this is safe for EmailJS public keys)

---

**Last Updated**: December 2025  
**Version**: 1.0  
**Contact**: buildwith@integrated-systems.ai

---

> 💡 **Pro Tip**: Create a dedicated Gmail account like `contact@integrated-systems.ai` specifically for receiving form submissions. This keeps your personal inbox clean and looks more professional!
