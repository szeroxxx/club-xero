import React, { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        business_type: 'Free Audit Request',
        message: formData.message || 'User requested a free GMB audit',
        to_email: 'sagargohil@proton.me' // Your email where you want to receive messages
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // Log error in development only
      if (process.env.NODE_ENV === 'development') {
        console.error('Form submission error:', error);
      }
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 px-4 gradient-hero">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="heading-2 mb-4">Ready to Dominate Local Search?</h2>
        <p className="body-large text-[#83928c] mb-8">
          Get your free GMB audit today and start ranking in Google Maps
        </p>

        {submitStatus === 'success' ? (
          <div className="bg-white rounded-3xl p-8 shadow-xl">
            <div className="flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <h3 className="text-[#003720] text-2xl font-bold mb-2">
                Thank You!
              </h3>
              <p className="text-[#83928c]">
                We've received your request. We'll get back to you within 24 hours.
              </p>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-6 py-4 rounded-full border border-gray-300 focus:border-[#218091] focus:outline-none focus:ring-2 focus:ring-[#218091]/20 transition-all"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-6 py-4 rounded-full border border-gray-300 focus:border-[#218091] focus:outline-none focus:ring-2 focus:ring-[#218091]/20 transition-all"
              />
            </div>
            <div className="mb-6">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number *"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-6 py-4 rounded-full border border-gray-300 focus:border-[#218091] focus:outline-none focus:ring-2 focus:ring-[#218091]/20 transition-all"
              />
            </div>
            <div className="mb-6">
              <textarea
                name="message"
                placeholder="Tell us about your business (optional)"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-[#218091] focus:outline-none focus:ring-2 focus:ring-[#218091]/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto px-12 py-4 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(to bottom right, #8FEC78, #81DD67)'
              }}
            >
              {isSubmitting ? 'Sending...' : 'Get Free Audit'}
              {!isSubmitting && <ArrowRight className="ml-2" size={20} />}
            </button>

            {submitStatus === 'error' && (
              <p className="mt-4 text-red-600 text-sm">
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        )}

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-[#208B82]" />
            <span className="text-[#0e0f0c]">100% Satisfaction Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-[#208B82]" />
            <span className="text-[#0e0f0c]">Free Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={20} className="text-[#208B82]" />
            <span className="text-[#0e0f0c]">No Hidden Fees</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;