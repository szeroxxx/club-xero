import React from 'react';
import { testimonials } from '../data/testimonials';

const TestimonialsSection = () => {
  // Split testimonials into 3 columns for animation
  const column1 = testimonials.filter((_, i) => i % 3 === 0);
  const column2 = testimonials.filter((_, i) => i % 3 === 1);
  const column3 = testimonials.filter((_, i) => i % 3 === 2);

  const TestimonialCard = ({ testimonial }) => (
    <div
      className="bg-white rounded-3xl p-6 shadow-md border border-gray-200/50 mb-4"
      style={{
        minHeight: '200px'
      }}
    >
      <p className="text-[#0e0f0c] text-sm leading-relaxed mb-4">
        "{testimonial.text}"
      </p>
      <div className="flex items-center gap-3">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="text-[#003720] font-semibold text-sm">{testimonial.name}</p>
          <p className="text-[#83928c] text-xs">
            {testimonial.role}
            {testimonial.company && ` - ${testimonial.company}`}
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <section className="py-20 px-4 bg-[#F5F5F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">What Clients Say</h2>
          <p className="body-large text-[#83928c]">
            Success stories from manufacturing & healthcare businesses across Gujarat
          </p>
        </div>

        {/* Desktop: 3 Columns with Animation */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 overflow-hidden">
          {/* Column 1 */}
          <div className="space-y-4 animate-scroll-up" style={{ animationDuration: '15s' }}>
            {[...column1, ...column1].map((testimonial, index) => (
              <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-4 animate-scroll-down" style={{ animationDuration: '19s' }}>
            {[...column2, ...column2].map((testimonial, index) => (
              <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-4 animate-scroll-up" style={{ animationDuration: '17s' }}>
            {[...column3, ...column3].map((testimonial, index) => (
              <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Mobile: Single Column */}
        <div className="md:hidden space-y-4">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-up {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scroll-down {
          0% {
            transform: translateY(-50%);
          }
          100% {
            transform: translateY(0);
          }
        }

        .animate-scroll-up {
          animation: scroll-up linear infinite;
        }

        .animate-scroll-down {
          animation: scroll-down linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;