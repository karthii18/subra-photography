# Email Notification Format Guide

## Current Netlify Forms Email Format

Netlify Forms sends emails in a standard format. While you can't fully customize the HTML template in the free tier, the emails include all form data in a clear format.

## What the Email Contains

The email notification includes:
- **Subject:** "Form submission from contact form: [Name]"
- **Body:** All form fields with labels:
  - Name
  - Phone
  - Email
  - Event Type
  - Event Date
  - Location
  - Message

## Improving Email Readability

The current Netlify Forms email format is:
- ✅ Professional and clear
- ✅ Includes all form data
- ✅ Easy to read
- ✅ Mobile-friendly

## Alternative: Custom Email Format (Advanced)

If you need a completely custom email format, you would need to:
1. Set up a webhook notification in Netlify
2. Use a service like EmailJS, SendGrid, or Mailgun (some have free tiers)
3. Create custom HTML email templates

However, this requires additional setup and may have costs.

## Recommendation

The standard Netlify Forms email format is professional and sufficient for most businesses. It clearly displays all the information you need to respond to enquiries.

