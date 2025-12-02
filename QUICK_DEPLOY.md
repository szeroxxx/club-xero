# 🚀 Quick Deploy to Vercel - 2 Minutes

## Step 1: Set Environment Variables (1 min)

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these 3 variables:

```
REACT_APP_EMAILJS_PUBLIC_KEY=LMDcinnd2G34w-y-T
REACT_APP_EMAILJS_SERVICE_ID=service_3aztyxn
REACT_APP_EMAILJS_TEMPLATE_ID=template_2ms09fh
```

**Important**: Apply to Production, Preview, and Development

## Step 2: Deploy (1 min)

### Option A: GitHub (Recommended)
```bash
git add .
git commit -m "Production ready"
git push origin main
```
Then import in Vercel dashboard - auto-deploys!

### Option B: CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

## Step 3: Test

✅ Visit your deployed URL  
✅ Test contact form  
✅ Check mobile view  

## Done! 🎉

Your site is live and production-ready!

---

**Need help?** See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)
