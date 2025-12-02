import React from 'react';
import HeroSection from '../components/HeroSection';
import HealthcareSoftwareSection from '../components/HealthcareSoftwareSection';
import ProblemsSection from '../components/ProblemsSection';
import SolutionsSection from '../components/SolutionsSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';

const Home = () => {
  return (
    <>
      <HeroSection />
      <HealthcareSoftwareSection />
      <ProblemsSection />
      <SolutionsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
};

export default Home;