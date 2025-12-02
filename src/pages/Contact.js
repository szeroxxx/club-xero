import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
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
        business_type: formData.businessType,
        message: formData.message || 'No message provided',
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
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessType: '',
          message: ''
        });
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

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'sagargohil@proton.me',
      link: 'mailto:sagargohil@proton.me'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9723117323',
      link: 'tel:+919723117323'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Gujarat, India',
      link: null
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Mon-Sat: 9AM - 6PM',
      link: null
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6">Get In Touch</h1>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto">
            Let's discuss how we can help your business dominate local search
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="heading-3 mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-[#F5F5F1] rounded-xl hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8FEC78] to-[#81DD67] flex items-center justify-center flex-shrink-0">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="text-[#003720] font-semibold mb-1">
                          {info.title}
                        </h3>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-[#218091] hover:underline"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-[#83928c]">{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Why Choose Us */}
              <div className="bg-[#F5F5F1] rounded-2xl p-8">
                <h3 className="text-[#003720] font-semibold text-xl mb-4">
                  Why Choose ClubXero?
                </h3>
                <ul className="space-y-3 text-[#0e0f0c]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">✓</span>
                    <span>Free initial consultation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">✓</span>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">✓</span>
                    <span>Proven track record in Gujarat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">✓</span>
                    <span>Guaranteed results or money back</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="heading-3 mb-8">Send Us a Message</h2>
              {submitStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-[#003720] text-xl font-bold mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[#83928c]">
                    Thank you for reaching out. We'll respond within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-[#003720] font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#218091] focus:outline-none focus:ring-2 focus:ring-[#218091]/20 transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-[#003720] font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#218091] focus:outline-none focus:ring-2 focus:ring-[#218091]/20 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-[#003720] font-medium mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#218091] focus:outline-none focus:ring-2 focus:ring-[#218091]/20 transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="businessType"
                      className="block text-[#003720] font-medium mb-2"
                    >
                      Business Type *
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#218091] focus:outline-none focus:ring-2 focus:ring-[#218091]/20 transition-all"
                    >
                      <option value="">Select your business type</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="retail">Retail</option>
                      <option value="services">Professional Services</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[#003720] font-medium mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-6 py-4 rounded-xl border border-gray-300 focus:border-[#218091] focus:outline-none focus:ring-2 focus:ring-[#218091]/20 transition-all resize-none"
                      placeholder="Tell us about your business and goals..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    style={{
                      background:
                        'linear-gradient(to bottom right, #8FEC78, #81DD67)'
                    }}
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2" size={20} />
                      </>
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <p className="text-red-600 text-sm text-center">
                      Something went wrong. Please try again or contact us directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;