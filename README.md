# Subra Photography Website

A professional photography business website built with React and Vite, deployed on Netlify.

## Features

- **Hero Section** - Eye-catching landing with business name and CTAs
- **Portfolio Gallery** - Filterable photo gallery (Weddings, Events, Portraits)
- **About Section** - Business story and photography style
- **Services** - Service packages displayed as cards
- **Contact Form** - Netlify Forms integration with spam protection
- **Footer** - Contact information and social links
- **Fully Responsive** - Mobile-first design

## Tech Stack

- **Frontend**: React 18 + Vite
- **Hosting**: Netlify (Free Tier)
- **Forms**: Netlify Forms (Free)
- **Styling**: CSS3 with CSS Variables

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone or download this repository
2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Deployment to Netlify

### Method 1: Netlify CLI (Recommended)

1. Install Netlify CLI globally:
```bash
npm install -g netlify-cli
```

2. Build the project:
```bash
npm run build
```

3. Deploy:
```bash
netlify deploy --prod
```

4. Follow the prompts to:
   - Login to Netlify (or create account)
   - Link to existing site or create new site
   - Confirm build directory: `dist`

### Method 2: Netlify Dashboard (Drag & Drop)

1. Build the project:
```bash
npm run build
```

2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Drag and drop the `dist` folder to the deploy area

### Method 3: Git Integration (Best for Updates)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify Dashboard](https://app.netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
6. Click "Deploy site"

## Setting Up Email Notifications for Forms

After deploying to Netlify:

1. **First Deployment**: The form is already configured with `public/form.html` which helps Netlify detect the form during build.

2. **Enable Email Notifications**:
   - Go to your Netlify site dashboard
   - Navigate to **Forms** in the left sidebar
   - You should see your form listed (named "contact")
   - Go to **Site settings** → **Forms** → **Form notifications**
   - Click **Add notification**
   - Select **Email notification**
   - Enter email address: `karthisri1229@gmail.com`
   - Choose when to receive notifications (on form submission)
   - Save

3. **Test the Form**:
   - After deployment, submit a test form
   - Check the **Forms** section in Netlify dashboard to see if submission appears
   - Check your email inbox (and spam folder) for notifications

**Troubleshooting Email Notifications**:
- Make sure the form is deployed and accessible
- Check Netlify dashboard → Forms to see if submissions are being received
- Verify email notification is enabled in Site settings
- Check spam/junk folder for emails
- Netlify may take a few minutes to process the first form submission

**Note**: Netlify's free tier includes:
- 100 form submissions per month
- Email notifications
- Spam filtering (honeypot field included)

## Customization

### Update Contact Information

Edit these files to update phone, email, and WhatsApp:
- `src/components/ContactForm.jsx` - Contact form section
- `src/components/Footer.jsx` - Footer contact info

Replace `+91 XXXXXXXXXX` with actual phone number and update email addresses.

### Update Social Media Links

Edit `src/components/Footer.jsx` and replace `#` with actual social media URLs.

### Replace Placeholder Images

1. Replace portfolio images in `src/components/Portfolio.jsx`
2. Replace hero background image in `src/components/Hero.css`
3. Replace about section image in `src/components/About.jsx`

### Update Content

All text content can be customized in:
- `src/components/Hero.jsx` - Hero section
- `src/components/About.jsx` - About section
- `src/components/Services.jsx` - Services section

## Form Configuration

The contact form is configured for Netlify Forms with:

- **Form name**: `contact`
- **Honeypot field**: `bot-field` (hidden, for spam protection)
- **Required fields**: Name, Phone, Email, Event Type, Message
- **Optional fields**: Event Date, Location

Netlify automatically detects forms with `data-netlify="true"` attribute.

## Project Structure

```
photo/
├── public/
│   └── _redirects          # Netlify SPA routing
├── src/
│   ├── components/
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Portfolio.jsx   # Gallery with filters
│   │   ├── About.jsx       # About section
│   │   ├── Services.jsx    # Services cards
│   │   ├── ContactForm.jsx # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # React entry point
│   ├── index.css           # Global styles
│   └── App.css             # App styles
├── index.html
├── netlify.toml            # Netlify configuration
├── vite.config.js          # Vite configuration
└── package.json
```

## Cost Breakdown

- **Netlify Hosting**: Free (100GB bandwidth/month)
- **Netlify Forms**: Free (100 submissions/month)
- **Email Notifications**: Free (included with forms)
- **Total Cost**: $0/month

## Support

For issues or questions:
- Check [Netlify Documentation](https://docs.netlify.com/)
- Check [Vite Documentation](https://vitejs.dev/)

## License

This project is private and proprietary.

