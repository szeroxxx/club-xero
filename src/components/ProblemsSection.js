import React, { useState } from 'react';
import { AlertCircle, Globe, TrendingDown, Bot } from 'lucide-react';

const ProblemsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const problems = [
    {
      icon: AlertCircle,
      title: "98% businesses in Gujarat don't rank in Google Maps",
      description: "Even with great products/services, customers can't find them online",
      gradient: "from-red-500 to-orange-500",
      bgGradient: "from-red-50 to-orange-50"
    },
    {
      icon: Bot,
      title: "Missing from AI search results",
      description: "ChatGPT, Perplexity, and AI search engines can't find or recommend your business",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Globe,
      title: "Website alone is not enough",
      description: "Need SEO + GMB + AI optimization + Content strategy combined for real results",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: TrendingDown,
      title: "Local SEO is complex",
      description: "NAP consistency, citations, schema markup - too many moving parts",
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-50 to-yellow-50"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-red-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with animated underline */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="heading-2 mb-4 relative">
              The Challenge
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 rounded-full"></div>
            </h2>
          </div>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto mt-6">
            Most businesses struggle to be found online, even when they offer excellent services
          </p>
        </div>

        {/* Problems Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                {/* Card with gradient border effect */}
                <div className={`relative h-full bg-white rounded-3xl p-8 transition-all duration-500 ${
                  isHovered ? 'shadow-2xl -translate-y-2' : 'shadow-md'
                }`}>
                  {/* Gradient border on hover */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${problem.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                  
                  {/* Animated background gradient */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${problem.bgGradient} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${problem.gradient} flex items-center justify-center mb-6 transform transition-all duration-500 ${
                      isHovered ? 'scale-110 rotate-6' : 'scale-100 rotate-0'
                    }`}>
                      <IconComponent className="text-white" size={32} />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-[#003720] font-bold text-xl mb-3 leading-tight">
                      {problem.title}
                    </h3>
                    <p className="text-[#83928c] leading-relaxed">
                      {problem.description}
                    </p>

                    {/* Decorative corner accent */}
                    <div className={`absolute top-4 right-4 w-20 h-20 bg-gradient-to-br ${problem.gradient} opacity-5 rounded-full transition-all duration-500 ${
                      isHovered ? 'scale-150 opacity-10' : 'scale-100 opacity-5'
                    }`}></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProblemsSection;