# EmailJS Setup Guide

## Step 1: Create EmailJS Account

1. Go to https://www.emailjs.com/
2. Sign up for a free account (200 emails/month free)
3. Verify your email address

## Step 2: Add Email Service

1. In EmailJS Dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended - easiest)
   - **Outlook**
   - **Yahoo**
   - Or other providers
4. Follow the connection steps
5. **Note your Service ID** (e.g., `service_xxxxx`)

## Step 3: Create Email Template

1. Go to **Email Templates** in EmailJS Dashboard
2. Click **Create New Template**
3. Use this template code:

```html
Subject: 📸 New Photography Enquiry - {{from_name}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📸 NEW PHOTOGRAPHY ENQUIRY
Subra Photography - Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name:     {{from_name}}
Phone:    {{from_phone}}
Email:    {{from_email}}

📅 EVENT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Event Type:  {{formatted_event_type}}
Event Date:  {{formatted_date}}
Location:    {{location}}

💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
This enquiry was submitted through the Subra Photography website.
Please respond to the customer at your earliest convenience.

Reply to: {{from_email}}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

4. Set **To Email** to: `karthisri1229@gmail.com`
5. Set **From Name** to: `Subra Photography Website`
6. Set **Reply To** to: `{{reply_to}}` (so you can reply directly)
7. **Note your Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find **Public Key**
3. Copy it (e.g., `xxxxxxxxxxxxx`)

## Step 5: Update Code

1. Open `src/components/ContactForm.jsx`
2. Find these lines (around line 8-10):
```javascript
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'
```

3. Replace with your actual values:
```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxx' // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxx' // Your Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxx' // Your Public Key
```

## Step 6: Install Dependencies & Deploy

1. Run: `npm install`
2. Test locally: `npm run dev`
3. Submit a test form
4. Check your email!
5. Deploy to Netlify: `git add .`, `git commit`, `git push`

## EmailJS Free Tier Limits

- ✅ 200 emails/month
- ✅ Free forever
- ✅ Custom email templates
- ✅ Professional formatting

## Troubleshooting

- **Not receiving emails?** Check spam folder
- **Error sending?** Verify Service ID, Template ID, and Public Key are correct
- **Template not working?** Make sure variable names match ({{from_name}}, etc.)

## Support

- EmailJS Docs: https://www.emailjs.com/docs/
- EmailJS Dashboard: https://dashboard.emailjs.com/

