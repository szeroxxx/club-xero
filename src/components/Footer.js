import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-flex items-center mb-4 group">
              <div className="flex items-center space-x-3">
                <img
                  src="/logo.svg"
                  alt="ClubXero"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-bold text-[#003720] group-hover:text-[#218091] transition-colors">
                  ClubXero
                </span>
              </div>
            </Link>
            <p className="text-[#83928c] text-sm leading-relaxed max-w-md mb-4">
              Dominate local search in Gujarat. Complete SEO + Website + GMB Optimization service for manufacturing and healthcare businesses.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-yellow-500 text-lg">⭐</span>
                <span className="ml-1 text-sm font-semibold text-[#003720]">5.0 Rating</span>
              </div>
              <span className="text-[#83928c]">•</span>
              <span className="text-sm text-[#83928c]">100+ Clients</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#003720] font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#83928c] text-sm hover:text-[#218091] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#003720] font-semibold mb-4 text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:theclubxero@gmail.com"
                  className="flex items-center space-x-2 text-[#83928c] text-sm hover:text-[#218091] transition-colors group"
                >
                  <Mail size={16} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="break-all">theclubxero@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919723117323"
                  className="flex items-center space-x-2 text-[#83928c] text-sm hover:text-[#218091] transition-colors group"
                >
                  <Phone size={16} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>+91 9723117323</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/club_xero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#83928c] text-sm hover:text-[#218091] transition-colors group"
                >
                  <Instagram size={16} className="flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span>@club_xero</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-[#003720] text-sm font-medium">
              © {currentYear} ClubXero. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/club_xero"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#003720] hover:text-[#218091] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;