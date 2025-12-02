// EmailJS Configuration
// Uses environment variables for security
// Set these in Vercel Environment Variables dashboard

export const EMAILJS_CONFIG = {
  // Get this from: https://dashboard.emailjs.com/admin/account
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'LMDcinnd2G34w-y-T',
  
  // Get this from: https://dashboard.emailjs.com/admin/integration
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_3aztyxn',
  
  // Get this from: https://dashboard.emailjs.com/admin/templates
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_2ms09fh'
};
