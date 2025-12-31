import React, { memo } from 'react';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';
import { usePageContext } from '../contexts/PageContext';

export const Packages: React.FC = memo(() => {
  const { setPage } = usePageContext();
  const inclusions = [
    "Admission Processing Fee",
    "Seat Booking at University",
    "Ministry of Foreign Affairs Attestation",
    "Visa Documentation & Processing",
    "Air Ticket (One Way to Dhaka)",
    "Airport Pickup in Dhaka",
    "Local SIM Card Arrangement",
    "College Hostel Placement Support"
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2647] mb-4">Transparent "All-in-One" Packages</h2>
          <p className="text-lg text-slate-600">
            We believe in total transparency. No hidden charges, no last-minute surprises. Our service charge covers the entire journey from Kathmandu to your college campus.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* The Standard Package */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col">
            <h3 className="text-2xl font-bold text-[#0A2647] mb-2">Complete Service Package</h3>
            <p className="text-slate-500 mb-8">Everything you need to get admitted.</p>
            
            <div className="space-y-4 mb-8 flex-1">
              {inclusions.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#146C94] shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mb-8">
               <p className="text-[#0A2647] text-sm font-bold text-center">
                 University Tuition Fees are paid DIRECTLY to the college account. We do not handle tuition fees.
               </p>
            </div>

            <button 
                onClick={() => setPage('contact')}
                className="w-full bg-[#0A2647] text-white py-4 rounded-xl font-bold hover:bg-[#146C94] transition-colors"
            >
              Get a Quote
            </button>
          </div>

          {/* The "What We Don't Do" - Building Trust via Honesty */}
          <div className="bg-white rounded-2xl p-8 border-2 border-slate-100 flex flex-col">
            <h3 className="text-2xl font-bold text-slate-400 mb-2">The Hidden Cost Trap</h3>
            <p className="text-slate-500 mb-8">What other agents might not tell you.</p>

            <div className="space-y-5 mb-8 flex-1">
               <div className="flex gap-4">
                 <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                 <div>
                   <h4 className="font-bold text-slate-700">No "Donation" Culture</h4>
                   <p className="text-sm text-slate-500 mt-1">We do not support colleges that ask for illegal donations or capitation fees.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                 <div>
                   <h4 className="font-bold text-slate-700">No Fake Promises</h4>
                   <p className="text-sm text-slate-500 mt-1">If your GPA isn't eligible for a scholarship, we tell you upfront.</p>
                 </div>
               </div>
               <div className="flex gap-4">
                 <XCircle className="w-6 h-6 text-red-400 shrink-0" />
                 <div>
                   <h4 className="font-bold text-slate-700">No Abandonment</h4>
                   <p className="text-sm text-slate-500 mt-1">Our job isn't done when you fly. We have local staff in Dhaka for emergencies.</p>
                 </div>
               </div>
            </div>

            <div className="mt-auto">
               <div className="p-6 bg-[#F9F9F9] rounded-xl text-center">
                 <p className="text-slate-600 font-medium mb-4">Want to know the exact breakdown of fees for your preferred college?</p>
                 <button 
                    onClick={() => setPage('contact')}
                    className="text-[#F2672E] font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all"
                 >
                   Talk to a Counselor <ArrowRight size={18} />
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});