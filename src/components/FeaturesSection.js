import React from 'react';
import { features } from '../data/features';

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">Why Choose ClubXero?</h2>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto">
            Comprehensive SEO solutions backed by results and guarantees
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#218091]"
              >
                <div className="w-14 h-14 rounded-xl bg-[#8FEC78]/10 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-[#8FEC78] group-hover:to-[#81DD67] transition-all duration-300">
                  <IconComponent className="text-[#208B82] group-hover:text-white transition-colors duration-300" size={28} />
                </div>
                <h3 className="text-[#003720] font-semibold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#83928c] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;