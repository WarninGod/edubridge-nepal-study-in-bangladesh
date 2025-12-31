import React from 'react';
import { MessageCircle, Star } from 'lucide-react';
import { TESTIMONIALS } from '../../constants';

export const StoriesSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">Success Stories</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Real students, real achievements. Hear directly from those who've walked the path before you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col"
            >
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-[#0A2647]">{testimonial.name}</h3>
                  <p className="text-sm text-[#146C94] font-semibold">{testimonial.course}</p>
                  <p className="text-xs text-slate-500">{testimonial.batch}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-[#F2672E] text-[#F2672E]"
                  />
                ))}
              </div>

              <p className="text-slate-600 mb-4 flex-1 italic">"{testimonial.quote}"</p>

              <div className="text-xs font-semibold text-[#146C94] bg-blue-50 p-2 rounded inline-block">
                {testimonial.university}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
