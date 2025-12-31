import React, { memo } from 'react';
import { Wallet, HeartHandshake, Award } from 'lucide-react';

export const WhyBangladesh: React.FC = memo(() => {
  const benefits = [
    {
      icon: <Wallet className="w-12 h-12 text-[#146C94]" />,
      title: "Affordable Excellence",
      description: "Get a world-class MBBS degree at a fraction of the cost compared to private colleges in Nepal or India. Pay in easy installments."
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-[#146C94]" />,
      title: "Cultural Similarity",
      description: "Food, language, and climate are remarkably similar to Nepal. You will feel at home from day one, allowing you to focus on studies."
    },
    {
      icon: <Award className="w-12 h-12 text-[#146C94]" />,
      title: "High Quality Education",
      description: "Universities follow the same British curriculum as Nepal. High patient flow in hospitals ensures superior clinical training."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">Why Choose Bangladesh?</h2>
          <p className="text-slate-600 text-lg">
            For decades, Bangladesh has been the top choice for Nepali students. Here is why thousands of doctors and engineers graduate from there every year.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:border-[#146C94] transition-all hover:shadow-lg group">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A2647] mb-3">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});