import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentCard, setCurrentCard] = useState(0);

  const cardConfigs = [
    {
      bgColor: 'bg-green-400',
      greeting: 'Google Rankings',
      subtitle: 'Rank in Top 3 Local Search'
    },
    {
      bgColor: 'bg-blue-400',
      greeting: 'GMB Optimization',
      subtitle: '360° Profile Optimization'
    },
    {
      bgColor: 'bg-purple-400',
      greeting: 'AI Search Ready',
      subtitle: 'ChatGPT & AI Engine Optimized'
    },
    {
      bgColor: 'bg-orange-400',
      greeting: 'Website SEO',
      subtitle: 'Fast, Optimized Next.js Sites'
    },
    {
      bgColor: 'bg-yellow-300',
      greeting: 'Guaranteed Growth',
      subtitle: 'Results or Money Back'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % cardConfigs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-hero pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <h1 className="heading-1">
              Rank Your Business on{' '}
              <span className="text-[#218091]">Google, AI Search & Maps</span>
            </h1>
            <p className="body-large text-[#83928c] max-w-2xl mx-auto lg:mx-0">
              Dominate local search and AI-powered platforms in Gujarat. SEO + Website + GMB + AI Search Optimization for manufacturing and healthcare businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
                style={{
                  background: 'linear-gradient(to bottom right, #8FEC78, #81DD67)',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
                }}
              >
                Get Free GMB Audit
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/pricing"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold transition-all duration-200 hover:bg-[rgba(0,0,0,0.05)] active:scale-95 border border-[rgba(0,0,0,0.1)]"
                style={{
                  color: 'var(--text-primary)'
                }}
              >
                View Pricing
              </Link>
            </div>
          </div>

          {/* Right - Animated Cards */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg">
            <div className="relative h-[400px] flex items-center justify-center">
              {cardConfigs.map((card, index) => {
                const position = (index - currentCard + cardConfigs.length) % cardConfigs.length;
                const isActive = position === 0;
                const zIndex = cardConfigs.length - position;
                const scale = isActive ? 1 : 0.95 - position * 0.05;
                const opacity = position <= 2 ? 1 - position * 0.3 : 0;
                const translateY = position * 20;

                return (
                  <div
                    key={index}
                    className={`absolute w-full h-80 rounded-3xl shadow-2xl transition-all duration-500 ease-in-out ${
                      card.bgColor
                    }`}
                    style={{
                      zIndex,
                      transform: `translateY(${
                        translateY
                      }px) scale(${scale})`,
                      opacity,
                      pointerEvents: isActive ? 'auto' : 'none'
                    }}
                  >
                    <div className="h-full flex flex-col items-center justify-center p-8 text-center">
                      <h3 className="text-white text-4xl font-bold mb-4">
                        {card.greeting}
                      </h3>
                      <p className="text-white/90 text-xl font-medium">
                        {card.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Card Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {cardConfigs.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentCard(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentCard ? 'w-8 bg-[#218091]' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to card ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;