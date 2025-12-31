import React from 'react';
import { Facebook, Instagram, Twitter, MapPin } from 'lucide-react';
import { usePageContext } from '../contexts/PageContext';

export const Footer: React.FC = () => {
  const { setPage } = usePageContext();
  return (
    <footer className="bg-[#0A2647] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-2xl font-bold mb-4">Students Helpline<span className="text-[#146C94]"> Nepal</span></h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Guiding Nepali students towards successful careers in medicine and engineering in Bangladesh since 2010.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F2672E] transition-colors"><Facebook size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F2672E] transition-colors"><Instagram size={16} /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#F2672E] transition-colors"><Twitter size={16} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li><button onClick={() => setPage('home')} className="hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => setPage('packages')} className="hover:text-white transition-colors">Packages</button></li>
              <li><button onClick={() => setPage('universities')} className="hover:text-white transition-colors">Top Universities</button></li>
              <li><button onClick={() => setPage('stories')} className="hover:text-white transition-colors">Student Reviews</button></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-bold mb-6">Courses</h3>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li>MBBS in Bangladesh</li>
              <li>BDS (Dental Surgery)</li>
              <li>B.Sc Engineering (CSE/Civil/EEE)</li>
              <li>B.Sc Agriculture</li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-lg font-bold mb-6">Visit Us</h3>
            <div className="flex gap-3 text-slate-300 text-sm mb-4">
              <MapPin className="shrink-0 text-[#F2672E]" size={20} />
              <p>Thapathali, Nepal</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Students Helpline Nepal. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};