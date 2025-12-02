# EmailJS Setup Guide

## ✅ What's Already Done
- EmailJS package installed
- Contact form updated to use EmailJS
- CTA form (Free Audit) updated to use EmailJS
- Configuration file created

## 🔧 What You Need to Do

### Step 1: Get Your EmailJS Credentials

1. **Go to EmailJS Dashboard**: https://dashboard.emailjs.com/

2. **Add Email Service** (if not done):
   - Click "Email Services" in left sidebar
   - Click "Add New Service"
   - Choose Gmail (recommended) or your email provider
   - Follow the connection steps
   - **COPY the Service ID** (looks like: `service_xxxxxxx`)

3. **Create Email Template**:
   - Click "Email Templates" in left sidebar
   - Click "Create New Template"
   - Set **Template Name**: "Contact Form"
   - Set **Subject**: `New Contact Form Submission from {{from_name}}`
   - Set **Content** (Body):
   ```
   You have a new message from your website!

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone}}
   Business Type: {{business_type}}
   
   Message:
   {{message}}
   
   ---
   Reply to: {{from_email}}
   ```
   - Click "Save"
   - **COPY the Template ID** (looks like: `template_xxxxxxx`)

4. **Get Your Public Key**:
   - Click "Account" in left sidebar
   - Find "Public Key" section
   - **COPY your Public Key** (looks like: `xxxxxxxxxxxxxxxxxx`)

### Step 2: Update Configuration File

Open the file: `src/config/emailjs.js`

Replace the placeholder values with your actual credentials:

```javascript
export const EMAILJS_CONFIG = {
  PUBLIC_KEY: 'paste_your_public_key_here',
  SERVICE_ID: 'paste_your_service_id_here',
  TEMPLATE_ID: 'paste_your_template_id_here'
};
```

### Step 3: Test Your Forms

1. Start your development server:
   ```
   npm start
   ```

2. Test both forms:
   - **Contact Page**: http://localhost:3000/contact
   - **Home Page CTA**: http://localhost:3000 (scroll to "Get Free Audit" section)

3. Fill out the form and submit
4. Check your email inbox (sagargohil@proton.me)

## 📧 Email Template Variables

Your forms send these variables to EmailJS:

- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{phone}}` - User's phone number
- `{{business_type}}` - Business type or "Free Audit Request"
- `{{message}}` - User's message
- `{{to_email}}` - Your email (sagargohil@proton.me)

## 🎯 Free Tier Limits

EmailJS free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

## 🔒 Security Note

Your EmailJS Public Key is safe to use in frontend code. It's designed to be public and only allows sending emails through your configured templates.

## ❓ Troubleshooting

**Form not sending?**
1. Check browser console for errors
2. Verify all 3 credentials are correct in `src/config/emailjs.js`
3. Make sure your email service is connected in EmailJS dashboard
4. Check EmailJS dashboard for failed requests

**Not receiving emails?**
1. Check spam folder
2. Verify email service connection in EmailJS dashboard
3. Test the template directly in EmailJS dashboard

## 📞 Need Help?

If you encounter issues:
1. Check EmailJS dashboard logs
2. Look at browser console errors
3. Verify template variables match the code
