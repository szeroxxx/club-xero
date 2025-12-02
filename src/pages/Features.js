import React from 'react';
import { features } from '../data/features';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const detailedFeatures = [
    {
      ...features[0],
      benefits: [
        'Built with Next.js for maximum performance',
        'Server-side rendering for SEO excellence',
        'Mobile-first responsive design',
        'Lightning-fast load times (< 2s)',
        'Progressive Web App capabilities'
      ]
    },
    {
      ...features[1],
      benefits: [
        'Complete profile audit and optimization',
        'Strategic keyword placement',
        'High-quality photo and video uploads',
        'Regular posts and updates',
        'Review response management'
      ]
    },
    {
      ...features[2],
      benefits: [
        'Optimized for ChatGPT and AI search engines',
        'Structured data for AI comprehension',
        'Natural language content optimization',
        'Enhanced visibility in AI-powered results',
        'Future-proof your digital presence'
      ]
    },
    {
      ...features[3],
      benefits: [
        'Top 3 ranking guarantee (Rank + Scale)',
        'Money-back assurance',
        'Proven track record',
        'Monthly progress reports',
        'Transparent metrics'
      ]
    },
    {
      ...features[4],
      benefits: [
        '50+ high-authority directories',
        'NAP consistency across all platforms',
        'Industry-specific citations',
        'Regular audits and updates',
        'Citation cleanup services'
      ]
    },
    {
      ...features[5],
      benefits: [
        'Real-time ranking dashboard',
        'Competitor analysis',
        'Traffic and conversion metrics',
        'Monthly performance reports',
        'Actionable insights'
      ]
    },
    {
      ...features[6],
      benefits: [
        'Dedicated account manager',
        'Quarterly strategy sessions',
        'Priority email support',
        'Phone consultation available',
        'Expert SEO guidance'
      ]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6">Powerful Features for Local Success</h1>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto">
            Everything you need to dominate Google Search and Google Maps in Gujarat
          </p>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {detailedFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={feature.id}
                  className={`flex flex-col ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 items-center`}
                >
                  {/* Icon & Title */}
                  <div className="flex-1">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#8FEC78] to-[#81DD67] flex items-center justify-center mb-6">
                      <IconComponent className="text-white" size={40} />
                    </div>
                    <h2 className="heading-3 mb-4">{feature.title}</h2>
                    <p className="body-medium text-[#83928c] mb-6">
                      {feature.description}
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="flex-1 bg-[#F5F5F1] rounded-2xl p-8">
                    <h3 className="text-[#003720] font-semibold text-xl mb-6">
                      Key Benefits:
                    </h3>
                    <ul className="space-y-4">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            size={20}
                            className="text-[#208B82] flex-shrink-0 mt-1"
                          />
                          <span className="text-[#0e0f0c]">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#F5F5F1]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">
            Ready to Get Started?
          </h2>
          <p className="body-large text-[#83928c] mb-8">
            Let's discuss how these features can transform your business
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
            style={{
              background:
                'linear-gradient(to bottom right, #8FEC78, #81DD67)'
            }}
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Features;