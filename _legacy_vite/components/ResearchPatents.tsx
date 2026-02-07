
import React from 'react';
import { PUBLICATIONS, PATENTS } from '../constants';

const ResearchPatents: React.FC = () => {
  return (
    <section id="research" className="py-32 px-8 bg-[#EFE9E3]/30">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-3xl">
            <h2 className="text-[10px] uppercase tracking-[0.4em] text-[#C9B59C] font-bold mb-8">Knowledge Economy</h2>
            <h3 className="text-5xl lg:text-6xl font-serif font-bold text-[#0f172a] tracking-tight">Academic Integrity & <span className="text-[#C9B59C]">Intellectual Assets.</span></h3>
          </div>
          <a href="#" className="pb-2 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 hover:text-[#0f172a] flex items-center gap-3 transition-all group border-b border-transparent hover:border-[#0f172a]">
            View Scholarship Repository <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold mb-12 flex items-center gap-6">
              Curated Publications <div className="h-px flex-1 bg-[#D9CFC7]/50" />
            </h4>
            <div className="space-y-16">
              {PUBLICATIONS.map((pub, idx) => (
                <div key={idx} className="group relative pl-8 border-l border-[#D9CFC7] hover:border-[#0f172a] transition-all duration-500">
                  <div className="flex flex-wrap gap-4 mb-4">
                    <span className="text-[9px] font-bold text-[#C9B59C] bg-[#C9B59C]/10 border border-[#C9B59C]/20 px-3 py-1 rounded-full uppercase tracking-widest">{pub.type}</span>
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest self-center">{pub.journal} • {pub.year}</span>
                  </div>
                  <h5 className="text-2xl font-serif font-bold text-[#0f172a] leading-snug group-hover:translate-x-1 transition-transform">
                    {pub.title}
                  </h5>
                  <p className="text-[12px] text-slate-500 mt-3 font-medium uppercase tracking-wider">{pub.impact}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-12 rounded-[2rem] border border-[#D9CFC7] shadow-sm sticky top-32">
              <h4 className="text-[10px] uppercase tracking-[0.25em] text-slate-400 font-bold mb-12">Granted & Published Patents</h4>
              <div className="space-y-10">
                {PATENTS.map((patent, idx) => (
                  <div key={idx} className="flex gap-8 items-start group">
                    <div className="w-12 h-12 rounded-xl bg-[#F9F8F6] flex-shrink-0 flex items-center justify-center border border-[#D9CFC7] group-hover:bg-[#0f172a] group-hover:text-white transition-all duration-500">
                      <span className="font-serif italic font-bold text-lg">{idx + 1}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[9px] uppercase font-bold text-[#C9B59C] tracking-widest">{patent.status}</span>
                        <div className="w-1 h-1 rounded-full bg-[#D9CFC7]" />
                        <span className="text-[9px] uppercase font-bold text-slate-400 tracking-widest">{patent.domain}</span>
                      </div>
                      <p className="text-[16px] font-bold text-[#0f172a] leading-snug group-hover:text-[#C9B59C] transition-colors">{patent.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPatents;
