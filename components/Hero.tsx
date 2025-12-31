import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { HERO_IMAGES } from '../constants';
import { useImageCarousel } from '../hooks';
import { usePageContext } from '../contexts/PageContext';

export const Hero: React.FC = () => {
  const { setPage } = usePageContext();
  const currentImageIndex = useImageCarousel(HERO_IMAGES);

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#EAF4F9] skew-x-12 translate-x-32 hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#146C94] text-xs font-bold uppercase tracking-wide mb-6">
              <ShieldCheck size={14} />
              <span>NMC & BMDC Recognized Universities</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#0A2647] leading-tight mb-6">
              Your Medical Dream, <br/>
              <span className="text-[#146C94]">Our Trusted Guidance.</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Secure your admission in Bangladesh's top Medical and Engineering universities with our transparent, all-in-one support packages. We turn your ambition into a degree.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setPage('contact')}
                className="inline-flex justify-center items-center gap-2 bg-[#F2672E] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#d9551e] transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Your Application
                <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => setPage('packages')}
                className="inline-flex justify-center items-center gap-2 bg-white text-[#0A2647] border-2 border-[#0A2647] px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition-colors"
              >
                View Packages
              </button>
            </div>
            
            <div className="mt-10 flex items-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                1000+ Students Placed
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                100% Visa Success Rate
              </div>
            </div>
          </div>

          {/* Hero Image Carousel */}
          <div className="relative">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-[400px] md:h-[500px]">
               {HERO_IMAGES.map((img, index) => (
                 <img 
                   key={index}
                   src={img} 
                   alt={`Education in Bangladesh ${index + 1}`} 
                   className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                     index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                   }`}
                 />
               ))}
               
               <div className="absolute inset-0 bg-gradient-to-t from-[#0A2647]/80 via-transparent to-transparent flex items-end p-8">
                 <p className="text-white font-medium italic">"Studying at Dhaka National Medical College changed my life." — Anjali, Batch 2022</p>
               </div>
             </div>
             
             {/* Carousel Indicators */}
             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
                {HERO_IMAGES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentImageIndex ? 'bg-white w-4' : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
             </div>

             {/* Floating badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block max-w-xs z-30">
                <p className="text-[#0A2647] font-bold text-lg mb-1">Local Support Office</p>
                <p className="text-slate-500 text-sm">We have our own representatives in Dhaka to help you settle in.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};