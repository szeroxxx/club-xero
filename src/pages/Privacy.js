import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6">Privacy Policy</h1>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto">
            Last updated: December 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Icons Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, label: 'Data Protection' },
              { icon: Lock, label: 'Secure Storage' },
              { icon: Eye, label: 'Transparency' },
              { icon: FileText, label: 'Compliance' }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8FEC78] to-[#81DD67] flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="text-white" size={28} />
                  </div>
                  <p className="text-[#0e0f0c] text-sm font-medium">{item.label}</p>
                </div>
              );
            })}
          </div>

          {/* Privacy Content */}
          <div className="prose prose-lg max-w-none">
            <div className="mb-12">
              <h2 className="heading-3 mb-4">Introduction</h2>
              <p className="body-medium text-[#83928c] mb-4">
                ClubXero ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="heading-3 mb-4">Information We Collect</h2>
              <div className="bg-[#F5F5F1] rounded-2xl p-6 mb-4">
                <h3 className="text-[#003720] font-semibold mb-3">Personal Information</h3>
                <ul className="space-y-2 text-[#0e0f0c]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">•</span>
                    <span>Name, email address, and phone number</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">•</span>
                    <span>Business information and industry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">•</span>
                    <span>Communication preferences</span>
                  </li>
                </ul>
              </div>
              <div className="bg-[#F5F5F1] rounded-2xl p-6">
                <h3 className="text-[#003720] font-semibold mb-3">Automatically Collected Information</h3>
                <ul className="space-y-2 text-[#0e0f0c]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">•</span>
                    <span>IP address and browser type</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">•</span>
                    <span>Device information and operating system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#208B82] mt-1">•</span>
                    <span>Pages visited and time spent on site</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="heading-3 mb-4">How We Use Your Information</h2>
              <p className="body-medium text-[#83928c] mb-4">
                We use the information we collect to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#208B82] mt-1 font-bold">✓</span>
                  <span className="text-[#0e0f0c]">Provide, operate, and maintain our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#208B82] mt-1 font-bold">✓</span>
                  <span className="text-[#0e0f0c]">Improve and personalize your experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#208B82] mt-1 font-bold">✓</span>
                  <span className="text-[#0e0f0c]">Communicate with you about services and updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#208B82] mt-1 font-bold">✓</span>
                  <span className="text-[#0e0f0c]">Process your transactions and send notifications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#208B82] mt-1 font-bold">✓</span>
                  <span className="text-[#0e0f0c]">Analyze usage and trends to improve our services</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="heading-3 mb-4">Information Sharing</h2>
              <p className="body-medium text-[#83928c] mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#218091] font-bold">•</span>
                  <span className="text-[#0e0f0c]"><strong>Service Providers:</strong> Trusted partners who assist in operating our business</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#218091] font-bold">•</span>
                  <span className="text-[#0e0f0c]"><strong>Legal Requirements:</strong> When required by law or to protect our rights</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#218091] font-bold">•</span>
                  <span className="text-[#0e0f0c]"><strong>Business Transfers:</strong> In connection with mergers or acquisitions</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="heading-3 mb-4">Data Security</h2>
              <p className="body-medium text-[#83928c] mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="heading-3 mb-4">Your Rights</h2>
              <p className="body-medium text-[#83928c] mb-4">
                You have the right to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#208B82] mt-1 font-bold">✓</span>
                  <span className="text-[#0e0f0c]">Access and receive a copy of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#208B82] mt-1 font-bold">✓</span>
                  <span className="text-[#0e0f0c]">Correct inaccurate or incomplete information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#208B82] mt-1 font-bold">✓</span>
                  <span className="text-[#0e0f0c]">Request deletion of your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#208B82] mt-1 font-bold">✓</span>
                  <span className="text-[#0e0f0c]">Opt-out of marketing communications</span>
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="heading-3 mb-4">Cookies and Tracking</h2>
              <p className="body-medium text-[#83928c] mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and understand user preferences. You can control cookies through your browser settings.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="heading-3 mb-4">Changes to This Policy</h2>
              <p className="body-medium text-[#83928c] mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div className="bg-[#F5F5F1] rounded-2xl p-8">
              <h2 className="heading-3 mb-4">Contact Us</h2>
              <p className="body-medium text-[#83928c] mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="space-y-2 text-[#0e0f0c]">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:sagargohil@proton.me" className="text-[#218091] hover:underline">
                    sagargohil@proton.me
                  </a>
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  <a href="tel:+919723117323" className="text-[#218091] hover:underline">
                    +91 9723117323
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;