import React from 'react';
import { Search, Settings, TrendingUp } from 'lucide-react';

const SolutionsSection = () => {
  const solutions = [
    {
      step: '01',
      icon: Search,
      title: 'Audit',
      description: 'Complete GMB profile analysis, website SEO health check, and competitor research',
      features: [
        'GMB Profile Analysis',
        'Website Technical Audit',
        'Competitor Research',
        'Keyword Opportunity Mapping'
      ]
    },
    {
      step: '02',
      icon: Settings,
      title: 'Optimize',
      description: 'GMB profile setup, website technical SEO, AI search optimization, schema markup, and local citations building',
      features: [
        'GMB Profile Optimization',
        'AI Search Engine Optimization',
        'Technical SEO Implementation',
        'Schema Markup Setup',
        '50+ Local Citations'
      ]
    },
    {
      step: '03',
      icon: TrendingUp,
      title: 'Rank',
      description: 'Content strategy execution, monthly tracking, and review management with guaranteed results',
      features: [
        'Content Strategy',
        'Monthly Ranking Tracking',
        'Review Management',
        'Guaranteed Top 3 or Money Back'
      ]
    }
  ];

  return (
    <section className="py-20 px-4 bg-[#F5F5F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">How ClubXero Works</h2>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto">
            Our proven 3-step process to dominate local search
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-[#8FEC78]/20">
                  {solution.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8FEC78] to-[#81DD67] flex items-center justify-center mb-6 relative z-10">
                  <IconComponent className="text-white" size={32} />
                </div>

                {/* Content */}
                <h3 className="text-[#003720] font-bold text-2xl mb-3">
                  {solution.title}
                </h3>
                <p className="text-[#83928c] mb-6 leading-relaxed">
                  {solution.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[#0e0f0c]">
                      <span className="text-[#208B82] mt-1 flex-shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;