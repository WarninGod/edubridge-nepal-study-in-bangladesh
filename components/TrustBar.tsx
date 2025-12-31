import React, { memo } from 'react';

export const TrustBar: React.FC = memo(() => {
  return (
    <section className="bg-[#0A2647] py-10">
      <div className="container mx-auto px-4">
        <p className="text-center text-blue-200 text-sm font-semibold tracking-widest uppercase mb-6">
          Recognized & Accredited By
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-80">
           {/* In a real app, these would be SVG logos of NMC, WHO, BMDC, Ministry of Education */}
           <div className="text-white text-xl font-bold flex items-center gap-2">
             <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">N</div>
             <span>Nepal Medical Council</span>
           </div>
           <div className="text-white text-xl font-bold flex items-center gap-2">
             <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">W</div>
             <span>WHO Listed</span>
           </div>
           <div className="text-white text-xl font-bold flex items-center gap-2">
             <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">B</div>
             <span>BMDC</span>
           </div>
           <div className="text-white text-xl font-bold flex items-center gap-2">
             <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">M</div>
             <span>Ministry of Education</span>
           </div>
        </div>
      </div>
    </section>
  );
});