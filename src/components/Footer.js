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
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/logo.svg"
                alt="ClubXero Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-[#83928c] text-sm leading-relaxed max-w-md">
              Dominate local search in Gujarat. Complete SEO + Website + GMB Optimization service for manufacturing and healthcare businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#003720] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#83928c] text-sm hover:text-[#218091] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#003720] font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sagargohil@proton.me"
                  className="flex items-center space-x-2 text-[#83928c] text-sm hover:text-[#218091] transition-colors"
                >
                  <Mail size={16} />
                  <span>sagargohil@proton.me</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919723117323"
                  className="flex items-center space-x-2 text-[#83928c] text-sm hover:text-[#218091] transition-colors"
                >
                  <Phone size={16} />
                  <span>+91 9723117323</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/clubxero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-[#83928c] text-sm hover:text-[#218091] transition-colors"
                >
                  <Instagram size={16} />
                  <span>@clubxero</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#afb7b4] text-sm">
              © {currentYear} ClubXero. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-[#afb7b4] text-sm">Made with care in Gujarat</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;