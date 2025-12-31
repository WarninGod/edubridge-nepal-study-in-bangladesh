import React from 'react';
import { ArrowRight } from 'lucide-react';
import { UNIVERSITIES } from '../../constants';
import { usePageContext } from '../../contexts/PageContext';

export const UniversitiesPage: React.FC = () => {
  const { setPage } = usePageContext();

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-12 text-center">Top Partner Universities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {UNIVERSITIES.map((uni) => (
            <div key={uni.id} className="group overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-100 flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 relative overflow-hidden">
                <img src={uni.image} alt={uni.name} className="w-full h-48 md:h-full object-cover transition-transform group-hover:scale-105" />
                <div className="absolute top-4 left-4 bg-[#F2672E] text-white text-xs font-bold px-3 py-1 rounded-full">{uni.type}</div>
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#0A2647] mb-2">{uni.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">📍 {uni.location}</p>
                  <div className="space-y-2">
                    {uni.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-[#146C94] font-bold">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setPage('contact')}
                  className="mt-4 flex items-center gap-2 text-[#F2672E] font-semibold hover:text-[#0A2647] transition-colors"
                >
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
