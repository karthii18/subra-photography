# Corrected EmailJS Template

## Update Your EmailJS Template

Go to EmailJS Dashboard → Email Templates → Edit your template

### Subject Line:
```
📸 New Photography Enquiry - {{from_name}}
```

### Email Content (Copy this exactly):

```
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

### Email Settings:

- **To Email:** `karthisri1229@gmail.com`
- **From Name:** `Subra Photography Website`
- **From Email:** (Use Default Email Address - checked)
- **Reply To:** `{{from_email}}` or `{{reply_to}}`
- **Bcc:** (leave empty)
- **Cc:** (leave empty)

## Important Notes:

1. Use **{{formatted_event_type}}** (not {{event_type}}) for Event Type
2. Use **{{formatted_date}}** (not {{event_date}}) for Event Date
3. Use **{{from_name}}**, **{{from_phone}}**, **{{from_email}}** for contact info
4. Use **{{message}}** for the customer message
5. Use **{{location}}** for location

## Variables Being Sent:

- `from_name` - Customer name
- `from_phone` - Customer phone
- `from_email` - Customer email
- `formatted_event_type` - Formatted event type (Wedding, Pre-Wedding Shoot, etc.)
- `formatted_date` - Formatted date (Thursday, 18 December 2025)
- `location` - Event location
- `message` - Customer message
- `reply_to` - Email to reply to

Make sure your template uses these exact variable names!

