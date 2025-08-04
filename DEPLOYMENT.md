# Deployment Guide

## Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy

### Option 2: Netlify
1. Build the project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder to deploy
4. Or connect your GitHub repository for automatic deployments

### Option 3: Manual Build
1. Run `npm run build` to create production build
2. Run `npm start` to serve the application
3. Deploy to any hosting service that supports Node.js

## Environment Variables

Create a `.env.local` file for local development:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://yoursite.com
NEXT_PUBLIC_SITE_NAME="Your Company Name"

# Contact Form (optional)
CONTACT_FORM_ENDPOINT=your-form-endpoint

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Newsletter (optional) 
NEWSLETTER_API_ENDPOINT=your-newsletter-endpoint
```

## Pre-Deployment Checklist

- [ ] Update company information in `/lib/constants.ts`
- [ ] Replace placeholder images with your own
- [ ] Update meta tags and SEO information
- [ ] Test contact form functionality
- [ ] Verify all links work correctly
- [ ] Check mobile responsiveness
- [ ] Test loading performance
- [ ] Update robots.txt with your domain
- [ ] Set up SSL certificate (usually automatic on modern hosts)

## Performance Optimization

1. **Images**: Replace placeholder images with optimized versions
2. **Fonts**: Consider hosting fonts locally for better performance
3. **Analytics**: Add Google Analytics or your preferred analytics service
4. **SEO**: Submit sitemap to Google Search Console

## Custom Domain Setup

### Vercel
1. Go to your project settings
2. Add your custom domain
3. Update DNS records as instructed

### Netlify  
1. Go to Domain settings
2. Add custom domain
3. Configure DNS with your domain provider

## SSL Certificate

Most modern hosting platforms (Vercel, Netlify) provide automatic SSL certificates via Let's Encrypt. No additional configuration needed.

## Monitoring

Consider setting up:
- **Uptime Monitoring**: UptimeRobot, Pingdom
- **Error Tracking**: Sentry, LogRocket  
- **Analytics**: Google Analytics, Plausible
- **Performance**: Web Vitals, GTmetrix