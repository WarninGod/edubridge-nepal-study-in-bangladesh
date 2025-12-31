import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { usePageContext } from '../contexts/PageContext';

export const Header: React.FC = () => {
  const { currentPage, setPage } = usePageContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: Page) => {
    setPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleNavClick('home')}
        >
          <img src="/SHL.png" alt="SHL Logo" className="h-14 md:h-16 w-auto object-contain" />
          <div className="flex flex-col">
            <span className="text-xl font-bold text-[#0A2647] leading-none">Students Helpline</span>
            <span className="text-xs text-[#146C94] font-medium tracking-wide">NEPAL</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-medium transition-colors hover:text-[#F2672E] ${
                currentPage === item.id ? 'text-[#0A2647] font-bold' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Call Button (Desktop) */}
        <a 
          href="tel:+977011234567"
          className="hidden md:flex items-center gap-2 bg-[#146C94] text-white px-5 py-2.5 rounded-full hover:bg-[#0A2647] transition-all shadow-md text-sm font-semibold"
        >
          <Phone size={16} />
          <span>Call Support</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-xl py-4 flex flex-col animate-in slide-in-from-top-2">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-6 py-3 text-left text-base font-medium ${
                currentPage === item.id ? 'text-[#F2672E] bg-slate-50' : 'text-slate-700'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="px-6 py-4 mt-2 border-t border-slate-100">
             <a 
              href="tel:+977011234567"
              className="flex items-center justify-center gap-2 bg-[#146C94] text-white px-5 py-3 rounded-lg w-full"
            >
              <Phone size={18} />
              <span>+977-01-1234567</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};