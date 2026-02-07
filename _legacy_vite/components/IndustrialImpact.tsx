
import React from 'react';
import { CLIENTS } from '../constants';

const IndustrialImpact: React.FC = () => {
  return (
    <section id="industry" className="py-32 px-8 bg-[#F9F8F6]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-24 items-start mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#C9B59C] font-bold mb-8">Executive Partnerships</h2>
            <h3 className="text-5xl lg:text-6xl font-serif font-bold leading-[1.1] text-[#0f172a] mb-10 tracking-tight">
              Delivering <span className="italic font-medium text-slate-400">Competitive Edge</span> via Intelligence.
            </h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12 font-light">
              Dr. Kumar provides specialized AI consultancy for organizations where failure is not an option. 
              From Rolls-Royce visual inspection to GE Healthcare diagnostics, he translates PhD-level research 
              into high-ROI industrial assets.
            </p>
            
            <div className="pt-10 border-t border-[#D9CFC7]">
              <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-6">Strategic Institutional Links</p>
              <div className="flex flex-wrap gap-12 grayscale opacity-40 hover:opacity-100 transition-opacity duration-700">
                {['Rolls-Royce', 'GE', 'L&T', 'Schlumberger'].map((brand, i) => (
                  <span key={i} className="text-sm font-bold tracking-tighter text-[#0f172a]">{brand}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            {CLIENTS.map((client, idx) => (
              <div key={idx} className="group p-10 bg-white border border-[#D9CFC7] rounded-[1.5rem] hover:shadow-[0_40px_80px_-24px_rgba(0,0,0,0.08)] transition-all duration-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[9px] font-bold text-[#C9B59C] uppercase tracking-widest border border-[#C9B59C]/30 px-2 py-0.5 rounded">Case Study 0{idx+1}</span>
                    <div className="h-px w-8 bg-[#D9CFC7]" />
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-[#0f172a] group-hover:text-[#C9B59C] transition-colors">
                    {client.name}
                  </h4>
                  <p className="text-[14px] text-slate-500 mt-2 font-light leading-relaxed max-w-md">{client.project}</p>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#D9CFC7] flex items-center justify-center text-[#0f172a] group-hover:bg-[#0f172a] group-hover:text-white transition-all duration-500">
                  <span className="text-lg">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrialImpact;
