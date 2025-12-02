import React from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";
import {
  FooterBackgroundGradient,
  TextHoverEffect,
} from "@/components/ui/hover-footer";

function FooterNew() {
  // Footer link data adapted to ClubXero
  const footerLinks = [
    {
      title: "Services",
      links: [
        { label: "Local SEO", href: "/features" },
        { label: "GMB Optimization", href: "/features" },
        { label: "AI Search Visibility", href: "/features" },
        { label: "Website Development", href: "/features" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "Testimonials", href: "/testimonials" },
        { label: "Privacy Policy", href: "/privacy" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Contact Us", href: "/contact", pulse: true },
        { label: "Free Audit", href: "/contact" },
        { label: "Case Studies", href: "/testimonials" },
        { label: "Blog", href: "/" },
      ],
    },
  ];

  // Contact info data
  const contactInfo = [
    {
      icon: <Mail size={18} className="text-[#218091]" />,
      text: "sagargohil@proton.me",
      href: "mailto:sagargohil@proton.me",
    },
    {
      icon: <Phone size={18} className="text-[#218091]" />,
      text: "+91 9723117323",
      href: "tel:+919723117323",
    },
    {
      icon: <MapPin size={18} className="text-[#218091]" />,
      text: "Gujarat, India",
    },
  ];

  // Social media icons
  const socialLinks = [
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://instagram.com/clubxero" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: "https://linkedin.com/company/clubxero" },
    { icon: <Twitter size={20} />, label: "Twitter", href: "https://twitter.com/clubxero" },
    { icon: <Globe size={20} />, label: "Website", href: "/" },
  ];

  return (
    <footer className="bg-white relative h-fit rounded-3xl overflow-hidden m-4 md:m-8 shadow-lg border border-[#003720]/10">
      <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-16 pb-12">
          {/* Brand section */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8FEC78] to-[#81DD67] flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white text-xl font-bold">C</span>
              </div>
              <span className="text-[#003720] text-3xl font-bold group-hover:text-[#218091] transition-colors">
                ClubXero
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-[#83928c]">
              Dominate local search in Gujarat. Complete SEO + Website + GMB
              Optimization service for manufacturing and healthcare businesses.
            </p>
            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1 bg-[#8FEC78]/10 text-[#208B82] text-xs font-semibold rounded-full">
                ⭐ 5.0 Rating
              </span>
              <span className="px-3 py-1 bg-[#218091]/10 text-[#218091] text-xs font-semibold rounded-full">
                🚀 100+ Clients
              </span>
            </div>
          </div>

          {/* Footer link sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-[#003720] text-lg font-semibold mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label} className="relative">
                    <Link
                      to={link.href}
                      className="text-[#83928c] hover:text-[#218091] transition-colors"
                    >
                      {link.label}
                    </Link>
                    {link.pulse && (
                      <span className="absolute top-0 right-[-10px] w-2 h-2 rounded-full bg-[#8FEC78] animate-pulse"></span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact section */}
          <div>
            <h4 className="text-[#003720] text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((item, i) => (
                <li key={i} className="flex items-center space-x-3">
                  {item.icon}
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#83928c] hover:text-[#218091] transition-colors text-sm"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span className="text-[#83928c] hover:text-[#218091] transition-colors text-sm">
                      {item.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="border-t border-[#003720]/20 my-8" />

        {/* Footer bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          {/* Social icons */}
          <div className="flex space-x-6 text-[#83928c]">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[#218091] transition-all hover:scale-110 transform"
              >
                {icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-center md:text-left text-[#afb7b4]">
              &copy; {new Date().getFullYear()} ClubXero. All rights reserved.
            </p>
            <span className="hidden md:inline text-[#afb7b4]">•</span>
            <p className="text-[#afb7b4] text-xs">
              Made with 💚 in Gujarat
            </p>
          </div>
        </div>
      </div>

      {/* Text hover effect - hidden on mobile, visible on large screens */}
      <div className="lg:flex hidden h-[30rem] -mt-52 -mb-36">
        <TextHoverEffect text="CLUBXERO" className="z-50" />
      </div>

      <FooterBackgroundGradient />
    </footer>
  );
}

export default FooterNew;
