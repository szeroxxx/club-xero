import React from 'react';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const Pricing = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6">Pricing That Scales With You</h1>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the plan that fits your business goals.
          </p>
        </div>
      </section>

      <PricingSection />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Pricing;