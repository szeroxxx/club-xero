import React from 'react';
import { AlertCircle, Globe, TrendingDown, Bot } from 'lucide-react';

const ProblemsSection = () => {
  const problems = [
    {
      icon: AlertCircle,
      title: "98% businesses in Gujarat don't rank in Google Maps",
      description: "Even with great products/services, customers can't find them online"
    },
    {
      icon: Bot,
      title: "Missing from AI search results",
      description: "ChatGPT, Perplexity, and AI search engines can't find or recommend your business"
    },
    {
      icon: Globe,
      title: "Website alone is not enough",
      description: "Need SEO + GMB + AI optimization + Content strategy combined for real results"
    },
    {
      icon: TrendingDown,
      title: "Local SEO is complex",
      description: "NAP consistency, citations, schema markup - too many moving parts"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">The Challenge</h2>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto">
            Most businesses struggle to be found online, even when they offer excellent services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <IconComponent className="text-red-600" size={28} />
                </div>
                <h3 className="text-[#003720] font-semibold text-xl mb-3">
                  {problem.title}
                </h3>
                <p className="text-[#83928c] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;