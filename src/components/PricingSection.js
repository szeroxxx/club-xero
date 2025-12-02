import React from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingPlans } from '../data/pricing';

const PricingSection = () => {
  return (
    <section className="py-20 px-4 bg-[#F5F5F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Simple, Transparent Pricing</h2>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto">
            Choose the perfect plan for your business growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 relative ${
                plan.popular
                  ? 'border-2 border-[#218091] transform md:-translate-y-4'
                  : 'border border-gray-200'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#8FEC78] to-[#81DD67] text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star size={16} fill="white" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Name */}
              <h3 className="text-[#003720] font-bold text-2xl mb-2">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#218091]">
                  {plan.price}
                </span>
                <span className="text-[#83928c] text-lg">/{plan.period}</span>
              </div>

              {/* Description */}
              <p className="text-[#83928c] text-sm mb-6">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#8FEC78]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-[#208B82]" />
                    </div>
                    <span className="text-[#0e0f0c] text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Link
                to="/contact"
                className={`block w-full text-center px-6 py-4 rounded-full font-semibold transition-all duration-200 hover:scale-105 active:scale-95 ${
                  plan.popular
                    ? 'text-white shadow-lg'
                    : 'border-2 border-[#218091] text-[#218091] hover:bg-[#218091] hover:text-white'
                }`}
                style={
                  plan.popular
                    ? {
                        background:
                          'linear-gradient(to bottom right, #8FEC78, #81DD67)'
                      }
                    : {}
                }
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <p className="text-[#83928c] mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Check size={16} className="text-[#208B82]" />
              <span className="text-[#0e0f0c]">No Long-term Contracts</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-[#208B82]" />
              <span className="text-[#0e0f0c]">Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-[#208B82]" />
              <span className="text-[#0e0f0c]">100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;