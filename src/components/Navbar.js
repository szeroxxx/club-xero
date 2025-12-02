import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between h-14 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-white/80 backdrop-blur-md shadow-md px-6 border border-gray-200/50'
              : 'bg-white/60 backdrop-blur-sm px-4 border border-gray-200/30'
          }`}
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)'
          }}
        >
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <img
              src="/logo.svg"
              alt="ClubXero Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-[#003720] bg-[rgba(0,0,0,0.05)]'
                    : 'text-[#83928c] hover:text-[#003720] hover:bg-[rgba(0,0,0,0.05)]'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 rounded-full text-white text-sm font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
            style={{
              background: 'linear-gradient(to bottom right, #8FEC78, #81DD67)',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
            }}
          >
            Get Free Audit
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#003720] hover:bg-[rgba(0,0,0,0.05)] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 bg-white rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden backdrop-blur-md">
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-[#003720] bg-[rgba(0,0,0,0.05)]'
                      : 'text-[#83928c] hover:text-[#003720] hover:bg-[rgba(0,0,0,0.05)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-3 mt-2 rounded-full text-white text-sm font-semibold"
                style={{
                  background: 'linear-gradient(to bottom right, #8FEC78, #81DD67)'
                }}
              >
                Get Free Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;