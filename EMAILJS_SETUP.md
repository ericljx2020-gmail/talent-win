# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails directly from your contact form without a backend.

## Step 1: Create EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" (it's free for up to 200 emails/month)
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template with these variables:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This email was sent from the TalentWin contact form.
```

4. **Copy the Template ID** (you'll need this later)
5. Click **Save**

## Step 4: Get Your Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** in the API Keys section
3. **Copy the Public Key**

## Step 5: Update Contact.jsx

Open `src/components/Contact.jsx` and replace these lines (around line 31-33):

```javascript
const SERVICE_ID = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID
const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

Also update line 62 with your receiving email:
```javascript
to_email: 'your-email@example.com' // Replace with your email
```

## Step 6: Test It!

1. Save the file
2. Go to your website (http://localhost:5173)
3. Fill out the contact form
4. Submit!
5. Check your email inbox

## Troubleshooting

### Common Issues:

**"Failed to send message"**
- Double-check all three credentials (Service ID, Template ID, Public Key)
- Make sure your email service is properly connected in EmailJS dashboard
- Check the browser console for detailed error messages

**Not receiving emails**
- Check your spam folder
- Verify the template variables match: `{{from_name}}`, `{{from_email}}`, `{{company}}`, `{{message}}`
- Make sure the `to_email` in the template is correct

**Rate limit errors**
- Free tier allows 200 emails/month
- If you exceed this, upgrade your plan or wait for the next month

## Alternative Services

If you prefer not to use EmailJS, here are alternatives:

### 1. Formspree
- Website: https://formspree.io/
- Free: 50 submissions/month
- Very simple setup

### 2. Web3Forms
- Website: https://web3forms.com/
- Free with unlimited submissions
- No registration required

### 3. Getform
- Website: https://getform.io/
- Free: 50 submissions/month
- Easy integration

## Security Note

The Public Key is safe to expose in frontend code - it's designed for client-side use. However, never expose your Private Key in frontend code!

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/

---

For production deployment, consider:
1. Moving credentials to environment variables
2. Adding email validation
3. Adding CAPTCHA to prevent spam
4. Rate limiting on the frontend

