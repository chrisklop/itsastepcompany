# Professional Website Template

A modern, responsive, and accessible website template built with Next.js 14, TypeScript, and Tailwind CSS. Perfect for professional service companies, consultancies, agencies, and businesses looking for a polished online presence.

![Template Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2426&q=80)

## ✨ Features

### 🎨 Design & UI
- **Modern Design**: Clean, professional layout with corporate aesthetics
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations with scroll-triggered effects
- **Accessibility First**: WCAG compliant with proper ARIA labels and semantic HTML
- **Dark/Light Ready**: Easy to extend with dark mode support

### 📱 Pages Included
- **Home Page**: Hero section, features, services preview, testimonials, CTA
- **About Page**: Company story, mission/vision/values, team profiles, achievements
- **Services Page**: Detailed service offerings, process, FAQ, testimonials
- **Contact Page**: Contact form, business info, location, hours
- **Blog Page**: Article listings, featured posts, categories, newsletter signup
- **Careers Page**: Job listings, company culture, benefits, hiring process

### 🧩 Components Library
- **Navigation**: Responsive header with dropdowns and mobile menu
- **Sections**: Hero, Features, Services, Process, Testimonials, CTA
- **Forms**: Contact form with validation, Newsletter signup
- **UI Elements**: Buttons, Cards, Loading states, Modals

### 🔧 Technical Features
- **Next.js 14**: App Router, Server Components, Static Generation
- **TypeScript**: Full type safety and developer experience
- **Tailwind CSS**: Utility-first CSS with custom design system
- **Framer Motion**: Smooth animations and transitions
- **SEO Optimized**: Meta tags, Open Graph, structured data
- **Performance**: Optimized images, lazy loading, code splitting

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download the template**
   ```bash
   # If using git
   git clone [repository-url]
   cd professional-website-template
   
   # Or download and extract the ZIP file
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🎯 Customization Guide

### 1. Company Information
Edit `/lib/constants.ts` to update:
- Company name and description  
- Contact information
- Social media links
- Team members
- Services and features
- Testimonials and stats

```typescript
export const SITE_CONFIG = {
  name: "Your Company Name",
  description: "Your company description",
  // ... other settings
};
```

### 2. Styling & Branding
Update colors in `/tailwind.config.js`:
```javascript
colors: {
  primary: {
    500: '#YOUR_PRIMARY_COLOR',
    // ... other shades
  },
  // ... other color schemes
}
```

### 3. Content & Images
- Replace placeholder images in `/public/images/`
- Update text content in page components
- Modify navigation items in constants.ts

### 4. Forms & Integrations
- Connect contact form to your backend API
- Set up newsletter integration
- Configure analytics (Google Analytics, etc.)

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog page  
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── common/           # Common UI components
│   ├── forms/            # Form components
│   └── sections/         # Page section components
├── lib/                  # Utilities and constants
│   ├── constants.ts      # Site configuration
│   └── utils.ts          # Helper functions
├── public/               # Static assets
└── styles/               # Global styles
```

## 🛠️ Development Scripts

```bash
# Development server
npm run dev

# Production build
npm run build  

# Start production server
npm run start

# Lint code
npm run lint
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#0066CC) - Main brand color
- **Secondary**: Teal (#00A19C) - Accent color  
- **Accent**: Orange (#FF6B35) - Call-to-action color
- **Success**: Green (#28A745) - Success states
- **Grays**: Comprehensive gray scale for text and backgrounds

### Typography
- **Headings**: Inter font family
- **Body**: System font stack for performance
- **Responsive**: Fluid typography scales with screen size

### Components
- **Buttons**: Multiple variants (primary, secondary, ghost, etc.)
- **Cards**: Hover effects, consistent spacing
- **Forms**: Validation states, accessibility features

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */  
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and descriptions
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly
- Focus management

## 🔍 SEO Features

- Dynamic meta tags per page
- Open Graph protocol support
- Twitter Card integration  
- Structured data markup
- XML sitemap ready
- Performance optimized

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Configure redirects

### Other Platforms
The template works with any hosting platform that supports Node.js applications.

## 🧪 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet
- **Legacy**: IE11+ (with polyfills)

## 📝 Customization Examples

### Adding a New Page
1. Create page file in `/app/new-page/page.tsx`
2. Add navigation item to `NAVIGATION_ITEMS` in constants.ts
3. Style and populate with content

### Custom Component
```tsx
// components/custom/MyComponent.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function MyComponent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-lg shadow-md"
    >
      <h3 className="text-xl font-semibold mb-4">Custom Component</h3>
      <p className="text-gray-600">Your content here...</p>
    </motion.div>
  );
}
```

## 🤝 Contributing

This is a template project. Feel free to fork, modify, and use for your projects. 

## 📄 License

This template is free to use for personal and commercial projects. No attribution required.

## 🆘 Support

For questions or issues:
1. Check the documentation above
2. Review the code comments
3. Search existing issues  
4. Create a new issue with details

## 🔄 Updates

This template is actively maintained with:
- Security updates
- Dependency updates  
- New features and improvements
- Bug fixes

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**