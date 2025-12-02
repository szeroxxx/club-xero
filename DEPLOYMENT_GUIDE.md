# Production Deployment Guide for Vercel

## Pre-Deployment Checklist ✅

### 1. Environment Variables Setup
Before deploying to Vercel, configure these environment variables in your Vercel dashboard:

**Required Variables:**
```
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
```

**Optional Variables:**
```
REACT_APP_BACKEND_URL=https://your-backend-url.com
GENERATE_SOURCEMAP=false
```

### 2. Files Created for Production
- ✅ `vercel.json` - Vercel configuration with routing and security headers
- ✅ `.env.production` - Production environment template
- ✅ `.env.example` - Example environment variables
- ✅ Updated `.gitignore` - Excludes sensitive files

### 3. Security Improvements
- ✅ Console logs only in development mode
- ✅ EmailJS credentials use environment variables
- ✅ Security headers configured (X-Frame-Options, CSP, etc.)
- ✅ .env file added to .gitignore

### 4. Performance Optimizations
- ✅ Static asset caching (1 year)
- ✅ Source maps disabled in production
- ✅ Build optimizations enabled
- ✅ Gzip compression (handled by Vercel)

## Deployment Steps

### Option 1: Deploy via Vercel CLI (Recommended)

1. **Install Vercel CLI:**
```bash
npm install -g vercel
```

2. **Login to Vercel:**
```bash
vercel login
```

3. **Deploy:**
```bash
vercel
```

4. **Deploy to Production:**
```bash
vercel --prod
```

### Option 2: Deploy via Vercel Dashboard

1. **Push to GitHub:**
```bash
git add .
git commit -m "Production ready deployment"
git push origin main
```

2. **Import Project in Vercel:**
   - Go to https://vercel.com/new
   - Import your GitHub repository
   - Vercel will auto-detect Create React App

3. **Configure Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add all required variables listed above
   - Apply to Production, Preview, and Development

4. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy automatically

## Post-Deployment Verification

### 1. Test Core Functionality
- [ ] Homepage loads correctly
- [ ] All navigation links work
- [ ] Contact form submits successfully
- [ ] EmailJS integration works
- [ ] Responsive design on mobile/tablet
- [ ] All images load properly

### 2. Performance Check
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Check page load times
- [ ] Verify asset caching
- [ ] Test on slow 3G connection

### 3. SEO Verification
- [ ] Meta tags are present
- [ ] Open Graph tags work
- [ ] Sitemap accessible (if added)
- [ ] robots.txt configured (if added)

### 4. Security Check
- [ ] HTTPS enabled (automatic on Vercel)
- [ ] Security headers present
- [ ] No console errors in production
- [ ] No exposed API keys in source

## Build Information

**Build Command:** `npm run build` or `yarn build`
**Output Directory:** `build`
**Node Version:** 18.x or higher recommended

## Troubleshooting

### Build Fails
- Check Node version compatibility
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript/ESLint errors

### Environment Variables Not Working
- Ensure variables start with `REACT_APP_`
- Redeploy after adding new variables
- Check variable names match exactly

### Routing Issues (404 on refresh)
- Verify `vercel.json` is present
- Check routing configuration matches your routes

### EmailJS Not Working
- Verify all three EmailJS variables are set
- Check EmailJS dashboard for API limits
- Test with EmailJS dashboard first

## Monitoring & Maintenance

### Analytics
- PostHog is already integrated in `public/index.html`
- Monitor user behavior and errors

### Updates
```bash
# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix
```

### Rollback
If something goes wrong:
```bash
vercel rollback
```

## Performance Tips

1. **Image Optimization:**
   - Use WebP format where possible
   - Compress images before uploading
   - Consider using Vercel Image Optimization

2. **Code Splitting:**
   - Already handled by Create React App
   - Consider lazy loading routes if needed

3. **Caching:**
   - Static assets cached for 1 year
   - HTML cached with revalidation

## Support

For issues:
1. Check Vercel deployment logs
2. Review browser console for errors
3. Test locally with production build: `npm run build && npx serve -s build`

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Create React App Deployment](https://create-react-app.dev/docs/deployment/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
