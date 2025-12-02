import React from 'react';
import TestimonialsSection from '../components/TestimonialsSection';
import { Star, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonials = () => {
  const stats = [
    {
      icon: Users,
      value: '50+',
      label: 'Happy Clients'
    },
    {
      icon: TrendingUp,
      value: '300%',
      label: 'Average Traffic Increase'
    },
    {
      icon: Star,
      value: '4.9/5',
      label: 'Client Satisfaction'
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 px-4 gradient-hero">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="heading-1 mb-6">Client Success Stories</h1>
          <p className="body-large text-[#83928c] max-w-2xl mx-auto">
            Real results from real businesses across Gujarat
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-[#F5F5F1] rounded-2xl"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8FEC78] to-[#81DD67] flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                  <div className="text-4xl font-bold text-[#218091] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-[#83928c]">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <TestimonialsSection />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-2 mb-6">Be Our Next Success Story</h2>
          <p className="body-large text-[#83928c] mb-8">
            Join manufacturing and healthcare businesses ranking #1 in Gujarat
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full text-white font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl active:scale-95"
            style={{
              background:
                'linear-gradient(to bottom right, #8FEC78, #81DD67)'
            }}
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;