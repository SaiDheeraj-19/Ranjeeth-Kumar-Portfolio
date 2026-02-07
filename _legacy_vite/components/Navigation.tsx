
import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-[#F9F8F6]/90 backdrop-blur-xl border-b border-[#D9CFC7]/50">
      <div className="max-w-[1400px] mx-auto px-8 h-24 flex items-center justify-between">
        <div className="flex flex-col group cursor-default">
          <span className="text-[14px] font-bold tracking-[0.18em] text-[#0f172a] uppercase leading-none mb-1.5">
            Dr. C. Ranjeeth Kumar
          </span>
          <span className="text-[9px] text-slate-500 uppercase tracking-[0.22em] font-semibold leading-none">
            Dean & AI Strategist
          </span>
        </div>
        
        <div className="hidden md:flex gap-12 items-center">
          <div className="flex gap-10 text-[10px] uppercase tracking-[0.28em] font-bold text-slate-400">
            <a href="#profile" className="hover:text-[#0f172a] transition-all duration-300">Profile</a>
            <a href="#impact" className="hover:text-[#0f172a] transition-all duration-300">Impact</a>
            <a href="#research" className="hover:text-[#0f172a] transition-all duration-300">Research</a>
            <a href="#industry" className="hover:text-[#0f172a] transition-all duration-300">Industry</a>
          </div>
          
          <div className="h-8 w-px bg-[#D9CFC7] mx-2" />
          
          <a 
            href="#contact" 
            className="px-8 py-3 border border-[#0f172a] rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#0f172a] hover:text-[#F9F8F6] transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
