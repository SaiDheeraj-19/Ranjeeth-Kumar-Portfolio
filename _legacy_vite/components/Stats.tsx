
import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section id="impact" className="py-32 px-8 border-y border-[#D9CFC7] bg-[#EFE9E3]/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          {STATS.map((stat, idx) => (
            <div key={idx} className="relative flex flex-col items-start group">
              <div className="text-[11px] font-bold text-[#D9CFC7] mb-6 tracking-[0.2em] uppercase">Impact Metric 0{idx + 1}</div>
              <div className="flex items-baseline gap-2 mb-4">
                <h3 className="text-6xl font-serif font-bold text-[#0f172a] group-hover:text-[#C9B59C] transition-colors duration-500">
                  {stat.value}
                </h3>
              </div>
              <h4 className="text-[12px] text-[#0f172a] font-bold uppercase tracking-[0.15em] mb-4 min-h-[1.5em] leading-tight">
                {stat.label}
              </h4>
              <p className="text-[13px] text-slate-500 leading-relaxed font-light">
                {stat.description}
              </p>
              {/* Custom vertical accent */}
              <div className="absolute top-0 -left-8 w-px h-full bg-[#D9CFC7]/30 group-hover:bg-[#C9B59C] transition-all duration-700 hidden lg:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
