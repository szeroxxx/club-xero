# ClubXero - Local SEO & Google Maps Ranking Platform

A modern, production-ready React application for local SEO services, Google Maps ranking, and AI search optimization.

## 🚀 Quick Deploy to Vercel

This project is **production-ready** and optimized for Vercel deployment.

### Deploy Now

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/clubxero)

**See [VERCEL_DEPLOYMENT_SUMMARY.md](VERCEL_DEPLOYMENT_SUMMARY.md) for quick start guide.**

## ✨ Features

- 🎯 **Local SEO Services** - Complete SEO and GMB optimization
- 📍 **Google Maps Ranking** - Dominate local search results
- 🤖 **AI Search Optimization** - Visibility on ChatGPT and AI engines
- 📧 **Contact Forms** - EmailJS integration for lead generation
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **Performance Optimized** - 131KB gzipped bundle
- 🔒 **Production Secure** - Environment variables, security headers
- 📊 **Analytics Ready** - PostHog integration included

## 🛠️ Tech Stack

- **React 19** - Latest React with modern features
- **React Router 7** - Client-side routing
- **Tailwind CSS 3** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **EmailJS** - Email service integration
- **Framer Motion** - Smooth animations
- **Lucide React** - Beautiful icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/clubxero.git
cd clubxero

# Install dependencies
npm install
# or
yarn install

# Copy environment variables
cp .env.example .env

# Start development server
npm start
```

## 🔧 Environment Variables

Create a `.env` file in the root directory:

```env
# EmailJS Configuration
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id

# Backend URL (optional)
REACT_APP_BACKEND_URL=https://your-backend-url.com
```

See [EMAILJS_SETUP_GUIDE.md](EMAILJS_SETUP_GUIDE.md) for EmailJS configuration.

## 📜 Available Scripts

```bash
# Development
npm start              # Start dev server at localhost:3000

# Production
npm run build          # Create production build
npm run vercel-build   # Vercel-specific build command

# Testing
npm test               # Run tests in watch mode

# Analysis
npm run analyze        # Analyze bundle size
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Set Environment Variables** in Vercel Dashboard
2. **Connect GitHub Repository**
3. **Deploy** - Automatic on every push

See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) for detailed instructions.

### Other Platforms

The build output is in the `build/` directory and can be deployed to:
- Netlify
- AWS S3 + CloudFront
- Firebase Hosting
- GitHub Pages

## 📁 Project Structure

```
clubxero/
├── public/              # Static files
│   ├── index.html      # HTML template with SEO
│   ├── manifest.json   # PWA manifest
│   └── robots.txt      # SEO directives
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── config/         # Configuration files
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility libraries
│   └── styles/         # Global styles
├── vercel.json         # Vercel configuration
├── .env.production     # Production environment
└── package.json        # Dependencies
```

## 🎨 Key Pages

- **Home** (`/`) - Hero, features, testimonials, CTA
- **Features** (`/features`) - Detailed service features
- **Pricing** (`/pricing`) - Pricing plans and packages
- **Testimonials** (`/testimonials`) - Customer reviews
- **Contact** (`/contact`) - Contact form with EmailJS
- **Privacy** (`/privacy`) - Privacy policy

## 🔒 Security Features

- ✅ Environment variables for sensitive data
- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ No console logs in production
- ✅ HTTPS enforced (Vercel automatic)
- ✅ Input validation on forms
- ✅ XSS protection

## ⚡ Performance

- **Bundle Size**: 131.59 KB (gzipped)
- **First Contentful Paint**: < 1.8s
- **Time to Interactive**: < 3.8s
- **Lighthouse Score**: 90+

## 📊 Analytics

PostHog analytics is pre-configured. Events are tracked automatically:
- Page views
- Form submissions
- Button clicks
- User sessions

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## 📚 Documentation

- [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md) - Complete deployment guide
- [PRODUCTION_CHECKLIST.md](PRODUCTION_CHECKLIST.md) - Pre-deployment checklist
- [VERCEL_DEPLOYMENT_SUMMARY.md](VERCEL_DEPLOYMENT_SUMMARY.md) - Quick deploy guide
- [EMAILJS_SETUP_GUIDE.md](EMAILJS_SETUP_GUIDE.md) - EmailJS configuration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 🆘 Support

- **Documentation**: Check the docs folder
- **Issues**: Open an issue on GitHub
- **Email**: sagargohil@proton.me

## 🎉 Production Ready

This project includes:
- ✅ Optimized production build
- ✅ SEO meta tags and Open Graph
- ✅ PWA manifest
- ✅ Security headers
- ✅ Error handling
- ✅ Loading states
- ✅ Responsive design
- ✅ Analytics integration
- ✅ Form validation
- ✅ Environment variables

**Ready to deploy!** Follow [VERCEL_DEPLOYMENT_SUMMARY.md](VERCEL_DEPLOYMENT_SUMMARY.md) to get started.

---

Built with ❤️ by ClubXero Team
